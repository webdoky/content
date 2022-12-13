---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
tags:
  - Class
  - JavaScript
  - Object
  - Reference
  - TypeError
browser-compat: javascript.builtins.TypeError
---

{{JSRef}}

Об'єкт **`TypeError`** (помилка типу) представляє помилку, при якій операція не може бути виконана, здебільшого (але не винятково) через те, що значення не належить до очікуваного типу.

`TypeError` може бути викинуто, коли:

- операнд або аргумент, переданий до функції, несумісний з типом, очікуваним оператором або функцією; або
- при спробі змінити значення, котре не може бути змінене; або
- при спробі використати значення у невідповідний спосіб.

`TypeError` – це {{Glossary("serializable object", "серіалізовний об'єкт")}}, тож може бути клонований за допомогою {{domxref("structuredClone()")}} або скопійований між [воркерами](/uk/docs/Web/API/Worker) за допомогою {{domxref("Worker/postMessage()", "postMessage()")}}.

## Конструктор

- {{jsxref("Global_Objects/TypeError/TypeError", "TypeError()")}}
  - : Створює новий об'єкт `TypeError`.

## Властивості примірника

- {{jsxref("Error.prototype.message", "TypeError.prototype.message")}}
  - : Повідомлення помилки. Успадковано від {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "TypeError.prototype.name")}}
  - : Ім'я помилки. Успадковано від {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "TypeError.prototype.cause")}}
  - : Причина помилки. Успадковано від {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "TypeError.prototype.fileName")}} {{non-standard_inline}}
  - : Шлях до файлу, що запустив цю помилку. Успадковано від {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "TypeError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Номер рядка, що запустив цю помилку. Успадковано від {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "TypeError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Номер колонки в рядку, що запустила цю помилку. Успадковано від {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "TypeError.prototype.stack")}} {{non-standard_inline}}
  - : Траса стека. Успадковано від {{jsxref("Error")}}.

## Приклади

### Перехоплення TypeError

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### Створення TypeError

```js
try {
  throw new TypeError("Привіт", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Привіт"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Error")}}
