---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.RegExp.lastIndex
---

{{JSRef}}

Властивість даних **`lastIndex`** примірника {{jsxref("RegExp")}} задає індекс, з якого почнеться наступний пошук збігу.

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}

## Значення

Невід'ємне ціле число.

{{js_property_attributes(1, 0, 0)}}

## Опис

Ця властивість задається тільки якщо примірник регулярного виразу має позначку `g` – на позначення глобального пошуку, або `y` – на позначення липкого пошуку. Коли на заданому введенні викликається {{jsxref("RegExp.prototype.test()", "test()")}} або {{jsxref("RegExp.prototype.exec()", "exec()")}}, застосовуються наступні правила:

- Якщо `lastIndex` – більше за довжину введення, то `exec()` або `test()` не знайде збігу, і `lastIndex` отримає значення 0.
- Якщо `lastIndex` дорівнює або менше за довжину введення, то `exec()` або `test()` спробує знайти збіг зі введенням, починаючи від `lastIndex`.

  - Якщо `exec()` або `test()` знайшов збіг, то `lastIndex` отримує значення позиції кінця знайденого збігу.
  - Якщо `exec()` або `test()` не знайшов збігу, то `lastIndex` отримує значення 0.

## Приклади

### Використання lastIndex

Для прикладу – наступна послідовність інструкцій:

```js
const re = /(hi)?/g;
```

Дає збіг з порожнім рядком.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Повертає `["hi", "hi"]`, а `lastIndex` дорівнює 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Повертає `["", undefined]`, порожній масив, чий нульовий елемент – текст збігу. В цьому випадку це порожній рядок, адже `lastIndex` мала значення 2 (і досі має значення 2), а `hi` має довжину 2.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
