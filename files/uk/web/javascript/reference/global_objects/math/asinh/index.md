---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.asinh
---

{{JSRef}}

Статичний метод **`Math.asinh()`** (арксинус гіперболічний) повертає гіперболічний арксинус числа. А саме,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>унікальний&nbsp;</mtext><mi>y</mi><mtext>&nbsp;для якого&nbsp;</mtext><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\mathtt{\operatorname{Math.asinh}(x)} &= \operatorname{arsinh}(x) = \text{унікальний } y \text{ для якого } \sinh(y) = x\\&= \ln\left(x + \sqrt{x^2 + 1}\right)\end{aligned}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-asinh.html")}}

## Синтаксис

```js-nolint
Math.asinh(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Гіперболічний арксинус числа `x`.

## Опис

Оскільки `asinh()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.asinh()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.asinh()

```js
Math.asinh(-Infinity); // -Infinity
Math.asinh(-1); // -0.881373587019543
Math.asinh(-0); // -0
Math.asinh(0); // 0
Math.asinh(1); // 0.881373587019543
Math.asinh(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.atanh` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
