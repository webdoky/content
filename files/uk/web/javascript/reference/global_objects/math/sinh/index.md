---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.sinh
---
{{JSRef}}

Функція **`Math.sinh()`** повертає гіперболічний синус числа, що можна виразити через {{jsxref("Math.E", "сталу «e»", "", 1)}}:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.sinh(x)</mo>
</mstyle><mo>=</mo>
<mfrac><mrow><msup><mi>e</mi>
<mi>x</mi>
</msup><mo>-</mo>
<msup><mi>e</mi>
<mrow><mo>-</mo>
<mi>x</mi>
</mrow></msup></mrow><mn>2</mn>
</mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh(x)}} = \frac{e^x -
e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sinh.html")}}

## Синтаксис

```js
Math.sinh(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Гіперболічний синус переданого числа.

## Опис

Оскільки `sinh()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.sinh()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Поліфіл

Це можна відтворити за допомогою функції {{jsxref("Math.exp()")}}:

```js
Math.sinh = Math.sinh || function(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2;
}
```

...або ж зробивши лише один виклик функції {{jsxref("Math.exp()")}}:

```js
Math.sinh = Math.sinh || function(x) {
  var y = Math.exp(x);
  return (y - 1 / y) / 2;
}
```

## Приклади

### Застосування Math.sinh()

```js
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.sinh` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.tanh()")}}
