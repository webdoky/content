---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.sup
---

{{JSRef}} {{Deprecated_Header}}

Метод **`sup()`** (над) значень {{jsxref("String")}} створює рядок, що включає рядок цього методу в елемент {{HTMLElement("sup")}} (`<sup>str</sup>`), завдяки чому цей рядок виводиться як надрядковий текст.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані лише заради потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), наприклад, [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
sup()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається з початкового тега `<sup>`, потім текст `str`, а потім кінцевий тег `</sup>`.

## Приклади

### Застосування sup()

Код нижче створює рядок HTML, а потім замінює ним тіло документа:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.sup();
```

Це породить наступний HTML:

```html
<sup>Привіт, світе</sup>
```

Instead of using `sup()` and creating HTML text directly, you should use DOM APIs such as [`document.createElement()`](/uk/docs/Web/API/Document/createElement). For example:

Замість використання `sup()` і безпосереднього створення тексту HTML варто використовувати API DOM, як от [`document.createElement()`](/uk/docs/Web/API/Document/createElement). Наприклад:

```js
const contentString = "Привіт, світе";
const elem = document.createElement("sup");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.sup` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("sup")}}
