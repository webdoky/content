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

Об'єкт **`String`** — «Рядок» — використовується для позначення послідовності символів, та роботи з ними.

## Опис

Рядки корисні для зберігання тих даних, які можна представити в текстовій формі. Деякі з найуживаніших операцій з рядками включають: визначення їхньої {{jsxref("String.length",
  "довжини")}}, збирання і з'єднання їх докупи за допомогою [операторів + та += для роботи з рядками](/uk/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators), перевірку наявності чи знаходження позиції підрядка за допомогою методу {{jsxref("String.prototype.indexOf()", "indexOf()")}}, або ж витягання певних підрядків за допомогою методу {{jsxref("String.prototype.substring()", "substring()")}}.

### Створення рядків

Рядки можна створювати як примітиви, використовуючи рядкові літерали; або ж як об'єкти, за допомогою конструктора {{jsxref("String/String", "String()")}}:

```js
const string1 = "Рядковий примітив";
const string2 = 'Також рядковий примітив';
const string3 = `І ще один рядковий примітив`;
```

```js
const string4 = new String("Об'єкт рядка");
```

Рядкові примітиви та об'єкти-рядки в більшості випадків взаємозамінні. Дивіться розділ "[Рядки-примітиви та рядки-об'єкти](#string_primitives_and_string_objects)" нижче.

Рядкові літерали позначаються одинарними або подвійними лапками — які в середовищі JavaScript опрацьовуються ідентично — або ж через символ «гравіс» <kbd>`</kbd>. Останній позначає так званий [шаблонний літерал](/uk/docs/Web/JavaScript/Reference/Template_literals) — форму рядкового літерала, яка дозволяє вставляти вирази в рядок (інтерполяція).

### Доступ до окремих символів

Існує два способи доступитися до окремого символу рядка. Перший — це метод {{jsxref("String.prototype.charAt()", "charAt()")}}:

```js
return 'cat'.charAt(1) // повертає "a"
```

Інший спосіб (який було додано в ECMAScript 5) полягає у сприйманні рядка як масивоподібного об'єкта, де кожний символ відповідає певному числовому індексу:

```js
return 'cat'[1] // повертає "a"
```

Спроба видалити символ або присвоїти йому значення під час звертання до символу за допомогою квадратних дужок не спрацює. Властивості рядка, до яких в цьому випадку отримує доступ програма, не доступні ні для запису, ні для налаштування. (Докладніше про це на сторінці {{jsxref("Object.defineProperty()")}}.)

### Порівняння рядків

У мові «C» для порівняння рядків використовується функція `strcmp()`. У JavaScript для цього існують [оператори більше та менше](/uk/docs/Web/JavaScript/Reference/Operators):

```js
let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' менше за ' + b)
} else if (a > b) {
  console.log(a + ' більше за ' + b)
} else {
  console.log(a + ' та ' + b + ' рівні.')
}
```

Подібного результату можна досягнути з методом {{jsxref("String.prototype.localeCompare()", "localeCompare()")}}, який наслідується екземплярами об'єкта `String`.

Зауважте, що `a == b` порівнює рядки `a` і `b` з урахуванням регістру. Якщо потрібно порівняти рядки без урахування регістру літер, використовуйте функцію, подібну до цієї:

```js
function isEqual(str1, str2)
{
    return str1.toUpperCase() === str2.toUpperCase()
} // isEqual
```

У цій функції використано приведення до верхнього регістру замість нижнього, через проблеми з перетворенням певних символів з кодового простору UTF-8.

### Рядки-примітиви і рядки-об'єкти

Зауважте, що JavaScript розрізняє об'єкти `String` та {{Glossary("Primitive", "примітивні значення рядків")}}. (Це справедливо також для {{jsxref("Boolean")}} і {{jsxref("Global_Objects/Number", "чисел")}}.)

Примітивними рядками є: рядкові літерали (виділені одинарними або подвійними лапками), а також рядки, повернуті в результаті викликів `String` поза контекстом конструктора (тобто виклик, виконаний без ключового слова {{jsxref("Operators/new", "new")}}). JavaScript автоматично перетворює примітиви на об'єкти `String`, додаючи таким чином можливість викликати методи об'єкту `String` на примітивах. Коли відбувається спроба викликати метод чи звернутися до властивості примітивного рядка, JavaScript автоматично обгортає примітив у виклик конструктора, і вже потім – звертається до методу чи властивості.

```js
let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // Друкує "string"
console.log(typeof s_obj)  // Друкує "object"
```

Рядкові примітиви та об'єкти типу `String` також видають різні результати під час використання {{jsxref("Global_Objects/eval", "eval()")}}. Примітиви, передані до `eval`, вважаються сирцевим кодом, тим часом – об'єкти `String` опрацьовуються як всі інші об'єкти, з поверненням об'єкту в результаті. Наприклад:

```js
let s1 = '2 + 2'              // створює рядковий примітив
let s2 = new String('2 + 2')  // створює об'єкт String
console.log(eval(s1))         // повертає число 4
console.log(eval(s2))         // повертає рядок "2 + 2"
```

З цих причин, код може ламатись в місцях, де він очікує на примітивний рядок, але натомість отримує об'єкт `String`. Хоча загалом про цю різницю хвилюватись не варто.

Об'єкт `String` можна завжди перетворити на його примітивний відповідник, використавши метод {{jsxref("String.prototype.valueOf()", "valueOf()")}}.

```js
console.log(eval(s2.valueOf()))  // повертає число 4
```

### Керівні послідовності

Спеціальні символи можна кодувати за допомогою спеціальних керівних послідовностей:

| Керівна послідовність                                                                                                                                        | Код юнікоду                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `\0`                                                                                                                                                   | Символ «null» (U+0000 NULL)                                                                                               |
| `\'`                                                                                                                                                   | Одинарні лапки (U+0027 APOSTROPHE)                                                                                           |
| `\"`                                                                                                                                                   | Подвійні лапки (U+0022 QUOTATION MARK)                                                                                       |
| `\\`                                                                                                                                                   | Зворотна коса риска (U+005C REVERSE SOLIDUS)                                                                                         |
| `\n`                                                                                                                                                   | Початок рядка (U+000A LINE FEED; LF)                                                                                             |
| `\r`                                                                                                                                                   | Повернення каретки (U+000D CARRIAGE RETURN; CR)                                                                               |
| `\v`                                                                                                                                                   | Вертикальна табуляція (U+000B LINE TABULATION)                                                                                      |
| `\t`                                                                                                                                                   | Табуляція (U+0009 CHARACTER TABULATION)                                                                                          |
| `\b`                                                                                                                                                   | Повернення на крок (U+0008 BACKSPACE)                                                                                               |
| `\f`                                                                                                                                                   | Зміна сторінки (U+000C FORM FEED)                                                                                               |
| `\uXXXX` …де `XXXX` — це рівно 4 шістнадцяткові цифри з проміжку `0000`–`FFFF`; наприклад, `\u000A` — це те саме, що `\n` (LINE FEED); `\u0021` — "`!`"           | Коди юнікоду між `U+0000` та `U+FFFF` (основна багатомовна площина юнікоду)                                    |
| `\u{X}`…`\u{XXXXXX}` …де `X`…`XXXXXX` — від 1 до 6 шістнадцяткові цифри з проміжку `0`–`10FFFF`; наприклад, `\u{A}` — це те саме, що `\n` (LINE FEED); `\u{21}` — "`!`" | Коди юнікоду між `U+0000` та `U+10FFFF` (весь юнікод загалом)                                               |
| `\xXX` …де `XX` — це рівно 2 шістнадцяткові цифри з проміжку `00`–`FF`; наприклад, `\x0A` — це те саме, що `\n` (LINE FEED); `\x21` — "`!`"                       | Коди юнікоду між `U+0000` та `U+00FF` (Основна латиниця та додаткові символи Latin-1; еквівалент набору символів ISO-8859-1) |

