---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
page-type: javascript-class
browser-compat: javascript.builtins.RegExp
---

{{JSRef}}

Об'єкт **`RegExp`** (регулярний вираз) використовується для пошуку в тексті збігів за патерном.

Для знайомства з регулярними виразами прочитайте [розділ про регулярні вирази](/uk/docs/Web/JavaScript/Guide/Regular_expressions) в посібнику з JavaScript. Для отримання детальної інформації про синтаксис регулярних виразів прочитайте [довідку з регулярних виразів](/uk/docs/Web/JavaScript/Reference/Regular_expressions).

## Опис

### Літеральний запис та конструктор

Є два способи створити об'єкт `RegExp`: _літеральний запис_ та _конструктор_.

- _Літеральний запис_ приймає патерн між двома скісними рисками, після якого, після другої риски – необов'язкові позначки.
- _Функція-конструктор_ приймає як перший параметр або рядок, або об'єкт `RegExp`, а як другий – рядок необов'язкових позначок.

Наступні три вирази породжують один і той же об'єкт регулярного виразу:

```js
const re = /ab+c/i; // літеральний запис
// АБО
const re = new RegExp("ab+c", "i"); // конструктор з рядковим патерном як першим аргументом
// АБО
const re = new RegExp(/ab+c/, "i"); // конструктор з літералом регулярного виразу першим аргументом
```

