---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.substr
---

{{JSRef}} {{deprecated_header}}

Метод **`substr()`** (підрядок) значень {{jsxref("String")}} повертає порцію рядка, яка починається за вказаним індексом і продовжується протягом заданої кількості символів.

> **Примітка:** `substr` не є частиною специфікації ECMAScript: він означений в [Додатку B: Додаткових можливостях ECMAScript для веббраузерів](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html), котрий є нормативним необов'язковим для небраузерних платформ. Таким чином, краще користуватися замість нього стандартними методами [`String.prototype.substring()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/substring) і [`String.prototype.slice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/slice), аби код виходив якнайкраще кросплатформовим. [Сторінка `String.prototype.substring()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/substring#riznytsia-mizh-metodamy-substring-ta-substr) містить порівняння цих трьох методів.

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## Синтаксис

```js-nolint
substr(start)
substr(start, length)
```

### Параметри

- `start`
  - : Індекс першого символу, який буде включено до поверненого підрядка.
- `length` {{optional_inline}}
  - : Кількість символів, які будуть вибрані.

### Повернене значення

Новий рядок, який містить вказану частину початкового рядка.

## Опис

Метод рядка `substr()` видобуває з цього рядка `length` символів, рахуючи від індексу `start`.

- Якщо `start >= str.length`, то повертається порожній рядок.
- Якщо `start < 0`, то індекс рахують від кінця рядка. Висловлюючись формальніше, в такому випадку підрядок починається на позиції `max(start + str.length, 0)`.
- Якщо `start` пропущено або має значення {{jsxref("undefined")}}, то він вважається рівним `0`.
- Якщо `length` пропущено або має значення {{jsxref("undefined")}}, або ж якщо `start + length >= str.length`, то `substr()` видобуває символи аж до кінця рядка
- Якщо `length <0`, то повертається порожній рядок.
- І на місці `start`, і на місці `length`, – {{jsxref("NaN")}} рівносильно `0`.

Попри те, що заохочується уникання використання `substr()`, не існує тривіального способу перейти в історичному коді від `substr()` і до `slice()`, і до `substring()`, не додаючи по суті поліфіл `substr()`. Наприклад, `str.substr(a, l)`, `str.slice(a, a + l)` і `str.substring(a, a + l)` дають три різні результати, коли `str = "01234", a = 1, l = -2`: `substr()` повертає порожній рядок, `slice()` повертає `"123"`, а `substring()` – `"0"`. Фактичний підхід до рефакторингу залежить від можливого діапазону `a` та `l`.

## Приклади

### Застосування substr()

```js
const aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.substr` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
