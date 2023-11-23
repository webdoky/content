---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
page-type: javascript-static-method
browser-compat: javascript.builtins.Promise.resolve
---

{{JSRef}}

Статичний метод **`Promise.resolve()`** (вирішити, розв'язати) "вирішує" дане значення до об'єкта {{jsxref("Promise")}}. Якщо це значення саме є промісом, то повертається цей проміс; якщо значення є [очікуваним](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise#ochikuvani), то `Promise.resolve()` викличе метод `then()` з двома підготованими ним функціями зворотного виклику; інакше – повернений проміс буде сповнений переданим значенням.

Ця функція сплющує вкладені шари промісоподібних об'єктів (наприклад, проміс, що сповнюється промісом, котрий сповнюється чимось іще) до єдиного шару – проміс, котрий сповнюється значенням, котре не є очікуваним.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## Синтаксис

```js-nolint
Promise.resolve(value)
```

### Параметри

- `value`
  - : Аргумент, котрим буде вирішено цей `Promise`. Також може бути об'єктом `Promise`, або очікуваним об'єктом, значення котрого буде застосовано для вирішення.

### Повернене значення

Об'єкт {{jsxref("Promise")}}, котрий вирішується переданим значенням, або проміс, котрий передали як значення, якщо це значення було об'єктом-промісом. Вирішений проміс може мати будь-який зі станів: сповнений, відхилений або очікування. Наприклад, вирішення відхиленим промісом все одно дасть відхилений проміс.

## Опис

`Promise.resolve()` _вирішує_ проміс, що не те саме, що сповнення або відхилення промісу. Визначення термінології – в [описі Promise](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise#opys). Якщо стисло, то `Promise.resolve()` повертає проміс, чий кінцевий стан залежить від іншого промісу, очікуваного об'єкта або іще якогось значення.

`Promise.resolve()` є узагальненим і підтримує підкласи, а отже – його можна викликати на підкласах `Promise`, і результат буде промісом типу підкласу. Щоб це уможливити, конструктор підкласу мусить реалізувати таку ж сигнатуру, як конструктор [`Promise()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise): приймання єдиної функції `executor`, котра може бути викликана з функціями зворотного виклику `resolve` і `reject` як параметрами.

`Promise.resolve()` має особливу логіку для обробки примірників `Promise`. Коли `value` належить до класу `Promise` або його підкласу, і `value.constructor === Promise`, то `Promise.resolve()` безпосередньо повертає `value`, не створюючи новий примірник `Promise`. У решті випадків `Promise.resolve()` по суті є скороченням для `new Promise((resolve) => resolve(value))`.

Основна частина логіки вирішення насправді реалізована в [функції вирішення](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#funktsiia-vyrishennia), переданій конструктором `Promise()`. У підсумку:

- Якщо передається значення, котре не є [очікуваним об'єктом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise#ochikuvani), то повернений проміс зразу сповнюється цим значенням.
- Якщо передається очікуваний об'єкт, то повернений проміс приймає стан цього очікуваного, викликаючи метод `then` та передаючи пару функцій вирішення як аргументи. (Однак через те, що нативні проміси проходять крізь `Promise.resolve()` без змін, без утворення обгортки, то метод `then` на нативних промісах не викликається.) Якщо функція вирішення отримує іще один очікуваний об'єкт, то він так само вирішується, тож остаточне значення сповнення промісу ніколи не буде очікуваним об'єктом.

## Приклади

### Застосування статичного методу Promise.resolve

```js
Promise.resolve("Успіх").then(
  (value) => {
    console.log(value); // "Успіх"
  },
  (reason) => {
    // не викликається
  },
);
```

### Вирішення масивом

```js
const p = Promise.resolve([1, 2, 3]);
p.then((v) => {
  console.log(v[0]); // 1
});
```

### Вирішення іншим промісом

`Promise.resolve()` повторно використовує наявні примірники `Promise`. Коли він вирішується нативним промісом, то повертає той самий примірник промісу, не створюючи обгортки.

```js
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((value) => {
  console.log(`значення: ${value}`);
});
console.log(`original === cast ? ${original === cast}`);

// По порядку виводить:
// original === cast ? true
// значення: 33
```

Зворотний порядок журналювання спричинений фактом того, що обробники `then` викликаються асинхронно. Більше про це – на довідковій сторінці {{jsxref("Promise/then", "then()")}}.

### Вирішення очікуваними об'єктами та викидання Error

```js
// Вирішення очікуваним об'єктом
const p1 = Promise.resolve({
  then(onFulfill, onReject) {
    onFulfill("сповнено!!");
  },
});
console.log(p1 instanceof Promise); // true, об'єкт приводиться до Promise

p1.then(
  (v) => {
    console.log(v); // "сповнено!"
  },
  (e) => {
    // не викликається
  },
);

// Очікуваний об'єкт викидає помилку
// Проміс відхиляється
const p2 = Promise.resolve({
  then() {
    throw new TypeError("Викидаємо");
  },
});
p2.then(
  (v) => {
    // не викликається
  },
  (e) => {
    console.error(e); // TypeError: Викидаємо
  },
);

// Очікуваний об'єкт викидає помилку після зворотного виклику
// Проміс вирішується
const p3 = Promise.resolve({
  then(onFulfilled) {
    onFulfilled("Вирішуємо");
    throw new TypeError("Викидаємо");
  },
});

const p3 = Promise.resolve(thenable);
p3.then(
  (v) => {
    console.log(v); // "Вирішуємо"
  },
  (e) => {
    // не викликається
  },
);
```

Вкладені очікувані об'єкти "глибоко сплющуються" до єдиного промісу.

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // Цей очікуваний сповнюється іншим очікуваним
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(thenable).then((v) => {
  console.log(v); // 42
});
```

> **Застереження:** Не слід викликати `Promise.resolve()` на очікуваному об'єкті, що вирішується самим собою. Це призводить до нескінченної рекурсії, адже намагається сплющити проміс нескінченної вкладеності.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // Призведе до нескінченної рекурсії
```

### Виклик resolve() на конструкторі, що не є Promise

`Promise.resolve()` є узагальненим методом. Він може викликатися на будь-якому конструкторі, що реалізовує таку ж сигнатуру, як конструктор `Promise()`. Наприклад, можна викликати його на конструкторі, що передає `console.log` як `resolve`:

```js
class NotPromise {
  constructor(executor) {
    // Функції "resolve" і "reject" і близько не поводяться як аналоги
    // в нативних промісів, але Promise.resolve() усе одно їх викликає.
    executor(
      (value) => console.log("Вирішено", value),
      (reason) => console.log("Відхилено", reason),
    );
  }
}

Promise.resolve.call(NotPromise, "гов"); // Виводить "Вирішено гов"
```

Спроможність сплющувати вкладені очікувані об'єкти реалізована функцією вирішення конструктора `Promise()`, тож якщо викликати метод `Promise.resolve()` на іншому конструкторі, то вкладені очікувані можуть не сплющуватися, залежно від того, як такий конструктор реалізовує своє вирішення.

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // Очікуваний сповнюється іншим очікуваним
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve.call(NotPromise, thenable); // Виводить "Вирішено { then: [Function: then] }"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Promise")}}
