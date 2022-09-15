---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.from
---

{{JSRef}}

Статичний метод **`Array.from()`** (із) створює новий, поверхнево скопійований примірник `Array` на основі ітерованого чи масивоподібного об'єкта.

{{EmbedInteractiveExample("pages/js/array-from.html","shorter")}}

## Синтаксис

```js-nolint
// Стрілкова функція
Array.from(arrayLike, (element) => { /* … */ } )
Array.from(arrayLike, (element, index) => { /* … */ } )

// Функція відображення
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Функція відображення, оголошена на місці
Array.from(arrayLike, function mapFn(element) { /* … */ })
Array.from(arrayLike, function mapFn(element, index) { /* … */ })
Array.from(arrayLike, function mapFn(element) { /* … */ }, thisArg)
Array.from(arrayLike, function mapFn(element, index) { /* … */ }, thisArg)
```

### Параметри

- `arrayLike` (масивоподібне)
  - : Ітерований чи масивоподібний об'єкт для перетворення на масив.
- `mapFn` (функція відображення) {{Optional_inline}}
  - : Функція відображення, що буде викликана на кожному елементі масиву.
- `thisArg` {{Optional_inline}}
  - : Значення для використання як `this` при виконанні `mapFn`.

### Повернене значення

Новий примірник {{jsxref("Array")}}.

## Опис

`Array.from()` дає змогу створювати `Array` на основі:

- [ітерованих об'єктів](/uk/docs/Web/JavaScript/Reference/Iteration_protocols) (таких, як {{jsxref("Map")}} і {{jsxref("Set")}}); або, якщо об'єкт не є ітерованим,
- масивоподібних об'єктів (об'єктів зі властивістю `length` та індексованими елементами).

`Array.from()` має необов'язковий параметр `mapFn`, котрий дає змогу виконувати функцію {{jsxref("Array.prototype.map()", "map()")}} на кожному елементі масиву, що створюється.

Ясніше висловлюючись, `Array.from(obj, mapFn, thisArg)` дає такий само результат, як `Array.from(obj).map(mapFn, thisArg)`, окрім того, що не створює проміжний масив, і _mapFn_ отримує лише два аргументи (_element_, _index_), без передачі всього масиву, тому що масив іще в процесі створення.

> **Примітка:** Це особливо критично для певних підкласів масиву, як то [типізованих масивів](/uk/docs/Web/JavaScript/Typed_arrays), адже проміжний масив змушений зберігати значення в спотвореному вигляді, для відповідності типові.

Властивість `length` метода `from()` дорівнює `1`.

Синтаксис [класу](/uk/docs/Web/JavaScript/Reference/Classes) дає змогу створювати підкласи як вбудованих, так самописних класів. Як наслідок, статичні методи, як то `Array.from()`, "успадковуються" підкласами `Array` і створюють нові примірники _підкласу_, а не `Array`. Крім того, метод `Array.from()` визначений узагальнено і може бути визначений на будь-якому конструкторі, що приймає один числовий аргумент.

## Приклади

### Array на основі String

```js
Array.from('foo');
// [ "f", "o", "o" ]
```

### Array на основі Set

```js
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### Array на основі Map

```js
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ['1', 'a'],
  ['2', 'b'],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### Array на основі NodeList

```js
// Створити масив, заснований на властивості елементів DOM
const images = document.querySelectorAll('img');
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith('http://'));
```

### Array на основі масивоподібного об'єкта (arguments)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### Застосування стрілкових функцій та Array.from()

```js
// Застосування стрілкової функції як функції відображення для
// роботи з елементами
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Породити послідовність чисел
// Оскільки масив ініціалізується з `undefined` на кожній позиції,
// значення `v` нижче буде `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### Генератор послідовності (діапазон)

```js
// Функція – генератор послідовності (загальноприйнято зветься "діапазоном" – "range", наприклад, у Clojure, PHP тощо)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// Породити діапазон чисел 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Породити діапазон чисел 1..10 з кроком 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Породити за допомогою Array.from алфавіт, користуючись тим, що він має послідовний порядок
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.from` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
