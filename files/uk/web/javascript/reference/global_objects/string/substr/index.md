---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.substr
---
{{JSRef}} {{deprecated_header}}

Метод **`substr()`** повертає порцію рядка, яка починається за вказаним індексом, і продовжується вказану кількість символів.

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## Синтаксис

```js
substr(start)
substr(start, length)
```

### Параметри

- `start`
  - : Індекс першого символу, який буде включено до поверненого підрядка.
- `length`
  - : Необов'язковий параметр. Кількість символів, які потрібно вибрати.

### Повернене значення

Новий рядок, який містить вказану частину початкового рядка.

## Опис

Метод `substr()` вибирає послідовність довжиною `length` символів з початкового рядка `str`, рахуючи від індексу `start`.

- Якщо `start` — невід'ємне число, індекс місця початку вибірки буде обчислено від початку рядка. Його значення обмежене числом `str.length - 1`.
- Якщо `start` — це від'ємне число, індекс місця початку обраховується з кінця рядка. Його значення обмежується `-str.length`.
- Примітка: в діалекті Microsoft JScript від'ємні значення аргументу `start` не вважаються такими, що вказують на кінець рядка.
- Якщо параметр `length` опущено, метод `substr()` вибирає всі символи аж до кінця рядка.
- Якщо `length` дорівнює {{jsxref("undefined")}}, метод `substr()` вибирає символи до кінця рядка.
- Якщо `length` — від'ємне число, його значення сприймається так само як і `0`.
- Для обох аргументів `start` та `length`, значення {{jsxref("NaN")}} обробляється так само як і `0`.

## Поліфіл

Діалект JScript від Microsoft не підтримує від'ємні значення як індекс початку. Аби отримати можливість користуватися цим функціоналом у JScript, можна використати наступний код:

```js
// запускати лише якщо функція substr() зламана
if ('ab'.substr(-1) != 'b') {
  /**
   *  Отримання підрядка з рядка
   *  @param  {integer}  start   де почати підрядок
   *  @param  {integer}  length  скільки символів повернути
   *  @return {string}
   */
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // викликати оригінальний метод
      return substr.call(this,
      	// в разі отримання від'ємного індексу початку — обрахувати, яка це позиція
        // від початку рядка, і підправити параметр початку для від'ємних значень
        start < 0 ? this.length + start : start,
        length)
    }
  }(String.prototype.substr);
}
```

## Приклади

### Застосування substr()

```js
var aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.substr` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
