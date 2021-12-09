---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
tags:
  - JavaScript
  - Math
  - Namespace
  - Reference
browser-compat: javascript.builtins.Math
---
{{JSRef}}

**`Math`** — це вбудований об'єкт із полями й методами для реалізації математичних сталих та функцій. Не є функцією.

`Math` працює з числами типу {{jsxref("Number")}}. Він не підходить для роботи з {{jsxref("BigInt")}}.

## Опис

На відміну від багатьох інших глобальних об'єктів, `Math` не є конструктором. Всі властивості та методи об'єкту `Math` — статичні. Тобто до числа пі слід звертатись через запис `Math.PI`, а функція синуса викликається як `Math.sin(x)`, де `x` — це аргумент функції. Всі сталі оголошені з максимально допустимою точністю для дійсних чисел у JavaScript.

> **Зауваження:** Багато функцій `Math` мають точність обчислень, _залежну від конкретної реалізації._
>
> Це означає, що різні браузери можуть давати різні результати. Навіть один і той самий JavaScript-рушій на різних ОС чи архітектурах процесора може видавати різні результати!

## Статичні властивості

- {{jsxref("Math.E")}}
  - : Стала Ейлера, основа натуральних логарифмів. Приблизно дорівнює `2.718`.
- {{jsxref("Math.LN2")}}
  - : Натуральний логарифм числа `2`. Приблизно дорівнює `0.693`.
- {{jsxref("Math.LN10")}}
  - : Натуральний логарифм числа `10`. Приблизно дорівнює `2.303`.
- {{jsxref("Math.LOG2E")}}
  - : Логарифм числа `e` за основою `2`. Приблизно дорівнює `1.443`.
- {{jsxref("Math.LOG10E")}}
  - : Логарифм числа `e` за основою `10`. Приблизно дорівнює `0.434`.
- {{jsxref("Math.PI")}}
  - : Значення відношення довжини кола до його діаметру, наближено дорівнює `3.14159`.
- {{jsxref("Math.SQRT1_2")}}
  - : Квадратний корінь з ½. Наближено дорівнює `0.707`.
- {{jsxref("Math.SQRT2")}}
  - : Квадратний корінь з `2`. Наближено дорівнює `1.414`.

## Статичні методи

- {{jsxref("Global_Objects/Math/abs", "Math.abs(<var>x</var>)")}}
  - : Повертає модуль числа `x`.
- {{jsxref("Global_Objects/Math/acos", "Math.acos(<var>x</var>)")}}
  - : Повертає арккосинус числа `x`.
- {{jsxref("Global_Objects/Math/acosh", "Math.acosh(<var>x</var>)")}}
  - : Повертає гіперболічний арккосинус числа `x`.
- {{jsxref("Global_Objects/Math/asin", "Math.asin(<var>x</var>)")}}
  - : Повертає арксинус числа `x`.
- {{jsxref("Global_Objects/Math/asinh", "Math.asinh(<var>x</var>)")}}
  - : Повертає гіперболічний арксинус числа.
- {{jsxref("Global_Objects/Math/atan", "Math.atan(<var>x</var>)")}}
  - : Повертає арктангенс числа `x`.
- {{jsxref("Global_Objects/Math/atanh", "Math.atanh(<var>x</var>)")}}
  - : Повертає гіперболічний арктангенс числа `x`.
- {{jsxref("Global_Objects/Math/atan2", "Math.atan2(<var>y</var>, <var>x</var>)")}}
  - : Повертає арктангенс частки переданих аргументів.
- {{jsxref("Global_Objects/Math/cbrt", "Math.cbrt(<var>x</var>)")}}
  - : Повертає кубічний корінь числа `x`.
- {{jsxref("Global_Objects/Math/ceil", "Math.ceil(<var>x</var>)")}}
  - : Повертає найменше ціле число, яке дорівнює, або більше за `x`.
- {{jsxref("Global_Objects/Math/clz32", "Math.clz32(<var>x</var>)")}}
  - : Повертає кількість старших нульових бітів 32-бітного цілого числа `x`.
- {{jsxref("Global_Objects/Math/cos", "Math.cos(<var>x</var>)")}}
  - : Повертає косинус числа `x`.
- {{jsxref("Global_Objects/Math/cosh", "Math.cosh(<var>x</var>)")}}
  - : Повертає гіперболічний косинус числа `x`.
- {{jsxref("Global_Objects/Math/exp", "Math.exp(<var>x</var>)")}}
  - : Повертає результат обчислення виразу `e^x`, де `x` — це аргумент, а `e` — стала Ейлера (`2.718`…, основа натурального логарифма).
- {{jsxref("Global_Objects/Math/expm1", "Math.expm1(<var>x</var>)")}}
  - : Повертає результат віднімання `1` від значення `exp(x)`.
- {{jsxref("Global_Objects/Math/floor", "Math.floor(<var>x</var>)")}}
  - : Повертає найбільше ціле число, яке дорівнює, або менше за `x`.
