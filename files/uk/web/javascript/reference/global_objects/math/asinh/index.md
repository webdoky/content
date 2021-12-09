---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.asinh
---
{{JSRef}}

Функція **`Math.asinh()`** повертає гіперболічний арксинус числа, а саме:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="thinmathspace">arsinh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>такий унікальний </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>, для якого</mtext>
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} =
\operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \;
\sinh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asinh.html")}}

## Синтаксис

```js
Math.asinh(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Гіперболічний арксинус переданого числа.

## Опис

Оскільки `asinh()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.asinh()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.asinh()

```js
Math.asinh(1);  // 0.881373587019543
Math.asinh(0);  // 0
```

## Поліфіл

Можна відтворити метод `Math.asinh` за допомогою наступної функції:

```js
if (!Math.asinh) Math.asinh = function(x) {
    var absX = Math.abs(x), w
    if (absX < 3.725290298461914e-9) // |x| < 2^-28
        return x
    if (absX > 268435456) // |x| > 2^28
        w = Math.log(absX) + Math.LN2
    else if (absX > 2) // 2^28 >= |x| > 2
        w = Math.log(2 * absX + 1 / (Math.sqrt(x * x + 1) + absX))
    else
        var t = x * x, w = Math.log1p(absX + t / (1 + Math.sqrt(1 + t)))

    return x > 0 ? w : -w
}
```

Для методу `Math.log1p` теж можна зробити поліфіл; дивіться деталі на сторінці [Math.log1p](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.asinh` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
