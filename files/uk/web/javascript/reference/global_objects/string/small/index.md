---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.small
---
{{JSRef}} {{deprecated_header}}

Метод **`small()`** створює HTML-елемент {{HTMLElement("small")}}, який змушує рядок зображатися дрібним шрифтом.

## Синтаксис

```js
small()
```

### Повернене значення

Рядок, що містить HTML-елемент {{HTMLElement("small")}}.

## Опис

Метод `small()` вписує рядок текст в елемент `<small>`: "`<small>текст</small>`".

## Приклади

### Застосування методу small()

Наступний приклад використовує методи рядка для зміни розміру тексту:

```js
var worldString = 'Привіт, світе';

console.log(worldString.small());     // <small>Привіт, світе</small>
console.log(worldString.big());       // <big>Привіт, світе</big>
console.log(worldString.fontsize(7)); // <font size="7">Привіт, світе</fontsize>
```

За допомогою об'єкта {{domxref("HTMLElement/style", "element.style")}} можна отримати доступ до атрибута `style` елемента і більш загально ним маніпулювати, як от:

```js
document.getElementById('yourElemId').style.fontSize = '0.7em';
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.small` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
