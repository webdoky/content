---
title: Функції
slug: Web/JavaScript/Reference/Functions
page-type: guide
browser-compat: javascript.functions
---

{{jsSidebar("Functions")}}

Загалом кажучи, функція – це "підпрограма", що може бути _викликана_ кодом, зовнішнім (або внутрішнім – у випадку рекурсії) щодо самої функції. Подібно до самої програми, функція складається з послідовності інструкцій, що називається _тілом функції_. Значення можуть бути _передані_ функції як параметри, і функція _повертає_ значення.

У JavaScript функції є [об'єктами першого класу](/uk/docs/Glossary/First-class_Function), тому що їх можна передавати в інші функції, повертати з функцій, присвоювати змінним і властивостям. Також вони можуть мати властивості та методи, як і будь-який інший об'єкт. Від інших об'єктів їх відрізняє те, що функцію можна викликати.

Більше прикладів і пояснень дивіться в [Посібнику JavaScript про функції](/uk/docs/Web/JavaScript/Guide/Functions).

## Опис

Значення функцій зазвичай є примірниками [`Function`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function). Дивіться інформацію про властивості та методи об'єктів `Function` на сторінці {{jsxref("Function")}}. Викличні значення змушують [`typeof`](/uk/docs/Web/JavaScript/Reference/Operators/typeof) повертати `"function"`, а не `"object"`.

> **Примітка:** Не всі викличні значення є примірниками `Function`. Наприклад, об'єкт `Function.prototype` є викличним, але не є примірником `Function`. Також можна вручну задати [ланцюжок прототипів](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) функції так, щоб вона більше не успадковувала властивості `Function.prototype`. Однак такі випадки дуже рідкісні.

### Повернене значення

Усталено, якщо виконання функції не закінчується інструкцією [`return`](/uk/docs/Web/JavaScript/Reference/Statements/return), або якщо після ключового слова `return` немає виразу, то поверненим значенням стає {{jsxref("undefined")}}. Інструкція `return` дає змогу повернути з функції довільне значення. Один виклик функції може повернути лише одне значення, але можна імітувати ефект повернення декількох значень, повернувши об'єкт або масив і [деструктурувавши](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) результат.

> **Примітка:** Конструктори, викликані з [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new), використовують для визначення поверненого значення іншу логіку.

### Передача аргументів

[Параметри та аргументи](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>) мають дещо різні значення, але у ВебДоках ми нерідко використовуємо ці терміни як взаємозамінні. Як стислий приклад:

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

У цьому прикладі змінна `num` зветься _параметром_ функції: вона оголошена оточеному дужками списку визначення функції. Функція очікує того, що параметр `num` буде числом – хоча це не можна забезпечити в JavaScript без написання коду валідації при виконанні. У виклику `formatNumber(2)` число `2` є _аргументом_ функції: це значення, що фактично передається функції у виклику функції. Значення аргументу можна отримати всередині тіла функції через відповідне ім'я параметра або об'єкт [`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments).

Аргументи завжди [_передаються за значенням_](https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D1%96%D1%97_%D0%BE%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F#%D0%92%D0%B8%D0%BA%D0%BB%D0%B8%D0%BA_%D0%BF%D0%BE_%D0%BF%D0%BE%D1%81%D0%B8%D0%BB%D0%B0%D0%BD%D0%BD%D1%8E) і ніколи не _передаються за посиланням_. Це означає, що якщо функція повторно присвоює щось параметру, то значення поза функцією не змінюється. Якщо точніше, то аргументи-об'єкти [_передаються за співвикористанням_](https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D1%96%D1%97_%D0%BE%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F#%D0%92%D0%B8%D0%BA%D0%BB%D0%B8%D0%BA_%D0%B7_%D1%81%D0%BF%D1%96%D0%B2%D0%B2%D0%B8%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%BD%D1%8F%D0%BC), тобто якщо змінюються властивості об'єкта, то такі зміни впливають на цей об'єкт поза функцією. Наприклад:

```js
function updateBrand(obj) {
  // Внесення змін до об'єкта спостерігається поза функцією
  obj.brand = "Toyota";
  // Спроба переприсвоїти параметр, але це не вплине
  // на значення змінної поза функцією
  obj = null;
}

const car = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(car.brand); // Honda

// Передача об'єктного посилання до функції
updateBrand(car);

// updateBrand вносить зміни до car
console.log(car.brand); // Toyota
```

Ключове слово [`this`](/uk/docs/Web/JavaScript/Reference/Operators/this) посилається на об'єкт, на якому відбувається звертання до функції – воно не вказує на наразі виконувану функцію, тож необхідно звертатися до значення функції за назвою, навіть всередині її тіла.

### Визначення функцій

Грубо кажучи, JavaScript має чотири різновиди функцій:

- Звичайна функція – може повернути що завгодно; бувши закликана, завжди виконується до кінця
- Генераторна функція – повертає об'єкт [`Generator`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Generator); може бути призупинена та відновлена оператором [`yield`](/uk/docs/Web/JavaScript/Reference/Operators/yield)
- Асинхронна функція – повертає [`Promise`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise); може бути призупинена та відновлена оператором [`await`](/uk/docs/Web/JavaScript/Reference/Operators/await)
- Асинхронна генераторна функція – повертає об'єкт [`AsyncGenerator`](/uk/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator); можна використовувати як оператор `await`, так і оператор `yield`

Для кожного різновиду функції є три способи визначення:

- Оголошення
  - : [`function`](/uk/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/uk/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/uk/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/uk/docs/Web/JavaScript/Reference/Statements/async_function*)
- Вираз
  - : [`function`](/uk/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/uk/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/uk/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/uk/docs/Web/JavaScript/Reference/Operators/async_function*)
- Конструктор
  - : [`Function()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

На додачу до цього, є особливий синтаксис для визначення [стрілкових функцій](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions) та [методів](/uk/docs/Web/JavaScript/Reference/Functions/Method_definitions), які надають більш точну семантику для їх використання. [Класи](/uk/docs/Web/JavaScript/Reference/Classes) концептуально не є функціями (тому, що вони викидають помилку при виклику без `new`), але також успадковують від `Function.prototype` та мають `typeof MyClass === "function"`.

```js
// Конструктор
const multiply = new Function("x", "y", "return x * y");

// Оголошення
function multiply(x, y) {
  return x * y;
} // Немає потреби ставити тут крапку з комою

// Вираз; ця функція є анонімною, але присвоюється змінній
const multiply = function (x, y) {
  return x * y;
};
// Вираз; ця функція має власну назву
const multiply = function funcName(x, y) {
  return x * y;
};

// Стрілкова функція
const multiply = (x, y) => x * y;

// Метод
const obj = {
  multiply(x, y) {
    return x * y;
  },
};
```

Кожен з цих варіантів запису робить приблизно одне й те ж, але є деякі відмінності у логіці.

- Записи конструктора `Function()`, виразу `function` і оголошення `function` створюють повноцінні об'єкти функцій, які можна конструювати за допомогою [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new). Натомість стрілкові функції та методи не можна конструювати. Асинхронні функції, генераторні функції та асинхронні генераторні функції не можна конструювати, незалежно від запису.
- Оголошення `function` створює функції, які [_піднімаються_](/uk/docs/Web/JavaScript/Guide/Functions#pidniattia-funktsii). Решта записів не піднімає функцію, і значення функції тоді видно лише після визначення.
- Стрілкові функції та конструктор `Function()` завжди створюють _анонімні_ функції, тобто їх не можна легко викликати рекурсивно. Один зі способів викликати стрілкову функцію рекурсивно – присвоїти її змінній.
- Запис стрілкових функцій не має доступу до `arguments` і `this`.
- Конструктор `Function()` не може звертатися до жодних локальних змінних – він має доступ лише до глобальної області видимості.
- Конструктор `Function()` призводить до компіляції при виконанні та нерідко є повільнішим за решту записів.

Що до виразів `function`, то є різниця між назвою функції та змінною, якій ця функція присвоєна. Назва функції не може бути змінена, а змінна, якій функція присвоєна, може бути присвоєна повторно. Назва функції може відрізнятися від змінної, якій функція присвоєна: вони не мають взаємозв'язку. Назва функції може вживатися лише всередині тіла функції. Спроби використати його поза тілом функції призведе до помилки (або до отримання іншого значення, якщо та сама назва оголошена ще десь). Наприклад:

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

З іншого боку, змінна, якій присвоєна функція, обмежується лише своєю областю видимості, яка гарантовано включає область видимості, у якій функція оголошена.

Оголошення функції також створює змінну з такою ж назвою, як і назва функції. Таким чином, на відміну від функцій, визначених виразами функції, до функцій, визначених оголошеннями функції, можна звертатися за їхньою назвою в межах області видимості, в якій вони визначені, а також всередині їхнього власного тіла.

Функції, визначеній `new Function`, вихідний код збирається динамічно, що можна помітити, якщо її серіалізувати. Наприклад, `console.log(new Function().toString())` дає:

```js-nolint
function anonymous(
) {

}
```

Це реальний вихідний код, що вживається для компіляції функції. Проте попри те, що конструктор `Function()` створює функцію з назвою `anonymous`, ця назва не додається до області видимості тіла. Тіло має доступ лише до глобальних змінних. Наприклад, наступний код призведе до помилки:

```js
new Function("alert(anonymous);")();
```

Функція, визначена виразом функції або оголошенням функції, успадковує поточну область видимості. Тобто така функція утворює замикання. З іншого боку, функція, визначена конструктором `Function`, не успадковує жодної області видимості, крім глобальної (яку успадковують усі функції).

```js
// p – глобальна змінна
globalThis.p = 5;
function myFunc() {
  // p – локальна змінна
  const p = 9;

  function decl() {
    console.log(p);
  }
  const expr = function () {
    console.log(p);
  };
  const cons = new Function("\tconsole.log(p);");

  decl();
  expr();
  cons();
}
myFunc();

// Виводить:
// 9 (для 'decl' з оголошення функції (поточна область видимості))
// 9 (для 'expr' з виразу функції (поточна область видимості))
// 5 (для 'cons' з конструктора Function (глобальна область видимості))
```

Функції, визначені виразами функції та оголошеннями функції, розбираються лише раз, а функція, визначена конструктором `Function`, розбирає рядок, переданий їй, кожного разу, коли конструктор викликається. Хоча вираз функції створює замикання кожного разу, тіло не розбирається заново, тож вирази функцій все ж швидші за `new Function(...)`. Таким чином, конструктора `Function` слід уникати, коли це можливо.

Оголошення функції може ненавмисно перетворитися на вираз функції, коли воно зустрічається в контексті виразу.

```js
// Оголошення функції
function foo() {
  console.log("АГОВ!");
}

doSomething(
  // Вираз функції, переданий як аргумент
  function foo() {
    console.log("АГОВ!");
  },
);
```

З іншого боку, вираз функції також може перетворитися на оголошення функції. [Інструкція-вираз](/uk/docs/Web/JavaScript/Reference/Statements/Expression_statement) не може починатися з ключових слів `function` або `async function`, що є поширеною помилкою при реалізації [IIFE](/uk/docs/Glossary/IIFE) (негайно закликаних виразів функцій).

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("АГОВ!");
}();

function foo() {
  console.log("АГОВ!");
}(); // SyntaxError: Unexpected token ')'
```

Замість цього, слід розпочати інструкцію-вираз чимось іншим, щоб ключове слово `function` однозначно відкривало вираз функції. Поширеними варіантами є [групування](/uk/docs/Web/JavaScript/Reference/Operators/Grouping) та використання [`void`](/uk/docs/Web/JavaScript/Reference/Operators/void).

```js-nolint example-good
(function () {
  console.log("АГОВ!");
})();

void function () {
  console.log("АГОВ!");
}();
```

### Параметри функції

Кожний параметр функції є простим ідентифікатором, до якого можна звернутися в локальній області видимості.

```js
function myFunc(a, b, c) {
  // Тут можна звертатися до значень a, b та c
}
```

Є три особливі синтаксиси параметрів:

- [_Усталені параметри_](/uk/docs/Web/JavaScript/Reference/Functions/Default_parameters) дають формальним параметрам змогу ініціалізуватися усталеними значеннями, якщо не передано жодного значення або передано `undefined`.
- [_Решта параметрів_](/uk/docs/Web/JavaScript/Reference/Functions/rest_parameters) дає змогу представляти нескінченну кількість аргументів у вигляді масиву.
- [_Деструктурування_](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) дає змогу розпаковувати елементи з масивів або властивості з об'єктів у окремі змінні.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // Тут можна звертатися до значень a, b, c та rest
}
```

Є певні наслідки, якщо використовується один зі синтаксисів непростих параметрів, наведених вище:

- Не можна застосовувати до тіла функції `"use strict"`: це призводить до [синтаксичної помилки](/uk/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).
- Навіть якщо функція не перебуває в [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode), застосовуються певні особливості функцій у суворому режимі, як-от об'єкт [`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments) перестає синхронізуватися з іменованими параметрами, а властивість [`arguments.callee`](/uk/docs/Web/JavaScript/Reference/Functions/arguments/callee) викидає помилку, якщо спробувати до неї звернутися, а також заборонене дублювання імен параметрів.

### Об'єкт arguments

До аргументів функції всередині неї можна звернутися за допомогою об'єкта [`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments).

- [`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments)
  - : Масивоподібний об'єкт, що вміщає аргументи, передані до функції, що наразі виконується.
- [`arguments.callee`](/uk/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Функція, що наразі виконується.
- [`arguments.length`](/uk/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Число аргументів, переданих до функції.

### Функції-гетери та функції-сетери

На будь-якому стандартному вбудованому або визначеному користувачем об'єкті, що підтримує додавання нових властивостей, можна визначити аксесорні властивості. У [літералах об'єктів](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer) та [класах](/uk/docs/Web/JavaScript/Reference/Classes) можна використовувати спеціальні синтаксиси для визначення гетера та сетера аксесорної властивості.

- [get](/uk/docs/Web/JavaScript/Reference/Functions/get)
  - : Зв'язує властивість об'єкта з функцією, що буде викликана, коли до цієї властивості відбудеться звертання.
- [set](/uk/docs/Web/JavaScript/Reference/Functions/set)
  - : Зв'язує властивість об'єкта з функцією, що буде викликана, коли відбудеться спроба присвоєння цієї властивості.

Зверніть увагу, що такий синтаксис створює _властивість об'єкта_, а не _метод_. Функцію-гетер або функцію-сетер можна отримати лише за допомогою API рефлексії, наприклад, {{jsxref("Object.getOwnPropertyDescriptor()")}}.

### Функції блокового рівня

У [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode) функція всередині блоку обмежена областю видимості цього блоку. До ES2015 функції блокового рівня були заборонені в суворому режимі.

```js
"use strict";

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// f() === 2 у несуворому режимі
```

### Функції блокового рівня в несуворому коді

Якщо коротко: **Не робіть цього.**

У несуворому коді оголошення функцій всередині блоків поводяться дивно. Наприклад:

```js
if (shouldDefineZero) {
  function zero() {
    // НЕБЕЗПЕКА: ризик проблем сумісності
    console.log("Це нуль.");
  }
}
```

Семантика цього в суворому режимі описана як слід: `zero` існує лише в межах області видимості блоку `if`. Якщо `shouldDefineZero` – хиба, то функція `zero` повинна ніколи не бути визначена, оскільки цей блок ніколи не виконується. Проте історично це було залишено невизначеним, тож різні браузери реалізували це в несуворому режимі по-різному. Більше про це – дивіться довідку [оголошення `function`](/uk/docs/Web/JavaScript/Reference/Statements/function#oholoshennia-funktsii-blokovoho-rivnia).

Безпечніший спосіб умовно визначати функції – присвоювати вирази функції змінним:

```js
// Завдяки використанню var ця змінна доступна як глобальна,
// що наближає логіку до оголошення функції вищого рівня
var zero;
if (shouldDefineZero) {
  zero = function () {
    console.log("Це нуль.");
  };
}
```

## Приклади

### Повернення відформатованого числа

Наступна функція повертає рядок, що містить відформатоване представлення числа, вирівняне зліва нулями.

```js
// Ця функція повертає рядок, вирівняний зліва нулями
function padZeros(num, totalLen) {
  let numStr = num.toString(); // Ініціалізувати повернене значення як рядок
  const numZeros = totalLen - numStr.length; // Обчислити число нулів
  for (let i = 1; i <= numZeros; i++) {
    numStr = `0${numStr}`;
  }
  return numStr;
}
```

Наступні інструкції викликають функцію `padZeros`.

```js
let result;
result = padZeros(42, 4); // повертає "0042"
result = padZeros(42, 2); // повертає "42"
result = padZeros(5, 4); // повертає "0005"
```

### З'ясування, чи існує функція

Чи існує функція, можна з'ясувати за допомогою оператора [`typeof`](/uk/docs/Web/JavaScript/Reference/Operators/typeof). У наступному прикладі виконується перевірка, щоб з'ясувати, чи об'єкт `window` має властивість `noFunc`, яка є функцією. Якщо так, вона використовується; інакше виконується якась інша дія.

```js
if (typeof window.noFunc === "function") {
  // використати noFunc()
} else {
  // якась інша дія
}
```

Зверніть увагу, що в перевірці `if` використовується звертання до `noFunc`: після назви функції немає дужок `()`, тож сама функція не викликається.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Функції](/uk/docs/Web/JavaScript/Guide/Functions)
- [Класи](/uk/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Statements/function", "function")}}
- [Вираз `function`](/uk/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Function")}}
