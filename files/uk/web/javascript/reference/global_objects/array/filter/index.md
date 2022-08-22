---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.filter
---

{{JSRef}}

Метод **`filter()`** (фільтрувати) створює [поверхневу копію](/uk/docs/Glossary/Shallow_copy) частини даного масиву, відфільтрованого до тих елементів даного масиву, що проходять перевірку, реалізовану в переданій функції.

{{EmbedInteractiveExample("pages/js/array-filter.html","shorter")}}

## Синтаксис

```js
// Стрілкова функція
filter((element) => {
  /* … */
});
filter((element, index) => {
  /* … */
});
filter((element, index, array) => {
  /* … */
});

// Функція зворотного виклику
filter(callbackFn);
filter(callbackFn, thisArg);

// Функція зворотного виклику, яка оголошена на місці
filter(function (element) {
  /* … */
});
filter(function (element, index) {
  /* … */
});
filter(function (element, index, array) {
  /* … */
});
filter(function (element, index, array) {
  /* … */
}, thisArg);
```

### Параметри

- `callbackFn`

  - : Функція-предикат для перевірки кожного з елементів масиву. Повертає значення, що або обчислюється до `true` і зберігає елемент, або зводиться до `false` із протилежним результатом.

    Ця функція викликається із наступними аргументами:

    - `element`
      - : Поточний елемент масиву, що опрацьовується функцією.
    - `index`
      - : Індекс елементу, що опрацьовується.
    - `array`
      - : Початковий масив, на якому було викликано функцію `filter()`.

- `thisArg` {{optional_inline}}
  - : Значення, що буде підставлено як `this` під час виконання `callbackFn`.

### Повернене значення

[Поверхнева копія](/uk/docs/Glossary/Shallow_copy) частини даного масиву, відфільтрована до елементів даного масиву, що проходять перевірку, реалізовану в переданій функції. Якщо жодний елемент не пройшов перевірку, повертається порожній масив.

## Опис

`filter()` викликає передану як аргумент функцію `callbackFn` один раз для кожного елемента масиву і збирає новий масив з усіх значень, для яких функція `callbackFn` повернула [значення, що зводиться до `true`](/uk/docs/Glossary/Truthy). `callbackFn` викликається лише на тих індексах масиву, які мають присвоєні значення. Відповідно, вона не викликається на видалених значеннях, чи на індексах, які ніколи не мали присвоєних значень. Ті елементи масиву, які не пройшли перевірку функцією `callbackFn`, пропускаються і не додаються у новий масив.

Функція `callbackFn` викликається з трьома аргументами:

1. значення елементу
2. порядковий номер елементу в масиві
3. власне об'єкт масиву, над яким виконується фільтрація

Якщо методу `filter` надається параметр `thisArg`, його буде використано як значення `this`. Інакше – `this` матиме значення `undefined`. Однак загалом значення `this`, яке отримає функція `callbackFn`, визначається згідно з [загальними правилами визначення значення `this`, доступного для функції](/uk/docs/Web/JavaScript/Reference/Operators/this).

Метод `filter()` не змінює початковий масив, на якому його викликають.

Діапазон елементів, що опрацьовуються функцією `filter()`, задається до першого виклику `callbackFn`. Елементи, які будуть додані до масиву (наприклад, в процесі виконання `callbackFn`) після початку роботи методу `filter()`, не будуть опрацьовані функцією `callbackFn`. Якщо ж наявні елементи будуть видалені в такий самий спосіб, вони також не будуть опрацьовані.

> **Застереження:** Одночасні модифікації такого типу, як описано в попередньому абзаці, часто приводять до коду, який важко зрозуміти. Загалом заведено уникати такого запису (крім особливих випадків).

## Поліфіл

Метод `filter()` було додано до стандарту ECMA-262 у його 5-й редакції. Тобто, він може бути наявним не у всіх реалізаціях цього стандарту.

