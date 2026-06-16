/* Structure & completeness audit. Exit 1 if any lesson is incomplete. */
const { loadLessons, report } = require("./lib");
const L = loadLessons();
const errors = [];
const TAGS = ["[COMPLETE]", "[TRANSLATE]", "[NEGATIVE]", "[CORRECT]", "[QUESTION]"];

for (const les of L) {
  const id = les.id;

  // --- words: >=30, full fields, no grouping ---
  const w = les.words || [];
  if (w.length < 30) errors.push({ lesson: id, field: "words", msg: `need >=30, got ${w.length}` });
  w.forEach((x, i) => {
    ["e", "en", "transcr", "ru", "pn"].forEach((k) => {
      if (!x[k]) errors.push({ lesson: id, field: `words[${i}].${k}`, msg: "missing" });
    });
    if (x.en && /[,/]/.test(x.en)) errors.push({ lesson: id, field: `words[${i}].en`, msg: `grouped word "${x.en}"` });
  });

  // --- dialogue: >=10, speakers, alternation, length, transcr ---
  const d = les.dialogue || [];
  if (d.length < 10) errors.push({ lesson: id, field: "dialogue", msg: `need >=10, got ${d.length}` });
  d.forEach((x, i) => {
    if (!["m", "w", "c", "d"].includes(x.s)) errors.push({ lesson: id, field: `dialogue[${i}].s`, msg: `bad speaker "${x.s}"` });
    if (!x.transcr) errors.push({ lesson: id, field: `dialogue[${i}].transcr`, msg: "missing" });
    const wc = String(x.en || "").trim().split(/\s+/).filter(Boolean).length;
    if (x.en && (wc < 3 || wc > 15)) errors.push({ lesson: id, field: `dialogue[${i}]`, msg: `length ${wc} not in 3-15` });
    if (i > 0 && d[i - 1].s === x.s) errors.push({ lesson: id, field: `dialogue[${i}].s`, msg: "no alternation" });
  });

  // --- grammar: 3 forms with tables, >=10 examples total, intro/cultural/note, transcr ---
  const g = les.grammar || {};
  ["intro_ru", "cultural_ru", "note_ru"].forEach((k) => {
    if (!g[k]) errors.push({ lesson: id, field: `grammar.${k}`, msg: "missing" });
  });
  const forms = g.forms || {};
  let exCount = (g.examples || []).length;
  ["positive", "negative", "question"].forEach((f) => {
    if (!forms[f]) { errors.push({ lesson: id, field: `grammar.forms.${f}`, msg: "missing" }); return; }
    if (!Array.isArray(forms[f].table)) errors.push({ lesson: id, field: `grammar.forms.${f}.table`, msg: "missing" });
    else exCount += forms[f].table.length;
  });
  if (exCount < 10) errors.push({ lesson: id, field: "grammar examples", msg: `need >=10 total, got ${exCount}` });
  (g.examples || []).forEach((x, i) => {
    if (!x.transcr) errors.push({ lesson: id, field: `grammar.examples[${i}].transcr`, msg: "missing" });
  });

  // --- quiz: >=10, [TAG], 4 opts, correct index, expl ---
  const q = les.quiz || [];
  if (q.length < 10) errors.push({ lesson: id, field: "quiz", msg: `need >=10, got ${q.length}` });
  q.forEach((x, i) => {
    if (!TAGS.some((t) => String(x.q || "").includes(t))) errors.push({ lesson: id, field: `quiz[${i}].q`, msg: "missing [TAG]" });
    if (!Array.isArray(x.opts) || x.opts.length !== 4) errors.push({ lesson: id, field: `quiz[${i}].opts`, msg: "need 4 options" });
    if (typeof x.c !== "number") errors.push({ lesson: id, field: `quiz[${i}].c`, msg: "missing correct index" });
    if (!x.expl) errors.push({ lesson: id, field: `quiz[${i}].expl`, msg: "missing" });
  });
}

process.exit(report("audit", errors));
