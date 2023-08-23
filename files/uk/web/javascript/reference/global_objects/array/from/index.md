---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
page-type: javascript-static-method
browser-compat: javascript.builtins.Array.from
---

{{JSRef}}

Статичний метод **`Array.from()`** (із) створює новий, поверхнево скопійований примірник `Array` на основі [ітерованого](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#protokol-iterovanoho-obiekta) або [масивоподібного](/uk/docs/Web/JavaScript/Guide/Indexed_collections#robota-z-masyvopodibnymy-obiektamy) об'єкта.

{{EmbedInteractiveExample("pages/js/array-from.html","shorter")}}

## Синтаксис

```js-nolint
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

### Параметри

- `arrayLike` (масивоподібне)
  - : Ітерований чи масивоподібний об'єкт для перетворення на масив.
- `mapFn` (функція відображення) {{Optional_inline}}
  - : Функція до виклику на кожному елементі масиву. Якщо вона задана, то кожне значення перед додаванням до масиву спершу пропускається крізь цю функцію, і замість нього до масиву додається значення, що повернено з `mapFn`. Ця функція викликається з наступними аргументами:
    - `element`
      - : Поточний елемент масиву, що обробляється.
    - `index`
      - : Індекс поточного елемента масиву, що обробляється.
- `thisArg` {{Optional_inline}}
  - : Значення для використання як `this` при виконанні `mapFn`.

### Повернене значення

Новий примірник {{jsxref("Array")}}.

## Опис

`Array.from()` дає змогу створювати `Array` на основі:

- [ітерованих об'єктів](/uk/docs/Web/JavaScript/Reference/Iteration_protocols) (таких, як {{jsxref("Map")}} і {{jsxref("Set")}}); або, якщо об'єкт не є ітерованим,
- масивоподібних об'єктів (об'єктів зі властивістю `length` та індексованими елементами).

Щоб перетворити звичайний об'єкт, що не є ітерованим або масивоподібним, на масив (шляхом перелічування його ключів властивостей, значень, або і ключів, і значень), використовуйте {{jsxref("Object.keys()")}}, {{jsxref("Object.values()")}} або {{jsxref("Object.entries()")}}. Щоб перетворити [асинхронний ітерований об'єкт](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#asynkhronnyi-iterator-i-protokol-asynkhronnoho-iterovanoho-obiekta) на масив, використовуйте {{jsxref("Array.fromAsync()")}}.

`Array.from()` ніколи не породжує розріджених масивів. Якщо об'єкт `arrayLike` не має частини властивостей-індексів, то такі пропущені індекси отримують `undefined` у новому масиві.

`Array.from()` має необов'язковий параметр `mapFn`, котрий дає змогу виконувати функцію на кожному елементі масиву, що створюється, подібно до {{jsxref("Array.prototype.map()", "map()")}}. Ясніше висловлюючись, `Array.from(obj, mapFn, thisArg)` дає такий само результат, як `Array.from(obj).map(mapFn, thisArg)`, окрім того, що не створює проміжний масив, і `mapFn` отримує лише два аргументи (`element`, `index`), без передачі всього масиву, тому що масив іще в процесі створення.

> **Примітка:** Така логіка – більш важлива для [типізованих масивів](/uk/docs/Web/JavaScript/Guide/Typed_arrays), адже проміжний масив обов'язково містив би значення, що вписувались би у відповідний тип. `Array.from()` реалізований так, щоб мати таку ж сигнатуру, як {{jsxref("TypedArray.from()")}}.

Метод `Array.from()` є узагальненим фабричним методом. Наприклад, якщо підклас `Array` успадковує метод `from()`, то успадкований метод `from()` повертатиме нові примірники підкласу, а не примірники `Array`. Фактично значення `this` може бути будь-якою функцією-конструктором, котра приймає єдиний аргумент, що представляє довжину нового масиву. Коли передається `arrayLike` – ітерований об'єкт, то конструктор викликається без аргументів; коли передається масивоподібний об'єкт, то конструктор викликається з [нормалізованою довжиною](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#normalizatsiia-vlastyvosti-length) масивоподібного об'єкта. Остаточне значення `length` присвоюється знову, коли ітерація завершується. Якщо значення `this` не є функцією-конструктором, то замість нього використовується конструктор `Array`.

## Приклади

### Array на основі String

```js
Array.from("foo");
// [ "f", "o", "o" ]
```

### Array на основі Set

```js
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### Array на основі Map

```js
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### Array на основі NodeList

```js
// Створити масив, заснований на властивості елементів DOM
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
```

### Array на основі масивоподібного об'єкта (arguments)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### Застосування стрілкових функцій та Array.from()

```js
// Застосування стрілкової функції як функції відображення для
// роботи з елементами
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Згенерувати послідовність чисел
// Оскільки масив ініціалізується з `undefined` на кожній позиції,
// значення `v` нижче буде `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### Генератор послідовності (діапазон)

```js
// Функція – генератор послідовності (загальноприйнято зветься "діапазоном" – "range", наприклад, у Clojure, PHP тощо)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// Згенерувати діапазон чисел 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Згенерувати діапазон чисел 1..10 з кроком 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Згенерувати за допомогою Array.from алфавіт, користуючись тим, що він має послідовний порядок
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x)
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

### Виклик from() на конструкторах-немасивах

Метод `from()` може бути викликаний на будь-якій функції-конструкторі, що приймає єдиний аргумент, котрий представляє довжину нового масиву.

```js
function NotArray(len) {
  console.log("NotArray викликано з довжиною", len);
}
// Ітерований об'єкт
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// NotArray викликано з довжиною undefined
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }
// Масивоподібний об'єкт
console.log(Array.from.call(NotArray, { length: 1, 0: "foo" }));
// NotArray викликано з довжиною 1
// NotArray { '0': 'foo', length: 1 }
```

Коли значення `this` не є конструктором, повертається звичайний об'єкт `Array`.

```js
console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.from` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.fromAsync()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
