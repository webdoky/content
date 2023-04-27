---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.reduce
---

{{JSRef}}

Метод **`reduce()`** (редукувати, згорнути) виконує передану користувачем функцію зворотного виклику на кожному з елементів масиву, підряд, передаючи в неї повернене значення від обробки попереднього елементу.
Кінцевим результатом обробки всіх елементів масиву функцією `reduce()` стає єдине фінальне значення.

Під час першого виконання функції зворотного виклику "результату виконання попереднього кроку" іще не існує. Замість нього може бути використано початкове значення (аргумент `initialValue`), якщо його було передано. Інакше — функція використає замість нього елемент за індексом 0, і почне виконання з наступного (з індексу 1 замість 0).

Ймовірно, найпростіший для розуміння приклад застосування `reduce()` — це отримання суми всіх елементів масиву:

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

Редуктор проходить по всьому масиву, елемент за елементом, з кожним кроком додаючи значення поточного елементу до результату попереднього кроку (цей результат є поточною сумою всіх попередніх кроків), поки елементи не закінчаться.

## Синтаксис

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Параметри

- `callbackFn`
  - : Функція для виконання на кожному елементі масиву. Її повернене значення стає значенням параметра `accumulator` при наступному заклику `callbackFn`. При останньому заклику повернене значення стане поверненим значенням `reduce()`. Ця функція викликається з наступними аргументами:
    - _accumulator_
      - : Результат виконання попереднього виклику `callbackFn`. Під час першого виклику, якщо заданий аргумент `initialValue`, то приймає його значення, інакше – `array[0]`.
    - _currentValue_:
      - : Значення поточного елемента. Під час першого виклику, якщо заданий аргумент `initialValue`, то приймає значення `array[0]`, інакше – `array[1]`.
    - _currentIndex_:
      - : Індекс поточного елемента. Під час першого виклику, якщо заданий аргумент `initialValue`, то приймає значення `0`, інакше – `1`.
    - _array_:
      - : Масив, на якому було викликано `reduce()`.
- `initialValue` {{optional_inline}}
  - : Значення, яким ініціалізується `accumulator` під час першого виконання функції зворотного виклику.
    Якщо `initialValue` задане, то `callbackFn` почне виконання з першим значенням масиву як `currentValue`.
    Якщо `initialValue` _не_ задане, то `accumulator` ініціалізується першим значенням масиву, і `callbackFn` починає виконання з другого значення масиву як `currentValue`. В такому випадку, якщо масив – порожній (тобто немає першого значення, аби повернути його як `accumulator`), викидається помилка.

### Повернене значення

Значення, що є результатом виконання `reduce()` до кінця крізь весь масив.

### Винятки

- {{jsxref("TypeError")}}

  - : Викидається, якщо масив не містить елементів, а `initialValue` – не задано.

## Опис

Метод `reduce()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він запускає функцію зворотного виклику – "редуктор" на всіх елементах масиву, в порядку зростання індексів, та підсумовує їх до єдиного значення. Повернене значення `callbackFn` щоразу передається в `callbackFn` при наступному заклику як `accumulator`. Кінцеве значення `accumulator` (те, котре повернено з `callbackFn` при завершальній ітерації масиву) стає поверненим значенням `reduce()`.

`callbackFn` закликається лише для тих індексів масиву, що мають присвоєні значення. Вона не закликається для порожніх комірок у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

На відміну від інших [ітеративних методів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody), `reduce()` не приймає аргументу `thisArg`. `callbackFn` завжди отримує `this` зі значенням `undefined`, котре замінюється на `globalThis`, якщо `callbackFn` є несуворою функцією.

`reduce()` є центральною концепцією [функційного програмування](https://uk.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D1%96%D0%B9%D0%BD%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F), в котрій неможливо змінювати будь-яке значення, тож для збору всіх значень до масиву треба повертати на кожній ітерації нове значення акумулятора. Така домовленість поширюється на `reduce()` JavaScript: слід використовувати [розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax) чи якусь іншу методику копіювання, де це можливо, і створювати як нове значення акумулятора нові масиви й об'єкти, а не видозмінювати старий акумулятор. При потребі змінити акумулятор замість його копіювання слід не забути повернути в функції зворотного виклику видозмінений об'єкт, інакше наступна ітерація отримає `undefined`.

`reduce()` не видозмінює масиву, на котрому його викликали, але функція, передана як `callbackFn`, може це робити. Проте слід звернути увагу, що довжина масиву запам'ятовується _до_ першого заклику `callbackFn`. Таким чином:

- `callbackFn` не оброблятиме жодних елементів, доданих поза початковою довжиною масиву, відколи почався виклик `reduce()`.
- Зміни за вже обробленими індексами не призводять до повторного заклику на них `callbackFn`.
- Якщо наявний, іще не оброблений елемент масиву вже був змінений `callbackFn`, то його значення, передане в `callbackFn`, буде значенням на ту мить, коли такий елемент обробляється. [Видалені](/uk/docs/Web/JavaScript/Reference/Operators/delete) елементи – не обробляються.

> **Застереження:** Внесення паралельних змін такого роду, як описано вище, часто веде до важкозрозумілого коду, і загалом цього слід уникати (окрім особливих випадків)

Метод `reduce()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

