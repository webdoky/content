---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.reduce
---

{{JSRef}}

Метод **`reduce()`** (редукувати, згорнути) примірників {{jsxref("Array")}} виконує передану користувачем функцію зворотного виклику на кожному з елементів масиву, підряд, передаючи в неї повернене значення від обробки попереднього елементу. Кінцевим результатом обробки всіх елементів масиву функцією `reduce()` стає єдине фінальне значення.

Під час першого виконання функції зворотного виклику "результату виконання попереднього кроку" іще не існує. Замість нього може бути використано початкове значення (аргумент `initialValue`), якщо його було передано. Інакше — функція використає замість нього елемент за індексом 0, і почне виконання з наступного (з індексу 1 замість 0).

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

## Синтаксис

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Параметри

- `callbackFn`
  - : Функція для виконання на кожному елементі масиву. Її повернене значення стає значенням параметра `accumulator` при наступному заклику `callbackFn`. При останньому заклику повернене значення стане поверненим значенням `reduce()`. Ця функція викликається з наступними аргументами:
    - `accumulator`
      - : Результат виконання попереднього виклику `callbackFn`. При першому виклику цим значенням є `initialValue`, якщо воно задане; інакше це значення – `array[0]`.
    - `currentValue`:
      - : Значення поточного елемента. При першому виклику цим значенням є `array[0]`, якщо `initialValue` задано; інакше це значення – `array[1]`.
    - `currentIndex`:
      - : Позиція-індекс `currentValue` в масиві. При першому виклику це значення – 0, якщо `initialValue` задано; інакше це значення – 1.
    - `array`:
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

Метод `reduce()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він запускає функцію зворотного виклику – "редуктор" на всіх елементах масиву, в порядку зростання індексів, та підсумовує їх до єдиного значення. Повернене значення `callbackFn` щоразу передається в `callbackFn` при наступному заклику як `accumulator`. Кінцеве значення `accumulator` (те, котре повернено з `callbackFn` при завершальній ітерації масиву) стає поверненим значенням `reduce()`. Більше про те, як загалом працюють такі методи, читайте в розділі [ітеративних методів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

`callbackFn` закликається лише для тих індексів масиву, що мають присвоєні значення. Вона не закликається для порожніх комірок у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

На відміну від інших [ітеративних методів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody), `reduce()` не приймає аргументу `thisArg`. `callbackFn` завжди отримує `this` зі значенням `undefined`, котре замінюється на `globalThis`, якщо `callbackFn` є несуворою функцією.

`reduce()` є центральною концепцією [функційного програмування](https://uk.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D1%96%D0%B9%D0%BD%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F), в котрій неможливо змінювати будь-яке значення, тож для збору всіх значень до масиву треба повертати на кожній ітерації нове значення акумулятора. Така домовленість поширюється на `reduce()` JavaScript: слід використовувати [розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax) чи якусь іншу методику копіювання, де це можливо, і створювати як нове значення акумулятора нові масиви й об'єкти, а не видозмінювати старий акумулятор. При потребі змінити акумулятор замість його копіювання слід не забути повернути в функції зворотного виклику видозмінений об'єкт, інакше наступна ітерація отримає `undefined`. Проте зверніть увагу на те, що копіювання акумулятора може призвести до збільшення використання пам'яті та погіршення продуктивності — дивіться детальніше в розділі [Коли не варто використовувати reduce()](#koly-ne-varto-vykorystovuvaty-reduce). У таких випадках, щоб уникнути поганої продуктивності та незрозумілого коду, краще використовувати простий цикл `for`.

Метод `reduce()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

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
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
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
  10,
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
  0,
);

console.log(sum); // 6
```

### Послідовний конвеєр функцій

Функція `pipe` (конвеєр) приймає послідовність функцій та повертає нову функцію. Коли нова функція викликається з аргументом, то послідовність функцій викликається послідовно, і кожна з них отримує значення, повернене попередньою функцією.

```js
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);
// Цеглинки для використання в компонуванні
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;
// Скомпоновані функції для множення конкретних значень
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);
// Використання
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### Почерговий запуск промісів

