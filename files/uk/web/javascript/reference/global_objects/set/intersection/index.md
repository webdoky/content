---
title: Set.prototype.intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Set.intersection
---

{{JSRef}}{{SeeCompatTable}}

Метод **`intersection()`** (перетин) примірників {{jsxref("Set")}} приймає множину і повертає нову множину, що містить елементи, присутні як у поточній множині, так і в переданій.

## Синтаксис

```js-nolint
intersection(other)
```

### Параметри

- `other`
  - : Об'єкт {{jsxref("Set")}}, або [множиноподібний](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкт.

### Повернене значення

Новий об'єкт {{jsxref("Set")}}, що містить елементи, присутні як у поточній множині, так і в множині `other`.

## Опис

У математичному записі _перетин_ визначається так:

<math display="block"><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \{x\in A\mid x\in B\}</annotation></semantics></math>

А за допомогою діаграми Венна

![Діаграма Венна, в якій два кола перетинаються. Перетин A і B – це та частина, якою вони накладаються одне на одного.](diagram.svg)

Метод `intersection()` приймає як параметр `other` [множиноподібні](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкти. Він вимагає, щоб значення {{jsxref("Operators/this", "this")}} було справжнім примірником {{jsxref("Set")}}, оскільки безпосередньо отримує базові дані, збережені в `this`, не закликаючи жодний користувацький код. Крім цього, його поведінка залежить від розмірів `this` і `other`:

- Якщо у `this` більше елементів, ніж `other.size`, то він ітерує по `other`, викликаючи її метод `keys()`, і створює нову множину з усіх елементів, які він видає, і які також присутні в `this`.
- Інакше – він ітерує по всіх елементах у `this`, і створює нову множину з усіх елементів `e`, присутніх у `this`, які змушують `other.has(e)` повернути [істинне](/uk/docs/Glossary/Truthy) значення.

У зв'язку з такою реалізацією, ефективність `intersection()` здебільшого залежить від розміру меншої множини серед `this` і `other` (виходячи з припущення, що до множин можна звертатися за сублінійний час). Порядок елементів у поверненій множині такий самий, як у меншої серед `this` і `other`.

## Приклади

### Застосування intersection()

Наступний приклад обчислює перетин між множиною непарних чисел (<10) і множиною квадратів цілих чисел (<10). Результатом є множина непарних чисел, які є квадратами цілих чисел

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Set.prototype.intersection` у складі `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
