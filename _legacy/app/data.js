/*
 * Данные курса для приложения (карточки + квизы).
 * Это обычный JS-файл, чтобы приложение открывалось двойным кликом (file://),
 * где загрузка JSON через fetch блокируется браузером.
 *
 * Как добавить свои карточки: добавьте объект в FLASHCARDS.decks.
 * Как добавить квиз: добавьте объект в QUIZZES.quizzes.
 */

window.FLASHCARDS = {
  decks: [
    {
      id: "greetings",
      title: "Урок 1 — Знакомство",
      cards: [
        { front: "Hello", back: "Привет / Здравствуйте", hint: "хэлоу" },
        { front: "Goodbye", back: "До свидания", hint: "гудбай" },
        { front: "Thank you", back: "Спасибо", hint: "сэнк ю" },
        { front: "Please", back: "Пожалуйста (просьба)", hint: "плиз" },
        { front: "Sorry", back: "Извините (виноват)", hint: "сори" },
        { front: "Excuse me", back: "Простите (обратиться)", hint: "икскьюз ми" },
        { front: "What's your name?", back: "Как тебя зовут?", hint: "уотс ё нэйм" },
        { front: "Nice to meet you", back: "Приятно познакомиться", hint: "найс ту мит ю" },
        { front: "Where are you from?", back: "Откуда ты?", hint: "уэа а ю фром" },
        { front: "How are you?", back: "Как дела?", hint: "хау а ю" }
      ]
    },
    {
      id: "family",
      title: "Урок 2 — Семья",
      cards: [
        { front: "mother", back: "мама", hint: "мазэ" },
        { front: "father", back: "папа", hint: "фазэ" },
        { front: "brother", back: "брат", hint: "бразэ" },
        { front: "sister", back: "сестра", hint: "систэ" },
        { front: "son", back: "сын", hint: "сан" },
        { front: "daughter", back: "дочь", hint: "дотэ" },
        { front: "husband", back: "муж", hint: "хазбэнд" },
        { front: "wife", back: "жена", hint: "уайф" },
        { front: "children", back: "дети", hint: "чилдрэн" },
        { front: "parents", back: "родители", hint: "пэрэнтс" }
      ]
    },
    {
      id: "things",
      title: "Урок 3 — Предметы",
      cards: [
        { front: "phone", back: "телефон", hint: "фоун" },
        { front: "book", back: "книга", hint: "бук" },
        { front: "table", back: "стол", hint: "тэйбл" },
        { front: "chair", back: "стул", hint: "чэа" },
        { front: "door", back: "дверь", hint: "до" },
        { front: "window", back: "окно", hint: "уиндоу" },
        { front: "key", back: "ключ", hint: "ки" },
        { front: "bag", back: "сумка", hint: "бэг" },
        { front: "car", back: "машина", hint: "ка" },
        { front: "house", back: "дом", hint: "хаус" }
      ]
    },
    {
      id: "daily",
      title: "Урок 4 — Каждый день",
      cards: [
        { front: "get up", back: "вставать", hint: "гет ап" },
        { front: "have breakfast", back: "завтракать", hint: "хэв брэкфэст" },
        { front: "go to work", back: "идти на работу", hint: "гоу ту уёк" },
        { front: "eat", back: "есть", hint: "ит" },
        { front: "drink", back: "пить", hint: "дринк" },
        { front: "read", back: "читать", hint: "рид" },
        { front: "sleep", back: "спать", hint: "слип" },
        { front: "like", back: "нравиться, любить", hint: "лайк" },
        { front: "live", back: "жить", hint: "лив" },
        { front: "speak", back: "говорить", hint: "спик" }
      ]
    },
    {
      id: "food",
      title: "Урок 6 — Еда",
      cards: [
        { front: "water", back: "вода", hint: "уотэ" },
        { front: "bread", back: "хлеб", hint: "брэд" },
        { front: "milk", back: "молоко", hint: "милк" },
        { front: "meat", back: "мясо", hint: "мит" },
        { front: "fish", back: "рыба", hint: "фиш" },
        { front: "apple", back: "яблоко", hint: "эпл" },
        { front: "cheese", back: "сыр", hint: "чиз" },
        { front: "egg", back: "яйцо", hint: "эг" },
        { front: "coffee", back: "кофе", hint: "кофи" },
        { front: "How much is it?", back: "Сколько стоит?", hint: "хау мач из ит" }
      ]
    },
    {
      id: "places",
      title: "Урок 8 — Город",
      cards: [
        { front: "shop", back: "магазин", hint: "шоп" },
        { front: "bank", back: "банк", hint: "бэнк" },
        { front: "café", back: "кафе", hint: "кафэй" },
        { front: "hospital", back: "больница", hint: "хоспитл" },
        { front: "park", back: "парк", hint: "пак" },
        { front: "station", back: "вокзал/станция", hint: "стэйшн" },
        { front: "street", back: "улица", hint: "стрит" },
        { front: "next to", back: "рядом с", hint: "нэкст ту" },
        { front: "Turn left", back: "Поверните налево", hint: "тён лэфт" },
        { front: "Go straight", back: "Идите прямо", hint: "гоу стрэйт" }
      ]
    },
    {
      id: "verbs-past",
      title: "Урок 9 — Неправильные глаголы",
      cards: [
        { front: "go → ?", back: "went (идти/ехать)", hint: "уэнт" },
        { front: "have → ?", back: "had (иметь)", hint: "хэд" },
        { front: "see → ?", back: "saw (видеть)", hint: "со" },
        { front: "get → ?", back: "got (получать)", hint: "гот" },
        { front: "eat → ?", back: "ate (есть)", hint: "эйт" },
        { front: "buy → ?", back: "bought (покупать)", hint: "бот" },
        { front: "make → ?", back: "made (делать)", hint: "мэйд" },
        { front: "take → ?", back: "took (брать)", hint: "тук" },
        { front: "come → ?", back: "came (приходить)", hint: "кэйм" },
        { front: "be → ?", back: "was / were (быть)", hint: "уоз / уё" }
      ]
    },
    {
      id: "it-english",
      title: "Work & IT English",
      cards: [
        { front: "bug", back: "ошибка (баг)", hint: "баг" },
        { front: "fix", back: "исправить", hint: "фикс" },
        { front: "feature", back: "функция, возможность", hint: "фичэ" },
        { front: "deploy", back: "развернуть, выкатить", hint: "диплой" },
        { front: "release", back: "релиз, выпуск", hint: "рилиз" },
        { front: "meeting", back: "встреча, совещание", hint: "митин" },
        { front: "deadline", back: "срок сдачи", hint: "дэдлайн" },
        { front: "review", back: "проверка кода", hint: "ривью" },
        { front: "No blockers", back: "Ничего не мешает", hint: "ноу блокэз" },
        { front: "Can you hear me?", back: "Вы меня слышите?", hint: "кэн ю хиэ ми" }
      ]
    }
  ]
};

