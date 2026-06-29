/*
 * Pronunciation / listening trainer for "English for Seasonal Workers" (RU-only).
 * A TRAINING screen (not a graded lesson): trains the EAR + gives a spoken MODEL.
 * Offline has no reliable speech-recognition → we CANNOT grade the learner's own
 * pronunciation. So: (1) model — TTS speaks, learner repeats (no scoring);
 * (2) discrimination — "which word did you hear?" (receptive, decided by audio).
 *
 * NOT bound by the snowball vocabulary rule (reference module, like phrasebook.js).
 * Plain JS, file://-safe; dual export like data.js.
 *
 * Schema: window.PHONETICS = [{
 *   id, icon, title_ru,
 *   goal_ru,            // real-life reason this sound matters on the farm
 *   intro_ru,          // plain-RU "how to make it", NO linguistic terms
 *   kind: "pairs" | "stress" | "listen",
 *   model: [{en, transcr, ru}],                 // listen + repeat (all kinds)
 *   pairs: [{a:{en,transcr,ru}, b:{en,transcr,ru}}],   // kind "pairs": engine plays one
 *   stress:[{en, transcr, ru, syll:[..], hit}], // kind "stress": tap the stressed syllable
 * }]
 *
 * SOURCING / GATES:
 *  - transcr of words already in app/data.js words[] is COPIED VERBATIM from there
 *    (think «синк», sink «синк», thick «сик», mouth «маус», three «фри», hand «хэнд»,
 *    supervisor «супэвайзэ», banana «бэнанэ», potato «пэтэйтоу», bag «бэг», back «бэк»,
 *    bad «бэд», leave «лив», work «уёк», water «уотэ», hour «ауэ» …) — so
 *    check-transcr-consistency stays green.
 *  - NEW words (not in words[]): sick, vet, vest, vine, wine, ill, very, worked, cleaned,
 *    wanted, bat, leaf — IPA/`pn` written by RP convention and OWED a Wiktionary check via
 *    the extended verify-ipa pass (Phase 3) before this module is "golden".
 *  - Contrast set source-cited (RU L1 interference): pronunciationstudio.com,
 *    britishaccentacademy.com, PMC word-stress study. See plans/2026-06-28-phonetics-module.md.
 *  - Phase-0 probe (owner, 2026-06-28, voice Microsoft Mark en-US): th/v-w/h/stress = audible
 *    → drill; schwa + final/-ed not reliably discriminable → "listen" (model only), no drill.
 */
