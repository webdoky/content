---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.big
---

{{JSRef}} {{deprecated_header}}

Метод **`big()`** (великий) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("big")}} (`<big>str</big>`), завдяки якому текст виводиться великим шрифтом.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані лише для потреб сумісності. У випадку `big()`, сам елемент `<big>` було вилучено в [HTML5](/uk/docs/Glossary/HTML5), і його більше не слід використовувати. Замість цього веброзробники повинні використовувати властивості [CSS](/uk/docs/Web/CSS).

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

Наступний приклад використовує методи рядка для зміни його розміру:

```js
const worldString = "Привіт, світе!";

console.log(worldString.small()); // <small>Привіт, світе!</small>
console.log(worldString.big()); // <big>Привіт, світе!</big>
console.log(worldString.fontsize(7)); // <font size="7">Привіт, світе!</font>
```

Використавши об'єкт {{domxref("HTMLElement/style", "element.style")}}, можна дістатися до атрибута `style` елемента, і маніпулювати розміром більш загально, наприклад:

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.big` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
