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

Метод **`includes()`** визначає, чи містить масив вказане значення серед своїх елементів, і повертає `true` чи `false` відповідно до результату.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## Синтаксис

```js
includes(searchElement)
includes(searchElement, fromIndex)
```

### Параметри

- `searchElement`

  - : Значення для пошуку.

    > **Зауваження:** `includes()` _враховує регістр_ під час порівняння рядків та окремих символів.

- `fromIndex` {{optional_inline}}

  - : Позиція в масиві, з якої почнеться пошук значення `searchElement`.

    Якщо значення `fromIndex` додатне, перший елемент для порівняння береться з позиції `fromIndex`. Якщо ж значення `fromIndex` від'ємне — пошук почнеться з позиції `arr.length + fromIndex` (маючи на увазі {{interwiki("wikipedia", "абсолютне значення")}} аргументу `fromIndex` — кількості елементів з кінця масиву до позиції, з якої почнеться пошук).

    Усталено має значення `0`.

### Повернене значення

Булеве значення, яке дорівнює `true`, якщо значення `searchElement` було знайдено всередині масиву (або частини масиву, визначеної індексом `fromIndex`, якщо такий було задано).

Всі значення нуля вважаються рівними, незалежно від знаку. Таким чином, `-0` вважається еквівалентним як `0`, так і `+0`, проте `false` _не_ вважається рівним `0`.

> **Зауваження:** Технічно, `includes()` використовує [`sameValueZero`](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality) алгоритм для визначення, чи було знайдено шуканий елемент.

## Приклади

```js
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
```

### Якщо `fromIndex` дорівнює довжині масиву, або більший за неї

У випадку, якщо `fromIndex` більший або дорівнює довжині масиву – буде повернуто значення `false`. В такому разі пошук виконуватись не буде.

```js
let arr = ['a', 'b', 'c']

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false
```

### Якщо обчислений індекс менший за 0

Якщо передано від'ємний `fromIndex`, то обчислений індекс буде обраховано, щоб використати його як позицію елементу в масиві, з якого почнеться пошук `searchElement`. Якщо ж і обчислений індекс менший або дорівнює `0`, буде перевірено весь масив.

```js
// довжина масиву дорівнює 3
// fromIndex дорівнює -100
// обчислений індекс дорівнює 3 + (-100) = -97

let arr = ['a', 'b', 'c']

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false
```

### Застосування includes() як загального методу

Метод `includes()` умисно зроблений загальним. Він не вимагає від значення `this` бути об'єктом `Array`, тож його можна застосувати й до інших типів об'єктів (зокрема – масивоподібних об'єктів).

Наступний приклад ілюструє виклик методу `includes()` на об'єкті [arguments](/uk/docs/Web/JavaScript/Reference/Functions/arguments) функції.

```js
(function() {
  console.log(Array.prototype.includes.call(arguments, 'a'))  // true
  console.log(Array.prototype.includes.call(arguments, 'd'))  // false
})('a','b','c')
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Array.prototype.includes` наявний у складі [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
