/* check-transcr-safe.js — guard against the "three → «сри»" class.
   The cyrillic `transcr` is the learner's ACTUAL input (they read it, not the
   Latin). A phonetic rendering can accidentally spell an offensive Russian word
   (real case: three → «сри», fixed to «фри», commit 1f1838d). Scans every transcr
   field for offensive Russian substrings. Literal match (spaces kept) so e.g.
   "who is" → «ху из» does NOT trip «хуи». Deterministic, offline. In `npm run audit`. */
const LESSONS = require("../app/data.js");
const PHRASEBOOK = safeReq("../app/phrasebook.js");
const BOOKS = safeReq("../app/reader.js");
const SCENARIOS = safeReq("../app/scenarios.js");
const PHONETICS = safeReq("../app/phonetics.js");
const READING = safeReq("../app/reading.js");
function safeReq(p) { try { return require(p) || []; } catch (e) { return []; } }

// Offensive Russian stems. Tight list (high-severity, low false-positive).
const RUDE = [
  "хуй", "хуе", "хуё", "хуя", "пизд", "бля", "ебл", "ёба", "ёбн", "еба", "ебу", "ебё",
  "ебан", "ебат", "заеб", "сра", "сри", "ссык", "говн", "гондон", "залуп", "пидор",
  "пидар", "мудак", "дроч", "сука",
  // "sheet" /ʃiːt/ → «шит» is offensive; use «шиит» (double-i preserves /iː/ length
  // and avoids the offensive sequence — «шиит» does NOT contain «шит» as substring).
  "шит",
];

const errors = [];
function scan(loc, transcr) {
  if (!transcr) return;
  const s = String(transcr).toLowerCase();
  for (const bad of RUDE)
    if (s.indexOf(bad) >= 0) errors.push(`${loc}: transcr «${String(transcr).trim()}» contains offensive «${bad}»`);
}

LESSONS.forEach((l) => {
  const g = l.grammar || {};
  (l.words || []).forEach((w, i) => scan(`L${l.id} words[${i}] (${w.en})`, w.transcr));
  (l.glossary || []).forEach((gw, i) => scan(`L${l.id} glossary[${i}] (${gw.en})`, gw.transcr));
  (g.examples || []).forEach((x, i) => scan(`L${l.id} grammar.examples[${i}]`, x.transcr));
  ((g.simple_ru && g.simple_ru.examples) || []).forEach((x, i) => scan(`L${l.id} simple_ru[${i}]`, x.transcr));
  ["positive", "negative", "question"].forEach((f) =>
    (((g.forms && g.forms[f] && g.forms[f].table)) || []).forEach((r, i) => scan(`L${l.id} ${f}.table[${i}]`, r.transcr))
  );
  (l.dialogue || []).forEach((x, i) => scan(`L${l.id} dialogue[${i}]`, x.transcr));
  if (l.everyday) (l.everyday.phrases || []).forEach((p, i) => scan(`L${l.id} everyday[${i}]`, p.transcr));
});
PHRASEBOOK.forEach((c) => (c.phrases || []).forEach((p, i) => scan(`PB ${c.cat}[${i}] (${p.en})`, p.transcr)));
BOOKS.forEach((b) => (b.chapters || []).forEach((ch) =>
  (ch.glossary || []).forEach((gw, i) => scan(`Book ${b.id} ch${ch.id} gloss[${i}] (${gw.en})`, gw.transcr))
));
SCENARIOS.forEach((s) => Object.keys(s.nodes || {}).forEach((nid) => {
  const n = s.nodes[nid];
  scan(`SC ${s.id}.${nid}`, n.transcr);
  (n.choices || []).forEach((c, i) => scan(`SC ${s.id}.${nid}.choices[${i}]`, c.transcr));
}));
PHONETICS.forEach((s) => {
  (s.model || []).forEach((w, i) => scan(`PH ${s.id} model[${i}] (${w.en})`, w.transcr));
  (s.pairs || []).forEach((p, i) => {
    scan(`PH ${s.id} pairs[${i}].a (${p.a.en})`, p.a.transcr);
    scan(`PH ${s.id} pairs[${i}].b (${p.b.en})`, p.b.transcr);
  });
  (s.stress || []).forEach((w, i) => scan(`PH ${s.id} stress[${i}] (${w.en})`, w.transcr));
});
READING.forEach((blk) => {
  (blk.patterns || []).forEach((p, i) => scan(`RD ${blk.id} patterns[${i}] (${p.example.en})`, p.example.transcr));
  (blk.check || []).forEach((c, i) => scan(`RD ${blk.id} check[${i}] (${c.word.en})`, c.word.transcr));
  (blk.ipa || []).forEach((r, i) => scan(`RD ${blk.id} ipa[${i}] (${r.en})`, r.transcr)); // reference chart
  (blk.letters || []).forEach((r, i) => scan(`RD ${blk.id} letters[${i}] (${r.L})`, r.name)); // alphabet reference
});

if (!errors.length) { console.log("[check-transcr-safe] OK — 0 offensive transcr"); process.exit(0); }
console.error(`[check-transcr-safe] ${errors.length} offensive transcr(s):`);
errors.forEach((e) => console.error("  " + e));
process.exit(1);
