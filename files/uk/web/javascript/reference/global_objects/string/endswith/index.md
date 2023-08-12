---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.endsWith
---

{{JSRef}}

Метод **`endsWith()`** (закінчується підрядком) значень {{jsxref("String")}} визначає, чи завершується його рядок символами з рядка-параметра, повертаючи `true` або `false` відповідно.

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## Синтаксис

```js-nolint
endsWith(searchString)
endsWith(searchString, endPosition)
```

### Параметри

- `searchString`
  - : Символи, які потрібно шукати в кінці рядка `str`. Цей параметр не може [бути регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv). Будь-які значення, що не є регулярними виразами, [зводяться до рядків](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka), тож пропуск цього параметра або передача в ньому `undefined` змусить `endsWith` шукати рядок `"undefined"`, а це рідко саме те, що потрібно.
- `length` {{optional_inline}}
  - : Кінцева позиція, на якій очікується зустріти `searchString` (індекс останнього символу `searchString` плюс 1). Усталено дорівнює значенню `str.length`.

### Повернене значення

Повертає **`true`**, якщо передана послідовність символів знайдена в кінці рядка, в тому числі коли `searchString` – порожній рядок, а інакше — **`false`**.

### Винятки

- {{jsxref("TypeError")}}
  - : Викидається, коли `searchString` [є регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv).

## Опис

Цей метод дозволяє визначити, чи рядок закінчується іншим рядком. Цей метод чутливий до регістру символів.

## Приклади

### Застосування методу endsWith()

```js
const str = "Чи бути, чи не бути — ось питання.";

console.log(str.endsWith("питання.")); // true
console.log(str.endsWith("бути")); // false
console.log(str.endsWith("бути", 19)); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.endsWith` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
