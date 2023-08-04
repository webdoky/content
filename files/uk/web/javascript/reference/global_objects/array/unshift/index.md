---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.unshift
---

{{JSRef}}

Метод **`unshift()`** (відсунути) додає вказані елементи на
початок масиву та повертає нову довжину масиву.

{{EmbedInteractiveExample("pages/js/array-unshift.html")}}

## Синтаксис

```js-nolint
unshift()
unshift(елемент0)
unshift(елемент0, елемент1)
unshift(елемент0, елемент1, /* … ,*/ елементN)
```

### Параметри

- `елементN`
  - : Елементи, які потрібно додати на початок масиву.

### Повернене значення

Нова властивість {{jsxref("Array/length", "length")}} об'єкта, на якому
викликано метод.

## Опис

Метод unshift() вставляє задані значення на початок масивоподібного об'єкту.

{{jsxref("Array.prototype.push()")}} має подібну поведінку до `unshift()`, але застосовується до кінця масиву.

Зауважте: якщо кілька елементів передаються як параметри, вони додаються
у фрагмент на початку об’єкта в тому самому порядку, в якому вони були передані. Отже, виклик `unshift()` з `n`
аргументами **за раз** і виклик `n` разів за допомогою
**1** аргументу (наприклад, із циклом), не дають однакових результатів.

Наприклад:

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // скидання масиву

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

Метод `unshift()` - [узагальнений](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лише очікує, що значення `this` матиме властивість `length` і властивості з цілочисловими ключами. Попри те, рядки також є масивоподібними, цей метод не підходить для застосування до них, оскільки рядки – незмінні.

## Приклади

### Використання unshift()

```js
const arr = [1, 2];

arr.unshift(0); // результатом виклику є 3, що є новою довжиною масиву
// arr is [0, 1, 2]

arr.unshift(-2, -1); // довжина нового масиву дорівнює 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // довжина нового масиву дорівнює 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // довжина нового масиву дорівнює 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

### Виклик unshift() на об'єктах-немасивах

Метод `unshift()` зчитує з `this` властивість `length`. Він зсуває всі індекси в діапазоні від `0` до `length - 1` вправо на кількість аргументів (збільшуючи їх значення на це число). Потім він присвоює значення на кожен індекс, починаючи з `0`, серед іншого, використовуючи аргументи, передані в `unshift()`. Насамкінець, він задає `length` зі значенням попередньої довжини плюс кількість доданих елементів.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.unshift.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }

const plainObj = {};
// Немає властивості length, тому довжина дорівнює 0
Array.prototype.unshift.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.unshift` у `core-js` з виправленнями цього методу](https://github.com/zloirock/core-js#ecmascript-array)
- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
