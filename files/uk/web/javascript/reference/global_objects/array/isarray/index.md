---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
page-type: javascript-static-method
browser-compat: javascript.builtins.Array.isArray
---

{{JSRef}}

Статичний метод **`Array.isArray()`** ("чи є масивом") з'ясовує, чи є передане значення примірником {{jsxref("Array")}}.

{{EmbedInteractiveExample("pages/js/array-isarray.html")}}

## Синтаксис

```js-nolint
Array.isArray(value)
```

### Параметри

- `value` (значення)
  - : Значення до перевірки.

### Повернене значення

`true`, якщо значення – то {{jsxref("Array")}}, інакше – `false`. Якщо `value` – примірник {{jsxref("TypedArray")}}, то поверненим значенням обов'язково буде `false`.

## Опис

`Array.isArray()` перевіряє, чи є передане значення примірником {{jsxref("Array")}}. Він не перевіряє ланцюжок прототипів значення, а також не покладається на конструктор `Array`, до котрого прикріплений. Він повертає `true` для будь-якого значення, що було створене за допомогою синтаксису літерала масиву чи конструктора `Array`. Завдяки цьому можна безпечно застосовувати `Array.isArray()` до міжцаринних об'єктів, для котрих ідентичність конструктора `Array` відрізняється, а отже – [`instanceof Array`](/uk/docs/Web/JavaScript/Reference/Operators/instanceof) не матиме успіху.

Більше подробиць у статті ["З'ясування з досконалою точністю того, чи є певний об'єкт JavaScript масивом" (англ.)](https://web.mit.edu/jwalden/www/isArray.html).

Крім того, `Array.isArray()` відкидає об'єкти, котрі мають у своєму ланцюжку прототипів `Array.prototype`, але насправді не є масивами, – `instanceof Array` їх би прийняв.

## Приклади

### Застосування Array.isArray()

```js
// усі виклики нижче повертають true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("а", "б", "в", "г"));
Array.isArray(new Array(3));
// Невеличкий відомий факт: Array.prototype сам є масивом
Array.isArray(Array.prototype);

// усі виклики нижче повертають false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// Це не масив, адже цей об'єкт не був створений за допомогою
// синтаксиса літерала масиву чи конструктора Array
Array.isArray({ __proto__: Array.prototype });
```

### instanceof проти Array.isArray()

При перевірці на належність примірника `Array` слід віддавати перевагу `Array.isArray()` замість `instanceof`, тому що `Array.isArray()` коректно працює з об'єктами з різних царин.

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1,2,3]

// Коректна перевірка на Array
Array.isArray(arr); // true
// Вважається шкідливою практикою, адже не працює крізь iframe
arr instanceof Array; // false
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.isArray` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
