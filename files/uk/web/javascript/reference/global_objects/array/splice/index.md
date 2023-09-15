---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.splice
---

{{JSRef}}

Метод **`splice()`** (зростити) примірників {{jsxref("Array")}} змінює вміст масиву шляхом видалення чи заміни наявних елементів чи додавання нових [на місці](https://en.wikipedia.org/wiki/In-place_algorithm).

Щоб створити новий масив, в якому частина видалена чи замінена, не змінюючи вихідний масив, слід скористатися {{jsxref("Array/toSpliced", "toSpliced()")}}. Щоб отримати доступ до частини масиву без його зміни, дивіться {{jsxref("Array.prototype.slice()", "slice()")}}.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## Синтаксис

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

### Параметри

- `start` (початок)

  - : Індекс, за яким почнуться зміни в масиві, [перетворений на ціле число](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile).
    - Від'ємний індекс рахується від кінця масиву: якщо `start < 0`, використовується `start + array.length`.
    - Якщо `start < -array.length`, використовується `0`.
    - Якщо `start >= array.length`, то жодний елемент не буде видалено, але метод спрацює як функція додавання, додаючи передані елементи.
    - Якщо `start` пропущено (і `splice()` викликано без аргументів), то нічого не видаляється. Це відрізняється від передачі значення `undefined`, яке перетворюється на `0`.

- `deleteCount` (кількість до видалення) {{optional_inline}}

  - : Ціле число, що вказує, яку кількість елементів видалити, починаючи від `start`.

    Якщо `deleteCount` опущено, або ж якщо його значення більше або рівне числу елементів, що стоять після позиції, заданої `start`, то всі елементи від `start` до кінця масиву будуть видалені. Проте якщо є потреба передати параметр чи параметри `itemN`, то слід за `deleteCount` передати `Infinity` – для видалення всіх елементів після `start`, тому що явне значення `undefined` [перетворюється](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile) на `0`.

    Якщо `deleteCount` — `0` або від'ємне число, жоден елемент не видалиться. В цьому випадку необхідно вказати принаймні один новий елемент (див. далі).

- `item1`, …, `itemN` {{optional_inline}}
  - : Елементи, які буде додано до масиву, починаючи з індексу `start`.
    Якщо не вказано жодного, `splice()` лише видалить елементи з масиву.

### Повернене значення

Масив, що містить всі видалені елементи.

Якщо видалено лише один елемент, буде повернено масив з одного елемента.

Якщо жодного елементу видалено не було, буде повернено порожній масив.

## Опис

Метод `splice()` – це [змінювальний метод](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#kopiiuvalni-ta-zminiuvalni-metody). Він може змінити вміст `this`. Якщо кількість наданих для вставки елементів відрізняється від кількості елементів, які видаляються, властивість `length` масиву зміниться також. Крім того, він використовує [`@@species`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species) для створення нового примірника масиву, що повертається.

Якщо видалена частка є [розрідженою](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy), то повернений `splice()` масив також буде розрідженим, і відповідні індекси будуть порожніми комірками.

Метод `splice()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами. Попри те, що рядки також є масивоподібними, цей метод не підходить для застосування до них, адже рядки є незмінними значеннями.

## Приклади

### Видалити 0 (нуль) елементів перед індексом 2 та вставити "drum"

```js
const myFish = ["янгол", "клоун", "мандаринка", "осетер"];
const removed = myFish.splice(2, 0, "горбань");

// myFish має ["янгол", "клоун", "горбань", "мандаринка", "осетер"]
// removed має [], жодного елементу видалено не було
```

### Видалити 0 (нуль) елементів перед індексом 2 та вставити "drum" і "guitar"

```js
const myFish = ["янгол", "клоун", "мандаринка", "осетер"];
const removed = myFish.splice(2, 0, "горбань", "рохля");

// myFish має ["янгол", "клоун", "горбань", "рохля", "мандаринка", "осетер"]
// removed має [], жодного елементу видалено не було
```

### Видалити 1 елемент з індексом 3

```js
const myFish = ["янгол", "клоун", "горбань", "мандаринка", "осетер"];
const removed = myFish.splice(3, 1);

// myFish має ["янгол", "клоун", "горбань", "осетер"]
// removed має ["мандаринка"]
```

### Видалити 1 елемент з індексом 2 та вставити "trumpet"

```js
const myFish = ["янгол", "клоун", "горбань", "осетер"];
const removed = myFish.splice(2, 1, "флейта");

// myFish має ["янгол", "клоун", "флейта", "осетер"]
// removed має ["горбань"]
```

### Видалити 2 елементи, починаючи з індексу 0, та вставити "parrot", "anemone" і "blue"

```js
const myFish = ["янгол", "клоун", "флейта", "осетер"];
const removed = myFish.splice(0, 2, "папуга", "анемонова", "луфар");

// myFish має ["папуга", "анемонова", "луфар", "флейта", "осетер"]
// removed має ["янгол", "клоун"]
```

### Видалити 2 елементи, починаючи з індексу 2

```js
const myFish = ["папуга", "анемонова", "луфар", "флейта", "осетер"];
const removed = myFish.splice(2, 2);

// myFish має ["папуга", "анемонова", "осетер"]
// removed має ["луфар", "флейта"]
```

### Видалити 1 елемент з індексом -2

```js
const myFish = ["янгол", "клоун", "мандаринка", "осетер"];
const removed = myFish.splice(-2, 1);

// myFish має ["янгол", "клоун", "осетер"]
// removed має ["мандаринка"]
```

### Видалити всі елементи, починаючи з індексу 2

```js
const myFish = ["янгол", "клоун", "мандаринка", "осетер"];
const removed = myFish.splice(2);

// myFish має ["янгол", "клоун"]
// removed має ["мандаринка", "осетер"]
```

### Використання splice() на розріджених масивах

Метод `splice()` зберігає розрідженість масиву.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [порожньо, 3]
console.log(arr); // [1, 4, порожньо, 6]
```

### Виклик splice() на об'єктах-немасивах

Метод `splice()` зчитує з `this` властивість `length`. Потім, за потреби, оновлює цілочислові властивості та властивість `length`.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
// [ 5 ]
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.unshift()")}}
