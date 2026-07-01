/* check-transcr-consistency.js — extend the transcr check beyond words[].
   verify-transcr only covers words[]; drift inside examples/dialogue (real case
   L7 tomorrow «тумороу»→«тэмороу», commit ced0a86) was caught only by humans.
   This propagates each verified word's canonical cyrillic into every other
   English field: wherever an EXACT lexicon word appears in an en string, its
   canonical transcr must appear (as a substring) in that string's transcr.
   Only words >=5 letters are checked (short words reduce/coincide too easily).
   Deterministic, offline. Runs in `npm run audit`. */
const LESSONS = require("../app/data.js");
const PHRASEBOOK = safeReq("../app/phrasebook.js");
const BOOKS = safeReq("../app/reader.js");
const SCENARIOS = safeReq("../app/scenarios.js");
const PHONETICS = safeReq("../app/phonetics.js");
const READING = safeReq("../app/reading.js");
function safeReq(p) { try { return require(p) || []; } catch (e) { return []; } }

function normCyr(t) { return String(t).toLowerCase().replace(/[\s'’\-.,!?;:«»"()…]/g, ""); }
const MIN = 5; // only multi-letter content words have a stable, checkable transcr

// canonical: en(lower) -> {norm, raw} from lesson words[] + reader glossary
const canon = {};
function addCanon(en, transcr) {
  if (!en || !transcr) return;
  const k = String(en).toLowerCase();
  if (k.length >= MIN) canon[k] = { norm: normCyr(transcr), raw: String(transcr) };
}
LESSONS.forEach((l) => (l.words || []).forEach((w) => addCanon(w.en, w.transcr)));
LESSONS.forEach((l) => (l.glossary || []).forEach((g) => addCanon(g.en, g.transcr)));
BOOKS.forEach((b) => (b.chapters || []).forEach((ch) => (ch.glossary || []).forEach((g) => addCanon(g.en, g.transcr))));

const errors = [];
function check(loc, en, transcr) {
  if (!en || !transcr) return;
  const tnorm = normCyr(transcr);
  const seen = {};
  String(en).toLowerCase().split(/[^a-z']+/).forEach((tok) => {
    tok = tok.replace(/^'+|'+$/g, "");
    if (!tok || seen[tok]) return;
    seen[tok] = 1;
    const c = canon[tok];
    if (!c || !c.norm) return;
    if (tnorm.indexOf(c.norm) < 0)
      errors.push(`${loc}: "${tok}" — canonical «${c.raw}» not found in transcr «${String(transcr).trim()}»`);
  });
}

// scan every en+transcr pair EXCEPT words[] (that is the canonical source)
LESSONS.forEach((l) => {
  const g = l.grammar || {};
  (g.examples || []).forEach((x, i) => check(`L${l.id} grammar.examples[${i}]`, x.en, x.transcr));
  ((g.simple_ru && g.simple_ru.examples) || []).forEach((x, i) => check(`L${l.id} simple_ru[${i}]`, x.en, x.transcr));
  ["positive", "negative", "question"].forEach((f) =>
    (((g.forms && g.forms[f] && g.forms[f].table)) || []).forEach((r, i) => check(`L${l.id} ${f}.table[${i}]`, r.example, r.transcr))
  );
  (l.dialogue || []).forEach((x, i) => check(`L${l.id} dialogue[${i}]`, x.en, x.transcr));
  if (l.everyday) (l.everyday.phrases || []).forEach((p, i) => check(`L${l.id} everyday[${i}]`, p.en, p.transcr));
});
PHRASEBOOK.forEach((c) => (c.phrases || []).forEach((p, i) => check(`PB ${c.cat}[${i}]`, p.en, p.transcr)));
SCENARIOS.forEach((s) => Object.keys(s.nodes || {}).forEach((nid) => {
  const n = s.nodes[nid];
  check(`SC ${s.id}.${nid}`, n.en, n.transcr);
  (n.choices || []).forEach((c, i) => check(`SC ${s.id}.${nid}.choices[${i}]`, c.en, c.transcr));
}));
// phonetics trainer: NOT a canonical source — its transcr must MATCH the lexicon's
PHONETICS.forEach((s) => {
  (s.model || []).forEach((w, i) => check(`PH ${s.id} model[${i}]`, w.en, w.transcr));
  (s.pairs || []).forEach((p, i) => {
    check(`PH ${s.id} pairs[${i}].a`, p.a.en, p.a.transcr);
    check(`PH ${s.id} pairs[${i}].b`, p.b.en, p.b.transcr);
  });
  (s.stress || []).forEach((w, i) => check(`PH ${s.id} stress[${i}]`, w.en, w.transcr));
});
// reading trainer: NOT a canonical source either — its transcr must MATCH the lexicon's
READING.forEach((blk) => {
  (blk.patterns || []).forEach((p, i) => check(`RD ${blk.id} patterns[${i}]`, p.example.en, p.example.transcr));
  (blk.check || []).forEach((c, i) => check(`RD ${blk.id} check[${i}]`, c.word.en, c.word.transcr));
  (blk.ipa || []).forEach((r, i) => check(`RD ${blk.id} ipa[${i}]`, r.en, r.transcr)); // reference chart
});

if (!errors.length) { console.log("[check-transcr-consistency] OK — 0 drift"); process.exit(0); }
console.error(`[check-transcr-consistency] ${errors.length} possible drift(s):`);
errors.forEach((e) => console.error("  " + e));
process.exit(1);
