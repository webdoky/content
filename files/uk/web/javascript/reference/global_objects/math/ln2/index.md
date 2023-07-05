---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.LN2
---

{{JSRef}}

Статична властивість даних **`Math.LN2`** відображає натуральний логарифм 2, що наближено дорівнює 0.693:

{{EmbedInteractiveExample("pages/js/math-ln2.html","shorter")}}

## Значення

<math display="block"><semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟸</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0.693</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `LN2` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.LN2`. Не слід звертатись до неї як до властивості власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування `Math.LN2`

Наступна функція повертає значення натурального логарифма 2:

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
