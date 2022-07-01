---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
tags:
  - Class
  - ECMAScript 2015
  - Global Objects
  - JavaScript
  - Object
  - Reference
  - set
  - Polyfill
browser-compat: javascript.builtins.Set
---

{{JSRef}}

Об‘єкт **`Set`** (множина) дає змогу зберігати унікальні значення будь-якого типу, як {{Glossary("Primitive", "примітивні")}}, так і посилання на об‘єкти.

## Опис

Об‘єкти `Set` є колекціями значень. Можна обійти елементи множини в порядку додання. Певне значення в `Set` **може зустрітись лише раз**; воно буде унікальним в межах колекції `Set`.

### Рівність значень

У зв‘язку з тим, що кожне значення в `Set` має бути унікальним, буде перевірятися рівність значень. В ранішій версії специфікації ECMAScript така перевірка не була заснована на такому самому алгоритмі, який використовує оператор `===`. А саме: для об‘єктів `Set` значення `+0` (котре є строго рівним `-0`) та `-0` були різними. Втім, це змінилось у специфікації ECMAScript 2015 року. Дивіться _"Рівність ключів для -0 й 0"_ у таблиці [сумісність із браузерами](#sumisnist-iz-brauzeramy) для отримання подробиць.

{{jsxref("NaN")}} і {{jsxref("undefined")}} також можуть зберігатися в `Set`. Усі значення `NaN` прирівнюються між собою (отже, `NaN` вважається тим самим, що й `NaN`, не зважаючи на те, що `NaN !== NaN`).

### Швидкодія

Метод `Set` [`has`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set/has) перевіряє, чи присутнє значення в об‘єкті `Set`, використовуючи підхід, що в середньому є швидшим за перевірку більшості елементів, що були до того додані до `Set`. Для прикладу, це в середньому швидше, ніж метод [`Array.prototype.includes`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), коли об‘єкт `Array` має `length`, що дорівнює `size` об‘єкта `Set`.

## Конструктор

- {{jsxref("Set/Set", "Set()")}}
  - : Створює новий об‘єкт `Set`.

## Статичні властивості

- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : Функція-конструктор, що використовується для створення похідних об‘єктів.

## Властивості примірника

- {{jsxref("Set.prototype.size")}} (розмір)
  - : Повертає кількість значень, присутніх в об‘єкті `Set`.

## Методи примірника

- {{jsxref("Set.add", "Set.prototype.add(<var>value</var>)")}} (додати)
  - : Додає `value` до об‘єкта `Set` object. Повертає об‘єкт `Set` із доданим значенням.
- {{jsxref("Set.prototype.clear()")}} (очистити)
  - : Усуває з об‘єкта `Set` всі значення.
- {{jsxref("Set.delete", "Set.prototype.delete(<var>value</var>)")}} (видалити)
  - : Усуває елемент, пов‘язаний із `value`, та повертає булеве значення, що вказує, чи був елемент успішно усунутий. Після цього `Set.prototype.has(value)` поверне `false`.
- {{jsxref("Set.has", "Set.prototype.has(<var>value</var>)")}} (має)
  - : Повертає булеве значення, що вказує, чи є елемент із даним значенням в об‘єкті `Set`.

### Методи ітерації

- {{jsxref("Set.prototype.@@iterator()", "Set.prototype[@@iterator]()")}}
  - : Повертає новий об‘єкт-ітератор, що видає **значення** для кожного елемента в об‘єкті `Set`, у порядку їх додання.
- {{jsxref("Set.prototype.values()")}} (значення)
  - : Повертає новий об‘єкт-ітератор, що видає **значення** для кожного елемента в об‘єкті `Set`, у порядку їх додання.
- {{jsxref("Set.prototype.values", " Set.prototype.keys()")}} (ключі)
  - : Псевдонім для {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.entries()")}} (записи)

  - : Повертає новий об‘єкт-ітератор, що містить **масив із `[value, value]`** для кожного елемента в об‘єкті `Set`, у порядку їх додання.

    Це подібно до об‘єкта {{jsxref("Map")}}, якби _ключ_ кожного запису був би водночас власним _значенням_.

- {{jsxref("Set.forEach", "Set.prototype.forEach(<var>callbackFn</var>[, <var>thisArg</var>])")}} (для кожного)
  - : Один раз викликає `callbackFn` для кожного значення, присутнього в об‘єкті `Set`, у порядку їх додання. Якщо наданий параметр `thisArg`, то він використовуватиметься при кожному виклику `callbackFn` як значення `this`.

## Приклади

### Використання об‘єкта Set

```js
const mySet1 = new Set();

mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add('якийсь текст'); // Set [ 1, 5, 'якийсь текст' ]
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o посилається на інший об‘єкт, тому це нормально

mySet1.has(1); // true
mySet1.has(3); // false, оскільки 3 не додавали до множини
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has('Якийсь Текст'.toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // усуває 5 з множини
mySet1.has(5); // false, 5 була усунута

mySet1.size; // 4, оскільки одне значення щойно було усунуто

console.log(mySet1);
// виводить у Firefox Set(4) [ 1, "якийсь текст", {…}, {…} ]
// виводить у Chrome Set(4) { 1, "якийсь текст", {…}, {…} }
```

### Обхід множин

```js
// обійти елементи множини
// по порядку виводить елементи: 1, "якийсь текст", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1) console.log(item)

// по порядку виводить елементи: 1, "якийсь текст", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.keys()) console.log(item)

// по порядку виводить елементи: 1, "якийсь текст", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.values()) console.log(item)

// по порядку виводить елементи: 1, "якийсь текст", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (ключі та значення в цьому випадку однакові)
for (let [key, value] of mySet1.entries()) console.log(key)

// За допомогою Array.from перетворює об‘єкт Set на об‘єкт Array
const myArr = Array.from(mySet1) // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// наступне також запрацює, якщо запустити в контексті документа HTML
mySet1.add(document.body)
mySet1.has(document.querySelector('body')) // true

// перетворення між Set та Array
const mySet2 = new Set([1, 2, 3, 4])
mySet2.size                    // 4
[...mySet2]                    // [1, 2, 3, 4]

// перетин можна імітувати за допомогою
const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))

// різницю можна імітувати за допомогою
const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))

// Обійти записи множини за допомогою forEach()
mySet2.forEach(function(value) {
  console.log(value)
})

// 1
// 2
// 3
// 4
```

### Реалізація базових дій з множинами

```js
// Чи є надмножиною
function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

// Об‘єднання
function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

// Перетин
function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

// Симетрична різниця
function symmetricDifference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

// Різниця
function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// Приклади
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // повертає true
union(setA, setC); // повертає Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC); // повертає Set {3, 4}
symmetricDifference(setA, setC); // повертає Set {1, 2, 5, 6}
difference(setA, setC); // повертає Set {1, 2}
```

### Зв‘язок з об‘єктами Array

```js
let myArray = ['значення1', 'значення2', 'значення3'];

// Використати звичайний конструктор Set, щоб перетворити масив на множину
let mySet = new Set(myArray);

mySet.has('значення1'); // повертає true

// Використати оператор розгортання, щоб перетворити множину на масив
console.log([...mySet]); // Покаже точно такий самий масив, як myArray
```

### Усунення дублікатів з масиву

```js
// Використання для усунення дублікатів з масиву

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log([...new Set(numbers)]);

// [2, 3, 4, 5, 6, 7, 32]
```

### Зв‘язок із рядками

```js
let text = 'Індія';

const mySet = new Set(text); // Set(5) {'І', 'н', 'д', 'і', 'я'}
mySet.size; // 5

//чутливість до регістру та усунення дублікатів
new Set('Firefox'); // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
new Set('firefox'); // Set(6) { "f", "i", "r", "e", "o", "x" }
```

### Використання Set для пересвідчення щодо унікальності всіх значень у списку

```js
const array = Array.from(document.querySelectorAll('[id]')).map(function (e) {
  return e.id;
});

const set = new Set(array);
console.assert(set.size == array.length);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Set` у `core-js`](https://github.com/zloirock/core-js#set)
- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
