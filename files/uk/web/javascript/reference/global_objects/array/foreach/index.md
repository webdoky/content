---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.forEach
---

{{JSRef}}

Метод **`forEach()`** ("для кожного") примірників {{jsxref("Array")}} виконує передану функцію один раз для кожного елементу масиву.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## Синтаксис

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Параметри

- `callbackFn`
  - : Функція до виконання для кожного елемента масиву. Її повернене значення - відкидається. Ця функція викликається із наступними аргументами:
    - `element`
      - : Поточний елемент масиву, який опрацьовується.
    - `index`
      - : Індекс поточного елемента масиву, що опрацьовується.
    - `array`
      - : Власне масив, на якому було викликано `forEach()`.
- `thisArg` {{optional_inline}}
  - : Значення для використання за `this` при виконанні `callbackFn`. Докладніше про це в [ітеративних методах](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

### Результат

{{jsxref("undefined")}}.

## Опис

Метод `forEach()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він викликає передану функцію `callbackFn` на кожному елементі масиву, в порядку зростання індексів. На відміну від {{jsxref("Array.prototype.map()", "map()")}}, `forEach()` завжди повертає {{jsxref("undefined")}} і не може бути проміжною ланкою ланцюжка. Типове його використання – для виконання побічних ефектів у кінці ланцюжка.

`callbackFn` закликається лише для тих індексів масиву, що мають присвоєні значення. Вона не закликається для порожніх комірок у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

`forEach()` не видозмінює масиву, на котрому його викликали, але функція, передана як `callbackFn`, може це робити. Проте слід звернути увагу, що довжина масиву запам'ятовується _до_ першого заклику `callbackFn`. Таким чином:

- `callbackFn` не оброблятиме жодних елементів, доданих поза початковою довжиною масиву, відколи почався виклик `forEach()`.
- Зміни за вже обробленими індексами не призводять до повторного заклику на них `callbackFn`.
- Якщо наявний, іще не оброблений елемент масиву вже був змінений `callbackFn`, то його значення, передане в `callbackFn`, буде значенням на ту мить, коли такий елемент обробляється. [Видалені](/uk/docs/Web/JavaScript/Reference/Operators/delete) елементи – не обробляються.

> **Застереження:** Одночасні модифікації такого типу, як описано в попередньому абзаці, часто приводять до коду, який важко зрозуміти. Загалом заведено уникати такого запису (крім особливих випадків).

Метод `forEach()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

Немає іншого способу зупинити чи перервати цикл `forEach()`, окрім викидання винятку. Якщо потрібна логіка з перериванням, то метод `forEach()` – негодящий інструмент.

Раннього завершення можна досягнути з інструкціями циклів, як то [`for`](/uk/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/uk/docs/Web/JavaScript/Reference/Statements/for...of) і [`for...in`](/uk/docs/Web/JavaScript/Reference/Statements/for...in). Методи масивів, як то {{jsxref("Array/every", "every()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/find", "find()")}} і {{jsxref("Array/findIndex", "findIndex()")}, також відразу зупиняють ітерацію, коли подальше ітерування стає непотрібним.

`forEach()` розраховує на синхронну функцію: він не очікує на проміси. Слід взяти до уваги можливі наслідки при використанні промісів (чи асинхронних функцій) у функціях зворотного виклику для `forEach`.

```js
const ratings = [5, 4, 5];
let sum = 0;
const sumFunction = async (a, b) => a + b;
ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});
console.log(sum);
// Наївно очікуваний вивід: 14
// Фактичний вивід: 0
```

Про виконання низки асинхронних операцій, послідовно чи паралельно, дивіться [композицію промісів](/uk/docs/Web/JavaScript/Guide/Using_promises#kompozytsiia).

## Приклади

### Використання forEach() на розріджених масивах

```js
<!-- markdownlint-disable-next-line -->
const arraySparse = [1, 3, /* пропуск */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }
```

Функція зворотного виклику не закликається для пропущеного значення за індексом 2.

### Перетворення циклу for на forEach

```js
const items = ["item1", "item2", "item3"];
const copyItems = [];

// до
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// після
items.forEach((item) => {
  copyItems.push(item);
});
```

### Друк вмісту масиву

> **Примітка:** Щоб показати вміст масиву у консолі, можна застосувати метод {{domxref("console/table", "console.table()")}}, який друкує відформатований варіант масиву.
>
> Приклад далі ілюструє альтернативний підхід, із застосуванням `forEach()`.

Наступний код друкує рядок для кожного елементу в масиві:

```js
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// Зауважте, що порядковий номер 2 пропущено, оскільки в масиві не існує
// елементу на цій позиції.
[2, 5, , 9].forEach(logArrayElements);
// Друкує:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### Застосування thisArg

Наступний (надуманий) приклад оновлює властивості об'єкта, з урахуванням поданих елементів масиву:

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Лише вирази функцій матимуть власне зв'язування this
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

Оскільки параметр `thisArg` (`this`) було задано в `forEach()`, він передавався до функції `callback` кожного разу, коли вона викликалась. Сама функція зворотного виклику використовує те саме значення `this`.

> **Примітка:** Якщо передачу функції зворотного виклику було використано із застосуванням виразу
> [стрілкової функції](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions), то значення параметра `thisArg` можна опустити,
> оскільки всі стрілкові функції прив'язують значення {{jsxref("Operators/this", "this")}}
> лексично.

### Функція копіювання об'єкта

Наступний код створює копію поданого об'єкта.

Існують різні способи створити копію об'єкта. Спосіб, що наведено нижче - це лише один із них, покликаний показати, як працює `Array.prototype.forEach()` шляхом використання службових функцій `Object.*`.

```js
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 тепер має точнісінько такий самий вигляд, як obj1
```

### Зміна масиву під час перебирання його елементів

Наступний приклад друкує `one`, `two`, `four`.

Коли в процесі перебору елементів функція підходить до значення `two`, перший елемент цілого масиву витісняється з нього. В результаті всі елементи, що залишилися, зміщуються на одну позицію вліво. Оскільки елемент `four` тепер займає лівішу позицію, елемент `three` пропускається.

Метод `forEach()` не робить копію масиву перед перебиранням.

```js
const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); // елемент 'one' видаляється з масиву
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
```

### Сплощення масиву

Приклад нижче наведено лише для навчальних потреб. Для сплощення масивів вбудованими методами можна застосовувати {{jsxref("Array.prototype.flat()")}}.

```js
const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// Застосування
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Виклик forEach() на об'єктах-немасивах

Метод `forEach()` зчитує з `this` властивість `length`, а потім звертається до кожної властивості, чий ключ – невід'ємне ціле число, менше за `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ігнорується forEach(), оскільки length – 3
};
Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
// 2
// 3
// 4
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Array.prototype.forEach` у `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
