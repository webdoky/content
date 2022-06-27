---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Reference
  - String
browser-compat: javascript.builtins.String
---

{{JSRef}}

Об'єкт **`String`** — «Рядок» — використовується для позначення послідовності символів та роботи з ними.

## Опис

Рядки корисні для зберігання тих даних, які можна представити в текстовій формі. Деякі з найуживаніших операцій з рядками включають: визначення їхньої {{jsxref("String.length",
  "довжини")}}, збирання і з'єднання їх докупи за допомогою
[операторів + та += для роботи з рядками](/uk/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators), перевірку наявності чи знаходження позиції підрядка за допомогою
методу {{jsxref("String.prototype.indexOf()", "indexOf()")}}, або ж витягання певних підрядків за допомогою методу {{jsxref("String.prototype.substring()", "substring()")}}.

### Створення рядків

Рядки можна створювати як примітиви, використовуючи рядкові літерали; або ж як об'єкти – за допомогою конструктора {{jsxref("String/String", "String()")}}:

```js
<!-- markdownlint-disable-next-line -->
const string1 = "Рядковий примітив";
const string2 = 'Також рядковий примітив';
const string3 = `І ще один рядковий примітив`;
```

```js
const string4 = new String("Об'єкт рядка");
```

Рядкові примітиви та об'єкти-рядки поділяють значну частину поведінки, але мають певні важливі відмінності та каверзи.
Дивіться розділ "[Рядки-примітиви та рядки-об'єкти](#riadky-prymityvy-i-riadky-obiekty)" нижче.

Рядкові літерали позначаються одинарними або подвійними лапками — які в середовищі JavaScript опрацьовуються ідентично — або ж через символ «гравіс» <kbd>`</kbd>. Останній позначає так званий [шаблонний літерал](/uk/docs/Web/JavaScript/Reference/Template_literals) — форму рядкового літерала, яка дає змогу вставляти вирази в рядок (інтерполяція).

### Доступ до окремих символів

Існує два способи доступитися до окремого символу рядка. Перший — це метод {{jsxref("String.prototype.charAt()", "charAt()")}}:

```js
return 'cat'.charAt(1); // повертає "a"
```

Інший спосіб (який було додано в ECMAScript 5) полягає у розгляді рядка як масивоподібного об'єкта, де кожний символ відповідає певному числовому індексу:

```js
return 'cat'[1]; // повертає "a"
```

Спроба видалити символ або присвоїти йому значення під час звертання до символу за допомогою квадратних дужок не спрацює. Властивості рядка, до яких в цьому випадку отримує доступ програма, не доступні ні для запису, ні для налаштування. (Докладніше про це на сторінці {{jsxref("Object.defineProperty()")}}.)

### Порівняння рядків

У мові «C» для порівняння рядків використовується функція `strcmp()`. У JavaScript для цього існують [оператори більше та менше](/uk/docs/Web/JavaScript/Reference/Operators):

```js
let a = 'a';
let b = 'b';
if (a < b) {
  // true
  console.log(a + ' менше за ' + b);
} else if (a > b) {
  console.log(a + ' більше за ' + b);
} else {
  console.log(a + ' та ' + b + ' рівні.');
}
```

Подібного результату можна досягнути з методом {{jsxref("String.prototype.localeCompare()", "localeCompare()")}}, який успадковується екземплярами об'єкта `String`.

Зауважте, що `a == b` порівнює рядки `a` і `b` з урахуванням регістру. Якщо потрібно порівняти рядки без урахування регістру літер, використовуйте функцію, подібну до цієї:

```js
function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
} // isEqual
```

У цій функції використано приведення до верхнього регістру замість нижнього, через проблеми з перетворенням певних символів з кодового простору UTF-8.

### Рядки-примітиви і рядки-об'єкти

Зауважте, що JavaScript розрізняє об'єкти `String` та {{Glossary("Primitive", "примітивні значення рядків")}}. (Це справедливо також для {{jsxref("Boolean", "булевих значень")}} і {{jsxref("Global_Objects/Number", "чисел")}}.)

Рядкові літерали (виділені одинарними або подвійними лапками), а також рядки, повернуті з викликів `String` без контексту конструктора (тобто викликів, виконаних без ключового слова {{jsxref("Operators/new", "new")}}), є рядками-примітивами. Коли відбувається спроба викликати метод чи звернутися до властивості примітивного рядка, JavaScript автоматично обгортає примітив у виклик конструктора, і вже потім – на об‘єкті-обгортці звертається до методу чи властивості.

```js
let s_prim = 'foo';
let s_obj = new String(s_prim);

