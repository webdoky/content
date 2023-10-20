---
title: "<script> – Атрибут type"
slug: Web/HTML/Element/script/type
page-type: html-attribute
browser-compat: html.elements.script.type
---

{{HTMLSidebar}}

Атрибут **`type`** (тип) елемента [`<script>`](/uk/docs/Web/HTML/Element/script) вказує на _тип_ сценарію, що представлений елементом: класичний сценарій, карта імпортування, модуль JavaScript, правила спекуляції або блок даних.

## Значення

The value of this attribute indicates the type of data represented by the script, and will be one of the following:

- **Атрибут не заданий (усталено), порожній рядок або MIME-тип JavaScript**
  - : Вказує на те, що цей сценарій є "класичним сценарієм", що вміщає код JavaScript.
    Розробникам рекомендується пропускати цей атрибут, якщо сценарій вказує на код JavaScript, а не вказувати MIME-тип.
    MIME-типи JavaScript [перераховані в специфікації типів медіа IANA](/uk/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript).
- [`importmap`](/uk/docs/Web/HTML/Element/script/type/importmap)
  - : Це значення вказує на те, що тіло цього елемента містить карту імпортування.
    Карта імпортування – це об'єкт JSON, який розробники можуть використовувати для керування тим, як браузер розв'язує специфікатори модулів при імпортуванні [модулів JavaScript](/uk/docs/Web/JavaScript/Guide/Modules#import-moduliv-za-dopomohoiu-kart-importuvannia).
- `module`
  - : Це значення вказує на те, що цей код слід розглядати як модуль JavaScript.
    Обробка вміщеного коду – відкладається.
    Атрибути `charset` і `defer` – не діють.
    Інформація про використання `module` – у посібнику [Модулі JavaScript](/uk/docs/Web/JavaScript/Guide/Modules).
    На відміну від класичних сценаріїв, модульні сценарії вимагають використання протоколу CORS для отримання даних з іншого походження.
- [`speculationrules`](/uk/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Це значення вказує на те, що тіло цього елемента містить правила спекуляції.
    Правила спекуляції приймають форму об'єкта JSON, який визначає, які ресурси браузер повинен попередньо отримати або попередньо візуалізувати. Це частина [API правил спекуляції](/uk/docs/Web/Performance/Speculative_loading#api-pravyl-spekuliatsii).
- **Будь-яке інше значення**
  - : Вміст усередині розглядається як блок даних і не обробляється браузером.
    Розробники повинні використовувати дійсні MIME-типи, які не є MIME-типом JavaScript, позначаючи блоки даних
    Усі інші атрибути ігноруються, включно з атрибутом `src`.

> **Примітка:** В раніших браузерах тип ідентифікував мову сценарію вбудованого або імпортованого (за допомогою атрибута `src`) коду.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}
