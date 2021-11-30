---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.atanh
---
{{JSRef}}

Функція **`Math.atanh()`** повертає гіперболічний арктангенс числа, а саме:

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>∊</mo>
<mrow><mo>(</mo>
<mrow><mo>-</mo>
<mn>1</mn>
<mo>,</mo>
<mn>1</mn>
</mrow><mo>)</mo>
</mrow><mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="thinmathspace">arctanh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>такий унікальний </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>, для якого</mtext>
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right),
\mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ the
unique } \; y \; \text{such that} \; \tanh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atanh.html")}}

## Синтаксис

```js
Math.atanh(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Гіперболічний арктангенс переданого числа.

## Опис

Оскільки `atanh()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.atanh()`. Не слід звертатись до нього, як до методу створеного вами об'єкту `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.atanh()

```js
Math.atanh(-2);  // NaN
Math.atanh(-1);  // -Infinity
Math.atanh(0);   // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1);   // Infinity
Math.atanh(2);   // NaN
```

Для значень, які більші за 1 чи менші за -1, буде повернено {{jsxref("NaN")}}.

## Поліфіл

Для <math><semantics><mrow><mrow><mo>|</mo>
<mi>x</mi>
<mo>|</mo>
</mrow><mo>&#x3C;</mo>
<mn>1</mn>
</mrow><annotation encoding="TeX">\left|x\right| &#x3C; 1</annotation>
</semantics></math>, маємо <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">artanh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mfrac><mn>1</mn>
<mn>2</mn>
</mfrac><mo lspace="0em" rspace="0em">ln</mo>
<mrow><mo>(</mo>
<mfrac><mrow><mn>1</mn>
<mo>+</mo>
<mi>x</mi>
</mrow><mrow><mn>1</mn>
<mo>-</mo>
<mi>x</mi>
</mrow></mfrac><mo>)</mo>
</mrow></mrow><annotation encoding="TeX">\operatorname {artanh} (x) = \frac{1}{2}\ln \left(
\frac{1 + x}{1 - x} \right)</annotation>
</semantics></math>, а отже його можна відтворити за допомогою такої функції:

```js
Math.atanh = Math.atanh || function(x) {
  return Math.log((1+x)/(1-x)) / 2;
};
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.atanh` також доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
