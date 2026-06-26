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
  // L25 Past Perfect (had + past participle): was/were/when already WL12; the
  // connectors (while/as/so/because/although) ride on WL24. NEW = the auxiliary
  // "had" — it is NOT "have" (WL8) and NOT in PARTICIPLES, so the past-perfect
  // auxiliary would otherwise fall through snowball. hadn't -> tokenizer strips
  // n't -> "had" (same entry). Irregular participles (gone/begun/forgotten/lost/
  // sent/won/seen/eaten/left/got/paid…) are in the central PARTICIPLES list and
  // "just work"; regular ones (started/finished/worked/rained) stem to known bases.
  // The lexical focus (life-events & news: wedding/ring/prize/package…) is the 14
  // words[]; receptive narrative words (earlier/finally/abroad/engaged/wonderful/
  // congratulations) live in lesson.glossary[]. See plan 2026-06-26-b1-scope L25.
  25: ["had"],
  // L26 Reported speech (said/told + backshift) + say/tell/ask. said/told are in
  // the central PARTICIPLES list (so they "just work"); asked->ask (WL13), that=WL1,
  // would=WL10, could=WL18, when=WL12, had=WL25 are all cumulatively available, and
  // backshift only ever PRODUCES past forms (present->past stems to base, will->would,
  // can->could) — bare "will" is NOT introduced (that is L29), shown only in unchecked
  // prose (intro/cultural). NEW = "if" for reported yes/no questions (He asked IF I…),
  // a function word the stemmer leaves untouched. The lexical focus (communication
  // verbs: say/tell/explain/repeat/promise/agree/reply/mention/describe/complain/
  // whisper/voice/word/advice) is the 14 words[]; the bases "say" and "tell" are added
  // there (snowball MISS otherwise) — says/tells/saying stem to them. Receptive
  // discourse markers (actually/exactly/anyway/true/whether) live in lesson.glossary[].
  26: ["if"],
  // L27 Present Perfect + for/since + How long? + PP vs Past Simple contrast. have/has=WL8,
  // had=WL25; participles (been/had/known/felt/hurt) ride on the central PARTICIPLES list;
  // markers ever/yet/just/already=WL23, never=WL6, how=WL4, when=WL12 are cumulative.
  // NEW = the duration markers "for"/"since" (snowball MISS otherwise) + "long" (How long?).
  // "for"/"since"/"long" are function words the stemmer leaves untouched. The Past-Simple
  // contrast pulls only snowball-safe pasts: worked->work, was/were=WL12, had=WL25, felt
  // (PARTICIPLES) — irregular came/rang/saw and silent-e -ed (lived->liv) are deliberately
  // avoided. The lexical focus (HEALTH/BODY-3: ache/flu/dizzy/breathe/bandage/tablet/injection/
  // feel/month/rib/ankle/elbow/wrist/rash) is the 14 words[]; receptive doctor's-visit words
  // (matter/allergic/prescription/painful/recently) live in lesson.glossary[]. See plan L27.
  27: ["for", "since", "long"],
  // L28 Present Perfect Continuous (have/has been + V-ing) + simple-vs-continuous contrast.
  // have/has=WL8, "been" rides the central PARTICIPLES list, for/since/long=WL27 -> PPC + for/since
  // ("I have been working here for two months") is snowball-clean. -ing forms stem to their base
  // (picking->pick, cleaning->clean, working->work, adjusting->adjust) so any consonant-ending base
  // verb in words[] just works; silent-e (making->mak) and doubling (running->runn) -ing forms are
  // deliberately AVOIDED, not whitelisted. The PP-simple contrast pulls only regular participles
  // (picked->pick, checked->check, loaded->load). NEW = the duration quantifier "all" (all morning /
  // all the trays) — a function word the stemmer leaves untouched, snowball MISS otherwise. The lexical
  // focus (MACHINERY-3 + process verbs: line/conveyor/roller/panel/screen/sensor/scanner/gauge/valve/
  // nozzle/grease/handle/adjust/inspect) is the 14 words[]; receptive shift words (production/faulty/
  // lately/maintenance) live in lesson.glossary[]. See plan 2026-06-26-b1-scope L28.
  28: ["all"],
  // L29 will/won't + Shall I? + going-to vs will + Present Continuous future. NEW = the two modals
  // "will" and "shall" (brand-new, the stemmer leaves them untouched). The tokenizer already folds the
  // contractions: won't->will, shan't->shall, I'll/he'll->i/he (known pronouns) — so contracted surface
  // forms in any field ride on known bases (B1 quality decision, plan line 15). going to = going->go
  // (known) + to (WL1); Present Continuous future (am/is/are + -ing) is L7. Per policy the grammar
  // TABLES/examples use full forms (I will / will not / Shall I) for clarity; natural contractions
  // (I'll/won't/he'll) live in the dialogue + [BUILD] tiles + everyday. The lexical focus (plans/offers:
  // offer/lend/borrow/swap/extra/favour/arrange/decide/maybe/think/umbrella/raincoat/tonight/evening) is
  // the 14 words[]; receptive words (probably/spare/worry/definitely) live in lesson.glossary[]. "evening"
  // stems to "even" (the -ing strip) but is self-consistent (its words[] entry and any use both fold to
  // "even"). See plan 2026-06-26-b1-scope L29.
  29: ["will", "shall"],
  // L30 First conditional (if + present, … will/might) + future time clauses + may/might.
  // The conditional/time CONJUNCTIONS are already cumulative: if=WL26, when=WL12,
  // while/as/because/although=WL24, will/shall=WL29, soon=WL7 (so "as soon as" =
  // as+soon+as just works). NEW = the modal "might" + the conjunction "until" (both
  // plain tokens the stemmer leaves untouched, snowball MISS otherwise). "may" is
  // already a known word (the month "May"), but it is listed here too to document the
  // modal's introduction. "may not"/"might not" are two plain tokens (not"=WL1) — no
  // contraction. Note: only "come" (base) rides the central PARTICIPLES list; inflected
  // "comes"/"came" fall through (allowed() doesn't stem the whitelist), so present-tense
  // when-clauses use a words[] verb (finish) or "is here" instead. The lexical focus
  // (contingency/possibility: chance/possible/perhaps/sure/expect/hope/guess/ground/
  // dusty/slippery/delay/cancel/same/disagree) is the 14 words[]; receptive condition
  // words (rota/muddy/icy/otherwise) live in lesson.glossary[]. The agree/disagree
  // function (So do I / Neither do I) lives in everyday (not snowball-checked) — "neither"
  // is intentionally NOT whitelisted (unused in any checked field). See plan L30.
  30: ["may", "might", "until"],
  // L31 have to / don't have to + must / mustn't + should / shouldn't (obligation,
  // prohibition, advice) + dependent prepositions. have to = have(WL8)+to(WL1); the
  // negatives/questions ride on do/does(WL6) via the n't strip (don't->do, doesn't->
  // does). NEW = the two modals "must" and "should" — brand-new short tokens the
  // stemmer leaves untouched; mustn't/shouldn't have their n't stripped by tokenize()
  // -> must/should, so whitelisting the bases covers the contracted forms (BUILD keeps
  // "mustn't"/"shouldn't" as one tile). The dependent-preposition collocations sit on
  // already-known prepositions (depend ON=WL5, afraid OF=WL10, wait FOR=WL27, good AT=
  // WL11, responsible FOR=WL27, protect FROM=WL1); the verbs/adjs are words[] (depend,
  // responsible, protect) or reused (afraid L19, wait L6). The lexical focus (SAFETY/
  // RULES: rule/safety/wear/careful/danger/warn/protect/allow/follow/smoke/fire/alarm/
  // depend/responsible) is the 14 words[]; receptive safety words (equipment/forklift/
  // forbidden/instructions/uniform) live in lesson.glossary[]. "must"/"should" pair
  // with the already-taught "can't"(L11) prohibition synonym. See plan L31.
  31: ["must", "should"],
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
