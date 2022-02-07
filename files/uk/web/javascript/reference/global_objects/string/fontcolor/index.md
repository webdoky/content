---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.fontcolor
---
{{JSRef}} {{deprecated_header}}

Метод **`fontcolor()`** створює HTML-елемент {{HTMLElement("font")}}, який змушує шрифт рядка забарвлюватись у вказаний колір.

> **Примітка:** Елемент \<font> було видалено в специфікації [HTML5](/uk/docs/Web/Guide/HTML/HTML5), і він не повинен більше використовуватись.
> Натомість розробникам слід користуватись властивостями [CSS](/uk/docs/Web/CSS).

## Синтаксис

```js
fontcolor(color)
```

### Параметри

- `color`
  - : Рядок, що містить вираження кольору через шістнадцятковий RGB-триплет чи рядковий літерал. Перелік літералів для позначення імен кольорів наведений у [довіднику з кольорів CSS](/uk/docs/Web/CSS/color_value).

### Повернене значення

Рядок, що містить HTML-елемент {{HTMLElement("font")}}.

## Опис

Для вираження кольору через шістнадцятковий RGB-триплет повинен використовуватись формат `rrggbb`. Наприклад, шістнадцяткові значення RGB-складових для лососевого кольору такі: червоний=FA,
зелений=80, і синій=72, — тобто RGB-триплетом для лососевого кольору є рядок "`FA8072`".

## Приклади

### Застосування методу fontcolor()

Наступний приклад використовує метод `fontcolor()` для зміни кольору тексту шляхом створення рядка з HTML-елементом `<font>`.

```js
var worldString = 'Привіт, світе!';

console.log(worldString.fontcolor('red') +  ' в цьому рядку — червоний');
// '<font color="red">Привіт, світе!</font> в цьому рядку — червоний'

console.log(worldString.fontcolor('FF00') + ' в цьому рядку — теж червоний, але шістнадцятковим значенням');
// '<font color="FF00">Привіт, світе!</font> в цьому рядку — теж червоний, але шістнадцятковим значенням'
```

За допомогою об'єкта {{domxref("HTMLElement/style", "element.style")}} можна отримати атрибут `style` елементу і більш загально ним маніпулювати, як от, наприклад:

```js
document.getElementById('yourElemId').style.color = 'red';
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.fontcolor` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
