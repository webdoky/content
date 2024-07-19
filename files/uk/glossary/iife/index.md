---
title: IIFE
slug: Glossary/IIFE
page-type: glossary-definition
---

{{GlossarySidebar}}

Зразу закличний вираз функції (**IIFE**) – це {{glossary("function", "функція")}} {{glossary("JavaScript")}}, що виконується одразу після свого визначення.
Назву IIFE пропонує Бен Альман у [своєму блозі](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

```js
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

Це патерн проєктування, який також відомий як {{glossary("Self-Executing Anonymous Function", "самовиклична анонімна функція")}} і має дві основні частини:

1. Перша з них – це анонімна функція з лексичною областю видимості, обмежена {{jsxref("Operators/Grouping", "оператором групування")}} `()`. Це запобігає звертанням до змінних всередині IIFE та забрудненню глобальної області видимості.
2. Друга частина створює негайно закличний вираз функції `()`, завдяки чому рушій JavaScript зразу ж інтерпретує функцію.

## Ситуації для використання

### Уникання забруднення глобального простору імен

Оскільки наш застосунок може містити чимало функцій і глобальних змінних з різних файлів коду, важливо обмежувати кількість глобальних змінних. Якщо є якийсь код ініціалізації, який немає потреби використовувати знову, то можна скористатися патерном IIFE. Оскільки цей код не використовуватиметься знову, то використання IIFE в цьому випадку краще, ніж використання оголошення функції або виразу функції.

```js
(() => {
  // якийсь ініціалізаційний код
  let firstVariable;
  let secondVariable;
})();

// firstVariable і secondVariable будуть викинуті після виконання функції.
```

### Виконання асинхронної функції

IIFE з [`async`](/uk/docs/Web/JavaScript/Reference/Operators/async_function) дає змогу користуватися [`await`](/uk/docs/Web/JavaScript/Reference/Operators/await) і [`for-await`](/uk/docs/Web/JavaScript/Reference/Statements/for-await...of) навіть у старих браузерах і середовищах JavaScript, які не мають [await на верхньому рівні](/uk/docs/Web/JavaScript/Reference/Operators/await#await-na-zovnishniomu-rivni):

```js
const getFileStream = async (url) => {
  // реалізація
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
```

### Патерн модуля

Також IIFE можна використовувати для створення приватних і публічних змінних і методів. Складніше використання патерну модуля та інші застосування IIFE можна прочитати в книзі Едді Османі "Learning JavaScript Design Pattern".

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // Ця змінна є приватною
    const doBadThings = () => {
      console.log("Я зроблю недобрі речі з вашими грошима");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Недостатньо грошей";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "Я зроблю недобрі речі з вашими грошима"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; цей метод є приватним
const secondAccount = makeWithdraw(20); // "Я зроблю недобрі речі з вашими грошима"
console.log(secondAccount.withdraw(30)); // "Недостатньо грошей"
console.log(secondAccount.withdraw(20)); // 0
```

### Для циклу for з var до ES6

У старому коді, з часів до запровадження інструкцій **let** і **const** в **ES6** і блокової області видимості, можна зустріти наступне застосування IIFE. Для інструкції **var** існують лише функційні області видимості та глобальна. Припустімо, що потрібно створити 2 кнопки з текстом, відповідно, Кнопка 0 і Кнопка 1, і при натисканні на них вони мають виводити повідомлення 0 і 1. Наступний код не працює:

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

Коли їх клацнути, то кнопки 0 і 1 виведуть 2, оскільки `i` є глобальною змінною з останнім значенням 2. Щоб виправити цю проблему до ES6, можна було скористатися патерном IIFE:

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

Коли їх клацнути, то кнопки 0 і 1 виведуть 0 і 1.
Змінна `i` оголошена глобально.
За допомогою інструкції **let** можна зробити просто так:

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

Коли їх клацнути, ці кнопки виведуть 0 і 1.

## Дивіться також

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- Споріднені терміни глосарія:
  - {{Glossary("Function", "Функція")}}
  - {{Glossary("Self-Executing Anonymous Function", "Самовиклична анонімна функція")}}
