---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.substring
---

{{JSRef}}

Метод **`substring()`** (підрядок) значень {{jsxref("String")}} повертає частину свого рядка від початкового (включно) і до кінцевого індексу (не включно), або до кінця рядка, якщо кінцевий індекс не задано.

{{EmbedInteractiveExample("pages/js/string-substring.html")}}

## Синтаксис

```js-nolint
substring(indexStart)
substring(indexStart, indexEnd)
```

### Параметри

- `indexStart`
  - : Індекс першого символу, який буде включено до поверненого підрядка.
- `indexEnd` {{optional_inline}}
  - : Індекс першого символу, який буде виключено з поверненого підрядка.

### Повернене значення

Новий рядок, що містить вказану частину початкового рядка.

## Опис

Метод `substring()` вибирає символи, починаючи від `indexStart` і аж до (_проте не включно з_) `indexEnd`. Зокрема:

- Якщо параметр `indexEnd` опущено, метод `substring()` вибирає символи до кінця рядка.
- Якщо переданий `indexStart` дорівнює значенню параметра `indexEnd`, метод `substring()` поверне порожній рядок.
- Якщо `indexStart` більший за `indexEnd`, то результат виконання `substring()` виглядатиме так, наче ці два аргументи поміняли місцями. Докладніше про це в прикладі нижче.

Будь-яке значення аргументу, менше за `0` чи більше за `stringName.length` опрацьовується так, як наче воно дорівнювало `0` чи `stringName.length` відповідно.

Значення {{jsxref("NaN")}} в аргументі сприймається як `0`.

## Приклади

### Застосування методу substring()

Наступний приклад використовує метод `substring()` для показування символів з рядка `'Mozilla'`:

<!-- cSpell:ignore Mozill -->

```js
const anyString = "Mozilla";

console.log(anyString.substring(0, 1)); // 'M'
console.log(anyString.substring(1, 0)); // 'M'
console.log(anyString.substring(0, 6)); // 'Mozill'
console.log(anyString.substring(4)); // 'lla'
console.log(anyString.substring(4, 7)); // 'lla'
console.log(anyString.substring(7, 4)); // 'lla'
console.log(anyString.substring(0, 7)); // 'Mozilla'
console.log(anyString.substring(0, 10)); // 'Mozilla'
```

### Застосування методу substring() з властивістю довжини

Наступний приклад застосовує метод `substring()` з властивістю {{jsxref("String/length", "length")}} для вибирання останніх символів певного рядка. Ймовірно запам'ятати цей метод буде простіше аніж попередні приклади, оскільки тут не потрібно знати початковий та кінцевий індекси.

<!-- cSpell:ignore illa zilla -->

```js
const text = "Mozilla";
// Бере 4 останні символи рядка
console.log(text.substring(text.length - 4)); // друкує "illa"
// Бере 5 останніх символів рядка
console.log(text.substring(text.length - 5)); // друкує "zilla"
```

### Різниця між методами substring() та substr()

Є невеликі відмінності між методами `substring()` та {{jsxref("String/substr", "substr()")}}, тож слід бути уважними й не плутати їх.

- Двома параметрами `substr()` є `start` (початок) і `length` (довжина), натомість в `substring()` це `start` (початок) і `end` (кінець).
- В `substr()` індекс `start` рахуватиметься з кінця рядка, якщо він від'ємний, натомість в `substring()` від'ємний `start` буде зведений до `0`.
- Від'ємні довжини в `substr()` еквівалентні нулю, натомість `substring()` переставить індекси місцями, якщо `end` менший за `start`.

На додаток, `substr()` вважається _успадкованим функціоналом ECMAScript_, тому краще уникати його використання, якщо це можливо.

```js
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"
```

### Різниця між методами substring() та slice()

Методи `substring()` та {{jsxref("String/slice", "slice()")}} — майже ідентичні, проте між ними двома є кілька тонких відмінностей, здебільшого у способах роботи з від'ємними аргументами.

Метод `substring()` міняє місцями два аргументи, якщо `indexStart` більший за `indexEnd`, тобто все одно повертає рядок. Метод {{jsxref("String/slice", "slice()")}} в цьому випадку повертає порожній рядок.

```js
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
```

Якщо один чи навіть обидва аргументи від'ємні, або дорівнюють `NaN`, метод `substring()` сприймає їх так, як наче вони дорівнюють `0`.

```js
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
```

Метод `slice()` також сприймає `NaN` в аргументі за `0`, проте отримавши негативні значення він рахує індекс у зворотному напрямі від кінця рядка.

```js
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"
```

Більше прикладів роботи цього методу з від'ємними числами можна знайти на сторінці {{jsxref("String/slice", "slice()")}}.

### Заміна підрядка всередині рядка

Наступний приклад заміняє підрядок всередині рядка. Він заміняє як окремі символи, так і цілі підрядки. Виклик функції наприкінці прикладу створює рядок `Прекрасний новий веб` на основі вихідного `Прекрасний новий світ`.

```js
// Заміняє рядок oldS рядком newS у цілому рядку fullS
function replaceString(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) === oldS) {
      fullS =
        fullS.substring(0, i) +
        newS +
        fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("Світ", "Веб", "Прекрасний Новий Світ");
```

Зауважте, що цей код може спричинити нескінченний цикл, якщо `oldS` — це сам по собі підрядок `newS` — наприклад, якщо спробувати там замінити '`Світ`' рядком '`ІншийСвіт`'.

Кращий спосіб заміни рядків має такий вигляд:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Весь код вище служить прикладом роботи з підрядками. В разі потреби замінити підрядок, в більшості випадків, краще використати {{jsxref("String.prototype.replace()")}}.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
