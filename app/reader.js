/*
 * Graded reader for "English for Seasonal Workers" (RU-only, A0-A1).
 * One running story about Ahmad (the L1 hero), split into chapters = lessons.
 *
 * Chapter N reuses ONLY the vocabulary of lessons 1..N + the function-word
 * whitelist (scripts/lib.js activeWhitelist). A few NEW words per chapter are a
 * conscious, dosed addition: each lives in `glossary` (<=5), is rendered BLUE in
 * the text, and opens a popup with transcription + RU + audio on tap. The reader
 * stays static, file://-safe, no runtime generation (offline, risk #1: unverified
 * English). Dual export like data.js / phrasebook.js.
 *
 * Exported as window.BOOKS = [ { id, emoji, title_ru, title_en, sub_ru, chapters:[...] } ]
 * — a shelf of books (one book now: "История Ахмада"; structure ready for more).
 * Each chapter:
 * Schema: chapter = {
 *   id,                 // == lesson id (unlock gate: store.done[id])
 *   emoji, title_ru, title_en,
 *   sentences: [ { en, ru } ],       // body = lessons 1..N vocab + whitelist + glossary[].en
 *   glossary:  [ { en, transcr, ru, pn } ],   // <=5; these tokens are coloured blue
 *   quiz:      [ { q_ru, opts_ru:[4], c } ]   // 2-3 RU comprehension questions, all Russian
 * } ]
 *
 * Glossary transcription is written by hand per the app's Cyrillic conventions
 * (verify-transcr only covers lesson words[], not the reader). IPA verified
 * against Wiktionary / Cambridge (RP).
 *
 * v1 = proof of 3 chapters (L1-L2-L3) only, NOT all 15 — conscious owner override
 * pending the live A0 test B (priority #1). See plans/2026-06-22-reading-book-feature.md.
 */
