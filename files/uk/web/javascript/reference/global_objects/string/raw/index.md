---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
page-type: javascript-static-method
browser-compat: javascript.builtins.String.raw
---

{{JSRef}}

Статичний метод **`String.raw()`** (сирий, необроблений) — це тегова функція [шаблонних літералів](/uk/docs/Web/JavaScript/Reference/Template_literals). Він подібний до префікса `r` в Python, або префіксу `@` в C# для рядкових літералів. Використовується для отримання необроблених рядкових форм шаблонних літералів — тобто таких, в яких опрацьовані вирази підставлення (наприклад `${foo}`), а екрановані послідовності (зокрема `\n`) — ні.

{{EmbedInteractiveExample("pages/js/string-raw.html")}}

## Синтаксис

```js-nolint
String.raw(strings)
String.raw(strings, sub1)
String.raw(strings, sub1, sub2)
String.raw(strings, sub1, sub2, /* …, */ subN)

String.raw`templateString`
```

### Параметри

- `strings`
  - : Як слід сформований масивний об'єкт шаблонного літерала, подібний до `{ raw: ['foo', 'bar', 'baz'] }`. Повинен бути об'єктом зі властивістю `raw`, чиє значення – масивоподібний об'єкт з рядками.
- `sub1`, …, `subN`
  - : Містить значення для підставлення.
- `templateString`
  - : [Шаблонний літерал](/uk/docs/Web/JavaScript/Reference/Template_literals); може містити (необов'язково) вирази підставлення (`${...}`).

### Повернене значення

Необроблена рядкова форма переданого шаблонного літерала.

### Винятки

- {{jsxref("TypeError")}}
  - : Викидається тоді, коли перший аргумент не має властивості `raw`, а також коли властивість `raw` має значення `undefined` або `null`.

## Опис

Здебільшого метод `String.raw()` використовується з шаблонними літералами. Запис, який наведено першим вище, використовується дуже рідко, оскільки JavaScript-рушій сам його викликає з правильними аргументами (так само як з іншими [теговими функціями](/uk/docs/Web/JavaScript/Reference/Template_literals#tehovani-shablony)).

`String.raw()` — це єдиний вбудований тег шаблонних літералів. Він має семантику, наближену до семантики нетегованого літерала, оскільки він зчіплює докупи свої аргументи й повертає рядок. Його можна навіть самотужки реалізувати наново, за допомогою звичайного коду на JavaScript.

> [!WARNING]
> Ви не повинні викликати `String.raw` безпосередньо, як тег "ідентичності". Дивіться реалізацію такого коду в [створенні тега ідентичності](#stvorennia-teha-identychnosti).
> Коли `String.raw()` викликається з об'єктом, чия властивість `raw` не має властивості `length` або має недодатне значення `length`, то повертається порожній рядок `""`. Якщо `substitutions.length < strings.raw.length - 1` (тобто недостатньо замін для заповнення гнізд – що може трапитися з як слід сформованим шаблонним літералом), то решта гнізд заповнюється порожніми рядками.

## Приклади

### Застосування методу String.raw()

```js
String.raw`Привіт\n${2 + 3}!`;
// 'Привіт\\n5!', символ після 'Привіт' насправді
//  не є символом початку рядка,
// '\' та 'n' — це два окремі символи.

String.raw`Привіт\u000A!`;
// 'Привіт\\u000A!', так само тут, цього разу ми отримуємо символи
//  \, u, 0, 0, 0, A, 6.
// Будь-які екрановані послідовності не працюватимуть, а
// зворотні косі риски опинятимуться у виведеному рядку.
// Можна це додатково підтвердити, перевіривши властивість .length
// рядка.

const name = "Вова";
String.raw`Привіт\n${name}!`;
// 'Привіт\\nВова!', вирази підставлення опрацьовано.

String.raw`Привіт \${name}!`;
// 'Привіт \\${name}!', знак долара екранований – інтерполяції немає.
```

### Застосування String.raw вкупі з RegExp

Поєднання шаблонного літерала `String.raw` вкупі з конструктором {{jsxref("RegExp/RegExp", "RegExp()")}} дає змогу
створювати регулярні вирази з динамічними частинами (що неможливо з літералами регулярних виразів) без подвійного екранування (`\\`) послідовностей екранування у регулярних виразах (що неможливо у випадку звичайних рядкових
літералів). Також це корисно в рядках, що містять чимало скісних рисок, наприклад, шляхах до файлів і URL.

```js
// Шаблон String.raw дає змогу отримати доволі прочитний регулярний вираз для зіставлення з URL:
const reRawTemplate = new RegExp(
  String.raw`https://webdoky\.org/uk/docs/Web/JavaScript/Reference/`,
);
// Те саме з використанням літерала регулярного виразу має такий вигляд, з \/ на місці
// кожної скісної риски:
const reRegexpLiteral =
  /https:\/\/webdoky\.org\/uk\/docs\/Web\/JavaScript\/Reference\//;
// А ось те саме, записане з використанням конструктора RegExp і
// традиційного рядкового літерала, з \\. на місці кожної крапки:
const reStringLiteral = new RegExp(
  "https://webdoky\\.org/uk/docs/Web/JavaScript/Reference/",
);
// String.raw також дозволяє включати динамічні частини
function makeURLRegExp(path) {
  return new RegExp(String.raw`https://webdoky\.org/${path}`);
}
const reDynamic = makeURLRegExp("uk/docs/Web/JavaScript/Reference/");
const reWildcard = makeURLRegExp(".*");
```

### Створення тега ідентичності

Чимало інструментів по-особливому обробляє літерали, теговані певним іменем.

```js
// Частина форматувальників відформатує вміст цього літерала як HTML
const doc = html`<!doctype html>
  <html lang="uk">
    <head>
      <title>Привіт</title>
    </head>
    <body>
      <h1>Привіт, світе!</h1>
    </body>
  </html>`;
```

Хтось міг би наївно реалізувати тег `html` так:

```js
const html = String.raw;
```

Що, фактично, спрацює в вищеописаному випадку. Проте у зв'язку з тим, що `String.raw` зчіплює докупи _необроблені_ рядкові літерали, а не "зготовані", то послідовності екранування – не обробляються.

```js
const doc = html`<canvas> </canvas>`;
// "<canvas>\\n</canvas>"
```

Це може бути не те, що потрібно в випадку тега "справжньої ідентичності", коли тег – це суто засіб розмітки, що не повинен змінювати значення літерала. У такому випадку можна створити власний тег і передати "зготований" (тобто з обробленими послідовностями екранування) літеральний масив у `String.raw`, удаючи, ніби то необроблені рядки.

```js
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Частина форматувальників відформатує вміст цього літерала як HTML
const doc = html`<canvas> </canvas>`;
// "<canvas>\n</canvas>"; послідовність "\n" стає розривом рядка
```

Зверніть увагу на те, що перший аргумент – об'єкт зі властивістю `raw`, чиє значення – масивоподібний об'єкт (зі властивістю `length` та індексами – цілими числами), що представляє окремі рядки в шаблонному літералі. Решта аргументів – це заміни. Оскільки значення `raw` може бути будь-яким масивоподібним об'єктом, то воно може бути навіть рядком! Наприклад, `'test'` обробляється як `['t', 'e', 's', 't']`. Код нижче – рівносильний `` `t${0}e${1}s${2}t` ``:

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.raw` наявний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Шаблонні літерали](/uk/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Лексична граматика](/uk/docs/Web/JavaScript/Reference/Lexical_grammar)
