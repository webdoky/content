---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.pow
---

{{JSRef}}

Статичний метод **`Math.pow()`** повертає значення основи, піднесене до степеня. Тобто:

<math display="block"><semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚙𝚘𝚠</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo>,</mo><mi>𝚢</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mi>y</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.pow}(x, y)} = x^y</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-pow.html")}}

## Синтаксис

```js-nolint
Math.pow(base, exponent)
```

### Параметри

- `base`
  - : Значення основи.
- `exponent`
  - : Значення степеня.

### Повернене значення

Число, що представляє значення `base`, піднесене до степеня `exponent`. Повертає {{jsxref("NaN")}} у кожному з наступних випадків:

- `exponent` – це `NaN`.
- `base` – це `NaN`, а `exponent` – не `0`.
- `base` – це ±1, а `exponent` – це ±`Infinity`.
- `base < 0`, а `exponent` не є цілим числом.

## Опис

`Math.pow()` рівносильний операторові [`**`](/uk/docs/Web/JavaScript/Reference/Operators/Exponentiation), окрім того, що `Math.pow()` приймає лише числа.

`Math.pow(NaN, 0)` (і рівносильне `NaN ** 0`) – це єдиний випадок, при якому {{jsxref("NaN")}} не поширюється на результат математичної операції: повертається `1`, попри те, що є операнд `NaN`. Крім цього, логіка, при якій `base` дорівнює 1, а `exponent` не є скінченним числом (є ±Infinity або `NaN`), відрізняється від вимог стандарту IEEE 754, що задає, що результатом повинна бути 1, а натомість JavaScript повертає `NaN`, аби зберегти зворотну сумісність зі своєю вихідною логікою.

Оскільки `pow()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.pow()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.pow()

```js
// Прості випадки
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024

// Дробові показники степеня
Math.pow(4, 0.5); // 2 (квадратний корінь з 4)
Math.pow(8, 1 / 3); // 2 (кубічний корівнь з 8)
Math.pow(2, 0.5); // 1.4142135623730951 (квадратний корінь з 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (кубічний корінь з 2)

// Від'ємні показники степеня
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5

// Від'ємні основи
Math.pow(-7, 2); // 49 (квадрати — завжди додатні)
Math.pow(-7, 3); // -343 (куби можуть бути від'ємними)
Math.pow(-7, 0.5); // NaN (від'ємні числа не мають дійсного квадратного кореня)
// У зв'язку з тим, що "парні" та "непарні" корені знаходяться близько один від одного,
// та через обмеження точності чисел з рухомою комою,
// від'ємні основи з дробовими показниками степенів завжди повертатимуть NaN,
// навіть тоді, коли математично результат операції є дійсним числом
Math.pow(-7, 1 / 3); // NaN

// Нуль і нескінченність
Math.pow(0, 0); // 1 (будьщо ** ±0 – це 1)
Math.pow(Infinity, 0.1); // Infinity (додатний степінь)
Math.pow(Infinity, -1); // 0 (від'ємний степінь)
Math.pow(-Infinity, 1); // -Infinity (додатний непарний цілий степінь)
Math.pow(-Infinity, 1.5); // Infinity (додатний степінь)
Math.pow(-Infinity, -1); // -0 (від'ємний непарний цілий степінь)
Math.pow(-Infinity, -1.5); // 0 (від'ємний степінь)
Math.pow(0, 1); // 0 (додатний степінь)
Math.pow(0, -1); // Infinity (від'ємний степінь)
Math.pow(-0, 1); // -0 (додатний непарний цілий степінь)
Math.pow(-0, 1.5); // 0 (додатний степінь)
Math.pow(-0, -1); // -Infinity (від'ємний непарний цілий степінь)
Math.pow(-0, -1.5); // Infinity (від'ємний степінь)
Math.pow(0.9, Infinity); // 0
Math.pow(1, Infinity); // NaN
Math.pow(1.1, Infinity); // Infinity
Math.pow(0.9, -Infinity); // Infinity
Math.pow(1, -Infinity); // NaN
Math.pow(1.1, -Infinity); // 0

// NaN: лише Math.pow(NaN, 0) не призводить до NaN
Math.pow(NaN, 0); // 1
Math.pow(NaN, 1); // NaN
Math.pow(1, NaN); // NaN
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [Оператор піднесення до степеня](/uk/docs/Web/JavaScript/Reference/Operators/Exponentiation)