До використання регулярних виразів вони повинні бути скомпільовані. Цей процес дає змогу виконувати пошук збігів ефективніше. Більше про цей процес – у [документації дотнет (англ.)](https://docs.microsoft.com/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

Літеральний запис призводить до компіляції регулярного виразу при обчисленні. З іншого боку, конструктор об'єкта `RegExp`, `new RegExp('ab+c')`, призводить до компіляції регулярного виразу часу виконання.

Слід передавати першим аргументом в конструктор `RegExp()` рядок, коли є потреба [збудувати регулярний вираз на основі динамічного введення](#buduvannia-rehuliarnoho-vyrazu-na-osnovi-dynamichnoho-vvedennia).

### Позначки в конструкторі

Вираз `new RegExp(/ab+c/, flags)` породить новий `RegExp`, використовуючи код першого параметра і позначки, надані в другому параметрі.

При застосуванні функції-конструктора необхідно враховувати звичні правила екранування рядків (перед спеціальними символами в рядку слід ставити `\`).

Наприклад, наступні варіанти - еквівалентні:

```js
const re = /\w+/;
// АБО
const re = new RegExp("\\w+");
```

### Особлива обробка регулярних виразів

> **Примітка:** Для перевірки того, чи є щось "регулярним виразом", може бути застосована [качина типізація](https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%87%D0%B8%D0%BD%D0%B0_%D1%82%D0%B8%D0%BF%D1%96%D0%B7%D0%B0%D1%86%D1%96%D1%8F). Такий об'єкт не зобов'язаний бути `RegExp`!

Частина вбудованих методів обробляє регулярні вирази по-особливому. Вони вирішують, чи є `x` регулярним виразом, за [кілька кроків](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp):

1. `x` мусить бути об'єктом (не примітивом).
2. Якщо [`x[Symbol.match]`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) – не `undefined`, то треба перевірити цю властивість на [істинність](/uk/docs/Glossary/Truthy).
3. Інакше, якщо `x[Symbol.match]` – `undefined`, перевірити, чи було `x` створено за допомогою конструктора `RegExp`. (Цей крок повинен траплятися рідко, адже якщо `x` є об'єктом `RegExp`, у котрий не втручалися, то він мусить мати властивість `Symbol.match`.)

Слід звернути увагу, що в більшості випадків відбудеться перевірка `Symbol.match`, а тобто:

- Справжній об'єкт `RegExp`, значення чиєї властивості `Symbol.match` є [хибним](/uk/docs/Glossary/Falsy), але не `undefined` (навіть коли все решта на місці, як то [`exec`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) і [`@@replace`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)) може бути використаний так, ніби він не є регулярним виразом.
- Не-`RegExp` об'єкт зі властивістю `Symbol.match` буде оброблятися так, ніби він є регулярним виразом.

Так було вирішено через те, що властивість `@@match` є найбільш показовою ознакою того, що щось створено для пошуку збігів. (`exec` також могла бути використана, але через те, що це не символьна властивість, було б забагато помилкових спрацювань.) Серед місць, що обробляють регулярні вирази по-особливому:

- [`String.prototype.endsWith()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) та [`includes()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/includes) викидають {{jsxref("TypeError")}}, якщо перший аргумент є регулярним виразом.
- [`String.prototype.matchAll()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) і [`replaceAll()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) перевіряють, чи має регулярний вираз позначку [глобальності](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global), якщо перший аргумент є регулярним виразом, до виклику його метода [`@@matchAll`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) чи [`@@replace`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace).
- Конструктор [`RegExp()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) безпосередньо повертає аргумент `pattern` лише в тому випадку, коли `pattern` є регулярним виразом (серед інших умов). Якщо `pattern` є регулярним виразом, то також будуть перевірені властивості `pattern`: `source` і `flags`, замість зведення `pattern` до рядка.

Наприклад, [`String.prototype.endsWith()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) зводить усе своє введення до рядків, але викидає виняток, якщо аргумент є регулярним виразом, адже цей метод розроблений лише для зіставлення рядків, а використання регулярного виразу – ймовірно, помилка розробника.

```js
"foobar".endsWith({ toString: () => "bar" }); // true
"foobar".endsWith(/bar/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Перевірку можна обійти, присвоївши `@@match` [хибне](/uk/docs/Glossary/Falsy) значення, котре не є `undefined`. Це означає, що такий регулярний вираз не можна використати для `String.prototype.match()` (адже без `@@match`, `match()` створюватиме новий об'єкт `RegExp` з двома рисками на кінцях, доданими методом [`re.toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString)), але такий регулярний вираз можна використати для буквально будь-чого іншого.

```js
const re = /bar/g;
re[Symbol.match] = false;
"/bar/g".endsWith(re); // true
re.exec("bar"); // [ 'bar', index: 0, input: 'bar', groups: undefined ]
"bar & bar".replace(re, "foo"); // 'foo & foo'
```

### Властивості RegExp у стилі Perl

Слід звернути увагу, що декілька властивостей {{jsxref("RegExp")}} мають і довгу, і коротку (в стилі Perl) назву. Обидва імені завжди вказують на одне й те саме значення. (Perl – мова програмування, на основі якої JavaScript створив свої регулярні вирази.) Дивіться також [нерекомендовані властивості `RegExp`](/uk/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Конструктор

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Породжує новий об'єкт `RegExp`.

## Статичні властивості

- {{jsxref("RegExp/n", "RegExp.$1, …, RegExp.$9")}} {{Deprecated_Inline}}
  - : Статичні властивості лише для зчитування, що містять збіги підрядків у дужках.
- {{jsxref("RegExp.input", "RegExp.input ($_)")}} {{Deprecated_Inline}}
  - : Статична властивість лише для зчитування, що містить останній рядок, щодо якого відбувся успішний збіг.
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&)")}} {{Deprecated_Inline}}
  - : Статична властивість лише для зчитування, що містить останній підрядок, з яким трапився збіг.
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}} {{Deprecated_Inline}}
  - : Статична властивість лише для зчитування, що містить останній збіг підрядку в дужках.
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}} {{Deprecated_Inline}}
  - : Статична властивість лише для зчитування, що містить підрядок, котрий передував останньому збігові.
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}} {{Deprecated_Inline}}
  - : Статична властивість лише для зчитування, що містить підрядок, котрий стояв після останнього збігу.
- {{jsxref("RegExp/@@species", "RegExp[@@species]")}}
  - : Функція-конструктор, що використовується для створення похідних об'єктів.

## Властивості примірника

Ці властивості означені на `RegExp.prototype` і є спільними для всіх примірників `RegExp`.

