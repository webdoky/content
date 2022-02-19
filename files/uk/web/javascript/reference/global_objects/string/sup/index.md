---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.sup
---
{{JSRef}} {{deprecated_header}}

Метод **`sup()`** створює HTML-елемент {{HTMLElement("sup")}}, який змушує рядок зображатись як надрядковий текст.

## Синтаксис

```js
sup()
```

### Повернене значення

Рядок, що містить HTML-елемент {{HTMLElement("sup")}}.

## Опис

Метод `sup()` вписує рядок тексту в елемент `<sup>`: "`<sup>str</sup>`".

## Приклади

### Застосування методів sub() та sup()

Наступний приклад використовує методи `sup()` та {{jsxref("String.prototype.sub()", "sub()")}} для форматування рядка:

```js
var superText = 'надрядковий';
var subText = 'підрядковий';

console.log('Отакий вигляд має ' + superText.sup() + ' текст.');
// "Отакий вигляд має <sup>надрядковий</sup> текст."

console.log('Отакий вигляд має ' + subText.sub() + ' текст.');
// "Отакий вигляд має <sub>підрядковий</sub> текст."
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.sup` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.sub()")}}
