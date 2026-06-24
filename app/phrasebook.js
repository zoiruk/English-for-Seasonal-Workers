/*
 * Survival phrasebook for "English for Seasonal Workers" (RU-only, A0-A1).
 * A REFERENCE screen (not a graded lesson): fixed memorized chunks, NOT bound by
 * the snowball vocabulary rule. Plain JS, file://-safe; dual export like data.js.
 *
 * Schema: window.PHRASEBOOK = [ { cat, icon, title_ru, phrases:[{en,transcr,ru}] } ]
 *
 * NOTE: high-responsibility categories (health / sos / documents) are authored
 * conservatively (standard, safe, verbatim phrases only — no medical/legal advice,
 * no visa/earnings claims; UK emergency number 999). They still owe an adversarial
 * safety-verification pass (see plans/) before being treated as "golden".
 */
(function (root) {
  const PHRASEBOOK = [
    {
      cat: "understand",
      icon: "🤔",
      title_ru: "«Не понимаю» — общение",
      phrases: [
        { en: "I don't understand.", transcr: "Ай доунт андэстэнд.", ru: "Я не понимаю." },
        { en: "Could you repeat that?", transcr: "Куд ю рипит зэт?", ru: "Повторите, пожалуйста." },
        { en: "Slowly, please.", transcr: "Слоули, плиз.", ru: "Медленнее, пожалуйста." },
        { en: "I speak a little English.", transcr: "Ай спик э литл инглиш.", ru: "Я немного говорю по-английски." },
        { en: "Do you speak Russian?", transcr: "Ду ю спик рашэн?", ru: "Вы говорите по-русски?" },
        { en: "Please write it down.", transcr: "Плиз райт ит даун.", ru: "Запишите, пожалуйста." },
        { en: "What does this mean?", transcr: "Уот даз зис мин?", ru: "Что это значит?" },
        { en: "Can you show me?", transcr: "Кэн ю шоу ми?", ru: "Можете показать?" },
        { en: "One moment, please.", transcr: "Уан моумэнт, плиз.", ru: "Одну минуту, пожалуйста." },
        { en: "How do you spell it?", transcr: "Хау ду ю спэл ит?", ru: "Как это пишется по буквам?" },
        { en: "I don't know.", transcr: "Ай доунт ноу.", ru: "Я не знаю." },
      ],
    },
    {
      cat: "work",
      icon: "🚜",
      title_ru: "На работе",
      phrases: [
        { en: "What time do we start?", transcr: "Уот тайм ду уи старт?", ru: "Во сколько начинаем?" },
        { en: "When is the break?", transcr: "Уэн из зэ брэйк?", ru: "Когда перерыв?" },
        { en: "I've finished.", transcr: "Айв финишт.", ru: "Готово." },
        { en: "Where do I put this?", transcr: "Уэа ду ай пут зис?", ru: "Куда это положить?" },
        { en: "Is this OK?", transcr: "Из зис окэй?", ru: "Так нормально?" },
        { en: "I need gloves.", transcr: "Ай нид главз.", ru: "Мне нужны перчатки." },
        { en: "Can you help me, please?", transcr: "Кэн ю хэлп ми, плиз?", ru: "Помогите мне, пожалуйста." },
        { en: "How many crates?", transcr: "Хау мэни крэйтс?", ru: "Сколько ящиков?" },
        { en: "Where is the supervisor?", transcr: "Уэа из зэ супэвайзэ?", ru: "Где бригадир?" },
        { en: "I can't come to work today.", transcr: "Ай кант кам ту вёк тудэй.", ru: "Я не могу выйти на работу сегодня." },
      ],
    },
    {
      cat: "shop",
      icon: "🛒",
      title_ru: "Магазин и деньги",
      phrases: [
        { en: "How much is it?", transcr: "Хау мач из ит?", ru: "Сколько это стоит?" },
        { en: "That's too expensive.", transcr: "Зэтс ту икспэнсив.", ru: "Это слишком дорого." },
        { en: "Can I pay by card?", transcr: "Кэн ай пэй бай кард?", ru: "Можно оплатить картой?" },
        { en: "Do you have a bag?", transcr: "Ду ю хэв э бэг?", ru: "У вас есть пакет?" },
        { en: "Where is the milk?", transcr: "Уэа из зэ милк?", ru: "Где молоко?" },
        { en: "I would like this, please.", transcr: "Ай вуд лайк зис, плиз.", ru: "Мне это, пожалуйста." },
        { en: "Can I have a receipt?", transcr: "Кэн ай хэв э рисит?", ru: "Можно чек?" },
        { en: "Where is the till?", transcr: "Уэа из зэ тил?", ru: "Где касса?" },
        { en: "Have you got change?", transcr: "Хэв ю гот чейндж?", ru: "У вас есть сдача?" },
        { en: "Just looking, thank you.", transcr: "Джаст лукинг, сэнк ю.", ru: "Просто смотрю, спасибо." },
      ],
    },
    {
      cat: "health",
      icon: "🏥",
      title_ru: "Здоровье и аптека",
      phrases: [
        { en: "I need a doctor.", transcr: "Ай нид э доктэ.", ru: "Мне нужен врач." },
        { en: "I don't feel well.", transcr: "Ай доунт фил уэл.", ru: "Мне нехорошо / плохо." },
        { en: "I feel sick.", transcr: "Ай фил сик.", ru: "Меня тошнит." },
        { en: "It hurts here.", transcr: "Ит хётс хиэ.", ru: "У меня здесь болит." },
        { en: "I need to go to a pharmacy.", transcr: "Ай нид ту гоу ту э фамэси.", ru: "Мне нужно в аптеку." },
        { en: "Where is the chemist?", transcr: "Уэа из зэ кэмист?", ru: "Где аптека?" },
        { en: "I am ill. I can't work today.", transcr: "Ай эм ил. Ай кант вёк тудэй.", ru: "Я болен. Не могу работать сегодня." },
        { en: "My back hurts.", transcr: "Май бэк хётс.", ru: "У меня болит спина." },
        { en: "I have a temperature.", transcr: "Ай хэв э тэмпричэ.", ru: "У меня жар (высокая температура)." },
        { en: "I feel dizzy.", transcr: "Ай фил дизи.", ru: "У меня кружится голова." },
        { en: "I need to see a doctor.", transcr: "Ай нид ту си э доктэ.", ru: "Мне нужно к врачу." },
      ],
    },
    {
      cat: "documents",
      icon: "📋",
      title_ru: "Документы",
      phrases: [
        { en: "This is my passport.", transcr: "Зис из май паспорт.", ru: "Это мой паспорт." },
        { en: "Here is my visa.", transcr: "Хиэ из май визэ.", ru: "Вот моя виза." },
        { en: "I don't have it with me.", transcr: "Ай доунт хэв ит уиз ми.", ru: "У меня нет его с собой." },
        { en: "Can you help me with this form?", transcr: "Кэн ю хэлп ми уиз зис форм?", ru: "Поможете мне с этой формой?" },
        { en: "I don't understand this form.", transcr: "Ай доунт андэстэнд зис форм.", ru: "Я не понимаю эту форму." },
        { en: "Where do I sign?", transcr: "Уэа ду ай сайн?", ru: "Где расписаться?" },
        { en: "Can I have a copy?", transcr: "Кэн ай хэв э копи?", ru: "Можно копию?" },
        { en: "I need a National Insurance number. Can you help me?", transcr: "Ай нид э нэшэнл иншуэрэнс намбэ. Кэн ю хэлп ми?", ru: "Мне нужен номер National Insurance. Поможете?" },
        { en: "I need help, please.", transcr: "Ай нид хэлп, плиз.", ru: "Мне нужна помощь, пожалуйста." },
        { en: "Slowly, please. I don't understand.", transcr: "Слоули, плиз. Ай доунт андэстэнд.", ru: "Медленнее, пожалуйста. Я не понимаю." },
      ],
    },
    {
      cat: "sos",
      icon: "🆘",
      title_ru: "Срочно: помощь (SOS)",
      phrases: [
        { en: "Help!", transcr: "Хэлп!", ru: "Помогите!" },
        { en: "Call 999!", transcr: "Кол найн-найн-найн!", ru: "Звоните 999! (экстренный номер в Британии)" },
        { en: "Call the police!", transcr: "Кол зэ полис!", ru: "Вызовите полицию!" },
        { en: "Call an ambulance!", transcr: "Кол эн эмбьюлэнс!", ru: "Вызовите скорую!" },
        { en: "Fire!", transcr: "Файэ!", ru: "Пожар!" },
        { en: "There's been an accident!", transcr: "Зэаз бин эн эксидэнт!", ru: "Произошёл несчастный случай." },
        { en: "I need help now.", transcr: "Ай нид хэлп нау.", ru: "Мне срочно нужна помощь." },
        { en: "Someone is hurt.", transcr: "Самван из хёт.", ru: "Человек пострадал." },
        { en: "Please help me.", transcr: "Плиз хэлп ми.", ru: "Пожалуйста, помогите мне." },
        { en: "Stop!", transcr: "Стоп!", ru: "Стоп! / Стойте!" },
      ],
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = PHRASEBOOK;
  else root.PHRASEBOOK = PHRASEBOOK;
})(typeof window !== "undefined" ? window : globalThis);
