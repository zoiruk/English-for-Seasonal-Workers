/* English for Seasonal Workers — engine (RU-only, localization-ready). */
(function () {
  "use strict";

  var LESSONS = window.LESSONS || [];
  var PHRASEBOOK = window.PHRASEBOOK || [];
  var BOOKS = window.BOOKS || [];
  var READER = BOOKS.reduce(function (a, b) { return a.concat(b.chapters || []); }, []); // flat chapters (counts/lookups)
  var SCENARIOS = window.SCENARIOS || [];
  var PHONETICS = window.PHONETICS || [];
  var READING_RULES = window.READING_RULES || [];

  /* ---------- UI strings (localization-ready: add UI.uz later) ---------- */
  var UI = {
    ru: {
      app_title: "English for Seasonal Workers",
      app_subtitle: "Английский с нуля — для работы на ферме",
      phrasebook_title: "Разговорник выживания",
      phrasebook_sub: "Готовые фразы на каждый день",
      phrasebook_hint: "👇 Выберите ситуацию. Нажмите 🔊, чтобы услышать.",
      phrasebook_count: "{0} фраз",
      phonetics_title: "Звуки и слух",
      phonetics_sub: "Трудные звуки и ударение — тренируй ухо",
      phonetics_hint: "👇 Выберите звук. Слушайте 🔊 и повторяйте вслух. Это тренировка уха и образец — оценить ваше произношение приложение не может.",
      sound_title: "Звуки и чтение",
      sound_sub: "Произношение на слух и чтение по буквам",
      practice_title: "Разговор и книги",
      practice_sub: "Фразы, ситуации и истории для чтения",
      practice_tab_pb: "📒 Фразы",
      practice_tab_sc: "🆘 Ситуации",
      practice_tab_lib: "📚 Книги",
      ph_model: "Послушай и повтори",
      ph_drill: "Что прозвучало?",
      ph_stress_drill: "Где ударение? Нажмите громкий слог",
      ph_listen: "▶ Послушать",
      ph_correct: "✅ Верно!",
      ph_wrong: "❌ Правильно: {0}",
      ph_again: "🔁 Ещё раз",
      reading_title: "Чтение по буквам",
      reading_sub: "Учись читать новое слово сам — по буквосочетаниям",
      reading_hint: "👇 Выберите правило. Сначала примеры — послушайте 🔊. Потом «Прочитай сам»: выберите, как читается слово, ДО того, как услышите его вслух.",
      rd_count: "{0} слов",
      rd_ref: "📖 справка · без теста",
      rd_patterns: "Буква → звук",
      rd_check: "Прочитай сам",
      rd_sym: "Звук",
      rd_word: "Слово",
      rd_type: "Тип",
      rd_correct: "✅ Верно! Так и читается.",
      rd_wrong: "❌ Читается: {0}",
      words_learned: "слов изучено",
      streak: "дней подряд",
      lessons_done: "уроков пройдено",
      cefr: "Уровень {0}",
      tab_grammar: "Грамматика",
      tab_words: "Слова",
      tab_dialogue: "Диалог",
      tab_phrases: "Фразы",
      tab_quiz: "Тест",
      everyday_hint: "👇 Готовые фразы — выучите наизусть, нужны с первого дня. Нажмите 🔊.",
      next: "Далее: {0} ➔",
      to_quiz: "Перейти к тесту ➔",
      tap_word: "👇 Нажмите на слово, чтобы услышать",
      play_all: "▶ Прослушать весь диалог",
      cultural: "🌍 Культурная заметка",
      grammar_rule: "📝 Как сказать",
      examples: "Примеры",
      q_of: "Вопрос {0} из {1}",
      correct: "✓ Верно!",
      wrong: "✗ Неверно. Правильно: {0}",
      finish: "Завершить урок",
      next_q: "Дальше →",
      result: "Результат",
      retry: "Пройти снова",
      to_hub: "На главную",
      done_banner: "Урок пройден! 🎉",
      done_low: "Повторите урок и попробуйте снова.",
      no_voice: "Нет голоса или интернета — звук недоступен",
      storage_full: "Не удалось сохранить прогресс (память браузера заполнена)",
      review_title: "Повторение",
      review_count: "{0} на сегодня",
      review_count_zero: "✓ На сегодня всё повторено",
      review_progress: "Осталось: {0}",
      review_done: "На сегодня всё повторено! 🎉",
      review_none_due: "На сегодня всё повторено. Возвращайтесь завтра 👍",
      review_tab_words: "Слова",
      review_tab_sounds: "Звуки",
      review_sub_words: "Карточки: вспомни слово",
      review_sub_sounds: "Тренируй звуки и чтение по буквам",
      review_next: "Дальше →",
      show_card: "Показать перевод",
      know: "✓ Знаю",
      again: "🔄 Ещё раз",
      cert_hub_title: "Мой прогресс",
      cert_hub_sub: "{0} из {1} уроков пройдено",
      cert_hub_sub_both: "A0–A1: {0}/{1} · A2: {2}/{3}",
      cert_hub_sub_three: "A0–A1: {0}/{1} · A2: {2}/{3} · B1: {4}/{5}",
      cert_title: "Сертификат A0-A1",
      cert_body_done: "Курс успешно завершён ✓",
      cert_body_progress: "Пройдено уроков: {0} из {1}",
      cert_locked: "🔒 Пройдите все {0} уроков — и получите именной сертификат на английском.",
      cert_name_hint: "Введите ваше имя",
      cert_name_caption: "👇 Впишите своё имя — оно появится на сертификате. Затем нажмите «Распечатать» или сохраните как PDF.",
      cert_print: "🖨️ Распечатать",
      reader_title: "Книга про Ахмада",
      reader_sub: "Читаем историю — глава за главой",
      reader_hub_sub: "{0} из {1} глав открыто",
      reader_hint_list: "👇 Главы открываются после уроков. Читайте по порядку.",
      reader_chapter: "Глава {0}",
      reader_read_badge: "прочитано",
      reader_locked: "🔒 Сначала пройдите урок {0}",
      reader_hint_read: "👇 Нажмите на предложение — покажу перевод. 🔊 — послушать. Синие слова новые — нажмите для подсказки.",
      reader_to_quiz: "Вопросы по главе ➔",
      reader_quiz_intro: "Проверим, что вы поняли:",
      reader_finish: "Завершить главу",
      reader_done: "Глава прочитана! 🎉",
      reader_next_ch: "Дальше: {0} ➔",
      reader_to_list: "К списку глав",
      reader_lib_title: "Книги",
      reader_lib_sub: "Истории для чтения",
      reader_lib_hint: "👇 Выберите книгу. Главы открываются после уроков.",
      reader_book_sub: "{0} из {1} глав открыто",
      level_a1: "Уровень 1 · A0–A1 · с нуля",
      level_a2: "Уровень 2 · A2 · продолжение",
      level_a2_locked: "🔒 Откроется после Урока {0}",
      level_b1: "Уровень 3 · B1 · уверенный",
      level_b1_locked: "🔒 Откроется после Урока {0}",
      journey_title: "🗺️ Ваш путь",
      journey_l1: "Уровень 1",
      journey_l2: "Уровень 2",
      journey_l3: "Уровень 3",
      journey_here: "📍 вы здесь",
      journey_done_all: "🎓 Все уровни пройдены!",
      cert_a2_title: "Сертификат A2",
      cert_a2_sub: "{0} из {1} уроков уровня 2",
      cert_see_a2: "🏆 Сертификат A2 (Уровень 2)",
      cert_see_a1: "🏆 Сертификат A0–A1 (Уровень 1)",
      cert_a2_locked: "🔒 Пройдите все {0} уроков уровня 2 — и получите именной сертификат A2.",
      ms_a2_title: "🎉 Уровень 2 пройден!",
      ms_a2_sub: "Вы прошли все {0} уроков уровня A2. Это большой шаг — поздравляем!",
      ms_a2_cert: "🏆 Открыть сертификат A2",
      cert_b1_title: "Сертификат B1",
      cert_b1_sub: "{0} из {1} уроков уровня 3",
      cert_see_b1: "🏆 Сертификат B1 (Уровень 3)",
      cert_b1_locked: "🔒 Пройдите все {0} уроков уровня 3 — и получите именной сертификат B1.",
      ms_b1_title: "🎉 Уровень 3 пройден!",
      ms_b1_sub: "Вы прошли все {0} уроков уровня B1. Отличная работа — поздравляем!",
      ms_b1_cert: "🏆 Открыть сертификат B1",
      ms_continue: "На главную",
      sc_title: "Ситуации выживания",
      sc_sub: "Что сказать в трудный момент",
      sc_hint: "👇 Выберите ситуацию. Выбирайте ответ — и узнаете, что лучше сказать.",
      sc_next: "Дальше →",
      sc_retry: "🔄 Пройти снова",
      sc_to_list: "К списку ситуаций",
      tags: {
        "[COMPLETE]": "✍️ Заполните пропуск",
        "[TRANSLATE]": "🗣️ Переведите",
        "[NEGATIVE]": "❌ Найдите отрицание",
        "[CORRECT]": "✅ Что правильно?",
        "[QUESTION]": "❓ Выберите вопрос",
        "[LISTEN]": "🎧 Прослушайте и выберите",
        "[GIST]": "📖 Понимание диалога",
        "[BUILD]": "🧩 Соберите фразу из слов",
      },
      listen_play: "▶ Слушать",
      build_ph: "👇 Нажимайте слова по порядку",
      build_check: "Проверить",
      build_wrong: "✗ Неверно. Правильно так:",
      mistakes_title: "🔍 Разбор ошибок",
      mistakes_sub: "Вы ответили {0} из {1}. Разберём то, что не получилось:",
      mistakes_answer: "Правильно:",
      drill_btn: "Потренировать ошибки ({0}) →",
      mastered_note: "Все ответы верны — урок засчитан. 👏",
      ai_title: "ИИ-учитель",
      ai_chat_btn: "🤖 Поговорить с учителем",
      ai_placeholder: "Напишите сообщение…",
      ai_send: "Отправить",
      ai_thinking: "Учитель печатает…",
      ai_err: "Ошибка: {0}",
      ai_settings_title: "Настройки ИИ-учителя",
      ai_settings_sub: "Подключите любой OpenAI-совместимый сервис (Groq, Ollama, OpenRouter…)",
      ai_settings_help: "💡 Быстрый старт: зайдите на groq.com, создайте бесплатный аккаунт, скопируйте API ключ. Адрес: https://api.groq.com/openai/v1  Модель: llama-3.3-70b-versatile",
      ai_url_label: "Адрес API",
      ai_url_ph: "https://api.groq.com/openai/v1",
      ai_key_label: "API ключ",
      ai_key_ph: "gsk_…",
      ai_model_label: "Модель",
      ai_model_ph: "llama-3.3-70b-versatile",
      ai_save: "Сохранить",
      ai_saved: "✓ Сохранено",
      ai_save_err: "Заполните адрес API и название модели",
      ai_hub_sub_on: "Подключён · нажмите для изменения",
      ai_hub_sub_off: "Не настроен · нажмите для настройки",
      help_toggle: "🤔 Не поняли? Нажмите — объясню проще",
      help_formula: "Запомните формулу:",
      help_yt: "Всё ещё непонятно? Видео на YouTube ▶",
      help_yt_offline_hint: "(нужен интернет)",
      help_return: "Посмотрите видео и вернитесь: нажмите «‹ Назад» и продолжайте урок.",
    },
  };
  var LANG = "ru";
  function t(key) {
    var s = (UI[LANG] && UI[LANG][key]) || (UI.ru[key]) || key;
    var args = arguments; // t(key, a, b, c, ...) -> {0}=a, {1}=b, ...
    return s.replace(/\{(\d+)\}/g, function (m, i) {
      var v = args[+i + 1];
      return v === undefined ? m : v;
    });
  }

  /* ---------- AI teacher config (stored in localStorage esw_ai) ---------- */
  // Build-time defaults: CI (pages.yml) replaces __GROQ_KEY__ with the GitHub secret.
  // User's manual settings (localStorage) always override these defaults.
  var AI_DEFAULTS = { url: "https://api.groq.com/openai/v1", key: "__GROQ_KEY__", model: "openai/gpt-oss-120b" };
  function getAIConfig() {
    try {
      var s = JSON.parse(localStorage.getItem("esw_ai") || "{}");
      if (s.url && s.model) return s;
      if (AI_DEFAULTS.key && AI_DEFAULTS.key.indexOf("__") !== 0) return AI_DEFAULTS;
      return {};
    } catch (e) { return {}; }
  }
  function saveAIConfig(cfg) {
    try { localStorage.setItem("esw_ai", JSON.stringify(cfg)); } catch (e) {}
  }
  function aiConfigured() {
    var c = getAIConfig(); return !!(c.url && c.model);
  }
  /* callAI: two modes depending on URL.
     - Ollama native (/api/chat): auto-detected when URL ends with /v1 pointing at local Ollama.
       Uses think:false to suppress reasoning output — nemotron-3-super:cloud works correctly.
     - OpenAI-compatible (/v1/chat/completions): used for Groq, OpenRouter, etc. */
  function callAI(messages, onSuccess, onError) {
    var cfg = getAIConfig();
    var baseUrl = cfg.url.replace(/\/+$/, "");
    var isOllama = /localhost|127\.0\.0\.1/.test(baseUrl);

    if (isOllama) {
      // Native Ollama API — think:false forces direct answer, no reasoning monologue
      var ollamaBase = baseUrl.replace(/\/v1$/, "");
      fetch(ollamaBase + "/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: cfg.model,
          messages: messages,
          think: false,
          stream: false,
          options: { temperature: 0.7, num_predict: 600 }
        })
      }).then(function (res) {
        if (!res.ok) return res.text().then(function (b) { onError("HTTP " + res.status + " — " + b.slice(0, 200)); });
        return res.json().then(function (data) {
          var content = data.message && data.message.content;
          if (content && content.trim()) onSuccess(content.trim());
          else onError("Пустой ответ от Ollama. Попробуйте ещё раз.");
        });
      }).catch(function (e) { onError(e.message || "Ошибка сети"); });
      return;
    }

    // OpenAI-compatible streaming (Groq, OpenRouter, etc.)
    fetch(baseUrl + "/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + (cfg.key || "none")
      },
      body: JSON.stringify({ model: cfg.model, messages: messages, stream: true, max_tokens: 600, temperature: 0.7 })
    }).then(function (res) {
      if (!res.ok) return res.text().then(function (b) { onError("HTTP " + res.status + " — " + b.slice(0, 200)); });
      var reader = res.body.getReader();
      var decoder = new TextDecoder();
      var buf = "";
      var text = "";
      function pump() {
        return reader.read().then(function (r) {
          if (r.done) {
            var out = text.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
            if (out) onSuccess(out); else onError("Пустой ответ от сервера.");
            return;
          }
          buf += decoder.decode(r.value, { stream: true });
          var lines = buf.split("\n"); buf = lines.pop();
          lines.forEach(function (line) {
            line = line.trim();
            if (!line || line === "data: [DONE]" || line.indexOf("data: ") !== 0) return;
            try {
              var d = JSON.parse(line.slice(6));
              var delta = d.choices && d.choices[0] && d.choices[0].delta;
              if (delta && typeof delta.content === "string") text += delta.content;
            } catch (e) {}
          });
          return pump();
        });
      }
      return pump();
    }).catch(function (e) { onError(e.message || "Ошибка сети"); });
  }

  /* Course tiers by FIXED lesson-id boundaries (not array length): 1..A1_MAX = A0-A1
     (certificate scope); A1_MAX+1..A2_MAX = A2; A2_MAX+1.. = B1. Fixed boundaries keep
     A2's milestone/certificate firing at L23 even after B1 lessons are appended — the
     B1 tier is decoupled from LESSONS.length. Each tier unlocks after the one below it
     is finished. See plan 2026-06-26-b1-scope (Phase 0). */
  var A1_MAX = 15;
  var A2_MAX = 23;
  function a1Done() { return Object.keys(store.done).filter(function (k) { return +k <= A1_MAX; }).length; }
  function a1Complete() { return a1Done() >= Math.min(A1_MAX, LESSONS.length); }
  function a2Total() { return Math.max(0, Math.min(A2_MAX, LESSONS.length) - A1_MAX); }
  function a2Done() { return Object.keys(store.done).filter(function (k) { return +k > A1_MAX && +k <= A2_MAX; }).length; }
  function a2Complete() { return a2Total() > 0 && a2Done() >= a2Total(); }
  function b1Total() { return Math.max(0, LESSONS.length - A2_MAX); }
  function b1Done() { return Object.keys(store.done).filter(function (k) { return +k > A2_MAX && +k <= LESSONS.length; }).length; }
  function b1Complete() { return b1Total() > 0 && b1Done() >= b1Total(); }
  function hasB1() { return LESSONS.length > A2_MAX; }
  // Hub level sections collapse once finished; the owner can re-open by tapping
  // the header (manual choice is remembered in store.collapsed[level]).
  function levelCollapsed(level, complete) {
    if (store.collapsed && typeof store.collapsed[level] === "boolean") return store.collapsed[level];
    return complete; // default: collapsed iff that level is fully done
  }
  function lessonsWord(n) { // Russian plural for "урок"
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return "урок";
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "урока";
    return "уроков";
  }

  /* ---------- storage ---------- */
  var KEY = "esw_progress_v1";
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); return true; }
    catch (e) { if (typeof toast === "function") toast(t("storage_full")); return false; }
  }
  var store = load();
  store.done = store.done || {};       // lessonId -> true
  store.words = store.words || 0;
  store.streak = store.streak || 0;
  store.last = store.last || "";
  store.srs = store.srs || {};         // Leitner SRS per word: { "<en>": { box: 1-5, due: <epoch-day int> } }
  store.srs_snd = store.srs_snd || {}; // Leitner SRS per SOUND/READING drill item ("rd:blk:i" / "ph:blk:pair:i" / "ph:blk:stress:i")
  store.certName = store.certName || "";
  store.certDate = store.certDate || ""; // YYYY-M-D, set once when the A0-A1 course is completed (15/15)
  store.certDateA2 = store.certDateA2 || ""; // YYYY-M-D, set once when the A2 level is completed
  store.msA2Shown = store.msA2Shown || false; // A2 celebration screen shown once
  store.certDateB1 = store.certDateB1 || ""; // YYYY-M-D, set once when the B1 level is completed
  store.msB1Shown = store.msB1Shown || false; // B1 celebration screen shown once

  function todayStr() { var d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function bumpStreak() {
    var today = todayStr();
    if (store.last === today) return;
    var y = new Date(); y.setDate(y.getDate() - 1);
    var yest = y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate();
    store.streak = store.last === yest ? store.streak + 1 : 1;
    store.last = today;
  }

  /* ---------- audio (Web Speech) ---------- */
  function speak(text) {
    if (!("speechSynthesis" in window)) return toast(t("no_voice"));
    if (!navigator.onLine && !speechSynthesis.getVoices().length) return toast(t("no_voice"));
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "en-GB";
      u.rate = 0.88;
      var v = speechSynthesis.getVoices().filter(function (x) { return /en-GB/i.test(x.lang); })[0];
      if (v) u.voice = v;
      u.onerror = function () { toast(t("no_voice")); };
      speechSynthesis.speak(u);
    } catch (e) { toast(t("no_voice")); }
  }
  if ("speechSynthesis" in window) speechSynthesis.getVoices();

  var toastEl = document.getElementById("toast"), toastT;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove("show"); }, 2200);
  }

  /* ---------- helpers ---------- */
  var app = document.getElementById("app");
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function spkBtn(text) { return '<button class="spk" data-spk="' + esc(text) + '">🔊</button>'; }
  function backBtnHTML() {
    return '<button class="float-back" id="back" type="button" aria-label="Назад">' +
      '<svg class="fb-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>' +
      "<span>Назад</span></button>";
  }

  /* ---------- HUB ---------- */
  function renderHub() {
    closeGloss();
    setRoute("");
    var done = Object.keys(store.done).length;
    var h = '<div class="hub-head"><h1>🌿 ' + t("app_title") + "</h1><p>" + t("app_subtitle") + "</p></div>";
    h += '<div class="stats">' +
      '<div class="stat"><div class="v">' + studiedWords() + '</div><div class="l">' + t("words_learned") + "</div></div>" +
      '<div class="stat"><div class="v">🔥 ' + store.streak + '</div><div class="l">' + t("streak") + "</div></div>" +
      '<div class="stat"><div class="v">' + done + "/" + LESSONS.length + '</div><div class="l">' + t("lessons_done") + "</div></div></div>";
    if (LESSONS.length > A1_MAX) h += journeyHTML();
    if (PHONETICS.length || READING_RULES.length) {
      h += '<div class="lesson-card" data-nav="sound">' +
        '<div class="num">🗣️</div>' +
        '<div class="body"><div class="t">' + t("sound_title") + '</div><div class="s">' + t("sound_sub") + "</div></div>" +
        '<div class="done" style="color:var(--text3)">›</div></div>';
    }
    if (PHRASEBOOK.length || SCENARIOS.length || BOOKS.length) {
      h += '<div class="lesson-card" data-nav="practice">' +
        '<div class="num">💬</div>' +
        '<div class="body"><div class="t">' + t("practice_title") + '</div><div class="s">' + t("practice_sub") + "</div></div>" +
        '<div class="done" style="color:var(--text3)">›</div></div>';
    }
    if (reviewPool().length || soundItems().length) {
      var due = dueReviewWords().length + dueSoundItems().length;
      h += '<div class="lesson-card" data-nav="review">' +
        '<div class="num">🔁</div>' +
        '<div class="body"><div class="t">' + t("review_title") + '</div>' +
        '<div class="s">' + (due ? t("review_count", due) : t("review_count_zero")) + '</div></div>' +
        '<div class="done" style="color:var(--text3)">›</div></div>';
    }
    h += '<div class="lesson-card" data-nav="ai-settings">' +
      '<div class="num">🤖</div>' +
      '<div class="body"><div class="t">' + t("ai_title") + '</div>' +
      '<div class="s">' + (aiConfigured() ? t("ai_hub_sub_on") : t("ai_hub_sub_off")) + '</div></div>' +
      '<div class="done" style="color:var(--text3)">›</div></div>';
    h += '<div class="lesson-card" data-nav="cert">' +
      '<div class="num">🏆</div>' +
      '<div class="body"><div class="t">' + t("cert_hub_title") + '</div>' +
      '<div class="s">' + (hasB1()
        ? t("cert_hub_sub_three", a1Done(), Math.min(A1_MAX, LESSONS.length), a2Done(), a2Total(), b1Done(), b1Total())
        : LESSONS.length > A1_MAX
        ? t("cert_hub_sub_both", a1Done(), Math.min(A1_MAX, LESSONS.length), a2Done(), a2Total())
        : t("cert_hub_sub", a1Done(), Math.min(A1_MAX, LESSONS.length))) + '</div></div>' +
      '<div class="done" style="color:var(--text3)">›</div></div>';
    var hasLevels = LESSONS.length > A1_MAX; // only group into levels once A2 lessons exist
    var a2Open = a1Complete();               // A2 unlocks after the A0–A1 course
    var b1Open = a2Complete();               // B1 unlocks after the A2 level
    function lessonCardHTML(les) {
      var isB1 = les.id > A2_MAX, isA2 = les.id > A1_MAX && !isB1;
      if ((isA2 && !a2Open) || (isB1 && !b1Open)) {
        return '<div class="lesson-card locked">' +
          '<div class="num">🔒</div>' +
          '<div class="body"><div class="t">' + esc(les.title_ru) + "</div></div></div>";
      }
      var isDone = store.done[les.id];
      var cls = isB1 ? " b1" : (isA2 ? " a2" : "");
      return '<div class="lesson-card' + cls + '" data-lesson="' + les.id + '">' +
        '<div class="num">' + les.id + "</div>" +
        '<div class="body"><div class="t">' + esc(les.title_ru) + "</div></div>" +
        (isDone ? '<div class="done">✓</div>' : '<div class="done" style="color:var(--text3)">›</div>') + "</div>";
    }
    if (hasLevels) {
      // Collapsible level sections (header is a toggle). A2 always present once we
      // have >15 lessons; B1 only once lessons 24+ exist (decoupled from array length).
      var sections = [
        { level: "a1", head: t("level_a1"), cls: "", complete: a1Complete(), lo: 1, hi: Math.min(A1_MAX, LESSONS.length) },
        { level: "a2", head: t("level_a2") + (a2Open ? "" : ' <span class="level-lock">' + t("level_a2_locked", A1_MAX) + "</span>"),
          cls: " a2", complete: a2Complete(), lo: A1_MAX + 1, hi: Math.min(A2_MAX, LESSONS.length) }
      ];
      if (hasB1()) sections.push(
        { level: "b1", head: t("level_b1") + (b1Open ? "" : ' <span class="level-lock">' + t("level_b1_locked", A2_MAX) + "</span>"),
          cls: " b1", complete: b1Complete(), lo: A2_MAX + 1, hi: LESSONS.length }
      );
      sections.forEach(function (sec) {
        var collapsed = levelCollapsed(sec.level, sec.complete);
        var count = sec.hi - sec.lo + 1;
        h += '<div class="level-head lvl-toggle' + sec.cls + (collapsed ? "" : " open") + '" data-level="' + sec.level + '">' +
          '<span class="lvl-chev">›</span>' +
          '<span class="lvl-title">' + sec.head + "</span>" +
          '<span class="lvl-count">' + count + " " + lessonsWord(count) + "</span>" +
          "</div>";
        h += '<div class="level-group' + (collapsed ? " collapsed" : "") + '" data-group="' + sec.level + '">';
        LESSONS.forEach(function (les) { if (les.id >= sec.lo && les.id <= sec.hi) h += lessonCardHTML(les); });
        h += "</div>";
      });
    } else {
      LESSONS.forEach(function (les) { h += lessonCardHTML(les); });
    }
    app.innerHTML = h;
    [].forEach.call(app.querySelectorAll(".lvl-toggle"), function (head) {
      head.onclick = function () {
        var level = head.dataset.level;
        var grp = app.querySelector('.level-group[data-group="' + level + '"]');
        if (!grp) return;
        var nowCollapsed = grp.classList.toggle("collapsed");
        head.classList.toggle("open", !nowCollapsed);
        store.collapsed = store.collapsed || {};
        store.collapsed[level] = nowCollapsed;
        save(store);
      };
    });
  }

  /* Visual "path" A0–A1 → A2 (→ B1 once those lessons exist): level stops with
     per-level % and a "you are here" marker. Light CSS only (cheap-Android safe). */
  function journeyHTML() {
    var b1 = hasB1();
    var a1t = Math.min(A1_MAX, LESSONS.length), a1d = a1Done();
    var a2t = a2Total(), a2d = a2Done();
    var b1t = b1Total(), b1d = b1Done();
    var a1pct = a1t ? Math.round(a1d / a1t * 100) : 0;
    var a2pct = a2t ? Math.round(a2d / a2t * 100) : 0;
    var b1pct = b1t ? Math.round(b1d / b1t * 100) : 0;
    // current level; 0 = all available levels done
    var cur = !a1Complete() ? 1 : (!a2Complete() ? 2 : (b1 && !b1Complete() ? 3 : 0));
    function step(n, label, sub, pct, frac, done, locked) {
      var cls = "jstep lvl" + n + (done ? " done" : "") + (cur === n ? " current" : "") + (locked ? " locked" : "");
      return '<div class="' + cls + '">' +
        '<div class="jbadge">' + (done ? "✓" : (locked ? "🔒" : n)) + '</div>' +
        '<div class="jname">' + label + (cur === n ? ' <span class="jhere">' + t("journey_here") + "</span>" : "") + "</div>" +
        '<div class="jsub">' + sub + "</div>" +
        '<div class="jbar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="jfrac">' + frac + (done ? " ✓" : "") + "</div></div>";
    }
    var h = '<div class="journey">' +
      '<div class="jrny-title">' + t("journey_title") +
        (cur === 0 ? ' <span class="jall">' + t("journey_done_all") + "</span>" : "") + "</div>" +
      '<div class="jrny-track">' +
        step(1, t("journey_l1"), "A0–A1", a1pct, a1d + "/" + a1t, a1Complete(), false) +
        '<div class="jconn' + (a1Complete() ? " on" : "") + '"></div>' +
        step(2, t("journey_l2"), "A2", a2pct, a2d + "/" + a2t, a2Complete(), !a1Complete());
    if (b1) h +=
        '<div class="jconn' + (a2Complete() ? " on" : "") + '"></div>' +
        step(3, t("journey_l3"), "B1", b1pct, b1d + "/" + b1t, b1Complete(), !a2Complete());
    return h + "</div></div>";
  }

  /* ---------- PHRASEBOOK (reference, snowball-exempt) ---------- */
  /* ---------- PRACTICE (one hub entry, three sub-tabs) ----------
     "Разговорник" (phrasebook.js) + "Ситуации" (scenarios.js) + "Книги" (reader.js)
     live under a single hub card with a segmented sub-tab bar. Deep links #phrasebook,
     #scenarios (+ #scenario/id) and #library (+ #book/...) still resolve; the three
     render* functions below are thin wrappers so every inner back button lands on the
     correct sub-tab. Inner screens (category / scenario play / book / chapter) untouched. */
  function renderPractice(tab) {
    closeGloss();
    var tabs = [];
    if (PHRASEBOOK.length) tabs.push("phrasebook");
    if (SCENARIOS.length) tabs.push("scenarios");
    if (BOOKS.length) tabs.push("library");
    if (!tabs.length) return renderHub();
    if (tabs.indexOf(tab) < 0) tab = tabs[0];
    setRoute(tab); // reload restores the same sub-tab; keeps #phrasebook/#scenarios/#library deep links valid
    var head = tab === "phrasebook" ? ["📒 " + t("phrasebook_title"), t("phrasebook_sub")]
      : tab === "scenarios" ? ["🆘 " + t("sc_title"), t("sc_hint")]
      : ["📚 " + t("reader_lib_title"), t("reader_lib_sub")];
    var h = backBtnHTML() +
      '<div class="hub-head" style="padding-top:46px"><h1>' + head[0] + "</h1><p>" + head[1] + "</p></div>";
    if (tabs.length > 1) {
      h += '<div class="tabs">';
      if (PHRASEBOOK.length) h += '<button class="tab' + (tab === "phrasebook" ? " on" : "") + '" data-practice="phrasebook">' + t("practice_tab_pb") + "</button>";
      if (SCENARIOS.length) h += '<button class="tab' + (tab === "scenarios" ? " on" : "") + '" data-practice="scenarios">' + t("practice_tab_sc") + "</button>";
      if (BOOKS.length) h += '<button class="tab' + (tab === "library" ? " on" : "") + '" data-practice="library">' + t("practice_tab_lib") + "</button>";
      h += "</div>";
    }
    if (tab === "phrasebook") {
      h += '<div class="card note">' + t("phrasebook_hint") + "</div>";
      PHRASEBOOK.forEach(function (c) {
        h += '<div class="lesson-card" data-cat="' + esc(c.cat) + '">' +
          '<div class="num">' + c.icon + "</div>" +
          '<div class="body"><div class="t">' + esc(c.title_ru) + '</div><div class="s">' + t("phrasebook_count", c.phrases.length) + "</div></div>" +
          '<div class="done" style="color:var(--text3)">›</div></div>';
      });
    } else if (tab === "scenarios") {
      SCENARIOS.forEach(function (sc) {
        h += '<div class="lesson-card sc-entry" data-sc="' + esc(sc.id) + '">' +
          '<div class="num">' + esc(sc.icon) + "</div>" +
          '<div class="body"><div class="t">' + esc(sc.title_ru) + '</div><div class="s">' + esc(sc.sub_ru) + "</div></div>" +
          '<div class="done" style="color:var(--text3)">›</div></div>';
      });
    } else {
      h += '<div class="card note">' + t("reader_lib_hint") + "</div>";
      BOOKS.forEach(function (bk) {
        var chs = bk.chapters || [];
        var open = chs.filter(function (c) { return chUnlocked(bk, c); }).length;
        var readN = chs.filter(function (c) { return chRead(bk, c); }).length;
        var allRead = chs.length && readN === chs.length;
        h += '<div class="lesson-card" data-book="' + esc(bk.id) + '">' +
          '<div class="num">' + bk.emoji + "</div>" +
          '<div class="body"><div class="t">' + esc(bk.title_ru) + "</div>" +
          '<div class="s">' + t("reader_book_sub", open, chs.length) + "</div></div>" +
          (allRead ? '<div class="done">✓</div>' : '<div class="done" style="color:var(--text3)">›</div>') + "</div>";
      });
    }
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderHub(); };
    app.querySelectorAll("[data-practice]").forEach(function (el) {
      el.onclick = function () { renderPractice(el.dataset.practice); };
    });
    app.querySelectorAll("[data-cat]").forEach(function (el) {
      el.onclick = function () { renderPhraseCategory(el.dataset.cat); };
    });
    app.querySelectorAll("[data-sc]").forEach(function (el) {
      el.onclick = function () { renderScenario(el.dataset.sc); };
    });
    app.querySelectorAll("[data-book]").forEach(function (el) {
      el.onclick = function () { var bk = bookById(el.dataset.book); if (bk) renderReaderList(bk); };
    });
  }

  function renderPhrasebook() { renderPractice("phrasebook"); }

  function renderPhraseCategory(cat) {
    var c = PHRASEBOOK.filter(function (x) { return x.cat === cat; })[0];
    if (!c) return renderPhrasebook();
    var h = backBtnHTML() +
      '<div class="l-head"><span class="pos">' + c.icon + '</span>' +
      '<div class="htitle"><div class="ttl">' + esc(c.title_ru) + '</div><div class="sub">' + t("phrasebook_title") + "</div></div></div>";
    h += '<div class="card">';
    c.phrases.forEach(function (p) {
      h += '<div class="ex-row">' + spkBtn(p.en) + '<div><div class="en">' + esc(p.en) +
        '</div><div class="tr">' + esc(p.transcr) + '</div><div class="ru">' + esc(p.ru) + "</div></div></div>";
    });
    h += "</div>";
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderPhrasebook(); };
    app.querySelectorAll("[data-spk]").forEach(function (el) {
      el.addEventListener("click", function () { speak(el.dataset.spk); });
    });
  }

  /* ---------- PHONETICS (pronunciation / listening trainer, snowball-exempt) ----------
     A training screen like the phrasebook: model (listen + repeat, no scoring) plus a
     receptive drill for the contrasts the Phase-0 probe confirmed the voice renders.
     No streak/done tracking — mastery practice, not an exam. ---------- */
  /* ---------- SOUND & READING (one hub entry, two sub-tabs) ----------
     "Звуки и слух" (phonetics.js, ear-training) + "Чтение по буквам" (reading.js,
     decoding) live under a single hub card with a segmented sub-tab bar. Deep links
     #phonetics[/id] and #reading[/id] still resolve; renderPhonetics/renderReading are
     thin wrappers so every unit's back button lands on the correct sub-tab. ---------- */
  function renderSound(tab) {
    var tabs = [];
    if (PHONETICS.length) tabs.push("phonetics");
    if (READING_RULES.length) tabs.push("reading");
    if (!tabs.length) return renderHub();
    if (tabs.indexOf(tab) < 0) tab = tabs[0];
    setRoute(tab); // reload restores the same sub-tab; keeps #phonetics/#reading deep links valid
    var isRd = tab === "reading";
    var h = backBtnHTML() +
      '<div class="hub-head" style="padding-top:46px"><h1>' +
      (isRd ? "🔤 " + t("reading_title") : "🗣️ " + t("phonetics_title")) + "</h1><p>" +
      (isRd ? t("reading_sub") : t("phonetics_sub")) + "</p></div>";
    if (tabs.length > 1) {
      h += '<div class="tabs">' +
        '<button class="tab' + (isRd ? "" : " on") + '" data-sound="phonetics">🗣️ ' + t("phonetics_title") + "</button>" +
        '<button class="tab' + (isRd ? " on" : "") + '" data-sound="reading">🔤 ' + t("reading_title") + "</button>" +
        "</div>";
    }
    h += '<div class="card note">' + (isRd ? t("reading_hint") : t("phonetics_hint")) + "</div>";
    if (isRd) {
      READING_RULES.forEach(function (blk) {
        var sub = blk.kind === "reference"
          ? t("rd_ref")
          : t("rd_count", (blk.patterns || []).length + (blk.check || []).length);
        h += '<div class="lesson-card" data-rd="' + esc(blk.id) + '">' +
          '<div class="num">' + blk.icon + "</div>" +
          '<div class="body"><div class="t">' + esc(blk.title_ru) + '</div><div class="s">' + sub + "</div></div>" +
          '<div class="done" style="color:var(--text3)">›</div></div>';
      });
    } else {
      PHONETICS.forEach(function (s) {
        h += '<div class="lesson-card" data-ph="' + esc(s.id) + '">' +
          '<div class="num">' + s.icon + "</div>" +
          '<div class="body"><div class="t">' + esc(s.title_ru) + '</div><div class="s">' + esc(s.goal_ru) + "</div></div>" +
          '<div class="done" style="color:var(--text3)">›</div></div>';
      });
    }
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderHub(); };
    app.querySelectorAll("[data-sound]").forEach(function (el) {
      el.onclick = function () { renderSound(el.dataset.sound); };
    });
    app.querySelectorAll("[data-ph]").forEach(function (el) {
      el.onclick = function () { renderPhoneticsUnit(el.dataset.ph); };
    });
    app.querySelectorAll("[data-rd]").forEach(function (el) {
      el.onclick = function () { renderReadingUnit(el.dataset.rd); };
    });
  }

  function renderPhonetics() { renderSound("phonetics"); }

  function renderPhoneticsUnit(id) {
    var s = PHONETICS.filter(function (x) { return x.id === id; })[0];
    if (!s) return renderPhonetics();
    setRoute("phonetics/" + id);
    var h = backBtnHTML() +
      '<div class="l-head"><span class="pos">' + s.icon + '</span>' +
      '<div class="htitle"><div class="ttl">' + esc(s.title_ru) + '</div><div class="sub">' + t("phonetics_title") + "</div></div></div>";
    h += '<div class="card note">' + esc(s.intro_ru) + "</div>";
    if (s.model && s.model.length) {
      h += '<div class="ph-sec">' + t("ph_model") + '</div><div class="card">';
      s.model.forEach(function (w) {
        h += '<div class="ex-row">' + spkBtn(w.en) + '<div><div class="en">' + esc(w.en) +
          '</div><div class="tr">' + esc(w.transcr) + '</div><div class="ru">' + esc(w.ru) + "</div></div></div>";
      });
      h += "</div>";
    }
    if (s.kind === "pairs") {
      h += '<div class="ph-sec">' + t("ph_drill") + "</div>";
      s.pairs.forEach(function (p, i) {
        h += '<div class="card ph-pair" data-i="' + i + '">' +
          '<button class="btn ghost ph-play" data-i="' + i + '">' + t("ph_listen") + "</button>" +
          '<div class="ph-opts">' +
          '<button class="opt" data-i="' + i + '" data-side="a">' + esc(p.a.en) + " <small>" + esc(p.a.transcr) + "</small></button>" +
          '<button class="opt" data-i="' + i + '" data-side="b">' + esc(p.b.en) + " <small>" + esc(p.b.transcr) + "</small></button>" +
          '</div><div class="q-fb ph-fb" data-i="' + i + '"></div></div>';
      });
    } else if (s.kind === "stress") {
      h += '<div class="ph-sec">' + t("ph_stress_drill") + "</div>";
      s.stress.forEach(function (w, i) {
        var chips = w.syll.map(function (sy, j) {
          return '<button class="opt ph-syll" data-i="' + i + '" data-j="' + j + '">' + esc(sy) + "</button>";
        }).join("");
        h += '<div class="card ph-stress" data-i="' + i + '">' +
          '<div class="ex-row">' + spkBtn(w.en) + '<div><div class="en">' + esc(w.en) +
          '</div><div class="ru">' + esc(w.ru) + "</div></div></div>" +
          '<div class="ph-sylls">' + chips + "</div>" +
          '<div class="q-fb ph-fb" data-i="' + i + '"></div></div>';
      });
    }
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderPhonetics(); };
    app.querySelectorAll("[data-spk]").forEach(function (el) {
      el.addEventListener("click", function () { speak(el.dataset.spk); });
    });
    if (s.kind === "pairs") wirePhPairs(s);
    if (s.kind === "stress") wirePhStress(s);
  }

  function phAgainBtn(card, id) {
    var again = document.createElement("button");
    again.className = "btn ghost ph-again";
    again.textContent = t("ph_again");
    again.onclick = function () { renderPhoneticsUnit(id); };
    card.appendChild(again);
  }

  function wirePhPairs(s) {
    s.pairs.forEach(function (p, i) {
      var card = app.querySelector('.ph-pair[data-i="' + i + '"]');
      if (!card) return;
      var answer = Math.random() < 0.5 ? "a" : "b"; // which member is "heard"
      card.querySelector(".ph-play").onclick = function () { speak(p[answer].en); };
      var fb = card.querySelector(".ph-fb");
      var answered = false;
      card.querySelectorAll(".opt").forEach(function (b) {
        b.onclick = function () {
          if (answered) return; answered = true;
          var right = b.dataset.side === answer;
          card.querySelectorAll(".opt").forEach(function (x) {
            x.style.pointerEvents = "none";
            if (x.dataset.side === answer) x.classList.add("correct");
            else if (x === b) x.classList.add("wrong");
          });
          fb.className = "q-fb ph-fb " + (right ? "ok" : "no");
          fb.textContent = right ? t("ph_correct") : t("ph_wrong", p[answer].en);
          phAgainBtn(card, s.id);
        };
      });
    });
  }

  function wirePhStress(s) {
    s.stress.forEach(function (w, i) {
      var card = app.querySelector('.ph-stress[data-i="' + i + '"]');
      if (!card) return;
      var fb = card.querySelector(".ph-fb");
      var answered = false;
      card.querySelectorAll(".ph-syll").forEach(function (b) {
        b.onclick = function () {
          if (answered) return; answered = true;
          var j = +b.dataset.j, right = j === w.hit;
          card.querySelectorAll(".ph-syll").forEach(function (x) {
            x.style.pointerEvents = "none";
            if (+x.dataset.j === w.hit) x.classList.add("correct");
            else if (x === b) x.classList.add("wrong");
          });
          fb.className = "q-fb ph-fb " + (right ? "ok" : "no");
          fb.textContent = right ? t("ph_correct") : t("ph_wrong", w.syll[w.hit].toUpperCase());
          phAgainBtn(card, s.id);
        };
      });
    });
  }

  /* ---------- READING (phonics / decoding trainer, snowball-exempt) ----------
     Companion to PHONETICS: teaches letter-combination -> sound RULES so the learner
     can decode a NEW word, not just recall memorised transcr. Examples are model+listen
     (no scoring); "check" items are a tap-to-choose transcr drill (decoys pulled from
     other words in the same block) — audio is revealed only AFTER the learner answers,
     so it can't be used as a shortcut. ---------- */
  function renderReading() { renderSound("reading"); }

  function renderReadingUnit(id) {
    var blk = READING_RULES.filter(function (x) { return x.id === id; })[0];
    if (!blk) return renderReading();
    setRoute("reading/" + id);
    if (blk.kind === "reference") return renderReadingReference(blk);
    var h = backBtnHTML() +
      '<div class="l-head"><span class="pos">' + blk.icon + '</span>' +
      '<div class="htitle"><div class="ttl">' + esc(blk.title_ru) + '</div><div class="sub">' + t("reading_title") + "</div></div></div>";
    h += '<div class="card note">' + esc(blk.rule_ru) + "</div>";
    h += '<div class="ph-sec">' + t("rd_patterns") + '</div><div class="card"><div class="g-table-wrap"><table class="g-table">' +
      "<thead><tr><td>Буквы</td><td>Звук</td><td>Пример</td><td></td></tr></thead><tbody>";
    (blk.patterns || []).forEach(function (p) {
      h += '<tr><td class="sj">' + esc(p.label) + '</td><td class="rt">' + esc(p.sound_ru) + "</td>" +
        '<td><div class="ex">' + esc(p.example.en) + '</div><div class="tr">' + esc(p.example.transcr) +
        '</div><div class="rt">' + esc(p.example.ru) + "</div></td><td>" + spkBtn(p.example.en) + "</td></tr>";
    });
    h += "</tbody></table></div></div>";
    h += '<div class="ph-sec">' + t("rd_check") + "</div>";
    (blk.check || []).forEach(function (c, i) {
      var opts = rdOptions(blk, i);
      h += '<div class="card rd-check" data-i="' + i + '">' +
        '<div class="en">' + esc(c.word.en) + "</div>" +
        '<div class="ph-opts">' + opts.map(function (o) {
          return '<button class="opt" data-i="' + i + '" data-t="' + esc(o) + '">' + esc(o) + "</button>";
        }).join("") + "</div>" +
        '<div class="q-fb ph-fb" data-i="' + i + '"></div></div>';
    });
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderReading(); };
    app.querySelectorAll("[data-spk]").forEach(function (el) {
      el.addEventListener("click", function () { speak(el.dataset.spk); });
    });
    wireRdCheck(blk);
  }

  // Reference block (kind:"reference"): the full IPA table, view-only — no "read it
  // yourself" drill, just symbol / keyword+🔊 / type. Additive path; does not touch the
  // patterns+check renderer above or the lesson quiz engine.
  function renderReadingReference(blk) {
    var h = backBtnHTML() +
      '<div class="l-head"><span class="pos">' + blk.icon + '</span>' +
      '<div class="htitle"><div class="ttl">' + esc(blk.title_ru) + '</div><div class="sub">' + t("reading_title") + "</div></div></div>";
    h += '<div class="card note">' + esc(blk.rule_ru) + "</div>";
    h += '<div class="card"><div class="g-table-wrap"><table class="g-table">' +
      "<thead><tr><td>" + t("rd_sym") + "</td><td>" + t("rd_word") + "</td><td>" + t("rd_type") + "</td><td></td></tr></thead><tbody>";
    (blk.ipa || []).forEach(function (r) {
      h += '<tr><td class="sj">' + esc(r.sym) + "</td>" +
        '<td><div class="ex">' + esc(r.en) + '</div><div class="tr">' + esc(r.transcr) +
        '</div><div class="rt">' + esc(r.ru) + "</div></td>" +
        '<td class="rt">' + esc(r.type_ru) + "</td><td>" + spkBtn(r.en) + "</td></tr>";
    });
    h += "</tbody></table></div></div>";
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderReading(); };
    app.querySelectorAll("[data-spk]").forEach(function (el) {
      el.addEventListener("click", function () { speak(el.dataset.spk); });
    });
  }

  // Build 3 shuffled transcr options (1 correct + 2 decoys from other words in the block).
  function rdOptions(blk, i) {
    var c = blk.check[i];
    var pool = (blk.patterns || []).map(function (p) { return p.example; })
      .concat((blk.check || []).map(function (x) { return x.word; }));
    var seenTranscr = {};
    var decoyPool = pool.filter(function (w) {
      if (w.en === c.word.en || w.transcr === c.word.transcr) return false;
      if (seenTranscr[w.transcr]) return false; // homophones (meet/meat "мит") must not both become decoys
      seenTranscr[w.transcr] = 1;
      return true;
    });
    var decoys = [];
    while (decoys.length < 2 && decoyPool.length) {
      var idx = Math.floor(Math.random() * decoyPool.length);
      decoys.push(decoyPool.splice(idx, 1)[0].transcr);
    }
    var opts = [c.word.transcr].concat(decoys);
    for (var j = opts.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var tmp = opts[j]; opts[j] = opts[k]; opts[k] = tmp;
    }
    return opts;
  }

  function wireRdCheck(blk) {
    (blk.check || []).forEach(function (c, i) {
      var card = app.querySelector('.rd-check[data-i="' + i + '"]');
      if (!card) return;
      var fb = card.querySelector(".ph-fb");
      var answered = false;
      card.querySelectorAll(".opt").forEach(function (b) {
        b.onclick = function () {
          if (answered) return; answered = true;
          var right = b.dataset.t === c.word.transcr;
          card.querySelectorAll(".opt").forEach(function (x) {
            x.style.pointerEvents = "none";
            if (x.dataset.t === c.word.transcr) x.classList.add("correct");
            else if (x === b) x.classList.add("wrong");
          });
          fb.className = "q-fb ph-fb " + (right ? "ok" : "no");
          fb.textContent = (right ? t("rd_correct") : t("rd_wrong", c.word.transcr)) + " " + c.hint_ru;
          var spk = document.createElement("button");
          spk.className = "spk"; spk.textContent = "🔊";
          spk.onclick = function () { speak(c.word.en); };
          fb.appendChild(spk);
          rdAgainBtn(card, blk.id);
        };
      });
    });
  }

  function rdAgainBtn(card, id) {
    var again = document.createElement("button");
    again.className = "btn ghost ph-again";
    again.textContent = t("ph_again");
    again.onclick = function () { renderReadingUnit(id); };
    card.appendChild(again);
  }

  /* ---------- SCENARIOS (survival role-plays) ---------- */
  var SC_SPK = { m: "Менеджер", w: "Рабочий", c: "Кассир", d: "Доктор", a: "Агентство", n: "Медсестра", r: "Регистратор" };

  function renderScenarioList() { renderPractice("scenarios"); }

  function renderScenario(id) {
    var sc = SCENARIOS.filter(function (x) { return x.id === id; })[0];
    if (!sc) { renderScenarioList(); return; }
    setRoute("scenario/" + id);
    var h = backBtnHTML() +
      '<div class="hub-head" style="padding-top:46px"><h1>' + esc(sc.icon) + ' ' + esc(sc.title_ru) + '</h1><p>' + esc(sc.sub_ru) + '</p></div>' +
      '<div class="note sc-intro">' + esc(sc.intro_ru) + '</div>' +
      '<div id="sc-play"></div>';
    app.innerHTML = h;
    document.getElementById("back").onclick = renderScenarioList;
    playScNode(sc, sc.start);
  }

  function playScNode(sc, nid) {
    var n = (sc.nodes || {})[nid];
    if (!n) { renderScenarioList(); return; }
    var play = document.getElementById("sc-play");
    if (!play) return;
    var bubbleH =
      '<div class="sc-bubble">' +
        '<div class="sc-spk-row"><div class="sc-speaker">' + esc(SC_SPK[n.speaker] || n.speaker || "") + '</div>' + spkBtn(n.en) + '</div>' +
        '<div class="sc-en">' + esc(n.en) + '</div>' +
        '<div class="sc-transcr">' + esc(n.transcr) + '</div>' +
        '<div class="sc-ru">' + esc(n.tr_ru) + '</div>' +
      '</div>';
    if (n.outcome) {
      var cls = "sc-outcome " + (n.outcome === "good" ? "good" : n.outcome === "bad" ? "bad" : "ok");
      play.innerHTML = bubbleH +
        '<div class="' + cls + '">' + esc(n.outcome_ru) + '</div>' +
        '<div class="sc-actions">' +
          '<button class="btn" id="sc-retry">' + t("sc_retry") + '</button>' +
          '<button class="btn ghost" id="sc-back-list">' + t("sc_to_list") + '</button>' +
        '</div>';
      play.querySelector("[data-spk]").onclick = function () { speak(n.en); };
      speak(n.en);
      document.getElementById("sc-retry").onclick = function () {
        var intro = app.querySelector(".sc-intro");
        if (intro) intro.style.display = "";
        play.innerHTML = "";
        playScNode(sc, sc.start);
      };
      document.getElementById("sc-back-list").onclick = renderScenarioList;
    } else {
      var choicesH = (n.choices || []).map(function (c, i) {
        return '<button class="sc-choice" data-ci="' + i + '">' +
          '<div class="sc-c-en">' + esc(c.en) + '</div>' +
          '<div class="sc-c-tr">' + esc(c.transcr) + ' — ' + esc(c.tr_ru) + '</div>' +
          '</button>';
      }).join("");
      play.innerHTML = bubbleH +
        '<div class="sc-choices">' + choicesH + '</div>' +
        '<div class="sc-feedback" id="sc-fb" style="display:none"></div>' +
        '<button class="btn" id="sc-next" style="display:none">' + t("sc_next") + '</button>';
      play.querySelector("[data-spk]").onclick = function () { speak(n.en); };
      speak(n.en);
      var nextNid = null;
      play.querySelectorAll(".sc-choice").forEach(function (btn) {
        btn.onclick = function () {
          var ci = +btn.dataset.ci;
          var ch = (n.choices || [])[ci];
          if (!ch) return;
          nextNid = ch.next;
          play.querySelectorAll(".sc-choice").forEach(function (b) { b.disabled = true; });
          var fb = document.getElementById("sc-fb");
          fb.textContent = ch.fb_ru;
          fb.className = "sc-feedback " + (ch.ok ? "ok" : "warn");
          fb.style.display = "";
          var intro = app.querySelector(".sc-intro");
          if (intro) intro.style.display = "none";
          var nb = document.getElementById("sc-next");
          nb.style.display = "";
          nb.onclick = function () { playScNode(sc, nextNid); };
        };
      });
    }
  }

  /* ---------- READER ("Книга про Ахмада") — graded story, snowball-bound ----------
     Chapter N unlocks after lesson N (store.done[id]). English is the main, large
     text; RU opens on tap; only the dosed "new" words (chapter.glossary) are blue
     and tappable -> popup with transcription + RU + audio. Blue words never enter
     store.words / SRS (passive recognition only). */
  function bookById(id) { return BOOKS.filter(function (b) { return b.id === id; })[0]; }
  function chapterIn(book, id) { return (book.chapters || []).filter(function (c) { return c.id === id; })[0]; }
  // A book is either snowball-gated (chapter N unlocks after lesson N, default) or
  // "fixed level": book.gate = the single lesson id that unlocks ALL its chapters at
  // once (e.g. 15 = after A0-A1). read-tracking is book-scoped (store.read["<book>:<ch>"])
  // so chapters that share an id across books don't collide.
  function chGate(book, ch) { return book.gate != null ? book.gate : ch.id; }
  function chUnlocked(book, ch) { return !!store.done[chGate(book, ch)]; }
  function rKey(book, ch) { return book.id + ":" + ch.id; }
  function chRead(book, ch) { return !!(store.read && store.read[rKey(book, ch)]); }

  /* gloss popup state (lives on <body>, so it survives app.innerHTML swaps -> close it explicitly) */
  var glossPop = null, glossDismiss = null;
  function closeGloss() {
    if (glossPop && glossPop.parentNode) glossPop.parentNode.removeChild(glossPop);
    glossPop = null;
    if (glossDismiss) { document.removeEventListener("click", glossDismiss, true); glossDismiss = null; }
  }
  function glossWordRe(ch) {
    var ws = (ch.glossary || []).map(function (g) { return String(g.en).toLowerCase().replace(/[^a-z']/g, ""); }).filter(Boolean);
    if (!ws.length) return null;
    return new RegExp("\\b(" + ws.join("|") + ")\\b", "gi");
  }
  // wrap glossary words (whole-word, case-insensitive) in blue tappable spans.
  // esc() first so we never inject raw markup; glossary words are pure letters,
  // so escaping can't break the word boundaries we match on.
  function glossHTML(text, ch) {
    var safe = esc(text);
    var re = glossWordRe(ch);
    if (!re) return safe;
    return safe.replace(re, function (m) {
      return '<span class="g-new" data-gloss="' + esc(m.toLowerCase()) + '">' + m + "</span>";
    });
  }
  function showGloss(span, ch) {
    closeGloss();
    var key = span.dataset.gloss;
    var g = (ch.glossary || []).filter(function (x) { return String(x.en).toLowerCase() === key; })[0];
    if (!g) return;
    var pop = document.createElement("div");
    pop.className = "gloss-pop";
    pop.innerHTML = spkBtn(g.en) +
      '<div class="gp-body"><div class="gp-en">' + esc(g.en) + "</div>" +
      '<div class="gp-tr">' + esc(g.transcr) + "</div>" +
      '<div class="gp-ru">' + esc(g.ru) + "</div></div>";
    document.body.appendChild(pop);
    glossPop = pop;
    // position above the tapped word, clamped to the viewport; flip below if no room
    var r = span.getBoundingClientRect();
    var pw = pop.offsetWidth, ph = pop.offsetHeight;
    var left = r.left + r.width / 2 - pw / 2;
    left = Math.max(8, Math.min(left, document.documentElement.clientWidth - pw - 8));
    var top = r.top - ph - 8;
    if (top < 8) top = r.bottom + 8;
    pop.style.left = left + "px";
    pop.style.top = (top + window.scrollY) + "px";
    pop.querySelector("[data-spk]").onclick = function (e) { e.stopPropagation(); speak(g.en); };
    speak(g.en);
    glossDismiss = function (e) {
      if (e.target.closest && (e.target.closest(".gloss-pop") || e.target.closest(".g-new"))) return;
      closeGloss();
    };
    setTimeout(function () { if (glossDismiss) document.addEventListener("click", glossDismiss, true); }, 0);
  }
  // Wire blue glossary words inside `scope` to their popup. Shared by the reader
  // (chapter glossary) and lessons (lesson.glossary). `src` is the object carrying
  // .glossary (a chapter or a lesson). Safe to call after each re-render.
  function wireGloss(scope, src) {
    if (!scope) return;
    scope.querySelectorAll(".g-new").forEach(function (el) {
      el.onclick = function (e) { e.stopPropagation(); showGloss(el, src); };
    });
  }

  // Library shelf: lists books (one now). Each card -> that book's chapter list.
  function renderLibrary() { renderPractice("library"); }

  function renderReaderList(book) {
    closeGloss();
    if (!book) { renderLibrary(); return; }
    setRoute("book/" + book.id);
    var h = backBtnHTML() +
      '<div class="hub-head" style="padding-top:46px"><h1>📖 ' + esc(book.title_ru) + "</h1><p>" + esc(book.sub_ru || "") + "</p></div>";
    h += '<div class="card note">' + t("reader_hint_list") + "</div>";
    (book.chapters || []).forEach(function (c, i) {
      var unlocked = chUnlocked(book, c);
      var read = chRead(book, c);
      if (unlocked) {
        h += '<div class="lesson-card" data-reader="' + c.id + '">' +
          '<div class="num">' + c.emoji + "</div>" +
          '<div class="body"><div class="t">' + esc(c.title_ru) + "</div>" +
          '<div class="s">' + t("reader_chapter", i + 1) + (read ? " · ✓ " + t("reader_read_badge") : "") + "</div></div>" +
          (read ? '<div class="done">✓</div>' : '<div class="done" style="color:var(--text3)">›</div>') + "</div>";
      } else {
        h += '<div class="lesson-card locked">' +
          '<div class="num">🔒</div>' +
          '<div class="body"><div class="t">' + esc(c.title_ru) + "</div>" +
          '<div class="s">' + t("reader_locked", chGate(book, c)) + "</div></div>" +
          '<div class="done" style="color:var(--text3)">🔒</div></div>';
      }
    });
    app.innerHTML = h;
    document.getElementById("back").onclick = renderLibrary;
    app.querySelectorAll("[data-reader]").forEach(function (el) {
      el.onclick = function () { var c = chapterIn(book, +el.dataset.reader); if (c) renderChapter(c, book); };
    });
  }

  function renderChapter(ch, book) {
    closeGloss();
    if (!chUnlocked(book, ch)) { renderReaderList(book); return; }   // locked chapters can't be opened directly
    setRoute("book/" + book.id + "/" + ch.id);
    var h = backBtnHTML() +
      '<div class="l-head"><span class="pos">' + ch.emoji + "</span>" +
      '<div class="htitle"><div class="ttl">' + esc(ch.title_ru) + '</div><div class="sub">' +
      esc(ch.title_en || "") + " · " + t("reader_chapter", ch.id) + "</div></div></div>";
    h += '<div class="card note">' + t("reader_hint_read") + "</div>";
    h += '<div class="card reader-text">';
    ch.sentences.forEach(function (s, i) {
      h += '<div class="read-sent">' + spkBtn(s.en) +
        '<div class="rs-body" data-i="' + i + '">' +
        '<div class="rs-en">' + glossHTML(s.en, ch) + "</div>" +
        '<div class="rs-ru hidden">' + esc(s.ru) + "</div></div></div>";
    });
    h += "</div>";
    h += '<button class="btn" id="r-quiz">' + t("reader_to_quiz") + "</button>";
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderReaderList(book); };
    app.querySelectorAll("[data-spk]").forEach(function (el) {
      el.addEventListener("click", function (e) { e.stopPropagation(); speak(el.dataset.spk); });
    });
    app.querySelectorAll(".rs-body").forEach(function (b) {
      b.onclick = function (e) {
        if (e.target.closest(".g-new")) return;            // blue word -> popup, not RU toggle
        b.querySelector(".rs-ru").classList.toggle("hidden");
      };
    });
    app.querySelectorAll(".g-new").forEach(function (el) {
      el.onclick = function (e) { e.stopPropagation(); showGloss(el, ch); };
    });
    document.getElementById("r-quiz").onclick = function () { renderChapterQuiz(ch, book); };
  }

  function renderChapterQuiz(ch, book) {
    closeGloss();
    var qs = ch.quiz || [];
    if (!qs.length) { finishChapter(ch, book); return; }
    setRoute("book/" + book.id + "/" + ch.id + "/q");
    var h = backBtnHTML() +
      '<div class="l-head"><span class="pos">' + ch.emoji + "</span>" +
      '<div class="htitle"><div class="ttl">' + esc(ch.title_ru) + '</div><div class="sub">' + t("reader_quiz_intro") + "</div></div></div>" +
      '<div id="rquizroot"></div>';
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderChapter(ch, book); };
    var root = document.getElementById("rquizroot");
    var qIdx = 0;
    function drawQ() {
      var q = qs[qIdx];
      var order = shuffle(q.opts_ru.map(function (_, i) { return i; }));
      var opts = order.map(function (k) { return q.opts_ru[k]; });
      var cIdx = order.indexOf(q.c);
      root.innerHTML = '<div class="card"><div class="q-hint">' + t("q_of", qIdx + 1, qs.length) + "</div>" +
        '<div class="q-text">' + esc(q.q_ru) + "</div>" +
        '<div class="opts">' + opts.map(function (o, i) {
          return '<button class="opt" data-i="' + i + '">' + esc(o) + "</button>";
        }).join("") + '</div><div class="q-fb hidden" id="rfb"></div>' +
        '<button class="btn hidden" id="rnext"></button></div>';
      var answered = false;
      root.querySelectorAll(".opt").forEach(function (b) {
        b.onclick = function () {
          if (answered) return; answered = true;
          var i = +b.dataset.i, fb = document.getElementById("rfb");
          root.querySelectorAll(".opt").forEach(function (x) { x.style.pointerEvents = "none"; });
          root.querySelectorAll(".opt")[cIdx].classList.add("correct");
          if (i === cIdx) { fb.className = "q-fb ok"; fb.textContent = t("correct"); }
          else { b.classList.add("wrong"); fb.className = "q-fb no"; fb.textContent = t("wrong", opts[cIdx]); }
          var nb = document.getElementById("rnext");
          nb.textContent = qIdx + 1 < qs.length ? t("next_q") : t("reader_finish");
          nb.classList.remove("hidden");
          nb.onclick = function () { qIdx++; if (qIdx < qs.length) drawQ(); else finishChapter(ch, book); };
        };
      });
    }
    drawQ();
  }

  // Reading is a learning action -> bump the streak (first read only), but NEVER
  // touch store.words / SRS: blue words stay passive (contract decision #10).
  function finishChapter(ch, book) {
    closeGloss();
    store.read = store.read || {};
    var first = !chRead(book, ch);
    store.read[rKey(book, ch)] = true;
    if (first) bumpStreak();
    save(store);
    setRoute("book/" + book.id + "/" + ch.id);
    var next = (book.chapters || []).filter(function (c) { return c.id > ch.id && chUnlocked(book, c); })
      .sort(function (a, b) { return a.id - b.id; })[0];
    var h = backBtnHTML() +
      '<div class="hub-head" style="padding-top:46px"><h1>🎉</h1><p>' + t("reader_done") + "</p></div>" +
      '<div class="bar"><i style="width:100%"></i></div>';
    if (next) h += '<button class="btn" id="r-next-ch" style="margin-top:20px">' + t("reader_next_ch", esc(next.title_ru)) + "</button>";
    h += '<button class="btn ghost" id="r-list" style="margin-top:8px">' + t("reader_to_list") + "</button>";
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderReaderList(book); };
    if (next) document.getElementById("r-next-ch").onclick = function () { renderChapter(next, book); };
    document.getElementById("r-list").onclick = function () { renderReaderList(book); };
  }

  /* ---------- REVIEW (one card, two sub-tabs: Слова | Звуки) ----------
     "Слова" = self-rated Leitner flashcards (meaning can't be auto-checked offline).
     "Звуки" = auto-graded drills resurfaced from phonetics.js (pairs / stress) and
     reading.js (decoding checks) on a separate SRS bucket (store.srs_snd). Same
     Leitner schedule, same in-session "wrong → back of queue" loop as the words. ---------- */
  function reviewDoneHTML(msg) {
    return '<div style="text-align:center;margin-top:22px"><div style="font-size:44px">🎉</div>' +
      '<p style="color:var(--text2);margin:6px 0 12px">' + msg + "</p></div>" +
      '<div class="bar"><i style="width:100%"></i></div>';
  }
  function rvProgressHTML(left, total) {
    var pct = total ? Math.round((total - left) / total * 100) : 0;
    return '<p style="color:var(--text3);font-size:13px;margin:0 0 8px">' + t("review_progress", left) + "</p>" +
      '<div class="bar"><i style="width:' + pct + '%"></i></div>';
  }
  function reviewTabs() {
    var tabs = [];
    if (reviewPool().length) tabs.push("words");
    if (soundItems().length) tabs.push("sounds");
    return tabs;
  }
  function renderReviewHub(tab) {
    var tabs = reviewTabs();
    if (!tabs.length) { renderHub(); return; }
    if (tabs.indexOf(tab) < 0) tab = tabs[0];
    var isSnd = tab === "sounds";
    setRoute(isSnd ? "review/sounds" : "review");
    var h = backBtnHTML() +
      '<div class="hub-head" style="padding-top:46px"><h1>🔁 ' + t("review_title") + "</h1><p>" +
      (isSnd ? t("review_sub_sounds") : t("review_sub_words")) + "</p></div>";
    if (tabs.length > 1) {
      h += '<div class="tabs">' +
        '<button class="tab' + (isSnd ? "" : " on") + '" data-review="words">📖 ' + t("review_tab_words") + "</button>" +
        '<button class="tab' + (isSnd ? " on" : "") + '" data-review="sounds">🗣️ ' + t("review_tab_sounds") + "</button>" +
        "</div>";
    }
    h += '<div id="rv-body"></div>';
    app.innerHTML = h;
    document.getElementById("back").onclick = renderHub;
    app.querySelectorAll("[data-review]").forEach(function (el) {
      el.onclick = function () { renderReviewHub(el.dataset.review); };
    });
    var body = document.getElementById("rv-body");
    if (isSnd) runSoundReview(body); else runWordReview(body);
  }
  function renderReview() { renderReviewHub("words"); }

  // Words: self-rated flashcards (know -> box up, again -> box 1 + requeue this session).
  function runWordReview(body) {
    var queue = shuffle(dueReviewWords());
    var total = queue.length;
    if (!total) { body.innerHTML = reviewDoneHTML(t("review_none_due")); return; }
    function draw() {
      var w = queue[0];
      body.innerHTML = rvProgressHTML(queue.length, total) +
        '<div class="flashcard"><div class="fc-e">' + w.e + '</div>' +
        '<div class="fc-ru">' + esc(w.ru) + "</div></div>" +
        '<button class="btn" id="fc-show">' + t("show_card") + "</button>";
      document.getElementById("fc-show").onclick = function () {
        body.querySelector(".flashcard").innerHTML =
          '<div class="fc-e">' + w.e + "</div>" +
          '<button class="spk" id="fc-spk" style="margin:0 auto">🔊</button>' +
          '<div class="fc-en">' + esc(w.en) + "</div>" +
          '<div class="fc-tr">' + esc(w.transcr) + "</div>" +
          '<div class="fc-ru">' + esc(w.ru) + "</div>";
        document.getElementById("fc-spk").onclick = function () { speak(w.en); };
        speak(w.en);
        var btns = document.createElement("div");
        btns.className = "review-btns";
        btns.innerHTML =
          '<button class="btn" id="fc-know">' + t("know") + "</button>" +
          '<button class="btn ghost" id="fc-again">' + t("again") + "</button>";
        document.getElementById("fc-show").replaceWith(btns);
        document.getElementById("fc-know").onclick = function () {
          srsRate(w.en, true); queue.shift();
          if (queue.length) draw(); else body.innerHTML = reviewDoneHTML(t("review_done"));
        };
        document.getElementById("fc-again").onclick = function () {
          srsRate(w.en, false); queue.push(queue.shift()); draw();
        };
      };
    }
    draw();
  }

  // Sounds: auto-graded. Each item renders its native drill (reading decoding check /
  // phonetics minimal-pair / phonetics stress); correct -> box up + drop, wrong -> box 1
  // + requeue. A "Дальше →" button advances so the learner sees the right answer first.
  function runSoundReview(body) {
    var queue = shuffle(dueSoundItems());
    var total = queue.length;
    if (!total) { body.innerHTML = reviewDoneHTML(t("review_none_due")); return; }
    function advance(right) {
      if (right) queue.shift(); else queue.push(queue.shift());
      if (queue.length) draw(); else body.innerHTML = reviewDoneHTML(t("review_done"));
    }
    function finish(card, fb, right, wrongMsg, speakEn) {
      srsRateSnd(queue[0].key, right);
      fb.className = "q-fb ph-fb " + (right ? "ok" : "no");
      fb.textContent = right ? t("ph_correct") : wrongMsg;
      if (speakEn) {
        var spk = document.createElement("button");
        spk.className = "spk"; spk.textContent = "🔊";
        spk.onclick = function () { speak(speakEn); };
        fb.appendChild(spk);
      }
      var nx = document.createElement("button");
      nx.className = "btn ph-again"; nx.textContent = t("review_next");
      nx.onclick = function () { advance(right); };
      card.appendChild(nx);
    }
    function draw() {
      var it = queue[0];
      var h = rvProgressHTML(queue.length, total);
      if (it.type === "rd") {
        var c = it.blk.check[it.i], opts = rdOptions(it.blk, it.i);
        h += '<div class="card rd-check"><div class="en">' + esc(c.word.en) + "</div>" +
          '<div class="ph-opts">' + opts.map(function (o) {
            return '<button class="opt" data-t="' + esc(o) + '">' + esc(o) + "</button>";
          }).join("") + '</div><div class="q-fb ph-fb"></div></div>';
        body.innerHTML = h;
        var card = body.querySelector(".rd-check"), fb = card.querySelector(".ph-fb"), done = false;
        card.querySelectorAll(".opt").forEach(function (b) {
          b.onclick = function () {
            if (done) return; done = true;
            var right = b.dataset.t === c.word.transcr;
            card.querySelectorAll(".opt").forEach(function (x) {
              x.style.pointerEvents = "none";
              if (x.dataset.t === c.word.transcr) x.classList.add("correct");
              else if (x === b) x.classList.add("wrong");
            });
            finish(card, fb, right, t("rd_wrong", c.word.transcr) + " " + c.hint_ru, c.word.en);
          };
        });
      } else if (it.type === "pair") {
        var p = it.s.pairs[it.i];
        h += '<div class="card ph-pair"><button class="btn ghost ph-play">' + t("ph_listen") + "</button>" +
          '<div class="ph-opts">' +
          '<button class="opt" data-side="a">' + esc(p.a.en) + " <small>" + esc(p.a.transcr) + "</small></button>" +
          '<button class="opt" data-side="b">' + esc(p.b.en) + " <small>" + esc(p.b.transcr) + "</small></button>" +
          '</div><div class="q-fb ph-fb"></div></div>';
        body.innerHTML = h;
        var pcard = body.querySelector(".ph-pair"), pfb = pcard.querySelector(".ph-fb"), pdone = false;
        var ans = Math.random() < 0.5 ? "a" : "b";
        pcard.querySelector(".ph-play").onclick = function () { speak(p[ans].en); };
        pcard.querySelectorAll(".opt").forEach(function (b) {
          b.onclick = function () {
            if (pdone) return; pdone = true;
            var right = b.dataset.side === ans;
            pcard.querySelectorAll(".opt").forEach(function (x) {
              x.style.pointerEvents = "none";
              if (x.dataset.side === ans) x.classList.add("correct");
              else if (x === b) x.classList.add("wrong");
            });
            finish(pcard, pfb, right, t("ph_wrong", p[ans].en), p[ans].en);
          };
        });
      } else {
        var w = it.s.stress[it.i];
        var chips = w.syll.map(function (sy, j) {
          return '<button class="opt ph-syll" data-j="' + j + '">' + esc(sy) + "</button>";
        }).join("");
        h += '<div class="card ph-stress"><div class="ex-row">' + spkBtn(w.en) +
          '<div><div class="en">' + esc(w.en) + '</div><div class="ru">' + esc(w.ru) + "</div></div></div>" +
          '<div class="ph-sylls">' + chips + '</div><div class="q-fb ph-fb"></div></div>';
        body.innerHTML = h;
        var scard = body.querySelector(".ph-stress"), sfb = scard.querySelector(".ph-fb"), sdone = false;
        scard.querySelectorAll("[data-spk]").forEach(function (el) {
          el.addEventListener("click", function () { speak(el.dataset.spk); });
        });
        scard.querySelectorAll(".ph-syll").forEach(function (b) {
          b.onclick = function () {
            if (sdone) return; sdone = true;
            var j = +b.dataset.j, right = j === w.hit;
            scard.querySelectorAll(".ph-syll").forEach(function (x) {
              x.style.pointerEvents = "none";
              if (+x.dataset.j === w.hit) x.classList.add("correct");
              else if (x === b) x.classList.add("wrong");
            });
            finish(scard, sfb, right, t("ph_wrong", w.syll[w.hit].toUpperCase()), w.en);
          };
        });
      }
    }
    draw();
  }

  /* ---------- CERTIFICATE ---------- */
  var CERT_MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  function fmtCertDate(s) {
    var p = String(s || "").split("-");
    if (p.length < 3) return s || "";
    var d = parseInt(p[2], 10), m = parseInt(p[1], 10) - 1;
    return d + " " + (CERT_MONTHS[m] || "") + " " + p[0];
  }
  function certSealSVG(sealText, lvl) {
    var ringDark = lvl === "b1" ? "#0b5a54" : lvl === "a2" ? "#4a2fa0" : "#005bb0",
        ring = lvl === "b1" ? "#0f766e" : lvl === "a2" ? "#6b46c1" : "#0075de";
    return '<svg class="cert-seal" viewBox="0 0 120 132" width="88" height="97" role="img" aria-label="Seal">' +
      '<path d="M46 96 L34 130 L52 118 L60 132 L60 100 Z" fill="' + ringDark + '"/>' +
      '<path d="M74 96 L86 130 L68 118 L60 132 L60 100 Z" fill="' + ring + '"/>' +
      '<circle cx="60" cy="56" r="50" fill="#fff8e6" stroke="#c9a227" stroke-width="3"/>' +
      '<circle cx="60" cy="56" r="40" fill="#c9a227"/>' +
      '<circle cx="60" cy="56" r="40" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="1.5 4"/>' +
      '<path d="M42 57 L54 70 L80 42" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';
  }

  // level: undefined/"a1" (A0-A1 course, lessons 1..A1_MAX) | "a2" (A2 level) | "b1" (B1 level).
  // Mirror screens; honest disclaimer, no fake serial number (see certificate-honest-completion-record).
  function renderCertificate(level) {
    var lvl = level === "a2" ? "a2" : level === "b1" ? "b1" : "a1";
    var isA2 = lvl === "a2", isB1 = lvl === "b1";
    setRoute(isB1 ? "cert-b1" : isA2 ? "cert-a2" : "cert");
    var total = isB1 ? b1Total() : isA2 ? a2Total() : Math.min(A1_MAX, LESSONS.length);
    var done = isB1 ? b1Done() : isA2 ? a2Done() : a1Done();
    var isComplete = total > 0 && done >= total;
    var dateKey = isB1 ? "certDateB1" : isA2 ? "certDateA2" : "certDate";
    var hubTitle = isB1 ? t("cert_b1_title") : isA2 ? t("cert_a2_title") : t("cert_hub_title");
    var lockMsg = isB1 ? t("cert_b1_locked", total) : isA2 ? t("cert_a2_locked", total) : t("cert_locked", total);
    // Cross-links between the three certificate levels (triple navigation:
    // Мой прогресс A0–A1 ↔ A2 ↔ B1). The A2/B1 certs live inside this screen,
    // not as their own hub tiles. A higher level isn't dangled until the
    // previous one is complete (mirrors the journey-path gating).
    var crossDefs = [];
    if (lvl !== "a1") crossDefs.push({ to: "", key: "cert_see_a1", cls: "" });
    if (lvl !== "a2" && LESSONS.length > A1_MAX && a1Complete()) crossDefs.push({ to: "a2", key: "cert_see_a2", cls: " a2" });
    if (lvl !== "b1" && hasB1() && a2Complete()) crossDefs.push({ to: "b1", key: "cert_see_b1", cls: " b1" });
    var crossBtnHTML = crossDefs.map(function (d) {
      return '<button class="btn ghost' + d.cls + '" data-cross="' + d.to + '" style="margin-top:8px">' + t(d.key) + '</button>';
    }).join("");
    function wireCross() {
      Array.prototype.forEach.call(document.querySelectorAll("[data-cross]"), function (b) {
        b.onclick = function () { renderCertificate(b.dataset.cross || undefined); };
      });
    }

    // Before the level is finished: Russian progress screen, certificate locked.
    if (!isComplete) {
      var pct = total ? Math.round(done / total * 100) : 0;
      app.innerHTML = backBtnHTML() +
        '<div class="hub-head" style="padding-top:46px"><h1>🏆 ' + hubTitle + '</h1></div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="card note" style="text-align:center">' + t("cert_body_progress", done, total) + '</div>' +
        '<div class="cert-locked">' + lockMsg + '</div>' +
        crossBtnHTML +
        '<button class="btn ghost" id="cert-hub" style="margin-top:8px">' + t("to_hub") + '</button>';
      document.getElementById("back").onclick = renderHub;
      document.getElementById("cert-hub").onclick = renderHub;
      wireCross();
      return;
    }

    if (!store[dateKey]) { store[dateKey] = todayStr(); save(store); }
    var nameVal = store.certName || "";
    var words = studiedWords();
    var levelLine = isB1 ? "Pre-intermediate self-study course · CEFR B1 level"
                  : isA2 ? "Elementary self-study course · CEFR A2 level"
                  : "Beginner self-study course · CEFR A0–A1 level";
    var courseLine = isB1 ? "has completed the pre-intermediate self-study course"
                   : isA2 ? "has completed the elementary self-study course"
                   : "has completed the beginner self-study course";
    app.innerHTML = backBtnHTML() +
      '<div class="cert cert-full' + (isA2 ? " a2" : isB1 ? " b1" : "") + '"><div class="cert-frame">' +
        certSealSVG(isB1 ? "B1" : isA2 ? "A2" : "A0–A1", lvl) +
        '<div class="cert-kicker">Certificate of Completion</div>' +
        '<div class="cert-present">This is to certify that</div>' +
        '<input class="cert-name" id="cert-name" type="text" autocomplete="name" ' +
          'placeholder="' + esc(t("cert_name_hint")) + '" value="' + esc(nameVal) + '">' +
        '<div class="cert-present">' + courseLine + '</div>' +
        '<div class="cert-course">' + esc(t("app_title")) + '</div>' +
        '<div class="cert-level">' + levelLine + '</div>' +
        '<div class="cert-meta">' + total + ' lessons completed · ' + words + ' words learned</div>' +
        '<div class="cert-foot"><div class="cert-foot-col"><div class="cert-foot-v">' + fmtCertDate(store[dateKey]) + '</div><div class="cert-foot-l">Date completed</div></div></div>' +
        '<div class="cert-issuer">English for Seasonal Workers · Free self-study app</div>' +
        '<div class="cert-disc">A record of completing a free self-study course. Not an official language qualification, exam, or proof of English level.</div>' +
        '<div class="cert-disc cert-disc-ru">Отметка о прохождении бесплатного самостоятельного курса. Не официальная квалификация, не экзамен и не подтверждение уровня английского.</div>' +
      '</div></div>' +
      '<div class="cert-hint-ru">' + t("cert_name_caption") + '</div>' +
      '<button class="btn" id="cert-print" style="margin-top:14px">' + t("cert_print") + '</button>' +
      crossBtnHTML +
      '<button class="btn ghost" id="cert-hub" style="margin-top:8px">' + t("to_hub") + '</button>';

    wireCross();
    document.getElementById("back").onclick = renderHub;
    document.getElementById("cert-hub").onclick = renderHub;
    document.getElementById("cert-name").oninput = function (e) {
      store.certName = e.target.value;
      save(store);
    };
    document.getElementById("cert-print").onclick = function () { window.print(); };
  }

  /* Celebration screen shown once when a level is completed (last lesson of A2 or B1). */
  function renderMilestone(level) {
    var isB1 = level === "b1";
    setRoute("");
    app.innerHTML =
      '<div class="milestone' + (isB1 ? " b1" : "") + '"><div class="ms-burst">🎉</div>' +
        '<h1>' + t(isB1 ? "ms_b1_title" : "ms_a2_title") + '</h1>' +
        '<p>' + t(isB1 ? "ms_b1_sub" : "ms_a2_sub", isB1 ? b1Total() : a2Total()) + '</p>' +
        '<button class="btn" id="ms-cert">' + t(isB1 ? "ms_b1_cert" : "ms_a2_cert") + '</button>' +
        '<button class="btn ghost" id="ms-hub">' + t("ms_continue") + '</button></div>';
    document.getElementById("ms-cert").onclick = function () { renderCertificate(isB1 ? "b1" : "a2"); };
    document.getElementById("ms-hub").onclick = renderHub;
  }

  /* ---------- LESSON ---------- */
  function tabsFor(les) {
    return les.everyday
      ? ["grammar", "words", "dialogue", "phrases", "quiz"]
      : ["grammar", "words", "dialogue", "quiz"];
  }
  function tabLabel(x) { return t("tab_" + x); }

  function renderLesson(les, tab) {
    closeGloss();                       // drop any popup left open when switching tabs
    tab = tab || "grammar";
    setRoute("l" + les.id + "/" + tab);
    var tabs = tabsFor(les);
    var h = backBtnHTML() +
      '<div class="l-head"><span class="pos">' + les.id + "/" + LESSONS.length + "</span>" +
      '<div class="htitle"><div class="ttl">' + esc(les.title_ru) + '</div><div class="sub">' + esc(les.cefr) + "</div></div></div>";
    h += '<div class="tabs">' + tabs.map(function (x) {
      return '<button class="tab' + (x === tab ? " on" : "") + '" data-tab="' + x + '">' + tabLabel(x) + "</button>";
    }).join("") + "</div>";
    h += '<div id="tabbody"></div>';
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderHub(); };
    app.querySelectorAll(".tab").forEach(function (b) {
      b.onclick = function () { renderLesson(les, b.dataset.tab); };
    });
    var body = document.getElementById("tabbody");
    body.innerHTML = bodyFor(les, tab);
    wireBody(les, tab);
    wireGloss(body, les);               // blue receptive-glossary words (B1+); no-op without lesson.glossary
    // generic "Далее" button to the next tab (quiz manages its own flow)
    var idx = tabs.indexOf(tab);
    if (tab !== "quiz" && idx > -1 && idx < tabs.length - 1) {
      var nextTab = tabs[idx + 1];
      var nb = document.createElement("button");
      nb.className = "btn";
      nb.textContent = t("next", t("tab_" + nextTab));
      nb.onclick = function () { renderLesson(les, nextTab); };
      body.appendChild(nb);
    }
  }

  function bodyFor(les, tab) {
    if (tab === "grammar") return grammarBody(les);
    if (tab === "words") return wordsBody(les);
    if (tab === "dialogue") return dialogueBody(les);
    if (tab === "phrases") return everydayBody(les);
    return quizBody(les);
  }

  function everydayBody(les) {
    var e = les.everyday;
    var h = "";
    // optional reference block (alphabet / numbers grid) as its OWN card above the phrases —
    // separates passive reference from the practice phrases. Not snowball/audit-checked.
    if (e.html) h += '<div class="card ev-ref">' + e.html + "</div>";
    h += '<div class="card note">' + t("everyday_hint") + "</div>";
    h += '<div class="card"><div class="g-h">' + esc(e.title_ru) + "</div>";
    e.phrases.forEach(function (p) {
      h += '<div class="ex-row">' + spkBtn(p.en) + '<div><div class="en">' + esc(p.en) +
        '</div><div class="tr">' + esc(p.transcr) + '</div><div class="ru">' + esc(p.ru) + "</div></div></div>";
    });
    return h + "</div>";
  }

  /* wrap the "❌ wrong / ✅ right / 👉 tip" intro into tinted blocks (red/green). Only
     touches intros that use the ❌+✅ pattern; others (❓, 👉-lists) pass through unchanged. */
  function formatIntro(html) {
    var inner = html.replace(/^\s*<div[^>]*>/, "").replace(/<\/div>\s*$/, "");
    var lines = inner.split(/<br\s*\/?>/);
    if (/❌/.test(html) && /✅/.test(html)) {                     // "wrong vs right" pattern -> red/green/tip
      var bad = [], good = [], tip = [], pre = [], cur = null;
      lines.forEach(function (ln) {
        if (/👉/.test(ln)) cur = tip;                            // tip first (may contain the word "ошибка")
        else if (/✅/.test(ln) || /Правильно/i.test(ln)) cur = good;
        else if (/❌/.test(ln) || /ошибк|нельзя/i.test(ln)) cur = bad;
        (cur || pre).push(ln);
      });
      var out = "";
      if (pre.join("").trim()) out += pre.join("<br>");
      if (bad.length) out += '<div class="intro-bad">' + bad.join("<br>") + "</div>";
      if (good.length) out += '<div class="intro-good">' + good.join("<br>") + "</div>";
      if (tip.length) out += '<div class="intro-tip">' + tip.join("<br>") + "</div>";
      return out;
    }
    if (/👉|❓/.test(html)) {                                     // bullet-list pattern -> lead + point blocks
      var lead = [], points = [];                                 // points = array of line-groups
      lines.forEach(function (ln) {
        if (/👉|❓/.test(ln)) points.push([ln]);                  // new point starts at each marker
        else if (points.length) points[points.length - 1].push(ln); // continuation line stays in the same block
        else lead.push(ln);                                       // preamble before the first marker
      });
      var o = "";
      if (lead.join("").trim()) o += '<div class="intro-lead">' + lead.join("<br>") + "</div>";
      points.forEach(function (grp) { o += '<div class="intro-point">' + grp.join("<br>") + "</div>"; });
      return o;
    }
    return html;
  }
  function grammarBody(les) {
    var g = les.grammar;
    var h = '<div class="card"><div class="g-h">' + esc(g.title_ru) + "</div>" + formatIntro(g.intro_ru) + "</div>";
    if (g.visual_ru) h += '<div class="card g-visual">' + g.visual_ru + "</div>";
    h += '<div class="card rule-card"><div class="g-h">' + t("grammar_rule") + "</div>" +
      '<div class="forms">' + ["positive", "negative", "question"].map(function (f, i) {
        return '<button class="formbtn' + (i === 0 ? " on" : "") + '" data-form="' + f + '">' + esc(g.forms[f].label_ru) + "</button>";
      }).join("") + "</div>" +
      '<div id="formbox"></div></div>';
    h += '<div class="card cultural"><b>' + t("cultural") + "</b><div>" + g.cultural_ru + "</div></div>";
    h += '<div class="card note">' + g.note_ru + "</div>";
    h += '<div class="card"><div class="g-h">' + t("examples") + "</div>";
    g.examples.forEach(function (ex) {
      h += '<div class="ex-row">' + spkBtn(ex.en) + '<div><div class="en">' + glossHTML(ex.en, les) +
        '</div><div class="tr">' + esc(ex.transcr) + '</div><div class="ru">' + esc(ex.ru) + "</div></div></div>";
    });
    h += "</div>";
    h += helpBlock(g);
    return h;
  }

  /* collapsed "explain simpler" escalation: formula + mini-examples + YouTube last resort */
  function helpBlock(g) {
    var s = g.simple_ru;
    if (!s) return "";
    var h = '<div class="help-block">' +
      '<button class="help-toggle" id="help-toggle" type="button" aria-expanded="false" aria-controls="help-panel">' +
      esc(t("help_toggle")) + "</button>" +
      '<div class="help-panel hidden" id="help-panel">' +
      '<div class="help-formula"><span class="help-formula-lbl">' + esc(t("help_formula")) + "</span>" + s.formula + "</div>";
    (s.examples || []).forEach(function (ex) {
      h += '<div class="ex-row">' + spkBtn(ex.en) + '<div><div class="en">' + esc(ex.en) +
        '</div><div class="tr">' + esc(ex.transcr) + '</div><div class="ru">' + esc(ex.ru) + "</div></div></div>";
    });
    if (g.ytQuery) {
      h += '<a class="help-yt" href="https://www.youtube.com/results?search_query=' +
        esc(encodeURIComponent(g.ytQuery)) + '" target="_blank" rel="noopener">' +
        esc(t("help_yt")) + ' <span class="help-yt-hint">' + esc(t("help_yt_offline_hint")) + "</span></a>" +
        '<div class="help-return">' + esc(t("help_return")) + "</div>";
    }
    return h + "</div></div>";
  }
  function formTable(form, les) {
    var h = form.rule_ru + '<div class="g-table-wrap"><table class="g-table" style="margin-top:10px">' +
      "<thead><tr><td>Кто</td><td>Глагол</td><td>Пример</td><td></td></tr></thead><tbody>";
    form.table.forEach(function (r) {
      h += '<tr><td class="sj">' + esc(r.subj) + '</td><td class="vb">' + esc(r.verb) + "</td>" +
        '<td><div class="ex">' + glossHTML(r.example, les) + '</div><div class="tr">' + esc(r.transcr) +
        '</div><div class="rt">' + esc(r.tr_ru) + "</div></td><td>" + spkBtn(r.example) + "</td></tr>";
    });
    return h + "</tbody></table></div>";
  }

  function wordsBody(les) {
    var h = '<div class="card note">' + t("tap_word") + "</div><div class='words'>";
    les.words.forEach(function (w) {
      h += '<div class="word" data-spk="' + esc(w.en) + '"><div class="e">' + w.e + '</div><div class="en">' +
        esc(w.en) + '</div><div class="tr">' + esc(w.transcr) + '</div><div class="ru">' + esc(w.ru) + "</div></div>";
    });
    h += "</div>";
    return h;
  }

  function dialogueBody(les) {
    var h = "<button class='btn ghost' id='playall'>" + t("play_all") + "</button>";
    les.dialogue.forEach(function (d) {
      h += '<div class="line ' + d.s + '">' + spkBtn(d.en) + '<div class="bubble"><div class="en">' + glossHTML(d.en, les) +
        '</div><div class="tr">' + esc(d.transcr) + '</div><div class="ru">' + esc(d.ru) + "</div></div></div>";
    });
    return h;
  }

  function quizBody() { return '<div id="quizroot"></div>'; }

  /* ---------- wiring ---------- */
  function wireBody(les, tab) {
    app.querySelectorAll("[data-spk]").forEach(function (el) {
      el.addEventListener("click", function () { speak(el.dataset.spk); });
    });
    if (tab === "grammar") {
      var g = les.grammar;
      var box = document.getElementById("formbox");
      function showForm(f) {
        box.innerHTML = formTable(g.forms[f], les);
        box.querySelectorAll("[data-spk]").forEach(function (el) { el.onclick = function () { speak(el.dataset.spk); }; });
        wireGloss(box, les);            // re-wire glosses inside the form table on each switch
      }
      showForm("positive");
      app.querySelectorAll(".formbtn").forEach(function (b) {
        b.onclick = function () {
          app.querySelectorAll(".formbtn").forEach(function (x) { x.classList.remove("on"); });
          b.classList.add("on"); showForm(b.dataset.form);
        };
      });
      var ht = document.getElementById("help-toggle");
      if (ht) ht.onclick = function () {
        var panel = document.getElementById("help-panel");
        var nowHidden = panel.classList.toggle("hidden");
        ht.setAttribute("aria-expanded", nowHidden ? "false" : "true");
      };
    }
    if (tab === "words") {
      countWords(les);
    }
    if (tab === "dialogue") {
      document.getElementById("playall").onclick = function () { playAll(les.dialogue); };
    }
    if (tab === "quiz") runQuiz(les);
  }

  function countWords(les) {
    if (!store.seen) store.seen = {};
    if (!store.seen[les.id]) { store.seen[les.id] = true; store.words += les.words.length; save(store); }
  }
  // Headline counter = words from COMPLETED lessons (derived), so finishing a
  // lesson visibly moves it — independent of which tabs were opened.
  function studiedWords() {
    return LESSONS.reduce(function (n, les) { return n + (store.done[les.id] ? les.words.length : 0); }, 0);
  }

  function playAll(lines, i) {
    i = i || 0;
    if (i >= lines.length || !("speechSynthesis" in window)) return;
    speak(lines[i].en);
    var delay = lines[i].en.length * 70 + 900;
    setTimeout(function () { playAll(lines, i + 1); }, delay);
  }

  /* ---------- review helpers ---------- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function reviewPool() {
    var pool = [];
    if (!store.seen) return pool;
    LESSONS.forEach(function (les) {
      if (store.seen[les.id]) pool = pool.concat(les.words);
    });
    return pool;
  }
  /* ---- Leitner spaced repetition: known -> box up (shown later), again -> box 1 (soon) ---- */
  var SRS_INTERVAL = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 14 }; // box -> days until due again
  function todayNum() { return Math.floor(Date.now() / 86400000); }
  function srsRate(en, known) {
    var s = store.srs[en] || { box: 1 };
    s.box = known ? Math.min((s.box || 1) + 1, 5) : 1;
    s.due = todayNum() + SRS_INTERVAL[s.box];
    store.srs[en] = s;
    save(store);
  }
  function dueReviewWords() {
    var today = todayNum();
    return reviewPool().filter(function (w) {
      var s = store.srs[w.en];
      return !s || s.due <= today; // never-rated or due today/overdue
    });
  }

  /* ---- SOUND/READING review pool: the auto-gradeable drill items from phonetics.js
     (pairs / stress — "listen"-only model rows have no objective answer, excluded) and
     reading.js (decoding checks). Each item carries a stable key for its own SRS bucket
     (store.srs_snd), so a reading "shop" never collides with a lesson word "shop". ---- */
  function soundItems() {
    var items = [];
    READING_RULES.forEach(function (blk) {
      if (blk.kind === "reference") return;
      (blk.check || []).forEach(function (c, i) {
        items.push({ key: "rd:" + blk.id + ":" + i, type: "rd", blk: blk, i: i });
      });
    });
    PHONETICS.forEach(function (s) {
      if (s.kind === "pairs") (s.pairs || []).forEach(function (p, i) {
        items.push({ key: "ph:" + s.id + ":pair:" + i, type: "pair", s: s, i: i });
      });
      else if (s.kind === "stress") (s.stress || []).forEach(function (w, i) {
        items.push({ key: "ph:" + s.id + ":stress:" + i, type: "stress", s: s, i: i });
      });
    });
    return items;
  }
  function srsRateSnd(key, known) {
    var s = store.srs_snd[key] || { box: 1 };
    s.box = known ? Math.min((s.box || 1) + 1, 5) : 1;
    s.due = todayNum() + SRS_INTERVAL[s.box];
    store.srs_snd[key] = s;
    save(store);
  }
  function dueSoundItems() {
    var today = todayNum();
    return soundItems().filter(function (it) {
      var s = store.srs_snd[it.key];
      return !s || s.due <= today;
    });
  }

  /* ---------- quiz trainer (mastery: drill your mistakes until none remain) ---------- */
  function runQuiz(les) {
    var root = document.getElementById("quizroot");
    var fullQuiz = les.quiz, round, idx, wrong, roundCorrect, allWrong = [];
    function markWrong(q) { if (wrong.indexOf(q) < 0) wrong.push(q); if (allWrong.indexOf(q) < 0) allWrong.push(q); }
    function next() { idx++; if (idx < round.length) show(); else roundEnd(); }
    function startRound(items) { round = items; idx = 0; wrong = []; roundCorrect = 0; show(); }
    function show() {
      var q = round[idx];
      if (/\[BUILD\]/.test(q.q)) { showBuild(q); return; }
      // Shuffle options per render so the correct answer isn't always c:0
      // (otherwise tapping the first button passes every quiz). Remap c -> cIdx.
      var order = shuffle(q.opts.map(function (_, i) { return i; }));
      var opts = order.map(function (k) { return q.opts[k]; });
      var cIdx = order.indexOf(q.c);
      var tag = (q.q.match(/\[[A-Z]+\]/) || [""])[0];
      var label = (UI[LANG].tags && UI[LANG].tags[tag]) || "";
      var text = q.q.replace(/\[[A-Z]+\]\s*/, "");
      var isListen = tag === "[LISTEN]";
      var qBody = isListen
        ? '<div class="q-label">' + esc(label) + "</div>" +
          '<button class="btn ghost spk-listen" id="listen-play" type="button">' + t("listen_play") + "</button>"
        : '<div class="q-text">' + esc(label ? label + ": " : "") + esc(text) + "</div>" +
          (q.hint_ru ? '<div class="q-hint">' + esc(q.hint_ru) + "</div>" : "");
      var h = '<div class="card"><div class="q-hint">' + t("q_of", idx + 1, round.length) + "</div>" +
        qBody +
        '<div class="opts">' + opts.map(function (o, i) {
          return '<button class="opt" data-i="' + i + '">' + esc(o) + "</button>";
        }).join("") + '</div><div class="q-fb hidden" id="fb"></div>' +
        '<button class="btn hidden" id="nextq"></button></div>';
      root.innerHTML = h;
      if (isListen) {
        var lp = document.getElementById("listen-play");
        if (lp) lp.onclick = function () { speak(text); };
      }
      var answered = false;
      root.querySelectorAll(".opt").forEach(function (b) {
        b.onclick = function () {
          if (answered) return; answered = true;
          var i = +b.dataset.i, fb = document.getElementById("fb");
          root.querySelectorAll(".opt").forEach(function (x) { x.style.pointerEvents = "none"; });
          root.querySelectorAll(".opt")[cIdx].classList.add("correct");
          if (i === cIdx) { roundCorrect++; fb.className = "q-fb ok"; fb.textContent = t("correct") + " " + (q.expl || ""); }
          else { b.classList.add("wrong"); markWrong(q); fb.className = "q-fb no"; fb.textContent = t("wrong", opts[cIdx]) + " " + (q.expl || ""); }
          var nb = document.getElementById("nextq");
          nb.textContent = idx + 1 < round.length ? t("next_q") : t("finish");
          nb.classList.remove("hidden");
          nb.onclick = next;
        };
      });
    }
    /* tap-to-build production task: tap word tiles into the right order, then check */
    function showBuild(q) {
      var target = q.build || [];
      var tiles = shuffle(target.map(function (w, i) { return { w: w, id: i }; }));
      var placed = []; // tile ids in tap order
      var answered = false;
      var hint = (UI[LANG].tags && UI[LANG].tags["[BUILD]"]) || "";
      function wordOf(id) { for (var i = 0; i < tiles.length; i++) if (tiles[i].id === id) return tiles[i].w; return ""; }
      function render() {
        var line = placed.map(function (id) {
          return '<button class="tile placed" data-id="' + id + '">' + esc(wordOf(id)) + "</button>";
        }).join("");
        var pool = tiles.filter(function (tl) { return placed.indexOf(tl.id) < 0; })
          .map(function (tl) { return '<button class="tile" data-id="' + tl.id + '">' + esc(tl.w) + "</button>"; }).join("");
        var ready = placed.length === target.length;
        root.innerHTML = '<div class="card"><div class="q-hint">' + t("q_of", idx + 1, round.length) + "</div>" +
          '<div class="q-text">' + esc(hint) + "</div>" +
          (q.hint_ru ? '<div class="q-hint">' + esc(q.hint_ru) + "</div>" : "") +
          '<div class="build-line" id="bline">' + (line || '<span class="build-ph">' + t("build_ph") + "</span>") + "</div>" +
          '<div class="build-pool" id="bpool">' + pool + "</div>" +
          '<button class="btn" id="bcheck"' + (ready ? "" : " disabled") + ">" + t("build_check") + "</button>" +
          '<div class="q-fb hidden" id="fb"></div>' +
          '<button class="btn hidden" id="nextq"></button></div>';
        if (answered) return;
        root.querySelectorAll("#bpool .tile").forEach(function (b) {
          b.onclick = function () { placed.push(+b.dataset.id); render(); };
        });
        root.querySelectorAll("#bline .tile").forEach(function (b) {
          b.onclick = function () { placed.splice(placed.indexOf(+b.dataset.id), 1); render(); };
        });
        var bc = document.getElementById("bcheck");
        if (bc) bc.onclick = check;
      }
      function check() {
        if (answered) return;
        answered = true;
        var assembled = placed.map(wordOf);
        var ok = assembled.length === target.length && assembled.every(function (w, i) { return w === target[i]; });
        var correctSentence = target.join(" ");
        render(); // locks tiles (answered = true)
        var fb = document.getElementById("fb");
        if (ok) { roundCorrect++; fb.className = "q-fb ok"; fb.textContent = t("correct") + " " + (q.expl || ""); speak(correctSentence); }
        else { markWrong(q); fb.className = "q-fb no"; fb.textContent = t("build_wrong") + " " + (q.expl || ""); }
        var bc = document.getElementById("bcheck"); if (bc) bc.classList.add("hidden");
        root.querySelectorAll(".tile").forEach(function (x) { x.style.pointerEvents = "none"; });
        var nb = document.getElementById("nextq");
        nb.textContent = idx + 1 < round.length ? t("next_q") : t("finish");
        nb.classList.remove("hidden");
        nb.onclick = next;
      }
      render();
    }

    function answerText(q) {
      if (/\[BUILD\]/.test(q.q)) return (q.build || []).join(" ");
      return (q.opts && typeof q.c === "number") ? q.opts[q.c] : "";
    }
    function roundEnd() {
      if (!wrong.length) { finishMastered(); return; }
      var missed = wrong.slice();
      var h = '<div class="card"><div class="g-h">' + t("mistakes_title") + "</div>" +
        '<div class="q-hint">' + t("mistakes_sub", roundCorrect, round.length) + "</div>";
      missed.forEach(function (q) {
        var qt = q.q.replace(/\[[A-Z]+\]\s*/, "");
        h += '<div class="mistake"><div class="en">' + esc(qt) + "</div>" +
          '<div class="ru"><b>' + t("mistakes_answer") + "</b> " + esc(answerText(q)) + "</div>" +
          (q.expl ? '<div class="tr">' + esc(q.expl) + "</div>" : "") + "</div>";
      });
      h += "</div>" +
        '<button class="btn" id="drill">' + t("drill_btn", missed.length) + "</button>" +
        '<button class="btn ghost" id="hb">' + t("to_hub") + "</button>";
      root.innerHTML = h;
      document.getElementById("drill").onclick = function () {
        var set = missed.concat(missed);           // drill each missed item twice
        if (set.length > 12) set = missed.slice();  // cap when many mistakes
        startRound(shuffle(set));
      };
      document.getElementById("hb").onclick = function () { renderHub(); };
    }
    function finishMastered() {
      store.done[les.id] = true; bumpStreak(); save(store);
      // Completing the lesson that finishes a level → celebration screen (once).
      // Scoped by id-range so each level's milestone fires only on its own range.
      if (les.id > A1_MAX && les.id <= A2_MAX && a2Complete() && !store.msA2Shown) {
        store.msA2Shown = true; save(store);
        renderMilestone("a2"); return;
      }
      if (les.id > A2_MAX && b1Complete() && !store.msB1Shown) {
        store.msB1Shown = true; save(store);
        renderMilestone("b1"); return;
      }
      root.innerHTML = '<div class="card result"><div class="score">🎉</div>' +
        "<h3>" + t("done_banner") + "</h3>" +
        '<div class="q-hint">' + t("mastered_note") + "</div>" +
        (aiConfigured() ? '<button class="btn ai-chat-btn" id="ai-chat">' + t("ai_chat_btn") + "</button>" : "") +
        '<button class="btn" id="rt">' + t("retry") + "</button>" +
        '<button class="btn ghost" id="hb">' + t("to_hub") + "</button></div>";
      if (aiConfigured()) {
        var snap = allWrong.slice();
        document.getElementById("ai-chat").onclick = function () { renderAIChat(les, snap); };
      }
      document.getElementById("rt").onclick = function () { runQuiz(les); };
      document.getElementById("hb").onclick = function () { renderHub(); };
    }
    startRound(fullQuiz.slice());
  }

  /* ---------- AI settings screen ---------- */
  function renderAISettings() {
    var cfg = getAIConfig();
    var configured = !!(cfg.url && cfg.model);
    setRoute("ai-settings");
    app.innerHTML =
      '<button class="float-back" id="back"><span class="fb-arrow">‹</span> Назад</button>' +
      '<div class="hub-head" style="padding-top:46px"><h1>🤖 ' + t("ai_settings_title") + '</h1>' +
      '<p>' + t("ai_settings_sub") + '</p></div>' +
      '<div class="card ai-settings-form">' +
        '<div class="ai-field"><label>' + t("ai_url_label") + '</label>' +
        '<input id="ai-url" type="url" placeholder="' + t("ai_url_ph") + '" value="' + esc(cfg.url || "") + '"/></div>' +
        '<div class="ai-field"><label>' + t("ai_key_label") + '</label>' +
        '<input id="ai-key" type="password" placeholder="' + t("ai_key_ph") + '" value="' + esc(cfg.key || "") + '"/></div>' +
        '<div class="ai-field"><label>' + t("ai_model_label") + '</label>' +
        '<input id="ai-model" type="text" placeholder="' + t("ai_model_ph") + '" value="' + esc(cfg.model || "") + '"/></div>' +
        '<div id="ai-status" class="ai-status"></div>' +
        '<button class="btn" id="ai-save">' + t("ai_save") + '</button>' +
      '</div>' +
      (configured
        ? '<button class="btn ai-chat-btn" id="ai-pick">🤖 ' + t("ai_chat_btn") + '</button>'
        : '') +
      '<div class="card note">' + t("ai_settings_help") + '</div>';
    document.getElementById("back").onclick = renderHub;
    document.getElementById("ai-save").onclick = function () {
      var url = document.getElementById("ai-url").value.trim();
      var key = document.getElementById("ai-key").value.trim();
      var model = document.getElementById("ai-model").value.trim();
      var st = document.getElementById("ai-status");
      if (!url || !model) { st.textContent = t("ai_save_err"); st.className = "ai-status err"; return; }
      saveAIConfig({ url: url, key: key, model: model });
      st.textContent = t("ai_saved"); st.className = "ai-status ok";
      // show chat button after first save
      if (!document.getElementById("ai-pick")) {
        var btn = document.createElement("button");
        btn.className = "btn ai-chat-btn"; btn.id = "ai-pick";
        btn.textContent = "🤖 " + t("ai_chat_btn");
        btn.onclick = renderAILessonPicker;
        document.querySelector(".card.note").before(btn);
      }
    };
    if (configured) document.getElementById("ai-pick").onclick = renderAILessonPicker;
  }

  /* ---------- AI lesson picker ---------- */
  function renderAILessonPicker() {
    setRoute("ai-pick");
    var lvlLabels = { a1: "A0–A1", a2: "A2", b1: "B1" };
    function lesLevel(les) {
      if (les.id <= A1_MAX) return "a1";
      if (les.id <= A2_MAX) return "a2";
      return "b1";
    }
    var groups = [
      { key: "a1", label: "Уровень 1 · A0–A1", accent: "var(--accent)" },
      { key: "a2", label: "Уровень 2 · A2", accent: "var(--accent-a2)" },
      { key: "b1", label: "Уровень 3 · B1", accent: "var(--accent-b1)" }
    ];
    var h = '<button class="float-back" id="back"><span class="fb-arrow">‹</span> Назад</button>' +
      '<div class="hub-head" style="padding-top:46px"><h1>🤖 Выберите урок</h1>' +
      '<p>Учитель обсудит с вами любой урок</p></div>';
    groups.forEach(function (g) {
      var lessons = LESSONS.filter(function (l) { return lesLevel(l) === g.key; });
      if (!lessons.length) return;
      h += '<div class="level-head ' + g.key + '">' + g.label + '</div>';
      lessons.forEach(function (les) {
        h += '<div class="lesson-card ai-pick-card" data-ai-les="' + les.id + '">' +
          '<div class="num" style="background:none;color:' + g.accent + ';font-weight:800">' + les.id + '</div>' +
          '<div class="body"><div class="t">' + esc(les.title_ru || "") + '</div>' +
          '<div class="s">' + esc(les.cefr || "") + (les.grammar && les.grammar.rule_ru ? " · " + esc(les.grammar.rule_ru.slice(0, 40)) : "") + '</div></div>' +
          '<div class="done" style="color:var(--text3)">›</div></div>';
      });
    });
    app.innerHTML = h;
    document.getElementById("back").onclick = renderAISettings;
    app.querySelectorAll("[data-ai-les]").forEach(function (card) {
      card.onclick = function () {
        var id = +card.dataset.aiLes;
        var les = LESSONS.filter(function (l) { return l.id === id; })[0];
        if (les) renderAIChat(les, []);
      };
    });
  }

  /* ---------- AI chat screen ---------- */
  function renderAIChat(les, mistakes) {
    var history = []; // assistant/user turns after the initial seed

    function buildSystem() {
      var words = (les.words || []).slice(0, 12).map(function (w) { return w.en + " — " + w.ru; }).join(", ");
      var rule = les.grammar && les.grammar.rule_ru ? les.grammar.rule_ru : "";
      var missed = mistakes && mistakes.length
        ? mistakes.map(function (q) {
            var qt = q.q.replace(/\[[A-Z]+\]\s*/, "");
            var ans = q.opts ? q.opts[q.c] : (q.build || []).join(" ");
            return qt + " → " + ans;
          }).join("; ")
        : null;
      return "You are a patient English teacher. Reply ONLY in Russian. Be direct — give your response immediately, no meta-commentary.\n\n" +
        "Student: farm worker from CIS countries in the UK, beginner English level.\n" +
        "Lesson: \"" + (les.title_ru || "") + "\" (CEFR " + (les.cefr || "A0-A1") + ")\n" +
        "Grammar topic: " + rule + "\n" +
        "Lesson vocabulary (English — Russian): " + words + "\n" +
        (missed ? "Test mistakes: " + missed + "\n" : "") +
        "\nINSTRUCTIONS:\n" +
        "1. Always reply in Russian, 2-3 sentences max.\n" +
        "2. No grammar jargon — say 'настоящее время' not 'Present Simple'.\n" +
        "3. Give ONE simple exercise: ask student to translate a phrase, fill a gap, or answer a question using lesson words.\n" +
        "4. Build exercises from the lesson vocabulary listed above.\n" +
        "5. If student writes in English — praise them warmly and gently correct.\n" +
        "6. Start with a brief greeting, then give your first exercise immediately.\n" +
        "Output your Russian response directly. Do not explain your reasoning.";
    }

    setRoute("ai-chat");
    app.innerHTML =
      '<button class="float-back" id="back"><span class="fb-arrow">‹</span> Назад</button>' +
      '<div class="hub-head" style="padding-top:46px"><h1>🤖 ' + t("ai_title") + '</h1>' +
      '<p>' + esc(les.title_ru || "") + '</p></div>' +
      '<div class="ai-messages" id="ai-msgs"></div>' +
      '<div class="ai-input-bar">' +
        '<input type="text" class="ai-input" id="ai-inp" placeholder="' + t("ai_placeholder") + '" />' +
        '<button class="ai-send-btn" id="ai-send" aria-label="' + t("ai_send") + '">&#10148;</button>' +
      '</div>';

    var msgsEl = document.getElementById("ai-msgs");
    var inputEl = document.getElementById("ai-inp");
    var sendEl  = document.getElementById("ai-send");
    var busy    = false;

    document.getElementById("back").onclick = renderHub;

    function addBubble(role, text) {
      var wrap = document.createElement("div");
      wrap.className = "ai-msg " + role;
      var b = document.createElement("div");
      b.className = "ai-bubble";
      b.textContent = text;
      wrap.appendChild(b);
      msgsEl.appendChild(wrap);
      wrap.scrollIntoView({ behavior: "smooth", block: "end" });
      return b;
    }

    function showThinking() {
      var wrap = document.createElement("div");
      wrap.className = "ai-msg ai ai-thinking";
      wrap.id = "ai-think";
      var b = document.createElement("div");
      b.className = "ai-bubble";
      b.textContent = t("ai_thinking");
      wrap.appendChild(b);
      msgsEl.appendChild(wrap);
      wrap.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    function hideThinking() { var el = document.getElementById("ai-think"); if (el) el.remove(); }

    function setLocked(v) {
      busy = v;
      sendEl.disabled = v;
      inputEl.disabled = v;
    }

    function ask(userText, showUserBubble) {
      if (busy) return;
      if (userText && showUserBubble) addBubble("user", userText);
      if (userText) history.push({ role: "user", content: userText });
      setLocked(true);
      showThinking();
      var msgs = [{ role: "system", content: buildSystem() }].concat(history);
      callAI(msgs, function (reply) {
        hideThinking();
        history.push({ role: "assistant", content: reply });
        addBubble("ai", reply);
        setLocked(false);
        inputEl.focus();
      }, function (err) {
        hideThinking();
        addBubble("ai", "⚠️ " + t("ai_err", err));
        setLocked(false);
      });
    }

    sendEl.onclick = function () {
      var text = inputEl.value.trim();
      if (text) { inputEl.value = ""; ask(text, true); }
    };
    inputEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendEl.onclick(); }
    });

    // Auto-start: seed first turn so AI greets without visible user bubble
    history.push({ role: "user", content: "Привет! Я только что прошёл урок и тест." });
    ask(null, false);
  }

  /* ---------- start ---------- */
  app.addEventListener("click", function (e) {
    var nav = e.target.closest("[data-nav]");
    if (nav) {
      if (nav.dataset.nav === "practice") renderPractice();
      else if (nav.dataset.nav === "phrasebook") renderPhrasebook();
      else if (nav.dataset.nav === "library") renderLibrary();
      else if (nav.dataset.nav === "review") renderReview();
      else if (nav.dataset.nav === "cert") renderCertificate();
      else if (nav.dataset.nav === "cert-a2") renderCertificate("a2");
      else if (nav.dataset.nav === "cert-b1") renderCertificate("b1");
      else if (nav.dataset.nav === "scenarios") renderScenarioList();
      else if (nav.dataset.nav === "sound") renderSound();
      else if (nav.dataset.nav === "phonetics") renderPhonetics();
      else if (nav.dataset.nav === "reading") renderReading();
      else if (nav.dataset.nav === "ai-settings") renderAISettings();
      return;
    }
    var card = e.target.closest("[data-lesson]");
    if (card) { var id = +card.dataset.lesson; var les = LESSONS.filter(function (x) { return x.id === id; })[0]; if (les) renderLesson(les); }
  });

  /* ---------- routing: keep current screen in the URL hash so a reload (or a
     service-worker update / low-memory PWA reload) restores it instead of
     dumping the user back to the hub. replaceState avoids history spam and
     never fires hashchange, so render<->route can't loop. ---------- */
  function setRoute(h) {
    try { history.replaceState(null, "", h ? "#" + h : location.pathname + location.search); } catch (e) {}
  }
  function route() {
    var h = (location.hash || "").replace(/^#/, "");
    var m = h.match(/^l(\d+)(?:\/(\w+))?$/);
    if (m) {
      var les = LESSONS.filter(function (x) { return x.id === +m[1]; })[0];
      if (les) { renderLesson(les, m[2] || "grammar"); return; }
    }
    // library shelf -> book -> chapter -> quiz. Old #reader* hashes -> shelf.
    if (h === "library" || h === "reader" || h.indexOf("reader/") === 0) { renderLibrary(); return; }
    var bm = h.match(/^book\/([A-Za-z0-9_-]+)(?:\/(\d+)(?:\/(q))?)?$/);
    if (bm) {
      var bk = bookById(bm[1]);
      if (!bk) { renderLibrary(); return; }
      if (!bm[2]) { renderReaderList(bk); return; }
      var ch = chapterIn(bk, +bm[2]);
      if (ch && store.done[ch.id]) { bm[3] ? renderChapterQuiz(ch, bk) : renderChapter(ch, bk); return; }
      renderReaderList(bk); return;
    }
    if (h === "practice") { renderPractice(); return; }
    if (h === "phrasebook") { renderPhrasebook(); return; }
    if (h === "review") { renderReview(); return; }
    if (h === "review/sounds") { renderReviewHub("sounds"); return; }
    if (h === "cert") { renderCertificate(); return; }
    if (h === "cert-a2") { renderCertificate("a2"); return; }
    if (h === "cert-b1") { renderCertificate("b1"); return; }
    if (h === "scenarios") { renderScenarioList(); return; }
    var scm = h.match(/^scenario\/([A-Za-z0-9_-]+)$/);
    if (scm) { renderScenario(scm[1]); return; }
    if (h === "sound") { renderSound(); return; }
    if (h === "phonetics") { renderPhonetics(); return; }
    var phm = h.match(/^phonetics\/([A-Za-z0-9_-]+)$/);
    if (phm) { renderPhoneticsUnit(phm[1]); return; }
    if (h === "reading") { renderReading(); return; }
    var rdm = h.match(/^reading\/([A-Za-z0-9_-]+)$/);
    if (rdm) { renderReadingUnit(rdm[1]); return; }
    renderHub();
  }
  window.addEventListener("hashchange", route);
  route();
})();
