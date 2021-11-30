---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.hypot
---
{{JSRef}}

Функція **`Math.hypot()`** повертає квадратний корінь з суми квадратів її аргументів, а саме:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo>
<mo stretchy="false">(</mo>
<msub><mi>v</mi>
<mn>1</mn>
</msub><mo>,</mo>
<msub><mi>v</mi>
<mn>2</mn>
</msub><mo>,</mo>
<mo>…</mo>
<mo>,</mo>
<msub><mi>v</mi>
<mi>n</mi>
</msub><mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<msqrt><mrow><munderover><mo>∑</mo>
<mrow><mi>i</mi>
<mo>=</mo>
<mn>1</mn>
</mrow><mi>n</mi>
</munderover><msubsup><mi>v</mi>
<mi>i</mi>
<mn>2</mn>
</msubsup></mrow></msqrt><mo>=</mo>
<msqrt><mrow><msubsup><mi>v</mi>
<mn>1</mn>
<mn>2</mn>
</msubsup><mo>+</mo>
<msubsup><mi>v</mi>
<mn>2</mn>
<mn>2</mn>
</msubsup><mo>+</mo>
<mo>…</mo>
<mo>+</mo>
<msubsup><mi>v</mi>
<mi>n</mi>
<mn>2</mn>
</msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v*1, v_2, \dots, v_n)}
= \sqrt{\sum*{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-hypot.html")}}

## Синтаксис

```js
Math.hypot()
Math.hypot(value0)
Math.hypot(value0, value1)
Math.hypot(value0, value1, ... , valueN)
```

### Параметри

- `value1, value2, ...`
  - : Числа.

### Повернене значення

Квадратний корінь з суми квадратів переданих аргументів. Якщо хоча б один із аргументів не можна звести до числа, буде повернено {{jsxref("NaN")}}.

## Опис

Обчислення гіпотенузи прямокутного трикутника, або модуля комплексного числа — в обох випадках використовується формула `Math.sqrt(v1*v1 + v2*v2)`, де v1 та v2 — це довжини сторін трикутника, або ж дійсна та уявна складові комплексного числа. Та ж відстань у двох чи більше вимірах може бути обчислена шляхом додавання нових квадратів під коренем: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

Ця функція робить такі обчислення простішими й швидшими — достатньо просто викликати `Math.hypot(v1, v2)`, чи `Math.hypot(v1, v2, v3, v4, ...)`.

`Math.hypot` також дозволяє уникнути проблеми переповнення чи зникнення розряду, якщо величина чисел дуже велика. Найбільше число, яке можна представити засобами JS — це `Number.MAX_VALUE`, що приблизно дорівнює 10^308. Якщо числа більші за 10^154, спроба піднести їх до квадрата дасть в результаті `Infinity`. Наприклад, `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. Якщо ж натомість використати `hypot()`, результат буде значно кращий: `Math.hypot(1e200, 1e200) = 1.4142...e+200`. Це також справедливо і для дуже малих чисел. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, проте `Math.hypot(1e-200, 1e-200) = 1.4142...e-200`.

Оскільки `hypot()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.hypot()`. Не слід звертатись до нього, як до методу створеного вами об'єкту `Math` (`Math` не є конструктором).

Якщо жодного аргументу передано не було, результатом буде +0. Якщо будь-який з аргументів дорівнює `±Infinity`, результатом теж буде `Infinity`. Якщо будь-який з аргументів дорівнює `NaN` (якщо при цьому інший аргумент не дорівнює `±Infinity`) — результатом буде NaN. Якщо хоча б один з аргументів неможливо перевести в число, результатом буде {{jsxref("NaN")}}.

Якщо аргумент лише один, `Math.hypot()` еквівалентний `Math.abs()`.

## Приклади

### Застосування Math.hypot()

```js
Math.hypot(3, 4);          // 5
Math.hypot(3, 4, 5);       // 7.0710678118654755
Math.hypot();              // 0
Math.hypot(NaN);           // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, 'foo');   // NaN, since +'foo' => NaN
Math.hypot(3, 4, '5');     // 7.0710678118654755, +'5' => 5
Math.hypot(-3);            // 3, the same as Math.abs(-3)
```

## Поліфіл

Наївний підхід, який не опрацьовує проблеми переповнення чи зникнення розряду:

```js
if (!Math.hypot) Math.hypot = function() {
  var y = 0, i = arguments.length, containsInfinity = false;
  while (i--) {
    var arg = arguments[i];
    if (arg === Infinity || arg === -Infinity)
      containsInfinity = true
    y += arg * arg
  }
  return containsInfinity ? Infinity : Math.sqrt(y)
}
```

Поліфіл, який уникає проблем переповнення та зникнення розряду:

```js
if (!Math.hypot) Math.hypot = function () {
  var max = 0;
  var s = 0;
  var containsInfinity = false;
  for (var i = 0; i < arguments.length; ++i) {
    var arg = Math.abs(Number(arguments[i]));
    if (arg === Infinity)
      containsInfinity = true
    if (arg > max) {
      s *= (max / arg) * (max / arg);
      max = arg;
    }
    s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
  }
  return containsInfinity ? Infinity : (max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s));
};
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.hypot` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
