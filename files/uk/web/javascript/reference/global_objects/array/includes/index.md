---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.includes
---

{{JSRef}}

Метод **`includes()`** (включає) примірників {{jsxref("Array")}} визначає, чи містить масив вказане значення серед своїх елементів, і повертає `true` чи `false` відповідно до результату.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## Синтаксис

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Параметри

- `searchElement`
  - : Значення для пошуку.
- `fromIndex` {{optional_inline}}
  - : Індекс від нуля, з якого почнеться пошук, [перетворений на ціле число](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile).
    - Від'ємний індекс рахується від кінця масиву: якщо `fromIndex < 0`, то використовується `fromIndex + array.length`. Проте в такому випадку пошук все одно відбувається від початку до кінця масиву.
    - Якщо `fromIndex < -array.length`, або якщо `fromIndex` опущено, то використовується `0`, що призводить до пошуку в усьому масиві.
    - Якщо `fromIndex >= array.length`, то пошук не відбувається, і повертається `false`.

### Повернене значення

Булеве значення, яке дорівнює `true`, якщо значення `searchElement` було знайдено всередині масиву (або частини масиву, визначеної індексом `fromIndex`, якщо такий було задано).

## Опис

Метод `includes()` порівнює `searchElement` з елементами масиву за допомогою алгоритму [SameValueZero](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#rivnist-iz-odnakovym-nulem). Усі нульові значення вважаються рівними, незалежно від свого знаку. (Тобто `-0` рівносильно `0`), але `false` _не_ вважається тотожним `0`. Може бути виконаний коректний пошук [`NaN`](/uk/docs/Web/JavaScript/Reference/Global_Objects/NaN).

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

Метод `includes()` зчитує з `this` властивість `length`, а потім звертається до кожної властивості, чий ключ – невід'ємне ціле число, менше за `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // ігнорується includes(), оскільки length – 3
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
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