(function (root) {
  const PHONETICS = [
    {
      id: "th",
      icon: "👅",
      title_ru: "Звук TH — язык между зубами",
      goal_ru: "Бригадир говорит «three boxes» — не услышишь разницу с «free», возьмёшь не столько.",
      intro_ru: "Кончик языка чуть между зубами и дунь. По-русски выходит «с» (think → «синк») — но это другой звук. Слушай образец и повтори.",
      kind: "pairs",
      model: [
        { en: "three", transcr: "фри", ru: "три" },
        { en: "think", transcr: "синк", ru: "думать" },
        { en: "thank you", transcr: "сэнк ю", ru: "спасибо" },
        { en: "this", transcr: "зис", ru: "это" },
        { en: "mouth", transcr: "маус", ru: "рот" },
      ],
      pairs: [
        { a: { en: "think", transcr: "синк", ru: "думать" }, b: { en: "sink", transcr: "синк", ru: "раковина" } },
        { a: { en: "thick", transcr: "сик", ru: "толстый" }, b: { en: "sick", transcr: "сик", ru: "больной" } },
      ],
    },
    {
      id: "vw",
      icon: "👄",
      title_ru: "V и W — зубы или губы",
      goal_ru: "«wet» (мокрый) и «vet» (ветеринар) — перепутаешь, и тебя не поймут.",
      intro_ru: "Для V прикуси нижнюю губу зубами (как русское «в»). Для W вытяни губы трубочкой, зубы не трогают — звук как «у». Это два разных звука.",
      kind: "pairs",
      model: [
        { en: "very", transcr: "вэри", ru: "очень" },
        { en: "vine", transcr: "вайн", ru: "лоза" },
        { en: "wet", transcr: "уэт", ru: "мокрый" },
        { en: "water", transcr: "уотэ", ru: "вода" },
        { en: "work", transcr: "уёк", ru: "работать" },
      ],
      pairs: [
        { a: { en: "vet", transcr: "вэт", ru: "ветеринар" }, b: { en: "wet", transcr: "уэт", ru: "мокрый" } },
        { a: { en: "vine", transcr: "вайн", ru: "лоза" }, b: { en: "wine", transcr: "уайн", ru: "вино" } },
      ],
    },
    {
      id: "h",
      icon: "🌬️",
      title_ru: "Звук H — лёгкий выдох",
      goal_ru: "«hand» (рука) без H звучит как «and» (и) — простое слово, но важное на смене.",
      intro_ru: "H — это тихий выдох горлом, НЕ русское твёрдое «х». А иногда H вообще не читается: hour → «ауэ». Слушай.",
      kind: "pairs",
      model: [
        { en: "hand", transcr: "хэнд", ru: "рука" },
        { en: "head", transcr: "хэд", ru: "голова" },
        { en: "help", transcr: "хэлп", ru: "помогать" },
        { en: "hot", transcr: "хот", ru: "горячий" },
        { en: "hour", transcr: "ауэ", ru: "час (H не читается)" },
      ],
      pairs: [
        { a: { en: "hand", transcr: "хэнд", ru: "рука" }, b: { en: "and", transcr: "энд", ru: "и" } },
        { a: { en: "hill", transcr: "хил", ru: "холм" }, b: { en: "ill", transcr: "ил", ru: "больной" } },
      ],
    },
    {
      id: "stress",
      icon: "🥁",
      title_ru: "Ударение — где удар в слове",
      goal_ru: "Скажешь banana с ударением не туда — англичанин не поймёт обычное слово.",
      intro_ru: "В английском один слог бьётся сильнее других. Послушай слово и нажми тот слог, который звучит ГРОМЧЕ.",
      kind: "stress",
      stress: [
        { en: "supervisor", transcr: "супэвайзэ", ru: "бригадир", syll: ["su", "per", "vi", "sor"], hit: 0 },
        { en: "tomorrow", transcr: "тэмороу", ru: "завтра", syll: ["to", "mo", "rrow"], hit: 1 },
        { en: "banana", transcr: "бэнанэ", ru: "банан", syll: ["ba", "na", "na"], hit: 1 },
        { en: "potato", transcr: "пэтэйтоу", ru: "картофель", syll: ["po", "ta", "to"], hit: 1 },
      ],
    },
    {
      id: "schwa",
      icon: "🔉",
      title_ru: "Слабый слог — глотаем гласную",
      goal_ru: "Англичане говорят безударные слоги слабо и быстро. Узнаёшь их — лучше понимаешь речь.",
      intro_ru: "Не каждый слог звучит полно. Безударный «съедается» в короткое «э»: banana ≈ «бэ-НА-нэ». Слушай, где слог слабый — повторять не обязательно, просто привыкай к звуку.",
      kind: "listen",
      model: [
        { en: "banana", transcr: "бэнанэ", ru: "банан (бэ‑НА‑нэ)" },
        { en: "today", transcr: "тудэй", ru: "сегодня (тэ‑ДЭЙ)" },
        { en: "supervisor", transcr: "супэвайзэ", ru: "бригадир (СУ‑пэ‑вай‑зэ)" },
        { en: "manager", transcr: "мэниджэ", ru: "менеджер (МЭ‑ни‑джэ)" },
        { en: "about", transcr: "эбаут", ru: "о, про (э‑БАУТ)" },
      ],
    },
    {
      id: "ending",
      icon: "🔚",
      title_ru: "Конец слова — не глотай его",
      goal_ru: "Прошедшее время и конец слова несут смысл: work / worked, bad / bag. Договаривай до конца.",
      intro_ru: "Русские глотают конец слова, но в английском он важен. -ed читается тремя способами: …т / …д / …ид. И звонкий конец не оглушай: bad ≠ bat. Слушай и договаривай.",
      kind: "listen",
      model: [
        { en: "worked", transcr: "уёкт", ru: "работал (…т)" },
        { en: "cleaned", transcr: "клинд", ru: "убрал (…д)" },
        { en: "wanted", transcr: "уонтид", ru: "хотел (…ид)" },
        { en: "bad", transcr: "бэд", ru: "плохой" },
        { en: "bat", transcr: "бэт", ru: "бита (конец «т»)" },
        { en: "leave", transcr: "лив", ru: "уходить" },
        { en: "leaf", transcr: "лиф", ru: "лист (конец «ф»)" },
      ],
    },
    // ── Pack 2: vowel length / quality ──────────────────────────────────────
    // Probe 2026-06-29: Microsoft Mark en-US — all 3 blocks audible → drill.
    // Block 3A (cat/cart, RP /æ/–/ɑː/) confirmed audible on en-US voice.
    // transcr of data.js words copied verbatim (check-transcr-consistency).
    // New words (not in data.js): ship, sheep, fit, feet, sit, bean, fool,
    //   pool, Luke, put, boot, cat, cart, ban, barn, bark, hat — IPA by RP
    //   convention; Wiktionary check owed in Phase-3 adversarial review.
    {
      id: "short_i",
      icon: "🐑",
      title_ru: "Короткое /ɪ/ и долгое /iː/ — ship vs sheep",
      goal_ru: "«sit» (сядь) и «seat» (место) — разные команды бригадира. Различаются только длиной гласной.",
      intro_ru: "В русском длина гласной не меняет смысл, поэтому ship и sheep — оба «шип». В английском /ɪ/ короткое и расслабленное, /iː/ тянется вдвое дольше. Кириллица одинаковая — тренируй ухо, не глаза.",
      kind: "pairs",
      model: [
        { en: "ship", transcr: "шип", ru: "корабль (короткое /ɪ/)" },
        { en: "sheep", transcr: "шип", ru: "овца (долгое /iː/)" },
        { en: "sit", transcr: "сит", ru: "садиться (короткое /ɪ/)" },
        { en: "seat", transcr: "сит", ru: "место (долгое /iː/)" },
        { en: "bin", transcr: "бин", ru: "бак (короткое /ɪ/)" },
      ],
      pairs: [
        { a: { en: "ship", transcr: "шип", ru: "корабль" }, b: { en: "sheep", transcr: "шип", ru: "овца" } },
        { a: { en: "fit", transcr: "фит", ru: "подходить" }, b: { en: "feet", transcr: "фит", ru: "ступни" } },
        { a: { en: "sit", transcr: "сит", ru: "садиться" }, b: { en: "seat", transcr: "сит", ru: "место" } },
        { a: { en: "bin", transcr: "бин", ru: "бак" }, b: { en: "bean", transcr: "бин", ru: "фасоль" } },
        { a: { en: "live", transcr: "лив", ru: "жить" }, b: { en: "leave", transcr: "лив", ru: "уходить" } },
      ],
    },
    {
      id: "short_u",
      icon: "🧺",
      title_ru: "Короткое /ʊ/ и долгое /uː/ — full vs fool",
      goal_ru: "«full» (полный ящик) и «fool» (дурак) — по-русски оба «фул», но значения разные. Слушай длину.",
      intro_ru: "В русском «у» всегда одинаковое. В английском /ʊ/ короткое и неглубокое (full), а /uː/ долгое и губы трубочкой (food). По-русски оба «у» — учись слышать разницу.",
      kind: "pairs",
      model: [
        { en: "full", transcr: "фул", ru: "полный (короткое /ʊ/)" },
        { en: "food", transcr: "фуд", ru: "еда (долгое /uː/)" },
        { en: "pull", transcr: "пул", ru: "тянуть (короткое /ʊ/)" },
        { en: "pool", transcr: "пул", ru: "бассейн (долгое /uː/)" },
        { en: "look", transcr: "лук", ru: "смотреть (короткое /ʊ/)" },
      ],
      pairs: [
        { a: { en: "full", transcr: "фул", ru: "полный" }, b: { en: "fool", transcr: "фул", ru: "дурак" } },
        { a: { en: "pull", transcr: "пул", ru: "тянуть" }, b: { en: "pool", transcr: "пул", ru: "бассейн" } },
        { a: { en: "look", transcr: "лук", ru: "смотреть" }, b: { en: "Luke", transcr: "лук", ru: "Люк (имя)" } },
        { a: { en: "foot", transcr: "фут", ru: "ступня" }, b: { en: "food", transcr: "фуд", ru: "еда" } },
      ],
    },
    {
      id: "ae_aa",
      icon: "🛒",
      title_ru: "Звук æ и долгое ɑː — cat vs cart",
      goal_ru: "«pack» (упаковывать) и «park» (парковать) — по-русски оба «пак», но это разные команды. Короткий «э» или долгий «а».",
      intro_ru: "«æ» — рот шире, как «аэ» слитно (cat). «ɑː» — глубокое долгое «а», рот открыт вниз (cart). В русском такого различия нет. Слушай: cart и cat — разные гласные, хотя транскрипция близкая.",
      kind: "pairs",
      model: [
        { en: "cat", transcr: "кэт", ru: "кошка (короткое æ)" },
        { en: "cart", transcr: "кат", ru: "тележка (долгое ɑː)" },
        { en: "pack", transcr: "пэк", ru: "упаковывать (æ)" },
        { en: "park", transcr: "пак", ru: "парковать (ɑː)" },
        { en: "back", transcr: "бэк", ru: "спина (æ)" },
      ],
      pairs: [
        { a: { en: "cat", transcr: "кэт", ru: "кошка" }, b: { en: "cart", transcr: "кат", ru: "тележка" } },
        { a: { en: "ban", transcr: "бэн", ru: "запрет" }, b: { en: "barn", transcr: "бан", ru: "сарай" } },
        { a: { en: "back", transcr: "бэк", ru: "спина" }, b: { en: "bark", transcr: "бак", ru: "кора / лаять" } },
        { a: { en: "pack", transcr: "пэк", ru: "упаковывать" }, b: { en: "park", transcr: "пак", ru: "парковать" } },
        { a: { en: "hat", transcr: "хэт", ru: "шляпа" }, b: { en: "heart", transcr: "хат", ru: "сердце" } },
      ],
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = PHONETICS;
  root.PHONETICS = PHONETICS;
})(typeof window !== "undefined" ? window : this);