### Коли не варто використовувати reduce()

Рекурсивні функції, такі, як `reduce()`, можуть бути потужними, але іноді складними для розуміння, особливо для менш досвідчених розробників на JavaScript. Якщо код стає яснішим при використанні інших методів масиву, розробники мусять зважити прочитність супроти інших переваг використання `reduce()`. У тих випадках, коли `reduce()` є найкращим варіантом, документування та семантичне іменування змінних можуть допомогти пом'якшити недоліки прочитності.

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

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);
```

Функція зворотного виклику закликається чотири рази, з наступними аргументами та поверненими значеннями під час кожного виклику:

|                  | `accumulator` | `currentValue` | `index` | Повернене значення |
| ---------------- | ------------- | -------------- | ------- | ------------------ |
| Перший виклик    | `15`          | `16`           | `1`     | `31`               |
| Другий виклик    | `31`          | `17`           | `2`     | `48`               |
| Третій виклик    | `48`          | `18`           | `3`     | `66`               |
| Четвертий виклик | `66`          | `19`           | `4`     | `85`               |

Параметр `array` ніколи не змінюється протягом процесу – він завжди `[15, 16, 17, 18, 19]`. Значення, повернене `reduce()`, буде значенням, поверненим останнім закликом функції зворотного виклику (`85`).

### Як працює reduce() зі вказаним початковим значенням

Нижче виконаймо редукцію такого самого масиву, застосувавши такий самий алгоритм, проте передамо число `10` як параметр `initialValue`, другим аргументом до функції `reduce()`:

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
);
```

Функція зворотного виклику буде закликана п'ять разів, з наступними аргументами та поверненими значеннями під час кожного виклику:

|                  | `accumulator` | `currentValue` | `index` | Повернене значення |
| ---------------- | ------------- | -------------- | ------- | ------------------ |
| Перший виклик    | `10`          | `15`           | `0`     | `25`               |
| Другий виклик    | `25`          | `16`           | `1`     | `41`               |
| Третій виклик    | `41`          | `17`           | `2`     | `58`               |
| Четвертий виклик | `58`          | `18`           | `3`     | `76`               |
| П'ятий виклик    | `76`          | `19`           | `4`     | `95`               |

В цьому випадку `reduce()` поверне значення `95`.

### Сума значень в масиві об'єктів

Щоб просумувати значення, що містяться в масиві об'єктів, **необхідно** передати `initialValue`, щоб кожний з елементів був опрацьований заданою функцією.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
);

console.log(sum); // 6
```

### Сплощення масиву з масивами

```js
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
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
console.log(groupedPeople);
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
  (accumulator, currentValue) => [...accumulator, ...currentValue.books],
  ["Абетка"]
);

console.log(allbooks);
// [
//   'Абетка', 'Біблія', 'Енеїда', 'Чорна рада',
//   'Тіні забутих предків', 'Залишенець. Чорний ворон',
//   'Ворошиловград'
// ]
```

### Видалити дублікати з масиву

> **Примітка:** Такого ж самого ефекту можна досягти за допомогою {{jsxref("Set")}} і {{jsxref("Array.from()")}}, з кращою швидкодією, ось так: `const arrayWithNoDuplicates = Array.from(new Set(myArray))`.

```js
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue];
  }
  return accumulator;
}, []);
console.log(myArrayWithNoDuplicates);
```

### Заміна .filter().map() на .reduce()

Застосування {{jsxref("Array/map", "map()")}} після {{jsxref("Array/filter", "filter()")}} змушує програму перебирати масив двічі; втім, аналогічного результату можна досягти, перебираючи масив лише один раз із {{jsxref("Array/reduce", "reduce()")}}, таким чином зробивши це більш ефективно. (Якщо вам до вподоби цикли `for`, можна відфільтрувати та перебрати масив за один раз із {{jsxref("Array/forEach", "forEach()")}}.)

```js
const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### Послідовне запускання промісів

```js
/**
 * Створює ланцюжок із серії обробників промісів
 *
 * @param {array} arr – Список обробників промісів, кожен з яких отримує
 * вирішений результат попереднього обробника і повертає іще один проміс.
 * @param {*} input – Початкове значення для старту ланцюжка промісів
 * @return {Object} – Остаточний проміс, до котрого приєднаний ланцюжок обробників
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

### Виклик reduce() на об'єктах-немасивах

Метод `reduce()` зчитує з `this` властивість `length`, а потім звертається до кожної цілочислової властивості.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Array.prototype.reduce` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.group()")}}
- {{jsxref("Array.prototype.groupToMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
