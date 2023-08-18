---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.charCodeAt
---

{{JSRef}}

Метод **`charCodeAt()`** (код символу на позиції) значень {{jsxref("String")}} повертає ціле число в діапазоні від `0` до `65535`, що відповідає кодовій одиниці UTF-16 за переданим індексом в рядку.

Метод `charCodeAt()` завжди індексує рядок як послідовність [кодових одиниць UTF-16](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery), тож може повертати самотні сурогати. Щоб отримати цілу кодову точку Unicode на заданому індексі, слід використати {{jsxref("String.prototype.codePointAt()")}}.

{{EmbedInteractiveExample("pages/js/string-charcodeat.html", "shorter")}}

## Синтаксис

```js-nolint
charCodeAt(index)
```

### Параметри

- `index`
  - : Індекс від нуля символу, що має бути повернений. [Перетворюється на ціле число](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile) — `undefined` перекидається на 0.

### Повернене значення

Ціле число між `0` і `65535`, що відповідає значенню кодової одиниці UTF-16 символу за заданим `index`. Якщо `index` лежить поза діапазоном `0` – `str.length - 1`, то `charCodeAt()` повертає {{jsxref("NaN")}}.

## Опис

Символи в рядку індексуються зліва направо. Індекс першого символу - `0`, а індекс останнього символу в рядку, що зветься, `str`, – `str.length - 1`.

Кодові одиниці Unicode мають діапазон від `0` до `1114111` (`0x10FFFF`). `charCodeAt()` завжди повертає значення, менші `65536`, тому що вищі кодові точки представлені _парою_ 16-бітових псевдосимволів-сурогатів. Таким чином, щоб отримати цілий символ зі значенням більше `65535`, необхідно отримати не тільки `charCodeAt(i)`, але й `charCodeAt(i + 1)` (як якби оброблявся рядок з двома символами), або використати замість цього {{jsxref("String/codePointAt", "codePointAt(i)")}}. Про Unicode – читайте [Символи UTF-16, кодові точки Unicode та графемні кластери](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery).

## Приклади

### Застосування charCodeAt()

Наступний приклад повертає `65`, значення A в Unicode.

```js
"ABC".charCodeAt(0); // повертає 65
```

Метод `charCodeAt()` може повертати самотні сурогати, що не є дійсними символами Unicode.

```js
const str = "𠮷𠮾";
console.log(str.charCodeAt(0)); // 55362, або d842, що є не дійсним символом Unicode
console.log(str.charCodeAt(1)); // 57271, або dfb7, що є не дійсним символом Unicode
```

Щоб отримати цілу кодову точку Unicode на заданому індексі, слід використати {{jsxref("String.prototype.codePointAt()")}}.

```js
const str = "𠮷𠮾";
console.log(str.codePointAt(0)); // 134071
```

> **Примітка:** Уникайте власної реалізації `codePointAt()` за допомогою `charCodeAt()`. Переведення сурогатів UTF-16 у кодові точки Unicode – складне, і `codePointAt()` може бути більш продуктивним, оскільки він безпосередньо використовує приховане представлення рядка. Встановіть поліфіл для `codePointAt()`, якщо це необхідно.

Нижче – можливий алгоритм перетворення пари кодових одиниць UTF-16 на кодову точку Unicode, адаптований з [FAQ Unicode](https://unicode.org/faq/utf_bom.html#utf16-3):

```js
// сталі
const LEAD_OFFSET = 0xd800 - (0x10000 >> 10);
const SURROGATE_OFFSET = 0x10000 - (0xd800 << 10) - 0xdc00;

function utf16ToUnicode(lead, trail) {
  return (lead << 10) + trail + SURROGATE_OFFSET;
}
function unicodeToUTF16(codePoint) {
  const lead = LEAD_OFFSET + (codePoint >> 10);
  const trail = 0xdc00 + (codePoint & 0x3ff);
  return [lead, trail];
}

const str = "𠮷";
console.log(utf16ToUnicode(str.charCodeAt(0), str.charCodeAt(1))); // 134071
console.log(str.codePointAt(0)); // 134071
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
