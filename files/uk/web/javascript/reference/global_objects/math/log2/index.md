---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.log2
---

{{JSRef}}

Статичний метод **`Math.log2()`** повертає логарифм числа за основою 2. А саме

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟸</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>унікальне&nbsp;</mtext><mi>y</mi><mtext>&nbsp;, таке, що&nbsp;</mtext><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x &gt; 0,\;\mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{the unique } y \text{ such that } 2^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## Синтаксис

```js-nolint
Math.log2(x)
```

### Параметри

- `x`
  - : Число, більше або рівне 0.

### Повернене значення

Логарифм `x` за основою 2. Якщо `x < 0`, то повертається {{jsxref("NaN")}}.

## Опис

Оскільки `log2()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.log2()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

Ця функція еквівалентна виразу Math.log(x) / Math.log(2). Для отримання значення log2(e) використовуйте сталу {{jsxref("Math.LOG2E")}}, яка дорівнює 1 / {{jsxref("Math.LN2")}}.

## Приклади

### Застосування Math.log2()

```js
Math.log2(-2); // NaN
Math.log2(-0); // -Infinity
Math.log2(0); // -Infinity
Math.log2(1); // 0
Math.log2(2); // 1
Math.log2(3); // 1.584962500721156
Math.log2(1024); // 10
Math.log2(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## See also

- [Поліфіл `Math.log2` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
