---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.toLowerCase
---

{{JSRef}}

Метод **`toLowerCase()`** (до нижнього регістру) значень {{jsxref("String")}} повертає значення свого рядка, переведене у нижній регістр.

{{EmbedInteractiveExample("pages/js/string-tolowercase.html","shorter")}}

## Синтаксис

```js-nolint
toLowerCase()
```

### Повернене значення

Новий рядок, що містить значення рядка, на якому було викликано метод, переведене у нижній регістр.

## Опис

Метод `toLowerCase()` повертає значення рядка, переведене у нижній регістр. Виклик `toLowerCase()` ніяк не впливає на значення початкового рядка `str`.

## Приклади

### Застосування `toLowerCase()`

```js
console.log("АБЕТКА".toLowerCase()); // 'абетка'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
