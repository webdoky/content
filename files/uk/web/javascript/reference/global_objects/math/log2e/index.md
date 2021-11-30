---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.LOG2E
---
{{JSRef}}

Властивість **`Math.LOG2E`** відображає логарифм `e` за основою 2, що наближено дорівнює 1.442:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG2E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1.442</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2e.html","shorter")}}{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `LOG2E` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.LOG2E`. Не слід звертатись до неї, як до властивості створеного вами об'єкту `Math` (`Math` не є конструктором).

## Приклади

### Застосування `Math.LOG2E`

Наступна функція поверне значення логарифма `e` за основою 2:

```js
function getLog2e() {
  return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
