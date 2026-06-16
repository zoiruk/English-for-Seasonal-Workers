/* English from Zero — логика тренажёра (карточки + квизы + прогресс). */

(function () {
  "use strict";

  var FLASHCARDS = window.FLASHCARDS || { decks: [] };
  var QUIZZES = window.QUIZZES || { quizzes: [] };

  /* ---------- Хранилище прогресса ---------- */
  var STORE_KEY = "efz_progress_v1";
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStore(s) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) {}
  }
  var store = loadStore();
  store.decks = store.decks || {};   // deckId -> {known: n}
  store.quizzes = store.quizzes || {}; // quizId -> {best: percent}

  /* ---------- Навигация по вкладкам ---------- */
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      document.querySelectorAll(".view").forEach(function (v) { v.classList.remove("active"); });
      document.getElementById("view-" + tab.dataset.view).classList.add("active");
      if (tab.dataset.view === "progress") renderProgress();
    });
  });

  /* ===================== КАРТОЧКИ ===================== */
  var deckPicker = document.getElementById("deck-picker");
  var flashArea = document.getElementById("flashcard-area");
  var flashcard = document.getElementById("flashcard");
  var curDeck = null, curIdx = 0, knownSet = {};

  function renderDeckPicker() {
    deckPicker.innerHTML = "";
    FLASHCARDS.decks.forEach(function (deck) {
      var saved = store.decks[deck.id] || {};
      var known = saved.known || 0;
      var item = document.createElement("div");
      item.className = "picker-item";
      item.innerHTML =
        '<div><div class="pi-title">' + deck.title + '</div>' +
        '<div class="pi-meta">' + deck.cards.length + ' слов</div></div>' +
        '<span class="badge">' + known + '/' + deck.cards.length + '</span>';
      item.addEventListener("click", function () { startDeck(deck); });
      deckPicker.appendChild(item);
    });
  }

  function startDeck(deck) {
    curDeck = deck; curIdx = 0; knownSet = {};
    deckPicker.classList.add("hidden");
    flashArea.classList.remove("hidden");
    document.getElementById("card-total").textContent = deck.cards.length;
    showCard();
  }

  function showCard() {
    flashcard.classList.remove("flipped");
    var c = curDeck.cards[curIdx];
    document.getElementById("card-front").textContent = c.front;
    document.getElementById("card-hint").textContent = c.hint ? "[" + c.hint + "]" : "";
    document.getElementById("card-back").textContent = c.back;
    document.getElementById("card-pos").textContent = curIdx + 1;
  }

  flashcard.addEventListener("click", function () { flashcard.classList.toggle("flipped"); });

  document.getElementById("btn-next").addEventListener("click", function () {
    curIdx = (curIdx + 1) % curDeck.cards.length; showCard();
  });
  document.getElementById("btn-prev").addEventListener("click", function () {
    curIdx = (curIdx - 1 + curDeck.cards.length) % curDeck.cards.length; showCard();
  });
  document.getElementById("btn-know").addEventListener("click", function () {
    knownSet[curIdx] = true; persistDeck(); nextOrFinish();
  });
  document.getElementById("btn-again").addEventListener("click", function () {
    delete knownSet[curIdx]; nextOrFinish();
  });
  document.getElementById("btn-back-decks").addEventListener("click", backToDecks);

  function nextOrFinish() {
    if (curIdx + 1 < curDeck.cards.length) { curIdx++; showCard(); }
    else { persistDeck(); backToDecks(); }
  }

  function persistDeck() {
    var count = Object.keys(knownSet).length;
    var prev = (store.decks[curDeck.id] || {}).known || 0;
    store.decks[curDeck.id] = { known: Math.max(count, prev) };
    saveStore(store);
  }

  function backToDecks() {
    flashArea.classList.add("hidden");
    deckPicker.classList.remove("hidden");
    renderDeckPicker();
  }

  /* ===================== КВИЗЫ ===================== */
  var quizPicker = document.getElementById("quiz-picker");
  var quizArea = document.getElementById("quiz-area");
  var quizResult = document.getElementById("quiz-result");
  var curQuiz = null, qIdx = 0, qScore = 0, answered = false;

  function renderQuizPicker() {
    quizPicker.innerHTML = "";
    QUIZZES.quizzes.forEach(function (quiz) {
      var best = (store.quizzes[quiz.id] || {}).best;
      var bestTxt = best != null ? best + "%" : "—";
      var item = document.createElement("div");
      item.className = "picker-item";
      item.innerHTML =
        '<div><div class="pi-title">' + quiz.title + '</div>' +
        '<div class="pi-meta">' + quiz.questions.length + ' вопросов</div></div>' +
        '<span class="badge">' + bestTxt + '</span>';
      item.addEventListener("click", function () { startQuiz(quiz); });
      quizPicker.appendChild(item);
    });
  }

  function startQuiz(quiz) {
    curQuiz = quiz; qIdx = 0; qScore = 0;
    quizPicker.classList.add("hidden");
    quizResult.classList.add("hidden");
    quizArea.classList.remove("hidden");
    document.getElementById("quiz-title").textContent = quiz.title;
    document.getElementById("quiz-total").textContent = quiz.questions.length;
    showQuestion();
  }

  function showQuestion() {
    answered = false;
    var question = curQuiz.questions[qIdx];
    document.getElementById("quiz-pos").textContent = qIdx + 1;
    document.getElementById("quiz-question").textContent = question.q;
    document.getElementById("quiz-feedback").textContent = "";
    document.getElementById("quiz-feedback").className = "quiz-feedback";
    document.getElementById("btn-quiz-next").classList.add("hidden");

    var box = document.getElementById("quiz-options");
    box.innerHTML = "";
    question.options.forEach(function (opt, i) {
      var b = document.createElement("button");
      b.className = "quiz-option";
      b.textContent = opt;
      b.addEventListener("click", function () { answer(i, b); });
      box.appendChild(b);
    });
  }

  function answer(i, btn) {
    if (answered) return;
    answered = true;
    var question = curQuiz.questions[qIdx];
    var buttons = document.querySelectorAll(".quiz-option");
    var fb = document.getElementById("quiz-feedback");
    buttons.forEach(function (b) { b.disabled = true; });
    buttons[question.answer].classList.add("correct");
    if (i === question.answer) {
      qScore++;
      fb.textContent = "✓ Верно!";
      fb.className = "quiz-feedback ok";
    } else {
      btn.classList.add("wrong");
      fb.textContent = "✗ Правильно: " + question.options[question.answer];
      fb.className = "quiz-feedback no";
    }
    document.getElementById("btn-quiz-next").classList.remove("hidden");
  }

  document.getElementById("btn-quiz-next").addEventListener("click", function () {
    if (qIdx + 1 < curQuiz.questions.length) { qIdx++; showQuestion(); }
    else finishQuiz();
  });

  function finishQuiz() {
    var total = curQuiz.questions.length;
    var percent = Math.round((qScore / total) * 100);
    var prevBest = (store.quizzes[curQuiz.id] || {}).best || 0;
    store.quizzes[curQuiz.id] = { best: Math.max(percent, prevBest) };
    saveStore(store);

    quizArea.classList.add("hidden");
    quizResult.classList.remove("hidden");
    document.getElementById("quiz-score").textContent = qScore + " / " + total;
    var msg = document.getElementById("quiz-message");
    if (percent === 100) msg.textContent = "Идеально! 🎉 Excellent!";
    else if (percent >= 80) msg.textContent = "Отлично! Well done! 👏";
    else if (percent >= 50) msg.textContent = "Неплохо. Повторите урок и попробуйте снова.";
    else msg.textContent = "Стоит вернуться к уроку. Don't give up! 💪";
  }

  document.getElementById("btn-quiz-retry").addEventListener("click", function () { startQuiz(curQuiz); });
  document.getElementById("btn-quiz-exit").addEventListener("click", exitQuiz);
  document.getElementById("btn-quiz-result-exit").addEventListener("click", exitQuiz);

  function exitQuiz() {
    quizArea.classList.add("hidden");
    quizResult.classList.add("hidden");
    quizPicker.classList.remove("hidden");
    renderQuizPicker();
  }

  /* ===================== ПРОГРЕСС ===================== */
  function renderProgress() {
    var grid = document.getElementById("progress-cards");
    grid.innerHTML = "";

    var totalWords = 0, knownWords = 0;
    FLASHCARDS.decks.forEach(function (d) {
      totalWords += d.cards.length;
      knownWords += (store.decks[d.id] || {}).known || 0;
    });
    grid.appendChild(progressRow("🃏 Выучено слов", knownWords, totalWords));

    var quizDone = 0;
    QUIZZES.quizzes.forEach(function (q) {
      if (((store.quizzes[q.id] || {}).best || 0) >= 80) quizDone++;
    });
    grid.appendChild(progressRow("📝 Квизов сдано (80%+)", quizDone, QUIZZES.quizzes.length));
  }

  function progressRow(label, val, total) {
    var pct = total ? Math.round((val / total) * 100) : 0;
    var row = document.createElement("div");
    row.className = "progress-row";
    row.innerHTML =
      '<span>' + label + '</span>' +
      '<span class="bar"><span style="width:' + pct + '%"></span></span>' +
      '<span class="val">' + val + '/' + total + '</span>';
    return row;
  }

  document.getElementById("btn-reset").addEventListener("click", function () {
    if (confirm("Сбросить весь прогресс? Это нельзя отменить.")) {
      store = { decks: {}, quizzes: {} };
      saveStore(store);
      renderProgress();
      renderDeckPicker();
      renderQuizPicker();
    }
  });

  /* ---------- Старт ---------- */
  renderDeckPicker();
  renderQuizPicker();
})();
