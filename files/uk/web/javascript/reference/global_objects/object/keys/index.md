---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
  - Polyfill
browser-compat: javascript.builtins.Object.keys
---

{{JSRef}}

Метод **`Object.keys()`** (ключі) повертає масив, що складається з **імен** власних перелічуваних властивостей переданого об'єкта. Порядок цих імен збігається з порядком перебирання цих властивостей звичайним циклом.

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## Синтаксис

```js-nolint
Object.keys(obj)
```

### Параметри

- `obj` (об'єкт)
  - : Об'єкт, чиї власні перелічувані властивості буде повернуто в результаті.

### Повернене значення

Масив рядків, що позначають імена всі перелічуваних властивостей даного об'єкта.

## Опис

Метод `Object.keys()` повертає масив, чиї елементи — рядки, які відповідають перелічуваним властивостям, що знаходяться безпосередньо на об'єкті `object`. Порядок властивостей такий самий, як і під час перебирання властивостей об'єкта в циклі самотужки.

## Приклади

### Застосування Object.keys

```js
// простий масив
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // виводить: ['0', '1', '2']

// масивоподібний об'єкт
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // виводить: ['0', '1', '2']

// масивоподібний об'єкт з випадковим порядком ключів
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // виводить: ['2', '7', '100']

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
console.log(Object.keys(myObj)); // виводить: ['foo']
```

Якщо потрібні _всі_ властивості, включно з неперелічуваними, — зверніть увагу на {{jsxref("Object.getOwnPropertyNames()")}}.

### Приведення необ'єктів

В ES5, якщо аргумент цього методу був необ'єктного типу (примітив), це призводило до винятку {{jsxref("TypeError")}}.

Від ES2015 і далі – необ'єктні аргументи приводяться до об'єктного типу.

```js
// В ES5
Object.keys('foo'); // TypeError: "foo" is not an object

// В ES2015+
Object.keys('foo'); // ["0", "1", "2"]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Object.keys` у `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Перелічуваність і власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.entries()")}}
