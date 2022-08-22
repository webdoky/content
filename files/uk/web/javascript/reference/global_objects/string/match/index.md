---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
  - Polyfill
browser-compat: javascript.builtins.String.match
---

{{JSRef}}

Метод **`match()`** отримує результат зіставлення рядка з [регулярним виразом](/uk/docs/Web/JavaScript/Guide/Regular_Expressions).

{{EmbedInteractiveExample("pages/js/string-match.html", "shorter")}}

## Синтаксис

```js
match(regexp);
```

### Параметри

- `regexp`

  - : Об'єкт регулярного виразу, або ж будь-який об'єкт, що має метод [`Symbol.match`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match).

    Якщо аргументом `regexp` було передано об'єкт, який не є регулярним виразом і не має метода `Symbol.match`, його буде неявно перетворено на {{jsxref("RegExp")}} шляхом викликання `new RegExp(regexp)`.

    Якщо не передати функції жодного параметра і викликати метод `match()` напряму, з нього повернеться {{jsxref("Array", "масив")}} з порожнім рядком: `[""]`, тому що це еквівалентно `match(/(?:)/)`

### Повернене значення

{{jsxref("Array", "Масив")}}, вміст якого залежить від наявності чи відсутності глобального прапорця (`g`), або [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null), якщо жодного збігу знайдено не було.

- Якщо вжито прапорець `g`, буде повернено всі збіги з цілим регулярним виразом, а збіги з групами захоплення включені не будуть.
- Якщо прапорець `g` встановлено не було, повернеться лише перший повний збіг та всі пов'язані захоплені групи. В цьому випадку `match()` поверне такий само результат, як {{jsxref("RegExp.prototype.exec()")}} (масив з певними додатковими властивостями).

## Опис

Реалізація `String.prototype.match` сама по собі є вельми простою: вона просто викликає метод аргументу `Symbol.match` з рядком як першим параметром. Фактична реалізація надходить із [`RegExp.prototype[@@match]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match).

- Якщо потрібно визначити, чи рядок збігається з регулярним виразом {{jsxref("RegExp")}}, можна використати {{jsxref("RegExp.prototype.test()")}}.
- Якщо потрібен лише перший знайдений збіг, можна натомість застосувати {{jsxref("RegExp.prototype.exec()")}}.
- Якщо необхідно отримати захоплені групи та встановлено прапорець глобального пошуку, слід натомість використовувати {{jsxref("RegExp.prototype.exec()")}} чи {{jsxref("String.prototype.matchAll()")}}.

For more information about the semantics of `match()` when a regex is passed, see [`RegExp.prototype[@@match]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match).

Для отримання подробиць семантики `match()`, коли в нього передається регулярний вираз, дивіться [`RegExp.prototype[@@match]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match).

## Приклади

### Застосування match()

В наступному прикладі метод `match()` використовується для пошуку слова `"Chapter"`, за яким слідує одна чи більше цифр, за якими слідують нуль або більше груп із точки та цифри.

Регулярний вираз містить прапорець `i`, тож різниця в регістрі літер ігнорується.

```js
const str = 'За детальнішою інформацією зверніться до Розділу 3.4.5.1';
const re = /зверніться до (розділу \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);

// друкує [ "зверніться до Розділу 3.4.5.1",
//          "Розділу 3.4.5.1",
//          ".1",
//          index: 27,
//          input: 'За детальнішою інформацією зверніться до Розділу 3.4.5.1' ]

// 'зверніться до Розділу 3.4.5.1' — це повний збіг.
// 'Розділу 3.4.5.1' було витягнуто групою '(розділу \d+(\.\d)*)'.
// '.1' — це останнє значення, що було захоплено групою '(\.\d)'.
// Властивість 'index' (містить число 27) — це індекс (починається з нуля) місця, з якого починається збіг у рядку.
// Властивість 'input'  містить початковий рядок, в якому виконувався пошук збігів.
```

### Застосування прапорців глобального пошуку та ігнорування регістру з методом match()

Наступний приклад ілюструє застосування прапорців глобального пошуку та ігнорування регістру з методом `match()`. В результаті повертаються всі літери від `A` до `E`, та від `a` до `e`, кожна як окремий елемент масиву.

```js
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches = str.match(regexp);

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> **Примітка:** також зверніть увагу на метод {{jsxref("String.prototype.matchAll()")}} та [Розширений пошук з прапорцями](/uk/docs/Web/JavaScript/Guide/Regular_Expressions#pohlyblenyi-poshuk-z-poznachkamy).

### Застосування іменованих груп захоплення

У браузерах, які підтримують іменовані групи захоплення, наступний код витягне значення `"fox"` чи `"cat"` у групу, яка називається "`animal`":

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
```

### Застосування методу match() без параметрів

```js
const str = 'Ніщо не вийде з нічого.';

str.match(); // повертає [""]
```

### Використання match() з чимось, що не є регулярним виразом, шляхом реалізації @@match

Якщо об'єкт має метод `Symbol.match`, то він може використовуватися як особливий відповідник. Повернене `Symbol.match` значення стає поверненим значенням `match()`.

```js
const str = 'Хм, це цікаво.';
str.match({
  [Symbol.match](str) {
    return ['Так, це цікаво.'];
  },
}); // повертає ["Так, це цікаво."]
```

### Вживання чогось, що не є регулярним виразом, як параметра

Якщо в параметр `regexp` передається рядок або число, це значення неявно перетворюється на {{jsxref("RegExp")}} шляхом викликання `new RegExp(regexp)`.

```js
const str1 =
  'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.';
const str2 =
  'My grandfather is 65 years old and My grandmother is 63 years old.';
const str3 = 'The contract was declared null and void.';
str1.match('number'); // "number" — це рядок. Повертає ["number"]
str1.match(NaN); // NaN має тип "число". Повертає ["NaN"]
str1.match(Infinity); // тип Infinity — число. Повертає ["Infinity"]
str1.match(+Infinity); // повертає ["Infinity"]
str1.match(-Infinity); // повертає ["-Infinity"]
str2.match(65); // повертає ["65"]
str2.match(+65); // число зі знаком "+". Повертає ["65"]
str3.match(null); // повертає ["null"]
```

Це може дати неочікувані результати, якщо особливі символи не були як слід екрановані.

```js
console.log('123'.match('1.3')); // [ "123" ]
```

Є збіг, тому що `.` в регулярному виразі дає збіг з усіма символами. Щоб змусити `.` давати збіг лише з символом крапки, треба екранувати введення.

```js
console.log('123'.match('1\\.3')); // null
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.match` доступний у складі `core-js`, з виправленнями й реалізацією сучасної логіки, наприклад, підтримки `Symbol.match`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
