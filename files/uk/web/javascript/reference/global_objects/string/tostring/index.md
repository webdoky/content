---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.toString
---
{{JSRef}}

Метод **`toString()`** повертає рядок, який є відповідником вказаного об'єкта.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## Синтаксис

```js
toString()
```

### Повернене значення

Рядок — відповідник вказаного об'єкта.

## Опис

Об'єкт {{jsxref("String")}} заміщує метод `toString()` об'єкта {{jsxref("Object")}}, а не успадковує {{jsxref("Object.prototype.toString()")}}. Для об'єктів {{jsxref("String")}} метод `toString()` повертає рядковий відповідник об'єкта, і працює так само як і метод {{jsxref("String.prototype.valueOf()")}}.

## Приклади

### Застосування методу `toString()`

Наступний приклад виводить рядкове значення об'єкта {{jsxref("String")}}:

```js
var x = new String('Привіт, світе');

console.log(x.toString()); // друкує 'Привіт, світе'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
