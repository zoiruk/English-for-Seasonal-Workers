/*
 * verify-transcr.js — self-consistency check for the cyrillic `transcr` crutch.
 *
 * Why: the council audit's deepest point — for a zero-English A0 learner who
 * can't yet read Latin, the cyrillic `transcr` IS the actual input. A crutch
 * that diverges from the word's own (now externally IPA-verified) sound, or
 * that follows the course's own convention inconsistently (e.g. /w/ → «в» in
 * "вёк" but «у» in "уик"), silently teaches the wrong sound. Scripts caught
 * none of this; the "сри" defect proved the gap.
 *
 * This generates the EXPECTED cyrillic from each word's `pn` using the course's
 * observed phoneme→cyrillic convention, and reports where the stored `transcr`
 * diverges — for OWNER ACCEPTANCE (some divergences are deliberate exceptions,
 * e.g. three→«фри»). It does NOT auto-fix. Offline, no network.
 * Run: node scripts/verify-transcr.js   (or: npm run verify-transcr)
 */
const fs = require("fs");
const path = require("path");
const LESSONS = require("../app/data.js");

// Course phoneme→cyrillic convention (multi-char phonemes MUST come first).
const MAP = [
  // diphthongs / affricates (longest first)
  ["eɪ", "эй"], ["aɪ", "ай"], ["ɔɪ", "ой"], ["aʊ", "ау"], ["əʊ", "оу"],
  ["ɪə", "иэ"], ["eə", "эа"], ["ʊə", "уэ"], ["tʃ", "ч"], ["dʒ", "дж"],
  // ŋ before a velar plosive is just «н» (thanks→сэнкс), word-final ŋ→«нг»
  ["ŋk", "нк"], ["ŋɡ", "нг"], ["ŋg", "нг"],
  // long vowels (keep ː so these match before the bare fallbacks)
  ["iː", "и"], ["ɑː", "а"], ["ɔː", "о"], ["uː", "у"], ["ɜː", "ё"],
  // short vowels
  ["ɪ", "и"], ["e", "э"], ["ɛ", "э"], ["æ", "э"], ["ɒ", "о"], ["ʊ", "у"],
  ["ʌ", "а"], ["ə", "э"], ["ɑ", "а"], ["ɔ", "о"], ["i", "и"], ["u", "у"],
  ["o", "о"], ["a", "а"],
  // consonants
  ["ŋ", "нг"], ["θ", "с"], ["ð", "з"], ["ʃ", "ш"], ["ʒ", "ж"], ["ɹ", "р"],
  ["p", "п"], ["b", "б"], ["t", "т"], ["d", "д"], ["k", "к"], ["ɡ", "г"],
  ["g", "г"], ["f", "ф"], ["v", "в"], ["s", "с"], ["z", "з"], ["h", "х"],
  ["m", "м"], ["n", "н"], ["l", "л"], ["r", "р"], ["w", "у"], ["j", "й"],
  ["ː", ""], // any leftover length mark -> nothing
];

// Strip IPA scaffolding (slashes, stress, length, dots, parens, brackets,
// combining diacritics) — keep the bare phoneme letters.
function cleanIPA(pn) {
  return String(pn)
    .replace(/^\/+|\/+$/g, "")
    .replace(/[\[\]()]/g, "")
    .replace(/[ˈˌ.‿ ]/g, "")
    .replace(/[̀-ͯ]/g, ""); // combining diacritics (ː kept — handled by the MAP)
}

// Greedy longest-match transliteration IPA -> expected cyrillic.
function expectCyrillic(pn) {
  let s = cleanIPA(pn);
  let out = "";
  let guard = 0;
  outer: while (s.length && guard++ < 200) {
    for (const [ipa, cyr] of MAP) {
      if (s.startsWith(ipa)) {
        out += cyr;
        s = s.slice(ipa.length);
        continue outer;
      }
    }
    out += "·"; // unmapped phoneme marker — flags a gap in the table
    s = s.slice(1);
  }
  return out;
}

function normCyr(t) {
  return String(t).toLowerCase().replace(/[\s'’-]/g, "").trim();
}

const rows = [];
LESSONS.forEach((l) =>
  l.words.forEach((w) => rows.push({ id: l.id, en: w.en, pn: w.pn, transcr: w.transcr }))
);

const diffs = [];
let ok = 0;
for (const r of rows) {
  const exp = expectCyrillic(r.pn);
  if (normCyr(exp) === normCyr(r.transcr)) ok++;
  else diffs.push({ ...r, exp });
}

const lines = [];
lines.push("# Transcr self-consistency report (cyrillic vs IPA-derived)");
lines.push("");
lines.push(`Total: ${rows.length} · consistent: ${ok} · divergent: ${diffs.length}`);
lines.push("");
lines.push("Expected = mechanical phoneme→cyrillic from our `pn` (course convention).");
lines.push("Divergences are for OWNER ACCEPTANCE: a real transcr error, or a deliberate");
lines.push("exception (e.g. three→«фри», schwa ə voiced as «а» not «э»). `·` = phoneme our");
lines.push("map doesn't cover. Not a pass/fail — a review list of where crutch ≠ sound.");
lines.push("");
lines.push("| L | word | pn | our transcr | IPA-derived |");
lines.push("|---|------|----|-------------|-------------|");
diffs.forEach((d) => lines.push(`| ${d.id} | ${d.en} | \`${d.pn}\` | ${d.transcr} | ${d.exp} |`));
fs.writeFileSync(path.join(__dirname, "transcr-verify-report.md"), lines.join("\n"));

console.log(`Transcr check: ${rows.length} words · ✅ ${ok} consistent · ⚠️ ${diffs.length} divergent`);
console.log("\nDivergences (review — error vs deliberate exception):");
diffs.forEach((d) => console.log(`  L${d.id} ${String(d.en).padEnd(12)} ${d.pn.padEnd(16)} ours: ${String(d.transcr).padEnd(10)} derived: ${d.exp}`));
console.log(`\nFull report -> ${path.relative(process.cwd(), path.join(__dirname, "transcr-verify-report.md"))}`);
