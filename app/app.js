/* English for Seasonal Workers — engine (RU-only, localization-ready). */
(function () {
  "use strict";

  var LESSONS = window.LESSONS || [];
  var PHRASEBOOK = window.PHRASEBOOK || [];

  /* ---------- UI strings (localization-ready: add UI.uz later) ---------- */
  var UI = {
    ru: {
      app_title: "English for Seasonal Workers",
      app_subtitle: "Английский с нуля — для работы на ферме",
      phrasebook_title: "Разговорник выживания",
      phrasebook_sub: "Готовые фразы на каждый день",
      phrasebook_hint: "👇 Выберите ситуацию. Нажмите 🔊, чтобы услышать.",
      phrasebook_count: "{0} фраз",
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
      review_title: "Повторение слов",
      review_count: "{0} слов на сегодня",
      review_count_zero: "✓ На сегодня всё повторено",
      review_progress: "Осталось: {0}",
      review_done: "На сегодня всё повторено! 🎉",
      review_none_due: "На сегодня всё повторено. Возвращайтесь завтра 👍",
      show_card: "Показать перевод",
      know: "✓ Знаю",
      again: "🔄 Ещё раз",
      cert_hub_title: "Мой прогресс",
      cert_hub_sub: "{0} из {1} уроков пройдено",
      cert_title: "Сертификат A0-A1",
      cert_body_done: "Курс успешно завершён ✓",
      cert_body_progress: "Пройдено уроков: {0} из {1}",
      cert_locked: "🔒 Пройдите все {0} уроков — и получите именной сертификат на английском.",
      cert_name_hint: "Введите ваше имя",
      cert_name_caption: "👇 Впишите своё имя — оно появится на сертификате. Затем нажмите «Распечатать» или сохраните как PDF.",
      cert_print: "🖨️ Распечатать",
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
      help_toggle: "🤔 Не поняли? Нажмите — объясню проще",
      help_formula: "Запомните формулу:",
      help_yt: "Всё ещё непонятно? Видео на YouTube ▶",
      help_yt_offline_hint: "(нужен интернет)",
      help_return: "Посмотрите видео и вернитесь: нажмите «‹ Назад» и продолжайте урок.",
    },
  };
  var LANG = "ru";
  function t(key, a, b) {
    var s = (UI[LANG] && UI[LANG][key]) || (UI.ru[key]) || key;
    return s.replace("{0}", a).replace("{1}", b);
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
  store.certName = store.certName || "";
  store.certDate = store.certDate || ""; // YYYY-M-D, set once when the course is completed (15/15)

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
    setRoute("");
    var done = Object.keys(store.done).length;
    var h = '<div class="hub-head"><h1>🌿 ' + t("app_title") + "</h1><p>" + t("app_subtitle") + "</p></div>";
    h += '<div class="stats">' +
      '<div class="stat"><div class="v">' + studiedWords() + '</div><div class="l">' + t("words_learned") + "</div></div>" +
      '<div class="stat"><div class="v">🔥 ' + store.streak + '</div><div class="l">' + t("streak") + "</div></div>" +
      '<div class="stat"><div class="v">' + done + "/" + LESSONS.length + '</div><div class="l">' + t("lessons_done") + "</div></div></div>";
    if (PHRASEBOOK.length) {
      h += '<div class="lesson-card pb-entry" data-nav="phrasebook">' +
        '<div class="num">📒</div>' +
        '<div class="body"><div class="t">' + t("phrasebook_title") + '</div><div class="s">' + t("phrasebook_sub") + "</div></div>" +
        '<div class="done" style="color:var(--text3)">›</div></div>';
    }
    var pool = reviewPool();
    if (pool.length) {
      var due = dueReviewWords().length;
      h += '<div class="lesson-card" data-nav="review">' +
        '<div class="num">🔁</div>' +
        '<div class="body"><div class="t">' + t("review_title") + '</div>' +
        '<div class="s">' + (due ? t("review_count", due) : t("review_count_zero")) + '</div></div>' +
        '<div class="done" style="color:var(--text3)">›</div></div>';
    }
    h += '<div class="lesson-card" data-nav="cert">' +
      '<div class="num">🏆</div>' +
      '<div class="body"><div class="t">' + t("cert_hub_title") + '</div>' +
      '<div class="s">' + t("cert_hub_sub", Object.keys(store.done).length, LESSONS.length) + '</div></div>' +
      '<div class="done" style="color:var(--text3)">›</div></div>';
    LESSONS.forEach(function (les) {
      var isDone = store.done[les.id];
      h += '<div class="lesson-card" data-lesson="' + les.id + '">' +
        '<div class="num">' + les.id + "</div>" +
        '<div class="body"><div class="t">' + esc(les.title_ru) + "</div></div>" +
        (isDone ? '<div class="done">✓</div>' : '<div class="done" style="color:var(--text3)">›</div>') + "</div>";
    });
    app.innerHTML = h;
  }

  /* ---------- PHRASEBOOK (reference, snowball-exempt) ---------- */
  function renderPhrasebook() {
    setRoute("phrasebook");
    var h = backBtnHTML() +
      '<div class="hub-head" style="padding-top:46px"><h1>📒 ' + t("phrasebook_title") + "</h1><p>" + t("phrasebook_sub") + "</p></div>";
    h += '<div class="card note">' + t("phrasebook_hint") + "</div>";
    PHRASEBOOK.forEach(function (c) {
      h += '<div class="lesson-card" data-cat="' + esc(c.cat) + '">' +
        '<div class="num">' + c.icon + "</div>" +
        '<div class="body"><div class="t">' + esc(c.title_ru) + '</div><div class="s">' + t("phrasebook_count", c.phrases.length) + "</div></div>" +
        '<div class="done" style="color:var(--text3)">›</div></div>';
    });
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderHub(); };
    app.querySelectorAll("[data-cat]").forEach(function (el) {
      el.onclick = function () { renderPhraseCategory(el.dataset.cat); };
    });
  }

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

  /* ---------- REVIEW ---------- */
  function renderReview() {
    setRoute("review");
    if (!reviewPool().length) { renderHub(); return; }
    var queue = shuffle(dueReviewWords());
    if (!queue.length) { showNothingDue(); return; }
    var total = queue.length;

    function draw() {
      var w = queue[0];
      var pct = Math.round((total - queue.length) / total * 100);
      var h = backBtnHTML() +
        '<div class="hub-head" style="padding-top:46px"><h1>🔁 ' + t("review_title") + '</h1>' +
        '<p>' + t("review_progress", queue.length) + '</p></div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="flashcard"><div class="fc-e">' + w.e + '</div>' +
        '<div class="fc-ru">' + esc(w.ru) + '</div></div>' +
        '<button class="btn" id="fc-show">' + t("show_card") + '</button>';
      app.innerHTML = h;
      document.getElementById("back").onclick = renderHub;
      document.getElementById("fc-show").onclick = function () {
        app.querySelector(".flashcard").innerHTML =
          '<div class="fc-e">' + w.e + '</div>' +
          '<button class="spk" id="fc-spk" style="margin:0 auto">🔊</button>' +
          '<div class="fc-en">' + esc(w.en) + '</div>' +
          '<div class="fc-tr">' + esc(w.transcr) + '</div>' +
          '<div class="fc-ru">' + esc(w.ru) + '</div>';
        document.getElementById("fc-spk").onclick = function () { speak(w.en); };
        speak(w.en);
        var showBtn = document.getElementById("fc-show");
        var btns = document.createElement("div");
        btns.className = "review-btns";
        btns.innerHTML =
          '<button class="btn" id="fc-know">' + t("know") + '</button>' +
          '<button class="btn ghost" id="fc-again">' + t("again") + '</button>';
        showBtn.replaceWith(btns);
        document.getElementById("fc-know").onclick = function () {
          srsRate(w.en, true);
          queue.shift();
          if (queue.length) draw(); else showDone();
        };
        document.getElementById("fc-again").onclick = function () {
          srsRate(w.en, false);
          queue.push(queue.shift());
          draw();
        };
      };
    }

    function showDone() {
      app.innerHTML = backBtnHTML() +
        '<div class="hub-head" style="padding-top:46px"><h1>🎉</h1>' +
        '<p>' + t("review_done") + '</p></div>' +
        '<div class="bar"><i style="width:100%"></i></div>' +
        '<button class="btn" id="rv-hub" style="margin-top:24px">' + t("to_hub") + '</button>';
      document.getElementById("back").onclick = renderHub;
      document.getElementById("rv-hub").onclick = renderHub;
    }

    function showNothingDue() {
      app.innerHTML = backBtnHTML() +
        '<div class="hub-head" style="padding-top:46px"><h1>✅</h1>' +
        '<p>' + t("review_none_due") + '</p></div>' +
        '<button class="btn" id="rv-hub" style="margin-top:24px">' + t("to_hub") + '</button>';
      document.getElementById("back").onclick = renderHub;
      document.getElementById("rv-hub").onclick = renderHub;
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
  function certSealSVG() {
    return '<svg class="cert-seal" viewBox="0 0 120 132" width="88" height="97" role="img" aria-label="Seal">' +
      '<path d="M46 96 L34 130 L52 118 L60 132 L60 100 Z" fill="#005bb0"/>' +
      '<path d="M74 96 L86 130 L68 118 L60 132 L60 100 Z" fill="#0075de"/>' +
      '<circle cx="60" cy="56" r="50" fill="#fff8e6" stroke="#c9a227" stroke-width="3"/>' +
      '<circle cx="60" cy="56" r="40" fill="#c9a227"/>' +
      '<circle cx="60" cy="56" r="40" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="1.5 4"/>' +
      '<path d="M42 57 L54 70 L80 42" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<text x="60" y="92" text-anchor="middle" font-size="13" font-weight="800" fill="#fff" letter-spacing="2" font-family="Georgia, serif">A0–A1</text>' +
      '</svg>';
  }

  function renderCertificate() {
    setRoute("cert");
    var done = Object.keys(store.done).length;
    var total = LESSONS.length;
    var isComplete = total > 0 && done === total;

    // Before the whole course is finished: show a Russian progress screen, certificate locked.
    if (!isComplete) {
      var pct = total ? Math.round(done / total * 100) : 0;
      app.innerHTML = backBtnHTML() +
        '<div class="hub-head" style="padding-top:46px"><h1>🏆 ' + t("cert_hub_title") + '</h1></div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="card note" style="text-align:center">' + t("cert_body_progress", done, total) + '</div>' +
        '<div class="cert-locked">' + t("cert_locked", total) + '</div>' +
        '<button class="btn ghost" id="cert-hub" style="margin-top:8px">' + t("to_hub") + '</button>';
      document.getElementById("back").onclick = renderHub;
      document.getElementById("cert-hub").onclick = renderHub;
      return;
    }

    if (!store.certDate) { store.certDate = todayStr(); save(store); }
    var nameVal = store.certName || "";
    var words = studiedWords();
    app.innerHTML = backBtnHTML() +
      '<div class="cert cert-full"><div class="cert-frame">' +
        certSealSVG() +
        '<div class="cert-kicker">Certificate of Completion</div>' +
        '<div class="cert-present">This is to certify that</div>' +
        '<input class="cert-name" id="cert-name" type="text" autocomplete="name" ' +
          'placeholder="' + esc(t("cert_name_hint")) + '" value="' + esc(nameVal) + '">' +
        '<div class="cert-present">has completed the beginner self-study course</div>' +
        '<div class="cert-course">' + esc(t("app_title")) + '</div>' +
        '<div class="cert-level">Beginner self-study course · CEFR A0–A1 level</div>' +
        '<div class="cert-meta">' + total + ' lessons completed · ' + words + ' words learned</div>' +
        '<div class="cert-foot"><div class="cert-foot-col"><div class="cert-foot-v">' + fmtCertDate(store.certDate) + '</div><div class="cert-foot-l">Date completed</div></div></div>' +
        '<div class="cert-issuer">English for Seasonal Workers · Free self-study app</div>' +
        '<div class="cert-disc">A record of completing a free self-study course. Not an official language qualification, exam, or proof of English level.</div>' +
        '<div class="cert-disc cert-disc-ru">Отметка о прохождении бесплатного самостоятельного курса. Не официальная квалификация, не экзамен и не подтверждение уровня английского.</div>' +
      '</div></div>' +
      '<div class="cert-hint-ru">' + t("cert_name_caption") + '</div>' +
      '<button class="btn" id="cert-print" style="margin-top:14px">' + t("cert_print") + '</button>' +
      '<button class="btn ghost" id="cert-hub" style="margin-top:8px">' + t("to_hub") + '</button>';

    document.getElementById("back").onclick = renderHub;
    document.getElementById("cert-hub").onclick = renderHub;
    document.getElementById("cert-name").oninput = function (e) {
      store.certName = e.target.value;
      save(store);
    };
    document.getElementById("cert-print").onclick = function () { window.print(); };
  }

  /* ---------- LESSON ---------- */
  function tabsFor(les) {
    return les.everyday
      ? ["grammar", "words", "dialogue", "phrases", "quiz"]
      : ["grammar", "words", "dialogue", "quiz"];
  }
  function tabLabel(x) { return t("tab_" + x); }

  function renderLesson(les, tab) {
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
      h += '<div class="ex-row">' + spkBtn(ex.en) + '<div><div class="en">' + esc(ex.en) +
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
  function formTable(form) {
    var h = form.rule_ru + '<div class="g-table-wrap"><table class="g-table" style="margin-top:10px">' +
      "<thead><tr><td>Кто</td><td>Глагол</td><td>Пример</td><td></td></tr></thead><tbody>";
    form.table.forEach(function (r) {
      h += '<tr><td class="sj">' + esc(r.subj) + '</td><td class="vb">' + esc(r.verb) + "</td>" +
        '<td><div class="ex">' + esc(r.example) + '</div><div class="tr">' + esc(r.transcr) +
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
      h += '<div class="line ' + d.s + '">' + spkBtn(d.en) + '<div class="bubble"><div class="en">' + esc(d.en) +
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
        box.innerHTML = formTable(g.forms[f]);
        box.querySelectorAll("[data-spk]").forEach(function (el) { el.onclick = function () { speak(el.dataset.spk); }; });
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

  /* ---------- quiz trainer (mastery: drill your mistakes until none remain) ---------- */
  function runQuiz(les) {
    var root = document.getElementById("quizroot");
    var fullQuiz = les.quiz, round, idx, wrong, roundCorrect;
    function markWrong(q) { if (wrong.indexOf(q) < 0) wrong.push(q); }
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
      root.innerHTML = '<div class="card result"><div class="score">🎉</div>' +
        "<h3>" + t("done_banner") + "</h3>" +
        '<div class="q-hint">' + t("mastered_note") + "</div>" +
        '<button class="btn" id="rt">' + t("retry") + "</button>" +
        '<button class="btn ghost" id="hb">' + t("to_hub") + "</button></div>";
      document.getElementById("rt").onclick = function () { runQuiz(les); };
      document.getElementById("hb").onclick = function () { renderHub(); };
    }
    startRound(fullQuiz.slice());
  }

  /* ---------- start ---------- */
  app.addEventListener("click", function (e) {
    var nav = e.target.closest("[data-nav]");
    if (nav) {
      if (nav.dataset.nav === "phrasebook") renderPhrasebook();
      else if (nav.dataset.nav === "review") renderReview();
      else if (nav.dataset.nav === "cert") renderCertificate();
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
    if (h === "phrasebook") { renderPhrasebook(); return; }
    if (h === "review") { renderReview(); return; }
    if (h === "cert") { renderCertificate(); return; }
    renderHub();
  }
  window.addEventListener("hashchange", route);
  route();
})();
