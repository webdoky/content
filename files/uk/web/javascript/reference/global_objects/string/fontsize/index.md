---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.fontsize
---
{{JSRef}} {{deprecated_header}}

Метод **`fontsize()`** створює HTML-елемент {{HTMLElement("font")}}, який змушує рядок зображатись шрифтом вказаного розміру.

> **Примітка:** елемент \<font> видалено в стандарті [HTML5](/uk/docs/Web/Guide/HTML/HTML5), і його не слід більше використовувати.
> Натомість веброзробникам слід користуватись властивостями [CSS](/uk/docs/Web/CSS).

## Синтаксис

```js
fontsize(size)
```

### Параметри

- `size`
  - : Ціле число в діапазоні від 1 до 7, або рядок з цілим числом від 1 до 7 зі знаком.

### Повернене значення

Рядок, що містить HTML-елемент {{HTMLElement("font")}}.

## Опис

Коли значення розміру передається як ціле число, розмір шрифту рядка `str` встановлюється в одне із 7 визначених розмірів. Коли значення параметру `size` містить рядок, як от "-2", розмір шрифту рядка `str` змінюється на вказане число відносно величини, заданої в елементі {{HTMLElement("basefont")}}.

## Приклади

### Застосування fontsize()

Наступний приклад використовує методи рядка для зміни його розміру:

```js
var worldString = 'Привіт, світе!';

console.log(worldString.small());     // <small>Привіт, світе!</small>
console.log(worldString.big());       // <big>Привіт, світе!</big>
console.log(worldString.fontsize(7)); // <font size="7">Привіт, світе!</font>
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

- Поліфіл методу `String.prototype.fontsize` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