console.log(typeof s_prim); // Друкує "string"
console.log(typeof s_obj); // Друкує "object"
```

> **Застереження:** Слід утримуватися від використання `String` як конструктора.

Рядкові примітиви та об'єкти типу `String` також видають різні результати під час використання {{jsxref("Global_Objects/eval", "eval()")}}. Примітиви, передані до `eval`, вважаються вихідним кодом; натомість об'єкти `String` опрацьовуються як всі інші об'єкти, із поверненням об'єкту в результаті. Наприклад:

```js
let s1 = '2 + 2'; // створює рядковий примітив
let s2 = new String('2 + 2'); // створює об'єкт String
console.log(eval(s1)); // повертає число 4
console.log(eval(s2)); // повертає рядок "2 + 2"
```

Таким чином, код може ламатись в місцях, де очікується примітивний рядок, але натомість приходить об'єкт `String`. Хоча у більшості випадків про цю різницю хвилюватись не варто.

Об'єкт `String` можна завжди перетворити на його примітивний відповідник, використавши метод {{jsxref("String.prototype.valueOf()", "valueOf()")}}.

```js
console.log(eval(s2.valueOf())); // повертає число 4
```

### Керівні послідовності

Спеціальні символи можна кодувати за допомогою спеціальних керівних послідовностей:

| Керівна послідовність                                                                                                                                                   | Код юнікоду                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `\0`                                                                                                                                                                    | Символ «null» (U+0000 NULL)                                                                                                  |
| `\'`                                                                                                                                                                    | Одинарні лапки (U+0027 APOSTROPHE)                                                                                           |
| `\"`                                                                                                                                                                    | Подвійні лапки (U+0022 QUOTATION MARK)                                                                                       |
| `\\`                                                                                                                                                                    | Зворотна коса риска (U+005C REVERSE SOLIDUS)                                                                                 |
| `\n`                                                                                                                                                                    | Початок рядка (U+000A LINE FEED; LF)                                                                                         |
| `\r`                                                                                                                                                                    | Повернення каретки (U+000D CARRIAGE RETURN; CR)                                                                              |
| `\v`                                                                                                                                                                    | Вертикальна табуляція (U+000B LINE TABULATION)                                                                               |
| `\t`                                                                                                                                                                    | Табуляція (U+0009 CHARACTER TABULATION)                                                                                      |
| `\b`                                                                                                                                                                    | Повернення на крок (U+0008 BACKSPACE)                                                                                        |
| `\f`                                                                                                                                                                    | Зміна сторінки (U+000C FORM FEED)                                                                                            |
| `\uXXXX` …де `XXXX` — це рівно 4 шістнадцяткові цифри з проміжку `0000`–`FFFF`; наприклад, `\u000A` — це те саме, що `\n` (LINE FEED); `\u0021` — "`!`"                 | Коди юнікоду між `U+0000` та `U+FFFF` (основна багатомовна площина юнікоду)                                                  |
| `\u{X}`…`\u{XXXXXX}` …де `X`…`XXXXXX` — від 1 до 6 шістнадцяткові цифри з проміжку `0`–`10FFFF`; наприклад, `\u{A}` — це те саме, що `\n` (LINE FEED); `\u{21}` — "`!`" | Коди юнікоду між `U+0000` та `U+10FFFF` (весь юнікод загалом)                                                                |
| `\xXX` …де `XX` — це рівно 2 шістнадцяткові цифри з проміжку `00`–`FF`; наприклад, `\x0A` — це те саме, що `\n` (LINE FEED); `\x21` — "`!`"                             | Коди юнікоду між `U+0000` та `U+00FF` (Основна латиниця та додаткові символи Latin-1; еквівалент набору символів ISO-8859-1) |

### Довгі рядки з літер

