---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
tags:
  - Array
  - Array method
  - JavaScript
  - Method
  - Prototype
  - Sorting
  - Polyfill
browser-compat: javascript.builtins.Array.sort
---
{{JSRef}}

Метод **`sort()`** сортує елементи масиву _[на місці](https://en.wikipedia.org/wiki/In-place_algorithm)_ й повертає відсортований масив. Усталений порядок сортування — в порядку зростання, заснований на перетворенні елементів у рядки, а потім порівнянні їхніх послідовностей зі значень кодів UTF-16.

Складність алгоритму сортування щодо використання часу та місця в пам'яті ніяк не гарантується, і залежить від реалізації.

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

## Синтаксис

```js
// Без функції порівняння
sort()

// Стрілкова функція
sort((firstEl, secondEl) => { ... } )

// Функція порівняння
sort(compareFn)

// Функція порівняння, оголошена на місці
sort(function compareFn(firstEl, secondEl) { ... })
```

### Параметри

- `compareFunction` {{optional_inline}}

  - : Задає функцію, яка визначатиме порядок сортування. В разі, якщо вона опущена, елементи масиву перетворюються в рядки, і потім сортуються відносно значення юнікодного коду кожного символу.

    - `firstEl`
      - : Перший елемент для порівняння.
    - `secondEl`
      - : Другий елемент для порівняння.

### Повернене значення

Відсортований масив. Зауважте, що масив сортується _[на місці](https://en.wikipedia.org/wiki/In-place_algorithm)_, і ніяких додаткових копій не створюється.

## Опис

Якщо `compareFunction` передано не було, всі елементи масиву, котрі не є `undefined`, сортуються шляхом перетворення їх у рядки, і порівняння цих рядків в порядку кодів UTF-16. Наприклад, "банан" йде перед "черешнею". У разі сортування чисел, 9 йде перед 80, але через те, що числа перетворюються в рядки перед сортуванням, "80" йде перед "9" згідно з послідовністю кодів Unicode. Всі елементи, які є `undefined`, складаються в кінець масиву.

> **Зауваження:** В UTF-16, символи юнікоду вище `\uFFFF` кодуються як сурогатні пари кодів з проміжку `\uD800`-`\uDFFF`. Під час порівняння значення кожного коду такої пари враховується окремо. Таким чином, символ, сформований сурогатною парою `\uD655\uDE55`, під час сортування опиниться перед символом `\uFF3A`.

Якщо було передано функцію порівняння `compareFunction`, всі елементи масиву, котрі не є `undefined`, сортуються відповідно поверненого значення функції порівняння (всі елементи, які містять `undefined`, складаються в кінець масиву без викликання `compareFunction`).

| Повернене значення `compareFunction(a, b)` | Порядок сортування                    |
|--------------------------------------------|---------------------------------------|
| > 0                                        | сортує `b` перед `a`                  |
| < 0                                        | сортує `a` перед `b`                  |
| === 0                                      | зберігає початковий порядок `a` і `b` |

> **Зауваження:** функція `compareFunction(a, b)` повинна завжди повертати те саме значення, коли до неї передають одні й ті самі елементи аргументами `a` та `b`.

Отже, функція порівняння має наступну форму:

```js
function compare(a, b) {
  if (a менше за b за якимось критерієм впорядкуваня) {
    return -1;
  }
  if (a більше за b за тим самим критерієм впорядкування) {
    return 1;
  }
  // a має дорівнювати b
  return 0;
}
```

Щоб порівняти числа замість рядків, функція порівняння може віднімати `b` від `a`. Наступна функція відсортує масив у порядку зростання (якщо він не містить `Infinity` чи `NaN`):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Метод `sort` можна зручно використовувати з {{jsxref("Operators/function", "функційними виразами", "", 1)}}:

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

ES2015 дозволяє користуватись {{jsxref("Functions/Arrow_functions", "виразами стрілкової функції", "", 1)}} зі ще коротшим синтаксисом.

```js
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```

Масив об'єктів можна сортувати шляхом порівняння значень однієї з їхніх властивостей.

```js
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// сортувати за властивістю value
items.sort(function (a, b) {
  return a.value - b.value;
});

// сортувати за властивістю name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ігноруємо малі та великі літери
  var nameB = b.name.toUpperCase(); // ігноруємо малі та великі літери
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // значення полів name однакові
  return 0;
});
```

## Приклади

### Створення, показування і сортування масиву

Наступний приклад створює чотири масиви, далі показує вихідний масив, а потім<span class="x x-first x-last"> —</span> відсортовані масиви. Числові масиви сортуються спочатку без функції сортування, а потім із нею.

```js
let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // [700, 80, 9]
numericStringArray.sort(compareNumbers); // [9, 80, 700]

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, 700, 80, 9]
mixedNumericArray.sort(compareNumbers); // [1, 5, 9, 40, 80, 200, 700]
```

### Сортування не-ASCII символів

Для сортування рядків з не-ASCII символами, наприклад рядків з діакритичними знаками (e, é, è, a, ä, та ін.), чи рядків з інших мов, не англійської, використовуйте {{jsxref("String.localeCompare")}}. Ця функція дозволяє порівнювати саме такі символи, так що вони опиняться у вірній послідовності.

```js
var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items містить ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Сортування з `map`

Функція порівняння `compareFunction` може викликатися декілька разів на елемент масиву. Залежно від природи `compareFunction`, це може призвести до високих накладних витрат. Чим більше роботи виконує функція `compareFunction`, і чим більше елементів треба відсортувати, тим ефективніше буде застосувати [map](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/map) для сортування. Ідея полягає в тому, щоб перебрати масив один раз, щоб витягнути значення для сортування у тимчасовий масив, потім відсортувати тимчасовий масив, і далі перебрати тимчасовий масив іще раз, для отримання правильної послідовності.

```js
// масив, який треба відсортувати
const data = ['delta', 'alpha', 'charlie', 'bravo'];

// тимчасовий масив містить об'єкти з позицією елемента в оригінальному масиві, і значенням для сортування
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
})

