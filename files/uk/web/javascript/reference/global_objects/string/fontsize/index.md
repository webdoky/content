---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.fontsize
---

{{JSRef}} {{Deprecated_Header}}

Метод **`fontsize()`** (розмір шрифту) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("font")}} (`<font size="...">str</font>`), завдяки чому цей текст виводиться з заданим розміром шрифту.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані лише для потреб сумісності. У випадку `fontsize()`, сам елемент `<font>` було вилучено зі специфікації HTML, і його більше не слід використовувати. Замість цього веброзробники повинні використовувати властивості [CSS](/uk/docs/Web/CSS).

## Синтаксис

```js-nolint
fontsize(size)
```

### Параметри

- `size`
  - : Ціле число в діапазоні від 1 до 7, або рядок з цілим числом від 1 до 7 зі знаком.

### Повернене значення

Рядок, що починається з початкового тега `<font size="size">` (подвійні лапки в `size` замінюються на `&quot;`), потім текст `str`, і потім кінцевий тег `</font>`.

## Опис

Сам метод `fontsize` просто з'єднує рядкові частини докупи, без жодних валідації та нормалізації. Проте щоб створити дійсний елемент {{HTMLElement("font")}}, то при заданні розміру в вигляді цілого числа слід задати розмір шрифту `str` у вигляді одного з 7 визначених розмірів. Атрибут `size` можна задати у вигляді рядка виду `"-2"` або `"+3"`, щоб підлаштувати розмір шрифту `str` відносно 3, усталеного значення.

## Приклади

### Застосування fontsize()

Код нижче створює рядок HTML, а потім замінює ним тіло документа:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.fontsize(7);
```

Це створить наступний HTML:

```html
<font size="7">Привіт, світе</font>
```

> **Застереження:** Ця розмітка є недійсною, оскільки `font` більше не є дійсним елементом.

Замість використання `fontsize()` і безпосереднього створення тексту HTML слід використовувати для роботи зі шрифтами CSS. Наприклад, можна змінити {{cssxref("font-size")}} через атрибут {{domxref("HTMLElement/style", "element.style")}}:

```js
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.fontsize` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("font")}}
