---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.hypot
---

{{JSRef}}

Статичний метод **`Math.hypot()`** повертає квадратний корінь з суми квадратів її аргументів, а саме:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚑𝚢𝚙𝚘𝚝</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)} = \sqrt{\sum\_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-hypot.html")}}

## Синтаксис

```js-nolint
Math.hypot()
Math.hypot(value0)
Math.hypot(value0, value1)
Math.hypot(value0, value1, /* … ,*/ valueN)
```

### Параметри

- `value1`, …, `valueN`
  - : Числа.

### Повернене значення

Квадратний корінь з суми квадратів переданих аргументів. Повертає {{jsxref("Infinity")}}, якщо будь-який з аргументів – ±Infinity. Інакше, якщо принаймні один з аргументів є або зводиться до {{jsxref("NaN")}}, повертає {{jsxref("NaN")}}. Повертає `0`, якщо не передані жодні аргументи або всі аргументи дорівнюють ±0.

## Опис

Обчислення гіпотенузи прямокутного трикутника, або модуля комплексного числа — в обох випадках використовується формула `Math.sqrt(v1*v1 + v2*v2)`, де v1 та v2 — це довжини сторін трикутника, або ж дійсна та уявна складові комплексного числа. Та ж відстань у двох чи більше вимірах може бути обчислена шляхом додавання нових квадратів під коренем: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

Ця функція робить такі обчислення простішими й швидшими: достатньо просто викликати `Math.hypot(v1, v2)` чи `Math.hypot(v1, /* … ,*/, vN)`.

`Math.hypot` також дає змогу уникнути проблеми переповнення чи зникнення розряду, якщо величина чисел дуже велика. Найбільше число, яке можна представити засобами JS — це [`Number.MAX_VALUE`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE), що приблизно дорівнює 10<sup>308</sup>. Якщо числа більші за 10<sup>154</sup>, то спроба піднести їх до квадрата дасть в результаті `Infinity`. Наприклад, `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. Якщо ж натомість використати `hypot()`, результат буде значно кращий: `Math.hypot(1e200, 1e200) = 1.4142...e+200`. Це також справедливо і для дуже малих чисел. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, проте `Math.hypot(1e-200, 1e-200) = 1.4142...e-200`.

Отримуючи один аргумент, `Math.hypot()` рівносильний [`Math.abs()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/abs). [`Math.hypot.length`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/length) дорівнює 2, що натякає на те, що цей метод задуманий для обробки щонайменше двох параметрів.

Оскільки `hypot()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.hypot()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.hypot()

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, "foo"); // NaN, оскільки +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, еквівалентно до Math.abs(-3)
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.hypot` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
