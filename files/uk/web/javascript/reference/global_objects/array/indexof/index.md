---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - indexof
  - Polyfill
browser-compat: javascript.builtins.Array.indexOf
---
{{JSRef}}

Метод **`indexOf()`** повертає перший індекс, за яким даний елемент можна знайти в масиві, або -1 &mdash; якщо його немає.

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## Синтаксис

```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Параметри

- `searchElement`
  - : Шуканий у масиві елемент.
- `fromIndex` {{optional_inline}}
  - : Індекс, з якого потрібно почати пошук. Якщо індекс більший або дорівнює довжині масиву, повертається -1: це означає, що пошук у масиві виконуватись не буде. Якщо надане значення індексу є від’ємним числом, то воно приймається як зміщення від кінця масиву. Примітка: якщо наданий індекс є від’ємним, то пошук у масиві все одно виконується від початку до кінця. Якщо наданий індекс дорівнює 0 &mdash; пошук буде здійснюватися в усьому масиві. Усталено: 0 (перевіряється весь масив).

### Повернене значення

Перший індекс елемента в масиві; **-1**, якщо нічого не знайдено.

## Опис

`indexOf()` порівнює `searchElement` з елементами масиву, використовуючи [строгу рівність](/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality) (той самий метод, що використовується оператором потрійної рівності `===`).

> **Примітка:** Для методу String див.
> {{jsxref("String.prototype.indexOf()")}}.

## Приклади

### Використання indexOf()

У наступному прикладі `indexOf()` використовується для пошуку значень у масиві.

```js
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### Пошук усіх входжень елемента

```js
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Визначення, чи знаходиться елемент у масиві, чи ні, та оновлення масиву

```js
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('Нова овочева колекція: ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' уже є в овочевій колекції.');
    }
}

var veggies = ['картопля', 'помідор', 'червоний гострий перець', 'зелений болгарський перець'];

updateVegetablesCollection(veggies, 'шпинат');
// Нова колекція veggies: картопля,помідор,червоний гострий перець,зелений болгарський перець,шпинат
updateVegetablesCollection(veggies, 'шпинат');
// шпинат уже є в овочевій колекції.
```

## Поліфіл

`indexOf()` було додано до стандарту ECMA-262 у 5-му виданні, тому він може бути присутнім не у всіх браузерах. Можна це обійти, використовуючи наведений нижче код на початку ваших скриптів. Це дозволить використовувати `indexOf()`, навіть якщо вбудована підтримка відсутня. Цей алгоритм відповідає алгоритму, зазначеному в ECMA-262, 5-те видання, за умови, що {{jsxref("Global_Objects/TypeError",
  "TypeError")}} та {{jsxref("Math.abs()")}} мають свої первісні значення.

```js
// Ця версія намагається оптимізуватися, перевіряючи "in" лише під час пошуку undefined, і
// пропускаючи безумовно безрезультатний пошук NaN. Інші частини – це лише косметична лаконічність.
// Чи це насправді швидше, ще невідомо.
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = (function(Object, max, min) {
    "use strict"
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined)
        throw TypeError("Array.prototype.indexOf called on null or undefined")

      var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len)
      if (i < 0) i = max(0, Len + i)
      else if (i >= Len) return -1

      if (member === void 0) {        // undefined
        for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i
      } else if (member !== member) { // NaN
        return -1 // Оскільки NaN !== NaN, він ніколи не буде знайдений. Швидкий шлях.
      } else                          // все інше
        for (; i !== Len; ++i) if (that[i] === member) return i

      return -1 // якщо значення не знайдено, то повертаємо -1
    }
  })(Object, Math.max, Math.min)
```

Однак, якщо вас більше цікавлять усі дрібні технічні деталі, визначені стандартом ECMA, і менше турбують продуктивність або стислість, цей краще документований поліфіл може виявитися кориснішим.

```js
// Етапи розробки ECMA-262, видання 5, 15.4.4.14
// Довідка: https://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    "use strict";
    var k;

    // 1. Нехай o буде результатом виклику Object, передаючи
    //    значення this як аргумент.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Нехай lenValue буде результатом виклику внутрішнього методу Get
    //    для o з аргументом "length".
    // 3. Нехай len буде ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. Якщо len дорівнює 0, повернути -1.
    if (len === 0) {
      return -1;
    }

    // 5. Якщо передано аргумент fromIndex, нехай n буде
    //    ToInteger(fromIndex); інакше нехай n дорівнює 0.
    var n = fromIndex | 0;

    // 6. Якщо n >= len, повернути -1.
    if (n >= len) {
      return -1;
    }

    // 7. Якщо n >= 0, тоді нехай k буде n.
    // 8. Інакше, n<0, нехай k буде len - abs(n).
    //    Якщо k менше 0, то нехай k дорівнює 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Повторювати, поки k < len
    for (; k < len; k++) {
      // a. Нехай Pk буде ToString(k).
      //   Це неявно для операндів лівої сторони оператора in
      // b. Нехай kPresent буде результатом виклику
      //    внутрішнього методу HasProperty для o з аргументом Pk.
      //   Цей крок можна поєднати з c
      // c. Якщо значення kPresent - істинне, то
      //    i.  Нехай elementK буде результатом виклику
      //        внутрішнього методу Get для o з аргументом ToString(k).
      //   ii.  Нехай те саме буде результатом застосування
      //        Алгоритму Строгого Порівняння до
      //        searchElement і elementK.
      //  iii.  Якщо те саме вірно, повернути k.
      if (k in o && o[k] === searchElement)
        return k;
    }
    return -1;
  };
}
```

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- Поліфіл `Array.prototype.indexOf` доступний в [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
