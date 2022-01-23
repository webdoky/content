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
browser-compat: javascript.builtins.String.match
---
{{JSRef}}

Метод **`match()`** отримує результат зіставлення _рядка_ з [регулярним виразом](/uk/docs/Web/JavaScript/Guide/Regular_Expressions).

{{EmbedInteractiveExample("pages/js/string-match.html", "shorter")}}

## Синтаксис

```js
match(regexp)
```

### Параметри

- `regexp`

  - : Об'єкт регулярного виразу.

    Якщо аргументом `regexp` було передано об'єкт, який не є регулярним виразом, його буде неявно перетворено на {{jsxref("RegExp")}} шляхом викликання `new RegExp(regexp)`.

    Якщо не передати функції жодного параметра, і викликати метод `match()` напряму, з нього повернеться {{jsxref("Array", "масив")}} з порожнім рядком: `[""]`.

### Повернене значення

{{jsxref("Array", "Масив")}}, вміст якого залежить від наявності чи відсутності глобального прапорця (`g`), або {{jsxref("null")}}: якщо жодного збігу знайдено не було.

- Якщо вжито прапорець `g`, буде повернено всі збіги з цілим регулярним виразом, окрім збігів зі групами захоплення.
- Якщо прапорець `g` встановлено не було, повернеться лише перший повний збіг та всі пов'язані захоплені групи. В цьому випадку повернений елемент також міститиме додаткові властивості, як описано нижче.

#### Додаткові властивості

Як пояснено вище, деякі результати містять додаткові властивості, які наведено нижче:

- `groups`
  - : Об'єкт з іменованими групами захоплення, де ключі — це імена груп, а значення — значення відповідної групи або {{jsxref("undefined")}}, якщо жодної іменованої групи оголошено не було. Більше інформації можна знайти в розділі [Групи та діапазони](/uk/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges).
- `index`
  - : Індекс місця, в якому було знайдено збіг.
- `input`
  - : Копія рядка, в якому виконувався пошук.

## Опис

Якщо регулярний вираз не містить прапорця `g`, метод `str.match()` поверне такий самий результат, як і {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}.

### Інші методи

- Якщо потрібно визначити, чи рядок збігається з регулярним виразом {{jsxref("RegExp")}}, можна використати {{jsxref("RegExp.prototype.test()", "RegExp.test()")}}.
- Якщо потрібен лише перший знайдений збіг, можна натомість застосувати {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}.
- Якщо необхідно отримати захоплені групи та встановлено прапорець глобального пошуку, слід натомість використовувати {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} чи {{jsxref("String.prototype.matchAll()")}}.

## Приклади

### Застосування match()

В наступному прикладі метод `match()` використовується для пошуку слова '`Chapter`', за яким слідує 1 чи більше цифр із десятковою крапкою, повторені 0 чи більше разів.

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
// '.1' — це останнє значеня, що буо захоплено групою '(\.\d)'.
// Властивість 'index' (містить число 27) — це індекс (починається з нуля) місця, з якого починається збіг у рядку.
// Властивість 'input'  містить початковий рядок, в якому виконувався пошук збігів.
```

### Застосування прапорців глобального пошуку та ігнорування регістру з методом match()

Наступний приклад ілюструє застосування прапорців глобального пошуку та ігнорування регістру з методом `match()`. В результаті повертаються всі літери від `A` до `E`, та від `a` до `e`, кожна як окремий елемент масиву.

```js
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> **Примітка:** також зверніть увагу на метод {{jsxref("String.prototype.matchAll()")}} та [Розширений пошук з прапорцями](/uk/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags).

### Застосування іменованих груп захоплення

У браузерах, які підтримують іменовані групи захоплення, наступний код витягне значення "`fox`" чи "`cat`" у групу, яка називається "`animal`":

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
```

### Застосування методу match() без параметрів

```js
const str = "Ніщо не вийде з нічого.";

str.match();   // returns [""]
```

### Вживання чогось, що не є регулярним виразом, як параметра

Якщо в параметр `regexp` передається рядок або число, це значення неявно перетворюється на {{jsxref("RegExp")}} шляхом викликання `new RegExp(regexp)`.

Якщо значення було додатним числом зі знаком `+`, `RegExp()` проігнорує знак.

```js
const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" — це рядок. Повертає ["number"]
str1.match(NaN);        // NaN має тип "число". Поверає ["NaN"]
str1.match(Infinity);   // тип Infinity — число. Повертає ["Infinity"]
str1.match(+Infinity);  // повертає ["Infinity"]
str1.match(-Infinity);  // повертає ["-Infinity"]
str2.match(65);         // повертає ["65"]
str2.match(+65);        // число зі знаком "+". Повертає ["65"]
str3.match(null);       // повертає ["null"]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
