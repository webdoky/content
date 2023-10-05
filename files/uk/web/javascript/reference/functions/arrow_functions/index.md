---
title: Вирази стрілкових функцій
slug: Web/JavaScript/Reference/Functions/Arrow_functions
page-type: javascript-language-feature
browser-compat: javascript.functions.arrow_functions
---

{{jsSidebar("Functions")}}

**Вираз стрілкової функції** — це компактна альтернатива традиційному [виразові функції](/uk/docs/Web/JavaScript/Reference/Operators/function), що має певні семантичні відмінності й свідомі обмеження у використанні:

- Стрілкові функції не мають власних {{Glossary("binding", "зв'язувань")}} [`this`](/uk/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments) та [`super`](/uk/docs/Web/JavaScript/Reference/Operators/super), і їх не слід використовувати як [методи](/uk/docs/Glossary/Method).
- Стрілкові функції не можуть використовуватися як [конструктори](/uk/docs/Glossary/Constructor). Виклик їх з [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new) викидає {{jsxref("TypeError")}}. Крім цього, вони не мають доступу до ключового слова [`new.target`](/uk/docs/Web/JavaScript/Reference/Operators/new.target)
- Стрілкові функції не можуть використовувати у своєму тілі [`yield`](/uk/docs/Web/JavaScript/Reference/Operators/yield) і не можуть створюватися як генераторні функції.

{{EmbedInteractiveExample("pages/js/functions-arrow.html")}}

## Синтаксис

```js-nolint
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

[Решта параметрів](/uk/docs/Web/JavaScript/Reference/Functions/rest_parameters), [усталені параметри](/uk/docs/Web/JavaScript/Reference/Functions/Default_parameters) й [деструктурування](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) у параметрах – підтримуються, але завжди вимагають присутності дужок:

```js-nolint
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
```

Стрілкові функції можуть бути [асинхронними](/uk/docs/Web/JavaScript/Reference/Statements/async_function), коли на початку виразу такої функції стоїть ключове слово `async`.

```js-nolint
async param => expression
async (param1, param2, ...paramN) => {
  statements
}
```

## Опис

Розберімо традиційну анонімну функцію до найпростішої стрілкової функції, крок за кроком. Кожний крок на шляху є дійсною стрілковою функцією.

> **Примітка:** Вирази традиційних функцій та стрілкові функції мають більше відмінностей, ніж сам їх синтаксис. Більш детально різниця в логіці розкривається в кількох наступних підрозділах.

```js
// Традиційна анонімна функція
function (a){
  return a + 100;
}

// Спрощення стрілкової функції

// 1. Приберемо слово "function" і додамо стрілку між аргументом і дужкою початку тіла функції
(a) => {
  return a + 100;
}

// 2. Приберемо дужки навколо тіла функції і слово "return": так зване неявне повернення результату.
(a) => a + 100;

// 3. Приберемо дужки навколо параметра
a => a + 100;
```

У прикладі вище і дужки навколо параметра, і фігурні дужки навколо тіла функції – можуть бути опущені. Проте – лише за певних умов.

Дужки можна опустити лише в тому випадку, якщо функція має єдиний простий параметр. Якщо передано декілька аргументів, жодного, або використано усталене, деструктуроване значення, чи решту параметрів – то дужки навколо списку параметрів обов'язкові.

```js
// Традиційна анонімна функція
function (a, b){
  return a + b + 100;
}

// Стрілкова функція
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Традиційна анонімна функція (без параметрів)
(function (){
  return a + b + 100;
})

// Стрілкова функція (без параметрів)
() => a + b + 100;
```

Фігурні дужки можуть бути опущені лише за умови того, що функція безпосередньо повертає вираз. Якщо тіло має додаткові рядки до обробки, то фігурні дужки необхідні – як і ключове слово `return`. Стрілкові функції не можуть вгадувати, що й коли автор коду хоче повернути.

```js
// Традиційна анонімна функція
function (a, b){
  const chuck = 42;
  return a + b + chuck;
}

// Стрілкова функція
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
}
```

Стрілкові функції – завжди безіменні. Якщо стрілковій функції треба викликати саму себе, слід натомість використовувати іменований вираз функції. Крім цього, можна присвоїти стрілкову функцію змінній, аби вона мала ім'я.

```js
// Традиційна функція
function bob(a) {
  return a + 100;
}

