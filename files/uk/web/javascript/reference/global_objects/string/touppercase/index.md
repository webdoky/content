---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.toUpperCase
---
{{JSRef}}

Метод **`toUpperCase()`** повертає значення рядка, на якому викликається, переведене у верхній регістр (значення буде перетворене на рядок, якщо воно таким не є).

{{EmbedInteractiveExample("pages/js/string-touppercase.html","shorter")}}

## Синтаксис

```js
toUpperCase()
```

### Повернене значення

Новий рядок, що містить значення рядка, на якому було викликано метод, переведене у верхній регістр.

### Винятки

- {{jsxref("TypeError")}}
  - : Коли викликається на значеннях {{jsxref("null")}} чи {{jsxref("undefined")}}, наприклад, `String.prototype.toUpperCase.call(undefined)`.

## Опис

Метод `toUpperCase()` повертає значення рядка, переведене у верхній регістр. Цей метод не впливає на значення початкового рядка, оскільки рядки в JavaScript є незмінними.

## Приклади

### Базове застосування

```js
console.log('абетка'.toUpperCase()); // 'АБЕТКА'
```

### Перетворення нерядкових значень `this` на рядки

Цей метод перетворить будь-яке нерядкове значення на рядок, коли це значення присвоюється його контексту `this`:

```js
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'абвгґд';
  }
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
