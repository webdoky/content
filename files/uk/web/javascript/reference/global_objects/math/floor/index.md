---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.floor
---
{{JSRef}}

Функція **`Math.floor()`** повертає найбільше ціле число, що менше або дорівнює значенню аргументу.

{{EmbedInteractiveExample("pages/js/math-floor.html")}}

## Синтаксис

```js
Math.floor(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Число, яке відповідає найбільшому цілому числу, яке менше або дорівнює переданому.

## Опис

Оскільки `floor()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.floor()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

> **Зауваження:** `Math.floor(null)` повертає 0, а не
> {{jsxref("NaN")}}.

## Приклади

### Застосування Math.floor()

```js
Math.floor( 45.95); //  45
Math.floor( 45.05); //  45
Math.floor(  4   ); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
```

### Десяткове коригування

```js
/**
 * Десяткове коригування числа.
 *
 * @param {String}  type  Тип коригування.
 * @param {Number}  value Число.
 * @param {Integer} exp   Експонента (десятковий логарифм числа — основи коригування).
 * @returns {Number} Скориговане значення.
 */
function decimalAdjust(type, value, exp) {
  // Якщо експонента не задана, або нуль...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // Якщо значення змінної value не є числом, або експонента не є цілим числом...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Зміщуємо розряди
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Повертаємо їх назад
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Звичайне десяткове округлення
const round10 = (value, exp) => decimalAdjust('round', value, exp);
// Десяткове округлення до меншого
const floor10 = (value, exp) => decimalAdjust('floor', value, exp);
// Десяткове округлення до більшого
const ceil10 = (value, exp) => decimalAdjust('ceil', value, exp);

// Звичайне округлення
round10(55.55, -1);   // 55.6
round10(55.549, -1);  // 55.5
round10(55, 1);       // 60
round10(54.9, 1);     // 50
round10(-55.55, -1);  // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1);      // -50
round10(-55.1, 1);    // -60
// Округлення до меншого
floor10(55.59, -1);   // 55.5
floor10(59, 1);       // 50
floor10(-55.51, -1);  // -55.6
floor10(-51, 1);      // -60
// Округлення до більшого
ceil10(55.51, -1);    // 55.6
ceil10(51, 1);        // 60
ceil10(-55.59, -1);   // -55.5
ceil10(-59, 1);       // -50
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