// Стрілкова функція
const bob2 = (a) => a + 100;
```

### Тіло функції

Стрілкові функції можуть мати або _тіло-вираз_, або звичайне _блокове тіло_.

У тілі-виразі задається лише один вираз, котрий стає неявно поверненим значенням. У блоковому тілі слід використовувати явну інструкцію `return`.

```js
const func = (x) => x * x;
// синтаксис тіла-виразу, неявний "return"
const func2 = (x, y) => {
  return x + y;
};
// у блоковому тілі потрібен явний "return"
```

Повертання літералів об'єктів за допомогою синтаксису тіла-виразу `(params) => { object: literal }` не працює так, як очікувано.

```js-nolint example-bad
const func = () => { foo: 1 };
// Виклик func() повертає undefined!
const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name
const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
```

Так відбувається через те, що JavaScript впізнає стрілкову функцію як таку, що має тіло-вираз, лише якщо знак після стрілки не є лівою фігурною дужкою, тож код всередині фігурних дужок обробляється як послідовність інструкцій, у якій `foo` є [міткою](/uk/docs/Web/JavaScript/Reference/Statements/label), а не ключем літерала об'єкта.

Аби це виправити, слід загорнути літерал об'єкта в дужки:

```js example-good
const func = () => ({ foo: 1 });
```

### Не можуть використовуватися як методи

Вирази стрілкових функцій слід застосовувати лише для тих функцій, які не є методами, оскільки вони не мають свого власного `this`. Погляньмо, що трапиться, якщо спробувати використати їх як методи:

```js
"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // виводить undefined, Window { /* … */ } (або глобальний об'єкт)
obj.c(); // виводить 10, Object { /* … */ }
```

Ось іще один приклад, цього разу із застосуванням {{jsxref("Object.defineProperty()")}}:

```js
"use strict";

const obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (або глобальний об'єкт)
    return this.a + 10; // звертається до глобального об'єкту 'Window', а отже – 'this.a' поверне 'undefined'
  },
});
```

Через те, що тіло [класу](/uk/docs/Web/JavaScript/Reference/Classes) має контекст `this`, стрілкові функції як [поля класу](/uk/docs/Web/JavaScript/Reference/Classes/Public_class_fields) замикаються на контекст `this` класу, і `this` всередині тіла стрілкової функції коректно вказуватиме на примірник (чи, для [статичних полів](/uk/docs/Web/JavaScript/Reference/Classes/static), на сам клас). Втім, через те, що це [замикання](/uk/docs/Web/JavaScript/Closures), а не власна прив'язка функції, значення `this` не змінюватиметься залежно від контексту виконання.

```js
class C {
  a = 1;
  autoBoundMethod = () => {
    console.log(this.a);
  };
}
const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
autoBoundMethod(); // 1
// Якби це був звичайний метод, мало б бути undefined
```

Властивості зі стрілковими функціями часто звуть "автоматично прив'язаними методами", бо еквівалентом зі звичайними методами є:

```js
class C {
  a = 1;
  constructor() {
    this.method = this.method.bind(this);
  }
  method() {
    console.log(this.a);
  }
}
```

> **Примітка:** Поля класу визначаються на _примірнику_, не на прототипі, тож кожне створення примірника створить нову функцію та виділить нове замикання, потенційно призводячи до більшого використання пам'яті, ніж звичайний, неприв'язаний метод.

З подібних причин методи [`call()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) і [`bind()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) не дають користі, бувши викликаними на стрілкових функціях, адже стрілкова функція отримує `this` на основі області видимості, всередині якої вона визначена, і значення `this` не змінюється залежно від того, як ця функція закликана.

### Відсутність прив'язки `arguments`

Стрілкові функції не мають власного об'єкта [`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments). Тому в наступному прикладі `arguments` посилається на аргументи зовнішнього контексту:

```js
function foo(n) {
  const f = () => arguments[0] + n; // неявна прив'язка до аргументів функції foo. arguments[0] дорівнює n
  return f();
}

foo(3); // 3 + 3 = 6
```

