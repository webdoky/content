---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.expm1
---

{{JSRef}}

Статичний метод **`Math.expm1()`** (експонента мінус 1) повертає [e](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E) в степені, заданому переданим числом, мінус 1. А саме

<math display="block"><semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙𝚖𝟷</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.expm1}(x)} = \mathrm{e}^x - 1</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-expm1.html")}}

## Синтаксис

```js-nolint
Math.expm1(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Число, що представляє e<sup>x</sup> - 1, де e – це [основа натурального логарифму](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E).

## Опис

Для дуже малих значень _x_ додавання 1 може знизити чи звести до нуля будь-яку точність. Числа з рухомою комою подвійної точності в JS дають близько 15 цифр точності. 1 + 1e-15 \= 1.000000000000001, але 1 + 1e-16 = 1.000000000000000, а отже – у такій арифметиці дорівнює 1.0, тому що цифри після п'ятнадцятої округляються.

Коли обчислювати <math display="inline"><semantics><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><annotation encoding="TeX">\mathrm{e}^x</annotation></semantics></math>, де x – це число, дуже близьке до 0, повинен виходити результат, дуже близький до 1 + x, тому що <math display="inline"><semantics><mrow><munder><mo lspace="0em" rspace="0em">lim</mo><mrow><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim\_{x \to 0} \frac{\mathrm{e}^x - 1}{x} = 1</annotation></semantics></math>. Якщо рахувати `Math.exp(1.1111111111e-15) - 1`, то повинен виходити результат, близький до `1.1111111111e-15`. Замість цього, оскільки найвища значна цифра в результаті `Math.exp` – це `1`, то остаточне значення виходить `1.1102230246251565e-15`, в чому лише 3 коректні цифри. Якщо ж замість цього рахувати `Math.exp1m(1.1111111111e-15)`, то вийде значно більш точна відповідь `1.1111111111000007e-15`, в якій 11 коректних цифр.

Оскільки `expm1()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.expm1()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.expm1()

```js
Math.expm1(-Infinity); // -1
Math.expm1(-1); // -0.6321205588285577
Math.expm1(-0); // -0
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
Math.expm1(Infinity); // Infinity
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Polyfill of `Math.expm1` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
