---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
tags:
  - JavaScript
  - Math
  - Method
  - Number
  - Reference
browser-compat: javascript.builtins.Math.round
---

{{JSRef}}

Функція **`Math.round()`** (округлити) повертає значення числа, округлене до найближчого цілого.

{{EmbedInteractiveExample("pages/js/math-round.html")}}

## Синтаксис

```js
Math.round(x);
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Значення `x`, округлене до найближчого цілого.

## Опис

Якщо дробова частина аргументу більша за 0.5, аргумент округляється до цілого числа з більшим модулем. Якщо ж вона менша від 0.5, аргумент округляється до цілого числа з меншим модулем. Якщо дробова частина дорівнює рівно 0.5, аргумент округляється до наступного цілого числа в напрямку до +∞.

> **Примітка:** Це відрізняється від функцій `round()` багатьох інших мов, які часто в таких випадках округляють до наступного цілого в напрямку _від нуля_, і дає інші результати під час округлення від'ємних чисел, дробова частина яких дорівнює рівно 0.5.

`Math.round(x)` – не точно те саме, що [`Math.floor(x + 0.5)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/floor). Коли `x` рівний -0, або коли -0.5 ≤ x <0, то `Math.round(x)` повертає -0, а `Math.floor(x + 0.5)` – 0. Проте якщо нехтувати такими відмінностями й потенційною похибкою, то `Math.round(x)` і `Math.floor(x + 0.5)` в цілому еквівалентні.

Оскільки `round()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.round()`. Не слід звертатись до нього як до методу власноруч створеного примірника `Math` (`Math` не має конструктора).

## Приклади

### Застосування `round()`

```js
Math.round(-Infinity); // -Infinity
Math.round(-20.51); // -21
Math.round(-20.5); // -20
Math.round(-0.1); // -0
Math.round(0); // 0
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(42); // 42
Math.round(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
