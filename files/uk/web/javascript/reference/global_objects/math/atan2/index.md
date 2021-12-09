---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.atan2
---
{{JSRef}}

Функція **`Math.atan2()`** повертає плоский кут (в радіанах) між додатним напрямком осі Ox, і променем з точки (0,0) до точки (x,y), для переданих аргументів `Math.atan2(y,x)`.

{{EmbedInteractiveExample("pages/js/math-atan2.html")}}

## Синтаксис

```js
Math.atan2(y, x)
```

### Параметри

- `y`
  - : Координата Y точки.
- `x`
  - : Координата X точки.

### Повернене значення

Кут в радіанах (значення з проміжку <math><semantics><mrow><mo stretchy="false">[</mo>
<mo>-</mo>
<mi>π</mi>
<mo>,</mo>
<mi>π</mi>
<mo stretchy="false">]</mo>
</mrow><annotation encoding="TeX">[-\pi, \pi]</annotation>
</semantics></math>) між додатним напрямком осі Ox та променем з точки (0,0) до точки (x,y).

## Опис

Метод `Math.atan2()` повертає числове значення між -π та π, що відповідає куту θ (тета) точки `(x, y)`. Це кут, виміряний в радіанах проти годинникової стрілки, між додатним напрямком осі Ox та точкою `(x, y)`. Зауважте, що аргументи цієї функції передають координату `y` першою, а `x` — другою.

![Проста діаграма, яка показує кут, повернений atan2(y, x)](atan2.png)

До `Math.atan2()` передаються окремо аргументи `x` та `y`, тоді як `Math.atan()` приймає відношення цих аргументів.

Оскільки `atan2()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.atan2()`. Не слід звертатись до нього, як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

## Приклади

### Застосування Math.atan2()

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683

Math.atan2(±0, -0);               // ±PI.
Math.atan2(±0, +0);               // ±0.
Math.atan2(±0, -x);               // ±PI for x > 0.
Math.atan2(±0, x);                // ±0 for x > 0.
Math.atan2(-y, ±0);               // -PI/2 for y > 0.
Math.atan2(y, ±0);                // PI/2 for y > 0.
Math.atan2(±y, -Infinity);        // ±PI for finite y > 0.
Math.atan2(±y, +Infinity);        // ±0 for finite y > 0.
Math.atan2(±Infinity, x);         // ±PI/2 for finite x.
Math.atan2(±Infinity, -Infinity); // ±3*PI/4.
Math.atan2(±Infinity, +Infinity); // ±PI/4.
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
