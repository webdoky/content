---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.SQRT1_2
---

{{JSRef}}

Статична властивість даних **`Math.SQRT1_2`** позначає квадратний корінь з 1/2, що наближено дорівнює 0.707.

{{EmbedInteractiveExample("pages/js/math-sqrt1_2.html", "shorter")}}

## Значення

<math display="block"><semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟷_𝟸</mi><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} \approx 0.707</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Опис

`Math.SQRT1_2` – це стала та більш ефективна альтернатива для [`Math.sqrt(0.5)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).

Оскільки `SQRT1_2` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.SQRT1_2`. Не слід звертатись до неї як до властивості власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.SQRT1_2

Наступна функція повертає одиницю, поділену на квадратний корінь з 2:

```js
function getRoot1_2() {
  return Math.SQRT1_2;
}

getRoot1_2(); // 0.7071067811865476
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
