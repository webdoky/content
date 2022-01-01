---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.cbrt
---

{{JSRef}}

Функція **`Math.cbrt()`** повертає кубічний корінь числа, а саме:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mi>M</mi>
<mi>a</mi>
<mi>t</mi>
<mi>h</mi>
<mo>.</mo>
<mi>c</mi>
<mi>b</mi>
<mi>r</mi>
<mi>t</mi>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mroot><mi>x</mi>
<mn>3</mn>
</mroot><mo>=</mo>
<mtext>такий унікальний</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>, для якого</mtext>
<mspace width="thickmathspace"></mspace><msup><mi>y</mi>
<mn>3</mn>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{the unique}
\; y \; \text{such that} \; y^3 = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cbrt.html")}}

## Синтаксис

```js
Math.cbrt(x);
```

### Параметри

- _x_
  - : Число.

### Повернене значення

Кубічний корінь переданого числа.

## Опис

Оскільки `cbrt()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.cbrt()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Поліфіл

Для всіх <math><semantics><mrow><mi>x</mi>
<mo>≥</mo>
<mn>0</mn>
</mrow><annotation encoding="TeX">x \geq 0</annotation>
</semantics></math> маємо <math><semantics><mrow><mroot><mi>x</mi>
<mn>3</mn>
</mroot><mo>=</mo>
<msup><mi>x</mi>
<mrow><mn>1</mn>
<mo>/</mo>
<mn>3</mn>
</mrow></msup></mrow><annotation encoding="TeX">\sqrt[3]{x} = x^{1/3}</annotation>
</semantics></math>, а отже його можна відтворити за допомогою наступної функції:

```js
if (!Math.cbrt) {
  Math.cbrt = (function (pow) {
    return function cbrt(x) {
      // впевнимося, що від'ємні числа так і залишаться від'ємними:
      return x < 0 ? -pow(-x, 1 / 3) : pow(x, 1 / 3);
    };
  })(Math.pow); // локалізуємо Math.pow для підвищення ефективності
}
```

## Приклади

### Застосування Math.cbrt()

```js
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinity
Math.cbrt(null); // 0
Math.cbrt(2); // 1.2599210498948732
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.cbrt` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
