/*
 * verify-ipa.js — external, non-LLM anchor for the `pn` (IPA) field.
 *
 * Why: the council audit named the project's #1 risk — content + IPA are
 * authored by an LLM and reviewed by an LLM, while the only human acceptor
 * (owner, zero English) cannot catch a phonetics hallucination. This script
 * breaks that self-referential loop: it pulls Received Pronunciation (en-GB)
 * IPA from Wiktionary — a human-curated, authoritative source the contract
 * explicitly names — and reports every divergence from our stored `pn` for
 * owner acceptance. It does NOT auto-fix; it surfaces.
 *
 * Network needed on first run; results are cached to scripts/ref-ipa-wiktionary.json
 * so re-runs are offline + reproducible (the cache IS the captured anchor snapshot).
 * NOT part of `npm run audit` (slow, network-dependent). Run on demand:
 *     node scripts/verify-ipa.js
 */
const fs = require("fs");
const path = require("path");
const LESSONS = require("../app/data.js");

const REF = path.join(__dirname, "ref-ipa-wiktionary.json");
const REPORT = path.join(__dirname, "ipa-verify-report.md");
const ref = fs.existsSync(REF) ? JSON.parse(fs.readFileSync(REF, "utf8")) : {};
// Past failures were cached as null; drop them so they retry. Genuine "200 but
// no IPA" is cached as "" (empty string) and kept.
Object.keys(ref).forEach((k) => { if (ref[k] === null) delete ref[k]; });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* Pull the best en-GB phonemic IPA (prefer RP) from a Wiktionary wikitext dump.
   Skips US/other-accent variants; returns the slashed /.../ phonemic form. */
function extractRP(wikitext) {
  const cands = [];
  for (const line of wikitext.split("\n")) {
    if (!/\{\{IPA\|en\|/.test(line)) continue;
    const slash = line.match(/\{\{IPA\|en\|[^}]*?\/([^/|}]+)\//); // first phonemic /.../
    if (!slash) continue;
    const ann = (line.match(/a=([^|}]+)/) || [, ""])[1];
    cands.push({ ipa: slash[1], ann });
  }
  if (!cands.length) return null;
  const isOther = (a) =>
    /GA|GenAm|US|America|Canada|Scotland|Ireland|AU|NZ|Wales|SSB|Northumbrian|Boston|India|th-fronting|colloquial|dialect/i.test(a);
  return (
    (cands.find((c) => /\bRP\b/i.test(c.ann)) || {}).ipa ||
    (cands.find((c) => !c.ann) || {}).ipa ||
    (cands.find((c) => /UK|British|England/i.test(c.ann) && !isOther(c.ann)) || {}).ipa ||
    (cands.find((c) => !isOther(c.ann)) || {}).ipa ||
    cands[0].ipa
  );
}

/* Normalize broad (learner-dictionary) vs narrow (Wiktionary) conventions so the
   comparison flags real divergences (wrong vowel/consonant), not transcription
   style. We KEEP length (ː) — it is phonemic — but absorb: tie-bars, syllabic /
   non-syllabic / allophonic diacritics, optional segments, stress, syllable dots,
   the ɹ↔r and ɡ↔g and ɛ↔e (DRESS vowel) dictionary conventions. */
function norm(ipa) {
  return String(ipa)
    .replace(/^\/+|\/+$/g, "")
    .replace(/[\[\]]/g, "")
    .replace(/\([^)]*\)/g, "") // optional segments: (ɹ), (ɡ), (ɪ), (ə), (ː)…
    .replace(/[̀-ͯ]/g, "") // combining diacritics: tie-bar, non-syllabic, syllabic, voiceless… (ː/ˈ are NOT here)
    .replace(/ɡ/g, "g") // IPA g -> ascii g
    .replace(/ɹ/g, "r") // narrow English r -> broad r
    .replace(/ɛ/g, "e") // DRESS vowel: Wiktionary /ɛ/ vs learner-dict /e/
    .replace(/[ˈˌ]/g, "") // primary/secondary stress (noisy on monosyllables)
    .replace(/[.‿]/g, "") // syllable dots / linking
    .replace(/\s+/g, "")
    .trim();
}

/* Returns the IPA string, "" for a genuine 200-but-no-IPA page, or null if the
   request never succeeded (transient/rate-limit) — null is NOT cached, so it
   retries on the next run. Genuine results ("" or a string) are cached. */
async function fetchIPA(word) {
  if (Object.prototype.hasOwnProperty.call(ref, word)) return ref[word];
  const url =
    "https://en.wiktionary.org/w/api.php?action=parse&page=" +
    encodeURIComponent(word) +
    "&prop=wikitext&format=json&formatversion=2";
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const r = await fetch(url, {
        headers: { "User-Agent": "esw-ipa-verify/0.1 (farm-English A0 lesson QA; contact: project owner)" },
      });
      if (r.status === 429 || r.status >= 500) {
        await sleep(1500 * (attempt + 1)); // back off on throttle / server error
        continue;
      }
      if (!r.ok) {
        // 404 etc. — genuine absence; cache "" so it isn't retried forever
        ref[word] = "";
        fs.writeFileSync(REF, JSON.stringify(ref, null, 0));
        await sleep(300);
        return "";
      }
      const j = await r.json();
      const val = extractRP((j.parse && j.parse.wikitext) || "");
      ref[word] = val == null ? "" : val; // cache genuine result ("" = no IPA found)
      fs.writeFileSync(REF, JSON.stringify(ref, null, 0));
      await sleep(300);
      return ref[word];
    } catch (e) {
      await sleep(1500 * (attempt + 1));
    }
  }
  // never got a usable response — leave uncached so it retries next run
  await sleep(300);
  return null;
}

