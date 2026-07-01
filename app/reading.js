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
 *
 * PACKAGE 2 (plans/2026-07-01-phonics-reading-pack2.md, 2026-07-01): +3 drill blocks
 * (consonant_digraphs_2 NG/PH/WH/QU · silent_letters KN/WR/MB/ALK · vowel_teams_2
 * OA/UE/IGH/ALL) and one `kind:"reference"` block (ipa_chart) — the full BrE vowel+
 * consonant IPA table, view-only (no drill, `ipa[]` instead of patterns/check).
 *  - NEW words with an explicit Wiktionary RP/British-labelled IPA (fetched one at a
 *    time on 2026-07-01, NOT from memory): what /wɒt/ «уот», who /huː/ «ху»,
 *    write /ɹaɪt/ «райт», wrap /ɹæp/ «рэп», goat /ɡəʊt/ «гоут», night /naɪt/ «найт»,
 *    ball /bɔːl/ «бол», dog /dɒɡ/ «дог», rose /ɹəʊz/ «роуз», bear /bɛə/ «бэа»,
 *    beer /bɪə/ «биа», poor /pʊə/ «пуа», quarter /ˈkwɔːtə/ «куотэ». All other words are
 *    COPIED VERBATIM from the canon (long «лонг», ring «ринг», phone «фоун»,
 *    photo «фоутоу», white «уайт», quiet «куайэт», knife «найф», knee «ни», climb
 *    «клайм», thumb «сам», walk «уок», talk «ток», boat «боут», blue «блу», true «тру»,
 *    high «хай», wall «уол» + all IPA-chart keywords: sheep, car, door, bird, fish, bed,
 *    hat, sun, book, about, cake, now, boy, pen, bus, tea, duck, corn, girl, fork, van,
 *    star, nose, moon, name, home, light, this, think, shop, chop, job, measure).
 *  - DROPPED for lack of an RP/British-labelled IPA on Wiktionary (project rule, same
 *    reason `play`/`cow` fell in Package 1): sing, glue, queen, quick, cow, zoo — each
 *    replaced by a canon RP-safe word (NG→long/ring, UE→blue/true, QU→quarter/quiet,
 *    aʊ→now, /z/→nose).
 *  - SCAN ERRORS NOT copied (the owner's phonics scans are a coverage map, not a sound
 *    source): `all /ɔɪ/ ball` on scan p.5 is WRONG — RP is /bɔːl/ → «бол» (sound «о»),
 *    never «ойл»; scan p.7 uses US notation (/oʊ/ rose, /ɑː/) — kept BrE: OA/əʊ = «оу»
 *    (rose «роуз», boat «боут»), matching home «хоум» from Package 1.
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
    {
      id: "consonant_digraphs_2",
      icon: "🔔",
      title_ru: "Ещё две буквы — один звук: NG · PH · WH · QU",
      rule_ru: "Ещё частые пары букв: читай их как один звук, не по буквам отдельно.",
      patterns: [
        { label: "NG", sound_ru: "носовой «нг», в конце слова", example: { en: "long", transcr: "лонг", ru: "длинный" } },
        { label: "PH", sound_ru: "читается как «ф»", example: { en: "phone", transcr: "фоун", ru: "телефон" } },
        { label: "WH", sound_ru: "чаще всего «у»", example: { en: "what", transcr: "уот", ru: "что" } },
        { label: "WH", sound_ru: "а перед O — «х»", example: { en: "who", transcr: "ху", ru: "кто" } },
        { label: "QU", sound_ru: "всегда «ку» (два звука)", example: { en: "quarter", transcr: "куотэ", ru: "четверть" } },
      ],
      check: [
        { word: { en: "ring", transcr: "ринг", ru: "кольцо" }, hint_ru: "NG — носовой «нг»" },
        { word: { en: "photo", transcr: "фоутоу", ru: "фото" }, hint_ru: "PH — читается «ф»" },
        { word: { en: "white", transcr: "уайт", ru: "белый" }, hint_ru: "WH — читается «у»" },
        { word: { en: "quiet", transcr: "куайэт", ru: "тихий" }, hint_ru: "QU — читается «ку»" },
      ],
    },
    {
      id: "silent_letters",
      icon: "🤫",
      title_ru: "Немые буквы: KN · WR · MB · ALK",
      rule_ru: "В этих парах одна буква не читается совсем — звучит только вторая.",
      patterns: [
        { label: "KN", sound_ru: "K молчит, слышно «н»", example: { en: "knife", transcr: "найф", ru: "нож" } },
        { label: "WR", sound_ru: "W молчит, слышно «р»", example: { en: "write", transcr: "райт", ru: "писать" } },
        { label: "MB", sound_ru: "B молчит, слышно «м»", example: { en: "climb", transcr: "клайм", ru: "залезать" } },
        { label: "ALK", sound_ru: "L молчит, «алк» звучит «ок»", example: { en: "walk", transcr: "уок", ru: "идти пешком" } },
      ],
      check: [
        { word: { en: "knee", transcr: "ни", ru: "колено" }, hint_ru: "KN — K молчит, «н»" },
        { word: { en: "wrap", transcr: "рэп", ru: "заворачивать" }, hint_ru: "WR — W молчит, «р»" },
        { word: { en: "thumb", transcr: "сам", ru: "большой палец" }, hint_ru: "MB — B молчит, «м»" },
        { word: { en: "talk", transcr: "ток", ru: "говорить" }, hint_ru: "ALK — L молчит, «ок»" },
      ],
    },
    {
      id: "vowel_teams_2",
      icon: "🚣",
      title_ru: "Ещё гласные команды: OA · UE · IGH · ALL",
      rule_ru: "Ещё сочетания гласных, которые вместе дают один звук.",
      patterns: [
        { label: "OA", sound_ru: "«оу» (как немая E: home)", example: { en: "boat", transcr: "боут", ru: "лодка" } },
        { label: "UE", sound_ru: "долгий «у»", example: { en: "blue", transcr: "блу", ru: "синий" } },
        { label: "IGH", sound_ru: "«ай», а GH тут молчит", example: { en: "high", transcr: "хай", ru: "высокий" } },
        { label: "ALL", sound_ru: "«ол» (звук «о»), НЕ «ойл»; L тут слышно (в отличие от walk)", example: { en: "ball", transcr: "бол", ru: "мяч" } },
      ],
      check: [
        { word: { en: "goat", transcr: "гоут", ru: "коза" }, hint_ru: "OA — «оу»" },
        { word: { en: "true", transcr: "тру", ru: "правда" }, hint_ru: "UE — «у»" },
        { word: { en: "night", transcr: "найт", ru: "ночь" }, hint_ru: "IGH — «ай», GH молчит" },
        { word: { en: "wall", transcr: "уол", ru: "стена" }, hint_ru: "ALL — «ол», не «ойл»" },
      ],
    },
    {
      id: "ipa_chart",
      kind: "reference",
      icon: "📖",
      title_ru: "Все звуки английского — таблица (справка)",
      rule_ru: "Здесь все звуки английского с примером-словом. Это не тест: слушай 🔊 и смотри.",
      ipa: [
        // Vowels — long (BrE / RP)
        { sym: "iː", en: "sheep", transcr: "шип", ru: "овца", type_ru: "долгий гласный" },
        { sym: "uː", en: "blue", transcr: "блу", ru: "синий", type_ru: "долгий гласный" },
        { sym: "ɑː", en: "car", transcr: "ка", ru: "машина", type_ru: "долгий гласный" },
        { sym: "ɔː", en: "door", transcr: "до", ru: "дверь", type_ru: "долгий гласный" },
        { sym: "ɜː", en: "bird", transcr: "бёд", ru: "птица", type_ru: "долгий гласный" },
        // Vowels — short
        { sym: "ɪ", en: "fish", transcr: "фиш", ru: "рыба", type_ru: "короткий гласный" },
        { sym: "e", en: "bed", transcr: "бэд", ru: "кровать", type_ru: "короткий гласный" },
        { sym: "æ", en: "hat", transcr: "хэт", ru: "шляпа", type_ru: "короткий гласный" },
        { sym: "ʌ", en: "sun", transcr: "сан", ru: "солнце", type_ru: "короткий гласный" },
        { sym: "ɒ", en: "dog", transcr: "дог", ru: "собака", type_ru: "короткий гласный" },
        { sym: "ʊ", en: "book", transcr: "бук", ru: "книга", type_ru: "короткий гласный" },
        // Schwa
        { sym: "ə", en: "about", transcr: "эбаут", ru: "около", type_ru: "слабый, безударный (шва)" },
        // Diphthongs (BrE)
        { sym: "eɪ", en: "cake", transcr: "кэйк", ru: "торт", type_ru: "дифтонг — два звука" },
        { sym: "aɪ", en: "night", transcr: "найт", ru: "ночь", type_ru: "дифтонг — два звука" },
        { sym: "əʊ", en: "rose", transcr: "роуз", ru: "роза", type_ru: "дифтонг — два звука" },
        { sym: "aʊ", en: "now", transcr: "нау", ru: "сейчас", type_ru: "дифтонг — два звука" },
        { sym: "eə", en: "bear", transcr: "бэа", ru: "медведь", type_ru: "дифтонг — два звука" },
        { sym: "ɔɪ", en: "boy", transcr: "бой", ru: "мальчик", type_ru: "дифтонг — два звука" },
        { sym: "ɪə", en: "beer", transcr: "биа", ru: "пиво", type_ru: "дифтонг — два звука" },
        { sym: "ʊə", en: "poor", transcr: "пуа", ru: "бедный", type_ru: "дифтонг — два звука" },
        // Consonants
        { sym: "p", en: "pen", transcr: "пэн", ru: "ручка", type_ru: "согласный" },
        { sym: "b", en: "bus", transcr: "бас", ru: "автобус", type_ru: "согласный" },
        { sym: "t", en: "tea", transcr: "ти", ru: "чай", type_ru: "согласный" },
        { sym: "d", en: "duck", transcr: "дак", ru: "утка", type_ru: "согласный" },
        { sym: "k", en: "corn", transcr: "кон", ru: "кукуруза", type_ru: "согласный" },
        { sym: "g", en: "girl", transcr: "гёл", ru: "девочка", type_ru: "согласный" },
        { sym: "f", en: "fork", transcr: "фок", ru: "вилка", type_ru: "согласный" },
        { sym: "v", en: "van", transcr: "вэн", ru: "фургон", type_ru: "согласный" },
        { sym: "s", en: "star", transcr: "ста", ru: "звезда", type_ru: "согласный" },
        { sym: "z", en: "nose", transcr: "ноуз", ru: "нос", type_ru: "согласный" },
        { sym: "m", en: "moon", transcr: "мун", ru: "луна", type_ru: "согласный" },
        { sym: "n", en: "name", transcr: "нэйм", ru: "имя", type_ru: "согласный" },
        { sym: "h", en: "home", transcr: "хоум", ru: "дом", type_ru: "согласный" },
        { sym: "l", en: "light", transcr: "лайт", ru: "свет", type_ru: "согласный" },
        { sym: "r", en: "ring", transcr: "ринг", ru: "кольцо", type_ru: "согласный" },
        { sym: "w", en: "what", transcr: "уот", ru: "что", type_ru: "согласный" },
        { sym: "θ", en: "think", transcr: "синк", ru: "думать", type_ru: "согласный — TH глухой" },
        { sym: "ð", en: "this", transcr: "зис", ru: "это", type_ru: "согласный — TH звонкий" },
        { sym: "ŋ", en: "long", transcr: "лонг", ru: "длинный", type_ru: "согласный — носовой NG" },
        { sym: "ʃ", en: "shop", transcr: "шоп", ru: "магазин", type_ru: "согласный — SH" },
        { sym: "tʃ", en: "chop", transcr: "чоп", ru: "рубить", type_ru: "согласный — CH" },
        { sym: "dʒ", en: "job", transcr: "джоб", ru: "работа", type_ru: "согласный — J" },
        { sym: "ʒ", en: "measure", transcr: "межэ", ru: "мера", type_ru: "согласный — как «ж»" },
      ],
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = READING_RULES;
  root.READING_RULES = READING_RULES;
})(typeof window !== "undefined" ? window : this);
