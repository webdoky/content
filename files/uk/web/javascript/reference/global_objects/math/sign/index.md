---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.sign
---

{{JSRef}}

Функція **`Math.sign()`** повертає або **додатну**, або **від'ємну** +/- 1 (одиницю), позначаючи знак числа, переданого як аргумент. Якщо число, передане до `Math.sign()`, дорівнює 0, функція поверне +/- 0. Зауважте, що, якщо число додатне, знак `+` **не буде** повернено явно.

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

## Синтаксис

```js
Math.sign(x);
```

### Параметри

- `x`
  - : Число. Якщо тип аргументу відмінний від `number`, його буде неявно перетворено на число.

### Повернене значення

Число, яке позначає знак переданого аргументу:

- Якщо аргумент додатний, повернеться `1`.
- Якщо аргумент від'ємний, повернеться `-1`.
- Якщо аргумент — додатний нуль, повернеться `0`.
- Якщо аргумент — від'ємний нуль, повернеться `-0`.
- У всіх інших випадках буде повернено {{jsxref("NaN")}}.

## Опис

Оскільки `sign()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.sign()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.sign()

```js
Math.sign(3); //  1
Math.sign(-3); // -1
Math.sign('-3'); // -1
Math.sign(0); //  0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign('foo'); // NaN
Math.sign(); // NaN
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.sign` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [Поліфіл](https://github.com/behnammodi/polyfill/blob/master/math.polyfill.js)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
