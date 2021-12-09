---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
tags:
  - Geometry
  - JavaScript
  - Math
  - Method
  - Reference
  - Trigonometry
  - cos
  - cosine
browser-compat: javascript.builtins.Math.cos
---
{{JSRef}}

Статична функція **`Math.cos()`** повертає {{interwiki("wikipedia", "косинус")}} переданого кута, який має бути вказаний в {{interwiki("wikipedia", "радіанах")}}.

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## Синтаксис

```js
Math.cos(x)
```

### Параметри

- `x`
  - : Кут в радіанах, косинус якого потрібно отримати.

### Повернене значення

Косинус переданого числа.

## Опис

Метод `Math.cos()` повертає числове значення з проміжку між -1 та 1, яке відповідає косинусу кута.

Оскільки `cos()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.cos()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.cos()

```js
Math.cos(0);           // 1
Math.cos(1);           // 0.5403023058681398

Math.cos(Math.PI);     // -1
Math.cos(2 * Math.PI); // 1
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
