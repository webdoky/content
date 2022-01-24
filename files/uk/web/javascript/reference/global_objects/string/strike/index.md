---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
  - Polyfill
browser-compat: javascript.builtins.String.strike
---
{{JSRef}} {{deprecated_header}}

Метод **`strike()`** створює HTML-елемент {{HTMLElement("strike")}}, який змушує рядок зображатися як закреслений текст.

## Синтаксис

```js
strike()
```

### Повернене значення

Рядок, що містить HTML-елемент {{HTMLElement("strike")}}.

## Опис

Метод `strike()` вписує рядок тексту в елемент `<strike>`: "`<strike>текст</strike>`".

## Приклади

### Застосування strike()

Наступний приклад використовує методи рядка для зміни форматування тексту:

```js
var worldString = 'Привіт, світе';

console.log(worldString.blink()); // <blink>Привіт, світе</blink>
console.log(worldString.bold()); // <b>Привіт, світе</b>
console.log(worldString.italics()); // <i>Привіт, світе</i>
console.log(worldString.strike()); // <strike>Привіт, світе</strike>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.strike` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
