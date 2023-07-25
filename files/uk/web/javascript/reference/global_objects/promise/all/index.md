---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
page-type: javascript-static-method
browser-compat: javascript.builtins.Promise.all
---

{{JSRef}}

Статичний метод **`Promise.all()`** (усі) приймає на вхід ітерований об'єкт із промісами й повертає один {{jsxref("Promise", "проміс")}}. Цей повернений проміс сповнюється, коли сповнено всі вхідні проміси (включно з випадком, коли передана порожня колекція), масивом значень сповнення. Він відхиляється, коли відхиляється будь-який з вихідних промісів, з причиною цього першого відхилення.

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## Синтаксис

```js-nolint
Promise.all(iterable)
```

### Параметри

- `iterable`
  - : [Ітерований об'єкт](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#protokol-iterovanoho-obiekta) (наприклад, {{jsxref("Array")}}) з промісами.

### Повернене значення

{{jsxref("Promise")}}, котрий:

- **Одразу сповнений**, якщо переданий _ітерований об'єкт_ — порожній.
- **Асинхронно сповнений**, якщо усі проміси в переданому `iterable` – сповнюються. Значення сповнення є масивом значень сповнення, у порядку передачі промісів, незалежно від порядку їх завершення. Якщо передане `iterable` – непорожнє, але не містить промісів у стані очікування, то повернений проміс все одно сповнюється асинхронно (а не синхронно).
- **Асинхронно відхилений**, якщо будь-який з промісів даного `iterable` відхиляється. Причиною відхилення стає причина відхилення першого відхиленого промісу.

## Опис

Метод `Promise.all()` – один з методів [рівночасності промісів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise#rivnochasnist-promisiv). Він може бути корисним для агрегування результатів кількох промісів. Здебільшого його використовують, коли є кілька взаємопов'язаних асинхронних задач, на котрі в цілому покладається код для своєї успішної роботи – і які всі повинні сповнитись до того, як виконання коду продовжиться.

`Promise.all()` відхилиться одразу, як тільки відхилиться **будь-який** із переданих промісів. У порівнянні з ним проміс, повернений методом {{jsxref("Promise.allSettled()")}}, очікуватиме аж до завершення всіх промісів, незалежно від того, чи відхилиться якийсь із них, чи ні. Використовуйте `allSettled()`, якщо потрібний підсумковий результат кожного проміса з вихідної ітерованої колекції.

## Приклади

### Застосування Promise.all()

`Promise.all` очікує на всі сповнення (або першого відхилення).

```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

Якщо `iterable` містить непромісні значення — їх буде проігноровано, проте включено до поверненого промісом масиву значень (за умови, що проміс сповнюється):

```js
// Усі значення – непроміси, тож повернений проміс – сповнюється
const p = Promise.all([1, 2, 3]);
// Єдиний вихідний проміс – відразу сповнений,
// тож повернений проміс сповнюється також
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// Один (і єдиний) вихідний проміс відхиляється,
// тож повернений проміс відхиляється також
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// За допомогою setTimeout можна виконати код після очищення черги
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// Друкує:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### Асинхронність чи синхронність методу Promise.all

Наступний приклад демонструє асинхронність `Promise.all`, коли передано непорожнє значення `iterable`:

```js
// Передається масив уже вирішених промісів,
// аби запустити Promise.all якнайшвидше
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// Негайно друкує значення p
console.log(p);

// За допомогою setTimeout можна виконати код після очищення черги
setTimeout(() => {
  console.log("тепер черга порожня");
  console.log(p);
});

// Друкує, по порядку:
// Promise { <state>: "pending" }
// тепер черга порожня
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

Аналогічна ситуація відбуватиметься, якщо `Promise.all` відхиляється:

```js
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(() => {
  console.log("тепер черга порожня");
  console.log(p);
});

// Друкує
// Promise { <state>: "pending" }
// тепер черга порожня
// Promise { <state>: "rejected", <reason>: 44 }
```

Проте, `Promise.all` вирішується синхронно лише в тому випадку, якщо передано порожній ітерований об'єкт (`iterable`):

```js
const p = Promise.all([]); // Вирішується негайно
const p2 = Promise.all([1337, "привіт"]); // Непромісні значення — проігноруються, проте обчислення виконається асинхронно
console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("тепер черга порожня");
  console.log(p2);
});

