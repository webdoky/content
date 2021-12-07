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

Метод **`Object.keys()`** повертає масив, що складається з **імен** власних перелічуваних властивостей переданого об'єкта. Порядок цих імен збігається з порядком перебирання цих властивостей звичайним циклом.

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## Синтаксис

```js
Object.keys(obj)
```

### Параметри

- `obj`
  - : Об'єкт, чиї власні перелічувані властивості буде повернуто в результаті.

### Повернене значення

Масив рядків, що позначають імена всі перелічуваних властивостей даного об'єкта.

## Опис

Метод `Object.keys()` повертає масив, чиї елементи — рядки, які відповідають перелічуваним властивостям, що знаходяться безпосередньо на об'єкті `object`. Порядок властивостей такий самий, як і під час перебирання властивостей об'єкту в циклі самотужки.

## Приклади

### Застосування Object.keys

```js
// простий масив
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// масивоподібний об'єкт
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// масивоподібний об'єкт з випадковим порядком ключів
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo — це неперелічувана властивість
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

Якщо потрібні _всі_ властивості, включно з неперелічуваними — зверніть увагу на {{jsxref("Object.getOwnPropertyNames()")}}.

### Приведення необ'єктів

В ES5, якщо аргумент цього методу був не об'єктного типу (примітив), це призводило до винятку {{jsxref("TypeError")}}.

Від ES2015 і далі – необ'єктні аргументи приводяться до об'єктного типу.

```js
// In ES5
Object.keys('foo');  // TypeError: "foo" is not an object

// In ES2015+
Object.keys('foo');  // ["0", "1", "2"]
```

## Поліфіл

Щоб додати сумісну підтримку методу `Object.keys` в старіших середовищах, які не підтримують його нативно, скопіюйте наступний уривок:

```js
// Із https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
```

Майте на увазі: код вище буде також опрацьовувати неперелічувані ключі в IE7 (і, можливо, IE8) при передачі об'єкту з іншого вікна.

Якщо вам потрібен простий браузерний поліфіл, зверніть увагу на [Javascript \- Object.keys Browser Compatibility](https://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Object.keys` також наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Перелічуваність і власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.entries()")}}
