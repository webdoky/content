---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.repeat
---

{{JSRef}}

Метод **`repeat()`** (повторювати) значень {{jsxref("String")}} збирає і повертає новий рядок, який містить вказану кількість копій свого рядка, зчеплену докупи.

{{EmbedInteractiveExample("pages/js/string-repeat.html", "shorter")}}

## Синтаксис

```js-nolint
repeat(count)
```

### Параметри

- `count`
  - : Ціле число в діапазоні між `0` та {{jsxref("Global_Objects/Number/POSITIVE_INFINITY", "+Infinity")}}, яке позначає те, скільки разів слід повторити початковий рядок.

### Повернене значення

Новий рядок, який містить вказане число копій початкового.

### Винятки

- {{jsxref("RangeError")}}
  - : Викидається, коли `count` є від'ємним, або коли `count` перевищує максимальну довжину рядка.

## Приклади

### Застосування repeat()

```js
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (параметр "count" конвертується в ціле число)
"abc".repeat(1 / 0);
// RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() — це узагальнений метод)
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.repeat` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.concat()")}}
