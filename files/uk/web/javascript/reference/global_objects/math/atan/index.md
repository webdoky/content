---
title: Math.atan()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.atan
---
{{JSRef}}

Функція **`Math.atan()`** повертає арктангенс (в радіанах) переданого числа, а саме:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atan</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">arctan</mo>
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
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tan</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) =
\text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \,
\text{such that} \; \tan(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atan.html")}}

## Синтаксис

```js
Math.atan(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Арктангенс (в радіанах) переданого числа.

## Опис

Метод `Math.atan()` повертає числове значення між <math>
<semantics><mrow><mo>-</mo>
<mfrac><mi>π</mi>
<mn>2</mn>
</mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation>
</semantics></math> та <math>
<semantics><mfrac><mi>π</mi>
<mn>2</mn>
</mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation>
</semantics></math> радіанів.

Оскільки `atan()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.atan()`. Не слід звертатись до нього, як до методу створеного вами об'єкту `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.atan()

```js
Math.atan(1);   // 0.7853981633974483
Math.atan(0);   // 0
Math.atan(-0);  // -0

Math.atan(Infinity);   //  1.5707963267948966
Math.atan(-Infinity);  // -1.5707963267948966

// Кут, який формує пряма [(0,0);(x,y)] з віссю Ox в декартовій системі координат
Math.atan(y / x);
```

Зауважте, що зі стилістичних причин може виникнути бажання уникнути застосування **±**`Infinity`. В такому разі кращим рішенням може бути використання методу {{jsxref("Math.atan2()")}} з другим аргументом — `0`.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
