---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - indexof
  - Polyfill
browser-compat: javascript.builtins.Array.indexOf
---

{{JSRef}}

Метод **`indexOf()`** (індекс (значення)) повертає перший індекс, за яким даний елемент можна знайти в масиві, або `-1` – якщо його немає.

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## Синтаксис

```js
indexOf(searchElement);
indexOf(searchElement, fromIndex);
```

### Параметри

- `searchElement` (елемент пошуку)
  - : Шуканий у масиві елемент.
- `fromIndex` (від індексу) {{optional_inline}}
  - : Індекс, з якого потрібно почати пошук. Якщо індекс більший або дорівнює довжині масиву, повертається -1: це означає, що пошук у масиві виконуватись не буде. Якщо надане значення індексу є від’ємним числом, то воно приймається як зміщення від кінця масиву. Примітка: якщо наданий індекс є від’ємним, то пошук у масиві все одно виконується від початку до кінця. Якщо наданий індекс дорівнює 0 – пошук буде здійснюватися в усьому масиві. Усталено: 0 (перевіряється весь масив).

### Повернене значення

Перший індекс елемента в масиві; **-1**, якщо нічого не знайдено.

## Опис

`indexOf()` порівнює `searchElement` з елементами масиву, використовуючи [строгу рівність](/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality) (той самий підхід, що використовується оператором потрійної рівності `===`).

> **Примітка:** Для методу String див.
> {{jsxref("String.prototype.indexOf()")}}.

## Приклади

### Використання indexOf()

У наступному прикладі `indexOf()` використовується для пошуку значень у масиві.

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### Пошук усіх входжень елемента

```js
const indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
const idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Визначення, чи знаходиться елемент у масиві, чи ні, та оновлення масиву

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log('Нова овочева колекція: ' + veggies);
  } else {
    console.log(veggie + ' уже є в овочевій колекції.');
  }
}

const veggies = [
  'картопля',
  'помідор',
  'червоний гострий перець',
  'зелений болгарський перець',
];

updateVegetablesCollection(veggies, 'шпинат');
// Нова колекція veggies: картопля,помідор,червоний гострий перець,зелений болгарський перець,шпинат
updateVegetablesCollection(veggies, 'шпинат');
// шпинат уже є в овочевій колекції.
```

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.indexOf` у `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
