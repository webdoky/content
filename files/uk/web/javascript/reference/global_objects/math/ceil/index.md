---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.ceil
---

{{JSRef}}

Статичний метод **`Math.ceil()`** округлює свій параметр і повертає найменше ціле число, більше або рівне переданому числу.

{{EmbedInteractiveExample("pages/js/math-ceil.html")}}

## Синтаксис

```js-nolint
Math.ceil(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Найменше ціле число, яке більше або дорівнює `x`. Те саме значення, що й [`-Math.floor(-x)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).

## Опис

Оскільки `ceil()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.ceil()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.ceil()

```js
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
