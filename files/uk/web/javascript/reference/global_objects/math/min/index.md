---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.min
---

{{JSRef}}

Статичний метод **`Math.min()`** повертає найменше з чисел, переданих як вихідні параметри, або {{jsxref("Infinity")}}, якщо їх немає.

{{EmbedInteractiveExample("pages/js/math-min.html")}}

## Синтаксис

```js-nolint
Math.min()
Math.min(value0)
Math.min(value0, value1)
Math.min(value0, value1, /* …, */ valueN)
```

### Параметри

- `value1`, …, `valueN`
  - : Нуль або більше чисел, серед яких буде вибрано і повернено найменше значення.

### Повернене значення

Найменше з-поміж переданих чисел. Повертає {{jsxref("NaN")}}, якщо один з параметрів є або перетворюється на `NaN`. Повертає {{jsxref("Infinity")}}, якщо не передати жодних параметрів.

## Опис

Оскільки `min()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.min()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

[`Math.min.length`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/length) дорівнює 2, що натякає на те, що цей статичний метод задуманий для обробки щонайменше двох параметрів.

## Приклади

### Застосування Math.min()

Наступний код знаходить менше з-поміж двох значень `x` та `y` і присвоює його змінній `z`:

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

### Обрізання значення з Math.min()

`Math.min()` часто застосовується для обрізання значення таким чином, щоб воно завжди було меншим або рівним відносно певної межі. Для прикладу, наступний код:

```js
let x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

...можна записати так:

```js
const x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} можна використати подібним чином для обрізання значень з протилежного боку.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.max()")}}
