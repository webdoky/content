---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.small
---

{{JSRef}} {{Deprecated_Header}}

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

Код нижче створює рядок HTML, а тоді замінює ним тіло документа:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.small();
```

Це створює наступний HTML:

```html
<small>Привіт, світе</small>
```

Замість використання `small()` і безпосереднього створення тексту HTML слід використовувати API DOM, як то [`document.createElement()`](/uk/docs/Web/API/Document/createElement). Наприклад:

```js
const contentString = "Привіт, світе";
const elem = document.createElement("small");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.small` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("small")}}
