---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.charAt
---

{{JSRef}}

Метод **`charAt()`** (символ на позиції) значень {{jsxref("String")}} повертає новий рядок, що складається з єдиної кодової одиниці UTF-16, знайденої в рядку за переданим індексом.

Метод `charAt()` завжди індексує рядок як послідовність [кодових одиниць UTF-16](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery), тому може повертати самотні сурогати. Щоб отримати цілу кодову точку Unicode за вказаним індексом, слід використовувати {{jsxref("String.prototype.codePointAt()")}} і {{jsxref("String.fromCodePoint()")}}.

{{EmbedInteractiveExample("pages/js/string-charat.html", "shorter")}}

## Синтаксис

```js-nolint
charAt(index)
```

### Параметри

- `index`
  - : Індекс від нуля символу, котрий необхідно повернути. [Перетворюється на ціле число](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile) – `undefined` перекидається на 0.

### Повернене значення

Рядок, що відповідає одному символу (рівно одній кодовій одиниці UTF-16) за вказаним індексом `index`. Якщо значення `index` виходить за межі діапазону `0` – `str.length - 1`, то метод `charAt()` поверне порожній рядок.

## Опис

Символи в рядках індексуються зліва направо. Індексом першого елемента є `0`, а індекс останнього символу в рядку, який, приміром, називається `str`, – `str.length - 1`.

Кодові точки Unicode мають діапазон від `0` до `1114111` (`0x10FFFF`). Метод `charAt()` завжди повертає символ, чиє значення – менше за `65536`, тому що вищі кодові точки представляються _парами_ 16-бітових сурогатних псевдосимволів. Таким чином, щоб отримати цілий символ зі значенням, більшим за `65535`, потрібно отримати не лише `charAt(i)`, а також і `charAt(i + 1)` (як якби оброблявся рядок з двома символами), або використати замість цього {{jsxref("String/codePointAt", "codePointAt(i)")}} і {{jsxref("String.fromCodePoint()")}}. Про Unicode – дивіться [Символи UTF-16, кодові точки Unicode та графемні кластери](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery).

Метод `charAt()` – дуже подібний до використання [квадратних дужок](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors#kvadratni-duzhky) для звертання до символу за заданим індексом. Головні відмінності:

- `charAt()` намагається перетворити `index` на ціле число, а квадратні дужки – ні, вони безпосередньо використовують `index` як ім'я властивості.
- `charAt()` повертає порожній рядок, якщо `index` перебуває поза діапазоном прийнятних значень, а квадратні дужки – `undefined`.

## Приклади

### Застосування charAt()

Наступний приклад вибирає символи з різних місць рядка "`Прекрасний новий світ`" і друкує їх на екран:

```js
const anyString = "Прекрасний новий світ";
console.log(`За індексом 0   знаходиться символ '${anyString.charAt()}'`);
// Ніякого індексу в метод не передано, використовується усталене значення 0

console.log(`За індексом 0   знаходиться символ '${anyString.charAt(0)}'`);
console.log(`За індексом 1   знаходиться символ '${anyString.charAt(1)}'`);
console.log(`За індексом 2   знаходиться символ '${anyString.charAt(2)}'`);
console.log(`За індексом 3   знаходиться символ '${anyString.charAt(3)}'`);
console.log(`За індексом 4   знаходиться символ '${anyString.charAt(4)}'`);
console.log(`За індексом 999 знаходиться символ '${anyString.charAt(999)}'`);
```

Ці рядки виведуть на екран наступне:

```plain
За індексом 0   знаходиться символ 'П'
За індексом 0   знаходиться символ 'П'
За індексом 1   знаходиться символ 'р'
За індексом 2   знаходиться символ 'е'
За індексом 3   знаходиться символ 'к'
За індексом 4   знаходиться символ 'р'
За індексом 999 знаходиться символ ''
```

Метод `charAt()` може повертати самотні сурогати, котрі не є дійсними символами Unicode.

```js
const str = "𠮷𠮾";
console.log(str.charAt(0)); // "\ud842", що не є дійсним символом Unicode
console.log(str.charAt(1)); // "\udfb7", що не є дійсним символом Unicode
```

Щоб отримати всю кодову точку Unicode за заданим індексом, слід використати спосіб індексування, що розбиває рядок на кодові точки Unicode, наприклад, {{jsxref("String.prototype.codePointAt()")}}, або [розгортання рядків](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) у масив кодових точок Unicode.

```js
const str = "𠮷𠮾";
console.log(String.fromCodePoint(str.codePointAt(0))); // "𠮷"
console.log([...str][0]); // "𠮷"
```

> **Примітка:** Уникайте власних реалізацій рішень вище за допомогою `charAt()`. Виявлення самотніх сурогатів та їх парування є складним, а вбудовані API можуть бути більш продуктивними, оскільки вони безпосередньо використовують приховане представлення рядка. Встановіть поліфіл для згаданих вище API, якщо це необхідно.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript має проблему з Unicode](https://mathiasbynens.be/notes/javascript-unicode) від Матіаса Байненса (2013)
