---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.startsWith
---
{{JSRef}}

Метод **`startsWith()`** визначає, чи починається рядок символами з рядка-параметра, повертаючи `true` або `false` відповідно.

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## Синтаксис

```js
startsWith(searchString)
startsWith(searchString, position)
```

### Параметри

- `searchString`
  - : Символи, які слід шукати на початку цього рядка.
- `position` {{optional_inline}}
  - : Позиція в цьому рядку, з якої слід почати пошук шуканого рядка `searchString`. Усталено дорівнює `0`.

### Повернене значення

Повертає **`true`**, якщо передані символи були знайдені на початку рядка, а інакше — **`false`**.

## Опис

Цей метод дає змогу визначити, чи рядок починається іншим рядком. Також він чутливий до регістру символів.

## Приклади

### Застосування startsWith()

```js
// Починається з
let str = 'Чи бути, чи не бути — ось питання.'

console.log(str.startsWith('Чи бути'))      // true
console.log(str.startsWith('не бути'))      // false
console.log(str.startsWith('не бути', 12))  // true
```

## Поліфіл

Цей метод було додано специфікацією ECMAScript 6, і він поки що може не бути присутнім у всіх реалізаціях JavaScript. Однак, можна відтворити метод `String.prototype.startsWith()` за допомогою наступного уривка:

```js
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos|0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}
```

Надійніший (цілком відповідний до специфікації ES2015) поліфіл, проте не такий швидкий та компактний, можна знайти [на GitHub за авторством Матіаса Байненса](https://github.com/mathiasbynens/String.prototype.startsWith).

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
