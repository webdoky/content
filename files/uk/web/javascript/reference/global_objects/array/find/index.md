---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.find
---

{{JSRef}}

Метод **`find()`** (знайти) примірників {{jsxref("Array")}} повертає значення першого елементу в даному масиві, яке задовольняє передану функцію перевірки. Якщо жоден елемент не задовольняє перевіркову функцію, буде повернуто {{jsxref("undefined")}}.

- Якщо потрібен **індекс** знайденого елементу в масиві, використовуйте {{jsxref("Array/findIndex", "findIndex()")}}.
- Якщо потрібно знайти **індекс вже наявного значення**, застосуйте {{jsxref("Array.prototype/indexOf()")}}. (Вона схожа до {{jsxref("Array/findIndex", "findIndex()")}}, проте перевіряє кожний елемент на рівність зі значенням замість використання перевіркової функції.)
- Якщо потрібно визначити, чи якесь значення **наявне** в масиві, використайте
  {{jsxref("Array/includes", "includes()")}}. Знову ж таки, цей метод перевіряє кожний елемент на рівність із переданим значенням замість застосування перевіркової функції.
- Якщо ж потрібно взнати, чи хоч якийсь елемент задовольняє передану перевіркову функцію, слід застосувати {{jsxref("Array/some", "some()")}}.

{{EmbedInteractiveExample("pages/js/array-find.html", "shorter")}}

## Синтаксис

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### Параметри

- `callbackFn`
  - : Функція для виконання на кожному елементі масиву. Вона повинна повертати [істинне](/uk/docs/Glossary/Truthy) значення для позначення того, що шуканий елемент був знайдений, а інакше – [хибне](/uk/docs/Glossary/Falsy). Ця функція викликається із наступними аргументами:
    - `element`
      - : Поточний елемент масиву, що обробляється.
    - `index`
      - : Індекс (порядковий номер) поточного елемента масиву, що обробляється.
    - `array`
      - : Масив, на якому було викликано метод `find`.
- `thisArg` {{optional_inline}}
  - : Значення для використання як `this` при виконанні `callbackFn`. Більше про це в [ітеративних методах](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

### Результат

Перший елемент масиву, що задовольняє передану перевіркову функцію.
Інакше – повертається {{jsxref("undefined")}}.

## Опис

Метод `find()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він викликає передану як аргумент функцію `callbackFn` один раз для кожного елемента масиву в порядку зростання індексів, поки `callbackFn` не поверне [істинного](/uk/docs/Glossary/Truthy) значення. Тоді `find()` повертає знайдений елемент і припиняє ітерування масиву. Якщо `callbackFn` жодного разу не поверне істинне значення, то `find()` поверне {{jsxref("undefined")}}. Більше про те, як загалом працюють такі методи, читайте в розділі [ітеративних методів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

`callbackFn` закликається для _кожного_ індексу в масиві, а не лише для тих, які мають присвоєне значення. Порожні комірки у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy) поводяться так само як `undefined`.

Метод `find()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

## Приклади

### Знайти об'єкт в масиві за однією з його властивостей

```js
const inventory = [
  { name: "яблука", quantity: 2 },
  { name: "банани", quantity: 0 },
  { name: "вишні", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "вишні";
}

console.log(inventory.find(isCherries));
// { name: 'вишні', quantity: 5 }
```

#### Застосування стрілкової функції та деструктуризації

```js
const inventory = [
  { name: "яблука", quantity: 2 },
  { name: "банани", quantity: 0 },
  { name: "вишні", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "вишні");

console.log(result); // { name: 'вишні', quantity: 5 }
```

### Знайти просте число в масиві

Наступний приклад знаходить в масиві елемент, який є простим числом (або повертає {{jsxref("undefined")}}, якщо там немає простих чисел):

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, тобто не знайдено
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

### Використання третього аргументу callbackFn

Аргумент `array` корисний тоді, коли є потреба звернутися до іншого елемента масиву, особливо тоді, коли немає змінної, що посилається на сам масив. Наступний приклад спочатку використовує `filter()` для видобуття додатних значень, а потім `find()` для пошуку першого елемента, що менший за своїх сусідів.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .find((num, idx, arr) => {
    // Без аргумента arr немає способу легко звернутися до
    // проміжного масиву без збереження його в змінну.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### Використання find() на розріджених масивах

Порожні комірки в розріджених масивах _відвідуються_, вони обробляються так само як `undefined`.

```js
// Оголосимо масив з відсутніми елементами 2, 3, і 4
const array = [0, 1, , , , 5, 6];

// Покаже всі індекси, а не лише ті, що мають присвоєне значення
array.find((value, index) => {
  console.log("Відвідано індекс", index, "зі значенням", value);
});
// Відвідано індекс 0 зі значенням 0
// Відвідано індекс 1 зі значенням 1
// Відвідано індекс 2 зі значенням undefined
// Відвідано індекс 3 зі значенням undefined
// Відвідано індекс 4 зі значенням undefined
// Відвідано індекс 5 зі значенням 5
// Відвідано індекс 6 зі значенням 6

// Покаже всі індекси, включно з видаленими
array.find((value, index) => {
  // Видаляємо 5-й елемент під час першої ітерації
  if (index === 0) {
    console.log("Видалення array[5] зі значенням", array[5]);
    delete array[5];
  }
  // 5-й елемент все ж опрацьовується, хоча ми його видалили
  console.log("Відвідано індекс", index, "зі значенням", value);
});
// Видалення array[5] зі значенням 5
// Відвідано індекс 0 зі значенням 0
// Відвідано індекс 1 зі значенням 1
// Відвідано індекс 2 зі значенням undefined
// Відвідано індекс 3 зі значенням undefined
// Відвідано індекс 4 зі значенням undefined
// Відвідано індекс 5 зі значенням undefined
// Відвідано індекс 6 зі значенням 6
```

### Виклик find() на об'єктах-немасивах

Метод `find()` зчитує з `this` властивість `length`, а потім звертається до кожної властивості, чий ключ – невід'ємне ціле число, менше за `length`.

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // ігнорується find(), оскільки -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x))); // 7.3
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл до `Array.prototype.find` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
