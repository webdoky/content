---
title: Set.prototype.isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.isDisjointFrom
---

{{JSRef}}

Метод **`isDisjointFrom()`** (не перетинається з) примірників {{jsxref("Set")}} приймає множину та повертає булеве значення, яке вказує, чи не має поточна множина спільних елементів із заданою множиною.

## Синтаксис

```js-nolint
isDisjointFrom(other)
```

### Параметри

- `other`
  - : Об'єкт {{jsxref("Set")}}, або [множиноподібний](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкт.

### Повернене значення

`true`, якщо поточна множина не має зі множиною `other` спільних елементів, і `false` у протилежному випадку.

## Опис

Дві множини _не перетинаються_, якщо вони не мають спільних елементів. У математичному записі:

<math display="block"><semantics><mrow><mi>A</mi><mtext>&nbsp;не перетинається з&nbsp;</mtext><mi>B</mi><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ не перетинається з }B \Leftrightarrow A\cap B = \empty</annotation></semantics></math>

А за допомогою діаграми Венна:

![Діаграма Венна з двома колами. A та B не перетинаються, тому що ці кола не мають області накладання.](diagram.svg)

Метод **`isDisjointFrom()`** приймає як параметр `other` [множиноподібні](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкти. Він вимагає, щоб значення {{jsxref("Operators/this", "this")}} було справжнім примірником {{jsxref("Set")}}, оскільки безпосередньо отримує базові дані, збережені в `this`, не закликаючи жодний користувацький код. Крім цього, його поведінка залежить від розмірів `this` і `other`:

- Якщо у `this` більше елементів, ніж `other.size`, то він ітерує по `other`, викликаючи її метод `keys()`, і якщо будь-який елемент `other` присутній у `this`, то метод повертає `false` (і закриває ітератор `keys()`, викликавши його метод `return()`). В іншому випадку він повертає `true`.
- Інакше – він ітерує по елементах `this`, і повертає `false`, якщо будь-який елемент `e` в `this` змушує `other.has(e)` повернути [істинне](/uk/docs/Glossary/Truthy) значення. В іншому випадку він повертає `true`.

У зв'язку з такою реалізацією, ефективність `isDisjointFrom()` здебільшого залежить від розміру меншої множини серед `this` та `other` (виходячи з припущення, що до множини можна звернутися за сублінійний час).

## Приклади

### Застосування isDisjointFrom()

Множина квадратів цілих чисел (<20) не перетинається з множиною простих чисел (<20), оскільки кожне ціле число можна розкласти на добуток двох цілих чисел, а 1 не вважається простим числом:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

Множина квадратів цілих чисел (<20) перетинається з множиною складених чисел (<20), оскільки всі непарні квадрати є складеними числами за визначенням:

```js
const composites = new Set([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]);
const squares = new Set([1, 4, 9, 16]);
console.log(composites.isDisjointFrom(squares)); // false
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Set.prototype.isDisjointFrom` у складі `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
