---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.acosh
---

{{JSRef}}

Статичний метод **`Math.acosh()`** (арккосинус гіперболічний) повертає гіперболічний косинус числа. А саме:

<math display="block"><semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>унікальному&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;для якого&nbsp;</mtext><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\forall x \geq 1,\;\mathtt{\operatorname{Math.acosh}(x)} &amp;= \operatorname{arcosh}(x) = \text{унікальному } y \geq 0 \text{ для якого } \cosh(y) = x\\&amp;= \ln\left(x + \sqrt{x^2 - 1}\right)\end{aligned}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acosh.html")}}

## Синтаксис

```js-nolint
Math.acosh(x)
```

### Параметри

- `x`
  - : Число, більше чи рівне 1.

### Повернене значення

Гіперболічний арккосинус `x`. Якщо `x` менше ніж 1, то повертається {{jsxref("NaN")}}.

## Опис

Оскільки `acosh()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.acosh()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.acosh()

```js
Math.acosh(0); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
Math.acosh(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.acosh` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
