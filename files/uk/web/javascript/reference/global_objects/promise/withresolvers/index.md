---
title: Promise.withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
page-type: javascript-static-method
browser-compat: javascript.builtins.Promise.withResolvers
---

{{JSRef}}

Статичний метод **`Promise.withResolvers()`** (з вирішувачами) повертає об'єкт, що вміщає новий об'єкт {{jsxref("Promise")}} і дві функції для його вирішення або відхилення, що відповідають двом параметрам, що передаються до виконувача конструктора {{jsxref("Promise/Promise", "Promise()")}}.

## Синтаксис

```js-nolint
Promise.withResolvers()
```

### Параметри

Жодних.

### Повернене значення

Простий об'єкт, що вміщає наступні властивості:

- `promise`
  - : Об'єкт {{jsxref("Promise")}}.
- `resolve`
  - : Функція, що вирішує цей проміс. Її семантику дивіться в довідці конструктора {{jsxref("Promise/Promise", "Promise()")}}.
- `reject`
  - : Функція, що відхиляє проміс. Її семантику дивіться в довідці конструктора {{jsxref("Promise/Promise", "Promise()")}}.

## Опис

`Promise.withResolvers()` точно відповідає наступному коду:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Крім того, що він стисліший і не вимагає використання {{jsxref("Statements/let", "let")}}.

Ключова відмінність при використанні `Promise.withResolvers()` – те, що функції вирішення та відхилення тепер живуть у тій же області видимості, що й сам проміс, а не створюються та використовуються лише всередині виконувача. Завдяки цьому стають можливими складніші варіанти використання, наприклад, повторне використання цих функцій для багаторазових подій, особливо в випадку потоків і черг. Це також, як правило, призводить до меншої вкладеності, ніж обгортання великої кількості логіки всередині виконувача.

Статичний метод `Promise.withResolvers()` є узагальненим і підтримує підкласи, тобто його можна викликати на підкласах `Promise`, і результат міститиме проміс типу підкласу. Для цього конструктор підкласу повинен реалізувати ту саму сигнатуру, що й конструктор [`Promise()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) – приймати одну функцію `executor`, яку можна викликати з функціями зворотного виклику `resolve` і `reject` як параметрами.

## Приклади

### Перетворення потоку на асинхронний ітерований об'єкт

Умови для використання `Promise.withResolvers()` – це коли проміс повинен бути вирішений або відхилений якимось слухачем подій, який не може бути загорнутий всередину виконувача проміса. Наступний приклад перетворює [читабельний потік](https://nodejs.org/api/stream.html#class-streamreadable) Node.js на [асинхронний ітерований об'єкт](/uk/docs/Web/JavaScript/Reference/Statements/async_function*). Кожний `promise` тут представляє одну порцію доступних даних, і щоразу, коли прочитується поточна порція, створюється проміс для наступної. Зверніть увагу на те, що слухачі подій приєднуються лише один раз, але фактично кожного разу викликають різні версії функцій `resolve` і `reject`.

```js
async function* readableToAsyncIterable(stream) {
  let { promise, resolve, reject } = Promise.withResolvers();
  stream.on("error", (error) => reject(error));
  stream.on("end", () => resolve());
  stream.on("readable", () => resolve());

  while (stream.readable) {
    await promise;
    let chunk;
    while ((chunk = stream.read())) {
      yield chunk;
    }
    ({ promise, resolve, reject } = Promise.withResolvers());
  }
}
```

### Виклик withResolvers() на конструкторі, відмінному від Promise

Статичний метод `Promise.withResolvers()` – узагальнений. Його можна викликати на будь-якому конструкторі, що реалізує ту саму сигнатуру, що й конструктор [`Promise()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise). Наприклад, його можна викликати на конструкторі, що передає до `executor` як функції `resolve` і `reject` функцію `console.log`:

```js
class NotPromise {
  constructor(executor) {
    // Функції "resolve" і "reject" нічим не схожі на функції нативного
    // проміса, але Promise.withResolvers() просто повертає їх як є.
    executor(
      (value) => console.log("Вирішено", value),
      (reason) => console.log("Відхилено", reason),
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
resolve("привіт");
// Виводить: Вирішено привіт
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Promise.withResolvers` у складі `core-js`](https://github.com/zloirock/core-js#promisewithresolvers)
- Посібник [Використання промісів](/uk/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- [Конструктор `Promise()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
