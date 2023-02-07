---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
page-type: javascript-instance-method
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Array.reverse
---

{{JSRef}}

Метод **`reverse()`** (розвернути) розвертає масив _[на місці](https://en.wikipedia.org/wiki/In-place_algorithm)_ й повертає посилання на той самий масив, причому перший елемент стає останнім, а останній – першим. Інакше кажучи, порядок елементів у масиві стає повною протилежністю вихідного.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## Синтаксис

```js-nolint
reverse()
```

### Повернене значення

Посилання на вихідний масив, уже розвернутий. Зверніть увагу на те, що масив розвертається _[на місці](https://en.wikipedia.org/wiki/In-place_algorithm)_, і копіювання не виконується.

## Опис

Метод `reverse()` транспонує елементи свого об'єкта масиву на місці, видозмінюючи цей масив та повертаючи посилання на нього.

Метод `reverse()` зберігає порожні комірки. Коли вихідний масив є [розрідженим](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy), то нові індекси, що відповідають порожнім коміркам, [видаляються](/uk/docs/Web/JavaScript/Reference/Operators/delete) і також стають порожніми комірками.

Метод `reverse()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` має властивість `length` і властивості з цілочисловими ключами. Хоч рядки також є подібними до масивів, цей метод не можна до них застосовувати, адже рядки – незмінювані.

## Приклади

### Розворот елементів у масиві

Наступний приклад створює масив `items`, що містить три елементи, а тоді розвертає цей масив. Виклик `reverse()` повертає посилання на розвернутий масив `items`.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### Метод reverse() повертає посилання на той самий масив

Метод `reverse()` повертає посилання на вихідний масив, тож змінювання поверненого масиву внесе зміни також до вихідного масиву.

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// І numbers, і reversed – мають обернений порядок [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

Коли треба, щоб `reverse()` не вніс зміни до вихідного масиву, а повернув [поверхнево скопійований](/uk/docs/Glossary/Shallow_copy) масив, подібно до інших методів (наприклад, [`map()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), можна виконати поверхневе копіювання до виклику `reverse()`, за допомогою [синтаксису розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax) або [`Array.from()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] утворює поверхневу копію, тож reverse() не вносить змін до вихідного масиву
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

### Застосування reverse() на розріджених масивах

Розріджені масиви залишаються розрідженими навіть після виклику `reverse()`. Порожні комірки копіюються в нові відповідні їм індекси у вигляді нових порожніх комірок.

```js
console.log([1, , 3].reverse()); // [3, порожньо, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, порожньо, 1]
```

### Виклик reverse() на об'єктах-немасивах

Метод `reverse()` зчитує властивість `length` із `this`. Потім він обробляє кожний індекс від `0` до `length / 2` і міняє місцями пари відповідних індексів з обох кінців, [видаляючи](/uk/docs/Web/JavaScript/Reference/Operators/delete) властивості, якщо це необхідно.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.reverse.call(arrayLike));
// { '0': 4, length: 3, unrelated: 'foo' }
// Індекс '2' видаляється, бо індексу '0' спершу не було
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
