---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.find
---
{{JSRef}}

Метод `find()` повертає значення першого елементу в даному масиві, яке задовольняє передану функцію перевірки. Якщо жоден елемент не задовольняє перевіркову функцію, буде повернуто {{jsxref("undefined")}}.

{{EmbedInteractiveExample("pages/js/array-find.html","shorter")}}

- Якщо потрібен **індекс** знайденого елементу в масиві, використовуйте
  {{jsxref("Array.findIndex", "findIndex()")}}.
- Якщо потрібно знайти **індекс вже наявного значення**, застосуйте
  {{jsxref("Array.prototype.indexOf()")}}. (Вона схожа до {{jsxref("Array.findIndex", "findIndex()")}}, проте перевіряє кожний елемент на рівність зі значенням замість використання перевіркової функції.)
- Якщо потрібно визначити, чи якесь значення **наявне** в масиві, використайте
  {{jsxref("Array.prototype.includes()")}}. Знову ж таки, цей метод перевіряє кожний елемент на рівність із переданим значенням замість застосування перевіркової функції.
- Якщо ж потрібно взнати, чи хоч якийсь елемент задовольняє передану перевіркову функцію, слід застосувати {{jsxref("Array.prototype.some()")}}.

## Синтаксис

```js
// Стрілкова функція
find((element) => { /* ... */ } )
find((element, index) => { /* ... */ } )
find((element, index, array) => { /* ... */ } )

// Функція зворотного виклику
find(callbackFn)
find(callbackFn, thisArg)

// Функція зворотного виклику, оголошена на місці
find(function(element) { /* ... */ })
find(function(element, index) { /* ... */ })
find(function(element, index, array){ /* ... */ })
find(function(element, index, array) { /* ... */ }, thisArg)
```

### Параметри

- `callbackFn`

  - : Функція, яка буде виконана на кожному елементі масиву, приймає три аргументи:

    - `element`
      - : Даний елемент в масиві.
    - `index` {{optional_inline}}
      - : Індекс (порядковий номер) даного елементу в масиві.
    - `array` {{optional_inline}}
      - : Масив, на якому було викликано функцію `find`.

- `thisArg` {{optional_inline}}
  - : Об'єкт, який буде використано як значення {{jsxref("Operators/this", "this")}} всередині `callbackFn`.

### Результат

**Значення** **першого** елементу в масиві, який задовольняє передану перевіркову функцію. Якщо такого не знайшлося, буде повернуто {{jsxref("undefined")}}.

## Опис

Метод `find` виконує функцію `callbackFn` один раз для кожного індексу в масиві, аж поки `callbackFn` не поверне [істинне](/en-US/docs/Glossary/Truthy) значення. В цьому випадку `find` одразу повертає значення цього елементу. Інакше `find` поверне {{jsxref("undefined")}}.

`callbackFn` викликається для _кожного_ індексу в масиві, а не лише для тих, які мають присвоєне значення. Це означає, що такий підхід може бути менш ефективним на розріджених масивах, у порівнянні з методами, які обробляють лише наявні значення.

Якщо параметр `thisArg` було передано до функції `find`, його буде використано як значення `this` всередині кожного виклику `callbackFn`. Якщо ж його передано не було, замість нього буде використано {{jsxref("undefined")}}.

Метод `find` не змінює масив, на якому його викликають, хоча функція, яка передається до `callbackFn`, може це робити. Якщо так, то елементи, опрацьовані функцією `find` задаються _перед_ першим викликом `callbackFn`. Таким чином:

- `callbackFn` не опрацює будь-які елементи, додані до масиву після того, як почався виклик методу `find`.
- Елементи, що присвоєні за вже опрацьованими індексами, або ж за індексами за межами діапазону, не будуть опрацьовані `callbackFn`.
- Якщо наявний, але ще не опрацьований елемент масиву змінюється функцією `callbackFn`, його значення, що потрапить у `callbackFn`, буде таким, яке цей елемент матиме на момент опрацювання функцією `find` його індексу.
- Елементи, які {{jsxref("Operators/delete", "видалені")}}, все ж таки будуть опрацьовані.

> **Обережно:** Одночасні модифікації такого типу, як описано вище, часто приводять до коду, який важко зрозуміти. Загалом заведено уникати такого запису (окрім особливих випадків).

## Приклади

### Знайти об'єкт в масиві за однією з його властивостей

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

#### Застосування стрілкової функції та деструктуризації

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) => name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }
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

Наступний приклад показує, що відсутні й видалені елементи _насправді_ опрацьовуються, і що до функції зворотного виклику потрапляє саме їх значення, на момент, коли вони опрацьовуються:

```js
// Оголосимо масив з відсутніми елементами 2, 3, і 4
const array = [0,1,,,,5,6];

// Покаже всі індекси, а не лише ті, що мають присвоєне значення
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// Покаже всі індекси, включно з видаленими
array.find(function(value, index) {
  // Видаляємо 5-й елемент під час першої ітерації
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // 5-й елемент все ж опрацьовується, хоча ми його видалили
  console.log('Visited index ', index, ' with value ', value);
});
// очікуваний вивід:
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл до `Array.prototype.find` присутній у [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findIndex()")}} – знайти елемент і повернути його індекс
- {{jsxref("Array.prototype.includes()")}} – перевірити, чи значення присутнє в масиві
- {{jsxref("Array.prototype.filter()")}} – отримати підхожі елементи
- {{jsxref("Array.prototype.every()")}} – перевірити всі елементи
- {{jsxref("Array.prototype.some()")}} – перевіряти до першого збігу
