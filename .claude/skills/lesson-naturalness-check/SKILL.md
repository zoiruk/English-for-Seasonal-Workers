---
name: lesson-naturalness-check
description: Source-cited naturalness check of a lesson's English against the 5 reference coursebooks. Use before committing any new/edited lesson or phrasebook text (the mandatory layer-4 gate in CLAUDE.md "Процесс работы"). Triggers: "/lesson-naturalness-check L9", "сверь натуральность урока", "source-cited проверка", "проверь против 5 источников".
---

# Lesson naturalness check (source-cited, method `0ab5e1f`)

Цель: разорвать петлю «ИИ проверяет ИИ» (риск №1). Натуральность сверяется с **изданными
курсами и цитируемыми ELT/UK-источниками**, НЕ с ухом владельца (нулевой английский) и НЕ
с «вкусом» агента. Каждый вердикт обязан нести **цитату-источник**.

## Когда запускать
Перед коммитом ЛЮБОГО нового/правимого английского текста урока или разговорника. Это
обязательный слой (4) проверки из `CLAUDE.md` → «Процесс работы». Пропуск = урок не готов.

## Источники (канон — `specs/reference-sources.md`)
1. English File Beginner (Oxford) — последовательность тем.
2. New Headway Beginner (Oxford) — Everyday English (наш `everyday`).
3. Speakout Starter (Pearson) — разговорные ситуации.
4. face2face Starter (Cambridge) — продуктивные навыки (формы/открытки).
5. CEFR A0-A1 outline PDF (`specs/`) — объём.
Доп. для коллокаций/safety: British Council, Cambridge/Oxford Dictionaries, NHS, gov.uk.
Британские реалии (`chemist`/`till`/`scales`/`cooker`/`wellies`) — корректный BrE, не «чинить».

## Что проверять
Из урока `<Ln>` в `app/data.js` (или `app/phrasebook.js`) собрать ВЕСЬ английский текст:
`grammar.examples[].en`, все `forms.*.table[].example`, `dialogue[].en`, `quiz[].opts`,
`everyday.phrases[].en`, `grammar.simple_ru.examples[].en`. Для каждой строки оценить:
- **Коллокация/идиоматика:** так реально говорят? (не «грамматически легально, но мёртво»).
- **BrE:** британский вариант, не американский.
- **A0-уместность:** есть ли аналог в Starter/Beginner-курсах.
- **Зоны риска** (деньги/права/NHS/безопасность): без юр./мед. утверждений, цитата из UK-источника.

## Процедура (умеренный фан-аут — память [[workflow-fanout-session-limit]])
1. **Проход 1 — поиск (адверсариально):** 2–3 агента-ревьюера (язык/коллокации; BrE/идиоматика;
   safety/CEFR-объём). Каждый возвращает флаги в формате:
   `{location, text, verdict: natural|unnatural|risky, citation: "<источник + что именно>", fix}`.
   Вердикт БЕЗ цитаты не принимается.
2. **Проход 2 — отклонение ложных флагов:** отдельный агент-скептик проверяет каждый флаг:
   действительно ли источник это подтверждает? Британские слова и валидный A0 — защитить
   (как `scale`→`scales` приняли, а `chemist`/`till` отклонили в `0ab5e1f`).
3. **Синтез:** список подтверждённых правок (location → старое → новое → цитата). Только их вносить.
4. После правок — повторить `npm run audit` (снежок/структура могли поехать) + при изменении
   `words[]` `npm run verify-ipa`/`verify-transcr`.

## Выход
Краткий отчёт: подтверждённые правки с цитатами + отклонённые флаги (почему). Вердикт SHIP/FIX.
Это НЕ заменяет живого носителя + YouGlish-прослушку владельцем (финальный гейт перед B1–B2).
