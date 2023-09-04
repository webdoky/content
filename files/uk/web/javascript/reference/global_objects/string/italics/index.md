---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.italics
---

{{JSRef}} {{deprecated_header}}

Метод **`italics()`** (курсив) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("i")}} (`<i>str</i>`), завдяки чому цей рядок виводиться курсивом.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані заради потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), наприклад, [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
italics()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається з початкового тега `<i>`, потім текст `str`, і закінчується кінцевим тегом `</i>`.

## Приклади

### Застосування методу italics()

Наступний приклад використовує нерекомендовані методи рядка для зміни його форматування:

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

- [Поліфіл `String.prototype.italics` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
