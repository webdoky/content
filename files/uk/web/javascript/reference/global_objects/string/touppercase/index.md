---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.toUpperCase
---

{{JSRef}}

Метод **`toUpperCase()`** (до вищого регістру) значень {{jsxref("String")}} повертає значення свого рядка, переведене у вищий регістр.

{{EmbedInteractiveExample("pages/js/string-touppercase.html","shorter")}}

## Синтаксис

```js-nolint
toUpperCase()
```

### Параметри

Жодних.

### Повернене значення

Новий рядок, що містить значення рядка, на якому було викликано метод, переведене у верхній регістр.

## Опис

Метод `toUpperCase()` повертає значення рядка, переведене у верхній регістр. Цей метод не впливає на значення початкового рядка, оскільки рядки в JavaScript є незмінними.

## Приклади

### Базове застосування

```js
console.log("абетка".toUpperCase()); // 'АБЕТКА'
```

### Перетворення нерядкових значень `this` на рядки

Цей метод перетворить будь-яке нерядкове значення на рядок, коли це значення присвоюється його контексту `this`:

```js
const a = String.prototype.toUpperCase.call({
  toString() {
    return "абвгґд";
  },
});

const b = String.prototype.toUpperCase.call(true);

// друкує 'АБВГҐД TRUE'.
console.log(a, b);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
