---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.exp
---
{{JSRef}}

Функція **`Math.exp()`** повертає `e^x`, де `x` — це аргумент, а `e` — {{jsxref("Math.E", "число Ейлера (також відоме як число Непера)", "", 1)}}, основа натуральних логарифмів.

{{EmbedInteractiveExample("pages/js/math-exp.html")}}

## Синтаксис

```js
Math.exp(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Число, що відповідає значенню виразу `e^x`, де `e` — це {{jsxref("Math.E", "число Ейлера", "", 1)}}, а `x` — аргумент.

## Опис

Оскільки `exp()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.exp()`. Не слід звертатись до нього, як до методу створеного вами об'єкту `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.exp()

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0);  // 1
Math.exp(1);  // 2.718281828459045
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
