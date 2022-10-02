---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.pop
---

{{JSRef}}

Метод **`pop()`** (висунути) прибирає **останній** елемент з масиву – і повертає цей елемент. Цей метод змінює довжину масиву.

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## Синтаксис

```js-nolint
pop()
```

### Повернене значення

Усунутий з масиву елемент; {{jsxref("undefined")}}, якщо масив порожній.

## Опис

Метод `pop()` прибирає з масиву останній елемент – і повертає значення цього елемента в місце виклику. Якщо викликати `pop()` на порожньому масиві, він поверне {{jsxref("undefined")}}.

{{jsxref("Array.prototype.shift()")}} має подібну до `pop()` логіку, але застосовується до першого елемента масиву.

Метод `pop()` є змінювальним методом. Він змінює довжину та вміст `this`. Якщо треба, аби значення `this` було тим самим, але повертався новий масив без останнього елемента, можна натомість використати [`arr.slice(0, -1)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

`Array.prototype.pop()` свідомо зроблений узагальненим; цей метод можна викликати на об'єктах, що нагадують масиви. Об'єкти, котрі не мають властивості `length`, що вказує на останнє значення серед послідовних числових властивостей, що починаються від нуля, можуть не давати жодних змістовних результатів.

## Приклади

### Усунення останнього елемента масиву

Наступний код створює масив `myFish`, що містить чотири елементи, а потім прибирає його останній елемент.

```js
const myFish = ["янгол", "клоун", "мандаринка", "осетер"];

const popped = myFish.pop();

console.log(myFish); // ['янгол', 'клоун', 'мандаринка' ]

console.log(popped); // 'осетер'
```

### Використання apply() чи call () на масивоподібних об'єктах

Наступний код створює масивоподібний об'єкт `myFish`, що містить чотири елементи та параметр довжини, а потім прибирає останній елемент і зменшує параметр довжини на одиницю.

```js
const myFish = {
  0: "янгол",
  1: "клоун",
  2: "мандаринка",
  3: "осетер",
  length: 4,
};

const popped = Array.prototype.pop.call(myFish); // такий само синтаксис і з apply()
console.log(myFish); // { 0: 'янгол', 1: 'клоун', 2: 'мандаринка', length: 3 }
console.log(popped); // 'осетер'
```

### Використання об'єкта в масивоподібний спосіб

`push` і `pop` свідомо зроблені узагальненими, і це можна використовувати для отримання переваг – як це демонструє наступний приклад.

Зверніть увагу, що в цьому прикладі не створюється масив для зберігання колекції об'єктів. натомість колекція зберігається на самому об'єкті, і на `Array.prototype.push` і `Array.prototype.pop` використовується `call`, аби обманути ці методи, ніби вони обробляють масив.

```js
const collection = {
  length: 0,
  addElements(...elements) {
    // obj.length буде збільшено на одиницю автоматично
    // щоразу, коли додається елемент.

    // Повернення того, що повертає push;
    // тобто нового значення властивості length
    return [].push.call(this, ...elements);
  },
  removeElement() {
    // obj.length буде зменшено на одиницю автоматично
    // щоразу, коли прибирається елемент.

    // Повернення того, що повертає pop;
    // тобто прибраного елемента
    return [].pop.call(this);
  },
};

collection.addElements(10, 20, 30);
console.log(collection.length); // 3
collection.removeElement();
console.log(collection.length); // 2
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
