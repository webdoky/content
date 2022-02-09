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

```js
slice();
slice(start);
slice(start, end);
```

### Параметри

- `start` (початок) {{optional_inline}}

  - : Індекс (починаючи з нуля), за яким почнеться вибирання елементів з масиву.

    Допускається застосовувати від'ємний індекс для позначення позиції з кінця послідовності. Наприклад, `slice(-2)` витягує останні два елементи з масиву.

    Якщо `start` не заданий, `slice` почне з позиції `0`.

    Якщо `start` більший за довжину послідовності, буде повернуто порожній масив.

- `end` (кінець) {{optional_inline}}

  - : Індекс елемента (починаючи з нуля), _перед_ яким буде припинено вибирання елементів. `slice` витягає елементи до, але не включаючи `end`. Наприклад, `slice(1,4)` витягне елементи з другого по четвертий (елементи з позицій 1, 2, та 3).

    Допускається застосовувати від'ємний індекс для позначення положення елемента з кінця послідовності. Наприклад, `slice(2,-1)` витягне елементи, починаючи з третього і закінчуючи другим від кінця масиву.

    Якщо `end` опущено, `slice` витягне всі елементи до кінця послідовності (`arr.length`).

    Якщо `end` більший за довжину послідовності, `slice` витягне всі елементи до кінця набору (`arr.length`).

### Результат

Новий масив, що містить всі витягнуті елементи.

## Опис

Метод `slice` не змінює початковий масив. Він повертає поверхневу копію елементів початкового масиву. Елементи початкового масиву копіюються до масиву з результатами таким чином:

- Для об'єктів `slice` копіює посилання на об'єкти у новий масив. Новий масив міститиме ті самі об‘єкти, що містяться у початковому масиві. Якщо об'єкт змінюється, такі зміни будуть відбиті як на початковому, так і на новому масиві.
- Для рядків, чисел і булевого типу (не об'єктів {{jsxref("String")}}, {{jsxref("Number")}} чи {{jsxref("Boolean")}}) `slice` скопіює значення у новий масив. Зміни у рядках, числах, чи булевих значеннях одного масиву ніяк не зачеплять інший.

Якщо до будь-якого з масивів додати новий елемент, інший масив залишиться без змін.

## Приклади

### Повернення частини наявного масиву

```js
let fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблуко', 'Манго'];
let citrus = fruits.slice(1, 3);

// fruits містить ['Банан', 'Апельсин', 'Лимон', 'Яблуко', 'Манго']
// citrus містить ['Апельсин','Лимон']
```

### Застосування функції `slice`

В цьому прикладі `slice` створює новий масив `newCar` з `myCar`. Обидва містять посилання на об'єкт `myHonda`. Коли колір `myHonda` змінюється на `purple`, обидва масиви показують цю зміну.

```js
// За допомогою slice() створити newCar з myCar.
let myHonda = {
  color: 'червоний',
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
let myCar = [myHonda, 2, 'чудовий стан', 'придбана у 1997'];
let newCar = myCar.slice(0, 2);

// Показати значення myCar, newCar, і колір myHonda,
// на який посилаються обидва масиви.
console.log('myCar = ' + JSON.stringify(myCar));
console.log('newCar = ' + JSON.stringify(newCar));
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

// Змінити колір myHonda.
myHonda.color = 'бузковий';
console.log('Новий колір моєї Honda – ' + myHonda.color);

// Показати колір myHonda, на який посилаються обидва масиви.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);
```

Скрипт надрукує такий текст:

```js
myCar = [{color: 'червоний', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
         'чудовий стан', 'придбана у 1997']
newCar = [{color: 'червоний', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = червоний
newCar[0].color = червоний
Новий колір моєї Honda – бузковий
myCar[0].color = бузковий
newCar[0].color = бузковий
```

### Масивоподібні об‘єкти

За допомогою методу `slice` можна також перетворити масивоподібний об'єкт чи колекцію на новий масив. Потрібно лише {{jsxref("Function.prototype.bind", "прив'язати")}} цей метод до об'єкта. Зокрема, об'єкт {{jsxref("Functions/arguments", "arguments")}} в функції є прикладом такого «масивоподібного об'єкту».

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

let list1 = list(1, 2, 3); // [1, 2, 3]
```

Для прив'язування можна також застосувати метод {{jsxref("Function.prototype.call", "call()")}} об'єкту {{jsxref("Function")}}, таким чином скоротивши запис до `[].slice.call(arguments)` замість `Array.prototype.slice.call`.

Зрештою, це можна іще спростити, використавши {{jsxref("Function.prototype.bind", "bind")}}.

```js
let unboundSlice = Array.prototype.slice;
let slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

let list1 = list(1, 2, 3); // [1, 2, 3]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
