---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.LOG10E
---
{{JSRef}}

Властивість **`Math.LOG10E`** відображає логарифм `e` за основою 10, що наближено дорівнює 0.434:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_{10}(e) \approx 0.434</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log10e.html", "shorter")}}{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `LOG10E` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.LOG10E`. Не слід звертатись до неї, як до властивості створеного вами об'єкту `Math` (`Math` не є конструктором).

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
