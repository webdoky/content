---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
tags:
  - ECMAScript 2015
  - ES6
  - JavaScript
  - Language feature
  - Reference
  - Statement
browser-compat: javascript.statements.for_of
---
{{jsSidebar("Statements")}}

**Конструкція `for...of`** створює цикл, який ітерує
[ітеративні обʼєкти](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol),
включаючи: вбудовані {{jsxref("String")}}, {{jsxref("Array")}},
масивоподібні обʼєкти (на кшталт, {{jsxref("Functions/arguments", "arguments")}}
чи {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}},
{{jsxref("Set")}}, а також ітеративні обʼєкти, які користувач створив сам. Ця конструкція викликає описаний набір інструкцій, які будуть виконані для значення для кожної властивості обʼєкту.

{{EmbedInteractiveExample("pages/js/statement-forof.html")}}

## Синтаксис

```js
for (variable of iterable) {
  statement
}
```

`

- `variable`
  - : На кожній ітерації значення різних властивостей будуть призначатися у `variable`. `variable` може бути оголошеним з використанням `const`, `let`, чи `var`.
- `iterable`
  - : Обʼєкт, ітеровані властивості якого будуть ітеруватися.

## Приклади

### Ітерування по `Array`

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

Ви можете використовувати також {{jsxref("Statements/let", "let")}} замість {{jsxref("Statements/const",
  "const")}}, якщо робите повторне присвоєння цієї змінної всередині блоку.

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

### Ітерування по `String`

```js
const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Ітерування по `TypedArray`

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Ітерування по `Map`

```js
const iterable = new Map([['а', 1], ['б', 2], ['в', 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// ['а', 1]
// ['б', 2]
// ['в', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Ітерування по `Set`

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Ітерування по обʼєкту `arguments`

Ви можете ітерувати по обʼєкту {{jsxref("Functions/arguments", "arguments")}} щоб обстежити усі параметри передані до JavaScript функції:

```js
(function() {
  for (const argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3
```

### Ітерування по DOM колекції

Ітерування по DOM колекціям, таким як [`NodeList`](/en-US/docs/Web/API/NodeList): подальший приклад додає клас `read` до параграфів, які є прямими спадкоємцями елементу `article`:

```js
// Зазначте: Це буде працювати виключно на платформах, які мають реалізацію для 
// NodeList.prototype[Symbol.iterator]
const articleParagraphs = document.querySelectorAll('article > p');

for (const paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}
```

### Завершення ітераторів

У `for...of` циклах, різке переривання ітерації може бути спричинене операторами `break`, `throw` чи `return`. У таких випадках ітератор буде завершено.

```js
function* foo(){
  yield 1;
  yield 2;
  yield 3;
};

for (const o of foo()) {
  console.log(o);
  break; // завершує ітератор, продовжується виконання коду поза конструкцією циклу
}
console.log('готово');
```

### Ітерування по генераторах

Також ви можете ітерувати [генератори](/en-US/docs/Web/JavaScript/Reference/Statements/function*), тобто функції, які генерують ітерований обʼєкт.

```js
function* fibonacci() { // функція-генератор
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (const n of fibonacci()) {
  console.log(n);
  // зупинити послідовність на 1000
  if (n >= 1000) {
    break;
  }
}
```

#### Не слід повторно використовувати генератори

Генератори не варто використовувати кілька разів, навіть, якщо цикл `for...of` закінчився завчасно, наприклад, через ключове слово {{jsxref("Statements/break", "break")}}. Під час виходу з циклу, генератор закривається та подальші спроби ітерувати його знову не виведуть жодних значень.

```js example-bad
const gen = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (const o of gen) {
  console.log(o);
  break;  // Завершує ітератор
}

// Цей самий ітератор не має бути використаний повторно, подальший код не має сенсу!
for (const o of gen) {
  console.log(o); // Ніколи не буде викличено.
}
```

### Ітерування по інших ітеративних обʼєктах

Ви можете також ітерувати по обʼєкту, який явно реалізовує [ітеративний протокол](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable):

```js
const iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
```

### Різниця між `for...of` та `for...in`

Обидві конструкції `for...in` та `for...of` здатні ітерувати по чомусь.
Основна різниця в тому "що" вони ітерують.

{{jsxref("Statements/for...in", "for...in")}} ітерує по [зліченних властивостях](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) обʼєкта.

`for...of` ітерує значення, які [ітеративний обʼєкт](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables) визначає як такі які можна ітерувати.

Наступний приклад показує різницю між циклом `for...of` та циклом
`for...in` при застосуванні до {{jsxref("Array")}.

```js
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'Агов';

for (const i in iterable) {
  console.log(i); // виведе "0", "1", "2", "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // виведе "0", "1", "2", "foo"
  }
}

for (const i of iterable) {
  console.log(i); // виведе 3, 5, 7
}
```

Розгляньмо код, зазначений вище, крок за кроком.

```js
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'Агов';
```

Кожен обʼєкт успадковує властивість `objCustom`, а також, кожен обʼєкт, який є {{jsxref("Array")}} успадковує властивість `arrCustom`, адже ці властивості були додані до {{jsxref("Object", "Object.prototype")}} і {{jsxref("Array", "Array.prototype")}}, відповідно. А обʼєкт `iterable` наслідує властивості `objCustom` і `arrCustom` через [ланцюжок наслідування від прототипів](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

```js
for (const i in iterable) {
  console.log(i); // виведе 0, 1, 2, "foo", "arrCustom", "objCustom"
}
```

Цей цикл виведе лише [зліченні властивості](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) обʼєкта `iterable`. Він не виведе масив **елементи** `3`, `5`, `7` чи
`Агов`, адже вони **не є** зліченними властивостями, насправді вони не є властивостями взагалі, вони є **значеннями**. Код виведе масив **індексів** включаючи `arrCustom` і `objCustom`. Якщо ви не певні чому саме по цим властивостям відбувається ітерація, то існує більш детальне пояснення у статті {{jsxref("Statements/for...in", "array iteration and for...in", "#Array_iteration_and_for...in")}}.

```js
for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // виведе 0, 1, 2, "foo"
  }
}
```

Цей цикл подібний до першого, але натомість використовує {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}}, щоб перевірити чи зліченні властивості належать до власних властивостей обʼєкта, а не наслідуваних. Якщо належать, то вивести властивість. Властивості `0`, `1`, `2` та `foo` виведено, адже вони є власними властивостями(**не успадковані**). Властивості `arrCustom` і `objCustom` не виведено, адже вони **успадковані**.

```js
for (const i of iterable) {
  console.log(i); // виведе 3, 5, 7
}
```

Цей цикл ітерує та виводить **значення**, які [ітеративний обʼєкт](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables), визначає такими, що їх можна ітерувати, `iterable`. **Елементи**
`3`, `5`, `7` виведено, а **властивості** -- ні.

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}} – Знадобиться при використанні **`for...of`** для обʼєктів.
