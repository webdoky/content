---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
page-type: javascript-static-method
tags:
  - Comparison
  - Condition
  - Conditional
  - ECMAScript 2015
  - Equality
  - JavaScript
  - Method
  - Object
  - Polyfill
browser-compat: javascript.builtins.Object.is
---

{{JSRef}}

Статичний метод **`Object.is()`** визначає, чи два передані значення є насправді [одним значенням](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#rivnist-odnoho-znachennia-za-dopomohoiu-object-is).

## Синтаксис

```js-nolint
Object.is(value1, value2)
```

### Параметри

- `value1`
  - : Перше значення до порівняння.
- `value2`
  - : Друге значення до порівняння.

### Повернене значення

Булеве значення, що вказує на те, чи є два переданні аргументи одним значенням, чи ні.

## Опис

Метод `Object.is()` визначає, чи є два передані значення [одним і тим же значенням](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#rivnist-odnoho-znachennia-za-dopomohoiu-object-is). Два значення вважаються одним і тим же, якщо виконується одна з наведених нижче умов:

- обидва вони – {{jsxref("undefined")}}
- обидва вони – [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null)
- обидва `true`, чи обидва `false`
- обидва є рядками однакової довжини, з однаковими символами та в однаковій послідовності
- обидва є одним і тим же об'єктом (тобто обидва значення посилаються на один об'єкт в пам'яті)
- обидва значення є [числами BigInt](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt) та мають одне числове значення
- обидва значення є [символами](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol), що посилаються на одне символьне значення
- обидва є числами та:

  - обидва дорівнюють `+0`
  - обидва дорівнюють `-0`
  - обидва дорівнюють {{jsxref("NaN")}}
  - або обидва є ненульовими значеннями, не дорівнюють {{jsxref("NaN")}}, і мають однакові числові значення

`Object.is()` не є еквівалентом оператору [`==`](/uk/docs/Web/JavaScript/Reference/Operators/Equality). Оператор `==` застосовує різноманітні зведення типів до операндів з обох боків (якщо вони не є значеннями одного типу) перед перевіркою на рівність (що призводить до такої поведінки, як істинність виразу `"" == false`), натомість метод `Object.is()` не виконує зведення жодного значення.

`Object.is()` також _не_ еквівалентний оператору [`===`](/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality). Єдиною відмінністю між `Object.is()` та `===` є їхнє ставлення до нулів зі знаками, а також значень `NaN`. Оператор `===` (як і оператор `==`) сприймає числові значення `-0` та `+0` як рівні, однак значення {{jsxref("NaN")}} – як не рівні між собою.

## Приклади

### Застосування Object.is()

```js
// Випадок 1: Результат обчислення ідентичний застосуванню ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Випадок 2: нулі зі знаками
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Випадок 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл методу `Object.is` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Порівняння на рівність і однаковість](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness) — порівняльний огляд всіх трьох вбудованих засобів порівняння
