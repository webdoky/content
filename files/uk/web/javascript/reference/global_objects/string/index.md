---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
page-type: javascript-class
browser-compat: javascript.builtins.String
---

{{JSRef}}

Об'єкт **`String`** — «Рядок» — використовується для представлення та обробки послідовностей символів.

## Опис

Рядки корисні для зберігання тих даних, які можна представити в текстовій формі. Серед найуживаніших операцій з рядками: визначення їхньої {{jsxref("String/length", "довжини")}}, збирання і зчеплення їх докупи за допомогою [рядкових операторів `+` та `+=`](/uk/docs/Web/JavaScript/Guide/Expressions_and_operators#riadkovi-operatory), перевірку наявності чи знаходження позиції підрядка за допомогою методу {{jsxref("String/indexOf", "indexOf()")}} та витягання певних підрядків за допомогою методу {{jsxref("String/substring", "substring()")}}.

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

Рядкові примітиви та об'єкти-рядки поділяють значну частину своєї поведінки, але мають певні важливі відмінності та каверзи. Дивіться розділ "[Рядки-примітиви та рядки-об'єкти](#riadky-prymityvy-i-riadky-obiekty)" нижче.

Рядкові літерали позначаються одинарними або подвійними лапками — які в середовищі JavaScript опрацьовуються ідентично — або ж через символ «гравіс» <kbd>`</kbd>. Останній позначає так званий [шаблонний літерал](/uk/docs/Web/JavaScript/Reference/Template_literals) — форму рядкового літерала, яка дає змогу вставляти вирази в рядок (інтерполяція). Більше інформації про запис рядкових літералів – у [лексичній граматиці](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#riadkovi-literaly).

### Доступ до окремих символів

Існують два способи доступитися до окремого символу рядка. Перший — це метод {{jsxref("String/charAt", "charAt()")}}:

```js
"cat".charAt(1); // дає значення "a"
```

Інший спосіб (який було додано в ECMAScript 5) полягає у розгляді рядка як масивоподібного об'єкта, де кожний символ відповідає певному числовому індексу:

```js
"cat"[1]; // дає значення "a"
```

Спроба видалити символ або присвоїти йому значення під час звертання до символу за допомогою квадратних дужок – не спрацює. Властивості рядка, до яких в цьому випадку отримує доступ програма, не доступні ні для запису, ні для налаштування. (Докладніше про це на сторінці {{jsxref("Object.defineProperty()")}}.)

### Порівняння рядків

Для порівняння рядків слід використовувати [оператори більше та менше](/uk/docs/Web/JavaScript/Reference/Operators):

```js
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} менше за ${b}`);
} else if (a > b) {
  console.log(`${a} більше за ${b}`);
} else {
  console.log(`${a} та ${b} – рівні.`);
}
```

Зверніть увагу, що всі оператори порівняння, включно з [`===`](/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality) і [`==`](/uk/docs/Web/JavaScript/Reference/Operators/Equality), порівнюють рядки з урахуванням регістру. Загальноприйнятний спосіб порівнювати рядки без урахування регістру – переводити обидва, перед їх порівнянням, до одного регістру (вищого чи нижчого).

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Вибір того, чи перетворювати з [`toUpperCase()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), чи з [`toLowerCase()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase), є здебільшого довільним, і жоден з двох варіантів не має цілковитої надійності поза межами латинського алфавіту. Наприклад, і німецьку літеру `ß`, і літери `ss` `toUpperCase()` перетворює на `SS`, тим часом турецька літера `ı` може помилково бути заявлена `toLowerCase()` як нерівна `I`, якщо явно не використати [`toLocaleLowerCase("tr")`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase).

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();
areEqualInUpperCase("ß", "ss"); // true; повинно бути false
areEqualInLowerCase("ı", "I"); // false; повинно бути true
```

Надійне рішення з урахуванням локалі для перевірки нечутливої до регістру рівності – застосовувати API {{jsxref("Intl.Collator")}} чи метод рядка [`localeCompare()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare), – вони поділяють однаковий інтерфейс, – зі значенням опції [`sensitivity`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) `"accent"` чи `"base"`.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;
areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Метод `localeCompare()` дає змогу порівнювати рядки у подібний до `strcmp()` спосіб: дає змогу сортувати рядки з урахуванням локалі.

