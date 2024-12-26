---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.E
---

{{JSRef}}

Статична властивість даних **`Math.E`** представляє число Ейлера `e` — основу натуральних логарифмів — яке наближено дорівнює 2.718.

{{EmbedInteractiveExample("pages/js/math-e.html")}}

## Значення

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙴</mi><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{Math.E} = e \approx 2.718</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

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
