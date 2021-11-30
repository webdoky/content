---
title: Math.tanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/tanh
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.tanh
---
{{JSRef}}

Функція **`Math.tanh()`** повертає гіперболічний тангенс числа, а саме:

<math display="block"><semantics><mrow><mo lspace="0em" rspace="0em">tanh</mo>
<mi>x</mi>
<mo>=</mo>
<mfrac><mrow><mo lspace="0em" rspace="0em">sinh</mo>
<mi>x</mi>
</mrow><mrow><mo lspace="0em" rspace="0em">cosh</mo>
<mi>x</mi>
</mrow></mfrac><mo>=</mo>
<mfrac><mrow><msup><mi>e</mi>
<mi>x</mi>
</msup><mo>-</mo>
<msup><mi>e</mi>
<mrow><mo>-</mo>
<mi>x</mi>
</mrow></msup></mrow><mrow><msup><mi>e</mi>
<mi>x</mi>
</msup><mo>+</mo>
<msup><mi>e</mi>
<mrow><mo>-</mo>
<mi>x</mi>
</mrow></msup></mrow></mfrac><mo>=</mo>
<mfrac><mrow><msup><mi>e</mi>
<mrow><mn>2</mn>
<mi>x</mi>
</mrow></msup><mo>-</mo>
<mn>1</mn>
</mrow><mrow><msup><mi>e</mi>
<mrow><mn>2</mn>
<mi>x</mi>
</mrow></msup><mo>+</mo>
<mn>1</mn>
</mrow></mfrac></mrow><annotation encoding="TeX">\tanh x = \frac{\sinh x}{\cosh x} = \frac {e^x - e^{-x}}
{e^x + e^{-x}} = \frac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-tanh.html")}}

## Синтаксис

```js
Math.tanh(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Гіперболічний тангенс переданого числа.

## Опис

Оскільки `tanh()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.tanh()`. Не слід звертатись до нього, як до методу створеного вами об'єкту `Math` (`Math` не є конструктором).

## Поліфіл

Це можна відтворити за допомогою функції {{jsxref("Math.exp()")}}:

```js
Math.tanh = Math.tanh || function(x){
    var a = Math.exp(+x), b = Math.exp(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (a + b);
}
```

## Приклади

### Застосування Math.tanh()

```js
Math.tanh(0);        // 0
Math.tanh(Infinity); // 1
Math.tanh(1);        // 0.7615941559557649
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.tanh` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
