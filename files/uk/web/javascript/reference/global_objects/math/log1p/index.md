---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.log1p
---
{{JSRef}}

Функція **`Math.log1p()`** повертає натуральний логарифм (за основою {{jsxref("Math.E", "e")}}) значення `1 + число`, а саме:

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>></mo>
<mo>-</mo>
<mn>1</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log1p</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">ln</mo>
<mo stretchy="false">(</mo>
<mn>1</mn>
<mo>+</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow><annotation encoding="TeX">\forall x > -1,
\mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log1p.html")}}

## Синтаксис

```js
Math.log1p(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Натуральний логарифм (за основою {{jsxref("Math.E", "e")}}) від **1**, доданої до переданого числа. Якщо число менше за **-1** — буде повернено {{jsxref("NaN")}}.

## Опис

Для дуже малих значень _x_, додавання 1 може зменшити точність. Числа з рухомою комою подвійної точності, які використовуються в JS дають близько 15 розрядів точності. 1 + 1e-15
\= 1.000000000000001, але 1 + 1e-16 = 1.000000000000000, або рівно 1.0 в такій арифметиці, оскільки числа після 15 розряду зникають під час округлення.

Під час обчислення log(1 + x), ми отримуємо дуже близький до `x` результат, за умови, що `x` малий (саме тому його називають 'натуральним' логарифмом). Коли ми викликаємо Math.log(1 + 1.1111111111e-15), ми очікуємо отримати результат, близький до 1.1111111111e-15. Натомість доведеться брати логарифм 1.00000000000000111022 (помилки заокруглення накопичуються у двійковій системі числення, тому інколи вони виглядають незграбно), що дасть нам в результаті 1.11022...e-15, де лише 3 правильні цифри. Якщо натомість обчислити Math.log1p(1.1111111111e-15), отримаємо значно точніший результат 1.1111111110999995e-15, з 15 правильними розрядами точності (в цьому випадку навіть 16).

Якщо значення `x` менше за -1, повернене значення завжди дорівнює {{jsxref("NaN")}}.

Оскільки `log1p()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.log1p()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування `Math.log1p()`

```js
Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.log1p` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
