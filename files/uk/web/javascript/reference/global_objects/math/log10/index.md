---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.log10
---

{{JSRef}}

Функція **`Math.log10()`** повертає логарифм числа за основою 10, а саме:

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>></mo>
<mn>0</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log10</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<msub><mo lspace="0em" rspace="0em">log</mo>
<mn>10</mn>
</msub><mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>такий унікальний</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>, для якого</mtext>
<mspace width="thickmathspace"></mspace><msup><mn>10</mn>
<mi>y</mi>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log10}(x)} =
\log\_{10}(x) = \text{the unique} \; y \; \text{such that} \; 10^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log10.html")}}

## Синтаксис

```js
Math.log10(x);
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Логарифм переданого числа за основою 10. Якщо число від'ємне, буде повернено {{jsxref("NaN")}}.

## Опис

Якщо значення `x` менше за 0, то повернений результат завжди {{jsxref("NaN")}}.

Оскільки `log10()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.log10()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

Ця функція еквівалентна Math.log(x) / Math.log(10). Для отримання значення log10(e) використовуйте сталу {{jsxref("Math.LOG10E")}}, яка дорівнює 1 / {{jsxref("Math.LN10")}}.

## Приклади

### Застосування Math.log10()

```js
Math.log10(2); // 0.3010299956639812
Math.log10(1); // 0
Math.log10(0); // -Infinity
Math.log10(-2); // NaN
Math.log10(100000); // 5
```

## Поліфіл

Цей функціонал можна відтворити за допомогою такої функції:

```js
Math.log10 =
  Math.log10 ||
  function (x) {
    return Math.log(x) * Math.LOG10E;
  };
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.log10` також доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
