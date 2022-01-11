---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - String
  - UTF-32
  - Unicode
  - Polyfill
browser-compat: javascript.builtins.String.fromCodePoint
---
{{JSRef}}

Статичний метод **`String.fromCodePoint()`** повертає рядок, створений зі вказаного набору кодів.

{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html","shorter")}}

## Синтаксис

```js
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, ..., numN)
```

### Параметри

- `num1, ..., numN`
  - : Послідовність кодів.

### Повернене значення

Рядок, створений зі вказаної послідовності кодів.

### Винятки

- Викидається виняток {{jsxref("Errors/Not_a_codepoint", "RangeError")}} у разі передачі недійсного коду Unicode-символу (наприклад: `"RangeError: NaN is not a valid code point"`).

## Опис

Цей метод повертає рядок (а _не_ об'єкт {{jsxref("String")}}).

Оскільки `fromCodePoint()` — це статичний метод об'єкта {{jsxref("String")}}, його потрібно завжди використовувати через `String.fromCodePoint()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра {{jsxref("String")}}.

## Поліфіл

Метод `String.fromCodePoint()` було додано в ECMAScript 2015, і він може підтримуватись іще не всіма браузерами чи середовищами.

Наведений нижче код можна використовувати як поліфіл:

```js
if (!String.fromCodePoint) (function(stringFromCharCode) {
    var fromCodePoint = function(_) {
      var codeUnits = [], codeLen = 0, result = "";
      for (var index=0, len = arguments.length; index !== len; ++index) {
        var codePoint = +arguments[index];
        // коректно опрацьовує всі можливі випадки, в тому числі: `NaN`, `-Infinity`, `+Infinity`
        // Обгортка `!(...)` необхідна для правильної обробки `NaN`
        // Умова (codePoint>>>0) === codePoint враховує десяткові та від'ємні числа
        if (!(codePoint < 0x10FFFF && (codePoint>>>0) === codePoint))
          throw RangeError("Invalid code point: " + codePoint);
        if (codePoint <= 0xFFFF) { // кодова одиниця BMP
          codeLen = codeUnits.push(codePoint);
        } else { // Астральна кодова одиниця, розділяємо на сурогатні половинки
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          codeLen = codeUnits.push(
            (codePoint >> 10) + 0xD800,  // старший сурогат
            (codePoint % 0x400) + 0xDC00 // молодший сурогат
          );
        }
        if (codeLen >= 0x3fff) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result + stringFromCharCode.apply(null, codeUnits);
    };
    try { // IE 8 підтримує `Object.defineProperty` лише на DOM-елементах
      Object.defineProperty(String, "fromCodePoint", {
        "value": fromCodePoint, "configurable": true, "writable": true
      });
    } catch(e) {
      String.fromCodePoint = fromCodePoint;
    }
}(String.fromCharCode));
```

## Приклади

### Застосування `fromCodePoint()`

Передача дійсних значень у метод:

```js
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404" == "Є"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307); // "\uD834\uDF06a\uD834\uDF07"
```

Передача недійсних значень:

```js
String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
```

### Порівняння зі `fromCharCode()`

Метод {{jsxref("String.fromCharCode()")}} не здатний повертати додаткові символи (наприклад, коди в діапазоні від `0x010000` і до `0x10FFFF`) шляхом передачі у функцію їхніх кодів.
Натомість, щоб повернути символ з допоміжної площини, він вимагає передачі сурогатної пари UTF-16 в метод:

```js
String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Зоряна
String.fromCharCode(55356, 57091);   // Ніч" == "\uD83C\uDF03"
```

З іншого боку, `String.fromCodePoint()` може повертати 4-байтові допоміжні символи, так само як і більш звичні 2-байтові BMP-символи, шляхом вказування їхнього коду (що еквівалентно кодовій одиниці UTF-32):

```js
String.fromCodePoint(0x1F303); // або 127747 в десятковій системі числення
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `String.fromCodePoint` також наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
