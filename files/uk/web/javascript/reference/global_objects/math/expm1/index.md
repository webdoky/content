---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.expm1
---
{{JSRef}}

Функція **`Math.expm1()`** повертає значення виразу `e^x - 1`, де `x` — аргумент, а `e` — {{jsxref("Math.E", "стала «e»", "", 1)}}, основа натуральних логарифмів.

{{EmbedInteractiveExample("pages/js/math-expm1.html")}}

## Синтаксис

```js
Math.expm1(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Число, що відповідає значенню виразу `e^x - 1`, де `e` — це {{jsxref("Math.E", "число Ейлера", "", 1)}}, а `x` — аргумент.

## Опис

Оскільки `expm1()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.expm1()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.expm1()

```js
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0);  // 0
Math.expm1(1);  // 1.718281828459045
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.expm1` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
