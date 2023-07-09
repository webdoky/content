---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
page-type: javascript-static-method
browser-compat: javascript.builtins.String.fromCharCode
---

{{JSRef}}

Статичний метод **`String.fromCharCode()`** (із коду символу) повертає рядок, сформований з вказаної послідовності кодових одиниць UTF-16.

{{EmbedInteractiveExample("pages/js/string-fromcharcode.html","shorter")}}

## Синтаксис

```js-nolint
String.fromCharCode(num1)
String.fromCharCode(num1, num2)
String.fromCharCode(num1, num2, /* …, */ numN)
```

### Параметри

- `numN`
  - : Число між `0` і `65535` (`0xFFFF`), що відповідає кодовій одиниці UTF-16. Числа, більші за `0xFFFF`, обрізаються до останніх 16 бітів. Перевірка на коректність не виконується.

### Повернене значення

Рядок довжиною `N`, який складається з `N` вказаних кодових одиниць UTF-16.

## Опис

У зв'язку з тим, що `fromCharCode()` є статичним методом `String`, він завжди використовується у вигляді `String.fromCharCode()`, а не як метод самостійно створених значень `String`.

Кодові точки Unicode мають діапазон від `0` до `1114111` (`0x10FFFF`). Статичний метод `charCodeAt()` завжди повертає значення, менші за `65536`, оскільки вищі кодові точки представлені _парами_ 16-бітових псевдосимволів-сурогатів. Таким чином, щоб створити повний символ зі значенням, більшим за `65535`, необхідно надати дві кодові одиниці (як якби оброблявся рядок з двома символами). Про Unicode читайте [UTF-16 символи, кодові точки Unicode та графемні кластери](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery).

У зв'язку з тим, що `fromCharCode()` працює лише з 16-бітовими значеннями (так само як послідовності екранування `\u`), для отримання доповняльного символу необхідна сурогатна пара. Наприклад, і `String.fromCharCode(0xd83c, 0xdf03)`, і `"\ud83c\udf03"` повертають кодову точку `U+1F303` "Зоряна ніч". Попри те, що існує математична залежність між значенням доповняльної кодової точки (тобто `0x1f303`) і обома сурогатними значеннями, що їй відповідають (тобто `0xd83c` і `0xdf03`), необхідний додатковий крок, щоб або обчислити, або знайти значення сурогатної пари щоразу, коли необхідна доповняльна кодова точка. Через це зручніше використовувати {{jsxref("String.fromCodePoint()")}}, котрий дає змогу повертати доповняльні символи на основі їхніх фактичних значень кодових точок. Наприклад, `String.fromCodePoint(0x1f303)` повертає кодову точку `U+1F303` "Зоряна ніч".

## Приклади

### Застосування fromCharCode()

В UTF-16 символи базового багатомовного плану займають одну кодову одиницю:

```js
String.fromCharCode(65, 66, 67); // повертає "ABC"
String.fromCharCode(0x2014); // повертає "—"
String.fromCharCode(0x12014); // також повертає "—"; цифра 1 обрізається, тож нею знехтувано
String.fromCharCode(8212); // також повертає "—"; 8212 — це десяткова форма числа 0x2014
```

Допоміжні символи в UTF-16 вимагають двох кодових одиниць (так звана сурогатна пара):

```js
String.fromCharCode(0xd83c, 0xdf03); // Кодова одиниця U+1F303 "Зоряна
String.fromCharCode(55356, 57091); // ніч" === "\uD83C\uDF03"

String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07); // "\uD834\uDF06a\uD834\uDF07"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
