---
title: Set.prototype.symmetricDifference()
slug: Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Set.symmetricDifference
---

{{JSRef}}{{SeeCompatTable}}

Метод **`symmetricDifference()`** (симетрична різниця) примірників {{jsxref("Set")}} приймає множину і повертає нову множину, що містить елементи, які є в поточній множині або в переданій, але не в них обох.

## Синтаксис

```js-nolint
symmetricDifference(other)
```

### Параметри

- `other`
  - : Об'єкт {{jsxref("Set")}}, або [множиноподібний](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкт.

### Повернене значення

Новий об'єкт {{jsxref("Set")}}, що містить елементи, які є в поточній множині або в множині `other`, але не в них обох.

## Опис

У математичному записі _симетрична різниця_ визначається так:

<math display="block"><semantics><mrow><mi>A</mi><mo>⊖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">A\ominus B = (A\setminus B)\cup(B\setminus A)</annotation></semantics></math>

А за допомогою діаграми Венна:

![Діаграма Венна з двома колами, що перетинаються. Симетрична різниця A і B — це область, що міститься в будь-якому з кіл, але не в обох.](diagram.svg)

Метод `symmetricDifference()` приймає [множиноподібні](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкти в параметрі `other`. Він вимагає, щоб {{jsxref("Operators/this", "this")}} було справжнім примірником {{jsxref("Set")}}, оскільки безпосередньо отримує базові дані, збережені в `this`, без закликання будь-якого користувацького коду. Далі він ітерує по `other`, викликавши її метод `keys()`, і створює нову множину з усіма елементами `this`, які не зустрічаються в `other`, і усіма елементами `other`, які не зустрічаються в `this`.

Порядок елементів у поверненій множині — спочатку ті, що в `this`, а потім ті, що в `other`.

## Приклади

### Застосування symmetricDifference()

Наступний приклад обчислює симетричну різницю між множиною парних чисел (<10) і множиною квадратів натуральних чисел (<10). Результатом є множина чисел, які є або парними, або квадратами натуральних чисел, але і тим, і іншим водночас.

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); // Set(5) { 1, 2, 6, 8, 9 }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Set.prototype.symmetricDifference` у складі `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.union()")}}
