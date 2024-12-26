---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.abs
---

{{JSRef}}

Статичний метод **`Math.abs()`** повертає модуль числа.

{{EmbedInteractiveExample("pages/js/math-abs.html")}}

## Синтаксис

```js-nolint
Math.abs(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Модуль переданого числа `x`. Якщо число `x` є від'ємним або `-0`, то цей статичний метод повертає протилежне щодо `x` число `-x` (яке є невід'ємним). Інакше – повертає `x`. Отже, результатом завжди є додатне число або `0`.

## Опис

Оскільки `abs()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.abs()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.abs()

```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

### Перетворення параметра

`Math.abs()` [зводить свій параметр до числа](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#zvedennia-do-chysla). Значення, для яких це неможливо, стають `NaN`, тож `Math.abs()` у таких випадках, відповідно, повертає `NaN`.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
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
