---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.fixed
---

{{JSRef}} {{deprecated_header}}

Метод **`fixed()`** (фіксований) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("tt")}} (`<tt>str</tt>`), завдяки чому цей рядок виводиться моноширинним шрифтом.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані заради потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), наприклад, [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
fixed()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається з початкового тега `<tt>`, потім текст `str`, і потім кінцевий тег `</tt>`.

## Приклади

### Застосування методу fixed()

Наступний приклад використовує метод `fixed` для зміни форматування рядка:

```js
const worldString = "Привіт, світе!";
console.log(worldString.fixed()); // "<tt>Привіт, світе!</tt>"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.fixed` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
