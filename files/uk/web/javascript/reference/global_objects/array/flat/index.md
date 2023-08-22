---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.flat
---

{{JSRef}}

Метод **`flat()`** (площина, плоский) створює новий масив шляхом рекурсивного зчеплення, до заданої глибини, всіх підмасивів докупи.

{{EmbedInteractiveExample("pages/js/array-flat.html")}}

## Синтаксис

```js-nolint
flat()
flat(depth)
```

### Параметри

- `depth` {{optional_inline}}
  - : Рівень глибини, що задає те, наскільки глибоко вкладена структура підмасивів повинна бути сплощена.
    Усталено – 1.

### Повернене значення

Новий масив, у котрий зчеплено елементи підмасивів.

## Опис

Метод `flat()` – [копіювальний метод](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#kopiiuvalni-ta-zminiuvalni-metody). Він не змінює `this`, а повертає [поверхневу копію](/uk/docs/Glossary/Shallow_copy), що містить ті самі елементи, що присутні у вихідному масиві.

Метод `flat()` ігнорує порожні комірки, якщо сплощуваний масив є [розрідженим](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy). Наприклад, якщо `depth` – 1, то порожні комірки, як в кореневому масиві, так і в масивах першого рівня вкладеності – ігноруються, але порожні комірки в масивах глибших рівнів зберігаються вкупі з самими цими масивами.

Метод `pop()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також цілочислові властивості. Проте його елементи мусять бути масивами, аби бути сплощеними.

## Приклади

### Сплощення вкладених масивів

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Використання flat() на розріджених масивах

Метод `flat()` прибирає порожні комірки масивів:

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", порожньо, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]
```

### Виклик flat() на об'єктах-немасивах

Метод `flat()` зчитує з `this` властивість `length`, а тоді звертається до кожної властивості, чий ключ – невід'ємне ціле число, менше за `length`. Якщо елемент не є масивом, то він безпосередньо додається в кінець результату. Якщо елемент є масивом, то він сплощується згідно з параметром `depth`.

```js
const arrayLike = {
  length: 3,
  0: [1, 2],
  // Масивоподібні об'єкти не сплощуються
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
  3: 3, // ігнорується flat(), оскільки length – 3
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.flat` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