### Рядки-примітиви і рядки-об'єкти

Зауважте, що JavaScript розрізняє об'єкти `String` та {{Glossary("Primitive", "примітивні значення рядків")}}. (Це справедливо також для {{jsxref("Boolean", "булевих значень")}} і {{jsxref("Number", "чисел")}}.)

Рядкові літерали (виділені одинарними або подвійними лапками), а також рядки, повернуті з викликів `String` без контексту конструктора (тобто викликів, виконаних без ключового слова {{jsxref("Operators/new", "new")}}), є рядками-примітивами. Коли відбувається спроба викликати метод чи звернутися до властивості примітивного рядка, JavaScript автоматично обгортає примітив у виклик конструктора, і вже потім – на об'єкті-обгортці звертається до методу чи властивості.

```js
const strPrim = "foo"; // Літерал є примітивом рядка
const strPrim2 = String(1); // Приведено до рядкового примітива "1"
const strPrim3 = String(true); // Приведено до рядкового примітива "true"
const strObj = new String(strPrim); // String із new повертає обгортковий об'єкт рядка

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```

> **Застереження:** Слід утримуватися від використання `String` як конструктора.

Рядкові примітиви та об'єкти типу `String` також видають різні результати під час використання {{jsxref("Global_Objects/eval", "eval()")}}. Примітиви, передані до `eval`, вважаються вихідним кодом; натомість об'єкти `String` опрацьовуються як всі інші об'єкти, із поверненням об'єкта в результаті. Наприклад:

```js
const s1 = "2 + 2"; // створює рядковий примітив
const s2 = new String("2 + 2"); // створює об'єкт String
console.log(eval(s1)); // повертає число 4
console.log(eval(s2)); // повертає рядок "2 + 2"
```

Таким чином, код може ламатись в місцях, де очікується примітивний рядок, але натомість приходить об'єкт `String`. Хоча у більшості випадків про цю різницю хвилюватись не варто.

Об'єкт `String` можна завжди перетворити на його примітивний відповідник, використавши метод {{jsxref("String/valueOf", "valueOf()")}}.

```js
console.log(eval(s2.valueOf())); // повертає число 4
```

### Зведення до рядка

