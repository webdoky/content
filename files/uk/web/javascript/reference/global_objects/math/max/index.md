---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.max
---

{{JSRef}}

Статичний метод **`Math.max()`** (максимум) повертає найбільше значення з-поміж переданих нуля чи більше вхідних чисел, або -{{jsxref("Infinity")}}, якщо параметрів немає.

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## Синтаксис

```js-nolint
Math.max()
Math.max(value0)
Math.max(value0, value1)
Math.max(value0, value1, /* …, */ valueN)
```

### Параметри

- `value1`, `value2`, … , `valueN`
  - : Нуль чи більше чисел, найбільше з яких буде знайдено і повернено.

### Повернене значення

Найбільше з-поміж переданих значень. Повертає {{jsxref("NaN")}}, якщо будь-який з параметрів є `NaN` або може бути зведений до `NaN`. Повертає -{{jsxref("Infinity")}}, якщо не передано жодних аргументів.

## Опис

Оскільки `max()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.max()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

[`Math.max.length`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/length) дорівнює 2, що натякає на те, що ця функція розроблена для обробки принаймні двох параметрів.

## Приклади

### Застосування Math.max()

```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### Отримання найбільшого з елементів масиву

Для отримання найбільшого з числових елементів масиву можна застосувати {{jsxref("Array.prototype.reduce()")}}, шляхом порівняння кожного зі значень:

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

Наступна функція використовує {{jsxref("Function.prototype.apply()")}} для отримання найбільшого елемента масиву. Виклик `getMaxOfArray([1, 2, 3])` еквівалентний застосуванню `Math.max(1, 2, 3)`, але `getMaxOfArray()` можна використовувати на програмно сконструйованих масивах. Такий підхід слід застосовувати лише на масивах з відносно невеликою кількістю елементів.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

[Синтаксис розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax) — це скорочений спосіб запису рішення з `apply` для отримання найбільшого з елементів масиву:

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

Втім, як оператор розгортання (`...`), так і `apply` – або завершаться невдачею, або повернуть некоректне значення, якщо масив містить занадто багато елементів, оскільки вони намагаються передати елементи масиву аргументами до функції. Зверніть увагу на розділ [Застосування `apply` із вбудованими функціями](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions) для отримання подробиць. Рішення з `reduce` не має такої проблеми.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.min()")}}
