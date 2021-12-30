---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.tan
---
{{JSRef}}

Функція **`Math.tan()`** повертає тангенс числа.

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## Синтаксис

```js
Math.tan(x)
```

### Параметри

- `x`
  - : Число — значення кута в радіанах.

### Повернене значення

Тангенс переданого числа.

## Опис

Метод `Math.tan()` повертає числове значення, яке відповідає тангенсу кута.

Оскільки `tan()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.tan()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.tan()

```js
Math.tan(1); // 1.5574077246549023
```

У зв'язку з тим, що функція `Math.tan()` приймає значення в радіанах, проте часто зручніше працювати з градусами, наступна функція приймає значення в градусах, перетворює його в радіани – і повертає тангенс.

```js
function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
}
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
- {{jsxref("Math.sin()")}}
