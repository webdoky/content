---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
page-type: javascript-statement
browser-compat: javascript.statements.for_of
---

{{jsSidebar("Statements")}}

Інструкція **`for...of`** виконує цикл, що обробляє послідовність значень, отриманих з [ітерованого об'єкта](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#protokol-iterovanoho-obiekta). До ітерованих об'єктів належать екземпляри вбудованих типів, як то {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{domxref("NodeList")}} (та інших колекцій DOM), а також об'єкт {{jsxref("Functions/arguments", "arguments")}}, породжені [генераторними функціями](/uk/docs/Web/JavaScript/Reference/Statements/function*) [генератори](/uk/docs/Web/JavaScript/Reference/Global_Objects/Generator) й визначені користувачем ітеровані об'єкти.

{{EmbedInteractiveExample("pages/js/statement-forof.html")}}

## Синтаксис

```js-nolint
for (variable of iterable)
  statement;
```

- `variable`
  - : На кожній ітерації отримує значення з послідовності. Повинно бути або оголошенням з [`const`](/uk/docs/Web/JavaScript/Reference/Statements/const), [`let`](/uk/docs/Web/JavaScript/Reference/Statements/let) чи [`var`](/uk/docs/Web/JavaScript/Reference/Statements/var), або ціллю [присвоєння](/uk/docs/Web/JavaScript/Reference/Operators/Assignment) (наприклад, попередньо визначеною змінною чи властивістю об'єкта). Змінні, оголошені з `var`, не є локальними щодо циклу, тобто перебувають в тій же області видимості, що й цикл `for...of`.
- `iterable`
  - : Ітерований об'єкт. Джерело послідовності значень, котрі обробляє цикл.
- `statement`
  - : Інструкція, котра буде виконана на кожній ітерації. Може звертатися до `variable`. Для виконання декількох інструкцій можна застосувати [блокову інструкцію](/uk/docs/Web/JavaScript/Reference/Statements/block).

## Опис

Цикл `for...of` обробляє значення, одне за одним отримані з ітерованого. Кожна обробка значення циклом зветься _ітерацією_, а цикл називають _ітеруванням ітерованого_. Кожна ітерація виконує інструкції, що можуть звертатися до поточного значення з послідовності.

Коли `for...of` ітерує ітероване, то спершу викликає метод ітерованого [`[@@iterator]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), котрий повертає [ітератор](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#protokol-iteratora), а потім раз за разом викликає метод результівного ітератора [`next()`](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#protokol-iteratora), аби отримати послідовність значень, що по черзі присвоюються `variable`.

Вихід з циклу `for...of` відбувається, коли завершується ітератор (коли метод ітератора `next()` повертає об'єкт, що містить `done: true`). Також для зміни звичайного ходу виконання можна використовувати інструкції контролю ходу виконання. [`break`](/uk/docs/Web/JavaScript/Reference/Statements/break) спричиняє вихід з циклу і перехід до першої інструкції після тіла циклу, натомість [`continue`](/uk/docs/Web/JavaScript/Reference/Statements/continue) призводить до пропуску решти інструкцій поточної ітерації та переходу до наступної ітерації.

Якщо з циклу `for...of` відбувається ранній вихід (наприклад, якщо зустрілася інструкція `break` чи була викинута помилка), то викликається метод [`return()`](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#protokol-iteratora), щоб виконати прибирання.

Частина `for...of` `variable` приймає що завгодно, що може стояти перед оператором `=`. Для оголошення змінної можна використовувати {{jsxref("Statements/const", "const")}}, якщо їй в тілі циклу не присвоюється нове значення (значення може змінюватися між ітераціями, адже це будуть окремі змінні). Інакше – можна застосувати {{jsxref("Statements/let", "let")}}.

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

> **Примітка:** Кожна ітерація породжує нову змінну. Присвоєння змінній нового значення всередині тіла циклу не вплине на вихідне значення ітерованого (в цьому випадку – масиву).

[Деструктурування](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) можна використати для присвоєння кількох локальних змінних, або використати аксесор властивості, як от `for (x.y of iterable)`, щоб присвоїти значення властивості об'єкта.

Проте особливе правило забороняє використовувати як ім'я змінної `async`. Наступний синтаксис – недійсний:

```js example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Таке правило запроваджено для уникнення неоднозначності синтаксису щодо дійсного коду `for (async of => {};;)`, котрий позначає цикл [`for`](/uk/docs/Web/JavaScript/Reference/Statements/for).

## Приклади

### Ітерування Array

```js
const iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### Ітерування рядка

Рядки є [ітерованими за кодовими точками Unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator).

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Ітерування TypedArray

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Ітерування Map

```js
const iterable = new Map([
  ["а", 1],
  ["б", 2],
  ["в", 3],
]);

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

### Ітерування Set

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Ітерування об'єкта `arguments`

Щоб дослідити усі параметри, передані до функції, можна виконати ітерування об'єкта {{jsxref("Functions/arguments", "arguments")}}:

```js
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}
foo(1, 2, 3);
// 1
// 2
// 3
```

### Ітерування NodeList

Наступний приклад додає клас `read` до абзаців, що є безпосередніми нащадками елемента [`<article>`](/uk/docs/Web/HTML/Element/article), шляхом ітерування колекції DOM [`NodeList`](/uk/docs/Web/API/NodeList).

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Ітерування ітерованого, визначеного користувачем

Ітерування об'єкта з методом `@@iterator`, що повертає самописний ітератор:

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};
for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

Ітерування об'єкта з генераторним методом `@@iterator`:

```js
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

_Ітеровані ітератори_ (ітератори з методом `[@@iterator]()`, що повертає `this`) є доволі поширеним підходом, щоб зробити ітератори застосовними в синтаксичних конструкціях, що очікують на ітеровані об'єкти, як то `for...of`.

```js
let i = 1;
const iterator = {
  next() {
    if (i <= 3) {
      return { value: i++, done: false };
    }
    return { value: undefined, done: true };
  },
  [Symbol.iterator]() {
    return this;
  },
};
for (const value of iterator) {
  console.log(value);
}
// 1
// 2
// 3
```

### Ітерування генератора

```js
function* source() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = source();
for (const value of generator) {
  console.log(value);
}
// 1
// 2
// 3
```

### Ранній вихід

Виконання інструкції `break` в першому циклі призведе до раннього виходу. Ітератор ще не завершений, тож другий цикл продовжить там, де зупинився перший.

```js
const source = [1, 2, 3];
const iterator = source[Symbol.iterator]();
for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("Цей рядок не буде виведений в консоль.");
}
// 1
// Іще один цикл, що використовує той самий ітератор,
// продовжує там, де зупинився попередній цикл.
for (const value of iterator) {
  console.log(value);
}
// 2
// 3
// Ітератор вичерправся.
// Цей цикл не виконає жодних ітерацій.
for (const value of iterator) {
  console.log(value);
}
// [Жодного виводу]
```

Генератори реалізовують метод [`return()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Generator/return), котрий змушує генераторну функцію виконувати раннє повернення, коли відбувається вихід з циклу. Це робить генератори непридатними для повторного використання в наступних циклах.

