---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.slice
---

{{JSRef}}

Метод **`slice()`** (вирізати скибку, зріз) примірників {{jsxref("Array")}} повертає [поверхневу копію (зріз)](/uk/docs/Glossary/Shallow_copy) певної частини масиву, взяту від елемента за індексом `start` (включно) до елемента за індексом `end` (не включно), у вигляді нового масиву. Початковий масив не змінюється.

{{EmbedInteractiveExample("pages/js/array-slice.html", "taller")}}

## Синтаксис

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Параметри

- `start` (початок) {{optional_inline}}

  - : Індекс (починаючи з нуля), за яким почнеться вибирання елементів з масиву, [перетворений на ціле число](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile).
    - Від'ємний індекс рахується з кінця масиву: якщо `start < 0`, використовується `start + array.length`.
    - Якщо `start < -array.length` або `start` опущено, використовується `0`.
    - Якщо `start >= array.length`, то нічого не вибирається.

- `end` (кінець) {{optional_inline}}

  - : Індекс (починаючи з нуля), на якому припиниться вибирання елементів з масиву, [перетворений на ціле число](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile). `slice()` вибирає елементи до, але не включаючи `end`.
    - Від'ємний індекс рахується з кінця масиву: якщо `end < 0`, використовується `end + array.length`.
    - Якщо `end < -array.length`, використовується `0`.
    - Якщо `end >= array.length` або `end` опущено, використовується `array.length`, унаслідок чого вибираються всі елементи аж до кінця масиву.
    - Якщо `end` розташований перед або на `start` після нормалізації, то нічого не вибирається.

### Результат

Новий масив, що містить всі витягнуті елементи.

## Опис

Метод `slice()` є [копіювальним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#kopiiuvalni-ta-zminiuvalni-metody). Він не змінює `this`, а повертає [поверхневу копію](/uk/docs/Glossary/Shallow_copy), котра містить частину тих самих елементів, що є у вихідному масиві.

Метод `slice()` зберігає порожні комірки. Якщо вирізана частка є [розрідженою](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy), то повернений масив буде розрідженим також.

Метод `slice()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

## Приклади

### Повернення частини наявного масиву

```js
const fruits = ["Банан", "Апельсин", "Лимон", "Яблуко", "Манго"];
const citrus = fruits.slice(1, 3);

// fruits містить ['Банан', 'Апельсин', 'Лимон', 'Яблуко', 'Манго']
// citrus містить ['Апельсин','Лимон']
```

### Застосування функції `slice`

В цьому прикладі `slice` створює новий масив `newCar` з `myCar`. Обидва містять посилання на об'єкт `myHonda`. Коли колір `myHonda` змінюється на `purple`, обидва масиви показують цю зміну.

```js
// За допомогою slice() створити newCar з myCar.
const myHonda = {
  color: "червоний",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "чудовий стан", "придбана у 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Змінити колір myHonda.
myHonda.color = "бузковий";
console.log("Новий колір моєї Honda –", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
```

Скрипт надрукує такий текст:

```plain
myCar = [
  {color: 'червоний', wheels: 4, engine: {cylinders: 4, size: 2.2 } },
  2,
  'чудовий стан','придбана у 1997'
]
newCar = [ { color: 'червоний', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2 ]
myCar[0].color = червоний
newCar[0].color = червоний
Новий колір моєї Honda – бузковий
myCar[0].color = бузковий
newCar[0].color = бузковий
```

### Виклик slice() на об'єктах-немасивах

Метод `slice()` зчитує з `this` властивість `length`. Потім він зчитує цілочислові властивості від `start` до `end` і визначає їх на новоствореному масиві.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // ігнорується slice(), оскільки length – 3
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]
```

### Використання slice() для перетворення масивоподібних об'єктів на масиви

Метод `slice()` нерідко використовується вкупі з {{jsxref("Function.prototype.bind", "bind()")}} і {{jsxref("Function.prototype.call", "call()")}} для створення допоміжного методу, що перетворює масивоподібний об'єкт на масив.

```js
// slice() викликається з `this`, переданим як перший аргумент
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

### Використання slice() на розріджених масивах

Масив, повернений зі `slice()`, може бути розрідженим, якщо розрідженим є вихідний масив.

```js
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, порожньо, 4]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.slice` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("TypedArray.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
