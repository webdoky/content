---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.push
---

{{JSRef}}

Метод **`push()`** (запхати) додає задані елементи в кінець масиву та повертає нову довжину масиву.

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## Синтаксис

```js-nolint
push()
push(element0)
push(element0, element1)
push(element0, element1, /* …, */ elementN)
```

### Параметри

- `elementN` (елемент № N)
  - : Елемент (або елементи), що потрібно додати у кінець масиву.

### Повернене значення

Нова властивість {{jsxref("Array/length", "length")}} об'єкта, на якому був викликаний метод.

## Опис

Метод `push()` додає значення в кінець масиву.

{{jsxref("Array.prototype.unshift()")}} має подібну до `push()` логіку, але додає значення в початок масиву.

Метод `push()` – це [змінювальний метод](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#kopiiuvalni-ta-zminiuvalni-metody). Він змінює довжину і зміст `this`. Якщо необхідно, аби значення `this` було тим самим, але був повернений новий масив з елементами, доданими в його кінець, можна натомість використати [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/concat). Зверніть увагу, що елементи загорнуті в додатковий масив: інакше, якщо елемент сам є масивом, він буде розгорнутий, а не доданий як один елемент, у зв'язку з логікою `concat()`.

Метод `push()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами. Попри те, що рядки також є масивоподібними, цей метод не підходить для застосування до них, адже рядки є незмінними значеннями.

## Приклади

### Додавання елементів до масиву

Наступний код створює масив `sports`, що містить два елементи, потім додає до нього ще два елементи. Змінна `total` містить нову довжину масиву.

```js
const sports = ["футбол", "бокс"];
const total = sports.push("теніс", "баскетбол");

console.log(sports); // ['футбол', 'бокс', 'теніс', 'баскетбол']
console.log(total); // 4
```

### Об'єднання двох масивів

У цьому прикладі для переміщення всіх елементів з другого масиву в перший використовується {{jsxref("Operators/Spread_syntax", "синтаксис розгортання", "", "1")}}

```js
const vegetables = ["пастернак", "картопля"];
const moreVegs = ["селера", "буряк"];

// Об'єднання другого масиву в перший
vegetables.push(...moreVegs);

console.log(vegetables); // ['пастернак', 'картопля', 'селера', 'буряк']
```

Об'єднання двох масивів також можна зробити за допомогою методу {{jsxref("Array.prototype.concat()", "concat()")}}.

### Виклик push() на об'єктах-немасивах

Метод `push()` зчитує з `this` властивість `length`. Потім – задає кожний індекс `this`, починаючи від `length`, аргументами, переданими в `push()`. Врешті-решт, присвоює `length` значення старої довжини плюс кількість запханих елементів.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' }
const plainObj = {};
// Тут немає властивості `length`, тому значення довжини вважається за 0
Array.prototype.push.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

### Використання об'єкта у подібний до масиву спосіб

Як згадувалося вище, `push` є навмисно узагальненим, і це можна використати на власну користь. `Array.prototype.push` може добре працювати з об'єктом, як показує цей приклад.

Зверніть увагу, масив не створюється для зберігання колекції об'єктів. Натомість колекція зберігається на самому об'єкті, й використовується `call` на `Array.prototype.push`, щоб змусити метод подумати, що ми маємо справу з масивом, і це просто працює, завдяки тому, що JavaScript дозволяє встановлювати контекст виконання будь-яким способом.

```js
const obj = {
  length: 0,

  addElem(elem) {
    // obj.length автоматично збільшується
    // кожного разу, коли додається елемент.
    [].push.call(this, elem);
  },
};

// Додавання декількох порожніх об'єктів просто для ілюстрації.
obj.addElem({});
obj.addElem({});
console.log(obj.length); // 2
```

Зверніть увагу, що хоча `obj` не є масивом, метод `push` успішно збільшив властивість `length` у `obj`, так само як якщо це був би реальний масив.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.push` доступний у складі `core-js`, з виправленнями для цього метода](https://github.com/zloirock/core-js#ecmascript-array)
- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
