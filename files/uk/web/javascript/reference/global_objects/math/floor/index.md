---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.floor
---

{{JSRef}}

Статичний метод **`Math.floor()`** повертає найбільше ціле число, що менше або дорівнює значенню аргументу.

{{EmbedInteractiveExample("pages/js/math-floor.html")}}

## Синтаксис

```js-nolint
Math.floor(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Найбільше ціле число, менше або рівне `x`. Те саме значення, що й [`-Math.ceil(-x)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).

## Опис

Оскільки `floor()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.floor()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.floor()

```js
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
```

### Десяткове коригування

У цьому прикладі реалізується метод, названий `decimalAdjust()`, котрий є покращеним варіантом `Math.floor()`, {{jsxref("Math.ceil()")}} і {{jsxref("Math.round()")}}. Усі три функції `Math` завжди приводять введення до цілих знаків, тож `decimalAdjust` приймає параметр `exp`, котрий задає число цифр зліва від десяткового розділювача, до яких слід округляти число. Наприклад, `-1` означає, що треба залишити одну цифру після коми (як у "× 10<sup>-1</sup>"). На додачу він дає змогу обрати спосіб приведення – `round` (округлення), `floor` (до меншого) чи `ceil` (до більшого) – за допомогою параметра `type`.

Приведення виконується шляхом множення числа на степінь 10, а потім – округлення результату до найближчого цілого, і ділення на степінь 10. Для кращого збереження точності використовується метод Number [`toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/toString), котрий представляє великі й малі числа у вигляді наукового запису (наприклад, `6.02e23`).

```js
/**
 * Округляє число до відповідної кількості цифр перед комою.
 *
 * @param {"round" | "floor" | "ceil"} type Тип округлення.
 * @param {number} value Число.
 * @param {number} exp Експонента (десятковий логарифм основи округлення).
 * @returns {number} Приведене значення.
 */
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'."
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Зсунути назад
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${+newExponent + exp}`);
}

// Звичайне десяткове округлення
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// Десяткове округлення до меншого
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// Десяткове округлення до більшого
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// Звичайне округлення
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// Округлення до меншого
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// Округлення до більшого
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50
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
