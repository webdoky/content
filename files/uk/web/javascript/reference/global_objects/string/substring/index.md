---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.substring
---
{{JSRef}}

Метод **`substring()`** повертає частину рядка `string` між вказаними індексами початку і кінця, або до кінця рядка — якщо кінцевий індекс не вказано.

{{EmbedInteractiveExample("pages/js/string-substring.html")}}

## Синтаксис

```js
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

Будь-яке значення аргументу, мене за `0` чи більше за `stringName.length` опрацьовується так, як наче воно дорівнювало `0` чи `stringName.length` відповідно.

Значення {{jsxref("NaN")}} в аргументі сприймається як `0`.

## Приклади

### Застосування методу substring()

Наступний приклад використовує метод `substring()` для показування символів з рядка `'Mozilla'`:

```js
let anyString = 'Mozilla'

// Показує 'M'
console.log(anyString.substring(0, 1))
console.log(anyString.substring(1, 0))

// Показує 'Mozill'
console.log(anyString.substring(0, 6))

// Показує 'lla'
console.log(anyString.substring(4))
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// Показує 'Mozilla'
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))
```

### Застосування методу substring() з властивістю довжини

Наступний приклад застосовує метод `substring()` з властивістю {{jsxref("String.length", "length")}} для вибирання останніх символів певного рядка. Ймовірно запам'ятати цей метод буде простіше, оскільки тут не потрібно знати початковий та кінцевий індекси так, як це потрібно в попередніх прикладах.

```js
// Показує 'illa' — останні 4 символи
let anyString = 'Mozilla'
let anyString4 = anyString.substring(anyString.length - 4)
console.log(anyString4)

// Показує 'zilla' — останні 5 символів
let anyString = 'Mozilla'
let anyString5 = anyString.substring(anyString.length - 5)
console.log(anyString5)
```

### Різниця між методами substring() та substr()

Є невелика різниця між методами `substring()` та {{jsxref("String.substr", "substr()")}}, тож слід бути уважним і не плутати їх.

Аргументи методу `substring()` позначають початковий та кінцевий індекси, тоді як аргументи `substr()` означають індекс початку та кількість символів, які слід включити у поверненому рядку.

На додаток, `substr()` вважається **застарілим функціоналом ECMAScript**, і може бути видаленим в майбутніх версіях, тому краще уникати його використання, якщо це можливо.

```js
let text = 'Mozilla'
console.log(text.substring(2,5))  // => "zil"
console.log(text.substr(2,3))     // => "zil"
```

### Різниця між методами substring() та slice()

Методи `substring()` та {{jsxref("String.slice", "slice()")}} — майже ідентичні, проте між ними двома є пара тонких відмінностей, здебільшого у способах роботи з від'ємними аргументами.

Метод `substring()` міняє місцями два аргументи, якщо `indexStart` більший за `indexEnd`, тобто все одно повертає рядок. Метод {{jsxref("String.slice", "slice()")}} в цьому випадку повертає порожній рядок.

```js
let text = 'Mozilla'
console.log(text.substring(5, 2))  // => "zil"
console.log(text.slice(5, 2))      // => ""
```

Якщо один чи навіть обидва аргументи від'ємні, або дорівнюють `NaN`, метод `substring()` сприймає їх так, як наче вони дорівнюють `0`.

```js
console.log(text.substring(-5, 2))  // => "Mo"
console.log(text.substring(-5, -2)) // => ""
```

Метод `slice()` також сприймає `NaN` в аргументі за `0`, проте отримавши негативні значення він рахує індекс у зворотному напрямі від кінця рядка.

```js
console.log(text.slice(-5, 2))   // => ""
console.log(text.slice(-5, -2))  // => "zil"
```

Більше прикладів роботи цього методу з від'ємними числами можна знайти на сторінці {{jsxref("String.slice", "slice()")}}.

### Заміна підрядка всередині рядка

Наступний приклад заміняє підрядок всередині рядка. Він заміняє як окремі символи, так і цілі підрядки. Виклик функції наприкінці прикладу змінює рядок `Прекрасний новий світ` на `Прекрасний новий веб`.

```js
// Заміняє рядок oldS рядком newS у цілому рядку fullS
function replaceString(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
    }
  }
  return fullS
}

replaceString('Світ', 'Веб', 'Прекрасний Новий Світ')
```

Зауважте, що цей код може спричинити нескінченний цикл, якщо `oldS` — це сам по собі підрядок `newS` — наприклад, якщо спробувати там замінити '`Світ`' рядком '`ІншийСвіт`'.

Кращий спосіб заміни рядків виглядає так:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS)
}
```

Весь код вище служить прикладом роботи з підрядками. В разі потреби замінити підрядок, в більшості випадків краще використати {{jsxref("String.prototype.replace()")}}.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
