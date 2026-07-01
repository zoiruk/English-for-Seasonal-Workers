/*
 * Phonics / decoding trainer for "English for Seasonal Workers" (RU-only).
 * Teaches letter-combination → sound rules ("decoding") so the learner can read a
 * NEW word on a packaging label or sign, not just memorise the transcr of words
 * already covered in lessons. Companion to phonetics.js (which trains the EAR via
 * minimal pairs / stress / schwa) — this module trains DECODING (spelling → sound).
 *
 * NOT bound by the snowball vocabulary rule or farm-only lexicon (reference module,
 * like phonetics.js/phrasebook.js — non-farm CVC words like pig/fox/duck are
 * unavoidable for common phonics patterns). Plain JS, file://-safe; dual export.
 *
 * Schema: window.READING_RULES = [{
 *   id, icon, title_ru,
 *   rule_ru,                            // ONE-sentence plain-RU idea, NO word dump
 *   patterns: [{ label, sound_ru, example: {en, transcr, ru} }],  // per-letter/-combo
 *                                       // row (with its own 🔊), rendered as a table
 *                                       // (CLAUDE.md: word lists in rules are
 *                                       // CSS-grid/table, not prose) — this IS the
 *                                       // rule explanation + listening drill in one
 *   check: [{ word:{en,transcr,ru}, hint_ru }],   // "read it yourself" mini-check
 * }]
 *
 * SOURCING / GATES (Phase 0, plans/2026-07-01-phonics-reading-module.md, 2026-07-01):
 *  - transcr of words already in app/data.js words[]/glossary[] or app/phonetics.js
 *    is COPIED VERBATIM from there (bad «бэд», bus «бас», pen «пэн», cake «кэйк»,
 *    bike «байк», home «хоум», note «ноут», name «нэйм», think «синк», this «зис»,
 *    shop «шоп», shed «шед», tree «три», tea «ти», feet «фит», food «фуд»,
 *    meat «мит», fork «фок», bird «бёд», car «ка», turn «тён», rain «рэйн»,
 *    day «дэй», house «хаус», train «трэйн», stay «стэй», town «таун», rule «рул») —
 *    so check-transcr-consistency stays green.
 *  - NEW words (not elsewhere in the project): hen, pig, fox, log, big, tube, chop,
 *    duck, chip, sock, book, moon, star, corn, girl, now, coin, toy, boy — IPA fetched
 *    from Wiktionary (RP/British label) via WebFetch on 2026-07-01, ONE WORD AT A TIME,
 *    not from model memory (project rule after the "three → «Сри»" incident, commit
 *    1f1838d). Cyrillic rendering follows CLAUDE.md conventions: /w/→«у», æ→«э», ɪ→«и»,
 *    ɒ→«о», ʌ→«а», ɜː→«ё» (no trailing «р» — RP is non-rhotic), aʊ→«ау», eɪ→«эй»,
 *    ɔɪ→«ой», ʊ/uː→«у». Manually checked against check-transcr-safe.js's RUDE-stem
 *    list — 0 matches. `patterns[].example` re-uses only words already sourced this
 *    way (no new lookups) — it is a presentation layer over the same data.
 *  - `play` and `cow` were dropped from the candidate list: Wiktionary had no
 *    RP/British-labeled IPA for them (only General American / audio-only), and the
 *    project rule is to not guess.
 *  - Known project quirk NOT reproduced here: `farm` is transcribed «фарм» in data.js
 *    (keeps the letter R), unlike every other R-controlled word (car «ка», fork «фок»,
 *    dark «дак», bird «бёд», nurse «нёс», turn «тён» — all drop it, non-rhotic RP).
 *    Using `farm` in the R-controlled block (id "r_controlled") would contradict the
 *    very rule being taught, so it is intentionally excluded here; `star`/`car` cover
 *    the AR pattern instead.
 */
