---
title: "String: length"
slug: Web/JavaScript/Reference/Global_Objects/String/length
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.String.length
---

{{JSRef}}

Властивість даних значень {{jsxref("String")}} **`length`** (довжина) містить довжину рядка в кодових одиницях UTF-16.

{{EmbedInteractiveExample("pages/js/string-length.html", "shorter")}}

## Значення

Невід'ємне ціле число.

{{js_property_attributes(0, 0, 0)}}

## Опис

Ця властивість повертає число кодових одиниць у рядку. JavaScript використовує кодування [UTF-16](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery), згідно з яким кожен символ Unicode може бути закодований у вигляді однієї або двох кодових одиниць, тож може статись таке, що значення, повернене `length`, не збігатиметься з фактичним числом символів Unicode у ряду. Для поширених систем письма штибу латиниці, кирилиці, загальновідомих китайських, японських і корейських символів тощо це не повинно бути проблемою, але при роботі з певними писемностями, як то емоджі, [математичними символами](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) або маловідомими китайськими символами, може знадобитись враховування різниці між кодовими одиницями та символами.

Специфікація мови вимагає, аби рядки мали найбільшу можливу довжину 2<sup>53</sup> - 1 елементів, що дорівнює верхній межі [точних цілих чисел](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). Проте рядок з такою довжиною потребує 16384 ТіБ місця, а це не вміститься в жодну доцільну пам'ять пристрою, тож реалізації мають тенденцію до заниження цього порогу, так, щоб довжину рядка можна було зручно зберігати як 32-бітне ціле число.

- У V8 (що використовується в Chrome і Node) найбільша можлива довжина – 2<sup>29</sup> - 24 (\~1GiB). На 32-бітних системах найбільша можлива довжина – 2<sup>28</sup> - 16 (\~512MiB).
- У Firefox найбільша можлива довжина – 2<sup>30</sup> - 2 (\~2GiB). До Firefox 65 ця межа дорівнювала 2<sup>28</sup> - 1 (\~512MiB).
- У Safari найбільша можлива довжина – 2<sup>31</sup> - 1 (\~4GiB).

В порожнього рядка довжина `length` дорівнює 0.

Статична властивість `String.length` не має жодного відношення до довжин рядків. Це [арність](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/length) функції `String` (в широкому розумінні — число формальних аргументів функції), яка дорівнює 1.

Оскільки довжина `length` рахує кодові одиниці, а не символи, то якщо необхідно отримати саме кількість символів, можна спершу розбити рядок за допомогою його [ітератора](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator), що працює за символами:

```js
function getCharacterLength(str) {
  // Ітератор рядка, який вжито тут, перебирає саме окремі символи,
  // а не лише кодові одиниці
  return [...str].length;
}

console.log(getCharacterLength("А\uD87E\uDC04Я")); // 3
```

## Приклади

### Базове застосування

```js
const x = "Mozilla";
const empty = "";

console.log(`${x} має довжину ${x.length} кодових одиниць`);
// "Mozilla має довжину 7 кодових одиниць"

console.log(`Порожній рядок має довжину ${empty.length}`);
// Порожній рядок має довжину 0
```

### Рядки з довжиною, що не дорівнює кількості символів

```js
const emoji = "😄";
console.log(emoji.length); // 2
console.log([...emoji].length); // 1
const adlam = "𞤲𞥋𞤣𞤫";
console.log(adlam.length); // 8
console.log([...adlam].length); // 4
const formula = "∀𝑥∈ℝ,𝑥²≥0";
console.log(formula.length); // 11
console.log([...formula].length); // 9
```

### Присвоєння значення властивості довжини

У зв'язку з тим, що рядки є примітивами, спроба присвоїти значення властивості рядка `length` не дасть жодного помітного ефекту, а в [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode) – викине помилку.

```js
const myString = "дзвоники";

myString.length = 4;
console.log(myString); // "дзвоники"
console.log(myString.length); // 8
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`Array` – `length`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