- {{jsxref("Object/constructor", "RegExp.prototype.constructor")}}
  - : Функція-конструктор, що створила об'єкт-примірник. Для примірників `RegExp` початковим значенням є конструктор {{jsxref("RegExp/RegExp", "RegExp")}}.
- {{jsxref("RegExp.prototype.dotAll")}} (точка все)
  - : Чи дає `.` збіг із символами нового рядка.
- {{jsxref("RegExp.prototype.flags")}} (позначки)
  - : Рядок, що містить позначки об'єкта `RegExp`.
- {{jsxref("RegExp.prototype.global")}} (глобальний)
  - : Чи перевірятиме регулярний вираз усі можливі збіги в рядку, чи лишень перший.
- {{jsxref("RegExp.prototype.hasIndices")}} (має індекси)
  - : Чи видає результат регулярного виразу початковий і кінцевий індекси захоплених підрядків.
- {{jsxref("RegExp.prototype.ignoreCase")}} (ігнорувати регістр)
  - : Чи ігноруватиметься при пошуку збігу в рядку регістр символів.
- {{jsxref("RegExp.prototype.multiline")}} (багаторядковий)
  - : Чи відбуватиметься пошук в тексті на багатьох рядках.
- {{jsxref("RegExp.prototype.source")}} (код)
  - : Текст патерну.
- {{jsxref("RegExp.prototype.sticky")}} (липкий)
  - : Чи є пошук липким.
- {{jsxref("RegExp.prototype.unicode")}}
  - : Чи ввімкнені можливості Unicode.
- {{jsxref("RegExp.prototype.unicodeSets")}}
  - : Чи додана позначка `v`, оновлена версія режиму `u`, чи ні.

Ці властивості є власними властивостями кожного окремого примірника `RegExp`.

- {{jsxref("RegExp/lastIndex", "lastIndex")}} (останній індекс)
  - : Індекс, з якого почнеться наступний пошук збігу.

## Методи примірника

- {{jsxref("RegExp.prototype.compile()")}} (компілювати) {{Deprecated_Inline}}
  - : (Повторно) компілює регулярний вираз під час виконання сценарію.
- {{jsxref("RegExp.prototype.exec()")}} (виконати)
  - : Виконує пошук збігу у своєму рядковому параметрі.
- {{jsxref("RegExp.prototype.test()")}} (перевірити)
  - : Перевіряє на збіг свій рядковий параметр.
- {{jsxref("RegExp.prototype.toString()")}}
  - : Повертає рядок, що представляє вказаний об'єкт. Відкидає метод {{jsxref("Object.prototype.toString()")}}.
