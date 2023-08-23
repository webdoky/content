---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
page-type: javascript-instance-method
browser-compat: javascript.builtins.RegExp.test
---

{{JSRef}}

Метод **`test()`** (перевірити) примірників {{jsxref("RegExp")}} виконує пошук збігу між своїм регулярним виразом і заданим рядком. Повертає `true` або `false`.

Об'єкти {{jsxref("RegExp")}} JavaScript **мають стан**, коли мають позначку {{jsxref("RegExp/global", "глобальності")}} чи {{jsxref("RegExp/sticky", "липкості")}} (наприклад, `/foo/g` або `/foo/y`). Вони зберігають {{jsxref("RegExp/lastIndex", "lastIndex")}} від попереднього збігу. Потайки використовуючи цю властивість, `test()` може використовуватись для ітерації по багатьох збігах в одному рядку тексту (з групами захоплення).

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## Синтаксис

```js-nolint
test(str)
```

### Параметри

- `str`
  - : Рядок, в якому буде виконуватись пошук збігу з регулярним виразом. Будь-які значення [зводяться до рядка](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka), тож пропуск цього параметра чи передача `undefined` змусить `test()` шукати рядок `"undefined"`, а це рідко саме те, що необхідно.

### Повертає

`true`, якщо є збіг між регулярним виразом і рядком `str`. Інакше – `false`.

## Опис

Слід використовувати `test()` щоразу, коли необхідно знати, чи є відповідність патернові у рядку. `test()` повертає булеве значення, на відміну від методу {{jsxref("String.prototype.search()")}} (котрий повертає індекс збігу, або `-1`, якщо збігу не знайдено).

Щоб отримати більше інформації (але з повільнішим виконанням), слід використовувати метод {{jsxref("RegExp.prototype.exec()", "exec()")}}. (Він подібний до методу {{jsxref("String.prototype.match()")}}.)

Як і в випадку `exec()` (або в поєднанні з ним), `test()`, викликаний декілька разів на тому самому примірнику глобального регулярного виразу, виконає пошук далі по рядку, після попереднього збігу.

## Приклади

### Застосування test()

Простий приклад, що перевіряє, чи поміщено `"hello"` на самому початку рядка, і повертає булів результат.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

Наступний приклад виводить повідомлення, котре залежить від успіху перевірки:

```js
function testInput(re, str) {
  const midstring = re.test(str) ? "містить" : "не містить";
  console.log(`${str} ${midstring} ${re.source}`);
}
```

### Використання test() на регулярному виразі з позначкою глобальності

Коли регулярний вираз має [позначку глобальності](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global), то `test()` збільшує властивість {{jsxref("RegExp/lastIndex", "lastIndex")}} регулярного виразу. ({{jsxref("RegExp.prototype.exec()")}} так само її збільшує.)

Подальші виклики `test(str)` відновлять пошук у `str`, починаючи від `lastIndex`. Властивість `lastIndex` збільшуватиметься далі щоразу, коли `test()` повертатиме `true`.

> **Примітка:** Поки `test()` повертає `true`, `lastIndex` _не_ буде скинуто – навіть при перевірці іншого рядка!

Коли `test()` повертає `false`, властивість `lastIndex` регулярного виразу виклику скидається до `0`.

Наступний приклад демонструє цю поведінку:

```js
const regex = /foo/g; // задана позначка глобальності

// regex.lastIndex – на 0
regex.test("foo"); // true

// regex.lastIndex тепер – на 3
regex.test("foo"); // false

// regex.lastIndex – на 0
regex.test("barfoo"); // true

// regex.lastIndex – на 6
regex.test("foobar"); // false

// regex.lastIndex – на 0
regex.test("foobarfoo"); // true

// regex.lastIndex – на 3
regex.test("foobarfoo"); // true

// regex.lastIndex – на 9
regex.test("foobarfoo"); // false

// regex.lastIndex – на 0
// (...і так далі)
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Розділ [Регулярні вирази](/uk/docs/Web/JavaScript/Guide/Regular_expressions) у [Посібнику з JavaScript](/uk/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
