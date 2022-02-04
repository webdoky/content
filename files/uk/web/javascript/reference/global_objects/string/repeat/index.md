---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.repeat
---
{{JSRef}}

Метод **`repeat()`** збирає і повертає новий рядок, який містить вказану кількість копій рядка, на якому його було викликано, з'єднаних докупи.

{{EmbedInteractiveExample("pages/js/string-repeat.html","shorter")}}

## Синтаксис

```js
repeat(count)
```

### Параметри

- `count`
  - : Ціле число в діапазоні між `0` та {{jsxref("Global_Objects/Number/POSITIVE_INFINITY", "+Infinity")}}, яке позначає те, скільки разів слід повторити початковий рядок.

### Повернене значення

Новий рядок, який містить вказане число копій початкового.

### Винятки

- {{jsxref("Errors/Negative_repetition_count", "RangeError")}}: вказана кількість повторів має бути невід'ємним числом.
- {{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: вказана кількість повторів має бути скінченною, і не повинна переповнювати максимальний розмір рядка.

## Приклади

### Застосування repeat()

```js
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (параметр "count" конвертується в ціле число)
'abc'.repeat(1/0)   // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() — це загальний метод)
```

## Поліфіл

Цей метод було додано до специфікації ECMAScript 2015, і він може іще не бути наявним у всіх реалізаціях JavaScript. Однак, `String.prototype.repeat()` можна відтворити в поліфілі за допомогою наступного фрагмента:

```js
if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null)
      throw new TypeError('can\'t convert ' + this + ' to object');

    var str = '' + this;
    // Перетворює рядок на ціле число.
    count = +count;
    // Перевіряє NaN
    if (count != count)
      count = 0;

    if (count < 0)
      throw new RangeError('repeat count must be non-negative');

    if (count == Infinity)
      throw new RangeError('repeat count must be less than infinity');

    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return '';

    // Перевірка, що "count" — це 31-бітове ціле число, дає змогу значно оптимізувати
    // основну частину. Проте в будь-якому разі, більшість сучасних браузерів (Серпень 2014)
    // не здатні обробляти рядки 1 << 28 чи більше символів завдовжки:
    if (str.length * count >= 1 << 28)
      throw new RangeError('repeat count must not overflow maximum string size');

    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
       str += str;
       count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.repeat` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.concat()")}}
