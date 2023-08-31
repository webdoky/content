---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.small
---

{{JSRef}} {{deprecated_header}}

Метод **`small()`** (малий) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("small")}} (`<small>str</small>`), завдяки якому цей рядок виводиться малим шрифтом.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані заради потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), наприклад, [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
small()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається з початкового тега `<small>`, потім текст `str`, а потім кінцевий тег `</small>`.

## Приклади

### Застосування методу small()

Наступний приклад використовує методи рядка для зміни розміру тексту:

```js
const worldString = "Привіт, світе";

console.log(worldString.small()); // <small>Привіт, світе</small>
console.log(worldString.big()); // <big>Привіт, світе</big>
console.log(worldString.fontsize(7)); // <font size="7">Привіт, світе</fontsize>
```

За допомогою об'єкта {{domxref("HTMLElement/style", "element.style")}} можна отримати доступ до атрибута `style` елемента і більш загально ним маніпулювати, як от:

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.small` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
