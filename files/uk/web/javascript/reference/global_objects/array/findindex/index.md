---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
page-type: javascript-instance-method
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.findIndex
---

{{JSRef}}

Метод **`findIndex()`** (знайти індекс) повертає **індекс** першого елемента масиву, що задовольняє надану перевіркову функцію.
Якщо жоден елемент не задовольняє перевіркову функцію, повертається -1.

{{EmbedInteractiveExample("pages/js/array-findindex.html","shorter")}}

Дивіться також метод {{jsxref("Array/find", "find()")}}, котрий повертає перший елемент, що задовольняє перевіркову функцію (а не його індекс).

## Синтаксис

```js-nolint
// Стрілкова функція
findIndex((element) => { /* … */ } )
findIndex((element, index) => { /* … */ } )
findIndex((element, index, array) => { /* … */ } )

// Функція зворотного виклику
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Вбудована функція зворотного виклику
findIndex(function(element) { /* … */ })
findIndex(function(element, index) { /* … */ })
findIndex(function(element, index, array){ /* … */ })
findIndex(function(element, index, array) { /* … */ }, thisArg)
```

### Параметри

- `callbackFn` (функція зворотного виклику)

  - : Функція для виконання на кожному елементі масиву. Повинна повернути значення [істинності](/uk/docs/Glossary/Truthy), аби показати, що шуканий елемент знайдено.

    Ця функція викликається з наступними аргументами:

    - `element` (елемент)
      - : Елемент масиву, що наразі обробляється.
    - `index` (індекс)
      - : Індекс елемента масиву, що наразі обробляється.
    - `array` (масив)
      - : Масив, на котрому викликали `findIndex()`.

- `thisArg` (аргумент `this`) {{optional_inline}}
  - : Значення для використання за `this` при виконанні `callbackFn`. Більше про це – в [ітеративних методах](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

### Повернене значення

Індекс першого елемента масиву, що проходить перевірку. Інакше – `-1`.

## Опис

`findIndex()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він викликає передану функцію `callbackFn` один раз для кожного елемента масиву, в порядку зростання індексів, поки `callbackFn` не поверне значення [істинності](/uk/docs/Glossary/Truthy). Тоді `findIndex()` повертає індекс цього елемента – і зупиняє ітерацію масиву. Якщо `callbackFn` взагалі не повертає значення істинності, то `findIndex()` повертає `-1`.

`callbackFn` закликається для _кожного_ індексу в масиві, а не лише тих, що мають присвоєні значення. Порожні комірки в [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy) поводяться так само як `undefined`.

`findIndex()` не змінює масиву, на якому викликаний, але функція, передана за `callbackFn`, може це робити. Проте зверніть увагу, що довжина масиву зберігається _до_ першого заклику `callbackFn`. Таким чином:

- `callbackFn` не обробить жодних елементів, доданих поза початковою довжиною масиву, актуальною на початок виклику `findIndex()`.
- Зміни за вже обробленими індексами не призведуть до повторного заклику на них `callbackFn`.
- Якщо наявний, іще не оброблений елемент масиву змінюється `callbackFn`, то його значення, передане в `callbackFn`, буде його значенням на ту мить, коли цей елемент обробляється. [Видалені](/uk/docs/Web/JavaScript/Reference/Operators/delete) елементи обробляються так, ніби в них `undefined`.

> **Застереження:** Паралельні зміни такого роду, як описано вище, часто призводять до важкого в розумінні коду, загалом їх слід уникати (окрім особливих випадків).

Метод `findIndex()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

## Приклади

### Пошук в масиві індексу простого числа

Наступний приклад повертає індекс першого елемента масиву, що є простим числом, або `-1`, якщо простого числа там немає.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, не знайдено
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] – це 7)
```

### Використання findIndex() на розріджених масивах

Можна шукати в розрідженому масиві `undefined` – і отримати індекс порожньої комірки.

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### Виклик findIndex() на об'єктах-немасивах

Метод `findIndex()` зчитує з `this` властивість `length`, а потім звертається до кожної цілочислової властивості.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x))
); // 1
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.findIndex` у `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
