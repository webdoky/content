---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Prototype
browser-compat: javascript.builtins.Promise.then
---

{{JSRef}}

Метод **`then()`** (тоді) повертає {{jsxref("Promise")}}. Він приймає два аргументи – функції зворотного виклику на випадок успіху й невдачі `Promise`, відповідно.

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

> **Примітка:** Якщо один з аргументів пропущений, або не є функцією, то `then` не вистачатиме обробників, але ніяких помилок породжено не буде. Якщо `Promise`, метод `then` викликається, набуває стану (`fulfillment` чи `rejection`), для якого `then` не має обробника, то повернений проміс набуває остаточного стану оригінального `Promise`, на якому викликали `then`.

## Синтаксис

```js-nolint
then(onFulfilled)
then(onFulfilled, onRejected)

then(
  (value) => { /* обробник сповнення */ },
  (reason) => { /* обробник відхилення */ },
);
```

### Параметри

- `onFulfilled` {{optional_inline}}
  - : {{jsxref("Function")}}, що викликається, якщо `Promise` сповнюється. Ця функція має один аргумент – `fulfillment value`. Якщо цей параметр не є функцією, його внутрішньо замінюють функцією _ідентичності_ (`(x) => x`), котра просто передає значення сповнення далі.
- `onRejected` {{optional_inline}}
  - : {{jsxref("Function")}}, що викликається, якщо `Promise` відхиляється. Ця функція має один аргумент – `rejection reason`. Якщо цей параметр не є функцією, його внутрішньо замінюють функцією-_викидачем_ (`(x) => { throw x; }`), котра викидає отриману причину відхилення як помилку.

### Повернене значення

Щойно {{jsxref("Promise")}} сповнюється чи відхиляється, відповідна функція-обробник (`onFulfilled` або `onRejected`) викликається **асинхронно** (планується на наступну ітерацію потоку). Поведінка функції-обробника відповідає конкретному наборові правил. Якщо функція-обробник:

- повертає значення, то проміс, повернений `then`, вирішується поверненим значенням як власним.
- нічого не повертає, то проміс, повернений `then`, вирішується зі значенням `undefined`.
- викидає помилку, то проміс, повернений `then`, відхиляється з викинутою помилкою як власним значенням.
- повертає вже сповнений проміс, то проміс, повернений `then`, сповнюється значенням того проміса як власним.
- повертає вже відхилений проміс, то проміс, повернений `then`, відхиляється зі значенням того проміса як власним.
- повертає інший об'єкт проміса в стані **очікування**, то вирішення чи відхилення проміса, поверненого `then`, буде відповідати вирішенню чи відхиленню проміса, поверненого обробником. Крім цього, значення вирішення проміса, поверненого `then`, буде тим самим значенням, що й значення вирішення проміса, поверненого обробником.

Нижче – приклад, що демонструє асинхронність методу `then`.

```js
// використовується вирішений проміс, тож блок 'then' буде запущений негайно,
// але його обробники будуть запущені асинхронно, як це продемонстровано console.log
const resolvedProm = Promise.resolve(33);

const thenProm = resolvedProm.then((value) => {
  console.log(
    "це буде викликано після закінчення головного стеку. отримане й повернене значення: ",
    value
  );
  return value;
});
// негайне виведення значення thenProm
console.log(thenProm);

// за допомогою setTimeout можна відкласти виконання функції до миті, коли стек порожній
setTimeout(() => {
  console.log(thenProm);
});

// по порядку виводить:
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "це буде викликано після закінчення головного стеку. отримане й повернене значення: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
```

## Опис

Оскільки методи `then` і {{jsxref("Promise.prototype.catch()")}} повертають проміси, їх можна [скласти в ланцюжок](/uk/docs/Web/JavaScript/Guide/Using_promises#utvorennia-lantsiuzhkiv) – операція, що зветься _композицією_.

## Приклади

### Використання методу `then`

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Успіх!");
  // або
  // reject(new Error("Помилка!"));
});

p1.then(
  (value) => {
    console.log(value); // Успіх!
  },
  (reason) => {
    console.error(reason); // Помилка!
  }
);
```

### Нефункція замість одного з параметрів

```js
Promise.resolve(1).then(2).then(console.log); // друкує 1
Promise.reject(1).then(2, 2).then(console.log, console.log); // друкує 1
```

### Утворення ланцюжків

Метод `then` повертає `Promise`, що дає змогу утворювати ланцюжки промісів.

Якщо функція, передана в `then` як обробник, повертає `Promise`, то рівносильний `Promise` буде наданий наступному `then` у ланцюжку методів. Уривок коду нижче імітує асинхронний код за допомогою функції `setTimeout`.

```js
Promise.resolve("foo")
  // 1. Отримати "foo", причепити "bar", і передати це як вирішене значення в наступний then
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 1);
      })
  )
  // 2. отримати "foobar", зареєструвати функцію зворотного виклику для роботи з цим рядком
  // і вивести його в консоль, але не раніше повернення необробленого
  // рядка в наступний then
  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. надрукувати корисні повідомлення про те, як запускатиметься код в цьому розділі
  // до фактичної обробки рядка зімітованим асинхронним кодом у
  // у попередньому блоку then.
  .then((string) => {
    console.log(
      "Останній Then: ой... не потурбувалися створенням і поверненням проміса в попередньому then, тож порядок може бути трохи неочікуваним"
    );

    // Зверніть увагу, що `string` у цій точці не має частини 'baz'. Це
    // так через те, що ми зімітували її асинхронне додавання за допомогою функції setTimeout
    console.log(string); // foobar
  });

