---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.trimEnd
---
{{JSRef}}

Метод **`trimEnd()`** видаляє пробільні символи з кінця рядка. Для цього методу також існує псевдонім `trimRight()`.

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## Синтаксис

```js
trimEnd()

trimRight()
```

### Повернене значення

Новий рядок, що містить значення початкового рядка `str`, у якого пробільні символи в кінці (з правого боку) — обрізані.

Якщо кінець рядка `str` не містить пробільних символів, однаково повертається новий рядок (практично — копія рядка `str`), без викидання жодних винятків.

### Вживання псевдонімів

Для одноманітності з функціями, подібними до {{jsxref("String.prototype.padEnd")}}, функція має стандартизоване ім'я `trimEnd`. Щоправда, з міркувань сумісності вебу, метод `trimRight` залишається псевдонімом для `trimEnd`. В деяких рушіях це буквально означає:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Приклади

### Застосування trimEnd()

Наступний приклад виводить рядок `' foo'` в нижньому регістрі:

```js
var str = '   foo  ';

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '   foo'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.trimEnd` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
