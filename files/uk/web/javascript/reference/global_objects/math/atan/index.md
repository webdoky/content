---
title: Math.atan()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.atan
---

{{JSRef}}

Статичний метод **`Math.atan()`** повертає арктангенс (у радіанах) переданого числа, тобто

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">arctan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>такий унікальний&nbsp;</mtext><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>−</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mtext>&nbsp;, для якого&nbsp;</mtext><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) = \text{такий унікальний } y \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \text{ , для якого } \tan(y) = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-atan.html")}}

## Синтаксис

```js-nolint
Math.atan(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Арктангенс (кут в радіанах між <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> і <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> включно) числа `x`. Якщо `x` – {{jsxref("Infinity")}}, цей метод повертає <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>. Якщо `x` – це `-Infinity`, то він повертає <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math>.

## Опис

Оскільки `atan()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.atan()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.atan()

```js
Math.atan(-Infinity); // -1.5707963267948966 (-π/2)
Math.atan(-0); // -0
Math.atan(0); // 0
Math.atan(1); // 0.7853981633974483  (π/4)
Math.atan(Infinity); // 1.5707963267948966  (π/2)

// Кут, який формує пряма (0,0) -- (x,y) з віссю Ox в декартовій системі координат
const theta = (x, y) => Math.atan(y / x);
```

Зверніть увагу, що може виникнути бажання уникнути використання функції `theta` й використовувати натомість {{jsxref("Math.atan2()")}}, котрий має ширший діапазон (від -π до π) й уникає виведення `NaN` у випадках, коли, наприклад, `x` дорівнює `0`.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
