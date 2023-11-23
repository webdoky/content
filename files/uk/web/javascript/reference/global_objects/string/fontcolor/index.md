---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.fontcolor
---

{{JSRef}} {{Deprecated_Header}}

Метод **`fontcolor()`** (колір шрифту) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("font")}} (`<font color="...">str</font>`), завдяки якому цей рядок виводиться з заданим кольором шрифту.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані лише для потреб сумісності. У випадку `fontcolor()`, сам елемент `<font>` було вилучено зі специфікації HTML, і його більше не слід використовувати. Замість цього веброзробники повинні використовувати властивості [CSS](/uk/docs/Web/CSS).

## Синтаксис

```js-nolint
fontcolor(color)
```

### Параметри

- `color`
  - : Рядок, що містить вираження кольору через шістнадцятковий RGB-триплет чи рядковий літерал. Перелік літералів для позначення імен кольорів наведений у [довіднику з кольорів CSS](/uk/docs/Web/CSS/color_value).

### Повернене значення

Рядок, що починається з початкового тега `<font color="color">` (подвійні лапки в `color` замінюються на `&quot;`), потім текст `str`, і потім кінцевий тег `</font>`.

## Опис

Сам метод `fontcolor` просто з'єднує рядкові частини докупи, не виконуючи жодних валідації та нормалізації. Проте щоб створити дійсний елемент {{HTMLElement("font")}}, якщо колір виражено шістнадцятковою трійкою RGB, необхідно використовувати формат `rrggbb`. Наприклад, шістнадцяткові значення RGB для оранжево-рожевого кольору: red=FA, green=80, blue=72, тож трійка RGB для оранжево-рожевого – `"FA8072"`.

## Приклади

### Застосування методу fontcolor()

Код нижче створює рядок HTML, а потім замінює ним тіло документа:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.fontcolor("red");
```

Це створить наступний HTML:

```html
<font color="red">Привіт, світе</font>
```

> **Застереження:** Ця розмітка є недійсною, оскільки `font` більше не є дійсним елементом.
> Замість використання `fontcolor()` і безпосереднього створення тексту HTML слід використовувати для роботи зі шрифтами CSS. Наприклад, можна змінити {{cssxref("color")}} через атрибут {{domxref("HTMLElement/style", "element.style")}}:

```js
document.getElementById("yourElemId").style.color = "red";
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.fontcolor` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("font")}}