Чимало вбудованих операцій, котрі очікують на рядки, спершу зводять свої аргументи до типу рядка (здебільшого саме через це об'єкти `String` поводяться подібно до рядкових примітивів). [Ця операція](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) може бути описана наступним чином:

- Рядки повертаються як є.
- [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined) перетворюється на `"undefined"`.
- [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) перетворюється на `"null"`.
- `true` перетворюється на `"true"`; `false` перетворюється на `"false"`.
- Числа перетворюються за тим само алгоритмом, що використовується в [`toString(10)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).
- Значення [BigInt](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt) перетворюються за тим само алгоритмом, що використовується в [`toString(10)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString).
- [Символи](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol) викидають {{jsxref("TypeError")}}.
- Об'єкти спершу [перетворюються на примітиви](/uk/docs/Web/JavaScript/Data_structures#zvedennia-do-prymityva) шляхом виклику їх методів [`[@@toPrimitive]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (зі `"string"` як підказкою), `toString()` чи `valueOf()` – у такому порядку пріоритету. Після цього результівний примітив перетворюється на рядок.

Є декілька способів досягнути в JavaScript майже такого самого ефекту.

- [Шаблонний літерал](/uk/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` виконує точно такі ж самі кроки приведення, як описані вище, для вбудованого в себе виразу.
- Функція [`String()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/String): `String(x)` застосовує для перетворення `x` такий само алгоритм, окрім того, що [символи](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol) не викидають {{jsxref("TypeError")}}, а повертають `"Symbol(description)"`, де `description` – [опис](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) відповідного символу.
- Застосування [оператора `+`](/uk/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` зводить свій операнд до _примітива_, а не просто _рядка_, і для певних об'єктів має геть інакшу логіку, ніж звичайне приведення до рядка. Дивіться подробиці на його [сторінці довідки](/uk/docs/Web/JavaScript/Reference/Operators/Addition).

Залежно від конкретної ситуації може мати зміст використання `` `${x}` `` (аби зімітувати логіку вбудовування) чи `String(x)` (для обробки символів без викидання помилок), однак не слід застосовувати `"" + x`.

### Символи UTF-16, кодові точки Unicode та графемні кластери

Рядки у своїй основі представлені як послідовності [кодових точок UTF-16](https://uk.wikipedia.org/wiki/UTF-16). У кодуванні UTF-16 кожна кодова точка – рівно 16 бітів завдовжки. Це означає, що є щонайбільше 2<sup>16</sup>, тобто 65536, можливих символів, котрі можна представити у вигляді кодової точки UTF-16. Цей набір символів зветься [багатомовною площиною 0](<https://uk.wikipedia.org/wiki/%D0%91%D0%B0%D0%B3%D0%B0%D1%82%D0%BE%D0%BC%D0%BE%D0%B2%D0%BD%D0%B0_%D0%BF%D0%BB%D0%BE%D1%89%D0%B8%D0%BD%D0%B0_(%D0%AE%D0%BD%D1%96%D0%BA%D0%BE%D0%B4)>) (або БМП) і містить більшість поширених символів типу латинської, грецької, кириличної абеток, а також чимало східноазійських символів. Кожна кодова точка може бути записана як рядок, де на початку стоїть `\u`, а далі – рівно чотири шістнадцяткові цифри.

Проте увесь набір символів Unicode є набагато, набагато більшим за 65536. Додаткові символи зберігаються в UTF-16 як _сурогатні пари_, котрі є парами 16-бітових кодових одиниць, кожна з яких представляє єдиний символ. Для уникнення неоднозначності дві частини пари мусять лежати між `0xD800` та `0xDFFF`, і ці кодові одиниці не використовуються для кодування символів з однієї кодової одиниці. (Якщо точніше, то початкові сурогати, котрі також звуться високосурогатними кодовими одиницями, мають значення від `0xD800` до `0xDBFF` включно, а кінцеві, також відомі як низькосурогатні кодові одиниці, – від `0xDC00` до `0xDFFF` включно.) Кожен символ Unicode, що складається з однієї чи двох кодових одиниць UTF-16, також зветься _кодовою точкою Unicode_. Кожна кодова точка Unicode може бути записана в рядок як `\u{xxxxxx}`, де `xxxxxx` – від однієї до 6 шістнадцяткових цифр.

"Самотній сурогат" – це 16-бітова кодова одиниця, яка відповідає одному з описів нижче:

- Перебуває в діапазоні `0xD800`-`0xDBFF` включно (тобто є початковим сурогатом), але також є останньою кодовою одиницею в рядку, або наступна кодова одиниця не є кінцевим сурогатом.
- Перебуває в діапазоні `0xDC00`-`0xDFFF` включно (тобто є кінцевим сурогатом), але є першою кодовою одиницею в рядку, або попередня кодова одиниця не є початковим сурогатом.

Самотні сурогати не представляють жодних символів Unicode. Хоча більшість вбудованих методів JavaScript обробляє їх правильно, оскільки всі вони працюють на основі кодових одиниць UTF-16, самотні сурогати нерідко бувають недопустимими значеннями при взаємодії з іншими системами – наприклад, [`encodeURI()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) викидає на самотніх сурогатах {{jsxref("URIError")}}, оскільки кодування URI використовує кодування UTF-8, котре не має кодування для самотніх сурогатів. Рядки, що не містять жодних самотніх сурогатів, називаються _добре сформованими_ рядками і є безпечними для використання з функціями, котрі не працюють з UTF-16 (такими як `encodeURI()` або {{domxref("TextEncoder")}}). Перевірити, чи є рядок добре формованим, можна за допомогою методу {{jsxref("String/isWellFormed", "isWellFormed()")}}, а також можна вичистити самотні сурогати – за допомогою методу {{jsxref("String/toWellFormed", "toWellFormed()")}}.

На додачу до символів Unicode, є певні послідовності символів Unicode, котрі повинні розглядатися як єдина видима одиниця, – вони відомі як _графемні кластери_. Найпоширеніший приклад – емоджі: чимало емоджі, котрі мають значний діапазон варіацій, насправді утворюються декількома емодзі, зазвичай сполученими символом \<ZWJ> (`U+200D`).

Слід бути обережними з тим, по якому рівню символів відбувається ітерування. Наприклад, [`split("")`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split) розбиває рядок на кодові одиниці UTF-16 і розриває сурогатні пари. Рядкові індекси також вказують на індекси всіх кодових одиниць UTF-16. З іншого боку, [`@@iterator()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) виконує обхід за кодовими точками Unicode. Обхід за графемними кластерами потребуватиме написання певного коду самотужки.

```js
"😄".split(""); // ['\ud83d', '\ude04']; розриває на два самотні сурогати
// "Рука тильним боком, вказівний направо: темний тон шкіри"
[..."👉🏿"]; // ['👉', '🏿']
// розбиває на базовий емоджі "Рука тильним боком, вказівний направо" і
// емоджі "Темний тон шкіри"
// "Родина: Чоловік, Хлопчик"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// розбиває на емоджі "Чоловік" та емоджі "Хлопчик", сполучені з'єднувачем нульової ширини
// Прапор ООН
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// розбиває на дві літери – "індикатори регіону": "U" та "N".
// Всі емоджі-прапори утворені сполученням двох літер – індикаторів регіону
```

## Конструктор

- {{jsxref("String/String", "String()")}}
  - : Створює новий об'єкт `String`. Виконує перетворення типу, якщо викликається як функція, а не конструктор, — що нерідко значно корисніше.

## Статичні методи

- {{jsxref("String.fromCharCode()")}} (із коду символу)
  - : Повертає рядок, створений з переданої послідовності значень Unicode.
- {{jsxref("String.fromCodePoint()")}} (із кодової точки)
  - : Повертає рядок, створений з переданої послідовності кодів.
- {{jsxref("String.raw()")}} (необроблений)
  - : Повертає новий рядок, створений з необробленого рядка, переданого аргументом.

## Властивості примірників

Ці властивості означені на `String.prototype` і є спільними для всіх примірників `String`.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Функція-конструктор, що створила об'єкт-примірник. Для примірників `String` початковим значенням є конструктор {{jsxref("String/String", "String")}}.

Ці властивості є власними властивостями кожного окремого примірника `String`.

- {{jsxref("String/length", "length")}} (довжина)
  - : Відображає довжину рядка. Призначена лише для читання.

## Методи примірників

- {{jsxref("String.prototype.at()")}} (на (позиції))
  - : Повертає символ (рівно одну кодову одиницю UTF-16) за вказаним індексом `index`. Приймає також від'ємні числа, які позначають позицію з кінця рядка.
- {{jsxref("String.prototype.charAt()")}} (символ на (позиції))
  - : Повертає символ (рівно одну кодову одиницю UTF-16) за вказаним індексом `index`.
- {{jsxref("String.prototype.charCodeAt()")}} (код символу на (позиції))
  - : Повертає число, яке є значенням кодової одиниці UTF-16 за вказаним індексом `index`.
- {{jsxref("String.prototype.codePointAt()")}} (кодова точка на (позиції))
  - : Повертає невід'ємне ціле число — значення кодової одиниці в кодуванні UTF-16, яка знаходиться за вказаною позицією `pos`.
- {{jsxref("String.prototype.concat()")}} (зчепити)
  - : Об'єднує передані два (або більше) рядки тексту, і повертає результат — новий рядок.
- {{jsxref("String.prototype.endsWith()")}} (закінчується на)
  - : Визначає, чи рядок завершується символами, вказаними в `searchString`.
- {{jsxref("String.prototype.includes()")}} (включає)
  - : Визначає, чи рядок, на якому викликається цей метод, містить переданий підрядок `searchString`.
- {{jsxref("String.prototype.indexOf()")}} (індекс (підрядка))
  - : Шукає значення `searchValue` всередині об'єкта {{jsxref("String")}}, на якому викликається метод. Повертає індекс першого знайденого підрядка, або `-1`, якщо такого підрядка не було знайдено.
- {{jsxref("String.prototype.isWellFormed()")}} (чи є добре сформованим)
  - : Повертає булеве значення, яке вказує, чи містить цей рядок [самотні сурогати](#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery).
- {{jsxref("String.prototype.lastIndexOf()")}} (останній індекс (підрядка))
  - : Шукає значення `searchValue` всередині об'єкта {{jsxref("String")}}, на якому викликається метод. Повертає індекс останнього знайденого підрядка, або `-1`, якщо такого підрядка не було знайдено.
- {{jsxref("String.prototype.localeCompare()")}} (порівняти згідно з локаллю)
  - : Повертає число, яке вказує, чи переданий рядок `compareString` під час сортування повинен стояти перед, після, або є еквівалентним до початкового рядка.
- {{jsxref("String.prototype.match()")}} (зіставити)
  - : Використовується для зіставлення рядка із регулярним виразом `regexp`.
- {{jsxref("String.prototype.matchAll()")}} (зіставити повністю)
  - : Повертає ітератор, що містить усі збіги з переданим регулярним виразом `regexp`.
- {{jsxref("String.prototype.normalize()")}} (нормалізувати)
  - : Повертає нормалізовану Unicode-форму рядка, на якому викликається метод.
- {{jsxref("String.prototype.padEnd()")}} (заповнити кінець)
  - : Заповнює даний рядок вмістом `padString` з кінця, і повертає новий рядок довжиною `targetLength`.
- {{jsxref("String.prototype.padStart()")}} (заповнити початок)
  - : Заповнює даний рядок вмістом `padString` з початку, і повертає новий рядок довжиною `targetLength`.
- {{jsxref("String.prototype.repeat()")}} (повторювати)
  - : Повертає рядок, що містить вміст початкового рядка, повторений `count` разів.
- {{jsxref("String.prototype.replace()")}} (замінити)
  - : Використовується для заміни підрядка, що збігається з `searchFor`, вмістом `replaceWith`. Аргумент `searchFor` може бути як рядком, так і регулярним виразом, а `replaceWith` може бути або рядком, або функцією.
- {{jsxref("String.prototype.replaceAll()")}} (замінити усі (входження))
  - : Використовується для заміни всіх підрядків, що збігаються з `searchFor`, вмістом `replaceWith`. Аргумент `searchFor` може бути як рядком, так і регулярним виразом, а `replaceWith` може бути або рядком, або функцією.
- {{jsxref("String.prototype.search()")}} (шукати)
  - : Шукає збіги з регулярним виразом `regexp` у рядку, на якому було викликано метод.
- {{jsxref("String.prototype.slice()")}} (вирізати скибку, зріз)
  - : Видобуває частину рядка і повертає її як новий рядок.
- {{jsxref("String.prototype.split()")}} (розділити на частини)
  - : Повертає масив рядків, отриманих розділенням початкового рядка в усіх точках входження підрядка `sep`.
- {{jsxref("String.prototype.startsWith()")}} (починається (підрядком))
  - : Визначає, чи рядок, на якому було викликано метод, починається послідовністю символів `searchString`.
- {{jsxref("String.prototype.substr()")}} (підрядок) {{deprecated_inline}}
  - : Повертає підрядок, починаючи з вказаного індексу, і продовжуючи вказану кількість символів.
- {{jsxref("String.prototype.substring()")}} (підрядок)
  - : Повертає новий рядок, що містить символи початкового рядка, взятих починаючи з вказаного індексу (або з-поміж індексів, якщо було вказано обидва).
- {{jsxref("String.prototype.toLocaleLowerCase()")}} (до нижнього регістру згідно з локаллю)

  - : Повертає символи з початкового рядка, переведені в нижній регістр з урахуванням поточної активної локалі.

    Для більшості мов результат виконання цієї функції буде ідентичним до {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}} (до верхнього регістру згідно з локаллю)

  - : Повертає символи з початкового рядка, переведені в верхній регістр з урахуванням поточної активної локалі.

    Для більшості мов результат виконання цієї функції буде ідентичним до {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}} (до нижнього регістру)
  - : Повертає значення рядка, на якому було викликано метод, переведене у нижній регістр.
- {{jsxref("String.prototype.toString()")}} (до рядка)
  - : Повертає рядок — відповідник до вказаного об'єкта. Заміщує метод {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}} (до верхнього регістру)
  - : Повертає значення рядка, на якому було викликано метод, переведене у верхній регістр.
- {{jsxref("String.prototype.toWellFormed()")}} (до добре сформованого)
  - : Повертає рядок, де всі [самотні сурогати](#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery) замінені на символ-замінник Unicode U+FFFD.
- {{jsxref("String.prototype.trim()")}} (підрізати)
  - : Обрізає пробільні символи на початку та в кінці рядка.
- {{jsxref("String.prototype.trimEnd()")}} (підрізати кінець)
  - : Обрізає пробільні символи в кінці рядка.
- {{jsxref("String.prototype.trimStart()")}} (підрізати початок)
  - : Обрізає пробільні символи на початку рядка.
- {{jsxref("String.prototype.valueOf()")}} (значення (об'єкта))
  - : Повертає примітив — значення вказаного об'єкта. Заміщує метод {{jsxref("Object.prototype.valueOf()")}}.
- [`String.prototype[@@iterator]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
  - : Повертає новий об'єкт-ітератор, який перебирає всі кодові одиниці значення рядка, повертаючи кожну з них як окремий рядок.

### Методи для обгортання в HTML

> **Застереження:** Нерекомендовані. Уникайте вживання цих методів.
>
> Вони мають обмежене застосування, оскільки засновані на дуже старому стандарті HTML і надають лише підмножину наразі доступних тегів та атрибутів HTML. Чимало з них нині створює нерекомендовану чи нестандартну розмітку. На додачу до цього, ці методи виконують просте склеювання рядків, без жодних валідації й очищення, що робить їх потенційною загрозою безпеці, коли безпосередньо вставляти їх результат за допомогою [`innerHTML`](/uk/docs/Web/API/Element/innerHTML). Натомість слід використовувати [DOM API](/uk/docs/Web/API/Document_Object_Model), як то [`document.createElement()`](/uk/docs/Web/API/Document/createElement).

- {{jsxref("String.prototype.anchor()")}} (якір) {{deprecated_inline}}
  - : [`<a name="name">`](/uk/docs/Web/HTML/Element/a#name) (ціль для гіперпосилань)
- {{jsxref("String.prototype.big()")}} (великий) {{deprecated_inline}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}} (блимання) {{deprecated_inline}}
  - : `<blink>`
- {{jsxref("String.prototype.bold()")}} (грубий) {{deprecated_inline}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}} (фіксований) {{deprecated_inline}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}} (колір шрифту) {{deprecated_inline}}
  - : [`<font color="color">`](/uk/docs/Web/HTML/Element/font#color)
- {{jsxref("String.prototype.fontsize()")}} (розмір шрифту) {{deprecated_inline}}
  - : [`<font size="size">`](/uk/docs/Web/HTML/Element/font#size)
- {{jsxref("String.prototype.italics()")}} (курсив) {{deprecated_inline}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}} (посилання) {{deprecated_inline}}
  - : [`<a href="url">`](/uk/docs/Web/HTML/Element/a#href) (посилання на URL)
- {{jsxref("String.prototype.small()")}} (дрібний) {{deprecated_inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} (викреслений) {{deprecated_inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} (підрядковий) {{deprecated_inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} (надрядковий) {{deprecated_inline}}
  - : {{HTMLElement("sup")}}

Зверніть увагу, що ці методи не перевіряють, чи містить сам рядок теги HTML, тож можливо створити недійсний HTML:

```js
"</b>".bold(); // <b></b></b>
```

Єдине екранування, котре вони виконують – заміна `"` в значеннях атрибутів на `&quot;` (це стосується {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}} і {{jsxref("String/link", "link()")}})

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Приклади

### Перетворення рядків

Функція `String()` – це надійніший спосіб перетворення значень на рядки, ніж виклик метода `toString()` на цільовому значенні, адже перший варіант працює щодо [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) і {{jsxref("undefined")}}. Наприклад:

```js
// Звернутися до властивостей на null або undefined не вийде

const nullVar = null;
nullVar.toString(); // TypeError: Cannot read properties of null
String(nullVar); // "null"

const undefinedVar = undefined;
undefinedVar.toString(); // TypeError: Cannot read properties of undefined
String(undefinedVar); // "undefined"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Форматування тексту](/uk/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
