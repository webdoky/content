---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
page-type: javascript-class
browser-compat: javascript.builtins.Function
---

{{JSRef}}

Об'єкт **`Function`** (функція) надає методи для [функцій](/uk/docs/Web/JavaScript/Reference/Functions). У JavaScript кожна функція насправді є об'єктом `Function`.

## Конструктор

- {{jsxref("Function/Function", "Function()")}}
  - : Створює новий об'єкт `Function`. За допомогою безпосереднього виклику конструктора можна динамічно створювати функції, але це призводить до проблем безпеки, а також проблем продуктивності, подібних (проте куди менш суттєвих) до проблем {{jsxref("Global_Objects/eval", "eval()")}}. А проте, на відміну від `eval()`, конструктор `Function` створює функції, що виконуються лише у глобальній області видимості.

## Властивості примірників

Ці властивості визначені на `Function.prototype` і є спільними для всіх примірників `Function`.

- {{jsxref("Function.prototype.arguments")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Представляє аргументи, передані до цієї функції. Для функцій у [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode), стрілкових, асинхронних і генераторних функцій звертання до властивості `arguments` призводить до викидання {{jsxref("TypeError")}}. Замість цього слід використовувати об'єкт {{jsxref("Functions/arguments", "arguments")}} всередині замикань функцій.
- {{jsxref("Function.prototype.caller")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Представляє функцію, яка закликала поточну функцію. Для функцій у [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode), стрілкових, асинхронних і генераторних функцій звертання до властивості `caller` призводить до викидання {{jsxref("TypeError")}}.
- {{jsxref("Object/constructor", "Function.prototype.constructor")}}
  - : Функція-конструктор, що створила поточний об'єкт-примірник. Для примірників `Function` початкове значення – це конструктор {{jsxref("Function/Function", "Function")}}.

Ці властивості є власними для кожного окремого примірника `Function`.

- {{jsxref("Function/displayName", "displayName")}} {{non-standard_inline}} {{optional_inline}}
  - : Показне ім'я функції.
- {{jsxref("Function/length", "length")}}
  - : Задає кількість аргументів, очікуваних функцією.
- {{jsxref("Function/name", "name")}}
  - : Назва функції.
- {{jsxref("Function/prototype", "prototype")}}
  - : Використовується тоді, коли функція використовується як конструктор за участі оператора [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new). Це значення стає прототипом нового об'єкта.

## Методи примірників

- {{jsxref("Function.prototype.apply()")}}
  - : Викликає функцію, застосовуючи передане значення `this` і необов'язкові аргументи, передані в вигляді масиву (або [масивоподібного об'єкта](/uk/docs/Web/JavaScript/Guide/Indexed_collections#robota-z-masyvopodibnymy-obiektamy)).
- {{jsxref("Function.prototype.bind()")}}
  - : Створює нову функцію, яка, якщо її викликати, має своє ключове слово `this`, якому призначено передане значення, необов'язково – з переданою послідовністю аргументів, що передують будь-яким аргументам, переданим при виклику цієї нової функції.
- {{jsxref("Function.prototype.call()")}}
  - : Викликає функцію з переданими значенням `this` і необов'язковими аргументами.
- {{jsxref("Function.prototype.toString()")}}
  - : Повертає рядок, що представляє вихідний код функції.
    Переважає метод {{jsxref("Object.prototype.toString")}}.
- [`Function.prototype[@@hasInstance]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance)
  - : Задає усталену процедуру для визначення того, чи впізнає функція-конструктор об'єкт як один зі своїх примірників. Викликається оператором [`instanceof`](/uk/docs/Web/JavaScript/Reference/Operators/instanceof).

## Приклади

### Різниця між конструктором Function і оголошенням функції

Функції, створені за допомогою конструктора `Function`, не створюють замикань до контекстів їх створення; вони завжди створюються у глобальній області видимості. Під час їх виконання вони можуть звертатися лише до власних локальних змінних і глобальних, але не до змінних з області видимості, у якій працював конструктор `Function`. Це відрізняється від використання {{jsxref("Global_Objects/eval", "eval()")}} з кодом для виразу функції.

```js
// Створити глобальну властивість за допомогою `var`
var x = 10;

function createFunction1() {
  const x = 20;
  return new Function("return x;"); // цей `x` посилається на глобальний `x`
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // цей `x` посилається на локальний `x` вище
  }
  return f;
}

const f1 = createFunction1();
console.log(f1()); // 10
const f2 = createFunction2();
console.log(f2()); // 20
```

Попри те, що цей код працює у веббраузерах, `f1()` у Node.js видасть `ReferenceError`, оскільки `x` не буде знайдено. Це пов'язано з тим, що найвища область видимості в Node не є глобальною, і `x` буде локальною щодо свого модуля.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`function`](/uk/docs/Web/JavaScript/Reference/Statements/function)
- [Вираз `function`](/uk/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Функції", "", 1)}}
