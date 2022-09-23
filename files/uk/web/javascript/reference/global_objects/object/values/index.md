---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
tags:
  - JavaScript
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.values
---

{{JSRef}}

Метод **`Object.values()`** (значення) повертає масив значень власних перелічуваних властивостей переданого об'єкта, в тому самому порядку, в якому їх обробляє цикл {{jsxref("Statements/for...in", "for...in")}}. (Єдина відмінність полягає в тому, що цикл `for...in` також обробляє властивості з ланцюжка прототипів.)

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Синтаксис

```js-nolint
Object.values(obj)
```

### Параметри

- `obj`
  - : Об'єкт, значення чиїх власних перелічуваних властивостей будуть повернені.

### Повернене значення

Масив, що містить значення власних перелічуваних властивостей переданого об'єкта.

## Опис

`Object.values()` повертає масив, чиї елементи є значеннями перелічуваних властивостей, присутніх в об'єкта. Порядок властивостей такий самий, як при ручному обході значень властивостей в циклі.

## Приклади

### Застосування Object.values

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Масивоподібний об'єкт
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Масивоподібний об'єкт з випадковим порядком ключів
// При використанні числових ключів значення повертаються згідно з числовим порядком ключів
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo – властивість, що не є перелічуваною
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  }
);
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']

// необ'єктний аргумент приводиться до об'єкта
console.log(Object.values("foo")); // ['f', 'o', 'o']
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Object.values` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Перелічуваність та власність властивостей](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
