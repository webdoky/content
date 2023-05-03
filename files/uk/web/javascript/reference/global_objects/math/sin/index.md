---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.sin
---

{{JSRef}}

Статичний метод **`Math.sin()`** повертає синус числа в радіанах.

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## Синтаксис

```js-nolint
Math.sin(x)
```

### Параметри

- `x`
  - : Число, що представляє кут в радіанах.

### Повернене значення

Синус `x`, число в діапазоні від -1 до 1 включно. Якщо `x` – це {{jsxref("Infinity")}}, `-Infinity` або {{jsxref("NaN")}}, то повертається {{jsxref("NaN")}}.

## Опис

Оскільки `sin()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.sin()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.sin()

```js
Math.sin(-Infinity); // NaN
Math.sin(-0); // -0
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965
Math.sin(Math.PI / 2); // 1
Math.sin(Infinity); // NaN
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
