---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.some
---

{{JSRef}}

Метод **`some()`** (якийсь) примірників {{jsxref("Array")}} перевіряє, чи проходить хоча б один елемент масиву тест, реалізований у переданій функції. Цей метод повертає істинність, якщо знаходить в масиві елемент, для якого надана функція повертає істинність, інакше – хибність. Він не змінює масив.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## Синтаксис

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### Параметри

- `callbackFn` (функція зворотного виклику)
  - : Функція для виконання на кожному елементі масиву. Повинна повертати [істинне значення](/uk/docs/Glossary/Truthy), коли елемент проходить перевірку, а інакше – [хибне](/uk/docs/Glossary/Falsy). Ця функція викликається з наступними аргументами:
    - `element` (елемент)
      - : Поточний елемент масиву, що обробляється.
    - `index` (індекс)
      - : Індекс поточного елементу масиву, що обробляється.
    - `array` (масив)
      - : Масив, на котрому викликали `some()`.
- `thisArg` (аргумент `this`) {{optional_inline}}
  - : Значення, котре використовуватиметься як `this` при виконанні `callbackFn`. Докладніше – в [ітеративних методах](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

### Повернене значення

`false`, якщо `callbackFn` не поверне {{Glossary("truthy", "істинне")}} значення для одного з елементів масиву, – в цьому випадку негайно повертається `true`.

## Опис

Метод `some()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він викликає надану функцію `callbackFn` один раз для кожного елемента масиву, поки `callbackFn` не поверне значення [істинності](/uk/docs/Glossary/Truthy). Якщо такий елемент знайдено, то `some()` негайно повертає `true` і припиняє ітерування масиву. Інакше, якщо `callbackFn` повертає значення [хибності](/uk/docs/Glossary/Falsy) для всіх елементів, то `some()` повертає `false`. Більше про те, як загалом працюють такі методи, читайте в розділі [ітеративних методів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

`some()` діє подібно до квантора існування в математиці. Наприклад, для порожнього масиву він повертає `false` для будь-якої умови.

`callbackFn` закликається лише для тих індексів масиву, що мають відповідні їм значення. Вона не закликається для порожніх комірок у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

`some()` не видозмінює масив, на котрому викликаний, але функція, передана як `callbackFn`, може це робити. Проте зверніть увагу на те, що довжина масиву зберігається _до_ першого заклику `callbackFn`. Таким чином:

- `callbackFn` не оброблятиме жодних елементів, доданих поза початковою довжиною масиву, актуальною на мить початку виклику `some()`.
- Зміни до вже оброблених індексів не призводять до повторного виклику на них `callbackFn`.
- Якщо наявний, поки необроблений елемент масиву змінюється `callbackFn`, то його значення, передане в `callbackFn`, буде значенням на ту мить, коли цей елемент обробляється. [Видалені](/uk/docs/Web/JavaScript/Reference/Operators/delete) елементи – не обробляються.

> **Застереження:** Паралельні зміни, подібні до описаних вище, часто призводять до складно зрозумілого коду і, як правило, їх слід уникати (за винятком спеціальних випадків).

Метод `some()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

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
const fruits = ["яблуко", "банан", "манго", "гуава"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "кела"); // false
checkAvailability(fruits, "банан"); // true
```

### Перетворення будь-якого значення на булеве

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

### Використання третього аргументу `callbackFn`

Аргумент `array` корисний тоді, коли є потреба звернутися до іншого елемента масиву, особливо коли немає змінної, що посилається на цей масив. У наступному прикладі спочатку застосовується `filter()` для видобування додатних значень, а потім – `some()` для перевірки, чи відсортований масив у порядку зростання.

```js
const numbers = [3, -1, 1, 4, 1, 5];
const isIncreasing = !numbers
  .filter((num) => num > 0)
  .some((num, idx, arr) => {
    // Без аргументу arr немає способу легко отримати доступ до
    // проміжного масиву без збереження його в змінній.
    if (idx === 0) return false;
    return num <= arr[idx - 1];
  });
console.log(isIncreasing); // false
```

### Використання some() на розріджених масивах

`some()` не запускатиме свій предикат на порожніх комірках.

```js
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
```

### Виклик some() на об'єктах-немасивах

Метод `some()` зчитує з `this` властивість `length`, а потім звертається до кожної властивості, чий ключ є невід'ємним цілим числом, меншим за `length`, поки не будуть перебрані вони всі або `callbackFn` не поверне `true`.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 3, // ігнорується some(), оскільки length – 3
};
console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number")); // false
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.some` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.some()")}}
