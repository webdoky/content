---
title: Set.prototype.difference()
slug: Web/JavaScript/Reference/Global_Objects/Set/difference
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.difference
---

{{JSRef}}

Метод **`difference()`** (різниця) примірників {{jsxref("Set")}} приймає іншу множину та повертає нову множину, що вміщає елементи поточної множини, не присутні в переданій множині.

## Синтаксис

```js-nolint
difference(other)
```

### Параметри

- `other`
  - : Об'єкт {{jsxref("Set")}}, або [множиноподібний](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкт.

### Повернене значення

Новий об'єкт {{jsxref("Set")}}, що вміщає елементи поточної множини, не присутні в множині `other`.

## Опис

У математичний спосіб _difference_ визначається так:

<math display="block"><semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\setminus B = \{x\in A\mid x\notin B\}</annotation></semantics></math>

І – з використанням діаграми Венна:

![Діаграма Венна, в якій перекриваються два кола. Різниця між A та B – це та частина A, що не перетинається з B.](diagram.svg)

Метод `difference()` приймає [множиноподібні](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкти як параметр `other`. Він вимагає, щоб {{jsxref("Operators/this", "this")}} був справжнім екземпляром {{jsxref("Set")}}, оскільки він безпосередньо отримує дані, збережені в `this`, без виклику будь-якого користувацького коду. Потім його поведінка залежить від розмірів `this` та `other`:

- Якщо число елементів у `this` перевищує `other.size`, то він ітерує по `other`, викликаючи її метод `keys()`, і конструює нову множину з елементів `this`, не помічених у `other`.
- Інакше – він ітерує по елементах `this` і конструює нову множину з усіх елементів `e` в `this`, які змушують `other.has(e)` повернути [хибне](/uk/docs/Glossary/Falsy) значення.

Порядок елементів у поверненій множині – такий же, як у `this`.

## Приклади

### Застосування difference()

Наступний приклад обчислює різницю між множиною непарних чисел (<10) та множиною цілих квадратів (<10). Результат – множина непарних чисел, які не є цілими квадратами.

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Set.prototype.difference` у складі `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
