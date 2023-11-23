---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.link
---

{{JSRef}} {{Deprecated_Header}}

Метод **`link()`** (посилання) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент {{HTMLElement("a")}} (`<a href="...">str</a>`), аби використати його як гіпертекстове посилання на іншу URL-адресу.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані заради потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), наприклад, [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
link(url)
```

### Параметри

- `url`
  - : Будь-який рядок, що задає атрибут `href` елемента `<a>`; повинен бути дійсним URL (відносним або абсолютним), в якому всі символи `&` екрановані як `&amp;`.

### Повернене значення

Рядок, що починається з початкового тега `<a href="url">` (подвійні рядки в `url` замінюються на `&quot;`), потім текст `str`, і закінчується кінцевим тегом `</a>`.

## Приклади

### Застосування link()

Код нижче створює рядок HTML, а потім замінює ним тіло документа:

```js
const contentString = "ВебДоки";

document.body.innerHTML = contentString.link("https://webdoky.org/");
```

Це створить наступний HTML:

```html
<a href="https://webdoky.org/">ВебДоки</a>
```

Замість використання `link()` і безпосереднього створення тексту HTML слід використовувати API DOM, такі як [`document.createElement()`](/uk/docs/Web/API/Document/createElement). Наприклад:

```js
const contentString = "ВебДоки";
const elem = document.createElement("a");
elem.href = "https://webdoky.org/";
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.link` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("a")}}
