---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
page-type: javascript-class
browser-compat: javascript.builtins.Error
---

{{JSRef}}

Об'єкти **`Error`** (помилка) викидаються, коли трапляється помилка часу виконання. Об'єкт `Error` також може використовуватися як базовий об'єкт для винятків, визначених користувачем.

## Опис

Помилки часу виконання призводять до створення і викидання нових об'єктів `Error`.

`Error` – це {{Glossary("serializable object", "серіалізовний об'єкт")}}, тож він може бути клонований за допомогою {{domxref("structuredClone()")}} і скопійований між [воркерами](/uk/docs/Web/API/Worker) за допомогою {{domxref("Worker/postMessage()", "postMessage()")}}.

### Типи помилок

Окрім узагальненого конструктора `Error`, ядро JavaScript містить інші конструктори помилок. Про помилки клієнтського боку читайте [Інструкції обробки винятків](/uk/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#instruktsii-obrobky-vyniatkiv).

- {{jsxref("EvalError")}}
  - : Створює примірник, що представляє помилку, котра трапляється відносно глобальної функції {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("RangeError")}}
  - : Створює примірник, що представляє помилку, котра трапляється, коли числова змінна або параметр знаходяться поза своїм допустимим діапазоном.
- {{jsxref("ReferenceError")}}
  - : Створює примірник, що представляє помилку, котра трапляється при звертанні за недійсним посиланням.
- {{jsxref("SyntaxError")}}
  - : Створює примірник, що представляє помилку синтаксису.
- {{jsxref("TypeError")}}
  - : Створює примірник, що представляє помилку, котра трапляється, коли змінна або параметр має невідповідний тип.
- {{jsxref("URIError")}}
  - : Створює примірник, що представляє помилку, котра трапляється, коли в {{jsxref("encodeURI()")}} або {{jsxref("decodeURI()")}} передано невідповідні параметри.
