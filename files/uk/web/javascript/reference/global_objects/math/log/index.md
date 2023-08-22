---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.log
---

{{JSRef}}

Статичний метод **`Math.log()`** повертає натуральний логарифм (за основою [e](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) числа. Тобто

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>такий унікальний&nbsp;</mtext><mi>y</mi><mtext>&nbsp;, для якого&nbsp;</mtext><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x &gt; 0,\;\mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{такий унікальний } y \text{ , для якого } e^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log.html")}}

## Синтаксис

```js-nolint
Math.log(x)
```

### Параметри

- `x`
  - : Число, більше або рівне 0.

### Повернене значення

Натуральний логарифм (за основою [e](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) значення `x`. Якщо `x` – ±0, то повертається [`-Infinity`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY). Якщо `x < 0`, то повертається {{jsxref("NaN")}}.

## Опис

Оскільки `log()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.log()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

Якщо потрібно отримати натуральний логарифм 2 чи 10 – використовуйте сталі {{jsxref("Math.LN2")}} чи {{jsxref("Math.LN10")}}. Якщо ж потрібен логарифм за основою 2 чи 10 – для цього існують функції {{jsxref("Math.log2()")}} та {{jsxref("Math.log10()")}}. Для отримання логарифма за якоюсь іншою основою – використайте `Math.log(x) / Math.log(іншаОснова)`, як це показано в прикладі нижче; можливо, ви також захочете заздалегідь обчислити значення `1 / Math.log(іншаОснова)`, оскільки множення `Math.log(x) * constant` – куди швидша операція.

Майте на увазі, що додатні числа, дуже близькі до 1, можуть страждати від втрати точності й зробити свій натуральний логарифм неточним. У такому випадку може з'явитися необхідність використати натомість {{jsxref("Math.log1p")}}.

## Приклади

### Застосування Math.log()

```js
Math.log(-1); // NaN
Math.log(-0); // -Infinity
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
Math.log(Infinity); // Infinity
```

### Застосування Math.log() з іншою основою

Функція нижче повертає логарифм `y` за основою `x` (тобто <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

Якщо запустити `getBaseLog(10, 1000)`, вона поверне `2.9999999999999996` у зв'язку з округленням чисел з рухомою комою, що дуже близько до правильної відповіді — 3.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
