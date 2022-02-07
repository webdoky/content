---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.fixed
---
{{JSRef}} {{deprecated_header}}

Метод **`fixed()`** створює HTML-елемент {{HTMLElement("tt")}}, який змушує рядок зображатися моноширинним шрифтом.

## Синтаксис

```js
fixed()
```

### Повернене значення

Рядок, який позначає HTML-елемент {{HTMLElement("tt")}}.

## Опис

Метод `fixed()` вписує рядок тексту в елемент `<tt>`, як от:
"`<tt>рядок тексту</tt>`".

## Приклади

### Застосування методу fixed()

Наступний приклад використовує метод `fixed` для зміни форматування рядка:

```js
var worldString = 'Привіт, світе!';
console.log(worldString.fixed()); // "<tt>Привіт, світе!</tt>"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.fixed` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
