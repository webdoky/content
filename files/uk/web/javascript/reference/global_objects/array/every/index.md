---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Array.every
---

{{JSRef}}

Метод **`every()`** (кожний) перевіряє, чи всі елементи масиву проходять перевірку, реалізовану наданою функцією. Повертає булеве значення.

{{EmbedInteractiveExample("pages/js/array-every.html","shorter")}}

## Синтаксис

```js-nolint
// Стрілкова функція
every((element) => { /* … */ } )
every((element, index) => { /* … */ } )
every((element, index, array) => { /* … */ } )

// Функція зворотного виклику
every(callbackFn)
every(callbackFn, thisArg)

// Вбудована функція зворотного виклику
every(function(element) { /* … */ })
every(function(element, index) { /* … */ })
every(function(element, index, array){ /* … */ })
every(function(element, index, array) { /* … */ }, thisArg)
```

### Параметри

- `callbackFn` (функція зворотного виклику)

  - : Функція для перевірки кожного елемента.

    Ця функція викликається з наступними аргументами:

    - `element` (елемент)
      - : Поточний елемент масиву, що обробляється.
    - `index` (індекс)
      - : Індекс поточного елемента масиву, що обробляється.
    - `array` (масив)
      - : Масив, на котрому викликали `every`.

- `thisArg` (аргумент this) {{Optional_inline}}
  - : Значення, що буде використовуватись як `this` при виконанні `callbackFn`.

### Повернене значення

**`true`**, якщо функція `callbackFn` повертає значення {{Glossary("truthy", "істинності")}} для кожного елемента масиву. Інакше – **`false`**.

## Опис

Метод `every` виконує надану `callbackFn` один раз для кожного елемента, присутнього в масиві, поки не знайде елемент, для котрого `callbackFn` повертає значення {{Glossary("falsy", "хибності")}}. Якщо такий елемент знайдений, то метод `every` негайно повертає `false`. Інакше, якщо `callbackFn` повертає значення {{Glossary("truthy", "істинності")}} на всіх елементах, то `every` повертає `true`.

`callbackFn` закликається лише для тих індексів масиву, котрим присвоєні значення. Вона не закликається для порожніх комірок у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

`callbackFn` закликається з трьома аргументами: значенням елемента, індексом елемента й об'єктом масиву, по котрому виконується обхід.

Якщо `every` наданий параметр `thisArg`, то він буде використаний як значення `this` функції зворотного виклику. Інакше – як значення `this` буде використано `undefined`. Значення
`this`, доступне `callback`, визначається згідно зі
[звичними правилами визначення `this`, що спостерігається функцією](/uk/docs/Web/JavaScript/Reference/Operators/this).

`every` не змінює масиву, на котрому викликаний.

Діапазон елементів, що обробляється `every`, встановлюється до першого заклику `callbackFn`. Таким чином, `callbackFn` не спрацює на елементах, що додані в кінець масиву після початку виклику `every`. Якщо змінюються присутні елементи масиву, то їх значення, передане в `callbackFn`, буде значенням, що є актуальним на час їх обробки `every`. Видалені елементи не обробляються.

`every` діє як квантор "для всіх" з математики. А саме – для порожнього масиву він повертає `true`. (Є [беззмістовною істиною (англ.)](https://en.wikipedia.org/wiki/Vacuous_truth) те, що всі елементи [порожньої множини](https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D1%8F_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B8%D0%BD%D0%B0#%D0%92%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D1%96) відповідають будь-якій умові.)

## Приклади

### Перевірка розміру всіх елементів масиву

Наступний приклад перевіряє, чи всі елементи масиву більші за 10.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Перевірка того, чи є один масив підмножиною іншого

Наступний приклад перевіряє, чи всі елементи масиву присутні в іншому масиві.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Використання every() на розріджених масивах

`every()` не запустить свій предикат на порожніх комірках.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### Вплив на початковий масив (зміни, додавання елементів у кінець та видалення)

Наступні приклади перевіряють поведінку метода `every`, коли до масиву вносяться зміни.

```js
// ---------------
// Зміни елементів
// ---------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index + 1]--;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});

// Цикл виконується тричі, але
// виконався би двічі, якби зміни не вносилися
//
// 1 ітерація: [1,1,3,4][0] -> 1
// 2 ітерація: [1,1,2,4][1] -> 1
// 3 ітерація: [1,1,2,3][2] -> 2

// ---------------
// Додавання елементів у кінець
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push("новий");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Цикл виконується тричі, навіть після додавання нових елементів
//
// 1 ітерація: [1, 2, 3, новий][0] -> 1
// 2 ітерація: [1, 2, 3, новий, новий][1] -> 2
// 3 ітерація: [1, 2, 3, новий, новий, новий][2] -> 3

// ---------------
// Видалення елементів
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Цикл виконується лише двічі, оскільки решта
// елементів усунуті `pop()`
//
// 1 ітерація: [1,2,3][0] -> 1
// 2 ітерація: [1,2][1] -> 2
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.every` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
