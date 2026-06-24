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
 * speaker: m(manager) w(worker) c(cashier) d(doctor) a(agency) n(nurse) — voice is
 * one en-GB Web Speech voice regardless; the label only tags who is talking.
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
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = SCENARIOS;
  else root.SCENARIOS = SCENARIOS;
})(typeof window !== "undefined" ? window : globalThis);
