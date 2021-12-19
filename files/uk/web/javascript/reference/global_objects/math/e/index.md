---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.E
---
{{JSRef}}

Властивість **`Math.E`** відображає число Ейлера `e` — основу натуральних логарифмів — яке наближено дорівнює 2.718.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-e.html")}}{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `E` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.E`. Не слід звертатись до неї як до властивості власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування `Math.E`

Наступна функція поверне значення `e`:

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
