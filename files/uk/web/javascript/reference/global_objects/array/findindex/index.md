---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.findIndex
---

{{JSRef}}

Метод **`findIndex()`** (знайти індекс) примірників {{jsxref("Array")}} повертає **індекс** першого елемента масиву, що задовольняє надану перевіркову функцію.
Якщо жоден елемент не задовольняє перевіркову функцію, повертається -1.

Дивіться також метод {{jsxref("Array/find", "find()")}}, котрий повертає перший елемент, що задовольняє перевіркову функцію (а не його індекс).

{{EmbedInteractiveExample("pages/js/array-findindex.html", "shorter")}}

## Синтаксис

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Параметри

- `callbackFn` (функція зворотного виклику)
  - : Функція для виконання на кожному елементі масиву. Повинна повернути [істинне](/uk/docs/Glossary/Truthy) значення, аби показати, що шуканий елемент знайдено, а інакше – [хибне](/uk/docs/Glossary/Falsy). Ця функція викликається з наступними аргументами:
    - `element` (елемент)
      - : Елемент масиву, що наразі обробляється.
    - `index` (індекс)
      - : Індекс елемента масиву, що наразі обробляється.
    - `array` (масив)
      - : Масив, на котрому викликали `findIndex()`.
- `thisArg` (аргумент `this`) {{optional_inline}}
  - : Значення для використання за `this` при виконанні `callbackFn`. Більше про це – в [ітеративних методах](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

### Повернене значення

Індекс першого елемента масиву, що проходить перевірку. Інакше – `-1`.

## Опис

`findIndex()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він викликає передану функцію `callbackFn` один раз для кожного елемента масиву, в порядку зростання індексів, поки `callbackFn` не поверне значення [істинності](/uk/docs/Glossary/Truthy). Тоді `findIndex()` повертає індекс цього елемента – і зупиняє ітерацію масиву. Якщо `callbackFn` взагалі не повертає значення істинності, то `findIndex()` повертає `-1`. Більше про те, як загалом працюють такі методи, читайте в розділі [ітеративних методів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

`callbackFn` закликається для _кожного_ індексу в масиві, а не лише тих, що мають присвоєні значення. Порожні комірки в [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy) поводяться так само як `undefined`.

Метод `findIndex()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

## Приклади

### Пошук в масиві індексу простого числа

Наступний приклад повертає індекс першого елемента масиву, що є простим числом, або `-1`, якщо простого числа там немає.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, не знайдено
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] – це 7)
```

### Використання третього аргументу callbackFn

Аргумент `array` корисний тоді, коли є потреба звернутися до іншого елемента масиву, особливо коли немає змінної, що посилається на цей масив. У наступному прикладі спочатку використовується `filter()` для видобування додатних значень, а потім `findIndex()` – для пошуку першого елемента, що менший за своїх сусідів.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .findIndex((num, idx, arr) => {
    // Без аргументу arr немає способу легко отримати доступ до проміжного масиву без збереження його в змінній.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### Використання findIndex() на розріджених масивах

Можна шукати в розрідженому масиві `undefined` – і отримати індекс порожньої комірки.

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### Виклик findIndex() на об'єктах-немасивах

Метод `findIndex()` зчитує з `this` властивість `length`, а потім звертається до кожної цілочислової властивості, чий ключ є невід'ємним цілим числом, меншим за `length.`

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // ігнорується findIndex(), оскільки -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)),
); // 1
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.findIndex` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
