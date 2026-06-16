/* Snowball rule: every English word used in grammar/dialogue/quiz of lesson N
   must come from words of lessons 1..N or the active function-word whitelist. */
const { loadLessons, activeWhitelist, tokenize, report } = require("./lib");
const L = loadLessons();
const errors = [];
const known = new Set();

for (const les of L) {
  // current lesson's vocabulary becomes known before its own checks
  (les.words || []).forEach((x) => tokenize(x.en).forEach((t) => known.add(t)));
  const wl = activeWhitelist(les.id);
  const allowed = (t) => known.has(t) || wl.has(t) || /^\d+$/.test(t);
  const check = (text, field) =>
    tokenize(text).forEach((t) => {
      if (!allowed(t)) errors.push({ lesson: les.id, field, msg: `unknown word "${t}"` });
    });

  (les.grammar && les.grammar.examples || []).forEach((x, i) => check(x.en, `grammar.examples[${i}]`));
  ["positive", "negative", "question"].forEach((f) => {
    const table = (les.grammar && les.grammar.forms && les.grammar.forms[f] && les.grammar.forms[f].table) || [];
    table.forEach((r, i) => check(r.example, `grammar.${f}.table[${i}]`));
  });
  (les.dialogue || []).forEach((x, i) => check(x.en, `dialogue[${i}]`));
  (les.quiz || []).forEach((x, i) => {
    check(String(x.q).replace(/\[[A-Z]+\]/g, ""), `quiz[${i}].q`);
    (x.opts || []).forEach((o) => check(o, `quiz[${i}].opt`));
  });
}

process.exit(report("snowball", errors));
