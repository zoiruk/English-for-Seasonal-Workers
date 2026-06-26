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
  // L17 comparatives: grammar words (than/more/most) + irregular comparison forms
  // whose strip!=base (good->best, bad->worse/worst, heavy->heavier, easy->easier);
  // regular -er/-est forms (taller/slower/strongest) collapse via the stemmer.
  17: ["than","more","most","best","worse","worst","heavier","heaviest","easier"],
  // L18 could (past ability; couldn't->could via tokenizer) + adverbs of manner.
  // Manner adverbs are grammar/function words (plan: thin blocks -> whitelist),
  // the 30 words[] come from the machinery field. Regular -ly adverbs whose base
  // is a reader-glossary word (slowly/quickly/fast) are kept OUT (shown only in
  // prose) to avoid lesson/reader overlap; taught/used ones go here.
  18: ["could","well","carefully","safely","easily","badly","quietly","loudly"],
  // L19 have got: have/has/got already in WHITELIST[8]; 've/'s and n't are stripped
  // by the Phase 0 tokenizer (I've->i, haven't->have) so have got rides on known
  // words. No new grammar words needed.
  19: [],
  // L20 indefinite compounds: some-/any-/no-/every- with -thing/-one/-body/-where.
  // All twelve base forms + "somebody" variant are grammar/function words; the 30
  // words[] come from the CAMP/HOME-2 field. "no one" (2 words) is covered by
  // no(L1 words) + one(L4 words) without a whitelist entry.
  20: [
    "something","anything","nothing","everything",
    "someone","anyone","nobody","everybody","everyone","somebody",
    "somewhere","anywhere","nowhere","everywhere",
  ],
  // L21 infinitive of purpose: "to" already in WHITELIST[1]; "why" (purpose
  // question word) is introduced here for the first time.
  21: ["why"],
  // L22 take/get/have collocations: have/has/got already WHITELIST[8], "take"
  // is a words[] item from an earlier lesson; only "get" (obtain/arrive/become)
  // is new here. The 30 words[] come from the FOOD/COOKING-2 field.
  22: ["get"],
  // L23 Present Perfect (ever/never/yet/just): have/has are WL8; "never" is WL6.
  // New grammar markers + the participle "been" (be->been). Regular participles
  // (worked/signed/filled/finished/started) stem to known bases; "paid" is WL13.
  // since/for (duration) deliberately omitted — focus is experience + recent.
  23: ["ever", "yet", "just", "already", "been"],
  // L24 Past Continuous + Past Simple contrast: was/were/when already WL12; -ing
  // stems to the base verb. NEW = the narrative CONNECTORS (function words, recur in
  // every B1 narration -> whitelist, not the 30 thematic words). "as" is 2 letters
  // (not stemmed); "although" has no -er/-est/-ing/-ed/-s suffix so it passes the
  // stemmer untouched; whitelist matches the RAW token, so stems never apply here.
  // Narrative time adverbs (suddenly/then/later/luckily/unfortunately) are the
  // LEXICAL FOCUS and live in lesson.glossary[] (receptive, blue-tappable) instead,
  // so they get an on-tap translation on first exposure (see plan 2026-06-26-b1-scope).
  // "stopped" = surface past of the known verb stop (L11); doubled consonant makes
  // stem("stopped")="stopp"!=stop, so the form is whitelisted (doubling gotcha, like L17).
  24: ["while", "as", "so", "because", "although", "stopped"],
};
const NAMES = ["ahmad","tom","sara","anna","john","ali","omar","rustam","fatima","madina","bobur"];

/* Irregular PAST PARTICIPLES — always allowed (Passive / Present Perfect / Past
   Perfect / reported backshift). The stemmer can't fold these to their base
   (grown/taken/given/written…), so they would fall through snowball even when the
   base verb is a known word. Generalises the L23 `been` precedent into one central
   list instead of per-lesson WHITELIST entries. They never tighten snowball (only
   add allowances), so adding them keeps every green lesson green. Forms whose
   participle == base (put/cut/set/let/read/hurt/cost…) already stem to the base and
   need no entry; this list is the stem!=base set. See plan 2026-06-26-b1-scope. */
const PARTICIPLES = [
  "been","done","gone","seen","made","taken","given","grown","known","shown",
  "broken","written","driven","eaten","spoken","chosen","frozen","stolen","woken",
  "fallen","flown","drawn","worn","torn","blown","thrown","ridden","hidden","beaten",
  "forgotten","got","gotten","paid","built","sent","spent","kept","slept","felt",
  "left","lost","met","told","sold","held","heard","found","stood","understood",
  "brought","bought","thought","caught","taught","won","begun","drunk","swum","sung",
  "run","come","become","meant","made","said","read","let","set","put","cut","hurt",
];

function activeWhitelist(lessonId) {
  const set = new Set(NAMES);
  PARTICIPLES.forEach((w) => set.add(w));
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
  w = w
    .replace(/ies$/, "y")
    .replace(/(ches|shes|xes|sses)$/, (m) => m.slice(0, -2))
    .replace(/([^s])s$/, "$1")
    .replace(/ing$/, "")
    .replace(/ed$/, "");
  // A2 comparatives/superlatives: strip -er/-est so REGULAR forms collapse to the
  // base in words[] (slower->slow, tallest->tall, stronger->strong). Guard length>4
  // to protect her/per/over/user. This only ever shortens a stem, and raw forms stay
  // in `known`, so it cannot drop an existing L1-L16 match (regression-safe; verified
  // by `npm run audit`). Irregular forms where strip!=base — doubling (bigger),
  // -y (heavier/easier), silent-e (wider) — are handled via WHITELIST[17] instead.
  if (w.length > 4) w = w.replace(/est$/, "").replace(/er$/, "");
  return w;
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

module.exports = { loadLessons, activeWhitelist, tokenize, stem, escapeRe, report, WHITELIST, NAMES, PARTICIPLES };
