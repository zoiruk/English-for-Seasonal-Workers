# План: полный A0-A1 (maximum scope) — 2026-06-18

Источник: `specs/coverage-matrix.md` (сверка с New Headway Beginner, Speakout Starter
SB+WB, face2face Starter + CEFR A0-A1 PDF). Решение владельца: **максимальный объём** —
сделать полноценную рекомендуемую платформу, а не «грамматика + квиз».

## Принципы (не меняются)
RU-only, фермерская тема, снежный ком, аудит перед коммитом, offline-first, Telegram-light,
3-слойная проверка каждого урока (autotest + контракт-чеклист + адверсариальные ревьюеры).

## A. Грамматика/лексика — дыры закрыть внутри уроков
- [x] **Объектные местоимения me/him/us/them** — введены в **L6** (Present Simple): таблица I→me… в `cultural`, quiz «Give me/him». Коммит `e5800d8`.
- [x] **L7 явно учит функцию «планы на будущее»** через Present Continuous for future
  (как English File Beginner): rule + примеры «I am finishing today / starting tomorrow» + реплика
  диалога + [TRANSLATE]-quiz на future. **`be going to` НЕ делаем** (опционально; функция покрыта). Коммит L7.
- [ ] **like/love/hate + -ing** (явно) — в **L15** («I like picking», «I hate the cold»).
- [ ] **Прилагательные** (фермерские) — расширить **L8** за пределы цветов: wet/dry/full/empty/heavy/light/broken/clean/dirty/cold/hot/ready.
- [x] **Национальности** (Uzbek/Tajik/Kyrgyz/Kazakh/British) — добавлены в **L1** words (35 слов), пример «She is British.» в grammar.examples, [TRANSLATE] в quiz (L1 → 13 вопросов).
- [ ] **Чувства/welfare** (tired/cold/hungry/sick/happy) — добавить в **L14** (здоровье).
- [ ] **Числа 11–100 + множественное число (-s как тема)** — найдено doc-аудитом 2026-06-19: L4
  построен только 1–10 (бюджет 30 слов; structure.md/coverage-matrix планировали «1-100»),
  а правило плюрала (-s) явно нигде не вводится (используется в снежке, но не объясняется).
  Решить владельцу: вшить 11–100 + плурал в поздний урок (напр. L13 Past/отчёт смены) или supplement.
- [ ] **L5/L11 town-места — сверить** (doc-аудит 2026-06-19): L5 занял bank/hospital/shop/market
  (dedup залочил навсегда). master-lexicon L11 = транспорт, а coverage-matrix:71 = «town». При сборке
  L11 не переиспользовать занятые слова; согласовать домен L11 в master-lexicon ↔ coverage-matrix.

## B. Функциональный слой (Everyday English) — #1 пробел
- [ ] **Новый компонент урока `everyday`** — функциональный скрипт урока как переиспользуемый
  набор фраз с аудио (5-й блок/таб). По одной survival-функции на урок, фермерская рамка.
- [ ] **Classroom-survival (L1):** алфавит + «произнести имя по буквам» + «I don't understand /
  Sorry? / Again, please / Slowly, please / How do you spell…?». 4/4 книги учат; у нас ноль.
- [ ] Скрипты по урокам: спросить время (L4), заказать/купить (L10), спросить дорогу (L5),
  по телефону «заболел» (L14), заполнить форму (L12), приветствия/прощания (L1).

## C. Новые модули (engine-level)
- [x] **Разговорник выживания** — отдельный экран из хаба, 6 категорий / 62 фразы (work/shop/
  health/SOS/documents/«не понимаю»). Вне снежка. Движок: `app/phrasebook.js` + вход из хаба +
  `renderPhrasebook`/`renderPhraseCategory`. Коммиты `fd0fbdd` (экран+контент), `498ef9f`
  (безопасность health/SOS/documents), `ab0fbb0` (understand/work/shop). **Все 6/6 категорий
  адверсариально проверены** (British naturalness · транскрипция · RU+безопасность). Долг закрыт.
- [x] **Listen-and-choose** — тег `[LISTEN]` в quiz[]: кнопка «▶ Слушать» (TTS) → выбрать
  русский перевод. Английский текст скрыт. Ретрофит L1-L3. Коммит `4f7e7a6`.
