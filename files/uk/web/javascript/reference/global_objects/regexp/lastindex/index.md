---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.RegExp.lastIndex
---

{{JSRef}}

Властивість даних **`lastIndex`** примірника {{jsxref("RegExp")}} задає індекс, з якого почнеться наступний пошук збігу.

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}

## Значення

Невід'ємне ціле число.

{{js_property_attributes(1, 0, 0)}}

## Опис

Ця властивість задається тільки якщо примірник регулярного виразу має позначку `g` – на позначення глобального пошуку, або `y` – на позначення липкого пошуку. Коли на заданому введенні викликається {{jsxref("RegExp/exec", "exec()")}}, застосовуються наступні правила:

- Якщо `lastIndex` – більше за довжину введення, то `exec()` не знайде збігу, і `lastIndex` отримає значення 0.
- Якщо `lastIndex` дорівнює або менше за довжину введення, то `exec()` спробує знайти збіг зі введенням, починаючи від `lastIndex`.
  - Якщо `exec()` знайшов збіг, то `lastIndex` отримує значення позиції кінця знайденого збігу.
  - Якщо `exec()` не знайшов збігу, то `lastIndex` отримує значення 0.

Інші пов'язані з регулярними виразами методи, наприклад, {{jsxref("RegExp.prototype.test()")}}, {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.replace()")}} тощо, викликають за лаштунками `exec()`, тож мають різний вплив на `lastIndex`. Подробиці – на їхніх відповідних сторінках.

## Приклади

### Використання lastIndex

Для прикладу – наступна послідовність інструкцій:

```js
const re = /(hi)?/g;
```

Дає збіг з порожнім рядком.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Повертає `["hi", "hi"]`, а `lastIndex` дорівнює 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Повертає `["", undefined]`, порожній масив, чий нульовий елемент – текст збігу. В цьому випадку це порожній рядок, адже `lastIndex` мала значення 2 (і досі має значення 2), а `hi` має довжину 2.

### Використання lastIndex на липких регулярних виразах

Властивість `lastIndex` доступна для запису. Її можна задати, щоб змусити вираз почати свій наступний пошук від заданого індексу.

Позначка `y` майже завжди вимагає задання `lastIndex`. Вона завжди шукає збіг суворо на `lastIndex` і не пробує шукати на жодних позиціях далі. Це зазвичай корисно для написання розбирачів, коли треба шукати збіг з лексемами лише на поточній позиції.

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### Перемотування lastIndex

Позначка `g` також має користь від задання `lastIndex`. Одним з поширених випадків використання є той, коли рядок змінюється посеред глобального пошуку. В цьому випадку можна пропустити певний збіг, якщо рядок скорочується. Можна уникнути цього, перемотавши `lastIndex`.

```js
const mdLinkPattern = /\[[^[\]]+\]\((?<link>[^()\s]+)\)/dg;

function resolveMDLink(line) {
  let match;
  let modifiedLine = line;
  while ((match = mdLinkPattern.exec(modifiedLine))) {
    const originalLink = match.groups.link;
    const resolvedLink = originalLink.replaceAll(/^files|\/index\.md$/g, "");
    modifiedLine =
      modifiedLine.slice(0, match.indices.groups.link[0]) +
      resolvedLink +
      modifiedLine.slice(match.indices.groups.link[1]);
    // Перемотати патерн на кінець вирішеного посилання
    mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length;
  }
  return modifiedLine;
}

console.log(
  resolveMDLink(
    "[`lastIndex`](files/en-us/web/javascript/reference/global_objects/regexp/lastindex/index.md)",
  ),
); // [`lastIndex`](/en-us/web/javascript/reference/global_objects/regexp/lastindex)
console.log(
  resolveMDLink(
    "[`ServiceWorker`](files/en-us/web/api/serviceworker/index.md) and [`SharedWorker`](files/en-us/web/api/sharedworker/index.md)",
  ),
); // [`ServiceWorker`](/en-us/web/api/serviceworker) and [`SharedWorker`](/en-us/web/api/sharedworker)
```

Спробуйте видалити рядок `mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` і запустити другий приклад. Буде видно, що друге посилання не замінено коректно, тому що `lastIndex` стоїть після індексу посилання, коли рядок скоротився.

> **Застереження:** Цей приклад призначений суто для демонстрації. Щоб працювати з Markdown, ймовірно, слід використовувати розбиральну бібліотеку, а не регулярні вирази.

### Оптимізація пошуку

Пошук можна оптимізувати, задавши `lastIndex` до точки, де можна ігнорувати попередні можливі входження. Наприклад, замість цього:

```js
const stringPattern = /"[^"]*"/g;
const input = `const message = "Hello " + "world";`;

// Зробити вигляд, що попередні частини рядка вже оброблено
let offset = 26;
const remainingInput = input.slice(offset);
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset += nextString.index + nextString.length;
```

Погляньмо на це:

```js
stringPattern.lastIndex = offset;
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset = stringPattern.lastIndex;
```

Потенційно це працюватиме ефективніше, бо немає нарізання рядків.

### Уникання побічних ефектів

Побічні ефекти, спричинені `exec()`, можуть збивати з пантелику, особливо якщо введення при кожному `exec()` – різне.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
console.log(re.test("foo baz")); // false, тому що lastIndex – не нуль
```

Це ще більше спантеличує, якщо змінювати `lastIndex` вручну. Щоб уникнути побічних ефектів, не забудьте скидати `lastIndex` після того, як кожен вхідний рядок буде повністю оброблено.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
re.lastIndex = 0;
console.log(re.test("foo baz")); // true
```

Завдяки певному абстрагуванню, можна вимагати, щоб `lastIndex` мала певне значення перед кожним викликом `exec()`.

```js
function createMatcher(pattern) {
  // Створити копію, щоб вихідний регулярний вираз ніколи не оновлювався
  const regex = new RegExp(pattern, "g");
  return (input, offset) => {
    regex.lastIndex = offset;
    return regex.exec(input);
  };
}

const matchFoo = createMatcher(/foo/);
console.log(matchFoo("foo bar", 0)[0]); // "foo"
console.log(matchFoo("foo baz", 0)[0]); // "foo"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
