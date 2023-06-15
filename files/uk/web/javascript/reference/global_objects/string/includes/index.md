---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.includes
---

{{JSRef}}

Метод **`includes()`** (включає) виконує чутливий до регістру пошук для визначення, чи можна один рядок знайти всередині іншого, повертаючи `true` або `false` відповідно.

{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}

## Синтаксис

```js-nolint
includes(searchString)
includes(searchString, position)
```

### Параметри

- `searchString`
  - : Рядок, який необхідно знайти всередині початкового рядка `str`. Не може [бути регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv). Усі значення, що не є регулярними виразами, [зводяться до рядків](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka), тож опускання цього параметра або передача в ньому `undefined` змушує `includes()` шукати рядок `"undefined"`, а це рідко саме те, що потрібно.
- `position` {{optional_inline}}
  - : Номер позиції всередині рядка, з якої розпочнеться пошук шуканого рядка `searchString`. (Усталено дорівнює `0`.)

### Повернене значення

Повертає **`true`**, якщо шуканий рядок було знайдено будь-де всередині початкового рядка, в тому числі коли `searchString` є порожнім рядком, інакше – **`false`**.

### Винятки

- {{jsxref("TypeError")}}
  - : Викидається, коли `searchString` [є регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv).

## Опис

Цей метод дає змогу визначити, чи містить один рядок – інший.

### Чутливість до регістру

Метод `includes()` чутливий до регістру. Для прикладу, наступний вираз поверне `false`:

```js
"Синій кит".includes("синій"); // повертає false
```

Це обмеження можна обійти, привівши як вихідний рядок, так і шуканий, до нижнього регістру:

```js
"Синій кит".toLowerCase().includes("синій"); // повертає true
```

## Приклади

### Застосування методу includes()

```js
const str = "Чи бути, чи не бути — ось питання.";

console.log(str.includes("Чи бути")); // true
console.log(str.includes("питання")); // true
console.log(str.includes("не існує")); // false
console.log(str.includes("Чи бути", 1)); // false
console.log(str.includes("ЧИ БУТИ")); // false
console.log(str.includes("")); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл методу `String.prototype.includes` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
