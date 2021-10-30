---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - remove
  - replace
  - splice
browser-compat: javascript.builtins.Array.splice
---
{{JSRef}}

Метод **`splice()`** змінює вміст масиву шляхом видалення чи заміни наявних елементів і/або додавання нових [на місці](https://en.wikipedia.org/wiki/In-place_algorithm). Щоб отримати частину масиву без внесення змін до нього, &mdash; зверніться до {{jsxref("Array.prototype.slice()", "slice()")}}.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## Синтаксис

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

### Параметри

- `start`

  - : Індекс, яким почнуться зміни в масиві.

    Якщо переданий індекс більший від довжини масиву, `start` вважатиметься рівним довжині масива. В такому випадку жоден елемент не буде видалено, проте метод працюватиме як функція додавання, додаючи стільки елементів, скільки їх передано параметрами item\[n\*].

    Якщо переданий індекс від'ємний, зміни вноситимуться за вказану кількість елементів від кінця масиву. (В такому випадку рахунок починається з `-1`, тобто `-n` — це індекс `n`-го елементу з кінця, і таким чином еквівалентний індексу `array.length - n`.) Якщо `start` є `negative infinity`, це буде еквівалентно `0`.

- `deleteCount` {{optional_inline}}

  - : Ціле число, що вказує, яку кількість елементів видалити, починаючи від `start`.

    Якщо `deleteCount` опущено, або ж якщо його значення дорівнє чи більше за `array.length - start` (тобто якщо воно дорівнює, або більше за кількість елементів, які залишилися в масиві, починаючи зі `start`), то всі елементи від `start` і до кінця масиву будуть видалені.

    Якщо `deleteCount` — `0` або від'ємне число, жоден елемент не видалиться. В цьому випадку необхідно вказати принаймні один новий елемент (див. далі).

- `item1, item2, ...` {{optional_inline}}
  - : Елементи, які буде додано до масиву, починаючи з індекса `start`. Якщо не вказано жодного, `splice()` лише видалить елементи з масиву.

### Повернене значення

Масив, що містить всі видалені елементи.

Якщо видалено лише один елемент, буде повернено масив із одного елемента.

Якщо жодного елементу видалено не було, буде повернено порожній масив.

## Опис

Якщо кількість наданих для вставки елементів відрізняється від кількості елементів, які видаляються, властивість `length` масиву зміниться.

## Приклади

### Видалити 0 (нуль) елементів перед індексом 2 та вставити "drum"

```js
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

// myFish має ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed має [], жодного елементу видалено не було
```

### Видалити 0 (нуль) елементів перед індексом 2 та вставити "drum" і "guitar"

```js
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// myFish має ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed має [], жодного елементу видалено не було
```

### Видалити 1 елемент з індексом 3

```js
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)

// myFish має ["angel", "clown", "drum", "sturgeon"]
// removed має ["mandarin"]
```

### Видалити 1 елемент з індексом 2 та вставити "trumpet"

```js
let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')

// myFish має ["angel", "clown", "trumpet", "sturgeon"]
// removed має ["drum"]
```

### Видалити 2 елементи, починаючи з індексу 0, та вставити "parrot", "anemone" і "blue"

```js
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

// myFish має ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed має ["angel", "clown"]
```

### Видалити 2 елементи, починаючи з індексу 2

```js
let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)

// myFish має ["parrot", "anemone", "sturgeon"]
// removed має ["blue", "trumpet"]
```

### Видалити 1 елемент з індексом -2

```js
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)

// myFish має ["angel", "clown", "sturgeon"]
// removed має ["mandarin"]
```

### Видалити всі елементи, починаючи з індексу 2

```js
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

// myFish має ["angel", "clown"]
// removed має ["mandarin", "sturgeon"]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.push()", "push()")}} / {{jsxref("Array.prototype.pop()",
    "pop()")}} — додати/видалити елементи з кінця масиву
- {{jsxref("Array.prototype.unshift()", "unshift()")}} /
  {{jsxref("Array.prototype.shift()", "shift()")}} — додати/видалити елементи з початку масиву
- {{jsxref("Array.prototype.concat()", "concat()")}} — повертає новий масив, складений з цього масиву, з'єднаного з іншим масивом (масивами) та/чи значеннями