(function (root) {
  const READING_RULES = [
    {
      id: "short_vowels",
      icon: "🔡",
      title_ru: "Короткие гласные — a e i o u между согласными",
      rule_ru:
        "Если гласная буква стоит МЕЖДУ двумя согласными в коротком слове — она звучит " +
        "коротко, не так, как называется в алфавите.",
      patterns: [
        { label: "a", sound_ru: "коротко «э»", example: { en: "bad", transcr: "бэд", ru: "плохой" } },
        { label: "e", sound_ru: "коротко «э»", example: { en: "hen", transcr: "хэн", ru: "курица" } },
        { label: "i", sound_ru: "коротко «и»", example: { en: "pig", transcr: "пиг", ru: "свинья" } },
        { label: "o", sound_ru: "коротко «о»", example: { en: "fox", transcr: "фокс", ru: "лиса" } },
        { label: "u", sound_ru: "коротко «а»", example: { en: "bus", transcr: "бас", ru: "автобус" } },
      ],
      check: [
        { word: { en: "pen", transcr: "пэн", ru: "ручка" }, hint_ru: "e между согласными — коротко" },
        { word: { en: "log", transcr: "лог", ru: "бревно" }, hint_ru: "o между согласными — коротко" },
        { word: { en: "big", transcr: "биг", ru: "большой" }, hint_ru: "i между согласными — коротко" },
      ],
    },
    {
      id: "magic_e",
      icon: "✨",
      title_ru: "«Немая» E — a_e · i_e · o_e · u_e",
      rule_ru:
        "Слово оканчивается на E, а перед ней — согласная. Сама эта E не звучит, но " +
        "«включает» гласную перед собой — та начинает звучать длинно, как в алфавите.",
      patterns: [
        { label: "a_e", sound_ru: "«эй»", example: { en: "cake", transcr: "кэйк", ru: "торт" } },
        { label: "i_e", sound_ru: "«ай»", example: { en: "bike", transcr: "байк", ru: "велосипед" } },
        { label: "o_e", sound_ru: "«оу»", example: { en: "home", transcr: "хоум", ru: "дом" } },
        { label: "u_e", sound_ru: "«ю»", example: { en: "tube", transcr: "тьюб", ru: "труба" } },
      ],
      check: [
        { word: { en: "name", transcr: "нэйм", ru: "имя" }, hint_ru: "a_e — гласная звучит длинно" },
        { word: { en: "note", transcr: "ноут", ru: "банкнота" }, hint_ru: "o_e — гласная звучит длинно" },
        { word: { en: "rule", transcr: "рул", ru: "правило" }, hint_ru: "u_e — гласная звучит длинно" },
      ],
    },
    {
      id: "consonant_digraphs",
      icon: "👅",
      title_ru: "Две буквы — один звук: TH · SH · CH · CK",
      rule_ru: "Эти пары букв читай как ОДИН звук, не по буквам отдельно.",
      patterns: [
        { label: "TH", sound_ru: "язык между зубами, тихо (глухой)", example: { en: "think", transcr: "синк", ru: "думать" } },
        { label: "TH", sound_ru: "язык между зубами, звонко", example: { en: "this", transcr: "зис", ru: "это" } },
        { label: "SH", sound_ru: "один долгий «ш»", example: { en: "shop", transcr: "шоп", ru: "магазин" } },
        { label: "CH", sound_ru: "«ч»", example: { en: "chop", transcr: "чоп", ru: "рубить" } },
        { label: "CK", sound_ru: "в конце слова — одна «к»", example: { en: "duck", transcr: "дак", ru: "утка" } },
      ],
      check: [
        { word: { en: "shed", transcr: "шед", ru: "сарай" }, hint_ru: "SH — один звук «ш»" },
        { word: { en: "chip", transcr: "чип", ru: "щепка" }, hint_ru: "CH — один звук «ч»" },
        { word: { en: "sock", transcr: "сок", ru: "носок" }, hint_ru: "CK на конце — одна «к»" },
      ],
    },
    {
      id: "vowel_digraphs",
      icon: "🌳",
      title_ru: "Две гласные — один долгий звук: EE · OO · EA",
      rule_ru: "Две гласные буквы вместе обычно дают один долгий звук.",
      patterns: [
        { label: "EE", sound_ru: "долгий «и»", example: { en: "tree", transcr: "три", ru: "дерево" } },
        { label: "EA", sound_ru: "долгий «и»", example: { en: "tea", transcr: "ти", ru: "чай" } },
        { label: "OO", sound_ru: "здесь короткий «у»", example: { en: "book", transcr: "бук", ru: "книга" } },
        { label: "OO", sound_ru: "а здесь долгий «у» — на письме не отличить, слушай 🔊", example: { en: "moon", transcr: "мун", ru: "луна" } },
      ],
      check: [
        { word: { en: "feet", transcr: "фит", ru: "ступни" }, hint_ru: "EE — долгий «и»" },
        { word: { en: "food", transcr: "фуд", ru: "еда" }, hint_ru: "OO — здесь долгий «у»" },
        { word: { en: "meat", transcr: "мит", ru: "мясо" }, hint_ru: "EA — долгий «и»" },
      ],
    },
    {
      id: "r_controlled",
      icon: "🐦",
      title_ru: "R после гласной меняет звук: AR · OR · ER/IR/UR",
      rule_ru: "После гласной буква R сама по себе не читается как отдельный звук «р» — вместе они дают один новый звук.",
      patterns: [
        { label: "AR", sound_ru: "глубокое «а», без «р»", example: { en: "star", transcr: "ста", ru: "звезда" } },
        { label: "OR", sound_ru: "«о», без «р»", example: { en: "fork", transcr: "фок", ru: "вилка" } },
        { label: "ER / IR / UR", sound_ru: "все три звучат одинаково — «ё»", example: { en: "bird", transcr: "бёд", ru: "птица" } },
      ],
      check: [
        { word: { en: "car", transcr: "ка", ru: "машина" }, hint_ru: "AR — «а», без «р»" },
        { word: { en: "corn", transcr: "кон", ru: "кукуруза" }, hint_ru: "OR — «о», без «р»" },
        { word: { en: "girl", transcr: "гёл", ru: "девочка" }, hint_ru: "IR — как «ё»" },
        { word: { en: "turn", transcr: "тён", ru: "поворачивать" }, hint_ru: "UR — как «ё»" },
      ],
    },
    {
      id: "diphthongs",
      icon: "🌧️",
      title_ru: "Гласная «съезжает» в другую: AI/AY · OU/OW · OI/OY",
      rule_ru: "Тут гласная звучит не одна, а плавно переходит в другую.",
      patterns: [
        { label: "AI", sound_ru: "«эй» (в середине слова)", example: { en: "rain", transcr: "рэйн", ru: "дождь" } },
        { label: "AY", sound_ru: "«эй» (в конце слова)", example: { en: "day", transcr: "дэй", ru: "день" } },
        { label: "OU", sound_ru: "«ау» (в середине слова)", example: { en: "house", transcr: "хаус", ru: "дом" } },
        { label: "OW", sound_ru: "«ау» (в конце слова)", example: { en: "now", transcr: "нау", ru: "сейчас" } },
        { label: "OI", sound_ru: "«ой» (в середине слова)", example: { en: "coin", transcr: "койн", ru: "монета" } },
        { label: "OY", sound_ru: "«ой» (в конце слова)", example: { en: "toy", transcr: "той", ru: "игрушка" } },
      ],
      check: [
        { word: { en: "train", transcr: "трэйн", ru: "поезд" }, hint_ru: "AI — «эй»" },
        { word: { en: "stay", transcr: "стэй", ru: "остаться" }, hint_ru: "AY — «эй»" },
        { word: { en: "town", transcr: "таун", ru: "город" }, hint_ru: "OW — «ау»" },
        { word: { en: "toy", transcr: "той", ru: "игрушка" }, hint_ru: "OY — «ой»" },
        { word: { en: "boy", transcr: "бой", ru: "мальчик" }, hint_ru: "OY — «ой»" },
      ],
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = READING_RULES;
  root.READING_RULES = READING_RULES;
})(typeof window !== "undefined" ? window : this);
