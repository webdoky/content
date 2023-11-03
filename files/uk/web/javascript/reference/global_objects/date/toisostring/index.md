---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.toISOString
---

{{JSRef}}

Метод **`toISOString()`** (до рядка ISO) примірників {{jsxref("Date")}} повертає рядок, що представляє поточну дату в [форматі рядка дати та часу](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#format-riadka-daty-ta-chasu), _спрощеному_ форматі, заснованому на [ISO 8601](https://uk.wikipedia.org/wiki/ISO_8601), що завжди має довжину 24 або 27 символів (`YYYY-MM-DDTHH:mm:ss.sssZ` або `±YYYYYY-MM-DDTHH:mm:ss.sssZ` відповідно). Часова зона – завжди Всесвітній координований час, що позначено суфіксом `Z`.

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## Синтаксис

```js-nolint
toISOString()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що представляє дану дату в [форматі рядка дати та часу](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#format-riadka-daty-ta-chasu), згідно зі всесвітнім часом. Це той самий формат, що потрібен для розпізнання методом {{jsxref("Date.parse()")}}.

### Винятки

- {{jsxref("RangeError")}}
  - : Викидається, коли дата є [недійсною](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#epokha-mitky-chasu-ta-nediisna-data), а також коли вона відповідає рокові, що не може бути представлений у форматі рядка дати.

## Приклади

### Застосування toISOString()

```js
const d = new Date(0);

console.log(d.toISOString()); // "1970-01-01T00:00:00.000Z"
```

Приклад вище використовує розбір нестандартного рядкового значення, котре може некоректно розбиратися в браузерах не від Mozilla.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
