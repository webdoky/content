---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.strike
---

{{JSRef}} {{Deprecated_Header}}

Метод **`strike()`** (перекреслений) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("strike")}} (`<strike>str</strike>`), завдяки якому цей рядок виводиться перекресленим текстом.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані лише заради потреб сумісності. У випадку `strike()`, сам елемент `<strike>` був вилучений зі Специфікації HTML і більше не повинен використовуватися. Веброзробники повинні використовувати {{HTMLElement("del")}} для видаленого вмісту та {{HTMLElement("s")}} для вмісту, який більше не є точним або актуальним.

## Синтаксис

```js-nolint
strike();
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається з початкового тега `<strike>`, потім текст `str`, а потім кінцевий тег `</strike>`.

## Приклади

### Застосування strike()

Код нижче створює рядок HTML, а потім замінює тіло документа цим рядком:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.strike();
```

Це породжує наступний HTML:

```html
<strike>Привіт, світе</strike>
```

> **Застереження:** Ця розмітка є недійсною, адже `strike` більше не є дійсним елементом.
> Замість використання `strike()` і безпосереднього створення тексту HTML слід використовувати API DOM штибу [`document.createElement()`](/uk/docs/Web/API/Document/createElement). Наприклад:

```js
const contentString = "Привіт, світе";
const elem = document.createElement("s");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.strike` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("strike")}}
