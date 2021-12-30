---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.log
---
{{JSRef}}

Функція **`Math.log()`** повертає натуральний логарифм (за основою {{jsxref("Math.E", "e")}}) числа, а саме:

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>></mo>
<mn>0</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">ln</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>такий унікальний</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>, для якого</mtext>
<mspace width="thickmathspace"></mspace><msup><mi>e</mi>
<mi>y</mi>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} =
\ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math>

Функція **`Math.log()`** в JavaScript еквівалентна виразу _ln(x)_ в математиці.

{{EmbedInteractiveExample("pages/js/math-log.html")}}

## Синтаксис

```js
Math.log(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Натуральний логарифм (за основою {{jsxref("Math.E", "e")}}) переданого числа. Якщо число від'ємне, буде повернено {{jsxref("NaN")}}.

## Опис

Якщо значення `x` дорівнює 0, повернений результат завжди дорівнює {{jsxref("Number.NEGATIVE_INFINITY", "-Infinity")}}.

Якщо значення `x` — від'ємне, повернений результат завжди {{jsxref("NaN")}}.

Оскільки `log()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.log()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

Якщо потрібно отримати натуральний логарифм 2 чи 10 – використовуйте сталі {{jsxref("Math.LN2")}} чи {{jsxref("Math.LN10")}}. Якщо ж потрібен логарифм за основою 2 чи 10 – для цього існують функції {{jsxref("Math.log2()")}} та {{jsxref("Math.log10()")}}. Для отримання логарифму за якоюсь іншою основою – використайте `Math.log(x) / Math.log(іншаОснова)`, як це показано в прикладі нижче; можливо, ви також захочете заздалегідь обчислити значення `1 / Math.log(іншаОснова)`.

## Приклади

### Застосування Math.log()

```js
Math.log(-1); // NaN, вихід за межі області визначення
Math.log(0);  // -Infinity
Math.log(1);  // 0
Math.log(10); // 2.302585092994046
```

### Застосування Math.log() з іншою основою

Наступна функція повертає логарифм числа `y` за основою `x` (тобто <math><semantics><mrow><msub><mo>log</mo>
<mi>x</mi>
</msub><mi>y</mi>
</mrow><annotation encoding="TeX">\log_x y</annotation>
</semantics></math>):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

Якщо запустити `getBaseLog(10, 1000)`, вона поверне `2.9999999999999996` у зв'язку з округленням чисел з рухомою комою, що дуже близько до правильної відповіді — 3.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
