---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
page-type: javascript-instance-method
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
browser-compat: javascript.builtins.Date.toISOString
---

{{JSRef}}

Метод **`toISOString()`** (до рядка ISO) повертає рядок в _спрощеному_ розширеному форматі ISO ([ISO 8601](https://uk.wikipedia.org/wiki/ISO_8601)), котрий завжди має довжину 24 чи 27 символів (`YYYY-MM-DDTHH:mm:ss.sssZ` або `±YYYYYY-MM-DDTHH:mm:ss.sssZ` відповідно). Часовий пояс завжди – нульове зміщення від Всесвітнього контрольованого часу, що позначено суфіксом `Z`.

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## Синтаксис

```js-nolint
toISOString()
```

### Повернене значення

Рядок, що представляє дану дату в форматі [ISO 8601](https://uk.wikipedia.org/wiki/ISO_8601), згідно зі всесвітнім часом. Це той самий формат, що потрібен для розбору методом [`Date.parse()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#format-riadka-daty-y-chasu).

## Приклади

### Застосування toISOString()

```js
const today = new Date("05 October 2011 14:48 UTC");

console.log(today.toISOString()); // Повертає 2011-10-05T14:48:00.000Z
```

Приклад вище використовує розбір нестандартного рядкового значення, котре може некоректно розбиратися в браузерах не від Mozilla.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