// Друкує
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// тепер черга порожня
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### Застосування Promise.all() вкупі з асинхронними функціями

Всередині [асинхронних функцій](/uk/docs/Web/JavaScript/Reference/Statements/async_function) дуже поширена ситуація "переочікування" ("over-await") свого коду. Наприклад, на основі наступних функцій:

```js
function promptForDishChoice() {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
<form method="dialog">
  <p>Чого бажаєте?</p>
  <select>
    <option value="pizza">Піцу</option>
    <option value="pasta">Пасти</option>
    <option value="salad">Салату</option>
  </select>
  <menu>
    <li><button value="cancel">Скасувати</button></li>
    <li><button type="submit" value="ok">Гаразд</button></li>
  </menu>
</form>
    `;
    dialog.addEventListener("close", () => {
      if (dialog.returnValue === "ok") {
        resolve(dialog.querySelector("select").value);
      } else {
        reject(new Error("Користувач скасував діалог"));
      }
    });
    document.body.appendChild(dialog);
    dialog.showModal();
  });
}
async function fetchPrices() {
  const response = await fetch("/prices");
  return await response.json();
}
```

Можна написати таку функцію:

```js example-bad
async function getPrice() {
  const choice = await promptForDishChoice();
  const prices = await fetchPrices();
  return prices[choice];
}
```

Проте зверніть увагу, що виконання `promptForDishChoice` і `fetchPrices` не залежать від результатів виконання одне одного. Поки користувач обирає свою страву, непогано у фоні отримати ціни, але в коді вище оператор [`await`](/uk/docs/Web/JavaScript/Reference/Operators/await) змусить асинхронну функцію призупинитися, поки не зроблено вибір, а потім знову – поки не отримані ціни. Можна використати `Promise.all`, аби запустити ці операції рівночасно, щоб користувачу не треба було чекати отримання цін для видачі результату:

```js example-good
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice(),
    fetchPrices(),
  ]);
  return prices[choiceValue];
}
```

У цьому випадком `Promise.all` є найкращим вибором серед [методів рівночасності](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise#rivnochasnist-promisiv), адже обробка помилок є інтуїтивною: якщо один з промісів відхиляється, то результат стає недоступним, адже ввесь вираз `await` викидає помилку.

`Promise.all` приймає колекцію промісів, тож якщо він використовується для паралелізації виконання декількох асинхронних функцій, слід викликати асинхронні функції та використовувати повернені ними проміси. Безпосередня передача функцій в `Promise.all` не працює, адже вони не є промісами.

```js example-bad
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice,
    fetchPrices,
  ]);
  // `choice` і `prices` – ті самі асинхронні функції;
  // Promise.all() не робить нічого з непромісами
}
```

### Логіка швидкого провалу методу Promise.all

`Promise.all` відхиляється, якщо відхиляється один із переданих елементів. Наприклад, якщо передати до нього чотири проміси, що вирішуються після певної паузи, і один проміс, який негайно відхиляється — `Promise.all` буде одразу відхилено.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("один"), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("два"), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("три"), 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("чотири"), 4000);
});
const p5 = new Promise((resolve, reject) => {
  reject(new Error("відхилити"));
});

// Застосувавши .catch:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Друкує:
// "reject"
```

Є можливість змінити цю поведінку, шляхом обробки можливих відхилень:

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("затримане_вирішення_p1"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error("негайне_відхилення_p2"));
});

Promise.all([p1.catch((error) => error), p2.catch((error) => error)]).then(
  (values) => {
    console.log(values[0]); // "затримане_вирішення_p1"
    console.error(values[1]); // "Error: негайне_відхилення_p2"
  }
);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Promise")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
