---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.cos
---

{{JSRef}}

Статичний метод **`Math.cos()`** (косинус) повертає косинус числа в радіанах.

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## Синтаксис

```js-nolint
Math.cos(x)
```

### Параметри

- `x`
  - : Число, що представляє кут в радіанах.

### Повернене значення

Косинус `x`, в діапазоні від -1 до 1 включно. Якщо `x` – це {{jsxref("Infinity")}}, `-Infinity` або {{jsxref("NaN")}}, то повертається {{jsxref("NaN")}}.

## Опис

Оскільки `cos()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.cos()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.cos()

```js
Math.cos(-Infinity); // NaN
Math.cos(-0); // 1
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398
Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
Math.cos(Infinity); // NaN
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
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
