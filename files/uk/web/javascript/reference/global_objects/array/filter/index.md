---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.filter
---

{{JSRef}}

Метод **`filter()`** (фільтрувати) примірників {{jsxref("Array")}} створює [поверхневу копію](/uk/docs/Glossary/Shallow_copy) частини даного масиву, відфільтрованого до тих елементів даного масиву, що проходять перевірку, реалізовану в переданій функції.

{{EmbedInteractiveExample("pages/js/array-filter.html", "shorter")}}

## Синтаксис

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### Параметри

- `callbackFn`
  - : Функція до виконання над кожним елементом у масиві. Вона повинна повертати [істинне](/uk/docs/Glossary/Truthy) значення, щоб зберегти елемент у результівному масиві, а інакше – [хибне](/uk/docs/Glossary/Falsy). Ця функція викликається із наступними аргументами:
    - `element`
      - : Поточний елемент масиву, що опрацьовується функцією.
    - `index`
      - : Індекс елементу, що опрацьовується.
    - `array`
      - : Початковий масив, на якому було викликано `filter()`.
- `thisArg` {{optional_inline}}
  - : Значення для використання як `this` при виконанні `callbackFn`. Більше про це в [ітеративних методах](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

### Повернене значення

[Поверхнева копія](/uk/docs/Glossary/Shallow_copy) переданого масиву, що містить лише ті елементи, котрі проходять перевірку. Якщо жоден елемент не проходить перевірку, то повертається порожній масив.

## Опис

Метод `filter()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він викликає передану як аргумент функцію `callbackFn` один раз для кожного елемента масиву і збирає новий масив з усіх значень, для яких функція `callbackFn` повернула [істинне](/uk/docs/Glossary/Truthy) значення. Ті елементи масиву, які не пройшли перевірку функцією `callbackFn`, не додаються у новий масив.

`callbackFn` закликається лише на тих індексах масиву, які мають присвоєні значення. Вона не закликається для порожніх комірок в [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

Метод `filter()` є [копіювальним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#kopiiuvalni-ta-zminiuvalni-metody). Він не вносить змін до `this`, а натомість повертає [поверхневу копію](/uk/docs/Glossary/Shallow_copy), котра містить ті самі елементи, що присутні у вихідному масиві (виключивши частину з них). Проте функція, передана як `callbackFn`, може змінювати масив. Хоча зверніть увагу, що довжина масиву запам'ятовується _до_ моменту першого заклику `callbackFn`. Таким чином:

- `callbackFn` не оброблятиме жодних елементів, доданих поза початковою довжиною масиву, відколи почався виклик `filter()`.
- Зміни за вже обробленими індексами не призводять до повторного заклику на них `callbackFn`.
- Якщо наявний, іще не оброблений елемент масиву вже був змінений `callbackFn`, то його значення, передане в `callbackFn`, буде значенням на ту мить, коли такий елемент обробляється. [Видалені](/uk/docs/Web/JavaScript/Reference/Operators/delete) елементи – не обробляються.

> **Застереження:** Паралельні зміни такого роду, як описано вище, часто призводять до важкозрозумілого коду, і їх загалом краще уникати (окрім особливих випадків).

## Поліфіл

Метод `filter()` було додано до стандарту ECMA-262 у його 5-й редакції. Тобто, він може бути наявним не у всіх реалізаціях цього стандарту.

Цю проблему можна обійти шляхом додавання наступного коду на початку скрипту. Фактично це дасть змогу використовувати `filter()` у реалізаціях ECMA-262, які не підтримують його нативно. Цей алгоритм цілком еквівалентний наведеному в 5-й редакції ECMA-262 за умови, що `fn.call` зводиться до початкового значення {{jsxref("Function.prototype.bind()")}} і що {{jsxref("Array.prototype.push()")}} містить своє початкове значення.

```js
if (!Array.prototype.filter) {
  Array.prototype.filter = function (func, thisArg) {
    "use strict";
    if (!((typeof func === "Function" || typeof func === "function") && this))
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

Метод `filter()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` має властивість `length`, а також властивості з цілочисловими ключами.

## Приклади

### Відфільтровування малих значень

Наступний приклад за допомогою `filter()` створює масив відфільтрованих значень, до якого не потраплять числа, менші за 10.

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
  { id: "undefined" },
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

console.log("Відфільтрований масив\n", arrByID);
// Відфільтрований масив
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Кількість некоректних значень =", invalidEntries);
// Кількість некоректних значень = 5
```

### Пошук у масиві

Наступний приклад за допомогою `filter()` фільтрує вміст масиву за певним критерієм пошуку.

```js
const fruits = ["яблуко", "банан", "виноград", "манго", "апельсин"];

/**
 * Фільтрує елементи масиву за певним критерієм пошуку (запиту)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ан")); // ['банан', 'манго']
console.log(filterItems(fruits, "ин")); // ['виноград', 'апельсин']
```

### Використання filter() на розріджених масивах

`filter()` пропустить порожні комірки.

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### Виклик filter() на об'єктах-немасивах

Метод `filter()` зчитує з `this` властивість `length`, а потім звертається до кожної властивості, чий ключ – невід'ємне ціле число, менше за `length`.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // ігнорується filter(), оскільки length – 3
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b")); // [ 'a', 'b' ]
```

### Внесення змін до початкового масиву (зміна, додавання і видалення елементів)

Наступний приклад перевіряє поведінку методу `filter` під час внесення змін до масиву.

```js
// Змінювання кожного слова
let words = ["спрей", "межа", "розкішний", "згуба", "еліта", "дарунок"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " екстра";
  return word.length < 6;
});

console.log(modifiedWords);
// Зверніть увагу, в масиві є три слова з довжиною до 6 літер, але оскільки всі наступні змінюються, в результаті отримуємо лише одне
// ["спрей"]

// Додавання нових слів
let words = ["спрей", "межа", "розкішний", "згуба", "еліта", "дарунок"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("новий");
  return word.length < 6;
});

console.log(appendedWords);
// Лише три слова проходять перевірку, хоча масив 'words' тепер має значно більше слів, що містять до 6 літер
// ["спрей", "межа", "згуба", "еліта"]

// Видалення слів
let words = ["спрей", "межа", "розкішний", "згуба", "еліта", "дарунок"];
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

- [Поліфіл методу `Array.prototype.filter` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