(async () => {
  const words = [];
  LESSONS.forEach((l) => l.words.forEach((w) => words.push({ id: l.id, en: w.en, pn: w.pn })));

  const diffs = [];
  const missing = [];
  let ok = 0;

  for (const w of words) {
    const rp = await fetchIPA(w.en);
    if (rp == null || rp === "") {
      missing.push(w);
    } else if (norm(rp) === norm(w.pn)) {
      ok++;
    } else {
      diffs.push({ ...w, rp });
    }
    process.stdout.write(".");
  }
  process.stdout.write("\n");

  const lines = [];
  lines.push("# IPA verification report (Wiktionary RP anchor)");
  lines.push("");
  lines.push(`Total words: ${words.length} · matched: ${ok} · divergent: ${diffs.length} · not found: ${missing.length}`);
  lines.push("");
  lines.push("Normalized away (kept length ː): ɹ↔r, ɡ↔g, ɛ↔e (DRESS vowel), tie-bars & allophonic diacritics, optional (…) segments, stress, syllable dots.");
  lines.push("Divergences below are for OWNER ACCEPTANCE — review each: is our `pn` wrong, or a valid variant?");
  lines.push("");
  if (diffs.length) {
    lines.push("## Divergences (data `pn` vs Wiktionary RP)");
    lines.push("");
    lines.push("| L | word | our pn | Wiktionary RP |");
    lines.push("|---|------|--------|---------------|");
    diffs.forEach((d) => lines.push(`| ${d.id} | ${d.en} | \`${d.pn}\` | \`/${d.rp}/\` |`));
    lines.push("");
  }
  if (missing.length) {
    lines.push("## Not found on Wiktionary (no en RP IPA parsed — verify manually)");
    lines.push("");
    missing.forEach((m) => lines.push(`- L${m.id} **${m.en}** (\`${m.pn}\`)`));
    lines.push("");
  }
  fs.writeFileSync(REPORT, lines.join("\n"));

  console.log(`\nIPA verify: ${words.length} words · ✅ ${ok} matched · ⚠️ ${diffs.length} divergent · ❓ ${missing.length} not found`);
  if (diffs.length) {
    console.log("\nDivergences (review for acceptance):");
    diffs.forEach((d) => console.log(`  L${d.id} ${d.en}: ours ${d.pn}  vs RP /${d.rp}/`));
  }
  if (missing.length) {
    console.log("\nNot found (manual check):");
    console.log("  " + missing.map((m) => m.en).join(", "));
  }
  console.log(`\nFull report -> ${path.relative(process.cwd(), REPORT)}`);
  console.log(`Anchor snapshot -> ${path.relative(process.cwd(), REF)}`);
})();
