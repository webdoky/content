---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.bold
---

{{JSRef}} {{deprecated_header}}

Метод **`bold()`** створює рядок, що вбудовує вихідний рядок в елемент {{HTMLElement("b")}} (`<b>рядок</b>`), що призводить до виведення цього рядка грубим шрифтом.

> **Примітка:** Всі [методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими, вони стандартизовані суто для потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), як то [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
bold()
```

### Повернене значення

Рядок, що починається тегом `<b>`, далі йде текст `str`, а потім – кінцевий тег `</b>`.

## Приклади

### Застосування bold()

Наступний приклад демонструє, як змінити форматування рядка за допомогою нерекомендованих методів самого рядка:

```js
const worldString = "Привіт, світе!";

console.log(worldString.blink()); // <blink>Привіт, світе!</blink>
console.log(worldString.bold()); // <b>Привіт, світе!</b>
console.log(worldString.italics()); // <i>Привіт, світе!</i>
console.log(worldString.strike()); // <strike>Привіт, світе!</strike>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.bold` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
