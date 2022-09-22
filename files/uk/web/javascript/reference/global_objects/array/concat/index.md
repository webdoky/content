---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - array.concat
  - concat
  - Polyfill
browser-compat: javascript.builtins.Array.concat
---

{{JSRef}}

Метод **`concat()`** (зчепити) використовується для злиття двох і більше масивів. Він не змінює наявні масиви, а повертає новий.

{{EmbedInteractiveExample("pages/js/array-concat.html","shorter")}}

## Синтаксис

```js-nolint
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, /* … ,*/ valueN)
```

### Параметри

- `valueN` (значення № N) {{optional_inline}}
  - : Масиви та (або) значення, котрі слід злити в новий масив. Якщо всі параметри опущені, то `valueN`, `concat` повертає [поверхневу копію](/uk/docs/Glossary/Shallow_copy) наявного масиву, на котрому його викликали.

### Повернене значення

Новий примірник {{jsxref("Array")}}.

## Опис

Метод `concat` створює новий масив. Цей масив спершу наповнюється елементами об'єкта, на котрому `concat` викликали. Далі значення кожного аргументу причіплюється до масиву: для звичайних об'єктів чи примітивів – сам аргумент стає елементом результівного масиву, а для масивів чи масивоподібних об'єктів зі властивістю [`Symbol.isConcatSpreadable`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable), що має значення істинності, кожен елемент аргументу буде окремо доданий до результівного масиву. Метод `concat` не виконує рекурсії на вкладених масивах аргументів.

Метод `concat` не міняє ані `this`, ані жодного з масивів, переданих як аргументи, а натомість повертає [поверхневу копію](/uk/docs/Glossary/Shallow_copy), що містить копії тих самих елементів, що були у вихідних масивах. Елементи вихідних масивів копіюються в новий масив наступним чином:

- Посилання на об'єкти (а не сам об'єкт): `concat` копіює в новий масив посилання на об'єкти. Як вихідний, так і новий масиви посилаються на одні об'єкти. А отже – при змінах відповідного об'єкта зміни будуть помітні як в новому, так у вихідному масиві. Це так само діє для масивів, які є елементами аргументів.
- Типи даних типу рядків, чисел та булевих значень (але не об'єкти {{jsxref("Global_Objects/String", "String")}}, {{jsxref("Global_Objects/Number", "Number")}} і {{jsxref("Global_Objects/Boolean", "Boolean")}}):
  `concat` копіює значення рядків та чисел у новий масив.

> **Примітка:** Зчеплення масиву (масивів) та (або) значення (значень) залишить оригінальні значення без змін. Понад те, будь-яка операція з новим масивом (окрім операцій на елементах, котрі є посиланнями на об'єкти) не матиме ефекту на вихідних масивах, і навпаки.

## Приклади

### Зчеплення двох масивів

Наступний код зчіплює два масиви:

```js
const letters = ['a', 'b', 'c'];
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
const letters = ['a', 'b', 'c'];

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

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Array.prototype.concat` доступний в складі `core-js`, разом з виправленнями й реалізацією сучасної логіки типу підтримки `Symbol.isConcatSpreadable`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array/push", "push()")}} / {{jsxref("Array/pop", "pop()")} — щоб додати чи прибрати елементи в кінці масиву
- {{jsxref("Array/unshift", "unshift()")}} / {{jsxref("Array/shift", "shift()")}} — щоб додати чи прибрати елементи на початку масиву
- {{jsxref("Array/splice", "splice()")}} — щоб додати чи прибрати елементи у вказаному місці масиву
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}} — щоб контролювати сплощення.
