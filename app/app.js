/* English for Seasonal Workers — engine (RU-only, localization-ready). */
(function () {
  "use strict";

  var LESSONS = window.LESSONS || [];

  /* ---------- UI strings (localization-ready: add UI.uz later) ---------- */
  var UI = {
    ru: {
      app_title: "English for Seasonal Workers",
      app_subtitle: "Английский с нуля — для работы на ферме",
      words_learned: "слов выучено",
      streak: "дней подряд",
      lessons_done: "уроков пройдено",
      cefr: "Уровень {0}",
      tab_grammar: "Грамматика",
      tab_words: "Слова",
      tab_dialogue: "Диалог",
      tab_quiz: "Тест",
      next: "Далее: {0} ➔",
      to_quiz: "Перейти к тесту ➔",
      tap_word: "👇 Нажмите на слово, чтобы услышать",
      play_all: "▶ Прослушать весь диалог",
      cultural: "🌍 Культурная заметка",
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
      tags: {
        "[COMPLETE]": "✍️ Заполните пропуск",
        "[TRANSLATE]": "🗣️ Переведите",
        "[NEGATIVE]": "❌ Найдите отрицание",
        "[CORRECT]": "✅ Что правильно?",
        "[QUESTION]": "❓ Выберите вопрос",
      },
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

  /* ---------- HUB ---------- */
  function renderHub() {
    var done = Object.keys(store.done).length;
    var h = '<div class="hub-head"><h1>🌿 ' + t("app_title") + "</h1><p>" + t("app_subtitle") + "</p></div>";
    h += '<div class="stats">' +
      '<div class="stat"><div class="v">' + store.words + '</div><div class="l">' + t("words_learned") + "</div></div>" +
      '<div class="stat"><div class="v">🔥 ' + store.streak + '</div><div class="l">' + t("streak") + "</div></div>" +
      '<div class="stat"><div class="v">' + done + "/" + LESSONS.length + '</div><div class="l">' + t("lessons_done") + "</div></div></div>";
    LESSONS.forEach(function (les) {
      var isDone = store.done[les.id];
      h += '<div class="lesson-card" data-lesson="' + les.id + '">' +
        '<div class="num">' + les.id + "</div>" +
        '<div class="body"><div class="t">' + esc(les.title_ru) + '</div><div class="s">' + esc(les.cefr) + "</div></div>" +
        (isDone ? '<div class="done">✓</div>' : '<div class="done" style="color:var(--text3)">›</div>') + "</div>";
    });
    app.innerHTML = h;
  }

  /* ---------- LESSON ---------- */
  var TABS = ["grammar", "words", "dialogue", "quiz"];
  function tabLabel(x) { return t("tab_" + x); }

  function renderLesson(les, tab) {
    tab = tab || "grammar";
    var h = '<button class="float-back" id="back" type="button" aria-label="Назад">' +
      '<svg class="fb-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>' +
      "<span>Назад</span></button>" +
      '<div class="l-head"><span class="pos">' + les.id + "/" + LESSONS.length + "</span>" +
      '<div class="htitle"><div class="ttl">' + esc(les.title_ru) + '</div><div class="sub">' + esc(les.cefr) + "</div></div></div>";
    h += '<div class="tabs">' + TABS.map(function (x) {
      return '<button class="tab' + (x === tab ? " on" : "") + '" data-tab="' + x + '">' + tabLabel(x) + "</button>";
    }).join("") + "</div>";
    h += '<div id="tabbody"></div>';
    app.innerHTML = h;
    document.getElementById("back").onclick = function () { renderHub(); };
    app.querySelectorAll(".tab").forEach(function (b) {
      b.onclick = function () { renderLesson(les, b.dataset.tab); };
    });
    document.getElementById("tabbody").innerHTML = bodyFor(les, tab);
    wireBody(les, tab);
  }

  function bodyFor(les, tab) {
    if (tab === "grammar") return grammarBody(les);
    if (tab === "words") return wordsBody(les);
    if (tab === "dialogue") return dialogueBody(les);
    return quizBody(les);
  }

  function grammarBody(les) {
    var g = les.grammar;
    var h = '<div class="card"><div class="g-h">' + esc(g.title_ru) + "</div>" + g.intro_ru + "</div>";
    h += '<div class="forms">' + ["positive", "negative", "question"].map(function (f, i) {
      return '<button class="formbtn' + (i === 0 ? " on" : "") + '" data-form="' + f + '">' + esc(g.forms[f].label_ru) + "</button>";
    }).join("") + "</div>";
    h += '<div class="card" id="formbox"></div>';
    h += '<div class="card cultural"><b>' + t("cultural") + "</b><div>" + g.cultural_ru + "</div></div>";
    h += '<div class="card note">' + g.note_ru + "</div>";
    h += '<div class="card"><div class="g-h">' + t("examples") + "</div>";
    g.examples.forEach(function (ex) {
      h += '<div class="ex-row">' + spkBtn(ex.en) + '<div><div class="en">' + esc(ex.en) +
        '</div><div class="tr">' + esc(ex.transcr) + '</div><div class="ru">' + esc(ex.ru) + "</div></div></div>";
    });
    h += "</div>";
    h += '<button class="btn" id="gowords">' + t("next", t("tab_words")) + "</button>";
    return h;
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
    h += "</div><button class='btn' id='godlg'>" + t("next", t("tab_dialogue")) + "</button>";
    return h;
  }

  function dialogueBody(les) {
    var h = "<button class='btn ghost' id='playall'>" + t("play_all") + "</button>";
    les.dialogue.forEach(function (d) {
      h += '<div class="line ' + d.s + '">' + spkBtn(d.en) + '<div class="bubble"><div class="en">' + esc(d.en) +
        '</div><div class="tr">' + esc(d.transcr) + '</div><div class="ru">' + esc(d.ru) + "</div></div></div>";
    });
    h += "<button class='btn' id='goquiz'>" + t("to_quiz") + "</button>";
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
      document.getElementById("gowords") ; var gw = document.getElementById("gowords");
      if (gw) gw.onclick = function () { renderLesson(les, "words"); };
    }
    if (tab === "words") {
      countWords(les);
      document.getElementById("godlg").onclick = function () { renderLesson(les, "dialogue"); };
    }
    if (tab === "dialogue") {
      document.getElementById("goquiz").onclick = function () { renderLesson(les, "quiz"); };
      document.getElementById("playall").onclick = function () { playAll(les.dialogue); };
    }
    if (tab === "quiz") runQuiz(les);
  }

  function countWords(les) {
    if (!store.seen) store.seen = {};
    if (!store.seen[les.id]) { store.seen[les.id] = true; store.words += les.words.length; save(store); }
  }

  function playAll(lines, i) {
    i = i || 0;
    if (i >= lines.length || !("speechSynthesis" in window)) return;
    speak(lines[i].en);
    var delay = lines[i].en.length * 70 + 900;
    setTimeout(function () { playAll(lines, i + 1); }, delay);
  }

  /* ---------- quiz trainer ---------- */
  function runQuiz(les) {
    var root = document.getElementById("quizroot");
    var qs = les.quiz, idx = 0, score = 0;
    function show() {
      var q = qs[idx];
      var tag = (q.q.match(/\[[A-Z]+\]/) || [""])[0];
      var label = (UI[LANG].tags && UI[LANG].tags[tag]) || "";
      var text = q.q.replace(/\[[A-Z]+\]\s*/, "");
      var h = '<div class="card"><div class="q-hint">' + t("q_of", idx + 1, qs.length) + "</div>" +
        '<div class="q-text">' + esc(label ? label + ": " : "") + esc(text) + "</div>" +
        (q.hint_ru ? '<div class="q-hint">' + esc(q.hint_ru) + "</div>" : "") +
        '<div class="opts">' + q.opts.map(function (o, i) {
          return '<button class="opt" data-i="' + i + '">' + esc(o) + "</button>";
        }).join("") + '</div><div class="q-fb hidden" id="fb"></div>' +
        '<button class="btn hidden" id="nextq"></button></div>';
      root.innerHTML = h;
      var answered = false;
      root.querySelectorAll(".opt").forEach(function (b) {
        b.onclick = function () {
          if (answered) return; answered = true;
          var i = +b.dataset.i, fb = document.getElementById("fb");
          root.querySelectorAll(".opt").forEach(function (x) { x.style.pointerEvents = "none"; });
          root.querySelectorAll(".opt")[q.c].classList.add("correct");
          if (i === q.c) { score++; fb.className = "q-fb ok"; fb.textContent = t("correct") + " " + (q.expl || ""); }
          else { b.classList.add("wrong"); fb.className = "q-fb no"; fb.textContent = t("wrong", q.opts[q.c]) + " " + (q.expl || ""); }
          var nb = document.getElementById("nextq");
          nb.textContent = idx + 1 < qs.length ? t("next_q") : t("finish");
          nb.classList.remove("hidden");
          nb.onclick = function () { idx++; idx < qs.length ? show() : finish(); };
        };
      });
    }
    function finish() {
      var pct = Math.round((score / qs.length) * 100);
      if (pct === 100) { store.done[les.id] = true; bumpStreak(); save(store); }
      root.innerHTML = '<div class="card result"><div class="score">' + score + "/" + qs.length + "</div>" +
        "<h3>" + (pct === 100 ? t("done_banner") : t("done_low")) + "</h3>" +
        '<button class="btn" id="rt">' + t("retry") + '</button>' +
        '<button class="btn ghost" id="hb">' + t("to_hub") + "</button></div>";
      document.getElementById("rt").onclick = function () { runQuiz(les); };
      document.getElementById("hb").onclick = function () { renderHub(); };
    }
    show();
  }

  /* ---------- start ---------- */
  app.addEventListener("click", function (e) {
    var card = e.target.closest("[data-lesson]");
    if (card) { var id = +card.dataset.lesson; var les = LESSONS.filter(function (x) { return x.id === id; })[0]; if (les) renderLesson(les); }
  });
  renderHub();
})();
