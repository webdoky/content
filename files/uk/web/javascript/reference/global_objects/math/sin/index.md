---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.sin
---
{{JSRef}}

Функція **`Math.sin()`** повертає синус числа.

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## Синтаксис

```js
Math.sin(x)
```

### Параметри

- `x`
  - : Число (кут в радіанах).

### Повернене значення

Синус переданого числа.

## Опис

Метод `Math.sin()` повертає числове значення з проміжку від -1 до 1, яке відповідає значення синусу переданого кута в радіанах.

Оскільки `sin()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.sin()`. Не слід звертатись до нього, як до методу створеного вами об'єкту `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.sin()

```js
Math.sin(0);           // 0
Math.sin(1);           // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
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
