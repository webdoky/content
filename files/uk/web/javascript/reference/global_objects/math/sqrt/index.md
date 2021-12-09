---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.sqrt
---
{{JSRef}}

Функція **`Math.sqrt()`** повертає квадратний корінь числа, а саме:

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>≥</mo>
<mn>0</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mi>M</mi>
<mi>a</mi>
<mi>t</mi>
<mi>h</mi>
<mo>.</mo>
<mi>s</mi>
<mi>q</mi>
<mi>r</mi>
<mi>t</mi>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<msqrt><mi>x</mi>
</msqrt><mo>=</mo>
<mtext>такий унікальний</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mo>≥</mo>
<mn>0</mn>
<mspace width="thickmathspace"></mspace><mtext>, для якого</mtext>
<mspace width="thickmathspace"></mspace><msup><mi>y</mi>
<mn>2</mn>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} =
\text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt.html")}}

## Синтаксис

```js
Math.sqrt(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Квадратний корінь переданого числа. Якщо число від'ємне, буде повернено {{jsxref("NaN")}}.

## Опис

Якщо значення `x` — від'ємне, `Math.sqrt()` поверне {{jsxref("NaN")}}.

Оскільки `sqrt()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.sqrt()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.sqrt()

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
