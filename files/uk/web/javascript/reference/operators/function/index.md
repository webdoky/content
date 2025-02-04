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

> [!NOTE]
> Запис [інструкції-виразу](/uk/docs/Web/JavaScript/Reference/Statements/Expression_statement) не може починатися зі слова `function`, щоб уникнути плутанини щодо [оголошення функції](/uk/docs/Web/JavaScript/Reference/Statements/function). Ключове слово `function` починає вираз тільки тоді, коли з'являється в контексті, де інструкцій бути не може.

### Параметри

- `name` {{optional_inline}}
  - : Ім'я функції. Можна опустити, і в цьому випадку функція буде _анонімною_. Ім'я є локальним лише для тіла функції.
- `paramN` {{optional_inline}}
  - : Назва формального параметра для функції. Синтаксис параметрів дивіться у [Довідці про функції](/uk/docs/Web/JavaScript/Guide/Functions#parametry-funktsii).
- `statements` {{optional_inline}}
  - : Інструкції, що утворюють тіло функції.

## Опис

Вираз `function` дуже схожий та має практично той самий синтаксис, що й [оголошення `function`](/uk/docs/Web/JavaScript/Reference/Statements/function). Основна відмінність між виразом `function` та оголошенням `function` полягає в _імені функції_, яке можна опустити у `виразі функції`, створивши її _анонімною_. Вираз `function` можна використовувати як [IIFE](/uk/docs/Glossary/IIFE) (зразу закличний вираз функції), функцію, яка запускається одразу після визначення. Дивіться докладніше в розділі про [функції](/uk/docs/Web/JavaScript/Reference/Functions).

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
  factorial: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factorial(3); //3;2;1;
```

Якщо вираз функції є іменованим, властивість функції [`name`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/name) встановлюється як її ім'я, замість неявного імені, виведеного з синтаксису (наприклад, змінна, до якої присвоюється функція).

На відміну від оголошення функції, ім'я виразу функції доступне лише для читання.

```js
"use strict";

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

### Використання негайно закличного виразу-функції (IIFE)

IIFE є поширеним патерном, що вживається для виконання довільної кількості інструкцій у власній області видимості (і, можливо, повернення значення), в місці, де повинен бути лише один вираз. Чимало традиційних використань IIFE застаріли у зв'язку з новими синтаксичними можливостями, наприклад, [модулями](/uk/docs/Web/JavaScript/Guide/Modules) і [оголошеннями з блоковою областю видимості](/uk/docs/Web/JavaScript/Reference/Statements/let). Самі IIFE тепер частіше пишуться за допомогою [стрілкових функцій](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions), але концепція залишається тією ж. Загалом IIFE мають такий вигляд:

```js
// стандартний IIFE
(function () {
  // інструкції…
})();

// IIFE з аргументами
(function (a, b) {
  console.log(a + b);
})(1, 2); // виводить 3


// IIFE використовується для ініціалізації змінної
const value = (() => {
  const randomValue = Math.random();
  if (randomValue > 0.5) {
    return "лік";
  } else {
    return "лик";
  }
}());
```

Тут наводяться кілька варіантів застосування з прикладами.

### Уникання забруднення глобального простору імен у коді сценаріїв

Область видимості найвищого рівня є спільною для всіх сценаріїв, вона може вміщати чимало функцій і глобальних змінних з різних файлів, тож аби уникнути конфліктів назв, важливо обмежувати число назв, оголошених глобально (це є значно меншою проблемою в [модулях](/uk/docs/Web/JavaScript/Guide/Modules#inshi-vidminnosti-mizh-moduliamy-ta-klasychnymy-stsenariiamy), але іноді обмеження області видимості тимчасових змінних досі є корисним, особливо коли файл дуже великий). Якщо є деякий ініціалізаційний код, який немає потреби використовувати повторно, можна скористатися патерном IIFE, і це краще, ніж використання оголошення функції або виразу-функції, оскільки такий підхід гарантує, що код виконується лише в одному місці один раз.

```js
// найвищий рівень сценарію (не модуля)

var globalVariable = (() => {
  // якийсь ініціалізаційний код
  let firstVariable = something();
  let secondVariable = somethingElse();
  return firstVariable + secondVariable;
})();

// до firstVariable і secondVariable не можна звернутися поза тілом функції.
```

### Патерн модуля

Також можна скористатися IIFE, аби створювати приватні та публічні змінні та методи. Про складніше використання патерну модуля та інших варіантів використання IIFE можна прочитати в книзі Addy Osmani "Learning JavaScript Design Patterns".

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // Ця змінна є приватною
    const doBadThings = () => {
      console.log("Я зроблю твоєму гаманцеві зле");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Недостатньо коштів";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "Я зроблю твоєму гаманцеві зле"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; цей метод – приватний
const secondAccount = makeWithdraw(20); // "Я зроблю твоєму гаманцеві зле"
console.log(secondAccount.withdraw(30)); // "Недостатньо коштів"
console.log(secondAccount.withdraw(20)); // 0
```

### Цикл for з var до ES6

Наступне застосування IIFE можна побачити в старому коді, написаному до запровадження оголошень `let` і `const` з блоковою областю видимості. У разі оператора `var` є лише функційні та глобальна області видимості.
Уявімо, що треба створити 2 кнопки з текстом Кнопка 0 та Кнопка 1, і коли на них
клацають, вони мають виводити 0 та 1. Наступний код не працює:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Кнопка ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

Бувши клацнутими, і кнопка Кнопка 0, і кнопка Кнопка 1 виводять 2, тому що `i` є глобальною,
і її останнє значення – 2. Аби виправити цю проблему до ES6, можна було б скористатися патерном IIFE:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Кнопка ${i}`;
  button.onclick = (function (copyOfI) {
    return function () {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

Бувши клацнутими, кнопки Кнопка 0 та Кнопка 1 виводять 0 та 1 відповідно. За допомогою інструкції `let` можна зробити так:

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Кнопка ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

Бувши клацнутими, ці кнопки виводять 0 і 1.

### Інструкції контролю плину виконання на місці виразів

IIFE дає змогу використовувати мовні конструкції, такі як `switch`, у виразах.

```js
someObject.property = (() => {
  switch (someVariable) {
    case 0:
      return "нуль";
    case 1:
      return "один";
    default:
      return "невідомо";
  }
})();
```

Цей підхід може бути особливо корисним, коли хочеться зробити змінну `const`, але
змушені використовувати `let` або `var` під час ініціалізації:

```js
let onlyAssignedOnce;
try {
  onlyAssignedOnce = someFunctionThatMightThrow();
} catch (e) {
  onlyAssignedOnce = null;
}
```

За допомогою IIFE можна зробити цю змінну `const`:

```js
const onlyAssignedOnce = (() => {
  try {
    return someFunctionThatMightThrow();
  } catch (e) {
    return null;
  }
})();
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
