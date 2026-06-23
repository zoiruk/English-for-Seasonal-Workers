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
  1: ["i","you","he","she","it","we","they","am","is","are","be","not","a","an","the",
      "this","that","what","where","and","from","good","to"],
  2: ["my","your","his","her","our","their","its"],
  3: ["these","those"],
  4: ["how","much","past"],
  5: ["in","on","under","behind","near","next","there"],
  6: ["do","does","me","him","us","them","always","sometimes","never"],
  7: ["now","today","tomorrow","soon","doing"],
  8: ["have","has","got"],
  9: ["some","any","here"],
  10: ["many","would","like","of"],
  11: ["which","at"],
  12: ["was","were","when"],
  13: ["did","last","ate","drank","left","bought","paid","drove"],
  14: ["can","cannot"],
  15: ["love","hate","want"],
};
const NAMES = ["ahmad","tom","sara","anna","john","ali","omar","rustam","fatima"];

function activeWhitelist(lessonId) {
  const set = new Set(NAMES);
  for (let i = 1; i <= lessonId; i++) (WHITELIST[i] || []).forEach((w) => set.add(w));
  return set;
}

function tokenize(text) {
  return String(text)
    .replace(/<[^>]*>/g, " ")
    .toLowerCase()
    .replace(/’/g, "'") // normalise curly apostrophe
    // contractions -> base form so snowball matches (A2: have got/Present Perfect/couldn't).
    // irregular n't first, then generic n't, then verb contractions and 's.
    .replace(/\bcan't\b/g, "can")
    .replace(/\bwon't\b/g, "will")
    .replace(/\bshan't\b/g, "shall")
    .replace(/n't\b/g, "")
    .replace(/'(ve|re|ll|m|d|s)\b/g, "")
    .replace(/[^a-z'\s-]/g, " ")
    .split(/\s+/)
    .map((w) => w.replace(/^['-]+|['-]+$/g, ""))
    .filter(Boolean);
}

/* crude English stemmer so snowball matches word forms (picking->pick, boxes->box) */
function stem(w) {
  if (w.length <= 3) return w;
  return w
    .replace(/ies$/, "y")
    .replace(/(ches|shes|xes|sses)$/, (m) => m.slice(0, -2))
    .replace(/([^s])s$/, "$1")
    .replace(/ing$/, "")
    .replace(/ed$/, "");
}

function escapeRe(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

function report(name, errors) {
  if (!errors.length) {
    console.log(`[${name}] OK — 0 errors`);
    return 0;
  }
  console.error(`[${name}] ${errors.length} error(s):`);
  errors.forEach((e) => console.error(`  L${e.lesson} ${e.field}: ${e.msg}`));
  return 1;
}

module.exports = { loadLessons, activeWhitelist, tokenize, stem, escapeRe, report, WHITELIST, NAMES };
