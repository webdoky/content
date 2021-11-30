---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.log2
---
{{JSRef}}

Функція **`Math.log2()`** повертає логарифм числа за основою 2, а саме:

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>></mo>
<mn>0</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log2</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<msub><mo lspace="0em" rspace="0em">log</mo>
<mn>2</mn>
</msub><mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>такий унікальний</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>, для якого</mtext>
<mspace width="thickmathspace"></mspace><msup><mn>2</mn>
<mi>y</mi>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} =
\log_2(x) = \text{the unique} \; y \; \text{such that} \; 2^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## Синтаксис

```js
Math.log2(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Логарифм переданого числа за основою 2. Якщо передано від'ємне число, буде повернено {{jsxref("NaN")}}.

## Опис

Якщо значення `x` менше за 0, повернене значення завжди дорівнює {{jsxref("NaN")}}.

Оскільки `log2()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.log2()`. Не слід звертатись до нього, як до методу створеного вами об'єкту `Math` (`Math` не є конструктором).

Ця функція еквівалентна виразу Math.log(x) / Math.log(2). Для отримання значення log2(e) використовуйте сталу {{jsxref("Math.LOG2E")}}, яка дорівнює 1 / {{jsxref("Math.LN2")}}.

## Поліфіл

Цей поліфіл відтворює функцію `Math.log2`. Зауважте, що він повертає неточні результати на деяких вхідних даних (зокрема 1 << 29). Для роботи з бітовими масками обгорніть його в {{jsxref("Math.round()")}}.

```js
if (!Math.log2) Math.log2 = function(x) {
  return Math.log(x) * Math.LOG2E;
};
```

## Приклади

### Застосування Math.log2()

```js
Math.log2(3);    // 1.584962500721156
Math.log2(2);    // 1
Math.log2(1);    // 0
Math.log2(0);    // -Infinity
Math.log2(-2);   // NaN
Math.log2(1024); // 10
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## See also

- Поліфіл для `Math.log2` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
