---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - inArray
  - in_array
  - Polyfill
browser-compat: javascript.builtins.Array.includes
---

{{JSRef}}

Метод **`includes()`** (включає) визначає, чи містить масив вказане значення серед своїх елементів, і повертає `true` чи `false` відповідно до результату.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## Синтаксис

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Параметри

- `searchElement`

  - : Значення для пошуку.

    > **Примітка:** `includes()` _враховує регістр_ під час порівняння рядків та окремих символів.

- `fromIndex` {{optional_inline}}

  - : Позиція в масиві, з якої почнеться пошук значення `searchElement`.

    Якщо значення `fromIndex` додатне, перший елемент для порівняння береться з позиції `fromIndex`. Якщо ж значення `fromIndex` від'ємне — пошук почнеться з позиції `arr.length + fromIndex` (йдеться про [модуль](<https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_(%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0)>) аргументу `fromIndex` — кількості елементів з кінця масиву до позиції, з якої почнеться пошук).

    Усталено має значення `0`.

### Повернене значення

Булеве значення, яке дорівнює `true`, якщо значення `searchElement` було знайдено всередині масиву (або частини масиву, визначеної індексом `fromIndex`, якщо такий було задано).

## Опис

Всі нульові значення вважаються рівними, незалежно від знаку. Таким чином, `-0` вважається еквівалентним як `0`, так і `+0`, проте `false` _не_ вважається рівним `0`. [`NaN`](/uk/docs/Web/JavaScript/Reference/Global_Objects/NaN) можна коректно шукати.

> **Примітка:** Технічно, `includes()` використовує [`sameValueZero`](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality) алгоритм для визначення, чи було знайдено шуканий елемент.

Бувши використаним на [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy), метод `includes()` ітерує порожні комірки так, ніби вони містять значення `undefined`.

Метод `includes()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

## Приклади

### Використання includes()

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
```

### Якщо `fromIndex` дорівнює довжині масиву, або більший за неї

У випадку, якщо `fromIndex` більший або дорівнює довжині масиву – буде повернуто значення `false`. В такому разі пошук виконуватись не буде.

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### Якщо обчислений індекс менший за 0

Якщо передано від'ємний `fromIndex`, то обчислений індекс буде обраховано, щоб використати його як позицію елементу в масиві, з якого почнеться пошук `searchElement`. Якщо ж і обчислений індекс менший або дорівнює `0`, буде перевірено весь масив.

```js
// довжина масиву дорівнює 3
// fromIndex дорівнює -100
// обчислений індекс дорівнює 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

### Використання includes() на розріджених масивах

Можна шукати в розрідженому масиві `undefined` – і отримати `true`.

```js
console.log([1, , 3].includes(undefined)); // true
```

### Виклик includes() на об'єктах-немасивах

Метод `includes()` зчитує з `this` властивість `length`, а потім звертається до кожної цілочислової властивості.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Array.prototype.includes` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
