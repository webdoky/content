---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.keys
---

{{JSRef}}

Статичний метод **`Object.keys()`** (ключі) повертає масив, що складається з імен власних перелічуваних властивостей переданого об'єкта, що мають рядкові ключі.

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## Синтаксис

```js-nolint
Object.keys(obj)
```

### Параметри

- `obj` (об'єкт)
  - : Об'єкт.

### Повернене значення

Масив рядків, що позначають ключі власних перелічуваних властивостей даного об'єкта, що мають рядкові ключі.

## Опис

`Object.keys()` повертає масив, чиї елементи — рядки, які відповідають перелічуваним властивостям, що знаходяться безпосередньо на об'єкті `object`. Порядок обробки такий само, як в циклі {{jsxref("Statements/for...in", "for...in")}}, окрім того, що цикл `for...in` перелічує також властивості із ланцюжка прототипів. Порядок масиву, поверненого `Object.keys()`, такий само, як порядок обробки в циклі {{jsxref("Statements/for...in", "for...in")}}.

Коли потрібні значення властивостей, слід натомість використовувати {{jsxref("Object.values()")}}. Коли потрібні і ключі, і значення властивостей, слід натомість використовувати {{jsxref("Object.entries()")}}.

## Приклади

### Застосування Object.keys()

```js
// простий масив
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// масивоподібний об'єкт
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// масивоподібний об'єкт з випадковим порядком ключів
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo — це неперелічувана властивість
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
```

Якщо потрібні _всі_ властивості, включно з неперелічуваними, — зверніть увагу на {{jsxref("Object.getOwnPropertyNames()")}}.

### Застосування Object.keys() на примітивах

Необ'єктні аргументи [зводяться до об'єктів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#zvedennia-do-obiekta). Значення [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined) і [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) не можуть бути зведення до об'єкта та зразу викидають {{jsxref("TypeError")}}. Лише рядки можуть мати власні перелічувані властивості, коли решта примітивів повертають порожній масив.

```js
// Рядки мають власні перелічувані властивості у вигляді індексів
console.log(Object.keys("foo")); // ['0', '1', '2']
// Решта примітивів, крім undefined і null, не має власних властивостей
console.log(Object.keys(100)); // []
```

> **Примітка:** В середовищі ES5 передача необ'єкта в `Object.keys()` призводить до викидання {{jsxref("TypeError")}}.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Object.keys` у `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Перелічуваність і власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.keys()")}}
