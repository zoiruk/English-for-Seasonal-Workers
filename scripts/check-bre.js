/* check-bre.js — British-English guard.
   The course is BrE-strict; a zero-English learner can't catch American drift
   (the "Good job" vs "Well done" class). Flags common Americanisms (words +
   spellings) in ANY English the learner sees: lessons, reader, phrasebook.
   Conservative whole-word/whole-phrase list — only items that are unambiguously
   American in this farm/ESL register. Deterministic, offline. Runs in `npm run audit`. */
const { escapeRe } = require("./lib");
const LESSONS = require("../app/data.js");
const PHRASEBOOK = safeReq("../app/phrasebook.js");
const BOOKS = safeReq("../app/reader.js");
const SCENARIOS = safeReq("../app/scenarios.js");
function safeReq(p) { try { return require(p) || []; } catch (e) { return []; } }

// American -> British. Whole word / whole phrase, case-insensitive.
const BRE = [
  ["good job", "well done"], ["apartment", "flat"], ["trash", "rubbish"], ["garbage", "rubbish"],
  ["sidewalk", "pavement"], ["elevator", "lift"], ["vacation", "holiday"], ["candy", "sweets"],
  ["cookie", "biscuit"], ["cookies", "biscuits"], ["soccer", "football"], ["gotten", "got"],
  ["diaper", "nappy"], ["faucet", "tap"], ["flashlight", "torch"], ["sweater", "jumper"],
  ["sneakers", "trainers"], ["movie", "film"], ["movies", "films"], ["restroom", "toilet"],
  ["parking lot", "car park"], ["gas station", "petrol station"], ["gasoline", "petrol"],
  ["zip code", "postcode"], ["cell phone", "mobile phone"], ["cellphone", "mobile phone"],
  ["eraser", "rubber"], ["fries", "chips"], ["drugstore", "chemist"], ["math", "maths"], ["zee", "zed"],
  // American spellings
  ["color", "colour"], ["colors", "colours"], ["flavor", "flavour"], ["flavors", "flavours"],
  ["favor", "favour"], ["favorite", "favourite"], ["center", "centre"], ["liter", "litre"],
  ["liters", "litres"], ["labor", "labour"], ["honor", "honour"], ["gray", "grey"],
];
const RE = BRE.map(([us, uk]) => [new RegExp("\\b" + escapeRe(us) + "\\b", "i"), us, uk]);

const errors = [];
function scan(loc, text) {
  if (!text) return;
  const s = String(text);
  for (const [re, us, uk] of RE)
    if (re.test(s)) errors.push(`${loc}: American "${us}" → British "${uk}"  — in: "${s.trim()}"`);
}

LESSONS.forEach((l) => {
  const g = l.grammar || {};
  (l.words || []).forEach((w, i) => scan(`L${l.id} words[${i}]`, w.en));
  (g.examples || []).forEach((x, i) => scan(`L${l.id} grammar.examples[${i}]`, x.en));
  ((g.simple_ru && g.simple_ru.examples) || []).forEach((x, i) => scan(`L${l.id} simple_ru[${i}]`, x.en));
  ["positive", "negative", "question"].forEach((f) =>
    (((g.forms && g.forms[f] && g.forms[f].table)) || []).forEach((r, i) => scan(`L${l.id} ${f}.table[${i}]`, r.example))
  );
  (l.dialogue || []).forEach((x, i) => scan(`L${l.id} dialogue[${i}]`, x.en));
  (l.quiz || []).forEach((x, i) => {
    scan(`L${l.id} quiz[${i}].q`, String(x.q).replace(/\[[A-Z]+\]/g, ""));
    (x.opts || []).forEach((o) => scan(`L${l.id} quiz[${i}].opt`, o));
    (x.build || []).forEach((o) => scan(`L${l.id} quiz[${i}].build`, o));
  });
  if (l.everyday) (l.everyday.phrases || []).forEach((p, i) => scan(`L${l.id} everyday[${i}]`, p.en));
});
PHRASEBOOK.forEach((c) => (c.phrases || []).forEach((p, i) => scan(`PB ${c.cat}[${i}]`, p.en)));
BOOKS.forEach((b) => (b.chapters || []).forEach((ch) => {
  (ch.sentences || []).forEach((s, i) => scan(`Book ${b.id} ch${ch.id} sent[${i}]`, s.en));
  (ch.glossary || []).forEach((gw, i) => scan(`Book ${b.id} ch${ch.id} gloss[${i}]`, gw.en));
}));
SCENARIOS.forEach((s) => Object.keys(s.nodes || {}).forEach((nid) => {
  const n = s.nodes[nid];
  scan(`SC ${s.id}.${nid}`, n.en);
  (n.choices || []).forEach((c, i) => scan(`SC ${s.id}.${nid}.choices[${i}]`, c.en));
}));

if (!errors.length) { console.log("[check-bre] OK — 0 Americanisms"); process.exit(0); }
console.error(`[check-bre] ${errors.length} American form(s):`);
errors.forEach((e) => console.error("  " + e));
process.exit(1);
