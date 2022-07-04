---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.join
---

{{JSRef}}

Метод **`join()`** (об‘єднати) створює та повертає новий рядок шляхом об’єднання всіх елементів у масиві
(або [масивоподібному об’єкті](/uk/docs/Web/JavaScript/Guide/Indexed_collections#robota-z-masyvopodibnymy-obiektamy)),
розділених комами або вказаним роздільником. Якщо масив містить лише один елемент, то
цей елемент буде повернено без використання роздільника.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## Синтаксис

```js
join()
join(separator)
```

### Параметри

- `separator` (роздільник) {{optional_inline}}
  - : Визначає рядок для розділення кожної пари суміжних елементів масиву.
    За необхідності роздільник перетворюється на рядок. Якщо його опущено, елементи масиву відокремлюються комою (",").
    Якщо роздільник є порожнім рядком, усі елементи об’єднуються без будь-яких символів між ними.

### Повернене значення

Рядок із всіма об’єднаними елементами масиву. Якщо `arr.length` дорівнює
`0`, то повертається порожній рядок.

## Опис

Перетворює усі елементи масиву на рядки і об’єднує їх в один рядок.

> **Застереження:** Якщо елемент є `undefined`, `null` або порожнім масивом
> `[]`, він перетворюється на порожній рядок.

Метод [`Array.prototype.toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) викликає без аргументів метод `join`. Перевизначення `join` екземпляра масиву також перевизначить його поведінку `toString`.

## Приклади

### Об’єднання масиву чотирма різними способами

У наступному прикладі створюється масив `a`, що містить три елементи; потім масив
об’єднується чотири рази: використовуючи усталений роздільник, тоді – кому і пробіл, далі – плюс
і порожній рядок.

```js
const a = ['Вітер', 'Вода', 'Вогонь'];
a.join();      // 'Вітер,Вода,Вогонь'
a.join(', ');  // 'Вітер, Вода, Вогонь'
a.join(' + '); // 'Вітер + Вода + Вогонь'
a.join('');    // 'ВітерВодаВогонь'
```

### Об’єднання масивоподібного об’єкта

Наступний приклад об’єднує масивоподібний об’єкт
([`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments)),
викликаючи {{jsxref("Function.prototype.call")}} на `Array.prototype.join`.

```js
function f(a, b, c) {
  const s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
//очікуваний результат: "1,a,true"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
