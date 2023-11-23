---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.pop
---

{{JSRef}}

Метод **`pop()`** (висунути) примірників {{jsxref("Array")}} прибирає **останній** елемент з масиву – і повертає цей елемент. Цей метод змінює довжину масиву.

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## Синтаксис

```js-nolint
pop()
```

### Параметри

Жодних.

### Повернене значення

Усунутий з масиву елемент; {{jsxref("undefined")}}, якщо масив порожній.

## Опис

Метод `pop()` прибирає з масиву останній елемент – і повертає значення цього елемента в місце виклику. Якщо викликати `pop()` на порожньому масиві, він поверне {{jsxref("undefined")}}.

{{jsxref("Array.prototype.shift()")}} має подібну до `pop()` логіку, але застосовується до першого елемента масиву.

Метод `pop()` є змінювальним методом. Він змінює довжину та вміст `this`. Якщо треба, аби значення `this` було тим самим, але повертався новий масив без останнього елемента, можна натомість використати [`arr.slice(0, -1)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

Метод `pop()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також цілочислові властивості. Попри те, що рядки також є масивоподібними значеннями, цей метод не підходить для застосування до них, адже рядки є незмінними.

## Приклади

### Усунення останнього елемента масиву

Наступний код створює масив `myFish`, що містить чотири елементи, а потім прибирає його останній елемент.

```js
const myFish = ["янгол", "клоун", "мандаринка", "осетер"];

const popped = myFish.pop();

console.log(myFish); // ['янгол', 'клоун', 'мандаринка' ]

console.log(popped); // 'осетер'
```

### Виклик pop() на об'єктах-немасивах

Метод `pop()` зчитує з `this` властивість `length`. Якщо [нормалізована довжина](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#normalizatsiia-vlastyvosti-length) – 0, то `length` наново присвоюється `0` (хоч до цього в цій властивості могло бути від'ємне значення або `undefined`). Інакше – повертається та [видаляється](/uk/docs/Web/JavaScript/Reference/Operators/delete) значення властивості `length - 1`.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.pop.call(arrayLike));
// 4
console.log(arrayLike);
// { length: 2, unrelated: 'foo' }
const plainObj = {};
// Властивості length немає, отже, довжина – 0
Array.prototype.pop.call(plainObj);
console.log(plainObj);
// { length: 0 }
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

- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
