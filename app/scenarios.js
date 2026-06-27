/*
 * Survival role-play scenarios for "English for Seasonal Workers" (RU-only).
 * An APPLICATION mode (not a graded lesson): branching dialogues of real stressful
 * moments. Snowball-exempt from any single lesson, but every English line is built
 * ONLY from the UNION of words[] of all lessons 1..23 + the function-word whitelist
 * + NAMES (checked by scripts/scenario-audit.js — no new words introduced here).
 *
 * High-responsibility zone (money / NHS / accidents): lines are NEUTRAL ("I ask /
 * I report / I request") — no legal/medical/visa/earnings claims, no advice on how
 * to repair machinery or give first aid. The teaching (e.g. 999 vs 111) lives in the
 * Russian outcome_ru / intro_ru, never as app-issued medical instruction.
 *
 * Schema (see plans/2026-06-24-a2-phase2-scenarios.md):
 *   window.SCENARIOS = [{
 *     id, icon, title_ru, sub_ru, intro_ru, start,
 *     nodes: {
 *       <id>: { speaker, en, transcr, tr_ru,
 *               choices: [{ en, transcr, tr_ru, ok, fb_ru, next }] }   // step node
 *       <id>: { speaker, en, transcr, tr_ru, outcome, outcome_ru }     // outcome node
 *     }
 *   }]
 * speaker: m(manager) w(worker) c(cashier) d(doctor) a(agency) n(nurse) r(receptionist)
 * — voice is one en-GB Web Speech voice regardless; the label only tags who is talking.
 * Wrong choices are NOT dead ends: they give fb_ru and loop back / lead to a
 * recovery node (we teach, not punish — like the quiz "mistake review").
 */
