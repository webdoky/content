---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.map
---

{{JSRef}}

Метод **`map()`** (відобразити) примірників {{jsxref("Array")}} створює новий масив, наповнений результатами виклику переданої функції на кожному з елементів початкового масиву.

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## Синтаксис

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### Параметри

- `callbackFn`
  - : Функція для виклику на кожному елементі масиву. Її повернене значення додається окремим елементом у новий масив. Ця функція викликається із наступними аргументами:
    - `element`
      - : Поточний елемент масиву, який зараз опрацьовується.
    - `index`
      - : Порядковий номер поточного елемента масиву, який зараз обробляється.
    - `array`
      - : Масив, на якому було викликано метод `map()`.
- `thisArg` {{optional_inline}}
  - : Значення для використання як `this` при виконанні `callbackFn`. Більше про це в [ітеративних методах](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

### Результат

Новий масив, куди входять всі результати викликання переданої функції зворотного виклику.

## Опис

Метод `map()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він викликає передану функцію `callbackFn` для кожного елемента масиву й формує новий масив з отриманих результатів. Більше про те, як загалом працюють такі методи, читайте в розділі [ітеративних методів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

`callbackFn` закликається лише для тих індексів масиву, що мають присвоєні значення. Вона не закликається для порожніх комірок у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

Метод `map()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він очікує лишень що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

Оскільки `map` створює новий масив, то викликати його без використання поверненого масиву – антипатерн; натомість слід використовувати {{jsxref("Array/forEach", "forEach")}} або {{jsxref("Statements/for...of", "for...of")}}.

## Приклади

### Перетворення масиву чисел на масив їх квадратних коренів

Наступний код приймає масив чисел і створює новий масив, який містить квадратні корені чисел із першого масиву.

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
// roots тепер         [1, 2, 3]
// numbers залишається [1, 4, 9]
```

### Застосування `map` для зміни формату об'єктів у масиві

Наступний код приймає масив об'єктів і створює новий масив, який містить нові об'єкти у зміненому форматі.

```js
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
```

### Використання parseInt() з map()

Зазвичай використовують функцію зворотного виклику з одним аргументом (елементом, що обробляється). Частина функцій також здебільшого використовується з одним аргументом, попри те, що вони приймають додаткові необов'язкові аргументи. Така звичка може призводити до незрозумілих результатів. Розгляньмо:

```js
["1", "2", "3"].map(parseInt);
```

Попри те, що можна було б очікувати `[1, 2, 3]`, фактичний результат – `[1, NaN, NaN]`.

Функція {{jsxref("parseInt")}} нерідко використовується з одним аргументом, але приймає два. Перший – це вираз, а другий – основа числення. `Array.prototype.map` передає три аргументи: елемент, індекс і масив. Третій аргумент ігнорується {{jsxref("parseInt")}}, але _не_ другий! Це і є джерелом можливих непорозумінь.

Ось стислий приклад кроків ітерації:

```js
/* перша ітерація  (index is 0): */ parseInt("1", 0); // 1
/* друга ітерація (index is 1): */ parseInt("2", 1); // NaN
/* третя ітерація  (index is 2): */ parseInt("3", 2); // NaN
```

Щоб розв'язати цю проблему, визначається інша функція, що приймає лише один аргумент:

```js
["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Також можна скористатися функцією {{jsxref("Number")}}, яка приймає лише один аргумент:

```js
["1", "2", "3"].map(Number); // [1, 2, 3]

// Проте, на відміну від parseInt(), Number() також повертає дробові числа та (розібраний) експоненційний запис:
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// Для порівняння, якщо використати parseInt() на масиві вище:
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Дивіться більше думок на тему в [Загрозі необов'язкових аргументів у JavaScript](https://wirfs-brock.com/allen/posts/166) Аллена Вірфса-Брока.

### Відображений масив містить undefined

Коли повертається {{jsxref("undefined")}} або нічого, то відображений масив містить `undefined`. Якщо замість цього потрібно видалити елемент, в ланцюжок необхідно додати метод {{jsxref("Array/filter", "filter()")}}, або використати метод {{jsxref("Array/flatMap", "flatMap()")}} й повернути порожній масив, щоб позначити видалення.

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index починається від 0, тож filterNumbers – це 1,2,3 та undefined.
// filteredNumbers – це [1, 2, 3, undefined]
// numbers – й далі [1, 2, 3, 4]
```

### Відображення з побічними ефектами

Функція зворотного виклику може мати побічні ефекти.

```js
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45
```

Це не рекомендовано, адже копіювальні методи найкраще використовувати вкупі з чистими функціями. У цьому випадку – можемо захотіти пройтися масивом двічі.

```js
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
```

Іноді цей патерн доходить до крайнощів, і _єдиною_ корисною річчю, котру робить `map()`, виявляються побічні ефекти.

```js
const products = [
  { name: "спортивна автівка" },
  { name: "ноутбук" },
  { name: "телефон" },
];

products.map((product) => {
  product.price = 100;
});
```

Як згадувалось вище, це є антипатерном. Якщо повернене значення `map()` не використовується, краще натомість використати `forEach()` або цикл `for...of`.

```js
products.forEach((product) => {
  product.price = 100;
});
```

Або, якщо необхідно створити новий масив:

```js
const productsWithPrice = products.map((product) => {
  return { ...product, price: 100 };
});
```

### Використання третього аргументу callbackFn

Аргумент `array` корисний тоді, коли є потреба звернутися до іншого елемента масиву, особливо коли немає змінної, що посилається на цей масив. У наступному прикладі спочатку використовується `filter()` для видобування додатних значень, а потім `map()` – для створення нового масиву, в якому кожний елемент є середнім арифметичним своїх сусідів і самого себе.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = numbers
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    // Без аргументу arr немає способу легко отримати доступ до
    // проміжного масиву без збереження його в змінній.
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    let count = 1;
    let total = num;
    if (prev !== undefined) {
      count++;
      total += prev;
    }
    if (next !== undefined) {
      count++;
      total += next;
    }
    const average = total / count;
    // Зберегти два дробові розряди
    return Math.round(average * 100) / 100;
  });
console.log(averaged); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]
```

Аргумент `array` – це _не_ масив, що створюється – немає способу звернутися до масиву, що створюється, з функції зворотного виклику.

### Використання map() на розріджених масивах

Розріджений масив залишається розрідженим і після `map()`. Індекси порожніх комірок будуть порожніми й в поверненому масиві, і функція зворотного виклику не буде на них викликатися.

```js
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Відвідини ${index}`);
    return x * 2;
  }),
);
// Відвідини 0
// Відвідини 2
// [2, empty, 6]
```

### Виклик map() на об'єктах-немасивах

Метод `map()` зчитує властивість `length` з `this`, а потім звертається до кожної властивості, чий ключ – невід'ємне ціле число, менше за `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ігнорується map(), оскільки length – 3
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
```

Цей приклад демонструє, як ітерувати по колекції об'єктів, зібраній за допомогою `querySelectorAll`. Такий підхід пов'язаний з тим, що `querySelectorAll` повертає `NodeList` (колекцію об'єктів). У цьому випадку повертаються значення всіх обраних значень `option` на екрані:

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

Також для перетворення `elems` на масив можна скористатися {{jsxref("Array.from")}}, а потім викликати метод `map()`.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.map` у `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}
