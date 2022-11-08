---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.forEach
---

{{JSRef}}

Метод **`forEach()`** ("для кожного") виконує дану функцію один раз для кожного елементу масиву.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## Синтаксис

```js-nolint
// Стрілкова функція
forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })
forEach((element, index, array) => { /* … */ })

// Функція зворотного виклику
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Функція зворотного виклику, оголошена на місці
forEach(function(element) { /* … */ })
forEach(function(element, index) { /* … */ })
forEach(function(element, index, array){ /* … */ })
forEach(function(element, index, array) { /* … */ }, thisArg)
```

### Параметри

- `callbackFn`

  - : Функція, яку буде викликано на кожному елементі.

    Ця функція викликається із наступними аргументами:

    - `element`
      - : Поточний елемент масиву, який опрацьовується.
    - `index`
      - : Порядковий номер цього елементу в масиві.
    - `array`
      - : Власне масив, на якому було викликано `forEach()`.

- `thisArg` {{optional_inline}}
  - : Значення, яке буде підставлено як `this` під час виконання `callbackFn`.

### Результат

`undefined`.

## Опис

Метод `forEach()` викликає подану функцію `callbackFn` один раз для кожного елементу в масиві, у порядку зростання їх порядкового номера.

`callbackFn` закликається лише для тих індексів масиву, що мають присвоєні значення. Вона не закликається для порожніх комірок у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

Функція `callbackFn` викликається з трьома аргументами:

1. значення елементу
2. порядковий номер елементу
3. масив, на котрому викликано `forEach`

Якщо у `forEach()` задано параметр `thisArg`, його буде використано як значення `this` у функції зворотного виклику. В загальному випадку значення `this`, яке бачитиме функція `callback`, визначається згідно з [загальними правилами визначення значення `this`, доступного для функції](/uk/docs/Web/JavaScript/Reference/Operators/this).

Діапазон елементів, що опрацьовуються функцією `forEach()`, задається до першого виклику `callbackFn`. Елементи, які будуть присвоєні за індексами, що вже перебрані методом, або ж до індексів за межами цього діапазону, не будуть опрацьовані функцією `callbackFn`. Якщо наявні елементи змінюються чи видаляються, то до `callbackFn` буде передано їх фактичне значення на момент, коли функція `forEach()` їх опрацьовує. Ті елементи, які були видалені до того, як їх опрацювала функція, опрацьовані не будуть. Якщо елементи, які уже були опрацьовані, видаляються (наприклад, за допомогою {{jsxref("Array.prototype.shift()", "shift()")}}) під час проходження по масиву, наступні елементи буде пропущено. ([Дивіться цей приклад нижче](#zmina-masyvu-pid-chas-perebyrannia-yoho-elementiv).)

> **Застереження:** Одночасні модифікації такого типу, як описано в попередньому абзаці, часто приводять до коду, який важко зрозуміти. Загалом заведено уникати такого запису (крім особливих випадків).

Метод `forEach()` виконує функцію `callbackFn` один раз для кожного елементу в масиві, і на відміну від {{jsxref("Array.prototype.map()", "map()")}} чи
{{jsxref("Array.prototype.reduce()", "reduce()")}} він завжди повертає значення {{jsxref("undefined")}} і не придатний для ланцюгових викликів. Зазвичай його використовують для виконання побічних ефектів наприкінці ланцюжка викликів.

Метод `forEach()` не змінює масив, на якому він викликається. (Хоча
`callbackFn` може це робити)

Метод `forEach()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

> **Примітка:** Не існує способу зупинити або перервати цикл `forEach()` окрім
> як шляхом викидання винятку. Якщо вам потрібна можливість перервати цикл, метод `forEach()`
> для цього не підходить.
>
> Зупинка циклу до його завершення може бути досягнена шляхом використання:
>
> - Простого циклу [for](/uk/docs/Web/JavaScript/Reference/Statements/for)
> - Циклів [for...of](/uk/docs/Web/JavaScript/Reference/Statements/for...of)
>   або [for...in](/uk/docs/Web/JavaScript/Reference/Statements/for...in)
> - {{jsxref("Array.prototype.every()")}}
> - {{jsxref("Array.prototype.some()")}}
> - {{jsxref("Array.prototype.find()")}}
> - {{jsxref("Array.prototype.findIndex()")}}
>
> Методи масиву, як от {{jsxref("Array.prototype.every()", "every()")}},
> {{jsxref("Array.prototype.some()", "some()")}}, {{jsxref("Array.prototype.find()", "find()")}} і {{jsxref("Array.prototype.findIndex()", "findIndex()")}}, перевіряють
> елементи масиву за допомогою предикату, що повертає істинне значення, якщо
> продовження перебирання масиву є необхідним.

> **Примітка:** `forEach` приймає синхронну функцію.
>
> `forEach` не чекає на завершення промісів. Впевніться, що ви розумієте можливі наслідки
> передачі промісів (чи асинхронних функцій) в аргументах функції `forEach`.
>
> ```js
> const ratings = [5, 4, 5];
> let sum = 0;
>
> const sumFunction = async (a, b) => a + b;
>
> ratings.forEach(async (rating) => {
>   sum = await sumFunction(sum, rating);
> });
>
> console.log(sum);
> // Наївно очікуваний вивід: 14
> // Фактичний вивід: 0
> ```

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

Метод `forEach()` зчитує з `this` властивість `length`, а потім звертається до кожної цілочислової властивості.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
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
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
