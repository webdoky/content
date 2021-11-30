---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
tags:
  - ES6
  - JavaScript
  - Math
  - Method
  - Reference
  - fround
  - Polyfill
browser-compat: javascript.builtins.Math.fround
---
{{JSRef}}

Функція **`Math.fround()`** приймає {{jsxref("Number", "число")}} і повертає його найближчий його відповідник у форматі 32-бітного числа з рухомою комою {{interwiki("wikipedia", "Single-precision floating-point format", "одинарної точності")}}.

{{EmbedInteractiveExample("pages/js/math-fround.html")}}

## Синтаксис

```js
Math.fround(doubleFloat)
```

### Параметри

- `doubleFloat`
  - : {{jsxref("Number", "Число")}}. Якщо замість числа трапився інший тип, то параметр буде перетворено на число, або на {{jsxref("NaN")}}, якщо його не можна привести до числа.

### Повернене значення

Найближчий відповідник переданого числа, у форматі 32-бітного числа з рухомою комою {{interwiki("wikipedia", "Single-precision floating-point format", "одинарної точності")}}.

## Опис

JavaScript всередині використовує 64-бітні числа з рухомою комою подвійної точності, які, як це видно з назви, мають дуже високу точність. Однак, інколи може виникнути необхідність попрацювати з 32-бітними числами з рухомою комою — наприклад, під час читання значень із {{jsxref("Float32Array")}}. Це може призвести до плутанини: порівняння 64-бітних чисел із 32-бітними може не спрацювати, навіть якщо самі числа виглядають ідентично.

Для розв'язання цієї проблеми, можна застосувати `Math.fround()` для переведення 64-бітних чисел з рухомою комою в 32-бітні. JavaScript всередині продовжить сприймати числа як 64-бітні, лише виконає "округлення до найближчого парного" на 23-му біті мантиси, і встановить всі наступні біти мантиси в `0`. Якщо число знаходиться за межами діапазону 32-бітних чисел з рухомою комою, то в результаті буде повернено {{jsxref("Infinity")}} чи `-Infinity`.

Оскільки `fround()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.fround()`. Не слід звертатись до нього, як до методу створеного вами об'єкту `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.fround()

Число 1.5 можна точно відобразити у двійковій системі числення, і ці відображення однакові як для 32-бітного формату, так і для 64-бітного:

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

Однак, число 1.337 не можна точно відобразити у двійковій системі числення, тому його 32-бітне і 64-бітне відображення будуть відрізнятись:

```js
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

<math><semantics><msup><mn>2</mn>
<mn>150</mn>
</msup><annotation encoding="TeX">2^150</annotation>
</semantics></math> — завелике для 32-бітного числа з рухомою комою, тому буде повернено `Infinity`:

```js
2 ** 150; // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
```

Якщо параметр не можна привести до числа, або він є {{interwiki("wikipedia", "NaN", "не-числом")}} (`NaN`), то `Math.fround()` поверне `NaN`:

```js
Math.fround('abc'); // NaN
Math.fround(NaN); // NaN
```

## Поліфіл

Цей функціонал можна відтворити за допомогою наступної функції, за наявності підтримки для {{jsxref("Float32Array")}}:

```js
Math.fround = Math.fround || (function (array) {
  return function(x) {
    return array[0] = x, array[0];
  };
})(new Float32Array(1));
```

Підтримка старіших браузерів також можлива, проте працюватиме повільніше:

```js
if (!Math.fround) Math.fround = function(arg) {
  arg = Number(arg);
  // Одразу повернемо результат для ±0 і NaN.
  if (!arg) return arg;
  var sign = arg < 0 ? -1 : 1;
  if (sign < 0) arg = -arg;
  // Обчислимо показник степеня (8 бітів, зі знаком).
  var exp = Math.floor(Math.log(arg) / Math.LN2);
  var powexp = Math.pow(2, Math.max(-126, Math.min(exp, 127)));
  // Обробляємо піднормальні результати: старша цифра буде нулем, якщо всі біти показника степеня також нулі.
  var leading = exp < -127 ? 0 : 1;
  // Обчислимо 23 біти мантиси — обернені, для округлення в напрямку нуля.
  var mantissa = Math.round((leading - arg / powexp) * 0x800000);
  if (mantissa <= -0x800000) return sign * Infinity;
  return sign * powexp * (leading - mantissa / 0x800000);
};
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.fround` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.round()")}}
