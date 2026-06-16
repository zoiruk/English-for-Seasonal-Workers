/*
 * Lesson data for "English for Seasonal Workers" (RU-only, A0-A1).
 * Plain JS so the app opens via file:// (no fetch). Dual export: browser
 * sets window.LESSONS; Node (audit scripts) gets module.exports.
 *
 * Schema per lesson (RU-only, localization-ready via _ru suffix):
 *   { id, mod, title_ru, cefr,
 *     grammar: { title_ru, intro_ru, cultural_ru, note_ru,
 *                forms: { positive|negative|question:
 *                         { label_ru, rule_ru, table:[{subj,verb,example,transcr,tr_ru}] } },
 *                examples:[{en,transcr,ru}] },
 *     words:[{e,en,transcr,ru,pn}],            // >=30 unique
 *     dialogue:[{s,en,transcr,ru}],            // >=10, s in m/w/c/d
 *     quiz:[{q,opts,c,expl,hint_ru}] }         // >=10, q carries a [TAG]
 */
(function (root) {
  const LESSONS = [
    // Lessons are authored one at a time; each must pass `npm run audit`.
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = LESSONS;
  else root.LESSONS = LESSONS;
})(typeof window !== "undefined" ? window : globalThis);