(function (root) {
  const SCENARIOS = [
    /* ---------- 1) Not paid / wage problem (manager) ---------- */
    {
      id: "pay",
      icon: "💷",
      title_ru: "Мне не заплатили",
      sub_ru: "Разговор с менеджером о зарплате",
      intro_ru: "Прошла неделя, но деньги на счёт не пришли. Вы идёте к менеджеру — спокойно разобраться.",
      start: "n1",
      nodes: {
        n1: {
          speaker: "m", en: "Hello. How can I help you?", transcr: "Хэлоу. Хау кэн ай хэлп ю?", tr_ru: "Здравствуйте. Чем могу помочь?",
          choices: [
            { en: "I have not been paid this week.", transcr: "Ай хэв нот бин пэйд зис уик.", tr_ru: "Мне не заплатили на этой неделе.",
              ok: true, fb_ru: "✅ Чётко и вежливо — именно так и нужно.", next: "n2" },
            { en: "Where is my money?", transcr: "Уэа из май мани?", tr_ru: "Где мои деньги?",
              ok: false, fb_ru: "⚠️ Слишком резко. Спокойнее: «I have not been paid…».", next: "n1" },
          ],
        },
        n2: {
          speaker: "m", en: "I am sorry. What is your name?", transcr: "Ай эм сори. Уот из ё нэйм?", tr_ru: "Извините. Как вас зовут?",
          choices: [
            { en: "My name is Ahmad. Here is my badge.", transcr: "Май нэйм из Ахмад. Хиэ из май бэдж.", tr_ru: "Меня зовут Ахмад. Вот мой бейдж.",
              ok: true, fb_ru: "✅ Помогли менеджеру — назвали имя и показали бейдж.", next: "n3" },
            { en: "You have my name.", transcr: "Ю хэв май нэйм.", tr_ru: "Вы знаете моё имя.",
              ok: false, fb_ru: "⚠️ Лучше назвать имя и показать бейдж — так быстрее.", next: "n2" },
          ],
        },
        n3: {
          speaker: "m", en: "I can check. There is a mistake in your hours.", transcr: "Ай кэн чек. Зэа из э мистэйк ин ё ауэз.", tr_ru: "Я проверю. В ваших часах ошибка.",
          choices: [
            { en: "Can you check my payslip, please?", transcr: "Кэн ю чек май пэйслип, плиз?", tr_ru: "Проверьте мой расчётный лист, пожалуйста.",
              ok: true, fb_ru: "✅ Спокойно и по делу.", next: "n4" },
            { en: "This is bad. You did not pay me.", transcr: "Зис из бэд. Ю дид нот пэй ми.", tr_ru: "Это плохо. Вы мне не заплатили.",
              ok: false, fb_ru: "⚠️ Без обвинений. Попросите проверить payslip.", next: "n3" },
          ],
        },
        n4: {
          speaker: "m", en: "Yes. We did not pay your hours. That is a mistake.", transcr: "Йес. Уи дид нот пэй ё ауэз. Зэт из э мистэйк.", tr_ru: "Да. Мы не оплатили ваши часы. Это ошибка.",
          choices: [
            { en: "Can you fix it, please? When can you pay me?", transcr: "Кэн ю фикс ит, плиз? Уэн кэн ю пэй ми?", tr_ru: "Можете исправить, пожалуйста? Когда мне заплатят?",
              ok: true, fb_ru: "✅ Попросили исправить и спросили срок — отлично.", next: "end_good" },
            { en: "You did not pay me. I am not going to work.", transcr: "Ю дид нот пэй ми. Ай эм нот гоуинг ту вёк.", tr_ru: "Вы мне не заплатили. Я не буду работать.",
              ok: false, fb_ru: "⚠️ Угроза только мешает. Спокойно попросите исправить.", next: "end_bad" },
          ],
        },
        end_good: {
          speaker: "m", en: "I am going to fix it today. You are going to get your money this week.",
          transcr: "Ай эм гоуинг ту фикс ит тудэй. Ю ар гоуинг ту гет ё мани зис уик.", tr_ru: "Я исправлю это сегодня. Вы получите деньги на этой неделе.",
          outcome: "good", outcome_ru: "Вы спокойно объяснили проблему и попросили исправить — менеджер всё проверит. 👍 Так и нужно. Сохраняйте payslip — в нём записаны ваши часы и оплата.",
        },
        end_bad: {
          speaker: "m", en: "Please do not do that. We can talk.", transcr: "Плиз ду нот ду зэт. Уи кэн ток.", tr_ru: "Пожалуйста, не делайте так. Давайте поговорим.",
          outcome: "bad", outcome_ru: "Угрозы и отказ работать только вредят. Спокойно объясните проблему и попросите исправить ошибку — это работает лучше.",
        },
      },
    },

    /* ---------- 2) Agency / employer: shift & hours ---------- */
    {
      id: "agency",
      icon: "📋",
      title_ru: "Разговор с агентством",
      sub_ru: "Смена и часы работы",
      intro_ru: "Вы работаете слишком много часов и хотите попросить агентство изменить смену.",
      start: "n1",
      nodes: {
        n1: {
          speaker: "a", en: "Hello. How can I help you?", transcr: "Хэлоу. Хау кэн ай хэлп ю?", tr_ru: "Здравствуйте. Чем могу помочь?",
          choices: [
            { en: "I have a problem. It is my shift.", transcr: "Ай хэв э проблэм. Ит из май шифт.", tr_ru: "У меня проблема. Это моя смена.",
              ok: true, fb_ru: "✅ Спокойно обозначили проблему.", next: "n2" },
            { en: "Your shifts are bad.", transcr: "Ё шифтс ар бэд.", tr_ru: "Ваши смены плохие.",
              ok: false, fb_ru: "⚠️ Объясните конкретно, без обвинений.", next: "n1" },
          ],
        },
        n2: {
          speaker: "a", en: "I am sorry. What is the problem?", transcr: "Ай эм сори. Уот из зэ проблэм?", tr_ru: "Извините. В чём проблема?",
          choices: [
            { en: "I work many hours. I am tired.", transcr: "Ай вёк мэни ауэз. Ай эм тайэд.", tr_ru: "Я работаю много часов. Я устал.",
              ok: true, fb_ru: "✅ Чётко: много часов, устаёте.", next: "n3" },
            { en: "I do not like my shift.", transcr: "Ай ду нот лайк май шифт.", tr_ru: "Мне не нравится моя смена.",
              ok: false, fb_ru: "⚠️ Слишком общо. Скажите: слишком много часов.", next: "n2" },
          ],
        },
        n3: {
          speaker: "a", en: "I am sorry. Do you want a short shift?", transcr: "Ай эм сори. Ду ю уонт э шот шифт?", tr_ru: "Извините. Хотите короткую смену?",
          choices: [
            { en: "Yes, please. Can I start early?", transcr: "Йес, плиз. Кэн ай старт ёли?", tr_ru: "Да, пожалуйста. Можно начинать раньше?",
              ok: true, fb_ru: "✅ Вежливая, конкретная просьба.", next: "n4" },
            { en: "Yes! Now! Today!", transcr: "Йес! Нау! Тудэй!", tr_ru: "Да! Сейчас! Сегодня!",
              ok: false, fb_ru: "⚠️ Спокойнее. Попросите вежливо.", next: "n3" },
          ],
        },
        n4: {
          speaker: "a", en: "I can change your shift. You can start at six.", transcr: "Ай кэн чейндж ё шифт. Ю кэн старт эт сикс.", tr_ru: "Я могу изменить вашу смену. Можете начинать в шесть.",
          choices: [
            { en: "Thank you. That is good.", transcr: "Сэнк ю. Зэт из гуд.", tr_ru: "Спасибо. Это хорошо.",
              ok: true, fb_ru: "✅ Поблагодарили — договорились.", next: "end_good" },
            { en: "That is not good. I want it now.", transcr: "Зэт из нот гуд. Ай уонт ит нау.", tr_ru: "Это плохо. Я хочу сейчас.",
              ok: false, fb_ru: "⚠️ Смену меняют не сразу. Спокойно подождите.", next: "end_ok" },
          ],
        },
        end_good: {
          speaker: "a", en: "Good. Your shift starts tomorrow. Thank you.", transcr: "Гуд. Ё шифт стартс тэмороу. Сэнк ю.", tr_ru: "Хорошо. Ваша смена начнётся завтра. Спасибо.",
          outcome: "good", outcome_ru: "Вы спокойно объяснили проблему и вежливо попросили — агентство изменило смену. 👍",
        },
        end_ok: {
          speaker: "a", en: "I can change it, not now. Please wait.", transcr: "Ай кэн чейндж ит, нот нау. Плиз уэйт.", tr_ru: "Я могу изменить, но не сейчас. Пожалуйста, подождите.",
          outcome: "ok", outcome_ru: "Смену поменяют, но не моментально. Вежливая просьба работает — наберитесь терпения.",
        },
      },
    },

    /* ---------- 3) Machine breakdown / injury in the field ---------- */
    {
      id: "accident",
      icon: "🛑",
      title_ru: "Авария и травма",
      sub_ru: "Остановить работу и позвать помощь",
      intro_ru: "На поле сломался трактор, и коллега Том поранил руку. Нужно остановить работу и сообщить боссу.",
      start: "n1",
      nodes: {
        n1: {
          speaker: "m", en: "Why did you stop the tractor?", transcr: "Уай дид ю стоп зэ трэктэ?", tr_ru: "Почему ты остановил трактор?",
          choices: [
            { en: "There is an accident. Tom hurt his hand.", transcr: "Зэа из эн эксидэнт. Том хёт хиз хэнд.", tr_ru: "Несчастный случай. Том поранил руку.",
              ok: true, fb_ru: "✅ Сразу сказали правду — это главное.", next: "n2" },
            { en: "Nothing. I am tired.", transcr: "Насинг. Ай эм тайэд.", tr_ru: "Ничего. Я устал.",
              ok: false, fb_ru: "⚠️ Это авария — скажите правду сразу.", next: "n1" },
          ],
        },
        n2: {
          speaker: "m", en: "Is he hurt? Where is he?", transcr: "Из хи хёт? Уэа из хи?", tr_ru: "Он ранен? Где он?",
          choices: [
            { en: "He hurt his hand. He has a cut. It is bad.", transcr: "Хи хёт хиз хэнд. Хи хэз э кат. Ит из бэд.", tr_ru: "Он поранил руку. У него порез. Это серьёзно.",
              ok: true, fb_ru: "✅ Коротко описали, что случилось.", next: "n3" },
            { en: "He is in the field.", transcr: "Хи из ин зэ филд.", tr_ru: "Он в поле.",
              ok: false, fb_ru: "⚠️ Скажите, что с ним: рука, порез.", next: "n2" },
          ],
        },
        n3: {
          speaker: "m", en: "Stop the machine. Do not work now.", transcr: "Стоп зэ мэшин. Ду нот вёк нау.", tr_ru: "Останови машину. Не работай сейчас.",
          choices: [
            { en: "Yes. I stop the machine. Can you call an ambulance?", transcr: "Йес. Ай стоп зэ мэшин. Кэн ю кол эн эмбьюлэнс?", tr_ru: "Да. Я останавливаю машину. Вызовите скорую?",
              ok: true, fb_ru: "✅ Остановили технику и попросили вызвать скорую.", next: "n4" },
            { en: "I am going to fix the engine.", transcr: "Ай эм гоуинг ту фикс зэ энджин.", tr_ru: "Я починю двигатель.",
              ok: false, fb_ru: "⚠️ Не чините сами — это опасно. Остановите и позовите механика.", next: "n3" },
          ],
        },
        n4: {
          speaker: "m", en: "Yes. I am going to call 999. How is Tom?", transcr: "Йес. Ай эм гоуинг ту кол найн-найн-найн. Хау из Том?", tr_ru: "Да. Я звоню 999. Как Том?",
          choices: [
            { en: "He is in pain. Please help now.", transcr: "Хи из ин пэйн. Плиз хэлп нау.", tr_ru: "Ему больно. Помогите, пожалуйста.",
              ok: true, fb_ru: "✅ Попросили помощь — оставайтесь рядом с коллегой.", next: "end_good" },
            { en: "It is not my problem.", transcr: "Ит из нот май проблэм.", tr_ru: "Это не моя проблема.",
              ok: false, fb_ru: "⚠️ Нельзя бросать коллегу.", next: "end_bad" },
          ],
        },
        end_good: {
          speaker: "m", en: "Good. I am going to call 999 and the mechanic. Do not work now.", transcr: "Гуд. Ай эм гоуинг ту кол найн-найн-найн энд зэ мэкэник. Ду нот вёк нау.", tr_ru: "Хорошо. Я вызову 999 и механика. Не работайте сейчас.",
          outcome: "good", outcome_ru: "Вы остановили технику, сообщили боссу и попросили вызвать скорую — это правильно. 👍 Не чините машину сами и не работайте, пока не разрешат. 999 — при тяжёлой травме (сильное кровотечение, потеря сознания).",
        },
        end_bad: {
          speaker: "m", en: "Please help Tom. We are a team.", transcr: "Плиз хэлп Том. Уи ар э тим.", tr_ru: "Помоги Тому. Мы команда.",
          outcome: "bad", outcome_ru: "Бросать коллегу в беде нельзя. Остановите работу, сообщите боссу и оставайтесь рядом, пока не придёт помощь. При тяжёлой травме — вызывайте 999.",
        },
      },
    },

    /* ---------- 4) At the doctor / NHS (calm visit; 999 vs 111 in RU) ---------- */
    {
      id: "nhs",
      icon: "🏥",
      title_ru: "У врача (NHS)",
      sub_ru: "Описать симптомы, 999 и 111",
      intro_ru: "Вы заболели и идёте к врачу. Если очень плохо (боль в груди, кровь, тяжело дышать) — это 999 (скорая). Если несрочно — звоните 111.",
      start: "n1",
      nodes: {
        n1: {
          speaker: "d", en: "Hello. How can I help you?", transcr: "Хэлоу. Хау кэн ай хэлп ю?", tr_ru: "Здравствуйте. Чем могу помочь?",
          choices: [
            { en: "I am sick. I have a fever and a cough.", transcr: "Ай эм сик. Ай хэв э фивэ энд э коф.", tr_ru: "Я заболел. У меня температура и кашель.",
              ok: true, fb_ru: "✅ Спокойно описали симптомы.", next: "n2" },
            { en: "Give me medicine now.", transcr: "Гив ми мэдсэн нау.", tr_ru: "Дайте мне лекарство сейчас.",
              ok: false, fb_ru: "⚠️ Сначала опишите, что болит. Спокойно.", next: "n1" },
          ],
        },
        n2: {
          speaker: "d", en: "When did it start?", transcr: "Уэн дид ит старт?", tr_ru: "Когда это началось?",
          choices: [
            { en: "It started two days ago.", transcr: "Ит стартид ту дэйз эгоу.", tr_ru: "Началось два дня назад.",
              ok: true, fb_ru: "✅ Точно назвали время.", next: "n3" },
            { en: "Many days ago.", transcr: "Мэни дэйз эгоу.", tr_ru: "Много дней назад.",
              ok: false, fb_ru: "⚠️ Лучше точнее: «вчера», «два дня назад».", next: "n3" },
          ],
        },
        n3: {
          speaker: "d", en: "I can give you some medicine. In an emergency, call 999.", transcr: "Ай кэн гив ю сам мэдсэн. Ин эн имёджэнси, кол найн-найн-найн.", tr_ru: "Я дам вам лекарство. В экстренном случае звоните 999.",
          choices: [
            { en: "Thank you. Can I have a sick note?", transcr: "Сэнк ю. Кэн ай хэв э сик ноут?", tr_ru: "Спасибо. Можно больничный?",
              ok: true, fb_ru: "✅ Поблагодарили и попросили больничный — это правильно.", next: "end_good" },
            { en: "I do not want to rest. I want to work.", transcr: "Ай ду нот уонт ту рэст. Ай уонт ту вёк.", tr_ru: "Я не хочу отдыхать. Я хочу работать.",
              ok: false, fb_ru: "⚠️ Болеть и работать опасно. Сначала отдохните.", next: "end_ok" },
          ],
        },
        end_good: {
          speaker: "d", en: "Yes. Rest and drink water.", transcr: "Йес. Рэст энд дринк уотэ.", tr_ru: "Да. Отдыхайте и пейте воду.",
          outcome: "good", outcome_ru: "Вы спокойно описали симптомы и попросили больничный — врач помог. 👍 Несрочно звоните 111, при опасных симптомах (боль в груди, кровь) — 999. Официально справка называется «fit note» и выдаётся при болезни более 7 дней.",
        },
        end_ok: {
          speaker: "d", en: "Please rest today. Work can wait.", transcr: "Плиз рэст тудэй. Вёк кэн уэйт.", tr_ru: "Пожалуйста, отдохните сегодня. Работа подождёт.",
          outcome: "ok", outcome_ru: "Работать больным опасно. Сначала отдохните — здоровье важнее. При опасных симптомах звоните 999, несрочно — 111.",
        },
      },
    },

    /* ---------- 5) Camp / housing problem (camp manager) ---------- */
    {
      id: "camp",
      icon: "🏠",
      title_ru: "Проблема в кэмпе",
      sub_ru: "Холодно, не работает обогреватель",
      intro_ru: "В вагончике холодно: обогреватель не работает и нет горячей воды. Вы идёте к менеджеру кэмпа — спокойно попросить починить.",
      start: "n1",
      nodes: {
        n1: {
          speaker: "m", en: "Hello. How can I help you?", transcr: "Хэлоу. Хау кэн ай хэлп ю?", tr_ru: "Здравствуйте. Чем могу помочь?",
          choices: [
            { en: "I have a problem. My heater is broken.", transcr: "Ай хэв э проблэм. Май хитэ из броукэн.", tr_ru: "У меня проблема. Мой обогреватель сломан.",
              ok: true, fb_ru: "✅ Спокойно и конкретно — назвали, что сломано.", next: "n2" },
            { en: "My room is bad.", transcr: "Май рум из бэд.", tr_ru: "Моя комната плохая.",
              ok: false, fb_ru: "⚠️ Слишком общо. Скажите конкретно: что сломано.", next: "n1" },
          ],
        },
        n2: {
          speaker: "m", en: "I am sorry. What is broken?", transcr: "Ай эм сори. Уот из броукэн?", tr_ru: "Извините. Что сломано?",
          choices: [
            { en: "The heater is broken. My room is cold.", transcr: "Зэ хитэ из броукэн. Май рум из коулд.", tr_ru: "Обогреватель сломан. В комнате холодно.",
              ok: true, fb_ru: "✅ Чётко: обогреватель, в комнате холодно.", next: "n3" },
            { en: "Everything is cold.", transcr: "Эврисинг из коулд.", tr_ru: "Всё холодное.",
              ok: false, fb_ru: "⚠️ Слишком общо. Скажите точнее: что именно сломано — обогреватель.", next: "n2" },
          ],
        },
        n3: {
          speaker: "m", en: "I am sorry. Is there hot water?", transcr: "Ай эм сори. Из зэа хот уотэ?", tr_ru: "Извините. Есть ли горячая вода?",
          choices: [
            { en: "No. There is no hot water.", transcr: "Ноу. Зэа из ноу хот уотэ.", tr_ru: "Нет. Горячей воды нет.",
              ok: true, fb_ru: "✅ Ответили чётко на вопрос.", next: "n4" },
            { en: "My room is cold.", transcr: "Май рум из коулд.", tr_ru: "В комнате холодно.",
              ok: false, fb_ru: "⚠️ Ответьте на вопрос: есть ли горячая вода?", next: "n3" },
          ],
        },
        n4: {
          speaker: "m", en: "I can send someone today. Can you wait?", transcr: "Ай кэн сэнд самуан тудэй. Кэн ю уэйт?", tr_ru: "Я могу прислать мастера сегодня. Можете подождать?",
          choices: [
            { en: "Yes, please. Thank you.", transcr: "Йес, плиз. Сэнк ю.", tr_ru: "Да, пожалуйста. Спасибо.",
              ok: true, fb_ru: "✅ Поблагодарили — договорились.", next: "end_good" },
            { en: "No! Fix it now! I am angry.", transcr: "Ноу! Фикс ит нау! Ай эм энгри.", tr_ru: "Нет! Почините сейчас! Я зол.",
              ok: false, fb_ru: "⚠️ Кричать не нужно — спокойно попросите.", next: "end_bad" },
          ],
        },
        end_good: {
          speaker: "m", en: "Good. Someone is going to fix the heater today.", transcr: "Гуд. Самуан из гоуинг ту фикс зэ хитэ тудэй.", tr_ru: "Хорошо. Сегодня мастер починит обогреватель.",
          outcome: "good", outcome_ru: "Вы спокойно объяснили проблему и вежливо попросили — менеджер пришлёт мастера. 👍 Если в жилье холодно или опасно (нет тепла, воды), сообщайте сразу.",
        },
        end_bad: {
          speaker: "m", en: "Please do not shout. I can help you.", transcr: "Плиз ду нот шаут. Ай кэн хэлп ю.", tr_ru: "Пожалуйста, не кричите. Я могу помочь.",
          outcome: "bad", outcome_ru: "Крик и злость не помогают. Спокойно опишите проблему и попросите починить — так быстрее получите помощь.",
        },
      },
    },

    /* ---------- 6) On the phone: book a doctor's appointment (receptionist) ---------- */
    {
      id: "phone",
      icon: "📞",
      title_ru: "Звонок по телефону",
      sub_ru: "Записаться на приём по телефону",
      intro_ru: "Нужно позвонить в регистратуру клиники и записаться на приём. По телефону вас не видят — называйте себя, говорите чётко и переспрашивайте, если не расслышали.",
      start: "n1",
      nodes: {
        n1: {
          speaker: "r", en: "Hello. How can I help you?", transcr: "Хэлоу. Хау кэн ай хэлп ю?", tr_ru: "Здравствуйте. Чем могу помочь?",
          choices: [
            { en: "Hello. This is Ahmad. Can I speak to the nurse, please?", transcr: "Хэлоу. Зис из Ахмад. Кэн ай спик ту зэ нёс, плиз?", tr_ru: "Здравствуйте. Это Ахмад. Можно поговорить с медсестрой?",
              ok: true, fb_ru: "✅ По телефону сразу назвали себя («This is Ahmad») и вежливо попросили.", next: "n2" },
            { en: "Nurse! Now!", transcr: "Нёс! Нау!", tr_ru: "Медсестру! Сейчас!",
              ok: false, fb_ru: "⚠️ По телефону сначала назовите себя: «This is Ahmad…» и попросите вежливо.", next: "n1" },
          ],
        },
        n2: {
          speaker: "r", en: "I am sorry. The nurse is busy now. Can you call back at two?", transcr: "Ай эм сори. Зэ нёс из бизи нау. Кэн ю кол бэк эт ту?", tr_ru: "Извините. Медсестра сейчас занята. Можете перезвонить в два?",
          choices: [
            { en: "Yes, I can call back at two. Thank you.", transcr: "Йес, ай кэн кол бэк эт ту. Сэнк ю.", tr_ru: "Да, я перезвоню в два. Спасибо.",
              ok: true, fb_ru: "✅ Договорились перезвонить — по телефону это нормально.", next: "n3" },
            { en: "No. I want to speak now.", transcr: "Ноу. Ай уонт ту спик нау.", tr_ru: "Нет. Я хочу поговорить сейчас.",
              ok: false, fb_ru: "⚠️ Медсестра занята. Спокойно перезвоните позже.", next: "n2" },
          ],
        },
        n3: {
          speaker: "r", en: "Do you want an appointment? When can you come?", transcr: "Ду ю уонт эн эпойнтмэнт? Уэн кэн ю кам?", tr_ru: "Хотите записаться? Когда можете прийти?",
          choices: [
            { en: "I work all day. Can I have an appointment at five?", transcr: "Ай уёк ол дэй. Кэн ай хэв эн эпойнтмэнт эт файв?", tr_ru: "Я работаю весь день. Можно запись на пять?",
              ok: true, fb_ru: "✅ Вежливо попросили запись — «Can I have an appointment…».", next: "n4" },
            { en: "Maybe. Soon.", transcr: "Мэйби. Сун.", tr_ru: "Может быть. Скоро.",
              ok: false, fb_ru: "⚠️ Скажите чётко, когда вам удобно прийти.", next: "n3" },
          ],
        },
        n4: {
          speaker: "r", en: "Yes. You can come at five tomorrow.", transcr: "Йес. Ю кэн кам эт файв тэмороу.", tr_ru: "Да. Можете прийти завтра в пять.",
          choices: [
            { en: "Sorry, can you repeat that, please?", transcr: "Сори, кэн ю рипит зэт, плиз?", tr_ru: "Извините, можете повторить?",
              ok: true, fb_ru: "✅ Не расслышали — по телефону нормально переспросить: «Can you repeat that?».", next: "n5" },
            { en: "Yes, yes. Goodbye.", transcr: "Йес, йес. Гудбай.", tr_ru: "Да, да. До свидания.",
              ok: false, fb_ru: "⚠️ Если не расслышали — лучше переспросить, чем угадывать.", next: "n4" },
          ],
        },
        n5: {
          speaker: "r", en: "Your appointment is at five tomorrow. Is that good?", transcr: "Ёр эпойнтмэнт из эт файв тэмороу. Из зэт гуд?", tr_ru: "Ваша запись завтра в пять. Хорошо?",
          choices: [
            { en: "Yes, that is good. Can you call me back if it changes?", transcr: "Йес, зэт из гуд. Кэн ю кол ми бэк иф ит чейнджиз?", tr_ru: "Да, хорошо. Перезвоните мне, если что-то изменится?",
              ok: true, fb_ru: "✅ Подтвердили время и попросили перезвонить при изменениях.", next: "end_good" },
            { en: "Maybe I come, maybe not.", transcr: "Мэйби ай кам, мэйби нот.", tr_ru: "Может, приду, может, нет.",
              ok: false, fb_ru: "⚠️ Отвечайте чётко: придёте вы или нет.", next: "end_ok" },
          ],
        },
        end_good: {
          speaker: "r", en: "Yes, I can call you back. Goodbye.", transcr: "Йес, ай кэн кол ю бэк. Гудбай.", tr_ru: "Да, я перезвоню вам. До свидания.",
          outcome: "good", outcome_ru: "Вы назвали себя («This is Ahmad»), вежливо попросили запись и переспросили, когда не расслышали — это и есть телефонные навыки. 👍 Скажите менеджеру про запись к врачу, чтобы он поменял вам смену.",
        },
        end_ok: {
          speaker: "r", en: "Please come at five tomorrow. Goodbye.", transcr: "Плиз кам эт файв тэмороу. Гудбай.", tr_ru: "Пожалуйста, приходите завтра в пять. До свидания.",
          outcome: "ok", outcome_ru: "Запись есть, но вы ответили неуверенно. По телефону отвечайте чётко: когда придёте, и переспрашивайте, если не расслышали.",
        },
      },
    },

    /* ---------- 7) Relay a message: report a colleague's words (reported speech) ---------- */
    {
      id: "relay",
      icon: "📨",
      title_ru: "Передать сообщение",
      sub_ru: "Пересказать слова коллеги",
      intro_ru: "Менеджер спрашивает, что сказал коллега Том, а потом просит передать сообщение для Тома. Слушайте и пересказывайте точно: «He said that…», «He asked if…».",
      start: "n1",
      nodes: {
        n1: {
          speaker: "m", en: "Tom called this morning. What did he say?", transcr: "Том колд зис монинг. Уот дид хи сэй?", tr_ru: "Том звонил утром. Что он сказал?",
          choices: [
            { en: "He said that he is ill. He asked if you can call him.", transcr: "Хи сэд зэт хи из ил. Хи аскт иф ю кэн кол хим.", tr_ru: "Он сказал, что заболел. Он спросил, можете ли вы ему позвонить.",
              ok: true, fb_ru: "✅ Точно пересказали: «He said that…» и «He asked if…».", next: "n2" },
            { en: "Ask Tom. I am busy now.", transcr: "Аск Том. Ай эм бизи нау.", tr_ru: "Спросите Тома. Я сейчас занят.",
              ok: false, fb_ru: "⚠️ Передайте, что сказал Том: «He said that he is ill».", next: "n1" },
          ],
        },
        n2: {
          speaker: "m", en: "He is ill. Did he say when he can come back?", transcr: "Хи из ил. Дид хи сэй уэн хи кэн кам бэк?", tr_ru: "Он болеет. Сказал, когда сможет вернуться?",
          choices: [
            { en: "He said that he can come back on Monday.", transcr: "Хи сэд зэт хи кэн кам бэк он мандэй.", tr_ru: "Он сказал, что вернётся в понедельник.",
              ok: true, fb_ru: "✅ Чёткий пересказ: «He said that he can come back…».", next: "n3" },
            { en: "I think Monday. Maybe.", transcr: "Ай синк мандэй. Мэйби.", tr_ru: "Думаю, в понедельник. Может быть.",
              ok: false, fb_ru: "⚠️ Передайте точно его слова, не догадки.", next: "n2" },
          ],
        },
        n3: {
          speaker: "m", en: "Good. Now please tell Tom something. Can you call him?", transcr: "Гуд. Нау плиз тэл Том самсинг. Кэн ю кол хим?", tr_ru: "Хорошо. Теперь передайте Тому кое-что. Можете ему позвонить?",
          choices: [
            { en: "Yes. What do I tell him?", transcr: "Йес. Уот ду ай тэл хим?", tr_ru: "Да. Что ему передать?",
              ok: true, fb_ru: "✅ Готовы передать — спросили, что именно.", next: "n4" },
            { en: "No. I am busy now.", transcr: "Ноу. Ай эм бизи нау.", tr_ru: "Нет. Я сейчас занят.",
              ok: false, fb_ru: "⚠️ Передать слова коллеге — часть работы в команде.", next: "n3" },
          ],
        },
        n4: {
          speaker: "m", en: "Tell him that he must wear his boots tomorrow.", transcr: "Тэл хим зэт хи маст уэа хиз бутс тэмороу.", tr_ru: "Передайте ему, что завтра он должен надеть рабочие ботинки.",
          choices: [
            { en: "Yes. I will tell him that he must wear his boots.", transcr: "Йес. Ай уил тэл хим зэт хи маст уэа хиз бутс.", tr_ru: "Да. Я передам ему, что он должен надеть ботинки.",
              ok: true, fb_ru: "✅ Повторили сообщение целиком — так не забудете.", next: "end_good" },
            { en: "Yes. I will tell him.", transcr: "Йес. Ай уил тэл хим.", tr_ru: "Да. Я ему передам.",
              ok: false, fb_ru: "⚠️ Повторите само сообщение вслух: «He must wear his boots» — так не перепутаете.", next: "end_ok" },
          ],
        },
        end_good: {
          speaker: "m", en: "Thank you. You always tell me what they say.", transcr: "Сэнк ю. Ю олуэйз тэл ми уот зэй сэй.", tr_ru: "Спасибо. Вы всегда точно передаёте, что говорят.",
          outcome: "good", outcome_ru: "Вы точно пересказали слова Тома («He said that…», «He asked if…») и повторили сообщение для него. 👍 Передавать слова точно — важный навык в команде.",
        },
        end_ok: {
          speaker: "m", en: "Please call Tom and tell him today.", transcr: "Плиз кол Том энд тэл хим тудэй.", tr_ru: "Пожалуйста, позвоните Тому и передайте сегодня.",
          outcome: "ok", outcome_ru: "Сообщение вы приняли, но не повторили его. Чтобы не забыть и не перепутать, проговаривайте вслух, что нужно передать.",
        },
      },
    },

    /* ---------- 8) Polite complaint: a problem wasn't fixed (reported speech + should/have to) ---------- */
    {
      id: "complaint",
      icon: "⚠️",
      title_ru: "Вежливая жалоба",
      sub_ru: "Проблему не решили — настоять",
      intro_ru: "Свет на складе сломан — темно и опасно. Вы уже говорили супервайзеру, но не починили. Идёте к менеджеру — спокойно настоять. Не грубите и не угрожайте.",
      start: "n1",
      nodes: {
        n1: {
          speaker: "m", en: "Hello. How can I help you?", transcr: "Хэлоу. Хау кэн ай хэлп ю?", tr_ru: "Здравствуйте. Чем могу помочь?",
          choices: [
            { en: "There is a problem. The light in the warehouse is broken.", transcr: "Зэа из э проблэм. Зэ лайт ин зэ уэахаус из броукэн.", tr_ru: "Есть проблема. Свет на складе не работает.",
              ok: true, fb_ru: "✅ Спокойно и конкретно — назвали, что сломано и где.", next: "n2" },
            { en: "Your warehouse is bad.", transcr: "Ё уэахаус из бэд.", tr_ru: "Ваш склад плохой.",
              ok: false, fb_ru: "⚠️ Без обвинений. Скажите конкретно, что сломано.", next: "n1" },
          ],
        },
        n2: {
          speaker: "m", en: "I am sorry. Did you tell the supervisor?", transcr: "Ай эм сори. Дид ю тэл зэ супэвайзэ?", tr_ru: "Извините. Вы говорили супервайзеру?",
          choices: [
            { en: "Yes. I told him that the light is broken. He did not fix it.", transcr: "Йес. Ай тоулд хим зэт зэ лайт из броукэн. Хи дид нот фикс ит.", tr_ru: "Да. Я сказал ему, что свет не работает. Он не починил.",
              ok: true, fb_ru: "✅ Пояснили, что уже сообщали: «I told him that…».", next: "n3" },
            { en: "No. It is your problem.", transcr: "Ноу. Ит из ё проблэм.", tr_ru: "Нет. Это ваша проблема.",
              ok: false, fb_ru: "⚠️ Сначала вежливо сообщите и поясните, кому уже говорили.", next: "n2" },
          ],
        },
        n3: {
          speaker: "m", en: "I am sorry. Why is it a problem?", transcr: "Ай эм сори. Уай из ит э проблэм?", tr_ru: "Извините. А в чём проблема?",
          choices: [
            { en: "It is dark. It is dangerous. Someone can get hurt.", transcr: "Ит из дак. Ит из дэйнджэрэс. Самуан кэн гет хёт.", tr_ru: "Темно. Это опасно. Кто-то может пораниться.",
              ok: true, fb_ru: "✅ Спокойно объяснили, почему это опасно.", next: "n4" },
            { en: "You have to fix it now! I am angry!", transcr: "Ю хэв ту фикс ит нау! Ай эм энгри!", tr_ru: "Вы обязаны починить сейчас! Я зол!",
              ok: false, fb_ru: "⚠️ Спокойно поясните, почему это опасно — гнев не помогает.", next: "n3" },
          ],
        },
        n4: {
          speaker: "m", en: "Yes. How can I help?", transcr: "Йес. Хау кэн ай хэлп?", tr_ru: "Да. Чем я могу помочь?",
          choices: [
            { en: "You should fix the light. We have to work in the dark.", transcr: "Ю шуд фикс зэ лайт. Уи хэв ту уёк ин зэ дак.", tr_ru: "Нужно починить свет. Нам приходится работать в темноте.",
              ok: true, fb_ru: "✅ Вежливо настояли: «You should fix…», «We have to work…».", next: "n5" },
            { en: "Give us money.", transcr: "Гив ас мани.", tr_ru: "Дайте нам денег.",
              ok: false, fb_ru: "⚠️ Просите починить свет, а не денег — так решают проблему.", next: "n4" },
          ],
        },
        n5: {
          speaker: "m", en: "Yes. I will send someone today.", transcr: "Йес. Ай уил сэнд самуан тудэй.", tr_ru: "Хорошо. Я пришлю кого-нибудь сегодня.",
          choices: [
            { en: "Thank you. When can they fix it?", transcr: "Сэнк ю. Уэн кэн зэй фикс ит?", tr_ru: "Спасибо. Когда починят?",
              ok: true, fb_ru: "✅ Поблагодарили и спокойно спросили срок.", next: "end_good" },
            { en: "No! Now! You always say that!", transcr: "Ноу! Нау! Ю олуэйз сэй зэт!", tr_ru: "Нет! Сейчас! Вы всегда так говорите!",
              ok: false, fb_ru: "⚠️ Спокойно спросите срок — это работает лучше крика.", next: "end_bad" },
          ],
        },
        end_good: {
          speaker: "m", en: "They can fix it this morning. Thank you for telling me.", transcr: "Зэй кэн фикс ит зис монинг. Сэнк ю фо тэлинг ми.", tr_ru: "Починят сегодня утром. Спасибо, что сказали.",
          outcome: "good", outcome_ru: "Вы спокойно объяснили проблему, сослались на то, что уже говорили супервайзеру («I told him that…»), и сказали, почему это опасно. 👍 Если не чинят — вежливо повторите просьбу и запишите, когда и кому сообщали. Не угрожайте и не требуйте денег: спокойная настойчивость работает лучше.",
        },
        end_bad: {
          speaker: "m", en: "Please do not shout. I want to help you.", transcr: "Плиз ду нот шаут. Ай уонт ту хэлп ю.", tr_ru: "Пожалуйста, не кричите. Я хочу вам помочь.",
          outcome: "bad", outcome_ru: "Крик и угрозы не помогают. ACAS советует сначала спокойно решить вопрос на месте: объясните, что уже сообщали о проблеме и почему это опасно, и попросите починить. Записывайте, когда и кому вы говорили — это поможет, если придётся обращаться выше.",
        },
      },
    },

    /* ---------- 9) Injury at the doctor (Past Continuous + PP for/since; NHS zone) ---------- */
    {
      id: "injury",
      icon: "🤕",
      title_ru: "Травма: рассказать врачу",
      sub_ru: "Как и когда вы поранились",
      intro_ru: "Вы потянули спину на работе и пришли к врачу. Расскажите, что вы делали («I was lifting…») и как давно болит («I have had this pain for…»). Памятка про 999/111 — в конце.",
      start: "n1",
      nodes: {
        n1: {
          speaker: "d", en: "Hello. How can I help you?", transcr: "Хэлоу. Хау кэн ай хэлп ю?", tr_ru: "Здравствуйте. Чем могу помочь?",
          choices: [
            { en: "Hello. I have a pain in my back.", transcr: "Хэлоу. Ай хэв э пэйн ин май бэк.", tr_ru: "Здравствуйте. У меня боль в спине.",
              ok: true, fb_ru: "✅ Спокойно назвали главное — где болит.", next: "n2" },
            { en: "Give me medicine for my back.", transcr: "Гив ми мэдсэн фо май бэк.", tr_ru: "Дайте мне лекарство для спины.",
              ok: false, fb_ru: "⚠️ Сначала опишите, что и как болит — потом врач решит.", next: "n1" },
          ],
        },
        n2: {
          speaker: "d", en: "I am sorry. What were you doing?", transcr: "Ай эм сори. Уот уё ю дуинг?", tr_ru: "Сочувствую. Что вы делали?",
          choices: [
            { en: "I was lifting a box when I hurt my back.", transcr: "Ай уоз лифтинг э бокс уэн ай хёт май бэк.", tr_ru: "Я поднимал ящик, когда потянул спину.",
              ok: true, fb_ru: "✅ Past Continuous + when: «I was lifting … when I hurt…».", next: "n3" },
            { en: "My back is bad. I do not work now.", transcr: "Май бэк из бэд. Ай ду нот уёк нау.", tr_ru: "Спина плохая. Я сейчас не работаю.",
              ok: false, fb_ru: "⚠️ Расскажите, что вы делали, когда заболела спина: «I was lifting…».", next: "n2" },
          ],
        },
        n3: {
          speaker: "d", en: "How long have you had this pain?", transcr: "Хау лонг хэв ю хэд зис пэйн?", tr_ru: "Как давно у вас эта боль?",
          choices: [
            { en: "I have had this pain since Monday. It is two days now.", transcr: "Ай хэв хэд зис пэйн синс мандэй. Ит из ту дэйз нау.", tr_ru: "Боль с понедельника. Уже два дня.",
              ok: true, fb_ru: "✅ Present Perfect + since: «I have had this pain since Monday».", next: "n4" },
            { en: "A long time. Many days.", transcr: "Э лонг тайм. Мэни дэйз.", tr_ru: "Давно. Много дней.",
              ok: false, fb_ru: "⚠️ Точнее: «since Monday» или «for two days» — так врачу понятнее.", next: "n3" },
          ],
        },
        n4: {
          speaker: "d", en: "Have you taken anything for it?", transcr: "Хэв ю тэйкэн энисинг фор ит?", tr_ru: "Вы что-нибудь принимали от боли?",
          choices: [
            { en: "Yes. I have taken some tablets. The pain is bad now.", transcr: "Йес. Ай хэв тэйкэн сам тэблэтс. Зэ пэйн из бэд нау.", tr_ru: "Да. Я принимал таблетки. Боль сильная.",
              ok: true, fb_ru: "✅ Present Perfect: «I have taken some tablets».", next: "n5" },
            { en: "No. I want to work now.", transcr: "Ноу. Ай уонт ту уёк нау.", tr_ru: "Нет. Я хочу сейчас работать.",
              ok: false, fb_ru: "⚠️ С болью в спине работать опасно — сначала покажитесь врачу.", next: "n4" },
          ],
        },
        n5: {
          speaker: "d", en: "You should rest. Do not lift heavy boxes.", transcr: "Ю шуд рэст. Ду нот лифт хэви боксиз.", tr_ru: "Вам нужно отдохнуть. Не поднимайте тяжёлые ящики.",
          choices: [
            { en: "Thank you. Can I have a sick note?", transcr: "Сэнк ю. Кэн ай хэв э сик ноут?", tr_ru: "Спасибо. Можно больничный?",
              ok: true, fb_ru: "✅ Поблагодарили и попросили больничный — это правильно.", next: "end_good" },
            { en: "No. I have to work. I have no time to rest.", transcr: "Ноу. Ай хэв ту уёк. Ай хэв ноу тайм ту рэст.", tr_ru: "Нет. Мне надо работать. Нет времени отдыхать.",
              ok: false, fb_ru: "⚠️ Отдых важнее — работать с травмой спины опасно.", next: "end_ok" },
          ],
        },
        end_good: {
          speaker: "d", en: "Yes. I can give you a sick note. Come back if the pain is bad.", transcr: "Йес. Ай кэн гив ю э сик ноут. Кам бэк иф зэ пэйн из бэд.", tr_ru: "Да. Я дам вам больничный. Возвращайтесь, если боль сильная.",
          outcome: "good", outcome_ru: "Вы рассказали, что делали («I was lifting…»), как давно болит («since Monday») и что принимали — врач помог. 👍 Не поднимайте тяжёлое, пока врач не разрешит. Если боль сильная или быстро усиливается, поднялась температура — звоните 111. Срочно звоните 999, если онемели или ослабли обе ноги, пропала чувствительность в паху, не можете помочиться или болит грудь. Справка о болезни более 7 дней называется «fit note».",
        },
        end_ok: {
          speaker: "d", en: "Please rest. Work can wait.", transcr: "Плиз рэст. Уёк кэн уэйт.", tr_ru: "Пожалуйста, отдохните. Работа подождёт.",
          outcome: "ok", outcome_ru: "Работать с травмой спины опасно — сначала отдых и врач. Если боль сильная или быстро усиливается — звоните 111. Срочно звоните 999, если онемели обе ноги, пропала чувствительность в паху, не можете помочиться или болит грудь.",
        },
      },
    },
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = SCENARIOS;
  else root.SCENARIOS = SCENARIOS;
})(typeof window !== "undefined" ? window : globalThis);