### Довгі рядки з літер

Інколи код може містити дуже довгі рядки. Їх можна розбити на кілька рядків у початковому коді, не зашкодивши вмісту або рядкам. Це дає змогу не залишати нескінченні рядки та не передовіряти перенесення рядків текстовому редактору. Існує два способи зробити це.

#### Спосіб 1

Можна використати оператор [+](/uk/docs/Web/JavaScript/Reference/Operators/Addition) для з'єднання докупи декількох рядків, як це показано нижче:

```js
let longString = "Це — дуже довга стрічка тексту, яку потрібно " +
                 "розбити на декілька окремих рядків, бо " +
                 "інакше цей код буде важко читати."
```

#### Спосіб 2

Можна використати обернену скісну риску (`\`) в кінці кожного рядка, щоб позначити, що стрічка продовжується на наступному рядку. Обов‘язково слід впевнитись, що після скосу немає пробілу чи якихось інших символів (окрім перенесення на новий рядок), або відступів, інакше такий запис працювати не буде.

У цій формі рядок матиме такий вигляд:

```js
let longString = "Це — дуже довга стрічка тексту, яку потрібно \
розбити на декілька окремих рядків, бо \
інакше це код буде важко читати."
```

Обидва методи дадуть в результаті ідентичні рядки.

## Конструктор

- {{jsxref("String/String", "String()")}}
  - : Створює новий об'єкт `String`. Виконує перетворення типу, якщо викликається як функція, а не конструктор, — що часто значно корисніше.

## Статичні методи

- {{jsxref("String.fromCharCode()", "String.fromCharCode(<var>num1</var> [, ...[,
    <var>numN</var>]])")}}
  - : Повертає рядок, створений з переданої послідовності значень Unicode.
- {{jsxref("String.fromCodePoint()", "String.fromCodePoint(<var>num1</var> [, ...[,
    <var>numN</var>)")}}
  - : Повертає рядок, створений з переданої послідовності кодів.
- {{jsxref("String.raw()")}}
  - : Повертає новий рядок, створений з необробленого рядка, переданого аргументом.

## Властивості екземпляра

- {{jsxref("String.prototype.length")}}
  - : Відображає довжину рядка. Призначена лише для читання.

## Методи екземпляра

- {{jsxref("String.prototype.at()", "String.prototype.at(<var>index</var>)")}}{{Experimental_Inline}}
  - : Повертає символ (рівно одну кодову одиницю UTF-16) за вказаним індексом `index`. Приймає також від'ємні числа, які позначають позицію з кінця рядка.
- {{jsxref("String.prototype.charAt()", "String.prototype.charAt(<var>index</var>)")}}
  - : Повертає символ (рівно одну кодову одиницю UTF-16) за вказаним індексом `index`.
- {{jsxref("String.prototype.charCodeAt()", "String.prototype.charCodeAt(<var>index</var>)")}}
  - : Повертає число, яке є значенням кодової одиниці UTF-16 за вказаним індексом `index`.
- {{jsxref("String.prototype.codePointAt()", "String.prototype.codePointAt(<var>pos</var>)")}}
  - : Повертає додатне ціле число — значення кодової одиниці в кодуванні UTF-16, яка знаходиться за вказаною позицією `pos`.
- {{jsxref("String.prototype.concat()", "String.prototype.concat(<var>str </var>[,
    ...<var>strN </var>])")}}
  - : Об'єднує передані дві (або більше) стрічки тексту, і повертає результат — новий рядок.
- {{jsxref("String.prototype.includes()",
    "String.prototype.includes(<var>searchString</var> [, <var>position</var>])")}}
  - : Визначає, чи рядок, на якому викликається цей метод, містить переданий підрядок `searchString`.
- {{jsxref("String.prototype.endsWith()",
    "String.prototype.endsWith(<var>searchString</var> [, <var>length</var>])")}}
  - : Визначає, чи рядок завершується символами вказаними в `searchString`.
- {{jsxref("String.prototype.indexOf()",
    "String.prototype.indexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  - : Шукає значення `searchValue` всередині об'єкта {{jsxref("String")}}, на якому викликається метод. Повертає індекс першого знайденого підрядка, або `-1`, якщо такого підрядка не було знайдено.
- {{jsxref("String.prototype.lastIndexOf()",
    "String.prototype.lastIndexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  - : Шукає значення `searchValue` всередині об'єкта {{jsxref("String")}}, на якому викликається метод. Повертає індекс останнього знайденого підрядка, або `-1`, якщо такого підрядка не було знайдено.
- {{jsxref("String.prototype.localeCompare()",
    "String.prototype.localeCompare(<var>compareString</var> [, <var>locales</var> [,
    <var>options</var>]])")}}
  - : Повертає число, яке вказує, чи переданий рядок `compareString` під час сортування повинен стояти перед, після, або є еквівалентним до початкового рядка.
- {{jsxref("String.prototype.match()", "String.prototype.match(<var>regexp</var>)")}}
  - : Використовується для зіставлення рядка із регулярним виразом `regexp`.
- {{jsxref("String.prototype.matchAll()",
    "String.prototype.matchAll(<var>regexp</var>)")}}
  - : Повертає ітератор, що містить усі збіги з переданим регулярним виразом `regexp`.
- {{jsxref("String.prototype.normalize()",
    "String.prototype.normalize([<var>form</var>])")}}
  - : Повертає нормалізовану юнікодну форму рядка, на якому викликається метод.
- {{jsxref("String.prototype.padEnd()",
    "String.prototype.padEnd(<var>targetLength</var> [, <var>padString</var>])")}}
  - : Заповнює даний рядок вмістом `padString` з кінця, і повертає новий рядок довжиною `targetLength`.
- {{jsxref("String.prototype.padStart()",
    "String.prototype.padStart(<var>targetLength</var> [, <var>padString</var>])")}}
  - : Заповнює даний рядок вмістом `padString` з початку, і повертає новий рядок довжиною `targetLength`.
- {{jsxref("String.prototype.repeat()", "String.prototype.repeat(<var>count</var>)")}}
  - : Повертає рядок, що містить вміст початкового рядка, повторений `count` разів.
- {{jsxref("String.prototype.replace()" ,
    "String.prototype.replace(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : Використовується для заміни підрядка, що збігається з `searchFor`, вмістом `replaceWith`. Аргумент `searchFor` може бути як рядком, так і регулярним виразом, а `replaceWith` може бути або рядком, або функцією.
- {{jsxref("String.prototype.replaceAll()" ,
    "String.prototype.replaceAll(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : Використовується для заміни всіх підрядків, що збігаються з `searchFor`, вмістом `replaceWith`. Аргумент `searchFor` може бути як рядком, так і регулярним виразом, а `replaceWith` може бути або рядком, або функцією.
- {{jsxref("String.prototype.search()",
    "String.prototype.search(<var>regexp</var>)")}}
  - : Шукає збіги з регулярним виразом `regexp` у рядку, на якому було викликано метод.
- {{jsxref("String.prototype.slice()", "String.prototype.slice(<var>beginIndex</var>[,
    <var>endIndex</var>])")}}
  - : Видобуває частину рядка і повертає її як новий рядок.
- {{jsxref("String.prototype.split()", "String.prototype.split([<var>sep</var> [,
    <var>limit</var>] ])")}}
  - : Повертає масив рядків, отриманих розділенням початкового рядка в усіх точках входження підрядка `sep`.
- {{jsxref("String.prototype.startsWith()",
    "String.prototype.startsWith(<var>searchString</var> [, <var>length</var>])")}}
  - : Визначає, чи рядок, на якому було викликано метод, починається послідовністю символів `searchString`.
- {{jsxref("String.prototype.substring()",
    "String.prototype.substring(<var>indexStart</var> [, <var>indexEnd</var>])")}}
  - : Повертає новий рядок, що містить символи початкового рядка, взяті починаючи зі вказаного індексу старту, і до вказаного індексу кінця (або до кінця початкового рядка, якщо індекс кінця опущений).
- {{jsxref("String.prototype.toLocaleLowerCase()",
    "String.prototype.toLocaleLowerCase( [<var>locale</var>, ...<var>locales</var>])")}}

  - : Повертає символи з початкового рядка, переведені в нижній регістр з урахуванням поточної активної локалі.

    Для більшості мов результат виконання цієї функції буде ідентичним до {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()",
    "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}

  - : Повертає символи з початкового рядка, переведені в верхній регістр з урахуванням поточної активної локалі.

    Для більшості мов результат виконання цієї функції буде ідентичним до {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Повертає значення рядка, на якому було викликано метод, переведене у нижній регістр.
- {{jsxref("String.prototype.toString()")}}
  - : Повертає рядок — відповідник до вказаного об'єкта. Заміщує метод {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Повертає значення рядка, на якому було викликано метод, переведене у верхній регістр.
- {{jsxref("String.prototype.trim()")}}
  - : Обрізає пробільні символи на початку та в кінці рядка. Частина стандарту ECMAScript 5.
- {{jsxref("String.prototype.trimStart()")}}
  - : Обрізає пробільні символи на початку рядка.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Обрізає пробільні символи в кінці рядка.
- {{jsxref("String.prototype.valueOf()")}}
  - : Повертає примітив — значення вказаного об'єкта. Заміщує метод {{jsxref("Object.prototype.valueOf()")}}.
- {{jsxref("String.prototype.@@iterator()")}}
  - : Повертає новий об'єкт-ітератор, який перебирає всі кодові одиниці значення рядка, повертаючи кожну з них як окремий рядок.

## Методи для обгортання в HTML

> **Застереження:** Застарілі. Уникайте вживання цих методів.
>
> Вони мають обмежене застосування, оскільки надають лише підмножину наявних HTML-тегів та атрибутів.

- {{jsxref("String.prototype.anchor()")}}
  - : {{htmlattrxref("name", "a", "&lt;a name=\"name\"&gt;")}} (ціль для гіперпосилань)
- {{jsxref("String.prototype.big()")}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}}
  - : {{HTMLElement("blink")}}
- {{jsxref("String.prototype.bold()")}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}}
  - : {{htmlattrxref("color", "font", "&lt;font color=\"color\"&gt;")}}
- {{jsxref("String.prototype.fontsize()")}}
  - : {{htmlattrxref("size", "font", "&lt;font size=\"size\"&gt;")}}
- {{jsxref("String.prototype.italics()")}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}}
  - : {{htmlattrxref("href", "a", "&lt;a href=\"url\"&gt;")}} (посилання на URL)
- {{jsxref("String.prototype.small()")}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}}
  - : {{HTMLElement("sup")}}

## Приклади

### Перетворення рядків

Можна використовувати `String` як більш надійну альтернативу методу {{jsxref("String.prototype.toString()", "toString()")}}, оскільки це працює навіть під час використання зі значеннями {{jsxref("null")}} та {{jsxref("undefined")}}. Наприклад:

```js
var nullVar = null;
nullVar.toString();       // TypeError: nullVar is null
String(nullVar);          // "null"

var undefinedVar;
undefinedVar.toString();  // TypeError: undefinedVar is undefined
String(undefinedVar);     // "undefined"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Настанови з JavaScript — форматування тексту](/uk/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
- {{domxref("DOMString")}}
- [Бінарні рядки](/uk/docs/Web/API/DOMString/Binary)
