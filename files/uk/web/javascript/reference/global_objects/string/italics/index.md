---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.italics
---

{{JSRef}} {{Deprecated_Header}}

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

Код нижче створює рядок HTML, а потім замінює ним тіло документа:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.italics();
```

Це створить наступний HTML:

```html
<i>Привіт, світе</i>
```

Замість використання `italics()` і безпосереднього створення тексту HTML слід використовувати для роботи зі шрифтами CSS. Наприклад, можна змінити {{cssxref("font-style")}} через атрибут {{domxref("HTMLElement/style", "element.style")}}:

```js
const contentString = "Привіт, світе";
const elem = document.createElement("i");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.italics` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("i")}}
