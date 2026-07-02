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
          '<div style="line-height:1.6">Так говорить — ошибка:<br>❌ <b>I worker</b><br>Правильно:<br>✅ <b>I am a worker</b> <span class="g-transcr">[ай эм э уёкэ]</span> (я рабочий)<br>👉 Между «кто» и «какой» всегда ставим <b>am / is / are</b>.</div>',
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
        { q: "[BUILD] Соберите: «Я — рабочий»", build: ["I", "am", "a", "worker"], expl: "I am a worker — Я рабочий. Между «кто» и «какой» ставим am.", hint_ru: "Я — рабочий." },
      ],

      everyday: {
        title_ru: "Алфавит, знакомство и «не понимаю»",
        html:
          '<div class="g-h">🔤 Алфавит — буквы и их английские названия</div>' +
          '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center">' +
          '<div><b>A</b> <span class="g-transcr">эй</span></div>' +
          '<div><b>B</b> <span class="g-transcr">би</span></div>' +
          '<div><b>C</b> <span class="g-transcr">си</span></div>' +
          '<div><b>D</b> <span class="g-transcr">ди</span></div>' +
          '<div><b>E</b> <span class="g-transcr">и</span></div>' +
          '<div><b>F</b> <span class="g-transcr">эф</span></div>' +
          '<div><b>G</b> <span class="g-transcr">джи</span></div>' +
          '<div><b>H</b> <span class="g-transcr">эйч</span></div>' +
          '<div><b>I</b> <span class="g-transcr">ай</span></div>' +
          '<div><b>J</b> <span class="g-transcr">джей</span></div>' +
          '<div><b>K</b> <span class="g-transcr">кей</span></div>' +
          '<div><b>L</b> <span class="g-transcr">эл</span></div>' +
          '<div><b>M</b> <span class="g-transcr">эм</span></div>' +
          '<div><b>N</b> <span class="g-transcr">эн</span></div>' +
          '<div><b>O</b> <span class="g-transcr">оу</span></div>' +
          '<div><b>P</b> <span class="g-transcr">пи</span></div>' +
          '<div><b>Q</b> <span class="g-transcr">кью</span></div>' +
          '<div><b>R</b> <span class="g-transcr">ар</span></div>' +
          '<div><b>S</b> <span class="g-transcr">эс</span></div>' +
          '<div><b>T</b> <span class="g-transcr">ти</span></div>' +
          '<div><b>U</b> <span class="g-transcr">ю</span></div>' +
          '<div><b>V</b> <span class="g-transcr">ви</span></div>' +
          '<div><b>W</b> <span class="g-transcr">дабл-ю</span></div>' +
          '<div><b>X</b> <span class="g-transcr">экс</span></div>' +
          '<div><b>Y</b> <span class="g-transcr">уай</span></div>' +
          '<div><b>Z</b> <span class="g-transcr">зэд</span></div></div>' +
          '<div style="margin-top:8px">👉 Своё имя называют <b>по буквам</b>: <b>Ahmad</b> = эй–эйч–эм–эй–ди.<br>Так диктуют имя менеджеру и пишут в форму. ⚠️ <b>Z</b> по-британски — «зэд» (не «зи»).</div>',
        phrases: [
          { en: "Hello!", transcr: "Хэлоу!", ru: "Здравствуйте!" },
          { en: "My name is Ahmad.", transcr: "Май нэйм из Ахмад.", ru: "Меня зовут Ахмад." },
          { en: "How do you spell your name?", transcr: "Хау ду ю спэл ё нэйм?", ru: "Как пишется ваше имя по буквам?" },
          { en: "My name is Ahmad: A-H-M-A-D.", transcr: "Май нэйм из Ахмад: эй-эйч-эм-эй-ди.", ru: "Меня зовут Ахмад: A-H-M-A-D." },
          { en: "Sorry?", transcr: "Сори?", ru: "Простите? / Что?" },
          { en: "Again, please.", transcr: "Эгэн, плиз.", ru: "Повторите, пожалуйста." },
          { en: "Slowly, please.", transcr: "Слоули, плиз.", ru: "Медленнее, пожалуйста." },
          { en: "I don't understand.", transcr: "Ай доунт андэстэнд.", ru: "Я не понимаю." },
          { en: "I speak a little English.", transcr: "Ай спик э литл инглиш.", ru: "Я немного говорю по-английски." },
          { en: "Do you speak Russian?", transcr: "Ду ю спик рашэн?", ru: "Вы говорите по-русски?" },
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
        { q: '[QUESTION] "___ this your locker?"', opts: ["Is", "Are", "Am", "Be"], c: 0, expl: "Вопрос об одном предмете: Is this…? — глагол is выходит вперёд.", hint_ru: "Это твой шкафчик?" },
        { q: "[LISTEN] This is your locker.", opts: ["Это твой шкафчик.", "Это твоя сумка.", "Это твой бейдж.", "Это твой телефон."], c: 0, expl: "locker — шкафчик. bag — сумка. badge — бейдж. phone — телефон." },
        { q: "[GIST] Кто бригадир у Рустама и Ахмада?", opts: ["Анна", "Том", "Рустам", "Ахмад"], c: 0, expl: "Том говорит: \"Anna is your supervisor\".", hint_ru: "Вспомните диалог." },
        { q: "[BUILD] Соберите: «Это мой шкафчик»", build: ["This","is","my","locker"], expl: "This is my locker — Это мой шкафчик.", hint_ru: "Это мой шкафчик." },
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
          "В русском «это ящик» — без глагола. В английском нужны <b>is</b> и артикль <b>a/an</b>. Много предметов → <b>These are</b> (эти)." +
          '<div style="margin-top:12px"><div style="font-weight:700;margin-bottom:4px">➕ Множественное число (много)</div>' +
          '<div><b>Правило:</b> добавь <b>-s</b> к слову:</div>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin:6px 0">' +
          "<div>crate → crate<b>s</b> (ящики)</div>" +
          "<div>tool → tool<b>s</b> (инструменты)</div>" +
          "<div>punnet → punnet<b>s</b> (корзинки)</div>" +
          "<div>tray → tray<b>s</b> (лотки)</div></div>" +
          '<div style="margin-top:6px"><b>Исключение:</b> после <b>-s, -x, -ch, -sh</b> → <b>-es</b>: box → box<b>es</b> (коробки), glass → glass<b>es</b> (стаканы).</div></div>',
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
        { q: "[CORRECT] Много ящиков — где правильно?", opts: ["These are crates", "This is crates", "These are crate", "This are crates"], c: 0, expl: "Много → These are + слово с -s: crate → crates.", hint_ru: "Это ящики." },
        { q: '[TRANSLATE] "коробки" (много)', opts: ["boxes", "box", "crates", "trays"], c: 0, expl: "box → boxes. После -x добавляем -es.", hint_ru: "boxes." },
        { q: "[BUILD] Соберите: «Это ящик»", build: ["This","is","a","crate"], expl: "This is a crate — Это ящик. С предметом — is + a.", hint_ru: "Это ящик." },
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
          { en: "Be careful!", transcr: "Би кэафул!", ru: "Осторожно! (будьте внимательны)" },
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
        visual_ru:
          '<svg viewBox="0 0 280 528" xmlns="http://www.w3.org/2000/svg" role="img" font-family="-apple-system, system-ui, Roboto, sans-serif" aria-label="Время: o\'clock (ровно) и half past (:30)">' +
          '<title>Время: o\'clock и half past</title>' +
          '<desc>Два циферблата: 7:00 — seven o\'clock, и 8:30 — half past eight.</desc>' +
          '<defs>' +
          '<symbol id="l4face" viewBox="0 0 160 160">' +
          '<circle cx="80" cy="80" r="72" fill="#ffffff" stroke="#3a3f4a" stroke-width="3.5"/>' +
          '<g fill="#3a3f4a" font-size="15" font-weight="600" text-anchor="middle">' +
          '<text x="80" y="29">12</text><text x="108" y="37">1</text><text x="129" y="57">2</text>' +
          '<text x="136" y="85">3</text><text x="129" y="113">4</text><text x="108" y="134">5</text>' +
          '<text x="80" y="141">6</text><text x="52" y="134">7</text><text x="31" y="113">8</text>' +
          '<text x="24" y="85">9</text><text x="31" y="57">10</text><text x="52" y="37">11</text>' +
          '</g>' +
          '</symbol>' +
          '</defs>' +
          '<g transform="translate(52,12)">' +
          '<use href="#l4face" x="0" y="0" width="160" height="160"/>' +
          '<line x1="80" y1="80" x2="80" y2="30" stroke="#e0564a" stroke-width="3.5" stroke-linecap="round"/>' +
          '<line x1="80" y1="80" x2="63" y2="109" stroke="#2c3340" stroke-width="5.5" stroke-linecap="round"/>' +
          '<circle cx="80" cy="80" r="4.5" fill="#2c3340"/>' +
          '<text x="80" y="186" text-anchor="middle" font-weight="700" font-size="22" fill="var(--text)">seven o\'clock</text>' +
          '<text x="80" y="207" text-anchor="middle" font-size="15" font-style="italic" fill="var(--text2)">[сэвн эклок]</text>' +
          '<text x="80" y="225" text-anchor="middle" font-size="14.5" fill="var(--text2)">7:00 · ровно</text>' +
          '</g>' +
          '<g transform="translate(52,252)">' +
          '<use href="#l4face" x="0" y="0" width="160" height="160"/>' +
          '<line x1="80" y1="80" x2="80" y2="130" stroke="#e0564a" stroke-width="3.5" stroke-linecap="round"/>' +
          '<line x1="80" y1="80" x2="47" y2="89" stroke="#2c3340" stroke-width="5.5" stroke-linecap="round"/>' +
          '<circle cx="80" cy="80" r="4.5" fill="#2c3340"/>' +
          '<text x="80" y="186" text-anchor="middle" font-weight="700" font-size="22" fill="var(--text)">half past eight</text>' +
          '<text x="80" y="207" text-anchor="middle" font-size="15" font-style="italic" fill="var(--text2)">[хаф паст эйт]</text>' +
          '<text x="80" y="225" text-anchor="middle" font-size="14.5" fill="var(--text2)">8:30 · половина девятого</text>' +
          '</g>' +
          '<text x="132" y="500" text-anchor="middle" font-size="14" fill="var(--text2)">Короткая стрелка — часы,</text>' +
          '<text x="132" y="518" text-anchor="middle" font-size="14" fill="var(--text2)">длинная (красная) — минуты</text>' +
          '</svg>',
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
        { q: "[BUILD] Соберите: «Сейчас 7 часов»", build: ["It","is","seven","o'clock"], expl: "It is seven o'clock — Сейчас 7 часов.", hint_ru: "Сейчас 7 часов." },
      ],

      everyday: {
        title_ru: "Числа 11–100, спросить время, день и про оплату",
        html:
          '<div class="g-h">🔢 Числа 11–100</div>' +
          '<div style="font-size:12px;color:var(--text3);margin-bottom:4px">11–19 — окончание <b>-teen</b>:</div>' +
          '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px 14px">' +
          '<div><span class="nk">11</span> eleven<br><span class="g-transcr">илэвн</span></div>' +
          '<div><span class="nk">12</span> twelve<br><span class="g-transcr">туэлв</span></div>' +
          '<div><span class="nk">13</span> thirteen<br><span class="g-transcr">сётин</span></div>' +
          '<div><span class="nk">14</span> fourteen<br><span class="g-transcr">фотин</span></div>' +
          '<div><span class="nk">15</span> fifteen<br><span class="g-transcr">фифтин</span></div>' +
          '<div><span class="nk">16</span> sixteen<br><span class="g-transcr">сикстин</span></div>' +
          '<div><span class="nk">17</span> seventeen<br><span class="g-transcr">сэвэнтин</span></div>' +
          '<div><span class="nk">18</span> eighteen<br><span class="g-transcr">эйтин</span></div>' +
          '<div><span class="nk">19</span> nineteen<br><span class="g-transcr">найнтин</span></div></div>' +
          '<div style="font-size:12px;color:var(--text3);margin:12px 0 4px">20–100 — десятки на <b>-ty</b>:</div>' +
          '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px 14px">' +
          '<div><span class="nk">20</span> twenty<br><span class="g-transcr">туэнти</span></div>' +
          '<div><span class="nk">30</span> thirty<br><span class="g-transcr">сёти</span></div>' +
          '<div><span class="nk">40</span> forty<br><span class="g-transcr">фоти</span></div>' +
          '<div><span class="nk">50</span> fifty<br><span class="g-transcr">фифти</span></div>' +
          '<div><span class="nk">60</span> sixty<br><span class="g-transcr">сиксти</span></div>' +
          '<div><span class="nk">70</span> seventy<br><span class="g-transcr">сэвэнти</span></div>' +
          '<div><span class="nk">80</span> eighty<br><span class="g-transcr">эйти</span></div>' +
          '<div><span class="nk">90</span> ninety<br><span class="g-transcr">найнти</span></div>' +
          '<div><span class="nk">100</span> one hundred<br><span class="g-transcr">уан хандрэд</span></div></div>' +
          '<div style="margin-top:12px">👉 Между десятками — через дефис: <b>21</b> = twenty-one <span class="g-transcr">туэнти-уан</span>, <b>25</b> = twenty-five <span class="g-transcr">туэнти-файв</span>.</div>',
        phrases: [
          { en: "What time is it?", transcr: "Уот тайм из ит?", ru: "Который час?" },
          { en: "What time do we start?", transcr: "Уот тайм ду уи старт?", ru: "Во сколько мы начинаем?" },
          { en: "What time do we finish?", transcr: "Уот тайм ду уи финиш?", ru: "Во сколько мы заканчиваем?" },
          { en: "How old are you?", transcr: "Хау оулд ар ю?", ru: "Сколько тебе лет?" },
          { en: "I am twenty-five.", transcr: "Ай эм туэнти-файв.", ru: "Мне 25 (лет)." },
          { en: "It is fifteen pounds.", transcr: "Ит из фифтин паундз.", ru: "Это 15 фунтов." },
          { en: "Forty hours a week.", transcr: "Фоти ауэз э уик.", ru: "40 часов в неделю." },
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
        visual_ru:
          '<svg viewBox="56 12 364 550" xmlns="http://www.w3.org/2000/svg" role="img" font-family="-apple-system, system-ui, Roboto, sans-serif" aria-label="Предлоги места в 3D: in, on, under, behind, near, next to">' +
          '<title>Предлоги места в 3D</title>' +
          '<desc>Человечек и коробка: внутри, на, под (лёжа), за, рядом и вплотную.</desc>' +
          '<defs>' +
          '<symbol id="l5box" viewBox="0 0 80 100">' +
          '<polygon points="10,30 40,15 70,30 40,45" fill="#e6bd8a" stroke="#8f5e30" stroke-width="1.5" stroke-linejoin="round"/>' +
          '<polygon points="10,30 40,45 40,79 10,64" fill="#cf9b63" stroke="#8f5e30" stroke-width="1.5" stroke-linejoin="round"/>' +
          '<polygon points="70,30 40,45 40,79 70,64" fill="#b58049" stroke="#8f5e30" stroke-width="1.5" stroke-linejoin="round"/>' +
          '<line x1="40" y1="15" x2="40" y2="45" stroke="#c79a64" stroke-width="1.5"/>' +
          '<line x1="40" y1="45" x2="40" y2="79" stroke="#9c6b3a" stroke-width="1.5"/>' +
          '</symbol>' +
          '<symbol id="l5p" viewBox="0 0 30 46">' +
          '<g stroke="#e0564a" stroke-width="4.5" stroke-linecap="round">' +
          '<line x1="11" y1="19" x2="5" y2="26"/><line x1="19" y1="19" x2="25" y2="26"/>' +
          '<line x1="12.5" y1="30" x2="10" y2="43"/><line x1="17.5" y1="30" x2="20" y2="43"/></g>' +
          '<circle cx="15" cy="8" r="6" fill="#e0564a" stroke="#a83a30" stroke-width="1.5"/>' +
          '<rect x="9.5" y="14" width="11" height="17" rx="5" fill="#e0564a" stroke="#a83a30" stroke-width="1.5"/>' +
          '</symbol>' +
          '<symbol id="l5lie" viewBox="0 0 60 26">' +
          '<g stroke="#e0564a" stroke-width="4.5" stroke-linecap="round">' +
          '<line x1="22" y1="9" x2="17" y2="2"/><line x1="22" y1="17" x2="17" y2="24"/>' +
          '<line x1="40" y1="10" x2="54" y2="5"/><line x1="40" y1="16" x2="54" y2="21"/></g>' +
          '<circle cx="9" cy="13" r="6" fill="#e0564a" stroke="#a83a30" stroke-width="1.5"/>' +
          '<rect x="14" y="7" width="26" height="12" rx="6" fill="#e0564a" stroke="#a83a30" stroke-width="1.5"/>' +
          '</symbol>' +
          '</defs>' +
          '<g stroke="#8f5e30" stroke-width="1.5" stroke-linejoin="round">' +
          '<polygon points="113,84 130,76 147,84 130,92" fill="#7a4f24"/>' +
          '<polygon points="113,66 130,58 130,76 113,84" fill="#8a5a2c"/>' +
          '<polygon points="130,58 147,66 147,84 130,76" fill="#956030"/>' +
          '<polygon points="100,66 130,51 130,58 113,66" fill="#e6bd8a"/>' +
          '<polygon points="130,51 160,66 147,66 130,58" fill="#e6bd8a"/></g>' +
          '<use href="#l5p" x="115" y="41" width="30" height="46"/>' +
          '<g stroke="#8f5e30" stroke-width="1.5" stroke-linejoin="round">' +
          '<polygon points="100,66 130,81 130,115 100,100" fill="#cf9b63"/>' +
          '<polygon points="160,66 130,81 130,115 160,100" fill="#b58049"/>' +
          '<polygon points="100,66 130,81 130,74 113,66" fill="#dcb07d"/>' +
          '<polygon points="130,81 160,66 147,66 130,74" fill="#dcb07d"/></g>' +
          '<text x="130" y="150" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">in</text>' +
          '<text x="130" y="172" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[ин]</text>' +
          '<text x="130" y="192" text-anchor="middle" font-size="16" fill="var(--text2)">в, внутри</text>' +
          '<use href="#l5box" x="310" y="36" width="80" height="100"/>' +
          '<use href="#l5p" x="335" y="23" width="30" height="46"/>' +
          '<text x="350" y="150" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">on</text>' +
          '<text x="350" y="172" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[он]</text>' +
          '<text x="350" y="192" text-anchor="middle" font-size="16" fill="var(--text2)">на</text>' +
          '<use href="#l5box" x="90" y="216" width="80" height="100"/>' +
          '<use href="#l5lie" x="100" y="300" width="60" height="26"/>' +
          '<text x="130" y="336" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">under</text>' +
          '<text x="130" y="358" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[андэ]</text>' +
          '<text x="130" y="378" text-anchor="middle" font-size="16" fill="var(--text2)">под</text>' +
          '<use href="#l5p" x="335" y="211" width="30" height="46"/>' +
          '<use href="#l5box" x="310" y="216" width="80" height="100"/>' +
          '<text x="350" y="336" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">behind</text>' +
          '<text x="350" y="358" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[бихайнд]</text>' +
          '<text x="350" y="378" text-anchor="middle" font-size="16" fill="var(--text2)">за, позади</text>' +
          '<use href="#l5box" x="90" y="396" width="80" height="100"/>' +
          '<use href="#l5p" x="188" y="424" width="30" height="46"/>' +
          '<text x="130" y="510" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">near</text>' +
          '<text x="130" y="532" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[ниэ]</text>' +
          '<text x="130" y="552" text-anchor="middle" font-size="16" fill="var(--text2)">рядом (с зазором)</text>' +
          '<use href="#l5box" x="310" y="396" width="80" height="100"/>' +
          '<use href="#l5p" x="384" y="424" width="30" height="46"/>' +
          '<text x="350" y="510" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">next to</text>' +
          '<text x="350" y="532" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[нэкст ту]</text>' +
          '<text x="350" y="552" text-anchor="middle" font-size="16" fill="var(--text2)">рядом, вплотную</text>' +
          '</svg>',
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
        { q: "[BUILD] Соберите: «Где столовая?»", build: ["Where","is","the","canteen"], expl: "Where is the canteen? — Где столовая?", hint_ru: "Где столовая?" },
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
          '⚠️ <b>Отрицание и вопрос:</b> через <b>do / does</b>, глагол — в БАЗЕ (без -s): <b>He does not pick</b>, <b>Does she pack?</b>' +
          '<div style="margin-top:6px"><b>Наречия</b> always / sometimes / never — ПЕРЕД глаголом: <b>I always work</b>.</div>',
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
        { q: "[BUILD] Соберите: «Она упаковывает ящик»", build: ["She","packs","the","box"], expl: "She packs the box — Она упаковывает ящик. He/she/it → глагол с -s.", hint_ru: "Она упаковывает ящик." },
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
        { q: "[BUILD] Соберите: «Я сейчас собираю»", build: ["I","am","picking","now"], expl: "I am picking now — Я сейчас собираю. am/is/are + …ing.", hint_ru: "Я сейчас собираю." },
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
          '⚠️ <b>Частая ошибка:</b> «he have» → правильно <b>he has</b>.' +
          '<div style="margin-top:6px"><b>Вопрос и отрицание:</b> через <b>do / does</b>, <b>have</b> — в базовой форме: <b>Does he have…?</b> (не «does he has»), <b>I do not have…</b></div>',
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
        { q: "[BUILD] Соберите: «У меня есть перчатки»", build: ["I","have","gloves"], expl: "I have gloves — У меня есть перчатки.", hint_ru: "У меня есть перчатки." },
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
          '⚠️ <b>Число:</b> один → <b>is</b>, много → <b>are</b>: «There <b>is</b> a bed», «There <b>are</b> beds».' +
          '<div style="margin-top:6px"><b>some / any:</b> <b>some</b> — в утверждении, <b>any</b> — в вопросе и отрицании: «Are there <b>any</b> blankets?», «There are <b>not any</b> towels.»</div>',
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
        { q: "[BUILD] Соберите: «Здесь есть обогреватель»", build: ["There","is","a","heater"], expl: "There is a heater — Здесь есть обогреватель.", hint_ru: "Здесь есть обогреватель." },
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
        { q: "[BUILD] Соберите: «Я хотел бы хлеба»", build: ["I","would","like","some","bread"], expl: "I would like some bread — Я хотел бы хлеба (вежливо).", hint_ru: "Я хотел бы хлеба." },
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
          '<div style="line-height:1.6">Указываем на предмет:<br>👉 <b>This</b> <span class="g-transcr">[зис]</span> — один, РЯДОМ.<br><b>That</b> <span class="g-transcr">[зэт]</span> — один, ДАЛЕКО.<br>👉 <b>These</b> <span class="g-transcr">[зиз]</span> — много, РЯДОМ.<br><b>Those</b> <span class="g-transcr">[зоуз]</span> — много, ДАЛЕКО.<br>👉 Один → <b>is</b>, много → <b>are</b>: «This <b>is</b> a bus», «These <b>are</b> tickets».</div>',
        visual_ru:
          '<svg viewBox="22 8 366 540" xmlns="http://www.w3.org/2000/svg" role="img" font-family="-apple-system, system-ui, Roboto, sans-serif" aria-label="this/that/these/those: близко-далеко × один-много">' +
          '<title>this / that / these / those</title>' +
          '<desc>Наблюдатель и автобусы: один рядом, один далеко, много рядом, много далеко.</desc>' +
          '<defs>' +
          '<symbol id="l11p" viewBox="0 0 30 46">' +
          '<g stroke="#e0564a" stroke-width="4.5" stroke-linecap="round">' +
          '<line x1="11" y1="19" x2="5" y2="26"/><line x1="19" y1="19" x2="25" y2="26"/>' +
          '<line x1="12.5" y1="30" x2="10" y2="43"/><line x1="17.5" y1="30" x2="20" y2="43"/></g>' +
          '<circle cx="15" cy="8" r="6" fill="#e0564a" stroke="#a83a30" stroke-width="1.5"/>' +
          '<rect x="9.5" y="14" width="11" height="17" rx="5" fill="#e0564a" stroke="#a83a30" stroke-width="1.5"/>' +
          '</symbol>' +
          '<symbol id="l11bus" viewBox="0 0 64 34">' +
          '<rect x="2" y="4" width="60" height="20" rx="5" fill="#3f7ec9" stroke="#2c5d96" stroke-width="1.5"/>' +
          '<rect x="7" y="8" width="8" height="7" rx="1" fill="#d3e6f8"/>' +
          '<rect x="18" y="8" width="8" height="7" rx="1" fill="#d3e6f8"/>' +
          '<rect x="29" y="8" width="8" height="7" rx="1" fill="#d3e6f8"/>' +
          '<rect x="40" y="8" width="8" height="7" rx="1" fill="#d3e6f8"/>' +
          '<rect x="51" y="8" width="7" height="9" rx="1" fill="#bcdcff"/>' +
          '<circle cx="16" cy="25" r="4.5" fill="#333"/><circle cx="16" cy="25" r="1.8" fill="#999"/>' +
          '<circle cx="48" cy="25" r="4.5" fill="#333"/><circle cx="48" cy="25" r="1.8" fill="#999"/>' +
          '<circle cx="61" cy="20" r="1.8" fill="#ffe08a"/>' +
          '</symbol>' +
          '</defs>' +
          '<g transform="translate(0,0)">' +
          '<polygon points="66,196 134,196 104,78 96,78" fill="#aeb6bf"/>' +
          '<line x1="36" y1="78" x2="164" y2="78" stroke="#d6dbe0" stroke-width="1"/>' +
          '<line x1="100" y1="194" x2="100" y2="80" stroke="#eef1f4" stroke-width="2" stroke-dasharray="5 7"/>' +
          '<use href="#l11p" x="30" y="150" width="22" height="34"/>' +
          '<use href="#l11bus" x="62" y="150" width="76" height="40"/>' +
          '<text x="100" y="224" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">this</text>' +
          '<text x="100" y="246" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[зис]</text>' +
          '<text x="100" y="265" text-anchor="middle" font-size="16" fill="var(--text2)">этот — один, рядом</text>' +
          '</g>' +
          '<g transform="translate(210,0)">' +
          '<polygon points="66,196 134,196 104,78 96,78" fill="#aeb6bf"/>' +
          '<line x1="36" y1="78" x2="164" y2="78" stroke="#d6dbe0" stroke-width="1"/>' +
          '<line x1="100" y1="194" x2="100" y2="80" stroke="#eef1f4" stroke-width="2" stroke-dasharray="5 7"/>' +
          '<use href="#l11p" x="30" y="150" width="22" height="34"/>' +
          '<use href="#l11bus" x="83" y="82" width="34" height="18"/>' +
          '<text x="100" y="224" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">that</text>' +
          '<text x="100" y="246" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[зэт]</text>' +
          '<text x="100" y="265" text-anchor="middle" font-size="16" fill="var(--text2)">тот — один, далеко</text>' +
          '</g>' +
          '<g transform="translate(0,278)">' +
          '<polygon points="66,196 134,196 104,78 96,78" fill="#aeb6bf"/>' +
          '<line x1="36" y1="78" x2="164" y2="78" stroke="#d6dbe0" stroke-width="1"/>' +
          '<line x1="100" y1="194" x2="100" y2="80" stroke="#eef1f4" stroke-width="2" stroke-dasharray="5 7"/>' +
          '<use href="#l11p" x="28" y="150" width="22" height="34"/>' +
          '<use href="#l11bus" x="90" y="128" width="56" height="30"/>' +
          '<use href="#l11bus" x="52" y="154" width="70" height="37"/>' +
          '<text x="100" y="224" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">these</text>' +
          '<text x="100" y="246" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[зиз]</text>' +
          '<text x="100" y="265" text-anchor="middle" font-size="16" fill="var(--text2)">эти — много, рядом</text>' +
          '</g>' +
          '<g transform="translate(210,278)">' +
          '<polygon points="66,196 134,196 104,78 96,78" fill="#aeb6bf"/>' +
          '<line x1="36" y1="78" x2="164" y2="78" stroke="#d6dbe0" stroke-width="1"/>' +
          '<line x1="100" y1="194" x2="100" y2="80" stroke="#eef1f4" stroke-width="2" stroke-dasharray="5 7"/>' +
          '<use href="#l11p" x="30" y="150" width="22" height="34"/>' +
          '<use href="#l11bus" x="98" y="73" width="27" height="14"/>' +
          '<use href="#l11bus" x="78" y="84" width="34" height="18"/>' +
          '<text x="100" y="224" text-anchor="middle" font-weight="700" font-size="30" fill="var(--text)">those</text>' +
          '<text x="100" y="246" text-anchor="middle" font-size="17" font-style="italic" fill="var(--text2)">[зоуз]</text>' +
          '<text x="100" y="265" text-anchor="middle" font-size="16" fill="var(--text2)">те — много, далеко</text>' +
          '</g>' +
          '</svg>',
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
        { q: "[BUILD] Соберите: «Это мой билет»", build: ["This","is","my","ticket"], expl: "This is my ticket — Это мой билет.", hint_ru: "Это мой билет." },
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
    {
      id: 12,
      mod: 7,
      title_ru: "Личные данные: дата рождения и форма",
      cefr: "was / were · was/were born · dates & personal information",

      grammar: {
        title_ru: "Прошлое от be: was / were · was born",
        intro_ru:
          '<div style="line-height:1.6">Прошлое от <b>am/is/are</b>:<br>👉 <b>was</b> <span class="g-transcr">[уоз]</span> — был/была (I, he, she, it).<br>👉 <b>were</b> <span class="g-transcr">[уё]</span> — были (you, we, they).<br>👉 <b>was born</b> <span class="g-transcr">[уоз бон]</span> — родился: «I was born in May».</div>',
        cultural_ru:
          'В русском «был / была / были». В английском прошлое от be — всего 2 слова:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>I / he / she / it →</b> was <span class="g-transcr">[уоз]</span></div>' +
          '<div><b>you / we / they →</b> were <span class="g-transcr">[уё]</span></div></div>' +
          '<div style="margin-top:6px"><b>was / were born</b> <span class="g-transcr">[уоз бон]</span> = «родился». Дата рождения: <b>in May</b>, <b>in 1995</b>.</div>',
        note_ru:
          '⚠️ <b>I / he / she / it → was</b>, <b>you / we / they → were</b>. Дата рождения: <b>was / were born in</b> + месяц или год: «I was born <b>in</b> May», «She was born <b>in</b> 1990».',
        forms: {
          positive: {
            label_ru: "✅ Был / были",
            rule_ru:
              '<b>was</b> (I/he/she/it) · <b>were</b> (you/we/they) · <b>was born</b> = родился:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I was a picker</code> <span class="g-transcr">[ай уоз э пикэ]</span></div>' +
              '<div><code>I was born in May</code> <span class="g-transcr">[ай уоз бон ин мэй]</span></div></div>',
            table: [
              { subj: "I", verb: "was", example: "I was a picker", transcr: "Ай уоз э пикэ", tr_ru: "Я был сборщиком" },
              { subj: "He", verb: "was", example: "He was on the farm", transcr: "Хи уоз он зэ фарм", tr_ru: "Он был на ферме" },
              { subj: "We", verb: "were", example: "We were a team", transcr: "Уи уё э тим", tr_ru: "Мы были бригадой" },
              { subj: "I", verb: "was born", example: "I was born in May", transcr: "Ай уоз бон ин мэй", tr_ru: "Я родился в мае" },
            ],
          },
          negative: {
            label_ru: "❌ Не был / не были",
            rule_ru:
              'Отрицание — <b>was not / were not</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I was not here</code></div>' +
              '<div><code>They were not on the farm</code></div></div>',
            table: [
              { subj: "I", verb: "was not", example: "I was not here", transcr: "Ай уоз нот хиэ", tr_ru: "Меня здесь не было" },
              { subj: "They", verb: "were not", example: "They were not on the farm", transcr: "Зэй уё нот он зэ фарм", tr_ru: "Их не было на ферме" },
              { subj: "She", verb: "was not", example: "She was not a packer", transcr: "Ши уоз нот э пэкэ", tr_ru: "Она не была упаковщицей" },
            ],
          },
          question: {
            label_ru: "❓ Был…? Когда…?",
            rule_ru:
              '<b>Was / Were</b> ставим ВПЕРЁД; «когда родился» — <b>When were you born?</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Were you born in May?</code> <span class="g-transcr">[уё ю бон ин мэй]</span></div>' +
              '<div><code>When were you born?</code> <span class="g-transcr">[уэн уё ю бон]</span></div></div>',
            table: [
              { subj: "Was", verb: "she…?", example: "Was she a picker?", transcr: "Уоз ши э пикэ?", tr_ru: "Она была сборщицей?" },
              { subj: "Were", verb: "you…?", example: "Were you born in May?", transcr: "Уё ю бон ин мэй?", tr_ru: "Ты родился в мае?" },
              { subj: "When", verb: "were you born?", example: "When were you born?", transcr: "Уэн уё ю бон?", tr_ru: "Когда ты родился?" },
            ],
          },
        },
        examples: [
          { en: "I was a picker.", transcr: "Ай уоз э пикэ.", ru: "Я был сборщиком." },
          { en: "We were on the farm.", transcr: "Уи уё он зэ фарм.", ru: "Мы были на ферме." },
          { en: "I was born in May.", transcr: "Ай уоз бон ин мэй.", ru: "Я родился в мае." },
          { en: "She was born in June.", transcr: "Ши уоз бон ин джун.", ru: "Она родилась в июне." },
          { en: "When were you born?", transcr: "Уэн уё ю бон?", ru: "Когда ты родился?" },
          { en: "He was born in April.", transcr: "Хи уоз бон ин эйприл.", ru: "Он родился в апреле." },
          { en: "Were you a packer?", transcr: "Уё ю э пэкэ?", ru: "Ты был упаковщиком?" },
          { en: "They were not here.", transcr: "Зэй уё нот хиэ.", ru: "Их здесь не было." },
          { en: "How old are you?", transcr: "Хау оулд ар ю?", ru: "Сколько тебе лет?" },
          { en: "My birthday is in July.", transcr: "Май бёсдэй из ин джулай.", ru: "Мой день рождения в июле." },
          { en: "What is your address?", transcr: "Уот из ё эдрэс?", ru: "Какой у тебя адрес?" },
          { en: "My address is on the card.", transcr: "Май эдрэс из он зэ кад.", ru: "Мой адрес — на карте." },
        ],
        simple_ru: {
          formula: 'Прошлое от be: <b>I / he / she / it → was</b>, <b>you / we / they → were</b>.<br>Родился = <b>was born</b>.<br><span class="g-transcr">I was a picker · I was born in May</span>',
          examples: [
            { en: "I was a picker.", transcr: "Ай уоз э пикэ.", ru: "Я был (was) + сборщик (picker)." },
            { en: "I was born in May.", transcr: "Ай уоз бон ин мэй.", ru: "Я родился (was born) + в мае (in May)." },
          ],
        },
        ytQuery: "was were past of be английский для начинающих на русском",
      },

      words: [
        { e: "🗓️", en: "January", transcr: "джэньюэри", ru: "январь", pn: "/ˈdʒænjuəri/" },
        { e: "🗓️", en: "February", transcr: "фэбруэри", ru: "февраль", pn: "/ˈfebruəri/" },
        { e: "🗓️", en: "March", transcr: "мач", ru: "март", pn: "/mɑːtʃ/" },
        { e: "🗓️", en: "April", transcr: "эйприл", ru: "апрель", pn: "/ˈeɪprɪl/" },
        { e: "🗓️", en: "May", transcr: "мэй", ru: "май", pn: "/meɪ/" },
        { e: "🗓️", en: "June", transcr: "джун", ru: "июнь", pn: "/dʒuːn/" },
        { e: "🗓️", en: "July", transcr: "джулай", ru: "июль", pn: "/dʒuˈlaɪ/" },
        { e: "🗓️", en: "August", transcr: "огэст", ru: "август", pn: "/ˈɔːɡəst/" },
        { e: "🗓️", en: "September", transcr: "сэптэмбэ", ru: "сентябрь", pn: "/sepˈtembə/" },
        { e: "🗓️", en: "October", transcr: "октоубэ", ru: "октябрь", pn: "/ɒkˈtəʊbə/" },
        { e: "🗓️", en: "November", transcr: "ноувэмбэ", ru: "ноябрь", pn: "/nəʊˈvembə/" },
        { e: "🗓️", en: "December", transcr: "дисэмбэ", ru: "декабрь", pn: "/dɪˈsembə/" },
        { e: "📆", en: "year", transcr: "йиэ", ru: "год", pn: "/jɪə/" },
        { e: "📅", en: "date", transcr: "дэйт", ru: "дата", pn: "/deɪt/" },
        { e: "👶", en: "born", transcr: "бон", ru: "рождён (родился)", pn: "/bɔːn/" },
        { e: "🎂", en: "birthday", transcr: "бёсдэй", ru: "день рождения", pn: "/ˈbɜːθdeɪ/" },
        { e: "🔢", en: "age", transcr: "эйдж", ru: "возраст", pn: "/eɪdʒ/" },
        { e: "👴", en: "old", transcr: "оулд", ru: "старый (возраст)", pn: "/əʊld/" },
        { e: "📍", en: "address", transcr: "эдрэс", ru: "адрес", pn: "/əˈdres/" },
        { e: "#️⃣", en: "number", transcr: "намбэ", ru: "номер", pn: "/ˈnʌmbə/" },
        { e: "📋", en: "form", transcr: "фом", ru: "анкета (форма)", pn: "/fɔːm/" },
        { e: "📧", en: "email", transcr: "имэйл", ru: "имейл", pn: "/ˈiːmeɪl/" },
        { e: "💳", en: "card", transcr: "кад", ru: "карта", pn: "/kɑːd/" },
        { e: "📄", en: "contract", transcr: "контрэкт", ru: "контракт", pn: "/ˈkɒntrækt/" },
        { e: "💍", en: "married", transcr: "мэрид", ru: "женат/замужем", pn: "/ˈmærɪd/" },
        { e: "🧍", en: "single", transcr: "сингл", ru: "не женат/холост", pn: "/ˈsɪŋɡl/" },
        { e: "✍️", en: "signature", transcr: "сигнэчэ", ru: "подпись", pn: "/ˈsɪɡnətʃə/" },
        { e: "📷", en: "photo", transcr: "фоутоу", ru: "фото", pn: "/ˈfəʊtəʊ/" },
        { e: "✅", en: "tick", transcr: "тик", ru: "галочка", pn: "/tɪk/" },
        { e: "📮", en: "postcode", transcr: "поусткоуд", ru: "почтовый индекс", pn: "/ˈpəʊstkəʊd/" },
      ],

      dialogue: [
        { s: "m", en: "Hello. What is your name, please?", transcr: "Хэлоу. Уот из ё нэйм, плиз?", ru: "Здравствуйте. Как вас зовут?" },
        { s: "w", en: "My name is Ahmad. I am a picker.", transcr: "Май нэйм из Ахмад. Ай эм э пикэ.", ru: "Меня зовут Ахмад. Я сборщик." },
        { s: "m", en: "When were you born, Ahmad?", transcr: "Уэн уё ю бон, Ахмад?", ru: "Когда вы родились, Ахмад?" },
        { s: "w", en: "I was born in May. Here is my passport.", transcr: "Ай уоз бон ин мэй. Хиэ из май паспорт.", ru: "Я родился в мае. Вот мой паспорт." },
        { s: "m", en: "Thank you. What is your address?", transcr: "Сэнк ю. Уот из ё эдрэс?", ru: "Спасибо. Какой ваш адрес?" },
        { s: "w", en: "This is my address and postcode.", transcr: "Зис из май эдрэс энд поусткоуд.", ru: "Вот мой адрес и индекс." },
        { s: "m", en: "Good. What is your job now?", transcr: "Гуд. Уот из ё джоб нау?", ru: "Хорошо. Кем вы работаете сейчас?" },
        { s: "w", en: "I am a picker. This is my contract.", transcr: "Ай эм э пикэ. Зис из май контрэкт.", ru: "Я сборщик. Вот мой контракт." },
        { s: "m", en: "Please fill in the form here.", transcr: "Плиз фил ин зэ фом хиэ.", ru: "Заполните здесь форму, пожалуйста." },
        { s: "w", en: "Is this my email and number?", transcr: "Из зис май имэйл энд намбэ?", ru: "Это мой имейл и номер?" },
        { s: "m", en: "Yes. Are you married?", transcr: "Йес. Ар ю мэрид?", ru: "Да. Вы женаты?" },
        { s: "w", en: "No, I am single. Thank you!", transcr: "Ноу, ай эм сингл. Сэнк ю!", ru: "Нет, я не женат. Спасибо!" },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ a picker." (прошлое: я)', opts: ["was", "were", "am", "is"], c: 0, expl: "I → was (прошлое).", hint_ru: "I + was." },
        { q: '[COMPLETE] "They ___ on the farm." (прошлое: они)', opts: ["were", "was", "are", "be"], c: 0, expl: "they → were (прошлое).", hint_ru: "they + were." },
        { q: '[COMPLETE] "I was ___ in May." (родился)', opts: ["born", "old", "year", "date"], c: 0, expl: "was born — родился.", hint_ru: "was born." },
        { q: '[TRANSLATE] "год"', opts: ["year", "date", "form", "card"], c: 0, expl: "year — год.", hint_ru: "year." },
        { q: '[TRANSLATE] "адрес"', opts: ["address", "number", "email", "card"], c: 0, expl: "address — адрес.", hint_ru: "address." },
        { q: "[CORRECT] Где правильно (прошлое: мы)?", opts: ["We were here", "We was here", "We are here", "We be here"], c: 0, expl: "we → were.", hint_ru: "we + were." },
        { q: "[QUESTION] Как спросить, когда человек родился?", opts: ["When were you born?", "When you born?", "When was you born?", "Where you born?"], c: 0, expl: "When were you born?", hint_ru: "When were…?" },
        { q: "[NEGATIVE] Где отрицание?", opts: ["They were not here", "They were here", "Were they here?", "They not here"], c: 0, expl: "Отрицание = were + not.", hint_ru: "were not." },
        { q: "[LISTEN] I was born in May.", opts: ["Я родился в мае.", "Я родился в июне.", "Где ты родился?", "Это мой адрес."], c: 0, expl: "was born — родился; May — май." },
        { q: "[LISTEN] What is your address?", opts: ["Какой ваш адрес?", "Как вас зовут?", "Сколько вам лет?", "Где форма?"], c: 0, expl: "address — адрес." },
        { q: "[GIST] Кем работает Ахмад (по диалогу)?", opts: ["Сборщик (picker)", "Упаковщик", "Водитель", "Менеджер"], c: 0, expl: "В диалоге: «I am a picker».", hint_ru: "Смотрите вторую реплику." },
        { q: "[GIST] Ахмад женат (по диалогу)?", opts: ["Нет, не женат (single)", "Да, женат", "Не сказано", "Он вдовец"], c: 0, expl: "В диалоге: «I am single».", hint_ru: "Смотрите последнюю реплику." },
        { q: "[BUILD] Соберите: «Я родился в мае»", build: ["I","was","born","in","May"], expl: "I was born in May — Я родился в мае.", hint_ru: "Я родился в мае." },
      ],

      everyday: {
        title_ru: "Заполнить форму (документы)",
        phrases: [
          { en: "What is your date of birth?", transcr: "Уот из ё дэйт ов бёс?", ru: "Какая у вас дата рождения?" },
          { en: "Please sign here.", transcr: "Плиз сайн хиэ.", ru: "Подпишите здесь, пожалуйста." },
          { en: "What is your National Insurance number?", transcr: "Уот из ё нэшнл иншуэрэнс намбэ?", ru: "Какой у вас номер нацстраховки (NI)?" },
          { en: "Please fill in this form.", transcr: "Плиз фил ин зис фом.", ru: "Заполните эту форму, пожалуйста." },
          { en: "Is this your signature?", transcr: "Из зис ё сигнэчэ?", ru: "Это ваша подпись?" },
        ],
      },
    },
    {
      id: 13,
      mod: 7,
      title_ru: "Прошлая смена: что я делал",
      cefr: "Past Simple · regular & irregular · shift report",

      grammar: {
        title_ru: "Прошлое: Past Simple (правильные и неправильные)",
        intro_ru:
          '<div style="line-height:1.6">Прошлое (вчера, на прошлой смене):<br>👉 <b>Правильные</b> глаголы: + <b>-ed</b> — work → <b>worked</b> <span class="g-transcr">[уёкт]</span>, pack → <b>packed</b> <span class="g-transcr">[пэкт]</span>.<br>👉 <b>Неправильные</b> — форма меняется: eat → <b>ate</b> <span class="g-transcr">[эйт]</span>, buy → <b>bought</b> <span class="g-transcr">[бот]</span>.<br>👉 Отрицание/вопрос: <b>did</b> + БАЗА: «I <b>did not work</b>», «<b>Did</b> you work?».</div>',
        cultural_ru:
          'В русском «делал / сделал» — одна форма меняется. В английском прошлое от глагола двух видов:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>правильные (+ed):</b> work → worked <span class="g-transcr">[уёкт]</span></div>' +
          '<div><b>неправильные:</b> eat → ate <span class="g-transcr">[эйт]</span></div>' +
          '<div>pack → packed <span class="g-transcr">[пэкт]</span></div>' +
          '<div>buy → bought <span class="g-transcr">[бот]</span></div></div>' +
          '<div style="margin-top:6px">Отрицание и вопрос — через <b>did</b> + база (не прошедшая форма): «I <b>did not</b> work», «<b>Did</b> you work?».</div>',
        note_ru:
          '⚠️ <b>Правило:</b> прошедшая форма (worked, ate) — только в УТВЕРЖДЕНИИ.' +
          '<div style="margin-top:6px"><b>В отрицании и вопросе</b> — глагол в БАЗЕ: «I did not <b>work</b>» (не «did not worked»), «Did you <b>eat</b>?» (не «Did you ate?»).</div>',
        forms: {
          positive: {
            label_ru: "✅ Утверждение (прошлое)",
            rule_ru:
              'Правильные + <b>-ed</b>; неправильные меняются:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I worked yesterday</code> <span class="g-transcr">[ай уёкт йестэдэй]</span></div>' +
              '<div><code>I ate lunch</code> <span class="g-transcr">[ай эйт ланч]</span></div></div>',
            table: [
              { subj: "I", verb: "worked", example: "I worked yesterday", transcr: "Ай уёкт йестэдэй", tr_ru: "Я работал вчера" },
              { subj: "I", verb: "packed", example: "I packed the boxes", transcr: "Ай пэкт зэ боксиз", tr_ru: "Я упаковал ящики" },
              { subj: "I", verb: "ate", example: "I ate lunch", transcr: "Ай эйт ланч", tr_ru: "Я пообедал" },
              { subj: "I", verb: "bought", example: "I bought a ticket", transcr: "Ай бот э тикит", tr_ru: "Я купил билет" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание (did not + база)",
            rule_ru:
              '<b>did not</b> + БАЗА глагола:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I did not work</code></div>' +
              '<div><code>I did not eat lunch</code></div></div>',
            table: [
              { subj: "I", verb: "did not work", example: "I did not work yesterday", transcr: "Ай дид нот уёк йестэдэй", tr_ru: "Я не работал вчера" },
              { subj: "I", verb: "did not eat", example: "I did not eat lunch", transcr: "Ай дид нот ит ланч", tr_ru: "Я не обедал" },
              { subj: "We", verb: "did not finish", example: "We did not finish", transcr: "Уи дид нот финиш", tr_ru: "Мы не закончили" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос (Did + база)",
            rule_ru:
              '<b>Did</b> + кто + БАЗА глагола:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Did you work?</code> <span class="g-transcr">[дид ю уёк]</span></div>' +
              '<div><code>Did you eat lunch?</code> <span class="g-transcr">[дид ю ит ланч]</span></div></div>',
            table: [
              { subj: "Did", verb: "you work?", example: "Did you work yesterday?", transcr: "Дид ю уёк йестэдэй?", tr_ru: "Ты работал вчера?" },
              { subj: "Did", verb: "you eat?", example: "Did you eat lunch?", transcr: "Дид ю ит ланч?", tr_ru: "Ты пообедал?" },
              { subj: "Did", verb: "she drive?", example: "Did she drive?", transcr: "Дид ши драйв?", tr_ru: "Она водила?" },
            ],
          },
        },
        examples: [
          { en: "I worked hard last week.", transcr: "Ай уёкт хад ласт уик.", ru: "Я тяжело работал на прошлой неделе." },
          { en: "I packed the boxes.", transcr: "Ай пэкт зэ боксиз.", ru: "Я упаковал ящики." },
          { en: "I ate lunch at one o'clock.", transcr: "Ай эйт ланч эт уан эклок.", ru: "Я пообедал в час." },
          { en: "I left work at six.", transcr: "Ай лэфт уёк эт сикс.", ru: "Я ушёл с работы в шесть." },
          { en: "I bought a ticket.", transcr: "Ай бот э тикит.", ru: "Я купил билет." },
          { en: "I paid ten pounds.", transcr: "Ай пэйд тэн паундз.", ru: "Я заплатил десять фунтов." },
          { en: "Did you work yesterday?", transcr: "Дид ю уёк йестэдэй?", ru: "Ты работал вчера?" },
          { en: "I did not work yesterday.", transcr: "Ай дид нот уёк йестэдэй.", ru: "Я не работал вчера." },
          { en: "I drove the tractor.", transcr: "Ай дроув зэ трэктэ.", ru: "Я водил трактор." },
          { en: "I drank tea at lunch.", transcr: "Ай дрэнк ти эт ланч.", ru: "Я выпил чай в обед." },
          { en: "We finished two hours ago.", transcr: "Уи финишт ту ауэз эгоу.", ru: "Мы закончили два часа назад." },
          { en: "I cleaned the pallet.", transcr: "Ай клинд зэ пэлит.", ru: "Я почистил паллет." },
        ],
        simple_ru: {
          formula: 'Прошлое: правильные + <b>-ed</b> (worked), неправильные меняются (ate, bought).<br>Отрицание/вопрос: <b>did</b> + база.<br><span class="g-transcr">I worked yesterday · Did you work?</span>',
          examples: [
            { en: "I worked yesterday.", transcr: "Ай уёкт йестэдэй.", ru: "Я работал (worked) + вчера (yesterday)." },
            { en: "Did you work?", transcr: "Дид ю уёк?", ru: "did + ты + работа (база): Ты работал?" },
          ],
        },
        ytQuery: "past simple regular irregular английский для начинающих на русском",
      },

      words: [
        { e: "🍽️", en: "eat", transcr: "ит", ru: "есть (кушать)", pn: "/iːt/" },
        { e: "🥤", en: "drink", transcr: "дринк", ru: "пить", pn: "/drɪŋk/" },
        { e: "🚶", en: "leave", transcr: "лив", ru: "уходить", pn: "/liːv/" },
        { e: "🛒", en: "buy", transcr: "бай", ru: "покупать", pn: "/baɪ/" },
        { e: "💷", en: "pay", transcr: "пэй", ru: "платить", pn: "/peɪ/" },
        { e: "🚗", en: "drive", transcr: "драйв", ru: "водить (машину)", pn: "/draɪv/" },
        { e: "📥", en: "collect", transcr: "кэлэкт", ru: "собирать (забирать)", pn: "/kəˈlekt/" },
        { e: "🚚", en: "deliver", transcr: "диливэ", ru: "доставлять", pn: "/dɪˈlɪvə/" },
        { e: "📤", en: "unload", transcr: "анлоуд", ru: "разгружать", pn: "/ˌʌnˈləʊd/" },
        { e: "🔧", en: "repair", transcr: "рипэа", ru: "чинить", pn: "/rɪˈpeə/" },
        { e: "🙋", en: "ask", transcr: "аск", ru: "спрашивать", pn: "/ɑːsk/" },
        { e: "💬", en: "answer", transcr: "ансэ", ru: "отвечать", pn: "/ˈɑːnsə/" },
        { e: "↩️", en: "return", transcr: "ритён", ru: "возвращать(ся)", pn: "/rɪˈtɜːn/" },
        { e: "🅿️", en: "park", transcr: "пак", ru: "парковать", pn: "/pɑːk/" },
        { e: "📅", en: "yesterday", transcr: "йестэдэй", ru: "вчера", pn: "/ˈjestədeɪ/" },
        { e: "⏪", en: "ago", transcr: "эгоу", ru: "назад (тому)", pn: "/əˈɡəʊ/" },
        { e: "📋", en: "report", transcr: "рипот", ru: "отчёт", pn: "/rɪˈpɔːt/" },
        { e: "🕐", en: "shift", transcr: "шифт", ru: "смена", pn: "/ʃɪft/" },
        { e: "👔", en: "boss", transcr: "бос", ru: "начальник", pn: "/bɒs/" },
        { e: "⚠️", en: "problem", transcr: "проблэм", ru: "проблема", pn: "/ˈprɒbləm/" },
        { e: "❌", en: "mistake", transcr: "мистэйк", ru: "ошибка", pn: "/mɪˈsteɪk/" },
        { e: "🚑", en: "accident", transcr: "эксидэнт", ru: "несчастный случай", pn: "/ˈæksɪdənt/" },
        { e: "⏰", en: "late", transcr: "лэйт", ru: "поздно (опоздал)", pn: "/leɪt/" },
        { e: "🌅", en: "early", transcr: "ёли", ru: "рано", pn: "/ˈɜːli/" },
        { e: "📦", en: "pallet", transcr: "пэлит", ru: "паллет (поддон)", pn: "/ˈpælɪt/" },
        { e: "🛌", en: "weekend", transcr: "уикэнд", ru: "выходные", pn: "/ˌwiːkˈend/" },
        { e: "🍴", en: "lunch", transcr: "ланч", ru: "обед", pn: "/lʌntʃ/" },
        { e: "⏱️", en: "minute", transcr: "минит", ru: "минута", pn: "/ˈmɪnɪt/" },
        { e: "💪", en: "hard", transcr: "хад", ru: "тяжело (усердно)", pn: "/hɑːd/" },
        { e: "⏳", en: "overtime", transcr: "оувэтайм", ru: "переработка", pn: "/ˈəʊvətaɪm/" },
      ],

      dialogue: [
        { s: "m", en: "Hello. How was your shift?", transcr: "Хэлоу. Хау уоз ё шифт?", ru: "Здравствуй. Как прошла смена?" },
        { s: "w", en: "Good. I packed many boxes.", transcr: "Гуд. Ай пэкт мэни боксиз.", ru: "Хорошо. Я упаковал много ящиков." },
        { s: "m", en: "Did you finish the pallets?", transcr: "Дид ю финиш зэ пэлитс?", ru: "Ты закончил паллеты?" },
        { s: "w", en: "Yes. I finished two hours ago.", transcr: "Йес. Ай финишт ту ауэз эгоу.", ru: "Да. Я закончил два часа назад." },
        { s: "m", en: "Did you have a problem?", transcr: "Дид ю хэв э проблэм?", ru: "Была проблема?" },
        { s: "w", en: "Yes. The tractor was broken.", transcr: "Йес. Зэ трэктэ уоз броукэн.", ru: "Да. Трактор был сломан." },
        { s: "m", en: "Did you repair it?", transcr: "Дид ю рипэа ит?", ru: "Ты починил его?" },
        { s: "w", en: "No. I asked the mechanic.", transcr: "Ноу. Ай аскт зэ мэкэник.", ru: "Нет. Я спросил механика." },
        { s: "m", en: "Good. Did you eat lunch?", transcr: "Гуд. Дид ю ит ланч?", ru: "Хорошо. Ты пообедал?" },
        { s: "w", en: "Yes. I ate lunch at one.", transcr: "Йес. Ай эйт ланч эт уан.", ru: "Да. Я пообедал в час." },
        { s: "m", en: "When did you leave?", transcr: "Уэн дид ю лив?", ru: "Когда ты ушёл?" },
        { s: "w", en: "I left at six. The shift was hard.", transcr: "Ай лэфт эт сикс. Зэ шифт уоз хад.", ru: "Я ушёл в шесть. Смена была тяжёлой." },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ yesterday." (работал — прошлое)', opts: ["worked", "work", "working", "works"], c: 0, expl: "Правильный глагол в прошлом: work + ed.", hint_ru: "work + ed." },
        { q: '[COMPLETE] "I ___ lunch." (ел — неправильный)', opts: ["ate", "eat", "eated", "eating"], c: 0, expl: "eat → ate (неправильный глагол).", hint_ru: "eat → ate." },
        { q: '[COMPLETE] "I did not ___ yesterday." (после did — база)', opts: ["work", "worked", "working", "works"], c: 0, expl: "После did not — база (work), не worked.", hint_ru: "did not + база." },
        { q: '[TRANSLATE] "вчера"', opts: ["yesterday", "today", "tomorrow", "week"], c: 0, expl: "yesterday — вчера.", hint_ru: "yesterday." },
        { q: '[TRANSLATE] "смена"', opts: ["shift", "report", "pallet", "boss"], c: 0, expl: "shift — смена.", hint_ru: "shift." },
        { q: "[CORRECT] Где правильно (вопрос в прошлом)?", opts: ["Did you work yesterday?", "Did you worked yesterday?", "You worked yesterday?", "Do you work yesterday?"], c: 0, expl: "Вопрос в прошлом: Did + база.", hint_ru: "Did + база." },
        { q: "[QUESTION] Как спросить «ты поел?»", opts: ["Did you eat?", "Did you ate?", "You did eat?", "Do you ate?"], c: 0, expl: "Did you + база (eat).", hint_ru: "Did you eat?" },
        { q: "[NEGATIVE] Где отрицание в прошлом?", opts: ["I did not work", "I do not work", "I was not work", "I not worked"], c: 0, expl: "Прошлое отрицание: did not + база.", hint_ru: "did not + база." },
        { q: "[LISTEN] I left work at six.", opts: ["Я ушёл с работы в шесть.", "Я пришёл на работу в шесть.", "Я работал шесть часов.", "Где моя смена?"], c: 0, expl: "left — ушёл (leave); at six — в шесть." },
        { q: "[LISTEN] Did you finish the pallets?", opts: ["Ты закончил паллеты?", "Ты упаковал ящики?", "Сколько паллет?", "Где паллеты?"], c: 0, expl: "did you finish — ты закончил; pallets — паллеты." },
        { q: "[GIST] Что было сломано в смене (по диалогу)?", opts: ["Трактор", "Паллет", "Ящик", "Касса"], c: 0, expl: "В диалоге: «The tractor was broken».", hint_ru: "Смотрите про проблему." },
        { q: "[GIST] Во сколько рабочий ушёл (по диалогу)?", opts: ["В шесть", "В час", "Два часа назад", "Рано утром"], c: 0, expl: "В диалоге: «I left at six».", hint_ru: "Смотрите последнюю реплику." },
        { q: "[BUILD] Соберите: «Я работал вчера»", build: ["I","worked","yesterday"], expl: "I worked yesterday — Я работал вчера. Прошлое: глагол + -ed.", hint_ru: "Я работал вчера." },
      ],

      everyday: {
        title_ru: "Отчёт о смене",
        phrases: [
          { en: "My shift is finished.", transcr: "Май шифт из финишт.", ru: "Моя смена закончена." },
          { en: "I packed all the boxes.", transcr: "Ай пэкт ол зэ боксиз.", ru: "Я упаковал все ящики." },
          { en: "There was a problem today.", transcr: "Зэа уоз э проблэм тудэй.", ru: "Сегодня была проблема." },
          { en: "I had an accident at work.", transcr: "Ай хэд эн эксидэнт эт уёк.", ru: "У меня был несчастный случай на работе." },
          { en: "Can I do overtime?", transcr: "Кэн ай ду оувэтайм?", ru: "Можно мне переработку?" },
        ],
      },
    },
    {
      id: 14,
      mod: 8,
      title_ru: "Здоровье: «я не могу», у врача",
      cefr: "can / cannot · ability & requests · health",

      grammar: {
        title_ru: "Умею / могу: can / cannot",
        intro_ru:
          '<div style="line-height:1.6"><b>can</b> <span class="g-transcr">[кэн]</span> — «умею / могу»: I <b>can</b> lift the box.<br><b>cannot</b> <span class="g-transcr">[кэнот]</span> (= can not) — «не могу»: I <b>cannot</b> work.<br>👉 После can/cannot — <b>база</b> глагола (без -s, без to): «She <b>can help</b>».<br>👉 Просьба: <b>Can you…?</b>. Разрешение: <b>Can I…?</b></div>',
        cultural_ru:
          '<b>can</b> не меняется по лицам: I / he / she <b>can</b> (не «cans»), после него — база:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>могу:</b> I can work <span class="g-transcr">[ай кэн уёк]</span></div>' +
          '<div><b>не могу:</b> I cannot work <span class="g-transcr">[ай кэнот уёк]</span></div></div>' +
          '<div style="margin-top:6px">🇬🇧 Экстренно: <b>999</b> — скорая / полиция; <b>111</b> — совет NHS (не экстренно). В речи «не могу» сокращают: <b>can\'t</b> <span class="g-transcr">[кант]</span>.</div>',
        note_ru:
          '⚠️ После <b>can / cannot</b> — глагол в БАЗЕ: «She can <b>help</b>» (не «helps»), «I cannot <b>work</b>». Вопрос — <b>Can</b> вперёд: «<b>Can</b> you help?». В письме «не могу» чаще слитно: <b>cannot</b>.',
        forms: {
          positive: {
            label_ru: "✅ Могу / умею",
            rule_ru:
              '<b>can</b> + база глагола (одинаково для всех):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I can work</code> <span class="g-transcr">[ай кэн уёк]</span></div>' +
              '<div><code>She can help</code> <span class="g-transcr">[ши кэн хэлп]</span></div></div>',
            table: [
              { subj: "I", verb: "can work", example: "I can work today", transcr: "Ай кэн уёк тудэй", tr_ru: "Я могу работать сегодня" },
              { subj: "She", verb: "can help", example: "She can help you", transcr: "Ши кэн хэлп ю", tr_ru: "Она может помочь тебе" },
              { subj: "I", verb: "can lift", example: "I can lift the box", transcr: "Ай кэн лифт зэ бокс", tr_ru: "Я могу поднять ящик" },
            ],
          },
          negative: {
            label_ru: "❌ Не могу",
            rule_ru:
              '<b>cannot</b> (= can not) + база:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I cannot work</code> <span class="g-transcr">[ай кэнот уёк]</span></div>' +
              '<div><code>I cannot lift the box</code></div></div>',
            table: [
              { subj: "I", verb: "cannot work", example: "I cannot work, I am sick", transcr: "Ай кэнот уёк, ай эм сик", tr_ru: "Я не могу работать, я болен" },
              { subj: "I", verb: "cannot lift", example: "I cannot lift the box", transcr: "Ай кэнот лифт зэ бокс", tr_ru: "Я не могу поднять ящик" },
              { subj: "He", verb: "can not walk", example: "He can not walk", transcr: "Хи кэн нот уок", tr_ru: "Он не может идти" },
            ],
          },
          question: {
            label_ru: "❓ Можешь…? / Можно…?",
            rule_ru:
              '<b>Can</b> вперёд + кто + база:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Can you help me?</code> <span class="g-transcr">[кэн ю хэлп ми]</span></div>' +
              '<div><code>Can I rest?</code> <span class="g-transcr">[кэн ай рэст]</span></div></div>',
            table: [
              { subj: "Can", verb: "you help?", example: "Can you help me?", transcr: "Кэн ю хэлп ми?", tr_ru: "Можешь мне помочь?" },
              { subj: "Can", verb: "you call?", example: "Can you call a doctor?", transcr: "Кэн ю кол э доктэ?", tr_ru: "Можешь вызвать врача?" },
              { subj: "Can", verb: "I rest?", example: "Can I rest now?", transcr: "Кэн ай рэст нау?", tr_ru: "Можно мне отдохнуть сейчас?" },
            ],
          },
        },
        examples: [
          { en: "I can work today.", transcr: "Ай кэн уёк тудэй.", ru: "Я могу работать сегодня." },
          { en: "I cannot work. I am sick.", transcr: "Ай кэнот уёк. Ай эм сик.", ru: "Я не могу работать. Я болен." },
          { en: "My arm hurts.", transcr: "Май ам хётс.", ru: "У меня болит рука." },
          { en: "Can you help me?", transcr: "Кэн ю хэлп ми?", ru: "Можешь мне помочь?" },
          { en: "I can not lift the box.", transcr: "Ай кэн нот лифт зэ бокс.", ru: "Я не могу поднять ящик." },
          { en: "Can you call a doctor?", transcr: "Кэн ю кол э доктэ?", ru: "Можешь вызвать врача?" },
          { en: "My leg hurts. I cannot walk.", transcr: "Май лэг хётс. Ай кэнот уок.", ru: "У меня болит нога. Я не могу идти." },
          { en: "I am tired and hungry.", transcr: "Ай эм тайэд энд хангри.", ru: "Я устал и голоден." },
          { en: "Can I help you?", transcr: "Кэн ай хэлп ю?", ru: "Могу я помочь?" },
          { en: "He cannot lift the pallet.", transcr: "Хи кэнот лифт зэ пэлит.", ru: "Он не может поднять паллет." },
          { en: "I have a headache.", transcr: "Ай хэв э хэдэйк.", ru: "У меня болит голова." },
          { en: "Can you give me the medicine?", transcr: "Кэн ю гив ми зэ мэдсэн?", ru: "Можешь дать мне лекарство?" },
        ],
        simple_ru: {
          formula: '<b>can</b> = могу/умею, <b>cannot</b> = не могу. После — база глагола.<br>Просьба: <b>Can you…?</b><br><span class="g-transcr">I can work · I cannot work · Can you help?</span>',
          examples: [
            { en: "I can work.", transcr: "Ай кэн уёк.", ru: "Я могу (can) + работать (work)." },
            { en: "I cannot work today.", transcr: "Ай кэнот уёк тудэй.", ru: "Я не могу (cannot) + работать сегодня." },
          ],
        },
        ytQuery: "can can't ability английский для начинающих на русском",
      },

      words: [
        { e: "✋", en: "hand", transcr: "хэнд", ru: "рука (кисть)", pn: "/hænd/" },
        { e: "💪", en: "arm", transcr: "ам", ru: "рука", pn: "/ɑːm/" },
        { e: "🦵", en: "leg", transcr: "лэг", ru: "нога", pn: "/leɡ/" },
        { e: "🦶", en: "foot", transcr: "фут", ru: "ступня", pn: "/fʊt/" },
        { e: "👁️", en: "eye", transcr: "ай", ru: "глаз", pn: "/aɪ/" },
        { e: "👂", en: "ear", transcr: "иэ", ru: "ухо", pn: "/ɪə/" },
        { e: "🦷", en: "tooth", transcr: "тус", ru: "зуб", pn: "/tuːθ/" },
        { e: "☝️", en: "finger", transcr: "фингэ", ru: "палец", pn: "/ˈfɪŋɡə/" },
        { e: "👃", en: "nose", transcr: "ноуз", ru: "нос", pn: "/nəʊz/" },
        { e: "👄", en: "mouth", transcr: "маус", ru: "рот", pn: "/maʊθ/" },
        { e: "🤢", en: "sick", transcr: "сик", ru: "больной (тошнит)", pn: "/sɪk/" },
        { e: "🤒", en: "ill", transcr: "ил", ru: "больной", pn: "/ɪl/" },
        { e: "😖", en: "pain", transcr: "пэйн", ru: "боль", pn: "/peɪn/" },
        { e: "🤕", en: "hurt", transcr: "хёт", ru: "болеть (ранить)", pn: "/hɜːt/" },
        { e: "😷", en: "cough", transcr: "коф", ru: "кашель", pn: "/kɒf/" },
        { e: "🌡️", en: "fever", transcr: "фивэ", ru: "температура (жар)", pn: "/ˈfiːvə/" },
        { e: "🤯", en: "headache", transcr: "хэдэйк", ru: "головная боль", pn: "/ˈhedeɪk/" },
        { e: "💊", en: "medicine", transcr: "мэдсэн", ru: "лекарство", pn: "/ˈmedsən/" },
        { e: "👨‍⚕️", en: "doctor", transcr: "доктэ", ru: "врач", pn: "/ˈdɒktə/" },
        { e: "👩‍⚕️", en: "nurse", transcr: "нёс", ru: "медсестра", pn: "/nɜːs/" },
        { e: "🧴", en: "chemist", transcr: "кэмист", ru: "аптека", pn: "/ˈkemɪst/" },
        { e: "🩹", en: "plaster", transcr: "пластэ", ru: "пластырь", pn: "/ˈplɑːstə/" },
        { e: "😫", en: "tired", transcr: "тайэд", ru: "усталый", pn: "/ˈtaɪəd/" },
        { e: "🍽️", en: "hungry", transcr: "хангри", ru: "голодный", pn: "/ˈhʌŋɡri/" },
        { e: "🥤", en: "thirsty", transcr: "сёсти", ru: "хочу пить", pn: "/ˈθɜːsti/" },
        { e: "😊", en: "happy", transcr: "хэпи", ru: "счастливый", pn: "/ˈhæpi/" },
        { e: "👍", en: "better", transcr: "бэтэ", ru: "лучше", pn: "/ˈbetə/" },
        { e: "🚨", en: "emergency", transcr: "имёджэнси", ru: "экстренный случай", pn: "/ɪˈmɜːdʒənsi/" },
        { e: "🚑", en: "ambulance", transcr: "эмбьюлэнс", ru: "скорая помощь", pn: "/ˈæmbjələns/" },
        { e: "📅", en: "appointment", transcr: "эпойнтмэнт", ru: "приём (запись)", pn: "/əˈpɔɪntmənt/" },
      ],

      dialogue: [
        { s: "w", en: "Hello. I am sick. I cannot work.", transcr: "Хэлоу. Ай эм сик. Ай кэнот уёк.", ru: "Здравствуйте. Я болен. Не могу работать." },
        { s: "d", en: "Hello. What is the problem?", transcr: "Хэлоу. Уот из зэ проблэм?", ru: "Здравствуйте. В чём проблема?" },
        { s: "w", en: "My arm hurts. I have a fever.", transcr: "Май ам хётс. Ай хэв э фивэ.", ru: "У меня болит рука. У меня температура." },
        { s: "d", en: "Can you move your arm?", transcr: "Кэн ю мув ё ам?", ru: "Можете двигать рукой?" },
        { s: "w", en: "No, I cannot. It hurts.", transcr: "Ноу, ай кэнот. Ит хётс.", ru: "Нет, не могу. Болит." },
        { s: "d", en: "You have a cough. Take this medicine.", transcr: "Ю хэв э коф. Тэйк зис мэдсэн.", ru: "У вас кашель. Принимайте это лекарство." },
        { s: "w", en: "Thank you. Can I work tomorrow?", transcr: "Сэнк ю. Кэн ай уёк тэмороу?", ru: "Спасибо. Можно мне работать завтра?" },
        { s: "d", en: "No. You can not work today. Rest.", transcr: "Ноу. Ю кэн нот уёк тудэй. Рэст.", ru: "Нет. Сегодня работать нельзя. Отдыхайте." },
        { s: "w", en: "Can I have a plaster?", transcr: "Кэн ай хэв э пластэ?", ru: "Можно мне пластырь?" },
        { s: "d", en: "Yes. Here is a plaster.", transcr: "Йес. Хиэ из э пластэ.", ru: "Да. Вот пластырь." },
        { s: "w", en: "I am tired. Can I rest now?", transcr: "Ай эм тайэд. Кэн ай рэст нау?", ru: "Я устал. Можно отдохнуть сейчас?" },
        { s: "d", en: "Yes. You can rest now.", transcr: "Йес. Ю кэн рэст нау.", ru: "Да. Можете отдохнуть сейчас." },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ lift the box." (могу)', opts: ["can", "is", "am", "do"], c: 0, expl: "can + база = умею/могу.", hint_ru: "I can lift." },
        { q: '[COMPLETE] "I ___ work, I am sick." (не могу)', opts: ["cannot", "can", "do not", "am not"], c: 0, expl: "cannot = не могу.", hint_ru: "cannot." },
        { q: '[COMPLETE] "She can ___ the box." (база после can)', opts: ["lift", "lifts", "lifted", "lifting"], c: 0, expl: "После can — база (lift), без -s.", hint_ru: "can + база." },
        { q: '[TRANSLATE] "врач"', opts: ["doctor", "nurse", "medicine", "fever"], c: 0, expl: "doctor — врач.", hint_ru: "doctor." },
        { q: '[TRANSLATE] "больной"', opts: ["sick", "tired", "happy", "hungry"], c: 0, expl: "sick — больной.", hint_ru: "sick." },
        { q: "[CORRECT] Где правильно (просьба)?", opts: ["Can you help me?", "You can help me?", "Can you helps me?", "Do you can help?"], c: 0, expl: "Просьба: Can you + база?", hint_ru: "Can you…?" },
        { q: "[QUESTION] Как попросить вызвать врача?", opts: ["Can you call a doctor?", "Can you calls a doctor?", "You can call doctor?", "Do you can call?"], c: 0, expl: "Просьба: Can you + база (call).", hint_ru: "Can you call…?" },
        { q: "[NEGATIVE] Где «не могу»?", opts: ["I cannot work", "I can work", "Can I work?", "I work not"], c: 0, expl: "Отрицание: cannot / can not.", hint_ru: "cannot." },
        { q: "[LISTEN] My arm hurts.", opts: ["У меня болит рука.", "У меня болит нога.", "Я устал.", "Где врач?"], c: 0, expl: "arm — рука; hurts — болит." },
        { q: "[LISTEN] Can you call a doctor?", opts: ["Можешь вызвать врача?", "Можешь мне помочь?", "Где лекарство?", "Я болен."], c: 0, expl: "can you call — можешь вызвать; doctor — врач." },
        { q: "[GIST] Что болит у рабочего (по диалогу)?", opts: ["Рука", "Нога", "Голова", "Зуб"], c: 0, expl: "В диалоге: «My arm hurts».", hint_ru: "Смотрите вторую реплику рабочего." },
        { q: "[GIST] Можно рабочему работать завтра (по диалогу)?", opts: ["Нет, нужно отдыхать", "Да", "Только утром", "Не сказано"], c: 0, expl: "Врач: «You can not work today. Rest».", hint_ru: "Смотрите ответ врача." },
        { q: "[BUILD] Соберите: «Я не могу работать сегодня»", build: ["I","cannot","work","today"], expl: "I cannot work today — Я не могу работать сегодня.", hint_ru: "Я не могу работать сегодня." },
      ],

      everyday: {
        title_ru: "У врача, совет и экстренная помощь",
        phrases: [
          { en: "I feel sick.", transcr: "Ай фил сик.", ru: "Мне плохо / тошнит." },
          { en: "I need a doctor.", transcr: "Ай нид э доктэ.", ru: "Мне нужен врач." },
          { en: "Call an ambulance!", transcr: "Кол эн эмбьюлэнс!", ru: "Вызовите скорую!" },
          { en: "It is an emergency.", transcr: "Ит из эн имёджэнси.", ru: "Это экстренный случай." },
          { en: "Where is the chemist?", transcr: "Уэа из зэ кэмист?", ru: "Где аптека?" },
          { en: "Why don't you see a doctor?", transcr: "Уай доунт ю си э доктэ?", ru: "Почему бы тебе не сходить к врачу? (совет)" },
          { en: "Why don't you rest?", transcr: "Уай доунт ю рэст?", ru: "Почему бы тебе не отдохнуть? (совет)" },
          { en: "You should drink water.", transcr: "Ю шуд дринк уотэ.", ru: "Тебе стоит попить воды. (совет)" },
        ],
      },
    },
    {
      id: 15,
      mod: 8,
      title_ru: "Свободное время: что я люблю",
      cefr: "want · like / love / hate + -ing · leisure",

      grammar: {
        title_ru: "Нравится / хочу: like · love · hate · want",
        intro_ru:
          '<div style="line-height:1.6">Что нравится / хочется:<br>👉 <b>like / love / hate</b> + предмет ИЛИ глагол с <b>-ing</b>: «I <b>like</b> football», «I <b>love</b> <b>picking</b>», «I <b>hate</b> the cold».<br>👉 <b>want</b> <span class="g-transcr">[уонт]</span> — «хочу» + предмет: «I <b>want</b> a break».<br>👉 Вопрос / отрицание — через <b>do</b>: «<b>Do</b> you like…?», «I <b>do not</b> like…».</div>',
        cultural_ru:
          'В английском сила чувства — три слова:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:6px">' +
          '<div>😍 <b>love</b> <span class="g-transcr">[лав]</span> — обожаю</div>' +
          '<div>🙂 <b>like</b> <span class="g-transcr">[лайк]</span> — нравится</div>' +
          '<div>😣 <b>hate</b> <span class="g-transcr">[хэйт]</span> — ненавижу</div></div>' +
          '<div style="margin-top:6px">После них — предмет (football) или глагол с <b>-ing</b> (picking). <b>want</b> = «хочу» прямо; <b>would like</b> (урок 10) — то же, но вежливее.</div>',
        note_ru:
          '⚠️ После <b>like / love / hate</b> — предмет ИЛИ глагол с <b>-ing</b>, не голый глагол: «I like <b>picking</b>» (не «I like pick»). Вопрос и отрицание — через <b>do / do not</b>: «<b>Do</b> you like…?», «I <b>do not</b> like…».',
        forms: {
          positive: {
            label_ru: "✅ Нравится / хочу",
            rule_ru:
              '<b>like / love / hate</b> + предмет или <b>-ing</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I love football</code> <span class="g-transcr">[ай лав футбол]</span></div>' +
              '<div><code>I like picking</code> <span class="g-transcr">[ай лайк пикинг]</span></div></div>',
            table: [
              { subj: "I", verb: "love", example: "I love football", transcr: "Ай лав футбол", tr_ru: "Я люблю футбол" },
              { subj: "I", verb: "like", example: "I like picking", transcr: "Ай лайк пикинг", tr_ru: "Мне нравится собирать" },
              { subj: "I", verb: "hate", example: "I hate the cold", transcr: "Ай хэйт зэ коулд", tr_ru: "Я ненавижу холод" },
              { subj: "I", verb: "want", example: "I want a break", transcr: "Ай уонт э брэйк", tr_ru: "Я хочу перерыв" },
            ],
          },
          negative: {
            label_ru: "❌ Не нравится",
            rule_ru:
              '<b>do not</b> + like / love / hate:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I do not like films</code></div>' +
              '<div><code>I do not like the cold</code></div></div>',
            table: [
              { subj: "I", verb: "do not like", example: "I do not like films", transcr: "Ай ду нот лайк филмз", tr_ru: "Мне не нравятся фильмы" },
              { subj: "I", verb: "do not like", example: "I do not like the cold", transcr: "Ай ду нот лайк зэ коулд", tr_ru: "Я не люблю холод" },
              { subj: "She", verb: "does not like", example: "She does not like cooking", transcr: "Ши даз нот лайк кукинг", tr_ru: "Ей не нравится готовить" },
            ],
          },
          question: {
            label_ru: "❓ Нравится…?",
            rule_ru:
              '<b>Do</b> + you + like / love / hate:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Do you like football?</code> <span class="g-transcr">[ду ю лайк футбол]</span></div>' +
              '<div><code>Do you like music?</code></div></div>',
            table: [
              { subj: "Do", verb: "you like…?", example: "Do you like football?", transcr: "Ду ю лайк футбол?", tr_ru: "Ты любишь футбол?" },
              { subj: "Do", verb: "you like…?", example: "Do you like music?", transcr: "Ду ю лайк мьюзик?", tr_ru: "Тебе нравится музыка?" },
              { subj: "What", verb: "do you want?", example: "What do you want?", transcr: "Уот ду ю уонт?", tr_ru: "Что ты хочешь?" },
            ],
          },
        },
        examples: [
          { en: "I like football.", transcr: "Ай лайк футбол.", ru: "Мне нравится футбол." },
          { en: "I love music.", transcr: "Ай лав мьюзик.", ru: "Я люблю музыку." },
          { en: "I hate the cold.", transcr: "Ай хэйт зэ коулд.", ru: "Я ненавижу холод." },
          { en: "I like picking.", transcr: "Ай лайк пикинг.", ru: "Мне нравится собирать." },
          { en: "I do not like films.", transcr: "Ай ду нот лайк филмз.", ru: "Мне не нравятся фильмы." },
          { en: "Do you like football?", transcr: "Ду ю лайк футбол?", ru: "Ты любишь футбол?" },
          { en: "I want a break.", transcr: "Ай уонт э брэйк.", ru: "Я хочу перерыв." },
          { en: "I want tea.", transcr: "Ай уонт ти.", ru: "Я хочу чай." },
          { en: "We love cooking.", transcr: "Уи лав кукинг.", ru: "Мы любим готовить." },
          { en: "I hate cleaning.", transcr: "Ай хэйт клинин.", ru: "Я ненавижу убирать." },
          { en: "Do you like music?", transcr: "Ду ю лайк мьюзик?", ru: "Тебе нравится музыка?" },
          { en: "We like sport.", transcr: "Уи лайк спот.", ru: "Мы любим спорт." },
        ],
        simple_ru: {
          formula: '<b>like / love / hate</b> + предмет или глагол с <b>-ing</b>. <b>want</b> = хочу + предмет.<br>Вопрос: <b>Do you like…?</b><br><span class="g-transcr">I love football · I like picking · I want tea</span>',
          examples: [
            { en: "I love football.", transcr: "Ай лав футбол.", ru: "Я люблю (love) + футбол (football)." },
            { en: "I like picking.", transcr: "Ай лайк пикинг.", ru: "Мне нравится (like) + собирать (picking)." },
          ],
        },
        ytQuery: "like love hate ing want английский для начинающих на русском",
      },

      words: [
        { e: "🎵", en: "music", transcr: "мьюзик", ru: "музыка", pn: "/ˈmjuːzɪk/" },
        { e: "⚽", en: "football", transcr: "футбол", ru: "футбол", pn: "/ˈfʊtbɔːl/" },
        { e: "🏅", en: "sport", transcr: "спот", ru: "спорт", pn: "/spɔːt/" },
        { e: "🎬", en: "film", transcr: "филм", ru: "фильм", pn: "/fɪlm/" },
        { e: "🎮", en: "game", transcr: "гейм", ru: "игра", pn: "/ɡeɪm/" },
        { e: "🎶", en: "song", transcr: "сонг", ru: "песня", pn: "/sɒŋ/" },
        { e: "💃", en: "dance", transcr: "данс", ru: "танец", pn: "/dɑːns/" },
        { e: "🏊", en: "swim", transcr: "суим", ru: "плавать", pn: "/swɪm/" },
        { e: "🏃", en: "run", transcr: "ран", ru: "бегать", pn: "/rʌn/" },
        { e: "🍳", en: "cook", transcr: "кук", ru: "готовить", pn: "/kʊk/" },
        { e: "🎉", en: "party", transcr: "пати", ru: "вечеринка", pn: "/ˈpɑːti/" },
        { e: "🏖️", en: "holiday", transcr: "холидэй", ru: "отпуск/каникулы", pn: "/ˈhɒlɪdeɪ/" },
        { e: "🎨", en: "hobby", transcr: "хоби", ru: "хобби", pn: "/ˈhɒbi/" },
        { e: "🖼️", en: "picture", transcr: "пикчэ", ru: "картинка/фото", pn: "/ˈpɪktʃə/" },
        { e: "📻", en: "radio", transcr: "рэйдиоу", ru: "радио", pn: "/ˈreɪdiəʊ/" },
        { e: "📰", en: "news", transcr: "ньюз", ru: "новости", pn: "/njuːz/" },
        { e: "📖", en: "story", transcr: "стори", ru: "история (рассказ)", pn: "/ˈstɔːri/" },
        { e: "🙏", en: "cheers", transcr: "чиэз", ru: "спасибо/пока (брит.)", pn: "/tʃɪəz/" },
        { e: "😍", en: "lovely", transcr: "лавли", ru: "прекрасно (брит.)", pn: "/ˈlʌvli/" },
        { e: "👫", en: "mate", transcr: "мэйт", ru: "друг/приятель (брит.)", pn: "/meɪt/" },
        { e: "🎈", en: "fun", transcr: "фан", ru: "весело", pn: "/fʌn/" },
        { e: "😑", en: "bored", transcr: "бод", ru: "скучно", pn: "/bɔːd/" },
        { e: "😓", en: "busy", transcr: "бизи", ru: "занятый", pn: "/ˈbɪzi/" },
        { e: "⭐", en: "favourite", transcr: "фэйврит", ru: "любимый", pn: "/ˈfeɪvrɪt/" },
        { e: "🆓", en: "free", transcr: "фри", ru: "свободный", pn: "/friː/" },
        { e: "🙂", en: "nice", transcr: "найс", ru: "приятный/хороший", pn: "/naɪs/" },
        { e: "🌟", en: "great", transcr: "грэйт", ru: "отлично", pn: "/ɡreɪt/" },
        { e: "😌", en: "relax", transcr: "рилэкс", ru: "отдыхать (расслабиться)", pn: "/rɪˈlæks/" },
        { e: "😊", en: "enjoy", transcr: "инджой", ru: "наслаждаться", pn: "/ɪnˈdʒɔɪ/" },
        { e: "😄", en: "joke", transcr: "джоук", ru: "шутка", pn: "/dʒəʊk/" },
      ],

      dialogue: [
        { s: "m", en: "Hello! Do you like football?", transcr: "Хэлоу! Ду ю лайк футбол?", ru: "Привет! Любишь футбол?" },
        { s: "w", en: "Yes, I love football. And you?", transcr: "Йес, ай лав футбол. Энд ю?", ru: "Да, я обожаю футбол. А ты?" },
        { s: "m", en: "I like music. I have a radio.", transcr: "Ай лайк мьюзик. Ай хэв э рэйдиоу.", ru: "Мне нравится музыка. У меня есть радио." },
        { s: "w", en: "Lovely! What do you do at the weekend?", transcr: "Лавли! Уот ду ю ду эт зэ уикэнд?", ru: "Здорово! Что ты делаешь на выходных?" },
        { s: "m", en: "I cook and rest. I hate working on Sunday.", transcr: "Ай кук энд рэст. Ай хэйт уёкин он сандэй.", ru: "Готовлю и отдыхаю. Ненавижу работать в воскресенье." },
        { s: "w", en: "I want a break now.", transcr: "Ай уонт э брэйк нау.", ru: "Я хочу перерыв сейчас." },
        { s: "m", en: "Do you like films?", transcr: "Ду ю лайк филмз?", ru: "Ты любишь фильмы?" },
        { s: "w", en: "Yes, I like films. And music.", transcr: "Йес, ай лайк филмз. Энд мьюзик.", ru: "Да, люблю фильмы. И музыку." },
        { s: "m", en: "Do you want tea?", transcr: "Ду ю уонт ти?", ru: "Хочешь чаю?" },
        { s: "w", en: "Yes, please. Cheers, mate!", transcr: "Йес, плиз. Чиэз, мэйт!", ru: "Да, пожалуйста. Спасибо, друг!" },
        { s: "m", en: "Time to work now.", transcr: "Тайм ту уёк нау.", ru: "Пора работать." },
        { s: "w", en: "Yes. I am happy now.", transcr: "Йес. Ай эм хэпи нау.", ru: "Да. Я доволен." },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ football." (люблю)', opts: ["love", "am", "is", "do"], c: 0, expl: "love — люблю.", hint_ru: "I love football." },
        { q: '[COMPLETE] "I like ___." (нравится собирать)', opts: ["picking", "pick", "picked", "picks"], c: 0, expl: "like + -ing: picking.", hint_ru: "like + -ing." },
        { q: '[COMPLETE] "Do you ___ films?" (нравятся)', opts: ["like", "am", "is", "are"], c: 0, expl: "Do you like…? (база like).", hint_ru: "Do you like…?" },
        { q: '[TRANSLATE] "музыка"', opts: ["music", "film", "game", "song"], c: 0, expl: "music — музыка.", hint_ru: "music." },
        { q: '[TRANSLATE] "хочу"', opts: ["want", "like", "love", "hate"], c: 0, expl: "want — хотеть.", hint_ru: "want." },
        { q: "[CORRECT] Где правильно (нравится делать)?", opts: ["I like cooking", "I like cook", "I am like cooking", "I like to cooking"], c: 0, expl: "like + -ing: cooking.", hint_ru: "like + -ing." },
        { q: "[QUESTION] Как спросить «ты любишь футбол?»", opts: ["Do you like football?", "You like football?", "Like you football?", "Are you like football?"], c: 0, expl: "Do you like…?", hint_ru: "Do you like…?" },
        { q: "[NEGATIVE] Где «не люблю холод»?", opts: ["I do not like the cold", "I not like the cold", "I am not like the cold", "Do not I like the cold"], c: 0, expl: "Отрицание: do not + like.", hint_ru: "do not like." },
        { q: "[LISTEN] I love music.", opts: ["Я люблю музыку.", "Я люблю футбол.", "Я хочу чай.", "Мне нравятся фильмы."], c: 0, expl: "love — люблю; music — музыка." },
        { q: "[LISTEN] Do you want tea?", opts: ["Хочешь чаю?", "Любишь чай?", "Где чай?", "Это твой чай?"], c: 0, expl: "do you want — хочешь; tea — чай." },
        { q: "[GIST] Что любит рабочий (по диалогу)?", opts: ["Футбол", "Танцы", "Рыбалку", "Сон"], c: 0, expl: "В диалоге: «I love football».", hint_ru: "Смотрите вторую реплику." },
        { q: "[GIST] Что предложил мейт в конце (по диалогу)?", opts: ["Чай", "Кофе", "Фильм", "Игру"], c: 0, expl: "В диалоге: «Do you want tea?»", hint_ru: "Смотрите конец диалога." },
        { q: "[BUILD] Соберите: «Я люблю музыку»", build: ["I","love","music"], expl: "I love music — Я люблю музыку.", hint_ru: "Я люблю музыку." },
      ],

      everyday: {
        title_ru: "Перерыв, общение и заказ в столовой",
        phrases: [
          { en: "Do you want a cup of tea?", transcr: "Ду ю уонт э кап ов ти?", ru: "Хочешь чашку чая?" },
          { en: "Can I have a tea, please?", transcr: "Кэн ай хэв э ти, плиз?", ru: "Можно мне чай, пожалуйста? (в столовой)" },
          { en: "Can I have a sandwich, please?", transcr: "Кэн ай хэв э сэнуич, плиз?", ru: "Можно мне сэндвич, пожалуйста?" },
          { en: "Anything else?", transcr: "Энисинг элс?", ru: "Что-нибудь ещё? (спрашивает кассир)" },
          { en: "That is all, thank you.", transcr: "Зэт из ол, сэнк ю.", ru: "Это всё, спасибо." },
          { en: "Cheers, mate!", transcr: "Чиэз, мэйт!", ru: "Спасибо / пока, друг! (брит.)" },
          { en: "That is lovely.", transcr: "Зэт из лавли.", ru: "Это прекрасно. (брит.)" },
          { en: "I like working here.", transcr: "Ай лайк уёкин хиэ.", ru: "Мне нравится здесь работать." },
          { en: "See you tomorrow!", transcr: "Си ю тэмороу!", ru: "Увидимся завтра!" },
        ],
      },
    },
    {
      id: 16,
      mod: 9,
      title_ru: "Планы и погода: be going to",
      cefr: "A2 · be going to (future) · weather",

      grammar: {
        title_ru: "План и прогноз: am / is / are + going to + глагол",
        intro_ru:
          '<div style="line-height:1.6">Так сказать про план — ошибка:<br>❌ <b>I go to work tomorrow</b><br>Правильно:<br>✅ <b>I am going to work tomorrow</b> <span class="g-transcr">[ай эм гоуинг ту уёк тэмороу]</span> (я собираюсь работать завтра).<br>👉 План на будущее или прогноз = <b>am / is / are</b> + <b>going to</b> + глагол.</div>',
        cultural_ru:
          'В русском «собираюсь» — это намерение. В английском <b>going to</b> — и план, и прогноз (когда уже видно, что будет):' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>План:</b> I am going to work <span class="g-transcr">[ай эм гоуинг ту уёк]</span></div>' +
          '<div><b>Прогноз:</b> It is going to rain <span class="g-transcr">[ит из гоуинг ту рэйн]</span></div></div>' +
          '<div style="margin-top:6px">⚠️ Не путай: <b>going to the field</b> <span class="g-transcr">[гоуинг ту зэ филд]</span> — иду В поле (место). <b>going to work</b> <span class="g-transcr">[гоуинг ту уёк]</span> — собираюсь работать (план). После going to + <b>место</b> = идти; + <b>глагол</b> = план.</div>',
        note_ru:
          '⚠️ После <b>going to</b> — глагол в простой форме (база), без -ing и без -s: <b>going to work</b>, не «going to working». И не забывай <b>am/is/are</b>: <b>I am going to</b>, <b>he is going to</b>, <b>we are going to</b>.',
        forms: {
          positive: {
            label_ru: "✅ Утверждение",
            rule_ru:
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I am going to</code> + глагол</div>' +
              '<div><code>He/She/It is going to</code> + глагол</div>' +
              '<div><code>You/We/They are going to</code> + глагол</div>' +
              '<div><code>I am going to work</code> <span class="g-transcr">[ай эм гоуинг ту уёк]</span></div></div>',
            table: [
              { subj: "I", verb: "am going to", example: "I am going to work", transcr: "Ай эм гоуинг ту уёк", tr_ru: "Я собираюсь работать" },
              { subj: "It", verb: "is going to", example: "It is going to rain", transcr: "Ит из гоуинг ту рэйн", tr_ru: "Сейчас пойдёт дождь (прогноз)" },
              { subj: "We", verb: "are going to", example: "We are going to start", transcr: "Уи ар гоуинг ту старт", tr_ru: "Мы собираемся начать" },
              { subj: "They", verb: "are going to", example: "They are going to pick", transcr: "Зэй ар гоуинг ту пик", tr_ru: "Они собираются собирать" },
            ],
          },
          negative: {
            label_ru: "❌ Отрицание",
            rule_ru:
              'После <b>am/is/are</b> ставим <b>not</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I am not going to rest</code></div>' +
              '<div><code>It is not going to rain</code></div></div>',
            table: [
              { subj: "I", verb: "am not going to", example: "I am not going to rest", transcr: "Ай эм нот гоуинг ту рэст", tr_ru: "Я не собираюсь отдыхать" },
              { subj: "He", verb: "is not going to", example: "He is not going to drive", transcr: "Хи из нот гоуинг ту драйв", tr_ru: "Он не собирается ехать" },
              { subj: "We", verb: "are not going to", example: "We are not going to wait", transcr: "Уи ар нот гоуинг ту уэйт", tr_ru: "Мы не собираемся ждать" },
            ],
          },
          question: {
            label_ru: "❓ Вопрос",
            rule_ru:
              '<b>am/is/are</b> ставим ВПЕРЁД:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Are you going to work?</code> <span class="g-transcr">[ар ю гоуинг ту уёк]</span></div>' +
              '<div><code>Is it going to rain?</code> <span class="g-transcr">[из ит гоуинг ту рэйн]</span></div></div>',
            table: [
              { subj: "Are", verb: "you", example: "Are you going to work?", transcr: "Ар ю гоуинг ту уёк?", tr_ru: "Ты собираешься работать?" },
              { subj: "Is", verb: "it", example: "Is it going to rain?", transcr: "Из ит гоуинг ту рэйн?", tr_ru: "Будет дождь?" },
              { subj: "What", verb: "are", example: "What are you going to do?", transcr: "Уот ар ю гоуинг ту ду?", tr_ru: "Что ты собираешься делать?" },
            ],
          },
        },
        examples: [
          { en: "It is going to rain.", transcr: "Ит из гоуинг ту рэйн.", ru: "Сейчас пойдёт дождь." },
          { en: "I am going to work in the shed.", transcr: "Ай эм гоуинг ту уёк ин зэ шед.", ru: "Я буду работать в сарае." },
          { en: "It is going to be cold tomorrow.", transcr: "Ит из гоуинг ту би коулд тэмороу.", ru: "Завтра будет холодно." },
          { en: "We are going to pick the berries.", transcr: "Уи ар гоуинг ту пик зэ бэриз.", ru: "Мы будем собирать ягоды." },
          { en: "Are you going to start early?", transcr: "Ар ю гоуинг ту старт ёли?", ru: "Ты собираешься начать рано?" },
          { en: "It is not going to be sunny.", transcr: "Ит из нот гоуинг ту би сани.", ru: "Солнечно не будет." },
        ],
        simple_ru: {
          formula: 'Планы и прогноз → <b>am / is / are</b> + <b>going to</b> + глагол.<br><span class="g-transcr">I am going to work · It is going to rain</span>',
          examples: [
            { en: "I am going to work.", transcr: "Ай эм гоуинг ту уёк.", ru: "Я (I) + am going to + работать (work) = я собираюсь работать." },
            { en: "It is going to rain.", transcr: "Ит из гоуинг ту рэйн.", ru: "Оно (It) + is going to + дождь (rain) = сейчас пойдёт дождь." },
          ],
        },
        ytQuery: "be going to future plans английский для начинающих погода",
      },

      words: [
        { e: "🌦️", en: "weather", transcr: "уэзэ", ru: "погода", pn: "/ˈweðə/" },
        { e: "📋", en: "forecast", transcr: "фокаст", ru: "прогноз погоды", pn: "/ˈfɔːkɑːst/" },
        { e: "☀️", en: "sun", transcr: "сан", ru: "солнце", pn: "/sʌn/" },
        { e: "🌞", en: "sunny", transcr: "сани", ru: "солнечно", pn: "/ˈsʌni/" },
        { e: "☁️", en: "cloud", transcr: "клауд", ru: "облако, туча", pn: "/klaʊd/" },
        { e: "🌥️", en: "cloudy", transcr: "клауди", ru: "облачно", pn: "/ˈklaʊdi/" },
        { e: "💨", en: "wind", transcr: "уинд", ru: "ветер", pn: "/wɪnd/" },
        { e: "🌬️", en: "windy", transcr: "уинди", ru: "ветрено", pn: "/ˈwɪndi/" },
        { e: "🌧️", en: "rainy", transcr: "рэйни", ru: "дождливо", pn: "/ˈreɪni/" },
        { e: "⛈️", en: "storm", transcr: "стом", ru: "буря, гроза", pn: "/stɔːm/" },
        { e: "🌩️", en: "lightning", transcr: "лайтнинг", ru: "молния", pn: "/ˈlaɪtnɪŋ/" },
        { e: "🌫️", en: "fog", transcr: "фог", ru: "туман", pn: "/fɒɡ/" },
        { e: "🌁", en: "foggy", transcr: "фоги", ru: "туманно", pn: "/ˈfɒɡi/" },
        { e: "🌁", en: "mist", transcr: "мист", ru: "дымка, лёгкий туман", pn: "/mɪst/" },
        { e: "❄️", en: "frost", transcr: "фрост", ru: "мороз, иней", pn: "/frɒst/" },
        { e: "🧊", en: "ice", transcr: "айс", ru: "лёд", pn: "/aɪs/" },
        { e: "🌨️", en: "snow", transcr: "сноу", ru: "снег", pn: "/snəʊ/" },
        { e: "🌡️", en: "warm", transcr: "уом", ru: "тёплый", pn: "/wɔːm/" },
        { e: "🥶", en: "freeze", transcr: "фриз", ru: "замерзать", pn: "/friːz/" },
        { e: "🌡️", en: "degree", transcr: "дигри", ru: "градус", pn: "/dɪˈɡriː/" },
        { e: "🍃", en: "breeze", transcr: "бриз", ru: "лёгкий ветер", pn: "/briːz/" },
        { e: "🍂", en: "season", transcr: "сизн", ru: "сезон, время года", pn: "/ˈsiːzn/" },
        { e: "🌱", en: "spring", transcr: "спринг", ru: "весна", pn: "/sprɪŋ/" },
        { e: "🏖️", en: "summer", transcr: "самэ", ru: "лето", pn: "/ˈsʌmə/" },
        { e: "🍁", en: "autumn", transcr: "отэм", ru: "осень", pn: "/ˈɔːtəm/" },
        { e: "⛄", en: "winter", transcr: "уинтэ", ru: "зима", pn: "/ˈwɪntə/" },
        { e: "🟫", en: "mud", transcr: "мад", ru: "грязь", pn: "/mʌd/" },
        { e: "🪴", en: "soil", transcr: "сойл", ru: "почва, земля", pn: "/sɔɪl/" },
        { e: "💧", en: "puddle", transcr: "падл", ru: "лужа", pn: "/ˈpʌdl/" },
        { e: "🌾", en: "harvest", transcr: "хавист", ru: "урожай, сбор урожая", pn: "/ˈhɑːvɪst/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! What is the weather like today?", transcr: "Гуд монинг! Уот из зэ уэзэ лайк тудэй?", ru: "Доброе утро! Какая сегодня погода?" },
        { s: "w", en: "It is cold and windy now.", transcr: "Ит из коулд энд уинди нау.", ru: "Сейчас холодно и ветрено." },
        { s: "m", en: "Look at the clouds. It is going to rain.", transcr: "Лук эт зэ клаудз. Ит из гоуинг ту рэйн.", ru: "Посмотри на тучи. Сейчас пойдёт дождь." },
        { s: "w", en: "Are we going to work in the field?", transcr: "Ар уи гоуинг ту уёк ин зэ филд?", ru: "Мы будем работать в поле?" },
        { s: "m", en: "No. We are going to work in the shed.", transcr: "Ноу. Уи ар гоуинг ту уёк ин зэ шед.", ru: "Нет. Будем работать в сарае." },
        { s: "w", en: "Good. The field is full of mud.", transcr: "Гуд. Зэ филд из фул ов мад.", ru: "Хорошо. Поле всё в грязи." },
        { s: "m", en: "Tomorrow it is going to be sunny.", transcr: "Тэмороу ит из гоуинг ту би сани.", ru: "Завтра будет солнечно." },
        { s: "w", en: "Is it going to be warm?", transcr: "Из ит гоуинг ту би уом?", ru: "Будет тепло?" },
        { s: "m", en: "Yes. The forecast is good.", transcr: "Йес. Зэ фокаст из гуд.", ru: "Да. Прогноз хороший." },
        { s: "w", en: "We are going to pick the berries.", transcr: "Уи ар гоуинг ту пик зэ бэриз.", ru: "Будем собирать ягоды." },
        { s: "m", en: "Yes. The harvest is ready.", transcr: "Йес. Зэ хавист из рэди.", ru: "Да. Урожай готов." },
        { s: "w", en: "I am going to start early tomorrow.", transcr: "Ай эм гоуинг ту старт ёли тэмороу.", ru: "Я начну рано завтра." },
      ],

      quiz: [
        { q: '[COMPLETE] "It ___ going to rain." (оно/it)', opts: ["is", "am", "are", "be"], c: 0, expl: "it → is. Прогноз = am/is/are + going to + глагол.", hint_ru: "Сейчас пойдёт дождь." },
        { q: '[COMPLETE] "We ___ going to work." (мы)', opts: ["are", "am", "is", "be"], c: 0, expl: "you/we/they → are going to.", hint_ru: "Мы собираемся работать." },
        { q: '[COMPLETE] "I am going to ___ the berries." (собирать)', opts: ["pick", "picks", "picking", "picked"], c: 0, expl: "После going to — глагол в базовой форме: pick.", hint_ru: "Я буду собирать ягоды." },
        { q: '[TRANSLATE] "погода"', opts: ["weather", "forecast", "season", "harvest"], c: 0, expl: "weather — погода.", hint_ru: "weather." },
        { q: '[TRANSLATE] "снег"', opts: ["snow", "rain", "frost", "wind"], c: 0, expl: "snow — снег.", hint_ru: "snow." },
        { q: "[NEGATIVE] Где отрицание?", opts: ["It is going to rain", "It is not going to rain", "Is it going to rain?", "It going to rain"], c: 1, expl: "Отрицание = am/is/are + not + going to + глагол.", hint_ru: "Дождя не будет." },
        { q: '[QUESTION] "___ you going to start early?"', opts: ["Are", "Is", "Am", "Do"], c: 0, expl: "you → Are в начале вопроса.", hint_ru: "Ты собираешься начать рано?" },
        { q: "[CORRECT] Где правильно?", opts: ["I am going to work", "I going to work", "I am going to working", "I am go to work"], c: 0, expl: "going to + база глагола: I am going to work.", hint_ru: "Я собираюсь работать." },
        { q: "[LISTEN] It is going to be sunny.", opts: ["Будет солнечно.", "Идёт дождь.", "Сейчас холодно.", "Дует сильный ветер."], c: 0, expl: "sunny — солнечно; going to be = будет.", hint_ru: "" },
        { q: '[TRANSLATE] "Завтра будет холодно"', opts: ["It is going to be cold tomorrow", "It is cold tomorrow", "It was cold tomorrow", "Tomorrow is cold"], c: 0, expl: "Прогноз = is going to be + cold + tomorrow.", hint_ru: "Прогноз на завтра." },
        { q: "[GIST] Какая погода будет завтра (по диалогу)?", opts: ["Солнечно и тепло", "Дождь и ветер", "Снег", "Туман"], c: 0, expl: 'Менеджер говорит: «Tomorrow it is going to be sunny» и «Is it going to be warm? — The forecast is good».', hint_ru: "Слушайте про завтра." },
        { q: "[BUILD] Соберите: «Сейчас пойдёт дождь»", build: ["It", "is", "going", "to", "rain"], expl: "It is going to rain — Сейчас пойдёт дождь. am/is/are + going to + глагол.", hint_ru: "Прогноз: дождь." },
      ],

      everyday: {
        title_ru: "Говорить про погоду и планы",
        phrases: [
          { en: "What is the weather like today?", transcr: "Уот из зэ уэзэ лайк тудэй?", ru: "Какая сегодня погода?" },
          { en: "It is going to rain.", transcr: "Ит из гоуинг ту рэйн.", ru: "Сейчас пойдёт дождь." },
          { en: "Is it going to be cold tomorrow?", transcr: "Из ит гоуинг ту би коулд тэмороу?", ru: "Завтра будет холодно?" },
          { en: "Take your coat. It is windy.", transcr: "Тэйк ё коут. Ит из уинди.", ru: "Возьми куртку. Ветрено." },
          { en: "The forecast is good for tomorrow.", transcr: "Зэ фокаст из гуд фо тэмороу.", ru: "Прогноз на завтра хороший." },
          { en: "We are going to finish early today.", transcr: "Уи ар гоуинг ту финиш ёли тудэй.", ru: "Сегодня мы закончим рано." },
        ],
      },
    },

    {
      id: 17,
      mod: 9,
      title_ru: "Сравнение: тяжелее, самый сильный",
      cefr: "A2 · comparatives & superlatives · describing",

      grammar: {
        title_ru: "Сравнить: -er + than / the -est / more · most",
        intro_ru:
          '<div style="line-height:1.6">Сравнить два предмета — ошибка:<br>❌ <b>This crate is more heavy</b><br>Правильно:<br>✅ <b>This crate is heavier</b> <span class="g-transcr">[зис крэйт из хэвиэ]</span> (этот ящик тяжелее).<br>👉 Короткое слово + <b>-er</b> + <b>than</b> (чем). Длинное слово + <b>more</b>. «Самый» = <b>the</b> + <b>-est</b>.</div>',
        cultural_ru:
          'В русском «тяжелее / самый сильный» — одно слово. В английском два пути по длине слова:' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>Короткое:</b> heavy → heavier <span class="g-transcr">[хэви → хэвиэ]</span></div>' +
          '<div><b>Длинное:</b> expensive → more expensive <span class="g-transcr">[икспэнсив → мор икспэнсив]</span></div>' +
          '<div><b>Самый:</b> the strongest <span class="g-transcr">[зэ стронгэст]</span></div>' +
          '<div><b>«чем» = than:</b> taller than Ali <span class="g-transcr">[толэ зэн Али]</span></div></div>' +
          '<div style="margin-top:6px">📊 <b>-er + than</b> — сравниваем <b>ДВА</b> (heavier <b>than</b>). <b>the …-est</b> — самый из <b>ВСЕХ</b> (без than).</div>',
        note_ru:
          '⚠️ Правописание короткого слова + <b>-er/-est</b>:<br>' +
          '• удвоить букву: <b>big → bigger</b> <span class="g-transcr">[биг → бигэ]</span>, <b>thin → thinner</b> <span class="g-transcr">[син → синэ]</span><br>' +
          '• <b>-y → -ier</b>: <b>heavy → heavier</b> <span class="g-transcr">[хэви → хэвиэ]</span>, <b>easy → easier</b> <span class="g-transcr">[изи → изиэ]</span><br>' +
          '• кончается на <b>-e</b> → просто <b>+r</b>: <b>wide → wider</b> <span class="g-transcr">[уайд → уайдэ]</span><br>' +
          '⭐ Особые формы: <b>good → better → the best</b> <span class="g-transcr">[гуд → бэтэ → зэ бэст]</span>, <b>bad → worse → the worst</b> <span class="g-transcr">[бэд → уёс → зэ уёст]</span>.<br>' +
          '❌ Не говори «more big» или «more heavy» — у короткого слова только <b>-er</b>.',
        forms: {
          positive: {
            label_ru: "📏 Короткое: -er",
            rule_ru:
              'Короткое слово + <b>-er</b> + <b>than</b> (чем):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>tall → taller</code></div>' +
              '<div><code>strong → stronger</code></div>' +
              '<div><code>Tom is taller than Ali</code> <span class="g-transcr">[том из толэ зэн Али]</span></div></div>',
            table: [
              { subj: "Tom", verb: "is taller", example: "Tom is taller than Ali", transcr: "Том из толэ зэн Али", tr_ru: "Том выше, чем Али" },
              { subj: "This crate", verb: "is heavier", example: "This crate is heavier than the box", transcr: "Зис крэйт из хэвиэ зэн зэ бокс", tr_ru: "Этот ящик тяжелее коробки" },
              { subj: "This van", verb: "is slower", example: "This van is slower than the lorry", transcr: "Зис вэн из слоуэ зэн зэ лори", tr_ru: "Этот фургон медленнее грузовика" },
              { subj: "The shed", verb: "is colder", example: "The shed is colder than the field", transcr: "Зэ шед из колдэ зэн зэ филд", tr_ru: "В сарае холоднее, чем в поле" },
            ],
          },
          negative: {
            label_ru: "📐 Длинное: more",
            rule_ru:
              'Длинное слово (2+ части) + <b>more</b> / <b>the most</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>expensive → more expensive</code></div>' +
              '<div><code>difficult → the most difficult</code></div></div>',
            table: [
              { subj: "This shop", verb: "is more expensive", example: "This shop is more expensive", transcr: "Зис шоп из мор икспэнсив", tr_ru: "Этот магазин дороже" },
              { subj: "This work", verb: "is more dangerous", example: "This work is more dangerous", transcr: "Зис уёк из мор дэйнджэрэс", tr_ru: "Эта работа опаснее" },
              { subj: "This job", verb: "is the most difficult", example: "This job is the most difficult", transcr: "Зис джоб из зэ моуст дификэлт", tr_ru: "Это самая трудная работа" },
              { subj: "This tool", verb: "is more useful", example: "This tool is more useful than that one", transcr: "Зис тул из мор юсфул зэн зэт уан", tr_ru: "Этот инструмент полезнее того" },
            ],
          },
          question: {
            label_ru: "⭐ Самый / особые",
            rule_ru:
              '<b>the + -est</b> = самый; особые формы:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>strong → the strongest</code></div>' +
              '<div><code>good → better → the best</code></div>' +
              '<div><code>bad → worse → the worst</code></div></div>',
            table: [
              { subj: "Ahmad", verb: "is the strongest", example: "Ahmad is the strongest worker", transcr: "Ахмад из зэ стронгэст уёкэ", tr_ru: "Ахмад — самый сильный рабочий" },
              { subj: "He", verb: "is the tallest", example: "He is the tallest worker", transcr: "Хи из зэ толэст уёкэ", tr_ru: "Он самый высокий рабочий" },
              { subj: "This box", verb: "is better", example: "This box is better than that one", transcr: "Зис бокс из бэтэ зэн зэт уан", tr_ru: "Эта коробка лучше той (good → better)" },
              { subj: "The weather", verb: "is worse", example: "The weather is worse today", transcr: "Зэ уэзэ из уёс тудэй", tr_ru: "Погода сегодня хуже (bad → worse)" },
            ],
          },
        },
        examples: [
          { en: "This crate is heavier than the box.", transcr: "Зис крэйт из хэвиэ зэн зэ бокс.", ru: "Этот ящик тяжелее коробки." },
          { en: "Today is colder than yesterday.", transcr: "Тудэй из колдэ зэн йестэдэй.", ru: "Сегодня холоднее, чем вчера." },
          { en: "This job is easier than that job.", transcr: "Зис джоб из изиэ зэн зэт джоб.", ru: "Эта работа легче, чем та." },
          { en: "He is the strongest worker.", transcr: "Хи из зэ стронгэст уёкэ.", ru: "Он самый сильный рабочий." },
          { en: "This shop is more expensive.", transcr: "Зис шоп из мор икспэнсив.", ru: "Этот магазин дороже." },
          { en: "The weather is worse today.", transcr: "Зэ уэзэ из уёс тудэй.", ru: "Погода сегодня хуже." },
          { en: "My room is the warmest.", transcr: "Май рум из зэ уомэст.", ru: "Моя комната самая тёплая." },
        ],
        simple_ru: {
          formula: 'Короткое слово + <b>-er</b> (+ than) = сравнение. <b>the + -est</b> = самый. Длинное слово → <b>more / the most</b>.<br><span class="g-transcr">taller than · the strongest · more expensive</span>',
          examples: [
            { en: "Tom is taller than Ali.", transcr: "Том из толэ зэн Али.", ru: "Tom (Том) + taller (выше) + than (чем) + Ali = Том выше, чем Али." },
            { en: "He is the strongest worker.", transcr: "Хи из зэ стронгэст уёкэ.", ru: "the strongest (самый сильный) + worker = он самый сильный рабочий." },
          ],
        },
        ytQuery: "comparative superlative adjectives -er than the most английский для начинающих",
      },

      words: [
        { e: "🐌", en: "slow", transcr: "слоу", ru: "медленный", pn: "/sləʊ/" },
        { e: "📏", en: "short", transcr: "шот", ru: "короткий", pn: "/ʃɔːt/" },
        { e: "🦒", en: "tall", transcr: "тол", ru: "высокий (рост)", pn: "/tɔːl/" },
        { e: "💪", en: "strong", transcr: "стронг", ru: "сильный", pn: "/strɒŋ/" },
        { e: "🥀", en: "weak", transcr: "уик", ru: "слабый", pn: "/wiːk/" },
        { e: "↔️", en: "wide", transcr: "уайд", ru: "широкий", pn: "/waɪd/" },
        { e: "🛤️", en: "narrow", transcr: "нэроу", ru: "узкий", pn: "/ˈnærəʊ/" },
        { e: "🕳️", en: "deep", transcr: "дип", ru: "глубокий", pn: "/diːp/" },
        { e: "⬆️", en: "high", transcr: "хай", ru: "высокий, высоко", pn: "/haɪ/" },
        { e: "⬇️", en: "low", transcr: "лоу", ru: "низкий", pn: "/ləʊ/" },
        { e: "🤫", en: "quiet", transcr: "куайэт", ru: "тихий", pn: "/ˈkwaɪət/" },
        { e: "🔊", en: "loud", transcr: "лауд", ru: "громкий", pn: "/laʊd/" },
        { e: "💸", en: "expensive", transcr: "икспэнсив", ru: "дорогой", pn: "/ɪkˈspensɪv/" },
        { e: "⚠️", en: "dangerous", transcr: "дэйнджэрэс", ru: "опасный", pn: "/ˈdeɪndʒərəs/" },
        { e: "👌", en: "easy", transcr: "изи", ru: "лёгкий, простой", pn: "/ˈiːzi/" },
        { e: "🧩", en: "difficult", transcr: "дификэлт", ru: "трудный", pn: "/ˈdɪfɪkəlt/" },
        { e: "➖", en: "thin", transcr: "син", ru: "тонкий (предмет)", pn: "/θɪn/" },
        { e: "🧒", en: "young", transcr: "янг", ru: "молодой", pn: "/jʌŋ/" },
        { e: "🧠", en: "clever", transcr: "клэвэ", ru: "умный", pn: "/ˈklevə/" },
        { e: "🤝", en: "friendly", transcr: "фрэндли", ru: "дружелюбный", pn: "/ˈfrendli/" },
        { e: "🧸", en: "soft", transcr: "софт", ru: "мягкий", pn: "/sɒft/" },
        { e: "📚", en: "thick", transcr: "сик", ru: "толстый (толщина)", pn: "/θɪk/" },
        { e: "🍓", en: "ripe", transcr: "райп", ru: "спелый", pn: "/raɪp/" },
        { e: "🪨", en: "rough", transcr: "раф", ru: "шершавый, грубый", pn: "/rʌf/" },
        { e: "🔩", en: "tight", transcr: "тайт", ru: "тугой, тесный", pn: "/taɪt/" },
        { e: "〰️", en: "loose", transcr: "лус", ru: "слабо затянутый", pn: "/luːs/" },
        { e: "💡", en: "bright", transcr: "брайт", ru: "яркий", pn: "/braɪt/" },
        { e: "🛠️", en: "useful", transcr: "юсфул", ru: "полезный", pn: "/ˈjuːsfʊl/" },
        { e: "👎", en: "bad", transcr: "бэд", ru: "плохой", pn: "/bæd/" },
        { e: "🌑", en: "dark", transcr: "дак", ru: "тёмный", pn: "/dɑːk/" },
      ],

      dialogue: [
        { s: "m", en: "This crate is heavier than that one.", transcr: "Зис крэйт из хэвиэ зэн зэт уан.", ru: "Этот ящик тяжелее того." },
        { s: "w", en: "Yes. These crates are heavy.", transcr: "Йес. Зиз крэйтс ар хэви.", ru: "Да. Эти ящики тяжёлые." },
        { s: "m", en: "Take the lighter boxes, please.", transcr: "Тэйк зэ лайтэ боксиз, плиз.", ru: "Бери коробки полегче, пожалуйста." },
        { s: "w", en: "Which work is easier today?", transcr: "Уич уёк из изиэ тудэй?", ru: "Какая работа легче сегодня?" },
        { s: "m", en: "The shed is easier than the field.", transcr: "Зэ шед из изиэ зэн зэ филд.", ru: "В сарае легче, чем в поле." },
        { s: "w", en: "Good. The field is colder and the mud is deep.", transcr: "Гуд. Зэ филд из колдэ энд зэ мад из дип.", ru: "Хорошо. В поле холоднее, и грязь глубокая." },
        { s: "m", en: "Tomorrow it is going to be warmer.", transcr: "Тэмороу ит из гоуинг ту би уомэ.", ru: "Завтра будет теплее." },
        { s: "w", en: "Is this worker stronger than Ali?", transcr: "Из зис уёкэ стронгэ зэн Али?", ru: "Этот рабочий сильнее Али?" },
        { s: "m", en: "Yes. Ahmad is the strongest.", transcr: "Йес. Ахмад из зэ стронгэст.", ru: "Да. Ахмад самый сильный." },
        { s: "w", en: "These gloves are better than my old gloves.", transcr: "Зиз главз ар бэтэ зэн май оулд главз.", ru: "Эти перчатки лучше моих старых." },
        { s: "m", en: "Tomorrow is going to be a hard day.", transcr: "Тэмороу из гоуинг ту би э хад дэй.", ru: "Завтра будет тяжёлый день." },
        { s: "w", en: "I am going to start early today.", transcr: "Ай эм гоуинг ту старт ёли тудэй.", ru: "Я начну рано сегодня." },
      ],

      quiz: [
        { q: '[COMPLETE] "Tom is ___ than Ali." (выше ростом)', opts: ["taller", "tall", "tallest", "more tall"], c: 0, expl: "Короткое слово + -er + than: taller than.", hint_ru: "Том выше." },
        { q: '[COMPLETE] "This crate is ___ than the box." (тяжелее)', opts: ["heavier", "heavy", "heaviest", "more heavy"], c: 0, expl: "heavy → heavier (короткое слово на -y → -ier).", hint_ru: "тяжелее." },
        { q: '[COMPLETE] "This shop is ___ expensive." (длинное слово)', opts: ["more", "most", "the", "than"], c: 0, expl: "Длинное слово (expensive) → more expensive.", hint_ru: "дороже." },
        { q: '[COMPLETE] "He is the ___ worker." (самый сильный)', opts: ["strongest", "stronger", "strong", "most strong"], c: 0, expl: "the + -est = самый: the strongest.", hint_ru: "самый сильный." },
        { q: '[TRANSLATE] "опасный"', opts: ["dangerous", "difficult", "dark", "deep"], c: 0, expl: "dangerous — опасный.", hint_ru: "dangerous." },
        { q: '[TRANSLATE] "спелый"', opts: ["ripe", "dark", "thin", "soft"], c: 0, expl: "ripe — спелый.", hint_ru: "ripe." },
        { q: '[TRANSLATE] "трудный"', opts: ["difficult", "easy", "useful", "quiet"], c: 0, expl: "difficult — трудный.", hint_ru: "difficult." },
        { q: "[CORRECT] Где правильно?", opts: ["This box is heavier", "This box is more heavy", "This box is heavyer", "This box is heavy than"], c: 0, expl: "heavy → heavier; короткое слово берёт -er, не more.", hint_ru: "тяжелее." },
        { q: '[COMPLETE] "Today is ___ than yesterday." (холоднее)', opts: ["colder", "cold", "coldest", "more cold"], c: 0, expl: "cold → colder (+ -er).", hint_ru: "холоднее." },
        { q: '[TRANSLATE] "тихий"', opts: ["quiet", "loud", "low", "clever"], c: 0, expl: "quiet — тихий.", hint_ru: "quiet." },
        { q: '[COMPLETE] "This box is ___ than that one." (лучше — good)', opts: ["better", "good", "best", "more good"], c: 0, expl: "good → better (особая форма; не «more good»). the best = самый лучший.", hint_ru: "лучше." },
        { q: '[COMPLETE] "The weather is ___ today." (хуже — bad)', opts: ["worse", "bad", "worst", "more bad"], c: 0, expl: "bad → worse (особая форма; не «more bad»). the worst = самый плохой.", hint_ru: "хуже." },
        { q: "[LISTEN] This crate is heavier than the box.", opts: ["Этот ящик тяжелее коробки.", "Эта коробка тяжелее ящика.", "Этот ящик лёгкий.", "Коробка пустая."], c: 0, expl: "heavier than — тяжелее, чем.", hint_ru: "" },
        { q: "[GIST] Кто самый сильный рабочий (по диалогу)?", opts: ["Ахмад", "Али", "Том", "Менеджер"], c: 0, expl: 'В диалоге: «Ahmad is the strongest».', hint_ru: "Слушай про strongest." },
        { q: "[BUILD] Соберите: «Этот ящик тяжелее, чем коробка»", build: ["This", "crate", "is", "heavier", "than", "the", "box"], expl: "This crate is heavier than the box — Этот ящик тяжелее коробки. Короткое слово + -er + than.", hint_ru: "тяжелее, чем." },
      ],

      everyday: {
        title_ru: "Сравнивать на работе",
        phrases: [
          { en: "This crate is heavier than that box.", transcr: "Зис крэйт из хэвиэ зэн зэт бокс.", ru: "Этот ящик тяжелее той коробки." },
          { en: "Which job is easier?", transcr: "Уич джоб из изиэ?", ru: "Какая работа легче?" },
          { en: "This shop is more expensive.", transcr: "Зис шоп из мор икспэнсив.", ru: "Этот магазин дороже." },
          { en: "He is the strongest worker here.", transcr: "Хи из зэ стронгэст уёкэ хиэ.", ru: "Он самый сильный рабочий здесь." },
          { en: "Today is colder than yesterday.", transcr: "Тудэй из колдэ зэн йестэдэй.", ru: "Сегодня холоднее, чем вчера." },
          { en: "This tool is better than that one.", transcr: "Зис тул из бэтэ зэн зэт уан.", ru: "Этот инструмент лучше того." },
        ],
      },
    },

    {
      id: 18,
      mod: 10,
      title_ru: "Мог / не смог + как работать",
      cefr: "A2 · could/couldn't · adverbs of manner · machinery",

      grammar: {
        title_ru: "could (мог) + наречие «как»: -ly",
        intro_ru:
          '<div style="line-height:1.6">Прошлое от <b>can</b> (мочь, уметь) — это <b>could</b>:<br>❌ <b>Yesterday I can start it</b><br>✅ <b>Yesterday I could start it</b> <span class="g-transcr">[йестэдэй ай куд старт ит]</span> (вчера я смог это завести).<br>👉 <b>could</b> = мог / умел / смог (прошлое). Не смог = <b>could not / couldn’t</b>.<br>🛠️ А <b>как</b> ты делаешь работу? Прилагательное + <b>-ly</b>: careful → <b>carefully</b> <span class="g-transcr">[кэафул → кэафули]</span> (осторожно).</div>',
        cultural_ru:
          '<b>could</b> покрывает русские «мог», «умел», «смог». Это же слово — вежливая просьба: <b>Could you help me?</b> <span class="g-transcr">[куд ю хэлп ми]</span> (не могли бы вы помочь?).' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>Умел в прошлом:</b> I could drive <span class="g-transcr">[ай куд драйв]</span></div>' +
          '<div><b>Не смог:</b> I couldn’t start it <span class="g-transcr">[ай куднт старт ит]</span></div>' +
          '<div><b>Как? (-ly):</b> work carefully <span class="g-transcr">[уёк кэафули]</span></div>' +
          '<div><b>Особое наречие:</b> good → well <span class="g-transcr">[гуд → уэл]</span></div></div><div style="margin-top:6px">💡 <b>start the engine</b> = завести двигатель (не только «начинать»). <b>battery is low</b> = аккумулятор сел (брит. идиома: <b>a flat battery</b>).</div>',
        note_ru:
          '⚠️ Наречие «как» = прилагательное + <b>-ly</b>:<br>' +
          '• <b>slow → slowly</b> <span class="g-transcr">[слоу → слоули]</span>, <b>quiet → quietly</b> <span class="g-transcr">[куайэт → куайэтли]</span>, <b>bad → badly</b> <span class="g-transcr">[бэд → бэдли]</span><br>' +
          '• <b>-y → -ily</b>: <b>easy → easily</b> <span class="g-transcr">[изи → изили]</span><br>' +
          '⭐ Особое: <b>good → well</b> <span class="g-transcr">[гуд → уэл]</span> (НЕ «goodly»). <b>hard</b> и <b>fast</b> не меняются: work <b>hard</b>, drive <b>fast</b>.<br>' +
          '⚠️ <b>could</b> + глагол БЕЗ to и БЕЗ -s: I could <b>start</b> (не «could to start», не «could starts»).',
        forms: {
          positive: {
            label_ru: "✅ мог (could)",
            rule_ru:
              '<b>could</b> + глагол (база) = умел / смог в прошлом:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I could start</code></div>' +
              '<div><code>He could drive</code></div>' +
              '<div><code>I could start the engine</code> <span class="g-transcr">[ай куд старт зэ энджин]</span></div></div>',
            table: [
              { subj: "I", verb: "could start", example: "I could start the engine", transcr: "Ай куд старт зэ энджин", tr_ru: "Я смог завести двигатель" },
              { subj: "He", verb: "could drive", example: "He could drive the tractor", transcr: "Хи куд драйв зэ трэктэ", tr_ru: "Он умел водить трактор" },
              { subj: "We", verb: "could repair", example: "We could repair the motor", transcr: "Уи куд рипэа зэ моутэ", tr_ru: "Мы смогли починить мотор" },
            ],
          },
          negative: {
            label_ru: "❌ не мог (couldn’t)",
            rule_ru:
              'Не смог = <b>could not</b> / <b>couldn’t</b> + глагол:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I couldn’t start it</code></div>' +
              '<div><code>She couldn’t drive</code></div></div>',
            table: [
              { subj: "I", verb: "couldn’t start", example: "I couldn’t start the engine", transcr: "Ай куднт старт зэ энджин", tr_ru: "Я не смог завести двигатель" },
              { subj: "She", verb: "couldn’t drive", example: "She couldn’t drive the trailer", transcr: "Ши куднт драйв зэ трэйлэ", tr_ru: "Она не смогла вести прицеп" },
              { subj: "They", verb: "couldn’t repair", example: "They couldn’t repair the generator", transcr: "Зэй куднт рипэа зэ джэнэрэйтэ", tr_ru: "Они не смогли починить генератор" },
            ],
          },
          question: {
            label_ru: "🛠️ Как? + -ly",
            rule_ru:
              'Как ты делаешь? Прилагательное + <b>-ly</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>careful → carefully</code></div>' +
              '<div><code>good → well</code> (особое)</div>' +
              '<div><code>Work carefully</code> <span class="g-transcr">[уёк кэафули]</span></div></div>',
            table: [
              { subj: "Work", verb: "carefully", example: "Work carefully near the blade", transcr: "Уёк кэафули ниэ зэ блэйд", tr_ru: "Работай осторожно с лезвием" },
              { subj: "Work", verb: "safely", example: "Always work safely", transcr: "Олуэйз уёк сэйфли", tr_ru: "Всегда работай безопасно" },
              { subj: "The engine", verb: "starts easily", example: "The engine starts easily", transcr: "Зэ энджин стартс изили", tr_ru: "Двигатель заводится легко" },
              { subj: "The motor", verb: "works well", example: "The motor works well", transcr: "Зэ моутэ уёкс уэл", tr_ru: "Мотор работает хорошо" },
            ],
          },
        },
        examples: [
          { en: "I could start the engine.", transcr: "Ай куд старт зэ энджин.", ru: "Я смог завести двигатель." },
          { en: "He could drive the tractor.", transcr: "Хи куд драйв зэ трэктэ.", ru: "Он умел водить трактор." },
          { en: "I couldn’t repair the brake.", transcr: "Ай куднт рипэа зэ брэйк.", ru: "Я не смог починить тормоз." },
          { en: "Work carefully near the blade.", transcr: "Уёк кэафули ниэ зэ блэйд.", ru: "Работай осторожно с лезвием." },
          { en: "The engine starts easily.", transcr: "Зэ энджин стартс изили.", ru: "Двигатель заводится легко." },
          { en: "Could you help me, please?", transcr: "Куд ю хэлп ми, плиз?", ru: "Не могли бы вы помочь, пожалуйста?" },
          { en: "The motor works well now.", transcr: "Зэ моутэ уёкс уэл нау.", ru: "Мотор теперь работает хорошо." },
        ],
        simple_ru: {
          formula: '<b>could</b> + глагол (база) = мог / смог в прошлом. Не смог = <b>couldn’t</b>. Как? прилагательное + <b>-ly</b> (good → well).<br><span class="g-transcr">I could start · I couldn’t start · work carefully</span>',
          examples: [
            { en: "I could start the engine.", transcr: "Ай куд старт зэ энджин.", ru: "I (я) + could (смог) + start (завести) + the engine = я смог завести двигатель." },
            { en: "Work carefully.", transcr: "Уёк кэафули.", ru: "work (работай) + carefully (осторожно) = работай осторожно (careful + ly)." },
          ],
        },
        ytQuery: "could couldn't past ability adverbs of manner -ly английский для начинающих",
      },

      words: [
        { e: "🚛", en: "trailer", transcr: "трэйлэ", ru: "прицеп", pn: "/ˈtreɪlə/" },
        { e: "⚙️", en: "engine", transcr: "энджин", ru: "двигатель", pn: "/ˈendʒɪn/" },
        { e: "🔋", en: "battery", transcr: "бэтэри", ru: "аккумулятор", pn: "/ˈbætəri/" },
        { e: "⛽", en: "fuel", transcr: "фьюэл", ru: "топливо", pn: "/ˈfjuːəl/" },
        { e: "🛢️", en: "diesel", transcr: "дизл", ru: "дизель", pn: "/ˈdiːzl/" },
        { e: "🛢️", en: "tank", transcr: "тэнк", ru: "бак", pn: "/tæŋk/" },
        { e: "🛢️", en: "oil", transcr: "ойл", ru: "масло", pn: "/ɔɪl/" },
        { e: "🎚️", en: "switch", transcr: "суич", ru: "выключатель", pn: "/swɪtʃ/" },
        { e: "🔘", en: "button", transcr: "батн", ru: "кнопка", pn: "/ˈbʌtn/" },
        { e: "🕹️", en: "lever", transcr: "ливэ", ru: "рычаг", pn: "/ˈliːvə/" },
        { e: "🔪", en: "blade", transcr: "блэйд", ru: "лезвие, нож (машины)", pn: "/bleɪd/" },
        { e: "🛑", en: "brake", transcr: "брэйк", ru: "тормоз", pn: "/breɪk/" },
        { e: "⚙️", en: "gear", transcr: "гиэ", ru: "передача, скорость", pn: "/ɡɪə/" },
        { e: "⚙️", en: "motor", transcr: "моутэ", ru: "мотор", pn: "/ˈməʊtə/" },
        { e: "🏗️", en: "crane", transcr: "крэйн", ru: "кран (подъёмный)", pn: "/kreɪn/" },
        { e: "🛞", en: "tyre", transcr: "тайэ", ru: "шина", pn: "/ˈtaɪə/" },
        { e: "⛓️", en: "chain", transcr: "чэйн", ru: "цепь", pn: "/tʃeɪn/" },
        { e: "🔌", en: "cable", transcr: "кэйбл", ru: "кабель", pn: "/ˈkeɪbl/" },
        { e: "🔌", en: "plug", transcr: "плаг", ru: "вилка, штекер", pn: "/plʌɡ/" },
        { e: "🔌", en: "wire", transcr: "уайэ", ru: "провод", pn: "/ˈwaɪə/" },
        { e: "🔌", en: "generator", transcr: "джэнэрэйтэ", ru: "генератор", pn: "/ˈdʒenəreɪtə/" },
        { e: "⚡", en: "power", transcr: "пауэ", ru: "питание, мощность", pn: "/ˈpaʊə/" },
        { e: "🔧", en: "spanner", transcr: "спэнэ", ru: "гаечный ключ", pn: "/ˈspænə/" },
        { e: "🔩", en: "nut", transcr: "нат", ru: "гайка", pn: "/nʌt/" },
        { e: "🔩", en: "bolt", transcr: "боулт", ru: "болт", pn: "/bəʊlt/" },
        { e: "🪛", en: "screw", transcr: "скру", ru: "винт, шуруп", pn: "/skruː/" },
        { e: "🗜️", en: "clamp", transcr: "клэмп", ru: "зажим, струбцина", pn: "/klæmp/" },
        { e: "🌀", en: "fan", transcr: "фэн", ru: "вентилятор", pn: "/fæn/" },
        { e: "📣", en: "horn", transcr: "хон", ru: "гудок, сигнал", pn: "/hɔːn/" },
        { e: "💧", en: "pump", transcr: "памп", ru: "насос", pn: "/pʌmp/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning. Could you start the engine?", transcr: "Гуд монинг. Куд ю старт зэ энджин?", ru: "Доброе утро. Можешь завести двигатель?" },
        { s: "w", en: "I couldn’t start it. The battery is low.", transcr: "Ай куднт старт ит. Зэ бэтэри из лоу.", ru: "Я не смог завести. Аккумулятор разряжен." },
        { s: "m", en: "Look at the cable and the wire.", transcr: "Лук эт зэ кэйбл энд зэ уайэ.", ru: "Посмотри на кабель и провод." },
        { s: "w", en: "The wire is loose here.", transcr: "Зэ уайэ из лус хиэ.", ru: "Провод здесь болтается." },
        { s: "m", en: "Work carefully. The blade is dangerous.", transcr: "Уёк кэафули. Зэ блэйд из дэйнджэрэс.", ru: "Работай осторожно. Лезвие опасное." },
        { s: "w", en: "Yes. I always work safely.", transcr: "Йес. Ай олуэйз уёк сэйфли.", ru: "Да. Я всегда работаю безопасно." },
        { s: "m", en: "Could you drive the trailer carefully?", transcr: "Куд ю драйв зэ трэйлэ кэафули?", ru: "Можешь вести прицеп осторожно?" },
        { s: "w", en: "Yes. The brake is broken.", transcr: "Йес. Зэ брэйк из броукэн.", ru: "Да. Тормоз сломан." },
        { s: "m", en: "Call the mechanic. He works well.", transcr: "Кол зэ мэкэник. Хи уёкс уэл.", ru: "Позвони механику. Он хорошо работает." },
        { s: "w", en: "Good. He could repair the motor yesterday.", transcr: "Гуд. Хи куд рипэа зэ моутэ йестэдэй.", ru: "Хорошо. Вчера он смог починить мотор." },
        { s: "m", en: "This pump works well now.", transcr: "Зис памп уёкс уэл нау.", ru: "Этот насос теперь работает хорошо." },
        { s: "w", en: "Good. The old pump was bad.", transcr: "Гуд. Зэ оулд памп уоз бэд.", ru: "Хорошо. Старый насос был плохой." },
      ],

      quiz: [
        { q: '[COMPLETE] "Yesterday I ___ start the engine." (мог)', opts: ["could", "can", "do", "does"], c: 0, expl: "could = прошлое от can (мог/смог).", hint_ru: "Вчера — прошлое." },
        { q: '[COMPLETE] "I ___ start it. The battery is low." (не смог)', opts: ["couldn’t", "could", "can", "do"], c: 0, expl: "couldn’t = could not (не смог).", hint_ru: "Не получилось." },
        { q: '[COMPLETE] "Work ___ near the blade." (осторожно)', opts: ["carefully", "easily", "badly", "well"], c: 0, expl: "careful → carefully (осторожно). Прилагательное + -ly.", hint_ru: "Как? осторожно." },
        { q: '[TRANSLATE] "двигатель"', opts: ["engine", "battery", "tyre", "cable"], c: 0, expl: "engine — двигатель.", hint_ru: "engine." },
        { q: '[TRANSLATE] "тормоз"', opts: ["brake", "gear", "clamp", "fan"], c: 0, expl: "brake — тормоз.", hint_ru: "brake." },
        { q: '[TRANSLATE] "гайка"', opts: ["nut", "bolt", "screw", "plug"], c: 0, expl: "nut — гайка.", hint_ru: "nut." },
        { q: "[CORRECT] Где правильно?", opts: ["I could start it", "I could to start it", "I could started it", "I could starts it"], c: 0, expl: "could + глагол без to и без -s: could start.", hint_ru: "Я смог это завести." },
        { q: '[COMPLETE] "The engine starts ___." (легко)', opts: ["easily", "easy", "badly", "well"], c: 0, expl: "easy → easily (легко). Как заводится?", hint_ru: "Как? легко." },
        { q: '[COMPLETE] "The motor works ___." (хорошо — good)', opts: ["well", "good", "badly", "easy"], c: 0, expl: "good → well (особое наречие; НЕ goodly). Мотор работает хорошо.", hint_ru: "Как? хорошо." },
        { q: '[QUESTION] "___ you help me, please?" (вежливая просьба)', opts: ["Could", "Does", "Is", "Are"], c: 0, expl: "Could you…? — вежливая просьба.", hint_ru: "Не могли бы вы…?" },
        { q: "[LISTEN] I couldn’t start the engine.", opts: ["Я не смог завести двигатель.", "Я завёл двигатель.", "Двигатель работает хорошо.", "Тормоз сломан."], c: 0, expl: "couldn’t start — не смог завести.", hint_ru: "" },
        { q: "[GIST] Почему рабочий не завёл двигатель (по диалогу)?", opts: ["Аккумулятор разряжен (low)", "Нет топлива", "Сломан тормоз", "Нет ключа"], c: 0, expl: '«I couldn’t start it. The battery is low».', hint_ru: "Слушай про battery." },
        { q: "[BUILD] Соберите: «Я не смог завести двигатель»", build: ["I", "couldn’t", "start", "the", "engine"], expl: "I couldn’t start the engine — Я не смог завести двигатель. couldn’t + глагол без to.", hint_ru: "не смог завести." },
        { q: '[COMPLETE] "He could ___ the tractor." (водить)', opts: ["drive", "drives", "driving", "drove"], c: 0, expl: "could + база глагола: could drive (без -s, без -ed).", hint_ru: "Он умел водить." },
      ],

      everyday: {
        title_ru: "Техника и как работать",
        phrases: [
          { en: "Could you start the engine?", transcr: "Куд ю старт зэ энджин?", ru: "Можешь завести двигатель?" },
          { en: "I couldn’t start it.", transcr: "Ай куднт старт ит.", ru: "Я не смог завести." },
          { en: "The battery is low.", transcr: "Зэ бэтэри из лоу.", ru: "Аккумулятор разряжен." },
          { en: "Work carefully near the blade.", transcr: "Уёк кэафули ниэ зэ блэйд.", ru: "Работай осторожно с лезвием." },
          { en: "Call the mechanic, please.", transcr: "Кол зэ мэкэник, плиз.", ru: "Позвони механику, пожалуйста." },
          { en: "The motor works well.", transcr: "Зэ моутэ уёкс уэл.", ru: "Мотор работает хорошо." },
        ],
      },
    },

    {
      id: 19,
      mod: 10,
      title_ru: "У меня есть… (have got) и самочувствие",
      cefr: "A2 · have got (vs have) · body & feelings",

      grammar: {
        title_ru: "«Есть / у меня…»: have got = have",
        intro_ru:
          '<div style="line-height:1.6">«У меня есть» по-британски — <b>have got</b>:<br>✅ <b>I have got gloves</b> = <b>I’ve got gloves</b> <span class="g-transcr">[айв гот главз]</span> (у меня есть перчатки).<br>👉 <b>have got</b> = <b>have</b> (есть, иметь). Коротко: <b>I’ve got</b>, <b>he’s got</b>.<br>🩹 Так же про тело: <b>I’ve got a sore back</b> <span class="g-transcr">[айв гот э со бэк]</span> (у меня болит спина).</div>',
        cultural_ru:
          '<b>have got</b> и <b>have</b> — одно значение «есть / иметь». <b>have got</b> чаще в живой речи (Британия).' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px">' +
          '<div><b>Есть:</b> I’ve got a key <span class="g-transcr">[айв гот э ки]</span></div>' +
          '<div><b>= то же:</b> I have a key <span class="g-transcr">[ай хэв э ки]</span></div>' +
          '<div><b>Он/она:</b> She’s got a cold <span class="g-transcr">[шиз гот э коулд]</span></div>' +
          '<div><b>Тело:</b> I’ve got a headache <span class="g-transcr">[айв гот э хэдэйк]</span></div></div>',
        note_ru:
          '⚠️ <b>have got</b> = <b>have</b> (НЕ два глагола подряд). Не говори «I have got got».<br>' +
          '• Коротко: <b>I’ve got</b> <span class="g-transcr">[айв гот]</span>, <b>he’s / she’s got</b> <span class="g-transcr">[хиз / шиз гот]</span>.<br>' +
          '• Вопрос: <b>Have you got…?</b> <span class="g-transcr">[хэв ю гот]</span> — НЕ «Do you have got».<br>' +
          '• Нет: <b>I haven’t got…</b> <span class="g-transcr">[ай хэвнт гот]</span> (have not got).<br>' +
          '⚠️ <b>he / she</b> → <b>has got</b> / <b>’s got</b> (не «have got»).',
        forms: {
          positive: {
            label_ru: "✅ есть (have got)",
            rule_ru:
              '<b>have / has got</b> = есть, иметь. Коротко <b>’ve / ’s got</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I’ve got</code></div>' +
              '<div><code>He’s got</code></div>' +
              '<div><code>I’ve got gloves</code> <span class="g-transcr">[айв гот главз]</span></div></div>',
            table: [
              { subj: "I", verb: "have got", example: "I’ve got gloves", transcr: "Айв гот главз", tr_ru: "У меня есть перчатки" },
              { subj: "He", verb: "has got", example: "He’s got a coat", transcr: "Хиз гот э коут", tr_ru: "У него есть куртка" },
              { subj: "I", verb: "have got", example: "I have got a sore back", transcr: "Ай хэв гот э со бэк", tr_ru: "У меня болит спина" },
              { subj: "She", verb: "has got", example: "She has got a headache", transcr: "Ши хэз гот э хэдэйк", tr_ru: "У неё болит голова" },
            ],
          },
          negative: {
            label_ru: "❌ нет (haven’t got)",
            rule_ru:
              'Нет = <b>haven’t / hasn’t got</b> (have / has not got):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>I haven’t got…</code></div>' +
              '<div><code>He hasn’t got…</code></div></div>',
            table: [
              { subj: "I", verb: "haven’t got", example: "I haven’t got my gloves", transcr: "Ай хэвнт гот май главз", tr_ru: "У меня нет перчаток" },
              { subj: "He", verb: "hasn’t got", example: "He hasn’t got a coat", transcr: "Хи хэзнт гот э коут", tr_ru: "У него нет куртки" },
              { subj: "We", verb: "haven’t got", example: "We haven’t got a key", transcr: "Уи хэвнт гот э ки", tr_ru: "У нас нет ключа" },
            ],
          },
          question: {
            label_ru: "❓ Have you got…?",
            rule_ru:
              'Вопрос: <b>Have / Has</b> вперёд + <b>got</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>Have you got gloves?</code></div>' +
              '<div><code>Has he got a coat?</code></div></div>',
            table: [
              { subj: "Have", verb: "you got…?", example: "Have you got gloves?", transcr: "Хэв ю гот главз?", tr_ru: "У тебя есть перчатки?" },
              { subj: "Have", verb: "you got…?", example: "Have you got a coat?", transcr: "Хэв ю гот э коут?", tr_ru: "У тебя есть куртка?" },
              { subj: "Has", verb: "he got…?", example: "Has he got a headache?", transcr: "Хэз хи гот э хэдэйк?", tr_ru: "У него болит голова?" },
            ],
          },
        },
        examples: [
          { en: "I’ve got a sore back.", transcr: "Айв гот э со бэк.", ru: "У меня болит спина." },
          { en: "Have you got your gloves?", transcr: "Хэв ю гот ё главз?", ru: "У тебя есть перчатки?" },
          { en: "He’s got a headache.", transcr: "Хиз гот э хэдэйк.", ru: "У него болит голова." },
          { en: "I haven’t got a coat.", transcr: "Ай хэвнт гот э коут.", ru: "У меня нет куртки." },
          { en: "She’s got a cold.", transcr: "Шиз гот э коулд.", ru: "У неё простуда." },
          { en: "We’ve got a problem.", transcr: "Уив гот э проблэм.", ru: "У нас проблема." },
          { en: "Have you got a plaster?", transcr: "Хэв ю гот э пластэ?", ru: "У тебя есть пластырь?" },
        ],
        simple_ru: {
          formula: '<b>have got</b> = <b>have</b> = «есть / у меня…». Коротко <b>’ve / ’s got</b>. Вопрос <b>Have you got…?</b>, нет — <b>haven’t got</b>.<br><span class="g-transcr">I’ve got gloves · Have you got a coat?</span>',
          examples: [
            { en: "I’ve got gloves.", transcr: "Айв гот главз.", ru: "I’ve got (у меня есть) + gloves (перчатки) = у меня есть перчатки." },
            { en: "I’ve got a sore back.", transcr: "Айв гот э со бэк.", ru: "I’ve got (у меня) + a sore back (больная спина) = у меня болит спина." },
          ],
        },
        ytQuery: "have got have you got British English elementary английский для начинающих",
      },

      words: [
        { e: "👤", en: "head", transcr: "хэд", ru: "голова", pn: "/hed/" },
        { e: "🦱", en: "hair", transcr: "хэа", ru: "волосы", pn: "/heə/" },
        { e: "😐", en: "face", transcr: "фэйс", ru: "лицо", pn: "/feɪs/" },
        { e: "💆", en: "neck", transcr: "нэк", ru: "шея", pn: "/nek/" },
        { e: "🤷", en: "shoulder", transcr: "шоулдэ", ru: "плечо", pn: "/ˈʃəʊldə/" },
        { e: "🧍", en: "back", transcr: "бэк", ru: "спина", pn: "/bæk/" },
        { e: "🫁", en: "chest", transcr: "чэст", ru: "грудь (грудная клетка)", pn: "/tʃest/" },
        { e: "🦵", en: "knee", transcr: "ни", ru: "колено", pn: "/niː/" },
        { e: "🫀", en: "heart", transcr: "хат", ru: "сердце", pn: "/hɑːt/" },
        { e: "🦴", en: "bone", transcr: "боун", ru: "кость", pn: "/bəʊn/" },
        { e: "🩸", en: "blood", transcr: "блад", ru: "кровь", pn: "/blʌd/" },
        { e: "💪", en: "muscle", transcr: "масл", ru: "мышца", pn: "/ˈmʌsl/" },
        { e: "🗣️", en: "throat", transcr: "сроут", ru: "горло", pn: "/θrəʊt/" },
        { e: "👍", en: "thumb", transcr: "сам", ru: "большой палец", pn: "/θʌm/" },
        { e: "😣", en: "sore", transcr: "со", ru: "болезненный, ноющий", pn: "/sɔː/" },
        { e: "😨", en: "scared", transcr: "скэад", ru: "испуганный", pn: "/skeəd/" },
        { e: "😠", en: "angry", transcr: "энгри", ru: "злой", pn: "/ˈæŋɡri/" },
        { e: "😟", en: "worried", transcr: "уарид", ru: "встревоженный", pn: "/ˈwʌrid/" },
        { e: "😢", en: "sad", transcr: "сэд", ru: "грустный", pn: "/sæd/" },
        { e: "😔", en: "lonely", transcr: "лоунли", ru: "одинокий", pn: "/ˈləʊnli/" },
        { e: "😞", en: "upset", transcr: "апсэт", ru: "расстроенный", pn: "/ʌpˈset/" },
        { e: "😌", en: "calm", transcr: "кам", ru: "спокойный", pn: "/kɑːm/" },
        { e: "😰", en: "nervous", transcr: "нёвэс", ru: "нервный", pn: "/ˈnɜːvəs/" },
        { e: "😄", en: "glad", transcr: "глэд", ru: "рад", pn: "/ɡlæd/" },
        { e: "🫣", en: "afraid", transcr: "эфрэйд", ru: "боящийся", pn: "/əˈfreɪd/" },
        { e: "😴", en: "sleepy", transcr: "слипи", ru: "сонный", pn: "/ˈsliːpi/" },
        { e: "🙂", en: "fine", transcr: "файн", ru: "в порядке", pn: "/faɪn/" },
        { e: "😩", en: "stress", transcr: "стрэс", ru: "стресс", pn: "/stres/" },
        { e: "😤", en: "proud", transcr: "прауд", ru: "гордый", pn: "/praʊd/" },
        { e: "😎", en: "relaxed", transcr: "рилэкст", ru: "расслабленный", pn: "/rɪˈlækst/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning. Have you got your gloves?", transcr: "Гуд монинг. Хэв ю гот ё главз?", ru: "Доброе утро. У тебя есть перчатки?" },
        { s: "w", en: "No. I haven’t got my gloves today.", transcr: "Ноу. Ай хэвнт гот май главз тудэй.", ru: "Нет. Сегодня у меня нет перчаток." },
        { s: "m", en: "Take these. Have you got a coat?", transcr: "Тэйк зиз. Хэв ю гот э коут?", ru: "Возьми эти. У тебя есть куртка?" },
        { s: "w", en: "Yes. I’ve got a sore back.", transcr: "Йес. Айв гот э со бэк.", ru: "Да. У меня болит спина." },
        { s: "m", en: "You look tired and sad.", transcr: "Ю лук тайэд энд сэд.", ru: "Ты выглядишь усталым и грустным." },
        { s: "w", en: "I’m worried. I’ve got a headache.", transcr: "Айм уарид. Айв гот э хэдэйк.", ru: "Я переживаю. У меня болит голова." },
        { s: "m", en: "Have you got any medicine?", transcr: "Хэв ю гот эни мэдсэн?", ru: "У тебя есть лекарство?" },
        { s: "w", en: "No. My throat is sore.", transcr: "Ноу. Май сроут из со.", ru: "Нет. Горло болит." },
        { s: "m", en: "Rest now. Call the nurse.", transcr: "Рэст нау. Кол зэ нёс.", ru: "Отдохни. Позвони медсестре." },
        { s: "w", en: "Thank you. I am nervous.", transcr: "Сэнк ю. Ай эм нёвэс.", ru: "Спасибо. Я нервничаю." },
        { s: "m", en: "We can help you. The nurse is here.", transcr: "Уи кэн хэлп ю. Зэ нёс из хиэ.", ru: "Мы тебе поможем. Медсестра здесь." },
        { s: "w", en: "Good. I am calm now.", transcr: "Гуд. Ай эм кам нау.", ru: "Хорошо. Теперь я спокоен." },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ got gloves." (есть — у меня)', opts: ["have", "has", "do", "is"], c: 0, expl: "I/you/we → have got. have got = есть.", hint_ru: "У меня есть." },
        { q: '[COMPLETE] "He ___ got a coat." (есть — у него)', opts: ["has", "have", "is", "do"], c: 0, expl: "he/she → has got.", hint_ru: "У него есть." },
        { q: '[QUESTION] "___ you got a plaster?" (есть ли у тебя)', opts: ["Have", "Has", "Do", "Are"], c: 0, expl: "Have you got…? — британский вопрос «есть ли у тебя…?»", hint_ru: "Вопрос: есть ли…?" },
        { q: '[TRANSLATE] "спина"', opts: ["back", "neck", "knee", "chest"], c: 0, expl: "back — спина.", hint_ru: "back." },
        { q: '[TRANSLATE] "сердце"', opts: ["heart", "bone", "blood", "muscle"], c: 0, expl: "heart — сердце.", hint_ru: "heart." },
        { q: '[TRANSLATE] "встревоженный"', opts: ["worried", "calm", "glad", "proud"], c: 0, expl: "worried — встревоженный.", hint_ru: "worried." },
        { q: "[CORRECT] Где правильно?", opts: ["I have got a coat", "I have got got a coat", "I am got a coat", "I do got a coat"], c: 0, expl: "have got = есть (один раз). Не «have got got».", hint_ru: "У меня есть куртка." },
        { q: '[COMPLETE] "I ___ got my gloves." (нет — у меня)', opts: ["haven’t", "have", "has", "do"], c: 0, expl: "Нет = haven’t got (have not got).", hint_ru: "У меня нет перчаток." },
        { q: "[LISTEN] I’ve got a sore back.", opts: ["У меня болит спина.", "У меня болит голова.", "У меня есть куртка.", "Я устал."], c: 0, expl: "sore back — больная спина.", hint_ru: "" },
        { q: "[GIST] Что беспокоит рабочего (по диалогу)?", opts: ["Болит спина и голова", "Сломал руку", "Потерял ключ", "Голоден"], c: 0, expl: '«I’ve got a sore back», «I’ve got a headache».', hint_ru: "Слушай про back и headache." },
        { q: "[BUILD] Соберите: «У меня есть перчатки»", build: ["I", "have", "got", "gloves"], expl: "I have got gloves — у меня есть перчатки. have got = есть.", hint_ru: "у меня есть." },
        { q: '[TRANSLATE] "нервный"', opts: ["nervous", "sleepy", "sad", "fine"], c: 0, expl: "nervous — нервный.", hint_ru: "nervous." },
      ],

      everyday: {
        title_ru: "Самочувствие на работе",
        phrases: [
          { en: "Have you got your gloves?", transcr: "Хэв ю гот ё главз?", ru: "У тебя есть перчатки?" },
          { en: "I’ve got a sore back.", transcr: "Айв гот э со бэк.", ru: "У меня болит спина." },
          { en: "I haven’t got a coat.", transcr: "Ай хэвнт гот э коут.", ru: "У меня нет куртки." },
          { en: "She’s got a headache.", transcr: "Шиз гот э хэдэйк.", ru: "У неё болит голова." },
          { en: "I am tired today.", transcr: "Ай эм тайэд тудэй.", ru: "Я сегодня устал." },
          { en: "Are you okay?", transcr: "Ар ю оукэй?", ru: "Ты в порядке?" },
        ],
      },
    },
    {
      id: 20,
      title_ru: "В кэмпе: something / anything / nothing",
      cefr: "A2 · something / anything / nothing · camp & home",
      grammar: {
        title_ru: "something / anything / nothing — неопределённые",
        intro_ru:
          '<div style="line-height:1.6">Три семейства неопределённых слов — по контексту:<br>' +
          '✅ <b>some-</b>: утверждение → «там <b>что-то</b> есть».<br>' +
          '❌ <b>no-</b>: отрицание <em>без</em> «not» → «там <b>ничего</b> нет».<br>' +
          '❓ <b>any-</b>: вопрос и после «not» → «<b>что-нибудь</b> есть?».</div>',
        cultural_ru:
          'В BrE <b>someone</b> = <b>somebody</b>, <b>anyone</b> = <b>anybody</b> (оба правильны; -one чуть официальнее).' +
          ' Та же схема с <b>every-</b>: <b>everything</b> <span class="g-transcr">[эврисинг]</span> (всё),' +
          ' <b>everybody</b> <span class="g-transcr">[эврибэди]</span> (все),' +
          ' <b>everywhere</b> <span class="g-transcr">[эвриуэа]</span> (везде) — всегда в утверждениях.',
        note_ru:
          '⚠️ Нельзя двойное отрицание: <b>There isn\'t nothing</b> — ошибка!<br>' +
          'Только одно: ✅ <b>There <u>is</u> nothing</b> (nothing + положит. глагол)' +
          ' <em>или</em> ✅ <b>There <u>isn\'t</u> anything</b> (not + anything).',
        forms: {
          positive: {
            label_ru: "✅ some- → утверждение",
            rule_ru:
              '<b>some</b>thing / <b>some</b>one / <b>some</b>where — в утверждениях:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>something</code> <span class="g-transcr">[самсинг]</span></div><div>что-то</div>' +
              '<div><code>someone</code> <span class="g-transcr">[самуан]</span></div><div>кто-то</div>' +
              '<div><code>somewhere</code> <span class="g-transcr">[самуэа]</span></div><div>где-то</div>' +
              '</div>',
            table: [
              { subj: "что?", verb: "something", example: "There is something on the floor.", transcr: "Зэа из самсинг он зэ фло.", tr_ru: "На полу что-то есть." },
              { subj: "кто?", verb: "someone", example: "Someone is at the entrance.", transcr: "Самуан из эт зэ энтрэнс.", tr_ru: "На входе кто-то есть." },
              { subj: "где?", verb: "somewhere", example: "I left my key somewhere.", transcr: "Ай лэфт май ки самуэа.", tr_ru: "Я оставил ключ где-то." },
            ],
          },
          negative: {
            label_ru: "❌ no- → ничего нет (глагол +!)",
            rule_ru:
              '<b>no</b>thing / <b>no</b>body / <b>no</b>where — отрицание <em>одним словом</em> + глагол <b>IS</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>nothing</code> <span class="g-transcr">[насинг]</span></div><div>ничего</div>' +
              '<div><code>nobody</code> <span class="g-transcr">[ноубэди]</span></div><div>никого</div>' +
              '<div><code>nowhere</code> <span class="g-transcr">[ноуэа]</span></div><div>нигде</div>' +
              '</div>',
            table: [
              { subj: "что?", verb: "nothing", example: "There is nothing in the wardrobe.", transcr: "Зэа из насинг ин зэ уодроуб.", tr_ru: "В шкафу ничего нет." },
              { subj: "кто?", verb: "nobody", example: "Nobody is in the corridor.", transcr: "Ноубэди из ин зэ коридо.", tr_ru: "В коридоре никого нет." },
              { subj: "где?", verb: "nowhere", example: "I have nowhere to go.", transcr: "Ай хэв ноуэа ту гоу.", tr_ru: "Мне некуда идти." },
            ],
          },
          question: {
            label_ru: "❓ any- → вопрос / после «not»",
            rule_ru:
              '<b>any</b>thing / <b>any</b>one / <b>any</b>where — в вопросах и после отрицания:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><code>anything</code> <span class="g-transcr">[энисинг]</span></div><div>что-нибудь</div>' +
              '<div><code>anyone</code> <span class="g-transcr">[эниуан]</span></div><div>кто-нибудь</div>' +
              '<div><code>anywhere</code> <span class="g-transcr">[эниуэа]</span></div><div>где-нибудь</div>' +
              '</div>',
            table: [
              { subj: "вопрос", verb: "anything", example: "Is there anything in the cupboard?", transcr: "Из зэа энисинг ин зэ кабэд?", tr_ru: "В шкафчике что-нибудь есть?" },
              { subj: "после not", verb: "anything", example: "I haven't got anything.", transcr: "Ай хэвнт гот энисинг.", tr_ru: "У меня ничего нет." },
              { subj: "вопрос", verb: "anyone", example: "Is there anyone at the entrance?", transcr: "Из зэа эниуан эт зэ энтрэнс?", tr_ru: "На входе кто-нибудь есть?" },
              { subj: "после not", verb: "anywhere", example: "I cannot go anywhere.", transcr: "Ай кэнот гоу эниуэа.", tr_ru: "Я не могу никуда пойти." },
            ],
          },
        },
        examples: [
          { en: "There is something on the floor.", transcr: "Зэа из самсинг он зэ фло.", ru: "На полу что-то есть." },
          { en: "Someone is in the corridor.", transcr: "Самуан из ин зэ коридо.", ru: "В коридоре кто-то есть." },
          { en: "I left my coat somewhere.", transcr: "Ай лэфт май коут самуэа.", ru: "Я оставил куртку где-то." },
          { en: "Everything is ready.", transcr: "Эврисинг из рэди.", ru: "Всё готово." },
          { en: "Everybody is working.", transcr: "Эврибэди из уёкин.", ru: "Все работают." },
          { en: "There is nothing in the wardrobe.", transcr: "Зэа из насинг ин зэ уодроуб.", ru: "В шкафу ничего нет." },
          { en: "Nobody is here.", transcr: "Ноубэди из хиэ.", ru: "Здесь никого нет." },
          { en: "I have nowhere to go.", transcr: "Ай хэв ноуэа ту гоу.", ru: "Мне некуда идти." },
          { en: "Is there anything in the cupboard?", transcr: "Из зэа энисинг ин зэ кабэд?", ru: "В шкафчике что-нибудь есть?" },
          { en: "Is there anyone at the entrance?", transcr: "Из зэа эниуан эт зэ энтрэнс?", ru: "На входе кто-нибудь есть?" },
          { en: "I cannot go anywhere.", transcr: "Ай кэнот гоу эниуэа.", ru: "Я не могу никуда пойти." },
          { en: "I haven't got anything.", transcr: "Ай хэвнт гот энисинг.", ru: "У меня ничего нет." },
        ],
        simple_ru: {
          formula:
            '<b>some-</b> → утверждение · <b>no-</b> → ничего нет (глагол +) · <b>any-</b> → вопрос / после not<br>' +
            '<span class="g-transcr">There is something. / Is there anything? / There is nothing.</span>',
          examples: [
            { en: "There is something in the corridor.", transcr: "Зэа из самсинг ин зэ коридо.", ru: "some- (утверждение): something = что-то есть." },
            { en: "Is there anything on the floor?", transcr: "Из зэа энисинг он зэ фло?", ru: "any- (вопрос): anything = что-нибудь? В вопросах — any-." },
          ],
        },
        ytQuery: "something anything nothing разница английский A2 для начинающих",
      },

      words: [
        { e: "🏠", en: "roof", transcr: "руф", ru: "крыша", pn: "/ruːf/" },
        { e: "🪵", en: "floor", transcr: "фло", ru: "пол", pn: "/flɔː/" },
        { e: "⬆️", en: "ceiling", transcr: "силинг", ru: "потолок", pn: "/ˈsiːlɪŋ/" },
        { e: "🪜", en: "stairs", transcr: "стэаз", ru: "лестница", pn: "/steəz/" },
        { e: "🗄️", en: "wardrobe", transcr: "уодроуб", ru: "гардероб", pn: "/ˈwɔːdrəʊb/" },
        { e: "🗃️", en: "cupboard", transcr: "кабэд", ru: "шкафчик", pn: "/ˈkʌbəd/" },
        { e: "🔥", en: "oven", transcr: "авн", ru: "духовка", pn: "/ˈʌvn/" },
        { e: "⏱️", en: "microwave", transcr: "майкроуэйв", ru: "микроволновка", pn: "/ˈmaɪkrəʊweɪv/" },
        { e: "🌡️", en: "heating", transcr: "хитинг", ru: "отопление", pn: "/ˈhiːtɪŋ/" },
        { e: "😴", en: "pillow", transcr: "пилоу", ru: "подушка", pn: "/ˈpɪləʊ/" },
        { e: "🛏️", en: "sheet", transcr: "шиит", ru: "простыня", pn: "/ʃiːt/" },
        { e: "🛌", en: "mattress", transcr: "мэтрис", ru: "матрас", pn: "/ˈmætrɪs/" },
        { e: "🧹", en: "mop", transcr: "моп", ru: "швабра", pn: "/mɒp/" },
        { e: "🧽", en: "sponge", transcr: "спандж", ru: "губка", pn: "/spʌndʒ/" },
        { e: "🧴", en: "detergent", transcr: "дитёджэнт", ru: "моющее средство", pn: "/dɪˈtɜːdʒənt/" },
        { e: "🧺", en: "laundry", transcr: "лондри", ru: "стирка, бельё", pn: "/ˈlɔːndri/" },
        { e: "🗑️", en: "rubbish", transcr: "рабиш", ru: "мусор", pn: "/ˈrʌbɪʃ/" },
        { e: "🚶", en: "corridor", transcr: "коридо", ru: "коридор", pn: "/ˈkɒrɪdɔː/" },
        { e: "🚪", en: "entrance", transcr: "энтрэнс", ru: "вход", pn: "/ˈentrəns/" },
        { e: "🚿", en: "bathroom", transcr: "басрум", ru: "ванная комната", pn: "/ˈbɑːθruːm/" },
        { e: "💤", en: "bedroom", transcr: "бэдрум", ru: "спальня, комната", pn: "/ˈbedrʊm/" },
        { e: "👔", en: "iron", transcr: "айэн", ru: "утюг", pn: "/ˈaɪən/" },
        { e: "🔊", en: "noise", transcr: "нойз", ru: "шум", pn: "/nɔɪz/" },
        { e: "👃", en: "smell", transcr: "смэл", ru: "запах", pn: "/smel/" },
        { e: "🟫", en: "mat", transcr: "мэт", ru: "коврик", pn: "/mæt/" },
        { e: "📋", en: "notice", transcr: "ноутис", ru: "объявление", pn: "/ˈnəʊtɪs/" },
        { e: "💡", en: "bulb", transcr: "балб", ru: "лампочка", pn: "/bʌlb/" },
        { e: "🔧", en: "pipe", transcr: "пайп", ru: "труба", pn: "/paɪp/" },
        { e: "❄️", en: "freezer", transcr: "фризэ", ru: "морозильник", pn: "/ˈfriːzə/" },
        { e: "🧱", en: "tile", transcr: "тайл", ru: "плитка", pn: "/taɪl/" },
      ],

      dialogue: [
        { s: "m", en: "Hello. Is there anything broken in your room?", transcr: "Хэлоу. Из зэа энисинг броукэн ин ё рум?", ru: "Привет. В твоей комнате что-нибудь сломано?" },
        { s: "w", en: "Yes. The heating is broken.", transcr: "Йес. Зэ хитинг из броукэн.", ru: "Да. Отопление сломано." },
        { s: "m", en: "Is there a sheet in the wardrobe?", transcr: "Из зэа э шиит ин зэ уодроуб?", ru: "В шкафу есть простыня?" },
        { s: "w", en: "No. There is nothing in the wardrobe.", transcr: "Ноу. Зэа из насинг ин зэ уодроуб.", ru: "Нет. В шкафу ничего нет." },
        { s: "m", en: "Is there anyone in room ten?", transcr: "Из зэа эниуан ин рум тэн?", ru: "В десятой комнате кто-нибудь есть?" },
        { s: "w", en: "No. Nobody is there.", transcr: "Ноу. Ноубэди из зэа.", ru: "Нет. Там никого нет." },
        { s: "m", en: "Is there a mop somewhere?", transcr: "Из зэа э моп самуэа?", ru: "Где-нибудь есть швабра?" },
        { s: "w", en: "There is a mop near the entrance.", transcr: "Зэа из э моп ниэ зэ энтрэнс.", ru: "У входа есть швабра." },
        { s: "m", en: "Good. Is there anything in the cupboard?", transcr: "Гуд. Из зэа энисинг ин зэ кабэд?", ru: "Хорошо. В шкафчике что-нибудь есть?" },
        { s: "w", en: "There is something. A sponge and some detergent.", transcr: "Зэа из самсинг. Э спандж энд сам дитёджэнт.", ru: "Там что-то есть. Губка и немного моющего средства." },
        { s: "m", en: "Good. Is there a noise in the corridor?", transcr: "Гуд. Из зэа э нойз ин зэ коридо?", ru: "Хорошо. В коридоре есть шум?" },
        { s: "w", en: "Yes. Someone is walking in the corridor.", transcr: "Йес. Самуан из уокин ин зэ коридо.", ru: "Да. В коридоре кто-то ходит." },
      ],

      quiz: [
        { q: '[COMPLETE] "There is ___ on the floor." (что-то есть)', opts: ["something", "anything", "nothing", "everything"], c: 0, expl: "something — в утверждении: что-то есть. some- = утвердительный контекст.", hint_ru: "утверждение → some-." },
        { q: '[COMPLETE] "Is there ___ in the wardrobe?" (что-нибудь)', opts: ["anything", "something", "nothing", "nobody"], c: 0, expl: "anything — в вопросе: что-нибудь? any- = вопрос.", hint_ru: "вопрос → any-." },
        { q: '[COMPLETE] "There is ___ in the cupboard." (ничего нет)', opts: ["nothing", "anything", "something", "nowhere"], c: 0, expl: "nothing + IS (положит.) = ничего нет. Без двойного отрицания.", hint_ru: "ничего нет → nothing + IS." },
        { q: '[TRANSLATE] "шум"', opts: ["noise", "smell", "mat", "pipe"], c: 0, expl: "noise — шум.", hint_ru: "noise." },
        { q: '[TRANSLATE] "матрас"', opts: ["mattress", "pillow", "sheet", "laundry"], c: 0, expl: "mattress — матрас.", hint_ru: "mattress." },
        { q: '[TRANSLATE] "коридор"', opts: ["corridor", "entrance", "bathroom", "bedroom"], c: 0, expl: "corridor — коридор.", hint_ru: "corridor." },
        { q: '[CORRECT] Где правильно? (ничего нет на кровати)', opts: ["There is nothing on my bed.", "There isn\'t nothing on my bed.", "There is no something on my bed.", "Nothing isn\'t on my bed."], c: 0, expl: "nothing + IS (положит.) = правильно. «There isn't nothing» — двойное отрицание, нельзя!", hint_ru: "nothing + IS." },
        { q: '[QUESTION] "___ at the entrance?" (кто-нибудь)', opts: ["Is there anyone", "Is there someone", "Is there nobody", "Is anything"], c: 0, expl: "Is there anyone at the entrance? — кто-нибудь у входа? any- = вопрос.", hint_ru: "вопрос → any-." },
        { q: "[LISTEN] Nobody is in the corridor.", opts: ["В коридоре никого нет.", "В коридоре что-то есть.", "В коридоре кто-то ходит.", "В шкафу ничего нет."], c: 0, expl: "nobody — никого нет. corridor — коридор.", hint_ru: "" },
        { q: "[GIST] Что нашли в шкафчике (по диалогу)?", opts: ["Губку и моющее средство.", "Подушку и простыню.", "Швабру.", "Ничего не нашли."], c: 0, expl: "«There is something. A sponge and some detergent.» — губка и моющее.", hint_ru: "Слушай про cupboard и sponge." },
        { q: "[BUILD] «Где-нибудь есть швабра?»", build: ["Is", "there", "a", "mop", "somewhere"], expl: "Is there a mop somewhere? — Где-нибудь есть швабра? somewhere = где-нибудь.", hint_ru: "где-нибудь." },
        { q: '[COMPLETE] "I cannot go ___." (никуда)', opts: ["anywhere", "nowhere", "somewhere", "everything"], c: 0, expl: "anywhere — после cannot/not: никуда не могу. nowhere + положит. глагол: «I am going nowhere».", hint_ru: "после cannot → anywhere." },
      ],

      everyday: {
        title_ru: "В кэмпе и общежитии",
        phrases: [
          { en: "Is there anything broken in your room?", transcr: "Из зэа энисинг броукэн ин ё рум?", ru: "В твоей комнате что-нибудь сломано?" },
          { en: "There is nothing in the wardrobe.", transcr: "Зэа из насинг ин зэ уодроуб.", ru: "В шкафу ничего нет." },
          { en: "Someone is in the corridor.", transcr: "Самуан из ин зэ коридо.", ru: "В коридоре кто-то есть." },
          { en: "Is there anything wrong with the heating?", transcr: "Из зэа энисинг ронг уис зэ хитинг?", ru: "С отоплением что-то не так?" },
          { en: "There is a notice near the entrance.", transcr: "Зэа из э ноутис ниэ зэ энтрэнс.", ru: "У входа есть объявление." },
          { en: "Nothing works in my room.", transcr: "Насинг уёкс ин май рум.", ru: "В моей комнате ничего не работает." },
        ],
      },
    },

    // ─── L21 ──────────────────────────────────────────────────────────────────
    {
      id: 21,
      title_ru: "В городе: зачем я еду (to + глагол)",
      cefr: "A2 · infinitive of purpose · town & services",
      grammar: {
        title_ru: "Инфинитив цели: I go to town to buy food.",
        intro_ru:
          '<b>to + глагол</b> после действия — показывает <b>зачем</b>:<br>' +
          'I go to town <b>to buy</b> food. — Я еду в город <b>купить</b> еду.<br>' +
          'They go to the bank <b>to change</b> money. — Они идут в банк <b>поменять</b> деньги.<br>' +
          'В русском — «чтобы» или сразу инфинитив: иду <b>купить</b>.',
        cultural_ru:
          'В BrE «in order to» — формальная версия (<em>in order to change money</em>), ' +
          'но в разговоре просто <b>to</b>: «I go to the bank to change money» — норма. ' +
          'Тот же смысл, короче. ' +
          'Для «чтобы не»: <b>not to</b> — понятно в BrE; более формально — <b>in order not to</b> / <b>so as not to</b> (уровень B1).',
        note_ru:
          '⚠️ Два «to» — разные функции:<br>' +
          'I go <b>to</b> town (<em>предлог: куда?</em>) vs I go to town <b>to buy</b> food (<em>инфинитив: зачем?</em>).<br>' +
          'Инфинитив-to всегда перед ГЛАГОЛОМ-ДЕЙСТВИЕМ; предлог-to — перед МЕСТОМ.',
        forms: {
          positive: {
            label_ru: "✅ to + глагол → зачем?",
            rule_ru:
              'Подлежащее + глагол + (место) + <b>to</b> + инфинитив:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I go to town</div><div><b>to buy</b> food</div>' +
              '<div>They go to the clinic</div><div><b>to visit</b> the nurse</div>' +
              '<div>We go to the cashpoint</div><div><b>to take</b> money</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "go", example: "I go to town to buy food.", transcr: "Ай гоу ту таун ту бай фуд.", tr_ru: "Я еду в город купить еду." },
              { subj: "они", verb: "go", example: "They go to the clinic to visit the nurse.", transcr: "Зэй гоу ту зэ клиник ту визит зэ нёс.", tr_ru: "Они идут в клинику навестить медсестру." },
              { subj: "мы", verb: "go", example: "We go to the cashpoint to take money.", transcr: "Уи гоу ту зэ кэшпойнт ту тэйк мани.", tr_ru: "Мы идём к банкомату снять деньги." },
            ],
          },
          negative: {
            label_ru: "❌ not to + глагол → чтобы не",
            rule_ru:
              'Цель — избежать чего-то: + <b>not to</b> + инфинитив:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I leave early</div><div><b>not to</b> be late</div>' +
              '<div>He eats at the canteen</div><div><b>not to</b> pay more</div>' +
              '<div>I go to the dentist</div><div><b>not to</b> be in pain</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "leave early", example: "I leave early not to be late.", transcr: "Ай лив ёли нот ту би лэйт.", tr_ru: "Я ухожу рано, чтобы не опоздать." },
              { subj: "он", verb: "eats", example: "He eats at the canteen not to pay more.", transcr: "Хи итс эт зэ кэнтин нот ту пэй мо.", tr_ru: "Он ест в столовой, чтобы не платить больше." },
              { subj: "я", verb: "go", example: "I go to the dentist not to be in pain.", transcr: "Ай гоу ту зэ дэнтист нот ту би ин пэйн.", tr_ru: "Я иду к стоматологу, чтобы не болел зуб." },
            ],
          },
          question: {
            label_ru: "❓ Why...? → To + глагол.",
            rule_ru:
              '<b>Why</b> <span class="g-transcr">[уай]</span> = зачем? — новый вопросительный маркер цели:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>Why</b> do you go to town?</div><div>→ <b>To buy</b> food.</div>' +
              '<div><b>Why</b> does she go to the clinic?</div><div>→ <b>To visit</b> the nurse.</div>' +
              '<div>Краткий ответ:</div><div>To + инфинитив (без подлежащего)</div>' +
              '</div>',
            table: [
              { subj: "ты", verb: "Why do you…?", example: "Why do you go to town?", transcr: "Уай ду ю гоу ту таун?", tr_ru: "Зачем ты едешь в город?" },
              { subj: "она", verb: "Why does she…?", example: "Why does she go to the clinic?", transcr: "Уай дэз ши гоу ту зэ клиник?", tr_ru: "Зачем она идёт в клинику?" },
              { subj: "ответ", verb: "To + verb.", example: "To change money.", transcr: "Ту чейндж мани.", tr_ru: "Чтобы поменять деньги." },
            ],
          },
        },
        examples: [
          { en: "I go to town to buy food.", transcr: "Ай гоу ту таун ту бай фуд.", ru: "Я еду в город купить еду." },
          { en: "They go to the clinic to visit the nurse.", transcr: "Зэй гоу ту зэ клиник ту визит зэ нёс.", ru: "Они идут в клинику навестить медсестру." },
          { en: "We go to the cashpoint to take money.", transcr: "Уи гоу ту зэ кэшпойнт ту тэйк мани.", ru: "Мы идём к банкомату снять деньги." },
          { en: "I go to the supermarket to buy bread.", transcr: "Ай гоу ту зэ супэмакит ту бай брэд.", ru: "Я иду в супермаркет купить хлеб." },
          { en: "They go to the library to read.", transcr: "Зэй гоу ту зэ лайбрэри ту рид.", ru: "Они идут в библиотеку читать." },
          { en: "I go to the post office to change currency.", transcr: "Ай гоу ту зэ поуст офис ту чейндж карэнси.", ru: "Я иду на почту обменять валюту." },
          { en: "I leave early not to be late.", transcr: "Ай лив ёли нот ту би лэйт.", ru: "Я ухожу рано, чтобы не опоздать." },
          { en: "She walks to work not to be late.", transcr: "Ши уокс ту уёк нот ту би лэйт.", ru: "Она ходит на работу пешком, чтобы не опоздать." },
          { en: "He eats at the canteen not to pay more.", transcr: "Хи итс эт зэ кэнтин нот ту пэй мо.", ru: "Он ест в столовой, чтобы не платить больше." },
          { en: "Why do you go to town?", transcr: "Уай ду ю гоу ту таун?", ru: "Зачем ты едешь в город?" },
          { en: "Why does she go to the clinic?", transcr: "Уай дэз ши гоу ту зэ клиник?", ru: "Зачем она идёт в клинику?" },
          { en: "Why do they go to the market?", transcr: "Уай ду зэй гоу ту зэ макит?", ru: "Зачем они едут на рынок?" },
        ],
        simple_ru: {
          formula:
            'I go to [место] + <b>to</b> + [глагол] = зачем? · <span class="g-transcr">I go to town to buy food.</span><br>' +
            'Not to + [глагол] = чтобы НЕ · <span class="g-transcr">I leave early not to be late.</span>',
          examples: [
            { en: "I go to town to buy food.", transcr: "Ай гоу ту таун ту бай фуд.", ru: "to buy = зачем иду: купить еду. Инфинитив цели." },
            { en: "Why do you go to town? — To change money.", transcr: "Уай ду ю гоу ту таун? — Ту чейндж мани.", ru: "Why? → To + глагол: краткий ответ о цели." },
          ],
        },
        ytQuery: "инфинитив цели to infinitive purpose английский A2 для начинающих",
      },

      words: [
        { e: "🏘️", en: "town", transcr: "таун", ru: "город (центр)", pn: "/taʊn/" },
        { e: "🌆", en: "city", transcr: "сити", ru: "город (крупный)", pn: "/ˈsɪti/" },
        { e: "🛖", en: "village", transcr: "вилидж", ru: "деревня", pn: "/ˈvɪlɪdʒ/" },
        { e: "📍", en: "centre", transcr: "сэнтэ", ru: "центр", pn: "/ˈsentə/" },
        { e: "📚", en: "library", transcr: "лайбрэри", ru: "библиотека", pn: "/ˈlaɪbrəri/" },
        { e: "🏫", en: "school", transcr: "скул", ru: "школа", pn: "/skuːl/" },
        { e: "⛪", en: "church", transcr: "чёч", ru: "церковь", pn: "/tʃɜːtʃ/" },
        { e: "🕌", en: "mosque", transcr: "моск", ru: "мечеть", pn: "/mɒsk/" },
        { e: "☕", en: "cafe", transcr: "кэфэй", ru: "кафе", pn: "/ˈkæfeɪ/" },
        { e: "🍽️", en: "restaurant", transcr: "рэстрэнт", ru: "ресторан", pn: "/ˈrestrɒnt/" },
        { e: "🍺", en: "pub", transcr: "паб", ru: "паб", pn: "/pʌb/" },
        { e: "🛒", en: "supermarket", transcr: "супэмакит", ru: "супермаркет", pn: "/ˈsuːpəmɑːkɪt/" },
        { e: "🏧", en: "cashpoint", transcr: "кэшпойнт", ru: "банкомат", pn: "/ˈkæʃpɔɪnt/" },
        { e: "⛲", en: "square", transcr: "скуэа", ru: "площадь", pn: "/skweə/" },
        { e: "🏭", en: "factory", transcr: "фэктэри", ru: "завод", pn: "/ˈfæktəri/" },
        { e: "📦", en: "warehouse", transcr: "уэахаус", ru: "склад", pn: "/ˈweəhaʊs/" },
        { e: "🅿️", en: "car park", transcr: "ка пак", ru: "парковка", pn: "/kɑː pɑːk/" },
        { e: "🚏", en: "bus stop", transcr: "бас стоп", ru: "автобусная остановка", pn: "/bʌs stɒp/" },
        { e: "🏛️", en: "town hall", transcr: "таун хол", ru: "ратуша, муниципалитет", pn: "/taʊn hɔːl/" },
        { e: "🦷", en: "dentist", transcr: "дэнтист", ru: "стоматолог", pn: "/ˈdentɪst/" },
        { e: "🏥", en: "clinic", transcr: "клиник", ru: "клиника", pn: "/ˈklɪnɪk/" },
        { e: "💊", en: "pharmacy", transcr: "фамэси", ru: "аптека (официальн.)", pn: "/ˈfɑːməsi/" },
        { e: "🧺", en: "launderette", transcr: "лондэрэт", ru: "прачечная самообсл.", pn: "/ˌlɔːndəˈret/" },
        { e: "✂️", en: "hairdresser", transcr: "хэадрэсэ", ru: "парикмахер", pn: "/ˈheəˌdresə/" },
        { e: "💱", en: "change", transcr: "чейндж", ru: "менять; сдача (от покупки)", pn: "/tʃeɪndʒ/" },
        { e: "🤝", en: "meet", transcr: "мит", ru: "встречать, встречаться", pn: "/miːt/" },
        { e: "👋", en: "visit", transcr: "визит", ru: "посещать, навещать", pn: "/ˈvɪzɪt/" },
        { e: "📮", en: "post", transcr: "поуст", ru: "почта; отправить (письмо)", pn: "/pəʊst/" },
        { e: "💰", en: "currency", transcr: "карэнси", ru: "валюта, деньги (иностр.)", pn: "/ˈkʌrənsi/" },
        { e: "📬", en: "stamp", transcr: "стэмп", ru: "марка (почтовая)", pn: "/stæmp/" },
      ],

      dialogue: [
        { s: "m", en: "Hello. Where are you going today?", transcr: "Хэлоу. Уэа ар ю гоуин тудэй?", ru: "Привет. Куда ты идёшь сегодня?" },
        { s: "w", en: "I am going to town.", transcr: "Ай эм гоуин ту таун.", ru: "Я иду в город." },
        { s: "m", en: "Why are you going to town?", transcr: "Уай ар ю гоуин ту таун?", ru: "Зачем ты идёшь в город?" },
        { s: "w", en: "To take money at the cashpoint.", transcr: "Ту тэйк мани эт зэ кэшпойнт.", ru: "Снять деньги в банкомате." },
        { s: "m", en: "Are you going to the supermarket?", transcr: "Ар ю гоуин ту зэ супэмакит?", ru: "Ты идёшь в супермаркет?" },
        { s: "w", en: "Yes. I am going to the supermarket to buy food.", transcr: "Йес. Ай эм гоуин ту зэ супэмакит ту бай фуд.", ru: "Да. Я иду в супермаркет купить еду." },
        { s: "m", en: "Is there a pharmacy near the town centre?", transcr: "Из зэа э фамэси ниэ зэ таун сэнтэ?", ru: "Рядом с центром города есть аптека?" },
        { s: "w", en: "Yes. I go to the pharmacy to collect medicine.", transcr: "Йес. Ай гоу ту зэ фамэси ту кэлэкт мэдсэн.", ru: "Да. Я иду в аптеку забрать лекарство." },
        { s: "m", en: "Do you go to the post office?", transcr: "Ду ю гоу ту зэ поуст офис?", ru: "Ты идёшь на почту?" },
        { s: "w", en: "Yes. I go to the post office to send money.", transcr: "Йес. Ай гоу ту зэ поуст офис ту сэнд мани.", ru: "Да. Я иду на почту отправить деньги." },
        { s: "m", en: "Is there a library in town?", transcr: "Из зэа э лайбрэри ин таун?", ru: "В городе есть библиотека?" },
        { s: "w", en: "Yes. I go to the library to read.", transcr: "Йес. Ай гоу ту зэ лайбрэри ту рид.", ru: "Да. Я иду в библиотеку почитать." },
      ],

      quiz: [
        { q: '[COMPLETE] "She visits the pharmacy ___ collect medicine."', opts: ["to", "not to", "and", "at"], c: 0, expl: "to collect — инфинитив цели: to + базовый глагол. Не «at», не «and».", hint_ru: "зачем? → to + глагол." },
        { q: '[COMPLETE] "Why does she go there? — ___ visit the nurse."', opts: ["To", "Not to", "And", "What"], c: 0, expl: "To visit the nurse. — краткий ответ на Why? = To + глагол.", hint_ru: "краткий ответ: To + глагол." },
        { q: '[TRANSLATE] "библиотека"', opts: ["library", "clinic", "factory", "pharmacy"], c: 0, expl: "library — библиотека.", hint_ru: "library." },
        { q: '[TRANSLATE] "банкомат (брит.)"', opts: ["cashpoint", "supermarket", "warehouse", "square"], c: 0, expl: "cashpoint — банкомат в BrE. I go to the cashpoint to take money.", hint_ru: "cashpoint." },
        { q: '[TRANSLATE] "менять (деньги)"', opts: ["change", "meet", "visit", "post"], c: 0, expl: "change — менять. I go to the bank to change currency.", hint_ru: "change." },
        { q: '[CORRECT] Как правильно? (цель: навестить медсестру)', opts: ["They go to the clinic to visit the nurse.", "They go to the clinic visiting the nurse.", "They go to the clinic visit the nurse.", "They go to the clinic to visiting the nurse."], c: 0, expl: "to visit — to + базовый глагол. Не -ing после to.", hint_ru: "to + базовый глагол." },
        { q: '[COMPLETE] "I leave early ___ be late." (чтобы не опоздать)', opts: ["not to", "to", "not", "and"], c: 0, expl: "not to be late — чтобы не опоздать. not to + базовый глагол.", hint_ru: "not to = чтобы не." },
        { q: '[QUESTION] "___ do you go to the pharmacy?" (зачем?)', opts: ["Why", "Where", "When", "What"], c: 0, expl: "Why — зачем? Новый вопросительный маркер цели! Why + do/does?", hint_ru: "зачем? → Why?" },
        { q: "[LISTEN] I go to the pharmacy to collect medicine.", opts: ["Я иду в аптеку забрать лекарство.", "Я иду в клинику.", "Я иду в аптеку работать.", "Я иду в супермаркет."], c: 0, expl: "pharmacy — аптека, collect medicine — забрать лекарство.", hint_ru: "" },
        { q: "[GIST] По диалогу: какое место рабочий называет последним?", opts: ["Библиотеку.", "Аптеку.", "Супермаркет.", "Банкомат."], c: 0, expl: "«I go to the library to read.» — последнее место в диалоге — библиотека.", hint_ru: "Слушай последние реплики диалога." },
        { q: '[BUILD] «Я иду в аптеку забрать лекарство.»', build: ["I", "go", "to", "the", "pharmacy", "to", "collect", "medicine"], expl: "I go to the pharmacy to collect medicine. — to + глагол = зачем? Два «to»: первое предлог (куда?), второе инфинитив (зачем?).", hint_ru: "I go to [место] to [глагол]." },
        { q: '[TRANSLATE] "посещать, навещать"', opts: ["visit", "change", "meet", "stamp"], c: 0, expl: "visit — посещать, навещать. I go to the clinic to visit the doctor.", hint_ru: "visit." },
      ],

      everyday: {
        title_ru: "В городе",
        phrases: [
          { en: "I go to town to change money.", transcr: "Ай гоу ту таун ту чейндж мани.", ru: "Я еду в город поменять деньги." },
          { en: "Where is the cashpoint?", transcr: "Уэа из зэ кэшпойнт?", ru: "Где банкомат?" },
          { en: "I go to the post office to send money.", transcr: "Ай гоу ту зэ поуст офис ту сэнд мани.", ru: "Я иду на почту отправить деньги." },
          { en: "I need to go to the dentist.", transcr: "Ай нид ту гоу ту зэ дэнтист.", ru: "Мне нужно к стоматологу." },
          { en: "Why do you go to town? — To meet a friend.", transcr: "Уай ду ю гоу ту таун? — Ту мит э фрэнд.", ru: "Зачем идёшь в город? — Встретить друга." },
          { en: "Is there a pharmacy near here?", transcr: "Из зэа э фамэси ниэ хиэ?", ru: "Рядом есть аптека?" },
        ],
      },
    },

    // ─── L22 ──────────────────────────────────────────────────────────────────
    {
      id: 22,
      title_ru: "Еда и кухня: take / get / have",
      cefr: "A2 · take / get / have collocations · food & cooking",
      grammar: {
        title_ru: "take / get / have: глаголы на каждый день",
        intro_ru:
          'Три глагола, которые часто путают. Это <b>устойчивые пары</b> — учим целиком:<br>' +
          '🍽️ <b>have</b> = есть/пить, принимать: <span class="g-transcr">have breakfast</span> (завтракать), <span class="g-transcr">have a shower</span> (принять душ).<br>' +
          '🔑 <b>get</b> <span class="g-transcr">[гэт]</span> = получить / добраться / стать: <span class="g-transcr">get money</span>, <span class="g-transcr">get to work</span>, <span class="g-transcr">get tired</span>.<br>' +
          '✋ <b>take</b> = взять / ехать на / принять: <span class="g-transcr">take the bus</span>, <span class="g-transcr">take medicine</span>.',
        cultural_ru:
          'В русском один глагол часто покрывает разное, в английском — разные. ' +
          '«Принять душ» = <b>have</b> a shower (НЕ take, в BrE). «Сделать фото» = <b>take</b> a photo (НЕ make). ' +
          '«Добраться до работы» = <b>get</b> to work. Слушай пару «глагол + слово» как одно целое.',
        note_ru:
          '⚠️ Частые ошибки:<br>' +
          '«сделать фото» → <b>take</b> a photo (не <em>make a photo</em>).<br>' +
          '<b>get</b> — самый гибкий: get money (получить), get to work (добраться), get tired (стать). Смотри по смыслу.',
        forms: {
          positive: {
            label_ru: "🍽️ have — есть / пить / принимать",
            rule_ru:
              '<b>have</b> + еда / отдых:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>have</b> breakfast</div><div>завтракаю</div>' +
              '<div>We <b>have</b> a break</div><div>делаем перерыв</div>' +
              '<div>I <b>have</b> a shower</div><div>принимаю душ</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "have", example: "I have breakfast at six.", transcr: "Ай хэв брэкфэст эт сикс.", tr_ru: "Я завтракаю в шесть." },
              { subj: "мы", verb: "have", example: "We have lunch in the field.", transcr: "Уи хэв ланч ин зэ филд.", tr_ru: "Мы обедаем в поле." },
              { subj: "я", verb: "have", example: "I have a cup of tea now.", transcr: "Ай хэв э кап ов ти нау.", tr_ru: "Я пью чашку чая сейчас." },
            ],
          },
          negative: {
            label_ru: "🔑 get — получить / добраться / стать",
            rule_ru:
              '<b>get</b> = получить, добраться, стать:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>get</b> to work</div><div>добираюсь до работы</div>' +
              '<div>I <b>get</b> money</div><div>получаю деньги</div>' +
              '<div>I <b>get</b> tired</div><div>устаю (становлюсь)</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "get", example: "I get to work early.", transcr: "Ай гэт ту уёк ёли.", tr_ru: "Я добираюсь до работы рано." },
              { subj: "я", verb: "get", example: "I get money at the cashpoint.", transcr: "Ай гэт мани эт зэ кэшпойнт.", tr_ru: "Я получаю деньги в банкомате." },
              { subj: "я", verb: "get", example: "I get cold in the rain.", transcr: "Ай гэт коулд ин зэ рэйн.", tr_ru: "Я мёрзну под дождём." },
            ],
          },
          question: {
            label_ru: "✋ take — взять / ехать на / принять",
            rule_ru:
              '<b>take</b> = взять, ехать на, принять:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>take</b> the bus</div><div>еду на автобусе</div>' +
              '<div>I <b>take</b> medicine</div><div>принимаю лекарство</div>' +
              '<div>I <b>take</b> a photo</div><div>делаю фото</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "take", example: "I take the bus to town.", transcr: "Ай тэйк зэ бас ту таун.", tr_ru: "Я еду на автобусе в город." },
              { subj: "я", verb: "take", example: "I take my medicine now.", transcr: "Ай тэйк май мэдсэн нау.", tr_ru: "Я принимаю лекарство сейчас." },
              { subj: "я", verb: "take", example: "I take a photo of the field.", transcr: "Ай тэйк э фоутоу ов зэ филд.", tr_ru: "Я делаю фото поля." },
            ],
          },
        },
        examples: [
          { en: "I have breakfast at six.", transcr: "Ай хэв брэкфэст эт сикс.", ru: "Я завтракаю в шесть." },
          { en: "We have lunch in the field.", transcr: "Уи хэв ланч ин зэ филд.", ru: "Мы обедаем в поле." },
          { en: "Have a break and have a cup of tea.", transcr: "Хэв э брэйк энд хэв э кап ов ти.", ru: "Сделай перерыв и выпей чашку чая." },
          { en: "I get to work early.", transcr: "Ай гэт ту уёк ёли.", ru: "Я добираюсь до работы рано." },
          { en: "Get some bread from the shop.", transcr: "Гэт сам брэд фром зэ шоп.", ru: "Возьми хлеба в магазине." },
          { en: "I get cold in the rain.", transcr: "Ай гэт коулд ин зэ рэйн.", ru: "Я мёрзну под дождём." },
          { en: "Take the bus to town.", transcr: "Тэйк зэ бас ту таун.", ru: "Поезжай в город на автобусе." },
          { en: "Take your medicine now.", transcr: "Тэйк ё мэдсэн нау.", ru: "Прими лекарство сейчас." },
          { en: "I take a photo of the field.", transcr: "Ай тэйк э фоутоу ов зэ филд.", ru: "Я делаю фото поля." },
          { en: "Fry the eggs in the pan.", transcr: "Фрай зэ эгз ин зэ пэн.", ru: "Пожарь яйца на сковороде." },
          { en: "Peel the carrots and boil them.", transcr: "Пил зэ кэротс энд бойл зэм.", ru: "Почисти морковь и свари её." },
          { en: "Slice the cabbage and the cucumber.", transcr: "Слайс зэ кэбидж энд зэ кьюкамбэ.", ru: "Нарежь капусту и огурец." },
        ],
        simple_ru: {
          formula:
            '🍽️ <b>have</b> = есть/принимать · 🔑 <b>get</b> = получить/добраться/стать · ✋ <b>take</b> = взять/ехать/принять<br>' +
            '<span class="g-transcr">have lunch · get to work · take the bus</span>',
          examples: [
            { en: "I have lunch at one.", transcr: "Ай хэв ланч эт уан.", ru: "have lunch = обедать. В час дня." },
            { en: "I take the bus to work.", transcr: "Ай тэйк зэ бас ту уёк.", ru: "take the bus = ехать на автобусе." },
          ],
        },
        ytQuery: "take get have collocations английский A2 для начинающих разница",
      },

      words: [
        { e: "🍎", en: "apple", transcr: "эпл", ru: "яблоко", pn: "/ˈæpl/" },
        { e: "🍐", en: "pear", transcr: "пэа", ru: "груша", pn: "/peə/" },
        { e: "🍇", en: "grape", transcr: "грэйп", ru: "виноград", pn: "/ɡreɪp/" },
        { e: "🍓", en: "strawberry", transcr: "стробэри", ru: "клубника", pn: "/ˈstrɔːbəri/" },
        { e: "🍒", en: "cherry", transcr: "чэри", ru: "вишня, черешня", pn: "/ˈtʃeri/" },
        { e: "🥬", en: "cabbage", transcr: "кэбидж", ru: "капуста", pn: "/ˈkæbɪdʒ/" },
        { e: "🥗", en: "lettuce", transcr: "лэтис", ru: "салат (листовой)", pn: "/ˈletɪs/" },
        { e: "🍄", en: "mushroom", transcr: "машрум", ru: "гриб", pn: "/ˈmʌʃrʊm/" },
        { e: "🌶️", en: "pepper", transcr: "пэпэ", ru: "перец", pn: "/ˈpepə/" },
        { e: "🥒", en: "cucumber", transcr: "кьюкамбэ", ru: "огурец", pn: "/ˈkjuːkʌmbə/" },
        { e: "🌽", en: "sweetcorn", transcr: "суиткон", ru: "кукуруза (сахарная)", pn: "/ˈswiːtkɔːn/" },
        { e: "🥩", en: "beef", transcr: "биф", ru: "говядина", pn: "/biːf/" },
        { e: "🐑", en: "lamb", transcr: "лэм", ru: "баранина", pn: "/læm/" },
        { e: "🍖", en: "ham", transcr: "хэм", ru: "ветчина", pn: "/hæm/" },
        { e: "🌭", en: "sausage", transcr: "сосидж", ru: "колбаса, сосиска", pn: "/ˈsɒsɪdʒ/" },
        { e: "🌾", en: "flour", transcr: "флауэ", ru: "мука", pn: "/ˈflaʊə/" },
        { e: "🍯", en: "jam", transcr: "джэм", ru: "джем, варенье", pn: "/dʒæm/" },
        { e: "🥫", en: "sauce", transcr: "сос", ru: "соус", pn: "/sɔːs/" },
        { e: "🥛", en: "yoghurt", transcr: "йогэт", ru: "йогурт", pn: "/ˈjɒɡət/" },
        { e: "🥘", en: "pan", transcr: "пэн", ru: "сковорода", pn: "/pæn/" },
        { e: "🍲", en: "pot", transcr: "пот", ru: "кастрюля", pn: "/pɒt/" },
        { e: "☕", en: "cup", transcr: "кап", ru: "чашка", pn: "/kʌp/" },
        { e: "🍳", en: "fry", transcr: "фрай", ru: "жарить", pn: "/fraɪ/" },
        { e: "♨️", en: "boil", transcr: "бойл", ru: "кипятить, варить", pn: "/bɔɪl/" },
        { e: "🥖", en: "bake", transcr: "бэйк", ru: "печь (в духовке)", pn: "/beɪk/" },
        { e: "🥔", en: "peel", transcr: "пил", ru: "чистить (кожуру)", pn: "/piːl/" },
        { e: "🔪", en: "slice", transcr: "слайс", ru: "резать (ломтиками)", pn: "/slaɪs/" },
        { e: "🍽️", en: "meal", transcr: "мил", ru: "приём пищи, еда", pn: "/miːl/" },
        { e: "🥣", en: "breakfast", transcr: "брэкфэст", ru: "завтрак", pn: "/ˈbrekfəst/" },
        { e: "🍛", en: "dinner", transcr: "динэ", ru: "ужин (главная еда)", pn: "/ˈdɪnə/" },
      ],

      dialogue: [
        { s: "m", en: "Dinner time. What do we have today?", transcr: "Динэ тайм. Уот ду уи хэв тудэй?", ru: "Время ужина. Что у нас сегодня?" },
        { s: "w", en: "We have sausage, eggs and bread.", transcr: "Уи хэв сосидж, эгз энд брэд.", ru: "У нас колбаса, яйца и хлеб." },
        { s: "m", en: "Good. Get a pan. I can fry the eggs.", transcr: "Гуд. Гэт э пэн. Ай кэн фрай зэ эгз.", ru: "Хорошо. Возьми сковороду. Я пожарю яйца." },
        { s: "w", en: "Do we have carrots?", transcr: "Ду уи хэв кэротс?", ru: "У нас есть морковь?" },
        { s: "m", en: "Yes. Peel them and boil them in the pot.", transcr: "Йес. Пил зэм энд бойл зэм ин зэ пот.", ru: "Да. Почисти и свари их в кастрюле." },
        { s: "w", en: "I take the cabbage. I can slice it.", transcr: "Ай тэйк зэ кэбидж. Ай кэн слайс ит.", ru: "Я беру капусту. Я её нарежу." },
        { s: "m", en: "Get some water. We boil the sweetcorn now.", transcr: "Гэт сам уотэ. Уи бойл зэ суиткон нау.", ru: "Возьми воды. Сварим кукурузу сейчас." },
        { s: "w", en: "Do we have sauce and yoghurt?", transcr: "Ду уи хэв сос энд йогэт?", ru: "У нас есть соус и йогурт?" },
        { s: "m", en: "Yes. And we have apples and grapes.", transcr: "Йес. Энд уи хэв эплз энд грэйпс.", ru: "Да. И есть яблоки и виноград." },
        { s: "w", en: "I am tired. I want a cup of tea.", transcr: "Ай эм тайэд. Ай уонт э кап ов ти.", ru: "Я устал. Хочу чашку чая." },
        { s: "m", en: "Take a cup. The tea is hot.", transcr: "Тэйк э кап. Зэ ти из хот.", ru: "Возьми чашку. Чай горячий." },
        { s: "w", en: "Good. Dinner is ready now.", transcr: "Гуд. Динэ из рэди нау.", ru: "Хорошо. Ужин готов." },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ breakfast at six." (завтракаю)', opts: ["have", "get", "take", "do"], c: 0, expl: "have breakfast — завтракать. С едой — have. Не get/take.", hint_ru: "еда → have." },
        { q: '[COMPLETE] "I ___ the bus to town." (еду на автобусе)', opts: ["take", "have", "get", "do"], c: 0, expl: "take the bus — ехать на автобусе. Транспорт — take.", hint_ru: "транспорт → take." },
        { q: '[COMPLETE] "I ___ to work early." (добираюсь)', opts: ["get", "have", "take", "do"], c: 0, expl: "get to work — добраться до работы. «Добраться» — get.", hint_ru: "добраться → get." },
        { q: '[CORRECT] «Я делаю фото поля.»', opts: ["I take a photo of the field.", "I have a photo of the field.", "I get a photo of the field.", "I do a photo of the field."], c: 0, expl: "take a photo — делать фото. По-русски «сделать фото», но в английском — take a photo (НЕ make, НЕ do).", hint_ru: "фото → take a photo." },
        { q: '[COMPLETE] "I ___ tired at work." (устаю)', opts: ["get", "take", "have", "do"], c: 0, expl: "get tired — уставать (становиться усталым). «Стать» — get.", hint_ru: "стать → get." },
        { q: '[TRANSLATE] "колбаса, сосиска"', opts: ["sausage", "beef", "ham", "lamb"], c: 0, expl: "sausage — колбаса. beef — говядина, ham — ветчина, lamb — баранина.", hint_ru: "sausage." },
        { q: '[TRANSLATE] "яблоко"', opts: ["apple", "pear", "grape", "cherry"], c: 0, expl: "apple — яблоко. pear — груша, grape — виноград.", hint_ru: "apple." },
        { q: '[TRANSLATE] "жарить"', opts: ["fry", "boil", "bake", "peel"], c: 0, expl: "fry — жарить (на сковороде). boil — варить, bake — печь, peel — чистить.", hint_ru: "fry." },
        { q: '[TRANSLATE] "кипятить, варить"', opts: ["boil", "fry", "bake", "slice"], c: 0, expl: "boil — варить в воде. fry — жарить, bake — печь, slice — резать.", hint_ru: "boil." },
        { q: "[LISTEN] I have a cup of tea.", opts: ["Я пью чашку чая.", "Я беру автобус.", "Я мою чашку.", "Я готовлю ужин."], c: 0, expl: "have a cup of tea — пить чашку чая.", hint_ru: "" },
        { q: "[GIST] По диалогу: что рабочий делает с морковью?", opts: ["Чистит и варит.", "Жарит на сковороде.", "Режет ломтиками.", "Печёт в духовке."], c: 0, expl: "«Peel them and boil them in the pot.» — морковь чистят и варят.", hint_ru: "Слушай реплику про carrots." },
        { q: '[BUILD] «Я пью чашку чая.»', build: ["I", "have", "a", "cup", "of", "tea"], expl: "I have a cup of tea. — have a cup of tea = пить чашку чая. С едой и питьём — have.", hint_ru: "I have a cup of tea." },
      ],

      everyday: {
        title_ru: "Еда и кухня",
        phrases: [
          { en: "What's for dinner?", transcr: "Уотс фо динэ?", ru: "Что на ужин?" },
          { en: "I'm hungry.", transcr: "Айм хангри.", ru: "Я голоден." },
          { en: "Can I have some water, please?", transcr: "Кэн ай хэв сам уотэ, плиз?", ru: "Можно воды, пожалуйста?" },
          { en: "Dinner is ready.", transcr: "Динэ из рэди.", ru: "Ужин готов." },
          { en: "Have a cup of tea.", transcr: "Хэв э кап ов ти.", ru: "Выпей чашку чая." },
          { en: "Help yourself.", transcr: "Хэлп йосэлф.", ru: "Угощайся." },
        ],
      },
    },

    // ─── L23 ──────────────────────────────────────────────────────────────────
    {
      id: 23,
      title_ru: "Опыт и оплата: Present Perfect",
      cefr: "A2 · Present Perfect (ever/never/yet/just) · banking & admin",
      grammar: {
        title_ru: "Present Perfect: have + 3-я форма (опыт и «только что»)",
        intro_ru:
          '<b>have / has + 3-я форма глагола</b> — связь прошлого с настоящим (опыт или недавнее):<br>' +
          'I <b>have worked</b> on a farm. — Я работал на ферме (есть такой опыт).<br>' +
          'I <b>have not been paid</b> yet. — Мне ещё не заплатили.<br>' +
          '3-я форма: обычно <b>+ed</b> (work→worked, sign→signed); особые: <b>be→been</b>, <b>pay→paid</b>.',
        cultural_ru:
          'В русском нет точного аналога. Present Perfect = <b>опыт «когда-либо»</b> ' +
          '(<span class="g-transcr">Have you ever worked…?</span>) и <b>«только что / уже / ещё нет»</b>. ' +
          'Время-маркеры: <b>ever</b> <span class="g-transcr">[эвэ]</span> (когда-либо?), <b>never</b> (никогда), ' +
          '<b>just</b> <span class="g-transcr">[джаст]</span> (только что), <b>already</b> <span class="g-transcr">[олрэди]</span> (уже), ' +
          '<b>yet</b> <span class="g-transcr">[йет]</span> (ещё нет — в вопросе/отрицании).',
        note_ru:
          '⚠️ Present Perfect — без точного времени (НЕ «yesterday»). ' +
          'Точное «когда» (yesterday, last week) → Past Simple (L13). ' +
          'Здесь важно ЧТО случилось к сейчас, а не когда.',
        forms: {
          positive: {
            label_ru: "✅ have / has + 3-я форма",
            rule_ru:
              '<b>I/you/we/they have</b> + 3-я форма · <b>he/she/it has</b> + 3-я форма:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>have worked</b> here</div><div>я (уже) работал здесь</div>' +
              '<div>She <b>has signed</b> the form</div><div>она подписала форму</div>' +
              '<div>I <b>have just paid</b> the rent</div><div>я только что оплатил аренду</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "have worked", example: "I have worked on a farm.", transcr: "Ай хэв уёкт он э фам.", tr_ru: "Я работал на ферме (есть опыт)." },
              { subj: "она", verb: "has signed", example: "She has signed the contract.", transcr: "Ши хэз сайнд зэ контрэкт.", tr_ru: "Она подписала контракт." },
              { subj: "я", verb: "have paid", example: "I have already paid the rent.", transcr: "Ай хэв олрэди пэйд зэ рэнт.", tr_ru: "Я уже оплатил аренду." },
            ],
          },
          negative: {
            label_ru: "❌ have not / has not + 3-я форма",
            rule_ru:
              '<b>haven\'t / hasn\'t</b> + 3-я форма. С <b>yet</b> = «ещё не…»:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>have not been paid</b> yet</div><div>мне ещё не заплатили</div>' +
              '<div>He <b>has not signed</b> it</div><div>он это не подписал</div>' +
              '<div>I <b>have not finished</b> yet</div><div>я ещё не закончил</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "have not been paid", example: "I have not been paid yet.", transcr: "Ай хэв нот бин пэйд йет.", tr_ru: "Мне ещё не заплатили." },
              { subj: "он", verb: "has not signed", example: "He has not signed the document.", transcr: "Хи хэз нот сайнд зэ докьюмэнт.", tr_ru: "Он не подписал документ." },
              { subj: "я", verb: "have not finished", example: "I have not finished yet.", transcr: "Ай хэв нот финишт йет.", tr_ru: "Я ещё не закончил." },
            ],
          },
          question: {
            label_ru: "❓ Have / Has …? (часто с ever)",
            rule_ru:
              '<b>Have you ever…?</b> = есть ли опыт? Краткий ответ: <b>Yes, I have / No, I have not</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>Have</b> you <b>ever worked</b> on a farm?</div><div>ты когда-нибудь работал на ферме?</div>' +
              '<div><b>Have</b> you <b>been paid</b> yet?</div><div>тебе уже заплатили?</div>' +
              '<div><b>Has</b> she <b>signed</b> the form?</div><div>она подписала форму?</div>' +
              '</div>',
            table: [
              { subj: "ты", verb: "Have … ever…?", example: "Have you ever worked on a farm?", transcr: "Хэв ю эвэ уёкт он э фам?", tr_ru: "Ты когда-нибудь работал на ферме?" },
              { subj: "ты", verb: "Have … been paid?", example: "Have you been paid yet?", transcr: "Хэв ю бин пэйд йет?", tr_ru: "Тебе уже заплатили?" },
              { subj: "она", verb: "Has … signed?", example: "Has she signed the form?", transcr: "Хэз ши сайнд зэ форм?", tr_ru: "Она подписала форму?" },
            ],
          },
        },
        examples: [
          { en: "Have you ever worked on a farm?", transcr: "Хэв ю эвэ уёкт он э фам?", ru: "Ты когда-нибудь работал на ферме?" },
          { en: "Yes, I have worked on a farm.", transcr: "Йес, ай хэв уёкт он э фам.", ru: "Да, я работал на ферме." },
          { en: "I have never worked in an office.", transcr: "Ай хэв нэвэ уёкт ин эн офис.", ru: "Я никогда не работал в офисе." },
          { en: "I have just signed the contract.", transcr: "Ай хэв джаст сайнд зэ контрэкт.", ru: "Я только что подписал контракт." },
          { en: "She has just started work.", transcr: "Ши хэз джаст статид уёк.", ru: "Она только что начала работу." },
          { en: "I have not been paid yet.", transcr: "Ай хэв нот бин пэйд йет.", ru: "Мне ещё не заплатили." },
          { en: "Have you been paid yet?", transcr: "Хэв ю бин пэйд йет?", ru: "Тебе уже заплатили?" },
          { en: "I have already filled in the form.", transcr: "Ай хэв олрэди филд ин зэ форм.", ru: "Я уже заполнил форму." },
          { en: "He has paid the rent.", transcr: "Хи хэз пэйд зэ рэнт.", ru: "Он оплатил аренду." },
          { en: "I have finished my work today.", transcr: "Ай хэв финишт май уёк тудэй.", ru: "Я закончил работу сегодня." },
          { en: "Have you signed the document?", transcr: "Хэв ю сайнд зэ докьюмэнт?", ru: "Ты подписал документ?" },
          { en: "I have not started yet.", transcr: "Ай хэв нот статид йет.", ru: "Я ещё не начал." },
        ],
        simple_ru: {
          formula:
            '<b>have / has + 3-я форма</b> (work→worked, be→been, pay→paid) = опыт ИЛИ «только что».<br>' +
            '<span class="g-transcr">ever</span> когда-либо? · <span class="g-transcr">never</span> никогда · <span class="g-transcr">just</span> только что · <span class="g-transcr">yet</span> ещё нет',
          examples: [
            { en: "Have you ever worked on a farm?", transcr: "Хэв ю эвэ уёкт он э фам?", ru: "ever = когда-либо? Вопрос об опыте." },
            { en: "I have not been paid yet.", transcr: "Ай хэв нот бин пэйд йет.", ru: "yet = ещё нет. «Мне ещё не заплатили»." },
          ],
        },
        ytQuery: "present perfect ever never yet just английский A2 для начинающих",
      },

      words: [
        { e: "📒", en: "account", transcr: "экаунт", ru: "счёт (банковский)", pn: "/əˈkaʊnt/" },
        { e: "🔢", en: "pin", transcr: "пин", ru: "пин-код", pn: "/pɪn/" },
        { e: "🏦", en: "balance", transcr: "бэлэнс", ru: "остаток на счёте", pn: "/ˈbæləns/" },
        { e: "💰", en: "wage", transcr: "уэйдж", ru: "зарплата (недельная)", pn: "/weɪdʒ/" },
        { e: "💵", en: "salary", transcr: "сэлэри", ru: "зарплата (месячная)", pn: "/ˈsæləri/" },
        { e: "💸", en: "tax", transcr: "тэкс", ru: "налог", pn: "/tæks/" },
        { e: "💳", en: "payment", transcr: "пэймэнт", ru: "платёж, оплата", pn: "/ˈpeɪmənt/" },
        { e: "🧾", en: "receipt", transcr: "рисит", ru: "чек, квитанция", pn: "/rɪˈsiːt/" },
        { e: "🎁", en: "bonus", transcr: "боунэс", ru: "премия, бонус", pn: "/ˈbəʊnəs/" },
        { e: "💷", en: "note", transcr: "ноут", ru: "банкнота, купюра", pn: "/nəʊt/" },
        { e: "🔁", en: "transfer", transcr: "трэнсфё", ru: "перевод (денег)", pn: "/ˈtrænsfɜː/" },
        { e: "💲", en: "fee", transcr: "фи", ru: "комиссия, сбор", pn: "/fiː/" },
        { e: "📥", en: "deposit", transcr: "дипозит", ru: "внесение на счёт; депозит", pn: "/dɪˈpɒzɪt/" },
        { e: "📊", en: "statement", transcr: "стэйтмэнт", ru: "выписка (по счёту)", pn: "/ˈsteɪtmənt/" },
        { e: "🛡️", en: "insurance", transcr: "иншуэрэнс", ru: "страховка", pn: "/ɪnˈʃʊərəns/" },
        { e: "🏠", en: "rent", transcr: "рэнт", ru: "аренда, квартплата", pn: "/rent/" },
        { e: "📃", en: "bill", transcr: "бил", ru: "счёт (к оплате)", pn: "/bɪl/" },
        { e: "⏰", en: "deadline", transcr: "дэдлайн", ru: "крайний срок", pn: "/ˈdedlaɪn/" },
        { e: "📄", en: "document", transcr: "докьюмэнт", ru: "документ", pn: "/ˈdɒkjumənt/" },
        { e: "📋", en: "copy", transcr: "копи", ru: "копия", pn: "/ˈkɒpi/" },
        { e: "✉️", en: "envelope", transcr: "энвэлоуп", ru: "конверт", pn: "/ˈenvələʊp/" },
        { e: "📨", en: "letter", transcr: "лэтэ", ru: "письмо", pn: "/ˈletə/" },
        { e: "📦", en: "parcel", transcr: "пасл", ru: "посылка", pn: "/ˈpɑːsl/" },
        { e: "🏢", en: "agency", transcr: "эйджэнси", ru: "агентство (по найму)", pn: "/ˈeɪdʒənsi/" },
        { e: "👔", en: "employer", transcr: "имплойэ", ru: "работодатель", pn: "/ɪmˈplɔɪə/" },
        { e: "🕐", en: "hours", transcr: "ауэз", ru: "часы (рабочие)", pn: "/ˈaʊəz/" },
        { e: "📬", en: "receive", transcr: "рисив", ru: "получать", pn: "/rɪˈsiːv/" },
        { e: "📈", en: "earn", transcr: "ён", ru: "зарабатывать", pn: "/ɜːn/" },
        { e: "🛒", en: "spend", transcr: "спэнд", ru: "тратить", pn: "/spend/" },
        { e: "🐷", en: "save", transcr: "сэйв", ru: "копить, экономить", pn: "/seɪv/" },
      ],

      dialogue: [
        { s: "m", en: "Hello. Have you ever worked on a farm?", transcr: "Хэлоу. Хэв ю эвэ уёкт он э фам?", ru: "Здравствуйте. Вы когда-нибудь работали на ферме?" },
        { s: "w", en: "Yes, I have worked on a farm.", transcr: "Йес, ай хэв уёкт он э фам.", ru: "Да, я работал на ферме." },
        { s: "m", en: "Good. Have you signed the contract?", transcr: "Гуд. Хэв ю сайнд зэ контрэкт?", ru: "Хорошо. Вы подписали контракт?" },
        { s: "w", en: "Yes, I have just signed it.", transcr: "Йес, ай хэв джаст сайнд ит.", ru: "Да, я только что его подписал." },
        { s: "m", en: "Have you filled in the form?", transcr: "Хэв ю филд ин зэ форм?", ru: "Вы заполнили форму?" },
        { s: "w", en: "Not yet. Can you help me, please?", transcr: "Нот йет. Кэн ю хэлп ми, плиз?", ru: "Ещё нет. Можете помочь, пожалуйста?" },
        { s: "m", en: "Yes, I can help. Have you been paid yet?", transcr: "Йес, ай кэн хэлп. Хэв ю бин пэйд йет?", ru: "Да, помогу. Вам уже заплатили?" },
        { s: "w", en: "No, I have not been paid yet.", transcr: "Ноу, ай хэв нот бин пэйд йет.", ru: "Нет, мне ещё не заплатили." },
        { s: "m", en: "Check your account and your payslip.", transcr: "Чек ё экаунт энд ё пэйслип.", ru: "Проверьте свой счёт и расчётный лист." },
        { s: "w", en: "I have a bill. I pay the rent now.", transcr: "Ай хэв э бил. Ай пэй зэ рэнт нау.", ru: "У меня счёт. Я плачу аренду сейчас." },
        { s: "m", en: "Have you got your document and letter?", transcr: "Хэв ю гот ё докьюмэнт энд лэтэ?", ru: "У вас есть документ и письмо?" },
        { s: "w", en: "Yes. I have everything now. Thank you.", transcr: "Йес. Ай хэв эврисин нау. Сэнк ю.", ru: "Да. У меня всё есть. Спасибо." },
      ],

      quiz: [
        { q: '[COMPLETE] "Have you ___ worked on a farm?" (когда-либо)', opts: ["ever", "never", "yet", "just"], c: 0, expl: "Have you ever worked…? — ever = когда-либо? Вопрос об опыте.", hint_ru: "когда-либо? → ever." },
        { q: '[COMPLETE] "I ___ been paid yet." (ещё не)', opts: ["have not", "have", "has", "did"], c: 0, expl: "I have not been paid yet. — «ещё не» = have not + yet. Present Perfect.", hint_ru: "ещё не → have not … yet." },
        { q: '[COMPLETE] "I have ___ signed the contract." (только что)', opts: ["just", "yet", "ever", "never"], c: 0, expl: "I have just signed — just = только что. Недавнее действие.", hint_ru: "только что → just." },
        { q: '[CORRECT] «Я работал на ферме (есть опыт).»', opts: ["I have worked on a farm.", "I have work on a farm.", "I has worked on a farm.", "I have working on a farm."], c: 0, expl: "have + 3-я форма (worked). I → have (не has), форма worked (не work/working).", hint_ru: "have + worked." },
        { q: '[COMPLETE] "She ___ signed the form." (она, уже)', opts: ["has", "have", "did", "is"], c: 0, expl: "She has signed — he/she/it → has. Present Perfect, 3-е лицо.", hint_ru: "she → has." },
        { q: '[TRANSLATE] "зарплата (недельная)"', opts: ["wage", "rent", "tax", "fee"], c: 0, expl: "wage — недельная зарплата. rent — аренда, tax — налог, fee — комиссия.", hint_ru: "wage." },
        { q: '[TRANSLATE] "налог"', opts: ["tax", "fee", "bill", "bonus"], c: 0, expl: "tax — налог. fee — комиссия, bill — счёт, bonus — премия.", hint_ru: "tax." },
        { q: '[TRANSLATE] "счёт (банковский)"', opts: ["account", "receipt", "statement", "deposit"], c: 0, expl: "account — банковский счёт. receipt — чек, statement — выписка, deposit — взнос.", hint_ru: "account." },
        { q: '[QUESTION] "___ you been paid yet?" (тебе заплатили?)', opts: ["Have", "Did", "Do", "Are"], c: 0, expl: "Have you been paid yet? — Present Perfect: Have + you + been + paid.", hint_ru: "Present Perfect → Have…?" },
        { q: "[LISTEN] I have not been paid yet.", opts: ["Мне ещё не заплатили.", "Мне уже заплатили.", "Я заплатил налог.", "Я получил премию."], c: 0, expl: "have not been paid yet — мне ещё не заплатили.", hint_ru: "" },
        { q: "[GIST] По диалогу: заплатили ли рабочему?", opts: ["Нет, ещё не заплатили.", "Да, уже заплатили.", "Заплатили премию.", "Заплатили вчера."], c: 0, expl: "«No, I have not been paid yet.» — рабочему ещё не заплатили.", hint_ru: "Слушай реплику про paid." },
        { q: '[BUILD] «Я только что подписал контракт.»', build: ["I", "have", "just", "signed", "the", "contract"], expl: "I have just signed the contract. — have + just + 3-я форма (signed) = только что подписал.", hint_ru: "I have just signed…" },
      ],

      everyday: {
        title_ru: "Деньги и документы",
        phrases: [
          { en: "I haven't been paid.", transcr: "Ай хэвнт бин пэйд.", ru: "Мне не заплатили." },
          { en: "When do I get paid?", transcr: "Уэн ду ай гет пэйд?", ru: "Когда мне заплатят?" },
          { en: "Can I have a payslip, please?", transcr: "Кэн ай хэв э пэйслип, плиз?", ru: "Можно расчётный лист, пожалуйста?" },
          { en: "I don't understand this bill.", transcr: "Ай доунт андэстэнд зис бил.", ru: "Я не понимаю этот счёт." },
          { en: "Is this my wage?", transcr: "Из зис май уэйдж?", ru: "Это моя зарплата?" },
          { en: "Can you help me with this form?", transcr: "Кэн ю хэлп ми уиз зис форм?", ru: "Поможете мне с этой формой?" },
        ],
      },
    },

    {
      id: 24,
      title_ru: "Что происходило на смене (рассказ)",
      cefr: "B1 · Past Continuous & Past Simple · nature & small talk",
      grammar: {
        title_ru: "Past Continuous: was / were + …ing (что ДЛИЛОСЬ в прошлом)",
        intro_ru:
          '<b>was / were + …ing</b> — действие, которое ДЛИЛОСЬ в какой-то момент в прошлом (Past Continuous):<br>' +
          'I <b>was picking</b> strawberries. — Я собирал клубнику (был в процессе).<br>' +
          'Сравни с Past Simple (L13): I <b>picked</b> strawberries. — Я собрал (завершено).<br>' +
          '<b>was</b> — для I/he/she/it · <b>were</b> — для you/we/they.',
        cultural_ru:
          'Главное правило B1 — <b>контраст</b>: длинное фоновое действие (Past Continuous) + короткое, ' +
          'которое его прерывает (Past Simple).<br>' +
          '<b>when</b> <span class="g-transcr">[уэн]</span> + короткое: I was working <b>when</b> the rain started.<br>' +
          '<b>while</b> <span class="g-transcr">[уайл]</span> + длинное: <b>While</b> we were loading, Tom called.<br>' +
          'Коннекторы рассказа: <b>so</b> <span class="g-transcr">[соу]</span> (поэтому = результат), ' +
          '<b>because</b> <span class="g-transcr">[бикоз]</span> (потому что = причина), ' +
          '<b>although</b> <span class="g-transcr">[олзоу]</span> (хотя = контраст), ' +
          '<b>as</b> <span class="g-transcr">[эз]</span> (когда / так как).',
        note_ru:
          '⚠️ Частая ошибка — путать when и while. <b>when</b> идёт с коротким Past Simple ' +
          '(when it started), <b>while</b> — с длинным Past Continuous (while we were working). ' +
          'И не путай <b>so</b> (результат) с <b>because</b> (причина).',
        visual_ru:
          '<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="14" y="24" font-size="13" fill="var(--text2)">Past Continuous (длилось) + Past Simple (прервало)</text>' +
          '<text x="36" y="64" font-size="14" fill="var(--text)">I was picking…</text>' +
          '<rect x="34" y="72" width="250" height="20" rx="10" fill="#2e7d32"/>' +
          '<line x1="20" y1="150" x2="316" y2="150" stroke="var(--text2)" stroke-width="2"/>' +
          '<polygon points="316,150 306,145 306,155" fill="var(--text2)"/>' +
          '<text x="20" y="170" font-size="12" fill="var(--text2)">прошлое</text>' +
          '<text x="262" y="170" font-size="12" fill="var(--text2)">сейчас</text>' +
          '<line x1="178" y1="58" x2="178" y2="150" stroke="#c62828" stroke-width="3"/>' +
          '<circle cx="178" cy="82" r="7" fill="#c62828"/>' +
          '<text x="188" y="120" font-size="13" fill="#c62828">the rain started</text>' +
          '<rect x="20" y="194" width="14" height="14" rx="3" fill="#2e7d32"/>' +
          '<text x="42" y="206" font-size="12" fill="var(--text)">Past Continuous — was/were + …ing (фон)</text>' +
          '<rect x="20" y="218" width="14" height="14" rx="3" fill="#c62828"/>' +
          '<text x="42" y="230" font-size="12" fill="var(--text)">Past Simple — короткое, прерывает (when)</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ was / were + …ing",
            rule_ru:
              '<b>I/he/she/it was</b> + …ing · <b>you/we/they were</b> + …ing:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>was picking</b></div><div>я собирал (тогда)</div>' +
              '<div>We <b>were working</b></div><div>мы работали (тогда)</div>' +
              '<div>It <b>was raining</b></div><div>шёл дождь</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "was pulling", example: "I was pulling weeds.", transcr: "Ай уоз пулинг уидз.", tr_ru: "Я выдёргивал сорняки." },
              { subj: "мы", verb: "were working", example: "We were working in the field.", transcr: "Уи уё уёкинг ин зэ филд.", tr_ru: "Мы работали в поле." },
              { subj: "оно", verb: "was raining", example: "It was raining hard.", transcr: "Ит уоз рэйнинг хад.", tr_ru: "Шёл сильный дождь." },
            ],
          },
          negative: {
            label_ru: "❌ was not / were not + …ing",
            rule_ru:
              '<b>was not (wasn\'t) / were not (weren\'t)</b> + …ing:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>was not working</b></div><div>я не работал (тогда)</div>' +
              '<div>They <b>were not picking</b></div><div>они не собирали</div>' +
              '<div>It <b>was not raining</b></div><div>дождя не было</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "was not working", example: "I was not working then.", transcr: "Ай уоз нот уёкинг зэн.", tr_ru: "Я тогда не работал." },
              { subj: "они", verb: "were not picking", example: "They were not picking apples.", transcr: "Зэй уё нот пикинг эплз.", tr_ru: "Они не собирали яблоки." },
              { subj: "оно", verb: "was not raining", example: "It was not raining.", transcr: "Ит уоз нот рэйнинг.", tr_ru: "Дождя не было." },
            ],
          },
          question: {
            label_ru: "❓ Was / Were …? + …ing",
            rule_ru:
              '<b>Was</b> he …ing? · <b>Were</b> you …ing? Краткий ответ: Yes, I was / No, I was not:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>Was</b> it <b>raining</b>?</div><div>шёл дождь?</div>' +
              '<div><b>Were</b> you <b>working</b>?</div><div>ты работал?</div>' +
              '<div>What <b>were</b> you <b>doing</b>?</div><div>что ты делал?</div>' +
              '</div>',
            table: [
              { subj: "оно", verb: "Was … raining?", example: "Was it raining?", transcr: "Уоз ит рэйнинг?", tr_ru: "Шёл дождь?" },
              { subj: "ты", verb: "Were … working?", example: "Were you working?", transcr: "Уё ю уёкинг?", tr_ru: "Ты работал?" },
              { subj: "ты", verb: "What … doing?", example: "What were you doing?", transcr: "Уот уё ю дуинг?", tr_ru: "Что ты делал?" },
            ],
          },
        },
        examples: [
          { en: "Yesterday I was working in the field.", transcr: "Йестэдэй ай уоз уёкинг ин зэ филд.", ru: "Вчера я работал в поле." },
          { en: "I was picking strawberries when the rain started.", transcr: "Ай уоз пикинг стробэриз уэн зэ рэйн статид.", ru: "Я собирал клубнику, когда начался дождь." },
          { en: "It was raining when we started work.", transcr: "Ит уоз рэйнинг уэн уи статид уёк.", ru: "Шёл дождь, когда мы начали работу." },
          { en: "While we were loading the crates, Tom called us.", transcr: "Уайл уи уё лоудинг зэ крэйтс, Том колд ас.", ru: "Пока мы грузили ящики, Том позвал нас." },
          { en: "Everyone was working hard when the manager called.", transcr: "Эвриуан уоз уёкинг хад уэн зэ мэниджэ колд.", ru: "Все усердно работали, когда менеджер позвал." },
          { en: "I stopped because it was raining.", transcr: "Ай стопт бикоз ит уоз рэйнинг.", ru: "Я остановился, потому что шёл дождь." },
          { en: "It was raining, so we stopped work.", transcr: "Ит уоз рэйнинг, соу уи стопт уёк.", ru: "Шёл дождь, поэтому мы прекратили работу." },
          { en: "Although I was tired, I finished my row.", transcr: "Олзоу ай уоз тайэд, ай финишт май роу.", ru: "Хотя я устал, я закончил свой ряд." },
          { en: "Suddenly, it started to rain.", transcr: "Саднли, ит статид ту рэйн.", ru: "Вдруг пошёл дождь." },
          { en: "Luckily, it was hot and the crops were dry.", transcr: "Лакили, ит уоз хот энд зэ кропс уё драй.", ru: "К счастью, было жарко, и урожай был сухой." },
          { en: "Unfortunately, I was late because the bus left.", transcr: "Анфочнэтли, ай уоз лэйт бикоз зэ бас лэфт.", ru: "К сожалению, я опоздал, потому что автобус ушёл." },
          { en: "What were you doing then?", transcr: "Уот уё ю дуинг зэн?", ru: "Что ты делал тогда (в тот момент)?" },
          { en: "Later, the rain stopped and we finished.", transcr: "Лэйтэ, зэ рэйн стопт энд уи финишт.", ru: "Позже дождь прекратился, и мы закончили." },
        ],
        simple_ru: {
          formula:
            '<b>was / were + …ing</b> = действие ДЛИЛОСЬ в прошлом. ' +
            '<b>when</b> + короткое (Past Simple), <b>while</b> + длинное (Past Continuous).',
          examples: [
            { en: "I was picking when the rain started.", transcr: "Ай уоз пикинг уэн зэ рэйн статид.", ru: "was picking (длилось) + when + started (вдруг)." },
            { en: "While we were working, Tom called.", transcr: "Уайл уи уё уёкинг, Том колд.", ru: "while + were working (длинное действие)." },
          ],
        },
        ytQuery: "past continuous past simple when while английский для начинающих",
      },

      glossary: [
        { en: "suddenly", transcr: "саднли", ru: "вдруг, внезапно", pn: "/ˈsʌdənli/" },
        { en: "then", transcr: "зэн", ru: "тогда (в тот момент); потом", pn: "/ðen/" },
        { en: "later", transcr: "лэйтэ", ru: "позже", pn: "/ˈleɪtə/" },
        { en: "luckily", transcr: "лакили", ru: "к счастью", pn: "/ˈlʌkɪli/" },
        { en: "unfortunately", transcr: "анфочнэтли", ru: "к сожалению", pn: "/ʌnˈfɔːtʃənətli/" },
      ],

      words: [
        { e: "🐸", en: "frog", transcr: "фрог", ru: "лягушка", pn: "/frɒɡ/" },
        { e: "🌱", en: "root", transcr: "рут", ru: "корень", pn: "/ruːt/" },
        { e: "🌾", en: "crop", transcr: "кроп", ru: "урожай (на поле)", pn: "/krɒp/" },
        { e: "🌰", en: "seed", transcr: "сид", ru: "семя, семена", pn: "/siːd/" },
        { e: "🌿", en: "weed", transcr: "уид", ru: "сорняк", pn: "/wiːd/" },
        { e: "🐛", en: "insect", transcr: "инсэкт", ru: "насекомое", pn: "/ˈɪnsekt/" },
        { e: "🐝", en: "bee", transcr: "би", ru: "пчела", pn: "/biː/" },
        { e: "🐜", en: "ant", transcr: "энт", ru: "муравей", pn: "/ænt/" },
        { e: "🌊", en: "stream", transcr: "стрим", ru: "ручей", pn: "/striːm/" },
        { e: "🏞️", en: "pond", transcr: "понд", ru: "пруд", pn: "/pɒnd/" },
        { e: "💧", en: "flood", transcr: "флад", ru: "наводнение, потоп", pn: "/flʌd/" },
        { e: "🌸", en: "flower", transcr: "флауэ", ru: "цветок", pn: "/ˈflaʊə/" },
        { e: "🐦", en: "bird", transcr: "бёд", ru: "птица", pn: "/bɜːd/" },
        { e: "🐌", en: "snail", transcr: "снэйл", ru: "улитка", pn: "/sneɪl/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! Did you have a good weekend?", transcr: "Гуд монинг! Дид ю хэв э гуд уикэнд?", ru: "Доброе утро! Хорошо провёл выходные?" },
        { s: "w", en: "Yes, it was lovely. And you?", transcr: "Йес, ит уоз лавли. Энд ю?", ru: "Да, отлично. А ты?" },
        { s: "m", en: "Not bad. It was raining here yesterday.", transcr: "Нот бэд. Ит уоз рэйнинг хиэ йестэдэй.", ru: "Неплохо. Здесь вчера шёл дождь." },
        { s: "w", en: "Yes. I was working near the pond.", transcr: "Йес. Ай уоз уёкинг ниэ зэ понд.", ru: "Да. Я работал у пруда." },
        { s: "m", en: "What were you doing near the pond?", transcr: "Уот уё ю дуинг ниэ зэ понд?", ru: "Что ты делал у пруда?" },
        { s: "w", en: "I was pulling weeds in the rain.", transcr: "Ай уоз пулинг уидз ин зэ рэйн.", ru: "Я выдёргивал сорняки под дождём." },
        { s: "m", en: "Were the crops wet?", transcr: "Уё зэ кропс уэт?", ru: "Урожай был мокрый?" },
        { s: "w", en: "Yes. A bee was on a flower.", transcr: "Йес. Э би уоз он э флауэ.", ru: "Да. На цветке сидела пчела." },
        { s: "m", en: "And what did you do then?", transcr: "Энд уот дид ю ду зэн?", ru: "И что ты потом сделал?" },
        { s: "w", en: "I stopped because it was raining hard.", transcr: "Ай стопт бикоз ит уоз рэйнинг хад.", ru: "Я остановился, потому что шёл сильный дождь." },
        { s: "m", en: "Good. The sun is here now.", transcr: "Гуд. Зэ сан из хиэ нау.", ru: "Хорошо. Сейчас вышло солнце." },
        { s: "w", en: "Great! Now we can work in the sun.", transcr: "Грэйт! Нау уи кэн уёк ин зэ сан.", ru: "Отлично! Теперь можно работать на солнце." },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ picking strawberries." (я, в процессе)', opts: ["was", "were", "am", "did"], c: 0, expl: "I was picking — was + …ing (Past Continuous). I/he/she/it → was.", hint_ru: "I → was + …ing." },
        { q: '[COMPLETE] "We ___ working in the field." (мы, в процессе)', opts: ["were", "was", "are", "do"], c: 0, expl: "We were working — you/we/they → were + …ing.", hint_ru: "we → were + …ing." },
        { q: '[CORRECT] «Я собирал клубнику, когда начался дождь.»', opts: ["I was picking strawberries when the rain started.", "I picked strawberries when the rain was starting.", "I am picking strawberries when the rain started.", "I picking strawberries when the rain started."], c: 0, expl: "Past Continuous (was picking, длинный фон) + when + Past Simple (started, короткое прерывание).", hint_ru: "was picking … when … started." },
        { q: '[COMPLETE] "___ we were loading the crates, Tom called." (длинное действие)', opts: ["While", "So", "Because", "Although"], c: 0, expl: "While + Past Continuous (длинное фоновое действие). so/because/although — логические связки (результат/причина/контраст), не время.", hint_ru: "время + длинное …ing → while." },
        { q: '[COMPLETE] "It was raining, ___ we stopped work." (поэтому = результат)', opts: ["so", "because", "when", "although"], c: 0, expl: "so = результат (поэтому). Дождь → результат: остановились.", hint_ru: "результат → so." },
        { q: '[COMPLETE] "We worked hard ___ the lorry was waiting." (потому что = причина)', opts: ["because", "so", "although", "when"], c: 0, expl: "because = причина (потому что). Грузовик ждал → причина спешки.", hint_ru: "причина → because." },
        { q: '[COMPLETE] "___ I was tired, I finished my work." (хотя = контраст)', opts: ["Although", "Because", "So", "When"], c: 0, expl: "although = хотя (контраст). Устал, НО закончил.", hint_ru: "контраст → although." },
        { q: '[QUESTION] "What ___ you doing yesterday?" (вопрос о прошлом действии)', opts: ["were", "was", "did", "are"], c: 0, expl: "What were you doing? — Past Continuous вопрос: were + you + …ing.", hint_ru: "What were you doing?" },
        { q: '[NEGATIVE] Сделай отрицательным: «I was working.» → "I ___ working."', opts: ["was not", "were not", "did not", "do not"], c: 0, expl: "I was not working. Отрицание Past Continuous: was/were + not + …ing.", hint_ru: "was → was not." },
        { q: '[TRANSLATE] "сорняк"', opts: ["weed", "seed", "crop", "bee"], c: 0, expl: "weed — сорняк. seed — семя, crop — урожай, bee — пчела.", hint_ru: "weed." },
        { q: "[LISTEN] I was pulling weeds.", opts: ["Я выдёргивал сорняки.", "Я собирал клубнику.", "Я грузил ящики.", "Я водил трактор."], c: 0, expl: "I was pulling weeds — я выдёргивал сорняки (Past Continuous).", hint_ru: "" },
        { q: "[GIST] По диалогу: что делал рабочий у пруда?", opts: ["Выдёргивал сорняки под дождём.", "Спал в вагончике.", "Ел обед.", "Водил трактор."], c: 0, expl: "«I was pulling weeds in the rain.» — рабочий выдёргивал сорняки.", hint_ru: "Слушай реплику про weeds." },
        { q: '[BUILD] «Шёл дождь, когда мы начали работу.»', build: ["It", "was", "raining", "when", "we", "started", "work"], expl: "It was raining when we started work. — фон (was raining) + when + короткое действие (started).", hint_ru: "It was raining when…" },
        { q: '[BUILD] «Пока мы грузили ящики, Том позвал нас.»', build: ["While", "we", "were", "loading", "the", "crates", "Tom", "called", "us"], expl: "While we were loading the crates, Tom called us. — while + Past Continuous (длинное действие).", hint_ru: "While we were loading…" },
      ],

      everyday: {
        title_ru: "Светская беседа (small talk)",
        phrases: [
          { en: "Did you have a good weekend?", transcr: "Дид ю хэв э гуд уикэнд?", ru: "Как прошли выходные?" },
          { en: "Yes, it was lovely. And you?", transcr: "Йес, ит уоз лавли. Энд ю?", ru: "Да, отлично. А у тебя?" },
          { en: "Cold today, isn't it?", transcr: "Коулд тудэй, изнт ит?", ru: "Холодно сегодня, да? (разговор о погоде)" },
          { en: "Pleased to meet you.", transcr: "Плизд ту мит ю.", ru: "Приятно познакомиться." },
          { en: "Have a good day!", transcr: "Хэв э гуд дэй!", ru: "Хорошего дня!" },
          { en: "Same to you!", transcr: "Сэйм ту ю!", ru: "И тебе того же!" },
        ],
      },
    },
    {
      id: 25,
      title_ru: "Что случилось РАНЬШЕ (рассказ и новости)",
      cefr: "B1 · Past Perfect · life-events & news",
      grammar: {
        title_ru: "Past Perfect: had + 3-я форма (что случилось РАНЬШЕ другого прошлого)",
        intro_ru:
          '<b>had + 3-я форма глагола</b> (past participle) — действие, которое случилось РАНЬШЕ ' +
          'другого действия в прошлом (Past Perfect):<br>' +
          'When I <b>got</b> to the field, everyone <b>had</b> already <b>started</b>. — ' +
          'Когда я пришёл в поле, все уже начали (начали ДО того, как я пришёл).<br>' +
          'Порядок: сначала «had started» (раньше), потом «got» (позже).<br>' +
          '<b>had</b> — одинаково для всех: I / you / he / she / we / they <b>had</b>.',
        cultural_ru:
          'Главное: Past Perfect — это <b>«прошлое до прошлого»</b>. Когда ты уже рассказываешь о прошлом ' +
          'и хочешь назвать ещё более раннее действие — бери <b>had + 3-я форма</b>.<br>' +
          '<b>already</b> <span class="g-transcr">[олрэди]</span> часто стоит между had и глаголом: ' +
          'I had <b>already</b> finished.<br>' +
          'Рядом обычно Past Simple (L13) — для более позднего действия: ' +
          '<b>When</b> she got there, the bus <b>had gone</b>. (сначала ушёл автобус, потом она пришла).',
        note_ru:
          '⚠️ В разговоре «had» часто сокращают: I\'d, he\'d (= I had, he had); пишут hadn\'t (= had not). ' +
          'В заданиях и сборке фраз пиши <b>полную</b> форму «I had», сокращения — только в «Фразах».<br>' +
          '⚠️ Не путай: Past Simple (started) — одно прошлое действие; Past Perfect (had started) — ' +
          'действие ещё РАНЬШЕ него.',
        visual_ru:
          '<svg viewBox="0 0 340 252" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="14" y="22" font-size="13" fill="var(--text2)">Past Perfect = «прошлое до прошлого»</text>' +
          '<line x1="20" y1="150" x2="316" y2="150" stroke="var(--text2)" stroke-width="2"/>' +
          '<polygon points="316,150 306,145 306,155" fill="var(--text2)"/>' +
          '<text x="20" y="170" font-size="12" fill="var(--text2)">прошлое</text>' +
          '<text x="276" y="170" font-size="12" fill="var(--text2)">сейчас</text>' +
          '<circle cx="92" cy="150" r="7" fill="#2e7d32"/>' +
          '<line x1="92" y1="126" x2="92" y2="150" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="40" y="118" font-size="13" fill="#2e7d32">1. had started</text>' +
          '<text x="58" y="102" font-size="11" fill="var(--text2)">(раньше)</text>' +
          '<circle cx="214" cy="150" r="7" fill="#c62828"/>' +
          '<line x1="214" y1="126" x2="214" y2="150" stroke="#c62828" stroke-width="2"/>' +
          '<text x="170" y="118" font-size="13" fill="#c62828">2. I got there</text>' +
          '<text x="184" y="102" font-size="11" fill="var(--text2)">(позже)</text>' +
          '<text x="20" y="206" font-size="12" fill="var(--text)">Сначала «had started», потом «got».</text>' +
          '<text x="20" y="226" font-size="12" fill="var(--text)">Более раннее действие → had + 3-я форма.</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ had + 3-я форма",
            rule_ru:
              '<b>had</b> + 3-я форма — одинаково для всех лиц:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>had finished</b></div><div>я (уже) закончил</div>' +
              '<div>They <b>had gone</b></div><div>они (уже) ушли</div>' +
              '<div>She <b>had left</b></div><div>она (уже) уехала</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "had finished", example: "I had finished my row.", transcr: "Ай хэд финишт май роу.", tr_ru: "Я (уже) закончил свой ряд." },
              { subj: "они", verb: "had gone", example: "They had gone to lunch.", transcr: "Зэй хэд гон ту ланч.", tr_ru: "Они (уже) ушли на обед." },
              { subj: "она", verb: "had left", example: "She had left early.", transcr: "Ши хэд лэфт ёли.", tr_ru: "Она (уже) уехала рано." },
            ],
          },
          negative: {
            label_ru: "❌ had not (hadn't) + 3-я форма",
            rule_ru:
              '<b>had not (hadn\'t)</b> + 3-я форма:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>had not eaten</b></div><div>я (ещё) не ел</div>' +
              '<div>We <b>had not finished</b></div><div>мы (ещё) не закончили</div>' +
              '<div>It <b>had not started</b></div><div>оно (ещё) не началось</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "had not eaten", example: "I had not eaten lunch.", transcr: "Ай хэд нот итн ланч.", tr_ru: "Я (ещё) не ел обед." },
              { subj: "мы", verb: "had not finished", example: "We had not finished the boxes.", transcr: "Уи хэд нот финишт зэ боксиз.", tr_ru: "Мы (ещё) не закончили ящики." },
              { subj: "оно", verb: "had not started", example: "The shift had not started.", transcr: "Зэ шифт хэд нот статид.", tr_ru: "Смена (ещё) не началась." },
            ],
          },
          question: {
            label_ru: "❓ Had …? + 3-я форма",
            rule_ru:
              '<b>Had</b> you …? Краткий ответ: Yes, I had / No, I had not:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>Had</b> you <b>finished</b>?</div><div>ты (уже) закончил?</div>' +
              '<div><b>Had</b> the bus <b>gone</b>?</div><div>автобус (уже) ушёл?</div>' +
              '<div><b>Had</b> they <b>left</b>?</div><div>они (уже) уехали?</div>' +
              '</div>',
            table: [
              { subj: "ты", verb: "Had … finished?", example: "Had you finished work?", transcr: "Хэд ю финишт уёк?", tr_ru: "Ты (уже) закончил работу?" },
              { subj: "автобус", verb: "Had … gone?", example: "Had the bus gone?", transcr: "Хэд зэ бас гон?", tr_ru: "Автобус (уже) ушёл?" },
              { subj: "они", verb: "Had … left?", example: "Had they left early?", transcr: "Хэд зэй лэфт ёли?", tr_ru: "Они (уже) уехали рано?" },
            ],
          },
        },
        examples: [
          { en: "When I got to the field, everyone had already started.", transcr: "Уэн ай гот ту зэ филд, эвриуан хэд олрэди статид.", ru: "Когда я пришёл в поле, все уже начали (начали раньше)." },
          { en: "When I met her, she had already worked abroad.", transcr: "Уэн ай мэт хё, ши хэд олрэди уёкт эброд.", ru: "Когда я встретил её, она уже (раньше) работала за границей." },
          { en: "I had lost my ring, so I was not happy.", transcr: "Ай хэд лост май ринг, соу ай уоз нот хэпи.", ru: "Я (до этого) потерял кольцо, поэтому был не рад." },
          { en: "When she got there, the bus had already gone.", transcr: "Уэн ши гот зэа, зэ бас хэд олрэди гон.", ru: "Когда она пришла, автобус уже ушёл (ушёл раньше)." },
          { en: "I had forgotten my gloves, so my hands were cold.", transcr: "Ай хэд фэготн май главз, соу май хэндз уё коулд.", ru: "Я (до этого) забыл перчатки, поэтому руки замёрзли." },
          { en: "When I got there, the season had already begun.", transcr: "Уэн ай гот зэа, зэ сизн хэд олрэди биган.", ru: "Когда я приехал, сезон уже начался (начался раньше)." },
          { en: "When I got back, they had sent me a package.", transcr: "Уэн ай гот бэк, зэй хэд сэнт ми э пэкидж.", ru: "Когда я вернулся, они уже прислали мне посылку." },
          { en: "When I got to work, she had won a prize.", transcr: "Уэн ай гот ту уёк, ши хэд уан э прайз.", ru: "Когда я пришёл на работу, она уже выиграла приз." },
          { en: "We had not finished the boxes when the manager called.", transcr: "Уи хэд нот финишт зэ боксиз уэн зэ мэниджэ колд.", ru: "Мы ещё не закончили ящики, когда менеджер позвал." },
          { en: "It had rained, so the field was wet.", transcr: "Ит хэд рэйнд, соу зэ филд уоз уэт.", ru: "(Раньше) прошёл дождь, поэтому поле было мокрое." },
          { en: "When the manager called, had you finished your row?", transcr: "Уэн зэ мэниджэ колд, хэд ю финишт ё роу?", ru: "Когда менеджер позвал, ты уже закончил свой ряд?" },
          { en: "I had already eaten, so I was not hungry.", transcr: "Ай хэд олрэди итн, соу ай уоз нот хангри.", ru: "Я уже (до этого) поел, поэтому не был голоден." },
          { en: "I had seen the message earlier, so I was ready.", transcr: "Ай хэд син зэ мэсидж ёлиэ, соу ай уоз рэди.", ru: "Я видел это сообщение раньше, поэтому был готов." },
          { en: "Finally, the season finished and we were happy.", transcr: "Файнэли, зэ сизн финишт энд уи уё хэпи.", ru: "Наконец сезон закончился, и мы были рады." },
          { en: "The wedding had begun when we got there.", transcr: "Зэ уэдинг хэд биган уэн уи гот зэа.", ru: "Свадьба уже началась, когда мы пришли." },
          { en: "When I got back, the children had eaten the cake.", transcr: "Уэн ай гот бэк, зэ чилдрэн хэд итн зэ кэйк.", ru: "Когда я вернулся, дети уже съели торт." },
        ],
        simple_ru: {
          formula:
            '<b>had + 3-я форма</b> = действие случилось РАНЬШЕ другого прошлого. ' +
            'Часто: When + Past Simple (позже), … had + 3-я форма (раньше).',
          examples: [
            { en: "When I got there, the bus had gone.", transcr: "Уэн ай гот зэа, зэ бас хэд гон.", ru: "got (позже) + had gone (раньше: автобус ушёл первым)." },
            { en: "I had already eaten.", transcr: "Ай хэд олрэди итн.", ru: "had + already + 3-я форма (eaten)." },
          ],
        },
        ytQuery: "past perfect had прошедшее совершенное английский для начинающих",
      },

      glossary: [
        { en: "earlier", transcr: "ёлиэ", ru: "раньше, ранее (более раннее)", pn: "/ˈɜːliə/" },
        { en: "finally", transcr: "файнэли", ru: "наконец", pn: "/ˈfaɪnəli/" },
        { en: "abroad", transcr: "эброд", ru: "за границей, за границу", pn: "/əˈbrɔːd/" },
        { en: "engaged", transcr: "ингэйджд", ru: "помолвлен(а), обручён(а)", pn: "/ɪnˈɡeɪdʒd/" },
        { en: "wonderful", transcr: "уандэфул", ru: "чудесно, замечательно", pn: "/ˈwʌndəfʊl/" },
        { en: "congratulations", transcr: "кэнгрэчулэйшнз", ru: "поздравляю!; поздравления", pn: "/kənˌɡrætʃʊˈleɪʃnz/" },
      ],

      words: [
        { e: "💬", en: "message", transcr: "мэсидж", ru: "сообщение", pn: "/ˈmesɪdʒ/" },
        { e: "💒", en: "wedding", transcr: "уэдинг", ru: "свадьба", pn: "/ˈwedɪŋ/" },
        { e: "💍", en: "ring", transcr: "ринг", ru: "кольцо", pn: "/rɪŋ/" },
        { e: "🎁", en: "gift", transcr: "гифт", ru: "подарок", pn: "/ɡɪft/" },
        { e: "🏆", en: "prize", transcr: "прайз", ru: "приз, награда", pn: "/praɪz/" },
        { e: "🧳", en: "trip", transcr: "трип", ru: "поездка", pn: "/trɪp/" },
        { e: "📋", en: "plan", transcr: "плэн", ru: "план", pn: "/plæn/" },
        { e: "🍀", en: "luck", transcr: "лак", ru: "удача", pn: "/lʌk/" },
        { e: "🎂", en: "cake", transcr: "кэйк", ru: "торт", pn: "/keɪk/" },
        { e: "👵", en: "grandmother", transcr: "грэнмазэ", ru: "бабушка", pn: "/ˈɡrænmʌðə/" },
        { e: "👴", en: "grandfather", transcr: "грэндфазэ", ru: "дедушка", pn: "/ˈɡrændfɑːðə/" },
        { e: "🧒", en: "children", transcr: "чилдрэн", ru: "дети", pn: "/ˈtʃɪldrən/" },
        { e: "📦", en: "package", transcr: "пэкидж", ru: "посылка", pn: "/ˈpækɪdʒ/" },
        { e: "📬", en: "postcard", transcr: "поусткад", ru: "открытка", pn: "/ˈpəʊstkɑːd/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning! You are happy today.", transcr: "Гуд монинг! Ю а хэпи тудэй.", ru: "Доброе утро! Ты сегодня радостный." },
        { s: "w", en: "Yes! I had good news last weekend.", transcr: "Йес! Ай хэд гуд ньюз ласт уикэнд.", ru: "Да! У меня были хорошие новости в прошлые выходные." },
        { s: "m", en: "That is great! What was the news?", transcr: "Зэт из грэйт! Уот уоз зэ ньюз?", ru: "Отлично! Что за новость?" },
        { s: "w", en: "My sister got engaged!", transcr: "Май систэ гот ингэйджд!", ru: "Моя сестра обручилась!" },
        { s: "m", en: "Wonderful! Send her my congratulations!", transcr: "Уандэфул! Сэнд хё май кэнгрэчулэйшнз!", ru: "Чудесно! Передай ей мои поздравления!" },
        { s: "w", en: "When I got the news, she had already chosen the date.", transcr: "Уэн ай гот зэ ньюз, ши хэд олрэди чоузн зэ дэйт.", ru: "Когда я узнал новость, она уже выбрала дату." },
        { s: "m", en: "Lovely! Have you seen the ring?", transcr: "Лавли! Хэв ю син зэ ринг?", ru: "Прелесть! Ты (уже) видел кольцо?" },
        { s: "w", en: "Yes. They sent it last week.", transcr: "Йес. Зэй сэнт ит ласт уик.", ru: "Да. Они прислали его на прошлой неделе." },
        { s: "m", en: "Did you have any more news?", transcr: "Дид ю хэв эни мо ньюз?", ru: "Были ещё новости?" },
        { s: "w", en: "My grandmother was ill.", transcr: "Май грэнмазэ уоз ил.", ru: "Моя бабушка болела." },
        { s: "m", en: "I am sorry. Is she better now?", transcr: "Ай эм сори. Из ши бэтэ нау?", ru: "Сочувствую. Ей сейчас лучше?" },
        { s: "w", en: "Yes, thank you. She is better now.", transcr: "Йес, сэнк ю. Ши из бэтэ нау.", ru: "Да, спасибо. Сейчас ей лучше." },
        { s: "m", en: "Good. Have you started your row?", transcr: "Гуд. Хэв ю статид ё роу?", ru: "Хорошо. Ты уже начал свой ряд?" },
        { s: "w", en: "Not yet. I have just got here.", transcr: "Нот йет. Ай хэв джаст гот хиэ.", ru: "Ещё нет. Я только что пришёл." },
      ],

      quiz: [
        { q: '[COMPLETE] "When I got there, the bus ___ already gone." (раньше)', opts: ["had", "has", "was", "did"], c: 0, expl: "had gone — Past Perfect: had + 3-я форма (gone). had — одинаково для всех лиц.", hint_ru: "had + 3-я форма." },
        { q: '[COMPLETE] "When I left, they ___ not finished the boxes." (раньше)', opts: ["had", "were", "did", "have"], c: 0, expl: "had not finished — отрицание Past Perfect: had not + 3-я форма (на момент, когда я ушёл, ящики ещё не были готовы).", hint_ru: "had not + 3-я форма." },
        { q: '[CORRECT] «Когда она пришла, автобус уже ушёл.»', opts: ["When she got there, the bus had already gone.", "When she got there, the bus has already gone.", "When she got there, the bus have already gone.", "When she got there, the bus was already gone."], c: 0, expl: "had already gone — более раннее действие (автобус ушёл ДО того, как она пришла). has/have/was — неверно.", hint_ru: "had + already + gone." },
        { q: '[COMPLETE] "I had ___ eaten, so I was not hungry." (между had и глаголом)', opts: ["already", "yet", "ever", "now"], c: 0, expl: "had already eaten — already часто стоит между had и 3-й формой.", hint_ru: "had ___ eaten → already." },
        { q: '[QUESTION] "___ you finished work?" (вопрос: раньше)', opts: ["Had", "Did", "Have", "Was"], c: 0, expl: "Had you finished? — вопрос Past Perfect: Had + подлежащее + 3-я форма.", hint_ru: "Had you …?" },
        { q: '[NEGATIVE] Сделай отрицательным: «I had finished.» → "I ___ finished."', opts: ["had not", "did not", "have not", "was not"], c: 0, expl: "I had not finished. Отрицание Past Perfect: had + not + 3-я форма.", hint_ru: "had → had not." },
        { q: '[COMPLETE] "___ she got there, the bus had gone." (когда)', opts: ["When", "Because", "So", "Although"], c: 0, expl: "When = когда (момент позже). so/because/although — логические связки, не время.", hint_ru: "момент во времени → when." },
        { q: '[TRANSLATE] "свадьба"', opts: ["wedding", "prize", "package", "ring"], c: 0, expl: "wedding — свадьба. prize — приз, package — посылка, ring — кольцо.", hint_ru: "wedding." },
        { q: '[TRANSLATE] "приз"', opts: ["prize", "gift", "luck", "cake"], c: 0, expl: "prize — приз, награда. gift — подарок, luck — удача, cake — торт.", hint_ru: "prize." },
        { q: "[LISTEN] They sent us a postcard.", opts: ["Они прислали нам открытку.", "Они потеряли посылку.", "Они купили подарок.", "Они забыли кольцо."], c: 0, expl: "They sent us a postcard — они прислали нам открытку.", hint_ru: "" },
        { q: "[GIST] По диалогу: какая хорошая новость у рабочего?", opts: ["Его сестра обручилась.", "Он купил новый трактор.", "Он закончил работу рано.", "Автобус опоздал."], c: 0, expl: "«My sister got engaged.» — сестра рабочего обручилась.", hint_ru: "Слушай реплику про sister." },
        { q: '[BUILD] «Когда я пришёл в поле, все уже начали.»', build: ["When", "I", "got", "to", "the", "field", "everyone", "had", "already", "started"], expl: "When I got to the field, everyone had already started. — got (позже) + had already started (раньше).", hint_ru: "When I got … everyone had already started." },
        { q: '[BUILD] «Я потерял кольцо, поэтому я был не рад.»', build: ["I", "had", "lost", "my", "ring", "so", "I", "was", "not", "happy"], expl: "I had lost my ring, so I was not happy. — had lost (раньше) + so (результат).", hint_ru: "I had lost my ring, so…" },
      ],

      everyday: {
        title_ru: "Сообщить и принять новость (good / bad news)",
        phrases: [
          { en: "Guess what? I've got some good news!", transcr: "Гес уот? Айв гот сам гуд ньюз!", ru: "Знаешь что? У меня хорошая новость!" },
          { en: "That's great! Well done!", transcr: "Зэтс грэйт! Уэл дан!", ru: "Здорово! Молодец!" },
          { en: "Congratulations!", transcr: "Кэнгрэчулэйшнз!", ru: "Поздравляю!" },
          { en: "I'm sorry to hear that.", transcr: "Айм сори ту хиэ зэт.", ru: "Жаль это слышать. (на плохую новость)" },
          { en: "Have a safe journey home!", transcr: "Хэв э сэйф джёни хоум!", ru: "Счастливого пути домой!" },
          { en: "Thank you for everything.", transcr: "Сэнк ю фо эврисинг.", ru: "Спасибо за всё." },
        ],
      },
    },

    {
      id: 26,
      title_ru: "Что сказал другой человек: пересказ (said / told)",
      cefr: "B1 · Reported speech (said/told) · communication verbs",
      grammar: {
        title_ru: "Reported speech: said / told + сдвиг времени (пересказ чужих слов)",
        intro_ru:
          'Когда ты <b>пересказываешь</b> чужие слова, глагол «сдвигается назад» во времени ' +
          '(это reported speech):<br>' +
          'Прямая речь: «I <b>am</b> tired.» (я устал) → He <b>said</b> that he <b>was</b> tired.<br>' +
          'Прямая речь: «I <b>will</b> help.» → He <b>said</b> that he <b>would</b> help.<br>' +
          'Прямая речь: «I <b>can</b> come.» → He <b>said</b> that he <b>could</b> come.<br>' +
          'Главное правило выбора глагола:<br>' +
          '✅ <b>say</b> <span class="g-transcr">[сэй]</span> — БЕЗ человека: He <b>said</b> (that)…<br>' +
          '✅ <b>tell</b> <span class="g-transcr">[тэл]</span> — С человеком (кому): He <b>told</b> <b>me</b> (that)…<br>' +
          '❌ Нельзя: <s>He said me…</s> и <s>He told that…</s>',
        cultural_ru:
          'Три глагола пересказа:<br>' +
          '• <b>say</b> <span class="g-transcr">[сэй]</span> / <b>said</b> <span class="g-transcr">[сэд]</span> — ' +
          'сказать (без человека): He <b>said</b> (that) it was cold.<br>' +
          '• <b>tell</b> <span class="g-transcr">[тэл]</span> / <b>told</b> <span class="g-transcr">[тоулд]</span> — ' +
          'сказать/рассказать <b>кому-то</b> (нужен человек: me / him / us): He <b>told me</b> (that)…<br>' +
          '• <b>ask</b> <span class="g-transcr">[аск]</span> / <b>asked</b> <span class="g-transcr">[аскт]</span> — ' +
          'для пересказа <b>вопроса</b>: He <b>asked if</b> I was ready · He <b>asked where</b> the office was.<br>' +
          'Сдвиг времени: <b>am/is/are → was/were</b>, <b>will → would</b>, <b>can → could</b>, ' +
          'Past Simple/Present Perfect → Past Perfect (had + 3-я форма).',
        note_ru:
          '⚠️ Частая ошибка: <s>He said me</s> — НЕЛЬЗЯ. Либо <b>He said (that)…</b> (без человека), ' +
          'либо <b>He told me (that)…</b> (с человеком).<br>' +
          '⚠️ В разговоре сокращают: he\'d, she\'d (= he had / she would). В заданиях и сборке фраз пиши ' +
          '<b>полную</b> форму (he had / he would); сокращения — только в «Фразах».',
        visual_ru:
          '<svg viewBox="0 0 340 248" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="14" y="20" font-size="13" fill="var(--text2)">Пересказ: глагол «сдвигается назад»</text>' +
          '<rect x="12" y="34" width="150" height="80" rx="8" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="20" y="52" font-size="11" fill="#2e7d32">Прямая речь</text>' +
          '<text x="20" y="74" font-size="12" fill="var(--text)">"I am tired."</text>' +
          '<text x="20" y="94" font-size="12" fill="var(--text)">"I will help."</text>' +
          '<line x1="166" y1="74" x2="196" y2="74" stroke="var(--text2)" stroke-width="2"/>' +
          '<polygon points="196,74 186,69 186,79" fill="var(--text2)"/>' +
          '<text x="148" y="128" font-size="10" fill="var(--text2)">said / told</text>' +
          '<rect x="200" y="34" width="128" height="80" rx="8" fill="none" stroke="#c62828" stroke-width="2"/>' +
          '<text x="208" y="52" font-size="11" fill="#c62828">Пересказ</text>' +
          '<text x="208" y="74" font-size="12" fill="var(--text)">He said he</text>' +
          '<text x="208" y="92" font-size="12" fill="var(--text)">was tired.</text>' +
          '<text x="20" y="152" font-size="12" fill="var(--text)">am / is / are → was / were</text>' +
          '<text x="20" y="174" font-size="12" fill="var(--text)">will → would · can → could</text>' +
          '<text x="20" y="196" font-size="12" fill="var(--text)">say (без кого) · tell + кому</text>' +
          '<text x="20" y="220" font-size="11" fill="var(--text2)">вопрос → He asked if / where…</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ said (без человека) / told + кому",
            rule_ru:
              '<b>say/said</b> — без человека; <b>tell/told</b> — нужен человек (me/him/us):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>He <b>said</b> (that)…</div><div>он сказал, что… (без человека)</div>' +
              '<div>He <b>told me</b> (that)…</div><div>он сказал мне, что… (+ человек)</div>' +
              '<div>«that» можно опустить</div><div>He said (that) he was tired.</div>' +
              '</div>',
            table: [
              { subj: "он сказал", verb: "said (that)…", example: "He said that he was tired.", transcr: "Хи сэд зэт хи уоз тайэд.", tr_ru: "Он сказал, что устал. (без человека)" },
              { subj: "он сказал мне", verb: "told me (that)…", example: "He told me that he was busy.", transcr: "Хи тоулд ми зэт хи уоз бизи.", tr_ru: "Он сказал мне, что занят. (+ человек)" },
              { subj: "менеджер", verb: "said (that)…", example: "The manager said that the bus left at six.", transcr: "Зэ мэниджэ сэд зэт зэ бас лэфт эт сикс.", tr_ru: "Менеджер сказал, что автобус ушёл в шесть." },
            ],
          },
          negative: {
            label_ru: "❌ said / told … not",
            rule_ru:
              'Отрицание стоит в пересказанной части (could not / had not / did not):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>He said he <b>could not</b>…</div><div>он сказал, что не может…</div>' +
              '<div>She told me she <b>had not</b>…</div><div>она сказала мне, что ещё не…</div>' +
              '<div>I <b>did not</b> say that</div><div>я этого не говорил</div>' +
              '</div>',
            table: [
              { subj: "он сказал", verb: "said … could not", example: "He said that he could not come.", transcr: "Хи сэд зэт хи куд нот кам.", tr_ru: "Он сказал, что не сможет прийти." },
              { subj: "она сказала мне", verb: "told me … had not", example: "She told me that she had not finished.", transcr: "Ши тоулд ми зэт ши хэд нот финишт.", tr_ru: "Она сказала мне, что ещё не закончила." },
              { subj: "я", verb: "did not say", example: "I did not say that.", transcr: "Ай дид нот сэй зэт.", tr_ru: "Я этого не говорил." },
            ],
          },
          question: {
            label_ru: "❓ asked + if / where (пересказ вопроса)",
            rule_ru:
              'Вопрос пересказываем через <b>ask</b>: <b>if</b> (да/нет) или where/what (что/где):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>He <b>asked if</b>…</div><div>он спросил, … ли (да/нет)</div>' +
              '<div>He <b>asked where</b>…</div><div>он спросил, где…</div>' +
              '<div>порядок слов — как в утверждении</div><div>He asked where the office was.</div>' +
              '</div>',
            table: [
              { subj: "он спросил", verb: "asked if…", example: "He asked if I was ready.", transcr: "Хи аскт иф ай уоз рэди.", tr_ru: "Он спросил, готов ли я." },
              { subj: "она спросила меня", verb: "asked me if…", example: "She asked me if I had a contract.", transcr: "Ши аскт ми иф ай хэд э контрэкт.", tr_ru: "Она спросила меня, есть ли у меня контракт." },
              { subj: "он спросил", verb: "asked where…", example: "He asked where the office was.", transcr: "Хи аскт уэа зэ офис уоз.", tr_ru: "Он спросил, где офис." },
            ],
          },
        },
        examples: [
          { en: "He said that he was tired.", transcr: "Хи сэд зэт хи уоз тайэд.", ru: "Он сказал, что устал. (say — без человека)" },
          { en: "He told me that he was busy.", transcr: "Хи тоулд ми зэт хи уоз бизи.", ru: "Он сказал мне, что занят. (tell — нужен человек)" },
          { en: "The manager said that the bus left at six.", transcr: "Зэ мэниджэ сэд зэт зэ бас лэфт эт сикс.", ru: "Менеджер сказал, что автобус ушёл в шесть." },
          { en: "He told me that I could start on Monday.", transcr: "Хи тоулд ми зэт ай куд старт он мандэй.", ru: "Он сказал мне, что я могу начать в понедельник. (can → could)" },
          { en: "She said that she had finished her row.", transcr: "Ши сэд зэт ши хэд финишт хё роу.", ru: "Она сказала, что закончила свой ряд." },
          { en: "He said that he would phone me soon.", transcr: "Хи сэд зэт хи уд фоун ми сун.", ru: "Он сказал, что скоро позвонит мне. (will → would)" },
          { en: "The supervisor told us that we would get paid on Friday.", transcr: "Зэ супэвайзэ тоулд ас зэт уи уд гэт пэйд он фрайдэй.", ru: "Бригадир сказал нам, что нам заплатят в пятницу." },
          { en: "She asked me if I had a contract.", transcr: "Ши аскт ми иф ай хэд э контрэкт.", ru: "Она спросила меня, есть ли у меня контракт." },
          { en: "He asked where the office was.", transcr: "Хи аскт уэа зэ офис уоз.", ru: "Он спросил, где офис." },
          { en: "He told me that he had lost his phone.", transcr: "Хи тоулд ми зэт хи хэд лост хиз фоун.", ru: "Он сказал мне, что потерял телефон." },
          { en: "I asked whether the bus had gone.", transcr: "Ай аскт уэзэ зэ бас хэд гон.", ru: "Я спросил, ушёл ли автобус. (whether = if)" },
          { en: "She said that she could not come today.", transcr: "Ши сэд зэт ши куд нот кам тудэй.", ru: "Она сказала, что не сможет прийти сегодня." },
        ],
        simple_ru: {
          formula:
            '<b>said / told</b> = пересказ слов. <b>say</b> — без человека (He said that…); ' +
            '<b>tell</b> — нужен человек (He told <b>me</b> that…). Времена сдвигаются назад: ' +
            'am → was, will → would, can → could.',
          examples: [
            { en: "He said that he was busy.", transcr: "Хи сэд зэт хи уоз бизи.", ru: "said (that) — без человека." },
            { en: "He told me that he would phone soon.", transcr: "Хи тоулд ми зэт хи уд фоун сун.", ru: "told me (that) — нужен человек; will → would." },
          ],
        },
        ytQuery: "reported speech said told косвенная речь английский для начинающих",
      },

      glossary: [
        { en: "true", transcr: "тру", ru: "правда, верно", pn: "/truː/" },
        { en: "exactly", transcr: "игзэктли", ru: "точно, именно", pn: "/ɪɡˈzæktli/" },
        { en: "actually", transcr: "экчуэли", ru: "на самом деле, вообще-то", pn: "/ˈæktʃuəli/" },
        { en: "anyway", transcr: "эниуэй", ru: "в любом случае; ну ладно", pn: "/ˈeniweɪ/" },
        { en: "whether", transcr: "уэзэ", ru: "ли (то же, что if в вопросе)", pn: "/ˈweðə/" },
      ],

      words: [
        { e: "🗣️", en: "say", transcr: "сэй", ru: "сказать (без человека)", pn: "/seɪ/" },
        { e: "🗨️", en: "tell", transcr: "тэл", ru: "сказать кому-то, рассказать", pn: "/tel/" },
        { e: "📖", en: "explain", transcr: "иксплэйн", ru: "объяснить", pn: "/ɪkˈspleɪn/" },
        { e: "🔁", en: "repeat", transcr: "рипит", ru: "повторить", pn: "/rɪˈpiːt/" },
        { e: "🤝", en: "promise", transcr: "промис", ru: "обещать", pn: "/ˈprɒmɪs/" },
        { e: "👍", en: "agree", transcr: "эгри", ru: "согласиться", pn: "/əˈɡriː/" },
        { e: "↩️", en: "reply", transcr: "риплай", ru: "ответить (на сообщение)", pn: "/rɪˈplaɪ/" },
        { e: "💬", en: "mention", transcr: "мэншэн", ru: "упомянуть", pn: "/ˈmenʃən/" },
        { e: "📝", en: "describe", transcr: "дискрайб", ru: "описать", pn: "/dɪˈskraɪb/" },
        { e: "😤", en: "complain", transcr: "кэмплэйн", ru: "жаловаться", pn: "/kəmˈpleɪn/" },
        { e: "🤫", en: "whisper", transcr: "уиспэ", ru: "шептать", pn: "/ˈwɪspə/" },
        { e: "🎙️", en: "voice", transcr: "войс", ru: "голос", pn: "/vɔɪs/" },
        { e: "🔤", en: "word", transcr: "уёд", ru: "слово", pn: "/wɜːd/" },
        { e: "💡", en: "advice", transcr: "эдвайс", ru: "совет", pn: "/ədˈvaɪs/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning. Did you phone the office?", transcr: "Гуд монинг. Дид ю фоун зэ офис?", ru: "Доброе утро. Ты звонил в офис?" },
        { s: "w", en: "Yes. I called this morning.", transcr: "Йес. Ай колд зис монинг.", ru: "Да. Я звонил утром." },
        { s: "m", en: "Good. What did they say?", transcr: "Гуд. Уот дид зэй сэй?", ru: "Хорошо. Что они сказали?" },
        { s: "w", en: "They said that the bus would come at seven.", transcr: "Зэй сэд зэт зэ бас уд кам эт сэвн.", ru: "Они сказали, что автобус придёт в семь." },
        { s: "m", en: "And the pay?", transcr: "Энд зэ пэй?", ru: "А зарплата?" },
        { s: "w", en: "They told me that we would get paid on Friday.", transcr: "Зэй тоулд ми зэт уи уд гэт пэйд он фрайдэй.", ru: "Они сказали мне, что нам заплатят в пятницу." },
        { s: "m", en: "Is that true?", transcr: "Из зэт тру?", ru: "Это точно?" },
        { s: "w", en: "Yes, exactly. They told me on the phone.", transcr: "Йес, игзэктли. Зэй тоулд ми он зэ фоун.", ru: "Да, именно. Они сказали мне по телефону." },
        { s: "m", en: "Good. And the contract?", transcr: "Гуд. Энд зэ контрэкт?", ru: "Хорошо. А контракт?" },
        { s: "w", en: "I asked, and actually they said Monday.", transcr: "Ай аскт, энд экчуэли зэй сэд мандэй.", ru: "Я спросил, и вообще-то они сказали — в понедельник." },
        { s: "m", en: "Anyway, well done today.", transcr: "Эниуэй, уэл дан тудэй.", ru: "Ну ладно, сегодня молодец." },
        { s: "w", en: "Thank you. They said I could call on Friday.", transcr: "Сэнк ю. Зэй сэд ай куд кол он фрайдэй.", ru: "Спасибо. Они сказали, что я могу позвонить в пятницу." },
        { s: "m", en: "Good. Tell them I said hello.", transcr: "Гуд. Тэл зэм ай сэд хэлоу.", ru: "Хорошо. Передай им, что я передаю привет." },
        { s: "w", en: "Yes. I told them you were happy.", transcr: "Йес. Ай тоулд зэм ю уё хэпи.", ru: "Да. Я сказал им, что вы довольны." },
      ],

      quiz: [
        { q: '[COMPLETE] "He ___ me that the bus left at six." (рассказал мне)', opts: ["told", "said", "asked", "talked"], c: 0, expl: "told me — tell нужен человек (told me). say нельзя с человеком (He said that…, без me).", hint_ru: "С человеком (me) → told." },
        { q: '[COMPLETE] "He ___ that he was tired." (сказал — без человека)', opts: ["said", "told", "talked", "asked"], c: 0, expl: "said — say без человека (He said that…). told требует объект (NOT He told that…); talked/asked здесь не подходят.", hint_ru: "Без человека → said." },
        { q: '[CORRECT] «Он сказал мне, что позвонит.»', opts: ["He told me that he would phone.", "He said me that he would phone.", "He told that he would phone.", "He asked me that he would phone."], c: 0, expl: "told me — tell + человек; say нельзя с местоимением (NOT He said me); told нужен объект (NOT He told that).", hint_ru: "told + me." },
        { q: '[QUESTION] "She asked me ___ I had a contract." (да/нет вопрос)', opts: ["if", "that", "what", "so"], c: 0, expl: "asked if — пересказ вопроса да/нет ставим через if (или whether). that — для утверждений.", hint_ru: "да/нет вопрос → if." },
        { q: '[COMPLETE] "He said he ___ phone me on Friday." (пересказ слова «буду»)', opts: ["would", "was", "had", "could"], c: 0, expl: "will → would в пересказе: «I will phone» → He said he would phone. Времена сдвигаются назад.", hint_ru: "will → would." },
        { q: '[COMPLETE] "He told me that I ___ start on Monday." (can → ?)', opts: ["could", "was", "did", "would"], c: 0, expl: "can → could в пересказе: He told me I could start.", hint_ru: "can → could." },
        { q: '[NEGATIVE] "She told me that she ___ finished." (ещё не — раньше)', opts: ["had not", "did not", "was not", "has not"], c: 0, expl: "had not finished — пересказ Past Perfect: had + not + 3-я форма.", hint_ru: "had not + 3-я форма." },
        { q: '[TRANSLATE] "объяснить"', opts: ["explain", "repeat", "promise", "describe"], c: 0, expl: "explain — объяснить. repeat — повторить, promise — обещать, describe — описать.", hint_ru: "explain." },
        { q: '[TRANSLATE] "пообещать"', opts: ["promise", "agree", "reply", "mention"], c: 0, expl: "promise — обещать. agree — согласиться, reply — ответить, mention — упомянуть.", hint_ru: "promise." },
        { q: '[TRANSLATE] "жаловаться"', opts: ["complain", "whisper", "agree", "reply"], c: 0, expl: "complain — жаловаться. whisper — шептать, agree — согласиться, reply — ответить.", hint_ru: "complain." },
        { q: "[LISTEN] He told me that he was busy.", opts: ["Он сказал мне, что занят.", "Он спросил, готов ли я.", "Он обещал позвонить.", "Он не согласился."], c: 0, expl: "He told me that he was busy — он сказал мне, что занят.", hint_ru: "" },
        { q: "[GIST] По диалогу: когда рабочим заплатят (по звонку)?", opts: ["В пятницу.", "В понедельник.", "Сегодня.", "В семь."], c: 0, expl: "«They told me that we would get paid on Friday.» — заплатят в пятницу.", hint_ru: "Слушай реплику про pay." },
        { q: '[BUILD] «Он сказал мне, что автобус ушёл.»', build: ["He", "told", "me", "that", "the", "bus", "had", "gone"], expl: "He told me that the bus had gone. — told + me (человек), had gone (раньше).", hint_ru: "He told me that the bus had gone." },
        { q: '[BUILD] «Она спросила, есть ли у меня контракт.»', build: ["She", "asked", "if", "I", "had", "a", "contract"], expl: "She asked if I had a contract. — asked if (пересказ вопроса да/нет).", hint_ru: "She asked if I had a contract." },
      ],

      everyday: {
        title_ru: "По телефону (звонок в офис / агентство)",
        phrases: [
          { en: "Hello. Is that the office?", transcr: "Хэлоу. Из зэт зэ офис?", ru: "Алло. Это офис? (BrE: Is that…?, не Is this…?)" },
          { en: "Can I speak to the manager, please?", transcr: "Кэн ай спик ту зэ мэниджэ, плиз?", ru: "Можно поговорить с менеджером?" },
          { en: "I'm afraid he's out. Can I take a message?", transcr: "Айм эфрэйд хиз аут. Кэн ай тэйк э мэсидж?", ru: "Боюсь, его нет. Передать сообщение?" },
          { en: "Yes. Tell him Ahmad called. I'll call back later.", transcr: "Йес. Тэл хим Ахмад колд. Айл кол бэк лэйтэ.", ru: "Да. Передайте, что звонил Ахмад. Я перезвоню позже." },
          { en: "Sorry, you've got the wrong number.", transcr: "Сори, юв гот зэ ронг намбэ.", ru: "Извините, вы ошиблись номером." },
          { en: "Just a moment. Hold on, please.", transcr: "Джаст э момэнт. Хоулд он, плиз.", ru: "Минутку. Подождите, пожалуйста." },
        ],
      },
    },

    {
      id: 27,
      title_ru: "Как долго? Present Perfect с for / since (у врача)",
      cefr: "B1 · Present Perfect for/since · How long? · health & body",
      grammar: {
        title_ru: "Present Perfect + for / since + How long? (сколько времени длится до сейчас)",
        intro_ru:
          'Present Perfect (<b>have/has</b> + 3-я форма) с <b>for</b> и <b>since</b> показывает, сколько времени ' +
          'длится то, что началось в прошлом и <b>идёт сейчас</b>:<br>' +
          '✅ <b>for</b> <span class="g-transcr">[фо]</span> — сколько времени (срок): ' +
          'for two months <span class="g-transcr">[фо ту манс]</span> (два месяца), for a week (неделю).<br>' +
          '✅ <b>since</b> <span class="g-transcr">[синс]</span> — с какого момента (точка старта): ' +
          'since last week (с прошлой недели), since the accident (с той аварии).<br>' +
          '❓ <b>How long…?</b> <span class="g-transcr">[хау лонг]</span> — «как долго / как давно?»: ' +
          'How long have you worked here?',
        cultural_ru:
          '⚠️ Главное отличие от русского: по-русски мы говорим в <b>настоящем</b> времени — ' +
          '«Я работаю здесь <b>два месяца</b>». По-английски это <b>Present Perfect</b>: ' +
          '<b>I have worked</b> here <b>for two months</b>.<br>' +
          '• <b>for</b> <span class="g-transcr">[фо]</span> + срок: for two days, for a week, for a month.<br>' +
          '• <b>since</b> <span class="g-transcr">[синс]</span> + точка во времени: ' +
          'since last week, since the accident, since yesterday.<br>' +
          'Контраст: <b>have worked</b> (ещё работаю здесь) ↔ <b>worked</b> (Past Simple — уже не работаю): ' +
          '«I <b>worked</b> here for three months <b>last year</b>.» (закончилось).',
        note_ru:
          '⚠️ Частая ошибка: <s>I work here for two months</s> — нельзя Present Simple про длительность до ' +
          'сейчас. Правильно: <b>I have worked here for two months.</b><br>' +
          '⚠️ В разговоре сокращают: I\'ve, he\'s, haven\'t. В заданиях и сборке фраз пиши ' +
          '<b>полную</b> форму (I have, he has, have not); сокращения — только в «Фразах».',
        visual_ru:
          '<svg viewBox="0 0 340 252" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="14" y="18" font-size="13" fill="var(--text2)">for / since — длительность ДО «сейчас»</text>' +
          '<line x1="278" y1="40" x2="278" y2="170" stroke="#ef6c00" stroke-width="2" stroke-dasharray="3 3"/>' +
          '<text x="252" y="36" font-size="11" fill="#ef6c00">сейчас</text>' +
          '<text x="14" y="60" font-size="11" fill="#2e7d32">since = с какого момента</text>' +
          '<circle cx="58" cy="80" r="5" fill="#2e7d32"/>' +
          '<line x1="58" y1="80" x2="278" y2="80" stroke="#2e7d32" stroke-width="2"/>' +
          '<polygon points="278,80 268,75 268,85" fill="#2e7d32"/>' +
          '<text x="36" y="99" font-size="10" fill="var(--text2)">since last week</text>' +
          '<text x="14" y="128" font-size="11" fill="#1565c0">for = сколько времени</text>' +
          '<line x1="150" y1="146" x2="278" y2="146" stroke="#1565c0" stroke-width="2"/>' +
          '<line x1="150" y1="141" x2="150" y2="151" stroke="#1565c0" stroke-width="2"/>' +
          '<polygon points="278,146 268,141 268,151" fill="#1565c0"/>' +
          '<text x="150" y="165" font-size="10" fill="var(--text2)">for two weeks</text>' +
          '<rect x="12" y="184" width="150" height="56" rx="8" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="20" y="206" font-size="11" fill="var(--text)">I have worked here.</text>' +
          '<text x="20" y="227" font-size="10" fill="#2e7d32">(ещё работаю — сейчас)</text>' +
          '<rect x="176" y="184" width="152" height="56" rx="8" fill="none" stroke="#c62828" stroke-width="2"/>' +
          '<text x="184" y="206" font-size="11" fill="var(--text)">I worked here.</text>' +
          '<text x="184" y="227" font-size="10" fill="#c62828">(уже ушёл — прошлое)</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ have / has + 3-я форма + for / since",
            rule_ru:
              '<b>have/has</b> + 3-я форма, потом <b>for</b> (срок) или <b>since</b> (с какого момента):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>have worked</b> … <b>for</b> two months</div><div>я работаю здесь уже два месяца</div>' +
              '<div>She <b>has had</b> … <b>since</b> last week</div><div>у неё … с прошлой недели</div>' +
              '<div><b>for</b> + срок · <b>since</b> + точка</div><div>for a week · since the accident</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "have worked … for", example: "I have worked here for two months.", transcr: "Ай хэв уёкт хиэ фо ту манс.", tr_ru: "Я работаю здесь уже два месяца." },
              { subj: "она", verb: "has had … since", example: "She has had a cough since last week.", transcr: "Ши хэз хэд э коф синс ласт уик.", tr_ru: "У неё кашель с прошлой недели." },
              { subj: "моя спина", verb: "has been … since", example: "My back has been sore since the accident.", transcr: "Май бэк хэз бин со синс зэ эксидэнт.", tr_ru: "Спина болит со времени той аварии." },
            ],
          },
          negative: {
            label_ru: "❌ have not / has not + 3-я форма",
            rule_ru:
              'Отрицание — <b>have not</b> / <b>has not</b> + 3-я форма:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>have not felt</b> well …</div><div>мне нехорошо …</div>' +
              '<div>He <b>has not worked</b> here for long</div><div>он здесь работает недолго</div>' +
              '<div>полная форма: have not / has not</div><div>в речи: haven\'t / hasn\'t</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "have not felt … since", example: "I have not felt well since last week.", transcr: "Ай хэв нот фэлт уэл синс ласт уик.", tr_ru: "Мне нехорошо с прошлой недели." },
              { subj: "он", verb: "has not worked … for", example: "He has not worked here for long.", transcr: "Хи хэз нот уёкт хиэ фо лонг.", tr_ru: "Он работает здесь недолго." },
              { subj: "мы", verb: "have not had … for", example: "We have not had lunch for six hours.", transcr: "Уи хэв нот хэд ланч фо сикс ауэз.", tr_ru: "Мы не ели обед уже шесть часов." },
            ],
          },
          question: {
            label_ru: "❓ How long…? / Have you…?",
            rule_ru:
              '<b>How long</b> + have/has + 3-я форма — «как долго / как давно?». Ответ: <b>For…</b> / <b>Since…</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>How long have</b> you had…?</div><div>как давно у тебя…?</div>' +
              '<div>— <b>For</b> a week. / <b>Since</b> last week.</div><div>— Неделю. / С прошлой недели.</div>' +
              '<div>Have you had…?</div><div>да/нет вопрос</div>' +
              '</div>',
            table: [
              { subj: "как долго", verb: "have you had…?", example: "How long have you had this pain?", transcr: "Хау лонг хэв ю хэд зис пэйн?", tr_ru: "Как долго у вас эта боль?" },
              { subj: "как давно", verb: "have you worked…?", example: "How long have you worked here?", transcr: "Хау лонг хэв ю уёкт хиэ?", tr_ru: "Как давно ты здесь работаешь?" },
              { subj: "ты", verb: "have you had…?", example: "Have you had this cough for long?", transcr: "Хэв ю хэд зис коф фо лонг?", tr_ru: "Этот кашель у тебя давно?" },
            ],
          },
        },
        examples: [
          { en: "I have worked here for two months.", transcr: "Ай хэв уёкт хиэ фо ту манс.", ru: "Я работаю здесь уже два месяца. (for — срок)" },
          { en: "She has had a cough since last week.", transcr: "Ши хэз хэд э коф синс ласт уик.", ru: "У неё кашель с прошлой недели. (since — точка старта)" },
          { en: "How long have you had this pain?", transcr: "Хау лонг хэв ю хэд зис пэйн?", ru: "Как долго у вас эта боль? (How long…?)" },
          { en: "My back has been sore since the accident.", transcr: "Май бэк хэз бин со синс зэ эксидэнт.", ru: "Спина болит со времени той аварии." },
          { en: "I have not felt well since last week.", transcr: "Ай хэв нот фэлт уэл синс ласт уик.", ru: "Мне нехорошо с прошлой недели. (отрицание)" },
          { en: "We have been in the camp for three weeks.", transcr: "Уи хэв бин ин зэ кэмп фо фри уикс.", ru: "Мы в лагере уже три недели." },
          { en: "How long have you worked on the farm?", transcr: "Хау лонг хэв ю уёкт он зэ фарм?", ru: "Как давно ты работаешь на ферме?" },
          { en: "He has had a headache for two days.", transcr: "Хи хэз хэд э хэдэйк фо ту дэйз.", ru: "У него голова болит уже два дня." },
          { en: "I have had this ache in my wrist for a week.", transcr: "Ай хэв хэд зис эйк ин май рист фо э уик.", ru: "Запястье ноет уже неделю. (ache, wrist)" },
          { en: "Have you had this rash for long?", transcr: "Хэв ю хэд зис рэш фо лонг?", ru: "Эта сыпь у тебя давно? (rash)" },
          { en: "My elbow has hurt since the accident.", transcr: "Май элбоу хэз хёт синс зэ эксидэнт.", ru: "Локоть болит со времени той аварии. (elbow)" },
          { en: "Last year I worked here for three months.", transcr: "Ласт йиэ ай уёкт хиэ фо фри манс.", ru: "В прошлом году я работал здесь три месяца. (Past Simple — закончилось)" },
        ],
        simple_ru: {
          formula:
            '<b>have/has + 3-я форма</b> + <b>for</b> (срок) или <b>since</b> (с какого момента). ' +
            'Вопрос: <b>How long…?</b> По-русски — настоящее время, по-английски — Present Perfect.',
          examples: [
            { en: "I have had this pain for two days.", transcr: "Ай хэв хэд зис пэйн фо ту дэйз.", ru: "for — срок (два дня)." },
            { en: "I have been here since last week.", transcr: "Ай хэв бин хиэ синс ласт уик.", ru: "since — точка старта (с прошлой недели)." },
          ],
        },
        ytQuery: "present perfect for since how long английский для начинающих",
      },

      glossary: [
        { en: "matter", transcr: "мэтэ", ru: "дело (What's the matter? = что случилось?)", pn: "/ˈmætə/" },
        { en: "allergic", transcr: "элёджик", ru: "с аллергией (на что-то)", pn: "/əˈlɜːdʒɪk/" },
        { en: "prescription", transcr: "прискрипшэн", ru: "рецепт (на лекарство)", pn: "/prɪˈskrɪpʃən/" },
        { en: "painful", transcr: "пэйнфул", ru: "болезненный, болит", pn: "/ˈpeɪnfʊl/" },
        { en: "recently", transcr: "рисэнтли", ru: "недавно", pn: "/ˈriːsntli/" },
      ],

      words: [
        { e: "😣", en: "ache", transcr: "эйк", ru: "ноющая боль; ныть", pn: "/eɪk/" },
        { e: "🤧", en: "flu", transcr: "флу", ru: "грипп", pn: "/fluː/" },
        { e: "😵‍💫", en: "dizzy", transcr: "дизи", ru: "с головокружением", pn: "/ˈdɪzi/" },
        { e: "🫁", en: "breathe", transcr: "бриз", ru: "дышать", pn: "/briːð/" },
        { e: "🩹", en: "bandage", transcr: "бэндидж", ru: "бинт, повязка", pn: "/ˈbændɪdʒ/" },
        { e: "🔵", en: "tablet", transcr: "тэблэт", ru: "таблетка", pn: "/ˈtæblət/" },
        { e: "💉", en: "injection", transcr: "инджэкшэн", ru: "укол, инъекция", pn: "/ɪnˈdʒekʃən/" },
        { e: "🤲", en: "feel", transcr: "фил", ru: "чувствовать (себя)", pn: "/fiːl/" },
        { e: "🗓️", en: "month", transcr: "манс", ru: "месяц", pn: "/mʌnθ/" },
        { e: "🦴", en: "rib", transcr: "риб", ru: "ребро", pn: "/rɪb/" },
        { e: "🦵", en: "ankle", transcr: "энкл", ru: "лодыжка", pn: "/ˈæŋkl/" },
        { e: "💪", en: "elbow", transcr: "элбоу", ru: "локоть", pn: "/ˈelbəʊ/" },
        { e: "🤚", en: "wrist", transcr: "рист", ru: "запястье", pn: "/rɪst/" },
        { e: "🔴", en: "rash", transcr: "рэш", ru: "сыпь", pn: "/ræʃ/" },
      ],

      dialogue: [
        { s: "d", en: "Good morning. How can I help you?", transcr: "Гуд монинг. Хау кэн ай хэлп ю?", ru: "Доброе утро. Чем могу помочь?" },
        { s: "w", en: "I have a pain in my back.", transcr: "Ай хэв э пэйн ин май бэк.", ru: "У меня болит спина." },
        { s: "d", en: "How long have you had this pain?", transcr: "Хау лонг хэв ю хэд зис пэйн?", ru: "Как долго у вас эта боль?" },
        { s: "w", en: "I have had it since the accident.", transcr: "Ай хэв хэд ит синс зэ эксидэнт.", ru: "С той аварии." },
        { s: "d", en: "Does it hurt when you breathe?", transcr: "Даз ит хёт уэн ю бриз?", ru: "Больно, когда вы дышите?" },
        { s: "w", en: "Yes, sometimes. And I feel dizzy.", transcr: "Йес, самтаймс. Энд ай фил дизи.", ru: "Да, иногда. И кружится голова." },
        { s: "d", en: "Have you had a cough?", transcr: "Хэв ю хэд э коф?", ru: "Кашель есть?" },
        { s: "w", en: "No. I feel tired and weak.", transcr: "Ноу. Ай фил тайэд энд уик.", ru: "Нет. Я устал и слабый." },
        { s: "d", en: "How long have you felt weak?", transcr: "Хау лонг хэв ю фэлт уик?", ru: "Как давно вы чувствуете слабость?" },
        { s: "w", en: "For two days now.", transcr: "Фо ту дэйз нау.", ru: "Уже два дня." },
        { s: "d", en: "Here is a prescription for you.", transcr: "Хиэ из э прискрипшэн фо ю.", ru: "Вот вам рецепт." },
        { s: "w", en: "Thank you. Take it to the chemist's?", transcr: "Сэнк ю. Тэйк ит ту зэ кэмист?", ru: "Спасибо. Отнести в аптеку?" },
        { s: "d", en: "Yes. Come back in two weeks.", transcr: "Йес. Кам бэк ин ту уикс.", ru: "Да. Приходите через две недели." },
        { s: "w", en: "Thank you, doctor.", transcr: "Сэнк ю, доктэ.", ru: "Спасибо, доктор." },
      ],

      quiz: [
        { q: '[COMPLETE] "I have worked here ___ two months." (срок)', opts: ["for", "since", "ago", "at"], c: 0, expl: "for + срок (for two months). since — для точки старта (since last week).", hint_ru: "Срок → for." },
        { q: '[COMPLETE] "She has had a cough ___ last week." (с какого момента)', opts: ["since", "for", "in", "ago"], c: 0, expl: "since + точка во времени (since last week). for — для срока (for a week).", hint_ru: "Точка старта → since." },
        { q: '[COMPLETE] "___ have you had this pain?" (как долго?)', opts: ["How long", "How much", "How many", "What"], c: 0, expl: "How long…? — вопрос о длительности. How much/many — о количестве.", hint_ru: "Длительность → How long." },
        { q: '[CORRECT] «Я работаю здесь уже два месяца.»', opts: ["I have worked here for two months.", "I work here for two months.", "I worked here two months.", "I am here for two months."], c: 0, expl: "Present Perfect (have worked) + for — длительность до сейчас. Present Simple/Past тут нельзя.", hint_ru: "have + 3-я форма + for." },
        { q: '[COMPLETE] "My back ___ sore since the accident." (один — back)', opts: ["has been", "was", "is", "have been"], c: 0, expl: "back (он) → has been + since. was/is не показывают длительность до сейчас.", hint_ru: "back → has been." },
        { q: '[NEGATIVE] "I ___ well since last week." (мне нехорошо)', opts: ["have not felt", "did not feel", "do not feel", "was not"], c: 0, expl: "have not felt — Present Perfect отрицание (длится до сейчас). felt — 3-я форма feel.", hint_ru: "have not + 3-я форма." },
        { q: '[COMPLETE] "I have had this rash ___ three days." (срок)', opts: ["for", "since", "last", "ago"], c: 0, expl: "for + срок (for three days). since — для точки старта.", hint_ru: "Срок → for." },
        { q: '[TRANSLATE] "лодыжка"', opts: ["ankle", "wrist", "elbow", "rib"], c: 0, expl: "ankle — лодыжка. wrist — запястье, elbow — локоть, rib — ребро.", hint_ru: "ankle." },
        { q: '[TRANSLATE] "запястье"', opts: ["wrist", "ankle", "knee", "elbow"], c: 0, expl: "wrist — запястье. ankle — лодыжка, knee — колено, elbow — локоть.", hint_ru: "wrist." },
        { q: '[TRANSLATE] "грипп"', opts: ["flu", "ache", "rash", "cough"], c: 0, expl: "flu — грипп. ache — ноющая боль, rash — сыпь, cough — кашель.", hint_ru: "flu." },
        { q: '[TRANSLATE] "укол"', opts: ["injection", "tablet", "bandage", "medicine"], c: 0, expl: "injection — укол. tablet — таблетка, bandage — бинт, medicine — лекарство.", hint_ru: "injection." },
        { q: "[LISTEN] How long have you had this pain?", opts: ["Как долго у вас эта боль?", "Где болит?", "У вас есть кашель?", "Вы устали?"], c: 0, expl: "How long have you had this pain? — как долго у вас эта боль?", hint_ru: "" },
        { q: "[GIST] По диалогу: с какого момента у рабочего болит спина?", opts: ["С той аварии.", "Со вчерашнего дня.", "Уже год.", "С прошлого месяца."], c: 0, expl: "«I have had it since the accident.» — боль с той аварии.", hint_ru: "Слушай реплику про since." },
        { q: '[BUILD] «Я работаю здесь уже два месяца.»', build: ["I", "have", "worked", "here", "for", "two", "months"], expl: "I have worked here for two months. — have + 3-я форма + for (срок).", hint_ru: "I have worked here for two months." },
        { q: '[BUILD] «Как долго у вас эта боль?»', build: ["How", "long", "have", "you", "had", "this", "pain"], expl: "How long have you had this pain? — How long + have you + had.", hint_ru: "How long have you had this pain?" },
      ],

      everyday: {
        title_ru: "У врача и в аптеке (the chemist's)",
        phrases: [
          { en: "What's the matter?", transcr: "Уотс зэ мэтэ?", ru: "Что вас беспокоит? (так спрашивает врач)" },
          { en: "I've had a sore throat since Monday.", transcr: "Айв хэд э со сроут синс мандэй.", ru: "Горло болит с понедельника." },
          { en: "I've got a bad cough. Can you help me?", transcr: "Айв гот э бэд коф. Кэн ю хэлп ми?", ru: "У меня сильный кашель. Можете помочь? (в аптеке)" },
          { en: "Have you got anything for a headache?", transcr: "Хэв ю гот энисинг фо э хэдэйк?", ru: "Есть что-нибудь от головной боли?" },
          { en: "How often do I take it?", transcr: "Хау офн ду ай тэйк ит?", ru: "Как часто это принимать?" },
          { en: "Where's the nearest chemist's?", transcr: "Уэаз зэ ниэрэст кэмист?", ru: "Где ближайшая аптека?" },
        ],
      },
    },

    {
      id: 28,
      title_ru: "Я работаю всё утро: Present Perfect Continuous (отчёт смены)",
      cefr: "B1 · Present Perfect Continuous · process vs result · machinery",
      grammar: {
        title_ru: "have / has been + …ing — действие ДЛИТСЯ (процесс) ↔ have + 3-я форма (результат)",
        intro_ru:
          'Present Perfect Continuous (<b>have/has been</b> + глагол<b>-ing</b>) показывает <b>длительное действие</b>, ' +
          'которое началось в прошлом и <b>идёт сейчас</b> (или только что закончилось) — важна сама <b>работа</b> и ' +
          '<b>как долго</b> она идёт:<br>' +
          '✅ <b>I have been working</b> <span class="g-transcr">[ай хэв бин уёкин]</span> since six o\'clock. ' +
          '(я работаю с шести — процесс длится)<br>' +
          '✅ <b>How long</b> <span class="g-transcr">[хау лонг]</span> have you been working? (как долго ты работаешь?)<br>' +
          '⚠️ Сравни с результатом: <b>have/has + 3-я форма</b> — что <b>сделано</b> (сколько?): ' +
          '<b>I have picked ten trays.</b> (я собрал десять лотков — результат).',
        cultural_ru:
          '⚠️ Главное отличие от русского: по-русски «Я <b>работаю</b> всё утро» — настоящее время. ' +
          'По-английски это <b>have been + …ing</b>: <b>I have been working all morning.</b><br>' +
          '<b>Два времени — два смысла:</b><br>' +
          '• <b>have been + …ing</b> — <b>ПРОЦЕСС / как долго</b>: «I have been picking <b>all morning</b>» ' +
          '(важно само действие, оно ещё идёт).<br>' +
          '• <b>have + 3-я форма</b> — <b>РЕЗУЛЬТАТ / сколько</b>: «I have picked <b>ten trays</b>» ' +
          '(важен итог, действие закончено).<br>' +
          'Поэтому в отчёте смены: «How long have you been working?» (как долго) — но «How many boxes ' +
          'have you packed?» (сколько готово).',
        note_ru:
          '⚠️ Частая ошибка: <s>I work since six o\'clock</s> — нельзя Present Simple про длительность до сейчас. ' +
          'Правильно: <b>I have been working since six o\'clock.</b><br>' +
          '⚠️ Не теряй <b>-ing</b>: <s>I have been work</s> → <b>I have been working</b>. ' +
          'И не теряй <b>been</b>: <s>I have working</s> → <b>I have been working</b>.<br>' +
          '⚠️ В разговоре сокращают: I\'ve been, she\'s been, hasn\'t been. В заданиях и сборке фраз пиши ' +
          '<b>полную</b> форму (I have been, she has been); сокращения — только в «Фразах».',
        visual_ru:
          '<svg viewBox="0 0 340 256" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="14" y="18" font-size="13" fill="var(--text2)">Процесс (длится) ↔ Результат (готово)</text>' +
          '<text x="14" y="46" font-size="18">↻</text>' +
          '<text x="36" y="44" font-size="12" fill="#1565c0">have been + …ing — действие ДЛИТСЯ</text>' +
          '<text x="36" y="61" font-size="10" fill="var(--text2)">вопрос: How long? (как долго)</text>' +
          '<line x1="36" y1="74" x2="300" y2="74" stroke="#1565c0" stroke-width="2" stroke-dasharray="4 3"/>' +
          '<polygon points="300,74 290,69 290,79" fill="#1565c0"/>' +
          '<text x="14" y="108" font-size="16">✓</text>' +
          '<text x="36" y="106" font-size="12" fill="#2e7d32">have + 3-я форма — РЕЗУЛЬТАТ</text>' +
          '<text x="36" y="123" font-size="10" fill="var(--text2)">вопрос: How many? (сколько)</text>' +
          '<line x1="36" y1="136" x2="240" y2="136" stroke="#2e7d32" stroke-width="2"/>' +
          '<line x1="240" y1="130" x2="240" y2="142" stroke="#2e7d32" stroke-width="3"/>' +
          '<text x="250" y="140" font-size="11" fill="#2e7d32">✓ 10</text>' +
          '<rect x="12" y="166" width="156" height="78" rx="8" fill="none" stroke="#1565c0" stroke-width="2"/>' +
          '<text x="22" y="190" font-size="11" fill="var(--text)">I have been picking.</text>' +
          '<text x="22" y="211" font-size="10" fill="#1565c0">↻ всё утро (процесс)</text>' +
          '<text x="22" y="231" font-size="10" fill="var(--text2)">как долго работаю</text>' +
          '<rect x="180" y="166" width="148" height="78" rx="8" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="190" y="190" font-size="11" fill="var(--text)">I have picked</text>' +
          '<text x="190" y="207" font-size="11" fill="var(--text)">ten trays.</text>' +
          '<text x="190" y="231" font-size="10" fill="#2e7d32">✓ результат (сколько)</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ have / has been + …ing (процесс)",
            rule_ru:
              '<b>have/has been</b> + глагол<b>-ing</b> — действие идёт уже какое-то время:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>have been working</b> since six</div><div>я работаю с шести</div>' +
              '<div>She <b>has been cleaning</b> the line</div><div>она моет линию (уже долго)</div>' +
              '<div>они: <b>have been</b> · он/она: <b>has been</b></div><div>+ глагол с -ing</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "have been working", example: "I have been working since six o'clock.", transcr: "Ай хэв бин уёкин синс сикс эклок.", tr_ru: "Я работаю с шести часов. (процесс длится)" },
              { subj: "она", verb: "has been cleaning", example: "She has been cleaning the line all morning.", transcr: "Ши хэз бин клинин зэ лайн ол монинг.", tr_ru: "Она моет линию всё утро." },
              { subj: "они", verb: "have been loading", example: "They have been loading boxes for two hours.", transcr: "Зэй хэв бин лоудин боксиз фо ту ауэз.", tr_ru: "Они грузят коробки уже два часа." },
            ],
          },
          negative: {
            label_ru: "❌ have not / has not been + …ing",
            rule_ru:
              'Отрицание — <b>have not</b> / <b>has not been</b> + глагол<b>-ing</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>have not been working</b> long</div><div>я работаю недолго</div>' +
              '<div>The line <b>has not been working</b></div><div>линия не работает (всё это время)</div>' +
              '<div>полная форма: have not / has not</div><div>в речи: haven\'t / hasn\'t</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "have not been working", example: "I have not been working long.", transcr: "Ай хэв нот бин уёкин лонг.", tr_ru: "Я работаю недолго." },
              { subj: "линия", verb: "has not been working", example: "The line has not been working well.", transcr: "Зэ лайн хэз нот бин уёкин уэл.", tr_ru: "Линия работает неважно." },
              { subj: "мы", verb: "have not been picking", example: "We have not been picking today.", transcr: "Уи хэв нот бин пикин тудэй.", tr_ru: "Сегодня мы не собирали." },
            ],
          },
          question: {
            label_ru: "❓ How long…? / Have you been…?",
            rule_ru:
              '<b>How long</b> + have/has been + …ing — «как долго?». Ответ: <b>For…</b> / <b>Since…</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>How long have</b> you been working?</div><div>как давно ты работаешь?</div>' +
              '<div>— <b>For</b> two hours. / <b>Since</b> six.</div><div>— Два часа. / С шести.</div>' +
              '<div>Have you been…?</div><div>да/нет вопрос</div>' +
              '</div>',
            table: [
              { subj: "как долго", verb: "have you been working?", example: "How long have you been working here?", transcr: "Хау лонг хэв ю бин уёкин хиэ?", tr_ru: "Как давно ты здесь работаешь?" },
              { subj: "как долго", verb: "has she been cleaning?", example: "How long has she been cleaning the line?", transcr: "Хау лонг хэз ши бин клинин зэ лайн?", tr_ru: "Как долго она моет линию?" },
              { subj: "ты", verb: "have you been checking?", example: "Have you been checking the sensor?", transcr: "Хэв ю бин чекин зэ сэнсэ?", tr_ru: "Ты проверял датчик?" },
            ],
          },
        },
        examples: [
          { en: "I have been working since six o'clock.", transcr: "Ай хэв бин уёкин синс сикс эклок.", ru: "Я работаю с шести часов. (процесс — как долго)" },
          { en: "She has been cleaning the line all morning.", transcr: "Ши хэз бин клинин зэ лайн ол монинг.", ru: "Она моет линию всё утро." },
          { en: "How long have you been picking?", transcr: "Хау лонг хэв ю бин пикин?", ru: "Как давно ты собираешь? (как долго)" },
          { en: "I have been picking for two hours.", transcr: "Ай хэв бин пикин фо ту ауэз.", ru: "Я собираю уже два часа." },
          { en: "I have picked ten trays.", transcr: "Ай хэв пикт тэн трэйз.", ru: "Я собрал десять лотков. (результат — сколько)" },
          { en: "He has been checking the sensor.", transcr: "Хи хэз бин чекин зэ сэнсэ.", ru: "Он проверяет датчик. (процесс)" },
          { en: "I have checked all the gauges.", transcr: "Ай хэв чект ол зэ гэйджиз.", ru: "Я проверил все измерители. (результат)" },
          { en: "The line has not been working well.", transcr: "Зэ лайн хэз нот бин уёкин уэл.", ru: "Линия работает неважно. (отрицание)" },
          { en: "Have you been adjusting the valve?", transcr: "Хэв ю бин эджастин зэ вэлв?", ru: "Ты регулируешь клапан?" },
          { en: "I have been cleaning the rollers for an hour.", transcr: "Ай хэв бин клинин зэ роулэз фо эн ауэ.", ru: "Я чищу ролики уже час." },
          { en: "I have loaded all the boxes.", transcr: "Ай хэв лоудид ол зэ боксиз.", ru: "Я загрузил все коробки. (результат)" },
          { en: "How long have you been working on the line?", transcr: "Хау лонг хэв ю бин уёкин он зэ лайн?", ru: "Как давно ты работаешь на линии?" },
        ],
        simple_ru: {
          formula:
            '<b>have/has been + глагол-ing</b> — действие ДЛИТСЯ (процесс, «как долго?»). ' +
            '<b>have/has + 3-я форма</b> — РЕЗУЛЬТАТ (готово, «сколько?»).',
          examples: [
            { en: "I have been picking all morning.", transcr: "Ай хэв бин пикин ол монинг.", ru: "процесс — как долго (всё утро)." },
            { en: "I have picked ten trays.", transcr: "Ай хэв пикт тэн трэйз.", ru: "результат — сколько (десять лотков)." },
          ],
        },
        ytQuery: "present perfect continuous have been doing английский для начинающих",
      },

      glossary: [
        { en: "production", transcr: "прэдакшн", ru: "производство (the production line — производственная линия)", pn: "/prəˈdʌkʃn/" },
        { en: "faulty", transcr: "фолти", ru: "неисправный, с дефектом", pn: "/ˈfɔːlti/" },
        { en: "lately", transcr: "лэйтли", ru: "в последнее время", pn: "/ˈleɪtli/" },
        { en: "maintenance", transcr: "мэйнтэнэнс", ru: "техобслуживание, ремонт", pn: "/ˈmeɪntənəns/" },
      ],

      words: [
        { e: "🏭", en: "line", transcr: "лайн", ru: "(производственная) линия", pn: "/laɪn/" },
        { e: "📦", en: "conveyor", transcr: "кэнвэйэ", ru: "конвейер (лента)", pn: "/kənˈveɪə/" },
        { e: "🛞", en: "roller", transcr: "роулэ", ru: "ролик, валик", pn: "/ˈrəʊlə/" },
        { e: "🎛️", en: "panel", transcr: "пэнл", ru: "панель управления", pn: "/ˈpænl/" },
        { e: "🖥️", en: "screen", transcr: "скрин", ru: "экран", pn: "/skriːn/" },
        { e: "📡", en: "sensor", transcr: "сэнсэ", ru: "датчик, сенсор", pn: "/ˈsensə/" },
        { e: "📷", en: "scanner", transcr: "скэнэ", ru: "сканер (этикеток)", pn: "/ˈskænə/" },
        { e: "⏲️", en: "gauge", transcr: "гэйдж", ru: "измеритель, манометр", pn: "/ɡeɪdʒ/" },
        { e: "🚰", en: "valve", transcr: "вэлв", ru: "клапан, вентиль", pn: "/vælv/" },
        { e: "🚿", en: "nozzle", transcr: "нозл", ru: "форсунка, насадка", pn: "/ˈnɒzl/" },
        { e: "🛢️", en: "grease", transcr: "грис", ru: "смазка", pn: "/ɡriːs/" },
        { e: "🕹️", en: "handle", transcr: "хэндл", ru: "ручка, рукоятка", pn: "/ˈhændl/" },
        { e: "🔧", en: "adjust", transcr: "эджаст", ru: "настроить, регулировать", pn: "/əˈdʒʌst/" },
        { e: "🔍", en: "inspect", transcr: "инспэкт", ru: "осматривать, проверять", pn: "/ɪnˈspekt/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning. How long have you been working?", transcr: "Гуд монинг. Хау лонг хэв ю бин уёкин?", ru: "Доброе утро. Как давно ты работаешь?" },
        { s: "w", en: "I have been working here since six o'clock.", transcr: "Ай хэв бин уёкин хиэ синс сикс эклок.", ru: "Я работаю здесь с шести часов." },
        { s: "m", en: "Good. What have you been doing?", transcr: "Гуд. Уот хэв ю бин дуин?", ru: "Хорошо. Что ты делал?" },
        { s: "w", en: "I have been cleaning the rollers all morning.", transcr: "Ай хэв бин клинин зэ роулэз ол монинг.", ru: "Я чистил ролики всё утро." },
        { s: "m", en: "Has the line been faulty lately?", transcr: "Хэз зэ лайн бин фолти лэйтли?", ru: "Линия в последнее время барахлит?" },
        { s: "w", en: "Yes. I have been checking the sensor.", transcr: "Йес. Ай хэв бин чекин зэ сэнсэ.", ru: "Да. Я проверял датчик." },
        { s: "m", en: "How many boxes have you packed?", transcr: "Хау мэни боксиз хэв ю пэкт?", ru: "Сколько коробок ты упаковал?" },
        { s: "w", en: "I have packed ten boxes today.", transcr: "Ай хэв пэкт тэн боксиз тудэй.", ru: "Сегодня я упаковал десять коробок." },
        { s: "m", en: "Good. The production line is busy today.", transcr: "Гуд. Зэ прэдакшн лайн из бизи тудэй.", ru: "Хорошо. Производственная линия сегодня загружена." },
        { s: "w", en: "I have done some maintenance here.", transcr: "Ай хэв дан сам мэйнтэнэнс хиэ.", ru: "Я сделал тут немного техобслуживания." },
        { s: "m", en: "Have you been near the conveyor?", transcr: "Хэв ю бин ниэ зэ кэнвэйэ?", ru: "Ты был у конвейера?" },
        { s: "w", en: "Yes. I have been adjusting the nozzle.", transcr: "Йес. Ай хэв бин эджастин зэ нозл.", ru: "Да. Я регулировал форсунку." },
        { s: "m", en: "Well done. Take a break now.", transcr: "Уэл дан. Тэйк э брэйк нау.", ru: "Молодец. Сделай перерыв." },
        { s: "w", en: "Thank you, Tom.", transcr: "Сэнк ю, Том.", ru: "Спасибо, Том." },
      ],

      quiz: [
        { q: '[COMPLETE] "I have ___ working since six o\'clock." (процесс длится)', opts: ["been", "be", "am", "was"], c: 0, expl: "have been + …ing — Present Perfect Continuous. been + working = процесс, который длится.", hint_ru: "have ___ working → been." },
        { q: '[COMPLETE] "I have been ___ all morning." (собирать — процесс)', opts: ["picking", "picked", "pick", "picks"], c: 0, expl: "after been → глагол с -ing: been picking. picked — это 3-я форма (для результата).", hint_ru: "been + …ing." },
        { q: '[CORRECT] «Я собрал десять лотков.» (результат — сколько)', opts: ["I have picked ten trays.", "I have been picking ten trays.", "I am picking ten trays.", "I picking ten trays."], c: 0, expl: "Результат (сколько готово) → have + 3-я форма: have picked. been + …ing — для процесса, не для итога.", hint_ru: "Результат → have + 3-я форма." },
        { q: '[CORRECT] «Я собираю всё утро.» (процесс — как долго)', opts: ["I have been picking all morning.", "I have picked all morning.", "I picked all morning.", "I am picked all morning."], c: 0, expl: "Процесс / как долго → have been + …ing: have been picking. have picked — это результат.", hint_ru: "Процесс → have been + …ing." },
        { q: '[COMPLETE] "How ___ have you been working?" (как долго?)', opts: ["long", "many", "much", "old"], c: 0, expl: "How long…? — о длительности. How many/much — о количестве.", hint_ru: "Длительность → How long." },
        { q: '[COMPLETE] "She ___ been cleaning the line." (она)', opts: ["has", "have", "do", "did"], c: 0, expl: "she/he/it → has been. I/you/we/they → have been.", hint_ru: "She → has." },
        { q: '[NEGATIVE] "The line ___ been working well." (не работала)', opts: ["has not", "have not", "did not", "is not"], c: 0, expl: "The line (он) → has not been + …ing. have not — для I/you/we/they.", hint_ru: "line → has not been." },
        { q: '[TRANSLATE] "датчик, сенсор"', opts: ["sensor", "gauge", "valve", "nozzle"], c: 0, expl: "sensor — датчик. gauge — измеритель, valve — клапан, nozzle — форсунка.", hint_ru: "sensor." },
        { q: '[TRANSLATE] "клапан, вентиль"', opts: ["valve", "sensor", "roller", "handle"], c: 0, expl: "valve — клапан. sensor — датчик, roller — ролик, handle — ручка.", hint_ru: "valve." },
        { q: '[TRANSLATE] "форсунка, насадка"', opts: ["nozzle", "panel", "screen", "grease"], c: 0, expl: "nozzle — форсунка. panel — панель, screen — экран, grease — смазка.", hint_ru: "nozzle." },
        { q: "[LISTEN] How long have you been working?", opts: ["Как давно ты работаешь?", "Где ты работаешь?", "Что ты делаешь?", "Ты устал?"], c: 0, expl: "How long have you been working? — как давно / как долго ты работаешь?", hint_ru: "" },
        { q: "[GIST] По диалогу: с какого времени рабочий работает?", opts: ["С шести часов.", "С восьми часов.", "Со вчерашнего дня.", "С обеда."], c: 0, expl: "«I have been working non-stop since six o'clock.» — с шести часов.", hint_ru: "Слушай реплику про since." },
        { q: '[BUILD] «Я работаю с шести часов.»', build: ["I", "have", "been", "working", "since", "six", "o'clock"], expl: "I have been working since six o'clock. — have been + …ing + since.", hint_ru: "I have been working since six o'clock." },
        { q: '[BUILD] «Как давно ты здесь работаешь?»', build: ["How", "long", "have", "you", "been", "working", "here"], expl: "How long have you been working here? — How long + have you been + …ing.", hint_ru: "How long have you been working here?" },
        { q: '[BUILD] «Я проверил все датчики.»', build: ["I", "have", "checked", "all", "the", "sensors"], expl: "I have checked all the sensors. — результат → have + 3-я форма (checked).", hint_ru: "I have checked all the sensors." },
      ],

      everyday: {
        title_ru: "Отметиться на смену и доложить (clock-in)",
        phrases: [
          { en: "I need to clock in.", transcr: "Ай нид ту клок ин.", ru: "Мне нужно отметиться (на входе)." },
          { en: "I've been working since six.", transcr: "Айв бин уёкин синс сикс.", ru: "Я работаю с шести." },
          { en: "I've been on the line all morning.", transcr: "Айв бин он зэ лайн ол монинг.", ru: "Я на линии всё утро." },
          { en: "I've packed two hundred boxes.", transcr: "Айв пэкт ту хандрэд боксиз.", ru: "Я упаковал двести коробок." },
          { en: "The line has been faulty all day.", transcr: "Зэ лайн хэз бин фолти ол дэй.", ru: "Линия неисправна весь день." },
          { en: "How long have you been here?", transcr: "Хау лонг хэв ю бин хиэ?", ru: "Как давно ты здесь?" },
        ],
      },
    },

    {
      id: 29,
      title_ru: "Я помогу, я сделаю: will / won't + Shall I…? (планы и предложения)",
      cefr: "B1 · will / won't · going to vs will · making plans",
      grammar: {
        title_ru: "will / won't + глагол — обещание, предложение, решение и предсказание · Shall I…?",
        intro_ru:
          'Когда мы решаем что-то <b>прямо сейчас</b>, обещаем, предлагаем помощь или предсказываем будущее — ' +
          'берём <b>will</b> + глагол (без частицы to). Отрицание — <b>will not</b> (в речи коротко <b>won\'t</b>):<br>' +
          '✅ <b>I will help you.</b> <span class="g-transcr">[ай уил хэлп ю]</span> (я помогу — решил сейчас)<br>' +
          '✅ <b>I think it will rain.</b> <span class="g-transcr">[ай синк ит уил рэйн]</span> (думаю, пойдёт дождь — предсказание)<br>' +
          '❌ <b>I will not be late.</b> <span class="g-transcr">[ай уил нот би лэйт]</span> (я не опоздаю — обещание)<br>' +
          '❓ Предложить помощь вопросом — <b>Shall I…?</b> <span class="g-transcr">[шэл ай]</span>: ' +
          '<b>Shall I carry that crate?</b> (мне понести ящик?)',
        cultural_ru:
          '⚠️ <b>will</b> и <b>going to</b> — оба про будущее, но выбор зависит от того, <b>когда</b> приняли решение:<br>' +
          '• <b>going to</b> — план <b>решён ЗАРАНЕЕ</b> (до разговора): «Next year <b>I am going to</b> work here» ' +
          '(я уже решил раньше).<br>' +
          '• <b>will</b> — решение <b>в момент речи</b>, спонтанно: «These crates are heavy. <b>I will</b> carry them» ' +
          '(решил только что).<br>' +
          '• Предсказание можно и так, и так: по факту/очевидности — <b>going to</b> («It is cloudy — it is going to rain»), ' +
          'по мнению — <b>will</b> («I think it will rain»).<br>' +
          '⚠️ В русском будущее — одно слово («помогу», «пойдёт дождь»); в английском выбираем <b>will / going to</b> по смыслу.',
        note_ru:
          '⚠️ После <b>will</b> — глагол <b>без to</b> и без -s: <s>I will to help</s> / <s>He will helps</s> → ' +
          '<b>I will help</b> / <b>He will help</b>.<br>' +
          '⚠️ Предложить помощь — это <b>will</b>, а не Present Simple: <s>I help you.</s> → <b>I will help you.</b><br>' +
          '⚠️ BrE: «думаю, что НЕ…» говорят <b>I do not think … will</b> (а не «I think … won\'t»): ' +
          '<b>I do not think the manager will be angry.</b><br>' +
          '⚠️ В речи сокращают: <b>I\'ll</b> [айл], <b>he\'ll</b> [хил], <b>won\'t</b> [уоунт]. Это нормально — ' +
          'в «Фразах» и сборке фраз увидишь сокращения.',
        visual_ru:
          '<svg viewBox="0 0 340 244" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="12" y="18" font-size="12.5" fill="var(--text2)">Когда приняли решение? → going to или will</text>' +
          '<rect x="10" y="30" width="156" height="204" rx="9" fill="none" stroke="#1565c0" stroke-width="2"/>' +
          '<text x="22" y="56" font-size="20">📋</text>' +
          '<text x="54" y="52" font-size="13" fill="#1565c0">going to</text>' +
          '<text x="22" y="74" font-size="10" fill="var(--text2)">план — решил РАНЬШЕ</text>' +
          '<text x="22" y="104" font-size="11" fill="var(--text)">Next year</text>' +
          '<text x="22" y="122" font-size="11" fill="var(--text)">I\'m going to</text>' +
          '<text x="22" y="140" font-size="11" fill="var(--text)">work here.</text>' +
          '<text x="22" y="168" font-size="10" fill="var(--text2)">(решил заранее)</text>' +
          '<text x="22" y="198" font-size="10" fill="#1565c0">очевидно → It\'s</text>' +
          '<text x="22" y="214" font-size="10" fill="#1565c0">going to rain.</text>' +
          '<rect x="174" y="30" width="156" height="204" rx="9" fill="none" stroke="#e65100" stroke-width="2"/>' +
          '<text x="186" y="56" font-size="18">⚡</text>' +
          '<text x="214" y="52" font-size="13" fill="#e65100">will / I\'ll</text>' +
          '<text x="186" y="74" font-size="10" fill="var(--text2)">решаю СЕЙЧАС</text>' +
          '<text x="186" y="104" font-size="11" fill="var(--text)">These crates</text>' +
          '<text x="186" y="122" font-size="11" fill="var(--text)">are heavy.</text>' +
          '<text x="186" y="140" font-size="11" fill="var(--text)">I\'ll carry them.</text>' +
          '<text x="186" y="168" font-size="10" fill="var(--text2)">(решил только что)</text>' +
          '<text x="186" y="198" font-size="10" fill="#e65100">мнение → I think</text>' +
          '<text x="186" y="214" font-size="10" fill="#e65100">it will rain.</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ will + глагол (обещание / решение / предсказание)",
            rule_ru:
              '<b>will</b> + глагол — один на все лица, без to и без -s:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I / you / he / we <b>will help</b></div><div>я/ты/он/мы помогу(-жет)</div>' +
              '<div><b>will</b> + глагол</div><div>одинаково для всех лиц</div>' +
              '<div>в речи коротко: <b>I\'ll, he\'ll, we\'ll</b></div><div>= I will, he will…</div>' +
              '</div>',
            table: [
              { subj: "я", verb: "will help", example: "I will help you.", transcr: "Ай уил хэлп ю.", tr_ru: "Я помогу тебе. (решил сейчас)" },
              { subj: "он", verb: "will be", example: "He will be tired tonight.", transcr: "Хи уил би тайэд тунайт.", tr_ru: "Он устанет сегодня вечером. (предсказание)" },
              { subj: "они", verb: "will arrange", example: "They will arrange it tomorrow.", transcr: "Зэй уил эрэйндж ит тэмороу.", tr_ru: "Они устроят это завтра." },
            ],
          },
          negative: {
            label_ru: "❌ will not / won't + глагол",
            rule_ru:
              'Отрицание — <b>will not</b> (в речи <b>won\'t</b> [уоунт]) + глагол:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>will not be</b> late</div><div>я не опоздаю</div>' +
              '<div>It <b>will not</b> rain</div><div>дождя не будет</div>' +
              '<div>полная форма: <b>will not</b></div><div>коротко: <b>won\'t</b></div>' +
              '</div>',
            table: [
              { subj: "я", verb: "will not be", example: "I will not be late tomorrow.", transcr: "Ай уил нот би лэйт тэмороу.", tr_ru: "Я не опоздаю завтра. (обещание)" },
              { subj: "дождь", verb: "will not", example: "It will not rain today.", transcr: "Ит уил нот рэйн тудэй.", tr_ru: "Сегодня дождя не будет." },
              { subj: "он", verb: "will not be", example: "He will not be angry.", transcr: "Хи уил нот би энгри.", tr_ru: "Он не будет злиться." },
            ],
          },
          question: {
            label_ru: "❓ Will you…? / Shall I…? (предложить помощь)",
            rule_ru:
              '<b>Will</b> + кто + глагол? — вопрос о будущем. Предложить помощь — <b>Shall I…? / Shall we…?</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>Will you be</b> here tonight?</div><div>ты будешь здесь вечером?</div>' +
              '<div>— Yes, I <b>will</b>. / No, I <b>won\'t</b>.</div><div>— Да. / Нет.</div>' +
              '<div><b>Shall I</b> carry it?</div><div>мне понести? (предлагаю)</div>' +
              '</div>',
            table: [
              { subj: "ты", verb: "will you be?", example: "Will you be here tonight?", transcr: "Уил ю би хиэ тунайт?", tr_ru: "Ты будешь здесь сегодня вечером?" },
              { subj: "я (предлагаю)", verb: "shall I carry?", example: "Shall I carry that crate?", transcr: "Шэл ай кэри зэт крэйт?", tr_ru: "Мне понести тот ящик? (предлагаю помощь)" },
              { subj: "мы (предлагаю)", verb: "shall we swap?", example: "Shall we swap shifts on Sunday?", transcr: "Шэл уи суоп шифтс он сандэй?", tr_ru: "Поменяемся сменами в воскресенье?" },
            ],
          },
        },
        examples: [
          { en: "I will definitely help you.", transcr: "Ай уил дэфинитли хэлп ю.", ru: "Я точно тебе помогу. (предложение)" },
          { en: "I will lend you my gloves.", transcr: "Ай уил лэнд ю май главз.", ru: "Я одолжу тебе свои перчатки." },
          { en: "Shall I carry that crate?", transcr: "Шэл ай кэри зэт крэйт?", ru: "Мне понести тот ящик? (предлагаю помощь)" },
          { en: "Shall we swap shifts?", transcr: "Шэл уи суоп шифтс?", ru: "Поменяемся сменами?" },
          { en: "I will not be late tomorrow.", transcr: "Ай уил нот би лэйт тэмороу.", ru: "Я не опоздаю завтра. (обещание)" },
          { en: "I think it will rain today.", transcr: "Ай синк ит уил рэйн тудэй.", ru: "Думаю, сегодня пойдёт дождь. (предсказание)" },
          { en: "I do not think the manager will be angry.", transcr: "Ай ду нот синк зэ мэниджэ уил би энгри.", ru: "Не думаю, что бригадир разозлится. (BrE-отрицание)" },
          { en: "There will be more work tomorrow.", transcr: "Зэа уил би мо уёк тэмороу.", ru: "Завтра будет больше работы." },
          { en: "You will be tired tonight.", transcr: "Ю уил би тайэд тунайт.", ru: "Ты устанешь сегодня вечером." },
          { en: "Next year I am going to work here.", transcr: "Нэкст йиэ ай эм гоуин ту уёк хиэ.", ru: "В следующем году я буду работать здесь. (план — решил заранее → going to)" },
          { en: "These crates are heavy. I will carry them.", transcr: "Зиз крэйтс ар хэви. Ай уил кэри зэм.", ru: "Эти ящики тяжёлые. Я их понесу. (решение сейчас → will)" },
          { en: "It is going to rain. Take an umbrella.", transcr: "Ит из гоуин ту рэйн. Тэйк эн амбрэлэ.", ru: "Будет дождь. Возьми зонт. (очевидно → going to)" },
          { en: "I will decide tonight.", transcr: "Ай уил дисайд тунайт.", ru: "Я решу сегодня вечером." },
          { en: "Maybe I will arrange it tomorrow.", transcr: "Мэйби ай уил эрэйндж ит тэмороу.", ru: "Может, я устрою это завтра." },
        ],
        simple_ru: {
          formula:
            '<b>will + глагол</b> — решение / обещание / предсказание В МОМЕНТ речи. ' +
            '<b>be going to + глагол</b> — план, решённый ЗАРАНЕЕ.',
          examples: [
            { en: "I will help you.", transcr: "Ай уил хэлп ю.", ru: "решил сейчас → will." },
            { en: "Next year I am going to work here.", transcr: "Нэкст йиэ ай эм гоуин ту уёк хиэ.", ru: "решил заранее → going to." },
          ],
        },
        ytQuery: "will going to разница английский для начинающих",
      },

      glossary: [
        { en: "probably", transcr: "пробэбли", ru: "вероятно, наверное", pn: "/ˈprɒbəbli/" },
        { en: "spare", transcr: "спэа", ru: "запасной, лишний (a spare pair — запасная пара)", pn: "/speə/" },
        { en: "worry", transcr: "уари", ru: "волноваться (Don't worry — не волнуйся)", pn: "/ˈwʌri/" },
        { en: "definitely", transcr: "дэфинитли", ru: "точно, обязательно", pn: "/ˈdefɪnətli/" },
      ],

      words: [
        { e: "🙋", en: "offer", transcr: "офэ", ru: "предложить (помощь)", pn: "/ˈɒfə/" },
        { e: "🤲", en: "lend", transcr: "лэнд", ru: "одолжить (дать в долг)", pn: "/lend/" },
        { e: "🫴", en: "borrow", transcr: "бороу", ru: "взять в долг (у кого-то)", pn: "/ˈbɒrəʊ/" },
        { e: "🔁", en: "swap", transcr: "суоп", ru: "поменяться (сменами)", pn: "/swɒp/" },
        { e: "➕", en: "extra", transcr: "экстрэ", ru: "дополнительный (extra hours)", pn: "/ˈekstrə/" },
        { e: "🙏", en: "favour", transcr: "фэйвэ", ru: "одолжение (ask a favour)", pn: "/ˈfeɪvə/" },
        { e: "📅", en: "arrange", transcr: "эрэйндж", ru: "договориться, устроить", pn: "/əˈreɪndʒ/" },
        { e: "✅", en: "decide", transcr: "дисайд", ru: "решить", pn: "/dɪˈsaɪd/" },
        { e: "🤷", en: "maybe", transcr: "мэйби", ru: "может быть", pn: "/ˈmeɪbi/" },
        { e: "💭", en: "think", transcr: "синк", ru: "думать, считать (I think… — я думаю, что…)", pn: "/θɪŋk/" },
        { e: "☂️", en: "umbrella", transcr: "амбрэлэ", ru: "зонт", pn: "/ʌmˈbrelə/" },
        { e: "🧥", en: "raincoat", transcr: "рэйнкоут", ru: "дождевик, плащ", pn: "/ˈreɪnkəʊt/" },
        { e: "🌙", en: "tonight", transcr: "тунайт", ru: "сегодня вечером", pn: "/təˈnaɪt/" },
        { e: "🌆", en: "evening", transcr: "ивнинг", ru: "вечер", pn: "/ˈiːvnɪŋ/" },
      ],

      dialogue: [
        { s: "w", en: "Those boxes are heavy, Tom. I'll carry them for you.", transcr: "Зоуз боксиз ар хэви, Том. Айл кэри зэм фо ю.", ru: "Те коробки тяжёлые, Том. Я их донесу." },
        { s: "m", en: "Thanks. It's going to rain today.", transcr: "Сэнкс. Итс гоуин ту рэйн тудэй.", ru: "Спасибо. Сегодня будет дождь." },
        { s: "w", en: "Yes, I think it'll probably rain. I'll take my raincoat.", transcr: "Йес, ай синк итл пробэбли рэйн. Айл тэйк май рэйнкоут.", ru: "Да, думаю, наверное пойдёт дождь. Возьму дождевик." },
        { s: "m", en: "Good. Will you be here tonight?", transcr: "Гуд. Уил ю би хиэ тунайт?", ru: "Хорошо. Ты будешь здесь сегодня вечером?" },
        { s: "w", en: "Yes, I will. Shall I do the late shift?", transcr: "Йес, ай уил. Шэл ай ду зэ лэйт шифт?", ru: "Да, буду. Мне выйти в позднюю смену?" },
        { s: "m", en: "No, that's fine. Anna will do it.", transcr: "Ноу, зэтс файн. Анна уил ду ит.", ru: "Нет, всё в порядке. Это сделает Анна." },
        { s: "w", en: "Shall we swap on Sunday? I want to call my family.", transcr: "Шэл уи суоп он сандэй? Ай уонт ту кол май фэмили.", ru: "Поменяемся в воскресенье? Хочу позвонить семье." },
        { s: "m", en: "Good. I'll arrange it.", transcr: "Гуд. Айл эрэйндж ит.", ru: "Хорошо. Я устрою это." },
        { s: "w", en: "Thank you. I won't be late, I promise.", transcr: "Сэнк ю. Ай уоунт би лэйт, ай промис.", ru: "Спасибо. Я не опоздаю, обещаю." },
        { s: "m", en: "Have you got gloves? It'll be cold.", transcr: "Хэв ю гот главз? Итл би коулд.", ru: "У тебя есть перчатки? Будет холодно." },
        { s: "w", en: "No. Can I borrow some spare gloves?", transcr: "Ноу. Кэн ай бороу сам спэа главз?", ru: "Нет. Можно одолжить запасные перчатки?" },
        { s: "m", en: "Yes. I'll lend you these.", transcr: "Йес. Айл лэнд ю зиз.", ru: "Да. Я одолжу тебе вот эти." },
        { s: "w", en: "Thanks. I'll get some tonight.", transcr: "Сэнкс. Айл гет сам тунайт.", ru: "Спасибо. Я куплю сегодня вечером." },
        { s: "m", en: "Don't worry. Well done today!", transcr: "Доунт уари. Уэл дан тудэй!", ru: "Не переживай. Молодец сегодня!" },
      ],

      quiz: [
        { q: '[COMPLETE] "Those boxes are heavy. I ___ carry them." (решаю помочь сейчас)', opts: ["will", "am", "do", "have"], c: 0, expl: "Спонтанное решение / предложение в момент речи → will + глагол: I will carry them (I'll).", hint_ru: "Решил сейчас → will." },
        { q: '[CORRECT] «Эти ящики тяжёлые. Я их понесу.» (решил только что)', opts: ["I'll carry them.", "I'm going to carry them.", "I carry them.", "I carrying them."], c: 0, expl: "I'll carry them. — спонтанное решение → will. going to = план, решённый заранее; I carry (Present Simple) не годится для решения сейчас.", hint_ru: "Решение в момент речи → will / I'll." },
        { q: '[CORRECT] «В следующем году я буду работать здесь.» (план, решил заранее)', opts: ["Next year I'm going to work here.", "Next year I'll work here.", "Next year I work here.", "Next year I working here."], c: 0, expl: "Next year I'm going to work here. — план, решённый ЗАРАНЕЕ → be going to. will — для решений в момент речи.", hint_ru: "План заранее → going to." },
        { q: '[COMPLETE] "___ I carry that crate for you?" (предлагаю помощь)', opts: ["Shall", "Will", "Do", "Am"], c: 0, expl: "Предложить помощь вопросом → Shall I…? (BrE): Shall I carry that crate?", hint_ru: "Предложить помощь → Shall I…?" },
        { q: '[NEGATIVE] "I ___ be late, I promise." (обещаю: не опоздаю)', opts: ["will not", "am not", "do not", "have not"], c: 0, expl: "Обещание в будущем → will not (won't) + глагол: I will not be late.", hint_ru: "won't = will not." },
        { q: '[COMPLETE] "I ___ think the manager will be angry." («не думаю, что…»)', opts: ["do not", "will not", "am not", "have not"], c: 0, expl: "В английском говорят I do not think … will (а не «I think … won't»): I don't think the manager will be angry. Это привычный британский порядок.", hint_ru: "«Не думаю, что…» → I don't think … will." },
        { q: '[QUESTION] Сделай вопрос: «Ты будешь здесь сегодня вечером?»', opts: ["Will you be here tonight?", "You will be here tonight?", "Do you be here tonight?", "Are you be here tonight?"], c: 0, expl: "Вопрос с will: Will + кто + глагол? → Will you be here tonight?", hint_ru: "Will + you + be…?" },
        { q: '[TRANSLATE] "предложить (помощь)"', opts: ["offer", "lend", "borrow", "swap"], c: 0, expl: "offer — предложить. lend — одолжить (дать), borrow — взять в долг, swap — поменяться.", hint_ru: "offer." },
        { q: '[TRANSLATE] "одолжить (дать кому-то)"', opts: ["lend", "borrow", "arrange", "decide"], c: 0, expl: "lend — одолжить, дать в долг. borrow — наоборот, взять в долг у кого-то.", hint_ru: "lend." },
        { q: '[TRANSLATE] "поменяться (сменами)"', opts: ["swap", "favour", "offer", "decide"], c: 0, expl: "swap — поменяться. favour — одолжение, offer — предложить, decide — решить.", hint_ru: "swap." },
        { q: '[TRANSLATE] "зонт"', opts: ["umbrella", "raincoat", "favour", "evening"], c: 0, expl: "umbrella — зонт. raincoat — дождевик, evening — вечер.", hint_ru: "umbrella." },
        { q: "[LISTEN] Shall I help you?", opts: ["Помочь тебе? (предлагаю)", "Ты мне поможешь?", "Где помощь?", "Я помог тебе."], c: 0, expl: "Shall I help you? — Мне помочь тебе? (предложение помощи).", hint_ru: "" },
        { q: "[GIST] По диалогу: что рабочий предложил сделать в воскресенье?", opts: ["Поменяться сменами.", "Уехать домой.", "Купить зонт.", "Взять выходной."], c: 0, expl: "«Shall we swap on Sunday?» — рабочий предложил поменяться сменами.", hint_ru: "Слушай реплику про Sunday." },
        { q: '[BUILD] «Я помогу тебе.»', build: ["I'll", "help", "you"], expl: "I'll help you. — will для решения / предложения; I'll = I will (в речи).", hint_ru: "I'll help you." },
        { q: '[BUILD] «В следующем году я буду работать здесь.» (план)', build: ["Next", "year", "I'm", "going", "to", "work", "here"], expl: "Next year I'm going to work here. — план, решённый заранее → be going to.", hint_ru: "Next year I'm going to work here." },
      ],

      everyday: {
        title_ru: "Договориться и предложить (планы и помощь)",
        phrases: [
          { en: "Shall I give you a hand?", transcr: "Шэл ай гив ю э хэнд?", ru: "Помочь тебе? (досл. «дать руку»)" },
          { en: "I'll do it, don't worry.", transcr: "Айл ду ит, доунт уари.", ru: "Я сделаю, не волнуйся." },
          { en: "Let's swap shifts this week.", transcr: "Летс суоп шифтс зис уик.", ru: "Давай поменяемся сменами на этой неделе." },
          { en: "It'll probably rain — take your raincoat.", transcr: "Итл пробэбли рэйн — тэйк ё рэйнкоут.", ru: "Наверное, будет дождь — возьми дождевик." },
          { en: "What are you doing tonight?", transcr: "Уот ар ю дуин тунайт?", ru: "Что ты делаешь сегодня вечером? (план)" },
          { en: "I'm meeting Tom at six.", transcr: "Айм митин Том эт сикс.", ru: "Я встречаюсь с Томом в шесть. (договорённость)" },
        ],
      },
    },

    {
      id: 30,
      title_ru: "Если пойдёт дождь…: First conditional + may / might (планы и условия)",
      cefr: "B1 · First conditional · future time clauses · may / might",
      grammar: {
        title_ru: "First conditional: if + настоящее → will / might · when / until + настоящее · may / might (возможность)",
        intro_ru:
          'Когда одно <b>зависит</b> от другого в будущем — берём <b>First conditional</b>: ' +
          '<b>if</b> + настоящее время, … <b>will</b> + глагол.<br>' +
          '✅ <b>If it rains, we will work in the shed.</b> ' +
          '<span class="g-transcr">[иф ит рэйнз, уи уил уёк ин зэ шед]</span> ' +
          '(если пойдёт дождь — будем работать в сарае)<br>' +
          '⚠️ Часть с <b>if</b> — всегда <b>настоящее</b>, даже про будущее: ' +
          '<s>If it will rain</s> → <b>If it rains</b>.<br>' +
          '❓ Если не уверены — вместо will берём <b>might</b> / <b>may</b> (может быть): ' +
          '<b>If the ground is wet, we might stop.</b> ' +
          '<span class="g-transcr">[иф зэ граунд из уэт, уи майт стоп]</span> (может, остановимся)',
        cultural_ru:
          '⚠️ После слов времени <b>when</b> (когда), <b>as soon as</b> (как только), <b>while</b> (пока), ' +
          '<b>until</b> (пока не) — тоже <b>настоящее</b> время, НЕ will (хотя смысл про будущее):<br>' +
          '• <b>When</b> the lorry <b>is</b> here, we <b>will</b> load it. ' +
          '<span class="g-transcr">[уэн зэ лори из хиэ, уи уил лоуд ит]</span><br>' +
          '• <b>As soon as</b> you <b>finish</b>, take a break. ' +
          '<span class="g-transcr">[эз сун эз ю финиш, тэйк э брэйк]</span><br>' +
          '• We can\'t start <b>until</b> the field <b>is</b> dry. ' +
          '<span class="g-transcr">[уи кант старт антил зэ филд из драй]</span><br>' +
          '⚠️ В русском будущее ставят в обе части («когда <u>приедет</u> … <u>загрузим</u>»); ' +
          'в английском после if / when / until — <b>настоящее</b>.',
        note_ru:
          '⚠️ Никакого <b>will</b> после if / when / until: <s>If it will rain</s> → <b>If it rains</b>.<br>' +
          '⚠️ <b>may</b> / <b>might</b> = <b>возможность</b> (менее уверенно, чем will), глагол <b>без to и без -s</b>: ' +
          '<s>It mights rain</s> / <s>It might to rain</s> → <b>It might rain.</b><br>' +
          '⚠️ Отрицание возможности — <b>might not</b> / <b>may not</b> (два слова, не сливаются): ' +
          '<b>The lorry might not come today.</b> ' +
          '<span class="g-transcr">[зэ лори майт нот кам тудэй]</span><br>' +
          '⚠️ <b>will</b> — почти уверен; <b>might / may</b> — может быть. ' +
          '«It will rain» (точно) ≠ «It might rain» (возможно).',
        visual_ru:
          '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="12" y="18" font-size="12" fill="var(--text2)">if + настоящее → will (точно) или might (может быть)</text>' +
          '<rect x="10" y="34" width="124" height="120" rx="9" fill="none" stroke="#1565c0" stroke-width="2"/>' +
          '<text x="22" y="62" font-size="18">🌧️</text>' +
          '<text x="50" y="60" font-size="12" fill="#1565c0">условие</text>' +
          '<text x="22" y="88" font-size="12" fill="var(--text)">if it rains</text>' +
          '<text x="22" y="110" font-size="10" fill="var(--text2)">настоящее</text>' +
          '<text x="22" y="128" font-size="10" fill="#c62828">не «if it will»</text>' +
          '<line x1="136" y1="94" x2="170" y2="94" stroke="var(--text2)" stroke-width="2"/>' +
          '<polygon points="170,88 182,94 170,100" fill="var(--text2)"/>' +
          '<rect x="186" y="40" width="144" height="50" rx="8" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="196" y="62" font-size="13" fill="#2e7d32">✅ we will stop</text>' +
          '<text x="196" y="80" font-size="10" fill="var(--text2)">точно (≈100%)</text>' +
          '<rect x="186" y="100" width="144" height="50" rx="8" fill="none" stroke="#e65100" stroke-width="2" stroke-dasharray="5 4"/>' +
          '<text x="196" y="122" font-size="13" fill="#e65100">❓ we might stop</text>' +
          '<text x="196" y="140" font-size="10" fill="var(--text2)">может быть (≈50%)</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ if + настоящее → will / might (результат)",
            rule_ru:
              'Часть с <b>if</b> — настоящее; результат — <b>will</b> (точно) или <b>might</b> (может быть):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>If</b> it <b>rains</b>, we <b>will</b> stop.</div><div>точно остановимся</div>' +
              '<div><b>If</b> it <b>rains</b>, we <b>might</b> stop.</div><div>может, остановимся</div>' +
              '<div>часть с if = <b>настоящее</b></div><div>не «if it will»</div>' +
              '</div>',
            table: [
              { subj: "если дождь", verb: "will stop", example: "If it rains, we will stop.", transcr: "Иф ит рэйнз, уи уил стоп.", tr_ru: "Если пойдёт дождь, мы остановимся. (точно)" },
              { subj: "если полные", verb: "will tell", example: "If the boxes are full, I will tell Tom.", transcr: "Иф зэ боксиз ар фул, ай уил тэл Том.", tr_ru: "Если ящики полные, я скажу Тому." },
              { subj: "может быть", verb: "might leave", example: "If you finish early, you might leave.", transcr: "Иф ю финиш ёли, ю майт лив.", tr_ru: "Если закончишь рано, можешь уйти. (возможно)" },
            ],
          },
          negative: {
            label_ru: "❌ if … not / will not / might not",
            rule_ru:
              'Отрицание в любой части. Частое: <b>will not</b> (won\'t) и <b>might not</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>If</b> it <b>does not</b> rain, we will work.</div><div>если не будет дождя…</div>' +
              '<div>I <b>will not</b> be late.</div><div>я не опоздаю</div>' +
              '<div>The lorry <b>might not</b> come.</div><div>может не приехать</div>' +
              '</div>',
            table: [
              { subj: "если НЕ дождь", verb: "will work", example: "If it does not rain, we will work in the field.", transcr: "Иф ит даз нот рэйн, уи уил уёк ин зэ филд.", tr_ru: "Если дождя не будет, будем работать в поле." },
              { subj: "не опоздаю", verb: "will not be", example: "If you help me, I will not be late.", transcr: "Иф ю хэлп ми, ай уил нот би лэйт.", tr_ru: "Если поможешь мне, я не опоздаю." },
              { subj: "может не приехать", verb: "might not come", example: "The lorry might not come today.", transcr: "Зэ лори майт нот кам тудэй.", tr_ru: "Грузовик, возможно, сегодня не приедет." },
            ],
          },
          question: {
            label_ru: "❓ What will you do if…? / Shall I…?",
            rule_ru:
              'Главная часть — обычный вопрос с <b>will</b>; часть с <b>if</b> — настоящее:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>What will</b> we do <b>if</b> it rains?</div><div>что будем, если дождь?</div>' +
              '<div><b>Will</b> we stop <b>if</b> it rains?</div><div>остановимся, если дождь?</div>' +
              '<div><b>Shall I</b> help if you are slow?</div><div>помочь, если не успеваешь?</div>' +
              '</div>',
            table: [
              { subj: "что будем?", verb: "will we do?", example: "What will we do if it rains?", transcr: "Уот уил уи ду иф ит рэйнз?", tr_ru: "Что мы будем делать, если пойдёт дождь?" },
              { subj: "остановимся?", verb: "will we stop?", example: "If it rains, will we stop?", transcr: "Иф ит рэйнз, уил уи стоп?", tr_ru: "Если пойдёт дождь, мы остановимся?" },
              { subj: "предложу помощь", verb: "shall I help?", example: "Shall I help if you are slow?", transcr: "Шэл ай хэлп иф ю ар слоу?", tr_ru: "Помочь, если ты не успеваешь?" },
            ],
          },
        },
        examples: [
          { en: "If it rains, we will work in the shed.", transcr: "Иф ит рэйнз, уи уил уёк ин зэ шед.", ru: "Если пойдёт дождь, будем работать в сарае." },
          { en: "If the boxes are full, I will tell Tom.", transcr: "Иф зэ боксиз ар фул, ай уил тэл Том.", ru: "Если ящики полные, я скажу Тому." },
          { en: "We might stop if the ground is wet.", transcr: "Уи майт стоп иф зэ граунд из уэт.", ru: "Мы можем остановиться, если земля мокрая." },
          { en: "When the lorry is here, we will load it.", transcr: "Уэн зэ лори из хиэ, уи уил лоуд ит.", ru: "Когда грузовик будет здесь, мы его загрузим." },
          { en: "As soon as you finish, take a break.", transcr: "Эз сун эз ю финиш, тэйк э брэйк.", ru: "Как только закончишь, сделай перерыв." },
          { en: "We can't start until the field is dry.", transcr: "Уи кант старт антил зэ филд из драй.", ru: "Не можем начать, пока поле не высохнет." },
          { en: "Wait here until I come back.", transcr: "Уэйт хиэ антил ай кам бэк.", ru: "Подожди здесь, пока я не вернусь." },
          { en: "It might rain tonight, so take your raincoat.", transcr: "Ит майт рэйн тунайт, соу тэйк ё рэйнкоут.", ru: "Возможно, вечером пойдёт дождь, возьми дождевик." },
          { en: "There may be more work tomorrow.", transcr: "Зэа мэй би мо уёк тэмороу.", ru: "Возможно, завтра будет больше работы." },
          { en: "Tom may cancel the shift if it snows.", transcr: "Том мэй кэнсл зэ шифт иф ит сноуз.", ru: "Том может отменить смену, если пойдёт снег." },
          { en: "Perhaps the lorry will be late.", transcr: "Пэхэпс зэ лори уил би лэйт.", ru: "Возможно, грузовик опоздает." },
          { en: "If it rains, the field will be muddy.", transcr: "Иф ит рэйнз, зэ филд уил би мади.", ru: "Если пойдёт дождь, поле будет грязным." },
          { en: "If the road is icy, we will stop.", transcr: "Иф зэ роуд из айси, уи уил стоп.", ru: "Если дорога обледенелая, мы остановимся." },
          { en: "Take your raincoat, otherwise you will get wet.", transcr: "Тэйк ё рэйнкоут, азэуайз ю уил гет уэт.", ru: "Возьми дождевик, иначе промокнешь." },
          { en: "If the floor is wet, it will be slippery.", transcr: "Иф зэ фло из уэт, ит уил би слипэри.", ru: "Если пол мокрый, он будет скользким." },
          { en: "The lorry may be late, so expect a delay.", transcr: "Зэ лори мэй би лэйт, соу икспэкт э дилэй.", ru: "Грузовик может опоздать, так что ожидай задержку." },
          { en: "There is a chance of rain tonight.", transcr: "Зэа из э чанс ов рэйн тунайт.", ru: "Сегодня вечером возможен дождь (есть шанс)." },
        ],
        simple_ru: {
          formula:
            '<b>if + настоящее</b>, … <b>will + глагол</b> (точно) или <b>might / may + глагол</b> (может быть). ' +
            'После <b>if / when / until</b> — настоящее, НЕ will.',
          examples: [
            { en: "If it rains, we will stop.", transcr: "Иф ит рэйнз, уи уил стоп.", ru: "точно остановимся → will." },
            { en: "It might rain tomorrow.", transcr: "Ит майт рэйн тэмороу.", ru: "возможно → might." },
          ],
        },
        ytQuery: "first conditional if will might английский для начинающих",
      },

      glossary: [
        { en: "rota", transcr: "роутэ", ru: "график смен (BrE)", pn: "/ˈrəʊtə/" },
        { en: "muddy", transcr: "мади", ru: "грязный (после дождя)", pn: "/ˈmʌdi/" },
        { en: "icy", transcr: "айси", ru: "ледяной, обледенелый", pn: "/ˈaɪsi/" },
        { en: "otherwise", transcr: "азэуайз", ru: "иначе, а то", pn: "/ˈʌðəwaɪz/" },
      ],

      words: [
        { e: "🎲", en: "chance", transcr: "чанс", ru: "шанс, вероятность", pn: "/tʃɑːns/" },
        { e: "❔", en: "possible", transcr: "посэбл", ru: "возможный", pn: "/ˈpɒsəbl/" },
        { e: "🤔", en: "perhaps", transcr: "пэхэпс", ru: "возможно, может быть", pn: "/pəˈhæps/" },
        { e: "👍", en: "sure", transcr: "шуэ", ru: "уверенный (I'm sure — я уверен)", pn: "/ʃʊə/" },
        { e: "🔮", en: "expect", transcr: "икспэкт", ru: "ожидать, предполагать", pn: "/ɪkˈspekt/" },
        { e: "🤞", en: "hope", transcr: "хоуп", ru: "надеяться", pn: "/həʊp/" },
        { e: "💭", en: "guess", transcr: "гес", ru: "догадка; полагать (I guess so)", pn: "/ɡes/" },
        { e: "🟫", en: "ground", transcr: "граунд", ru: "земля, грунт", pn: "/ɡraʊnd/" },
        { e: "💨", en: "dusty", transcr: "дасти", ru: "пыльный", pn: "/ˈdʌsti/" },
        { e: "⚠️", en: "slippery", transcr: "слипэри", ru: "скользкий", pn: "/ˈslɪpəri/" },
        { e: "⏳", en: "delay", transcr: "дилэй", ru: "задержка; задерживать", pn: "/dɪˈleɪ/" },
        { e: "🚫", en: "cancel", transcr: "кэнсл", ru: "отменить", pn: "/ˈkænsl/" },
        { e: "🟰", en: "same", transcr: "сэйм", ru: "тот же, такой же", pn: "/seɪm/" },
        { e: "🙅", en: "disagree", transcr: "дисэгри", ru: "не соглашаться", pn: "/ˌdɪsəˈɡriː/" },
      ],

      dialogue: [
        { s: "w", en: "Tom, what will we do if it rains today?", transcr: "Том, уот уил уи ду иф ит рэйнз тудэй?", ru: "Том, что мы будем делать, если сегодня пойдёт дождь?" },
        { s: "m", en: "If it rains, we will work in the shed.", transcr: "Иф ит рэйнз, уи уил уёк ин зэ шед.", ru: "Если пойдёт дождь, будем работать в сарае." },
        { s: "w", en: "And if the ground is wet?", transcr: "Энд иф зэ граунд из уэт?", ru: "А если земля мокрая?" },
        { s: "m", en: "We might stop and clean the warehouse.", transcr: "Уи майт стоп энд клин зэ уэахаус.", ru: "Можем остановиться и убрать склад." },
        { s: "w", en: "When will the lorry come?", transcr: "Уэн уил зэ лори кам?", ru: "Когда приедет грузовик?" },
        { s: "m", en: "As soon as it is here, we will load it.", transcr: "Эз сун эз ит из хиэ, уи уил лоуд ит.", ru: "Как только он будет здесь, загрузим его." },
        { s: "w", en: "I might be slow today. My back hurts.", transcr: "Ай майт би слоу тудэй. Май бэк хётс.", ru: "Я, возможно, буду медленным сегодня. Спина болит." },
        { s: "m", en: "No problem. Wait here until you feel better.", transcr: "Ноу проблэм. Уэйт хиэ антил ю фил бэтэ.", ru: "Ничего страшного. Подожди здесь, пока не станет легче." },
        { s: "w", en: "Thanks. Will Anna help if I am slow?", transcr: "Сэнкс. Уил Анна хэлп иф ай эм слоу?", ru: "Спасибо. Анна поможет, если я не успеваю?" },
        { s: "m", en: "Yes. We might finish early if the sun is hot.", transcr: "Йес. Уи майт финиш ёли иф зэ сан из хот.", ru: "Да. Можем закончить рано, если будет жарко." },
        { s: "w", en: "I think it will rain this evening.", transcr: "Ай синк ит уил рэйн зис ивнинг.", ru: "Думаю, вечером пойдёт дождь." },
        { s: "m", en: "So do I. Take your raincoat.", transcr: "Соу ду ай. Тэйк ё рэйнкоут.", ru: "Я тоже так думаю. Возьми дождевик." },
        { s: "w", en: "I will. I won't get wet this time.", transcr: "Ай уил. Ай уоунт гет уэт зис тайм.", ru: "Возьму. В этот раз не промокну." },
        { s: "m", en: "Well done today. Check the rota for tomorrow.", transcr: "Уэл дан тудэй. Чек зэ роутэ фо тэмороу.", ru: "Молодец сегодня. Посмотри график смен на завтра." },
      ],

      quiz: [
        { q: '[COMPLETE] "If it ___, we will work in the shed." (после if — настоящее)', opts: ["rains", "will rain", "rained", "is raining"], c: 0, expl: "После if — настоящее время: If it rains… Будущее (will) ставим во вторую часть, не после if.", hint_ru: "После if → настоящее." },
        { q: '[CORRECT] «Если пойдёт дождь, мы остановимся.»', opts: ["If it rains, we will stop.", "If it will rain, we will stop.", "If it rains, we stop.", "When it will rain, we stop."], c: 0, expl: "If it rains, we will stop. — после if настоящее (rains), результат — will + глагол. Никогда «if it will».", hint_ru: "if + настоящее, … will." },
        { q: '[COMPLETE] "When you ___, we will load the lorry." (время в будущем)', opts: ["finish", "will finish", "finished", "are finishing"], c: 0, expl: "После when (о будущем) — настоящее: When you finish… Не «will finish».", hint_ru: "when + настоящее." },
        { q: '[COMPLETE] "We can\'t start ___ the field is dry." (не начнём, пока не высохнет)', opts: ["until", "when", "if", "while"], c: 0, expl: "until = (до тех пор) пока не: We can't start until the field is dry. После until — настоящее.", hint_ru: "until = пока не." },
        { q: '[COMPLETE] "It ___ rain tonight. I am not sure." (возможность)', opts: ["might", "will", "won't", "does"], c: 0, expl: "might = возможно (менее уверенно, чем will): It might rain tonight.", hint_ru: "может быть → might." },
        { q: '[CORRECT] «Том, может быть, отменит смену.»', opts: ["Tom may cancel the shift.", "Tom may cancels the shift.", "Tom may to cancel the shift.", "Tom cancel the shift."], c: 0, expl: "may + глагол без -s и без to: Tom may cancel the shift. (may = возможность).", hint_ru: "may + глагол (без to, без -s)." },
        { q: '[QUESTION] Сделай вопрос: «Что мы будем делать, если пойдёт дождь?»', opts: ["What will we do if it rains?", "What we will do if it rains?", "What will we do if it will rain?", "What do we will if it rains?"], c: 0, expl: "Главная часть — вопрос (What will we do), часть с if — настоящее (rains): What will we do if it rains?", hint_ru: "What will we do if it rains?" },
        { q: '[TRANSLATE] "шанс, вероятность"', opts: ["chance", "delay", "ground", "guess"], c: 0, expl: "chance — шанс. delay — задержка, ground — земля, guess — догадка.", hint_ru: "chance." },
        { q: '[TRANSLATE] "отменить"', opts: ["cancel", "delay", "expect", "hope"], c: 0, expl: "cancel — отменить. delay — задержать, expect — ожидать, hope — надеяться.", hint_ru: "cancel." },
        { q: '[TRANSLATE] "скользкий"', opts: ["slippery", "dusty", "muddy", "wet"], c: 0, expl: "slippery — скользкий. dusty — пыльный, muddy — грязный, wet — мокрый.", hint_ru: "slippery." },
        { q: '[TRANSLATE] "возможно (может быть)"', opts: ["perhaps", "sure", "same", "chance"], c: 0, expl: "perhaps — возможно. sure — уверенный, same — тот же, chance — шанс.", hint_ru: "perhaps." },
        { q: "[LISTEN] It might rain tonight.", opts: ["Возможно, сегодня вечером пойдёт дождь.", "Сегодня вечером точно пойдёт дождь.", "Вчера вечером шёл дождь.", "Дождя сегодня не будет."], c: 0, expl: "It might rain tonight. — Возможно, вечером пойдёт дождь (might = не точно).", hint_ru: "" },
        { q: "[GIST] По диалогу: что они сделают, если земля мокрая?", opts: ["Остановятся и уберут склад.", "Поедут домой.", "Будут собирать быстрее.", "Отменят смену."], c: 0, expl: "«We might stop and clean the warehouse» — остановятся и уберут склад.", hint_ru: "Слушай реплику про wet ground." },
        { q: '[BUILD] «Если пойдёт дождь, мы остановимся.»', build: ["If", "it", "rains", "we", "will", "stop"], expl: "If it rains, we will stop. — if + настоящее (rains), результат — will + глагол.", hint_ru: "If it rains, we will stop." },
        { q: '[BUILD] «Я тоже.» (соглашаюсь с «I think…»)', build: ["So", "do", "I"], expl: "So do I. — согласие с утверждением (I think… → So do I).", hint_ru: "So do I." },
      ],

      everyday: {
        title_ru: "Согласиться и не согласиться (So do I / Neither do I)",
        phrases: [
          { en: "So do I.", transcr: "Соу ду ай.", ru: "И я тоже. (согласие с «I like…/I work…»)" },
          { en: "Neither do I.", transcr: "Найзэ ду ай.", ru: "И я нет. (согласие с «I don't…»)" },
          { en: "So am I.", transcr: "Соу эм ай.", ru: "И я тоже. (согласие с «I'm tired/ready»)" },
          { en: "Neither am I.", transcr: "Найзэ эм ай.", ru: "И я тоже нет. (согласие с «I'm not…»)" },
          { en: "I agree with you.", transcr: "Ай эгри уиз ю.", ru: "Я с тобой согласен." },
          { en: "I don't agree.", transcr: "Ай доунт эгри.", ru: "Я не согласен." },
        ],
      },
    },

    {
      id: 31,
      title_ru: "Правила и безопасность: have to / must / should (обязанность, запрет, совет)",
      cefr: "B1 · have to / must / mustn't / should · rules & safety · dependent prepositions",
      grammar: {
        title_ru: "have to / don't have to · must / mustn't · should / shouldn't — обязанность, запрет, совет",
        intro_ru:
          'Правила на ферме — это <b>обязанность</b>, <b>запрет</b> и <b>совет</b>. У каждого свой глагол:<br>' +
          '📋 <b>have to</b> (надо, таково правило): <b>You have to wear gloves.</b> ' +
          '<span class="g-transcr">[ю хэв ту уэа главз]</span> (надо носить перчатки)<br>' +
          '🆓 <b>don\'t have to</b> (не обязан, но можно): <b>You don\'t have to come early.</b> ' +
          '<span class="g-transcr">[ю доунт хэв ту кам ёли]</span> (рано приходить не обязательно)<br>' +
          '⛔ <b>mustn\'t</b> (нельзя, запрещено): <b>You mustn\'t smoke here.</b> ' +
          '<span class="g-transcr">[ю масэнт смоук хиэ]</span> (курить здесь нельзя)<br>' +
          '💡 <b>should</b> (совет): <b>You should drink more water.</b> ' +
          '<span class="g-transcr">[ю шуд дринк мо уотэ]</span> (стоит пить больше воды)',
        cultural_ru:
          '🔗 <b>Предлог «приклеен» к слову (dependent prepositions).</b> В английском к глаголу или ' +
          'прилагательному часто «приклеен» свой предлог — его учим вместе со словом, не переводя дословно ' +
          'с русского:<br>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
          '<div><b>depend <u>on</u></b> <span class="g-transcr">[дипэнд он]</span></div><div>зависеть от</div>' +
          '<div><b>afraid <u>of</u></b> <span class="g-transcr">[эфрэйд ов]</span></div><div>бояться (чего-то)</div>' +
          '<div><b>wait <u>for</u></b> <span class="g-transcr">[уэйт фо]</span></div><div>ждать (кого/что)</div>' +
          '<div><b>good <u>at</u></b> <span class="g-transcr">[гуд эт]</span></div><div>хорош в (чём-то)</div>' +
          '<div><b>responsible <u>for</u></b> <span class="g-transcr">[риспонсэбл фо]</span></div><div>отвечать за</div>' +
          '<div><b>worried <u>about</u></b> <span class="g-transcr">[уарид эбаут]</span></div><div>переживать о</div>' +
          '<div><b>listen <u>to</u></b> <span class="g-transcr">[лисэн ту]</span></div><div>слушать (кого-то)</div>' +
          '</div>' +
          '⚠️ Говорят «It depends <b>on</b> the weather», а не «depends from». Предлог запоминаем вместе со словом.',
        note_ru:
          '⚠️ <b>mustn\'t ≠ don\'t have to!</b> ' +
          '<b>You mustn\'t smoke</b> = курить <u>нельзя</u> (запрет). ' +
          '<b>You don\'t have to work on Sunday</b> = в воскресенье работать <u>не обязан</u> (но можно). ' +
          'Это совершенно разные вещи.<br>' +
          '⚠️ <b>have to</b> — правило извне (так заведено на ферме / таков закон); <b>must</b> — говорящий ' +
          'настаивает или это строгое правило/знак. В плюсе часто взаимозаменяемы.<br>' +
          '⚠️ Вопрос и отрицание <b>have to</b> — через <b>do/does</b>: <b>Do I have to work?</b> ' +
          '(НЕ <s>Have I to work?</s>); <b>He doesn\'t have to stay.</b> И не сокращай: <b>I have to go</b> ' +
          '(НЕ <s>I\'ve to go</s>).<br>' +
          '⚠️ После <b>must</b> / <b>should</b> — глагол <b>без to и без -s</b>: <b>He should rest</b> ' +
          '(НЕ <s>He shoulds</s> / <s>He should to rest</s>).<br>' +
          '⚠️ Произношение: <b>must</b> [маст], <b>mustn\'t</b> [масэнт] (t немой), <b>should</b> [шуд] (l немой).',
        visual_ru:
          '<svg viewBox="0 0 340 222" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="10" y="15" font-size="11" fill="var(--text2)">Сила: must / have to (надо) · should (совет)</text>' +
          '<rect x="10" y="24" width="152" height="46" rx="8" fill="none" stroke="#c62828" stroke-width="2"/>' +
          '<text x="20" y="46" font-size="13" fill="#c62828">🔴 must / have to</text>' +
          '<text x="20" y="63" font-size="10" fill="var(--text2)">надо — это правило</text>' +
          '<rect x="178" y="24" width="152" height="46" rx="8" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="188" y="46" font-size="13" fill="#2e7d32">🟢 should</text>' +
          '<text x="188" y="63" font-size="10" fill="var(--text2)">совет — лучше так</text>' +
          '<text x="10" y="92" font-size="11" fill="var(--text2)">Запрет ≠ нет обязанности:</text>' +
          '<rect x="10" y="100" width="148" height="52" rx="8" fill="none" stroke="#c62828" stroke-width="2"/>' +
          '<text x="20" y="122" font-size="13" fill="#c62828">⛔ mustn\'t</text>' +
          '<text x="20" y="142" font-size="10" fill="var(--text2)">нельзя (запрещено)</text>' +
          '<text x="166" y="131" font-size="17" fill="var(--text)" text-anchor="middle">≠</text>' +
          '<rect x="182" y="100" width="148" height="52" rx="8" fill="none" stroke="#1565c0" stroke-width="2"/>' +
          '<text x="192" y="122" font-size="13" fill="#1565c0">🆓 don\'t have to</text>' +
          '<text x="192" y="142" font-size="10" fill="var(--text2)">не обязан (но можно)</text>' +
          '<text x="10" y="174" font-size="10" fill="var(--text)">You mustn\'t smoke. — курить нельзя.</text>' +
          '<text x="10" y="192" font-size="10" fill="var(--text)">You don\'t have to come early. — рано не обязан.</text>' +
          '<text x="10" y="210" font-size="10" fill="var(--text)">You should drink water. — стоит пить воду.</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ have to / must / should + глагол (обязанность, совет)",
            rule_ru:
              'Обязанность и совет в плюсе:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>You <b>have to</b> wear gloves.</div><div>надо (правило)</div>' +
              '<div>You <b>must</b> wash your hands.</div><div>обязательно (сильно)</div>' +
              '<div>You <b>should</b> drink more water.</div><div>стоит (совет)</div>' +
              '</div>',
            table: [
              { subj: "правило", verb: "have to wear", example: "You have to wear gloves in the field.", transcr: "Ю хэв ту уэа главз ин зэ филд.", tr_ru: "В поле надо носить перчатки." },
              { subj: "сильно", verb: "must wash", example: "You must wash your hands.", transcr: "Ю маст уош ё хэндз.", tr_ru: "Руки мыть обязательно." },
              { subj: "совет", verb: "should drink", example: "You should drink more water.", transcr: "Ю шуд дринк мо уотэ.", tr_ru: "Тебе стоит пить больше воды." },
            ],
          },
          negative: {
            label_ru: "❌ don't have to (не обязан) · mustn't (нельзя) · shouldn't (не стоит)",
            rule_ru:
              'Главное — не путать <b>не обязан</b> и <b>нельзя</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>You <b>don\'t have to</b> come early.</div><div>не обязан (но можно)</div>' +
              '<div>You <b>mustn\'t</b> smoke here.</div><div>нельзя (запрет)</div>' +
              '<div>You <b>shouldn\'t</b> lift heavy boxes.</div><div>не стоит (совет)</div>' +
              '</div>',
            table: [
              { subj: "не обязан", verb: "don't have to", example: "You don't have to come early tomorrow.", transcr: "Ю доунт хэв ту кам ёли тэмороу.", tr_ru: "Завтра рано приходить не обязательно." },
              { subj: "нельзя", verb: "mustn't smoke", example: "You mustn't smoke near the field.", transcr: "Ю масэнт смоук ниэ зэ филд.", tr_ru: "Возле поля курить нельзя." },
              { subj: "не стоит", verb: "shouldn't lift", example: "You shouldn't lift heavy boxes.", transcr: "Ю шудэнт лифт хэви боксиз.", tr_ru: "Не стоит поднимать тяжёлые ящики." },
            ],
          },
          question: {
            label_ru: "❓ Do I have to…? · Should I…?",
            rule_ru:
              'Вопрос <b>have to</b> — через <b>do/does</b>; совет — <b>Should I…?</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>Do I have to</b> work at the weekend?</div><div>надо ли работать?</div>' +
              '<div><b>Should I</b> wear a helmet?</div><div>стоит ли надеть каску?</div>' +
              '<div><b>Do we have to</b> start at six?</div><div>надо ли начинать в шесть?</div>' +
              '</div>',
            table: [
              { subj: "надо?", verb: "do…have to", example: "Do I have to work at the weekend?", transcr: "Ду ай хэв ту уёк эт зэ уикэнд?", tr_ru: "Мне надо работать в выходные?" },
              { subj: "стоит?", verb: "should I wear", example: "Should I wear a helmet here?", transcr: "Шуд ай уэа э хэлмит хиэ?", tr_ru: "Мне стоит надеть каску здесь?" },
              { subj: "надо?", verb: "do we have to", example: "Do we have to start at six?", transcr: "Ду уи хэв ту старт эт сикс?", tr_ru: "Нам надо начинать в шесть?" },
            ],
          },
        },
        examples: [
          { en: "You have to wear gloves in the field.", transcr: "Ю хэв ту уэа главз ин зэ филд.", ru: "В поле надо носить перчатки." },
          { en: "You have to follow the safety rules.", transcr: "Ю хэв ту фолоу зэ сэйфти рулз.", ru: "Надо соблюдать правила безопасности." },
          { en: "You don't have to wear a uniform here.", transcr: "Ю доунт хэв ту уэа э юнифом хиэ.", ru: "Здесь форму носить не обязательно." },
          { en: "You must wear a helmet near the machine.", transcr: "Ю маст уэа э хэлмит ниэ зэ мэшин.", ru: "Возле машины надо надевать каску." },
          { en: "You must wear safety equipment.", transcr: "Ю маст уэа сэйфти икуипмэнт.", ru: "Надо носить защитное снаряжение." },
          { en: "You mustn't smoke near the machine.", transcr: "Ю масэнт смоук ниэ зэ мэшин.", ru: "Нельзя курить рядом с машиной." },
          { en: "You mustn't leave the gate open.", transcr: "Ю масэнт лив зэ гейт оупэн.", ru: "Нельзя оставлять ворота открытыми." },
          { en: "It is forbidden to smoke here.", transcr: "Ит из фэбидн ту смоук хиэ.", ru: "Здесь курить запрещено." },
          { en: "You should drink more water in hot weather.", transcr: "Ю шуд дринк мо уотэ ин хот уэзэ.", ru: "В жару стоит пить больше воды." },
          { en: "You shouldn't carry heavy boxes.", transcr: "Ю шудэнт кэри хэви боксиз.", ru: "Не стоит таскать тяжёлые ящики." },
          { en: "You should wait for the supervisor.", transcr: "Ю шуд уэйт фо зэ супэвайзэ.", ru: "Стоит подождать бригадира." },
          { en: "Safety depends on everyone.", transcr: "Сэйфти дипэндз он эвриуан.", ru: "Безопасность зависит от каждого." },
          { en: "You are responsible for your tools.", transcr: "Ю ар риспонсэбл фо ё тулз.", ru: "Ты отвечаешь за свои инструменты." },
          { en: "I am afraid of the heavy machine.", transcr: "Ай эм эфрэйд ов зэ хэви мэшин.", ru: "Я боюсь тяжёлой машины." },
          { en: "Gloves protect your hands.", transcr: "Главз прэтэкт ё хэндз.", ru: "Перчатки защищают руки." },
          { en: "Be careful — the floor is wet.", transcr: "Би кэафул — зэ фло из уэт.", ru: "Осторожно — пол мокрый." },
          { en: "Read the danger sign.", transcr: "Рид зэ дэйнджэ сайн.", ru: "Прочитай знак опасности." },
          { en: "You are not allowed to start that machine.", transcr: "Ю ар нот элауд ту старт зэт мэшин.", ru: "Тебе нельзя запускать ту машину." },
          { en: "We must check the fire alarm.", transcr: "Уи маст чек зэ файэ элам.", ru: "Надо проверять пожарную сигнализацию." },
          { en: "Follow the instructions on the sign.", transcr: "Фолоу зэ инстракшнз он зэ сайн.", ru: "Следуй инструкциям на табличке." },
          { en: "If there is a fire, warn everyone.", transcr: "Иф зэа из э файэ, уон эвриуан.", ru: "Если есть пожар, предупреди всех." },
        ],
        simple_ru: {
          formula:
            '<b>have to</b> = надо (правило) · <b>don\'t have to</b> = не обязан · ' +
            '<b>mustn\'t</b> = нельзя (запрет) · <b>should</b> = совет. После <b>must / should</b> — глагол без to.',
          examples: [
            { en: "You must wear gloves.", transcr: "Ю маст уэа главз.", ru: "надо (сильно) → must." },
            { en: "You don't have to come.", transcr: "Ю доунт хэв ту кам.", ru: "не обязан → don't have to." },
            { en: "You should rest.", transcr: "Ю шуд рэст.", ru: "совет → should." },
          ],
        },
        ytQuery: "have to must mustn't should английский для начинающих",
      },

      glossary: [
        { en: "equipment", transcr: "икуипмэнт", ru: "оборудование, снаряжение", pn: "/ɪˈkwɪpmənt/" },
        { en: "forklift", transcr: "фоклифт", ru: "погрузчик", pn: "/ˈfɔːklɪft/" },
        { en: "forbidden", transcr: "фэбидн", ru: "запрещённый", pn: "/fəˈbɪdn/" },
        { en: "instructions", transcr: "инстракшнз", ru: "инструкции, указания", pn: "/ɪnˈstrʌkʃnz/" },
        { en: "uniform", transcr: "юнифом", ru: "форма (одежда)", pn: "/ˈjuːnɪfɔːm/" },
      ],

      words: [
        { e: "📋", en: "rule", transcr: "рул", ru: "правило", pn: "/ruːl/" },
        { e: "🦺", en: "safety", transcr: "сэйфти", ru: "безопасность", pn: "/ˈseɪfti/" },
        { e: "🧤", en: "wear", transcr: "уэа", ru: "носить, надевать", pn: "/weə/" },
        { e: "⚠️", en: "careful", transcr: "кэафул", ru: "осторожный (be careful — будь осторожен)", pn: "/ˈkeəfʊl/" },
        { e: "☠️", en: "danger", transcr: "дэйнджэ", ru: "опасность", pn: "/ˈdeɪndʒə/" },
        { e: "📢", en: "warn", transcr: "уон", ru: "предупреждать", pn: "/wɔːn/" },
        { e: "🛡️", en: "protect", transcr: "прэтэкт", ru: "защищать", pn: "/prəˈtekt/" },
        { e: "🆗", en: "allow", transcr: "элау", ru: "разрешать", pn: "/əˈlaʊ/" },
        { e: "👣", en: "follow", transcr: "фолоу", ru: "следовать, соблюдать (follow the rules)", pn: "/ˈfɒləʊ/" },
        { e: "🚬", en: "smoke", transcr: "смоук", ru: "курить; дым", pn: "/sməʊk/" },
        { e: "🔥", en: "fire", transcr: "файэ", ru: "пожар, огонь", pn: "/ˈfaɪə/" },
        { e: "🚨", en: "alarm", transcr: "элам", ru: "сигнализация, тревога", pn: "/əˈlɑːm/" },
        { e: "🔗", en: "depend", transcr: "дипэнд", ru: "зависеть (depend on — зависеть от)", pn: "/dɪˈpend/" },
        { e: "🫡", en: "responsible", transcr: "риспонсэбл", ru: "ответственный (responsible for — отвечать за)", pn: "/rɪˈspɒnsəbl/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning. These are the safety rules.", transcr: "Гуд монинг. Зиз а зэ сэйфти рулз.", ru: "Доброе утро. Вот правила безопасности." },
        { s: "w", en: "What do I have to do?", transcr: "Уот ду ай хэв ту ду?", ru: "Что мне надо делать?" },
        { s: "m", en: "You have to wear gloves at work.", transcr: "Ю хэв ту уэа главз эт уёк.", ru: "На работе надо носить перчатки." },
        { s: "w", en: "Do I have to wear a helmet?", transcr: "Ду ай хэв ту уэа э хэлмит?", ru: "Мне надо надеть каску?" },
        { s: "m", en: "Yes. And you mustn't smoke near the field.", transcr: "Йес. Энд ю масэнт смоук ниэ зэ филд.", ru: "Да. И нельзя курить рядом с полем." },
        { s: "w", en: "Tom, do I have to start at six?", transcr: "Том, ду ай хэв ту старт эт сикс?", ru: "Том, мне надо начинать в шесть?" },
        { s: "m", en: "Yes, at six. You don't have to wear a uniform.", transcr: "Йес, эт сикс. Ю доунт хэв ту уэа э юнифом.", ru: "Да, в шесть. А форму носить не обязательно." },
        { s: "w", en: "I am afraid of the heavy machine.", transcr: "Ай эм эфрэйд ов зэ хэви мэшин.", ru: "Я боюсь тяжёлой машины." },
        { s: "m", en: "It is dangerous. You mustn't start it.", transcr: "Ит из дэйнджэрэс. Ю масэнт старт ит.", ru: "Она опасная. Нельзя её запускать." },
        { s: "w", en: "Should I wear a mask here?", transcr: "Шуд ай уэа э маск хиэ?", ru: "Мне надеть маску здесь?" },
        { s: "m", en: "Yes, you should. And be careful near the forklift.", transcr: "Йес, ю шуд. Энд би кэафул ниэ зэ фоклифт.", ru: "Да, стоит. И будь осторожен рядом с погрузчиком." },
        { s: "w", en: "Do I have to wait for you in the morning?", transcr: "Ду ай хэв ту уэйт фо ю ин зэ монинг?", ru: "Мне надо ждать тебя утром?" },
        { s: "m", en: "Yes. If there is a fire, warn everyone.", transcr: "Йес. Иф зэа из э файэ, уон эвриуан.", ru: "Да. Если пожар — предупреди всех." },
        { s: "w", en: "Thank you. Safety depends on everyone.", transcr: "Сэнк ю. Сэйфти дипэндз он эвриуан.", ru: "Спасибо. Безопасность зависит от каждого." },
        { s: "m", en: "Well done. Follow the rules and you will be fine.", transcr: "Уэл дан. Фолоу зэ рулз энд ю уил би файн.", ru: "Молодец. Соблюдай правила — и всё будет хорошо." },
      ],

      quiz: [
        { q: '[COMPLETE] "You ___ wear gloves in the field." (это правило)', opts: ["have to", "don't have to", "mustn't", "shouldn't"], c: 0, expl: "have to = надо (правило): You have to wear gloves. Остальные — про отсутствие обязанности, запрет или совет.", hint_ru: "надо (правило) → have to." },
        { q: '[CORRECT] «Курить здесь нельзя.» (запрет)', opts: ["You mustn't smoke here.", "You don't have to smoke here.", "You should smoke here.", "You can smoke here."], c: 0, expl: "mustn't = запрет (нельзя). don't have to = не обязан (а это другое!), should = совет, can = можно.", hint_ru: "нельзя (запрет) → mustn't." },
        { q: '[COMPLETE] "You ___ come early." (рано приходить не обязательно)', opts: ["don't have to", "mustn't", "must", "have to"], c: 0, expl: "don't have to = не обязан (можно, но не нужно). НЕ путай с mustn't (нельзя)!", hint_ru: "не обязан → don't have to." },
        { q: '[COMPLETE] "Safety depends ___ everyone." (предлог)', opts: ["on", "of", "from", "at"], c: 0, expl: "depend ON — зависеть от. Говорят «depends on», не «depends from».", hint_ru: "depend ON." },
        { q: '[COMPLETE] "I am afraid ___ the heavy machine." (предлог)', opts: ["of", "from", "on", "for"], c: 0, expl: "afraid OF — бояться (чего-то): afraid of the machine.", hint_ru: "afraid OF." },
        { q: '[COMPLETE] "You must wait ___ the supervisor." (предлог)', opts: ["for", "to", "on", "at"], c: 0, expl: "wait FOR — ждать (кого/что): wait for the supervisor.", hint_ru: "wait FOR." },
        { q: '[COMPLETE] "You should ___ your hands." (после should — глагол в базовой форме)', opts: ["wash", "washes", "to wash", "washing"], c: 0, expl: "После should — глагол в базовой форме: should wash. Не «should washes / should to wash».", hint_ru: "should + базовая форма." },
        { q: '[QUESTION] Сделай вопрос: «Мне надо работать в выходные?»', opts: ["Do I have to work at the weekend?", "Have I to work at the weekend?", "Do I must work at the weekend?", "I have to work at the weekend?"], c: 0, expl: "Вопрос have to — через do: Do I have to…? (НЕ «Have I to», НЕ «Do I must»).", hint_ru: "Do I have to…?" },
        { q: '[TRANSLATE] "правило"', opts: ["rule", "danger", "alarm", "tool"], c: 0, expl: "rule — правило. danger — опасность, alarm — сигнализация, tool — инструмент.", hint_ru: "rule." },
        { q: '[TRANSLATE] "опасность"', opts: ["danger", "safety", "fire", "rule"], c: 0, expl: "danger — опасность. safety — безопасность, fire — пожар, rule — правило.", hint_ru: "danger." },
        { q: '[TRANSLATE] "зависеть (от)"', opts: ["depend", "protect", "follow", "allow"], c: 0, expl: "depend — зависеть (depend on). protect — защищать, follow — соблюдать, allow — разрешать.", hint_ru: "depend." },
        { q: "[LISTEN] You mustn't smoke here.", opts: ["Здесь нельзя курить.", "Здесь можно курить.", "Ты не обязан курить.", "Тебе стоит курить."], c: 0, expl: "You mustn't smoke here. — Здесь курить нельзя (mustn't = запрет). «Не обязан» — это don't have to.", hint_ru: "" },
        { q: "[GIST] По диалогу: что Том сказал про форму (uniform)?", opts: ["Носить форму не обязательно.", "Форму носить обязательно.", "Форму нельзя носить.", "Форму выдаёт ферма."], c: 0, expl: "«you don't have to wear a uniform» — форму носить не обязательно.", hint_ru: "Слушай реплику про uniform." },
        { q: '[BUILD] «Нельзя курить рядом с полем.»', build: ["You", "mustn't", "smoke", "near", "the", "field"], expl: "You mustn't smoke near the field. — mustn't = запрет (нельзя).", hint_ru: "You mustn't smoke near the field." },
        { q: '[BUILD] «Тебе стоит подождать бригадира.»', build: ["You", "should", "wait", "for", "the", "supervisor"], expl: "You should wait for the supervisor. — should = совет; wait FOR — ждать кого-то.", hint_ru: "You should wait for the supervisor." },
      ],

      everyday: {
        title_ru: "Правила и безопасность (инструктаж)",
        phrases: [
          { en: "Safety first!", transcr: "Сэйфти фёст!", ru: "Безопасность прежде всего!" },
          { en: "You must wear a hi-vis vest.", transcr: "Ю маст уэа э хай-вис вэст.", ru: "Надо носить светоотражающий жилет (hi-vis)." },
          { en: "You mustn't smoke in the packhouse.", transcr: "Ю масэнт смоук ин зэ пакхаус.", ru: "В пакхаусе курить нельзя." },
          { en: "You don't have to bring your own tools.", transcr: "Ю доунт хэв ту бринг ё оун тулз.", ru: "Свои инструменты приносить не обязательно." },
          { en: "Follow the instructions.", transcr: "Фолоу зэ инстракшнз.", ru: "Следуй инструкциям." },
          { en: "If there is a fire, leave the building.", transcr: "Иф зэа из э файэ, лив зэ билдинг.", ru: "Если пожар — выйди из здания." },
        ],
      },
    },

    {
      id: 32,
      title_ru: "Из чего это сделано: пассив (the boxes are packed · made of wood)",
      cefr: "B1 · Passive (present & past) · made of / from / by · materials",
      grammar: {
        title_ru: "Passive: is/are + 3-я форма (наст.) · was/were + 3-я форма (прош.) · made of / from / by",
        intro_ru:
          'На ферме часто описывают <b>процессы</b>: что с чем делают. Тогда важно <b>ЧТО</b> происходит, ' +
          'а не кто. Для этого нужен <b>пассив</b> — <b>be + 3-я форма глагола (V3)</b>:<br>' +
          '🔵 <b>Актив</b> (кто делает): <b>They pack the boxes.</b> ' +
          '<span class="g-transcr">[зэй пак зэ боксиз]</span> (они пакуют ящики)<br>' +
          '🟢 <b>Пассив</b> (что сделано): <b>The boxes are packed.</b> ' +
          '<span class="g-transcr">[зэ боксиз а пакт]</span> (ящики пакуют / упакованы)<br>' +
          'Настоящее: <b>is / are + V3</b> — <b>The fruit is grown here.</b> ' +
          '<span class="g-transcr">[зэ фрут из гроун хиэ]</span>. Прошлое: <b>was / were + V3</b> — ' +
          '<b>The wall was built last year.</b> <span class="g-transcr">[зэ уол уоз билт ласт йиэ]</span>.',
        cultural_ru:
          '🧱 <b>Из чего сделано — made of / made from / made by:</b><br>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
          '<div><b>made <u>of</u></b> <span class="g-transcr">[мэйд ов]</span></div>' +
          '<div>материал <b>виден</b>: a box made of wood (ящик из дерева)</div>' +
          '<div><b>made <u>from</u></b> <span class="g-transcr">[мэйд фром]</span></div>' +
          '<div>материал <b>изменили</b>: paper made from wood (бумагу сделали из дерева)</div>' +
          '<div><b>made <u>by</u></b> <span class="g-transcr">[мэйд бай]</span></div>' +
          '<div><b>кто/чем</b> делает: made by machine · by hand · by the workers</div>' +
          '</div>' +
          '⚠️ Пассив в английском очень частый — в описаниях, инструкциях, на табличках. По-русски тут часто «-ют / -ся».',
        note_ru:
          '⚠️ <b>Пассив = be + 3-я форма.</b> Без <b>be</b> (am/is/are/was/were) пассива нет: ' +
          '<s>The boxes packed.</s> → <b>The boxes are packed.</b><br>' +
          '⚠️ <b>is paid ≠ pays!</b> <b>He is paid weekly</b> = ему платят (пассив). ' +
          '<b>He pays weekly</b> = он платит (актив). Это разный смысл — не путай.<br>' +
          '⚠️ Кто/чем делает — через <b>by</b>: <b>made by machine</b>, <b>picked by hand</b>.<br>' +
          '⚠️ <b>made of</b> (материал виден) vs <b>made from</b> (материал изменён): ' +
          'a box made <b>of</b> wood, paper made <b>from</b> wood.<br>' +
          '⚠️ 3-я форма часто нерегулярна: make→<b>made</b>, build→<b>built</b>, grow→<b>grown</b>, ' +
          'freeze→<b>frozen</b>. Регулярные: pack→<b>packed</b>, load→<b>loaded</b>.',
        visual_ru:
          '<svg viewBox="0 0 340 214" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<defs><marker id="a32" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">' +
          '<path d="M0,0 L6,3 L0,6 Z" fill="#e65100"/></marker></defs>' +
          '<text x="10" y="14" font-size="11" fill="var(--text2)">Актив — важно, КТО делает:</text>' +
          '<rect x="10" y="22" width="56" height="30" rx="7" fill="none" stroke="#1565c0" stroke-width="2"/>' +
          '<text x="38" y="41" font-size="12" fill="#1565c0" text-anchor="middle">They</text>' +
          '<text x="74" y="41" font-size="12" fill="var(--text)">pack</text>' +
          '<rect x="116" y="22" width="98" height="30" rx="7" fill="none" stroke="#e65100" stroke-width="2"/>' +
          '<text x="165" y="41" font-size="12" fill="#e65100" text-anchor="middle">the boxes</text>' +
          '<text x="222" y="33" font-size="9" fill="var(--text2)">кто</text>' +
          '<text x="288" y="41" font-size="9" fill="var(--text2)">что</text>' +
          '<path d="M165 52 C 120 74, 60 74, 48 88" fill="none" stroke="#e65100" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#a32)"/>' +
          '<text x="118" y="80" font-size="9" fill="#e65100">«что» выходит вперёд</text>' +
          '<text x="10" y="110" font-size="11" fill="var(--text2)">Пассив — важно, ЧТО сделано:</text>' +
          '<rect x="10" y="118" width="98" height="30" rx="7" fill="none" stroke="#e65100" stroke-width="2"/>' +
          '<text x="59" y="137" font-size="12" fill="#e65100" text-anchor="middle">The boxes</text>' +
          '<rect x="118" y="118" width="118" height="30" rx="7" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="177" y="137" font-size="12" fill="#2e7d32" text-anchor="middle">are packed</text>' +
          '<text x="244" y="137" font-size="10" fill="var(--text2)">be + V3</text>' +
          '<text x="10" y="172" font-size="10" fill="var(--text)">They pack the boxes. — Они пакуют ящики.</text>' +
          '<text x="10" y="190" font-size="10" fill="var(--text)">The boxes are packed. — Ящики пакуют.</text>' +
          '<text x="10" y="208" font-size="10" fill="var(--text2)">are = be · packed = 3-я форма (V3)</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ is/are + 3-я форма (наст.) · was/were + 3-я форма (прош.)",
            rule_ru:
              'Что-то делают / сделали — без «кто»:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>The boxes <b>are packed</b> here.</div><div>ящики пакуют (наст.)</div>' +
              '<div>Strawberries <b>are grown</b> on this farm.</div><div>клубнику выращивают</div>' +
              '<div>This crate <b>is made of</b> wood.</div><div>ящик из дерева</div>' +
              '<div>The wall <b>was built</b> last year.</div><div>стену построили (прош.)</div>' +
              '</div>',
            table: [
              { subj: "наст. мн.", verb: "are packed", example: "The boxes are packed here.", transcr: "Зэ боксиз а пакт хиэ.", tr_ru: "Ящики пакуют здесь." },
              { subj: "наст. мн.", verb: "are grown", example: "Strawberries are grown on this farm.", transcr: "Стробэриз а гроун он зис фарм.", tr_ru: "Клубнику выращивают на этой ферме." },
              { subj: "из чего", verb: "is made of", example: "This crate is made of wood.", transcr: "Зис крэйт из мэйд ов уд.", tr_ru: "Этот ящик сделан из дерева." },
              { subj: "прош.", verb: "was built", example: "The wall was built last year.", transcr: "Зэ уол уоз билт ласт йиэ.", tr_ru: "Стену построили в прошлом году." },
            ],
          },
          negative: {
            label_ru: "❌ is/are not + 3-я форма · was/were not + 3-я форма",
            rule_ru:
              '<b>not</b> ставим после <b>be</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>The boxes <b>are not packed</b> by hand.</div><div>не пакуют руками</div>' +
              '<div>This crate <b>is not made of</b> metal.</div><div>не из металла</div>' +
              '<div>The shed <b>was not built</b> this year.</div><div>сарай не в этом году</div>' +
              '</div>',
            table: [
              { subj: "наст.", verb: "are not packed", example: "The boxes are not packed by hand.", transcr: "Зэ боксиз а нот пакт бай хэнд.", tr_ru: "Ящики не пакуют руками." },
              { subj: "из чего", verb: "is not made of", example: "This crate is not made of metal.", transcr: "Зис крэйт из нот мэйд ов мэтл.", tr_ru: "Этот ящик не из металла." },
              { subj: "прош.", verb: "was not built", example: "The shed was not built this year.", transcr: "Зэ шэд уоз нот билт зис йиэ.", tr_ru: "Этот сарай построили не в этом году." },
            ],
          },
          question: {
            label_ru: "❓ Are…packed? · What is…made of? · When was…built?",
            rule_ru:
              '<b>be</b> выходит вперёд:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>Are</b> the boxes <b>packed</b> here?</div><div>ящики пакуют здесь?</div>' +
              '<div>What <b>is</b> the crate <b>made of</b>?</div><div>из чего ящик?</div>' +
              '<div>When <b>was</b> the wall <b>built</b>?</div><div>когда построили стену?</div>' +
              '</div>',
            table: [
              { subj: "наст.?", verb: "Are…packed", example: "Are the boxes packed here?", transcr: "А зэ боксиз пакт хиэ?", tr_ru: "Ящики пакуют здесь?" },
              { subj: "из чего?", verb: "is…made of", example: "What is the crate made of?", transcr: "Уот из зэ крэйт мэйд ов?", tr_ru: "Из чего сделан этот ящик?" },
              { subj: "прош.?", verb: "was…built", example: "When was the wall built?", transcr: "Уэн уоз зэ уол билт?", tr_ru: "Когда построили стену?" },
            ],
          },
        },
        examples: [
          { en: "The boxes are packed here.", transcr: "Зэ боксиз а пакт хиэ.", ru: "Ящики пакуют здесь." },
          { en: "Strawberries are grown on this farm.", transcr: "Стробэриз а гроун он зис фарм.", ru: "Клубнику выращивают на этой ферме." },
          { en: "Apples are picked by hand.", transcr: "Эплз а пикт бай хэнд.", ru: "Яблоки собирают руками." },
          { en: "The crates are washed and checked here.", transcr: "Зэ крэйтс а уошт энд чект хиэ.", ru: "Крейты моют и проверяют здесь." },
          { en: "The apples are weighed and sorted.", transcr: "Зэ эплз а уэйд энд сотид.", ru: "Яблоки взвешивают и сортируют." },
          { en: "The boxes are loaded on the lorry.", transcr: "Зэ боксиз а лоудид он зэ лори.", ru: "Ящики грузят в грузовик." },
          { en: "The workers are paid weekly.", transcr: "Зэ уёкэз а пэйд уикли.", ru: "Рабочим платят раз в неделю." },
          { en: "This crate is made of wood.", transcr: "Зис крэйт из мэйд ов уд.", ru: "Этот ящик сделан из дерева." },
          { en: "The greenhouse is made of glass and metal.", transcr: "Зэ гринхаус из мэйд ов глас энд мэтл.", ru: "Теплица сделана из стекла и металла." },
          { en: "The old gate is made of steel.", transcr: "Зэ оулд гейт из мэйд ов стил.", ru: "Старые ворота из стали." },
          { en: "Paper is made from wood.", transcr: "Пэйпэ из мэйд фром уд.", ru: "Бумагу делают из дерева." },
          { en: "These boots are made of rubber.", transcr: "Зиз бутс а мэйд ов рабэ.", ru: "Эти сапоги сделаны из резины." },
          { en: "The gloves are made of strong leather.", transcr: "Зэ главз а мэйд ов стронг лэзэ.", ru: "Перчатки сделаны из прочной кожи." },
          { en: "Leather is tough and strong.", transcr: "Лэзэ из таф энд стронг.", ru: "Кожа прочная и крепкая." },
          { en: "The wall is made of brick and stone.", transcr: "Зэ уол из мэйд ов брик энд стоун.", ru: "Стена сделана из кирпича и камня." },
          { en: "The floor is made of concrete.", transcr: "Зэ фло из мэйд ов конкрит.", ru: "Пол сделан из бетона." },
          { en: "The wall was built last year.", transcr: "Зэ уол уоз билт ласт йиэ.", ru: "Стену построили в прошлом году." },
          { en: "The food was frozen here yesterday.", transcr: "Зэ фуд уоз фроузн хиэ йестэдэй.", ru: "Еду заморозили здесь вчера." },
          { en: "The boxes are made by machine, not by hand.", transcr: "Зэ боксиз а мэйд бай мэшин, нот бай хэнд.", ru: "Ящики делают машиной, а не руками." },
          { en: "These bags are made of plastic.", transcr: "Зиз бэгз а мэйд ов плэстик.", ru: "Эти пакеты сделаны из пластика." },
        ],
        simple_ru: {
          formula:
            '<b>Пассив = be + 3-я форма (V3).</b> Настоящее: <b>is/are + V3</b> (the boxes <b>are packed</b>). ' +
            'Прошлое: <b>was/were + V3</b> (the wall <b>was built</b>). «Из чего» — <b>made of</b> (виден) / <b>made from</b> (изменён).',
          examples: [
            { en: "The boxes are packed here.", transcr: "Зэ боксиз а пакт хиэ.", ru: "наст.: are + packed." },
            { en: "This crate is made of wood.", transcr: "Зис крэйт из мэйд ов уд.", ru: "из чего: made of (дерево видно)." },
            { en: "The wall was built last year.", transcr: "Зэ уол уоз билт ласт йиэ.", ru: "прош.: was + built." },
          ],
        },
        ytQuery: "passive voice present past is are made of английский для начинающих",
      },

      glossary: [
        { en: "weekly", transcr: "уикли", ru: "еженедельно, раз в неделю", pn: "/ˈwiːkli/" },
        { en: "greenhouse", transcr: "гринхаус", ru: "теплица", pn: "/ˈɡriːnhaʊs/" },
        { en: "waterproof", transcr: "уотэпруф", ru: "водонепроницаемый", pn: "/ˈwɔːtəpruːf/" },
        { en: "tough", transcr: "таф", ru: "прочный, жёсткий", pn: "/tʌf/" },
      ],

      words: [
        { e: "🪵", en: "wood", transcr: "уд", ru: "дерево, древесина", pn: "/wʊd/" },
        { e: "🔩", en: "metal", transcr: "мэтл", ru: "металл", pn: "/ˈmetl/" },
        { e: "⚙️", en: "steel", transcr: "стил", ru: "сталь (твёрдый металл)", pn: "/stiːl/" },
        { e: "🧴", en: "plastic", transcr: "плэстик", ru: "пластик", pn: "/ˈplæstɪk/" },
        { e: "🥾", en: "rubber", transcr: "рабэ", ru: "резина (сапоги, шланг)", pn: "/ˈrʌbə/" },
        { e: "🪟", en: "glass", transcr: "глас", ru: "стекло", pn: "/ɡlɑːs/" },
        { e: "📄", en: "paper", transcr: "пэйпэ", ru: "бумага", pn: "/ˈpeɪpə/" },
        { e: "📦", en: "cardboard", transcr: "кадбод", ru: "картон", pn: "/ˈkɑːdbɔːd/" },
        { e: "👕", en: "cotton", transcr: "котн", ru: "хлопок (ткань)", pn: "/ˈkɒtn/" },
        { e: "🧶", en: "wool", transcr: "ул", ru: "шерсть", pn: "/wʊl/" },
        { e: "🧥", en: "leather", transcr: "лэзэ", ru: "кожа (материал)", pn: "/ˈleðə/" },
        { e: "🧱", en: "brick", transcr: "брик", ru: "кирпич", pn: "/brɪk/" },
        { e: "🏗️", en: "concrete", transcr: "конкрит", ru: "бетон", pn: "/ˈkɒnkriːt/" },
        { e: "🪨", en: "stone", transcr: "стоун", ru: "камень", pn: "/stəʊn/" },
      ],

      dialogue: [
        { s: "m", en: "Good morning. Welcome to the farm.", transcr: "Гуд монинг. Уэлкэм ту зэ фарм.", ru: "Доброе утро. Добро пожаловать на ферму." },
        { s: "w", en: "Thank you. What is the work like here?", transcr: "Сэнк ю. Уот из зэ уёк лайк хиэ?", ru: "Спасибо. Какая здесь работа?" },
        { s: "m", en: "It's good. The strawberries are picked by hand.", transcr: "Итс гуд. Зэ стробэриз а пикт бай хэнд.", ru: "Хорошая. Клубнику собирают руками." },
        { s: "w", en: "And the boxes? Are they packed here?", transcr: "Энд зэ боксиз? А зэй пакт хиэ?", ru: "А ящики? Их пакуют здесь?" },
        { s: "m", en: "Yes. The boxes are packed and loaded here.", transcr: "Йес. Зэ боксиз а пакт энд лоудид хиэ.", ru: "Да. Ящики пакуют и грузят здесь." },
        { s: "w", en: "What are the crates made of?", transcr: "Уот а зэ крэйтс мэйд ов?", ru: "Из чего сделаны крейты?" },
        { s: "m", en: "They are made of plastic. They are strong.", transcr: "Зэй а мэйд ов плэстик. Зэй а стронг.", ru: "Они из пластика. Прочные." },
        { s: "w", en: "And these gloves? Are they made of leather?", transcr: "Энд зиз главз? А зэй мэйд ов лэзэ?", ru: "А эти перчатки? Они из кожи?" },
        { s: "m", en: "Yes, leather. These boots are made of rubber.", transcr: "Йес, лэзэ. Зиз бутс а мэйд ов рабэ.", ru: "Да, из кожи. А эти сапоги из резины." },
        { s: "w", en: "Good. Are the boots waterproof?", transcr: "Гуд. А зэ бутс уотэпруф?", ru: "Хорошо. Сапоги водонепроницаемые?" },
        { s: "m", en: "Yes, they are. The floor is wet sometimes.", transcr: "Йес, зэй а. Зэ фло из уэт самтаймз.", ru: "Да. Пол иногда мокрый." },
        { s: "w", en: "What is the camp like?", transcr: "Уот из зэ кэмп лайк?", ru: "А какой кэмп?" },
        { s: "m", en: "It's clean and quiet. You will like it.", transcr: "Итс клин энд куайэт. Ю уил лайк ит.", ru: "Чисто и тихо. Тебе понравится." },
        { s: "w", en: "Good, thanks. When are the workers paid?", transcr: "Гуд, сэнкс. Уэн а зэ уёкэз пэйд?", ru: "Спасибо. Когда платят рабочим?" },
        { s: "m", en: "Workers are paid weekly. Follow the rules.", transcr: "Уёкэз а пэйд уикли. Фолоу зэ рулз.", ru: "Рабочим платят раз в неделю. Соблюдай правила." },
      ],

      quiz: [
        { q: '[COMPLETE] "The boxes ___ packed here." (пассив, наст.)', opts: ["are", "is", "were", "do"], c: 0, expl: "are + 3-я форма (packed) = пассив (наст., мн.ч.). is — для ед.ч., were — прошлое, do — это не пассив.", hint_ru: "boxes (мн.ч.) → are + packed." },
        { q: '[CORRECT] «Клубнику выращивают на этой ферме.» (её выращивают — пассив)', opts: ["Strawberries are grown on this farm.", "Strawberries grow on this farm.", "Strawberries are grow on this farm.", "Strawberries growing on this farm."], c: 0, expl: "Пассив: are + grown (3-я форма) — клубнику выращивают. «grow» — сами растут (актив); «are grow / growing» — неверная форма.", hint_ru: "are + 3-я форма (grown)." },
        { q: '[COMPLETE] "This crate is made ___ wood." (материал видно)', opts: ["of", "from", "by", "at"], c: 0, expl: "made OF — материал видно (ящик из дерева). made FROM — когда материал изменили. by — кто/чем делает.", hint_ru: "видно материал → made of." },
        { q: '[COMPLETE] "Paper is made ___ wood." (из дерева сделали бумагу)', opts: ["from", "of", "by", "in"], c: 0, expl: "made FROM — материал изменили (из дерева сделали бумагу). made OF — материал видно (стол из дерева).", hint_ru: "материал изменён → made from." },
        { q: '[COMPLETE] "The boxes are made ___ machine." (чем делают)', opts: ["by", "of", "from", "in"], c: 0, expl: "made BY — кто/чем делает: by machine, by hand, by the workers. made of / from — это про материал.", hint_ru: "кто/чем делает → made by." },
        { q: '[CORRECT] «Рабочим платят раз в неделю.» (им платят — пассив)', opts: ["The workers are paid weekly.", "The workers pay weekly.", "The workers are paying weekly.", "The workers paid the rent."], c: 0, expl: "«Рабочим платят» = пассив: are paid (им платят). «The workers pay» = рабочие сами платят (актив) — другой смысл!", hint_ru: "им платят → are paid." },
        { q: '[COMPLETE] "The wall ___ built last year." (пассив, прош.)', opts: ["was", "is", "are", "were"], c: 0, expl: "Прошлый пассив: was/were + 3-я форма. wall — ед.ч. → was built. were — для мн.ч.", hint_ru: "ед.ч. + прошлое → was built." },
        { q: '[QUESTION] Сделай вопрос: «Из чего сделан этот ящик?»', opts: ["What is this crate made of?", "What this crate is made of?", "What does this crate made of?", "What is made this crate of?"], c: 0, expl: "What is … made of? — порядок: What + is + подлежащее + made of. (НЕ «What does … made», НЕ «What this crate is made»).", hint_ru: "What is … made of?" },
        { q: '[TRANSLATE] "дерево (материал)"', opts: ["wood", "metal", "glass", "stone"], c: 0, expl: "wood — дерево (древесина). metal — металл, glass — стекло, stone — камень.", hint_ru: "wood." },
        { q: '[TRANSLATE] "металл"', opts: ["metal", "wood", "paper", "wool"], c: 0, expl: "metal — металл. wood — дерево, paper — бумага, wool — шерсть.", hint_ru: "metal." },
        { q: '[TRANSLATE] "кожа (материал)"', opts: ["leather", "cotton", "rubber", "brick"], c: 0, expl: "leather — кожа. cotton — хлопок, rubber — резина, brick — кирпич.", hint_ru: "leather." },
        { q: "[LISTEN] These boots are made of rubber.", opts: ["Эти сапоги сделаны из резины.", "Эти сапоги сделаны из кожи.", "Эти сапоги новые.", "Эти ящики из резины."], c: 0, expl: "These boots are made of rubber. — Эти сапоги сделаны из резины (made of — материал).", hint_ru: "" },
        { q: "[GIST] По диалогу: из чего сделаны крейты (crates)?", opts: ["Из пластика.", "Из дерева.", "Из стекла.", "Из картона."], c: 0, expl: "«They are made of plastic» — крейты сделаны из пластика.", hint_ru: "Слушай реплику про crates." },
        { q: '[BUILD] «Эти ящики сделаны из картона.»', build: ["These", "boxes", "are", "made", "of", "cardboard"], expl: "These boxes are made of cardboard. — пассив: are made of + материал (картон).", hint_ru: "These boxes are made of cardboard." },
        { q: '[BUILD] «Стену построили в прошлом году.»', build: ["The", "wall", "was", "built", "last", "year"], expl: "The wall was built last year. — прошлый пассив: was + built (3-я форма).", hint_ru: "The wall was built last year." },
      ],

      everyday: {
        title_ru: "Описания: какой он? (what … like?)",
        phrases: [
          { en: "What's the camp like?", transcr: "Уотс зэ кэмп лайк?", ru: "Какой кэмп (как там)?" },
          { en: "It's clean and comfortable.", transcr: "Итс клин энд камфтэбл.", ru: "Чисто и удобно." },
          { en: "What are the people like?", transcr: "Уот а зэ пипл лайк?", ru: "Какие там люди?" },
          { en: "They're friendly and helpful.", transcr: "Зэар фрэндли энд хэлпфул.", ru: "Дружелюбные и отзывчивые." },
          { en: "What's it made of?", transcr: "Уотс ит мэйд ов?", ru: "Из чего это сделано?" },
          { en: "It's made of plastic.", transcr: "Итс мэйд ов плэстик.", ru: "Это из пластика." },
        ],
      },
    },

    {
      id: 33,
      title_ru: "Если бы…: второй conditional (If I were you, I'd talk to Tom)",
      cefr: "B1 · Second conditional (if + past, would) · giving advice",
      grammar: {
        title_ru: "Second conditional: if + прошедшее, … would + база (нереальное «если бы»)",
        intro_ru:
          'Иногда мы говорим о том, чего <b>нет на самом деле</b> — воображаем: «<b>если бы</b> у меня были деньги…».<br>' +
          '❌ Не так: <s>If I will have money…</s><br>' +
          '✅ Так: <b>If I <u>had</u> money, I <u>would</u> go home.</b> ' +
          '<span class="g-transcr">[иф ай хэд мани, ай уд гоу хоум]</span> (если бы у меня были деньги, я бы поехал домой)<br>' +
          'Формула: <b>if + прошедшее</b> (had / were / won…), <b>… would + база</b>. ' +
          '⚠️ Главное правило: <b>would НЕ ставим в часть с if</b>.',
        cultural_ru:
          '🔀 <b>Первый и второй conditional — реально это или нет:</b><br>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
          '<div><b>1-й</b> (реально, может быть): If it <b>rains</b>, we <b>will</b> stop.</div>' +
          '<div>дождь возможен → точно остановимся</div>' +
          '<div><b>2-й</b> (воображаю, вряд ли): If I <b>won</b> the lottery, I <b>would</b> stop.</div>' +
          '<div>выигрыш почти нереален → «я бы остановился»</div>' +
          '</div>' +
          '💬 <b>Совет — «If I were you, I\'d …»</b> (на твоём месте я бы…): ' +
          '<b>If I were you, I\'d talk to Tom.</b> <span class="g-transcr">[иф ай уё ю, айд ток ту Том]</span> — готовая фраза для совета.',
        note_ru:
          '⚠️ <b>would НЕ в части с if!</b> <s>If I would have money…</s> → <b>If I had money…</b><br>' +
          '⚠️ В результате — <b>could</b>, не «can»: <s>I\'d can help</s> → <b>I could help.</b><br>' +
          '⚠️ С глаголом <b>be</b> — <b>were</b> для всех лиц: <b>If I <u>were</u> you</b> (не «was»), If he <u>were</u> here…<br>' +
          '⚠️ <b>\'d = would</b> здесь: I\'d = I would, he\'d = he would. Сокращение одно для всех лиц.<br>' +
          '⚠️ Это про <b>воображаемое сейчас</b>, не про вчера: «If I had…» = «если бы сейчас было».',
        visual_ru:
          '<svg viewBox="0 0 340 224" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="10" y="14" font-size="11" fill="var(--text2)">Реально, может быть — 1-й conditional:</text>' +
          '<rect x="8" y="20" width="150" height="58" rx="8" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="16" y="40" font-size="11" fill="var(--text)">If it rains,</text>' +
          '<text x="16" y="58" font-size="11" fill="#2e7d32">we will stop.</text>' +
          '<text x="16" y="72" font-size="9" fill="var(--text2)">дождь возможен</text>' +
          '<text x="170" y="46" font-size="13" fill="#2e7d32">→ will ✅</text>' +
          '<text x="170" y="64" font-size="9" fill="var(--text2)">почти точно</text>' +
          '<text x="10" y="104" font-size="11" fill="var(--text2)">Воображаемое, вряд ли — 2-й conditional:</text>' +
          '<rect x="8" y="110" width="150" height="58" rx="8" fill="none" stroke="#6a1b9a" stroke-width="2"/>' +
          '<text x="16" y="130" font-size="11" fill="var(--text)">If I won money,</text>' +
          '<text x="16" y="148" font-size="11" fill="#6a1b9a">I\'d go home.</text>' +
          '<text x="16" y="162" font-size="9" fill="var(--text2)">почти нереально</text>' +
          '<text x="170" y="136" font-size="13" fill="#6a1b9a">→ would 💭</text>' +
          '<text x="170" y="154" font-size="9" fill="var(--text2)">«я бы…»</text>' +
          '<text x="10" y="196" font-size="11" fill="var(--text)">if + <tspan fill="#6a1b9a">прошедшее</tspan> → <tspan fill="#6a1b9a">would</tspan> + база</text>' +
          '<text x="10" y="214" font-size="10" fill="#e65100">⚠️ would НЕ в части с if · \'d = would</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ if + прошедшее, … would + база",
            rule_ru:
              'Воображаемое «если бы» — нереально сейчас:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>If I <b>were</b> you, I<b>\'d</b> talk to Tom.</div><div>на твоём месте я бы…</div>' +
              '<div>If I <b>had</b> more money, I<b>\'d</b> go home.</div><div>если бы было больше денег</div>' +
              '<div>If I <b>won</b> some money, I<b>\'d</b> stay here.</div><div>если бы выиграл</div>' +
              '<div>If the pay <b>were</b> better, I<b>\'d</b> stay.</div><div>если бы платили лучше</div>' +
              '</div>',
            table: [
              { subj: "совет", verb: "If I were you", example: "If I were you, I'd talk to Tom.", transcr: "Иф ай уё ю, айд ток ту Том.", tr_ru: "На твоём месте я бы поговорил с Томом." },
              { subj: "деньги", verb: "If I had…", example: "If I had more money, I'd go home.", transcr: "Иф ай хэд мо мани, айд гоу хоум.", tr_ru: "Если бы у меня было больше денег, я бы поехал домой." },
              { subj: "выигрыш", verb: "If I won…", example: "If I won some money, I'd stay here.", transcr: "Иф ай уан сам мани, айд стэй хиэ.", tr_ru: "Если бы я выиграл денег, я бы остался здесь." },
              { subj: "работа", verb: "would + база", example: "If the pay were better, I'd stay another season.", transcr: "Иф зэ пэй уё бэтэ, айд стэй эназэ сизн.", tr_ru: "Если бы платили лучше, я бы остался ещё на сезон." },
            ],
          },
          negative: {
            label_ru: "❌ … wouldn't + база · в if — didn't + база",
            rule_ru:
              '<b>wouldn\'t</b> (= would not) в результате; в части с if — <b>didn\'t</b> + база:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>If I were you, I <b>wouldn\'t</b> accept it.</div><div>я бы не соглашался</div>' +
              '<div>If I <b>didn\'t</b> work here, I\'d go home.</div><div>если бы не работал тут</div>' +
              '<div>I <b>wouldn\'t</b> refuse a better job.</div><div>не отказался бы</div>' +
              '</div>',
            table: [
              { subj: "совет", verb: "wouldn't + база", example: "If I were you, I wouldn't accept it.", transcr: "Иф ай уё ю, ай ууднт эксэпт ит.", tr_ru: "На твоём месте я бы не соглашался." },
              { subj: "if-часть", verb: "didn't + база", example: "If I didn't work here, I'd go home.", transcr: "Иф ай диднт уёк хиэ, айд гоу хоум.", tr_ru: "Если бы я не работал здесь, я бы поехал домой." },
              { subj: "результат", verb: "wouldn't", example: "I wouldn't refuse a better job.", transcr: "Ай ууднт рифьюз э бэтэ джоб.", tr_ru: "Я бы не отказался от работы получше." },
            ],
          },
          question: {
            label_ru: "❓ What would you do if…? · Would you …?",
            rule_ru:
              '<b>would</b> выходит вперёд; в части с if — прошедшее:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>What would</b> you do if you won?</div><div>что бы ты сделал, если бы выиграл?</div>' +
              '<div><b>Would</b> you stay if the pay were better?</div><div>остался бы, если бы платили лучше?</div>' +
              '<div><b>What would</b> you buy if you were rich?</div><div>что бы купил, если бы был богат?</div>' +
              '</div>',
            table: [
              { subj: "что?", verb: "What would…do", example: "What would you do if you won?", transcr: "Уот уд ю ду иф ю уан?", tr_ru: "Что бы ты сделал, если бы выиграл?" },
              { subj: "да/нет?", verb: "Would you…?", example: "Would you stay if the pay were better?", transcr: "Уд ю стэй иф зэ пэй уё бэтэ?", tr_ru: "Остался бы ты, если бы платили лучше?" },
              { subj: "что купить?", verb: "What would…buy", example: "What would you buy if you were rich?", transcr: "Уот уд ю бай иф ю уё рич?", tr_ru: "Что бы ты купил, если бы был богат?" },
            ],
          },
        },
        examples: [
          { en: "If I were you, I'd talk to Tom.", transcr: "Иф ай уё ю, айд ток ту Том.", ru: "На твоём месте я бы поговорил с Томом." },
          { en: "If I had more money, I'd send it home.", transcr: "Иф ай хэд мо мани, айд сэнд ит хоум.", ru: "Если бы у меня было больше денег, я бы отправил их домой." },
          { en: "If I won the lottery, I'd buy a farm.", transcr: "Иф ай уан зэ лотэри, айд бай э фарм.", ru: "Если бы я выиграл в лотерею, я бы купил ферму." },
          { en: "If I had a car, I could drive to town.", transcr: "Иф ай хэд э ка, ай куд драйв ту таун.", ru: "Если бы у меня была машина, я бы мог ездить в город." },
          { en: "If the pay were better, I'd stay another season.", transcr: "Иф зэ пэй уё бэтэ, айд стэй эназэ сизн.", ru: "Если бы платили лучше, я бы остался ещё на сезон." },
          { en: "If I lost my passport, I'd tell the manager.", transcr: "Иф ай лост май паспорт, айд тэл зэ мэниджэ.", ru: "Если бы я потерял паспорт, я бы сказал менеджеру." },
          { en: "If I could speak better English, I'd ask for more work.", transcr: "Иф ай куд спик бэтэ инглиш, айд аск фо мо уёк.", ru: "Если бы я лучше говорил по-английски, я бы попросил больше работы." },
          { en: "What would you do if you lost your job?", transcr: "Уот уд ю ду иф ю лост ё джоб?", ru: "Что бы ты сделал, если бы потерял работу?" },
          { en: "If I were rich, I wouldn't work here.", transcr: "Иф ай уё рич, ай ууднт уёк хиэ.", ru: "Если бы я был богат, я бы здесь не работал." },
          { en: "If I found a better job, I'd accept it.", transcr: "Иф ай фаунд э бэтэ джоб, айд эксэпт ит.", ru: "Если бы я нашёл работу получше, я бы согласился." },
          { en: "I wouldn't refuse more hours.", transcr: "Ай ууднт рифьюз мо ауэз.", ru: "Я бы не отказался от лишних часов." },
          { en: "If I were you, I'd go to the doctor's.", transcr: "Иф ай уё ю, айд гоу ту зэ доктэз.", ru: "На твоём месте я бы сходил к врачу." },
          { en: "If I had a holiday, I'd go abroad.", transcr: "Иф ай хэд э холидэй, айд гоу эброд.", ru: "Если бы у меня был отпуск, я бы поехал за границу." },
          { en: "My dream is to get a better job.", transcr: "Май дрим из ту гет э бэтэ джоб.", ru: "Моя мечта — получить работу получше." },
          { en: "I have plans for the future.", transcr: "Ай хэв плэнз фо зэ фьючэ.", ru: "У меня есть планы на будущее." },
        ],
        simple_ru: {
          formula:
            '<b>Воображаемое «если бы» = if + прошедшее, … would + база.</b> «If I <b>had</b> money, I <b>would</b> go.» ' +
            'Совет: «<b>If I were you, I\'d</b> …» (на твоём месте я бы…). ⚠️ would НЕ в часть с if.',
          examples: [
            { en: "If I were you, I'd talk to Tom.", transcr: "Иф ай уё ю, айд ток ту Том.", ru: "совет: на твоём месте…" },
            { en: "If I had money, I'd go home.", transcr: "Иф ай хэд мани, айд гоу хоум.", ru: "if + had → would + база." },
            { en: "If I were lucky, I would win.", transcr: "Иф ай уё лаки, ай уд уин.", ru: "if + прошедшее (were), … would + база." },
          ],
        },
        ytQuery: "second conditional if I were you would английский для начинающих",
      },

      glossary: [
        { en: "lottery", transcr: "лотэри", ru: "лотерея", pn: "/ˈlɒtəri/" },
        { en: "abroad", transcr: "эброд", ru: "за границей, за границу", pn: "/əˈbrɔːd/" },
        { en: "imagine", transcr: "имэджин", ru: "представить, вообразить", pn: "/ɪˈmædʒɪn/" },
      ],

      words: [
        { e: "💭", en: "dream", transcr: "дрим", ru: "мечта", pn: "/driːm/" },
        { e: "🔮", en: "future", transcr: "фьючэ", ru: "будущее", pn: "/ˈfjuːtʃə/" },
        { e: "💰", en: "rich", transcr: "рич", ru: "богатый", pn: "/rɪtʃ/" },
        { e: "🏆", en: "win", transcr: "уин", ru: "выиграть", pn: "/wɪn/" },
        { e: "☑️", en: "choose", transcr: "чуз", ru: "выбирать", pn: "/tʃuːz/" },
        { e: "🤔", en: "choice", transcr: "чойс", ru: "выбор", pn: "/tʃɔɪs/" },
        { e: "🏠", en: "home", transcr: "хоум", ru: "дом, домой", pn: "/həʊm/" },
        { e: "🏕️", en: "stay", transcr: "стэй", ru: "остаться", pn: "/steɪ/" },
        { e: "🤝", en: "accept", transcr: "эксэпт", ru: "согласиться, принять", pn: "/əkˈsept/" },
        { e: "🙅", en: "refuse", transcr: "рифьюз", ru: "отказаться", pn: "/rɪˈfjuːz/" },
        { e: "🗣️", en: "speak", transcr: "спик", ru: "говорить (на языке)", pn: "/spiːk/" },
        { e: "🍀", en: "lucky", transcr: "лаки", ru: "везучий, удачливый", pn: "/ˈlʌki/" },
        { e: "💡", en: "idea", transcr: "айдиэ", ru: "мысль, идея", pn: "/aɪˈdɪə/" },
      ],

      dialogue: [
        { s: "w", en: "Tom, can I ask you something?", transcr: "Том, кэн ай аск ю самсинг?", ru: "Том, можно тебя спросить?" },
        { s: "m", en: "Yes. What is the problem?", transcr: "Йес. Уот из зэ проблэм?", ru: "Да. В чём проблема?" },
        { s: "w", en: "I am tired. What would you do if you were me?", transcr: "Ай эм тайэд. Уот уд ю ду иф ю уё ми?", ru: "Я устал. Что бы ты сделал на моём месте?" },
        { s: "m", en: "If I were you, I'd stay. The pay is good.", transcr: "Иф ай уё ю, айд стэй. Зэ пэй из гуд.", ru: "На твоём месте я бы остался. Платят хорошо." },
        { s: "w", en: "I want to go home now.", transcr: "Ай уонт ту гоу хоум нау.", ru: "Я хочу домой сейчас." },
        { s: "m", en: "Imagine you had more money. What would you do?", transcr: "Имэджин ю хэд мо мани. Уот уд ю ду?", ru: "Представь, что у тебя больше денег. Что бы ты сделал?" },
        { s: "w", en: "If I had more money, I'd send it home.", transcr: "Иф ай хэд мо мани, айд сэнд ит хоум.", ru: "Если бы было больше денег, я бы отправил их домой." },
        { s: "m", en: "You should speak to the manager today.", transcr: "Ю шуд спик ту зэ мэниджэ тудэй.", ru: "Тебе стоит поговорить с менеджером сегодня." },
        { s: "w", en: "Good idea. If my English were better, I'd ask for more work.", transcr: "Гуд айдиэ. Иф май инглиш уё бэтэ, айд аск фо мо уёк.", ru: "Хорошая мысль. Если бы я лучше знал английский, я бы попросил больше работы." },
        { s: "m", en: "Your English is good. If I were you, I'd ask now.", transcr: "Ё инглиш из гуд. Иф ай уё ю, айд аск нау.", ru: "Твой английский хороший. На твоём месте я бы спросил сейчас." },
        { s: "w", en: "Thank you, Tom. If I won some money, I would go home.", transcr: "Сэнк ю, Том. Иф ай уан сам мани, ай уд гоу хоум.", ru: "Спасибо, Том. Если бы я выиграл денег, я бы поехал домой." },
        { s: "m", en: "Good luck! If I were you, I'd stay another season.", transcr: "Гуд лак! Иф ай уё ю, айд стэй эназэ сизн.", ru: "Удачи! На твоём месте я бы остался ещё на сезон." },
      ],

      quiz: [
        { q: '[COMPLETE] "If I ___ you, I\'d talk to Tom." (на твоём месте)', opts: ["were", "was", "am", "would"], c: 0, expl: "If I WERE you — во 2-м conditional с be ставим were для всех лиц (готовая фраза совета). was — обычное прошлое; would не ставим в if; am — настоящее.", hint_ru: "Совет: If I were you…" },
        { q: '[COMPLETE] "If I had more money, I ___ go home." (я бы поехал)', opts: ["would", "will", "am", "did"], c: 0, expl: "2-й conditional: if + прошедшее (had), … WOULD + база. will — это 1-й conditional (реально); would — воображаемое.", hint_ru: "if + had → would." },
        { q: '[CORRECT] «На твоём месте я бы поговорил с менеджером.»', opts: ["If I were you, I'd talk to the manager.", "If I would be you, I talk to the manager.", "If I am you, I'd talk to the manager.", "If I were you, I will talk to the manager."], c: 0, expl: "If I were you, I'd talk… — were (не would) в части с if, would (I'd) в результате. «If I would be» неверно (would не в if); «I will» — это 1-й conditional.", hint_ru: "If I were you, I'd…" },
        { q: '[COMPLETE] "If I ___ the lottery, I\'d buy a farm." (выиграл бы)', opts: ["won", "win", "would win", "will win"], c: 0, expl: "В части с if — прошедшее: won (прош. от win). «If I won…, I'd buy» — воображаемое. would/will в часть с if не ставим.", hint_ru: "if + прошедшее (won)." },
        { q: '[CORRECT] «Если бы я лучше говорил по-английски, я бы попросил больше часов.»', opts: ["If I could speak better English, I'd ask for more hours.", "If I can speak better English, I ask for more hours.", "If I speak better English, I'd ask for more hours.", "If I could speak better English, I will ask for more hours."], c: 0, expl: "If I could speak…, I'd ask — could (не can) + would (I'd). Это воображаемое. can/will — для реального (1-й conditional).", hint_ru: "could … I'd …" },
        { q: '[COMPLETE] "What ___ you do if you lost your job?" (что бы ты сделал)', opts: ["would", "will", "are", "did"], c: 0, expl: "What WOULD you do if…? — вопрос 2-го conditional: would + you + база, а в части с if — прошедшее (lost).", hint_ru: "What would you do if…?" },
        { q: '[NEGATIVE] "If I were you, I ___ accept that job." (не соглашался бы)', opts: ["wouldn't", "won't", "don't", "am not"], c: 0, expl: "I WOULDN'T accept — отрицание во 2-м conditional: wouldn't + база. won't — это 1-й conditional (will not); don't — настоящее.", hint_ru: "wouldn't + база." },
        { q: '[COMPLETE] "If the pay ___ better, I\'d stay another season." (если бы платили лучше)', opts: ["were", "is", "will be", "would be"], c: 0, expl: "В части с if — прошедшее: WERE (с be во 2-м conditional were для всех лиц). is — настоящее (1-й тип); would/will в if не ставим.", hint_ru: "if + were." },
        { q: '[QUESTION] Сделай вопрос: «Что бы ты купил, если бы выиграл деньги?»', opts: ["What would you buy if you won some money?", "What you would buy if you won some money?", "What would you buy if you would win some money?", "What did you buy if you won money?"], c: 0, expl: "What would you buy if you won…? — would + you + buy; в части с if — прошедшее (won), без would.", hint_ru: "What would you + база … if + прошедшее?" },
        { q: '[TRANSLATE] "мечта"', opts: ["dream", "future", "choice", "idea"], c: 0, expl: "dream — мечта. future — будущее, choice — выбор, idea — мысль/идея.", hint_ru: "dream." },
        { q: '[TRANSLATE] "согласиться, принять"', opts: ["accept", "refuse", "choose", "speak"], c: 0, expl: "accept — согласиться/принять. refuse — отказаться (наоборот!), choose — выбирать, speak — говорить.", hint_ru: "accept." },
        { q: "[LISTEN] If I were you, I'd go to the doctor.", opts: ["На твоём месте я бы сходил к врачу.", "На твоём месте я бы остался дома.", "Я пойду к врачу завтра.", "Тебе нужно поговорить с врачом."], c: 0, expl: "If I were you, I'd go to the doctor. — совет: на твоём месте я бы пошёл к врачу.", hint_ru: "" },
        { q: "[GIST] По диалогу: что Том советует рабочему в конце?", opts: ["Остаться ещё на сезон.", "Уехать домой завтра.", "Не говорить с менеджером.", "Купить ферму."], c: 0, expl: "Том говорит: «If I were you, I'd stay another season» — остаться ещё на сезон.", hint_ru: "Слушай совет Тома в конце диалога." },
        { q: '[BUILD] «На твоём месте я бы поговорил с Томом.»', build: ["If", "I", "were", "you", "I'd", "talk", "to", "Tom"], expl: "If I were you, I'd talk to Tom. — совет: were в части с if, I'd (would) в результате.", hint_ru: "If I were you, I'd talk to Tom." },
        { q: '[BUILD] «Если бы у меня было больше денег, я бы поехал домой.»', build: ["If", "I", "had", "more", "money", "I'd", "go", "home"], expl: "If I had more money, I'd go home. — 2-й conditional: if + had (прошедшее), I'd (would) + база.", hint_ru: "If I had more money, I'd go home." },
      ],

      everyday: {
        title_ru: "Совет: на твоём месте… (If I were you…)",
        phrases: [
          { en: "If I were you, I'd talk to the manager.", transcr: "Иф ай уё ю, айд ток ту зэ мэниджэ.", ru: "На твоём месте я бы поговорил с менеджером." },
          { en: "If I were you, I'd see a doctor.", transcr: "Иф ай уё ю, айд си э доктэ.", ru: "На твоём месте я бы сходил к врачу." },
          { en: "What would you do?", transcr: "Уот уд ю ду?", ru: "А ты бы что сделал?" },
          { en: "I wouldn't worry about it.", transcr: "Ай ууднт уари эбаут ит.", ru: "Я бы не переживал из-за этого." },
          { en: "You should ask for help.", transcr: "Ю шуд аск фо хэлп.", ru: "Тебе стоит попросить о помощи." },
          { en: "If I were you, I'd stay.", transcr: "Иф ай уё ю, айд стэй.", ru: "На твоём месте я бы остался." },
        ],
      },
    },

    {
      id: 34,
      title_ru: "Раньше я…: used to + кто/который/где",
      cefr: "B1 · used to / didn't use to · who / which / where · describing people",
      grammar: {
        title_ru: "used to: раньше было так (а теперь нет) · человек, КОТОРЫЙ… (who / which / where)",
        intro_ru:
          'Говорим о том, что было <b>раньше</b> (привычка или состояние) — а сейчас уже нет:<br>' +
          '❌ Не так: <s>I worked there, now no</s> (непонятно)<br>' +
          '✅ Так: <b>I <u>used to</u> work in a factory.</b> ' +
          '<span class="g-transcr">[ай юст ту уёк ин э фэктэри]</span> (раньше я работал на заводе — а теперь нет)<br>' +
          'Формула: <b>used to + база</b> (раньше регулярно/долго). ' +
          '⚠️ В вопросе и отрицании — <b>use</b> (без d): Did you <u>use</u> to…? / I didn\'t <u>use</u> to…',
        cultural_ru:
          '🔗 <b>«человек, КОТОРЫЙ…»</b> — соединяем два кусочка одним словом:<br>' +
          '<div style="display:grid;grid-template-columns:auto 1fr;gap:4px 8px">' +
          '<div>👤 о людях →</div><div><b>who</b>: the worker <b>who</b> works here (рабочий, <i>который</i> тут работает)</div>' +
          '<div>📦 о вещах →</div><div><b>which / that</b>: the box <b>which</b> is heavy (ящик, <i>который</i> тяжёлый)</div>' +
          '<div>📍 о местах →</div><div><b>where</b>: the farm <b>where</b> I work (ферма, <i>где</i> я работаю)</div>' +
          '</div>' +
          '💬 Спросить про человека: <b>What is he like?</b> <span class="g-transcr">[уот из хи лайк]</span> — какой он? ' +
          '(это про характер, а не «что он любит»).',
        note_ru:
          '⚠️ <b>used to</b> — только о ПРОШЛОМ (нет «will used to»). В вопросе/отрицании <b>use</b> без d: ' +
          'Did you <u>use</u> to…? / I didn\'t <u>use</u> to… (как did + база).<br>' +
          '⚠️ <b>used to</b> (раньше регулярно) ≠ Past Simple (один раз): «I <u>used to</u> work nights» = раньше так было; ' +
          '«I <u>worked</u> late yesterday» = один вечер.<br>' +
          '⚠️ <b>who</b> — о людях, <b>which / that</b> — о вещах, <b>where</b> — о местах. that можно вместо who/which.<br>' +
          '⚠️ Не повторяем подлежащее: the worker who <s>he</s> works here → the worker who works here.',
        visual_ru:
          '<svg viewBox="0 0 340 286" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="10" y="14" font-size="11" fill="var(--text2)">Раньше было — used to (а теперь нет):</text>' +
          '<rect x="8" y="20" width="150" height="54" rx="8" fill="none" stroke="#6a1b9a" stroke-width="2"/>' +
          '<text x="16" y="38" font-size="11" fill="var(--text)">РАНЬШЕ:</text>' +
          '<text x="16" y="55" font-size="11" fill="#6a1b9a">I used to work</text>' +
          '<text x="16" y="68" font-size="9" fill="var(--text2)">in a factory</text>' +
          '<text x="166" y="44" font-size="20" fill="var(--text2)">→</text>' +
          '<text x="194" y="38" font-size="11" fill="var(--text)">СЕЙЧАС:</text>' +
          '<text x="194" y="55" font-size="11" fill="#2e7d32">on a farm</text>' +
          '<text x="194" y="68" font-size="9" fill="var(--text2)">(больше не на заводе)</text>' +
          '<text x="10" y="100" font-size="11" fill="var(--text2)">«человек, КОТОРЫЙ…» — who / which / where:</text>' +
          '<text x="14" y="128" font-size="18">👤</text>' +
          '<text x="40" y="122" font-size="11" fill="var(--text)">люди → <tspan fill="#6a1b9a" font-weight="bold">who</tspan></text>' +
          '<text x="40" y="138" font-size="10" fill="var(--text2)">the worker <tspan fill="#6a1b9a">who</tspan> works here</text>' +
          '<text x="14" y="172" font-size="18">📦</text>' +
          '<text x="40" y="166" font-size="11" fill="var(--text)">вещи → <tspan fill="#6a1b9a" font-weight="bold">which / that</tspan></text>' +
          '<text x="40" y="182" font-size="10" fill="var(--text2)">the box <tspan fill="#6a1b9a">which</tspan> is heavy</text>' +
          '<text x="14" y="216" font-size="18">📍</text>' +
          '<text x="40" y="210" font-size="11" fill="var(--text)">места → <tspan fill="#6a1b9a" font-weight="bold">where</tspan></text>' +
          '<text x="40" y="226" font-size="10" fill="var(--text2)">the farm <tspan fill="#6a1b9a">where</tspan> I work</text>' +
          '<text x="10" y="258" font-size="10" fill="#e65100">⚠️ who = люди · which/that = вещи · where = места</text>' +
          '<text x="10" y="276" font-size="10" fill="#e65100">⚠️ вопрос/отрицание: use (без d) — Did you use to…?</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ used to + база (раньше так было)",
            rule_ru:
              'Привычка или состояние в прошлом, которого больше нет:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>used to</b> work in a factory.</div><div>раньше работал на заводе</div>' +
              '<div>I <b>used to</b> live in a city.</div><div>раньше жил в городе</div>' +
              '<div>I <b>used to</b> be shy.</div><div>раньше был застенчивым</div>' +
              '<div>We <b>used to</b> start early.</div><div>раньше начинали рано</div>' +
              '</div>',
            table: [
              { subj: "работа", verb: "used to + база", example: "I used to work in a factory.", transcr: "Ай юст ту уёк ин э фэктэри.", tr_ru: "Раньше я работал на заводе." },
              { subj: "жильё", verb: "used to live", example: "I used to live in a city.", transcr: "Ай юст ту лив ин э сити.", tr_ru: "Раньше я жил в городе." },
              { subj: "состояние", verb: "used to be", example: "I used to be shy.", transcr: "Ай юст ту би шай.", tr_ru: "Раньше я был застенчивым." },
              { subj: "привычка", verb: "used to + база", example: "We used to start work early.", transcr: "Уи юст ту старт уёк ёли.", tr_ru: "Раньше мы начинали работу рано." },
            ],
          },
          negative: {
            label_ru: "❌ didn't use to + база (раньше НЕ так)",
            rule_ru:
              '<b>didn\'t use to</b> + база (use без d, как did + база):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>didn\'t use to</b> speak English.</div><div>раньше не говорил по-английски</div>' +
              '<div>I <b>didn\'t use to</b> like the cold.</div><div>раньше не любил холод</div>' +
              '<div>He <b>didn\'t use to</b> work so hard.</div><div>раньше не работал так усердно</div>' +
              '</div>',
            table: [
              { subj: "язык", verb: "didn't use to", example: "I didn't use to speak English.", transcr: "Ай диднт юс ту спик инглиш.", tr_ru: "Раньше я не говорил по-английски." },
              { subj: "погода", verb: "didn't use to like", example: "I didn't use to like the cold.", transcr: "Ай диднт юс ту лайк зэ коулд.", tr_ru: "Раньше я не любил холод." },
              { subj: "работа", verb: "didn't use to", example: "He didn't use to work so hard.", transcr: "Хи диднт юс ту уёк соу хард.", tr_ru: "Раньше он не работал так усердно." },
            ],
          },
          question: {
            label_ru: "❓ Did you use to…? · What did you use to…?",
            rule_ru:
              '<b>Did</b> + you + <b>use to</b> + база (use без d — did уже показывает прошлое):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>Did</b> you <b>use to</b> work here?</div><div>ты раньше тут работал?</div>' +
              '<div><b>Did</b> you <b>use to</b> live in a city?</div><div>ты раньше жил в городе?</div>' +
              '<div><b>What did</b> you <b>use to</b> do?</div><div>чем ты раньше занимался?</div>' +
              '</div>',
            table: [
              { subj: "да/нет?", verb: "Did you use to…?", example: "Did you use to work in a factory?", transcr: "Дид ю юс ту уёк ин э фэктэри?", tr_ru: "Ты раньше работал на заводе?" },
              { subj: "где?", verb: "Did you use to live…?", example: "Did you use to live in a city?", transcr: "Дид ю юс ту лив ин э сити?", tr_ru: "Ты раньше жил в городе?" },
              { subj: "что?", verb: "What did you use to…?", example: "What did you use to do?", transcr: "Уот дид ю юс ту ду?", tr_ru: "Чем ты раньше занимался?" },
            ],
          },
        },
        examples: [
          { en: "I used to work in a factory in my city.", transcr: "Ай юст ту уёк ин э фэктэри ин май сити.", ru: "Раньше я работал на заводе в своём городе." },
          { en: "I didn't use to speak English.", transcr: "Ай диднт юс ту спик инглиш.", ru: "Раньше я не говорил по-английски." },
          { en: "Omar is the worker who works here.", transcr: "Омар из зэ уёкэ ху уёкс хиэ.", ru: "Омар — рабочий, который здесь работает." },
          { en: "He is the driver who drives the tractor.", transcr: "Хи из зэ драйвэ ху драйвз зэ трэктэ.", ru: "Он водитель, который водит трактор." },
          { en: "The box which is heavy is full.", transcr: "Зэ бокс уич из хэви из фул.", ru: "Ящик, который тяжёлый, — полный." },
          { en: "This is the machine that is broken.", transcr: "Зис из зэ мэшин зэт из броукэн.", ru: "Это та машина, которая сломана." },
          { en: "The farm where I work is good.", transcr: "Зэ фарм уэ ай уёк из гуд.", ru: "Ферма, где я работаю, — хорошая." },
          { en: "The camp where I live is quiet.", transcr: "Зэ кэмп уэ ай лив из куайэт.", ru: "Лагерь, где я живу, — тихий." },
          { en: "What is he like? He is kind and polite.", transcr: "Уот из хи лайк? Хи из кайнд энд пэлайт.", ru: "Какой он? Он добрый и вежливый." },
          { en: "He is honest and hardworking.", transcr: "Хи из онист энд хадуёкинг.", ru: "Он честный и трудолюбивый." },
          { en: "The city where I used to live was noisy and crowded.", transcr: "Зэ сити уэ ай юст ту лив уоз нойзи энд краудид.", ru: "Город, где я раньше жил, был шумным и многолюдным." },
          { en: "Our camp is modern and comfortable.", transcr: "Ауэ кэмп из модэн энд камфтэбл.", ru: "Наш лагерь современный и удобный." },
          { en: "He is a kind person.", transcr: "Хи из э кайнд пёсэн.", ru: "Он добрый человек." },
          { en: "He has a good character.", transcr: "Хи хэз э гуд кэрэктэ.", ru: "У него хороший характер." },
          { en: "It was a bad habit.", transcr: "Ит уоз э бэд хэбит.", ru: "Это была плохая привычка." },
        ],
        simple_ru: {
          formula:
            '<b>Раньше так было = used to + база.</b> «I <b>used to</b> work…» (а теперь нет). ' +
            'Вопрос/нет → <b>use</b> без d: «Did you <b>use to</b>…?», «I didn\'t <b>use to</b>…». ' +
            'Который: <b>who</b> (люди) · <b>which</b> (вещи) · <b>where</b> (места).',
          examples: [
            { en: "I used to work in a factory.", transcr: "Ай юст ту уёк ин э фэктэри.", ru: "раньше работал (а теперь нет)." },
            { en: "The worker who works here is kind.", transcr: "Зэ уёкэ ху уёкс хиэ из кайнд.", ru: "рабочий, КОТОРЫЙ тут работает." },
            { en: "The farm where I work is good.", transcr: "Зэ фарм уэ ай уёк из гуд.", ru: "ферма, ГДЕ я работаю." },
          ],
        },
        ytQuery: "used to past habit defining relative clauses who which where for beginners",
      },

      glossary: [
        { en: "person", transcr: "пёсэн", ru: "человек", pn: "/ˈpɜːsən/" },
        { en: "character", transcr: "кэрэктэ", ru: "характер", pn: "/ˈkærəktə/" },
      ],

      words: [
        { e: "🤗", en: "kind", transcr: "кайнд", ru: "добрый", pn: "/kaɪnd/" },
        { e: "☝️", en: "strict", transcr: "стрикт", ru: "строгий", pn: "/strɪkt/" },
        { e: "😴", en: "lazy", transcr: "лэйзи", ru: "ленивый", pn: "/ˈleɪzi/" },
        { e: "🤝", en: "honest", transcr: "онист", ru: "честный", pn: "/ˈɒnɪst/" },
        { e: "🙇", en: "polite", transcr: "пэлайт", ru: "вежливый", pn: "/pəˈlaɪt/" },
        { e: "🙄", en: "rude", transcr: "руд", ru: "грубый", pn: "/ruːd/" },
        { e: "🙈", en: "shy", transcr: "шай", ru: "застенчивый", pn: "/ʃaɪ/" },
        { e: "💪", en: "hardworking", transcr: "хадуёкинг", ru: "трудолюбивый", pn: "/ˌhɑːdˈwɜːkɪŋ/" },
        { e: "🔊", en: "noisy", transcr: "нойзи", ru: "шумный", pn: "/ˈnɔɪzi/" },
        { e: "👥", en: "crowded", transcr: "краудид", ru: "многолюдный", pn: "/ˈkraʊdɪd/" },
        { e: "🏢", en: "modern", transcr: "модэн", ru: "современный", pn: "/ˈmɒdən/" },
        { e: "🛋️", en: "comfortable", transcr: "камфтэбл", ru: "удобный", pn: "/ˈkʌmftəbəl/" },
        { e: "🚶", en: "stranger", transcr: "стрэйнджэ", ru: "незнакомец", pn: "/ˈstreɪndʒə/" },
        { e: "🔁", en: "habit", transcr: "хэбит", ru: "привычка", pn: "/ˈhæbɪt/" },
        { e: "📍", en: "place", transcr: "плэйс", ru: "место", pn: "/pleɪs/" },
        { e: "🏡", en: "live", transcr: "лив", ru: "жить", pn: "/lɪv/" },
      ],

      dialogue: [
        { s: "w", en: "Tom, who is that new worker?", transcr: "Том, ху из зэт нью уёкэ?", ru: "Том, кто этот новый рабочий?" },
        { s: "m", en: "That is Omar. He works on the farm now.", transcr: "Зэт из Омар. Хи уёкс он зэ фарм нау.", ru: "Это Омар. Он теперь работает на ферме." },
        { s: "w", en: "What is he like?", transcr: "Уот из хи лайк?", ru: "Какой он (по характеру)?" },
        { s: "m", en: "He is kind and hardworking. All the workers like him.", transcr: "Хи из кайнд энд хадуёкинг. Ол зэ уёкэз лайк хим.", ru: "Он добрый и трудолюбивый. Все рабочие его любят." },
        { s: "w", en: "Good. The last worker was lazy.", transcr: "Гуд. Зэ ласт уёкэ уоз лэйзи.", ru: "Хорошо. Прошлый рабочий был ленивый." },
        { s: "m", en: "Did you use to work on a farm?", transcr: "Дид ю юс ту уёк он э фарм?", ru: "Ты раньше работал на ферме?" },
        { s: "w", en: "No. I used to work in a factory in my city.", transcr: "Ноу. Ай юст ту уёк ин э фэктэри ин май сити.", ru: "Нет. Раньше я работал на заводе в своём городе." },
        { s: "m", en: "Is the farm better than the factory?", transcr: "Из зэ фарм бэтэ зэн зэ фэктэри?", ru: "Ферма лучше завода?" },
        { s: "w", en: "Yes! The farm is a place where I am happy.", transcr: "Йес! Зэ фарм из э плэйс уэ ай эм хэпи.", ru: "Да! Ферма — это место, где я счастлив." },
        { s: "m", en: "Omar is the one who can help you.", transcr: "Омар из зэ уан ху кэн хэлп ю.", ru: "Омар — тот, кто может тебе помочь." },
        { s: "w", en: "Thank you. I didn't use to speak English here.", transcr: "Сэнк ю. Ай диднт юс ту спик инглиш хиэ.", ru: "Спасибо. Раньше я тут не говорил по-английски." },
        { s: "m", en: "Now you speak well. You are a good worker.", transcr: "Нау ю спик уэл. Ю ар э гуд уёкэ.", ru: "Теперь ты хорошо говоришь. Ты хороший рабочий." },
      ],

      quiz: [
        { q: '[COMPLETE] "I ___ to work in a factory." (раньше)', opts: ["used", "use", "work", "am"], c: 0, expl: "used to + база — привычка/состояние в прошлом, которого больше нет. use (без d) — только в вопросе/отрицании.", hint_ru: "used to + база." },
        { q: '[COMPLETE] "Did you ___ to live in a city?" (раньше)', opts: ["use", "used", "do", "were"], c: 0, expl: "В вопросе — use (без d): Did you use to…? Слово did уже показывает прошлое, поэтому d не нужно.", hint_ru: "Did you use to…?" },
        { q: '[NEGATIVE] "I ___ use to speak English." (раньше не говорил)', opts: ["didn't", "don't", "wasn't", "am not"], c: 0, expl: "didn't use to + база — раньше НЕ было привычки. В отрицании use без d (как did + база). don't — настоящее.", hint_ru: "didn't use to…" },
        { q: '[CORRECT] «Раньше я работал на заводе (а теперь нет).»', opts: ["I used to work in a factory.", "I use to work in a factory.", "I used to working in a factory.", "I am used to work in a factory."], c: 0, expl: "used to + база (work). «use to» (без d) — только в вопросе/отрицании; «used to working» неверно — нужна база.", hint_ru: "used to + база." },
        { q: '[COMPLETE] "The worker ___ works here is Omar." (который — человек)', opts: ["who", "which", "where", "what"], c: 0, expl: "who — о людях (рабочий, КОТОРЫЙ…). which — для вещей, where — для мест.", hint_ru: "человек → who." },
        { q: '[COMPLETE] "The box ___ is heavy is full." (который — вещь)', opts: ["which", "who", "where", "when"], c: 0, expl: "which (или that) — о вещах. who — о людях, where — о местах.", hint_ru: "вещь → which/that." },
        { q: '[COMPLETE] "The farm ___ I work is good." (где)', opts: ["where", "who", "which", "that"], c: 0, expl: "where — о местах (ферма, ГДЕ я работаю). who — люди, which — вещи.", hint_ru: "место → where." },
        { q: '[CORRECT] «Какой он (по характеру)?»', opts: ["What is he like?", "What does he like?", "How is he like?", "What he is like?"], c: 0, expl: "What is he like? — спрашиваем ОПИСАНИЕ (какой он). «What does he like?» = что он ЛЮБИТ — другой смысл.", hint_ru: "What is he like?" },
        { q: '[TRANSLATE] "честный"', opts: ["honest", "polite", "lazy", "rude"], c: 0, expl: "honest — честный. polite — вежливый, lazy — ленивый, rude — грубый.", hint_ru: "honest." },
        { q: '[TRANSLATE] "застенчивый"', opts: ["shy", "strict", "kind", "noisy"], c: 0, expl: "shy — застенчивый. strict — строгий, kind — добрый, noisy — шумный.", hint_ru: "shy." },
        { q: "[LISTEN] He used to live in a noisy city.", opts: ["Раньше он жил в шумном городе.", "Он живёт в тихом городе.", "Он хочет жить в городе.", "Раньше он работал в городе."], c: 0, expl: "He used to live in a noisy city. — раньше он жил (а теперь нет) в шумном городе.", hint_ru: "" },
        { q: "[GIST] По диалогу: какой новый рабочий Омар?", opts: ["Добрый и трудолюбивый.", "Ленивый и грубый.", "Строгий и тихий.", "Шумный и застенчивый."], c: 0, expl: "Том говорит: «He is kind and hardworking» — добрый и трудолюбивый.", hint_ru: "Слушай, что Том говорит про Омара." },
        { q: "[GIST] По диалогу: где рабочий работал раньше?", opts: ["На заводе в своём городе.", "На ферме в деревне.", "В магазине у дома.", "Он раньше не работал."], c: 0, expl: "Рабочий говорит: «I used to work in a factory in my city» — на заводе в своём городе.", hint_ru: "Слушай ответ про прошлую работу." },
        { q: '[BUILD] «Раньше я работал на заводе.»', build: ["I", "used", "to", "work", "in", "a", "factory"], expl: "I used to work in a factory. — used to + база (work): раньше работал, а теперь нет.", hint_ru: "I used to work in a factory." },
        { q: '[BUILD] «Рабочий, который здесь работает, — Омар.»', build: ["The", "worker", "who", "works", "here", "is", "Omar"], expl: "The worker who works here is Omar. — who о людях; works (он, 3-е лицо).", hint_ru: "The worker who works here is Omar." },
      ],

      everyday: {
        title_ru: "Описать человека и место (What is he like?)",
        phrases: [
          { en: "What is he like?", transcr: "Уот из хи лайк?", ru: "Какой он (по характеру)?" },
          { en: "He is friendly and easy to talk to.", transcr: "Хи из фрэндли энд изи ту ток ту.", ru: "Он дружелюбный, с ним легко общаться." },
          { en: "What is the place like?", transcr: "Уот из зэ плэйс лайк?", ru: "Какое там место?" },
          { en: "It's a quiet place where I feel safe.", transcr: "Итс э куайэт плэйс уэ ай фил сэйф.", ru: "Это тихое место, где я чувствую себя спокойно." },
          { en: "I used to live in a big city.", transcr: "Ай юст ту лив ин э биг сити.", ru: "Раньше я жил в большом городе." },
          { en: "He's the man who runs the farm.", transcr: "Хиз зэ мэн ху ранз зэ фарм.", ru: "Это человек, который управляет фермой." },
        ],
      },
    },

    {
      id: 35,
      title_ru: "Глагол + to / -ing · фразовые: put it on",
      cefr: "B1 · verb + to / verb + -ing · manage to · phrasal verbs (put it on)",
      grammar: {
        title_ru: "После глагола: to + база (want to do) или -ing (enjoy doing) · фразовые: put it on / take them off",
        intro_ru:
          'После одних глаголов идёт <b>to + база</b>, после других — <b>-ing</b>:<br>' +
          '❌ Не так: <s>I want working</s> · <s>I enjoy to work</s><br>' +
          '✅ Так: <b>I <u>want to</u> work.</b> <span class="g-transcr">[ай уонт ту уёк]</span> (хочу работать)<br>' +
          '✅ Так: <b>I <u>enjoy</u> work<u>ing</u>.</b> <span class="g-transcr">[ай инджой уёкинг]</span> (люблю работать)<br>' +
          '<b>+ to + база:</b> want · need · hope · try · decide · <b>manage to</b> (получилось, удалось с трудом).<br>' +
          '<b>+ -ing:</b> enjoy · stop · finish · keep (like / love / hate + -ing ты уже знаешь из L15).',
        cultural_ru:
          '🔗 <b>Фразовые глаголы</b> — глагол + маленькое слово (on / off / up / in), вместе новый смысл:<br>' +
          '<div style="display:grid;grid-template-columns:auto 1fr;gap:4px 8px">' +
          '<div><b>put on</b></div><div>надеть — Put on your gloves <span class="g-transcr">[пут он ёр главз]</span></div>' +
          '<div><b>take off</b></div><div>снять — Take off your coat <span class="g-transcr">[тэйк оф ёр коут]</span></div>' +
          '<div><b>turn on / off</b></div><div>включить / выключить — Turn on the machine <span class="g-transcr">[тён он зэ мэшин]</span></div>' +
          '<div><b>fill in</b></div><div>заполнить — Fill in this form <span class="g-transcr">[фил ин зис фом]</span></div>' +
          '</div>' +
          '⚠️ <b>it / them</b> (его / их) ставим <b>МЕЖДУ</b> словами: <b>Put it on</b> ✅ <span class="g-transcr">[пут ит он]</span> — ' +
          'а не <s>Put on it</s>. <b>Take them off</b> ✅ — а не <s>Take off them</s>.',
        note_ru:
          '⚠️ <b>want / need / hope / try / manage</b> + <b>to</b> + база (не -ing): I want <u>to work</u>, не <s>I want working</s>.<br>' +
          '⚠️ <b>enjoy / stop / finish / keep</b> + <b>-ing</b> (не to): I enjoy <u>working</u>, не <s>I enjoy to work</s>.<br>' +
          '⚠️ Фразовый: <b>it / them</b> — в середине (Put it on), а не в конце (<s>Put on it</s>).<br>' +
          '⚠️ <b>-ed</b> и <b>-ing</b> прилагательные: <b>-ed</b> = что Я ЧУВСТВУЮ, <b>-ing</b> = КАКОЙ предмет / работа:<br>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px 10px">' +
          '<div>I am <b>bored</b> <span class="g-transcr">[ай эм бод]</span> — мне скучно</div><div>a <b>boring</b> job — скучная работа</div>' +
          '<div>I am <b>tired</b> <span class="g-transcr">[ай эм тайэд]</span> — я устал</div><div><b>tiring</b> work — утомительная работа</div>' +
          '<div>I am <b>interested</b> — мне интересно</div><div>an <b>interesting</b> book — интересная книга</div>' +
          '</div>',
        visual_ru:
          '<svg viewBox="0 0 340 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="10" y="14" font-size="11" fill="var(--text2)">После глагола: to + база ИЛИ -ing?</text>' +
          '<rect x="8" y="20" width="152" height="92" rx="8" fill="none" stroke="#1565c0" stroke-width="2"/>' +
          '<text x="16" y="38" font-size="11" font-weight="bold" fill="#1565c0">глагол + to + база</text>' +
          '<text x="16" y="55" font-size="10" fill="var(--text2)">want · need · hope</text>' +
          '<text x="16" y="69" font-size="10" fill="var(--text2)">try · manage to</text>' +
          '<text x="16" y="90" font-size="11" fill="#1565c0">I want to work</text>' +
          '<text x="16" y="104" font-size="9" fill="var(--text2)">(хочу работать)</text>' +
          '<rect x="170" y="20" width="162" height="92" rx="8" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="178" y="38" font-size="11" font-weight="bold" fill="#2e7d32">глагол + -ing</text>' +
          '<text x="178" y="55" font-size="10" fill="var(--text2)">enjoy · stop · finish</text>' +
          '<text x="178" y="69" font-size="10" fill="var(--text2)">keep · like · love</text>' +
          '<text x="178" y="90" font-size="11" fill="#2e7d32">I enjoy working</text>' +
          '<text x="178" y="104" font-size="9" fill="var(--text2)">(люблю работать)</text>' +
          '<text x="10" y="132" font-size="11" fill="var(--text2)">Фразовый глагол: куда поставить it / them?</text>' +
          '<text x="14" y="150" font-size="10" fill="var(--text)">put on · take off · turn on / off · fill in</text>' +
          '<rect x="8" y="158" width="324" height="34" rx="8" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="16" y="176" font-size="11" fill="#2e7d32">✅ Put it on. · Take them off.</text>' +
          '<text x="16" y="188" font-size="9" fill="var(--text2)">it / them — МЕЖДУ глаголом и частицей</text>' +
          '<rect x="8" y="198" width="324" height="24" rx="8" fill="none" stroke="#c62828" stroke-width="2"/>' +
          '<text x="16" y="214" font-size="11" fill="#c62828">❌ Put on it. · Take off them.</text>' +
          '<text x="10" y="242" font-size="10" fill="#e65100">⚠️ -ed = что я чувствую: I am bored (мне скучно)</text>' +
          '<text x="10" y="260" font-size="10" fill="#e65100">⚠️ -ing = какой предмет: a boring job (скучная работа)</text>' +
          '<text x="10" y="282" font-size="9" fill="var(--text2)">у каждого глагола свой путь · it / them в середине</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ глагол + to / + -ing · фразовый (put it on)",
            rule_ru:
              'После глагола — <b>to + база</b> или <b>-ing</b>; фразовый = глагол + маленькое слово:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>want to</b> work.</div><div>хочу работать</div>' +
              '<div>I <b>enjoy</b> work<b>ing</b>.</div><div>люблю работать</div>' +
              '<div>I <b>managed to</b> finish.</div><div>мне удалось закончить</div>' +
              '<div><b>Put</b> your gloves <b>on</b>.</div><div>надень перчатки</div>' +
              '</div>',
            table: [
              { subj: "+ to", verb: "want to + база", example: "I want to work hard.", transcr: "Ай уонт ту уёк хад.", tr_ru: "Я хочу работать усердно." },
              { subj: "+ -ing", verb: "enjoy + -ing", example: "I enjoy working on the farm.", transcr: "Ай инджой уёкинг он зэ фарм.", tr_ru: "Мне нравится работать на ферме." },
              { subj: "manage to", verb: "managed to + база", example: "I managed to pick many boxes.", transcr: "Ай мэниджд ту пик мэни боксиз.", tr_ru: "Мне удалось собрать много ящиков." },
              { subj: "фразовый", verb: "put on / put it on", example: "Put your gloves on. Put them on.", transcr: "Пут ёр главз он. Пут зэм он.", tr_ru: "Надень перчатки. Надень их." },
            ],
          },
          negative: {
            label_ru: "❌ do not want to / do not enjoy + -ing",
            rule_ru:
              'Отрицание — через <b>do not / did not</b>, дальше тот же путь (to или -ing):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>I <b>do not want to</b> work late.</div><div>не хочу работать допоздна</div>' +
              '<div>I <b>do not enjoy</b> working in the rain.</div><div>не люблю работать под дождём</div>' +
              '<div>He <b>did not manage to</b> finish.</div><div>ему не удалось закончить</div>' +
              '</div>',
            table: [
              { subj: "не хочу", verb: "do not want to", example: "I do not want to work late.", transcr: "Ай ду нот уонт ту уёк лэйт.", tr_ru: "Я не хочу работать допоздна." },
              { subj: "не люблю", verb: "do not enjoy + -ing", example: "I do not enjoy working in the rain.", transcr: "Ай ду нот инджой уёкинг ин зэ рэйн.", tr_ru: "Мне не нравится работать под дождём." },
              { subj: "не удалось", verb: "did not manage to", example: "He did not manage to finish his work.", transcr: "Хи дид нот мэнидж ту финиш хиз уёк.", tr_ru: "Ему не удалось закончить работу." },
            ],
          },
          question: {
            label_ru: "❓ Do you want to…? · What do you enjoy…? · Can you turn it off?",
            rule_ru:
              '<b>Do you</b> + want to / enjoy…?; фразовый вопрос — it / them в середине:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>Do</b> you <b>want to</b> start now?</div><div>хочешь начать сейчас?</div>' +
              '<div><b>What do</b> you <b>enjoy</b> doing?</div><div>что тебе нравится делать?</div>' +
              '<div><b>Can</b> you <b>turn it off</b>?</div><div>можешь это выключить?</div>' +
              '</div>',
            table: [
              { subj: "да/нет?", verb: "Do you want to…?", example: "Do you want to start now?", transcr: "Ду ю уонт ту старт нау?", tr_ru: "Ты хочешь начать сейчас?" },
              { subj: "что?", verb: "What do you enjoy…?", example: "What do you enjoy doing here?", transcr: "Уот ду ю инджой дуинг хиэ?", tr_ru: "Что тебе нравится здесь делать?" },
              { subj: "фразовый?", verb: "Can you turn it off?", example: "Can you turn it off, please?", transcr: "Кэн ю тён ит оф, плиз?", tr_ru: "Можешь это выключить, пожалуйста?" },
            ],
          },
        },
        examples: [
          { en: "I want to work hard.", transcr: "Ай уонт ту уёк хад.", ru: "Я хочу работать усердно." },
          { en: "I need to start early.", transcr: "Ай нид ту старт ёли.", ru: "Мне нужно начать рано." },
          { en: "I hope to finish today.", transcr: "Ай хоуп ту финиш тудэй.", ru: "Надеюсь закончить сегодня." },
          { en: "I try to learn English.", transcr: "Ай трай ту лён инглиш.", ru: "Я стараюсь учить английский." },
          { en: "I managed to pick many boxes.", transcr: "Ай мэниджд ту пик мэни боксиз.", ru: "Мне удалось собрать много ящиков." },
          { en: "I enjoy working on the farm.", transcr: "Ай инджой уёкинг он зэ фарм.", ru: "Мне нравится работать на ферме." },
          { en: "I finished packing the crates.", transcr: "Ай финишт пэкинг зэ крэйтс.", ru: "Я закончил упаковывать ящики." },
          { en: "I keep working when it is cold.", transcr: "Ай кип уёкинг уэн ит из коулд.", ru: "Я продолжаю работать, когда холодно." },
          { en: "Please stop working now.", transcr: "Плиз стоп уёкинг нау.", ru: "Пожалуйста, перестань работать сейчас." },
          { en: "Put on your gloves and boots.", transcr: "Пут он ёр главз энд бутс.", ru: "Надень перчатки и ботинки." },
          { en: "Put them on. It is cold.", transcr: "Пут зэм он. Ит из коулд.", ru: "Надень их. Холодно." },
          { en: "Take off your wet coat.", transcr: "Тэйк оф ёр уэт коут.", ru: "Сними мокрое пальто." },
          { en: "Take it off. It is warm here.", transcr: "Тэйк ит оф. Ит из уом хиэ.", ru: "Сними его. Здесь тепло." },
          { en: "Pick up the box. Pick it up.", transcr: "Пик ап зэ бокс. Пик ит ап.", ru: "Подними ящик. Подними его." },
          { en: "Turn it off when you finish work.", transcr: "Тён ит оф уэн ю финиш уёк.", ru: "Выключи это, когда закончишь работу." },
          { en: "I need to fill in this form.", transcr: "Ай нид ту фил ин зис фом.", ru: "Мне нужно заполнить эту форму." },
          { en: "Write down your hours.", transcr: "Райт даун ёр ауэз.", ru: "Запиши свои часы." },
          { en: "The work is hard. It is not boring.", transcr: "Зэ уёк из хад. Ит из нот боринг.", ru: "Работа тяжёлая. Она не скучная." },
          { en: "I am interested in this job.", transcr: "Ай эм интрэстид ин зис джоб.", ru: "Мне интересна эта работа." },
          { en: "Working in the cold is tiring.", transcr: "Уёкинг ин зэ коулд из тайэринг.", ru: "Работать на холоде утомительно." },
        ],
        simple_ru: {
          formula:
            '<b>Глагол + to</b> (want / need / hope / try / manage to) ИЛИ <b>глагол + -ing</b> (enjoy / stop / finish / keep). ' +
            'Фразовый: маленькое слово после глагола (put <b>on</b>, take <b>off</b>); <b>it / them</b> — в середине: Put it on.',
          examples: [
            { en: "I want to work.", transcr: "Ай уонт ту уёк.", ru: "хочу работать (want + to)." },
            { en: "I enjoy working.", transcr: "Ай инджой уёкинг.", ru: "люблю работать (enjoy + -ing)." },
            { en: "Put them on.", transcr: "Пут зэм он.", ru: "надень их (it / them — в середине)." },
          ],
        },
        ytQuery: "verb patterns gerund infinitive want to enjoy doing phrasal verbs separable put it on for beginners",
      },

      glossary: [
        { en: "boring", transcr: "боринг", ru: "скучный", pn: "/ˈbɔːrɪŋ/" },
        { en: "interested", transcr: "интрэстид", ru: "которому интересно", pn: "/ˈɪntrəstɪd/" },
        { en: "tiring", transcr: "тайэринг", ru: "утомительный", pn: "/ˈtaɪərɪŋ/" },
      ],

      words: [
        { e: "🙏", en: "need", transcr: "нид", ru: "нужно (надо)", pn: "/niːd/" },
        { e: "✅", en: "manage", transcr: "мэнидж", ru: "суметь, справиться", pn: "/ˈmænɪdʒ/" },
        { e: "🎯", en: "try", transcr: "трай", ru: "пытаться, стараться", pn: "/traɪ/" },
        { e: "🔁", en: "keep", transcr: "кип", ru: "продолжать (делать)", pn: "/kiːp/" },
        { e: "📚", en: "learn", transcr: "лён", ru: "учить, учиться", pn: "/lɜːn/" },
        { e: "🧤", en: "put on", transcr: "пут он", ru: "надевать", pn: "/ˌpʊt ˈɒn/" },
        { e: "🧥", en: "take off", transcr: "тэйк оф", ru: "снимать", pn: "/ˌteɪk ˈɒf/" },
        { e: "⬆️", en: "pick up", transcr: "пик ап", ru: "поднимать, забирать", pn: "/ˌpɪk ˈʌp/" },
        { e: "🟢", en: "turn on", transcr: "тён он", ru: "включать", pn: "/ˌtɜːn ˈɒn/" },
        { e: "🔴", en: "turn off", transcr: "тён оф", ru: "выключать", pn: "/ˌtɜːn ˈɒf/" },
        { e: "✍️", en: "fill in", transcr: "фил ин", ru: "заполнять (форму)", pn: "/ˌfɪl ˈɪn/" },
        { e: "📝", en: "write down", transcr: "райт даун", ru: "записывать", pn: "/ˌraɪt ˈdaʊn/" },
      ],

      dialogue: [
        { s: "w", en: "Tom, do you want me to start now?", transcr: "Том, ду ю уонт ми ту старт нау?", ru: "Том, ты хочешь, чтобы я начал сейчас?" },
        { s: "m", en: "Yes. Put on your gloves and boots.", transcr: "Йес. Пут он ёр главз энд бутс.", ru: "Да. Надень перчатки и ботинки." },
        { s: "w", en: "I will put them on. It is cold today.", transcr: "Ай уил пут зэм он. Ит из коулд тудэй.", ru: "Я их надену. Сегодня холодно." },
        { s: "m", en: "Good. Take off your wet coat, please.", transcr: "Гуд. Тэйк оф ёр уэт коут, плиз.", ru: "Хорошо. Сними мокрое пальто, пожалуйста." },
        { s: "w", en: "I enjoy working here. I do not want to stop.", transcr: "Ай инджой уёкинг хиэ. Ай ду нот уонт ту стоп.", ru: "Мне нравится тут работать. Не хочу останавливаться." },
        { s: "m", en: "Did you manage to finish your work?", transcr: "Дид ю мэнидж ту финиш ёр уёк?", ru: "Ты успел закончить свою работу?" },
        { s: "w", en: "Yes, I managed to pick many boxes.", transcr: "Йес, ай мэниджд ту пик мэни боксиз.", ru: "Да, мне удалось собрать много ящиков." },
        { s: "m", en: "Well done. Now turn on the machine.", transcr: "Уэл дан. Нау тён он зэ мэшин.", ru: "Молодец. Теперь включи машину." },
        { s: "w", en: "I need to fill in this form now.", transcr: "Ай нид ту фил ин зис фом нау.", ru: "Мне нужно сейчас заполнить эту форму." },
        { s: "m", en: "Fill it in and turn it on.", transcr: "Фил ит ин энд тён ит он.", ru: "Заполни её и включи машину." },
        { s: "w", en: "The work is hard. It is not boring.", transcr: "Зэ уёк из хад. Ит из нот боринг.", ru: "Работа тяжёлая. Но не скучная." },
        { s: "m", en: "You are a good worker. I am happy.", transcr: "Ю ар э гуд уёкэ. Ай эм хэпи.", ru: "Ты хороший работник. Я доволен." },
      ],

      quiz: [
        { q: '[COMPLETE] "I want ___ work hard." (хочу работать)', opts: ["to", "working", "work", "for"], c: 0, expl: "want + to + база: I want to work. После want идёт to, не -ing.", hint_ru: "want + to + база." },
        { q: '[COMPLETE] "I enjoy ___ here." (люблю работать)', opts: ["working", "to work", "work to", "to working"], c: 0, expl: "enjoy + -ing: I enjoy working. После enjoy идёт -ing, не to.", hint_ru: "enjoy + -ing." },
        { q: "[CORRECT] «Мне нравится работать на ферме.»", opts: ["I enjoy working on the farm.", "I enjoy to work on the farm.", "I enjoy work on the farm.", "I am enjoy working on the farm."], c: 0, expl: "I enjoy working on the farm. — enjoy + -ing (working). «enjoy to work» неверно.", hint_ru: "enjoy + -ing." },
        { q: "[CORRECT] «Надень их (перчатки).»", opts: ["Put them on.", "Put on them.", "Put they on.", "Put on it."], c: 0, expl: "Put them on. — it / them ставим МЕЖДУ глаголом и частицей. «Put on them» неверно.", hint_ru: "them — в середине." },
        { q: '[COMPLETE] "Turn ___ the machine, please." (включи)', opts: ["on", "off", "up", "in"], c: 0, expl: "turn on — включить. turn off — выключить. Маленькое слово меняет смысл.", hint_ru: "включить = turn on." },
        { q: '[COMPLETE] "I need to ___ in this form." (заполнить)', opts: ["fill", "clean", "check", "pick"], c: 0, expl: "fill in — заполнить форму или бланк. fill in this form / fill it in.", hint_ru: "заполнить = fill in." },
        { q: '[TRANSLATE] "продолжать (делать)"', opts: ["keep", "stop", "finish", "start"], c: 0, expl: "keep + -ing — продолжать делать: keep working. stop — остановиться, finish — закончить.", hint_ru: "keep." },
        { q: '[TRANSLATE] "суметь, справиться"', opts: ["manage", "want", "need", "try"], c: 0, expl: "manage to — суметь, получилось с трудом: I managed to finish. try — пытаться.", hint_ru: "manage to." },
        { q: '[NEGATIVE] "I ___ want to work late." (не хочу)', opts: ["don't", "not", "didn't", "am not"], c: 0, expl: "don't want to — не хочу (настоящее). I don't want to work late.", hint_ru: "don't + want." },
        { q: '[QUESTION] "___ you want to start now?"', opts: ["Do", "Are", "Did", "Does"], c: 0, expl: "Do you want to…? — вопрос в настоящем. Did — прошлое, Are — с -ing.", hint_ru: "Do you want to…?" },
        { q: "[LISTEN] I managed to finish my work.", opts: ["Мне удалось закончить работу.", "Я хочу закончить работу.", "Я не закончил работу.", "Мне нравится моя работа."], c: 0, expl: "I managed to finish my work. — managed to = удалось, получилось закончить.", hint_ru: "" },
        { q: "[GIST] По диалогу: что Том сказал надеть?", opts: ["Перчатки и ботинки.", "Куртку и шапку.", "Только форму.", "Сапоги и плащ."], c: 0, expl: "Том говорит: «Put on your gloves and boots» — перчатки и ботинки.", hint_ru: "Слушай, что Том просит надеть." },
        { q: "[GIST] По диалогу: рабочему скучно на работе?", opts: ["Нет, ему не скучно.", "Да, очень скучно.", "Он хочет уйти домой.", "Он очень устал."], c: 0, expl: "Рабочий говорит: «The work is hard. It is not boring» — не скучно.", hint_ru: "Слушай про работу: скучно или нет." },
        { q: "[BUILD] «Мне нравится работать здесь.»", build: ["I", "enjoy", "working", "here"], expl: "I enjoy working here. — enjoy + -ing (working).", hint_ru: "I enjoy working here." },
        { q: "[BUILD] «Сними их (ботинки).»", build: ["Take", "them", "off"], expl: "Take them off. — it / them ставим МЕЖДУ глаголом и частицей (не «Take off them»).", hint_ru: "Take them off." },
        { q: "[BUILD] «Мне нужно заполнить эту форму.»", build: ["I", "need", "to", "fill", "in", "this", "form"], expl: "I need to fill in this form. — need + to + база; fill in — заполнить.", hint_ru: "I need to fill in this form." },
      ],

      everyday: {
        title_ru: "Горячие глаголы: make / do · speak / talk",
        phrases: [
          { en: "Don't make a mistake.", transcr: "Доунт мэйк э мистэйк.", ru: "Не допусти ошибку. (make a mistake — сделать ошибку)" },
          { en: "I do my job well.", transcr: "Ай ду май джоб уэл.", ru: "Я хорошо делаю свою работу. (do a job — выполнять работу)" },
          { en: "Can I speak to the manager?", transcr: "Кэн ай спик ту зэ мэниджэ?", ru: "Можно поговорить с менеджером? (speak to — обратиться к)" },
          { en: "We talk about work at lunch.", transcr: "Уи ток эбаут уёк эт ланч.", ru: "Мы говорим о работе в обед. (talk about — обсуждать)" },
          { en: "Can you do me a favour?", transcr: "Кэн ю ду ми э фэйвэ?", ru: "Сделаешь мне одолжение? (do a favour)" },
          { en: "I have to make a phone call.", transcr: "Ай хэв ту мэйк э фоун кол.", ru: "Мне нужно позвонить. (make a phone call)" },
        ],
      },
    },

    {
      id: 36,
      title_ru: "Сравнение as…as · сколько (too much / a few) · артикли a/the",
      cefr: "B1 · as…as / not as…as / less than · a few / a little / too much / enough · articles",
      grammar: {
        title_ru: "Сравнение: as heavy as (равны) / not as cold as / less than · сколько: a few / a little / too much / enough · артикли a/the/—",
        intro_ru:
          'Сравниваем размер и количество. <b>as … as</b> — равны; <b>not as … as / less than</b> — меньше:<br>' +
          '❌ Не так: <s>This box is as heavier as that one</s> (в as…as — <b>базовое</b> прилагательное!)<br>' +
          '✅ Так: <b>This box is <u>as heavy as</u> that one.</b> <span class="g-transcr">[зис бокс из эз хэви эз зэт уан]</span> (такой же тяжёлый)<br>' +
          '✅ Так: <b>Today is <u>not as cold as</u> yesterday.</b> <span class="g-transcr">[тудэй из нот эз коулд эз йестэдэй]</span> (не так холодно)<br>' +
          '<b>Сколько:</b> a few (счётные) · a little (несчётные) · a lot of (много) · too much / too many (слишком) · (not) enough ((не) хватает).',
        cultural_ru:
          '📰 <b>Артикли a / the / — </b> (в русском их нет, в английском важны):<br>' +
          '<div style="display:grid;grid-template-columns:auto 1fr;gap:4px 8px">' +
          '<div><b>a / an</b></div><div>один из многих (любой): I am <b>a</b> picker. <span class="g-transcr">[ай эм э пикэ]</span> · There is <b>a</b> tractor near the gate.</div>' +
          '<div><b>the</b></div><div>тот самый, известный: <b>The</b> supervisor is in <b>the</b> field. <span class="g-transcr">[зэ супэвайзэ из ин зэ филд]</span></div>' +
          '<div><b>— (нет)</b></div><div>мн.ч. / несчётное / общее: I go to <b>work</b> by <b>bus</b>. <span class="g-transcr">[ай гоу ту уёк бай бас]</span> · We have <b>lunch</b> in the canteen.</div>' +
          '</div>⚠️ Говорят <b>go to work</b>, <b>by bus</b>, <b>have lunch</b> — без артикля.',
        note_ru:
          '⚠️ В <b>as … as</b> — <b>базовое</b> прилагательное: <b>as heavy as</b> ✅, не <s>as heavier as</s>.<br>' +
          '⚠️ <b>much / too much</b> — для несчётного (work, water); <b>many / too many</b> — для счётного (boxes, crates).<br>' +
          '⚠️ <b>a little</b> — несчётное (a little water); <b>a few</b> — счётное (a few crates).<br>' +
          '⚠️ <b>less</b> — для несчётного (less work); для счётного — <b>fewer</b> (fewer boxes).<br>' +
          '⚠️ <b>enough</b> идёт <b>перед</b> существительным (enough water), но <b>после</b> прилагательного (big enough).',
        visual_ru:
          '<svg viewBox="0 0 340 312" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto" role="img">' +
          '<text x="10" y="14" font-size="11" fill="var(--text2)">Сравнение: равны или меньше?</text>' +
          '<rect x="8" y="20" width="324" height="80" rx="8" fill="none" stroke="#2e7d32" stroke-width="2"/>' +
          '<text x="16" y="38" font-size="11" font-weight="bold" fill="#2e7d32">равны: as … as</text>' +
          '<rect x="40" y="46" width="40" height="34" rx="3" fill="none" stroke="var(--text2)" stroke-width="1.5"/>' +
          '<text x="90" y="69" font-size="16" fill="#2e7d32">=</text>' +
          '<rect x="108" y="46" width="40" height="34" rx="3" fill="none" stroke="var(--text2)" stroke-width="1.5"/>' +
          '<text x="165" y="60" font-size="10" fill="var(--text)">This box is</text>' +
          '<text x="165" y="74" font-size="10" fill="var(--text)">as heavy as that one.</text>' +
          '<text x="16" y="94" font-size="9" fill="var(--text2)">базовое прилагательное: as heavy as (не heavier)</text>' +
          '<rect x="8" y="106" width="324" height="76" rx="8" fill="none" stroke="#c62828" stroke-width="2"/>' +
          '<text x="16" y="124" font-size="11" font-weight="bold" fill="#c62828">меньше: not as … as · less than</text>' +
          '<rect x="40" y="132" width="40" height="20" rx="3" fill="none" stroke="var(--text2)" stroke-width="1.5"/>' +
          '<text x="92" y="150" font-size="16" fill="#c62828">‹</text>' +
          '<rect x="108" y="132" width="40" height="34" rx="3" fill="none" stroke="var(--text2)" stroke-width="1.5"/>' +
          '<text x="165" y="146" font-size="10" fill="var(--text)">Today is not as</text>' +
          '<text x="165" y="160" font-size="10" fill="var(--text)">cold as yesterday.</text>' +
          '<text x="16" y="178" font-size="9" fill="var(--text2)">not as … as / less than = меньше</text>' +
          '<text x="10" y="200" font-size="11" font-weight="bold" fill="var(--text2)">Сколько?</text>' +
          '<text x="14" y="218" font-size="10" fill="#2e7d32">a little / a few — немного</text>' +
          '<text x="14" y="234" font-size="10" fill="var(--text)">a lot of — много</text>' +
          '<text x="14" y="250" font-size="10" fill="#e65100">too much / too many — слишком много</text>' +
          '<text x="14" y="266" font-size="10" fill="#1565c0">(not) enough — (не) хватает</text>' +
          '<text x="10" y="288" font-size="9" fill="var(--text2)">счёт: a few · too many · How many → boxes</text>' +
          '<text x="10" y="302" font-size="9" fill="var(--text2)">несчёт: a little · too much · How much → work</text>' +
          '</svg>',
        forms: {
          positive: {
            label_ru: "✅ равны и сколько: as … as · a lot of / a few / a little",
            rule_ru:
              '<b>as + прилагательное + as</b> = равны; <b>a lot of</b> = много; <b>a few</b> (счётные) / <b>a little</b> (несчётные):<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>This box is <b>as heavy as</b> that one.</div><div>такой же тяжёлый</div>' +
              '<div>There is <b>a lot of</b> work today.</div><div>сегодня много работы</div>' +
              '<div>I need <b>a few</b> more crates.</div><div>ещё несколько ящиков</div>' +
              '<div>There is <b>a little</b> water here.</div><div>немного воды</div>' +
              '</div>',
            table: [
              { subj: "равны", verb: "as + heavy + as", example: "This box is as heavy as that one.", transcr: "Зис бокс из эз хэви эз зэт уан.", tr_ru: "Этот ящик такой же тяжёлый, как тот." },
              { subj: "много", verb: "a lot of + work", example: "There is a lot of work today.", transcr: "Зэа из э лот ов уёк тудэй.", tr_ru: "Сегодня много работы." },
              { subj: "немного (счёт)", verb: "a few + crates", example: "I need a few more crates.", transcr: "Ай нид э фью мо крэйтс.", tr_ru: "Мне нужно ещё несколько ящиков." },
              { subj: "немного (несчёт)", verb: "a little + water", example: "There is a little water here.", transcr: "Зэа из э литл уотэ хиэ.", tr_ru: "Здесь немного воды." },
            ],
          },
          negative: {
            label_ru: "❌ меньше: not as … as · less than · too much/many · not enough",
            rule_ru:
              '<b>not as … as / less than</b> = меньше; <b>too much/many</b> = слишком; <b>not enough</b> = не хватает:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div>Today is <b>not as cold as</b> yesterday.</div><div>не так холодно, как вчера</div>' +
              '<div>There is <b>less</b> work <b>than</b> yesterday.</div><div>работы меньше, чем вчера</div>' +
              '<div>I have <b>too much</b> work this week.</div><div>слишком много работы</div>' +
              '<div>We do not have <b>enough</b> crates.</div><div>не хватает ящиков</div>' +
              '</div>',
            table: [
              { subj: "не так… как", verb: "not as + cold + as", example: "Today is not as cold as yesterday.", transcr: "Тудэй из нот эз коулд эз йестэдэй.", tr_ru: "Сегодня не так холодно, как вчера." },
              { subj: "меньше, чем", verb: "less + work + than", example: "There is less work than yesterday.", transcr: "Зэа из лес уёк зэн йестэдэй.", tr_ru: "Работы меньше, чем вчера." },
              { subj: "слишком (несчёт)", verb: "too much + work", example: "I have too much work this week.", transcr: "Ай хэв ту мач уёк зис уик.", tr_ru: "На этой неделе у меня слишком много работы." },
              { subj: "слишком (счёт)", verb: "too many + boxes", example: "There are too many boxes to carry.", transcr: "Зэа а ту мэни боксиз ту кэри.", tr_ru: "Слишком много ящиков, чтобы их нести." },
              { subj: "не хватает", verb: "not + enough + crates", example: "We do not have enough crates.", transcr: "Уи ду нот хэв инаф крэйтс.", tr_ru: "Нам не хватает ящиков." },
            ],
          },
          question: {
            label_ru: "❓ How much / How many …? · Is there enough …?",
            rule_ru:
              '<b>How much</b> (несчётное) / <b>How many</b> (счётное) …?; <b>Is there enough …?</b>:<br>' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">' +
              '<div><b>How much</b> work is there?</div><div>сколько работы?</div>' +
              '<div><b>How many</b> boxes did you pack?</div><div>сколько ящиков?</div>' +
              '<div><b>Is there enough</b> water?</div><div>хватает ли воды?</div>' +
              '</div>',
            table: [
              { subj: "сколько? (несчёт)", verb: "How much + work?", example: "How much work is there today?", transcr: "Хау мач уёк из зэа тудэй?", tr_ru: "Сколько сегодня работы?" },
              { subj: "сколько? (счёт)", verb: "How many + boxes?", example: "How many boxes did you pack?", transcr: "Хау мэни боксиз дид ю пэк?", tr_ru: "Сколько ящиков ты упаковал?" },
              { subj: "хватает?", verb: "Is there enough…?", example: "Is there enough water for everyone?", transcr: "Из зэа инаф уотэ фо эвриуан?", tr_ru: "Хватает ли воды на всех?" },
              { subj: "так же…?", verb: "Is it as … as…?", example: "Is this box as heavy as that one?", transcr: "Из зис бокс эз хэви эз зэт уан?", tr_ru: "Этот ящик такой же тяжёлый, как тот?" },
            ],
          },
        },
        examples: [
          { en: "This box is as heavy as that one.", transcr: "Зис бокс из эз хэви эз зэт уан.", ru: "Этот ящик такой же тяжёлый, как тот." },
          { en: "Today is not as cold as yesterday.", transcr: "Тудэй из нот эз коулд эз йестэдэй.", ru: "Сегодня не так холодно, как вчера." },
          { en: "This sack is heavier than that basket.", transcr: "Зис сэк из хэвиэ зэн зэт баскит.", ru: "Этот мешок тяжелее той корзины." },
          { en: "There is less work than yesterday.", transcr: "Зэа из лес уёк зэн йестэдэй.", ru: "Работы меньше, чем вчера." },
          { en: "I packed a lot of boxes today.", transcr: "Ай пэкт э лот ов боксиз тудэй.", ru: "Сегодня я упаковал много ящиков." },
          { en: "I need a few more crates.", transcr: "Ай нид э фью мо крэйтс.", ru: "Мне нужно ещё несколько ящиков." },
          { en: "There is a little water here.", transcr: "Зэа из э литл уотэ хиэ.", ru: "Здесь немного воды." },
          { en: "I have too much work this week.", transcr: "Ай хэв ту мач уёк зис уик.", ru: "На этой неделе у меня слишком много работы." },
          { en: "There are too many boxes to carry.", transcr: "Зэа а ту мэни боксиз ту кэри.", ru: "Слишком много ящиков, чтобы их нести." },
          { en: "We do not have enough crates.", transcr: "Уи ду нот хэв инаф крэйтс.", ru: "Нам не хватает ящиков." },
          { en: "Is there enough water for everyone?", transcr: "Из зэа инаф уотэ фо эвриуан?", ru: "Хватает ли воды на всех?" },
          { en: "The two boxes are exactly the same size.", transcr: "Зэ ту боксиз а игзэктли зэ сэйм сайз.", ru: "Эти два ящика точно одного размера." },
          { en: "We have the same amount of work as yesterday.", transcr: "Уи хэв зэ сэйм эмаунт ов уёк эз йестэдэй.", ru: "У нас столько же работы, сколько вчера." },
          { en: "This box and that box have the same weight.", transcr: "Зис бокс энд зэт бокс хэв зэ сэйм уэйт.", ru: "Этот ящик и тот ящик одного веса." },
          { en: "I packed a dozen eggs this morning.", transcr: "Ай пэкт э дазэн эгз зис монинг.", ru: "Утром я упаковал дюжину яиц." },
          { en: "I picked a bunch of grapes.", transcr: "Ай пикт э банч ов грэйпс.", ru: "Я сорвал гроздь винограда." },
          { en: "I need a new pair of gloves.", transcr: "Ай нид э нью пэа ов главз.", ru: "Мне нужна новая пара перчаток." },
          { en: "Can you measure this box for me?", transcr: "Кэн ю межэ зис бокс фо ми?", ru: "Можешь измерить мне этот ящик?" },
          { en: "We have plenty of crates today.", transcr: "Уи хэв пленти ов крэйтс тудэй.", ru: "Сегодня у нас полно ящиков." },
          { en: "The carrots are fresh, not rotten.", transcr: "Зэ кэрэтс а фрэш, нот ротн.", ru: "Морковь свежая, не гнилая." },
          { en: "There is a pile of empty crates here.", transcr: "Зэа из э пайл ов эмпти крэйтс хиэ.", ru: "Здесь куча пустых ящиков." },
          { en: "The basket is almost full.", transcr: "Зэ баскит из олмоуст фул.", ru: "Корзина почти полная." },
        ],
        simple_ru: {
          formula:
            '<b>as + прилаг. + as</b> = равны (as heavy as). <b>not as … as / less than</b> = меньше. ' +
            'Сколько: <b>a few</b> (счётные: crates) · <b>a little</b> (несчётные: water) · <b>too much / too many</b> (слишком) · <b>(not) enough</b> ((не) хватает).',
          examples: [
            { en: "It is as cold as yesterday.", transcr: "Ит из эз коулд эз йестэдэй.", ru: "Так же холодно, как вчера (as…as = равны)." },
            { en: "I need a few more crates.", transcr: "Ай нид э фью мо крэйтс.", ru: "Несколько ящиков (a few — счётные)." },
            { en: "There is too much work.", transcr: "Зэа из ту мач уёк.", ru: "Слишком много работы (too much — несчётное)." },
          ],
        },
        ytQuery: "as as comparison not as as less than too much too many a few a little enough articles a the zero for beginners ESL",
      },

      glossary: [
        { en: "almost", transcr: "олмоуст", ru: "почти", pn: "/ˈɔːlməʊst/" },
        { en: "exactly", transcr: "игзэктли", ru: "точно, ровно", pn: "/ɪɡˈzæktli/" },
      ],

      words: [
        { e: "⚖️", en: "weight", transcr: "уэйт", ru: "вес", pn: "/weɪt/" },
        { e: "📏", en: "size", transcr: "сайз", ru: "размер", pn: "/saɪz/" },
        { e: "🔢", en: "amount", transcr: "эмаунт", ru: "количество", pn: "/əˈmaʊnt/" },
        { e: "📚", en: "pile", transcr: "пайл", ru: "куча, стопка", pn: "/paɪl/" },
        { e: "🍇", en: "bunch", transcr: "банч", ru: "пучок, гроздь", pn: "/bʌntʃ/" },
        { e: "🧤", en: "pair", transcr: "пэа", ru: "пара", pn: "/peə/" },
        { e: "🥚", en: "dozen", transcr: "дазэн", ru: "дюжина (12)", pn: "/ˈdʌzən/" },
        { e: "🛍️", en: "sack", transcr: "сэк", ru: "мешок", pn: "/sæk/" },
        { e: "🧺", en: "basket", transcr: "баскит", ru: "корзина", pn: "/ˈbɑːskɪt/" },
        { e: "➕", en: "plenty", transcr: "пленти", ru: "много, вдоволь", pn: "/ˈplenti/" },
        { e: "🤢", en: "rotten", transcr: "ротн", ru: "гнилой", pn: "/ˈrɒtn/" },
        { e: "🌿", en: "fresh", transcr: "фрэш", ru: "свежий", pn: "/freʃ/" },
        { e: "📐", en: "measure", transcr: "межэ", ru: "измерять, мерить", pn: "/ˈmeʒə/" },
      ],

      dialogue: [
        { s: "w", en: "Tom, there is a lot of work today.", transcr: "Том, зэа из э лот ов уёк тудэй.", ru: "Том, сегодня много работы." },
        { s: "m", en: "Yes. It is not as cold as yesterday.", transcr: "Йес. Ит из нот эз коулд эз йестэдэй.", ru: "Да. Не так холодно, как вчера." },
        { s: "w", en: "This box is as heavy as a sack of carrots.", transcr: "Зис бокс из эз хэви эз э сэк ов кэрэтс.", ru: "Этот ящик тяжёлый, как мешок моркови." },
        { s: "m", en: "Be careful. There are too many boxes here.", transcr: "Би кэафул. Зэа а ту мэни боксиз хиэ.", ru: "Осторожно. Здесь слишком много ящиков." },
        { s: "w", en: "I need a few more crates, please.", transcr: "Ай нид э фью мо крэйтс, плиз.", ru: "Мне нужно ещё несколько ящиков, пожалуйста." },
        { s: "m", en: "Here. We have plenty of crates today.", transcr: "Хиэ. Уи хэв пленти ов крэйтс тудэй.", ru: "Вот. Сегодня у нас полно ящиков." },
        { s: "w", en: "How many boxes did you pack this morning?", transcr: "Хау мэни боксиз дид ю пэк зис монинг?", ru: "Сколько ящиков ты упаковал утром?" },
        { s: "m", en: "A dozen. We have too much work now.", transcr: "Э дазэн. Уи хэв ту мач уёк нау.", ru: "Дюжину. У нас сейчас слишком много работы." },
        { s: "w", en: "There is less work than yesterday, I think.", transcr: "Зэа из лес уёк зэн йестэдэй, ай синк.", ru: "Работы меньше, чем вчера, я думаю." },
        { s: "m", en: "We do not have enough time today.", transcr: "Уи ду нот хэв инаф тайм тудэй.", ru: "У нас не хватает времени сегодня." },
        { s: "w", en: "What a long day! It is so cold now.", transcr: "Уот э лонг дэй! Ит из соу коулд нау.", ru: "Какой длинный день! Сейчас так холодно." },
        { s: "m", en: "Well done. You are a good worker.", transcr: "Уэл дан. Ю а э гуд уёкэ.", ru: "Молодец. Ты хороший работник." },
      ],

      quiz: [
        { q: "[CORRECT] «Этот ящик такой же тяжёлый, как тот.»", opts: ["This box is as heavy as that one.", "This box is as heavier as that one.", "This box is as heavy than that one.", "This box is so heavy as that one."], c: 0, expl: "This box is as heavy as that one. — as + БАЗОВОЕ прилагательное + as (не «as heavier as»). Это значит «равны».", hint_ru: "as + heavy + as (равны)." },
        { q: '[COMPLETE] "I have too ___ work this week." (несчётное)', opts: ["much", "many", "few", "little"], c: 0, expl: "too much + несчётное (work): too much work. too many — для счётных (boxes).", hint_ru: "work — несчётное → much." },
        { q: '[COMPLETE] "There are too ___ boxes to carry." (счётные)', opts: ["many", "much", "little", "less"], c: 0, expl: "too many + счётные (boxes): too many boxes. too much — для несчётных (work).", hint_ru: "boxes — счётные → many." },
        { q: '[COMPLETE] "I need a ___ more crates." (несколько, счётные)', opts: ["few", "little", "much", "lot"], c: 0, expl: "a few + счётные (crates): a few crates. a little — для несчётных (water).", hint_ru: "crates — счётные → a few." },
        { q: '[COMPLETE] "There is a ___ water here." (немного, несчётное)', opts: ["little", "few", "many", "lot"], c: 0, expl: "a little + несчётное (water): a little water. a few — для счётных (crates).", hint_ru: "water — несчётное → a little." },
        { q: "[CORRECT] «У нас не хватает ящиков.»", opts: ["We do not have enough crates.", "We do not have crates enough.", "We do not have too crates.", "We do not have many enough crates."], c: 0, expl: "We do not have enough crates. — enough идёт ПЕРЕД существительным: enough crates.", hint_ru: "enough + crates." },
        { q: "[CORRECT] «Сегодня работы меньше, чем вчера.»", opts: ["There is less work than yesterday.", "There is less work as yesterday.", "There is too much work than yesterday.", "There is a little work than yesterday."], c: 0, expl: "There is less work than yesterday. — less + несчётное + than. Сравниваем количество: меньше, чем.", hint_ru: "less … than." },
        { q: '[QUESTION] "___ much work is there today?"', opts: ["How", "What", "Are", "Do"], c: 0, expl: "How much work…? — спрашиваем количество несчётного (work). How many — для счётных.", hint_ru: "How much + несчётное." },
        { q: '[QUESTION] "___ many boxes did you pack?"', opts: ["How", "What", "Did", "Are"], c: 0, expl: "How many boxes…? — количество счётного (boxes). How much — для несчётного.", hint_ru: "How many + счётное." },
        { q: '[COMPLETE] "Is there ___ water for everyone?" (хватает)', opts: ["enough", "too", "less", "many"], c: 0, expl: "enough water — достаточно воды. enough = хватает, всё необходимое.", hint_ru: "enough = хватает." },
        { q: '[TRANSLATE] "мешок"', opts: ["sack", "basket", "pile", "bunch"], c: 0, expl: "sack — мешок (a sack of carrots). basket — корзина.", hint_ru: "sack." },
        { q: '[TRANSLATE] "измерять"', opts: ["measure", "weigh", "carry", "fill"], c: 0, expl: "measure — измерять, мерить (measure the box). weigh — взвешивать.", hint_ru: "measure." },
        { q: "[LISTEN] This sack is as heavy as that one.", opts: ["Этот мешок такой же тяжёлый, как тот.", "Этот мешок тяжелее того.", "Этот мешок не такой тяжёлый.", "Этот мешок лёгкий."], c: 0, expl: "This sack is as heavy as that one. — as heavy as = такой же тяжёлый (равны).", hint_ru: "" },
        { q: "[GIST] По диалогу: сегодня холоднее, чем вчера?", opts: ["Нет, не так холодно, как вчера.", "Да, холоднее, чем вчера.", "Да, идёт снег.", "Очень жарко."], c: 0, expl: "Том говорит: «It is not as cold as yesterday» — сегодня НЕ так холодно, как вчера.", hint_ru: "Слушай, что Том сказал про холод." },
        { q: "[BUILD] «Так же холодно, как вчера.»", build: ["It", "is", "as", "cold", "as", "yesterday"], expl: "It is as cold as yesterday. — as + прилагательное + as = равны (такой же).", hint_ru: "It is as cold as yesterday." },
        { q: "[BUILD] «У нас слишком много работы.»", build: ["We", "have", "too", "much", "work"], expl: "We have too much work. — too much + несчётное (work) = слишком много.", hint_ru: "We have too much work." },
        { q: "[BUILD] «Мне нужно ещё несколько ящиков.»", build: ["I", "need", "a", "few", "more", "crates"], expl: "I need a few more crates. — a few + счётные (crates).", hint_ru: "I need a few more crates." },
      ],

      everyday: {
        title_ru: "Восклицания: so / such · What a…!",
        phrases: [
          { en: "It is so cold today!", transcr: "Ит из соу коулд тудэй!", ru: "Так холодно сегодня! (so + прилагательное)" },
          { en: "This box is so heavy!", transcr: "Зис бокс из соу хэви!", ru: "Этот ящик такой тяжёлый! (so + прилагательное)" },
          { en: "What a long day!", transcr: "Уот э лонг дэй!", ru: "Какой длинный день! (What a + прилаг. + сущ.)" },
          { en: "It is such hard work!", transcr: "Ит из сач хад уёк!", ru: "Какая тяжёлая работа! (such + несчётное, без a)" },
          { en: "You are such a good worker!", transcr: "Ю а сач э гуд уёкэ!", ru: "Ты такой хороший работник! (such a + прилаг. + сущ.)" },
        ],
      },
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = LESSONS;
  else root.LESSONS = LESSONS;
})(typeof window !== "undefined" ? window : globalThis);
