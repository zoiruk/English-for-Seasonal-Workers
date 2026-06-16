/* Vocabulary uniqueness: an English word lives in exactly one lesson. */
const { loadLessons, report } = require("./lib");
const L = loadLessons();
const errors = [];
const seen = {};

for (const les of L) {
  (les.words || []).forEach((x, i) => {
    const k = String(x.en || "").trim().toLowerCase();
    if (!k) return;
    if (seen[k] !== undefined) {
      errors.push({ lesson: les.id, field: `words[${i}].en`, msg: `"${x.en}" already in lesson ${seen[k]}` });
    } else {
      seen[k] = les.id;
    }
  });
}

process.exit(report("dedup", errors));
