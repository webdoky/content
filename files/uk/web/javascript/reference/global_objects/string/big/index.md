---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.big
---

{{JSRef}} {{Deprecated_Header}}

Метод **`big()`** (великий) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("big")}} (`<big>str</big>`), завдяки якому текст виводиться великим шрифтом.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані лише для потреб сумісності. У випадку `big()`, сам елемент `<big>` було вилучено зі специфікації HTML, і його більше не слід використовувати. Замість цього веброзробники повинні використовувати властивості [CSS](/uk/docs/Web/CSS).

## Синтаксис

```js-nolint
big()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається з початкового тега `<big>`, потім текст `str`, і потім кінцевий тег `</big>`.

## Приклади

### Застосування методу big()

Код нижче створює рядок HTML, а потім замінює цим рядком тіло документа:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.big();
```

Це створить наступний HTML:

```html
<big>Привіт, світе</big>
```

> **Застереження:** Ця розмітка – недійсна, оскільки `big` більше не є дійсним елементом.
> Замість використання `big()` і безпосереднього створення тексту HTML слід використати для роботи зі шрифтами CSS. Наприклад, можна змінити {{cssxref("font-size")}} через атрибут {{domxref("HTMLElement/style", "element.style")}}:

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.big` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("big")}}