- {{jsxref("AggregateError")}}
  - : Створює примірник, що представляє кілька помилок, загорнутих в одну помилку, коли операція потребує звітування про декілька помилок, наприклад, {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Створює примірник, що представляє помилку, котра трапляється тоді, коли викидається внутрішня помилка рушія JavaScript. Наприклад, "забагато рекурсії".

## Конструктор

- {{jsxref("Error/Error", "Error()")}}
  - : Створює новий об'єкт `Error`.

## Статичні методи

- `Error.captureStackTrace()` {{non-standard_inline}}
  - : Нестандартна функція V8, що створює на примірнику Error властивість {{jsxref("Error/stack", "stack")}}.
- `Error.stackTraceLimit` {{non-standard_inline}}
  - : Нестандартна числова властивість V8, що обмежує те, скільки фреймів стека включається в трасування стека помилки.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : Нестандартна функція V8, котра, якщо задана користувацьким кодом, викликається рушієм V8 для викинутих винятків, даючи користувачеві змогу задавати власне форматування трасувань стека.

## Властивості примірника

Ці властивості означені на `Error.prototype` і є спільними для всіх примірників `Error`.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : Функція-конструктор, що створила об'єкт-примірник. Для примірників `Error` початковим значенням є конструктор {{jsxref("Error/Error", "Error")}}.
- {{jsxref("Error.prototype.name")}}
  - : Представляє назву типу помилки. Для `Error.prototype.name` початковим значенням є `"Error"`. Підкласи, наприклад, {{jsxref("TypeError")}} і {{jsxref("SyntaxError")}}, мають власні властивості `name`.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : Нестандартна властивість для трасування стека.

Ці властивості є власними властивостями кожного окремого примірника `Error`.

- {{jsxref("Error/cause", "cause")}}
  - : Причина помилки, що вказує на причину викидання помилки – зазвичай інша, перехоплена помилка. Для створених користувачем об'єктів `Error`, це значення, що задається властивістю `cause` другого аргументу конструктора.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : Нестандартна властивість Mozilla для номера колонки в рядку, що спричинила помилку.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : Нестандартна властивість Mozilla для шляху до файлу, що спричинив помилку.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : Нестандартна властивість Mozilla для номера рядка у файлі, що спричинив помилку.
- {{jsxref("Error/message", "message")}}
  - : Повідомлення помилки. Для створених користувачем об'єктів `Error` це рядок, заданий як перший аргумент конструктора.

## Методи примірника

- {{jsxref("Error.prototype.toString()")}}
  - : Повертає рядок, що представляє заданий об'єкт. Заміщує метод {{jsxref("Object.prototype.toString()")}}.

## Приклади

### Викидання узагальненої помилки

Зазвичай об'єкт `Error` створюють з наміром викинути його за допомогою ключового слова {{jsxref("Statements/throw", "throw")}}.
Обробити помилку можна за допомогою конструкції {{jsxref("Statements/try...catch", "try...catch")}}:

```js
try {
  throw new Error("Ой!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Обробка помилок конкретного типу

Обробляти помилки лише певного типу можна шляхом перевірки типу помилки за допомогою ключового слова {{jsxref("Operators/instanceof", "instanceof")}}:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(`${e.name}: ${e.message}`);
  } else if (e instanceof RangeError) {
    console.error(`${e.name}: ${e.message}`);
  }
  // тощо.
  else {
    // Якшо жодна з перевірок не спрацювала – залишити Error без обробки
    throw e;
  }
}
```

### Розрізнення подібних помилок

Іноді блок коду може зазнавати невдачі з причин, що потребують різної обробки, але викидають дуже подібні помилки (наприклад, з однаковими типом і повідомленням).

Якщо немає контролю над вихідними помилками, що викидаються, то один з варіантів – перехоплювати їх і викидати нові об'єкти `Error`, що мають конкретніші повідомлення.
Вихідна помилка повинна бути передана в новий `Error` у параметр [`options`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#options) конструктора як його властивість `cause`. Це дає впевненість щодо того, що блокам try-catch вищого рівня доступні вихідні помилка та трасування стека.

Приклад нижче показує це для двох методів, що інакше зазнавали б невдачі з подібними помилками (`doFailSomeWay()` і `doFailAnotherWay()`):

```js
function doWork() {
  try {
    doFailSomeWay();
  } catch (err) {
    throw new Error("Якось не вийшло", { cause: err });
  }
  try {
    doFailAnotherWay();
  } catch (err) {
    throw new Error("Не вийшло якось інакше", { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch (err.message) {
    case "Якось не вийшло":
      handleFailSomeWay(err.cause);
      break;
    case "Не вийшло якось інакше":
      handleFailAnotherWay(err.cause);
      break;
  }
}
```

> **Примітка:** При написанні бібліотеки краще використовувати причину помилки для розрізнення різних помилок, що породжуються, а не просити користувачів бібліотеки розбирати повідомлення помилок. Шукайте приклад на [сторінці причини помилки](/uk/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#nadannia-strukturovanykh-danykh-yak-prychyny-pomylky).

[Власні типи помилок](#vlasni-typy-pomylok) також можуть використовувати властивість `cause`, за умови, що конструктор підкласів передає параметр `options` при виклику `super()`. Конструктор базового класу `Error()` зчитає `options.cause` та означить на новому примірнику помилки властивість `cause`.

```js
class MyError extends Error {
  constructor(message, options) {
    // Необхідно передавати `options` як другий параметр, аби встановити властивість "cause".
    super(message, options);
  }
}

console.log(new MyError("перевірка", { cause: new Error("причина") }).cause);
// Error: причина
```

### Власні типи помилок

Може з'явитись потреба означити власні типи помилок, похідні від `Error`, аби мати змогу виконувати `throw new MyError()` і використовувати `instanceof MyError` для перевірки ґатунку помилки в обробнику помилок. Такий підхід призводить до чистішого та сталішого коду обробки помилок.

Читайте заглиблену дискусію на StackOverflow – ["Що є добрим способом розширювати Error у JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript).

> **Застереження:** Вбудоване створення підкласів не може бути надійно трансльовано у код до ES6, тому що немає способу сконструювати базовий клас із конкретним значенням `new.target` без {{jsxref("Reflect.construct()")}}. Необхідне [додаткове налаштування](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) або ручний виклик {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} у кінці конструктора; без цього сконструйований примірник не буде примірником `CustomError`. Більше інформації – у [ЧаПах TypeScript](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work).

> **Примітка:** Частина браузерів включає конструктор `CustomError` у трасування стека при використанні класів ES2015.

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Передача решти аргументів (включно зі специфічними щодо виробника браузера) батьківському конструктору
    super(...params);

    // Збереження коректного трасування стека з місця, де була викинута наша помилка (доступно лише у V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Власна інформація для зневадження
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
  console.error(e.stack); // stacktrace
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Error` з підтримкою `cause` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [API трасування стека](https://v8.dev/docs/stack-trace-api) в документації V8
