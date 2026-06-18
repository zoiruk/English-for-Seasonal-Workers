# Master Lexicon A0-A1 — артефакт Фазы 0

Источник правды по словам/IPA ДО кода. Снимает разом: снежный ком, дедупликацию,
CEFR-объём и галлюцинации IPA. Одобряется владельцем до начала Фазы 1.

> **IPA-оговорка:** IPA ниже — стандартные британские (en-GB) транскрипции
> распространённых A0-слов. Перед заливкой в `app/data.js` спорные/редкие (особенно
> топонимы) сверить с Wiktionary. Кириллица `transcr` — производная от IPA и подаётся
> как **затухающая опора** (в ранних уроках, дальше меньше). Слово всегда латиницей + 🔊.

## CEFR-проверка объёма (выполнена 2026-06-16)

`specs/CEFR A0-A1…outline.pdf` задаёт лексику как **~18 областей-категорий**, не как
список с потолком. 15 × 30 = 450 фермерских слов реализуемы: берём фермерское
подмножество каждой области. Служебные слова — в whitelist (ниже), НЕ в 450.
Вывод: **жёсткого конфликта «фермерская лексика × CEFR» нет.**

## Стартовый whitelist снежного кома

Служебные/грамматические слова, вводимые в блоках `grammar` и НЕ входящие в 30 тематических
слов урока. Снежок-аудит считает их «известными» с урока, где введена их грамматика.

- **Урок 1 (вводит):** I, you, he, she, it, we, they · am, is, are, not · a, an, the ·
  this, that · what, where · and, from · good (good morning) · question-форма (Am I…?).
- **Урок 2:** my, your, his, her, our, their · 's (possessive).
- **Урок 3:** me, him, her, us, them · these, those.
- Далее каждый урок добавляет служебные слова своей грамм-темы (have/has, do/does, can,
  was/were, some/any, much/many, would, will…). Полный список ведём по мере уроков.
- **Имена собственные** (Ahmad, Tom, Sara, Anna, Rustam, Fatima) и топонимы из словарей
  снежок допускает всегда — список имён живёт в `scripts/lib.js` (`NAMES`).

## Контракт аудит-скриптов (`scripts/`, запуск `npm run audit`)

Каждый скрипт: вход — `window.LESSONS` из `app/data.js`; выход — массив ошибок
`{lesson, field, msg}`; **exit code 0** если ошибок нет, **1** если есть; печать таблицей.

- **`audit.js` (структура/полнота):** `words.length≥30`, у слова есть `e/en/transcr/ru/pn`,
  нет группировки (`en` без запятых/слэшей); `dialogue.length≥10`, `s∈{m,w,c,d}`,
  чередование, 5–15 слов в реплике, есть `transcr`; `grammar` — 3 формы, у каждой `table`,
  суммарно `examples≥10`, есть `intro/cultural/note`, везде `transcr`; `quiz.length≥10`,
  у вопроса тег `[COMPLETE|TRANSLATE|NEGATIVE|CORRECT|QUESTION]`, 4 `opts`, есть `c`+`expl`.
- **`dedup.js`:** одно англ. слово (`words[].en`, нормализованное lowercase) встречается
  во всём курсе ровно в одном уроке.
- **`snowball.js`:** каждое англ. слово в `grammar/dialogue/quiz` урока N есть в `words`
  уроков 1…N ИЛИ в whitelist, активном на урок N. Незнакомое → ошибка с уроком и словом.

## Урок 1 — «Привет! Я — Ахмад» (am/is/are · знакомство/ферма) — 30 слов

Эталон формата `{e, en, transcr, ru, pn}`.

