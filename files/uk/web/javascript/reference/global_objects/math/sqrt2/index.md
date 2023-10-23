---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.SQRT2
---

{{JSRef}}

Статична властивість даних **`Math.SQRT2`** позначає квадратний корінь з 2, що приблизно дорівнює 1.414.

{{EmbedInteractiveExample("pages/js/math-sqrt2.html", "shorter")}}

## Значення

<math display="block"><semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟸</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1.414</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Опис

`Math.SQRT2` - це стала та більш ефективна альтернатива для [`Math.sqrt(2)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).

Оскільки `SQRT2` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.SQRT2`. Не слід звертатись до неї як до властивості власноруч створеного екземпляра `Math` (`Math` не є конструктором).

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
