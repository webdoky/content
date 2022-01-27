---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.@@iterator
---
{{JSRef}}

Метод **`[@@iterator]()`** повертає новий об'єкт-ітератор, який перебирає кодові точки рядкового значення, повертаючи кожну кодову точку як окремий рядок.

{{EmbedInteractiveExample("pages/js/string-iterator.html")}}

## Синтаксис

```js
str[Symbol.iterator]
```

### Повернене значення

Новий об'єкт-ітератор.

## Приклади

### Застосування методу \[@@iterator]\()

```js
var str = 'A\uD835\uDC68';

var strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

### Застосування методу \[@@iterator]\() з циклом for..of

```js
var str = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

for (var v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype[@@iterator]` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Протоколи ітерації](/uk/docs/Web/JavaScript/Reference/Iteration_protocols)
