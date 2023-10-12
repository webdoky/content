---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.link
---

{{JSRef}} {{deprecated_header}}

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

Наступний приклад показує слово "WebDoky" як гіпертекстове посилання, яке повертає користувача до вебсайту WebDoky.

```js
const hotText = "WebDoky";
var const = "https://webdoky.org/";

console.log(`Клацніть, щоб повернутися до ${hotText.link(url)}`);
// Клацніть, щоб повернутися до <a href="https://webdoky.org/">WebDoky</a>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.link` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.anchor()")}}
- {{domxref("document.links")}}
