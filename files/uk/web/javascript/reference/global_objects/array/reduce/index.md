---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
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

Метод **`reduce()`** (редукувати, згорнути) виконує передану користувачем функцію зворотного виклику на кожному з елементів масиву, підряд, передаючи в неї повернене значення від обробки попереднього елементу.
Кінцевим результатом обробки всіх елементів масиву функцією `reduce()` є результат обробки останнього елемента.

Під час першого виконання функції зворотного виклику "результату виконання попереднього кроку" іще не існує. Замість нього може бути використано початкове значення (аргумент `initialValue`), якщо його було передано. Інакше — функція використає замість нього елемент за індексом 0, і почне виконання з наступного (з індексу 1 замість 0).

Ймовірно, найпростіший для розуміння приклад застосування `reduce()` — це отримання суми всіх елементів масиву:

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

Функція `reduce()` проходить по всьому масиву, елемент за елементом, з кожним кроком додаючи значення поточного елементу до результату попереднього кроку (цей результат є поточною сумою всіх попередніх кроків), допоки не дійде до кінця масиву.

## Синтаксис

```js-nolint
// Стрілкова функція
reduce((previousValue, currentValue) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )

reduce((previousValue, currentValue) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Функція зворотного виклику
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Оголошена на місці функція зворотного виклику
reduce(function(previousValue, currentValue) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ })

reduce(function(previousValue, currentValue) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ }, initialValue)
```

### Параметри

- `callbackFn`

  - : Функція-"редуктор", що викликається із наступними аргументами:
    - _previousValue_
      - : Результат виконання попереднього виклику `callbackFn`. Під час першого виклику, якщо заданий аргумент `initialValue`, то приймає його значення, інакше – `array[0]`.
    - _currentValue_:
      - : Значення поточного елемента. Під час першого виклику, якщо заданий аргумент `initialValue`, то приймає значення `array[0]`, інакше – `array[1]`.
    - _currentIndex_:
      - : Індекс поточного елемента. Під час першого виклику, якщо заданий аргумент `initialValue`, то приймає значення `0`, інакше – `1`.
    - _array_:
      - : Масив, що обробляється.

- `initialValue` {{optional_inline}}
  - : Значення, яким ініціалізується `previousValue` під час першого виконання функції зворотного виклику.
    Якщо `initialValue` задане, це призводить до ініціалізації `currentValue` першим значенням із масиву.
    Якщо ж `initialValue` _не_ задано, то `previousValue` ініціалізується першим елементом масиву, а `currentValue` — другим.

### Повернене значення

Значення, що є результатом виконання `reduce()` до кінця крізь весь масив.

### Винятки

- {{jsxref("TypeError")}}

  - : Масив не містить елементів, і не задано параметр `initialValue`.

## Опис

Метод `reduce()` приймає два аргументи: функцію зворотного виклику та необов'язкове початкове значення. Якщо вказане початкове значення, то `reduce()` по черзі викликає на кожному елементі масиву функцію зворотного виклику – "редуктор". Якщо початкове значення не вказане, то `reduce` викликає функцію зворотного виклику на кожному елементі масиву, крім першого.

`callbackFn` закликається лише для тих індексів масиву, що мають присвоєні значення. Вона не закликається для порожніх комірок у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

`reduce()` повертає значення, повернене функцією зворотного виклику на фінальній ітерації масиву.