(function (root) {
  const READER = [
    {
      id: 1,
      emoji: "✈️",
      title_ru: "Ахмад приезжает",
      title_en: "Ahmad arrives",
      sentences: [
        { en: "Hello! I am Ahmad.", ru: "Привет! Я — Ахмад." },
        { en: "I am from Uzbekistan.", ru: "Я из Узбекистана." },
        { en: "I am a worker.", ru: "Я рабочий." },
        { en: "This is Britain.", ru: "Это Британия." },
        { en: "This is a big farm.", ru: "Это большая ферма." },
        { en: "Tom is the manager.", ru: "Том — менеджер." },
        { en: "He is British.", ru: "Он британец." },
        { en: '"Good morning, Ahmad! Welcome!"', ru: "«Доброе утро, Ахмад! Добро пожаловать!»" },
        { en: "Ahmad is a new picker.", ru: "Ахмад — новый сборщик." },
        { en: "Anna is a packer.", ru: "Анна — упаковщица." },
        { en: "She is from Kazakhstan.", ru: "Она из Казахстана." },
        { en: "Anna and Ahmad are a team.", ru: "Анна и Ахмад — одна команда." },
        { en: "Ahmad is happy.", ru: "Ахмад рад." },
        { en: '"You are welcome here, Ahmad!"', ru: "«Тебе здесь рады, Ахмад!»" },
      ],
      glossary: [
        { en: "big", transcr: "биг", ru: "большой", pn: "/bɪɡ/" },
        { en: "new", transcr: "нью", ru: "новый", pn: "/njuː/" },
        { en: "happy", transcr: "хэпи", ru: "рад, счастлив", pn: "/ˈhæpi/" },
        { en: "here", transcr: "хиэ", ru: "здесь", pn: "/hɪə/" },
      ],
      quiz: [
        { q_ru: "Откуда приехал Ахмад?", opts_ru: ["Из Узбекистана", "Из Британии", "Из Казахстана", "Из Таджикистана"], c: 0 },
        { q_ru: "Кто такой Том?", opts_ru: ["Менеджер", "Сборщик", "Водитель", "Механик"], c: 0 },
        { q_ru: "Кем работает Ахмад?", opts_ru: ["Сборщик (picker)", "Упаковщик (packer)", "Водитель (driver)", "Уборщик (cleaner)"], c: 0 },
      ],
    },
    {
      id: 2,
      emoji: "👨‍👩‍👦",
      title_ru: "Семья и друзья Ахмада",
      title_en: "Ahmad's family and friends",
      sentences: [
        { en: "This is my family.", ru: "Это моя семья." },
        { en: "This is a photo.", ru: "Это фото." },
        { en: "My wife is Fatima.", ru: "Моя жена — Фатима." },
        { en: "She is from Uzbekistan.", ru: "Она из Узбекистана." },
        { en: "This is my son, Ali.", ru: "Это мой сын, Али." },
        { en: "He is a baby.", ru: "Он малыш." },
        { en: "Sara is my colleague.", ru: "Сара — моя коллега." },
        { en: "She is a cleaner.", ru: "Она уборщица." },
        { en: "John is my friend.", ru: "Джон — мой друг." },
        { en: "He is a mechanic.", ru: "Он механик." },
        { en: "This is my locker.", ru: "Это мой шкафчик." },
        { en: "My badge is here.", ru: "Мой бейдж здесь." },
        { en: "Sara and John are good colleagues.", ru: "Сара и Джон — хорошие коллеги." },
      ],
      glossary: [
        { en: "photo", transcr: "фоутоу", ru: "фото", pn: "/ˈfəʊtəʊ/" },
        { en: "here", transcr: "хиэ", ru: "здесь", pn: "/hɪə/" },
      ],
      quiz: [
        { q_ru: "Как зовут жену Ахмада?", opts_ru: ["Фатима", "Анна", "Сара", "Аиша"], c: 0 },
        { q_ru: "Кто такой Али?", opts_ru: ["Сын Ахмада", "Брат Ахмада", "Друг Ахмада", "Менеджер"], c: 0 },
        { q_ru: "Кем работает Сара?", opts_ru: ["Уборщица (cleaner)", "Механик (mechanic)", "Упаковщица (packer)", "Менеджер (manager)"], c: 0 },
      ],
    },
    {
      id: 3,
      emoji: "🧰",
      title_ru: "Вещи на ферме",
      title_en: "Things on the farm",
      sentences: [
        { en: "Ahmad is a picker.", ru: "Ахмад — сборщик." },
        { en: "This is his job.", ru: "Это его работа." },
        { en: "Tom is the manager.", ru: "Том — менеджер." },
        { en: "This is a crate.", ru: "Это ящик." },
        { en: "These are punnets.", ru: "Это корзинки (для ягод)." },
        { en: "These punnets are small.", ru: "Эти корзинки маленькие." },
        { en: "This is a trolley.", ru: "Это тележка." },
        { en: "That is a ladder.", ru: "То — лестница." },
        { en: "These are tools.", ru: "Это инструменты." },
        { en: "This is a knife.", ru: "Это нож." },
        { en: "The knife is sharp.", ru: "Нож острый." },
        { en: '"Be careful, Ahmad!"', ru: "«Осторожно, Ахмад!»" },
        { en: "That is a hammer.", ru: "То — молоток." },
        { en: "That is a saw.", ru: "То — пила." },
        { en: "Those are boxes.", ru: "Те — коробки." },
        { en: "Ahmad is a good picker.", ru: "Ахмад — хороший сборщик." },
        { en: '"You are a good worker, Ahmad!"', ru: "«Ты хороший работник, Ахмад!»" },
      ],
      glossary: [
        { en: "small", transcr: "смол", ru: "маленький", pn: "/smɔːl/" },
        { en: "sharp", transcr: "шарп", ru: "острый", pn: "/ʃɑːp/" },
        { en: "careful", transcr: "кэафул", ru: "осторожный, осторожно", pn: "/ˈkeəfəl/" },
      ],
      quiz: [
        { q_ru: "Кем работает Ахмад?", opts_ru: ["Сборщик (picker)", "Механик (mechanic)", "Менеджер (manager)", "Водитель (driver)"], c: 0 },
        { q_ru: "Какой нож?", opts_ru: ["Острый", "Тупой", "Большой", "Старый"], c: 0 },
        { q_ru: "Что Том сказал Ахмаду в конце?", opts_ru: ["Ты хороший работник", "Осторожно", "Доброе утро", "До свидания"], c: 0 },
      ],
    },
    {
      id: 4,
      emoji: "⏰",
      title_ru: "Рабочий день",
      title_en: "A work day",
      sentences: [
        { en: "It is Monday.", ru: "Сегодня понедельник." },
        { en: "It is morning.", ru: "Сейчас утро." },
        { en: "It is seven o'clock.", ru: "Семь часов." },
        { en: "Ahmad is a picker.", ru: "Ахмад — сборщик." },
        { en: "Today is a good day.", ru: "Сегодня хороший день." },
        { en: '"Good morning, Ahmad!"', ru: "«Доброе утро, Ахмад!»" },
        { en: "Ahmad is fast.", ru: "Ахмад быстрый." },
        { en: "The day is long.", ru: "День длинный." },
        { en: "It is half past three.", ru: "Половина четвёртого." },
        { en: "It is Friday.", ru: "Сегодня пятница." },
        { en: "This is a payslip.", ru: "Это расчётный лист (payslip)." },
        { en: "It is my money.", ru: "Это мои деньги." },
        { en: "It is a good week.", ru: "Хорошая неделя." },
      ],
      glossary: [
        { en: "fast", transcr: "фаст", ru: "быстрый", pn: "/fɑːst/" },
        { en: "long", transcr: "лонг", ru: "длинный", pn: "/lɒŋ/" },
      ],
      quiz: [
        { q_ru: "Какой сегодня день в начале истории?", opts_ru: ["Понедельник", "Пятница", "Среда", "Воскресенье"], c: 0 },
        { q_ru: "Что Ахмад получает в пятницу?", opts_ru: ["Расчётный лист (payslip)", "Ящик", "Трактор", "Ключ"], c: 0 },
        { q_ru: "Какой Ахмад работник?", opts_ru: ["Быстрый", "Медленный", "Усталый", "Старый"], c: 0 },
      ],
    },
    {
      id: 5,
      emoji: "🗺️",
      title_ru: "Где что на ферме",
      title_en: "Around the farm",
      sentences: [
        { en: "This is the camp.", ru: "Это лагерь (кэмп)." },
        { en: "It is a big camp.", ru: "Это большой лагерь." },
        { en: '"Where is the canteen?"', ru: "«Где столовая?»" },
        { en: "It is near the gate.", ru: "Она рядом с воротами." },
        { en: "The shop is on the left.", ru: "Магазин слева." },
        { en: "The toilet is on the right.", ru: "Туалет справа." },
        { en: '"Where is the office?"', ru: "«Где офис?»" },
        { en: "It is behind the shed.", ru: "Он за сараем." },
        { en: "Tom is in the office.", ru: "Том в офисе." },
        { en: "This is the road.", ru: "Это дорога." },
        { en: "A tractor is on the road.", ru: "Трактор на дороге." },
        { en: "The field is near the river.", ru: "Поле рядом с рекой." },
        { en: "A tree is on the hill.", ru: "Дерево на холме." },
        { en: '"Thank you, Tom!"', ru: "«Спасибо, Том!»" },
      ],
      glossary: [
        { en: "big", transcr: "биг", ru: "большой", pn: "/bɪɡ/" },
        { en: "left", transcr: "лэфт", ru: "слева, левый", pn: "/left/" },
        { en: "right", transcr: "райт", ru: "справа, правый", pn: "/raɪt/" },
      ],
      quiz: [
        { q_ru: "Где столовая?", opts_ru: ["Рядом с воротами", "На холме", "За рекой", "В офисе"], c: 0 },
        { q_ru: "Что находится слева?", opts_ru: ["Магазин", "Туалет", "Офис", "Трактор"], c: 0 },
        { q_ru: "Где Том?", opts_ru: ["В офисе", "В столовой", "На дороге", "На холме"], c: 0 },
      ],
    },
    {
      id: 6,
      emoji: "🔁",
      title_ru: "Каждый день",
      title_en: "Every day",
      sentences: [
        { en: "Ahmad is a picker.", ru: "Ахмад — сборщик." },
        { en: "He works on the farm.", ru: "Он работает на ферме." },
        { en: "He works every day.", ru: "Он работает каждый день." },
        { en: "Ahmad starts work.", ru: "Ахмад начинает работу." },
        { en: "He picks berries.", ru: "Он собирает ягоды." },
        { en: "He works fast.", ru: "Он работает быстро." },
        { en: "Ahmad fills the crate.", ru: "Ахмад наполняет ящик." },
        { en: "He carries it.", ru: "Он несёт его." },
        { en: "Tom checks them.", ru: "Том проверяет их." },
        { en: "Tom gives him a crate.", ru: "Том даёт ему ящик." },
        { en: "They pick berries.", ru: "Они собирают ягоды." },
        { en: "Ahmad packs the berries.", ru: "Ахмад упаковывает ягоды." },
        { en: "He weighs them.", ru: "Он их взвешивает." },
        { en: '"Thank you, Ahmad!"', ru: "«Спасибо, Ахмад!»" },
      ],
      glossary: [
        { en: "every", transcr: "эври", ru: "каждый", pn: "/ˈɛvri/" },
        { en: "fast", transcr: "фаст", ru: "быстро", pn: "/fɑːst/" },
      ],
      quiz: [
        { q_ru: "Как часто Ахмад работает?", opts_ru: ["Каждый день", "Никогда", "Иногда", "Один раз"], c: 0 },
        { q_ru: "Что собирает Ахмад?", opts_ru: ["Ягоды (berries)", "Картошку (potato)", "Рыбу (fish)", "Хлеб (bread)"], c: 0 },
        { q_ru: "Кто проверяет ящики?", opts_ru: ["Том", "Сара", "Джон", "Анна"], c: 0 },
      ],
    },
    // ── Chapter 7 ──────────────────────────────────────────────────────────
    {
      id: 7,
      emoji: "🌧️",
      title_ru: "Что сейчас происходит",
      title_en: "What is happening now",
      sentences: [
        { en: "It is morning.", ru: "Сейчас утро." },
        { en: "It is raining.", ru: "Идёт дождь." },
        { en: "Ahmad is walking to the field.", ru: "Ахмад идёт в поле." },
        { en: "He is walking slowly.", ru: "Он идёт медленно." },
        { en: "Tom is standing near the gate.", ru: "Том стоит рядом с воротами." },
        { en: "Tom is talking to the team.", ru: "Том разговаривает с командой." },
        { en: "Anna is picking berries.", ru: "Анна собирает ягоды." },
        { en: "She is working quickly.", ru: "Она работает быстро." },
        { en: "Ahmad is filling the crate.", ru: "Ахмад наполняет ящик." },
        { en: "Ahmad is busy.", ru: "Ахмад занят." },
        { en: "Tom is helping Ahmad.", ru: "Том помогает Ахмаду." },
        { en: "Sara is sweeping the camp.", ru: "Сара подметает лагерь." },
        { en: '"What are you doing, Ahmad?"', ru: "«Что ты делаешь, Ахмад?»" },
        { en: '"I am filling the crate, Tom!"', ru: "«Я наполняю ящик, Том!»" },
      ],
      glossary: [
        { en: "slowly", transcr: "слоули", ru: "медленно", pn: "/ˈsləʊli/" },
        { en: "quickly", transcr: "куикли", ru: "быстро", pn: "/ˈkwɪkli/" },
        { en: "busy", transcr: "бизи", ru: "занят", pn: "/ˈbɪzi/" },
      ],
      quiz: [
        { q_ru: "Что делает Ахмад в начале истории?", opts_ru: ["Идёт в поле", "Стоит у ворот", "Наполняет ящик", "Подметает лагерь"], c: 0 },
        { q_ru: "Кто работает быстро?", opts_ru: ["Том", "Анна", "Ахмад", "Сара"], c: 1 },
        { q_ru: "Что говорит Ахмад Тому в конце?", opts_ru: ["Я иду в поле", "Я помогаю Тому", "Я наполняю ящик", "Я подметаю лагерь"], c: 2 },
      ],
    },
    // ── Chapter 8 ──────────────────────────────────────────────────────────
    {
      id: 8,
      emoji: "🦺",
      title_ru: "Одежда и цвета",
      title_en: "Clothes and colours",
      sentences: [
        { en: "It is morning.", ru: "Сейчас утро." },
        { en: "Ahmad has a yellow vest.", ru: "У Ахмада жёлтый жилет." },
        { en: "He has green wellies.", ru: "У него зелёные резиновые сапоги." },
        { en: "He has orange gloves.", ru: "У него оранжевые перчатки." },
        { en: "His jacket is blue.", ru: "Его куртка синяя." },
        { en: "His jacket is warm.", ru: "Его куртка тёплая." },
        { en: "Tom has a white cap.", ru: "У Тома белая кепка." },
        { en: "Anna has a red coat.", ru: "У Анны красное пальто." },
        { en: "Ahmad has a helmet.", ru: "У Ахмада каска." },
        { en: "The helmet is safe.", ru: "Каска защищает." },
        { en: "He has goggles.", ru: "У него защитные очки." },
        { en: '"Do you have your mask, Ahmad?"', ru: "«У тебя есть маска, Ахмад?»" },
        { en: '"Yes! I have my mask."', ru: "«Да! У меня маска.»" },
        { en: "Ahmad is a good worker.", ru: "Ахмад — хороший рабочий." },
      ],
      glossary: [
        { en: "warm", transcr: "уорм", ru: "тёплый", pn: "/wɔːm/" },
        { en: "safe", transcr: "сэйф", ru: "безопасный, защищает", pn: "/seɪf/" },
      ],
      quiz: [
        { q_ru: "Какого цвета жилет Ахмада?", opts_ru: ["Жёлтый", "Красный", "Синий", "Белый"], c: 0 },
        { q_ru: "Что защищает голову Ахмада?", opts_ru: ["Кепка (cap)", "Каска (helmet)", "Очки (goggles)", "Маска (mask)"], c: 1 },
        { q_ru: "Какая куртка у Ахмада?", opts_ru: ["Красная и тёплая", "Белая и холодная", "Синяя и тёплая", "Жёлтая и новая"], c: 2 },
      ],
    },
    // ── Chapter 9 ──────────────────────────────────────────────────────────
    {
      id: 9,
      emoji: "🛏️",
      title_ru: "Комната Ахмада",
      title_en: "Ahmad's room",
      sentences: [
        { en: "This is Ahmad's room.", ru: "Это комната Ахмада." },
        { en: "The room is small.", ru: "Комната маленькая." },
        { en: "There is a bed.", ru: "Есть кровать." },
        { en: "The bed is cold.", ru: "Кровать холодная." },
        { en: "There is a heater.", ru: "Есть обогреватель." },
        { en: "The heater is broken.", ru: "Обогреватель сломан." },
        { en: "Ahmad is cold.", ru: "Ахмаду холодно." },
        { en: "There is a blanket.", ru: "Есть одеяло." },
        { en: "The room is dirty.", ru: "Комната грязная." },
        { en: "There is a mug.", ru: "Есть кружка." },
        { en: "The mug is empty.", ru: "Кружка пустая." },
        { en: "Ahmad's key is on the shelf.", ru: "Ключ Ахмада лежит на полке." },
        { en: '"Tom! The heater is not working!"', ru: "«Том! Обогреватель не работает!»" },
        { en: '"I am sorry, Ahmad!"', ru: "«Мне жаль, Ахмад!»" },
        { en: "Tom fixes the heater.", ru: "Том чинит обогреватель." },
        { en: "The room is nice now.", ru: "Теперь комната хорошая." },
      ],
      glossary: [
        { en: "small", transcr: "смол", ru: "маленький", pn: "/smɔːl/" },
        { en: "dirty", transcr: "дёрти", ru: "грязный", pn: "/ˈdɜːti/" },
        { en: "nice", transcr: "найс", ru: "хороший, приятный", pn: "/naɪs/" },
      ],
      quiz: [
        { q_ru: "Почему Ахмаду холодно?", opts_ru: ["Сломан обогреватель (heater)", "Нет одеяла", "Открыто окно", "Холодный душ"], c: 0 },
        { q_ru: "Что лежит на полке?", opts_ru: ["Кружка (mug)", "Ключ Ахмада (key)", "Одеяло (blanket)", "Вилка (fork)"], c: 1 },
        { q_ru: "Какой стала комната в конце?", opts_ru: ["Грязной и холодной", "Маленькой и пустой", "Темной и сломанной", "Хорошей"], c: 3 },
      ],
    },
  ];

  // Library = shelf of books. One book now ("История Ахмада"); the structure is
  // ready to hold more later. Chapters keep id == lesson id (the unlock gate).
  const BOOKS = [
    {
      id: "ahmad",
      emoji: "📖",
      title_ru: "История Ахмада",
      title_en: "Ahmad's story",
      sub_ru: "Сезон на ферме — глава за главой",
      chapters: READER,
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = BOOKS;
  else root.BOOKS = BOOKS;
})(typeof window !== "undefined" ? window : globalThis);
