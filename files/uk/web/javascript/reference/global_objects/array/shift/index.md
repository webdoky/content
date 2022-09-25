---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.shift
---

{{JSRef}}

Метод **`shift()`** (зсунути) прибирає з масиву **перший** елемент – і повертає прибраний елемент. Цей метод змінює довжину масиву.

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## Синтаксис

```js-nolint
shift()
```

### Повернене значення

Значення, котре було прибрано з масиву; {{jsxref("undefined")}}, якщо масив порожній.

## Опис

Метод `shift()` прибирає елемент за нульовим індексом і зсуває значення за наступними індексами вліво, а потім повертає прибране значення. Якщо властивість
{{jsxref("Array/length", "length")}} має значення 0, то повертається {{jsxref("undefined")}}.

Метод {{jsxref("Array/pop", "pop()")}} має подібну до `shift()` логіку, але застосовану до останнього елемента масиву.

Метод `shift()` – метод, що змінює масив: змінює довжину й вміст `this`. Коли треба не внести зміни до `this`, а повернути новий масив без першого елемента, можна натомість застосувати [`arr.slice(1)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

`Array.prototype.shift()` навмисно зроблений узагальненим; цей метод може бути викликаний на об'єктах, що лише нагадують масиви. Об'єкти, котрі не містять властивості `length`, котра відбиває останній елемент серед послідовних числових властивостей, починаючи від нуля, можуть не давати жодної змістовної поведінки.

## Приклади

### Усунення елемента з масиву

Код нижче демонструє масив `myFish` до і після усунення його першого елемента. Крім того, він демонструє усунутий елемент:

```js
const myFish = ["янгол", "клоун", "мандаринка", "осетер"];

console.log("myFish до:", JSON.stringify(myFish));
// myFish до: ['янгол', 'клоун', 'мандаринка', 'осетер'];

const shifted = myFish.shift();

console.log("myFish після:", myFish);
// myFish after: ['клоун', 'мандаринка', 'осетер'];

console.log("Усунуто такий елемент:", shifted);
// Усунуто такий елемент: янгол
```

### Застосування метода shift() у циклі while

Метод shift() нерідко застосовують всередині умови циклу while. В наступному прикладі кожна ітерація прибирає з масиву наступний елемент, поки він не стане порожнім:

```js
const names = ["Артем", "Олександр", "Максим", "Богдан", "Назар"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Артем, Олександр, Максим, Богдан, Назар
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
