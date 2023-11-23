---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.LN10
---

{{JSRef}}

Статична властивість даних **`Math.LN10`** відображає натуральний логарифм 10, що наближено дорівнює 2.302.

{{EmbedInteractiveExample("pages/js/math-ln10.html", "shorter")}}

## Значення

<math display="block"><semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟷𝟶</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.302</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN10}} = \ln(10) \approx 2.302</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `LN10` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.LN10`. Не слід звертатись до неї як до властивості власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування `Math.LN10`

Наступна функція поверне значення натурального логарифма 10:

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
