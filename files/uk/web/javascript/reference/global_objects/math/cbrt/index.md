---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.cbrt
---

{{JSRef}}

Статичний метод **`Math.cbrt()`** (cubic root – кубічний корінь) повертає кубічний корінь числа. А саме

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚌𝚋𝚛𝚝</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>унікальний&nbsp;</mtext><mi>y</mi><mtext>&nbsp;для якого&nbsp;</mtext><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cbrt}(x)} = \sqrt[3]{x} = \text{унікальний } y \text{ для якого } y^3 = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-cbrt.html")}}

## Синтаксис

```js-nolint
Math.cbrt(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Кубічний корінь `x`.

## Опис

Оскільки `cbrt()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.cbrt()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.cbrt()

```js
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(2); // 1.2599210498948732
Math.cbrt(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.cbrt` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
