---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.concat
---

{{JSRef}}

Метод **`concat()`** (зчепити) використовується для злиття двох і більше масивів. Він не змінює наявні масиви, а повертає новий.

{{EmbedInteractiveExample("pages/js/array-concat.html", "shorter")}}

## Синтаксис

```js-nolint
concat()
concat(value1)
concat(value1, value2)
concat(value1, value2, /* …, */ valueN)
```

### Параметри

- `value1`, …, `valueN` {{optional_inline}}
  - : Масиви та (або) значення, котрі слід злити в новий масив. Якщо всі параметри опущені, то `valueN`, `concat` повертає [поверхневу копію](/uk/docs/Glossary/Shallow_copy) наявного масиву, на котрому його викликали.

### Повернене значення

Новий примірник {{jsxref("Array")}}.

## Опис

Метод `concat` створює новий масив. Цей масив спершу наповнюється елементами об'єкта, на котрому `concat` викликали. Далі значення кожного аргументу причіплюється до масиву: для звичайних об'єктів чи примітивів – сам аргумент стає елементом результівного масиву, а для масивів чи масивоподібних об'єктів зі властивістю [`Symbol.isConcatSpreadable`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable), що має значення істинності, кожен елемент аргументу буде окремо доданий до результівного масиву. Метод `concat` не виконує рекурсії на вкладених масивах аргументів.

Метод `concat()` є [копіювальним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#kopiiuvalni-ta-zminiuvalni-metody). Він не змінює ані `this`, ані жодного з масивів, переданих як аргументи, а натомість повертає [поверхневу копію](/uk/docs/Glossary/Shallow_copy), що містить ті самі елементи, що були у вихідних масивах.

Метод `concat()` зберігає порожні комірки, якщо будь-який із вихідних масивів є [розрідженим](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

Метод `concat()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Значення `this` обробляється так само, як решта аргументів (окрім того, що воно спершу перетворюється на об'єкт), а отже – прості об'єкти будуть просто поставлені в початок результівного масиву, а масивоподібні об'єкти з істинною властивістю `[Symbol.isConcatSpreadable]` будуть розгорнуті в результівний масив.

## Приклади

### Зчеплення двох масивів

Наступний код зчіплює два масиви:

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// дає ['a', 'b', 'c', 1, 2, 3]
```

### Зчеплення трьох масивів

Наступний код зчіплює три масиви:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// дає [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Зчеплення значень у масив

Наступний код зчіплює три значення в масив:

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// дає ['a', 'b', 'c', 1, 2, 3]
```

### Зчеплення вкладених масивів

Наступний код зчіплює вкладені масиви й демонструє збереження посилань:

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// дає [[1], 2, [3]]

// змінити перший елемент num1
num1[0].push(4);

console.log(numbers);
// дає [[1, 4], 2, [3]]
```

### Зчеплення масивоподібних об'єктів за допомогою Symbol.isConcatSpreadable

`concat` усталено не розглядає всі масивоподібні об'єкти як масиви: він це робить лише якщо властивість `Symbol.isConcatSpreadable` має значення істинності (наприклад, `true`.)

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### Використання concat() на розріджених масивах

Якщо будь-який з вихідних масивів є розрідженим, то результівний масив також буде розрідженим:

```js
console.log([1, , 3].concat([4, 5])); // [1, порожньо, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, порожньо, 5]
```

### Виклик concat() на об'єктах-немасивах

Якщо значення `this` не є масивом, то воно спершу перетворюється на об'єкт, а тоді обробляється так само, як аргументи `concat()`. В цьому випадку повернене значення завжди є новим звичайним масивом.

```js
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // ігнорується concat(), оскільки length – 2
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Array.prototype.concat` доступний в складі `core-js`, разом з виправленнями й реалізацією сучасної логіки типу підтримки `Symbol.isConcatSpreadable`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
