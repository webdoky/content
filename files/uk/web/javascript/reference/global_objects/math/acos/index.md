---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.acos
---
{{JSRef}}

Функція **`Math.acos()`** повертає арккосинус (в радіанах) числа, а саме:

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
<mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">arccos</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>такий унікальний </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mo>∊</mo>
<mo stretchy="false">[</mo>
<mn>0</mn>
<mo>;</mo>
<mi>π</mi>
<mo stretchy="false">]</mo>
<mspace width="thinmathspace"></mspace><mtext>, для якого</mtext>
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x \in
[{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique }
\; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acos.html")}}

## Синтаксис

```js
Math.acos(x)
```

### Параметри

- `x`
  - : Число, яке позначає значення косинуса кута, де `x` знаходиться в проміжку від `-1` до `1`.

### Повернене значення

Арккосинус (кут в радіанах) переданого числа, якщо воно знаходиться в межах `-1` і `1`, а інакше — {{jsxref("NaN")}}.

## Опис

Метод `Math.acos()` повертає числове значення — від 0 до π радіанів — для значення `x` між -1 та 1. Якщо значення `x` виходить за межі цього проміжку, метод поверне {{jsxref("NaN")}}.

Оскільки `acos()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.acos()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.acos()

```js
Math.acos(-2);  // NaN
Math.acos(-1);  // 3.141592653589793
Math.acos(0);   // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1);   // 0
Math.acos(2);   // NaN
```

Для значень менших за -1 чи більших від 1 – `Math.acos()` поверне {{jsxref("NaN")}}.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
