---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.sign
---

{{JSRef}}

Статичний метод **`Math.sign()`** повертає 1 або -1, що позначає знак числа, переданого як аргумент. Якщо вихідним значенням є 0 або -0, то таке значення повертається як є.

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

## Синтаксис

```js-nolint
Math.sign(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Число, яке позначає знак `x`:

- Якщо `x` – додатне, повернеться `1`.
- Якщо `x` – від'ємне, повернеться `-1`.
- Якщо `x` — додатний нуль, повернеться `0`.
- Якщо `x` — від'ємний нуль, повернеться `-0`.
- Інакше – повертається {{jsxref("NaN")}}.

## Опис

Оскільки `sign()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.sign()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.sign()

```js
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.sign` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