// по порядку виводить:
// Останній Then: ой... не потурбувалися створенням і поверненням проміса в попередньому then, тож порядок може бути трохи неочікуваним
// foobar
// foobarbaz
```

Коли значення повертається зсередини обробника `then`, фактично повернене значення – `Promise.resolve(<значення, повернене тим обробником, що був викликаний>)`.

```js
const p2 = new Promise((resolve, reject) => {
  resolve(1);
});

p2.then((value) => {
  console.log(value); // 1
  return value + 1;
}).then((value) => {
  console.log(value, " - Синхронне значення працює"); // 2 - Синхронне значення працює
});

p2.then((value) => {
  console.log(value); // 1
});
```

Виклик `then` поверне відхилений проміс, якщо функція викидає помилку чи повертає відхилений Promise.

```js
Promise.resolve()
  .then(() => {
    // Змушує .then() повернути відхилений проміс
    throw new Error("О ні!");
  })
  .then(
    () => {
      console.log("Не викликано.");
    },
    (error) => {
      console.error(`Викликана функція onRejected: ${error.message}`);
    }
  );
```

У всій решті викликів повертається проміс, що вирішується. В наступному прикладі перший `then()` поверне значення `42` загорнуте в Promise, що вирішується, навіть попри те, що попередній Promise в ланцюжку був відхилений.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42
  ) // onRejected повертає значення 42, котре загортається в Promise, що вирішується.
  .then((solution) => console.log(`Вирішено з ${solution}`)); // Вирішено з 42
```

На практиці нерідко бажано перехопити відхилені проміси, а не використовувати синтаксис `then` з двома варіантами, як показано нижче.

```js
Promise.resolve()
  .then(() => {
    // Змушує .then() повернути відхилений проміс
    throw new Error("О ні!");
  })
  .catch((error) => {
    console.error(`Викликана функція onRejected: ${error.message}`);
  })
  .then(() => {
    console.log(
      "Мене завжди викликають, навіть коли проміс попереднього then відхиляється"
    );
  });
```

Крім цього, ланцюжки можна використовувати для реалізації однієї функції з API на основі Promise на основі інакшої такої функції.

```js
function fetchCurrentData() {
  // API fetch() повертає Promise. Ця функція
  // надає подібний API, окрім того, що значення
  // сповнення Promise цієї функції зазнає
  // більшої обробки.
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") !== "application/json") {
      throw new TypeError();
    }
    const j = response.json();
    // можливо, певні дії над j

    // значення сповнення, надане користувачеві
    // fetchCurrentData().then()
    return j;
  });
}
```

Якщо `onFulfilled` повертає проміс, то повернене значення `then` буде вирішено чи відхилено згідно з цим промісом.

```js
function resolveLater(resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(() => {
    reject(new Error("Помилка"));
  }, 1000);
}

const p1 = Promise.resolve("foo");
const p2 = p1.then(() => {
  // Повернути тут проміс, котрий буде вирішений зі значенням 10 за 1 секунду
  return new Promise(resolveLater);
});
p2.then(
  (v) => {
    console.log("вирішено", v); // "вирішено", 10
  },
  (e) => {
    // не викликається
    console.error("відхилено", e);
  }
);

const p3 = p1.then(() => {
  // Повернути тут проміс, котрий буде відхилений зі значенням 'Помилка' за 1 секунду
  return new Promise(rejectLater);
});
p3.then(
  (v) => {
    // не викликається
    console.log("вирішено", v);
  },
  (e) => {
    console.error("відхилено", e); // "відхилено", 'Помилка'
  }
);
```

### Поліфіл у стилі window.setImmediate на основі промісів

Використання метода {{jsxref("Function.prototype.bind()")}} `Reflect.apply` ({{jsxref("Reflect.apply()")}}) для створення (нескасовної) функції в стилі {{domxref("window.setImmediate")}}.

```js
const nextTick = (() => {
  const noop = () => {}; // буквально
  const nextTickPromise = () => Promise.resolve().then(noop);

  const rfab = Reflect.apply.bind; // (thisArg, fn, thisArg, [...args])
  const nextTick = (fn, ...args) => (
    fn !== undefined
      ? Promise.resolve(args).then(rfab(null, fn, null))
      : nextTickPromise(),
    undefined
  );
  nextTick.ntp = nextTickPromise;

  return nextTick;
})();
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
