---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.big
---
{{JSRef}} {{deprecated_header}}

Метод **`big()`** створює HTML-елемент {{HTMLElement("big")}}, який змушує рядок виводитися великим шрифтом.

> **Примітка:** Елемент \<big> було видалено у специфікації [HTML5](/en-US/docs/Web/Guide/HTML/HTML5), і він не повинен більше використовуватись.
> Натомість веброзробникам слід застосовувати властивості [CSS](/en-US/docs/Web/CSS).

## Синтаксис

```js
big()
```

### Повернене значення

Рядок, який містить HTML-елемент {{HTMLElement("big")}}.

## Опис

Метод `big()` вбудовує рядок всередину елемента `<big>`: "`<big>рядок тексту</big>`".

## Приклади

### Застосування методу big()

Наступний приклад використовує методи рядка для зміни його розміру:

```js
var worldString = 'Привіт, світе!';

console.log(worldString.small());     // <small>Привіт, світе!</small>
console.log(worldString.big());       // <big>Привіт, світе!</big>
console.log(worldString.fontsize(7)); // <font size="7">Привіт, світе!</font>
```

Використавши об'єкт {{domxref("HTMLElement/style", "element.style")}}, можна дістатися до атрибута `style` елемента, і маніпулювати розміром більш загально, наприклад:

```js
document.getElementById('yourElemId').style.fontSize = '2em';
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.big` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
