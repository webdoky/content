---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
page-type: javascript-class
browser-compat: javascript.builtins.TypeError
---

{{JSRef}}

Об'єкт **`TypeError`** (помилка типу) представляє помилку, при якій операція не може бути виконана, здебільшого (але не винятково) через те, що значення не належить до очікуваного типу.

`TypeError` може бути викинуто, коли:

- операнд або аргумент, переданий до функції, несумісний з типом, очікуваним оператором або функцією; або
- при спробі змінити значення, котре не може бути змінене; або
- при спробі використати значення у невідповідний спосіб.

`TypeError` – це {{Glossary("serializable object", "серіалізовний об'єкт")}}, тож може бути клонований за допомогою {{domxref("structuredClone()")}} або скопійований між [воркерами](/uk/docs/Web/API/Worker) за допомогою {{domxref("Worker/postMessage()", "postMessage()")}}.

`TypeError` є підкласом {{jsxref("Error")}}.

## Конструктор

- {{jsxref("TypeError/TypeError", "TypeError()")}}
  - : Створює новий об'єкт `TypeError`.

## Властивості примірника

_Також успадковує властивості примірника від свого предка – {{jsxref("Error")}}._

Ці властивості означені на `TypeError.prototype` і є спільними для всіх примірників `TypeError`.

- {{jsxref("Object/constructor", "TypeError.prototype.constructor")}}
  - : Функція-конструктор, що створила об'єкт-примірник. Для примірників `TypeError` початковим значенням є конструктор {{jsxref("TypeError/TypeError", "TypeError")}}.
- {{jsxref("Error/name", "TypeError.prototype.name")}}
  - : Представляє назву типу помилки. Для `TypeError.prototype.name` початковим значенням є `"TypeError"`.

## Методи примірника

_Успадковує методи примірника від свого предка – {{jsxref("Error")}}_.

## Приклади

### Перехоплення TypeError

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Стек помилки
}
```

### Створення TypeError

```js
try {
  throw new TypeError("Привіт");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Привіт"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Стек помилки
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Error")}}