Цю проблему можна обійти шляхом додавання наступного коду на початку скрипту. Фактично це дасть змогу використовувати `filter()` у реалізаціях ECMA-262, які не підтримують його нативно. Цей алгоритм цілком еквівалентний наведеному в 5-й редакції ECMA-262 за умови, що `fn.call` зводиться до початкового значення {{jsxref("Function.prototype.bind()")}} і що {{jsxref("Array.prototype.push()")}} містить своє початкове значення.

```js
if (!Array.prototype.filter) {
  Array.prototype.filter = function (func, thisArg) {
    'use strict';
    if (!((typeof func === 'Function' || typeof func === 'function') && this))
      throw new TypeError();

    var len = this.length >>> 0,
      res = new Array(len), // заздалегідь створюємо новий масив
      t = this,
      c = 0,
      i = -1;

    var kValue;
    if (thisArg === undefined) {
      while (++i !== len) {
        // перевіряємо, чи масив має якесь значення за даним індексом
        if (i in this) {
          kValue = t[i]; // на випадок, якщо t міняється всередині функції зворотного виклику
          if (func(t[i], i, t)) {
            res[c++] = kValue;
          }
        }
      }
    } else {
      while (++i !== len) {
        // перевіряємо, чи масив має якесь значення за даним індексом
        if (i in this) {
          kValue = t[i];
          if (func.call(thisArg, t[i], i, t)) {
            res[c++] = kValue;
          }
        }
      }
    }

    res.length = c; // скорочуємо масив до його дійсного розміру
    return res;
  };
}
```

## Приклади

### Відфільтровування малих значень

Наступний приклад за допомогою `filter()` створює масив відфільтрованих значень, до якого не потраплять числа, менші за `10`.

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// відфільтрований результат має [12, 130, 44]
```

### Знаходження всіх простих чисел у масиві

Наступний приклад повертає всі прості числа, які є в масиві:

```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

### Відсіювання некоректних елементів із JSON

Наступний приклад за допомогою `filter()` створює відфільтрований набір елементів, що містять ненульовий числовий `id`, записаних об'єктною нотацією.

```js
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log('Відфільтрований масив\n', arrByID);
// Відфільтрований масив
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Кількість некоректних значень = ', invalidEntries);
// Кількість некоректних значень = 5
```

### Пошук у масиві

Наступний приклад за допомогою `filter()` фільтрує вміст масиву за певним критерієм пошуку.

```js
const fruits = ['яблуко', 'банан', 'виноград', 'манго', 'апельсин'];

/**
 * Фільтрує елементи масиву за певним критерієм пошуку (запиту)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'ан')); // ['банан', 'манго']
console.log(filterItems(fruits, 'ин')); // ['виноград', 'апельсин']
```

### Внесення змін до початкового масиву (зміна, додавання і видалення елементів)

Наступний приклад перевіряє поведінку методу `filter` під час внесення змін до масиву.

```js
// Змінювання кожного слова
let words = ['спрей', 'межа', 'розкішний', 'згуба', 'еліта', 'дарунок'];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += ' екстра';
  return word.length < 6;
});

console.log(modifiedWords);
// Зверніть увагу, в масиві є три слова з довжиною до 6 літер, але оскільки всі наступні змінюються, в результаті отримуємо лише одне
// ["спрей"]

// Додавання нових слів
let words = ['спрей', 'межа', 'розкішний', 'згуба', 'еліта', 'дарунок'];
const appendedWords = words.filter((word, index, arr) => {
  arr.push('новий');
  return word.length < 6;
});

console.log(appendedWords);
// Лише три слова проходять перевірку, хоча масив 'words' тепер має значно більше слів, що містять до 6 літер
// ["спрей", "межа", "згуба", "еліта"]

// Видалення слів
let words = ['спрей', 'межа', 'розкішний', 'згуба', 'еліта', 'дарунок'];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// Слово 'еліта' взагалі не потрапляє до масиву з результатами, позаяк воно викидається з `words` до того, як фільтр добереться до нього
// ["спрей" ,"межа"]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл методу `Array.prototype.filter` у `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.find()")}}
