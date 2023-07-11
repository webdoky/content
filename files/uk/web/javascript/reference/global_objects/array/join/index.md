---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.join
---

{{JSRef}}

Метод **`join()`** (об'єднати) створює та повертає новий рядок шляхом об'єднання всіх елементів у масиві
(або [масивоподібному об'єкті](/uk/docs/Web/JavaScript/Guide/Indexed_collections#robota-z-masyvopodibnymy-obiektamy)), розділених комами або вказаним роздільником. Якщо масив містить лише один елемент, то цей елемент буде повернено без використання роздільника.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## Синтаксис

```js-nolint
join()
join(separator)
```

### Параметри

- `separator` (роздільник) {{optional_inline}}
  - : Визначає рядок для розділення кожної пари суміжних елементів масиву.
    За необхідності роздільник перетворюється на рядок. Якщо його опущено, елементи масиву відокремлюються комою (","). Якщо роздільник є порожнім рядком, усі елементи об'єднуються без будь-яких символів між ними.

### Повернене значення

Рядок із всіма об'єднаними елементами масиву. Якщо `arr.length` дорівнює `0`, то повертається порожній рядок.

## Опис

Рядкові перетворення всіх елементів масиву об'єднуються в один рядок. Якщо елемент – `undefined`, `null`, то він перетворюється на порожній рядок, а не рядок `"null"` чи `"undefined"`.

Метод [`Array.prototype.toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) викликає без аргументів метод `join`. Перевизначення `join` екземпляра масиву також перевизначить його поведінку `toString`.

Бувши використаним на [розріджених масивах](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy), метод `join()` ітерує порожні комірки так, ніби вони містять значення `undefined`.

Метод `join()` є [узагальненим](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#uzahalneni-metody-masyvu). Він лишень очікує, що значення `this` матиме властивість `length`, а також властивості з цілочисловими ключами.

## Приклади

### Об'єднання масиву чотирма різними способами

У наступному прикладі створюється масив `a`, що містить три елементи; потім масив об'єднується чотири рази: використовуючи усталений роздільник, тоді – кому і пробіл, далі – плюс і порожній рядок.

```js
const a = ["Вітер", "Вода", "Вогонь"];
a.join(); // 'Вітер,Вода,Вогонь'
a.join(", "); // 'Вітер, Вода, Вогонь'
a.join(" + "); // 'Вітер + Вода + Вогонь'
a.join(""); // 'ВітерВодаВогонь'
```

### Використання join() на розріджених масивах

`join()` обробляє порожні комірки так само як `undefined`, і додає додатковий роздільник:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### Виклик join() на об'єктах-немасивах

Метод `join()` зчитує з `this` властивість `length`, а потім звертається до кожної цілочислової властивості.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Array.prototype.join` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
