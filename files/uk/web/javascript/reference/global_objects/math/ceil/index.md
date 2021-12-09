---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.ceil
---
{{JSRef}}

Функція **`Math.ceil()`** округлює число до наступного більшого цілого.

> **Зауваження:** `Math.ceil({{jsxref("null")}})` повертає ціле число 0, і не викидає помилки {{jsxref("NaN")}}.

{{EmbedInteractiveExample("pages/js/math-ceil.html")}}

## Синтаксис

```js
Math.ceil(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Найменше ціле число, яке більше або дорівнює переданому аргументові.

## Опис

Оскільки `ceil()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.ceil()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.ceil()

Наступний приклад показує застосування функції `Math.ceil()`.

```js
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
```

### Десяткове коригування

```js
// Замикання
(function() {
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
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Десяткове округлення до меншого
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Десяткове округлення до більшого
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

// Звичайне округлення
Math.round10(55.55, -1);   // 55.6
Math.round10(55.549, -1);  // 55.5
Math.round10(55, 1);       // 60
Math.round10(54.9, 1);     // 50
Math.round10(-55.55, -1);  // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1);      // -50
Math.round10(-55.1, 1);    // -60
// Округлення до меншого
Math.floor10(55.59, -1);   // 55.5
Math.floor10(59, 1);       // 50
Math.floor10(-55.51, -1);  // -55.6
Math.floor10(-51, 1);      // -60
// Округлення до більшого
Math.ceil10(55.51, -1);    // 55.6
Math.ceil10(51, 1);        // 60
Math.ceil10(-55.59, -1);   // -55.5
Math.ceil10(-59, 1);       // -50
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
