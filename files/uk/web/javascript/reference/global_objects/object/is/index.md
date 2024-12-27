---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.is
---

{{JSRef}}

Статичний метод **`Object.is()`** визначає, чи є два значення [тотожними](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#rivnist-totozhnosti-za-dopomohoiu-object-is).

{{EmbedInteractiveExample("pages/js/object-is.html")}}

## Синтаксис

```js-nolint
Object.is(value1, value2)
```

### Параметри

- `value1`
  - : Перше значення для порівняння.
- `value2`
  - : Друге значення для порівняння.

### Повернене значення

Булеве значення, яке вказує, чи є два аргументи тотожними.

## Опис

`Object.is()` визначає, чи є обидва значення [тотожними](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#rivnist-totozhnosti-za-dopomohoiu-object-is). Два значення є тотожними, якщо виконується одна з наведених умов:

- обидва {{jsxref("undefined")}}
- обидва [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null)
- обидва `true` чи обидва `false`
- обидва рядки мають однакову довжину, і містять ті самі символи у тому ж порядку
- обидва один і той же об'єкт (це означає, що обидва значення посилаються на той самий об'єкт в пам'яті)
- обидва [BigInt](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt) з однаковим числовим значенням
- обидва [символи](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol), які посилаються на те саме символьне значення.
- обидва числа та

  - обидва `+0`
  - обидва `-0`
  - обидва {{jsxref("NaN")}}
  - або обидва не 0, не {{jsxref("NaN")}}, і мають те саме значення

`Object.is()` не є еквівалентним оператору [`==`](/uk/docs/Web/JavaScript/Reference/Operators/Equality). Оператор `==` застосовує перед перевіркою на рівність до обох значень (якщо їх типи не є однаковими) різноманітні перетворення (через що, наприклад `"" == false` повертає `true`), однак `Object.is()` не виконує жодного перетворення.

`Object.is()` також _не є_ еквівалентом оператора [`===`](/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality). Єдина відмінність між `Object.is()` та `===` полягає в способі обробки `0` та `NaN`. Оператори `===` (та `==`) вважають значення `-0` та `+0` рівними, але два {{jsxref("NaN")}} - не рівними одне одному.

## Приклади

### Використання Object.is()

```js
// Приклад 1: Результат оцінювання є тим самим, що і з ===
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

// Приклад 2: цифра 0
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Приклад 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Object.is` у `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Порівняння на рівність та тотожність](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness)
