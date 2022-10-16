---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.slice
---

{{JSRef}}

Метод **`slice()`** (вирізати скибку, зріз) повертає [поверхневу копію (зріз)](/uk/docs/Glossary/Shallow_copy) певної частини масиву, взяту від елемента за індексом `start` (включно) до елемента за індексом `end` (не включно), у вигляді нового масиву. Початковий масив не змінюється.

{{EmbedInteractiveExample("pages/js/array-slice.html", "taller")}}

## Синтаксис

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Параметри

- `start` (початок) {{optional_inline}}

  - : Індекс (починаючи з нуля), за яким почнеться вибирання елементів з масиву.

    Допускається застосовувати від'ємний індекс для позначення позиції з кінця послідовності. Наприклад, `slice(-2)` витягує останні два елементи з масиву.

    Якщо `start` не заданий, `slice` почне з позиції `0`.

    Якщо `start` більший за довжину послідовності, буде повернуто порожній масив.

- `end` (кінець) {{optional_inline}}

  - : Індекс першого елемента, котрий буде виключений із поверненого масиву. `slice` витягає елементи до, але не включаючи `end`. Наприклад, `slice(1,4)` витягне елементи з другого по четвертий (елементи з позицій 1, 2, та 3).

    Допускається застосовувати від'ємний індекс для позначення положення елемента з кінця послідовності. Наприклад, `slice(2,-1)` витягне елементи, починаючи з третього і закінчуючи другим від кінця масиву.

    Якщо `end` опущено, `slice` витягне всі елементи до кінця послідовності (`arr.length`).

    Якщо `end` більший за довжину послідовності, `slice` витягне всі елементи до кінця набору (`arr.length`).

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

// Показати значення myCar, newCar, і колір myHonda,
// на який посилаються обидва масиви.
console.log("myCar = ", myCar);
console.log("newCar = ", newCar);
console.log("myCar[0].color = ", myCar[0].color);
console.log("newCar[0].color = ", newCar[0].color);

// Змінити колір myHonda.
myHonda.color = "бузковий";
console.log("Новий колір моєї Honda – ", myHonda.color);

// Показати колір myHonda, на який посилаються обидва масиви.
console.log("myCar[0].color = ", myCar[0].color);
console.log("newCar[0].color = ", newCar[0].color);
```

Скрипт надрукує такий текст:

```
myCar = [
  {color: 'червоний', wheels: 4, engine: {cylinders: 4, size: 2.2 } },
  2,
  'чудовий стан','придбана у 1997'
]
newCar = [{color: 'червоний', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
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

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
