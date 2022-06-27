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

**Конструкція `for...of`** створює цикл, який виконує обхід [ітерованих обʼєктів](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol),
включаючи: вбудовані {{jsxref("String")}}, {{jsxref("Array")}},
масивоподібні обʼєкти (наприклад, {{jsxref("Functions/arguments", "arguments")}}
чи {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}},
{{jsxref("Set")}}, а також ітеровані обʼєкти, які користувач створив сам. Ця конструкція викликає описаний набір інструкцій, які будуть виконані для значення кожної властивості обʼєкту.

{{EmbedInteractiveExample("pages/js/statement-forof.html")}}

## Синтаксис

```js
for (variable of iterable) {
  statement
}
```

- `variable`
  - : На кожній ітерації значення різних властивостей присвоюються змінній `variable`. Ця `variable` може бути оголошеною з використанням `const`, `let`, чи `var`.
- `iterable`
  - : Обʼєкт, ітеровані властивості якого піддаються обходу.

## Приклади

### Обхід циклу по `Array`

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

Також можна використати {{jsxref("Statements/let", "let")}} замість {{jsxref("Statements/const", "const")}}, якщо всередині блоку виконується переприсвоєння змінної.

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

### Обхід циклу по `String`

```js
const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Обхід циклу по `TypedArray`

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Обхід циклу по `Map`

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

### Обхід циклу по `Set`

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Обхід циклу по обʼєкту `arguments`

Щоб дослідити усі параметри, передані до JavaScript функції, можна виконати обхід об‘єкту {{jsxref("Functions/arguments", "arguments")}}:

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

### Обхід циклу по DOM колекції

Ітерування по DOM колекціям, таким як [`NodeList`](/uk/docs/Web/API/NodeList): подальший приклад додає клас `read` до параграфів, які є прямими спадкоємцями елементу `article`:

```js
// Примітка: Це буде працювати виключно на тих платформах, які мають реалізацію 
// NodeList.prototype[Symbol.iterator]
const articleParagraphs = document.querySelectorAll('article > p');

for (const paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}
```

### Завершення ітераторів

У циклах `for...of` операторами `break`, `throw` та `return` може бути спричинено різке переривання ітерації. У таких випадках ітератор буде завершено.

```js
function* foo(){
  yield 1;
  yield 2;
  yield 3;
};

for (const o of foo()) {
  console.log(o);
  break; // завершує ітератор, виконання коду продовжується поза циклом
}
console.log('готово');
```

### Обхід циклу по генераторах

Також можна виконувати обхід [генераторів](/uk/docs/Web/JavaScript/Reference/Statements/function*), тобто функцій, які утворюють ітерований обʼєкт.

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

Генератори не варто використовувати кілька разів, навіть якщо цикл `for...of` закінчився завчасно, наприклад, зустрівши ключове слово {{jsxref("Statements/break", "break")}}. Під час виходу з циклу генератор закривається, подальші спроби обходити його знову не виведуть жодних значень.

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

// Цей самий ітератор не має бути використаний повторно, код нижче не має сенсу!
for (const o of gen) {
  console.log(o); // Ніколи не буде викликано.
}
```

### Обхід циклу по інших ітерованих об‘єктах

Також можна обходити об‘єкт, який явно реалізовує [ітеративний протокол](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#iterable):

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

Обидві конструкції, `for...in` і `for...of`, здатні щось обходити. Основна різниця в тому, що саме вони обходять.

{{jsxref("Statements/for...in", "for...in")}} виконує обхід [перелічуваних властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) обʼєкта.

`for...of` обходить значення, які [ітерований обʼєкт](/uk/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables) визначає як такі, котрі слід обходити.

Наступний приклад показує різницю між циклом `for...of` та циклом `for...in` при застосуванні до {{jsxref("Array")}.

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

Кожен обʼєкт успадковує властивість `objCustom`, а також – кожен обʼєкт, який є {{jsxref("Array")}}, успадковує властивість `arrCustom`, адже ці властивості були додані до {{jsxref("Object", "Object.prototype")}} і {{jsxref("Array", "Array.prototype")}}, відповідно. А обʼєкт `iterable` наслідує властивості `objCustom` і `arrCustom` у зв‘язку з [успадкуванням і ланцюжком прототипів](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

```js
for (const i in iterable) {
  console.log(i); // виведе 0, 1, 2, "foo", "arrCustom", "objCustom"
}
```

Цей цикл виведе лише [перелічувані властивості](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) обʼєкта `iterable`. Він не виведе **елементи** масиву: `3`, `5`, `7` чи `Агов`, адже вони **не є** перелічуваними властивостями; насправді вони не є властивостями взагалі, а лише **значеннями**. Код виведе масив **індексів**, включаючи `arrCustom` і `objCustom`. Якщо ви не певні, чому саме по цих властивостях відбувається ітерація, то зверніть увагу на більш детальне пояснення у статті {{jsxref("Statements/for...in", "array iteration and for...in", "#Array_iteration_and_for...in")}}.

```js
for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // виведе 0, 1, 2, "foo"
  }
}
```

Цей цикл подібний до першого, але натомість використовує {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}}, щоб перевірити чи належать перелічувані властивості до власних властивостей обʼєкта, а не успадкованих. Якщо належать, то вивести властивість. Властивості `0`, `1`, `2` та `foo` виведено, адже вони є власними властивостями (**не успадкованими**). Властивості `arrCustom` і `objCustom` не виведено, адже вони **успадковані**.

```js
for (const i of iterable) {
  console.log(i); // виведе 3, 5, 7
}
```

Цей цикл ітерує та виводить **значення**, які [ітерований обʼєкт](/uk/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables) визначає такими, що їх слід обходити. **Елементи** `3`, `5`, `7` виведено, а **властивості** -- ні.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}} – Знадобиться при використанні **`for...of`** для обʼєктів.
