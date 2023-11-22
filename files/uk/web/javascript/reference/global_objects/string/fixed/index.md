---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.fixed
---

{{JSRef}} {{Deprecated_Header}}

Метод **`fixed()`** (фіксований) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("tt")}} (`<tt>str</tt>`), завдяки чому цей рядок виводиться шрифтом фіксованої ширини.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані заради потреб сумісності. У випадку `fixed()`, сам елемент `<tt>` був вилучений зі специфікації HTML, і його більше не варто використовувати. Веброзробники повинні використовувати замість нього властивості [CSS](/uk/docs/Web/CSS).

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

Код нижче створює рядок HTML, а потім замінює ним тіло документа:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.fixed();
```

Це створює наступний HTML:

```html
<tt>Привіт, світе</tt>
```

> **Застереження:** Ця розмітка є недійсною, оскільки `tt` більше не є дійсним елементом.
> Замість використання `fixed()` і безпосереднього створення тексту HTML слід використовувати для роботи зі шрифтами CSS. Наприклад, можна змінити {{cssxref("font-family")}} через атрибут {{domxref("HTMLElement/style", "element.style")}}:

```js
document.getElementById("yourElemId").style.fontFamily = "monospace";
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.fixed` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("tt")}}
