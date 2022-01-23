---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.codePointAt
---
{{JSRef}}

Метод **`codePointAt()`** повертає невід'ємне число, що відповідає значенню коду Unicode символу за вказаною позицією.

{{EmbedInteractiveExample("pages/js/string-codepointat.html","shorter")}}

## Синтаксис

```js
codePointAt(pos)
```

### Параметри

- `pos`
  - : Позиція елемента в рядку `str`, код якого слід повернути.

### Повернене значення

Десяткове число, яке відповідає значенню коду символу, що знаходиться в рядку за вказаною позицією `pos`.

- Якщо за вказаною позицією `pos` нічого немає, повертається [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined).
- Якщо за позицією `pos` знаходиться старший сурогат UTF-16, повертається код цілої сурогатної _пари_.
- Якщо за позицією `pos` знаходиться молодший сурогат UTF-16, повертається _лише_ код молодшого сурогату.

## Приклади

### Застосування codePointAt()

```js
'ABC'.codePointAt(0)                        // 65
'ABC'.codePointAt(0).toString(16)           // 41

'😍'.codePointAt(0)                         // 128525
'\ud83d\ude0d'.codePointAt(0)               // 128525
'\ud83d\ude0d'.codePointAt(0).toString(16)  // 1f60d

'😍'.codePointAt(1)                         // 56845
'\ud83d\ude0d'.codePointAt(1)               // 56845
'\ud83d\ude0d'.codePointAt(1).toString(16)  // de0d

'ABC'.codePointAt(42)                       // undefined
```

### Цикли з методом codePointAt()

Оскільки звертання за індексом `pos` до елементу, який є молодшим сурогатом UTF-16, повертає _лише_ код молодшого сурогату, краще не звертатися за індексом безпосередньо до рядка UTF-16.

Натомість можна вжити інструкцію [`for...of`](/uk/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) або метод [`forEach()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) масиву (чи будь-що інше, що перебирає сурогати UTF-16 правильно) для перебирання елементів рядка, викликаючи `codePointAt(0)` для отримання коду кожного елемента.

```js
for (let codePoint of '\ud83d\udc0e\ud83d\udc71\u2764') {
   console.log(codePoint.codePointAt(0).toString(16))
}
// '1f40e', '1f471', '2764'
```

## Поліфіл

Наступний код розширяє об'єкт рядка таким чином, що він отримує функцію `codePointAt()`, відповідну до вказаної в ECMAScript 2015, у браузерах без її нативної підтримки.

```js
/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function() {
    'use strict'; // необхідна підтримка `apply`/`call` зі значеннями `undefined`/`null`
    var defineProperty = (function() {
      // IE 8 підтримує `Object.defineProperty` лише на DOM-елементах
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch(error) {}
      return result;
    }());
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // "До цілого"
      var index = position ? Number(position) : 0;
      if (index != index) { // `isNaN`, але кращий
        index = 0;
      }
      // Перевірка індексу на вихід за межі
      if (index < 0 || index >= size) {
        return undefined;
      }
      // Отримання першої кодової одиниці
      var first = string.charCodeAt(index);
      var second;
      if ( // перевірка, чи це частина сурогатної пари
        first >= 0xD800 && first <= 0xDBFF && // старший сурогат
        size > index + 1 // пересвідчується, що попереду іще є принаймні одна кодова одиниця
      ) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) { // молодший сурогат
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (definePropertyis available inointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `String.prototype.codePointAt` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
