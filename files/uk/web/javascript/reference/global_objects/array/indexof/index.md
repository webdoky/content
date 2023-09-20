---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.indexOf
---

{{JSRef}}

Метод **`indexOf()`** (індекс (значення)) примірників {{jsxref("Array")}} повертає перший індекс, за яким даний елемент можна знайти в масиві, або `-1` – якщо його немає.

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## Синтаксис

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Параметри

- `searchElement` (елемент пошуку)
  - : Шуканий у масиві елемент.
- `fromIndex` (від індексу) {{optional_inline}}
  - : Індекс від нуля для початку пошуку, [перетворений на ціле число](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile).
    - Від'ємний індекс рахується від кінця масиву: якщо `fromIndex < 0`, то використовується `fromIndex + array.length`. Зверніть увагу, що у такому випадку пошук все одно відбувається від початку до кінця.
    - Якщо `fromIndex < - array.length`, або якщо `fromIndex` опущено, то використовується `0`, тобто пошук відбувається в усьому масиві.
    - Якщо `fromIndex >= array.length`, то пошук не відбувається, і повертається `-1`.

### Повернене значення

Перший індекс `searchElement` в масиві; `-1`, якщо нічого не знайдено.

## Опис

Метод `indexOf()` порівнює `searchElement` з елементами масиву за допомогою [строгої рівності](/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality) (того самого алгоритму, що використовується оператором `===`). Значення [`NaN`](/uk/docs/Web/JavaScript/Reference/Global_Objects/NaN) при порівнянні ніколи не бувають рівними будь-чому, тому `indexOf()` завжди повертає `-1`, коли `searchElement` – це `NaN`.

Метод `indexOf()` пропускає порожні комірки в [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

Метод `indexOf()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

## Приклади

### Використання indexOf()

У наступному прикладі `indexOf()` використовується для пошуку значень у масиві.

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

Не можна використовувати `indexOf()` для пошуку `NaN`.

```js
const array = [NaN];
array.indexOf(NaN); // -1
```

### Пошук усіх входжень елемента

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
const idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Визначення, чи знаходиться елемент у масиві, чи ні, та оновлення масиву

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`Нова овочева колекція: ${veggies}`);
  } else {
    console.log(`${veggie} уже є в овочевій колекції.`);
  }
}

const veggies = [
  "картопля",
  "помідор",
  "червоний гострий перець",
  "зелений болгарський перець",
];

updateVegetablesCollection(veggies, "шпинат");
// Нова колекція veggies: картопля,помідор,червоний гострий перець,зелений болгарський перець,шпинат
updateVegetablesCollection(veggies, "шпинат");
// шпинат уже є в овочевій колекції.
```

### Використання indexOf() на розріджених масивах

Не можна використовувати `indexOf` для пошуку порожніх комірок в розріджених масивах.

```js
console.log([1, , 3].indexOf(undefined)); // -1
```

### Виклик indexOf() на об'єктах-немасивах

Метод `indexOf()` зчитує з `this` властивість `length`, а потім звертається до кожної властивості, чий ключ є невід'ємним цілим числом, меншим за `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ігнорується indexOf(), оскільки length – 3
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));
// -1
```

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.indexOf` у `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
