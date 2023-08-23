---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.log1p
---

{{JSRef}}

Статичний метод **`Math.log1p()`** повертає натуральний логарифм (логарифм за основою [e](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) числа `1 + x`, де `x` – аргумент методу. Тобто:

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x &gt; -1,\;\mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log1p.html")}}

## Синтаксис

```js-nolint
Math.log1p(x)
```

### Параметри

- `x`
  - : Число, більше або рівне -1.

### Повернене значення

Натуральний логарифм (логарифм за основою [e](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) числа `x + 1`. Якщо `x` дорівнює -1, повертається [`-Infinity`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY). Якщо `x < -1`, повертається {{jsxref("NaN")}}.

## Опис

Для дуже малих значень _x_ додавання 1 може зменшити точність. Числа з рухомою комою подвійної точності, які використовуються в JS, дають близько 15 розрядів точності. 1 + 1e-15
\= 1.000000000000001, але 1 + 1e-16 = 1.000000000000000, або рівно 1.0 в такій арифметиці, оскільки цифри після 15 розряду зникають під час округлення.

Коли обчислювати log(1 + _x_), де _x_ – мале додатне число, повинен вийти результат, дуже наближений до _x_, тому що <math display="inline"><semantics><mrow><munder><mo movablelimits="true" form="prefix">lim</mo><mrow ><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim\_{x \to 0} \frac{\log(1+x)}{x} = 1</annotation></semantics></math>. Якщо обчислювати `Math.log(1 + 1.1111111111e-15)`, то повинен вийти результат, наближений до `1.1111111111e-15`. Замість цього доведеться брати логарифм від `1.00000000000000111022` (округлення – двійкове, тому іноді це має потворний вигляд), і вийде результат 1.11022…e-15, де будуть лише 3 коректні розряди. Якщо ж замість цього обчислити `Math.log1p(1.1111111111e-15)`, то вийде куди точніший результат `1.1111111110999995e-15`, з 15 коректними розрядами точності (в цьому випадку навіть 16).

Якщо значення `x` менше за -1, то повернене значення завжди {{jsxref("NaN")}}.

Оскільки `log1p()` — це статичний метод об'єкта `Math` – його потрібно завжди використовувати через `Math.log1p()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.log1p()

```js
Math.log1p(-2); // NaN
Math.log1p(-1); // -Infinity
Math.log1p(-0); // -0
Math.log1p(0); // 0
Math.log1p(1); // 0.6931471805599453
Math.log1p(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.log1p` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
