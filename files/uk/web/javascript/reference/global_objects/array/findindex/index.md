---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
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

Дивіться також метод {{jsxref("Array.find", "find()")}}, котрий повертає перший елемент, що задовольняє перевіркову функцію (а не його індекс).

## Синтаксис

```js
// Стрілкова функція
findIndex((element) => {
  /* ... */
});
findIndex((element, index) => {
  /* ... */
});
findIndex((element, index, array) => {
  /* ... */
});

// Функція зворотного виклику
findIndex(callbackFn);
findIndex(callbackFn, thisArg);

// Вбудована функція зворотного виклику
findIndex(function (element) {
  /* ... */
});
findIndex(function (element, index) {
  /* ... */
});
findIndex(function (element, index, array) {
  /* ... */
});
findIndex(function (element, index, array) {
  /* ... */
}, thisArg);
```

### Параметри

- `callbackFn` (функція зворотного виклику)

  - : Функція, що використовується для перевірки елементів масиву.

    Функція викликається з наступними аргументами:

    - `element` (елемент)
      - : Елемент масиву, що наразі обробляється.
    - `index` (індекс)
      - : Індекс елемента масиву, що наразі обробляється.
    - `array` (масив)
      - : Масив, на котрому викликали `findIndex()`.

    Функція зворотного виклику мусить повертати значення [істинності](/uk/docs/Glossary/Truthy), щоб показати, що годящий елемент був знайдений.
    Потім `findIndex()` повертає індекс цього елемента.

- `thisArg` (аргумент `this`) {{optional_inline}}
  - : Необов'язковий об'єкт, що при виконанні `callbackFn` використовуватиметься як `this`.

### Повернене значення

Індекс першого елемента масиву, що проходить перевірку. Інакше – `-1`.

## Опис

Метод `findIndex()` виконує функцію `callbackFn` один раз для кожного індексу масиву, поки не знайде той, для котрого `callbackFn` поверне {{Glossary("truthy", "істинне")}} значення.

Якщо такий елемент знайдено, то `findIndex()` негайно поверне його індекс.
Якщо `callbackFn` ніколи не повертає істинне значення (або якщо довжина масиву – `0`), то `findIndex()` поверне `-1`.

> **Примітка:** На відміну від інших методів масиву, наприклад, {{jsxref("Array.some()")}}, `callbackFn` запускається навіть для індексів, котрим не присвоєні значення.

`callbackFn` викликається з трьома аргументами:

1. Значенням елемента
2. Індексом елемента
3. Об'єктом масиву, по котрому відбувається обхід

Якщо `findIndex()` переданий параметр `thisArg`, то він використовуватиметься як `this` всередині кожного виклику `callbackFn`.
Якщо він не наданий, то використовується значення {{jsxref("undefined")}}.

Діапазон елементів, котрий буде обробляти `findIndex()`, встановлюється до першого виклику `callbackFn`.
Елементи, що були присвоєні за індексами, котрі вже були оброблені, або за індексами поза діапазоном – не будуть оброблені `callbackFn`.
`callbackFn` не оброблятиме елементи, що були додані в кінець масиву після початку виклику `findIndex()`.
Якщо `callbackFn` змінює наявний, необроблений елемент масиву, то його значенням, переданим в `callbackFn`, буде значення на мить обробки методом `findIndex()` його індексу.
Елементи, що були {{jsxref("Operators/delete", "видалені")}}, обробляються все одно.

> **Застереження:** Паралельні зміни такого роду, як описано в попередньому абзаці, часто призводять до важкого в розумінні коду, загалом їх слід уникати (окрім особливих випадків).

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

### Пошук індексу за допомогою стрілкової функції

Наступний приклад шукає індекс фрукта за допомогою стрілкової функції:

```js
const fruits = ['яблуко', 'банан', 'канталуп', 'лохина', 'грейпфрут'];

const index = fruits.findIndex((fruit) => fruit === 'лохина');

console.log(index); // 3
console.log(fruits[index]); // лохина
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.findIndex` у `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
