---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.PI
---
{{JSRef}}

Властивість **`Math.PI`** позначає співвідношення довжини кола до його діаметр, що наближено дорівнює 3.14159:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3.14159</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-pi.html")}}{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `PI` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.PI`. Не слід звертатись до неї, як до властивості створеного вами об'єкту `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.PI

Наступна функція використовує `Math.PI` для обчислення довжини кола за переданим радіусом.

```js
function calculateCircumference(radius) {
  return Math.PI * (radius + radius);
}

calculateCircumference(1);  // 6.283185307179586
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math")}}