window.QUIZZES = {
  quizzes: [
    {
      id: "q1",
      title: "Урок 1 — to be",
      questions: [
        { q: "I ___ a student.", options: ["am", "is", "are"], answer: 0 },
        { q: "She ___ my friend.", options: ["am", "is", "are"], answer: 1 },
        { q: "They ___ from Italy.", options: ["am", "is", "are"], answer: 2 },
        { q: "«Как тебя зовут?» — это…", options: ["Where are you from?", "What's your name?", "How are you?"], answer: 1 },
        { q: "Отрицание: He ___ at home.", options: ["isn't", "aren't", "not is"], answer: 0 },
        { q: "Вопрос: ___ you tired?", options: ["Is", "Am", "Are"], answer: 2 }
      ]
    },
    {
      id: "q2",
      title: "Урок 2 — числа и притяжательные",
      questions: [
        { q: "«Мне 25 лет» — правильно:", options: ["I have 25", "I'm 25", "I am 25 years"], answer: 1 },
        { q: "She has a brother. ___ brother is 10.", options: ["His", "Her", "Their"], answer: 1 },
        { q: "We have a house. ___ house is new.", options: ["Our", "Your", "My"], answer: 0 },
        { q: "Машина Анны:", options: ["Anna car", "Anna's car", "car of Anna"], answer: 1 },
        { q: "Число 13 — это…", options: ["thirty", "thirteen", "three"], answer: 1 }
      ]
    },
    {
      id: "q3",
      title: "Урок 3 — артикли и мн. число",
      questions: [
        { q: "___ apple", options: ["a", "an", "the"], answer: 1 },
        { q: "___ car", options: ["a", "an", "the"], answer: 0 },
        { q: "Множественное от 'child':", options: ["childs", "children", "childes"], answer: 1 },
        { q: "Множественное от 'city':", options: ["citys", "cities", "cityes"], answer: 1 },
        { q: "«Это мои друзья» (рядом):", options: ["This is my friends", "These are my friends", "Those are my friends"], answer: 1 }
      ]
    },
    {
      id: "q4",
      title: "Урок 4 — Present Simple",
      questions: [
        { q: "He ___ in a bank.", options: ["work", "works", "working"], answer: 1 },
        { q: "She ___ to school.", options: ["go", "gos", "goes"], answer: 2 },
        { q: "Отрицание: She ___ coffee.", options: ["don't like", "doesn't like", "doesn't likes"], answer: 1 },
        { q: "Вопрос: ___ you like music?", options: ["Do", "Does", "Are"], answer: 0 },
        { q: "My brother ___ English.", options: ["study", "studys", "studies"], answer: 2 }
      ]
    },
    {
      id: "q6",
      title: "Урок 6 — some / any",
      questions: [
        { q: "I have ___ bread.", options: ["some", "any", "much"], answer: 0 },
        { q: "Is there ___ milk?", options: ["some", "any", "many"], answer: 1 },
        { q: "How ___ apples?", options: ["much", "many", "any"], answer: 1 },
        { q: "How ___ water?", options: ["much", "many", "some"], answer: 0 },
        { q: "«Сколько это стоит?»", options: ["How many is it?", "How much is it?", "How is it?"], answer: 1 }
      ]
    },
    {
      id: "q7",
      title: "Урок 7 — Present Continuous",
      questions: [
        { q: "I ___ a book now.", options: ["read", "am reading", "reads"], answer: 1 },
        { q: "He ___ in the park. (run)", options: ["is runing", "is running", "running"], answer: 1 },
        { q: "«Каждый день» — это время:", options: ["Present Simple", "Present Continuous"], answer: 0 },
        { q: "Look! She ___ now.", options: ["works", "is working", "work"], answer: 1 },
        { q: "Вопрос: What ___ you doing?", options: ["do", "are", "is"], answer: 1 }
      ]
    },
    {
      id: "q9",
      title: "Урок 9 — Past Simple",
      questions: [
        { q: "Past Simple от 'go':", options: ["goed", "went", "gone"], answer: 1 },
        { q: "Past Simple от 'buy':", options: ["buyed", "bought", "buied"], answer: 1 },
        { q: "I (work) yesterday →", options: ["worked", "worke", "did work"], answer: 0 },
        { q: "Отрицание: She ___ home.", options: ["didn't went", "didn't go", "don't go"], answer: 1 },
        { q: "Вопрос: ___ you buy bread?", options: ["Did", "Do", "Was"], answer: 0 }
      ]
    },
    {
      id: "q10",
      title: "Урок 10 — Будущее",
      questions: [
        { q: "Запланированное действие — это…", options: ["will", "be going to"], answer: 1 },
        { q: "The bag is heavy. — I ___ help you. (решил сейчас)", options: ["will", "am going to"], answer: 0 },
        { q: "Отрицание will: I ___ be late.", options: ["willn't", "won't", "don't will"], answer: 1 },
        { q: "She ___ study English next year.", options: ["is going to", "going to", "will to"], answer: 0 },
        { q: "«Думаю, завтра будет дождь»:", options: ["I think it will rain", "I think it rains", "It going rain"], answer: 0 }
      ]
    }
  ]
};
