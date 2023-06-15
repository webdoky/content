---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.log10
---

{{JSRef}}

Статичний метод **`Math.log10()`** повертає логарифм числа за основою 10. Тобто

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>такий унікальний&nbsp;</mtext><mi>y</mi><mtext>&nbsp;, для якого&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x &gt; 0,\;\mathtt{\operatorname{Math.log10}(x)} = \log\_{10}(x) = \text{такий унікальний } y \text{ , для якого } 10^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log10.html")}}

## Синтаксис

```js-nolint
Math.log10(x)
```

### Параметри

- `x`
  - : Число, більше або рівне 0.

### Повернене значення

Логарифм `x` за основою 10. Якщо `x < 0`, то повертається {{jsxref("NaN")}}.

## Опис

Оскільки `log10()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.log10()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

Ця функція є рівносильною `Math.log(x) / Math.log(10)`. Для отримання `log10(e)` слід використовувати сталу {{jsxref("Math.LOG10E")}}, рівну 1 / {{jsxref("Math.LN10")}}.

## Приклади

### Застосування Math.log10()

```js
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
Math.log10(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.log10` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
