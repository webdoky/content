---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
page-type: javascript-class
browser-compat: javascript.builtins.Boolean
---

{{JSRef}}

Об'єкт **`Boolean`** (булів) представляє логічне значення: `true` (істину) або `false` (хибу).

## Опис

### Булеві примітиви та об'єкти Boolean

Для перетворення небулевих значень на булеві слід користуватися `Boolean` як функцією або оператором [подвійного НЕ](/uk/docs/Web/JavaScript/Reference/Operators/Logical_NOT#podviine-ne-). Не слід використовувати конструктор `Boolean()` з `new`.

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // не користуйтеся цим!
```

Це пов'язано з тим, що _всі_ об'єкти, включно з об'єктом `Boolean`, у який загорнуто значення `false`, є {{glossary("truthy", "істинними")}} і в умовних інструкціях обчислюються як `true`. (Див. також розділ [зведення до булевого](#zvedennia-do-bulevoho) нижче.)

```js
if (new Boolean(true)) {
  console.log("Це виведення – друкується.");
}

if (new Boolean(false)) {
  console.log("Це виведення – ТАКОЖ друкується.");
}

const myFalse = new Boolean(false); // myFalse – це об'єкт Boolean (а не примітивне значення false)
const g = Boolean(myFalse); // g дорівнює true
const myString = new String("Привіт"); // myString – це об'єкт String
const s = Boolean(myString); // s дорівнює true
```

> **Застереження:** Використовувати `Boolean` як конструктор повинно доводитись нечасто.

### Зведення до булевого

Чимало вбудованих операцій, що очікують на булеві значення, зводять свої аргументи до булевих. [Ця операція](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean) може бути підсумована отак:

- Булеві значення повертаються як є.
- [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined) стає `false`.
- [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) стає `false`.
- `0`, `-0` і `NaN` стають `false`, а решта чисел – `true`.
- `0n` стає `false`, а решта значень [BigInt](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt) – `true`.
- Порожній рядок `""` стає `false`, а інші рядки – `true`.
- [Символи](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol) стають `true`.
- Усі об'єкти – стають `true`.

> **Примітка:** Історична логіка змушує [`document.all`](/uk/docs/Web/API/Document/all) повертати `false`, коли вживається як булеве значення, всупереч тому, що це об'єкт. Ця властивість є історичною та нестандартною, її не варто використовувати.

> **Примітка:** На відміну від інших перетворень типів, як то [зведення до рядка](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka) чи [зведення до числа](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#zvedennia-do-chysla), зведення до булевого не намагається перетворювати об'єкти на примітиви.

Інакше кажучи, є вельми невелика кількість значень, що зводяться до `false`, — вони звуться [хибними](/uk/docs/Glossary/Falsy) значеннями. Всі решта – звуться [істинними](/uk/docs/Glossary/Truthy) значеннями. Істинність значення – важлива, коли воно використовується з логічними операторами, умовними інструкціями або будь-яким булевим контекстом.

Є два способи досягнути в JavaScript такого ж ефекту.

- [Подвійне НЕ](/uk/docs/Web/JavaScript/Reference/Operators/Logical_NOT#podviine-ne-): `!!x` двічі заперечує `x`, що перетворює `x` на булеве значення, використовуючи той же алгоритм, що описано вище.
- Функція [`Boolean()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean): `Boolean(x)` використовує для перетворення `x` той же алгоритм, описаний вище.

Зверніть увагу на те, що істинність – не те саме, що [нестрога рівність](/uk/docs/Web/JavaScript/Reference/Operators/Equality) щодо `true` або `false`.

```js
if ([]) {
  console.log("[] – істинне значення");
}
if ([] == false) {
  console.log("[] == false");
}
// [] – істинне значення
// [] == false
```

`[]` – істинне значення, але також воно нестрого рівно `false`. Воно істинне, тому що всі об'єкти – істинні. Проте як порівняти з `false`, що є примітивом, `[]` також перетворюється на примітив, тобто на `""` – за допомогою {{jsxref("Array.prototype.toString()")}}. Порівняння рядків і булевих значень призводить до того, що обидві сторони [перетворюються на числа](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#zvedennia-do-chysla), і обидва ці значення стають `0`, тож `[] == false` обчислюється як `true`. Загалом, хибність і `== false` – відрізняються у наступних випадках:

- `NaN`, `undefined` і `null` – хибні, але нестрого не дорівнюють `false`.
- `"0"` (та інші рядкові літерали, окрім `""`, що [зводяться до 0](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#zvedennia-do-chysla)), – істинні, але нестрого рівні `false`.
- Об'єкти – завжди істинні, але їхнє примітивне представлення може нестрого дорівнювати `false`.

Істинні значення мають навіть меншу ймовірність нестрого дорівнювати `true`. Усі значення є або істинними, або хибними, але більшість значень не є нестрого рівними ані `true`, ані `false`.

## Конструктор

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : Створює новий об'єкт `Boolean`.

## Властивості примірника

Ці властивості означені на `Boolean.prototype` і є спільними для всіх примірників `Boolean`.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : Функція-конструктор, що створила об'єкт-примірник. Для примірників `Boolean` початковим значенням є конструктор {{jsxref("Boolean/Boolean", "Boolean")}}.

## Методи примірника

- {{jsxref("Boolean.prototype.toString()")}}
  - : Повертає рядок – або `true`, або `false`, залежно від значення об'єкта. Заміщує метод {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Повертає примітивне значення об'єкта {{jsxref("Boolean")}}. Заміщує метод{{jsxref("Object.prototype.valueOf()")}}.

## Приклади

### Створення об'єктів Boolean з початковим значенням false

```js
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);
```

### Створення об'єктів Boolean з початковим значенням true

```js
const btrue = new Boolean(true);
const btrueString = new Boolean("true");
const bfalseString = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Булеве значення](/uk/docs/Glossary/Boolean)
- [Булеві примітиви](/uk/docs/Web/JavaScript/Data_structures#typ-boolean)
- [Логічний тип даних](https://uk.wikipedia.org/wiki/%D0%9B%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D1%82%D0%B8%D0%BF_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85) на Вікіпедії
