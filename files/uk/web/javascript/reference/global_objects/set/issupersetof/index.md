---
title: Set.prototype.isSupersetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Set.isSupersetOf
---

{{JSRef}}{{SeeCompatTable}}

Метод **`isSupersetOf()`** (є надмножиною щодо) примірників {{jsxref("Set")}} приймає множину і повертає булеве значення, що вказує, чи всі елементи заданої множини є в поточній множині.

## Синтаксис

```js-nolint
isSupersetOf(other)
```

### Параметри

- `other`
  - : Об'єкт {{jsxref("Set")}}, або [множиноподібний](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкт.

### Повернене значення

`true`, якщо всі елементи в множині `other` також присутні в поточній множині, і `false` в іншому випадку.

## Опис

У математичному записі _надмножина_ визначається так:

<math display="block"><semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>A</mi></mrow><annotation encoding="TeX">A\supseteq B \Leftrightarrow \forall x\in B,\,x\in A</annotation></semantics></math>

А за допомогою діаграми Венна:

![Діаграма Венна з двома колами. A є надмножиною B, тому що B повністю міститься в A.](diagram.svg)

> **Примітка:** Відносини _надмножини_ не є _правильною надмножиною_, тобто `isSupersetOf()` повертає `true`, якщо `this` і `other` містять одні й ті ж елементи.

Метод `isSupersetOf()` приймає [множиноподібні](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set#mnozhynopodibni-obiekty) об'єкти в параметрі `other`. Він вимагає, щоб {{jsxref("Operators/this", "this")}} було справжнім примірником {{jsxref("Set")}}, оскільки безпосередньо отримує базові дані, збережені в `this`, без закликання будь-якого користувацького коду. Далі, його логіка залежить від розмірів `this` і `other`:

- Якщо у `this` менше елементів, ніж `other.size`, то він безпосередньо повертає `false`.
- Інакше – цей метод ітерує по `other`, викликаючи її метод `keys()`, і якщо будь-який елемент в `other` відсутній в `this`, то метод `isSupersetOf()` повертає `false` (і закриває ітератор `keys()` шляхом виклику його методу `return()`). Інакше – він повертає `true`.

## Приклади

### Застосування isSupersetOf()

Множина парних чисел (<20) є надмножиною кратних 4 (<20):

```js
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const fours = new Set([4, 8, 12, 16]);
console.log(evens.isSupersetOf(fours)); // true
```

Множина всіх непарних чисел (<20) не є надмножиною простих чисел (<20), оскільки 2 є простим, але не непарним:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(odds.isSupersetOf(primes)); // false
```

Рівносильні множини є надмножинами одна одної:

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSupersetOf(set2)); // true
console.log(set2.isSupersetOf(set1)); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Set.prototype.isSupersetOf` у складі `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
