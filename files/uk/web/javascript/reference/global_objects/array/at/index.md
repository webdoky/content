---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.at
---

{{JSRef}}

Метод **`at()`** (за) примірників {{jsxref("Array")}} приймає числове значення і повертає елемент за цим індексом, для використання дозволені додатні та відʼємні числа. Відʼємні числа починають відлік з останнього елемента масиву.

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## Синтаксис

```js-nolint
at(index)
```

### Параметри

- `index`
  - : Індекс елемента масиву, який повертається від нуля, що [перетворений на ціле число](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Відʼємний індекс починає відлік з кінця масиву, якщо `index < 0` та присутній доступ до `index + array.length`.

### Повернене значення

Елемент масиву, що відповідає даному індексу. Завжди повертає {{jsxref("undefined")}}, якщо `index < -array.length` або `index >= array.length` без спроби отримати доступ по відповідної властивості.

## Опис

Метоп `at()` – це еквівалент до запису квадратними дужками якщо `index` не відʼємний. Наприклад, `array[0]` та `array.at(0)` обидва повернуть перший елемент. Хоча, якщо перераховувати елементи з кінця масиву, ви не зможете використати `array[-1]` як у Python або R, адже всі значення у квадратних дужках трактуються, як рядкова властивість, отож це буде прочитано як `array["-1"]`, що лише звичайна рядкова властивість, а не індекс масиву.

Звичною практикою є підрахунок індексу використовуючи {{jsxref("Array/length", "length")}}, наприклад, `array[array.length - 1]`. Метод `at()` робить можливим відносне індексування, тому цей вираз можна скоротити до `array.at(-1)`.

Комбінуючи `at()` з {{jsxref("Array/with", "with()")}}, ви можете як зчитувати, так і вносити зміни в масив, використовуючи від’ємні індекси.

Метод `at()` – [загальний](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Він лише очікує, що значення `this` матиме властивість `length` і властивості з цілочисельним ключем.

## Приклади

### Повернення останнього значення масиву

У наступному прикладі показана функція, що повертає останній знайдений елемент переданого в неї масиву.

```js
// Масив з елементами
const cart = ["яблуко", "банан", "груша"];

// Функція, що повертає останній елемент переданого в неї масиву.
function returnLast(arr) {
  return arr.at(-1);
}

// Отримання останнього елемента масиву 'cart'
const item1 = returnLast(cart);
console.log(item1); // 'груша'

// Додавання елемента в масив 'cart'
cart.push("апельсин");
const item2 = returnLast(cart);
console.log(item2); // 'апельсин'
```

### Порівняння методів

Цей приклад порівнює різні шляхи обрати передостанній елемент {{jsxref("Array")}}. Хоча всі наведені нижче методи правильні, цей приклад підкреслює стислість і читабельність методу `at()`.

```js
// Масив з елементами
const colors = ["червоний", "зелений", "синій"];

// Використання властивості довжини
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'зелений'

// Використання методу slice(). Візьміть до уваги, що повернуто масив
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'зелений'

// Використання методу at()
const atWay = colors.at(-2);
console.log(atWay); // 'зелений'
```

### Виклик at() для обʼєктів, що не є масивами

Метод `at()` зчитує властивість `length` з `this` і вираховує індекс до якого потрібно отримати доступ.

```js
const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
  2: "c", // at() ігнорує так як довжина 2
};
console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
console.log(Array.prototype.at.call(arrayLike, 2)); // undefined
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.at` в `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- Настанови для [Пронумерованих колекцій](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
