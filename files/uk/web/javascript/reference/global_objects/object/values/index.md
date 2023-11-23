---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.values
---

{{JSRef}}

Статичний метод **`Object.values()`** (значення) повертає масив значень власних перелічуваних властивостей переданого об'єкта, чиїми ключами є рядки.

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Синтаксис

```js-nolint
Object.values(obj)
```

### Параметри

- `obj`
  - : Об'єкт.

### Повернене значення

Масив, що містить значення власних перелічуваних властивостей переданого об'єкта, чиїми ключами є рядки.

## Опис

`Object.values()` повертає масив, чиї елементи – значення перелічуваних властивостей, чиїми ключами є рядки та котрі знайдені безпосередньо на `object`. Це те саме, що ітерувати за допомогою циклу {{jsxref("Statements/for...in", "for...in")}}, окрім того, що цикл `for...in` також перелічує властивості з ланцюжка прототипів. Порядок масиву, поверненого `Object.values()`, такий самий, як порядок обробки в циклі {{jsxref("Statements/for...in", "for...in")}}.

Якщо потрібні ключі властивостей, слід натомість використати {{jsxref("Object.keys()")}}. Якщо потрібні як ключі, так і значення, то слід натомість використати {{jsxref("Object.entries()")}}.

## Приклади

### Застосування Object.values()

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

// getFoo – неперелічувана властивість
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
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']
```

### Застосування Object.values() на примітивах

Необ'єктні аргументи [зводяться до об'єктів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#zvedennia-do-obiekta). Значення [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined) і [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) не можуть бути зведення до об'єкта та зразу викидають {{jsxref("TypeError")}}. Лише рядки можуть мати власні перелічувані властивості, решта ж примітивів – повертає порожній масив.

```js
// Рядки мають індекси за власні перелічувані властивості
console.log(Object.values("foo")); // ['f', 'o', 'o']
// Решта примітивів, крім undefined і null, не має власних властивостей
console.log(Object.values(100)); // []
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Object.values` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Перелічуваність та власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.values()")}}
