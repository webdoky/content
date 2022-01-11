---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.anchor
---
{{JSRef}} {{deprecated_header}}

Метод **`anchor()`** створює рядок, який починається початковим тегом `<a name="...">`, далі містить якийсь текст, і потім завершується кінцевим тегом `</a>`.

> **Застереження:** Не варто використовувати цей метод. Замість нього слід вживати [DOM API](/uk/docs/Web/API/Document_Object_Model). Крім того, специфікація HTML більше не допускає наявності атрибута `name` в елементу {{HTMLElement("a")}}, тож результат виконання цього методу навіть не є дійсною розміткою.

## Синтаксис

```js
anchor(name)
```

### Параметри

- `name`
  - : Рядок, що містить значення атрибута `name`, яке буде вкладено в згенерований початковий тег `<a name="...">`.

### Повернене значення

Рядок, що починається початковим тегом `<a name="name">`, далі містить текст _str_, і потім завершується кінцевим тегом `</a>`.

## Опис

Не слід застосовувати цей метод. Натомість краще використовувати [DOM
API](/uk/docs/Web/API/Document_Object_Model). Окрім того, специфікація HTML більше не допускає наявності атрибута `name` в елементу {{HTMLElement("a")}}, тож результат виконання цього методу навіть не є дійсною розміткою.

## Приклади

### Застосування методу anchor()

```js
var myString = 'Зміст';

document.body.innerHTML = myString.anchor('contents_anchor');
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

- Поліфіл `String.prototype.anchor` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.link()")}}
