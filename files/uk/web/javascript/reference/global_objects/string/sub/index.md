---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.sub
---

{{JSRef}} {{Deprecated_Header}}

Метод **`sub()`** (під) значень {{jsxref("String")}} створює рядок, що включає рядок цього методу в елемент {{HTMLElement("sub")}} (`<sub>str</sub>`), завдяки чому цей рядок виводиться як підрядковий текст.

> **Примітка:** Всі [обгортальні методи HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) є нерекомендованими та стандартизовані лише заради потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), наприклад, [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

## Синтаксис

```js-nolint
sub()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що починається з початкового тега `<sub>`, потім текст `str`, а потім кінцевий тег `</sub>`.

## Приклади

### Застосування методу sub()

Код нижче створює рядок HTML, а тоді замінює ним тіло документа:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.sub();
```

Замість використання `sub()` і безпосереднього створення тексту HTML слід використовувати API DOM, як то [`document.createElement()`](/uk/docs/Web/API/Document/createElement). Наприклад:

```js
const contentString = "Привіт, світе";
const elem = document.createElement("sub");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.sub` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
- {{HTMLElement("sub")}}