| # | e | en | transcr (RU) | ru | pn (IPA) |
|---|---|----|--------------|----|----------|
| 1 | 👋 | hello | хэлоу | привет | /həˈləʊ/ |
| 2 | 👋 | goodbye | гудбай | до свидания | /ɡʊdˈbaɪ/ |
| 3 | ✅ | yes | йес | да | /jes/ |
| 4 | ❌ | no | ноу | нет | /nəʊ/ |
| 5 | 🙏 | please | плиз | пожалуйста | /pliːz/ |
| 6 | 🙏 | thanks | сэнкс | спасибо | /θæŋks/ |
| 7 | 😔 | sorry | сори | извините | /ˈsɒri/ |
| 8 | 🪪 | name | нэйм | имя | /neɪm/ |
| 9 | 👷 | worker | вёкэ | рабочий | /ˈwɜːkə/ |
| 10 | 🚜 | farm | фарм | ферма | /fɑːm/ |
| 11 | 🌾 | field | филд | поле | /fiːld/ |
| 12 | 👨‍🌾 | farmer | фармэ | фермер | /ˈfɑːmə/ |
| 13 | 👔 | manager | мэниджэ | менеджер | /ˈmænɪdʒə/ |
| 14 | 🦺 | supervisor | супэвайзэ | бригадир | /ˈsuːpəvaɪzə/ |
| 15 | 👥 | team | тим | бригада | /tiːm/ |
| 16 | ✋ | picker | пикэ | сборщик | /ˈpɪkə/ |
| 17 | 📦 | packer | пэкэ | упаковщик | /ˈpækə/ |
| 18 | 🚐 | driver | драйвэ | водитель | /ˈdraɪvə/ |
| 19 | 🤝 | friend | фрэнд | друг | /frend/ |
| 20 | 🌅 | morning | монинг | утро | /ˈmɔːnɪŋ/ |
| 21 | 🛂 | passport | паспорт | паспорт | /ˈpɑːspɔːt/ |
| 22 | 📄 | visa | визэ | виза | /ˈviːzə/ |
| 23 | 🗺️ | country | кантри | страна | /ˈkʌntri/ |
| 24 | 🇺🇿 | Uzbekistan | узбекистан | Узбекистан | /ʊzˌbekɪˈstɑːn/ |
| 25 | 🇹🇯 | Tajikistan | таджикистан | Таджикистан | /təˈdʒiːkɪˌstɑːn/ |
| 26 | 🇰🇬 | Kyrgyzstan | кыргызстан | Кыргызстан | /ˈkɪəɡɪˌstɑːn/ |
| 27 | 🇰🇿 | Kazakhstan | казахстан | Казахстан | /ˌkæzəkˈstɑːn/ |
| 28 | 🇬🇧 | Britain | бритн | Британия | /ˈbrɪtn/ |
| 29 | 🗣️ | English | инглиш | английский | /ˈɪŋɡlɪʃ/ |
| 30 | 🙌 | welcome | вэлкэм | добро пожаловать | /ˈwelkəm/ |

## Карта уроков 2–15 (тема × CEFR-область × фермерский домен)

Полные списки слов генерируются при сборке каждого урока (с прогоном dedup/snowball).

| # | Грамматика | CEFR-области | Фермерский домен слов (30) |
|---|-----------|--------------|----------------------------|
| 2 | possessive adj + 's | family relations, jobs, everyday objects | семья (wife/son/brother), личные вещи (phone/bag/towel/locker), коллеги (colleague/mechanic/cleaner), job/break |
| 3 | this is + a/an + object pron | everyday objects | инструменты: punnet, crate, trolley, row, box |
| 4 | numbers 1-100 + time + days | numbers, telling time | числа, дни недели, время смены, деньги (£) |
| 5 | where/what + prepositions | places in a village | места: canteen, toilet, gate, office, store |
| 6 | Present Simple + adv. frequency | everyday verbs, adverbs | глаголы работы: pick, pack, carry, weigh, sort |
| 7 | Present Continuous (+future) | everyday verbs | -ing действия: running, waiting, fixing, loading |
| 8 | have/has + colours | colours, clothing | PPE: boots, hat, jacket; цвета |
| 9 | there is/are (some/any) | rooms & furniture | вагончик/кэмп: bed, heater, shower, key |
| 10 | how much/many + would like | food & drink | еда в Tesco: bread, milk, rice, eggs, цены |
| 11 | this/that/these/those + transport | transport & travel | bus, ticket, station, stop |
| 12 | was/were born + dates | personal information | документы: DOB, NI number, form, sign |
| 13 | Past Simple (reg/irreg) | everyday verbs (past) | отчёт смены: yesterday, last week, ago, boxes |
| 14 | can/can't | (health) body & illness | здоровье: sick, hurts, doctor, medicine, help |
| 15 | want/like/would like | food & drink, social | перерыв/чай: cheers, lovely, mate, break |

> Категории «деньги/права/NHS/безопасность» (уроки 4, 8, 12, 14) — зона повышенной
> ответственности: проверять строже, без юр./мед. утверждений, табу про визу/заработок.
