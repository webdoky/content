---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/Reduce
tags:
  - Array
  - Array method
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reduce
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.reduce
---
{{JSRef}}

Метод **`reduce()`** виконує передану користувачем функцію зворотного виклику на кожному з елементів масиву, підряд, передаючи в неї повернене значення від обробки попереднього елементу.
Кінцевим результатом  обробки всіх елементів масиву функцією `reduce()` є результат обробки останнього елемента.

Під час першого виконання функції зворотного виклику "результату виконання попереднього кроку" іще не існує. Замість нього може бути використано початкове значення (аргумент `initialValue`), якщо його було передано. Інакше — функція використає нульовий елемент замість нього, і почне виконання з наступного (з індексу 1 замість 0).

Ймовірно, найпростіший для розуміння приклад застосування `reduce()` — це повернення суми всіх елементів масиву:

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

Функція `reduce()` проходить по всьому масиву, елемент за елементом, з кожним кроком додаючи значення поточного елементу до результату попереднього кроку (цей результат є поточною сумою всіх попередніх кроків), допоки не дійде до кінця масиву.

## Синтаксис

```js
// Стрілкова функція
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Функція зворотного виклику
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Оголошена на місці функція зворотного виклику
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
```

### Параметри

- `callbackFn`
  - : Функція, яка приймає чотири аргументи:
    - *previousValue*: результат виконання попереднього виклику `callbackFn`
      Під час першого виклику дорівнює `initialValue` (якщо вказано), або значенню елемента `array[0]`
    - *currentValue*: значення поточного елемента
      Під час першого виклику дорівнює значенню `array[0]`, якщо було вказано параметр `initialValue`, інакше — дорівнює `array[1]`.
    - *currentIndex*: індекс поточного елемента
      На перший виклик дорівнює `0`, якщо було передано параметр `initialValue`. Інакше — `1`.
    - *array*: масив, на котрому виконується `reduce`

- `initialValue` {{optional_inline}}
  - : Значення, яким ініціалізується *previousValue* під час першого виконання функції зворотного виклику.
    Якщо `initialValue` задане, це призводить до ініціалізації *currentValue* першим значенням із масиву.
    Якщо ж `initialValue` *не* задано, *previousValue* ініціалізується першим елементом масиву, а *currentValue* — другим.

### Повернене значення

Значення, що є результатом виконання `reduce()` до кінця крізь весь масив.

### Винятки

- {{jsxref("TypeError")}}

  - : Масив не містить елементів, і не задано параметр `initialValue`.

## Опис

Специфікація ECMAScript описує поведінку `reduce()` наступним чином:

> *callbackfn* повинна бути функцією, яка приймає чотири аргументи. `reduce` викликає функцію зворотного виклику як функцію, один раз для кожного елемента після першого наявного в масиві, в порядку зростання.
>
> *callbackfn* викликається з чотирма аргументами:
>
> - *previousValue* (результат попереднього виклику *callbackfn*)
> - *currentValue* (значення поточного елемента)
> - *currentIndex*, (індекс поточного елемента)
> - об'єкт, що наразі опрацьовується
>
> Коли *callbackfn* викликається вперше, *previousValue* і *currentValue* можуть отримати значення двома шляхами:
> - Якщо *initialValue* було передано у виклику `reduce`, то *previousValue* буде дорівнювати *initialValue*, а *currentValue* матиме значення першого елемента масиву.
> - Якщо *initialValue* передано не було, то *previousValue* буде дорівнювати першому значенню в масиві, а *currentValue* — другому.
> У випадку, якщо масив не містить елементів, і *initialValue* не задано, буде викинута помилка {{jsxref("TypeError")}}.
>
> `reduce` не змінює об'єкт, на якому викликається, проте цей об'єкт може буде змінений у тілі функції *callbackfn*.
>
> Діапазон елементів, які обробляються у `reduce`, задається перед першим викликом *callbackfn*. Елементи, які додані до масиву після початку роботи `reduce`, не будуть опрацьовані функцією *callbackfn*. Якщо наявні в масиві елементи змінились, до *callbackfn* передані їх значення в тому вигляді, який вони мають на момент опрацювання їх функцією `reduce`. Не будуть опрацьовані елементи, які було видалено між початком роботи `reduce` і початком їх опрацьовування.