[Послідовне виконання промісів](/uk/docs/Web/JavaScript/Guide/Using_promises#kompozytsiia) – це по суті той самий конвеєр функцій, показаний в попередньому розділі, але виконаний асинхронно.

```js
// Порівняйте це з конвеєром: fn(acc) змінено на acc.then(fn),
// а initialValue гарантовано є промісом
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));
// Цеглинки для використання в компонуванні
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// Скомпоновані функції також можуть повертати непроміси, оскільки всі
// значення, зрештою, загортаються в проміси
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;
asyncPipe(p1, p2, f3, p4)(10).then(console.log); // 1200
```

Функцію `asyncPipe` також можна реалізувати за допомогою `async` та `await`, що краще демонструє її подібність до `pipe`:

```js
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce(async (acc, fn) => fn(await acc), initialValue);
```

### Застосування reduce() до розріджених масивів

Метод `reduce()` пропускає в розріджених масивах відсутні елементи, але не пропускає значення `undefined`.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### Виклик reduce() на об'єктах-немасивах

Метод `reduce()` зчитує з `this` властивість `length`, а тоді звертається до кожної властивості, чий ключ є невід'ємним цілим числом, меншим за `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // ігнорується reduce(), оскільки length – 3
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9
```

### Коли не варто використовувати reduce()

Багатоцільові функції вищого порядку, подібні до `reduce()`, можуть бути потужними, але іноді їх важко зрозуміти, особливо для менш досвідчених розробників на JavaScript. Якщо код стає зрозумілішим при використанні інших методів масиву, розробники повинні зважити компроміс між читабельністю та іншими перевагами використання `reduce()`.

Зверніть увагу на те, що `reduce()` завжди еквівалентний циклу `for...of`, за винятком того, що замість внесення змін до змінної у верхній області видимості ми тепер повертаємо нове значення для кожної ітерації:

```js
const val = array.reduce((acc, cur) => update(acc, cur), initialValue);
// Це рівносильно до:
let val = initialValue;
for (const cur of array) {
  val = update(val, cur);
}
```

Як зазначено вище, причина того, що може виникнути бажання використовувати `reduce()`, – імітування практик функціонального програмування щодо беззмінності даних. Таким чином, розробники, які дотримуються беззмінності акумулятора, часто копіюють весь акумулятор для кожної ітерації, отак:

```js example-bad
const names = ["Аліса", "Богдан", "Тетяна", "Борис", "Аліса"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = Object.hasOwn(allNames, name) ? allNames[name] : 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
```

Цей код працює повільно, оскільки кожна ітерація повинна копіювати весь об'єкт `allNames`, який може бути великим, в залежності від того, скільки є унікальних імен. Цей код має найгіршу продуктивність – `O(N^2)`, де `N` – довжина `names`.

Кращий варіант – _змінювати_ об'єкт `allNames` на кожній ітерації. Проте якщо `allNames` все одно змінюється, то можна перетворити `reduce()` на простий цикл `for`, що набагато зрозуміліше:

```js example-bad
const names = ["Аліса", "Богдан", "Тетяна", "Борис", "Аліса"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  allNames[name] = currCount + 1;
  // повернути allNames, бо інакше – наступна ітерація отримає undefined
  return allNames;
}, Object.create(null));
```

```js example-good
const names = ["Аліса", "Богдан", "Тетяна", "Борис", "Аліса"];
const countedNames = Object.create(null);
for (const name of names) {
  const currCount = countedNames[name] ?? 0;
  countedNames[name] = currCount + 1;
}
```

Таким чином, якщо акумулятор є масивом або об'єктом, і на кожній ітерації цей масив або об'єкт копіюється, можна випадково ввести у код квадратичну складність, що призводить до швидкого погіршення продуктивності на великих даних. Таке траплялося в реальному коді — дивіться, наприклад, [Пришвидшення Tanstack Table у 1000 разів завдяки змінам у 1 рядку коду](https://jpcamara.com/2023/03/07/making-tanstack-table.html).

Частина прийнятних ситуацій для використання `reduce()` подана вище (перш за все, сумування масиву, послідовне виконання промісів та конвеєр функцій). В інших випадках існують кращі варіанти, ніж `reduce()`.

- Сплощення масиву масивів. Краще використати {{jsxref("Array/flat", "flat()")}}.

  ```js example-bad
  const flattened = array.reduce((acc, cur) => acc.concat(cur), []);
  ```

  ```js example-good
  const flattened = array.flat();
  ```

- Групування об'єктів за властивістю. Краще використати {{jsxref("Object.groupBy()")}}.

  ```js example-bad
  const groups = array.reduce((acc, obj) => {
    const key = obj.name;
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
  ```

  ```js example-good
  const groups = Object.groupBy(array, (obj) => obj.name);
  ```

- Зчеплення масивів, що містяться в масиві об'єктів. Краще використати {{jsxref("Array/flatMap", "flatMap()")}}.

  ```js example-bad
  const friends = [
    { name: "Анна", books: ["Біблія", "Вогнесміх"] },
    {
      name: "Борислав",
      books: ["Хіба ревуть воли, як ясла повні", "Кайдашева сім'я"],
    },
    { name: "Аліса", books: ["Бот: Атакамська криза", "Культ"] },
  ];
  const allBooks = friends.reduce((acc, cur) => [...acc, ...cur.books], []);
  ```

  ```js example-good
  const allBooks = friends.flatMap((person) => person.books);
  ```

- Усунення з масиву дублікатів. Краще використати {{jsxref("Set")}} і {{jsxref("Array.from()")}}.

  ```js example-bad
  const uniqArray = array.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    [],
  );
  ```

  ```js example-good
  const uniqArray = Array.from(new Set(array));
  ```

- Видалення або додавання елементів масиву. Краще використати {{jsxref("Array/flatMap", "flatMap()")}}.

  ```js example-bad
  // Беремо масив чисел і розбиваємо цілі квадрати на їхні квадратні корені
  const roots = array.reduce((acc, cur) => {
    if (cur < 0) return acc;
    const root = Math.sqrt(cur);
    if (Number.isInteger(root)) return [...acc, root, root];
    return [...acc, cur];
  }, []);
  ```

  ```js example-good
  const roots = array.flatMap((val) => {
    if (val < 0) return [];
    const root = Math.sqrt(val);
    if (Number.isInteger(root)) return [root, root];
    return [val];
  });
  ```

  Якщо елементи масиву лише видаляються, також можна використати {{jsxref("Array/filter", "filter()")}}.

- Пошук елементів або перевірка того, що елементи задовольняють умові. Краще використати {{jsxref("Array/find", "find()")}} і {{jsxref("Array/find", "findIndex()")}}, або {{jsxref("Array/some", "some()")}} і {{jsxref("Array/every", "every()")}}. Ці методи мають додаткову перевагу: вони повертають результат, щойно він відомий, без ітерування всього масиву.

  ```js example-bad
  const allEven = array.reduce((acc, cur) => acc && cur % 2 === 0, true);
  ```

  ```js example-good
  const allEven = array.every((val) => val % 2 === 0);
  ```

У тих випадках, коли `reduce()` є найкращим варіантом, документація та семантичне іменування змінних можуть допомогти полегшити проблему з читабельністю.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Array.prototype.reduce` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
