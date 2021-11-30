---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.SQRT1_2
---
{{JSRef}}

Властивість **`Math.SQRT1_2`** позначає квадратний корінь з 1/2, що наближено дорівнює 0.707:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT1_2</mi></mstyle><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}} \approx 0.707</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt1_2.html", "shorter")}}{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `SQRT1_2` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.SQRT1_2`. Не слід звертатись до неї, як до властивості створеного вами об'єкту `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.SQRT1_2

Наступна функція повертає 1 поділену на квадратний корінь з 2:

```js
function getRoot1_2() {
  return Math.SQRT1_2;
}

getRoot1_2(); // 0.7071067811865476
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