- {{jsxref("Global_Objects/Math/fround", "Math.fround(<var>x</var>)")}}
  - : Повертає найближчий відповідник `x` у форматі числа з рухомою комою [одинарної точності](https://uk.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%BE_%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D0%BE%D1%97_%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%96 "посилання на сторінку вікіпедії про одинарну точність").
- {{jsxref("Global_Objects/Math/hypot", "Math.hypot([<var>x</var>[, <var>y</var>[, …]]])")}}
  - : Повертає квадратний корінь з суми квадратів переданих аргументів.
- {{jsxref("Global_Objects/Math/imul", "Math.imul(<var>x</var>, <var>y</var>)")}}
  - : Повертає результат 32-бітного цілочисельного множення аргументів `x` та `y`.
- {{jsxref("Global_Objects/Math/log", "Math.log(<var>x</var>)")}}
  - : Повертає натуральний логарифм (㏒<sub>e</sub>, або ln) числа `x`.
- {{jsxref("Global_Objects/Math/log1p", "Math.log1p(<var>x</var>)")}}
  - : Повертає натуральний логарифм (㏒<sub>e</sub>, або ln) значення виразу `1 + x`, обчисленого для аргументу `x`.
- {{jsxref("Global_Objects/Math/log10", "Math.log10(<var>x</var>)")}}
  - : Повертає логарифм аргументу `x` за основою `10`.
- {{jsxref("Global_Objects/Math/log2", "Math.log2(<var>x</var>)")}}
  - : Повертає логарифм аргументу `x` за основою `2`.
- {{jsxref("Global_Objects/Math/max", "Math.max([<var>x</var>[, <var>y</var>[, …]]])")}}
  - : Повертає найбільше значення з-поміж нуля чи більше аргументів.
- {{jsxref("Global_Objects/Math/min", "Math.min([<var>x</var>[, <var>y</var>[, …]]])")}}
  - : Повертає найменше значення з-поміж нуля чи більше аргументів.
- {{jsxref("Global_Objects/Math/pow", "Math.pow(<var>x</var>, <var>y</var>)")}}
  - : Повертає результат піднесення `x` до степеня `y` (тобто `x^y`).
- {{jsxref("Global_Objects/Math/random", "Math.random()")}}
  - : Повертає псевдовипадкове число від `0` до `1`.
- {{jsxref("Global_Objects/Math/round", "Math.round(<var>x</var>)")}}
  - : Повертає значення аргументу `x`, округлене до найближчого цілого.
- {{jsxref("Global_Objects/Math/sign", "Math.sign(<var>x</var>)")}}
  - : Повертає знак переданого числа `x`. Позначає, чи `x` є додатним, від'ємним, або нулем.
- {{jsxref("Global_Objects/Math/sin", "Math.sin(<var>x</var>)")}}
  - : Повертає синус числа `x`.
- {{jsxref("Global_Objects/Math/sinh", "Math.sinh(<var>x</var>)")}}
  - : Повертає гіперболічний синус числа `x`.
- {{jsxref("Global_Objects/Math/sqrt", "Math.sqrt(<var>x</var>)")}}
  - : Повертає додатний квадратний корінь з числа `x`.
- {{jsxref("Global_Objects/Math/tan", "Math.tan(<var>x</var>)")}}
  - : Повертає тангенс числа `x`.
- {{jsxref("Global_Objects/Math/tanh", "Math.tanh(<var>x</var>)")}}
  - : Повертає гіперболічний тангенс числа `x`.
- {{jsxref("Global_Objects/Math/trunc", "Math.trunc(<var>x</var>)")}}
  - : Повертає цілу частину числа `x`, відкидаючи всі цифри після коми.

## Приклади

### Перетворення між градусами і радіанами

Тригонометричні функції: `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, та `atan2()` — приймають (і повертають) кути в _радіанах_.

Оскільки люди мають схильність оперувати кутами в градусах, та й деякі функції (наприклад, CSS-трансформації) можуть приймати градуси, корисно мати напохваті функції для переведення значень з градусів у радіани, і навпаки:

```js
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
};

function radToDeg(rad) {
  return rad / (Math.PI / 180);
};
```

### Обчислення висоти рівностороннього трикутника

Якщо потрібно обчислити висоту рівностороннього трикутника, і відомо, що довжина його сторони — 100, — можна застосувати формулу _довжина прилеглого катета, помножена на тангенс кута, дорівнює довжині протилежного катета._

![](trigonometry.png)

В JavaScript можна виконати це обчислення наступним чином:

```js
50 * Math.tan(degToRad(60)).
```

Тут використана функція `degToRad()` для переведення 60 градусів у радіани, оскільки {{jsxref("Math.tan()")}} приймає вхідні значення саме в радіанах.

### Повернення випадкового цілого числа між вказаними межами

Це можна зробити, взявши комбінацію з {{jsxref("Math.random()")}} і {{jsxref("Math.floor()")}}:

```js
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

random(1, 10);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Number")}}