- [x] **Reading-for-gist** — тег `[GIST]` в quiz[]: RU-вопрос на понимание диалога урока.
  Ретрофит L1-L3. Коммит `4f7e7a6`.
- [ ] **Tap-to-build** — собрать предложение из плиток-слов (без клавиатуры/микрофона) —
  суррогат продукции для говорения/письма, под низкую грамотность и offline.
- [x] **Review / SRS** — флэш-карты из seen-уроков: RU → tap → EN+transcr+TTS; «Знаю»/«Ещё раз»; прогресс-бар. Хаб-запись 🔁. Коммит: `bbcce17`.
- [x] **Сертификат** — экран 🏆: имя (localStorage), уроки/слова/стрик, CEFR A0-A1, print-кнопка (@media print). Коммит: `bbcce17`.

## Порядок сборки
1. ✅ **Engine/schema v2:** `everyday`-блок, динамические табы, общий «Далее». Аудит дополнен.
2. ✅ **Функц. блок** на L1-3: L1 (`117d8df`), L2+L3 (`ec5f086`, адверсариально проверены).
3. ✅ **Разговорник** (`fd0fbdd`) + адверсариальная проверка безопасности health/SOS/docs (`498ef9f`).
4. ✅ **Грамм/лекс-дыры (существующие уроки)**: национальности в L1 закрыты. Остальные дыры (L6/L8/L14/L15) — заметки для тиража, вшиваются при создании этих уроков.
5. ✅ **Навыки:** `[LISTEN]` + `[GIST]` как quiz-теги, ретрофит L1-L3. Аудит чистый.
6. ✅ **Review-режим** + **сертификат** (хаб-фичи).
7. **Тираж уроков 4-15** в богатой схеме (grammar + everyday + listen/read + quiz), по дню.
   - [x] **L4** «Время, дни и деньги» (numbers 1-10 · time/days · money £) — grammar на `It is…`
     (What time/day · How much) + [LISTEN]/[GIST] + everyday (время/payday/payslip). Деньги без
     зарплатных цифр. Аудит зелёный, адверсариальная проверка (язык+педагогика). Коммит `375c57c`.
   - [x] **L5** «Где это? Места на ферме» (where/what · предлоги места in/on/under/behind/near/next to) —
     30 мест (canteen/toilet/office/shop/camp/gate/shed/road/market/river…) + [LISTEN]/[GIST] +
     everyday (спросить дорогу: turn left/right, go straight). Коммит `a3de20c`.
   - [x] **L6** «Что я делаю на работе» (Present Simple + 3-е лицо -s + do/does + наречия частоты +
     объектные me/him/her/us/them — закрыта отложенная дыра). 30 глаголов работы (pick/pack/carry/
     weigh/sort/load…) + berry. everyday (понять задание, попросить помощь). Коммит `e5800d8`.
   - [x] **L7** «Что я делаю прямо сейчас» (Present Continuous + будущее-план). 30 новых -ing-глаголов
     (go/walk/spray/grow/read/climb/feed/sweep/hold…); grammar/dialogue/quiz спрягают НОВЫЕ глаголы (не L6);
     future-план учится (rule+примеры+диалог) И проверяется в quiz; everyday «сказать, что делаешь сейчас».
     Снежок-ловушки -ing (удвоение/немое -e) обойдены; `WHITELIST[7]=now/today/tomorrow/soon/doing`.
     Адверсариально проверено (язык+педагогика). Коммит L7.
   - [ ] L8–L15 — далее по одному за сессию. **L8 = have/has + фермерские прилагательные/цвета (PPE).**

### Выбранный владельцем порядок (2026-06-18): фазы 1 → 2 → 3 (контент-дыры → навыки),
последовательно, с приёмкой; тираж 4-15 (вариант 4) пока не запускать.

### Операционная заметка: большие фан-ауты (18-30 агентов) могут выбить лимит сессии.
Предпочитать меньший параллелизм / последовательные мелкие workflow. См. память [[workflow-fanout-session-limit]].

## Скилл-баланс (цель)
Было: recognition-only (TTS + MCQ). Станет: listening (listen-choose), reading (gist),
production (tap-build), плюс справочник (phrasebook) и удержание (SRS).
