---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.abs
---

{{JSRef}}

Функція **`Math.abs()`** повертає модуль числа. Це означає, що вона поверне `x`, якщо `x` — додатне число або нуль, та `x` із протилежним знаком, якщо `x` — від'ємне число.

{{EmbedInteractiveExample("pages/js/math-abs.html")}}

## Синтаксис

```js
Math.abs(x);
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Модуль переданого числа.

## Опис

Оскільки `abs()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.abs()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Поведінка Math.abs()

Передача в метод таких значень, як: порожній об'єкт, масив з понад одним елементом, нечисловий рядок, чи змінна з {{jsxref("undefined")}} або без значення взагалі — поверне {{jsxref("NaN")}}. Передача в метод значень {{jsxref("null")}}, порожнього рядка чи порожнього масиву поверне 0.

```js
Math.abs('-1'); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(''); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs('string'); // NaN
Math.abs(); // NaN
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
