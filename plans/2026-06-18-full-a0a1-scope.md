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
- [x] **Прилагательные** (фермерские) — цвета закрыты в **L8** (10 цветов через `have got`/описание). State-прилагательные
  закрыты в **L9** (broken/wet/cold/hot/heavy/empty/full/ready через is/are-предикатив: «The heater is broken»,
  «The crate is heavy»). `dirty`/`light` сознательно НЕ взяты (light занят L5-словом, dirty без честного эмодзи;
  `clean`/`dry` заняты L6/L7). 8 состояний-прилагательных в words[] + якоря использования в examples/quiz.
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
   - [x] **L8** «Что у меня есть: одежда и цвета» (have/has + do/does + PPE-одежда + цвета) — грамматика плейн
     `have/has` + `do/does` (БЕЗ `have got`/сокращений — решение грилла, чтобы не трогать токенайзер; `have got`
     узнаваемой пометкой в cultural + everyday). 30 слов: 18 одежда/PPE (boots/gloves/vest/cap/helmet/mask/goggles/
     trousers/shirt/socks/scarf/trainers/shorts/glasses/jacket/coat/wellies/sunglasses) + 12 цветов (incl. BrE grey,
     colour). everyday «нехватка PPE» + [LISTEN]×2/[GIST] + 12 quiz (фокус на согласовании he→has, does+have-база).
     Адверсариально проверено (язык/IPA + педагогика); 2 эмодзи-обманки исправлены (earmuffs🎧→sunglasses🕶️,
     overalls🥼→wellies🥾). Аудит зелёный, превью-рендер OK. `WHITELIST[8]=have/has/got`. Коммит L8.
     ⚠️ Известный риск: `pink`🩷/`grey`🩶 — Unicode-15 hearts, могут не отрендериться на старых Android (LOW).
   - [x] **L9** «Что есть в вагончике: комната и кэмп» (there is / there are + some/any + комната/мебель/техника
     + state-прилагательные). 30 слов: 22 камп/мебель/техника (room/bed/shower/bath/key/heater/kettle/fridge/cooker/
     sink/mug/plate/spoon/fork/bowl/socket/lamp/blanket/candle/shelf/drawer/curtain) + 8 состояний (broken/wet/cold/
     hot/heavy/empty/full/ready). grammar на there is/are + some/any (3 формы, 14 примеров) + everyday «сообщить о
     проблеме в вагончике» + [LISTEN]×2/[GIST] + 12 quiz. Плейн `is not`/`are not` (без сокращений — токенайзер).
     `WHITELIST[9]=some/any/here`. Аудит зелёный, verify-ipa/transcr по L9 чисты, превью-рендер OK, адверсариально
     проверено (язык/IPA SHIP + педагогика SHIP); фикс: present-simple-future → Present Continuous (как L7). Коммит L9.
     **Source-cited сверка 5 источников (метод `0ab5e1f`, скилл `/lesson-naturalness-check`): SHIP — 0 флагов от
     3 ревьюеров (коллокации · BrE/A0 · CEFR+safety), слой-4 гейт пройден.**
     ⚠️ Грабли стеммера: `bed`≤3 не стеммится, а `beds`→`b` → плюрал не матчится в снежке; в проверяемых полях
     использовать `chairs`/`blankets`, не `beds` (в `rule_ru` снежок не сканирует — там натуральный `beds` ок).
   - [x] **L10** «В магазине: еда и цены (Tesco)» (how much / how many + would like + еда/напитки/покупки).
     30 новых BrE-слов: 17 неисчисляемых (food/bread/milk/rice/pasta/meat/fish/cheese/butter/honey/sugar/salt/
     water/juice/tea/coffee/soup) + 8 исчисляемых (egg/potato/onion/tomato/carrot/banana/biscuit/chicken) +
     5 шопинг (shopping/list/price/tin/kilo). grammar: 3 формы (would like ✅ / would not like + «No, thank you» ❌ /
     how much·how many·Would you like ❓) + 12 примеров + «ещё проще» + ytQuery. **Все ценовые вопросы — на
     неисчисляемых/ед.ч.** (much↔many без скрытого price-исключения, чтобы не конфликтовать с ключом quiz).
     everyday «В магазине и на кассе (Tesco)» (Excuse me / Can I have / How much is it / Have you got).
     [LISTEN]×2/[GIST]×2/[QUESTION] + 13 quiz. Числа словами (one–ten из L4; токенайзер срезает цифры → «£2»
     нельзя в снежок-полях). `WHITELIST[10]=many/would/like/of`. Аудит зелёный, verify-ipa (0 расхождений)/
     verify-transcr (1 нотация: onion) по L10 чисты, превью-рендер OK (5 табов, 0 ошибок консоли).
     **Слой-3 (адверс.) + слой-4 (`/lesson-naturalness-check`, source-cited 5 источников): SHIP после 5 правок** —
     поймано: «how much are the bananas/eggs» (исчисляемые → правило much/many, противоречие ключу quiz[7]) →
     ценовые вопросы переведены на cheese/that/it; «Good.» как реакция на отказ «no soup today» → дроп; несходящийся
     итог корзины «£10» → «£3» (bread £1 + eggs £2; деньги = зона повышенной ответственности). Отклонён ложный флаг:
     «I would not like X» — валидный A0-негатив (урок уже учит «No, thank you» в rule_ru/note_ru). Коммит L10.
   - [x] **L11** «В пути: автобус, поезд, билет» (this/that/these/those + транспорт/поездка). 30 новых BrE-слов:
     транспорт (bus/coach/train/taxi/lorry/motorbike/plane/ferry/boat) + станция (ticket/station/platform/stop/seat/
     airport/flight/suitcase/backpack/timetable/journey) + улица (street/corner/traffic/petrol/garage/pavement/
     crossing/queue/fare/exit). grammar: 3 формы демонстративов (this/that=is · these/those=are; близко/далеко ×
     один/много) + 12 примеров + «ещё проще» + ytQuery. Диалог «станция» worker↔staff (спросить автобус, купить
     билет, найти место/выход), everyday «На станции» (single ticket/which platform/next bus). `WHITELIST[11]=which/at`
     (демонстративы уже в whitelist L1/L3). Грабли учтены: «bus» ≤3+на -s → «buses» только в `cultural_ru` (вне снежка).
     Аудит зелёный; verify-ipa (3 нотации/варианта: station/garage/pavement, приняты)/verify-transcr (1: queue) чисты;
     превью 5 табов, 0 ошибок. **Слой-3+4 (объединённый workflow): SHIP после 4 правок** — o'clock «оклок»→«эклок»
     (дрейф как L7 tomorrow), «are» крутка «а»→«ар» (регрессия от конвенции L1/L3, ~14 мест), 2 эмодзи-обманки
     (corner 📐→↪️, queue 🧍→👥). Scope сверен с реальным CEFR A0-A1-текстом. Коммит L11.
   - [x] **L12** «Личные данные: дата рождения и форма» (was/were + was/were born + даты + личные данные/документы).
     30 новых слов: 12 месяцев (January–December) + year/date/born/birthday/age/old/address/number/form/email/card/
     contract/married/single/signature/photo/tick/postcode. grammar: was (I/he/she/it) / were (you/we/they) + was born,
     3 формы + 12 примеров + «ещё проще» + ytQuery. Диалог «регистрация» manager↔worker, everyday «Заполнить форму»
     (date of birth/sign here/NI number/fill in this form). `WHITELIST[12]=was/were/when`. Зона повышенной
     ответственности (документы): без юр./визовых утверждений. Аудит зелёный (поймал и убрал `write` — нет в L6/L7);
     verify-ipa (April выровнен к RP /ˈeɪprɪl/; January/February/birthday/number — нотация/артефакты)/verify-transcr
     (1: January, осознанно) чисты; превью «12/12», 0 ошибок. **Слой-3+4 (safety-акцент): контент SHIP** — отклонён
     ложный флаг (12× 🗓️ месяцев = честно, как L4 дни). Ревью выявило системный баг ассессмента (во всех уроках
     quiz `c:0` → тык первой кнопки = 100%) → отдельный фикс движка (shuffle опций). Коммит L12.
   - [x] **L13** «Прошлая смена: что я делал» (Past Simple правильные +-ed / неправильные +/−/?). 30 новых слов:
     14 глаголов (eat/drink/leave/buy/pay/drive + правильные collect/deliver/unload/repair/ask/answer/return/park) +
     16 смена/время (yesterday/ago/report/shift/boss/problem/mistake/accident/late/early/pallet/weekend/lunch/minute/
     hard/overtime). grammar: ✅ прош. форма (worked/ate) · ❌/❓ `did`+БАЗА · 12 примеров + «ещё проще» + ytQuery.
     Диалог «отчёт менеджеру», everyday «Отчёт о смене» (+ accident — safety без мед. утверждений). `WHITELIST[13]=
     did/last` + 6 неправильных форм `ate/drank/left/bought/paid/drove`. Обойдена ловушка стеммера на `-e`-глаголах
     (arrive/use → согласные-окончания). Аудит зелёный; verify-ipa (collect/park/mistake — Wiktionary-артефакты,
     BrE верны)/verify-transcr (1: yesterday, как `yes`) чисты; превью «13/13», 0 ошибок. **Слой-3+4: SHIP после
     2 правок** на реплике «I asked the mechanic» — RU-глосс «позвал»→«спросил» (карточка `ask=спрашивать`) и transcr
     `мэканик`→`мэкэник` (канон L2). ⚠️ Построен как override совета — живой тест Б всё ещё не проведён. Коммит L13.
   - [ ] L14–L15 — далее по одному за сессию. **L14 = can/can't + здоровье/чувства (NHS, зона повышенной ответственности).**

### Выбранный владельцем порядок (2026-06-18): фазы 1 → 2 → 3 (контент-дыры → навыки),
последовательно, с приёмкой; тираж 4-15 (вариант 4) пока не запускать.

### Операционная заметка: большие фан-ауты (18-30 агентов) могут выбить лимит сессии.
Предпочитать меньший параллелизм / последовательные мелкие workflow. См. память [[workflow-fanout-session-limit]].

## Скилл-баланс (цель)
Было: recognition-only (TTS + MCQ). Станет: listening (listen-choose), reading (gist),
production (tap-build), плюс справочник (phrasebook) и удержание (SRS).
