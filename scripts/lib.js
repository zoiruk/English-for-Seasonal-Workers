/* Shared helpers for audit scripts. */
const path = require("path");

function loadLessons() {
  const p = path.join(__dirname, "..", "app", "data.js");
  let LESSONS;
  try {
    LESSONS = require(p);
  } catch (e) {
    console.error("Cannot load app/data.js:", e.message);
    process.exit(1);
  }
  if (!Array.isArray(LESSONS)) {
    console.error("app/data.js must module.exports an array of lessons");
    process.exit(1);
  }
  return LESSONS;
}

/* Function/grammar words INTRODUCED at each lesson (snowball whitelist).
   Cumulative: a word stays known from the lesson where its grammar appears. */
const WHITELIST = {
  1: ["i","you","he","she","it","we","they","am","is","are","not","a","an","the",
      "this","that","what","where","and","from","good","my","your","me","to"],
  2: ["his","her","our","their","its"],
  3: ["him","us","them","these","those"],
};
const NAMES = ["ahmad","tom","sara","anna","john","ali","omar"];

function activeWhitelist(lessonId) {
  const set = new Set(NAMES);
  for (let i = 1; i <= lessonId; i++) (WHITELIST[i] || []).forEach((w) => set.add(w));
  return set;
}

function tokenize(text) {
  return String(text)
    .replace(/<[^>]*>/g, " ")
    .toLowerCase()
    .replace(/[^a-z'\s-]/g, " ")
    .split(/\s+/)
    .map((w) => w.replace(/^['-]+|['-]+$/g, ""))
    .filter(Boolean);
}

function report(name, errors) {
  if (!errors.length) {
    console.log(`[${name}] OK — 0 errors`);
    return 0;
  }
  console.error(`[${name}] ${errors.length} error(s):`);
  errors.forEach((e) => console.error(`  L${e.lesson} ${e.field}: ${e.msg}`));
  return 1;
}

module.exports = { loadLessons, activeWhitelist, tokenize, report, WHITELIST, NAMES };
