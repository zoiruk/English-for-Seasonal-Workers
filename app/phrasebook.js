/*
 * Survival phrasebook for "English for Seasonal Workers" (RU-only, A0-A2).
 * A REFERENCE screen (not a graded lesson): fixed memorized chunks, NOT bound by
 * the snowball vocabulary rule. Plain JS, file://-safe; dual export like data.js.
 *
 * Schema: window.PHRASEBOOK = [ { cat, icon, title_ru, phrases:[{en,transcr,ru}] } ]
 *
 * NOTE: high-responsibility categories (health / sos / documents / banking / wages /
 * agency) are authored conservatively (standard, safe, verbatim phrases only — no
 * medical/legal advice, no visa/earnings claims; UK emergency number 999). They still
 * owe an adversarial safety-verification pass (see plans/) before being treated as "golden".
 * A2 categories (banking / wages / agency, 2026-06-24) reuse A2 admin/banking vocabulary;
 * transcr matches the canonical lesson words[] (checked by check-transcr-consistency).
 * B1 categories (phone / complaint / smalltalk / appointment, 2026-06-27) are functional
 * "survival English" chunks anchored to EF "Practical English: On the phone" / Headway
 * "Everyday English" / Headway-EF "At the doctor's" + NHS/ACAS (neutral, no medical/legal
 * advice, no diagnosis; 999/111 only inside a RU gloss). transcr matches canonical words[].
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
    {
      cat: "banking",
      icon: "🏦",
      title_ru: "Банк и карта",
      phrases: [
        { en: "I want to open a bank account.", transcr: "Ай уонт ту оупэн э бэнк экаунт.", ru: "Я хочу открыть счёт в банке." },
        { en: "Here is my passport.", transcr: "Хиэ из май паспорт.", ru: "Вот мой паспорт." },
        { en: "Here is my address.", transcr: "Хиэ из май эдрэс.", ru: "Вот мой адрес." },
        { en: "My card does not work.", transcr: "Май кад даз нот уёк.", ru: "Моя карта не работает." },
        { en: "I forgot my PIN.", transcr: "Ай фэгот май пин.", ru: "Я забыл PIN-код." },
        { en: "What is my balance?", transcr: "Уот из май бэлэнс?", ru: "Какой у меня баланс?" },
        { en: "Where is the cash machine?", transcr: "Уэа из зэ кэш мэшин?", ru: "Где банкомат?" },
        { en: "Can I have a new card, please?", transcr: "Кэн ай хэв э нью кад, плиз?", ru: "Можно новую карту, пожалуйста?" },
      ],
    },
    {
      cat: "wages",
      icon: "💷",
      title_ru: "Зарплата и оплата",
      phrases: [
        { en: "When do I get paid?", transcr: "Уэн ду ай гет пэйд?", ru: "Когда мне заплатят?" },
        { en: "I have not been paid yet.", transcr: "Ай хэв нот бин пэйд йет.", ru: "Мне ещё не заплатили." },
        { en: "Can I see my payslip?", transcr: "Кэн ай си май пэйслип?", ru: "Можно посмотреть расчётный лист?" },
        { en: "How many hours did I work?", transcr: "Хау мэни ауэз дид ай уёк?", ru: "Сколько часов я отработал?" },
        { en: "I think there is a mistake in my pay.", transcr: "Ай синк зэа из э мистэйк ин май пэй.", ru: "Кажется, в моей оплате ошибка." },
        { en: "Is this before or after tax?", transcr: "Из зис бифо о афтэ тэкс?", ru: "Это до или после налога?" },
        { en: "I worked overtime.", transcr: "Ай уёкт оувэтайм.", ru: "Я работал сверхурочно." },
      ],
    },
    {
      cat: "agency",
      icon: "📋",
      title_ru: "Агентство и смены",
      phrases: [
        { en: "Can I change my shift?", transcr: "Кэн ай чейндж май шифт?", ru: "Можно поменять смену?" },
        { en: "I can work more hours.", transcr: "Ай кэн уёк мо ауэз.", ru: "Я могу работать больше часов." },
        { en: "I cannot work tomorrow.", transcr: "Ай кэнот уёк тэмороу.", ru: "Я не могу работать завтра." },
        { en: "I need a day off.", transcr: "Ай нид э дэй оф.", ru: "Мне нужен выходной." },
        { en: "Can I see the rota?", transcr: "Кэн ай си зэ роутэ?", ru: "Можно посмотреть расписание смен?" },
        { en: "Who is my manager?", transcr: "Ху из май мэниджэ?", ru: "Кто мой менеджер?" },
        { en: "I have a problem in the camp.", transcr: "Ай хэв э проблэм ин зэ кэмп.", ru: "У меня проблема в кэмпе." },
        { en: "Can you help me, please?", transcr: "Кэн ю хэлп ми, плиз?", ru: "Помогите, пожалуйста." },
      ],
    },
    {
      cat: "phone",
      icon: "📞",
      title_ru: "На телефоне",
      phrases: [
        { en: "Hello, this is Ahmad.", transcr: "Хэлоу, зис из Ахмад.", ru: "Здравствуйте, это Ахмад." },
        { en: "Can I speak to the manager?", transcr: "Кэн ай спик ту зэ мэниджэ?", ru: "Можно поговорить с менеджером?" },
        { en: "I'd like to book an appointment.", transcr: "Айд лайк ту бук эн эпойнтмэнт.", ru: "Я хочу записаться на приём." },
        { en: "Can you call me back?", transcr: "Кэн ю кол ми бэк?", ru: "Можете перезвонить мне?" },
        { en: "I'll call back later.", transcr: "Айл кол бэк лэйтэ.", ru: "Я перезвоню позже." },
        { en: "Can I leave a message?", transcr: "Кэн ай лив э мэсидж?", ru: "Можно оставить сообщение?" },
        { en: "Sorry, wrong number.", transcr: "Сори, ронг намбэ.", ru: "Извините, неправильный номер." },
        { en: "Could you spell that?", transcr: "Куд ю спэл зэт?", ru: "Можете продиктовать по буквам?" },
        { en: "Can you hear me?", transcr: "Кэн ю хиэ ми?", ru: "Вы меня слышите?" },
      ],
    },
    {
      cat: "complaint",
      icon: "⚠️",
      title_ru: "Жалоба и проблема",
      phrases: [
        { en: "There's a problem with my room.", transcr: "Зэаз э проблэм уиз май рум.", ru: "Есть проблема с комнатой." },
        { en: "It's not working.", transcr: "Итс нот уёкинг.", ru: "Не работает." },
        { en: "I'd like to complain.", transcr: "Айд лайк ту кэмплэйн.", ru: "Я хочу пожаловаться." },
        { en: "This isn't right.", transcr: "Зис изнт райт.", ru: "Это неправильно." },
        { en: "Can you fix it, please?", transcr: "Кэн ю фикс ит, плиз?", ru: "Можете починить, пожалуйста?" },
        { en: "I've already told the manager.", transcr: "Айв олрэди толд зэ мэниджэ.", ru: "Я уже сказал менеджеру." },
        { en: "Can we sort this out, please?", transcr: "Кэн уи сорт зис аут, плиз?", ru: "Можем это уладить, пожалуйста?" },
        { en: "Thank you for your help.", transcr: "Сэнк ю фо ё хэлп.", ru: "Спасибо за помощь." },
      ],
    },
    {
      cat: "smalltalk",
      icon: "💬",
      title_ru: "Светская беседа",
      phrases: [
        { en: "How's it going?", transcr: "Хауз ит гоуинг?", ru: "Как дела?" },
        { en: "Not bad, thanks.", transcr: "Нот бэд, сэнкс.", ru: "Неплохо, спасибо." },
        { en: "How was your weekend?", transcr: "Хау уоз ё уикэнд?", ru: "Как прошли выходные?" },
        { en: "That's good news.", transcr: "Зэтс гуд ньюз.", ru: "Это хорошая новость." },
        { en: "Cold today, isn't it?", transcr: "Коулд тудэй, изнт ит?", ru: "Холодно сегодня, правда?" },
        { en: "See you tomorrow.", transcr: "Си ю тэмороу.", ru: "Увидимся завтра." },
        { en: "Take care.", transcr: "Тэйк кэа.", ru: "Береги себя." },
        { en: "Have a good day.", transcr: "Хэв э гуд дэй.", ru: "Хорошего дня." },
        { en: "Nice to see you.", transcr: "Найс ту си ю.", ru: "Приятно тебя видеть." },
      ],
    },
    {
      cat: "appointment",
      icon: "📅",
      title_ru: "У врача: запись и приём",
      phrases: [
        { en: "I'd like to make an appointment.", transcr: "Айд лайк ту мэйк эн эпойнтмэнт.", ru: "Я хочу записаться на приём (к врачу)." },
        { en: "I need to see a doctor today.", transcr: "Ай нид ту си э доктэ тудэй.", ru: "Мне нужно к врачу сегодня. (Опасно для жизни — звоните 999; срочный совет — NHS 111.)" },
        { en: "When is the next appointment?", transcr: "Уэн из зэ нэкст эпойнтмэнт?", ru: "Когда ближайшая запись?" },
        { en: "I can't come tomorrow.", transcr: "Ай кант кам тэмороу.", ru: "Я не смогу прийти завтра." },
        { en: "It started a week ago.", transcr: "Ит стартид э уик эгоу.", ru: "Это началось неделю назад." },
        { en: "I've had this pain for a few days.", transcr: "Айв хэд зис пэйн фо э фью дэйз.", ru: "Эта боль у меня уже несколько дней." },
        { en: "How long have you had it?", transcr: "Хау лонг хэв ю хэд ит?", ru: "(врач спросит) «Как давно это у вас?»" },
        { en: "Can I have a fit note, please?", transcr: "Кэн ай хэв э фит ноут, плиз?", ru: "Можно больничный лист (справку)? (Иногда говорят «sick note».)" },
        { en: "Can I have an interpreter, please?", transcr: "Кэн ай хэв эн интёпритэ, плиз?", ru: "Можно переводчика, пожалуйста? (NHS — бесплатно, попросите заранее.)" },
      ],
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = PHRASEBOOK;
  else root.PHRASEBOOK = PHRASEBOOK;
})(typeof window !== "undefined" ? window : globalThis);
