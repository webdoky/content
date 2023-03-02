---
title: let
slug: Web/JavaScript/Reference/Statements/let
page-type: javascript-statement
tags:
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Statement
  - Variable declaration
  - Variables
  - let
browser-compat: javascript.statements.let
---

{{jsSidebar("Statements")}}

Оголошення **`let`** оголошує локальну змінну з блоковою областю видимості, необов'язково ініціалізуючи її значенням.

{{EmbedInteractiveExample("pages/js/statement-let.html")}}

## Синтаксис

```js-nolint
let name1;
let name1 = value1;
let name1 = value1, name2 = value2;
let name1, name2 = value2;
let name1 = value1, name2, /* …, */ nameN = valueN;
```

### Параметри

- `nameN`
  - : Назва змінної або змінних для оголошення. Кожна з них повинна бути дійсним ідентифікатором JavaScript.
- `valueN` {{optional_inline}}
  - : Для кожної оголошеної змінної можна (необов'язково) задати її початкове значення, у вигляді будь-якого дійсного виразу JavaScript.

Замість цього, для оголошення змінних також може використовуватися [Присвоєння з деструктуруванням](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```js
let { bar } = foo; // де foo = { bar:10, baz:12 };
/* Це створює змінну з назвою 'bar', котра має значення 10 */
```

## Опис

**`let`** дає змогу оголошувати змінні, котрі обмежені областю видимості інструкції-{{jsxref("statements/block", "блоку", "", 1)}}, або виразу, на якому їх використовують, на відміну від ключового слова {{jsxref("statements/var", "var")}}, котре оголошує змінну глобально, або локально – для всієї функції, без огляду на блоки.
Інша відмінність між {{jsxref("statements/var", "var")}} і
`let` полягає в тому, що до оголошеної за допомогою `let` змінної можна звертатися лише після такого оголошення (читайте про [темпоральну мертву зону](#temporalna-mertva-zona-tdz)). Через це оголошення `let` називають [непіднімними](/uk/docs/Glossary/Hoisting).

Як і {{jsxref("statements/const", "const", "opys")}}, `let` _не_ створює властивостей об'єкта {{domxref("window")}}, коли оголошення відбувається глобально (в області видимості найвищого рівня).

Пояснення того, чому було обрано саме слово "**let**", можна прочитати [тут](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri).

Багатьох проблем зі змінними `let` можна уникнути шляхом оголошення їх нагорі області видимості, в котрій вони використовуються (це може вплинути на читабельність).

На відміну від `var`, словом `let` починаються [_оголошення_, а не _інструкції_](/uk/docs/Web/JavaScript/Reference/Statements#vidminnosti-mizh-instruktsiiamy-ta-oholoshenniamy). Це означає, що не можна використовувати самотнє оголошення `let` як тіло блока (що має зміст, оскільки в такому разі не було б змоги звернутися до змінної).

```js example-bad
if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

## Приклади

### Правила областей видимості

Змінні, оголошені за допомогою **`let`**, мають свою область видимості в межах блоку, для якого оголошені, а також вміщених в нього підблоків.
Щодо цього **`let`** працює вельми подібно до **`var`**.
Головна відмінність – те, що область видимості змінної **`var`** – уся функція навколо:

```js
function varTest() {
  var x = 1;
  {
    var x = 2; // та сама змінна!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // інша змінна
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

На верхньому рівні програм та функцій, **`let`**, на відміну від **`var`**, не створює властивості у глобальному об'єкті.
Наприклад:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### Повторні оголошення

Повторне оголошення тієї ж змінної всередині тієї ж функційної або блокової області видимості спричиняє {{jsxref("SyntaxError")}}.

```js example-bad
if (x) {
  let foo;
  let foo; // викидається SyntaxError.
}
```

Можна зустріти помилки в інструкціях {{jsxref("Statements/switch", "switch")}}, бо в таких випадках є лише один блок.

```js example-bad
let x = 1;
switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError через повторне оголошення.
    break;
}
```

Блок, вкладений у гілку case, утворить нове лексичне оточення блокової області видимості, запобігши помилкам повторного оголошення, показаним вище.

```js
let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

При експериментах у REPL, як то вебконсолі Firefox (**Інструменти** > **Інструменти веброзробника** > **Консоль**), якщо запустити два оголошення `let` з однаковою назвою у двох окремих введеннях, можна отримати таку ж помилку повторного оголошення. Обговорення цієї проблеми можна прочитати в {{bug(1580891)}}. Консоль Chrome дозволяє повторні оголошення `let` в окремих введеннях REPL.

### Темпоральна мертва зона (TDZ)

Про змінні `let` і `const` кажуть, що вони перебувають в "темпоральній мертвій зоні" (TDZ) від початку блоку і поки виконання коду не досягне рядка, на якому оголошена та ініціалізована відповідна змінна.

Поки змінна в TDZ — вона іще не ініціалізована значенням, і будь-які спроби звернутися до неї призведуть до {{jsxref("ReferenceError")}}.
Ця змінна ініціалізується значенням, коли виконання досягає рядка коду, на якому вона оголошена.
Якщо при оголошенні змінної не задано жодного початкового значення, вона ініціалізується значенням `undefined`.

Змінні {{jsxref("Statements/var", "var", "pidniattia-var")}} працюють не так: вони повертають значення `undefined`, якщо звернутися до них до їхнього оголошення.
Код нижче демонструє різницю результатів звертання до `let` і `var` вище рядків, на яких вони оголошені.

```js example-bad
{
  // TDZ починається на початку області видимості
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // Кінець TDZ (для foo)
}
```

Тут вжитий термін "темпоральний", тому що ця зона (TDZ) залежить від порядку виконання (часу), а не порядку, в якому написаний код (позиції). Наприклад, код нижче – працює, тому що навіть попри те, що функція, котра використовує змінну `let`, стоїть вище за оголошення цієї змінної, вона _викликається_ поза TDZ.

```js
{
  // TDZ почитається на початку області видимості
  const func = () => console.log(letVar); // OK

  // В межах TDZ звертання до letVar викидає `ReferenceError`

  let letVar = 3; // Кінець TDZ (для letVar)
  func(); // Викликано поза TDZ!
}
```

#### TDZ і `typeof`

Застосування оператора `typeof` до змінної `let` у її TDZ викине {{jsxref("ReferenceError")}}:

```js example-bad
// призводить до 'ReferenceError'
console.log(typeof i);
let i = 10;
```

Це відрізняється від застосування `typeof` до неоголошених змінних, а також змінних, що мають значення `undefined`:

```js
// друкує 'undefined'
console.log(typeof undeclaredVariable);
```

#### TDZ вкупі з лексичною областю видимості

Наступний код призводить до `ReferenceError` на вказаному рядку:

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

Блок `if` обчислюється, тому що зовнішня `var foo` має значення.
Проте у зв'язку з лексичною областю видимості це значення недоступне всередині блоку: ідентифікатор `foo` _всередині_ цього блоку `if` відповідає `let foo`.
Вираз `(foo + 55)` викидає `ReferenceError`, тому що ініціалізація `let foo` не була завершена: ця змінна іще перебуває в темпоральній мертвій зоні.

Цей феномен може збивати з пантелику в ситуаціях штибу наступної.
Інструкція `let n of n.a` – зразу в приватній області видимості блоку циклу.
Таким чином, ідентифікатор `n.a` вирішується до властивості '`a`' об'єкта '`n`', розташованого в першій частині самої інструкції (`let n`).

Все це все одно знаходиться в темпоральній мертвій зоні, адже інструкція оголошення не була досягнута й закінчена.

```js example-bad
function go(n) {
  // n тут – означено!
  console.log(n); // { a: [1, 2, 3] }

  // ReferenceError на наступному рядку
  for (let n of n.a) {
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

### Інші ситуації

Бувши вжитим усередині блоку, **`let`** обмежує область видимості змінної цим блоком.
Зверніть увагу на різницю з **`var`**, чия область видимості – функція, в котрій відбулось оголошення.

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // область видимості – глобальна
  let b = 22; // область видимості – блок if

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

Проте поєднання оголошень **`var`** і **`let`** нижче – {{jsxref("SyntaxError", "синтаксична помилка")}}, у зв'язку з тим, що **`var`** піднімається нагору блоку.
Це призводить до неявного повторного оголошення змінної.

```js example-bad
let x = 1;

{
  var x = 2; // SyntaxError через повторне оголошення
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [Підняття](/uk/docs/Glossary/Hoisting)
- [Заглиблення в ES6: `let` і `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
- [Небезпечні зміни `let` і `const` у Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)
- [Ви не знаєте JS: Області видимості та замикання: Розділ 3: Функція і блокова область видимості](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md)
- [StackOverflow: Що таке темпоральна мертва зона](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850)?
- [StackOverflow: Яка різниця між використанням `let` і `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)