`reduce()` є центральною концепцією [функційного програмування](https://uk.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D1%96%D0%B9%D0%BD%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F), в котрій неможливо змінювати будь-яке значення, тож для збору всіх значень до масиву треба повертати на кожній ітерації нове значення акумулятора. Така домовленість поширюється на `reduce()` JavaScript: слід використовувати [розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax) чи якусь іншу методику копіювання, де це можливо, і створювати як нове значення акумулятора нові масиви й об'єкти, а не видозмінювати старий акумулятор. При потребі змінити акумулятор замість його копіювання слід не забути повернути в функції зворотного виклику видозмінений об'єкт, інакше наступна ітерація отримає `undefined`.

### Коли не варто використовувати reduce()

Рекурсивні функції, такі, як `reduce()`, можуть бути потужними, але іноді складними для розуміння, особливо для менш досвідчених розробників на JavaScript. Якщо код стає яснішим при використанні інших методів масиву, розробники мусять зважити прочитність супроти інших переваг використання `reduce()`. У тих випадках, коли `reduce()` є найкращим варіантом, документування та семантичне іменування змінних можуть допомогти пом'якшити недоліки прочитності.

### Поведінка під час мутацій масиву

Метод `reduce()` сам по собі не змінює масиву, на котрому використовується. Проте код всередині функції зворотного виклику може це робити. Можливі сценарії мутацій масиву та того, як при таких мутаціях поводитиметься `reduce()`, наступні:

- Якщо елементи додаються в кінець масиву _після_ того, як `reduce()` почав ітерацію масивом, то функція зворотного виклику не оброблятиме додані елементи.
- Якщо наявні елементи масиву змінюються, то значення, передані до функції зворотного виклику, будуть значеннями, актуальними на ту мить, коли на масиві викликався reduce().
- Елементи масиву, що були видалені _після_ початку виклику `reduce()` _і_ до своєї передачі до функції зворотного виклику, не будуть оброблені `reduce()`.

### Крайові випадки

Якщо масив містить лише один елемент (незалежно від його позиції), і значення `initialValue` передано не було, або ж якщо `initialValue` було передано, проте сам масив порожній, то повернеться саме значення _без_ викликання `callbackFn`.

Якщо було передано `initialValue` і масив не порожній, то метод `reduce()` завжди викличе функцію зворотного виклику, починаючи з індексу 0.

Якщо `initialValue` не передане, то метод `reduce()` буде по різному себе поводити з масивами довжиною більшою за 1, рівною 1 та рівною 0, як показано в наступному прикладі:

```js
const getMax = (a, b) => Math.max(a, b);

// функція зворотного виклику виконується на кожному елементі масиву, починаючи з 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// функція зворотного виклику виконується один раз для елементу з індексом 1
[1, 100].reduce(getMax); // 100

// функція зворотного виклику не виконується
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError
```

## Приклади

### Як працює reduce(), якщо не вказано початкове значення

Наведений нижче код демонструє, що відбувається, якщо викликати `reduce()` на масиві й не надати функції початкового значення.

```js
const array = [15, 16, 17, 18, 19];

function reducer(previousValue, currentValue, index) {
  const returns = previousValue + currentValue;
  console.log(
    `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);
```

Функція зворотного виклику закликається чотири рази, з наступними аргументами та поверненими значеннями під час кожного виклику:

|                  | `previousValue` | `currentValue` | `index` | Повернене значення |
| ---------------- | --------------- | -------------- | ------- | ------------------ |
| Перший виклик    | `15`            | `16`           | `1`     | `31`               |
| Другий виклик    | `31`            | `17`           | `2`     | `48`               |
| Третій виклик    | `48`            | `18`           | `3`     | `66`               |
| Четвертий виклик | `66`            | `19`           | `4`     | `85`               |

Параметр `array` ніколи не змінюється протягом процесу – він завжди `[15, 16, 17, 18, 19]`. Значення, повернене `reduce()`, буде значенням, поверненим останнім закликом функції зворотного виклику (`85`).

### Як працює reduce() зі вказаним початковим значенням

Нижче виконаймо редукцію такого самого масиву, застосувавши такий самий алгоритм, проте передамо число `10` як параметр `initialValue`, другим аргументом до функції `reduce()`:

```js
[15, 16, 17, 18, 19].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  10
);
```

Функція зворотного виклику буде закликана п'ять разів, з наступними аргументами та поверненими значеннями під час кожного виклику:

|                  | `previousValue` | `currentValue` | `index` | Повернене значення |
| ---------------- | --------------- | -------------- | ------- | ------------------ |
| Перший виклик    | `10`            | `15`           | `0`     | `25`               |
| Другий виклик    | `25`            | `16`           | `1`     | `41`               |
| Третій виклик    | `41`            | `17`           | `2`     | `58`               |
| Четвертий виклик | `58`            | `18`           | `3`     | `76`               |
| П'ятий виклик    | `76`            | `19`           | `4`     | `95`               |

В цьому випадку `reduce()` поверне значення `95`.

### Сума значень в масиві об'єктів

Щоб просумувати значення, що містяться в масиві об'єктів, **необхідно** передати `initialValue`, щоб кожний з елементів був опрацьований заданою функцією.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (previousValue, currentValue) => previousValue + currentValue.x,
  0
);

console.log(sum); // виведе 6
```

