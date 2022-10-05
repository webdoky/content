---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/Trim
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.trim
---

{{JSRef}}

Метод **`trim()`** (підрізати, привести до ладу) видаляє пробільні символи з обох кінців рядка і повертає результат як новий рядок, без внесення змін в початковий рядок. Під "пробільними" символами в цьому контексті слід розуміти всі символи пропусків (власне пробіл, табуляція, нерозривний пробіл тощо) і всі символи завершення рядка (LF, CR тощо).

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## Синтаксис

```js-nolint
trim()
```

### Повернене значення

Новий рядок, який містить значення початкового рядка з обрізаними пробілами з обох кінців.

Якщо ні початок, ні кінець початкового рядка `str` не містять ніяких пробільних символів, однаково повертається новий рядок (практично — копія рядка `str`), без викидання жодних винятків.

Аби отримати новий рядок, в якому пробільні символи обрізані лише з одного кінця, слід використати методи {{jsxref("String.prototype.trimStart()", "trimStart()")}} чи {{jsxref("String.prototype.trimEnd()", "trimEnd()")}}.

## Приклади

### Застосування `trim()`

Наступний приклад виводить рядок `'foo'` в нижньому регістрі:

```js
const orig = "   foo  ";
console.log(orig.trim()); // 'foo'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
