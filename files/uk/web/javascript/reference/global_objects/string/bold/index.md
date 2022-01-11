---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.bold
---
{{JSRef}} {{deprecated_header}}

Метод **`bold()`** створює HTML-елемент {{HTMLElement("b")}}, який змушує рядок зображатись жирним шрифтом.

## Синтаксис

```js
bold()
```

### Повернене значення

Рядок, який містить елемент {{HTMLElement("b")}}.

## Опис

Метод `bold()` вписує рядок всередину елемента `<b>`, як от: "`<b>рядок тексту</b>`".

## Приклади

### Застосування методу bold()

Наступний приклад демонструє, як змінити форматування рядка за допомогою різних методів самого рядка:

```js
var worldString = 'Hello, world';

console.log(worldString.blink());   // <blink>Привіт, світе!</blink>
console.log(worldString.bold());    // <b>Привіт, світе!</b>
console.log(worldString.italics()); // <i>Привіт, світе!</i>
console.log(worldString.strike());  // <strike>Привіт, світе!</strike>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.bold` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
