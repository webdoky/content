---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
page-type: javascript-static-method
browser-compat: javascript.builtins.String.fromCodePoint
---

{{JSRef}}

Статичний метод **`String.fromCodePoint()`** (із кодової точки) повертає рядок, створений зі вказаного набору кодів.

{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html", "shorter")}}

## Синтаксис

```js-nolint
String.fromCodePoint()
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, /* …, */ numN)
```

### Параметри

- `num1`, …, `numN`
  - : Ціле число між `0` і `0x10FFFF` (включно), що відповідає кодовій точці Unicode.

### Повернене значення

Рядок, створений зі вказаної послідовності кодів.

### Винятки

- {{jsxref("RangeError")}}
  - : Викидається, коли `numN` не є цілим числом, або коли після перетворення на число є меншим за `0` або більшим за `0x10FFFF`.

## Опис

Оскільки `fromCodePoint()` є статичним методом `String`, він завжди використовується як `String.fromCodePoint()`, а не як метод власного значення `String`.

Кодові точки Unicode мають діапазон від `0` до `1114111` (`0x10FFFF`). В UTF-16 кожен індекс рядка є кодовою одиницею зі значенням `0` – `65535`. Вищі кодові точки представлені _парою_ 16-бітних псевдосимволів-сурогатів. Тому `fromCodePoint()` може повертати рядок, довжина якого (у кодових одиницях UTF-16) більша за кількість переданих аргументів. Для отримання інформації про Unicode дивіться [Символи UTF-16, кодові точки Unicode та графемні кластери](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery).

## Приклади

### Застосування fromCodePoint()

Передача дійсних значень у метод:

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

Передача недійсних значень:

```js
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Порівняння зі fromCharCode()

Метод {{jsxref("String.fromCharCode()")}} не здатний повертати додаткові символи (наприклад, коди в діапазоні від `0x010000` і до `0x10FFFF`) шляхом передачі у функцію їхніх кодів.
Натомість щоб повернути символ з допоміжної площини, він вимагає передачі сурогатної пари UTF-16 в метод:

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Зоряна
String.fromCharCode(55356, 57091); // Ніч" === "\uD83C\uDF03"
```

З іншого боку, `String.fromCodePoint()` може повертати 4-байтові допоміжні символи, так само як і більш звичні 2-байтові BMP-символи, шляхом вказування їхнього коду (що еквівалентно кодовій одиниці UTF-32):

```js
String.fromCodePoint(0x1f303); // або 127747 в десятковій системі числення
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.fromCodePoint` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
