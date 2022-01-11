---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.blink
---
{{JSRef}} {{deprecated_header}}

Метод **`blink()`** створює HTML-елемент {{HTMLElement("blink")}}, який змушує мерехтіти рядок тексту.

> **Застереження:** Декілька стандартів доступності не схвалюють мерехтливий текст. Сам елемент `<blink>` не входить до стандарту і не рекомендується до використання.

## Синтаксис

```js
blink()
```

### Повернене значення

Рядок, що містить HTML-елемент {{HTMLElement("blink")}}.

## Опис

Метод `blink()` вбудовує рядок тексту всередину елемента `<blink>`: "`<blink>рядок тексту</blink>`".

## Приклади

### Застосування методу blink()

Наступний приклад демонструє, як змінити форматування рядка за допомогою різних методів самого рядка:

```js
var worldString = 'Привіт, світе!';

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

- Поліфіл методу `String.prototype.blink` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
