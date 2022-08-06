---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.some
---

{{JSRef}}

Метод **`some()`** (якийсь) перевіряє, чи проходить хоча б один елемент масиву тест, реалізований у переданій функції. Цей метод повертає істинність, якщо знаходить в масиві елемент, для якого надана функція повертає істинність, інакше – хибність. Він не змінює масив.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## Синтаксис

```js
// Стрілкова функція
some((element) => {
  /* … */
});
some((element, index) => {
  /* … */
});
some((element, index, array) => {
  /* … */
});

// Функція зворотного виклику
some(callbackFn);
some(callbackFn, thisArg);

// Вбудована функція зворотного виклику
some(function (element) {
  /* … */
});
some(function (element, index) {
  /* … */
});
some(function (element, index, array) {
  /* … */
});
some(function (element, index, array) {
  /* … */
}, thisArg);
```

### Параметри

- `callbackFn` (функція зворотного виклику)

  - : Функція для перевірки кожного елемента.

    Функція викликається з наступними аргументами:

    - `element` (елемент)
      - : Поточний елемент масиву, що обробляється.
    - `index` (індекс)
      - : Індекс поточного елементу масиву, що обробляється.
    - `array` (масив)
      - : Масив, на котрому викликали `some()`.

- `thisArg` (аргумент `this`) {{optional_inline}}
  - : Значення, котре використовуватиметься як `this` при виконанні `callbackFn`.

### Повернене значення

`true`, якщо функція зворотного виклику поверне {{Glossary("truthy", "істинне")}} значення принаймні для одного елемента масиву. Інакше – `false`.

## Опис

Метод `some()` один раз викликає `callbackFn` для кожного елемента, присутнього в масиві, поки не знайде такий, для якого `callbackFn` поверне _істинне_ значення (таке, що стає істинністю при перетворенні на булеве значення). Якщо такий елемент знайдено, то `some()` негайно повертає `true`. Інакше – `some()` повертає `false`. `callbackFn` викликається лише для індексів масиву, котрим присвоєно значення. Вона не викликається для індексів, що були видалені або котрим ніколи не присвоювали значення.

`callbackFn` викликається з трьома аргументами: значенням елемента, індексом масиву та об'єктом `Array`, за котрим відбувається обхід.

Якщо методу `some()` наданий параметр `thisArg`, то він буде використовуватись як значення `this` функції зворотного виклику. Інакше – як `this` використовуватиметься значення {{jsxref("undefined")}}. Значення `this`, котре врешті решт стає доступним в `callbackFn`, визначається згідно зі [звичними правилами визначення значення `this`, отримуваного функцією](/uk/docs/Web/JavaScript/Reference/Operators/this).

`some()` не змінює масиву, на котрому викликається.

Діапазон елементів, що обробляються `some()`, визначається до першого виклику `callbackFn`. Елементи, що були присвоєні за індексами, котрі вже були оброблені, або за індексами, що лежать поза діапазоном, не будуть оброблятися `callbackFn`. Якщо `callbackFn` змінює наявний необроблений елемент масиву, то значення такого елемента, що потрапить до `callbackFn`, буде значенням на ту мить, коли `some()` починає обробку його індексу. Видалені елементи не обробляються.

> **Застереження:** Паралельні зміни такого роду, як описано в попередньому абзаці, часто призводять до важкого для розуміння коду, їх в цілому слід уникати (крім особливих випадків).

> **Примітка:** Виклик цього метода на пустому масиві повертає
> `false` для будь-якої перевірки!

## Приклади

### Перевірка значення елементів масиву

Наступний приклад перевіряє, чи є який-небудь елемент масиву більшим за 10.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### Перевірка елементів масиву за допомогою стрілкових функцій

[Стрілкові функції](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions) надають коротший синтаксис для такої ж перевірки.

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### Перевірка існування значення в масиві

Щоб імітувати функцію метода `includes()`, ця власна функція повертає `true`, якщо елемент існує в масиві:

```js
const fruits = ['яблуко', 'банан', 'манго', 'гуава'];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, 'кела'); // false
checkAvailability(fruits, 'банан'); // true
```

### Перевірка існування значення за допомогою стрілкової функції

```js
const fruits = ['яблуко', 'банан', 'манго', 'гуава'];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, 'кела'); // false
checkAvailability(fruits, 'банан'); // true
```

### Перетворення будь-якого значення на булеве

```js
const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean('false'); // false
getBoolean(1); // true
getBoolean('true'); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.some` у `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.some()")}}
