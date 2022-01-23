---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.endsWith
---
{{JSRef}}

Метод **`endsWith()`** визначає, чи завершується рядок символами з рядка-параметра, повертаючи `true` або `false` відповідно.

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## Синтаксис

```js
endsWith(searchString)
endsWith(searchString, length)
```

### Параметри

- `searchString`
  - : Символи, які потрібно шукати в кінці рядка `str`.
- `length` {{optional_inline}}
  - : Якщо передано цей аргумент, його буде вжито як довжину початкового рядка `str`. Усталено дорівнює значенню `str.length`.

### Повернене значення

Повертає **`true`**, якщо передана послідовність символів знайдена в кінці рядка, а інакше — **`false`**.

## Опис

Цей метод дозволяє визначити, чи рядок закінчується іншим рядком. Цей метод чутливий до регістру символів.

## Приклади

### Застосування методу endsWith()

```js
let str = 'Чи бути, чи не бути — ось питання.'

console.log(str.endsWith('питання.'))  // true
console.log(str.endsWith('бути'))      // false
console.log(str.endsWith('бути', 19))  // true
```

## Поліфіл

Цей метод було додано специфікацією ECMAScript 6, і він поки що може не бути присутнім у всіх реалізаціях JavaScript. Однак, можна відтворити метод `String.prototype.endsWith()` за допомогою наступного уривка:

```js
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.endsWith` також наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
