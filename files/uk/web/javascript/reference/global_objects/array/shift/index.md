---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.shift
---

{{JSRef}}

Метод **`shift()`** (зсунути) примірників {{jsxref("Array")}} прибирає з масиву **перший** елемент – і повертає прибраний елемент. Цей метод змінює довжину масиву.

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

Метод `shift()` – це [змінювальний метод](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#kopiiuvalni-ta-zminiuvalni-metody): змінює довжину й вміст `this`. Коли треба не внести зміни до `this`, а повернути новий масив без першого елемента, можна натомість застосувати [`arr.slice(1)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

Метод `shift()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також цілочислові властивості. Попри те, що рядки також є масивоподібними значеннями, цей метод не підходить для застосування до них, адже рядки є незмінними.

## Приклади

### Усунення елемента з масиву

Код нижче демонструє масив `myFish` до і після усунення його першого елемента. Крім того, він демонструє усунутий елемент:

```js
const myFish = ["янгол", "клоун", "мандаринка", "осетер"];

console.log("myFish до:", myFish);
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
const names = ["Артем", "Владлен", "Максим", "Марія", "Фахрудін"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Артем, Владлен, Максим, Марія, Фахрудін
```

### Виклик shift() на об'єктах-немасивах

Метод `shift()` зчитує з `this` властивість `length`. Якщо [нормалізована довжина](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#normalizatsiia-vlastyvosti-length) – 0, то `length` наново присвоюється `0` (хоч до цього в цій властивості могло бути від'ємне значення або `undefined`). Інакше – повертається значення властивості `0`, а решта властивостей зсовується вліво на один крок.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(arrayLike));
// undefined, адже це порожня комірка
console.log(arrayLike);
// { '1': 4, length: 2, unrelated: 'foo' }
const plainObj = {};
// Властивості length немає, тому довжина – 0
Array.prototype.shift.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
