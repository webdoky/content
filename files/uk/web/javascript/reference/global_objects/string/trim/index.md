---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.trim
---

{{JSRef}}

Метод **`trim()`** (підрізати, привести до ладу) видаляє пробільні символи з обох кінців рядка і повертає результат як новий рядок, без внесення змін в початковий рядок.

Аби отримати новий рядок, в якому пробільні символи обрізані лише з одного кінця, слід використати методи {{jsxref("String.prototype.trimStart()", "trimStart()")}} чи {{jsxref("String.prototype.trimEnd()", "trimEnd()")}}.

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## Синтаксис

```js-nolint
trim()
```

### Повернене значення

Новий рядок, який містить значення початкового рядка з обрізаними пробілами з обох кінців. Під пробілами тут маються на увазі власне [пробільні](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#probily) символи, плюс [символи кінця рядка](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#symvoly-kintsia-riadka).

Якщо ні початок, ні кінець початкового рядка `str` не містять ніяких пробільних символів, однаково повертається новий рядок (практично — копія рядка `str`).

## Приклади

### Застосування trim()

Наступний приклад підрізає пробіли з обох кінців `str`.

```js
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