Якщо масив містить лише один елемент (незалежно від його позиції), і значення *initialValue* передано не було, або ж якщо *initialValue* було передано, проте сам масив порожній, то повернеться саме значення _без_ викликання _`callbackFn`._

Якщо було передано *initialValue* і масив не порожній, то метод `reduce()` завжди викличе функцію зворотного виклику, починаючи з індексу 0.

Якщо *initialValue* не передане, то метод `reduce()` буде по різному себе поводити з масивами довжиною більшою за 1, рівною 1 та рівною 0, як показано в наступному прикладі:

```js
const getMax = (a, b) => Math.max(a, b);

// функція зворотного виклику виконується на кожному елементі масиву, починаючи з 0
[1, 100].reduce(getMax, 50); // 100
[    50].reduce(getMax, 10); // 50

// функція зворотного виклику виконується один раз для елементу з індексом 1
[1, 100].reduce(getMax);     // 100

// функція зворотного виклику не виконується
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1

[      ].reduce(getMax);     // TypeError
```

### Як працює reduce(), якщо не вказано початкове значення

Наведений нижче код демонструє, що відбувається, якщо викликати `reduce()` на масиві й не надати функції початкового значення.

```js
const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);
```

Функція зворотного виклику виконається чотири рази, з наступними аргументами та поверненими значеннями під час кожного виклику:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        Ітерація <code><var>callback</var></code>
      </th>
      <th scope="col">
        <code><var>previousValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentIndex</var></code>
      </th>
      <th scope="col">
        <code><var>array</var></code>
      </th>
      <th scope="col">Повернене значення</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Перший виклик</th>
      <td><code>15</code></td>
      <td><code>16</code></td>
      <td><code>1</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>31</code></td>
    </tr>
    <tr>
      <th scope="row">Другий виклик</th>
      <td><code>31</code></td>
      <td><code>17</code></td>
      <td><code>2</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>48</code></td>
    </tr>
    <tr>
      <th scope="row">Третій виклик</th>
      <td><code>48</code></td>
      <td><code>18</code></td>
      <td><code>3</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>66</code></td>
    </tr>
    <tr>
      <th scope="row">Четвертий виклик</th>
      <td><code>66</code></td>
      <td><code>19</code></td>
      <td><code>4</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>85</code></td>
    </tr>
  </tbody>
</table>

Значення, повернене з `reduce()`, буде таке саме, як результат останнього виконання функції зворотного виклику (`85`).

### Як працює reduce() зі вказаним початковим значенням

Нижче виконаймо редукцію такого самого масиву, застосувавши такий самий алгоритм, проте передамо число `10` як параметр *initialValue*, другим аргументом до функції `reduce()`:

```js
[15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 )
```

Функція зворотного виклику буде виконана п'ять разів, з наступними аргументами та поверненими значеннями під час кожного виклику:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        Ітерація <code><var>callback</var></code>
      </th>
      <th scope="col">
        <code><var>previousValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentIndex</var></code>
      </th>
      <th scope="col">
        <code><var>array</var></code>
      </th>
      <th scope="col">Повернене значення</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Перший виклик</th>
      <td><code>10</code></td>
      <td><code>15</code></td>
      <td><code>0</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <th scope="row">Другий виклик</th>
      <td><code>25</code></td>
      <td><code>16</code></td>
      <td><code>1</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>41</code></td>
    </tr>
    <tr>
      <th scope="row">Третій виклик</th>
      <td><code>41</code></td>
      <td><code>17</code></td>
      <td><code>2</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>58</code></td>
    </tr>
    <tr>
      <th scope="row">Четвертий виклик</th>
      <td><code>58</code></td>
      <td><code>18</code></td>
      <td><code>3</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>76</code></td>
    </tr>
    <tr>
      <th scope="row">П'ятий виклик</th>
      <td><code>76</code></td>
      <td><code>19</code></td>
      <td><code>4</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>95</code></td>
    </tr>
  </tbody>