### Сплощення масиву з масивами

```js
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
);
// сплощений результат: [0, 1, 2, 3, 4, 5]
```

### Обрахунок кількості входжень різних значень в об'єкті

```js
const names = ["Аліса", "Богдан", "Тома", "Борис", "Аліса"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
// countedNames містить:
// { 'Аліса': 2, 'Богдан': 1, 'Тома': 1, 'Борис': 1 }
```

### Групування об'єктів за певною властивістю

```js
const people = [
  { name: "Аліса", age: 21 },
  { name: "Максим", age: 20 },
  { name: "Яна", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

const groupedPeople = groupBy(people, "age");
// groupedPeople містить:
// {
//   20: [
//     { name: 'Максим', age: 20 },
//     { name: 'Яна', age: 20 }
//   ],
//   21: [{ name: 'Аліса', age: 21 }]
// }
```

### Зчеплення масивів, що знаходяться всередині масиву об'єктів, за допомогою синтаксису розгортання та initialValue

```js
// friends - масив об'єктів,
// у кожного з котрих поле "books" — це перелік улюблених книжок
const friends = [
  {
    name: "Анна",
    books: ["Біблія", "Енеїда"],
    age: 21,
  },
  {
    name: "Богдан",
    books: ["Чорна рада", "Тіні забутих предків"],
    age: 26,
  },
  {
    name: "Аліса",
    books: ["Залишенець. Чорний ворон", "Ворошиловград"],
    age: 18,
  },
];

// allbooks - список, що міститиме всі книги друзів +
// додатковий список, що знаходиться всередині initialValue
const allbooks = friends.reduce(
  (previousValue, currentValue) => [...previousValue, ...currentValue.books],
  ["Alphabet"]
);

// allbooks = [
//   'Абетка', 'Біблія', 'Енеїда', 'Чорна рада',
//   'Тіні забутих предків', 'Залишенець. Чорний ворон',
//   'Ворошиловград'
// ]
```

### Видалити дублікати з масиву

> **Примітка:** Такого ж самого ефекту можна досягти за допомогою {{jsxref("Set")}} і {{jsxref("Array.from()")}}, з кращою швидкодією, ось так: `const arrayWithNoDuplicates = Array.from(new Set(myArray))`.

```js
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce(
  (previousValue, currentValue) => {
    if (!previousValue.includes(currentValue)) {
      return [...previousValue, currentValue];
    }
    return previousValue;
  },
  []
);
console.log(myArrayWithNoDuplicates);
```

### Заміна .filter().map() на .reduce()

Застосування {{jsxref("Array/map", "map()")}} після {{jsxref("Array/filter", "filter()")}} змушує програму перебирати масив двічі; втім, аналогічного результату можна досягти, перебираючи масив лише один раз із {{jsxref("Array/reduce", "reduce()")}}, таким чином зробивши це більш ефективно. (Якщо вам до вподоби цикли `for`, можна відфільтрувати та перебрати масив за один раз із {{jsxref("Array/forEach", "forEach()")}}.)

```js
const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...previousValue, doubled];
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### Послідовне запускання промісів

```js
/**
 * Створює ланцюжок із серії обробників промісів
 *
 * @param {array} arr Список обробників промісів, кожен з яких отримує
 * вирішений результат попереднього обробника і повертає іще один проміс.
 * @param {*} input Початкове значення для старту ланцюжка промісів
 * @return {Object} Остаточний проміс, до котрого приєднаний ланцюжок обробників
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// функція з промісом номер 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// функція з промісом номер 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// функція номер 3 — обгорнеться у виконаний проміс викликом .then()
function f3(a) {
  return a * 3;
}

// функція з промісом номер 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200
```

### Компонування функцій у конвеєр

```js
// Базові блоки для подальшого компонування
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Компонування функцій, що дає змогу отримати функціонал конвейєра
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Скомпоновані функції для множення конкретних значень
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Застосування
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### Використання reduce() з розрідженими масивами

`reduce()` пропускає пропущені в розріджених масивах елементи, але не пропускає значення `undefined`.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Array.prototype.reduce` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reduceRight()")}}
