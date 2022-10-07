---
title: Array.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
tags:
  - Array
  - JavaScript
  - Property
  - Reference
browser-compat: javascript.builtins.Array.length
---

{{JSRef}}

Властивість **`length`** (довжина) об'єкта, котрий є примірником типу `Array`, задає чи повертає число елементів у такому масиві. Значення є беззнаковим 32-бітовим цілим числом, котре завжди більше за найбільший індекс елемента масиву.

{{EmbedInteractiveExample("pages/js/array-length.html","shorter")}}

## Опис

Значення властивості `length` – ціле невід'ємне число зі значенням, котре не перевищує 2 у 32 степені (2^32).

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 4294967296; //2 у 32 степені = 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); //від'ємна довжина
// RangeError: Invalid array length
```

Будь-якої миті можна обрізати масив, змінивши значення `length`. Якщо таким чином розширити масив, то число фактичних елементів зросте; наприклад, якщо присвоїти `length` 3, коли насправді елементів 2, то в масиві стане 3 елементи, і як наслідок – третій елемент буде неітерованою порожньою коміркою.

```js
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // задати довжину масива 5, хоча насправді елементів 2.
console.log(arr);
// [ 1, 2, <3 порожні елементи> ]

arr.forEach((element) => console.log(element));
// 1
// 2
```

Як бачимо, властивість `length` не обов'язково показує число визначених значень у масиві. Дивіться також [Взаємозв'язок між `length` та числовими властивостями](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#vzaiemozviazok-mizh-dovzhynoiu-ta-chyslovymy-vlastyvostiamy).

{{js_property_attributes(1, 0, 0)}}

- `Writable`: Якщо значення цього атрибута `false`, то значення властивості не може бути змінено.
- `Configurable`: Якщо значення цього атрибута `false`, то всі спроби видалити цю властивість чи змінити її атрибути (`Writable`, `Configurable` чи `Enumerable`) будуть неуспішними.
- `Enumerable`: Якщо значення цього атрибута `true`, ця властивість буде ітерована циклами [`for`](/uk/docs/Web/JavaScript/Reference/Statements/for) і [`for...in`](/uk/docs/Web/JavaScript/Reference/Statements/for...in).

## Приклади

### Ітерування масиву

В наступному прикладі масив `numbers` ітерується з перевіркою властивості `length`. Значення кожного елемента подвоюється.

```js
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// тепер numbers [2, 4, 6, 8, 10]
```

### Скорочення масиву

Наступний приклад скорочує `numbers` до довжини 3, якщо поточна довжина більша за 3.

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
```

### Створення порожнього масиву фіксованої довжини

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [порожньо x 3]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array")}}
- [RangeError: invalid array length](/uk/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
