---
title: "Array: length"
slug: Web/JavaScript/Reference/Global_Objects/Array/length
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Array.length
---

{{JSRef}}

Властивість даних **`length`** (довжина) примірника {{jsxref("Array")}}, що представляє число елементів у такому масиві. Значення є беззнаковим 32-бітовим цілим числом, котре завжди більше за найбільший індекс елемента масиву.

{{EmbedInteractiveExample("pages/js/array-length.html", "shorter")}}

## Значення

Невід'ємне число, менше від 2<sup>32</sup>.

{{js_property_attributes(1, 0, 0)}}

## Опис

Значення властивості `length` – невід'ємне ціле число зі значенням, меншим ніж 2<sup>32</sup>.

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // Від'ємні числа не дозволені
// RangeError: Invalid array length
```

Об'єкт масиву відстежує властивість `length` і автоматично синхронізує її значення зі своїм вмістом. Що означає:

- Присвоєння `length` значення, меншого за поточну довжину, обрізає масив: елементи поза новою довжиною – видаляються.
- Присвоєння за будь-яким індексом масиву (невід'ємним цілим числом, меншим ніж 2<sup>32</sup>) поза поточною довжиною розширює масив: властивість `length` збільшується, аби відповідати новому найбільшому індексові.
- Присвоєння `length` недійсного значення (наприклад, від'ємного числа чи взагалі не числа) викидає виняток `RangeError`.

Коли `length` присвоюється значення, більше за поточну довжину, то масив розширюється шляхом додавання [порожніх комірок](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy), а не реальних значень `undefined`. Порожні комірки можуть по-особливому взаємодіяти з методами масивів; дивіться [методи масиву й порожні комірки](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#metody-masyvu-y-porozhni-komirky).

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

Також дивіться [Взаємини між `length` і числовими властивостями](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#vzaiemyny-mizh-length-i-chyslovymy-vlastyvostiamy).

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
console.log(numbers[3]); // undefined; решта елементів видалена
```

### Створення порожнього масиву фіксованої довжини

Присвоєння `length` значення, більшого за поточну довжину, утворює [розріджений масив](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [порожньо x 3]
```

### Масив з недоступною для запису length

Властивість `length` автоматично оновлюється масивом, коли елементи додаються поза поточною довжиною. Якщо зробити властивість `length` недоступною для запису, то масив не зможе її оновити. Це у [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode) призведе до помилки.

```js
"use strict";
const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });
numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- [`TypedArray.prototype.length`](/uk/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
- [`String`: `length`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [RangeError: invalid array length](/uk/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
