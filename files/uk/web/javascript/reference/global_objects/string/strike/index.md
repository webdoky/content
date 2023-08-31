---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.strike
---

{{JSRef}} {{deprecated_header}}

Метод **`strike()`** (перекреслений) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("strike")}} (`<strike>str</strike>`), завдяки якому цей рядок виводиться перекресленим текстом.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані лише заради потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), наприклад, [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
strike();
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається з початкового тега `<strike>`, потім текст `str`, а потім кінцевий тег `</strike>`.

## Приклади

### Застосування strike()

Наступний приклад використовує нерекомендовані методи рядка для зміни форматування тексту:

```js
const worldString = "Привіт, світе";

console.log(worldString.blink()); // <blink>Привіт, світе</blink>
console.log(worldString.bold()); // <b>Привіт, світе</b>
console.log(worldString.italics()); // <i>Привіт, світе</i>
console.log(worldString.strike()); // <strike>Привіт, світе</strike>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.strike` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
