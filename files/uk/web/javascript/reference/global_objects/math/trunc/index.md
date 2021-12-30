---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.trunc
---
{{JSRef}}

Функція **`Math.trunc()`** повертає цілу частину числа шляхом відкидання дробової.

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## Синтаксис

```js
Math.trunc(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Ціла частина переданого числа.

## Опис

На відміну від інших трьох подібних методів `Math`: {{jsxref("Math.floor()")}},
{{jsxref("Math.ceil()")}} та {{jsxref("Math.round()")}}, — `Math.trunc()` працює дуже просто. Вона *відкидає* (обрізає) крапку та всі цифри справа від неї, не зважаючи на те, чи аргумент є додатним числом, чи від'ємним.

Аргумент, переданий до цієї функції, буде неявно приведено до числового типу.

Оскільки `trunc()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.trunc()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.trunc()

```js
Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.trunc` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [Поліфіл](https://github.com/behnammodi/polyfill/blob/master/math.polyfill.js)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
