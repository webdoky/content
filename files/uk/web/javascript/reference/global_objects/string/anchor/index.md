---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.anchor
---

{{JSRef}} {{deprecated_header}}

Метод **`anchor()`** (якір) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього метода в елемент {{HTMLElement("a")}} з іменем (`<a name="...">str</a>`).

> **Примітка:** Всі [Методи для обгортання HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) – нерекомендовані, вони стандартизовані лише для потреб сумісності. Замість них слід використовувати [API DOM](/uk/docs/Web/API/Document_Object_Model), наприклад, [`document.createElement()`](/uk/docs/Web/API/Document/createElement).
>
> Специфікація HTML більше не дозволяє елементам {{HTMLElement("a")}} мати атрибут `name`, тож цей метод навіть не породжує дійсну розмітку.

## Синтаксис

```js-nolint
anchor(name)
```

### Параметри

- `name`
  - : Рядок, що містить значення атрибута `name`, яке буде вкладено в згенерований початковий тег `<a name="...">`.

### Повернене значення

Рядок, що починається з початкового тега `<a name="name">` (подвійні лапки у `name` замінюються на `&quot;`), потім текст `str`, і в кінці – кінцевий тег `</a>`.

## Приклади

### Застосування методу anchor()

```js
const myString = "Зміст";

document.body.innerHTML = myString.anchor("contents_anchor");
```

виведе наступний HTML:

```html
<a name="contents_anchor">Зміст</a>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.anchor` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.link()")}}
