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
          '<div style="line-height:1.6">Так говорить — ошибка:<br>❌ <b>I worker</b><br>Правильно:<br>✅ <b>I am a worker</b> <span class="g-transcr">[ай эм э уёкэ]</span><br>👉 Между «кто» и «какой» всегда ставим <b>am / is / are</b>.</div>',
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
              { subj: "I", verb: "am", example: "I am a worker", transcr: "Ай эм э уёкэ", tr_ru: "Я — рабочий" },
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
              { subj: "Am", verb: "I", example: "Am I a worker?", transcr: "Эм ай э уёкэ", tr_ru: "Я рабочий?" },
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
        simple_ru: {
          formula: 'Кто + <b>am / is / are</b> + слово.<br><span class="g-transcr">я → am · он/она → is · ты/мы/они → are</span>',
          examples: [
            { en: "I am a worker.", transcr: "Ай эм э уёкэ.", ru: "Я (I) + am + рабочий (worker)." },
            { en: "He is a farmer.", transcr: "Хи из э фармэ.", ru: "Он (he) + is + фермер (farmer)." },
          ],
        },
        ytQuery: "глагол to be am is are простыми словами для начинающих",
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
        { e: "👷", en: "worker", transcr: "уёкэ", ru: "рабочий", pn: "/ˈwɜːkə/" },
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
        { e: "🙌", en: "welcome", transcr: "уэлкэм", ru: "добро пожаловать", pn: "/ˈwelkəm/" },
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
        simple_ru: {
          formula: 'Чей + предмет.<br><span class="g-transcr">мой → my · твой → your · его → his · её → her</span>',
          examples: [
            { en: "my bag", transcr: "май бэг", ru: "мой (my) + сумка (bag)." },
            { en: "her phone", transcr: "хё фоун", ru: "её (her) + телефон (phone)." },
          ],
        },
        ytQuery: "притяжательные местоимения my your his her английский для начинающих",
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
        simple_ru: {
          formula: 'Один предмет → <b>This is a</b> + предмет.<br>Много → <b>These are</b> + предметы.',
          examples: [
            { en: "This is a punnet.", transcr: "Зис из э панит.", ru: "Это один (This is a) + корзинка (punnet)." },
            { en: "These are crates.", transcr: "Зиз ар крэйтс.", ru: "Это много (These are) + ящики (crates)." },
          ],
        },
        ytQuery: "this is these are английский простыми словами для начинающих",
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
        { e: "⚖️", en: "scales", transcr: "скэйлз", ru: "весы", pn: "/skeɪlz/" },
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
        { s: "m", en: "Good morning! Welcome to the farm.", transcr: "Гуд монинг! Уэлкэм ту зэ фарм.", ru: "Доброе утро! Добро пожаловать на ферму." },
        { s: "w", en: "Thanks! What is this?", transcr: "Сэнкс! Уот из зис?", ru: "Спасибо! Что это?" },
        { s: "m", en: "This is a crate. These are punnets.", transcr: "Зис из э крэйт. Зиз ар панитс.", ru: "Это ящик. Это корзинки." },
        { s: "w", en: "Is this a trolley?", transcr: "Из зис э троли?", ru: "Это тележка?" },
        { s: "m", en: "Yes. This is your trolley.", transcr: "Йес. Зис из ё троли.", ru: "Да. Это твоя тележка." },
        { s: "w", en: "What are those?", transcr: "Уот ар зоуз?", ru: "А что это?" },
        { s: "m", en: "Those are scales.", transcr: "Зоуз ар скэйлз.", ru: "Это весы." },
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
        { q: "[GIST] Что показывает менеджер рабочему в диалоге?", opts: ["Ящик, корзинки, тележку, весы, инструменты", "Нож, ножницы и молоток", "Семью и коллег", "Паспорт и визу"], c: 0, expl: "Менеджер показывает: crate (ящик), punnets (корзинки), trolley (тележка), scales (весы), tools (инструменты).", hint_ru: "Вспомните диалог." },
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
          { en: "It is five pounds.", transcr: "Ит из файв паундз.", ru: "Это пять фунтов." },
        ],
        simple_ru: {
          formula: 'О времени, дне и цене → <b>It is</b> + …<br><span class="g-transcr">[ит из]</span>',
          examples: [
            { en: "It is six o'clock.", transcr: "Ит из сикс эклок.", ru: "Сейчас (It is) + 6 часов (six o'clock)." },
            { en: "It is ten pounds.", transcr: "Ит из тэн паундз.", ru: "Это (It is) + 10 фунтов (ten pounds)." },
          ],
        },
        ytQuery: "it is время день и цена английский для начинающих",
      },

      words: [
        { e: "1️⃣", en: "one", transcr: "уан", ru: "один", pn: "/wʌn/" },
        { e: "2️⃣", en: "two", transcr: "ту", ru: "два", pn: "/tuː/" },
        { e: "3️⃣", en: "three", transcr: "фри", ru: "три", pn: "/θriː/" },
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
              { subj: "The van", verb: "is", example: "The van is behind the shed", transcr: "Зэ вэн из бихайнд зэ шед", tr_ru: "Фургон за сараем" },
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
          { en: "The van is near the gate.", transcr: "Зэ вэн из ниэ зэ гейт.", ru: "Фургон у ворот." },
          { en: "The market is on the road.", transcr: "Зэ макит из он зэ роуд.", ru: "Рынок на дороге." },
        ],
        simple_ru: {
          formula: 'Где? → <b>Where is</b> + место?<br>Предлог перед местом: <b>in</b> (в) · <b>on</b> (на) · <b>under</b> (под)',
          examples: [
            { en: "Where is the canteen?", transcr: "Уэа из зэ кэнтин?", ru: "Где (Where is) + столовая (canteen)?" },
            { en: "The sign is on the wall.", transcr: "Зэ сайн из он зэ уол.", ru: "Табличка (sign) + на (on) + стене (wall)." },
          ],
        },
        ytQuery: "where is предлоги места in on under английский для начинающих",
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
        { e: "🚐", en: "van", transcr: "вэн", ru: "фургон", pn: "/væn/" },
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
        { s: "m", en: "Welcome! This is the camp.", transcr: "Уэлкэм! Зис из зэ кэмп.", ru: "Добро пожаловать! Это лагерь." },
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
              { subj: "I", verb: "do not", example: "I do not work on Sunday", transcr: "Ай ду нот уёк он сандэй", tr_ru: "Я не работаю в воскресенье" },
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
          { en: "I always work on the farm.", transcr: "Ай олуэйз уёк он зэ фарм.", ru: "Я всегда работаю на ферме." },
          { en: "She gives me the box.", transcr: "Ши гивз ми зэ бокс.", ru: "Она даёт мне коробку." },
          { en: "We carry them to the shed.", transcr: "Уи кэри зэм ту зэ шед.", ru: "Мы носим их в сарай." },
          { en: "He never washes the van.", transcr: "Хи нэвэ уошиз зэ вэн.", ru: "Он никогда не моет фургон." },
          { en: "Tom checks us.", transcr: "Том чекс ас.", ru: "Том проверяет нас." },
          { en: "I sometimes work on Saturday.", transcr: "Ай самтаймз уёк он сэтэдэй.", ru: "Я иногда работаю в субботу." },
        ],
        simple_ru: {
          formula: 'I / you / we / they + глагол.<br>he / she / it + глагол<b>+s</b>.<br><span class="g-transcr">I pick · She pick<b>s</b></span>',
          examples: [
            { en: "I pick berries.", transcr: "Ай пик бэриз.", ru: "Я (I) + собираю (pick) + ягоды (berries)." },
            { en: "She packs the punnets.", transcr: "Ши пэкс зэ панитс.", ru: "Она (She) + упаковывает (pack+s) + корзинки (punnets)." },
          ],
        },
        ytQuery: "present simple он она оно глагол с окончанием s английский для начинающих",
      },

      words: [
        { e: "🛠️", en: "work", transcr: "уёк", ru: "работать", pn: "/wɜːk/" },
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
        { s: "m", en: "Yes. You weigh them on the scales.", transcr: "Йес. Ю уэй зэм он зэ скэйлз.", ru: "Да. Ты взвешиваешь их на весах." },
        { s: "w", en: "Does Sara sort the berries?", transcr: "Даз Сара сот зэ бэриз?", ru: "Сара сортирует ягоды?" },
        { s: "m", en: "Yes. She sorts the berries.", transcr: "Йес. Ши сотс зэ бэриз.", ru: "Да. Она сортирует ягоды." },
        { s: "w", en: "Do we start work?", transcr: "Ду уи старт уёк?", ru: "Мы начинаем работу?" },
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
        { q: "[GIST] Что рабочий делает с корзинками (punnets) по диалогу?", opts: ["Взвешивает их на весах", "Моет их", "Считает деньги", "Чинит их"], c: 0, expl: "В диалоге: \"You weigh them on the scales\" — взвешиваешь на весах.", hint_ru: "Вспомните про корзинки." },
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

    {
      id: 7,
      mod: 4,
      title_ru: "Что я делаю прямо сейчас",
      cefr: "Present Continuous · Future plans",

      grammar: {
        title_ru: "Я работаю СЕЙЧАС: am / is / are + …ing",
        intro_ru:
          '<div style="line-height:1.6">Так говорить — ошибка:<br>❌ <b>I working</b> / ❌ <b>I work now</b><br>Правильно:<br>✅ <b>I am working</b> <span class="g-transcr">[ай эм уёкинг]</span> (я работаю прямо сейчас)<br>👉 Действие ПРЯМО СЕЙЧАС = <b>am / is / are</b> + глагол + <b>-ing</b>.</div>',
        cultural_ru:
          'В русском «я работаю» — и «вообще», и «сейчас». В английском это РАЗНЫЕ времена:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>Сейчас:</b> I am working <span class="g-transcr">[ай эм уёкинг]</span></div>' +
          '<div><b>Всегда (Урок 6):</b> I work <span class="g-transcr">[ай уёк]</span></div></div>' +
          '<div style="margin-top:6px">Это же время говорит о <b>планах</b>: <b>I am finishing today</b> <span class="g-transcr">[ай эм финишинг тудэй]</span> — я заканчиваю сегодня (план на день).</div>',
        note_ru:
          '⚠️ Не забывай <b>am/is/are</b> — нельзя «I working». Помни: <b>I → am</b>, <b>he/she/it → is</b>, <b>you/we/they → are</b>. К глаголу всегда добавляй <b>-ing</b>: work → work<b>ing</b>, pick → pick<b>ing</b>.',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I am</code> + …ing</div>' +
              '<div><code>He/She/It is</code> + …ing</div>' +
              '<div><code>You/We/They are</code> + …ing</div>' +
              '<div><code>I am picking</code> <span class="g-transcr">[ай эм пикинг]</span></div></div>',
            table: [
              { subj: "I", verb: "am picking", example: "I am picking berries", transcr: "Ай эм пикинг бэриз", tr_ru: "Я собираю ягоды (сейчас)" },
              { subj: "He", verb: "is spraying", example: "He is spraying the plants", transcr: "Хи из спрэйинг зэ плантс", tr_ru: "Он опрыскивает растения (сейчас)" },
              { subj: "We", verb: "are sweeping", example: "We are sweeping the shed", transcr: "Уи ар суипинг зэ шед", tr_ru: "Мы подметаем сарай (сейчас)" },
              { subj: "They", verb: "are reading", example: "They are reading the label", transcr: "Зэй ар ридинг зэ лэйбл", tr_ru: "Они читают этикетку (сейчас)" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'После <b>am/is/are</b> ставим <b>not</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I am not working</code></div>' +
              '<div><code>She is not picking</code></div></div>',
            table: [
              { subj: "I", verb: "am not", example: "I am not resting", transcr: "Ай эм нот рэстинг", tr_ru: "Я не отдыхаю (сейчас)" },
              { subj: "She", verb: "is not", example: "She is not feeding", transcr: "Ши из нот фидинг", tr_ru: "Она не кормит (сейчас)" },
              { subj: "They", verb: "are not", example: "They are not pouring", transcr: "Зэй ар нот поринг", tr_ru: "Они не наливают (сейчас)" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              '<b>am/is/are</b> ставим ВПЕРЁД:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Are you working?</code> <span class="g-transcr">[ар ю уёкинг]</span></div>' +
              '<div><code>Is she picking?</code> <span class="g-transcr">[из ши пикинг]</span></div></div>',
            table: [
              { subj: "Are", verb: "you", example: "Are you reading the label?", transcr: "Ар ю ридинг зэ лэйбл?", tr_ru: "Ты читаешь этикетку (сейчас)?" },
              { subj: "Is", verb: "he", example: "Is he climbing the ladder?", transcr: "Из хи клаймбинг зэ лэдэ?", tr_ru: "Он залезает на лестницу (сейчас)?" },
              { subj: "What", verb: "are", example: "What are you doing?", transcr: "Уот ар ю дуинг?", tr_ru: "Что ты делаешь?" },
            ],
          },
        },
        examples: [
          { en: "I am holding the box.", transcr: "Ай эм хоулдинг зэ бокс.", ru: "Я держу коробку (сейчас)." },
          { en: "She is spraying the plants.", transcr: "Ши из спрэйинг зэ плантс.", ru: "Она опрыскивает растения (сейчас)." },
          { en: "We are mixing it now.", transcr: "Уи ар миксинг ит нау.", ru: "Мы сейчас это смешиваем." },
          { en: "He is not resting.", transcr: "Хи из нот рэстинг.", ru: "Он не отдыхает." },
          { en: "Are you reading the label?", transcr: "Ар ю ридинг зэ лэйбл?", ru: "Ты читаешь этикетку?" },
          { en: "Tom is walking to the field.", transcr: "Том из уокинг ту зэ филд.", ru: "Том идёт в поле (сейчас)." },
          { en: "I am finishing today.", transcr: "Ай эм финишинг тудэй.", ru: "Я заканчиваю сегодня (план)." },
          { en: "We are starting tomorrow.", transcr: "Уи ар стартинг тэмороу.", ru: "Мы начинаем завтра (план)." },
        ],
        simple_ru: {
          formula: 'Прямо сейчас → <b>am / is / are</b> + глагол<b>+ing</b>.<br><span class="g-transcr">I am work<b>ing</b> · She is pick<b>ing</b></span>',
          examples: [
            { en: "I am picking berries.", transcr: "Ай эм пикинг бэриз.", ru: "Я (I) + am + собираю сейчас (pick+ing) + ягоды (berries)." },
            { en: "She is spraying the plants.", transcr: "Ши из спрэйинг зэ плантс.", ru: "Она (She) + is + опрыскивает сейчас (spray+ing) + растения (plants)." },
          ],
        },
        ytQuery: "present continuous am is are ing английский прямо сейчас для начинающих",
      },

      words: [
        { e: "➡️", en: "go", transcr: "гоу", ru: "идти", pn: "/ɡəʊ/" },
        { e: "🚶", en: "walk", transcr: "уок", ru: "ходить пешком", pn: "/wɔːk/" },
        { e: "🌧️", en: "rain", transcr: "рэйн", ru: "идти (о дожде)", pn: "/reɪn/" },
        { e: "💬", en: "talk", transcr: "ток", ru: "говорить", pn: "/tɔːk/" },
        { e: "📞", en: "call", transcr: "кол", ru: "звать", pn: "/kɔːl/" },
        { e: "🤝", en: "help", transcr: "хэлп", ru: "помогать", pn: "/help/" },
        { e: "😌", en: "rest", transcr: "рэст", ru: "отдыхать", pn: "/rest/" },
        { e: "🔘", en: "press", transcr: "прэс", ru: "нажимать", pn: "/pres/" },
        { e: "🧴", en: "spray", transcr: "спрэй", ru: "опрыскивать", pn: "/spreɪ/" },
        { e: "🌿", en: "grow", transcr: "гроу", ru: "расти", pn: "/ɡrəʊ/" },
        { e: "🧍", en: "stand", transcr: "стэнд", ru: "стоять", pn: "/stænd/" },
        { e: "📖", en: "read", transcr: "рид", ru: "читать", pn: "/riːd/" },
        { e: "🧎", en: "kneel", transcr: "нил", ru: "вставать на колени", pn: "/niːl/" },
        { e: "🎨", en: "paint", transcr: "пэйнт", ru: "красить", pn: "/peɪnt/" },
        { e: "🪜", en: "climb", transcr: "клайм", ru: "залезать", pn: "/klaɪm/" },
        { e: "🪝", en: "hang", transcr: "хэнг", ru: "вешать", pn: "/hæŋ/" },
        { e: "🫗", en: "pour", transcr: "по", ru: "наливать", pn: "/pɔː/" },
        { e: "🥣", en: "mix", transcr: "микс", ru: "смешивать", pn: "/mɪks/" },
        { e: "🔥", en: "burn", transcr: "бён", ru: "жечь", pn: "/bɜːn/" },
        { e: "🔄", en: "turn", transcr: "тён", ru: "поворачивать", pn: "/tɜːn/" },
        { e: "🤾", en: "throw", transcr: "сроу", ru: "бросать", pn: "/θrəʊ/" },
        { e: "🧤", en: "catch", transcr: "кэч", ru: "ловить", pn: "/kætʃ/" },
        { e: "🌬️", en: "dry", transcr: "драй", ru: "сушить", pn: "/draɪ/" },
        { e: "🐑", en: "feed", transcr: "фид", ru: "кормить", pn: "/fiːd/" },
        { e: "🧹", en: "sweep", transcr: "суип", ru: "подметать", pn: "/swiːp/" },
        { e: "🔐", en: "lock", transcr: "лок", ru: "запирать", pn: "/lɒk/" },
        { e: "👉", en: "point", transcr: "пойнт", ru: "показывать пальцем", pn: "/pɔɪnt/" },
        { e: "📢", en: "shout", transcr: "шаут", ru: "кричать", pn: "/ʃaʊt/" },
        { e: "📤", en: "send", transcr: "сэнд", ru: "отправлять", pn: "/send/" },
        { e: "✊", en: "hold", transcr: "хоулд", ru: "держать", pn: "/həʊld/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! What are you doing?", transcr: "Гуд монинг! Уот ар ю дуинг?", ru: "Доброе утро! Что ты делаешь?" },
        { s: "w", en: "I am spraying the plants now.", transcr: "Ай эм спрэйинг зэ плантс нау.", ru: "Я опрыскиваю растения сейчас." },
        { s: "m", en: "Good. Sara is reading the label.", transcr: "Гуд. Сара из ридинг зэ лэйбл.", ru: "Хорошо. Сара читает этикетку." },
        { s: "w", en: "Is Tom climbing the ladder?", transcr: "Из Том клаймбинг зэ лэдэ?", ru: "Том залезает на лестницу?" },
        { s: "m", en: "Yes. He is climbing it now.", transcr: "Йес. Хи из клаймбинг ит нау.", ru: "Да. Он сейчас на неё залезает." },
        { s: "w", en: "We are sweeping the shed.", transcr: "Уи ар суипинг зэ шед.", ru: "Мы подметаем сарай." },
        { s: "m", en: "Look! It is raining now.", transcr: "Лук! Ит из рэйнинг нау.", ru: "Смотри! Сейчас идёт дождь." },
        { s: "w", en: "I am helping Sara.", transcr: "Ай эм хэлпинг Сара.", ru: "Я помогаю Саре." },
        { s: "m", en: "Are you resting now?", transcr: "Ар ю рэстинг нау?", ru: "Ты сейчас отдыхаешь?" },
        { s: "w", en: "No. I am not resting.", transcr: "Ноу. Ай эм нот рэстинг.", ru: "Нет. Я не отдыхаю." },
        { s: "m", en: "Good. We are finishing soon.", transcr: "Гуд. Уи ар финишинг суун.", ru: "Хорошо. Мы скоро заканчиваем." },
        { s: "w", en: "I am starting tomorrow.", transcr: "Ай эм стартинг тэмороу.", ru: "Я начинаю завтра." },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ picking berries." (я)', opts: ["am", "is", "are", "be"], c: 0, expl: "I → am. Сейчас = am/is/are + глагол-ing.", hint_ru: "Я собираю ягоды сейчас." },
        { q: '[COMPLETE] "She ___ spraying the plants." (она)', opts: ["is", "am", "are", "be"], c: 0, expl: "he/she/it → is.", hint_ru: "Она опрыскивает растения." },
        { q: '[COMPLETE] "They ___ sweeping the shed." (они)', opts: ["are", "am", "is", "be"], c: 0, expl: "you/we/they → are.", hint_ru: "Они подметают сарай." },
        { q: '[COMPLETE] "I am ___ Sara now." (помогать)', opts: ["helping", "help", "helps", "helped"], c: 0, expl: "Сейчас = am + глагол-ing: helping.", hint_ru: "Я помогаю Саре сейчас." },
        { q: '[TRANSLATE] "кормить"', opts: ["feed", "press", "grow", "throw"], c: 0, expl: "feed — кормить.", hint_ru: "feed." },
        { q: '[TRANSLATE] "отдыхать"', opts: ["rest", "help", "talk", "walk"], c: 0, expl: "rest — отдыхать.", hint_ru: "rest." },
        { q: "[NEGATIVE] Где отрицание?", opts: ["She is reading", "She is not reading", "Is she reading?", "She reading"], c: 1, expl: "Отрицание = am/is/are + not + глагол-ing.", hint_ru: "Она не читает." },
        { q: '[QUESTION] "___ you climbing the ladder?"', opts: ["Are", "Is", "Am", "Do"], c: 0, expl: "you → Are в начале вопроса.", hint_ru: "Ты залезаешь на лестницу сейчас?" },
        { q: "[CORRECT] Где правильно?", opts: ["He is holding the box", "He holding the box", "He is hold the box", "He are holding the box"], c: 0, expl: "He → is + глагол-ing: He is holding.", hint_ru: "Он держит коробку сейчас." },
        { q: "[LISTEN] I am feeding now.", opts: ["Я кормлю животных.", "Я сажаю растения.", "Я отдыхаю.", "Я собираю ягоды."], c: 0, expl: "feed — кормить; am + feeding = сейчас." },
        { q: '[TRANSLATE] "Мы начинаем завтра (план)"', opts: ["We are starting tomorrow", "We start tomorrow", "We started tomorrow", "We are start tomorrow"], c: 0, expl: "Present Continuous = и план на будущее: am/is/are + -ing + tomorrow.", hint_ru: "Будущий план тоже через -ing." },
        { q: "[GIST] Что рабочий делает, когда идёт дождь (по диалогу)?", opts: ["Помогает Саре", "Грузит ящики", "Считает деньги", "Идёт спать"], c: 0, expl: 'После «It is raining» рабочий говорит: I am helping Sara.', hint_ru: "Смотрите реплику после дождя." },
      ],

      everyday: {
        title_ru: "Сказать, что ты делаешь сейчас",
        phrases: [
          { en: "I am coming!", transcr: "Ай эм каминг!", ru: "Иду! (сейчас приду)" },
          { en: "I am working now.", transcr: "Ай эм уёкинг нау.", ru: "Я сейчас работаю." },
          { en: "Wait, I am finishing.", transcr: "Уэйт, ай эм финишинг.", ru: "Подождите, я заканчиваю." },
          { en: "What are you doing?", transcr: "Уот ар ю дуинг?", ru: "Что ты делаешь?" },
          { en: "I am going to the field.", transcr: "Ай эм гоуинг ту зэ филд.", ru: "Я иду в поле." },
          { en: "We are starting soon.", transcr: "Уи ар стартинг суун.", ru: "Мы скоро начинаем." },
          { en: "I am not ready yet.", transcr: "Ай эм нот рэди йет.", ru: "Я ещё не готов." },
        ],
      },
    },
    {
      id: 8,
      mod: 5,
      title_ru: "Что у меня есть: одежда и цвета",
      cefr: "have / has · clothes · colours",

      grammar: {
        title_ru: "У меня есть…: have / has",
        intro_ru:
          '<div style="line-height:1.6">Так говорить — ошибка:<br>❌ <b>I has boots</b> / ❌ <b>He have a cap</b><br>Правильно:<br>✅ <b>I have boots</b> <span class="g-transcr">[ай хэв бутс]</span> (у меня есть ботинки)<br>✅ <b>He has a cap</b> <span class="g-transcr">[хи хэз э кэп]</span> (у него есть кепка)<br>👉 «У меня есть…» = <b>have</b>. Для <b>he / she / it</b> → <b>has</b>.</div>',
        cultural_ru:
          'В русском «у меня есть ботинки» — без глагола. В английском всегда нужен <b>have / has</b>:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>я / ты / мы / они:</b> I have <span class="g-transcr">[ай хэв]</span></div>' +
          '<div><b>он / она / оно:</b> He has <span class="g-transcr">[хи хэз]</span></div></div>' +
          '<div style="margin-top:6px">Британцы часто спрашивают через <b>Have you got…?</b> <span class="g-transcr">[хэв ю гот]</span> — это то же «У тебя есть…?». Отвечать можно просто: <b>Yes, I have.</b></div>',
        note_ru:
          '⚠️ Частая ошибка: <b>he have</b>. Правильно <b>he has</b>. В вопросе и отрицании — <b>do / does</b>, а <b>have</b> остаётся в базовой форме: <b>Does he have…?</b> (не «does he has»), <b>I do not have…</b>',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I / You / We / They</code> → have</div>' +
              '<div><code>He / She / It</code> → has</div>' +
              '<div><code>I have black boots</code> <span class="g-transcr">[ай хэв блэк бутс]</span></div>' +
              '<div><code>He has a blue cap</code> <span class="g-transcr">[хи хэз э блу кэп]</span></div></div>',
            table: [
              { subj: "I", verb: "have", example: "I have black boots", transcr: "Ай хэв блэк бутс", tr_ru: "У меня чёрные ботинки" },
              { subj: "He", verb: "has", example: "He has a blue cap", transcr: "Хи хэз э блу кэп", tr_ru: "У него синяя кепка" },
              { subj: "She", verb: "has", example: "She has a yellow vest", transcr: "Ши хэз э йелоу вэст", tr_ru: "На ней жёлтый жилет" },
              { subj: "We", verb: "have", example: "We have green gloves", transcr: "Уи хэв грин главз", tr_ru: "У нас зелёные перчатки" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'Отрицание — через <b>do not / does not</b>, <b>have</b> не меняется:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I do not have a helmet</code></div>' +
              '<div><code>He does not have gloves</code></div></div>',
            table: [
              { subj: "I", verb: "do not have", example: "I do not have a helmet", transcr: "Ай ду нот хэв э хэлмит", tr_ru: "У меня нет каски" },
              { subj: "He", verb: "does not have", example: "He does not have gloves", transcr: "Хи даз нот хэв главз", tr_ru: "У него нет перчаток" },
              { subj: "We", verb: "do not have", example: "We do not have masks", transcr: "Уи ду нот хэв маскс", tr_ru: "У нас нет масок" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              '<b>Do / Does</b> ставим ВПЕРЁД, <b>have</b> — в базовой форме:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Do you have boots?</code> <span class="g-transcr">[ду ю хэв бутс]</span></div>' +
              '<div><code>Does she have a cap?</code> <span class="g-transcr">[даз ши хэв э кэп]</span></div></div>',
            table: [
              { subj: "Do", verb: "you have", example: "Do you have your boots?", transcr: "Ду ю хэв ё бутс?", tr_ru: "У тебя есть ботинки?" },
              { subj: "Does", verb: "she have", example: "Does she have a scarf?", transcr: "Даз ши хэв э скаф?", tr_ru: "У неё есть шарф?" },
              { subj: "What", verb: "colour", example: "What colour is your jacket?", transcr: "Уот калэ из ё джэкит?", tr_ru: "Какого цвета твоя куртка?" },
            ],
          },
        },
        examples: [
          { en: "I have black boots.", transcr: "Ай хэв блэк бутс.", ru: "У меня чёрные ботинки." },
          { en: "He has a blue cap.", transcr: "Хи хэз э блу кэп.", ru: "У него синяя кепка." },
          { en: "She has a yellow vest.", transcr: "Ши хэз э йелоу вэст.", ru: "На ней жёлтый жилет." },
          { en: "We have green gloves.", transcr: "Уи хэв грин главз.", ru: "У нас зелёные перчатки." },
          { en: "They have wellies.", transcr: "Зэй хэв уэлиз.", ru: "У них резиновые сапоги." },
          { en: "I do not have a helmet.", transcr: "Ай ду нот хэв э хэлмит.", ru: "У меня нет каски." },
          { en: "He does not have gloves.", transcr: "Хи даз нот хэв главз.", ru: "У него нет перчаток." },
          { en: "Do you have your boots?", transcr: "Ду ю хэв ё бутс?", ru: "У тебя есть ботинки?" },
          { en: "Does she have a scarf?", transcr: "Даз ши хэв э скаф?", ru: "У неё есть шарф?" },
          { en: "What colour is your jacket?", transcr: "Уот калэ из ё джэкит?", ru: "Какого цвета твоя куртка?" },
          { en: "My trousers are brown.", transcr: "Май траузэз а браун.", ru: "Мои брюки коричневые." },
        ],
        simple_ru: {
          formula: 'я / ты / мы / они → <b>have</b>. он / она / оно → <b>has</b>.<br>Вопрос и отрицание — через <b>do / does</b>.<br><span class="g-transcr">I have · He has · Do you have?</span>',
          examples: [
            { en: "I have black boots.", transcr: "Ай хэв блэк бутс.", ru: "Я (I) + have + чёрные (black) + ботинки (boots)." },
            { en: "He has a blue cap.", transcr: "Хи хэз э блу кэп.", ru: "Он (He) + has + синяя (blue) + кепка (cap)." },
          ],
        },
        ytQuery: "have has do does английский у меня есть для начинающих на русском",
      },

      words: [
        { e: "🥾", en: "boots", transcr: "бутс", ru: "ботинки, сапоги", pn: "/buːts/" },
        { e: "🧤", en: "gloves", transcr: "главз", ru: "перчатки", pn: "/ɡlʌvz/" },
        { e: "🦺", en: "vest", transcr: "вэст", ru: "жилет (светоотражающий)", pn: "/vest/" },
        { e: "🧥", en: "jacket", transcr: "джэкит", ru: "куртка", pn: "/ˈdʒækɪt/" },
        { e: "🧢", en: "cap", transcr: "кэп", ru: "кепка", pn: "/kæp/" },
        { e: "⛑️", en: "helmet", transcr: "хэлмит", ru: "каска", pn: "/ˈhelmɪt/" },
        { e: "😷", en: "mask", transcr: "маск", ru: "маска", pn: "/mɑːsk/" },
        { e: "🥽", en: "goggles", transcr: "гоглз", ru: "защитные очки", pn: "/ˈɡɒɡlz/" },
        { e: "👖", en: "trousers", transcr: "траузэз", ru: "брюки", pn: "/ˈtraʊzəz/" },
        { e: "👕", en: "shirt", transcr: "шёт", ru: "рубашка", pn: "/ʃɜːt/" },
        { e: "🧦", en: "socks", transcr: "сокс", ru: "носки", pn: "/sɒks/" },
        { e: "🧣", en: "scarf", transcr: "скаф", ru: "шарф", pn: "/skɑːf/" },
        { e: "👟", en: "trainers", transcr: "трэйнэз", ru: "кроссовки", pn: "/ˈtreɪnəz/" },
        { e: "🥾", en: "wellies", transcr: "уэлиз", ru: "резиновые сапоги", pn: "/ˈweliz/" },
        { e: "🕶️", en: "sunglasses", transcr: "сангласиз", ru: "солнцезащитные очки", pn: "/ˈsʌnɡlɑːsɪz/" },
        { e: "🩳", en: "shorts", transcr: "шотс", ru: "шорты", pn: "/ʃɔːts/" },
        { e: "👓", en: "glasses", transcr: "гласиз", ru: "очки", pn: "/ˈɡlɑːsɪz/" },
        { e: "🧥", en: "coat", transcr: "коут", ru: "пальто, плащ", pn: "/kəʊt/" },
        { e: "🔴", en: "red", transcr: "рэд", ru: "красный", pn: "/red/" },
        { e: "🔵", en: "blue", transcr: "блу", ru: "синий", pn: "/bluː/" },
        { e: "🟢", en: "green", transcr: "грин", ru: "зелёный", pn: "/ɡriːn/" },
        { e: "🟡", en: "yellow", transcr: "йелоу", ru: "жёлтый", pn: "/ˈjeləʊ/" },
        { e: "⚫", en: "black", transcr: "блэк", ru: "чёрный", pn: "/blæk/" },
        { e: "⚪", en: "white", transcr: "уайт", ru: "белый", pn: "/waɪt/" },
        { e: "🟠", en: "orange", transcr: "ориндж", ru: "оранжевый", pn: "/ˈɒrɪndʒ/" },
        { e: "🟤", en: "brown", transcr: "браун", ru: "коричневый", pn: "/braʊn/" },
        { e: "🩶", en: "grey", transcr: "грэй", ru: "серый", pn: "/ɡreɪ/" },
        { e: "🩷", en: "pink", transcr: "пинк", ru: "розовый", pn: "/pɪŋk/" },
        { e: "🟣", en: "purple", transcr: "пёпл", ru: "фиолетовый", pn: "/ˈpɜːpl/" },
        { e: "🎨", en: "colour", transcr: "калэ", ru: "цвет", pn: "/ˈkʌlə/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! Do you have your boots?", transcr: "Гуд монинг! Ду ю хэв ё бутс?", ru: "Доброе утро! У тебя есть ботинки?" },
        { s: "w", en: "Yes, I have my boots. They are black.", transcr: "Йес, ай хэв май бутс. Зэй а блэк.", ru: "Да, ботинки у меня есть. Они чёрные." },
        { s: "m", en: "Good. Do you have gloves?", transcr: "Гуд. Ду ю хэв главз?", ru: "Хорошо. У тебя есть перчатки?" },
        { s: "w", en: "No, I do not have gloves.", transcr: "Ноу, ай ду нот хэв главз.", ru: "Нет, перчаток у меня нет." },
        { s: "m", en: "These gloves are blue. Now you have gloves.", transcr: "Зиз главз а блу. Нау ю хэв главз.", ru: "Эти перчатки синие. Теперь перчатки у тебя есть." },
        { s: "w", en: "Thanks. They are good.", transcr: "Сэнкс. Зэй а гуд.", ru: "Спасибо. Они хорошие." },
        { s: "m", en: "Do you have a vest?", transcr: "Ду ю хэв э вэст?", ru: "У тебя есть жилет?" },
        { s: "w", en: "No, I do not. Where is my vest?", transcr: "Ноу, ай ду нот. Уэа из май вэст?", ru: "Нет. Где мой жилет?" },
        { s: "m", en: "Your vest is yellow. You have it now.", transcr: "Ё вэст из йелоу. Ю хэв ит нау.", ru: "Твой жилет жёлтый. Теперь он у тебя есть." },
        { s: "w", en: "I have my boots, my gloves and my vest.", transcr: "Ай хэв май бутс, май главз энд май вэст.", ru: "У меня есть ботинки, перчатки и жилет." },
        { s: "m", en: "Good. Does Ahmad have his cap?", transcr: "Гуд. Даз Ахмад хэв хиз кэп?", ru: "Хорошо. У Ахмада есть кепка?" },
        { s: "w", en: "Yes, he has a green cap.", transcr: "Йес, хи хэз э грин кэп.", ru: "Да, у него зелёная кепка." },
      ],

      quiz: [
        { q: '[COMPLETE] "He ___ a blue cap." (он)', opts: ["has", "have", "do", "is"], c: 0, expl: "he/she/it → has.", hint_ru: "У него синяя кепка." },
        { q: '[COMPLETE] "I ___ black boots." (я)', opts: ["have", "has", "does", "am"], c: 0, expl: "I/you/we/they → have.", hint_ru: "У меня чёрные ботинки." },
        { q: "[CORRECT] Где правильно?", opts: ["He has a vest", "He have a vest", "He has got vest", "He do have a vest"], c: 0, expl: "he → has + слово.", hint_ru: "У него жилет." },
        { q: '[QUESTION] "___ you have boots?"', opts: ["Do", "Does", "Are", "Have"], c: 0, expl: "you → Do в начале вопроса; have не меняется.", hint_ru: "У тебя есть ботинки?" },
        { q: "[NEGATIVE] Где отрицание?", opts: ["She does not have a cap", "She has a cap", "Does she have a cap?", "She a cap"], c: 0, expl: "Отрицание = do/does + not + have.", hint_ru: "У неё нет кепки." },
        { q: '[TRANSLATE] "перчатки"', opts: ["gloves", "boots", "socks", "cap"], c: 0, expl: "gloves — перчатки.", hint_ru: "gloves." },
        { q: '[TRANSLATE] "жёлтый"', opts: ["yellow", "blue", "green", "brown"], c: 0, expl: "yellow — жёлтый.", hint_ru: "yellow." },
        { q: "[LISTEN] He has a green jacket.", opts: ["У него зелёная куртка.", "У него синяя кепка.", "На ней жёлтый жилет.", "У меня чёрные ботинки."], c: 0, expl: "green — зелёный, jacket — куртка." },
        { q: "[LISTEN] I do not have gloves.", opts: ["У меня нет перчаток.", "У меня есть перчатки.", "У тебя есть носки.", "У него есть каска."], c: 0, expl: "do not have — нет; gloves — перчатки." },
        { q: '[COMPLETE] "Does she ___ a scarf?" (есть)', opts: ["have", "has", "does", "got"], c: 0, expl: "После does — базовая форма have (не has).", hint_ru: "У неё есть шарф?" },
        { q: "[GIST] Какого цвета жилет у рабочего (по диалогу)?", opts: ["Жёлтый", "Чёрный", "Синий", "Зелёный"], c: 0, expl: 'В диалоге: «Your vest is yellow.»', hint_ru: "Смотрите реплику про vest." },
        { q: "[CORRECT] Где правильно?", opts: ["Do you have a mask?", "Do you has a mask?", "Does you have a mask?", "You have mask?"], c: 0, expl: "Do + you + have (базовая форма).", hint_ru: "У тебя есть маска?" },
      ],

      everyday: {
        title_ru: "Экипировка: попросить, чего нет",
        phrases: [
          { en: "Have you got your gloves?", transcr: "Хэв ю гот ё главз?", ru: "У тебя есть перчатки? (так спросит бригадир)" },
          { en: "I have my boots.", transcr: "Ай хэв май бутс.", ru: "Сапоги у меня есть." },
          { en: "I do not have a hi-vis vest.", transcr: "Ай ду нот хэв э хай-вис вэст.", ru: "У меня нет светоотражающего жилета." },
          { en: "Can I have new gloves, please?", transcr: "Кэн ай хэв нью главз, плиз?", ru: "Можно новые перчатки, пожалуйста?" },
          { en: "These boots are too small.", transcr: "Зиз бутс а ту смол.", ru: "Эти сапоги малы." },
        ],
      },
    },
    {
      id: 9,
      mod: 5,
      title_ru: "Что есть в вагончике: комната и кэмп",
      cefr: "there is / there are · some / any · rooms & furniture",

      grammar: {
        title_ru: "Есть / находится: there is / there are",
        intro_ru:
          '<div style="line-height:1.6">Так сказать нельзя:<br>❌ <b>In the room a bed</b> / ❌ <b>The room has a bed</b><br>Правильно:<br>✅ <b>There is a bed in the room</b> <span class="g-transcr">[зэа из э бэд ин зэ рум]</span> (в комнате есть кровать)<br>👉 «Есть / находится» = <b>There is</b> (один предмет) / <b>There are</b> (много).</div>',
        cultural_ru:
          'В русском «в комнате кровать» — без глагола. В английском всегда нужно <b>There is / There are</b>:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>один предмет:</b> There is a bed <span class="g-transcr">[зэа из э бэд]</span></div>' +
          '<div><b>много:</b> There are some beds <span class="g-transcr">[зэа а сам бэдз]</span></div></div>' +
          '<div style="margin-top:6px"><b>some</b> <span class="g-transcr">[сам]</span> — в утверждении («есть несколько»). <b>any</b> <span class="g-transcr">[эни]</span> — в вопросе и отрицании.</div>',
        note_ru:
          '⚠️ Один предмет → <b>is</b>, много → <b>are</b>: «There <b>is</b> a bed», «There <b>are</b> beds». В вопросе и отрицании — <b>any</b>, не some: «Are there <b>any</b> blankets?», «There are <b>not any</b> towels.»',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>There is</code> + один предмет</div>' +
              '<div><code>There are</code> + много</div>' +
              '<div><code>There is a bed</code> <span class="g-transcr">[зэа из э бэд]</span></div>' +
              '<div><code>There are some beds</code> <span class="g-transcr">[зэа а сам бэдз]</span></div></div>',
            table: [
              { subj: "There", verb: "is", example: "There is a bed", transcr: "Зэа из э бэд", tr_ru: "Есть кровать (в комнате)" },
              { subj: "There", verb: "is", example: "There is a heater", transcr: "Зэа из э хитэ", tr_ru: "Есть обогреватель" },
              { subj: "There", verb: "are", example: "There are some blankets", transcr: "Зэа а сам блэнкитс", tr_ru: "Есть одеяла" },
              { subj: "There", verb: "are", example: "There are some chairs", transcr: "Зэа а сам чэаз", tr_ru: "Есть стулья" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'Отрицание — <b>is not / are not</b>; во множественном — с <b>any</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>There is not a shower</code></div>' +
              '<div><code>There are not any towels</code></div></div>',
            table: [
              { subj: "There", verb: "is not", example: "There is not a shower", transcr: "Зэа из нот э шауэ", tr_ru: "Душа нет" },
              { subj: "There", verb: "are not", example: "There are not any towels", transcr: "Зэа а нот эни тауэлз", tr_ru: "Полотенец нет" },
              { subj: "There", verb: "is not", example: "There is not a key", transcr: "Зэа из нот э ки", tr_ru: "Ключа нет" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              '<b>Is / Are</b> ставим ВПЕРЁД; во множественном — <b>any</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Is there a bed?</code> <span class="g-transcr">[из зэа э бэд]</span></div>' +
              '<div><code>Are there any beds?</code> <span class="g-transcr">[а зэа эни бэдз]</span></div></div>',
            table: [
              { subj: "Is", verb: "there a bed?", example: "Is there a bed?", transcr: "Из зэа э бэд?", tr_ru: "Есть кровать?" },
              { subj: "Are", verb: "there any chairs?", example: "Are there any chairs?", transcr: "А зэа эни чэаз?", tr_ru: "Есть стулья?" },
              { subj: "Is", verb: "there a heater?", example: "Is there a heater?", transcr: "Из зэа э хитэ?", tr_ru: "Есть обогреватель?" },
            ],
          },
        },
        examples: [
          { en: "There is a bed in the room.", transcr: "Зэа из э бэд ин зэ рум.", ru: "В комнате есть кровать." },
          { en: "There is a heater near the bed.", transcr: "Зэа из э хитэ ниэ зэ бэд.", ru: "Рядом с кроватью есть обогреватель." },
          { en: "There are some blankets on the bed.", transcr: "Зэа а сам блэнкитс он зэ бэд.", ru: "На кровати есть одеяла." },
          { en: "There are some chairs in the kitchen.", transcr: "Зэа а сам чэаз ин зэ китчин.", ru: "На кухне есть стулья." },
          { en: "There is not a shower here.", transcr: "Зэа из нот э шауэ хиэ.", ru: "Здесь нет душа." },
          { en: "There are not any towels.", transcr: "Зэа а нот эни тауэлз.", ru: "Полотенец нет." },
          { en: "Is there a key? Yes, there is.", transcr: "Из зэа э ки? Йес, зэа из.", ru: "Есть ключ? Да, есть." },
          { en: "Are there any chairs? Yes, there are.", transcr: "А зэа эни чэаз? Йес, зэа а.", ru: "Есть стулья? Да, есть." },
          { en: "The heater is broken.", transcr: "Зэ хитэ из броукэн.", ru: "Обогреватель сломан." },
          { en: "The bed is wet.", transcr: "Зэ бэд из уэт.", ru: "Кровать мокрая." },
          { en: "The fridge is empty.", transcr: "Зэ фридж из эмпти.", ru: "Холодильник пустой." },
          { en: "The crate is heavy.", transcr: "Зэ крэйт из хэви.", ru: "Ящик тяжёлый." },
          { en: "The kettle is full.", transcr: "Зэ кэтл из фул.", ru: "Чайник полный." },
          { en: "The room is ready.", transcr: "Зэ рум из рэди.", ru: "Комната готова." },
        ],
        simple_ru: {
          formula: 'Один предмет → <b>There is</b>. Много → <b>There are</b>.<br>Вопрос: <b>Is there…? / Are there…?</b><br><b>some</b> — в утверждении, <b>any</b> — в вопросе и отрицании.<br><span class="g-transcr">There is a bed · There are some beds</span>',
          examples: [
            { en: "There is a bed.", transcr: "Зэа из э бэд.", ru: "Есть (один) + кровать (bed)." },
            { en: "There are some chairs.", transcr: "Зэа а сам чэаз.", ru: "Есть (много) + стулья (chairs)." },
          ],
        },
        ytQuery: "there is there are some any английский для начинающих на русском",
      },

      words: [
        { e: "🛋️", en: "room", transcr: "рум", ru: "комната", pn: "/ruːm/" },
        { e: "🛏️", en: "bed", transcr: "бэд", ru: "кровать", pn: "/bed/" },
        { e: "🚿", en: "shower", transcr: "шауэ", ru: "душ", pn: "/ˈʃaʊə/" },
        { e: "🛁", en: "bath", transcr: "бас", ru: "ванна", pn: "/bɑːθ/" },
        { e: "🔑", en: "key", transcr: "ки", ru: "ключ", pn: "/kiː/" },
        { e: "🔥", en: "heater", transcr: "хитэ", ru: "обогреватель", pn: "/ˈhiːtə/" },
        { e: "🫖", en: "kettle", transcr: "кэтл", ru: "чайник (электрический)", pn: "/ˈketl/" },
        { e: "🧊", en: "fridge", transcr: "фридж", ru: "холодильник", pn: "/frɪdʒ/" },
        { e: "🍳", en: "cooker", transcr: "кукэ", ru: "плита", pn: "/ˈkʊkə/" },
        { e: "🚰", en: "sink", transcr: "синк", ru: "раковина", pn: "/sɪŋk/" },
        { e: "☕", en: "mug", transcr: "маг", ru: "кружка", pn: "/mʌɡ/" },
        { e: "🍽️", en: "plate", transcr: "плэйт", ru: "тарелка", pn: "/pleɪt/" },
        { e: "🥄", en: "spoon", transcr: "спун", ru: "ложка", pn: "/spuːn/" },
        { e: "🍴", en: "fork", transcr: "фок", ru: "вилка", pn: "/fɔːk/" },
        { e: "🥣", en: "bowl", transcr: "боул", ru: "миска", pn: "/bəʊl/" },
        { e: "🔌", en: "socket", transcr: "сокит", ru: "розетка", pn: "/ˈsɒkɪt/" },
        { e: "💡", en: "lamp", transcr: "лэмп", ru: "лампа", pn: "/læmp/" },
        { e: "🛌", en: "blanket", transcr: "блэнкит", ru: "одеяло", pn: "/ˈblæŋkɪt/" },
        { e: "🕯️", en: "candle", transcr: "кэндл", ru: "свеча", pn: "/ˈkændl/" },
        { e: "📚", en: "shelf", transcr: "шэлф", ru: "полка", pn: "/ʃelf/" },
        { e: "🗄️", en: "drawer", transcr: "дро", ru: "ящик (выдвижной)", pn: "/drɔː/" },
        { e: "🪟", en: "curtain", transcr: "кётэн", ru: "штора", pn: "/ˈkɜːtn/" },
        { e: "💔", en: "broken", transcr: "броукэн", ru: "сломан", pn: "/ˈbrəʊkən/" },
        { e: "💧", en: "wet", transcr: "уэт", ru: "мокрый", pn: "/wet/" },
        { e: "❄️", en: "cold", transcr: "коулд", ru: "холодный", pn: "/kəʊld/" },
        { e: "♨️", en: "hot", transcr: "хот", ru: "горячий", pn: "/hɒt/" },
        { e: "🏋️", en: "heavy", transcr: "хэви", ru: "тяжёлый", pn: "/ˈhevi/" },
        { e: "🪫", en: "empty", transcr: "эмпти", ru: "пустой", pn: "/ˈempti/" },
        { e: "🔋", en: "full", transcr: "фул", ru: "полный", pn: "/fʊl/" },
        { e: "✅", en: "ready", transcr: "рэди", ru: "готовый", pn: "/ˈredi/" },
      ],

      dialogue: [
        { s: "m", en: "Hello! This is your room.", transcr: "Хэлоу! Зис из ё рум.", ru: "Здравствуй! Это твоя комната." },
        { s: "w", en: "Thank you. Where is the bed?", transcr: "Сэнк ю. Уэа из зэ бэд?", ru: "Спасибо. Где кровать?" },
        { s: "m", en: "There is a bed near the window.", transcr: "Зэа из э бэд ниэ зэ уиндоу.", ru: "Кровать у окна." },
        { s: "w", en: "Is there a heater? The room is cold.", transcr: "Из зэа э хитэ? Зэ рум из коулд.", ru: "Есть обогреватель? В комнате холодно." },
        { s: "m", en: "Yes. The heater is here. It is broken.", transcr: "Йес. Зэ хитэ из хиэ. Ит из броукэн.", ru: "Да. Обогреватель здесь. Он сломан." },
        { s: "w", en: "It is broken? The room is cold.", transcr: "Ит из броукэн? Зэ рум из коулд.", ru: "Сломан? В комнате холодно." },
        { s: "m", en: "Tom is fixing the heater today.", transcr: "Том из фиксинг зэ хитэ тудэй.", ru: "Том чинит обогреватель сегодня." },
        { s: "w", en: "Good. Are there any blankets?", transcr: "Гуд. А зэа эни блэнкитс?", ru: "Хорошо. Есть одеяла?" },
        { s: "m", en: "Yes, there are some blankets on the bed.", transcr: "Йес, зэа а сам блэнкитс он зэ бэд.", ru: "Да, на кровати есть одеяла." },
        { s: "w", en: "Is there a shower?", transcr: "Из зэа э шауэ?", ru: "Есть душ?" },
        { s: "m", en: "Yes. The shower is there. The key is here.", transcr: "Йес. Зэ шауэ из зэа. Зэ ки из хиэ.", ru: "Да. Душ там. Ключ здесь." },
        { s: "w", en: "Thank you. The room is good now.", transcr: "Сэнк ю. Зэ рум из гуд нау.", ru: "Спасибо. Комната теперь хорошая." },
      ],

      quiz: [
        { q: '[COMPLETE] "There ___ a bed in the room." (один предмет)', opts: ["is", "are", "have", "do"], c: 0, expl: "Один предмет → there is.", hint_ru: "В комнате есть кровать." },
        { q: '[COMPLETE] "There ___ some blankets." (много)', opts: ["are", "is", "has", "do"], c: 0, expl: "Много предметов → there are.", hint_ru: "Есть несколько одеял." },
        { q: '[QUESTION] "___ there a heater?"', opts: ["Is", "Are", "Do", "Have"], c: 0, expl: "Один предмет в вопросе → Is there…?", hint_ru: "Есть обогреватель?" },
        { q: '[COMPLETE] "Are there ___ chairs?" (в вопросе)', opts: ["any", "some", "a", "is"], c: 0, expl: "В вопросе и отрицании → any, не some.", hint_ru: "Есть стулья?" },
        { q: "[NEGATIVE] Где отрицание?", opts: ["There is not a shower", "There is a shower", "Is there a shower?", "There a shower"], c: 0, expl: "Отрицание = is/are + not.", hint_ru: "Душа нет." },
        { q: "[CORRECT] Где правильно?", opts: ["There are some chairs", "There is some chairs", "There are a chairs", "There are some chair"], c: 0, expl: "There are + some + множественное число.", hint_ru: "Есть стулья." },
        { q: '[TRANSLATE] "кровать"', opts: ["bed", "key", "shower", "blanket"], c: 0, expl: "bed — кровать.", hint_ru: "bed." },
        { q: '[TRANSLATE] "сломан"', opts: ["broken", "cold", "wet", "empty"], c: 0, expl: "broken — сломан.", hint_ru: "broken." },
        { q: "[LISTEN] The room is cold.", opts: ["Комната холодная.", "Комната готова.", "Кровать мокрая.", "Холодильник пустой."], c: 0, expl: "room — комната, cold — холодный." },
        { q: "[LISTEN] There is a key on the bed.", opts: ["На кровати есть ключ.", "Под кроватью одеяло.", "В комнате есть душ.", "На полке есть лампа."], c: 0, expl: "there is — есть; key — ключ; bed — кровать." },
        { q: "[GIST] Что сломано в комнате (по диалогу)?", opts: ["Обогреватель", "Душ", "Кровать", "Окно"], c: 0, expl: 'В диалоге: «The heater is broken.»', hint_ru: "Смотрите реплику про heater." },
        { q: "[CORRECT] Где правильно (вопрос)?", opts: ["Is there a key?", "Are there a key?", "Is there any key?", "There is a key?"], c: 0, expl: "Один предмет → Is there a key?", hint_ru: "Есть ключ?" },
      ],

      everyday: {
        title_ru: "Сообщить о проблеме в вагончике",
        phrases: [
          { en: "There is no hot water.", transcr: "Зэа из ноу хот уотэ.", ru: "Нет горячей воды." },
          { en: "The heater is broken.", transcr: "Зэ хитэ из броукэн.", ru: "Обогреватель не работает." },
          { en: "The toilet is blocked.", transcr: "Зэ тойлет из блокт.", ru: "Туалет засорился." },
          { en: "There are no blankets.", transcr: "Зэа а ноу блэнкитс.", ru: "Нет одеял." },
          { en: "Can you fix it, please?", transcr: "Кэн ю фикс ит, плиз?", ru: "Можете починить, пожалуйста?" },
        ],
      },
    },
    {
      id: 10,
      mod: 6,
      title_ru: "В магазине: еда и цены (Tesco)",
      cefr: "how much / how many · would like · food & drink",

      grammar: {
        title_ru: "Сколько? и вежливое «я хочу»: how much / many · would like",
        intro_ru:
          '<div style="line-height:1.6">Чтобы спросить «сколько?», выбираем слово:<br>❓ <b>How much</b> <span class="g-transcr">[хау мач]</span> — для того, что НЕ считают по штукам (milk, rice, bread).<br>❓ <b>How many</b> <span class="g-transcr">[хау мэни]</span> — для того, что считают (eggs, bananas).<br>👉 Вежливо «я хочу» = <b>I would like</b> <span class="g-transcr">[ай уд лайк]</span> (а не грубое «I want»).</div>',
        cultural_ru:
          'В русском «сколько молока?» и «сколько яиц?» — одно слово «сколько». В английском два:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>не по штукам:</b> How much milk? <span class="g-transcr">[хау мач милк]</span></div>' +
          '<div><b>по штукам:</b> How many eggs? <span class="g-transcr">[хау мэни эгз]</span></div></div>' +
          '<div style="margin-top:6px"><b>I want</b> звучит грубо. В магазине говорят вежливо: <b>I would like…</b> <span class="g-transcr">[ай уд лайк]</span> или <b>Can I have…?</b></div>',
        note_ru:
          '⚠️ <b>much</b> — с неисчисляемыми (milk, rice, water: нет «milks»). <b>many</b> — с исчисляемыми во множественном (eggs, bananas). После <b>would like</b> ставим <b>a / some</b> + еду: «I would like <b>some</b> bread», «I would like <b>a</b> banana».',
        forms: {
          positive: {
            label_ru: "✅ Я хочу (вежливо)",
            rule_ru:
              '<b>I would like</b> + <b>a / some</b> + еда:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I would like some bread</code> <span class="g-transcr">[ай уд лайк сам брэд]</span></div>' +
              '<div><code>I would like two eggs</code> <span class="g-transcr">[ай уд лайк ту эгз]</span></div></div>',
            table: [
              { subj: "I", verb: "would like", example: "I would like some bread", transcr: "Ай уд лайк сам брэд", tr_ru: "Я хочу хлеба" },
              { subj: "I", verb: "would like", example: "I would like two eggs", transcr: "Ай уд лайк ту эгз", tr_ru: "Я хочу два яйца" },
              { subj: "I", verb: "would like", example: "I would like some rice", transcr: "Ай уд лайк сам райс", tr_ru: "Я хочу риса" },
              { subj: "She", verb: "would like", example: "She would like a banana", transcr: "Ши уд лайк э бэнанэ", tr_ru: "Она хочет банан" },
            ],
          },
          negative: {
            label_ru: "❌ Не хочу / отказ",
            rule_ru:
              'Отказ — <b>would not like</b>; вежливо в жизни говорят <b>No, thank you</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I would not like sugar</code></div>' +
              '<div><code>No, thank you</code> <span class="g-transcr">[ноу, сэнк ю]</span></div></div>',
            table: [
              { subj: "I", verb: "would not like", example: "I would not like sugar", transcr: "Ай уд нот лайк шугэ", tr_ru: "Я не хочу сахар" },
              { subj: "—", verb: "—", example: "No, thank you", transcr: "Ноу, сэнк ю", tr_ru: "Нет, спасибо" },
              { subj: "I", verb: "would not like", example: "I would not like coffee", transcr: "Ай уд нот лайк кофи", tr_ru: "Я не хочу кофе" },
              { subj: "We", verb: "would not like", example: "We would not like soup", transcr: "Уи уд нот лайк суп", tr_ru: "Мы не хотим суп" },
            ],
          },
          question: {
            label_ru: "❓ Сколько? / Хотите?",
            rule_ru:
              '<b>How much</b> (не по штукам) · <b>How many</b> (по штукам) · <b>Would you like…?</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>How much is the milk?</code> <span class="g-transcr">[хау мач из зэ милк]</span></div>' +
              '<div><code>How many eggs?</code> <span class="g-transcr">[хау мэни эгз]</span></div></div>',
            table: [
              { subj: "How much", verb: "is the milk?", example: "How much is the milk?", transcr: "Хау мач из зэ милк?", tr_ru: "Сколько стоит молоко?" },
              { subj: "How many", verb: "eggs?", example: "How many eggs?", transcr: "Хау мэни эгз?", tr_ru: "Сколько яиц?" },
              { subj: "Would", verb: "you like some tea?", example: "Would you like some tea?", transcr: "Уд ю лайк сам ти?", tr_ru: "Хотите чаю?" },
              { subj: "How much", verb: "is the bread?", example: "How much is the bread?", transcr: "Хау мач из зэ брэд?", tr_ru: "Сколько стоит хлеб?" },
            ],
          },
        },
        examples: [
          { en: "How much is the bread?", transcr: "Хау мач из зэ брэд?", ru: "Сколько стоит хлеб?" },
          { en: "It is one pound.", transcr: "Ит из уан паунд.", ru: "Один фунт." },
          { en: "How much is the milk?", transcr: "Хау мач из зэ милк?", ru: "Сколько стоит молоко?" },
          { en: "It is two pounds.", transcr: "Ит из ту паундз.", ru: "Два фунта." },
          { en: "How many eggs would you like?", transcr: "Хау мэни эгз уд ю лайк?", ru: "Сколько яиц вы хотите?" },
          { en: "I would like six eggs.", transcr: "Ай уд лайк сикс эгз.", ru: "Я хочу шесть яиц." },
          { en: "I would like some rice.", transcr: "Ай уд лайк сам райс.", ru: "Я хочу немного риса." },
          { en: "Would you like some tea?", transcr: "Уд ю лайк сам ти?", ru: "Хотите чаю?" },
          { en: "Yes, please.", transcr: "Йес, плиз.", ru: "Да, пожалуйста." },
          { en: "I would like a tin of soup.", transcr: "Ай уд лайк э тин ов суп.", ru: "Я хочу банку супа." },
          { en: "How much is the cheese?", transcr: "Хау мач из зэ чиз?", ru: "Сколько стоит сыр?" },
          { en: "It is three pounds.", transcr: "Ит из фри паундз.", ru: "Три фунта." },
        ],
        simple_ru: {
          formula: 'Не по штукам (milk, rice, bread) → <b>How much</b>. По штукам (eggs, bananas) → <b>How many</b>.<br>Вежливо «хочу» → <b>I would like…</b><br><span class="g-transcr">How much is the milk? · I would like some bread</span>',
          examples: [
            { en: "How much is the milk?", transcr: "Хау мач из зэ милк?", ru: "Сколько стоит молоко?" },
            { en: "I would like some bread.", transcr: "Ай уд лайк сам брэд.", ru: "Я хочу (немного) хлеба." },
          ],
        },
        ytQuery: "how much how many would like английский для начинающих на русском",
      },

      words: [
        { e: "🥘", en: "food", transcr: "фуд", ru: "еда", pn: "/fuːd/" },
        { e: "🍞", en: "bread", transcr: "брэд", ru: "хлеб", pn: "/bred/" },
        { e: "🥛", en: "milk", transcr: "милк", ru: "молоко", pn: "/mɪlk/" },
        { e: "🍚", en: "rice", transcr: "райс", ru: "рис", pn: "/raɪs/" },
        { e: "🍝", en: "pasta", transcr: "пэстэ", ru: "макароны", pn: "/ˈpæstə/" },
        { e: "🥩", en: "meat", transcr: "мит", ru: "мясо", pn: "/miːt/" },
        { e: "🐟", en: "fish", transcr: "фиш", ru: "рыба", pn: "/fɪʃ/" },
        { e: "🧀", en: "cheese", transcr: "чиз", ru: "сыр", pn: "/tʃiːz/" },
        { e: "🧈", en: "butter", transcr: "батэ", ru: "масло (сливочное)", pn: "/ˈbʌtə/" },
        { e: "🍯", en: "honey", transcr: "хани", ru: "мёд", pn: "/ˈhʌni/" },
        { e: "🍬", en: "sugar", transcr: "шугэ", ru: "сахар", pn: "/ˈʃʊɡə/" },
        { e: "🧂", en: "salt", transcr: "солт", ru: "соль", pn: "/sɒlt/" },
        { e: "💧", en: "water", transcr: "уотэ", ru: "вода", pn: "/ˈwɔːtə/" },
        { e: "🧃", en: "juice", transcr: "джус", ru: "сок", pn: "/dʒuːs/" },
        { e: "🍵", en: "tea", transcr: "ти", ru: "чай", pn: "/tiː/" },
        { e: "☕", en: "coffee", transcr: "кофи", ru: "кофе", pn: "/ˈkɒfi/" },
        { e: "🍲", en: "soup", transcr: "суп", ru: "суп", pn: "/suːp/" },
        { e: "🥚", en: "egg", transcr: "эг", ru: "яйцо", pn: "/eɡ/" },
        { e: "🥔", en: "potato", transcr: "пэтэйтоу", ru: "картофель", pn: "/pəˈteɪtəʊ/" },
        { e: "🧅", en: "onion", transcr: "аньэн", ru: "лук", pn: "/ˈʌnjən/" },
        { e: "🍅", en: "tomato", transcr: "тэматоу", ru: "помидор", pn: "/təˈmɑːtəʊ/" },
        { e: "🥕", en: "carrot", transcr: "кэрэт", ru: "морковь", pn: "/ˈkærət/" },
        { e: "🍌", en: "banana", transcr: "бэнанэ", ru: "банан", pn: "/bəˈnɑːnə/" },
        { e: "🍪", en: "biscuit", transcr: "бискит", ru: "печенье", pn: "/ˈbɪskɪt/" },
        { e: "🍗", en: "chicken", transcr: "чикин", ru: "курица", pn: "/ˈtʃɪkɪn/" },
        { e: "🛒", en: "shopping", transcr: "шопинг", ru: "покупки", pn: "/ˈʃɒpɪŋ/" },
        { e: "📝", en: "list", transcr: "лист", ru: "список", pn: "/lɪst/" },
        { e: "🏷️", en: "price", transcr: "прайс", ru: "цена", pn: "/praɪs/" },
        { e: "🥫", en: "tin", transcr: "тин", ru: "банка (консервы)", pn: "/tɪn/" },
        { e: "⚖️", en: "kilo", transcr: "килоу", ru: "килограмм", pn: "/ˈkiːləʊ/" },
      ],

      dialogue: [
        { s: "w", en: "Hello. I would like some bread, please.", transcr: "Хэлоу. Ай уд лайк сам брэд, плиз.", ru: "Здравствуйте. Я хочу хлеба, пожалуйста." },
        { s: "c", en: "Here is the bread. It is one pound.", transcr: "Хиэ из зэ брэд. Ит из уан паунд.", ru: "Вот хлеб. Один фунт." },
        { s: "w", en: "Thank you. How much is the milk?", transcr: "Сэнк ю. Хау мач из зэ милк?", ru: "Спасибо. Сколько стоит молоко?" },
        { s: "c", en: "The milk is two pounds.", transcr: "Зэ милк из ту паундз.", ru: "Молоко — два фунта." },
        { s: "w", en: "I would like six eggs, please.", transcr: "Ай уд лайк сикс эгз, плиз.", ru: "Я хочу шесть яиц, пожалуйста." },
        { s: "c", en: "We have some eggs. Here you are.", transcr: "Уи хэв сам эгз. Хиэ ю а.", ru: "У нас есть яйца. Вот, пожалуйста." },
        { s: "w", en: "How much is that?", transcr: "Хау мач из зэт?", ru: "Сколько это стоит?" },
        { s: "c", en: "Two pounds. Would you like a bag?", transcr: "Ту паундз. Уд ю лайк э бэг?", ru: "Два фунта. Хотите пакет?" },
        { s: "w", en: "Yes, please. I would like a tin of soup.", transcr: "Йес, плиз. Ай уд лайк э тин ов суп.", ru: "Да, пожалуйста. Я хочу банку супа." },
        { s: "c", en: "Sorry, there is no soup today.", transcr: "Сори, зэа из ноу суп тудэй.", ru: "Извините, супа сегодня нет." },
        { s: "w", en: "How much is it?", transcr: "Хау мач из ит?", ru: "Сколько с меня?" },
        { s: "c", en: "It is three pounds. Thank you.", transcr: "Ит из фри паундз. Сэнк ю.", ru: "Три фунта. Спасибо." },
      ],

      quiz: [
        { q: '[COMPLETE] "How ___ is the milk?" (молоко — не по штукам)', opts: ["much", "many", "are", "some"], c: 0, expl: "milk неисчисляемое → how much.", hint_ru: "Молоко не считают по штукам." },
        { q: '[COMPLETE] "How ___ eggs would you like?" (яйца — по штукам)', opts: ["many", "much", "is", "a"], c: 0, expl: "eggs исчисляемые → how many.", hint_ru: "Яйца считают по штукам." },
        { q: '[TRANSLATE] "хлеб"', opts: ["bread", "milk", "rice", "cheese"], c: 0, expl: "bread — хлеб.", hint_ru: "bread." },
        { q: '[TRANSLATE] "яйцо"', opts: ["egg", "fish", "meat", "soup"], c: 0, expl: "egg — яйцо.", hint_ru: "egg." },
        { q: "[CORRECT] Где вежливая просьба?", opts: ["I would like some tea", "I would tea", "Like some tea", "I am like tea"], c: 0, expl: "Вежливо: I would like + еда.", hint_ru: "would like." },
        { q: '[COMPLETE] "I ___ like some bread." (вежливо «хочу»)', opts: ["would", "does", "are", "has"], c: 0, expl: "I would like = вежливо «я хочу».", hint_ru: "would like." },
        { q: "[NEGATIVE] Где вежливый отказ?", opts: ["No, thank you", "No, thank", "Not, thank you", "No thank me"], c: 0, expl: "Вежливый отказ: No, thank you.", hint_ru: "Нет, спасибо." },
        { q: "[CORRECT] Где правильно (по штукам)?", opts: ["How many eggs?", "How much eggs?", "How many milk?", "How much many eggs?"], c: 0, expl: "Исчисляемые (eggs) → how many.", hint_ru: "many + штуки." },
        { q: "[LISTEN] I would like some rice.", opts: ["Я хочу немного риса.", "Я хочу немного хлеба.", "Сколько стоит рис?", "У меня есть рис."], c: 0, expl: "would like — вежливо «хочу»; rice — рис." },
        { q: "[LISTEN] How much is the chicken?", opts: ["Сколько стоит курица?", "Сколько яиц?", "Где курица?", "Курица готова."], c: 0, expl: "how much — сколько стоит; chicken — курица." },
        { q: "[GIST] Что рабочий просит первым (по диалогу)?", opts: ["Хлеб", "Молоко", "Яйца", "Суп"], c: 0, expl: 'В диалоге первая просьба: «I would like some bread».', hint_ru: "Смотрите первую реплику." },
        { q: "[GIST] Почему рабочий не купил суп (по диалогу)?", opts: ["Супа сегодня нет", "Суп дорогой", "Рабочий не любит суп", "Касса закрыта"], c: 0, expl: "Кассир: «there is no soup today».", hint_ru: "Смотрите ответ кассира." },
        { q: "[QUESTION] Как спросить цену хлеба?", opts: ["How much is the bread?", "How many bread?", "How much bread is?", "Bread how much?"], c: 0, expl: "Цена неисчисляемого: How much is the + еда?", hint_ru: "How much is…?" },
      ],

      everyday: {
        title_ru: "В магазине и на кассе (Tesco)",
        phrases: [
          { en: "Excuse me, where is the bread?", transcr: "Икскьюз ми, уэа из зэ брэд?", ru: "Извините, где хлеб?" },
          { en: "Can I have a bag, please?", transcr: "Кэн ай хэв э бэг, плиз?", ru: "Можно пакет, пожалуйста?" },
          { en: "How much is it?", transcr: "Хау мач из ит?", ru: "Сколько это стоит?" },
          { en: "Have you got any milk?", transcr: "Хэв ю гот эни милк?", ru: "У вас есть молоко?" },
          { en: "Here is five pounds.", transcr: "Хиэ из файв паундз.", ru: "Вот пять фунтов." },
        ],
      },
    },
    {
      id: 11,
      mod: 6,
      title_ru: "В пути: автобус, поезд, билет",
      cefr: "this / that / these / those · transport & travel",

      grammar: {
        title_ru: "Это / то: this · that · these · those",
        intro_ru:
          '<div style="line-height:1.6">Указываем на предмет:<br>👉 <b>This</b> <span class="g-transcr">[зис]</span> — один, РЯДОМ. <b>That</b> <span class="g-transcr">[зэт]</span> — один, ДАЛЕКО.<br>👉 <b>These</b> <span class="g-transcr">[зиз]</span> — много, РЯДОМ. <b>Those</b> <span class="g-transcr">[зоуз]</span> — много, ДАЛЕКО.<br>👉 Один → <b>is</b>, много → <b>are</b>: «This <b>is</b> a bus», «These <b>are</b> tickets».</div>',
        cultural_ru:
          'В русском «это/то» не меняется по числу. В английском — 4 слова (близко/далеко × один/много):' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>один, рядом:</b> this bus <span class="g-transcr">[зис бас]</span></div>' +
          '<div><b>один, далеко:</b> that bus <span class="g-transcr">[зэт бас]</span></div>' +
          '<div><b>много, рядом:</b> these buses <span class="g-transcr">[зиз басиз]</span></div>' +
          '<div><b>много, далеко:</b> those buses <span class="g-transcr">[зоуз басиз]</span></div></div>',
        note_ru:
          '⚠️ <b>this / that</b> — для ОДНОГО предмета (с <b>is</b>). <b>these / those</b> — для МНОГИХ (с <b>are</b>): «this seat», но «these seats». Близко → this / these, далеко → that / those.',
        forms: {
          positive: {
            label_ru: "✅ Это / то",
            rule_ru:
              '<b>this / that</b> (один) + is · <b>these / those</b> (много) + are:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>This is a bus</code> <span class="g-transcr">[зис из э бас]</span></div>' +
              '<div><code>These are tickets</code> <span class="g-transcr">[зиз ар тикитс]</span></div></div>',
            table: [
              { subj: "This", verb: "is", example: "This is a bus", transcr: "Зис из э бас", tr_ru: "Это (рядом) автобус" },
              { subj: "That", verb: "is", example: "That is a train", transcr: "Зэт из э трэйн", tr_ru: "То (далеко) поезд" },
              { subj: "These", verb: "are", example: "These are tickets", transcr: "Зиз ар тикитс", tr_ru: "Это (рядом) билеты" },
              { subj: "Those", verb: "are", example: "Those are seats", transcr: "Зоуз ар ситс", tr_ru: "Те (далеко) места" },
            ],
          },
          negative: {
            label_ru: "❌ Это не…",
            rule_ru:
              'Отрицание — <b>is not / are not</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>This is not my seat</code></div>' +
              '<div><code>Those are not my bags</code></div></div>',
            table: [
              { subj: "This", verb: "is not", example: "This is not my seat", transcr: "Зис из нот май сит", tr_ru: "Это не моё место" },
              { subj: "That", verb: "is not", example: "That is not my ticket", transcr: "Зэт из нот май тикит", tr_ru: "То не мой билет" },
              { subj: "These", verb: "are not", example: "These are not my bags", transcr: "Зиз ар нот май бэгз", tr_ru: "Это не мои сумки" },
              { subj: "Those", verb: "are not", example: "Those are not my seats", transcr: "Зоуз ар нот май ситс", tr_ru: "Те не мои места" },
            ],
          },
          question: {
            label_ru: "❓ Это…?",
            rule_ru:
              '<b>Is / Are</b> ставим ВПЕРЁД:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Is this the bus?</code> <span class="g-transcr">[из зис зэ бас]</span></div>' +
              '<div><code>Are these your tickets?</code> <span class="g-transcr">[ар зиз ё тикитс]</span></div></div>',
            table: [
              { subj: "Is", verb: "this…?", example: "Is this the bus to the camp?", transcr: "Из зис зэ бас ту зэ кэмп?", tr_ru: "Это автобус до лагеря?" },
              { subj: "Is", verb: "that…?", example: "Is that the station?", transcr: "Из зэт зэ стэйшн?", tr_ru: "То — станция?" },
              { subj: "Are", verb: "these…?", example: "Are these your tickets?", transcr: "Ар зиз ё тикитс?", tr_ru: "Это ваши билеты?" },
              { subj: "Are", verb: "those…?", example: "Are those your bags?", transcr: "Ар зоуз ё бэгз?", tr_ru: "Те — ваши сумки?" },
            ],
          },
        },
        examples: [
          { en: "This is the bus to the camp.", transcr: "Зис из зэ бас ту зэ кэмп.", ru: "Это автобус до лагеря." },
          { en: "That is the train to the farm.", transcr: "Зэт из зэ трэйн ту зэ фарм.", ru: "То — поезд до фермы." },
          { en: "These are my tickets.", transcr: "Зиз ар май тикитс.", ru: "Это мои билеты." },
          { en: "Those are not my seats.", transcr: "Зоуз ар нот май ситс.", ru: "Те — не мои места." },
          { en: "Is this the bus stop?", transcr: "Из зис зэ бас стоп?", ru: "Это автобусная остановка?" },
          { en: "Where is the station?", transcr: "Уэа из зэ стэйшн?", ru: "Где станция?" },
          { en: "What time is the train?", transcr: "Уот тайм из зэ трэйн?", ru: "Во сколько поезд?" },
          { en: "This is my ticket.", transcr: "Зис из май тикит.", ru: "Это мой билет." },
          { en: "Which platform is it?", transcr: "Уич плэтфом из ит?", ru: "С какой платформы?" },
          { en: "The taxi is at the airport.", transcr: "Зэ тэкси из эт зэ эапот.", ru: "Такси у аэропорта." },
          { en: "Is that the ferry?", transcr: "Из зэт зэ фэри?", ru: "То — паром?" },
          { en: "I am at the bus stop.", transcr: "Ай эм эт зэ бас стоп.", ru: "Я на автобусной остановке." },
        ],
        simple_ru: {
          formula: 'Рядом → <b>this</b> (1) / <b>these</b> (много). Далеко → <b>that</b> (1) / <b>those</b> (много).<br>Один → is, много → are.<br><span class="g-transcr">This is a bus · These are tickets</span>',
          examples: [
            { en: "This is a bus.", transcr: "Зис из э бас.", ru: "Это (рядом) + автобус (bus)." },
            { en: "These are tickets.", transcr: "Зиз ар тикитс.", ru: "Это (рядом, много) + билеты (tickets)." },
          ],
        },
        ytQuery: "this that these those английский для начинающих на русском",
      },

      words: [
        { e: "🚌", en: "bus", transcr: "бас", ru: "автобус", pn: "/bʌs/" },
        { e: "🚍", en: "coach", transcr: "коуч", ru: "междугородний автобус", pn: "/kəʊtʃ/" },
        { e: "🚆", en: "train", transcr: "трэйн", ru: "поезд", pn: "/treɪn/" },
        { e: "🚕", en: "taxi", transcr: "тэкси", ru: "такси", pn: "/ˈtæksi/" },
        { e: "🚚", en: "lorry", transcr: "лори", ru: "грузовик", pn: "/ˈlɒri/" },
        { e: "🏍️", en: "motorbike", transcr: "моутэбайк", ru: "мотоцикл", pn: "/ˈməʊtəbaɪk/" },
        { e: "✈️", en: "plane", transcr: "плэйн", ru: "самолёт", pn: "/pleɪn/" },
        { e: "⛴️", en: "ferry", transcr: "фэри", ru: "паром", pn: "/ˈferi/" },
        { e: "🚤", en: "boat", transcr: "боут", ru: "лодка", pn: "/bəʊt/" },
        { e: "🎫", en: "ticket", transcr: "тикит", ru: "билет", pn: "/ˈtɪkɪt/" },
        { e: "🚉", en: "station", transcr: "стэйшн", ru: "станция", pn: "/ˈsteɪʃn/" },
        { e: "🛤️", en: "platform", transcr: "плэтфом", ru: "платформа", pn: "/ˈplætfɔːm/" },
        { e: "🛑", en: "stop", transcr: "стоп", ru: "остановка", pn: "/stɒp/" },
        { e: "💺", en: "seat", transcr: "сит", ru: "место (сиденье)", pn: "/siːt/" },
        { e: "🛫", en: "airport", transcr: "эапот", ru: "аэропорт", pn: "/ˈeəpɔːt/" },
        { e: "🛬", en: "flight", transcr: "флайт", ru: "рейс", pn: "/flaɪt/" },
        { e: "🧳", en: "suitcase", transcr: "суткэйс", ru: "чемодан", pn: "/ˈsuːtkeɪs/" },
        { e: "🎒", en: "backpack", transcr: "бэкпэк", ru: "рюкзак", pn: "/ˈbækpæk/" },
        { e: "🕑", en: "timetable", transcr: "таймтэйбл", ru: "расписание", pn: "/ˈtaɪmteɪbl/" },
        { e: "🧭", en: "journey", transcr: "джёни", ru: "поездка", pn: "/ˈdʒɜːni/" },
        { e: "🛣️", en: "street", transcr: "стрит", ru: "улица", pn: "/striːt/" },
        { e: "↪️", en: "corner", transcr: "конэ", ru: "угол", pn: "/ˈkɔːnə/" },
        { e: "🚦", en: "traffic", transcr: "трэфик", ru: "движение (транспорт)", pn: "/ˈtræfɪk/" },
        { e: "⛽", en: "petrol", transcr: "пэтрэл", ru: "бензин", pn: "/ˈpetrəl/" },
        { e: "🔧", en: "garage", transcr: "гэраж", ru: "автосервис/гараж", pn: "/ˈɡærɑːʒ/" },
        { e: "🚶", en: "pavement", transcr: "пэйвмэнт", ru: "тротуар", pn: "/ˈpeɪvmənt/" },
        { e: "🚸", en: "crossing", transcr: "кросинг", ru: "пешеходный переход", pn: "/ˈkrɒsɪŋ/" },
        { e: "👥", en: "queue", transcr: "кью", ru: "очередь", pn: "/kjuː/" },
        { e: "💷", en: "fare", transcr: "фэа", ru: "плата за проезд", pn: "/feə/" },
        { e: "🚪", en: "exit", transcr: "эксит", ru: "выход", pn: "/ˈeksɪt/" },
      ],

      dialogue: [
        { s: "w", en: "Hello. Is this the bus to the camp?", transcr: "Хэлоу. Из зис зэ бас ту зэ кэмп?", ru: "Здравствуйте. Это автобус до лагеря?" },
        { s: "c", en: "No. That is the bus to the camp.", transcr: "Ноу. Зэт из зэ бас ту зэ кэмп.", ru: "Нет. Вон тот автобус до лагеря." },
        { s: "w", en: "Thank you. Where is the station?", transcr: "Сэнк ю. Уэа из зэ стэйшн?", ru: "Спасибо. Где станция?" },
        { s: "c", en: "The station is here. This is platform two.", transcr: "Зэ стэйшн из хиэ. Зис из плэтфом ту.", ru: "Станция здесь. Это платформа два." },
        { s: "w", en: "What time is the train?", transcr: "Уот тайм из зэ трэйн?", ru: "Во сколько поезд?" },
        { s: "c", en: "The train is at nine o'clock.", transcr: "Зэ трэйн из эт найн эклок.", ru: "Поезд в девять часов." },
        { s: "w", en: "How much is the ticket?", transcr: "Хау мач из зэ тикит?", ru: "Сколько стоит билет?" },
        { s: "c", en: "It is three pounds. Here is your ticket.", transcr: "Ит из фри паундз. Хиэ из ё тикит.", ru: "Три фунта. Вот ваш билет." },
        { s: "w", en: "Thank you. Is this my seat?", transcr: "Сэнк ю. Из зис май сит?", ru: "Спасибо. Это моё место?" },
        { s: "c", en: "No. That is your seat. This is my seat.", transcr: "Ноу. Зэт из ё сит. Зис из май сит.", ru: "Нет. Вон ваше место. Это моё место." },
        { s: "w", en: "These are my bags. Where is the exit?", transcr: "Зиз ар май бэгз. Уэа из зэ эксит?", ru: "Это мои сумки. Где выход?" },
        { s: "c", en: "The exit is there. Goodbye!", transcr: "Зэ эксит из зэа. Гудбай!", ru: "Выход там. До свидания!" },
      ],

      quiz: [
        { q: '[COMPLETE] "___ is a bus." (один, рядом)', opts: ["This", "These", "Those", "Are"], c: 0, expl: "Один + рядом → This.", hint_ru: "Один предмет рядом." },
        { q: '[COMPLETE] "___ are my tickets." (много, рядом)', opts: ["These", "This", "That", "Is"], c: 0, expl: "Много + рядом → These.", hint_ru: "Много предметов рядом." },
        { q: '[COMPLETE] "___ is the train." (один, далеко)', opts: ["That", "This", "These", "Am"], c: 0, expl: "Один + далеко → That.", hint_ru: "Один предмет далеко." },
        { q: '[TRANSLATE] "билет"', opts: ["ticket", "seat", "station", "bus"], c: 0, expl: "ticket — билет.", hint_ru: "ticket." },
        { q: '[TRANSLATE] "поезд"', opts: ["train", "plane", "taxi", "ferry"], c: 0, expl: "train — поезд.", hint_ru: "train." },
        { q: "[CORRECT] Где правильно (много, далеко)?", opts: ["Those are seats", "That are seats", "Those is seats", "These is seats"], c: 0, expl: "Много + далеко → Those are.", hint_ru: "those + are." },
        { q: "[QUESTION] Как спросить «это автобус до лагеря?»", opts: ["Is this the bus to the camp?", "This is the bus?", "Bus to the camp?", "Are this bus camp?"], c: 0, expl: "Вопрос: Is this…?", hint_ru: "Is this…?" },
        { q: "[NEGATIVE] Где отрицание?", opts: ["That is not my seat", "That is my seat", "Is that my seat?", "That my seat"], c: 0, expl: "Отрицание = is + not.", hint_ru: "is not." },
        { q: "[LISTEN] These are my bags.", opts: ["Это мои сумки.", "Это твоя сумка.", "Где станция?", "Это мой билет."], c: 0, expl: "these — эти (рядом, много); bags — сумки." },
        { q: "[LISTEN] What time is the train?", opts: ["Во сколько поезд?", "Где поезд?", "Сколько стоит поезд?", "Это поезд?"], c: 0, expl: "what time — во сколько; train — поезд." },
        { q: "[GIST] Сколько стоит билет (по диалогу)?", opts: ["Три фунта", "Два фунта", "Девять фунтов", "Билет бесплатный"], c: 0, expl: 'В диалоге: «It is three pounds».', hint_ru: "Смотрите ответ про цену." },
        { q: "[GIST] Во сколько поезд (по диалогу)?", opts: ["В девять", "В три", "В два", "Утром"], c: 0, expl: "В диалоге: «The train is at nine o'clock».", hint_ru: "Смотрите ответ про время." },
      ],

      everyday: {
        title_ru: "На станции: купить билет",
        phrases: [
          { en: "Excuse me, where is the bus stop?", transcr: "Икскьюз ми, уэа из зэ бас стоп?", ru: "Извините, где автобусная остановка?" },
          { en: "A single ticket, please.", transcr: "Э сингл тикит, плиз.", ru: "Билет в один конец, пожалуйста." },
          { en: "What time is the next bus?", transcr: "Уот тайм из зэ нэкст бас?", ru: "Во сколько следующий автобус?" },
          { en: "Which platform, please?", transcr: "Уич плэтфом, плиз?", ru: "С какой платформы, пожалуйста?" },
          { en: "Does this bus go to town?", transcr: "Даз зис бас гоу ту таун?", ru: "Этот автобус идёт в город?" },
        ],
      },
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = LESSONS;
  else root.LESSONS = LESSONS;
})(typeof window !== "undefined" ? window : globalThis);
