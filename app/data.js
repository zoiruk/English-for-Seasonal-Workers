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
    {
      id: 1,
      mod: 1,
      title_ru: "Привет! Я — Ахмад",
      cefr: "am/is/are · Subject pronouns",

      grammar: {
        title_ru: "Глагол TO BE: am / is / are",
        intro_ru:
          '<div style="line-height:1.6">Так говорить — ошибка:<br>❌ <b>I worker</b><br>Правильно:<br>✅ <b>I am a worker</b> <span class="g-transcr">[ай эм э вёкэ]</span><br>👉 Между «кто» и «какой» всегда ставим <b>am / is / are</b>.</div>',
        cultural_ru:
          "В русском мы говорим «Я рабочий» без глагола. В английском глагол <b>am/is/are</b> (быть) ОБЯЗАТЕЛЕН — его нельзя пропускать.",
        note_ru: '⚠️ НЕ говорите «I is» или «He am». I → <b>am</b>, he/she/it → <b>is</b>, you/we/they → <b>are</b>.',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I am</code> <span class="g-transcr">[ай эм]</span> (я)</div>' +
              '<div><code>We are</code> <span class="g-transcr">[уи ар]</span> (мы)</div>' +
              '<div><code>You are</code> <span class="g-transcr">[ю ар]</span> (ты/вы)</div>' +
              '<div><code>They are</code> <span class="g-transcr">[зэй ар]</span> (они)</div>' +
              '<div><code>He is</code> <span class="g-transcr">[хи из]</span> (он)</div>' +
              '<div><code>She is</code> <span class="g-transcr">[ши из]</span> (она)</div>' +
              '<div><code>It is</code> <span class="g-transcr">[ит из]</span> (оно)</div></div>',
            table: [
              { subj: "I", verb: "am", example: "I am a worker", transcr: "Ай эм э вёкэ", tr_ru: "Я — рабочий" },
              { subj: "You", verb: "are", example: "You are a farmer", transcr: "Ю ар э фармэ", tr_ru: "Ты — фермер" },
              { subj: "He", verb: "is", example: "He is a picker", transcr: "Хи из э пикэ", tr_ru: "Он — сборщик" },
              { subj: "We", verb: "are", example: "We are a team", transcr: "Уи ар э тим", tr_ru: "Мы — бригада" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'Добавляем <b>not</b> после глагола:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I am not</code> <span class="g-transcr">[ай эм нот]</span> (я не)</div>' +
              '<div><code>He is not</code> <span class="g-transcr">[хи из нот]</span> (он не)</div>' +
              '<div><code>You are not</code> <span class="g-transcr">[ю ар нот]</span> (ты не)</div>' +
              '<div><code>We are not</code> <span class="g-transcr">[уи ар нот]</span> (мы не)</div></div>',
            table: [
              { subj: "I", verb: "am not", example: "I am not a manager", transcr: "Ай эм нот э мэниджэ", tr_ru: "Я не менеджер" },
              { subj: "She", verb: "is not", example: "She is not a driver", transcr: "Ши из нот э драйвэ", tr_ru: "Она не водитель" },
              { subj: "They", verb: "are not", example: "They are not from Britain", transcr: "Зэй ар нот фром бритн", tr_ru: "Они не из Британии" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              'Глагол выходит вперёд:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Am I?</code> <span class="g-transcr">[эм ай]</span> (я?)</div>' +
              '<div><code>Is he?</code> <span class="g-transcr">[из хи]</span> (он?)</div>' +
              '<div><code>Are you?</code> <span class="g-transcr">[ар ю]</span> (ты?)</div>' +
              '<div><code>Are they?</code> <span class="g-transcr">[ар зэй]</span> (они?)</div></div>',
            table: [
              { subj: "Am", verb: "I", example: "Am I a worker?", transcr: "Эм ай э вёкэ", tr_ru: "Я рабочий?" },
              { subj: "Is", verb: "he", example: "Is he a packer?", transcr: "Из хи э пэкэ", tr_ru: "Он упаковщик?" },
              { subj: "Are", verb: "you", example: "Are you from Kazakhstan?", transcr: "Ар ю фром казахстан", tr_ru: "Ты из Казахстана?" },
            ],
          },
        },
        examples: [
          { en: "Hello! I am Ahmad.", transcr: "Хэлоу! Ай эм Ахмад.", ru: "Привет! Я — Ахмад." },
          { en: "I am from Uzbekistan.", transcr: "Ай эм фром узбекистан.", ru: "Я из Узбекистана." },
          { en: "He is my friend.", transcr: "Хи из май фрэнд.", ru: "Он — мой друг." },
          { en: "We are a good team.", transcr: "Уи ар э гуд тим.", ru: "Мы — хорошая бригада." },
        ],
      },

      words: [
        { e: "👋", en: "hello", transcr: "хэлоу", ru: "привет", pn: "/həˈləʊ/" },
        { e: "👋", en: "goodbye", transcr: "гудбай", ru: "до свидания", pn: "/ɡʊdˈbaɪ/" },
        { e: "✅", en: "yes", transcr: "йес", ru: "да", pn: "/jes/" },
        { e: "❌", en: "no", transcr: "ноу", ru: "нет", pn: "/nəʊ/" },
        { e: "🙏", en: "please", transcr: "плиз", ru: "пожалуйста", pn: "/pliːz/" },
        { e: "🙏", en: "thanks", transcr: "сэнкс", ru: "спасибо", pn: "/θæŋks/" },
        { e: "😔", en: "sorry", transcr: "сори", ru: "извините", pn: "/ˈsɒri/" },
        { e: "🪪", en: "name", transcr: "нэйм", ru: "имя", pn: "/neɪm/" },
        { e: "👷", en: "worker", transcr: "вёкэ", ru: "рабочий", pn: "/ˈwɜːkə/" },
        { e: "🚜", en: "farm", transcr: "фарм", ru: "ферма", pn: "/fɑːm/" },
        { e: "🌾", en: "field", transcr: "филд", ru: "поле", pn: "/fiːld/" },
        { e: "👨‍🌾", en: "farmer", transcr: "фармэ", ru: "фермер", pn: "/ˈfɑːmə/" },
        { e: "👔", en: "manager", transcr: "мэниджэ", ru: "менеджер", pn: "/ˈmænɪdʒə/" },
        { e: "🦺", en: "supervisor", transcr: "съюпэвайзэ", ru: "бригадир", pn: "/ˈsuːpəvaɪzə/" },
        { e: "👥", en: "team", transcr: "тим", ru: "бригада", pn: "/tiːm/" },
        { e: "✋", en: "picker", transcr: "пикэ", ru: "сборщик", pn: "/ˈpɪkə/" },
        { e: "📦", en: "packer", transcr: "пэкэ", ru: "упаковщик", pn: "/ˈpækə/" },
        { e: "🚐", en: "driver", transcr: "драйвэ", ru: "водитель", pn: "/ˈdraɪvə/" },
        { e: "🤝", en: "friend", transcr: "фрэнд", ru: "друг", pn: "/frend/" },
        { e: "🌅", en: "morning", transcr: "монинг", ru: "утро", pn: "/ˈmɔːnɪŋ/" },
        { e: "🛂", en: "passport", transcr: "паспорт", ru: "паспорт", pn: "/ˈpɑːspɔːt/" },
        { e: "📄", en: "visa", transcr: "визэ", ru: "виза", pn: "/ˈviːzə/" },
        { e: "🗺️", en: "country", transcr: "кантри", ru: "страна", pn: "/ˈkʌntri/" },
        { e: "🇺🇿", en: "Uzbekistan", transcr: "узбекистан", ru: "Узбекистан", pn: "/ʊzˌbekɪˈstɑːn/" },
        { e: "🇹🇯", en: "Tajikistan", transcr: "таджикистан", ru: "Таджикистан", pn: "/təˈdʒiːkɪˌstɑːn/" },
        { e: "🇰🇬", en: "Kyrgyzstan", transcr: "кыргызстан", ru: "Кыргызстан", pn: "/ˈkɪəɡɪˌstɑːn/" },
        { e: "🇰🇿", en: "Kazakhstan", transcr: "казахстан", ru: "Казахстан", pn: "/ˌkæzəkˈstɑːn/" },
        { e: "🇬🇧", en: "Britain", transcr: "бритн", ru: "Британия", pn: "/ˈbrɪtn/" },
        { e: "🗣️", en: "English", transcr: "инглиш", ru: "английский", pn: "/ˈɪŋɡlɪʃ/" },
        { e: "🙌", en: "welcome", transcr: "вэлкэм", ru: "добро пожаловать", pn: "/ˈwelkəm/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! I am Tom, your manager.", transcr: "Гуд монинг! Ай эм Том, ё мэниджэ.", ru: "Доброе утро! Я Том, твой менеджер." },
        { s: "w", en: "Good morning. My name is Ahmad.", transcr: "Гуд монинг. Май нэйм из Ахмад.", ru: "Доброе утро. Меня зовут Ахмад." },
        { s: "m", en: "Where are you from, Ahmad?", transcr: "Уэа ар ю фром, Ахмад?", ru: "Откуда ты, Ахмад?" },
        { s: "w", en: "I am from Tajikistan.", transcr: "Ай эм фром таджикистан.", ru: "Я из Таджикистана." },
        { s: "m", en: "Are you a picker?", transcr: "Ар ю э пикэ?", ru: "Ты сборщик?" },
        { s: "w", en: "No. I am a packer.", transcr: "Ноу. Ай эм э пэкэ.", ru: "Нет. Я упаковщик." },
        { s: "m", en: "This is Sara. She is a picker.", transcr: "Зис из Сара. Ши из э пикэ.", ru: "Это Сара. Она сборщица." },
        { s: "w", en: "Hello, Sara! I am Ahmad.", transcr: "Хэлоу, Сара! Ай эм Ахмад.", ru: "Привет, Сара! Я Ахмад." },
        { s: "m", en: "Sara is from Kazakhstan.", transcr: "Сара из фром казахстан.", ru: "Сара из Казахстана." },
        { s: "w", en: "We are a good team!", transcr: "Уи ар э гуд тим!", ru: "Мы — хорошая бригада!" },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ Ahmad."', opts: ["am", "is", "are", "be"], c: 0, expl: "С местоимением I (я) всегда am.", hint_ru: "Я — Ахмад." },
        { q: '[COMPLETE] "He ___ a picker."', opts: ["am", "is", "are", "be"], c: 1, expl: "He / she / it → is.", hint_ru: "Он — сборщик." },
        { q: '[COMPLETE] "You ___ from Britain."', opts: ["am", "is", "are", "be"], c: 2, expl: "You / we / they → are.", hint_ru: "Ты из Британии." },
        { q: '[COMPLETE] "We ___ a team."', opts: ["is", "am", "are", "be"], c: 2, expl: "We → are.", hint_ru: "Мы — бригада." },
        { q: "[NEGATIVE] Где отрицание?", opts: ["I am a worker", "I am not a worker", "Am I a worker?", "I a worker"], c: 1, expl: "Отрицание = am/is/are + not.", hint_ru: "Я не рабочий." },
        { q: '[QUESTION] "___ you from Tajikistan?"', opts: ["Am", "Is", "Are", "Be"], c: 2, expl: "Вопрос с you → Are в начале.", hint_ru: "Ты из Таджикистана?" },
        { q: '[TRANSLATE] "Доброе утро"', opts: ["Good morning", "Goodbye", "Hello", "Thanks"], c: 0, expl: "morning — утро.", hint_ru: "Good morning." },
        { q: '[COMPLETE] "My ___ is Ahmad."', opts: ["name", "team", "manager", "friend"], c: 0, expl: "name — имя.", hint_ru: "Меня зовут Ахмад." },
        { q: '[COMPLETE] "She ___ a packer."', opts: ["are", "am", "is", "be"], c: 2, expl: "She → is.", hint_ru: "Она — упаковщица." },
        { q: "[CORRECT] Где правильно?", opts: ["He am a farmer", "He is a farmer", "He are a farmer", "He a farmer"], c: 1, expl: "He → is. Глагол нельзя пропускать.", hint_ru: "Он — фермер." },
      ],
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = LESSONS;
  else root.LESSONS = LESSONS;
})(typeof window !== "undefined" ? window : globalThis);