- [`RegExp.prototype[@@match]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)
  - : Виконує пошук збігу в наданому рядку й повертає результат.
- [`RegExp.prototype[@@matchAll]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
  - : Повертає усі збіги регулярного виразу в рядку.
- [`RegExp.prototype[@@replace]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
  - : Замінює збіги в даному рядку новим підрядком.
- [`RegExp.prototype[@@search]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)
  - : Шукає збіг в наданому рядку й повертає індекс, за яким патерн знайдений.
- [`RegExp.prototype[@@split]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split)
  - : Розбиває наданий рядок на масив, поділяючи рядок на підрядки.

## Приклади

### Використання регулярного виразу для зміни формату даних

Наступний сценарій застосовує метод {{jsxref("String.prototype.replace()", "replace()")}} примірника {{jsxref("Global_Objects/String", "String")}}, щоб знайти ім'я в форматі _ім'я прізвище_ й вивести його в форматі _прізвище, ім'я_.

В тексті заміни сценарій використовує `$1` і `$2`, аби вказати на результати відповідних дужок збігу в патерні регулярного виразу

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Виведе `"Cruz, Maria"`.

### Застосування регулярного виразу для розбиття рядків з різними символами нового рядка

Усталене закінчення рядка залежить від платформи (Unix, Windows тощо). Розбиття рядків, запропоноване в цьому прикладі, працює на всіх платформах.

```js
const text = "Певний текст\nІ ще трохи\r\nІще\rАж ось кінець";
const lines = text.split(/\r\n|\r|\n/);
console.log(lines); // ['Певний текст', 'І ще трохи', 'Іще', 'Аж ось кінець']
```

Зверніть увагу, що порядок патернів у регулярному виразі має значення.

### Застосування регулярного виразу на багатьох рядках

```js
const s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Повертає null

s.match(/yes[^]*day/);
// Повертає ["yes\nmake my day"]
```

### Застосування регулярного виразу з позначкою липкості

Позначка {{jsxref("Global_Objects/RegExp/sticky", "липкості")}} вказує на те, що регулярний вираз виконує в цільовому рядку липкий пошук збігу, намагаючись почати пошук від {{jsxref("RegExp.prototype.lastIndex")}}.

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (враховується lastIndex, адже присутня позначка липкості)
regex.lastIndex; // 0 (скинуто після невдачі пошуку)
```

### Різниця між позначкою липкості й позначкою глобальності

За присутності позначки липкості `y` наступний збіг повинен відбутися на позиції `lastIndex`, а за присутності позначки глобальності `g` – збіг може трапитись на позиції `lastIndex` чи дальшій:

```js
const re = /\d/y;
let r;
while ((r = re.exec("123 456"))) {
  console.log(r, "AND re.lastIndex", re.lastIndex);
}

// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//   … і – більше жодних збігів.
```

З позначкою глобальності `g` був би збіг з усіма 6 цифрами, а не лише 3.

### Регулярний вираз та символи Unicode

`\w` і `\W` дають збіг лише з символами на основі ASCII; наприклад, від `a` до `z`, від `A` до `Z`, від `0` до `9`, і `_`.

Для пошуку збігу серед символів інших мов, як то кириличними чи гебрайськими, слід використовувати `\uhhhh`, де `hhhh` – значення Unicode символу в шістнадцятковому вигляді.

Цей приклад демонструє, як можна відділити від слова символи Unicode.

```js
const text = "Зразок text українською мовою";
const regex = /[\u0400-\u04FF]+/g;

const match = regex.exec(text);
console.log(match[0]); // 'Зразок'
console.log(regex.lastIndex); // 6

const match2 = regex.exec(text);
console.log(match2[0]); // 'українською' (а не 'text')
console.log(regex.lastIndex); // 23

// і так далі
```

Можливість [екранування властивостей Unicode](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) пропонує простіший спосіб цілитися на конкретні діапазони Unicode, дозволяючи інструкції штибу `\p{scx=Cyrl}` (для збігу з будь-якою кириличною літерою) чи `\p{L}/u` (для збігу з літерою з будь-якої мови).

### Видобування імені піддомену з URL

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> **Примітка:** Замість використання для розбору URL регулярних виразів зазвичай краще застосовувати вбудований розбирач URL, використовуючи [URL API](/uk/docs/Web/API/URL_API).

### Будування регулярного виразу на основі динамічного введення

```js
const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
const order = "Let me get some bacon and eggs, please";

order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));
// Повертає ['bacon', 'eggs']
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

### Примітки щодо Firefox

Починаючи з Firefox 34, у випадку захоплення групи з кванторами, що не дають їй спрацювати, текст збігу групи захоплення – `undefined`, а не порожній рядок:

```js
// Firefox 33 чи старший
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`група: ${JSON.stringify(group)}`);
});
// група: ""

// Firefox 34 чи новіший
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`група: ${group}`);
});
// група: undefined
```

Зверніть увагу, що заради сумісності `RegExp.$N` й далі повертає порожній рядок, а не `undefined` ([вада 1053944](https://bugzil.la/1053944)).

## Дивіться також

- [Поліфіл багатьох сучасних можливостей `RegExp` (позначки `dotAll`, `sticky`, іменовані групи захоплення тощо) у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Посібник з регулярних виразів](/uk/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Довідка з регулярних виразів](/uk/docs/Web/JavaScript/Reference/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
