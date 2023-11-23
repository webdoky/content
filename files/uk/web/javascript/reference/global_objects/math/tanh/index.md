---
title: Math.tanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/tanh
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.tanh
---

{{JSRef}}

Статичний метод **`Math.tanh()`** (тангенс гіперболічний) повертає гіперболічний тангенс числа. А саме,

<math display="block"><semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚝𝚊𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mrow><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>+</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow><mrow><msup><mi mathvariant="normal">e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.tanh}(x)} = \tanh(x) = \frac{\sinh(x)}{\cosh(x)} = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{\mathrm{e}^x + \mathrm{e}^{-x}} = \frac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{2x}+1}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-tanh.html")}}

## Синтаксис

```js-nolint
Math.tanh(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Гіперболічний тангенс `x`.

## Опис

Оскільки `tanh()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.tanh()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.tanh()

```js
Math.tanh(-Infinity); // -1
Math.tanh(-0); // -0
Math.tanh(0); // 0
Math.tanh(1); // 0.7615941559557649
Math.tanh(Infinity); // 1
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.tanh` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
