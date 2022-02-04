---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
  - Polyfill
browser-compat: javascript.builtins.String.sub
---
{{JSRef}} {{deprecated_header}}

Метод **`sub()`** створює HTML-елемент {{HTMLElement("sub")}}, який змушує рядок зображатись як підрядковий текст.

## Синтаксис

```js
sub()
```

### Повернене значення

Рядок, що містить HTML-елемент {{HTMLElement("sub")}}.

## Опис

Метод `sub()` вписує рядок тексту в елемент `<sub>`, як от: "`<sub>текст</sub>`".

## Приклади

### Застосування методів sub() та sup()

Наступний приклад використовує методи `sub()` та {{jsxref("String.prototype.sup()", "sup()")}} для форматування рядка:

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

- Поліфіл методу `String.prototype.sub` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.sup()")}}
