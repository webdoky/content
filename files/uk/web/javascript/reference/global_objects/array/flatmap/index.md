---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.flatMap
---

{{JSRef}}

Метод **`flatMap()`** (сплощити, відобразити) примірників {{jsxref("Array")}} повертає новий масив, утворений шляхом застосування заданої функції зворотного виклику до кожного елемента масиву та сплощення результату на один рівень. Він ідентичний {{jsxref("Array/map", "map()")}}, за яким слідує {{jsxref("Array/flat", "flat()")}} з глибиною 1 (`arr.map(...args).flat()`), але трохи ефективніший, ніж виклик цих двох методів окремо.

{{EmbedInteractiveExample("pages/js/array-flatmap.html", "shorter")}}

## Синтаксис

```js-nolint
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
```

### Параметри

- `callbackFn`
  - : Функція, що виконується для кожного елемента масиву. Вона повинна повертати масив, який містить нові елементи нового масиву, або одне значення (не масив) яке буде додано до нового масиву. Функція викликається з такими аргументами:
    - `element`
      - : Поточний елемент масиву, що обробляється.
    - `index`
      - : Індекс поточного елемента масиву, що обробляється.
    - `array`
      - : Масив, на якому було викликано `flatMap()`.
- `thisArg` {{optional_inline}}
  - : Значення, яке використовується як `this` під час виконання `callbackFn`. Дивіться [ітеративні методи](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

### Повернене значення

Новий масив, кожен елемент якого є результатом функції зворотного виклику, сплощений на глибину 1.

## Опис

Метод `flatMap()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Дивіться детальний опис функції зворотного виклику на сторінці {{jsxref("Array.prototype.map()")}}. Метод `flatMap()` ідентичний [`map(callbackFn, thisArg)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/map), за яким слідує [`flat(1)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/flat): для кожного елемента він створює масив нових елементів і об'єднує отримані масиви, утворюючи новий масив. Читайте додаткову інформацію про те, як загалом працюють такі методи, в розділі [ітеративних методів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody).

Метод `flatMap()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він очікує лишень що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами. Однак значення, яке повертається з `callbackFn`, повинно бути масивом, якщо воно має бути сплощене.

### Альтернативний варіант

#### Попереднє виділення та явна ітерація

```js
const arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// еквівалентно щодо наступного коду
const n = arr.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
```

Зверніть увагу, що в цьому випадку підхід з `flatMap` є повільнішим, ніж з циклом for — через створення тимчасових масивів, які потрібно збирати збирачем сміття і змінювати за розміром. Однак, `flatMap` може бути правильним рішенням у випадках, коли корисна його гнучкість і читабельність.

## Приклади

### map() і flatMap()

```js
const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// лише один рівень сплощений
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

Хоча вищенаведеного можна було досягти за допомогою `map`, ось приклад, який краще демонструє використання `flatMap()`.

Згенеруємо список слів зі списку речень.

```js
const arr1 = ["у Каліфорнії", "", "сонячно"];

arr1.map((x) => x.split(" "));
// [["у","Каліфорнії"],[""],["сонячно"]]

arr1.flatMap((x) => x.split(" "));
// ["у","Каліфорнії", "", "сонячно"]
```

Зверніть увагу, що довжина результівного списку може відрізнятися від довжини вихідного.

### Для додавання та видалення елементів під час використання map()

`flatMap` можна використовувати для зміни кількості елементів під час трансформації масиву. Інакше кажучи, це дає змогу перетворювати один елемент на кілька, _один до багатьох_ , а не _один до одного_, як у випадку з `map`. У цьому сенсі він працює як протилежність [filter](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Поверніть масив з одним елементом, щоб залишити його як є; з кількома елементами — щоб додати; порожній масив — щоб вилучити.

```js
// Скажімо, потрібно вилучити всі від'ємні числа
// і розбити непарні числа на парне число та 1
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(result); // [4, 1, 4, 20, 16, 1, 18]
```

### Використання третього аргументу callbackFn

Аргумент `array` корисний, якщо потрібно отримати доступ до іншого елемента в масиві, особливо якщо немає змінної, яка на нього посилається. У наступному прикладі спочатку використовується `filter()` для отримання станцій, що працюють, а потім `flatMap()` – для створення масиву, де кожен елемент містить поточну та наступну станції. Для останньої станції повертається порожній масив, щоб виключити її з результату.

```js
const stations = [
  "Нью-Гейвен",
  "Вест-Гейвен",
  "Мілфорд (зачинено)",
  "Стратфорд",
];
const line = stations
  .filter((name) => !name.endsWith("(зачинено)"))
  .flatMap((name, idx, arr) => {
    // Без аргументу arr неможливо легко отримати доступ до
    // проміжного масиву без збереження його в змінну.
    if (idx === arr.length - 1) return []; // остання станція не має наступної
    return [`${name} - ${arr[idx + 1]}`];
  });
console.log(line); // ['Нью-Гейвен - Вест-Гейвен', 'Вест-Гейвен - Стратфорд']
```

Аргумент `array` - це _не_ масив, який створюється; з функції зворотного виклику неможливо отримати доступ до масиву, що створюється.

### Використання flatMap() для розріджених масивів

Оскільки `map()` не викликає `callbackFn` для порожніх елементів вихідного масиву, у `flatMap()` її також не буде викликано, а `flat()` ігнорує порожні комірки в повернених масивах.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### Виклик flatMap() на об'єктах-немасивах

Метод `flatMap()` зчитує властивість `length` об'єкта `this`, а потім звертається до кожної властивості з невід'ємним цілочисельним ключем, меншим за `length`. Якщо значення, повернене функцією зворотного виклику, не є масивом, воно завжди безпосередньо додається до результівного масиву.

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ігнорується flatMap(), оскільки length – 3
};
console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// Масивоподібні об’єкти, повернуті зворотним викликом, не сплощуються
console.log(
  Array.prototype.flatMap.call(arrayLike, (x) => ({
    length: 1,
    0: x,
  })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.flatMap` у `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
