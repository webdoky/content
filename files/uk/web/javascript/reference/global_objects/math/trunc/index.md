---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.trunc
---

{{JSRef}}

Статичний метод **`Math.trunc()`** (урізати) повертає цілу частину числа шляхом відкидання усіх дробових цифр.

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## Синтаксис

```js-nolint
Math.trunc(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Ціла частина `x`.

## Опис

Те, як працює `Math.trunc()`, – прямолінійніше за інші три методи `Math`: {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} і {{jsxref("Math.round()")}}; цей метод _відкидає_ (обрізає) крапку та всі цифри справа від неї, не зважаючи на те, чи аргумент є додатним числом, чи від'ємним.

## Приклади

### Застосування Math.trunc()

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); // 0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
```

### Використання бітових фіктивів для урізання чисел

> [!WARNING]
> Цей код не є поліфілом для `Math.trunc()` у зв'язку з крайніми випадками, котрі не можна ігнорувати.
> Бітові операції перетворюють свої операнди на 32-бітові цілі числа, котрі люди історично використовували для обрізання чисел з рухомою комою. Серед загальноприйнятих метод:

```js
const original = 3.14;
const truncated1 = ~~original; // Подвійне заперечення
const truncated2 = original & -1; // Бітова кон'юнкція з -1
const truncated3 = original | 0; // Бітова диз'юнкція з 0
const truncated4 = original ^ 0; // Бітова виключна диз'юнкція з 0
const truncated5 = original >> 0; // Бітовий зсув на 0
```

Майте на увазі, що по суті це `toInt32`, що не те саме, що `Math.trunc`. Коли значення не задовольняє -2<sup>31</sup> - 1 < `значення` < 2<sup>31</sup> (-2147483649 < `значення` < 2147483648), то перетворення переповнюється.

```js
const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0
```

Операцію `~~` можна використовувати як заміну для `Math.trunc()` лише тоді, коли є певність, що діапазон вихідних даних лежить в межах діапазону 32-бітових цілих чисел.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.trunc` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