</table>

В цьому випадку `reduce()` поверне значення `95`.

## Приклади

### Знайти суму всіх значень у масиві

```js
let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
}, 0)
// сума дорівнює 6
```

Альтернативний варіант, написаний зі стрілковою функцією:

```js
let total = [ 0, 1, 2, 3 ].reduce(
  ( previousValue, currentValue ) => previousValue + currentValue,
  0
)
```

### Сума значень в масиві об'єктів

Щоб просумувати значення, що містяться в масиві об'єктів, **необхідно** передати *initialValue*, щоб кожний з елементів був опрацьований заданою функцією.

```js
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)

console.log(sum) // виведе 6
```

Альтернативний варіант, написаний зі стрілковою функцією:

```js
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue
)

console.log(sum) // виведе 6
```

### Сплощення масиву з масивами

```js
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
// сплощений результат: [0, 1, 2, 3, 4, 5]
```

Альтернативний варіант, написаний зі стрілковою функцією:

```js
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( previousValue, currentValue ) => previousValue.concat(currentValue),
  []
)
```

### Обрахунок кількості входжень різних значень в об'єкті

```js
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames містить:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### Групування об'єктів за певною властивістю

```js
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
// groupedPeople містить:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
```

### Склеювання масивів, що знаходяться всередині масиву об'єктів, за допомогою spread-оператора та initialValue

```js
// friends - масив об'єктів,
// у кожного з котрих поле "books" — це перелік улюблених книжок
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allbooks - список, що міститиме всі книги друзів +
// додатковий список, що знаходиться всередині initialValue
let allbooks = friends.reduce(function(previousValue, currentValue) {
  return [...previousValue, ...currentValue.books]
}, ['Alphabet'])

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### Видалити дублікати з масиву

> **Зауваження:** Якщо оточення, в якому виконується код, сумісне з
> {{jsxref("Set")}} та {{jsxref("Array.from()")}}, можна просто застосувати
> `let arrayWithNoDuplicates = Array.from(new Set(myArray))`, щоб отримати масив
> елементів без дублікатів.

```js
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)
```

### Заміна .filter().map() на .reduce()

Застосування {{jsxref("Array.map()")}} після {{jsxref("Array.filter()")}} змушує програму перебирати масив двічі; втім, аналогічного результату можна досягти, перебираючи масив лише один раз із {{jsxref("Array.reduce()")}}, таким чином зробивши це більш ефективно. (Якщо вам до вподоби цикли `for`, можна відфільтрувати та перебрати масив за один раз із {{jsxref("Array.forEach()")}}).

```js
const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### Послідовне запускання промісів

```js
/**
 * Запускає проміси з масиву функцій, котрі можуть повертати проміси у послідовний спосіб
 *
 * @param {array} arr масив асинхронних функцій, що повертають проміс
 * @return {Object} об'єкт промісу
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

// функція з промісом номер 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

// функція з промісом номер 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

// функція номер 3 — обгорнеться у виконаний проміс викликом .then()
function f3(a) {
 return a * 3
}

// функція з промісом номер 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)   // 1200
```

### Компонування функцій у конвеєр

```js
// Базові блоки для подальшого компонування
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Компонування функцій, яке дозволяє отримати функціонал конвейєра
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
)

// Скомпоновані функції для множення конкретних значень
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Застосування
multiply6(6)   // 36
multiply9(9)   // 81
multiply16(16) // 256
multiply24(10) // 240
```

### Написання функції `map()` із застосуванням `reduce`

```js
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
      mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
) // [5, 7, , 10]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Array.prototype.reduce` є в складі [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reduceRight()")}}