```js example-bad
function* source() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = source();
for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("Цей рядок не буде виведений в консоль.");
}
// 1
// Генератор вичерпався.
// Цей цикл не виконає жодних ітерацій.
for (const value of generator) {
  console.log(value);
}
// [Жодного виводу]
```

### Різниця між for...of і for...in

Як інструкція `for...in`, так інструкція `for...of` – щось ітерують. Основна різниця полягає в тому, що саме вони ітерують.

Інструкція {{jsxref("Statements/for...in", "for...in")}} ітерує [перелічувані рядкові властивості](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) об'єкта, натомість інструкція `for...of` ітерує значення, котрі [ітерований об'єкт](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#protokol-iterovanoho-obiekta) визначає для ітерування.

Наступний приклад демонструє різницю між циклом `for...of` та циклом `for...in` при застосуванні на {{jsxref("Array")}}.

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};
const iterable = [3, 5, 7];
iterable.foo = "агов";
for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"
for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"
for (const i of iterable) {
  console.log(i);
}
// 3 5 7
```

Об'єкт `iterable` успадковує властивості `objCustom` та `arrCustom`, адже має у своєму [ланцюжку прототипів](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) і `Object.prototype`, і `Array.prototype`.

Цикл `for...in` виводить лише [перелічувані властивості](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) об'єкта `iterable`. Він не виводить _елементи_ масиву, `3`, `5`, `7` чи `"агов"`, бо вони не є _властивостями_: вони є _значеннями_. Він виводить _індекси_ масиву, так само як `arrCustom` і `objCustom`, що є справжніми властивостями. Якщо немає певності в тому, чому ітеруються саме ці властивості — є більш поглиблене роз'яснення, як працюють [ітерування масиву та цикл `for...in`](/uk/docs/Web/JavaScript/Reference/Statements/for...in#iteruvannia-masyvu-i-tsykl-forin).

Другий цикл – подібний до першого, але він використовує {{jsxref("Object.hasOwn()")}}, аби перевіряти, чи є знайдена перелічувана властивість власною властивістю об'єкта, тобто не успадкованою. Якщо це так, то властивість виводиться. Властивості `0`, `1`, `2` і `foo` – виводяться, тому що є власними. Властивості `arrCustom` і `objCustom` не виводяться, бо є успадкованими.

Цикл `for...of` ітерує й виводить _значення_, котрі об'єкт `iterable`, як масив (а масиви є [ітерованими](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)), визначає для ітерування. Демонструються _елементи_ об'єкта – `3`, `5`, `7`, але жодна з _властивостей_ об'єкта.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}} – Знадобиться при використанні `for...of` для об'єктів.
