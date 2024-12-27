---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.exp
---

{{JSRef}}

Статичний метод **`Math.exp()`** повертає число [e](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E), піднесене до степеня, заданого переданим числом. Тобто

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.exp}(x)} = \mathrm{e}^x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-exp.html")}}

## Синтаксис

```js-nolint
Math.exp(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Невід'ємне число, що представляє e<sup>x</sup>, де e – це [основа натурального логарифма](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E).

## Опис

Оскільки `exp()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.exp()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

Майте на увазі, що число `e`, піднесене до степеня, дуже близького до 0, буде дуже близьким до 1 та страждатиме від втрати точності. В такому випадку, можливо, варто натомість використати {{jsxref("Math.expm1")}}, із подальшим отриманням дробової частини результату з куди вищою точністю.

## Приклади

### Застосування Math.exp()

```js
Math.exp(-Infinity); // 0
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
Math.exp(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