// сортуємо тимчасовий масив, що містить уже обраховані значення
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map(v => data[v.i]);
```

Існує опенсорсна бібліотека [mapsort](https://null.house/open-source/mapsort), котра реалізовує такий підхід.

### Стабільність сортування

Починаючи з версії 10 (або EcmaScript 2019), [специфікація](https://tc39.es/ecma262/#sec-array.prototype.sort) постулює, що `Array.prototype.sort` дає стабільне сортування.

Для прикладу, скажімо, в нас є список студентів з їхніми оцінками. Зауважте, що цей список вже відсортований за іменами в алфавітному порядку:

```js
const students = [
  { name: "Alex",   grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
];
```

Після сортування цього масиву за полем `grade` у порядку зростання, маємо:

```js
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
```

Змінна з масивом `students` далі матиме наступне значення:

```js
[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Alex",   grade: 15 }, // збережено первісне сортування для однакових оцінок (стабільше сортування)
  { name: "Devlin", grade: 15 }, // збережено первісне сортування для однакових оцінок (стабільше сортування)
];
```

Важливо зауважити, що студенти, які мають однакові оцінки (для прикладу, Alex та Devlin), залишаться в тому ж порядку, що й перед сортуванням. Це те, що гарантує алгоритм стабільного сортування.

До версії 10 (чи EcmaScript 2019), стабільність сортування не гарантувалась, тобто могла трапитись наступна ситуація:

```js
[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Devlin", grade: 15 }, // первісне сортування не збережено
  { name: "Alex",   grade: 15 }, // первісне сортування не збережено
];
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Array.prototype.sort` з сучасною поведінкою (включно зі стабільним сортуванням) наявний в [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- [Про стабільність алгоритму, застосованого в рушії V8](https://v8.dev/blog/array-sort)
- [Стабільність сортування V8](https://v8.dev/features/stable-sort)
- [Демонстрація стабільності сортування від Mathias Bynens](https://mathiasbynens.be/demo/sort-stability)
