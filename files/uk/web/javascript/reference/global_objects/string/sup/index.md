---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.sup
---

{{JSRef}} {{deprecated_header}}

Метод **`sup()`** (над) значень {{jsxref("String")}} створює рядок, що включає рядок цього методу в елемент {{HTMLElement("sup")}} (`<sup>str</sup>`), завдяки чому цей рядок виводиться як надрядковий текст.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані лише заради потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), наприклад, [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
sup()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається з початкового тега `<sup>`, потім текст `str`, а потім кінцевий тег `</sup>`.

## Приклади

### Застосування методів sub() та sup()

Наступний приклад використовує методи `sup()` та {{jsxref("String/sub", "sub()")}} для форматування рядка:

```js
const superText = "надрядковий";
const subText = "підрядковий";

console.log(`Отакий вигляд має ${superText.sup()} текст.`);
// "Отакий вигляд має <sup>надрядковий</sup> текст."

console.log(`Отакий вигляд має ${subText.sub()} текст.`);
// "Отакий вигляд має <sub>підрядковий</sub> текст."
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.sup` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.sub()")}}
