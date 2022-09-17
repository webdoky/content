---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.isArray
---

{{JSRef}}

Метод **`Array.isArray()`** (чи є масивом) з'ясовує, чи є передане значення примірником {{jsxref("Array")}}.

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray('паляниця'); // false
Array.isArray(undefined); // false
```

## Синтаксис

```js-nolint
Array.isArray(value)
```

### Параметри

- `value` (значення)
  - : Значення до перевірки.

### Повернене значення

`true`, якщо значення – то {{jsxref("Array")}}, інакше – `false`.

## Опис

Якщо значення є примірником {{jsxref("Array")}}, то повертається`true`, інакше – `false`.

Більше подробиць у статті ["З'ясування з досконалою точністю того, чи є певний об'єкт JavaScript масивом" (англ.)](https://web.mit.edu/jwalden/www/isArray.html).
При передачі примірника {{jsxref("TypedArray")}} завжди повертається `false`.

## Приклади

### Застосування Array.isArray

```js
// усі виклики нижче повертають true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Невеличкий відомий факт: Array.prototype сам є масивом
Array.isArray(Array.prototype);

// усі виклики нижче повертають false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` проти `isArray`

При перевірці на належність примірника `Array` слід віддавати перевагу `Array.isArray` замість `instanceof`, тому що `Array.isArray` працює без огляду на `iframe`.

```js
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1,2,3]

// Коректна перевірка на Array
Array.isArray(arr); // true
// Вважається шкідливою практикою, адже не працює крізь iframe
arr instanceof Array; // false
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.isArray` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Поліфіл](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
