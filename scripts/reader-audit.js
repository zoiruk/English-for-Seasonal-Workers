/* Reader audit: graded-reader snowball + structure check for app/reader.js.
   Chapter N may use ONLY words from lessons 1..N + the active function-word
   whitelist + the chapter's own glossary[].en. Any other word = error
   (no silent unverified English in the story). Run via `npm run audit`. */
const path = require("path");
const { loadLessons, activeWhitelist, tokenize, stem } = require("./lib");

function loadReader() {
  const p = path.join(__dirname, "..", "app", "reader.js");
  let BOOKS;
  try { BOOKS = require(p); } catch (e) {
    console.error("Cannot load app/reader.js:", e.message);
    process.exit(1);
  }
  if (!Array.isArray(BOOKS)) {
    console.error("app/reader.js must module.exports an array of books");
    process.exit(1);
  }
  // flatten the shelf -> chapters (the audit runs per chapter; id == lesson id)
  return BOOKS.reduce((all, b) => all.concat(b.chapters || []), []);
}

const LESSONS = loadLessons();
const READER = loadReader();
const errors = [];
const push = (ch, field, msg) => errors.push({ lesson: ch, field, msg });

for (const ch of READER) {
  const id = ch.id;

  // --- vocabulary known up to and including lesson N (raw + stemmed) ---
  const known = new Set();
  LESSONS.filter((l) => l.id <= id).forEach((l) =>
    (l.words || []).forEach((x) =>
      tokenize(x.en).forEach((t) => { known.add(t); known.add(stem(t)); })
    )
  );
  const wl = activeWhitelist(id);

  // --- glossary: <=5, full fields, single word, used in the story ---
  const gloss = ch.glossary || [];
  if (gloss.length > 5) push(id, "glossary", `too many new words: ${gloss.length} > 5`);
  const glossSet = new Set();
  gloss.forEach((gw, i) => {
    ["en", "transcr", "pn", "ru"].forEach((k) => {
      if (!gw[k]) push(id, `glossary[${i}].${k}`, "missing");
    });
    if (gw.en && /\s/.test(gw.en.trim())) push(id, `glossary[${i}].en`, `must be a single word (v1), got "${gw.en}"`);
    if (gw.en) tokenize(gw.en).forEach((t) => { glossSet.add(t); glossSet.add(stem(t)); });
  });

  const allowed = (t) =>
    known.has(t) || known.has(stem(t)) || wl.has(t) || glossSet.has(t) || glossSet.has(stem(t)) || /^\d+$/.test(t);

  // --- sentences: each token must be covered; track used glossary words ---
  const usedGloss = new Set();
  const sents = ch.sentences || [];
  if (!sents.length) push(id, "sentences", "no sentences");
  sents.forEach((s, i) => {
    if (!s.en) push(id, `sentences[${i}].en`, "missing");
    if (!s.ru) push(id, `sentences[${i}].ru`, "missing");
    tokenize(s.en).forEach((t) => {
      if (!allowed(t)) push(id, `sentences[${i}]`, `unknown word "${t}" (not in lessons 1..${id} + whitelist + glossary)`);
      if (glossSet.has(t) || glossSet.has(stem(t))) { usedGloss.add(t); usedGloss.add(stem(t)); }
    });
  });
  gloss.forEach((gw, i) => {
    if (gw.en && !tokenize(gw.en).some((t) => usedGloss.has(t) || usedGloss.has(stem(t))))
      push(id, `glossary[${i}].en`, `glossary word "${gw.en}" never appears in the story`);
  });

  // --- quiz: 2-3 RU questions, 4 RU options, correct index in range ---
  const q = ch.quiz || [];
  if (q.length < 2 || q.length > 3) push(id, "quiz", `need 2-3 questions, got ${q.length}`);
  q.forEach((x, i) => {
    if (!x.q_ru) push(id, `quiz[${i}].q_ru`, "missing");
    if (!Array.isArray(x.opts_ru) || x.opts_ru.length !== 4) push(id, `quiz[${i}].opts_ru`, "need 4 options");
    else if (new Set(x.opts_ru.map((o) => String(o).trim().toLowerCase())).size !== 4)
      push(id, `quiz[${i}].opts_ru`, "duplicate options");
    if (typeof x.c !== "number") push(id, `quiz[${i}].c`, "missing correct index");
    else if (Array.isArray(x.opts_ru) && (x.c < 0 || x.c >= x.opts_ru.length))
      push(id, `quiz[${i}].c`, `index ${x.c} out of range`);
  });

  // --- unlock gate: a chapter must map to a real lesson id ---
  if (!LESSONS.some((l) => l.id === id)) push(id, "id", `no lesson with id ${id} (unlock gate would never open)`);
}

if (!errors.length) { console.log("[reader-audit] OK — 0 errors"); process.exit(0); }
console.error(`[reader-audit] ${errors.length} error(s):`);
errors.forEach((e) => console.error(`  Ch${e.lesson} ${e.field}: ${e.msg}`));
process.exit(1);
