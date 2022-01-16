---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
  - Polyfill
browser-compat: javascript.builtins.String.italics
---
{{JSRef}} {{deprecated_header}}

Метод **`italics()`** створює HTML-елемент {{HTMLElement("i")}}, який змушує рядок зображатись курсивним шрифтом.

## Синтаксис

```js
italics()
```

### Повернене значення

Рядок, що містить HTML-елемент {{HTMLElement("i")}}.

## Опис

Метод `italics()` вписує рядок тексту всередину елементу `<i>`, як от: "`<i>рядок тексту</i>`".

## Приклади

### Застосування методу italics()

Наступний приклад використовує методи рядка для зміни його форматування:

```js
var worldString = 'Привіт, світе!';
console.log(worldString.blink());  // <blink>Привіт, світе!</blink>
console.log(worldString.bold());  // <b>Привіт, світе!</b>
console.log(worldString.italics()); // <i>Привіт, світе!</i>
console.log(worldString.strike());  // <strike>Привіт, світе!</strike>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.italics` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
