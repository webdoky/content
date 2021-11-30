---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.SQRT2
---
{{JSRef}}

Властивість **`Math.SQRT2`** позначає квадратний корінь з 2, що приблизно дорівнює 1.414:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT2</mi></mstyle><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1.414</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt2.html", "shorter")}}{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `SQRT2` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.SQRT2`. Не слід звертатись до неї, як до властивості створеного вами об'єкту `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.SQRT2

Наступна функція повертає квадратний корінь з 2:

```js
function getRoot2() {
  return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
