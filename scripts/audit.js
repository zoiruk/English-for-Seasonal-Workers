/* Structure & completeness audit. Exit 1 if any lesson is incomplete. */
const { loadLessons, escapeRe, report } = require("./lib");
const L = loadLessons();
const errors = [];
const TAGS = ["[COMPLETE]", "[TRANSLATE]", "[NEGATIVE]", "[CORRECT]", "[QUESTION]", "[LISTEN]", "[GIST]", "[BUILD]"];

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

  // --- dialogue: >=10, speakers, alternation, length, transcr, no repeated lines ---
  const d = les.dialogue || [];
  if (d.length < 10) errors.push({ lesson: id, field: "dialogue", msg: `need >=10, got ${d.length}` });
  const seenLine = {};
  d.forEach((x, i) => {
    if (!["m", "w", "c", "d"].includes(x.s)) errors.push({ lesson: id, field: `dialogue[${i}].s`, msg: `bad speaker "${x.s}"` });
    if (!x.transcr) errors.push({ lesson: id, field: `dialogue[${i}].transcr`, msg: "missing" });
    const wc = String(x.en || "").trim().split(/\s+/).filter(Boolean).length;
    if (x.en && (wc < 3 || wc > 15)) errors.push({ lesson: id, field: `dialogue[${i}]`, msg: `length ${wc} not in 3-15` });
    if (i > 0 && d[i - 1].s === x.s) errors.push({ lesson: id, field: `dialogue[${i}].s`, msg: "no alternation" });
    const k = String(x.en || "").trim().toLowerCase();
    if (k && seenLine[k] !== undefined) errors.push({ lesson: id, field: `dialogue[${i}]`, msg: `repeats line ${seenLine[k]}` });
    else seenLine[k] = i;
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

  // --- grammar "explain simpler" help (optional): formula + >=1 mini-example, ytQuery a string ---
  if (g.simple_ru) {
    const s = g.simple_ru;
    if (!s.formula) errors.push({ lesson: id, field: "grammar.simple_ru.formula", msg: "missing" });
    if (!Array.isArray(s.examples) || s.examples.length < 1)
      errors.push({ lesson: id, field: "grammar.simple_ru.examples", msg: `need >=1, got ${(s.examples || []).length}` });
    else s.examples.forEach((x, i) =>
      ["en", "transcr", "ru"].forEach((k) => {
        if (!x[k]) errors.push({ lesson: id, field: `grammar.simple_ru.examples[${i}].${k}`, msg: "missing" });
      })
    );
  }
  if (g.ytQuery !== undefined && typeof g.ytQuery !== "string")
    errors.push({ lesson: id, field: "grammar.ytQuery", msg: "must be a string" });

  // --- quiz: >=10, [TAG], 4 opts, correct index, expl ---
  const q = les.quiz || [];
  if (q.length < 10) errors.push({ lesson: id, field: "quiz", msg: `need >=10, got ${q.length}` });
  q.forEach((x, i) => {
    const qs = String(x.q || "");
    if (!TAGS.some((t) => qs.includes(t))) errors.push({ lesson: id, field: `quiz[${i}].q`, msg: "missing [TAG]" });
    if (!x.expl) errors.push({ lesson: id, field: `quiz[${i}].expl`, msg: "missing" });
    // [BUILD] (tap-to-build production): needs `build` = ordered word list (>=2), no opts/c
    if (qs.includes("[BUILD]")) {
      if (!Array.isArray(x.build) || x.build.length < 2)
        errors.push({ lesson: id, field: `quiz[${i}].build`, msg: `need >=2 words, got ${(x.build || []).length}` });
      else x.build.forEach((w, j) => {
        if (typeof w !== "string" || !w.trim()) errors.push({ lesson: id, field: `quiz[${i}].build[${j}]`, msg: "empty/invalid word" });
      });
      return;
    }
    if (!Array.isArray(x.opts) || x.opts.length !== 4) errors.push({ lesson: id, field: `quiz[${i}].opts`, msg: "need 4 options" });
    else if (new Set(x.opts.map((o) => String(o).trim().toLowerCase())).size !== 4)
      errors.push({ lesson: id, field: `quiz[${i}].opts`, msg: "duplicate options" });
    if (typeof x.c !== "number") errors.push({ lesson: id, field: `quiz[${i}].c`, msg: "missing correct index" });
    else if (Array.isArray(x.opts) && (x.c < 0 || x.c >= x.opts.length))
      errors.push({ lesson: id, field: `quiz[${i}].c`, msg: `index ${x.c} out of range` });
    // answer-leak: correct answer must not appear verbatim in the question (TRANSLATE is exempt)
    if (Array.isArray(x.opts) && typeof x.c === "number" && x.opts[x.c] && !qs.includes("[TRANSLATE]") && !qs.includes("[LISTEN]")) {
      const ans = String(x.opts[x.c]);
      const body = qs.replace(/\[[A-Z]+\]/g, "");
      if (new RegExp("\\b" + escapeRe(ans) + "\\b", "i").test(body))
        errors.push({ lesson: id, field: `quiz[${i}].q`, msg: `answer "${ans}" leaks into question` });
    }
  });

  // --- everyday functional block (optional; not snowball-checked — fixed survival chunks) ---
  if (les.everyday) {
    const ev = les.everyday;
    if (!ev.title_ru) errors.push({ lesson: id, field: "everyday.title_ru", msg: "missing" });
    if (!Array.isArray(ev.phrases) || ev.phrases.length < 3)
      errors.push({ lesson: id, field: "everyday.phrases", msg: `need >=3, got ${(ev.phrases || []).length}` });
    else ev.phrases.forEach((p, i) =>
      ["en", "transcr", "ru"].forEach((k) => {
        if (!p[k]) errors.push({ lesson: id, field: `everyday.phrases[${i}].${k}`, msg: "missing" });
      })
    );
  }
}

process.exit(report("audit", errors));
