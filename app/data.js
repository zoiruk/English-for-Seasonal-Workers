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
          { en: "He is a farmer.", transcr: "Хи из э фармэ.", ru: "Он — фермер." },
          { en: "We are a good team.", transcr: "Уи ар э гуд тим.", ru: "Мы — хорошая бригада." },
          { en: "She is British.", transcr: "Ши из бритиш.", ru: "Она — британка." },
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
        { e: "🦺", en: "supervisor", transcr: "супэвайзэ", ru: "бригадир", pn: "/ˈsuːpəvaɪzə/" },
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
        { e: "🇺🇿", en: "Uzbek", transcr: "узбэк", ru: "узбек (из Узбекистана)", pn: "/ˈʊzbek/" },
        { e: "🇹🇯", en: "Tajik", transcr: "таджик", ru: "таджик (из Таджикистана)", pn: "/tɑːˈdʒiːk/" },
        { e: "🇰🇬", en: "Kyrgyz", transcr: "кёгиз", ru: "киргиз (из Кыргызстана)", pn: "/ˈkɪəɡɪz/" },
        { e: "🇰🇿", en: "Kazakh", transcr: "кэзэк", ru: "казах (из Казахстана)", pn: "/ˈkæzæk/" },
        { e: "🇬🇧", en: "British", transcr: "бритиш", ru: "британец (из Британии)", pn: "/ˈbrɪtɪʃ/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! I am Tom, the manager.", transcr: "Гуд монинг! Ай эм Том, зэ мэниджэ.", ru: "Доброе утро! Я Том, менеджер." },
        { s: "w", en: "Hello! I am Ahmad.", transcr: "Хэлоу! Ай эм Ахмад.", ru: "Привет! Я Ахмад." },
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
        { q: '[TRANSLATE] "рабочий"', opts: ["worker", "farmer", "driver", "manager"], c: 0, expl: "worker — рабочий.", hint_ru: "worker." },
        { q: '[COMPLETE] "She ___ a packer."', opts: ["are", "am", "is", "be"], c: 2, expl: "She → is.", hint_ru: "Она — упаковщица." },
        { q: "[CORRECT] Где правильно?", opts: ["He am a farmer", "He is a farmer", "He are a farmer", "He a farmer"], c: 1, expl: "He → is. Глагол нельзя пропускать.", hint_ru: "Он — фермер." },
        { q: "[LISTEN] I am a packer.", opts: ["Я упаковщик.", "Я сборщик.", "Я менеджер.", "Я водитель."], c: 0, expl: "packer — упаковщик. Не путать с picker — сборщик." },
        { q: "[GIST] Откуда Ахмад и кем он работает?", opts: ["Из Таджикистана, упаковщик", "Из Узбекистана, сборщик", "Из Британии, водитель", "Из Казахстана, менеджер"], c: 0, expl: "Ахмад говорит: \"I am from Tajikistan\" и \"I am a packer\".", hint_ru: "Вспомните диалог." },
        { q: '[TRANSLATE] "британец / британский"', opts: ["British", "English", "Uzbek", "Kazakh"], c: 0, expl: "British — британец. Не путать: English — только язык.", hint_ru: "British." },
      ],

      everyday: {
        title_ru: "Первые фразы: знакомство и «не понимаю»",
        phrases: [
          { en: "Hello!", transcr: "Хэлоу!", ru: "Здравствуйте!" },
          { en: "My name is Ahmad.", transcr: "Май нэйм из Ахмад.", ru: "Меня зовут Ахмад." },
          { en: "Sorry?", transcr: "Сори?", ru: "Простите? / Что?" },
          { en: "Again, please.", transcr: "Эгэн, плиз.", ru: "Повторите, пожалуйста." },
          { en: "Slowly, please.", transcr: "Слоули, плиз.", ru: "Медленнее, пожалуйста." },
          { en: "I don't understand.", transcr: "Ай доунт андэстэнд.", ru: "Я не понимаю." },
          { en: "How do you spell it?", transcr: "Хау ду ю спэл ит?", ru: "Как это пишется по буквам?" },
          { en: "Thank you!", transcr: "Сэнк ю!", ru: "Спасибо!" },
          { en: "Goodbye!", transcr: "Гудбай!", ru: "До свидания!" },
        ],
      },
    },

    {
      id: 2,
      mod: 1,
      title_ru: "Моя семья и моя работа",
      cefr: "Possessives my/your/his/her · 's",

      grammar: {
        title_ru: "Притяжательные: my / your / his / her",
        intro_ru:
          '<div style="line-height:1.6">Так говорить — ошибка:<br>❌ <b>bag my</b><br>Правильно:<br>✅ <b>my bag</b> <span class="g-transcr">[май бэг]</span> (моя сумка)<br>👉 Слово «чей» всегда ставим <b>перед</b> предметом.</div>',
        cultural_ru:
          "В английском <b>his</b> = принадлежит мужчине, <b>her</b> = женщине — независимо от самого предмета. В русском «его/её» мы выбираем иначе.",
        note_ru: '⚠️ Не путать: <b>his</b> (его — о мужчине) и <b>her</b> (её — о женщине).',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>my</code> <span class="g-transcr">[май]</span> (мой)</div>' +
              '<div><code>our</code> <span class="g-transcr">[ауэ]</span> (наш)</div>' +
              '<div><code>your</code> <span class="g-transcr">[ё]</span> (твой/ваш)</div>' +
              '<div><code>their</code> <span class="g-transcr">[зэа]</span> (их)</div>' +
              '<div><code>his</code> <span class="g-transcr">[хиз]</span> (его)</div>' +
              '<div><code>her</code> <span class="g-transcr">[хё]</span> (её)</div></div>',
            table: [
              { subj: "I", verb: "my", example: "my bag", transcr: "май бэг", tr_ru: "моя сумка" },
              { subj: "You", verb: "your", example: "your locker", transcr: "ё локэ", tr_ru: "твой шкафчик" },
              { subj: "He", verb: "his", example: "his badge", transcr: "хиз бэдж", tr_ru: "его бейдж" },
              { subj: "She", verb: "her", example: "her phone", transcr: "хё фоун", tr_ru: "её телефон" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'Добавляем <b>not</b> к глаголу <b>is/are</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>This is not my bag</code></div>' +
              '<div><code>That is not his locker</code></div></div>',
            table: [
              { subj: "This", verb: "is not", example: "This is not my bag", transcr: "Зис из нот май бэг", tr_ru: "Это не моя сумка" },
              { subj: "That", verb: "is not", example: "That is not his locker", transcr: "Зэт из нот хиз локэ", tr_ru: "Тот шкафчик не его" },
              { subj: "They", verb: "are not", example: "They are not our colleagues", transcr: "Зэй ар нот ауэ колигз", tr_ru: "Они не наши коллеги" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              'Глагол выходит вперёд:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Is this your bag?</code></div>' +
              '<div><code>Is that her badge?</code></div></div>',
            table: [
              { subj: "Is", verb: "this", example: "Is this your phone?", transcr: "Из зис ё фоун", tr_ru: "Это твой телефон?" },
              { subj: "Is", verb: "that", example: "Is that her badge?", transcr: "Из зэт хё бэдж", tr_ru: "Это её бейдж?" },
              { subj: "Is", verb: "Tom", example: "Is this Tom's bag?", transcr: "Из зис Томз бэг", tr_ru: "Это сумка Тома?" },
            ],
          },
        },
        examples: [
          { en: "This is my family.", transcr: "Зис из май фэмили.", ru: "Это моя семья." },
          { en: "Her son is a picker.", transcr: "Хё сан из э пикэ.", ru: "Её сын — сборщик." },
          { en: "This is Tom's bag.", transcr: "Зис из Томз бэг.", ru: "Это сумка Тома." },
          { en: "Our colleague is a mechanic.", transcr: "Ауэ колиг из э мэкэник.", ru: "Наш коллега — механик." },
        ],
      },

      words: [
        { e: "👨‍👩‍👧", en: "family", transcr: "фэмили", ru: "семья", pn: "/ˈfæmɪli/" },
        { e: "👰", en: "wife", transcr: "уайф", ru: "жена", pn: "/waɪf/" },
        { e: "🤵", en: "husband", transcr: "хазбэнд", ru: "муж", pn: "/ˈhʌzbənd/" },
        { e: "👩", en: "mother", transcr: "мазэ", ru: "мать", pn: "/ˈmʌðə/" },
        { e: "👨", en: "father", transcr: "фазэ", ru: "отец", pn: "/ˈfɑːðə/" },
        { e: "👦", en: "son", transcr: "сан", ru: "сын", pn: "/sʌn/" },
        { e: "👧", en: "daughter", transcr: "дотэ", ru: "дочь", pn: "/ˈdɔːtə/" },
        { e: "👬", en: "brother", transcr: "бразэ", ru: "брат", pn: "/ˈbrʌðə/" },
        { e: "👭", en: "sister", transcr: "систэ", ru: "сестра", pn: "/ˈsɪstə/" },
        { e: "🧒", en: "child", transcr: "чайлд", ru: "ребёнок", pn: "/tʃaɪld/" },
        { e: "👪", en: "parents", transcr: "пэарэнтс", ru: "родители", pn: "/ˈpeərənts/" },
        { e: "👶", en: "baby", transcr: "бэйби", ru: "малыш", pn: "/ˈbeɪbi/" },
        { e: "🤝", en: "colleague", transcr: "колиг", ru: "коллега", pn: "/ˈkɒliːɡ/" },
        { e: "🧑‍🔧", en: "mechanic", transcr: "мэкэник", ru: "механик", pn: "/mɪˈkænɪk/" },
        { e: "🧹", en: "cleaner", transcr: "клинэ", ru: "уборщик", pn: "/ˈkliːnə/" },
        { e: "🧑‍🤝‍🧑", en: "neighbour", transcr: "нэйбэ", ru: "сосед", pn: "/ˈneɪbə/" },
        { e: "📱", en: "phone", transcr: "фоун", ru: "телефон", pn: "/fəʊn/" },
        { e: "🎒", en: "bag", transcr: "бэг", ru: "сумка", pn: "/bæɡ/" },
        { e: "🗄️", en: "locker", transcr: "локэ", ru: "шкафчик", pn: "/ˈlɒkə/" },
        { e: "🪪", en: "badge", transcr: "бэдж", ru: "бейдж", pn: "/bædʒ/" },
        { e: "🧻", en: "towel", transcr: "тауэл", ru: "полотенце", pn: "/ˈtaʊəl/" },
        { e: "🧼", en: "soap", transcr: "соуп", ru: "мыло", pn: "/səʊp/" },
        { e: "🔦", en: "torch", transcr: "точ", ru: "фонарь", pn: "/tɔːtʃ/" },
        { e: "🔌", en: "charger", transcr: "чаджэ", ru: "зарядка", pn: "/ˈtʃɑːdʒə/" },
        { e: "🪥", en: "brush", transcr: "браш", ru: "щётка", pn: "/brʌʃ/" },
        { e: "🪞", en: "mirror", transcr: "мирэ", ru: "зеркало", pn: "/ˈmɪrə/" },
        { e: "👛", en: "wallet", transcr: "уолит", ru: "кошелёк", pn: "/ˈwɒlɪt/" },
        { e: "🖊️", en: "pen", transcr: "пэн", ru: "ручка", pn: "/pen/" },
        { e: "💼", en: "job", transcr: "джоб", ru: "работа", pn: "/dʒɒb/" },
        { e: "☕", en: "break", transcr: "брэйк", ru: "перерыв", pn: "/breɪk/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! This is Ahmad, your colleague.", transcr: "Гуд монинг! Зис из Ахмад, ё колиг.", ru: "Доброе утро! Это Ахмад, ваш коллега." },
        { s: "w", en: "Hello! My name is Rustam.", transcr: "Хэлоу! Май нэйм из Рустам.", ru: "Привет! Меня зовут Рустам." },
        { s: "m", en: "Rustam is a picker. Ahmad is a packer.", transcr: "Рустам из э пикэ. Ахмад из э пэкэ.", ru: "Рустам — сборщик. Ахмад — упаковщик." },
        { s: "w", en: "Is Anna our supervisor?", transcr: "Из Анна ауэ супэвайзэ?", ru: "Анна — наш бригадир?" },
        { s: "m", en: "Yes. Anna is your supervisor.", transcr: "Йес. Анна из ё супэвайзэ.", ru: "Да. Анна — ваш бригадир." },
        { s: "w", en: "Where is my locker?", transcr: "Уэа из май локэ?", ru: "Где мой шкафчик?" },
        { s: "m", en: "This is your locker. This is her bag.", transcr: "Зис из ё локэ. Зис из хё бэг.", ru: "Это твой шкафчик. Это её сумка." },
        { s: "w", en: "Is this my badge?", transcr: "Из зис май бэдж?", ru: "Это мой бейдж?" },
        { s: "m", en: "Yes. This is your badge.", transcr: "Йес. Зис из ё бэдж.", ru: "Да. Это твой бейдж." },
        { s: "w", en: "Thanks! We are a team.", transcr: "Сэнкс! Уи ар э тим.", ru: "Спасибо! Мы — бригада." },
      ],

      quiz: [
        { q: '[COMPLETE] "This is ___ bag." (я)', opts: ["my", "your", "his", "her"], c: 0, expl: "my — мой/моя.", hint_ru: "Это моя сумка." },
        { q: '[COMPLETE] "___ name is Anna." (она)', opts: ["His", "Her", "My", "Your"], c: 1, expl: "her — её, о женщине.", hint_ru: "Её зовут Анна." },
        { q: '[COMPLETE] "___ name is Tom." (он)', opts: ["Her", "His", "My", "Their"], c: 1, expl: "his — его, о мужчине.", hint_ru: "Его зовут Том." },
        { q: '[TRANSLATE] "наша бригада"', opts: ["our team", "your team", "their team", "my team"], c: 0, expl: "our — наш.", hint_ru: "our team." },
        { q: '[TRANSLATE] "сумка Тома"', opts: ["Tom's bag", "Tom bag", "her bag", "his bag"], c: 0, expl: "'s = принадлежность: Tom's bag.", hint_ru: "Tom's bag." },
        { q: '[COMPLETE] "Is this ___ phone?" (ты)', opts: ["his", "her", "your", "my"], c: 2, expl: "your — твой.", hint_ru: "Это твой телефон?" },
        { q: "[NEGATIVE] Где отрицание?", opts: ["This is my locker", "This is not my locker", "Is this my locker?", "My locker"], c: 1, expl: "Отрицание = is + not.", hint_ru: "Это не мой шкафчик." },
        { q: '[COMPLETE] "This is ___ job." (его)', opts: ["her", "his", "my", "your"], c: 1, expl: "his job — его работа.", hint_ru: "Это его работа." },
        { q: '[COMPLETE] "___ colleague is Rustam." (мой)', opts: ["Her", "His", "My", "Their"], c: 2, expl: "my — мой.", hint_ru: "Мой коллега — Рустам." },
        { q: "[CORRECT] Где правильно?", opts: ["Her name is Anna", "Her name are Anna", "Her name Anna", "Name her is Anna"], c: 0, expl: "her + name + is.", hint_ru: "Её зовут Анна." },
        { q: "[LISTEN] This is your locker.", opts: ["Это твой шкафчик.", "Это твоя сумка.", "Это твой бейдж.", "Это твой телефон."], c: 0, expl: "locker — шкафчик. bag — сумка. badge — бейдж. phone — телефон." },
        { q: "[GIST] Кто бригадир у Рустама и Ахмада?", opts: ["Анна", "Том", "Рустам", "Ахмад"], c: 0, expl: "Том говорит: \"Anna is your supervisor\".", hint_ru: "Вспомните диалог." },
      ],

      everyday: {
        title_ru: "Знакомство и вежливое общение в команде",
        phrases: [
          { en: "Nice to meet you.", transcr: "Найс ту мит ю.", ru: "Приятно познакомиться." },
          { en: "How are you?", transcr: "Хау ар ю?", ru: "Как дела?" },
          { en: "I'm fine, thank you.", transcr: "Айм файн, сэнк ю.", ru: "Хорошо, спасибо." },
          { en: "And you?", transcr: "Энд ю?", ru: "А вы? (в ответ на «как дела?»)" },
          { en: "This is my friend.", transcr: "Зис из май фрэнд.", ru: "Это мой друг." },
          { en: "This is my mate.", transcr: "Зис из май мэйт.", ru: "Это мой напарник / приятель." },
          { en: "Excuse me.", transcr: "Икскьюз ми.", ru: "Извините." },
          { en: "No problem.", transcr: "Ноу проблэм.", ru: "Без проблем. / Ничего страшного." },
          { en: "Have a good day.", transcr: "Хэв э гуд дэй.", ru: "Хорошего дня." },
          { en: "See you later.", transcr: "Си ю лэйтэ.", ru: "Увидимся позже. / До скорого." },
          { en: "See you tomorrow.", transcr: "Си ю тэмороу.", ru: "До завтра." },
        ],
      },
    },

    {
      id: 3,
      mod: 2,
      title_ru: "Что это? — Это ящик",
      cefr: "This is / These are · a/an",

      grammar: {
        title_ru: "Это и эти: This is a / These are",
        intro_ru:
          '<div style="line-height:1.6">Так говорить — ошибка:<br>❌ <b>This crate</b><br>Правильно:<br>✅ <b>This is a crate</b> <span class="g-transcr">[зис из э крэйт]</span> (это ящик)<br>👉 С предметом всегда <b>is</b> + артикль <b>a</b>.</div>',
        cultural_ru:
          "В русском «это ящик» — без глагола. В английском нужны <b>is</b> и артикль <b>a/an</b>. Много предметов → <b>These are</b> (эти).",
        note_ru: '⚠️ Перед гласным звуком — <b>an</b>, а не <b>a</b>. И: <b>this</b> (один) → <b>these</b> (много).',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>This is a</code> <span class="g-transcr">[зис из э]</span> (это…)</div>' +
              '<div><code>These are</code> <span class="g-transcr">[зиз ар]</span> (эти…)</div></div>',
            table: [
              { subj: "This", verb: "is", example: "This is a crate", transcr: "Зис из э крэйт", tr_ru: "Это ящик" },
              { subj: "This", verb: "is", example: "This is a trolley", transcr: "Зис из э троли", tr_ru: "Это тележка" },
              { subj: "These", verb: "are", example: "These are punnets", transcr: "Зиз ар панитс", tr_ru: "Это корзинки" },
              { subj: "These", verb: "are", example: "These are tools", transcr: "Зиз ар тулз", tr_ru: "Это инструменты" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'Добавляем <b>not</b> после <b>is/are</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>This is not a box</code></div>' +
              '<div><code>These are not crates</code></div></div>',
            table: [
              { subj: "This", verb: "is not", example: "This is not a box", transcr: "Зис из нот э бокс", tr_ru: "Это не коробка" },
              { subj: "That", verb: "is not", example: "That is not a bucket", transcr: "Зэт из нот э бакит", tr_ru: "То не ведро" },
              { subj: "These", verb: "are not", example: "These are not crates", transcr: "Зиз ар нот крэйтс", tr_ru: "Это не ящики" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              'Глагол вперёд, или <b>What</b> для «что?»:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Is this a tray?</code></div>' +
              '<div><code>What is this?</code></div></div>',
            table: [
              { subj: "Is", verb: "this", example: "Is this a ladder?", transcr: "Из зис э лэдэ", tr_ru: "Это лестница?" },
              { subj: "Is", verb: "that", example: "Is that a tap?", transcr: "Из зэт э тэп", tr_ru: "То кран?" },
              { subj: "What", verb: "is", example: "What is this?", transcr: "Уот из зис", tr_ru: "Что это?" },
            ],
          },
        },
        examples: [
          { en: "This is a punnet.", transcr: "Зис из э панит.", ru: "Это корзинка." },
          { en: "These are crates.", transcr: "Зиз ар крэйтс.", ru: "Это ящики." },
          { en: "Is this your trolley?", transcr: "Из зис ё троли?", ru: "Это твоя тележка?" },
          { en: "That is not a knife.", transcr: "Зэт из нот э найф.", ru: "То не нож." },
          { en: "This is an axe.", transcr: "Зис из эн экс.", ru: "Это топор." },
        ],
      },

      words: [
        { e: "🧺", en: "punnet", transcr: "панит", ru: "корзинка для ягод", pn: "/ˈpʌnɪt/" },
        { e: "📦", en: "crate", transcr: "крэйт", ru: "ящик", pn: "/kreɪt/" },
        { e: "🛒", en: "trolley", transcr: "троли", ru: "тележка", pn: "/ˈtrɒli/" },
        { e: "🗃️", en: "box", transcr: "бокс", ru: "коробка", pn: "/bɒks/" },
        { e: "🌱", en: "row", transcr: "роу", ru: "ряд (грядок)", pn: "/rəʊ/" },
        { e: "🥡", en: "tray", transcr: "трэй", ru: "лоток", pn: "/treɪ/" },
        { e: "🪣", en: "bucket", transcr: "бакит", ru: "ведро", pn: "/ˈbʌkɪt/" },
        { e: "🔪", en: "knife", transcr: "найф", ru: "нож", pn: "/naɪf/" },
        { e: "✂️", en: "scissors", transcr: "сизэз", ru: "ножницы", pn: "/ˈsɪzəz/" },
        { e: "🪜", en: "ladder", transcr: "лэдэ", ru: "лестница", pn: "/ˈlædə/" },
        { e: "🚰", en: "tap", transcr: "тэп", ru: "кран", pn: "/tæp/" },
        { e: "🗑️", en: "bin", transcr: "бин", ru: "бак", pn: "/bɪn/" },
        { e: "🏷️", en: "label", transcr: "лэйбл", ru: "этикетка", pn: "/ˈleɪbl/" },
        { e: "⚖️", en: "scale", transcr: "скэйл", ru: "весы", pn: "/skeɪl/" },
        { e: "🪛", en: "screwdriver", transcr: "скрудрайвэ", ru: "отвёртка", pn: "/ˈskruːdraɪvə/" },
        { e: "🛢️", en: "barrel", transcr: "бэрэл", ru: "бочка", pn: "/ˈbærəl/" },
        { e: "🔨", en: "hammer", transcr: "хэмэ", ru: "молоток", pn: "/ˈhæmə/" },
        { e: "🪢", en: "rope", transcr: "роуп", ru: "верёвка", pn: "/rəʊp/" },
        { e: "🪚", en: "saw", transcr: "со", ru: "пила", pn: "/sɔː/" },
        { e: "🔧", en: "tool", transcr: "тул", ru: "инструмент", pn: "/tuːl/" },
        { e: "⚙️", en: "machine", transcr: "мэшин", ru: "станок", pn: "/məˈʃiːn/" },
        { e: "🪴", en: "plant", transcr: "плант", ru: "растение", pn: "/plɑːnt/" },
        { e: "🍃", en: "leaf", transcr: "лиф", ru: "лист", pn: "/liːf/" },
        { e: "🖊️", en: "marker", transcr: "макэ", ru: "маркер", pn: "/ˈmɑːkə/" },
        { e: "🧵", en: "string", transcr: "стринг", ru: "бечёвка", pn: "/strɪŋ/" },
        { e: "🪝", en: "hook", transcr: "хук", ru: "крюк", pn: "/hʊk/" },
        { e: "🧹", en: "broom", transcr: "брум", ru: "метла", pn: "/bruːm/" },
        { e: "🛞", en: "wheel", transcr: "уил", ru: "колесо", pn: "/wiːl/" },
        { e: "📋", en: "clipboard", transcr: "клипбод", ru: "планшет для бумаг", pn: "/ˈklɪpbɔːd/" },
        { e: "🪓", en: "axe", transcr: "экс", ru: "топор", pn: "/æks/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! Welcome to the farm.", transcr: "Гуд монинг! Вэлкэм ту зэ фарм.", ru: "Доброе утро! Добро пожаловать на ферму." },
        { s: "w", en: "Thanks! What is this?", transcr: "Сэнкс! Уот из зис?", ru: "Спасибо! Что это?" },
        { s: "m", en: "This is a crate. These are punnets.", transcr: "Зис из э крэйт. Зиз ар панитс.", ru: "Это ящик. Это корзинки." },
        { s: "w", en: "Is this a trolley?", transcr: "Из зис э троли?", ru: "Это тележка?" },
        { s: "m", en: "Yes. This is your trolley.", transcr: "Йес. Зис из ё троли.", ru: "Да. Это твоя тележка." },
        { s: "w", en: "What is that?", transcr: "Уот из зэт?", ru: "А то что?" },
        { s: "m", en: "That is a scale.", transcr: "Зэт из э скэйл.", ru: "Это весы." },
        { s: "w", en: "Are these your tools?", transcr: "Ар зиз ё тулз?", ru: "Это твои инструменты?" },
        { s: "m", en: "Yes. These are your tools.", transcr: "Йес. Зиз ар ё тулз.", ru: "Да. Это твои инструменты." },
        { s: "w", en: "Thanks! This is a good farm.", transcr: "Сэнкс! Зис из э гуд фарм.", ru: "Спасибо! Это хорошая ферма." },
      ],

      quiz: [
        { q: '[COMPLETE] "This ___ a crate."', opts: ["am", "is", "are", "be"], c: 1, expl: "This is — это (один предмет).", hint_ru: "Это ящик." },
        { q: '[COMPLETE] "These ___ punnets."', opts: ["are", "is", "am", "be"], c: 0, expl: "These are — эти (много).", hint_ru: "Это корзинки." },
        { q: '[COMPLETE] "This is ___ trolley."', opts: ["the", "an", "a", "is"], c: 2, expl: "a — один предмет.", hint_ru: "Это тележка." },
        { q: '[TRANSLATE] "нож"', opts: ["tool", "scissors", "knife", "ladder"], c: 2, expl: "knife — нож.", hint_ru: "knife." },
        { q: '[TRANSLATE] "ведро"', opts: ["bucket", "crate", "box", "bin"], c: 0, expl: "bucket — ведро.", hint_ru: "bucket." },
        { q: '[QUESTION] "___ this a ladder?"', opts: ["Am", "Are", "Is", "Be"], c: 2, expl: "Вопрос: Is this…?", hint_ru: "Это лестница?" },
        { q: "[NEGATIVE] Где отрицание?", opts: ["This is a box", "Is this a box?", "This is not a box", "This box"], c: 2, expl: "Отрицание = is + not.", hint_ru: "Это не коробка." },
        { q: "[CORRECT] Где правильно (много)?", opts: ["This are tools", "These are tools", "These is tools", "These am tools"], c: 1, expl: "These + are.", hint_ru: "Это инструменты." },
        { q: '[COMPLETE] "Is ___ a tap?" (то, там)', opts: ["this", "that", "these", "those"], c: 1, expl: "that — то (дальше).", hint_ru: "То кран?" },
        { q: '[COMPLETE] "What ___ this?"', opts: ["is", "are", "am", "be"], c: 0, expl: "What is this? — Что это?", hint_ru: "Что это?" },
        { q: "[LISTEN] These are punnets.", opts: ["Это корзинки.", "Это ящики.", "Это инструменты.", "Это тележки."], c: 0, expl: "punnets — корзинки для ягод. crates — ящики. tools — инструменты. trolleys — тележки." },
        { q: "[GIST] Что показывает менеджер рабочему в диалоге?", opts: ["Ящик, корзинки, тележку, весы, инструменты", "Нож, ножницы и молоток", "Семью и коллег", "Паспорт и визу"], c: 0, expl: "Менеджер показывает: crate (ящик), punnets (корзинки), trolley (тележка), scale (весы), tools (инструменты).", hint_ru: "Вспомните диалог." },
      ],

      everyday: {
        title_ru: "Фразы на работе: «что это?», попросить инструмент, сигналы",
        phrases: [
          { en: "What is this?", transcr: "Уот из зис?", ru: "Что это?" },
          { en: "Where is the trolley?", transcr: "Уэа из зэ троли?", ru: "Где тележка?" },
          { en: "Can I have a crate, please?", transcr: "Кэн ай хэв э крэйт, плиз?", ru: "Можно мне ящик, пожалуйста?" },
          { en: "Pass me the knife, please.", transcr: "Пас ми зэ найф, плиз.", ru: "Передайте мне нож, пожалуйста." },
          { en: "Here you are.", transcr: "Хиэ ю ар.", ru: "Вот, держите." },
          { en: "Like this?", transcr: "Лайк зис?", ru: "Вот так?" },
          { en: "Yes, like this.", transcr: "Йес, лайк зис.", ru: "Да, вот так." },
          { en: "Is this right?", transcr: "Из зис райт?", ru: "Так правильно?" },
          { en: "Be careful!", transcr: "Би кэйфул!", ru: "Осторожно! (будьте внимательны)" },
          { en: "Watch out!", transcr: "Уотч аут!", ru: "Берегитесь! (срочно)" },
        ],
      },
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = LESSONS;
  else root.LESSONS = LESSONS;
})(typeof window !== "undefined" ? window : globalThis);
