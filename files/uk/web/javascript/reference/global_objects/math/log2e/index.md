---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.LOG2E
---

{{JSRef}}

Статична властивість даних **`Math.LOG2E`** відображає логарифм [e](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E) за основою 2, що наближено дорівнює 1.442.

{{EmbedInteractiveExample("pages/js/math-log2e.html", "shorter")}}

## Значення

<math display="block"><semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙾𝙶𝟸𝙴</mi><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi mathvariant="normal">e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(\mathrm{e}) \approx 1.442</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Опис

Оскільки `LOG2E` — це статична властивість об'єкта `Math`, її потрібно використовувати через `Math.LOG2E`. Не слід звертатись до неї як до властивості власноруч створеного екземпляра `Math` (`Math` не є конструктором).

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
