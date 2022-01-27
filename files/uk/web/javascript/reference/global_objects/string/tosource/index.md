---
title: String.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/String/toSource
tags:
  - JavaScript
  - Method
  - Non-standard
  - Deprecated
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.toSource
---
{{JSRef}} {{deprecated_header}}

Метод **`toSource()`** повертає рядок, що містить сирцевий код об'єкта.

## Синтаксис

```js
toSource()
```

### Повернене значення

Рядок, що містить сирцевий код об'єкта, на якому було викликано метод.

## Приклади

### Нативна функція

Під час роботи зі вбудованим об'єктом {{jsxref("String")}}, метод `toSource()` поверне наступний рядок, позначаючи, що її сирцевий код недоступний:

```js
function String() {
    [native code]
}
```

Для екземплярів {{jsxref("String")}} чи рядкових літералів метод `toSource()` повертає рядок, який містить його сирцевий код.

Цей метод зазвичай викликається внутрішньо в JavaScript, а не явно у коді вебзастосунків.

## Специфікації

Не є частиною жодного стандарту.

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Object.prototype.toSource()")}}
