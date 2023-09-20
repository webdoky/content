---
title: let
slug: Web/JavaScript/Reference/Statements/let
page-type: javascript-statement
browser-compat: javascript.statements.let
---

{{jsSidebar("Statements")}}

Оголошення **`let`** (покладімо) оголошує повторно присвоювані локальні змінні з блоковою областю видимості, необов'язково ініціалізуючи кожну з них значенням.

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
  - : Назва змінної для оголошення. Кожна з них повинна бути дійсним [ідентифікатором](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#identyfikatory) JavaScript або [патерном присвоєння з деструктуруванням](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
- `valueN` {{optional_inline}}
  - : Початкове значення змінної. Може бути будь-яким допустимим виразом. Усталене значення – `undefined`.

## Опис

Область видимості змінної, оголошеної з `let`, – один з наступних записів, оточених фігурними дужками, найближчий до оголошення `let`:

- Інструкція [блоку](/uk/docs/Web/JavaScript/Reference/Statements/block)
- Інструкція {{jsxref("Statements/switch", "switch")}}
- Інструкція {{jsxref("Statements/try...catch", "try...catch")}}
- Тіло [однієї з інструкцій `for`](/uk/docs/Web/JavaScript/Reference/Statements#iteratsii), якщо `let` розташовано в заголовку такої інструкції
- Тіло функції
- [Блок статичної ініціалізації](/uk/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Або – поточний модуль чи сценарій, якщо оголошення не вміщено ні в чому з переліченого вище.

Порівняно з {{jsxref("Statements/var", "var")}}, оголошення `let` мають наступні відмінності:

- Оголошення `let` обмежуються блоками, як і функціями.
- До оголошень `let` можна звертатися лише після досягнення місця з оголошенням (дивіться [темпоральну мертву зону](#temporalna-mertva-zona-tdz)). Через це оголошення `let` заведено називати [непіднімальними](/uk/docs/Glossary/Hoisting).
- Оголошення `let` не створюють властивостей на {{jsxref("globalThis")}}, коли виконуються на зовнішньому рівні сценарію.
- Оголошення `let` не можуть бути [оголошені повторно](#povtorni-oholoshennia) будь-яким іншим оголошенням в тій же області видимості.
- Ключове слово `let` позначає [_оголошення_, а не _інструкції_](/uk/docs/Web/JavaScript/Reference/Statements#vidminnosti-mizh-instruktsiiamy-ta-oholoshenniamy). Це означає, що не можна використовувати самотнє оголошення `let` як тіло блоку (що має зміст, адже до такої змінної не було б нізвідки доступу).

  ```js-nolint example-bad
  if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Зверніть увагу на те, що `let` дозволено як ім'я ідентифікатора, коли оголошення відбувається з `var` або `function` у [несуворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode), але слід уникати використання `let` як імені ідентифікатора, щоб уникнути неочікуваних неоднозначностей синтаксису.

Чимало стилів (в тому числі [стиль MDN](/uk/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#oholoshennia-zminnykh)) рекомендують використовувати {{jsxref("Statements/const", "const")}} замість `let`, якщо змінна не присвоюється повторно у своїй області видимості. Це дає змогу чітко вказати, що тип змінної (або значення, якщо це примітив) ніколи не змінюється. Інші стилі можуть віддавати перевагу `let` для непримітивів, що можуть змінюватися.

Список, що стоїть після ключового слова `let`, зветься _списком {{Glossary("binding", "зв'язування")}}_ і розділяється комами, причому ці коми _не_ є [операторами коми](/uk/docs/Web/JavaScript/Reference/Operators/Comma_operator), а знаки `=` _не_ є [операторами присвоєння](/uk/docs/Web/JavaScript/Reference/Operators/Assignment). Ініціалізатори наступних змінних можуть посилатися на попередні змінні в списку.

### Темпоральна мертва зона (TDZ)

Про змінну, оголошену з `let`, `const` або `class`, кажуть, що вона перебуває в "темпоральній мертвій зоні" (TDZ) від початку блоку до миті, коли виконання коду досягає місця, в якому оголошується та ініціалізується ця змінна.

Перебуваючи в TDZ, змінна іще не була ініціалізована значенням, і будь-які спроби звернутися до неї призведуть до {{jsxref("ReferenceError")}}. Ця змінна ініціалізується значенням, коли виконання досягне місця в коді, де вона оголошена. Якщо в оголошенні цієї змінної не задане жодне початкове значення, вона ініціалізується значенням `undefined`.

Це відрізняється від змінних {{jsxref("Statements/var", "var", "pidniattia")}}, котрі повертають значення `undefined`, якщо звернутися до них до їхнього оголошення. Код нижче демонструє різний результат при звертанні до `let` і `var` вище місця, в якому вони оголошені.

```js example-bad
{
  // TDZ починається на початку області видимості
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // Кінець TDZ (для foo)
}
```

Термін "темпоральна" вживається, тому що ця зона залежить від порядку виконання (часу), а не порядку, в якому код написаний (позиції). Наприклад, код нижче працює, тому що, навіть попри те, що функція, що користується змінною `let`, зустрічається раніше, ніж ця змінна оголошена, функція _викликається_ поза TDZ.

```js
{
  // TDZ починається на початку області видимості
  const func = () => console.log(letVar); // OK

  // В межах TDZ звертання до letVar викидає `ReferenceError`

  let letVar = 3; // Кінець TDZ (для letVar)
  func(); // Викликано поза TDZ!
}
```

Застосування оператора `typeof` на змінній `let` у її TDZ викидає {{jsxref("ReferenceError")}}:

```js example-bad
typeof i; // ReferenceError: Cannot access 'i' before initialization
let i = 10;
```

Це відрізняється від вживання `typeof` для невизначених змінних та змінних, що мають значення `undefined`:

```js
console.log(typeof undeclaredVariable); // "undefined"
```

### Повторні оголошення

Оголошення `let` не можуть бути в одній області видимості з будь-яким іншим оголошенням, включаючи оголошення `let`, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} та {{jsxref("Statements/import", "import")}}.

```js-nolint example-bad
{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}
```

Оголошення `let` всередині тіла функції не може мати таке ж ім'я, як в одного з параметрів. Оголошення `let` всередині блоку `catch` не може мати таке ж ім'я, як зв'язаний `catch` ідентифікатор.

```js-nolint example-bad
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

При експериментах у REPL, такому як консоль Firefox (**Інструменти** > **Інструменти веброзробника** > **Вебконсоль**), якщо запустити два оголошення `let` з однаковим ім'ям у двох окремих введеннях, то можна отримати помилку повторного оголошення. Дивіться подальше обговорення цієї проблеми у [Ваді Firefox 1580891](https://bugzil.la/1580891). Консоль Chrome дозволяє повторні оголошення `let` у різних введеннях REPL.

Можуть зустрітися помилки в {{jsxref("Statements/switch", "switch")}}, оскільки там є лише один блок.

```js-nolint example-bad
let x = 1;

switch (x) {
  case 0:
    let foo;
    break;
  case 1:
    let foo; // SyntaxError: Identifier 'a' has already been declared
    break;
}
```

Щоб уникнути такої помилки, слід загортати кожний `case` в окрему блокову інструкцію.

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

## Приклади

### Правила областей видимості

Змінні, оголошені `let`, мають собі за область видимості блок, для якого вони оголошені, а також всі вкладені підблоки. Таким чином, `let` працює дуже схоже на `var`. Основна відмінність полягає в тому, що область видимості змінної `var` - це вся функція навколо:

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

На зовнішньому рівні програм та функцій `let`, на відміну від `var`, не створює властивостей на глобальному об'єкті. Наприклад:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### TDZ у поєднанні з лексичною областю видимості

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

Блок `if` обчислюється, тому що зовнішня `var foo` має значення. Проте у зв'язку з лексичною областю видимості це значення недоступне всередині блоку: ідентифікатор `foo` _всередині_ цього блоку `if` відповідає `let foo`. Вираз `(foo + 55)` викидає `ReferenceError`, тому що ініціалізація `let foo` не була завершена: ця змінна іще перебуває в темпоральній мертвій зоні.

Цей феномен може збивати з пантелику в ситуаціях штибу наступної. Інструкція `let n of n.a` – зразу в області видимості блоку циклу `for...of`. Таким чином, ідентифікатор `n.a` вирішується до властивості `a` об'єкта '`n`', розташованого в першій частині самої інструкції (`let n`). Все це все одно знаходиться в темпоральній мертвій зоні, адже інструкція оголошення не була досягнута й закінчена.

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

Бувши вжитим усередині блоку, `let` обмежує область видимості змінної цим блоком. Зверніть увагу на різницю з `var`, чия область видимості – функція, в котрій відбулось оголошення.

```js
var a = 1;
var b = 2;

{
  var a = 11; // область видимості – глобальна
  let b = 22; // область видимості – блок

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

Проте поєднання оголошень `var` і `let` нижче – {{jsxref("SyntaxError", "синтаксична помилка")}}, у зв'язку з тим, що `var` не обмежена блоком, а отже – обидві змінні мають однакову область видимості. Це призводить до неявного повторного оголошення змінної.

```js-nolint example-bad
let x = 1;

{
  var x = 2; // SyntaxError через повторне оголошення
}
```

### Оголошення з деструктуруванням

Лівий бік кожного `=` також може бути патерном зв'язування. Це дає змогу створювати кілька змінних за раз.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Більше про це - в [Присвоєнні з деструктуруванням](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [Підняття](/uk/docs/Glossary/Hoisting)
- [Заглиблення в ES6: `let` і `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/) на hacks.mozilla.org (2015)
- [Небезпечні зміни `let` і `const` у Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/) на blog.mozilla.org (2015)
- [Ви не знаєте JS: Області видимості та замикання, р. 3: Функція і блокова область видимості](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md) від Кайла Сімпсона
- [Що таке Темпоральна мертва зона?](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850) на Stack Overflow
- [Яка різниця між використанням `let` і `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) на Stack Overflow
- [Чому для оголошень змінних з блоковою видимістю в JavaScript було обрано ім'я 'let'?](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri) на Stack Overflow
