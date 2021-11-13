---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
browser-compat: javascript.builtins.String.split
---
{{JSRef}}

Метод **`split()`** розділяє {{jsxref("String", "рядок")}} на впорядкований набір підрядків, кладе їх у масив і одразу повертає його. Розділення виконується шляхом пошуку патерну, причому патерн передається першим аргументом під час виклику методу.

{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}

## Синтаксис

```js
split()
split(separator)
split(separator, limit)
```

### Параметри

- `separator` {{optional_inline}}

  - : Патерн, який описує, в яких місцях рядок має розділитись. Розділювач `separator` може бути як простим рядком, так і {{jsxref("Global_Objects/RegExp", "регулярним виразом", "", 1)}}.

    - В найпростішому випадку, `separator` — це єдиний символ, яким і буде розділено рядок. Наприклад, рядок, який містить значення, розділені символом табуляції (TSV), може бути розібраний шляхом передачі символу табуляції як розділювача, як от `myString.split("\t")`.
    - Якщо `separator` містить декілька символів, знадобиться знайти цілу їхню послідовність, щоб розділити рядок.
    - Якщо `separator` опущено, або ж якщо він не знайшовся в рядку, повернений масив міститиме один елемент — цілий вхідний рядок.
    - Якщо `separator` знайшовся на самому початку (або в кінці) рядка, він все одно спричинить розділення. Результатом буде порожній (тобто нульової довжини) рядок, що знаходиться на першій (чи, відповідно, останній) позиції в поверненому масиві.
    - Якщо `separator` — порожній рядок (`""`), вхідна стрічка буде конвертована у масив, що складатиметься з її окремих «символів» UTF-16.

    > **Застереження:** Якщо порожній рядок (`""`) було вказано розділювачем, вхідну стрічку буде розділено **не** на _символи, зрозумілі для користувача_ ([графемні групи](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) чи юнікодні символи (кодові одиниці), а на кодові одиниці UTF-16. Це призводить до руйнації [сурогатних пар](https://unicode.org/faq/utf_bom.html#utf16-2). Подробиці у запитанні [“How do you get a string to a character array in JavaScript?” на StackOverflow](https://stackoverflow.com/a/34717402).

- `limit` {{optional_inline}}

  - : Не від'ємне ціле число, котре позначає обмеження кількості підрядків, які буде включено в повернений масив. Якщо цей параметр задано, рядок розділяється в кожному місці, де трапляється вказаний `separator`, проте зупиняється, коли в масиві опиняється вказана в `limit` кількість елементів. Будь-який залишок тексту не буде включено в масив узагалі.

    - Масив може містити менше елементів, ніж вказано в `limit`, якщо функція дійшла до кінця рядка раніше, ніж був вибраний `limit`.
    - Якщо `limit` дорівнює `0`, буде повернено `[]`.

### Повернене значення

{{jsxref("Array", "Масив")}} рядків, розділених в місцях, де в початковому рядку знаходилися значення розділювача `separator`.

## Опис

Коли метод знаходить значення `separator`, він видаляє їх з рядка і повертає окремі підрядки в масиві.

Якщо `separator` містить регулярний вираз із дужками для захоплення, то кожного разу, коли метод знаходить збіг із `separator`, результати захоплення (включно з такими, які дорівнюють `undefined`) приєднуються до поверненого масиву.

Якщо розділювач — масив, він спершу перетворюється на рядок, а вже потім використовується для розділення початкової стрічки тексту.

## Приклади

### Застосування `split()`

Якщо початковий рядок порожній, `split()` поверне масив з одним порожнім рядком замість порожнього масиву. Якщо ж обидва значення — і рядок, і розділювач — це порожні рядки, буде повернено порожній масив.

```js
const myString = ''
const splits = myString.split()

console.log(splits)

// ↪ [""]
```

В наступному прикладі оголошується функція, яка розділяє початковий рядок на масив рядків, використовуючи розділювач `separator`. Після розділення, функція записує повідомлення з початковим рядком (до розділення), використаний роздільник, кількість елементів у масиві, так самі окремі елементи масиву.

```js
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)

  console.log('Початковий рядок — ', stringToSplit)
  console.log('Розділювач — ', separator)
  console.log('Масив містить ', arrayOfStrings.length, ' елементів: ', arrayOfStrings.join(' / '))
}

const tempestString = 'Oh brave new world that has such people in it.'
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'

const space = ' '
const comma = ','

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)
```

Цей приклад видає наступний вивід:

```plain
Початковий рядок — "Oh brave new world that has such people in it."
Розділювач — " "
Масив містить 10 елементів: Oh / brave / new / world / that / has / such / people / in / it.

Початковий рядок — "Oh brave new world that has such people in it."
Розділювач — "undefined"
Масив містить 1 елементів: Oh brave new world that has such people in it.

Початковий рядок — "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
Розділювач — ","
Масив містить 12 елементів: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
```

### Видалення пробілів з рядка

В наступному прикладі, `split()` шукає нуль чи більше пробілів, за якими йде крапка з комою й знову нуль чи більше пробілів, і, коли знаходить, видаляє їх з рядка. Масив `nameList` містить результат, повернений з `split()`.

```js
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

console.log(names)

const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)

console.log(nameList)
```

Цей код записує два рядки: перший містить початкову стрічку тексту, а другий — масив із результатами.

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### Повернення обмеженої кількості розділених значень

В наступному прикладі `split()` шукає пробіли в рядку, і повертає перші три відділених значення з-поміж тих, які знаходить.

```js
const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)

console.log(splits)
```

Цей скрипт виводить наступне:

```js
["Hello", "World.", "How"]
```

### Розділення рядка за регулярним виразом `RegExp` для включення частин розділювача в результат

Якщо `separator` є регулярним виразом, який містить дужки для захоплення ` (``) `, знайдені збіги будуть також включені до масиву.

```js
const myString = 'Hello 1 word. Sentence number 2.'
const splits = myString.split(/(\d)/)

console.log(splits)
```

Цей скрипт виводить наступне:

```js
[ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> **Зауваження:** `\d` шукає збіги з [класом символів](/uk/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), що відповідає цифрам від 0 до 9.

### Перевертання рядка за допомогою `split()`

> **Застереження:** Це не дуже надійний спосіб перевернути рядок:
>
> ```js example-bad
> const str = 'asdfghjkl'
> const strReverse = str.split('').reverse().join('')
> // 'lkjhgfdsa'
>
> // split() повертає масив, до якого можна застосувати reverse() і join()
> ```
>
> Це не працює, якщо рядок містить групи графем, навіть за умови, якщо `split()` правильно обробляє юнікод. (Натомість краще використати [esrever](https://github.com/mathiasbynens/esrever), наприклад.)
>
> ```js example-bad
> const str = 'mañana mañana'
> const strReverse = str.split('').reverse().join('')
> // => "anãnam anañam" // зауважте, що перше слово містить ã замість ñ
> ```
>
> **Бонус:** за допомогою {{jsxref("Operators", "===", "#Identity_strict_equality_(===)")}} можна перевірити, чи початковий рядок був паліндромом.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
- [Застосування регулярних виразів у JavaScript](/uk/docs/Web/JavaScript/Guide/Regular_Expressions)
