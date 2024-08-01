---
title: Вираз function
slug: Web/JavaScript/Reference/Operators/function
page-type: javascript-operator
browser-compat: javascript.operators.function
---

{{jsSidebar("Operators")}}

Ключове слово **`function`** (функція) можна використовувати для визначення функції всередині виразу.

Визначати функції також можна за допомогою [оголошення функції](/uk/docs/Web/JavaScript/Reference/Statements/function) та [стрілкового синтаксису](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html", "shorter")}}

## Синтаксис

```js-nolint
function (param0) {
  інструкції
}
function (param0, param1) {
  інструкції
}
function (param0, param1, /* …, */ paramN) {
  інструкції
}

function name(param0) {
  інструкції
}
function name(param0, param1) {
  інструкції
}
function name(param0, param1, /* …, */ paramN) {
  інструкції
}
```

> [!Примітка] > [Інструкція-вираз](/uk/docs/Web/JavaScript/Reference/Statements/Expression_statement) не може починатися зі слова `function` щоб уникнути неоднозначності із [оголошенням функції](/uk/docs/Web/JavaScript/Reference/Statements/function). Ключове слово `function` починає вираз тільки тоді, коли воно з'являється в контексті, де інструкції не можуть бути прийняті.

### Параметри

- `name` {{optional_inline}}
  - : Ім'я функції. Можна опустити, і в цьому випадку функція буде _анонімною_. Ім'я є локальним лише для тіла функції.
- `paramN` {{optional_inline}}
  - : Назва формального параметра для функції. Синтаксис параметрів дивіться у [Довідці про функції](/uk/docs/Web/JavaScript/Guide/Functions#parametry-funktsii).
- `statements` {{optional_inline}}
  - : Інструкції, що утворюють тіло функції.

## Опис

`Вираз функції` дуже схожий та має практично той самий синтаксис як і[`оголошення функції`](/uk/docs/Web/JavaScript/Reference/Statements/function). Основна відмінність між `виразом функції` та `оголошенням функції` полягає у _імені функції_, яке можна опустити у `виразі функції`, створивши її _анонимною_. `Вираз функції` можна використовувати як [IIFE](/uk/docs/Glossary/IIFE) (Негайно викликаний вираз функції), функцію яка запускається одразу після визначення. Дивіться також розділ про [функції](/uk/docs/Web/JavaScript/Reference/Functions) для отримання додаткової інформації.

### Підняття виразу функції

Вирази функцій у JavaScript не мають підняття, на відміну від [оголошень функцій](/uk/docs/Web/JavaScript/Reference/Statements/function#hoisting). Не можна використовувати вирази функцій до їх створення:

```js
console.log(notHoisted); // undefined
// Незважаючи на те, що назва змінної піднімається,
// визначення - ні. Тому це undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Іменований вираз функції

Якщо ви хочете посилатися на поточну функцію всередині її тіла, потрібно створити іменований вираз функції. Це ім'я буде локальним лише для тіла функції (її області видимості). Це дає змогу не використовувати для рекурсивного виклику функції нерекомендовану властивість {{jsxref("Functions/arguments/callee", "arguments.callee")}}.

```js
const math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;
```

Якшо вираз функції є іменованим, властивість функції [`name`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/name) встановлюється як ії ім'я, замість неявного імені, виведеного з синтаксису (наприклад, змінна, до якої присвоюється функція).

На відміну від оголошення функції, ім'я виразу функції доступне лише для читання.

```js
function foo() {
  foo = 1;
}
foo();
console.log(foo); // 1
(function foo() {
  foo = 1; // TypeError: Assignment to constant variable.
})();
```

## Приклади

### Використання виразу функції

У наступному прикладі визначається та присвоюється сталій `x` функція без імені. Ця функція повертає квадрат свого аргументу:

```js
const x = function (y) {
  return y * y;
};
```

### Використання функції як зворотного виклику

Найчастіше такі функції використовуються як {{Glossary("Callback_function", "функції зворотного виклику")}}:

```js
button.addEventListener("click", function (event) {
  console.log("кнопку клацнуто!");
});
```

### Використання зразу закличного виразу функції (IIFE)

Створюється та викликається анонімна функція:

```js-nolint
(function () {
  console.log("Код працює!");
})();

// або

!function () {
  console.log("Код працює!");
}();
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Функції](/uk/docs/Web/JavaScript/Guide/Functions)
- [Функції](/uk/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Function")}}
- {{jsxref("Functions/Arrow_functions", "Стрілкові функції", "", 1)}}