Інколи код може містити дуже довгі рядки. Їх можна розбити на кілька рядків у вихідному коді, не зашкодивши вмісту або рядкам. Це дає змогу не залишати нескінченні рядки та не покладати перенесення рядків на текстовий редактор. Існують два способи зробити це.

#### Спосіб 1

Можна використати оператор [+](/uk/docs/Web/JavaScript/Reference/Operators/Addition) для з'єднання докупи декількох рядків, як це показано нижче:

```js
let longString =
  'Це — дуже довга стрічка тексту, яку потрібно ' +
  'розбити на декілька окремих рядків, бо ' +
  'інакше цей код буде важко читати.';
```

#### Спосіб 2

Можна використати обернену скісну риску (`\`) в кінці кожного рядка, щоб позначити, що стрічка продовжується на наступному рядку. Обов‘язково слід впевнитись, що після скосу немає пробілу чи якихось інших символів (окрім перенесення на новий рядок), або відступів, інакше такий запис працювати не буде.

У цій формі рядок матиме такий вигляд:

```js
let longString =
  'Це — дуже довга стрічка тексту, яку потрібно \
розбити на декілька окремих рядків, бо \
інакше це код буде важко читати.';
```

Обидва методи дадуть в результаті ідентичні рядки.

## Конструктор

- {{jsxref("String/String", "String()")}}
  - : Створює новий об'єкт `String`. Виконує перетворення типу, якщо викликається як функція, а не конструктор, — що часто значно корисніше.

## Статичні методи

- {{jsxref("String.fromCharCode()", "String.fromCharCode(<var>num1</var> [, ...[,
    <var>numN</var>]])")}} (із кода символу)
  - : Повертає рядок, створений з переданої послідовності юнікодних значень.
- {{jsxref("String.fromCodePoint()", "String.fromCodePoint(<var>num1</var> [, ...[,
    <var>numN</var>)")}} (із кодової одиниці)
  - : Повертає рядок, створений з переданої послідовності кодів.
- {{jsxref("String.raw()")}} (необроблений)
  - : Повертає новий рядок, створений з необробленого рядка, переданого аргументом.

## Властивості екземпляра

- {{jsxref("String.prototype.length")}} (довжина)
  - : Відображає довжину рядка. Призначена лише для читання.

## Методи екземпляра

- {{jsxref("String.prototype.at()", "String.prototype.at(<var>index</var>)")}} (на (позиції)) {{Experimental_Inline}}
  - : Повертає символ (рівно одну кодову одиницю UTF-16) за вказаним індексом `index`. Приймає також від'ємні числа, які позначають позицію з кінця рядка.
- {{jsxref("String.prototype.charAt()", "String.prototype.charAt(<var>index</var>)")}} (символ на (позиції))
  - : Повертає символ (рівно одну кодову одиницю UTF-16) за вказаним індексом `index`.
- {{jsxref("String.prototype.charCodeAt()", "String.prototype.charCodeAt(<var>index</var>)")}} (код символу на (позиції))
  - : Повертає число, яке є значенням кодової одиниці UTF-16 за вказаним індексом `index`.
- {{jsxref("String.prototype.codePointAt()", "String.prototype.codePointAt(<var>pos</var>)")}} (кодова одиниця на (позиції))
  - : Повертає додатне ціле число — значення кодової одиниці в кодуванні UTF-16, яка знаходиться за вказаною позицією `pos`.
- {{jsxref("String.prototype.concat()", "String.prototype.concat(<var>str </var>[,
    ...<var>strN </var>])")}} (з‘єднати)
  - : Об'єднує передані дві (або більше) стрічки тексту, і повертає результат — новий рядок.
- {{jsxref("String.prototype.includes()",
    "String.prototype.includes(<var>searchString</var> [, <var>position</var>])")}} (включає)
  - : Визначає, чи рядок, на якому викликається цей метод, містить переданий підрядок `searchString`.
- {{jsxref("String.prototype.endsWith()",
    "String.prototype.endsWith(<var>searchString</var> [, <var>length</var>])")}} (закінчується на)
  - : Визначає, чи рядок завершується символами вказаними в `searchString`.
- {{jsxref("String.prototype.indexOf()",
    "String.prototype.indexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}} (індекс (підрядка))
  - : Шукає значення `searchValue` всередині об'єкта {{jsxref("String")}}, на якому викликається метод. Повертає індекс першого знайденого підрядка, або `-1`, якщо такого підрядка не було знайдено.
- {{jsxref("String.prototype.lastIndexOf()", (останній індекс (підрядка))
    "String.prototype.lastIndexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  - : Шукає значення `searchValue` всередині об'єкта {{jsxref("String")}}, на якому викликається метод. Повертає індекс останнього знайденого підрядка, або `-1`, якщо такого підрядка не було знайдено.
- {{jsxref("String.prototype.localeCompare()",
    "String.prototype.localeCompare(<var>compareString</var> [, <var>locales</var> [,
    <var>options</var>]])")}} (порівняти згідно з локаллю)
  - : Повертає число, яке вказує, чи переданий рядок `compareString` під час сортування повинен стояти перед, після, або є еквівалентним до початкового рядка.
- {{jsxref("String.prototype.match()", "String.prototype.match(<var>regexp</var>)")}} (зіставити)
  - : Використовується для зіставлення рядка із регулярним виразом `regexp`.
- {{jsxref("String.prototype.matchAll()",
    "String.prototype.matchAll(<var>regexp</var>)")}} (зіставити повністю)
  - : Повертає ітератор, що містить усі збіги з переданим регулярним виразом `regexp`.
- {{jsxref("String.prototype.normalize()",
    "String.prototype.normalize([<var>form</var>])")}} (нормалізувати)
  - : Повертає нормалізовану юнікодну форму рядка, на якому викликається метод.
- {{jsxref("String.prototype.padEnd()",
    "String.prototype.padEnd(<var>targetLength</var> [, <var>padString</var>])")}} (заповнити кінець)
  - : Заповнює даний рядок вмістом `padString` з кінця, і повертає новий рядок довжиною `targetLength`.
- {{jsxref("String.prototype.padStart()",
    "String.prototype.padStart(<var>targetLength</var> [, <var>padString</var>])")}} (заповнити початок)
  - : Заповнює даний рядок вмістом `padString` з початку, і повертає новий рядок довжиною `targetLength`.
- {{jsxref("String.prototype.repeat()", "String.prototype.repeat(<var>count</var>)")}} (повторювати)
  - : Повертає рядок, що містить вміст початкового рядка, повторений `count` разів.
- {{jsxref("String.prototype.replace()" ,
    "String.prototype.replace(<var>searchFor</var>, <var>replaceWith</var>)")}} (замінити)
  - : Використовується для заміни підрядка, що збігається з `searchFor`, вмістом `replaceWith`. Аргумент `searchFor` може бути як рядком, так і регулярним виразом, а `replaceWith` може бути або рядком, або функцією.
- {{jsxref("String.prototype.replaceAll()" ,
    "String.prototype.replaceAll(<var>searchFor</var>, <var>replaceWith</var>)")}} (замінити усі (входження))
  - : Використовується для заміни всіх підрядків, що збігаються з `searchFor`, вмістом `replaceWith`. Аргумент `searchFor` може бути як рядком, так і регулярним виразом, а `replaceWith` може бути або рядком, або функцією.
- {{jsxref("String.prototype.search()",
    "String.prototype.search(<var>regexp</var>)")}} (шукати)
  - : Шукає збіги з регулярним виразом `regexp` у рядку, на якому було викликано метод.
- {{jsxref("String.prototype.slice()", "String.prototype.slice(<var>beginIndex</var>[,
    <var>endIndex</var>])")}} (вирізати скибку, зріз)
  - : Видобуває частину рядка і повертає її як новий рядок.
- {{jsxref("String.prototype.split()", "String.prototype.split([<var>sep</var> [,
    <var>limit</var>] ])")}} (розділити на частини)
  - : Повертає масив рядків, отриманих розділенням початкового рядка в усіх точках входження підрядка `sep`.
- {{jsxref("String.prototype.startsWith()",
    "String.prototype.startsWith(<var>searchString</var> [, <var>length</var>])")}} (починається (підрядком))
  - : Визначає, чи рядок, на якому було викликано метод, починається послідовністю символів `searchString`.
- {{jsxref("String.prototype.substring()",
    "String.prototype.substring(<var>indexStart</var> [, <var>indexEnd</var>])")}} (підрядок)
  - : Повертає новий рядок, що містить символи початкового рядка, взятих починаючи з вказаного індексу (або з-поміж індексів, якщо було вказано обидва).
- {{jsxref("String.prototype.toLocaleLowerCase()",
    "String.prototype.toLocaleLowerCase( [<var>locale</var>, ...<var>locales</var>])")}} (до нижнього регістру згідно з локаллю)

  - : Повертає символи з початкового рядка, переведені в нижній регістр з урахуванням поточної активної локалі.

    Для більшості мов результат виконання цієї функції буде ідентичним до {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()",
    "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}} (до верхнього регістру згідно з локаллю)

  - : Повертає символи з початкового рядка, переведені в верхній регістр з урахуванням поточної активної локалі.

    Для більшості мов результат виконання цієї функції буде ідентичним до {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}} (до нижнього регістру)
  - : Повертає значення рядка, на якому було викликано метод, переведене у нижній регістр.
- {{jsxref("String.prototype.toString()")}} (до рядка)
  - : Повертає рядок — відповідник до вказаного об'єкта. Заміщує метод {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}} (до верхнього регістру)
  - : Повертає значення рядка, на якому було викликано метод, переведене у верхній регістр.
- {{jsxref("String.prototype.trim()")}} (підрізати)
  - : Обрізає пробільні символи на початку та в кінці рядка. Частина стандарту ECMAScript 5.
- {{jsxref("String.prototype.trimStart()")}} (підрізати початок)
  - : Обрізає пробільні символи на початку рядка.
- {{jsxref("String.prototype.trimEnd()")}} (підрізати кінець)
  - : Обрізає пробільні символи в кінці рядка.
- {{jsxref("String.prototype.valueOf()")}} (значення (об‘єкта))
  - : Повертає примітив — значення вказаного об'єкта. Заміщує метод {{jsxref("Object.prototype.valueOf()")}}.
- {{jsxref("String.prototype.@@iterator()")}}
  - : Повертає новий об'єкт-ітератор, який перебирає всі кодові одиниці значення рядка, повертаючи кожну з них як окремий рядок.

## Методи для обгортання в HTML

> **Застереження:** Застарілі. Уникайте вживання цих методів.
>
> Вони мають обмежене застосування, оскільки надають лише підмножину наявних HTML-тегів та атрибутів.

- {{jsxref("String.prototype.anchor()")}} (якір)
  - : {{htmlattrxref("name", "a", "&lt;a name=\"name\"&gt;")}} (ціль для гіперпосилань)
- {{jsxref("String.prototype.big()")}} (великий)
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}} (блимання)
  - : {{HTMLElement("blink")}}
- {{jsxref("String.prototype.bold()")}} (грубий)
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}} (фіксований)
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}} (колір шрифту)
  - : {{htmlattrxref("color", "font", "&lt;font color=\"color\"&gt;")}}
- {{jsxref("String.prototype.fontsize()")}} (розмір шрифту)
  - : {{htmlattrxref("size", "font", "&lt;font size=\"size\"&gt;")}}
- {{jsxref("String.prototype.italics()")}} (курсив)
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}} (посилання)
  - : {{htmlattrxref("href", "a", "&lt;a href=\"url\"&gt;")}} (посилання на URL)
- {{jsxref("String.prototype.small()")}} (дрібний)
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} (викреслений)
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} (підрядковий)
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} (надрядковий)
  - : {{HTMLElement("sup")}}

## Приклади

### Перетворення рядків

Можна використовувати `String` як більш надійну альтернативу методу {{jsxref("String.prototype.toString()", "toString()")}}, оскільки це працює навіть під час використання зі значеннями {{jsxref("null")}} та {{jsxref("undefined")}}. Наприклад:

```js
const nullVar = null;
nullVar.toString(); // TypeError: nullVar is null
String(nullVar); // "null"

const undefinedVar;
undefinedVar.toString(); // TypeError: undefinedVar is undefined
String(undefinedVar); // "undefined"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Настанови з JavaScript — форматування тексту](/uk/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