> **Примітка:** В [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode#sproshchennia-eval-i-arguments) не можна оголошувати змінну з назвою `arguments`, тож код вище призвів би до синтаксичної помилки. Це робить область видимості `arguments` куди простішою для осмислення.

В більшості випадків застосування [решти параметрів](/uk/docs/Web/JavaScript/Reference/Functions/rest_parameters) є доброю альтернативою використанню об'єкта `arguments`.

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Не можуть використовуватися як конструктори

Стрілкові функції не можуть використовуватися як конструктори, вони викидають помилку, бувши викликаними з [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new). Крім цього, вони не мають властивості [`prototype`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype).

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false
```

### Не можуть використовуватися як генератори

Ключове слово [`yield`](/uk/docs/Web/JavaScript/Reference/Operators/yield) не може використовуватися в тілі стрілкової функції (крім використання всередині генераторних функцій, вкладених у стрілкову функцію). Як наслідок, стрілкові функції не можуть використовуватися як генератори.

### Розрив рядка перед стрілкою

Стрілкова функція не може містити розрив рядка між параметрами і її стрілкою.

```js-nolint example-bad
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

Для потреб форматування можна поставити розрив рядка після стрілки, або ж використати дужки або фігурні дужки навколо тіла функції, як показано нижче. Крім цього, розриви рядка можна розмістити між параметрами.

```js-nolint
const func = (a, b, c) =>
  1;
const func2 = (a, b, c) => (
  1
);
const func3 = (a, b, c) => {
  return 1;
};
const func4 = (
  a,
  b,
  c,
) => 1;
```

### Порядок розбору

Хоча стрілка в стрілковій функції не є оператором, ці функції мають особливі правила парсингу, які по-іншому взаємодіють з [пріоритетом операторів](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence) у порівнянні зі звичайними функціями.

```js-nolint example-bad
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments
```

Через те, що `=>` має нижчий за більшість операторів пріоритет, для того, аби уникати розбору `callback || ()` як списку аргументів стрілкової функції, необхідні дужки.

```js example-good
callback = callback || (() => {});
```

## Приклади

### Застосування стрілкових функцій

```js
// Порожня стрілкова функція повертає undefined
const empty = () => {};

(() => "foobar")();
// Повертає "foobar"
// (це називається Вираз одразу викликаної функції)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Прості фільтрування, відображення масиву тощо.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// Більш лаконічні ланцюги промісів
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// Безпараметрові стрілкові функції, які простіше розібрати візуально
setTimeout(() => {
  console.log("Я відбудусь раніше");
  setTimeout(() => {
    // Глибший код
    console.log("Я відбудусь пізніше");
  }, 1);
}, 1);
```

### Використання call, bind і apply

Методи [`call()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) і [`bind()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) працюють як очікувано з традиційними функціями, тому що кожному з методів задається область видимості:

```js
const obj = {
  num: 100,
};
// Присвоєння "num" на globalThis для демонстрування того, як це значення НЕ використовується.
globalThis.num = 42;
// Проста традиційна функція для роботи з "this"
const add = function (a, b, c) {
  return this.num + a + b + c;
};
console.log(add.call(obj, 1, 2, 3)); // 106
console.log(add.apply(obj, [1, 2, 3])); // 106
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 106
```

При використанні стрілкових функцій, оскільки функція `add` по суті створюється на (глобальній) області видимості `globalThis`, `this` вважатиметься тотожним `globalThis`.

```js
const obj = {
  num: 100,
};
// Присвоєння "num" на globalThis для демонстрування того, як це значення буде підхоплено.
globalThis.num = 42;
// Стрілкова функція
const add = (a, b, c) => this.num + a + b + c;
console.log(add.call(obj, 1, 2, 3)); // 48
console.log(add.apply(obj, [1, 2, 3])); // 48
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 48
```

Можливо, найкраща користь від використання стрілкових функцій стосується методів {{domxref("setTimeout()")}} і {{domxref("EventTarget/addEventListener()", "EventTarget.prototype.addEventListener()")}}, котрі зазвичай потребують якогось роду замикання, `call()`, `apply()` або `bind()`, аби пересвідчитись, що функція виконується в тій області видимості, в якій слід.

При використанні виразів традиційних функцій подібний до цього код не працює як очікується:

```js
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () {
      // ця функція виконується в контексті window
      this.count++;
      console.log(this.count);
    }, 300);
  },
};
obj.doSomethingLater(); // виводить "NaN", адже властивість "count" не присутня в області видимості window.
```

Зі стрілковими функціями контекст `this` зберегти легше:

```js
const obj = {
  count: 10,
  doSomethingLater() {
    // Синтаксис метода прив'язує "this" до контексту "obj".
    setTimeout(() => {
      // Оскільки стрілкова функція не має власної прив'язки, а
      // setTimeout (як виклик функції) не утворює прив'язки
      // сам, використовується контекст зовнішнього метода – "obj".
      this.count++;
      console.log(this.count);
    }, 300);
  },
};
obj.doSomethingLater(); // виводить 11
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Функції](/uk/docs/Web/JavaScript/Guide/Functions)
- [Функції](/uk/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- [Вираз `function`](/uk/docs/Web/JavaScript/Reference/Operators/function)
- [Поглиблено про ES6: Стрілкові функції](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/) на hacks.mozilla.org (2015)
