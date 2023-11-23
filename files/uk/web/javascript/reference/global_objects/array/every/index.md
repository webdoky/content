---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.every
---

{{JSRef}}

Метод **`every()`** (кожний) примірників {{jsxref("Array")}} перевіряє, чи всі елементи масиву проходять перевірку, реалізовану наданою функцією. Повертає булеве значення.

{{EmbedInteractiveExample("pages/js/array-every.html", "shorter")}}

## Синтаксис

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Параметри

- `callbackFn` (функція зворотного виклику)
  - : Функція для виконання на кожному елементі масиву. Вона повинна повертати значення [істинності](/uk/docs/Glossary/Truthy), аби показати, що елемент проходить перевірку, інакше – значення хибності. Ця функція викликається з наступними аргументами:
    - `element` (елемент)
      - : Поточний елемент масиву, що обробляється.
    - `index` (індекс)
      - : Індекс поточного елемента масиву, що обробляється.
    - `array` (масив)
      - : Масив, на котрому викликали `every()`.
- `thisArg` (аргумент this) {{optional_inline}}
  - : Значення, що буде використовуватись як `this` при виконанні `callbackFn`. Докладніше про це – в [ітеративних методах](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody)

### Повернене значення

`true`, якщо `callbackFn` не повертає {{Glossary("falsy", "хибне")}} значення для одного з елементів масиву, – в цьому випадку негайно повертається `false`

## Опис

Метод `every()` є [ітеративним методом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#iteratyvni-metody). Він викликає передану функцію `callbackFn` один раз для кожного елемента в масиві, поки `callbackFn` не поверне значення [хибності](/uk/docs/Glossary/Falsy). Якщо такий елемент знайдено, то `every()` негайно повертає `false` та зупиняє ітерування масиву. Інакше – якщо `callbackFn` повертає значення [істинності](/uk/docs/Glossary/Truthy) для всіх елементів, то `every()` повертає `true`.

`every` діє як квантор загальності в математиці. Наприклад, для порожнього масиву він повертає `true`. (Є [порожньою істиною](https://en.wikipedia.org/wiki/Vacuous_truth) те, що всі елементи [порожньої множини](https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D1%8F_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B8%D0%BD%D0%B0) задовольняють будь-яку умову.)

`callbackFn` закликається лише для тих індексів масиву, котрим присвоєні значення. Вона не закликається для порожніх комірок у [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy).

`every()` не змінює масив, на котрому викликаний, але функція, передана як `callbackFn`, може це робити. Проте зверніть увагу на те, що довжина масиву зберігається _до_ першого заклику `callbackFn`. Таким чином:

- `callbackFn` не оброблятиме жодних елементів, доданих поза початковою довжиною масиву, актуальною на мить початку виклику `every()`.
- Зміни до вже оброблених індексів не призведуть до повторного заклику на них `callbackFn`.
- Коли наявний, ще не оброблений елемент масиву змінюється функцією `callbackFn`, то значення такого елемента, передане в `callbackFn`, буде значенням, актуальним на ту мить, коли цей елемент обробляється. [Видалені](/uk/docs/Web/JavaScript/Reference/Operators/delete) елементи – не обробляються.

> **Застереження:** Паралельні зміни такого роду, як описано в попередньому абзаці, часто призводять до важкого для розуміння коду, їх в цілому слід уникати (крім особливих випадків).

Метод `every()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

## Приклади

### Перевірка розміру всіх елементів масиву

Наступний приклад перевіряє, чи всі елементи масиву не менші за 10.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Перевірка того, чи є один масив підмножиною іншого

Наступний приклад перевіряє, чи всі елементи масиву присутні в іншому масиві.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Використання every() на розріджених масивах

`every()` не запустить свій предикат на порожніх комірках.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### Вплив на початковий масив (зміни, додавання елементів у кінець та видалення)

Наступні приклади перевіряють поведінку метода `every`, коли до масиву вносяться зміни.

```js
// ---------------
// Зміни елементів
// ---------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index + 1]--;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});

// Цикл виконується тричі, але
// виконався би двічі, якби зміни не вносилися
//
// 1 ітерація: [1,1,3,4][0] -> 1
// 2 ітерація: [1,1,2,4][1] -> 1
// 3 ітерація: [1,1,2,3][2] -> 2

// ---------------
// Додавання елементів у кінець
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push("новий");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Цикл виконується тричі, навіть після додавання нових елементів
//
// 1 ітерація: [1, 2, 3, новий][0] -> 1
// 2 ітерація: [1, 2, 3, новий, новий][1] -> 2
// 3 ітерація: [1, 2, 3, новий, новий, новий][2] -> 3

// ---------------
// Видалення елементів
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Цикл виконується лише двічі, оскільки решта
// елементів усунуті `pop()`
//
// 1 ітерація: [1,2,3][0] -> 1
// 2 ітерація: [1,2][1] -> 2
```

### Виклик every() на об'єктах-немасивах

Метод `every()` зчитує з `this` властивість `length`, а потім звертається до кожної властивості, чий ключ є невід'ємним цілим числом, меншим за `length`, поки не будуть перебрані вони всі або `callbackFn` не поверне `false`.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 345, // ігнорується every(), оскільки length – 3
};
console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.every` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
