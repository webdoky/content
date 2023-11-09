---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.bold
---

{{JSRef}} {{Deprecated_Header}}

Метод **`bold()`** (грубий) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("b")}} (`<b>рядок</b>`), що призводить до виведення цього рядка грубим шрифтом.

> **Примітка:** Всі [методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими, вони стандартизовані суто для потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), як то [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
bold()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається тегом `<b>`, далі йде текст `str`, а потім – кінцевий тег `</b>`.

## Приклади

### Застосування bold()

Код нижче створює рядок HTML, а потім замінює цим рядком тіло документа:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.bold();
```

Це створить наступний HTML:

```html
<b>Привіт, світе</b>
```

Замість використання `bold()` і безпосереднього створення тексту HTML слід використовувати API DOM, як то [`document.createElement()`](/uk/docs/Web/API/Document/createElement). Наприклад:

```js
const contentString = "Привіт, світе";
const elem = document.createElement("b");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.bold` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("b")}}
