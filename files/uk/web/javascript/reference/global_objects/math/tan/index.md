---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.tan
---

{{JSRef}}

Статичний метод **`Math.tan()`** (тангенс) повертає тангенс числа в радіанах.

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## Синтаксис

```js-nolint
Math.tan(x)
```

### Параметри

- `x`
  - : Число — значення кута в радіанах.

### Повернене значення

Тангенс `x`. Якщо `x` – це {{jsxref("Infinity")}}, `-Infinity` або {{jsxref("NaN")}}, повертається {{jsxref("NaN")}}.

> **Примітка:** У зв'язку з обмеженою точністю чисел з рухомою комою, неможливо отримати точне значення π/2, тому результат завжди є скінченним числом, якщо не `NaN`.

## Опис

Метод `Math.tan()` повертає числове значення, яке відповідає тангенсу кута.

Оскільки `tan()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.tan()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.tan()

```js
Math.tan(-Infinity); // NaN
Math.tan(-0); // -0
Math.tan(0); // 0
Math.tan(1); // 1.5574077246549023
Math.tan(Math.PI / 4); // 0.9999999999999999 (Похибка рухомої коми)
Math.tan(Infinity); // NaN
```

### Math.tan() і π/2

Неможливо точно обчислити `tan(π/2)`.

```js
Math.tan(Math.PI / 2); // 16331239353195370
Math.tan(Math.PI / 2 + Number.EPSILON); // -6218431163823738
```

### Застосування Math.tan() до значення в градусах

У зв'язку з тим, що функція `Math.tan()` приймає значення в радіанах, проте часто зручніше працювати з градусами, наступна функція приймає значення в градусах, перетворює його в радіани – і повертає тангенс.

```js
function getTanDeg(deg) {
  const rad = (deg * Math.PI) / 180;
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
