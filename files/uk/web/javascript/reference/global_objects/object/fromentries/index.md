---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.fromEntries
---

{{JSRef}}

Статичний метод **`Object.fromEntries()`** ("із записів") перетворює список пар ключ-значення на об'єкт.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## Синтаксис

```js-nolint
Object.fromEntries(iterable)
```

### Параметри

- `iterable`

  - : [Ітерований об'єкт](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#protokol-iterovanoho-obiekta), як от {{jsxref("Array", "масив")}} чи {{jsxref("Map", "відображення)}}, який містить певний перелік об'єктів. Кожний такий об'єкт мусить містити дві властивості:

    - `0`
      - : Рядок або [символ](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol), що представляє ключ властивості.
    - `1`
      - : Значення властивості.

    Типово, цей об'єкт реалізовують як масив із двох елементів, де перший елемент є ключем властивості, а другий — її значенням.

### Повернене значення

Новий об'єкт, чиї властивості було надано в елементах переданого ітерованого об'єкта.

## Опис

Метод `Object.fromEntries()` приймає список пар ключ-значення, і повертає новий об'єкт, чиї властивості було надано в елементах цього списку. Очікується, що аргумент `iterable` буде об'єктом, який реалізує метод `[Symbol.iterator]()`. Цей метод повертає об'єкт-ітератор, що продукує масивоподібні об'єкти з двома елементами. Перший елемент — це значення, яке буде використано як ключ властивості, а другий — це значення властивості, яке буде асоційовано з цим ключем.

Метод `Object.fromEntries()` виконує зворотну від {{jsxref("Object.entries()")}} операцію, за винятком того, що `Object.entries()` повертає лише властивості з рядковими ключами, а `Object.fromEntries()` може також створювати властивості з символьними ключами.

> **Примітка:** На відміну від {{jsxref("Array.from()")}}, `Object.fromEntries()` не використовує значення `this`, тому виклик його з іншим конструктором не створить об'єкти іншого типу.

## Приклади

### Конвертація відображення (Map) у звичайний Object

За допомогою `Object.fromEntries` можна перетворити {{jsxref("Map")}} на {{jsxref("Object")}}:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Конвертація масиву (Array) у звичайний Object

За допомогою `Object.fromEntries` можна перетворити {{jsxref("Array")}} на {{jsxref("Object")}}:

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Перетворення об'єктів

За допомогою `Object.fromEntries`, а також зворотного йому методу {{jsxref("Object.entries()")}} і [методів для маніпуляції масивом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#metody-prymirnyka) можна виконувати такі трансформації, як:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл методу `Object.fromEntries` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
