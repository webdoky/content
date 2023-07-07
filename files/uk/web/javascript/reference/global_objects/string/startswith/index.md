---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.startsWith
---

{{JSRef}}

Метод **`startsWith()`** визначає, чи починається рядок символами з рядка-параметра, повертаючи `true` або `false` відповідно.

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## Синтаксис

```js-nolint
startsWith(searchString)
startsWith(searchString, position)
```

### Параметри

- `searchString`
  - : Символи, які слід шукати на початку цього рядка. Не може [бути регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv). Будь-яке значення, що не є регулярним виразом, [зводиться до рядка](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka), тож пропуск цього параметра або передача в ньому `undefined` змушує `startsWith()` шукати рядок `"undefined"`, а це рідко саме те, що потрібно.
- `position` {{optional_inline}}
  - : Стартова позиція, на якій очікується знайти `searchString` (індекс першого символу `searchString`). Усталено — `0`.

### Повернене значення

Значення **`true`**, якщо дані символи знайдені на початку рядка, включно з випадком, коли `searchString` є порожнім рядком; інакше – **`false`**.

### Винятки

- {{jsxref("TypeError")}}
  - : Викидається, коли `searchString` [є регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv).

## Опис

Цей метод дає змогу визначити, чи рядок починається іншим рядком. Також він чутливий до регістру символів.

## Приклади

### Застосування startsWith()

```js
const str = "Чи бути, чи не бути — ось питання.";

console.log(str.startsWith("Чи бути")); // true
console.log(str.startsWith("не бути")); // false
console.log(str.startsWith("не бути", 12)); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.startsWith` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
