---
title: Math.asin()
slug: Web/JavaScript/Reference/Global_Objects/Math/asin
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.asin
---

{{JSRef}}

Функція **`Math.asin()`** поверне арксинус (в радіанах) переданого числа, а саме:

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>∊</mo>
<mo stretchy="false">[</mo>
<mrow><mo>-</mo>
<mn>1</mn>
</mrow><mo>;</mo>
<mn>1</mn>
<mo stretchy="false">]</mo>
<mo>,</mo>
<mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asin</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">arcsin</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>такий унікальний </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mo>∊</mo>
<mrow><mo>[</mo>
<mrow><mo>-</mo>
<mfrac><mi>π</mi>
<mn>2</mn>
</mfrac><mo>;</mo>
<mfrac><mi>π</mi>
<mn>2</mn>
</mfrac></mrow><mo>]</mo>
</mrow><mspace width="thinmathspace"></mspace><mtext>, для якого</mtext>
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sin</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x \in
[{-1};1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{ the unique }
\; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \sin(y)
= x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asin.html")}}

## Синтаксис

```js
Math.asin(x);
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Арксинус (в радіанах) переданого числа, якщо його значення знаходиться в межах від **-1** і до **1**, а інакше — {{jsxref("NaN")}}.

## Опис

Метод `Math.asin()` повертає числове значення між <math><semantics><mrow><mo>-</mo>
<mfrac><mi>π</mi>
<mn>2</mn>
</mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation>
</semantics></math> та <math><semantics><mfrac><mi>π</mi>
<mn>2</mn>
</mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation>
</semantics></math> радіанів для _x_, який має значення від -1 до 1. Якщо ж значення _x_ знаходиться за межами цього числового проміжку, метод поверне {{jsxref("NaN")}}.

Оскільки `asin()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.asin()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.asin()

```js
Math.asin(-2); // NaN
Math.asin(-1); // -1.5707963267948966 (-pi/2)
Math.asin(0); // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1); // 1.5707963267948966 (pi/2)
Math.asin(2); // NaN
```

Для значень менших за -1 чи більших за 1 – `Math.asin()` поверне {{jsxref("NaN")}}.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
