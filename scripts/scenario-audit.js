/* scenario-audit.js — survival role-play scenarios (app/scenarios.js).
   Scenarios are an APPLICATION mode, not a graded lesson: they are NOT bound to
   one lesson's snowball, but every English line must still be VERIFIED. Allowed
   vocabulary = the UNION of words[] of ALL lessons 1..N + the full function-word
   whitelist + NAMES (+ bare numbers). No new words may be introduced here.
   Also checks graph structure (start/next/reachability/outcomes) and that every
   English line carries transcr + tr_ru. Deterministic, offline. In `npm run audit`. */
const path = require("path");
const { loadLessons, activeWhitelist, tokenize, stem } = require("./lib");

function loadScenarios() {
  const p = path.join(__dirname, "..", "app", "scenarios.js");
  let S;
  try { S = require(p); } catch (e) {
    // scenarios are optional: a missing file is not an error (like phrasebook/reader)
    return null;
  }
  if (!Array.isArray(S)) {
    console.error("app/scenarios.js must module.exports an array of scenarios");
    process.exit(1);
  }
  return S;
}

const SCENARIOS = loadScenarios();
if (SCENARIOS === null) { console.log("[scenario-audit] OK — no scenarios.js (skipped)"); process.exit(0); }

const LESSONS = loadLessons();
const maxId = LESSONS.reduce((m, l) => Math.max(m, l.id), 0);

// union lexicon: every word[] of every lesson (raw + stemmed) + full whitelist + NAMES
const known = new Set();
LESSONS.forEach((l) => (l.words || []).forEach((x) =>
  tokenize(x.en).forEach((t) => { known.add(t); known.add(stem(t)); })
));
const wl = activeWhitelist(maxId);
const allowed = (t) => known.has(t) || known.has(stem(t)) || wl.has(t) || /^\d+$/.test(t);

const errors = [];
const push = (sid, field, msg) => errors.push({ sid, field, msg });

// check every English string for unknown words + required transcr/tr_ru
function checkLine(sid, field, obj) {
  if (!obj || !obj.en) return;
  if (!obj.transcr) push(sid, field, "missing transcr");
  if (!obj.tr_ru) push(sid, field, "missing tr_ru");
  tokenize(obj.en).forEach((t) => {
    if (!allowed(t)) push(sid, field, `unknown word "${t}" (not in any lesson words[] + whitelist)`);
  });
}

const ids = new Set();
for (const s of SCENARIOS) {
  const sid = s.id || "?";
  if (ids.has(sid)) push(sid, "id", "duplicate scenario id");
  ids.add(sid);
  ["id", "title_ru", "sub_ru", "intro_ru", "icon", "start"].forEach((k) => {
    if (!s[k]) push(sid, k, "missing");
  });
  const nodes = s.nodes || {};
  const nodeIds = Object.keys(nodes);
  if (!nodeIds.length) { push(sid, "nodes", "no nodes"); continue; }
  if (s.start && !nodes[s.start]) push(sid, "start", `start node "${s.start}" does not exist`);

  let outcomeCount = 0;
  const referenced = new Set([s.start]);

  nodeIds.forEach((nid) => {
    const n = nodes[nid];
    checkLine(sid, `nodes.${nid}`, n);
    const isOutcome = !!n.outcome;
    if (isOutcome) {
      outcomeCount++;
      if (!["good", "ok", "bad"].includes(n.outcome))
        push(sid, `nodes.${nid}.outcome`, `must be good|ok|bad, got "${n.outcome}"`);
      if (!n.outcome_ru) push(sid, `nodes.${nid}.outcome_ru`, "missing");
      if (n.choices && n.choices.length) push(sid, `nodes.${nid}`, "outcome node must not have choices");
    } else {
      const choices = n.choices || [];
      if (choices.length < 2) push(sid, `nodes.${nid}.choices`, `need >=2 choices, got ${choices.length}`);
      let okCount = 0;
      choices.forEach((c, i) => {
        checkLine(sid, `nodes.${nid}.choices[${i}]`, c);
        if (c.ok === true) okCount++;
        if (!("next" in c)) push(sid, `nodes.${nid}.choices[${i}]`, "missing next");
        else if (!nodes[c.next]) push(sid, `nodes.${nid}.choices[${i}].next`, `next "${c.next}" does not exist`);
        else referenced.add(c.next);
        if (!c.fb_ru) push(sid, `nodes.${nid}.choices[${i}]`, "missing fb_ru");
      });
      if (okCount < 1) push(sid, `nodes.${nid}`, "no choice marked ok:true (exactly one best path expected)");
    }
  });

  if (outcomeCount < 1) push(sid, "nodes", "need >=1 outcome node");
  // unreachable nodes (not the start, never targeted by any next)
  nodeIds.forEach((nid) => { if (!referenced.has(nid)) push(sid, `nodes.${nid}`, "unreachable node (no choice leads here)"); });
}

if (!errors.length) { console.log("[scenario-audit] OK — 0 errors"); process.exit(0); }
console.error(`[scenario-audit] ${errors.length} error(s):`);
errors.forEach((e) => console.error(`  [${e.sid}] ${e.field}: ${e.msg}`));
process.exit(1);
