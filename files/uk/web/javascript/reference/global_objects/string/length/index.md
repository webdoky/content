---
title: String length
slug: Web/JavaScript/Reference/Global_Objects/String/length
tags:
  - JavaScript
  - Property
  - Reference
  - String
  - String Length
  - length
browser-compat: javascript.builtins.String.length
---
{{JSRef}}

Властивість **`length`** об'єкту {{jsxref("String")}} містить довжину цього рядка, виміряну в кодових одиницях UTF-16. `length` — це придатна лише для читання властивість екземпляру рядка.

{{EmbedInteractiveExample("pages/js/string-length.html", "shorter")}}

## Опис

Ця властивість повертає кількість кодових одиниць в рядку. Формат кодування рядків у JavaScript — {{interwiki("wikipedia", "UTF-16")}} — потребує одну 16-бітну кодову одиницю для позначення більшості загальновживаних символів, проте вимагає двох таких кодових одиниць для позначення менш вживаних символів. Тому цілком можлива ситуація, коли значення, повернене властивістю `length` не відповідає дійсній кількості символів рядка.

Специфікація ECMAScript 2016 (7 редакція) встановила максимально допустиму довжину рядка рівну `2^53 - 1` елементам. Раніше ніякої максимальної довжини не вказувалось. У Firefox рядки мають максимальне значення довжини рядка `2**30 - 2` (\~1GB). У раніших версіях, до Firefox 65, максимальна довжина рядка дорівнювала `2**28 - 1` (\~256MB).

В порожньому рядку довжина `length` дорівнює 0.

Статична властивість `String.length` не має жодного відношення до довжин рядків, це арність функції `String` (в широкому розумінні — число формальних аргументів функції), яка дорівнює 1.

## Unicode

Оскільки довжина \`length\` налічує кодові одиниці, а не символи, а вам знадобилося отримати саме кількість символів — варто застосувати щось таке:

```js
function getCharacterLength (str) {
  // Ітератор рядка, який вжито тут, перебирає саме окремі символи,
  // а не лише кодові одиниці
  return [...str].length;
}

console.log(getCharacterLength('А\uD87E\uDC04Я')); // 3

// Хоча це не рекомендується, можна також додати цю фукнцію кожного рядка, як наведено далі:

Object.defineProperty(String.prototype, 'charLength', {
  get () {
    return getCharacterLength(this);
  }
});

console.log('А\uD87E\uDC04Я'.charLength); // 3
```

## Приклади

### Базове застосування

```js
let x = 'Mozilla';
let empty = '';

console.log(x + ' має довжину ' + x.length + ' кодових одиниць');
/* "Mozilla має довжину 7 кодових одиниць" */

console.log('Порожній рядок має довжину ' + empty.length);
// очікуваний вивід: "Порожній рядок має довжину 0"
```

### Присвоєння значення властивості довжини

```js
let myString = "дзвоники";

// Спроба присвоїти якесь значення властивості .length рядка не дає ніякого помітного ефекту.
myString.length = 4;
console.log(myString);
// очікуваний вивід: "дзвоники"
console.log(myString.length);
// очікуваний вивід: 8
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Властивість `String.length` в JavaScript та інтернаціоналізація вебдодатків (англ.)](https://downloads.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)
