---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.LOG10E
---

{{JSRef}}

Статична властивість даних **`Math.LOG10E`** відображає логарифм [e](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E) за основою 10, що наближено дорівнює 0.434.

{{EmbedInteractiveExample("pages/js/math-log10e.html", "shorter")}}

## Значення

<math display="block"><semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙾𝙶𝟷𝟶𝙴</mi><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi mathvariant="normal">e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log\_{10}(\mathrm{e}) \approx 0.434</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `LOG10E` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.LOG10E`. Не слід звертатись до неї як до властивості власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування `Math.LOG10E`

Наступна функція поверне значення логарифма `e` за основою 10:

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
