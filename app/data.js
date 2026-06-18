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

    {
      id: 4,
      mod: 3,
      title_ru: "Время, дни и деньги",
      cefr: "Numbers · Time · Days · Money",

      grammar: {
        title_ru: "Который час? It is seven o'clock",
        intro_ru:
          '<div style="line-height:1.6">Так говорить — ошибка:<br>❌ <b>It seven o\'clock</b><br>Правильно:<br>✅ <b>It is seven o\'clock</b> <span class="g-transcr">[ит из сэвн эклок]</span> (сейчас 7 часов)<br>👉 О времени, дне и цене всегда говорим <b>It is…</b> — глагол <b>is</b> нельзя пропускать.</div>',
        cultural_ru:
          "Дни недели в английском всегда с <b>большой буквы</b>: <b>Monday</b>, не monday. Деньги: значок <b>£</b> ставится ПЕРЕД числом (£10), а говорим «ten pounds».",
        note_ru:
          '⚠️ <b>half past seven</b> = 7:30. Англичане называют час, который УЖЕ прошёл (<b>seven</b>), и прибавляют 30 минут → по-русски это «половина восьмого». Не переводите дословно «половина семи».',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>It is … o\'clock</code> <span class="g-transcr">[ит из … эклок]</span> (ровно час)</div>' +
              '<div><code>half past …</code> <span class="g-transcr">[хаф паст …]</span> (:30)</div>' +
              '<div><code>It is Monday</code> <span class="g-transcr">[ит из мандэй]</span> (день)</div>' +
              '<div><code>It is … pounds</code> <span class="g-transcr">[ит из … паундз]</span> (цена)</div></div>',
            table: [
              { subj: "It", verb: "is", example: "It is seven o'clock", transcr: "Ит из сэвн эклок", tr_ru: "Сейчас 7 часов (7:00)" },
              { subj: "It", verb: "is", example: "It is half past eight", transcr: "Ит из хаф паст эйт", tr_ru: "Сейчас 8:30 (половина девятого)" },
              { subj: "It", verb: "is", example: "It is Monday today", transcr: "Ит из мандэй тудэй", tr_ru: "Сегодня понедельник" },
              { subj: "It", verb: "is", example: "It is ten pounds", transcr: "Ит из тэн паундз", tr_ru: "Это десять фунтов" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'Добавляем <b>not</b> после <b>is/are</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>It is not Friday</code></div>' +
              '<div><code>It is not nine o\'clock</code></div></div>',
            table: [
              { subj: "It", verb: "is not", example: "It is not Friday", transcr: "Ит из нот фрайдэй", tr_ru: "Сегодня не пятница" },
              { subj: "It", verb: "is not", example: "It is not nine o'clock", transcr: "Ит из нот найн эклок", tr_ru: "Сейчас не девять часов" },
              { subj: "It", verb: "is not", example: "It is not ten pounds", transcr: "Ит из нот тэн паундз", tr_ru: "Это не десять фунтов" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              'Спрашиваем через <b>What</b> и <b>How much</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>What time is it?</code> <span class="g-transcr">[уот тайм из ит]</span></div>' +
              '<div><code>What day is it?</code> <span class="g-transcr">[уот дэй из ит]</span></div>' +
              '<div><code>How much is it?</code> <span class="g-transcr">[хау мач из ит]</span></div></div>',
            table: [
              { subj: "What", verb: "time", example: "What time is it?", transcr: "Уот тайм из ит", tr_ru: "Который час?" },
              { subj: "What", verb: "day", example: "What day is it?", transcr: "Уот дэй из ит", tr_ru: "Какой сегодня день?" },
              { subj: "How", verb: "much", example: "How much is it?", transcr: "Хау мач из ит", tr_ru: "Сколько это стоит?" },
            ],
          },
        },
        examples: [
          { en: "It is six o'clock.", transcr: "Ит из сикс эклок.", ru: "Сейчас шесть часов." },
          { en: "It is half past four.", transcr: "Ит из хаф паст фо.", ru: "Сейчас 4:30 (половина пятого)." },
          { en: "Today is Wednesday.", transcr: "Тудэй из уэнздэй.", ru: "Сегодня среда." },
          { en: "Tomorrow is Sunday.", transcr: "Тэмороу из сандэй.", ru: "Завтра воскресенье." },
          { en: "How much money is it?", transcr: "Хау мач мани из ит?", ru: "Сколько это денег?" },
        ],
      },

      words: [
        { e: "1️⃣", en: "one", transcr: "уан", ru: "один", pn: "/wʌn/" },
        { e: "2️⃣", en: "two", transcr: "ту", ru: "два", pn: "/tuː/" },
        { e: "3️⃣", en: "three", transcr: "сри", ru: "три", pn: "/θriː/" },
        { e: "4️⃣", en: "four", transcr: "фо", ru: "четыре", pn: "/fɔː/" },
        { e: "5️⃣", en: "five", transcr: "файв", ru: "пять", pn: "/faɪv/" },
        { e: "6️⃣", en: "six", transcr: "сикс", ru: "шесть", pn: "/sɪks/" },
        { e: "7️⃣", en: "seven", transcr: "сэвн", ru: "семь", pn: "/ˈsevn/" },
        { e: "8️⃣", en: "eight", transcr: "эйт", ru: "восемь", pn: "/eɪt/" },
        { e: "9️⃣", en: "nine", transcr: "найн", ru: "девять", pn: "/naɪn/" },
        { e: "🔟", en: "ten", transcr: "тэн", ru: "десять", pn: "/ten/" },
        { e: "📅", en: "Monday", transcr: "мандэй", ru: "понедельник", pn: "/ˈmʌndeɪ/" },
        { e: "📅", en: "Tuesday", transcr: "тьюздэй", ru: "вторник", pn: "/ˈtjuːzdeɪ/" },
        { e: "📅", en: "Wednesday", transcr: "уэнздэй", ru: "среда", pn: "/ˈwenzdeɪ/" },
        { e: "📅", en: "Thursday", transcr: "сёздэй", ru: "четверг", pn: "/ˈθɜːzdeɪ/" },
        { e: "📅", en: "Friday", transcr: "фрайдэй", ru: "пятница", pn: "/ˈfraɪdeɪ/" },
        { e: "📅", en: "Saturday", transcr: "сэтэдэй", ru: "суббота", pn: "/ˈsætədeɪ/" },
        { e: "📅", en: "Sunday", transcr: "сандэй", ru: "воскресенье", pn: "/ˈsʌndeɪ/" },
        { e: "⏰", en: "time", transcr: "тайм", ru: "время", pn: "/taɪm/" },
        { e: "⏳", en: "hour", transcr: "ауэ", ru: "час (60 минут)", pn: "/ˈaʊə/" },
        { e: "☀️", en: "day", transcr: "дэй", ru: "день", pn: "/deɪ/" },
        { e: "🗓️", en: "week", transcr: "уик", ru: "неделя", pn: "/wiːk/" },
        { e: "📆", en: "today", transcr: "тудэй", ru: "сегодня", pn: "/təˈdeɪ/" },
        { e: "🔜", en: "tomorrow", transcr: "тэмороу", ru: "завтра", pn: "/təˈmɒrəʊ/" },
        { e: "🕖", en: "o'clock", transcr: "эклок", ru: "часов (ровно)", pn: "/əˈklɒk/" },
        { e: "🕧", en: "half", transcr: "хаф", ru: "половина (:30)", pn: "/hɑːf/" },
        { e: "💰", en: "money", transcr: "мани", ru: "деньги", pn: "/ˈmʌni/" },
        { e: "💷", en: "pound", transcr: "паунд", ru: "фунт (£)", pn: "/paʊnd/" },
        { e: "🪙", en: "pence", transcr: "пэнс", ru: "пенсы (мелочь)", pn: "/pens/" },
        { e: "💵", en: "cash", transcr: "кэш", ru: "наличные", pn: "/kæʃ/" },
        { e: "🧾", en: "payslip", transcr: "пэйслип", ru: "расчётный лист", pn: "/ˈpeɪslɪp/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! What time is it?", transcr: "Гуд монинг! Уот тайм из ит?", ru: "Доброе утро! Который час?" },
        { s: "w", en: "It is half past seven.", transcr: "Ит из хаф паст сэвн.", ru: "Половина восьмого (7:30)." },
        { s: "m", en: "What day is it today?", transcr: "Уот дэй из ит тудэй?", ru: "Какой сегодня день?" },
        { s: "w", en: "It is Friday today.", transcr: "Ит из фрайдэй тудэй.", ru: "Сегодня пятница." },
        { s: "m", en: "Friday is good. This is your money.", transcr: "Фрайдэй из гуд. Зис из ё мани.", ru: "Пятница — хорошо. Вот твои деньги." },
        { s: "w", en: "Thank you, Tom! This is my payslip.", transcr: "Сэнк ю, Том! Зис из май пэйслип.", ru: "Спасибо, Том! Это мой расчётный лист." },
        { s: "m", en: "Yes. Pounds and pence.", transcr: "Йес. Паундз энд пэнс.", ru: "Да. Фунты и пенсы." },
        { s: "w", en: "What time is it, Tom?", transcr: "Уот тайм из ит, Том?", ru: "Который час, Том?" },
        { s: "m", en: "It is nine o'clock.", transcr: "Ит из найн эклок.", ru: "Сейчас девять часов." },
        { s: "w", en: "Nine o'clock! Goodbye, Tom.", transcr: "Найн эклок! Гудбай, Том.", ru: "Девять часов! До свидания, Том." },
      ],

      quiz: [
        { q: '[COMPLETE] "It is seven ___."', opts: ["o'clock", "pound", "day", "week"], c: 0, expl: "seven o'clock — 7 часов ровно.", hint_ru: "Сейчас 7 часов." },
        { q: '[COMPLETE] "It is half ___ eight." (8:30)', opts: ["past", "to", "is", "not"], c: 0, expl: "half past eight = 8:30 (половина девятого).", hint_ru: "8:30." },
        { q: '[TRANSLATE] "понедельник"', opts: ["Monday", "Sunday", "Friday", "Tuesday"], c: 0, expl: "Monday — понедельник. С большой буквы.", hint_ru: "Monday." },
        { q: '[TRANSLATE] "фунт (£)"', opts: ["pound", "pence", "money", "cash"], c: 0, expl: "pound — фунт (£). pence — пенсы (мелочь).", hint_ru: "pound." },
        { q: '[QUESTION] "___ time is it?"', opts: ["What", "How", "Where", "Is"], c: 0, expl: "What time is it? — Который час?", hint_ru: "Который час?" },
        { q: '[QUESTION] "___ much is it?"', opts: ["How", "What", "Where", "This"], c: 0, expl: "How much is it? — Сколько это стоит?", hint_ru: "Сколько стоит?" },
        { q: "[NEGATIVE] Где отрицание?", opts: ["It is Monday", "It is not Monday", "Is it Monday?", "It Monday"], c: 1, expl: "Отрицание = is + not.", hint_ru: "Сегодня не понедельник." },
        { q: "[CORRECT] Где правильно?", opts: ["It is seven o'clock", "It seven o'clock", "It are seven o'clock", "Seven o'clock it"], c: 0, expl: "It + is + время. Глагол is нельзя пропускать.", hint_ru: "Сейчас 7 часов." },
        { q: '[COMPLETE] "It is ___ pounds." (10)', opts: ["ten", "one", "five", "two"], c: 0, expl: "10 = ten.", hint_ru: "£10." },
        { q: '[COMPLETE] "It is Friday. Tomorrow is ___."', opts: ["Saturday", "Monday", "Sunday", "Thursday"], c: 0, expl: "После пятницы (Friday) идёт суббота (Saturday).", hint_ru: "Завтра суббота." },
        { q: "[LISTEN] It is half past six.", opts: ["Сейчас 6:30 (половина седьмого).", "Сейчас 5:30 (половина шестого).", "Сейчас 6:00 (шесть часов).", "Сейчас 7:00 (семь часов)."], c: 0, expl: "half past six = 6:30. По-русски это «половина седьмого»." },
        { q: "[GIST] Какой день и время в начале диалога?", opts: ["Пятница, 7:30 (половина восьмого)", "Пятница, 9 часов", "Понедельник, 7:30", "Суббота, 8 часов"], c: 0, expl: "В диалоге: \"It is half past seven\" (7:30) и \"It is Friday today\". Нужно вспомнить и день, и время.", hint_ru: "Вспомните начало диалога." },
      ],

      everyday: {
        title_ru: "Спросить время, день и про оплату",
        phrases: [
          { en: "What time is it?", transcr: "Уот тайм из ит?", ru: "Который час?" },
          { en: "What time do we start?", transcr: "Уот тайм ду уи старт?", ru: "Во сколько мы начинаем?" },
          { en: "What time do we finish?", transcr: "Уот тайм ду уи финиш?", ru: "Во сколько мы заканчиваем?" },
          { en: "When is payday?", transcr: "Уэн из пэйдэй?", ru: "Когда день зарплаты?" },
          { en: "How much is it?", transcr: "Хау мач из ит?", ru: "Сколько это стоит?" },
          { en: "Can I see my payslip?", transcr: "Кэн ай си май пэйслип?", ru: "Можно посмотреть мой расчётный лист?" },
          { en: "Today is my day off.", transcr: "Тудэй из май дэй оф.", ru: "Сегодня мой выходной." },
          { en: "See you on Monday.", transcr: "Си ю он мандэй.", ru: "Увидимся в понедельник." },
        ],
      },
    },

    {
      id: 5,
      mod: 3,
      title_ru: "Где это? Места на ферме",
      cefr: "Where is…? · Prepositions of place",

      grammar: {
        title_ru: "Где это? Where is… + in / on / under",
        intro_ru:
          '<div style="line-height:1.6">Так спрашивать — ошибка:<br>❌ <b>Toilet where?</b><br>Правильно:<br>✅ <b>Where is the toilet?</b> <span class="g-transcr">[уэа из зэ тойлет]</span> (где туалет?)<br>👉 Вопрос о месте всегда начинаем с <b>Where is…?</b></div>',
        cultural_ru:
          "Маленькие слова <b>in</b> (внутри), <b>on</b> (на), <b>under</b> (под) показывают, ГДЕ предмет. В английском они идут ПЕРЕД местом: <b>in the camp</b> (в лагере). Учитесь читать таблички-<b>signs</b> — это безопасность.",
        note_ru:
          '⚠️ Не путать: <b>in</b> (внутри) · <b>on</b> (на поверхности) · <b>under</b> (под). <b>next to</b> = рядом (два слова вместе), <b>behind</b> = позади.',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>in</code> <span class="g-transcr">[ин]</span> (внутри)</div>' +
              '<div><code>on</code> <span class="g-transcr">[он]</span> (на)</div>' +
              '<div><code>under</code> <span class="g-transcr">[андэ]</span> (под)</div>' +
              '<div><code>behind</code> <span class="g-transcr">[бихайнд]</span> (позади)</div>' +
              '<div><code>near</code> <span class="g-transcr">[ниэ]</span> (рядом)</div>' +
              '<div><code>next to</code> <span class="g-transcr">[нэкст ту]</span> (рядом с)</div></div>',
            table: [
              { subj: "The canteen", verb: "is", example: "The canteen is near the gate", transcr: "Зэ кэнтин из ниэ зэ гейт", tr_ru: "Столовая рядом с воротами" },
              { subj: "The toilet", verb: "is", example: "The toilet is in the camp", transcr: "Зэ тойлет из ин зэ кэмп", tr_ru: "Туалет в лагере" },
              { subj: "The shop", verb: "is", example: "The shop is on the road", transcr: "Зэ шоп из он зэ роуд", tr_ru: "Магазин на дороге" },
              { subj: "The van", verb: "is", example: "The van is behind the shed", transcr: "Зэ ван из бихайнд зэ шед", tr_ru: "Фургон за сараем" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'Добавляем <b>not</b> после <b>is</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>The office is not near the field</code></div>' +
              '<div><code>The bike is not under the tree</code></div></div>',
            table: [
              { subj: "The office", verb: "is not", example: "The office is not near the field", transcr: "Зэ офис из нот ниэ зэ филд", tr_ru: "Контора не рядом с полем" },
              { subj: "The bank", verb: "is not", example: "The bank is not in the camp", transcr: "Зэ бэнк из нот ин зэ кэмп", tr_ru: "Банк не в лагере" },
              { subj: "The bike", verb: "is not", example: "The bike is not under the tree", transcr: "Зэ байк из нот андэ зэ три", tr_ru: "Велосипед не под деревом" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              'Спрашиваем через <b>Where</b> или ставим <b>is</b> вперёд:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Where is the toilet?</code> <span class="g-transcr">[уэа из зэ тойлет]</span></div>' +
              '<div><code>Is the shop near the bank?</code> <span class="g-transcr">[из зэ шоп ниэ зэ бэнк]</span></div></div>',
            table: [
              { subj: "Where", verb: "is", example: "Where is the toilet?", transcr: "Уэа из зэ тойлет", tr_ru: "Где туалет?" },
              { subj: "Where", verb: "is", example: "Where is the office?", transcr: "Уэа из зэ офис", tr_ru: "Где контора?" },
              { subj: "Is", verb: "the shop", example: "Is the shop near the bank?", transcr: "Из зэ шоп ниэ зэ бэнк", tr_ru: "Магазин рядом с банком?" },
            ],
          },
        },
        examples: [
          { en: "Where is the canteen?", transcr: "Уэа из зэ кэнтин?", ru: "Где столовая?" },
          { en: "It is next to the office.", transcr: "Ит из нэкст ту зэ офис.", ru: "Она рядом с конторой." },
          { en: "The sign is on the wall.", transcr: "Зэ сайн из он зэ уол.", ru: "Табличка на стене." },
          { en: "The van is near the gate.", transcr: "Зэ ван из ниэ зэ гейт.", ru: "Фургон у ворот." },
          { en: "The market is on the road.", transcr: "Зэ макит из он зэ роуд.", ru: "Рынок на дороге." },
        ],
      },

      words: [
        { e: "🍽️", en: "canteen", transcr: "кэнтин", ru: "столовая", pn: "/kænˈtiːn/" },
        { e: "🚽", en: "toilet", transcr: "тойлет", ru: "туалет", pn: "/ˈtɔɪlɪt/" },
        { e: "🍳", en: "kitchen", transcr: "китчин", ru: "кухня", pn: "/ˈkɪtʃɪn/" },
        { e: "🏢", en: "office", transcr: "офис", ru: "контора", pn: "/ˈɒfɪs/" },
        { e: "🏪", en: "shop", transcr: "шоп", ru: "магазин", pn: "/ʃɒp/" },
        { e: "🏠", en: "house", transcr: "хаус", ru: "дом", pn: "/haʊs/" },
        { e: "⛺", en: "camp", transcr: "кэмп", ru: "лагерь (жильё)", pn: "/kæmp/" },
        { e: "🏦", en: "bank", transcr: "бэнк", ru: "банк", pn: "/bæŋk/" },
        { e: "🏥", en: "hospital", transcr: "хоспитл", ru: "больница", pn: "/ˈhɒspɪtl/" },
        { e: "🚧", en: "gate", transcr: "гейт", ru: "ворота", pn: "/ɡeɪt/" },
        { e: "🚪", en: "door", transcr: "до", ru: "дверь", pn: "/dɔː/" },
        { e: "🪟", en: "window", transcr: "уиндоу", ru: "окно", pn: "/ˈwɪndəʊ/" },
        { e: "🧱", en: "wall", transcr: "уол", ru: "стена", pn: "/wɔːl/" },
        { e: "💡", en: "light", transcr: "лайт", ru: "свет (лампа)", pn: "/laɪt/" },
        { e: "🛣️", en: "road", transcr: "роуд", ru: "дорога", pn: "/rəʊd/" },
        { e: "🌉", en: "bridge", transcr: "бридж", ru: "мост", pn: "/brɪdʒ/" },
        { e: "🚗", en: "car", transcr: "ка", ru: "машина", pn: "/kɑː/" },
        { e: "🚐", en: "van", transcr: "ван", ru: "фургон", pn: "/væn/" },
        { e: "🚲", en: "bike", transcr: "байк", ru: "велосипед", pn: "/baɪk/" },
        { e: "🪑", en: "chair", transcr: "чэа", ru: "стул", pn: "/tʃeə/" },
        { e: "🗺️", en: "map", transcr: "мэп", ru: "карта", pn: "/mæp/" },
        { e: "🪧", en: "sign", transcr: "сайн", ru: "табличка, указатель", pn: "/saɪn/" },
        { e: "🕐", en: "clock", transcr: "клок", ru: "часы (настенные)", pn: "/klɒk/" },
        { e: "🌳", en: "tree", transcr: "три", ru: "дерево", pn: "/triː/" },
        { e: "⛰️", en: "hill", transcr: "хил", ru: "холм", pn: "/hɪl/" },
        { e: "🏞️", en: "river", transcr: "ривэ", ru: "река", pn: "/ˈrɪvə/" },
        { e: "🌿", en: "grass", transcr: "грас", ru: "трава", pn: "/ɡrɑːs/" },
        { e: "🚜", en: "tractor", transcr: "трэктэ", ru: "трактор", pn: "/ˈtræktə/" },
        { e: "🏬", en: "market", transcr: "макит", ru: "рынок", pn: "/ˈmɑːkɪt/" },
        { e: "🛖", en: "shed", transcr: "шед", ru: "сарай, навес", pn: "/ʃed/" },
      ],

      dialogue: [
        { s: "m", en: "Welcome! This is the camp.", transcr: "Вэлкэм! Зис из зэ кэмп.", ru: "Добро пожаловать! Это лагерь." },
        { s: "w", en: "Thank you! Where is the toilet?", transcr: "Сэнк ю! Уэа из зэ тойлет?", ru: "Спасибо! Где туалет?" },
        { s: "m", en: "The toilet is near the kitchen.", transcr: "Зэ тойлет из ниэ зэ китчин.", ru: "Туалет рядом с кухней." },
        { s: "w", en: "And where is the canteen?", transcr: "Энд уэа из зэ кэнтин?", ru: "А где столовая?" },
        { s: "m", en: "The canteen is next to the office.", transcr: "Зэ кэнтин из нэкст ту зэ офис.", ru: "Столовая рядом с конторой." },
        { s: "w", en: "Is the shop in the camp?", transcr: "Из зэ шоп ин зэ кэмп?", ru: "Магазин в лагере?" },
        { s: "m", en: "No. The shop is on the road.", transcr: "Ноу. Зэ шоп из он зэ роуд.", ru: "Нет. Магазин на дороге." },
        { s: "w", en: "Where is my bike?", transcr: "Уэа из май байк?", ru: "Где мой велосипед?" },
        { s: "m", en: "It is behind the shed, there.", transcr: "Ит из бихайнд зэ шед, зэа.", ru: "Он за сараем, вон там." },
        { s: "w", en: "Thank you! The camp is good.", transcr: "Сэнк ю! Зэ кэмп из гуд.", ru: "Спасибо! Лагерь хороший." },
      ],

      quiz: [
        { q: '[TRANSLATE] "столовая"', opts: ["canteen", "toilet", "kitchen", "office"], c: 0, expl: "canteen — столовая. kitchen — кухня.", hint_ru: "canteen." },
        { q: '[TRANSLATE] "туалет"', opts: ["toilet", "shop", "gate", "wall"], c: 0, expl: "toilet — туалет.", hint_ru: "toilet." },
        { q: '[COMPLETE] "The toilet is ___ the kitchen." (рядом с)', opts: ["next to", "under", "behind", "on"], c: 0, expl: "next to — рядом с (вплотную).", hint_ru: "Туалет рядом с кухней." },
        { q: '[COMPLETE] "The shop is ___ the road." (на)', opts: ["on", "in", "under", "behind"], c: 0, expl: "on — на (поверхности).", hint_ru: "Магазин на дороге." },
        { q: '[QUESTION] "___ is the office?"', opts: ["Where", "What", "How", "Is"], c: 0, expl: "Where is…? — Где…?", hint_ru: "Где контора?" },
        { q: '[COMPLETE] "The bike is ___ the shed." (за)', opts: ["behind", "on", "in", "near"], c: 0, expl: "behind — позади, за.", hint_ru: "Велосипед за сараем." },
        { q: "[NEGATIVE] Где отрицание?", opts: ["The shop is in the camp", "The shop is not in the camp", "Is the shop in the camp?", "The shop in the camp"], c: 1, expl: "Отрицание = is + not.", hint_ru: "Магазин не в лагере." },
        { q: "[CORRECT] Где правильно?", opts: ["Where is the gate?", "Where the gate is?", "Where gate is?", "Gate where is?"], c: 0, expl: "Where + is + the + место.", hint_ru: "Где ворота?" },
        { q: '[COMPLETE] "The office is ___ the camp." (внутри)', opts: ["in", "on", "under", "behind"], c: 0, expl: "in — внутри. Контора внутри лагеря.", hint_ru: "Контора в лагере." },
        { q: '[TRANSLATE] "магазин"', opts: ["shop", "market", "bank", "house"], c: 0, expl: "shop — магазин. market — рынок.", hint_ru: "shop." },
        { q: "[LISTEN] The toilet is near the gate.", opts: ["Туалет рядом с воротами.", "Туалет в столовой.", "Туалет за сараем.", "Туалет на дороге."], c: 0, expl: "near — рядом, gate — ворота." },
        { q: "[GIST] Где магазин по словам менеджера?", opts: ["На дороге, не в лагере", "В лагере, рядом с кухней", "За сараем", "Рядом с конторой"], c: 0, expl: "В диалоге: \"Is the shop in the camp? — No. The shop is on the road.\"", hint_ru: "Вспомните про магазин." },
      ],

      everyday: {
        title_ru: "Спросить дорогу и найти место",
        phrases: [
          { en: "Where is the toilet?", transcr: "Уэа из зэ тойлет?", ru: "Где туалет?" },
          { en: "Where is the canteen?", transcr: "Уэа из зэ кэнтин?", ru: "Где столовая?" },
          { en: "How do I get to the shop?", transcr: "Хау ду ай гет ту зэ шоп?", ru: "Как пройти к магазину?" },
          { en: "Is it far?", transcr: "Из ит фа?", ru: "Это далеко?" },
          { en: "Turn left.", transcr: "Тён лэфт.", ru: "Поверните налево." },
          { en: "Turn right.", transcr: "Тён райт.", ru: "Поверните направо." },
          { en: "Go straight.", transcr: "Гоу стрэйт.", ru: "Идите прямо." },
          { en: "It is over there.", transcr: "Ит из оувэ зэа.", ru: "Это вон там." },
          { en: "Excuse me, where is the office?", transcr: "Икскьюз ми, уэа из зэ офис?", ru: "Извините, где контора?" },
        ],
      },
    },

    {
      id: 6,
      mod: 4,
      title_ru: "Что я делаю на работе",
      cefr: "Present Simple · Object pronouns",

      grammar: {
        title_ru: "Я собираю, она собирает: Present Simple",
        intro_ru:
          '<div style="line-height:1.6">Так говорить — ошибка:<br>❌ <b>I working</b> / ❌ <b>She pick</b><br>Правильно:<br>✅ <b>I pick</b> <span class="g-transcr">[ай пик]</span> (я собираю)<br>✅ <b>She picks</b> <span class="g-transcr">[ши пикс]</span> (она собирает)<br>👉 С <b>he/she/it</b> к глаголу добавляем <b>-s</b>.</div>',
        cultural_ru:
          'После глагола местоимение МЕНЯЕТСЯ:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><code>I → me</code> <span class="g-transcr">[ми]</span> (меня/мне)</div>' +
          '<div><code>we → us</code> <span class="g-transcr">[ас]</span> (нас/нам)</div>' +
          '<div><code>he → him</code> <span class="g-transcr">[хим]</span> (его/ему)</div>' +
          '<div><code>they → them</code> <span class="g-transcr">[зэм]</span> (их/им)</div>' +
          '<div><code>she → her</code> <span class="g-transcr">[хё]</span> (её/ей)</div></div>' +
          '<div style="margin-top:4px">Напр.: <b>Give me</b> (дай мне), <b>I carry them</b> (я ношу их).</div>',
        note_ru:
          '⚠️ Отрицание: <b>do not</b> / <b>does not</b>. После <b>does</b> глагол БЕЗ -s — и в отрицании, и в вопросе: <b>He does not pick</b>, <b>Does she pack?</b> Слова <b>always</b> (всегда) / <b>sometimes</b> (иногда) / <b>never</b> (никогда) ставим ПЕРЕД глаголом: <b>I always work</b>.',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I / you / we / they</code> + глагол</div>' +
              '<div><code>he / she / it</code> + глагол<b>+s</b></div>' +
              '<div><code>I pick</code> <span class="g-transcr">[ай пик]</span></div>' +
              '<div><code>She picks</code> <span class="g-transcr">[ши пикс]</span></div></div>',
            table: [
              { subj: "I", verb: "pick", example: "I pick berries", transcr: "Ай пик бэриз", tr_ru: "Я собираю ягоды" },
              { subj: "You", verb: "pack", example: "You pack boxes", transcr: "Ю пэк боксиз", tr_ru: "Ты упаковываешь коробки" },
              { subj: "She", verb: "packs", example: "She packs the punnets", transcr: "Ши пэкс зэ панитс", tr_ru: "Она упаковывает корзинки" },
              { subj: "We", verb: "carry", example: "We carry the crates", transcr: "Уи кэри зэ крэйтс", tr_ru: "Мы носим ящики" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'I/you/we/they → <b>do not</b>; he/she/it → <b>does not</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I do not work</code></div>' +
              '<div><code>He does not pick</code></div></div>',
            table: [
              { subj: "I", verb: "do not", example: "I do not work on Sunday", transcr: "Ай ду нот вёк он сандэй", tr_ru: "Я не работаю в воскресенье" },
              { subj: "He", verb: "does not", example: "He does not pick", transcr: "Хи даз нот пик", tr_ru: "Он не собирает" },
              { subj: "They", verb: "do not", example: "They do not sort the berries", transcr: "Зэй ду нот сот зэ бэриз", tr_ru: "Они не сортируют ягоды" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              'Впереди ставим <b>Do</b> или <b>Does</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Do you pick?</code> <span class="g-transcr">[ду ю пик]</span></div>' +
              '<div><code>Does she pack?</code> <span class="g-transcr">[даз ши пэк]</span></div></div>',
            table: [
              { subj: "Do", verb: "you", example: "Do you pick berries?", transcr: "Ду ю пик бэриз", tr_ru: "Ты собираешь ягоды?" },
              { subj: "Does", verb: "she", example: "Does she pack boxes?", transcr: "Даз ши пэк боксиз", tr_ru: "Она упаковывает коробки?" },
              { subj: "Do", verb: "they", example: "Do they carry crates?", transcr: "Ду зэй кэри крэйтс", tr_ru: "Они носят ящики?" },
            ],
          },
        },
        examples: [
          { en: "I always work on the farm.", transcr: "Ай олуэйз вёк он зэ фарм.", ru: "Я всегда работаю на ферме." },
          { en: "She gives me the box.", transcr: "Ши гивз ми зэ бокс.", ru: "Она даёт мне коробку." },
          { en: "We carry them to the shed.", transcr: "Уи кэри зэм ту зэ шед.", ru: "Мы носим их в сарай." },
          { en: "He never washes the van.", transcr: "Хи нэвэ уошиз зэ ван.", ru: "Он никогда не моет фургон." },
          { en: "Tom checks us.", transcr: "Том чекс ас.", ru: "Том проверяет нас." },
          { en: "I sometimes work on Saturday.", transcr: "Ай самтаймз вёк он сэтэдэй.", ru: "Я иногда работаю в субботу." },
        ],
      },

      words: [
        { e: "🛠️", en: "work", transcr: "вёк", ru: "работать", pn: "/wɜːk/" },
        { e: "✋", en: "pick", transcr: "пик", ru: "собирать", pn: "/pɪk/" },
        { e: "📦", en: "pack", transcr: "пэк", ru: "упаковывать", pn: "/pæk/" },
        { e: "🛍️", en: "carry", transcr: "кэри", ru: "носить", pn: "/ˈkæri/" },
        { e: "⚖️", en: "weigh", transcr: "уэй", ru: "взвешивать", pn: "/weɪ/" },
        { e: "🗂️", en: "sort", transcr: "сот", ru: "сортировать", pn: "/sɔːt/" },
        { e: "💦", en: "wash", transcr: "уош", ru: "мыть", pn: "/wɒʃ/" },
        { e: "✂️", en: "cut", transcr: "кат", ru: "резать", pn: "/kʌt/" },
        { e: "🏋️", en: "lift", transcr: "лифт", ru: "поднимать", pn: "/lɪft/" },
        { e: "🫸", en: "push", transcr: "пуш", ru: "толкать", pn: "/pʊʃ/" },
        { e: "🫷", en: "pull", transcr: "пул", ru: "тянуть", pn: "/pʊl/" },
        { e: "🪣", en: "fill", transcr: "фил", ru: "наполнять", pn: "/fɪl/" },
        { e: "🔢", en: "count", transcr: "каунт", ru: "считать", pn: "/kaʊnt/" },
        { e: "🧽", en: "clean", transcr: "клин", ru: "чистить, убирать", pn: "/kliːn/" },
        { e: "✔️", en: "check", transcr: "чек", ru: "проверять", pn: "/tʃek/" },
        { e: "🚚", en: "load", transcr: "лоуд", ru: "грузить", pn: "/ləʊd/" },
        { e: "↔️", en: "move", transcr: "мув", ru: "перемещать", pn: "/muːv/" },
        { e: "📚", en: "stack", transcr: "стэк", ru: "складывать стопкой", pn: "/stæk/" },
        { e: "🫴", en: "give", transcr: "гив", ru: "давать", pn: "/ɡɪv/" },
        { e: "🤲", en: "take", transcr: "тэйк", ru: "брать", pn: "/teɪk/" },
        { e: "🔓", en: "open", transcr: "оупэн", ru: "открывать", pn: "/ˈəʊpən/" },
        { e: "🔒", en: "close", transcr: "клоуз", ru: "закрывать", pn: "/kləʊz/" },
        { e: "⏳", en: "wait", transcr: "уэйт", ru: "ждать", pn: "/weɪt/" },
        { e: "👀", en: "look", transcr: "лук", ru: "смотреть", pn: "/lʊk/" },
        { e: "▶️", en: "start", transcr: "старт", ru: "начинать", pn: "/stɑːt/" },
        { e: "🏁", en: "finish", transcr: "финиш", ru: "заканчивать", pn: "/ˈfɪnɪʃ/" },
        { e: "⛏️", en: "dig", transcr: "диг", ru: "копать", pn: "/dɪɡ/" },
        { e: "🪢", en: "tie", transcr: "тай", ru: "завязывать", pn: "/taɪ/" },
        { e: "🔧", en: "fix", transcr: "фикс", ru: "чинить", pn: "/fɪks/" },
        { e: "🫐", en: "berry", transcr: "бэри", ru: "ягода", pn: "/ˈberi/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! Do you pick berries?", transcr: "Гуд монинг! Ду ю пик бэриз?", ru: "Доброе утро! Ты собираешь ягоды?" },
        { s: "w", en: "Yes. I pick berries.", transcr: "Йес. Ай пик бэриз.", ru: "Да. Я собираю ягоды." },
        { s: "m", en: "Good. You pack them in punnets.", transcr: "Гуд. Ю пэк зэм ин панитс.", ru: "Хорошо. Ты упаковываешь их в корзинки." },
        { s: "w", en: "Do I weigh the punnets?", transcr: "Ду ай уэй зэ панитс?", ru: "Я взвешиваю корзинки?" },
        { s: "m", en: "Yes. You weigh them on the scale.", transcr: "Йес. Ю уэй зэм он зэ скэйл.", ru: "Да. Ты взвешиваешь их на весах." },
        { s: "w", en: "Does Sara sort the berries?", transcr: "Даз Сара сот зэ бэриз?", ru: "Сара сортирует ягоды?" },
        { s: "m", en: "Yes. She sorts the berries.", transcr: "Йес. Ши сотс зэ бэриз.", ru: "Да. Она сортирует ягоды." },
        { s: "w", en: "Do we start work?", transcr: "Ду уи старт вёк?", ru: "Мы начинаем работу?" },
        { s: "m", en: "Yes. We start. Carry the crates.", transcr: "Йес. Уи старт. Кэри зэ крэйтс.", ru: "Да. Начинаем. Неси ящики." },
        { s: "w", en: "I carry them to the field.", transcr: "Ай кэри зэм ту зэ филд.", ru: "Я несу их в поле." },
      ],

      quiz: [
        { q: '[TRANSLATE] "собирать (ягоды)"', opts: ["pick", "pack", "sort", "weigh"], c: 0, expl: "pick — собирать. pack — упаковывать.", hint_ru: "pick." },
        { q: '[TRANSLATE] "упаковывать"', opts: ["pack", "pick", "carry", "wash"], c: 0, expl: "pack — упаковывать.", hint_ru: "pack." },
        { q: '[COMPLETE] "She ___ boxes." (она)', opts: ["packs", "pack", "packing", "packed"], c: 0, expl: "he/she/it → глагол +s: packs.", hint_ru: "Она упаковывает коробки." },
        { q: '[COMPLETE] "I ___ berries." (я)', opts: ["pick", "picks", "picking", "picked"], c: 0, expl: "I → глагол без -s: pick.", hint_ru: "Я собираю ягоды." },
        { q: "[NEGATIVE] Где отрицание?", opts: ["He picks berries", "He does not pick berries", "Does he pick berries?", "He pick berries"], c: 1, expl: "Отрицание = does not + глагол без -s.", hint_ru: "Он не собирает ягоды." },
        { q: '[QUESTION] "___ you pick berries?"', opts: ["Do", "Does", "Are", "Is"], c: 0, expl: "I/you/we/they → Do в начале.", hint_ru: "Ты собираешь ягоды?" },
        { q: '[COMPLETE] "___ she pack boxes?"', opts: ["Does", "Do", "Is", "Are"], c: 0, expl: "he/she/it → Does + глагол без -s.", hint_ru: "Она упаковывает коробки?" },
        { q: '[COMPLETE] "Give ___ the punnet." (мне)', opts: ["me", "I", "my", "you"], c: 0, expl: "После глагола: I → me. Give me — дай мне.", hint_ru: "Дай мне корзинку." },
        { q: '[COMPLETE] "Give ___ the box." (ему)', opts: ["him", "he", "his", "me"], c: 0, expl: "После глагола: he → him. Give him — дай ему.", hint_ru: "Дай ему коробку." },
        { q: "[CORRECT] Где правильно?", opts: ["She packs boxes", "She pack boxes", "She packing boxes", "Boxes she packs"], c: 0, expl: "She + глагол +s: packs. Порядок: кто + глагол + что.", hint_ru: "Она упаковывает коробки." },
        { q: "[LISTEN] She packs the boxes.", opts: ["Она упаковывает коробки.", "Она собирает ягоды.", "Она носит ящики.", "Она моет фургон."], c: 0, expl: "pack — упаковывать, box — коробка." },
        { q: "[GIST] Что рабочий делает с корзинками (punnets) по диалогу?", opts: ["Взвешивает их на весах", "Моет их", "Считает деньги", "Чинит их"], c: 0, expl: "В диалоге: \"You weigh them on the scale\" — взвешиваешь на весах.", hint_ru: "Вспомните про корзинки." },
      ],

      everyday: {
        title_ru: "Понять задание и попросить о помощи",
        phrases: [
          { en: "What do I do?", transcr: "Уот ду ай ду?", ru: "Что мне делать?" },
          { en: "Show me, please.", transcr: "Шоу ми, плиз.", ru: "Покажите мне, пожалуйста." },
          { en: "Is this OK?", transcr: "Из зис оукэй?", ru: "Так нормально?" },
          { en: "Can you help me?", transcr: "Кэн ю хэлп ми?", ru: "Можете мне помочь?" },
          { en: "It is too heavy.", transcr: "Ит из ту хэви.", ru: "Это слишком тяжело." },
          { en: "I need a break.", transcr: "Ай нид э брэйк.", ru: "Мне нужен перерыв." },
          { en: "How many boxes?", transcr: "Хау мэни боксиз?", ru: "Сколько коробок?" },
          { en: "Faster or slower?", transcr: "Фастэ о слоуэ?", ru: "Быстрее или медленнее?" },
        ],
      },
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = LESSONS;
  else root.LESSONS = LESSONS;
})(typeof window !== "undefined" ? window : globalThis);
