---
title: Граматика та типи
slug: Web/JavaScript/Guide/Grammar_and_types
page-type: guide
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Цей розділ описує базову граматику JavaScript, оголошення змінних, типи даних та літерали.

## Основи

JavaScript запозичив більшість свого синтаксису в Java, C і C++, але також отримав вплив від Awk, Perl і Python.

JavaScript є **чутливим до регістру** та використовує набір символів **Unicode**. Наприклад, слово Früh (котре перекладається з німецької як "рано") може використовуватися як ім'я змінної.

```js
const Früh = "агов";
```

Однак змінна `früh` – не та сама, що й `Früh`, адже JavaScript чутливий до регістру.

У JavaScript {{Glossary("Statement", "інструкції")}} розділяються крапкою з комою (;).

Крапка з комою не потрібна після інструкції, якщо ця інструкція написана на окремому рядку. Проте якщо в рядку потрібна більш ніж одна інструкція, то такі інструкції _повинні_ бути розділені крапками з комою.

> **Примітка:** ECMAScript також має правила автоматичного вставляння крапок з комою ([ASI](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#avtomatychne-vstavliannia-krapok-z-komoiu)) для завершення інструкцій. (Більше про це дивіться в детальній довідці про [лексичну граматику](/uk/docs/Web/JavaScript/Reference/Lexical_grammar) JavaScript.)

Проте найкращою практикою вважається завжди ставити після інструкції крапку з комою, навіть тоді, коли вона не вимагається суворо. Така практика зменшує шанс появи помилок у коді.

Вихідний текст сценарію JavaScript сканується зліва направо і перетворюється на послідовність елементів введення, які є _лексемами_, _контрольними символами_, _символами кінця рядка_, _коментарями_ та {{glossary("whitespace", "пробільними символами")}}. (Пробіли, табуляції та символи нового рядка вважаються пробільними символами.)

## Коментарі

Синтаксис **коментарів** – такий же, як у C++ і багатьох інших мовах:

```js
// однорядковий коментар

/* це довший,
 * багаторядковий коментар
 */
```

Блокові коментарі не можна вкладати одне в одного. Це нерідко трапляється, якщо випадково додати в коментар послідовність `*/`, яка завершує коментар.

```js-nolint example-bad
/* Проте не можна /* вкладати коментарі одне в одного */ SyntaxError */
```

У такому випадку необхідно розірвати патерн `*/`. Наприклад, вставивши зворотну скісну риску:

```js
/* Вкладені коментарі /* можна додавати *\/ шляхом екранування скісних рисок */
```

Коментарі поводяться як пробільні символи та відкидаються під час виконання сценаріїв.

> **Примітка:** Також на початку частини файлів JavaScript можна зустріти третій тип синтаксису коментаря, котрий має якийсь такий вигляд: `#!/usr/bin/env node`.
>
> Це зветься синтаксисом **шебанг-коментаря**, що є особливим коментарем, що вживається для задання шляху до конкретного рушія JavaScript, що повинен виконати сценарій. Дивіться більше про це в [Шебанг-коментарях](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#shebanh-komentari)

## Оголошення

JavaScript має три різновиди оголошень змінних.

- {{jsxref("Statements/var", "var")}}
  - : Оголошує змінну, а ще може ініціалізувати її значенням.
- {{jsxref("Statements/let", "let")}}
  - : Оголошує локальну змінну – змінну з блоковою областю видимості, а ще може ініціалізувати її значенням.
- {{jsxref("Statements/const", "const")}}
  - : Оголошує доступну лише для читання іменовану сталу з блоковою областю видимості.

### Змінні

Змінні використовуються як символічні назви для значень у застосунку. Назви змінних, що звуться {{Glossary("Identifier", "ідентифікаторами")}}, відповідають певним правилам.

Ідентифікатор JavaScript зазвичай починається з літери, підкреслення (`_`) або знаку долара (`$`). Наступні символи також можуть бути цифрами (`0` – `9`). Оскільки JavaScript розрізняє регістр, літери включають символи від `A` до `Z` (великі літери), а також від `a` до `z` (малі літери).

У ідентифікаторах можна використовувати більшість літер Unicode, наприклад, `å` і `ü`. (Дивіться детальніше в довідці про [лексичну граматику](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#identyfikatory).) Також для представлення символів у ідентифікаторах можна використовувати [послідовності екранування Unicode](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#riadkovi-literaly).

Приклади дозволених назв: `Number_hits`, `temp99`, `$credit`, `_name`.

### Оголошення змінних

Змінну можна оголосити двома шляхами:

- З ключовим словом {{jsxref("Statements/var", "var")}}. Наприклад, `var x = 42`. Такий синтаксис може вживатися для оголошення як **локальних**, так і **глобальних** змінних, залежно від _контексту виконання_.
- З ключовим словом {{jsxref("Statements/const", "const")}} або {{jsxref("Statements/let", "let")}}. Наприклад, `let y = 13`. Такий синтаксис може використовуватися для оголошення локальної змінної з блоковою областю видимості. (Дивіться детальніше в розділі [Область видимості змінних](#oblast-vydymosti-zminnykh) нижче.)

Змінні можна оголошувати для розпакування значень за допомогою синтаксису [присвоєння з деструктуруванням](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Наприклад, `const { bar } = foo`. Це створить змінну з назвою `bar` і присвоїть їй значення, що відповідає ключу з такою ж назвою з об'єкта `foo`.

Змінні завжди повинні бути оголошені до свого використання. Колись JavaScript дозволяв присвоєння значень неоголошеним змінним, що породжувало **[неоголошені глобальні](/uk/docs/Web/JavaScript/Reference/Statements/var#opys)** змінні. Це є помилкою в [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode#prysvoiennia-neoholoshenym-zminnym), і взагалі, цього слід уникати.

### Оголошення й ініціалізація

У інструкції виду `let x = 42` частина `let x` зветься _оголошенням_, а частина `= 42` – _ініціалізатором_. Завдяки оголошенню далі в коді до змінної можна звертатися без викидання {{jsxref("ReferenceError")}}, а ініціалізатор присвоює їй значення. У оголошеннях `var` і `let` ініціалізатор є необов'язковим. Якщо змінна оголошена без ініціалізатора, то їй присвоюється значення [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined).

```js
let x;
console.log(x); // виводить "undefined"
```

По суті `let x = 42` рівносильно щодо `let x; x = 42`.

Оголошення `const` завжди потребують ініціалізатора, адже забороняють будь-якого роду присвоєння після оголошення, і неявна ініціалізація їх значенням `undefined`, ймовірно, є помилкою програміста.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Область видимості змінних

Змінна може належати до однієї з наступних [областей видимості](/uk/docs/Glossary/Scope):

- Глобальна область видимості – усталена область видимості для всього коду, що запускається в режимі сценарію.
- Модульна область видимості – область видимості коду, що запускається в режимі модуля.
- Функційна область видимості – область видимості, створена {{glossary("function", "функцією")}}.

На додачу, змінні, оголошені з [`let`](/uk/docs/Web/JavaScript/Reference/Statements/let) або [`const`](/uk/docs/Web/JavaScript/Reference/Statements/const), можуть належати до ще однієї області видимості:

- Блокова область видимості – область видимості, утворена парою фігурних дужок ([блок](/uk/docs/Web/JavaScript/Reference/Statements/block)).

Коли змінна оголошується поза будь-якою функцією, вона зветься *глобальною, тому що доступна для будь-якого іншого коду в поточному документі. Коли оголосити змінну в функції, вона зветься *локальною\_, тому що доступна лише в межах цієї функції.

Оголошення `let` і `const` також можуть бути обмежені [інструкцією-блоком](/uk/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#instruktsiia-blok), у якій оголошені

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Проте змінні, створені з `var`, не обмежені блоком, але є локальними відносно _функції (або глобальної області видимості)_, в якій знаходиться блок.

Наприклад, наступний код виведе `5`, тому що область видимості `x` – це глобальний контекст (або функційний контекст, якщо цей код є частиною функції). Область видимості `x` не обмежена блоком `if` безпосередньо навколо змінної.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Підняття змінних

Оголошені з `var` змінні [піднімаються](/uk/docs/Glossary/Hoisting), тобто можна звертатися до змінної будь-де в її області видимості, навіть якщо виконання ще не дійшло до її оголошення. Оголошення змінної `var` можна розглядати як такі, що "піднімаються" до початку своєї функції або глобальної області видимості. Проте якщо звернутися до змінної до її оголошення, то її значення завжди буде `undefined`, оскільки піднімається лише _оголошення_, але не її _ініціалізація_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "локальне значення";
})();
```

Приклади вище тлумачаться так само, як:

```js
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "локальне значення";
})();
```

У зв'язку з підняттям усі інструкції `var` у функції повинні ставитися настільки близько до верху функції, наскільки можливо. Така найкраща практика підвищує зрозумілість коду.

Те, чи піднімаються `let` і `const`, є предметом суперечок. Звертання до таких змінних у блоці до їхнього оголошення завжди призводить до {{jsxref("ReferenceError")}}, тому що вони перебувають у "[темпоральній мертвій зоні](/uk/docs/Web/JavaScript/Reference/Statements/let#temporalna-mertva-zona-tdz)" від початку блоку до обробки оголошення.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

На відміну від оголошень `var`, котрі піднімають лише оголошення, але не своє значення, [оголошення функцій](/uk/docs/Web/JavaScript/Guide/Functions#pidniattia-funktsii) піднімаються повністю – функцію можна безпечно викликати будь-де в її області видимості. Дивіться більше про це в записі глосарія про [підняття](/uk/docs/Glossary/Hoisting).

### Глобальні змінні

Глобальні змінні фактично є властивостями _глобального об'єкта_.

На вебсторінках глобальним об'єктом є {{domxref("window")}}, тож задавати та звертатися до глобальних змінних можна за допомогою запису `window.variable`. У всіх середовищах можна використовувати для звертання до глобальних змінних змінну [`globalThis`](/uk/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (котра сама є глобальною змінною).

Як наслідок, до змінних, оголошених в одному вікні чи фреймі, можна звертатися з іншого вікна чи фрейму, задавши ім'я `window` або `frame`. Наприклад, якщо в документі оголошена змінна `phoneNumber`, то до неї можна звертатися з `iframe` як до `parent.phoneNumber`.

### Сталі

Доступні лише для читання іменовані сталі можна створювати за допомогою ключового слова {{jsxref("Statements/const", "const")}}. Синтаксис ідентифікатора сталої – такий самий, як в будь-якого ідентифікатора змінної: повинен починатися з літери, підкреслення чи знаку долара (`$`), і може містити літери, цифри та підкреслення.

```js
const PI = 3.14;
```

Стала не може змінювати значення шляхом присвоєння чи бути оголошена повторно, поки сценарій працює. Вона повинна бути ініціалізована значенням. Правила областей видимості для сталих – такі самі, як правила для змінних `let` з блоковою областю видимості.

Не можна оголосити сталу з таким же ім'ям, як у функції чи змінної в тій самій області видимості. Наприклад:

```js-nolint example-bad
// ЦЕ СПРИЧИНИТЬ ПОМИЛКУ
function f() {}
const f = 5;

// І ЦЕ СПРИЧИНИТЬ ПОМИЛКУ ТАКОЖ
function f() {
  const g = 5;
  var g;
}
```

Проте `const` запобігає лише _повторному присвоєнню_, але не запобігає _видозмінам_. Властивості об'єктів, присвоєних сталим, не захищені, тож наступна інструкція виконується без проблем.

```js
const MY_OBJECT = { key: "значення" };
MY_OBJECT.key = "іншеЗначення";
```

Крім цього, вміст масиву – не захищений, тож наступна інструкція виконується без проблем.

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

## Структури даних і типи

### Типи даних

Останній стандарт ECMAScript визначає вісім типів даних:

- Сім типів даних, що є {{Glossary("Primitive", "примітивами")}}:

  1. {{Glossary("Boolean")}}. `true` і `false`.
  2. {{Glossary("null")}}. Особливе ключове слово, що позначає порожнє значення. (Оскільки JavaScript розрізняє регістр, `null` – це не те саме, що `Null`, `NULL` чи будь-який інший варіант.)
  3. {{Glossary("undefined")}}. Властивість найвищого рівня, чиє значення не визначено.
  4. {{Glossary("Number")}}. Ціле або дробове число. Наприклад: `42` або `3.14159`.
  5. {{Glossary("BigInt")}}. Ціле число довільної точності. Наприклад: `9007199254740992n`.
  6. {{Glossary("String")}}. Послідовність символів, що представляє текстове значення. Наприклад: `"Привіт"`.
  7. [Symbol](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Тип даних, чиї примірники є унікальними та беззмінними.

- і {{Glossary("Object")}}

Попри те, що цих типів даних відносно небагато, вони дають змогу виконувати в застосунках корисні дії. [Функції](/uk/docs/Web/JavaScript/Guide/Functions) – іще один засадничий елемент мови. Хоч функції технічно є різновидом об'єктів, об'єкти можна уявляти як іменовані контейнери для значень, а функції – як процедури, які може виконувати сценарій.

### Перетворення типів даних

JavaScript – мова з _динамічною типізацією_. Це означає, що не потрібно задавати тип даних змінної, коли вона оголошується. Також це означає, що під час виконання сценарію між типами даних за потреби відбуваються автоматичні перетворення.

Тож, наприклад, можна визначити змінну так:

```js
let answer = 42;
```

А пізніше – їй можна присвоїти рядкове значення, наприклад:

```js
answer = "Дякую за рибу!";
```

Оскільки JavaScript має динамічну типізацію, таке присвоєння не призводить до повідомлення про помилку.

### Числа та оператор '+'

У виразах, що включають числові та рядкові значення з оператором `+`, JavaScript перетворює числові значення на рядки. Наприклад, погляньмо на наступні інструкції:

```js
x = "Відповідь – " + 42; // "Відповідь –  42"
y = 42 + " – це відповідь"; // "42 – це відповідь"
z = "37" + 7; // "377"
```

У випадку всіх інших операторів, JavaScript _не_ перетворює числові значення на рядки. Наприклад:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Перетворення рядків на числа

На випадок значень, які представляють числа, але зберігаються в пам'яті як рядки, є методи для перетворення.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}

Функція `parseInt` повертає лише цілі числа, тож її корисність для десяткових дробів – обмежена.

> **Примітка:** Крім цього, найкраща практика для `parseInt` – завжди включати параметр _radix_ (основу числення). Параметр основи числення використовується для задання того, яка система числення має використовуватися.

```js
parseInt("101", 2); // 5
```

Інший варіант отримання числа з рядка – оператор `+` (унарний плюс):

```js-nolint
"1.1" + "1.1" // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Примітка: дужки додані для зрозумілості, вони не обов'язкові.
```

## Літерали

_Літерали_ в JavaScript представляють значення. Це фіксовані значення – не змінні – які _літерально_ (буквально) вказуються в сценарії. У цьому розділі описано наступні типи літералів:

- [Літерали масивів](#literaly-masyviv)
- [Булеві літерали](#bulevi-literaly)
- [Числові літерали](#chyslovi-literaly)
- [Літерали об'єктів](#literaly-obiektiv)
- [Літерали RegExp](#literaly-regexp)
- [Рядкові літерали](#riadkovi-literaly)

### Літерали масивів

Літерал масиву – це список з нуля чи більше виразів, кожний з яких представляє елемент масиву, оточений квадратними дужками (`[]`). При створенні масиву за допомогою літерала він ініціалізується вказаними значеннями як його елементами, а його `length` задається як кількість перелічених аргументів.

Наступний приклад створює масив `coffees` з трьома елементами та `length` зі значенням трьох:

```js
const coffees = ["Французького обсмаження", "Колумбійська", "Кона"];
```

Якщо масив створюється за допомогою літерала у сценарії найвищого рівня, то JavaScript тлумачить його щоразу, коли обчислює вираз, що вміщає літерал масиву. Крім цього, літерал, що вміщений у функції, створюється заново щоразу, коли вона викликається.

> **Примітка:** Літерали масивів створюють об'єкти `Array`. Подробиці про об'єкти `Array` дивіться на сторінках {{jsxref("Array")}} і [Колекцій з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections).

#### Надлишкові коми в літералах масивів

Якщо поставити в літералі масиву дві коми підряд, то масив залишить для невказаного елемента порожню комірку. Наступний приклад створює масив `fish`:

```js
const fish = ["Крилатка", , "Ангел"];
```

Якщо вивести цей масив, то буде видно:

```js
console.log(fish);
// [ 'Крилатка', <1 порожня комірка>, 'Ангел' ]
```

Зверніть увагу на те, що другий елемент – "порожній", що не зовсім те саме, що фактичне значення `undefined`. При використанні методів з обходом масиву, наприклад, [`Array.prototype.map`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/map), порожні комірки пропускаються. Проте звертання до індексу `fish[1]` все ж поверне `undefined`.

Якщо додати кому в кінці списку елементів, то вона ігнорується.

У наступному прикладі `length` масиву – три. Немає жодного `myList[3]`. Всі інші коми в списку позначають новий елемент.

```js
const myList = ["home", , "school"];
```

Нижче, довжина `length` масиву дорівнює чотири, причому елементи `myList[0]` та `myList[2]` – відсутні.

```js
const myList = [, "home", , "school"];
```

А в цьому прикладі, довжина `length` масиву дорівнює чотири, і елементи `myList[1]` та `myList[3]` – відсутні. **Ігнорується лише остання кома.**

```js
const myList = ["home", , "school", ,];
```

> **Примітка:** [Коми в кінці](/uk/docs/Web/JavaScript/Reference/Trailing_commas) допомагають зберігати чистими git-різниці, коли масив розбито на декілька рядків, оскільки додавання елемента в кінець додає лише один рядок, але не змінює попередній.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Розуміння логіки надлишкових ком у літералах масивів – важливий елемент розуміння JavaScript як мови.

Проте при написанні власного коду слід явно оголошувати пропущені елементи як `undefined`, або щонайменше додавати коментар, щоб виділити відсутність. Це збільшує зрозумілість та полегшує підтримку коду.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Булеві літерали

Булів тип має два літеральні значення: `true` і `false`.

> **Примітка:** Не плутайте примітивні булеві значення `true` і `false` зі значеннями `true` і `false` об'єкта {{jsxref("Boolean")}}.
>
> Булів об'єкт – це обгортка для примітивного булевого типу даних. Більше читайте на сторінці {{jsxref("Boolean")}}.

### Числові літерали

Серед числових літералів JavaScript – літерали цілих чисел з різними основами числення, а також літерали чисел з рухомою комою в десятковій системі числення.

Зверніть увагу на те, що специфікація вимагає, щоб числові літерали були беззнаковими. Попри це, фрагменти коду виду `-123.4` – допустимі, оскільки тлумачаться як унарний оператор `-`, що застосовується до числового літерала `123.4`.

#### Цілочислові літерали

Літерали цілих чисел і {{jsxref("BigInt")}} можуть записуватися в десятковій (основа 10), шістнадцятковій (основа 16), вісімковій (основа 8) і двійковій (основа 2) системах числення.

- _Десятковий_ цілочисловий літерал – це послідовність цифр без `0` (нуля) на початку.
- `0` (нуль) на початку цілочислового літерала, або `0o` (або `0O`) на початку позначає, що це _вісімкове число_. Вісімкові цілочислові літерали можуть включати лише цифри від `0` до `7`.
- `0x` (або `0X`) на початку позначає _шістнадцятковий_ цілочисловий літерал. Шістнадцяткові цілі числа можуть включати цифри (від `0` до `9`) та літери від `a` до `f` і від `A` до `F`. (Регістр літери не впливає на її значення. Тож `0xa` = `0xA` = `10` і `0xf` = `0xF` = `15`.)
- `0b` (або `0B`) на початку позначає _двійковий_ цілочисловий літерал. Двійкові цілочислові літерали можуть включати лише цифри `0` і `1`.
- Суфікс `n` у кінці цілочислового літерала позначає літерал {{jsxref("BigInt")}}. Такий цілочисловий літерал може мати будь-яку з зазначених вище основ. Зверніть увагу на те, що синтаксис вісімкових чисел з нулем на початку, наприклад, `0123n`, не допускається, але `0o123n` – допустимо.

Трохи прикладів цілочислових літералів:

```plain
0, 117, 123456789123456789n             (десяткові, основа 10)
015, 0001, 0o777777777777n              (вісімкові, основа 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (шістнадцяткові, "hex" чи основа 16)
0b11, 0b0011, 0b11101001010101010101n   (двійкові, основа 2)
```

Більше про це дивіться в [Числових літералах у довідці Лексичної граматики](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#chyslovi-literaly).

#### Дробові літерали

Дробовий літерал може мати наступні частини:

- Беззнакове десяткове ціле число,
- Десятковий розділювач (`.`),
- Дробову частину (іще одне десяткове число),
- Експоненту.

Частина експоненти – це літера `e` або `E`, після якої стоїть ціле число, яке може бути зі знаком (з `+` або `-` перед ним). Дробовий літерал повинен вміщати принаймні одну цифру, а також десятковий розділювач або `e` (чи `E`).

Якщо стисліше, то синтаксис такий:

```plain
[digits].[digits][(E|e)[(+|-)]digits]
```

Наприклад:

```js-nolint
3.1415926
.123456789
3.1E+12
.1e-23
```

### Літерали об'єктів

Літерал об'єкта – це список з нуля чи більше пар імен властивостей та пов'язаних з ними значень в об'єкті, оточений фігурними дужками (`{}`).

> **Застереження:** Не використовуйте літерал об'єкта на початку інструкції! Це призведе до помилки (або працюватиме не так, як ви очікуєте), тому що `{}` тлумачитиметься як початок блоку.

Код далі є прикладом літерала об'єкта. Перший елемент об'єкта `car` визначає властивість, `myCar`, і присвоює їй новий рядок, `"Saturn"`; наступному елементу, властивості `getCar`, негайно присвоюється результат заклику функції `(carTypes("Honda"))`; третій елемент, властивість `special`, використовує наявну змінну (`sales`).

```js
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Вибачте, ми не пропонуємо ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

Крім цього, можна використовувати числовий або рядковий літерал як ім'я властивості, або вкласти один об'єкт в інший. Наступний приклад використовує ці можливості.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Ім'я властивості об'єкта може бути будь-яким рядком, включно з порожнім рядком. Якщо ім'я властивості не є дійсним {{Glossary("Identifier","ідентифікатором")}} JavaScript або числом, то його потрібно оточити лапками.

За іменами властивостей, що не є дійсними ідентифікаторами, не можна звертатися як до властивостей з крапкою (`.`).

```js-nolint example-bad
const unusualPropertyNames = {
  '': 'Порожній рядок',
  '!': 'Бум!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
```

Натомість, до них слід звертатися за допомогою квадратних дужок (`[]`).

```js example-good
console.log(unusualPropertyNames[""]); // Порожній рядок
console.log(unusualPropertyNames["!"]); // Бум!
```

#### Покращені літерали об'єктів

Літерали об'єктів підтримують низку скорочених записів, серед яких задання прототипу при створенні, скорочений запис для присвоєнь `foo: foo`, визначення методів, виклики `super` та обчислення імен властивостей за допомогою виразів.

Все разом це також зближує літерали об'єктів і оголошення класів, а також дає об'єктноорієнтованому проєктуванню можливість скористатися деякими зручностями.

```js
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Скорочення 'handler: handler'
  handler,
  // Методи
  toString() {
    // Виклики super
    return "d " + super.toString();
  },
  // Обчислені (динамічні) імена властивостей
  ["prop_" + (() => 42)()]: 42,
};
```

### Літерали RegExp

Літерал регулярного виразу (детально описаний [пізніше](/uk/docs/Web/JavaScript/Guide/Regular_expressions)) – це патерн, оточений скісними рисками. Наступний приклад містить літерал регулярного виразу.

```js
const re = /ab+c/;
```

### Рядкові літерали

Рядковий літерал – це нуль або більше символів, оточених подвійними (`"`) або одинарними (`'`) лапками. Рядок повинен бути обмежений лапками одного типу (тобто або подвійними лапками, або одинарними).

Наступний приклад містить рядкові літерали:

```js-nolint
'foo'
"bar"
'1234'
'один рядок \n інший рядок'
"кіт Віталія"
```

Рядкові літерали слід використовувати, якщо немає конкретної потреби використовувати об'єкт `String`. Більше про об'єкти `String` читайте на сторінці {{jsxref("String")}}.

Будь-який з методів об'єкта {{jsxref("String")}} можна викликати на рядковому літеральному значенні. JavaScript автоматично перетворює рядковий літерал на тимчасовий об'єкт String, викликає метод, а тоді викидає тимчасовий об'єкт String. Також можна використовувати на рядковому літералі властивість `length`:

```js
// Надрукує число символів у рядку, включно з пробільними.
console.log("кіт Віталія".length); // У цьому випадку – 11.
```

Також доступні [шаблонні літерали](/uk/docs/Web/JavaScript/Reference/Template_literals). Шаблонні літерали оточуються символами слабкого наголосу (`` ` ``) ([гравісами](<https://uk.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B2%D1%96%D1%81_(%D0%B4%D1%96%D0%B0%D0%BA%D1%80%D0%B8%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D0%B7%D0%BD%D0%B0%D0%BA)>)), а не подвійними чи одинарними лапками.

Шаблонні літерали надають синтаксичний цукор для створення рядків. (Це схоже на можливості рядкової інтерполяції в Perl, Python і не тільки.)

```js-nolint
// Базове створення рядкового літерала
`У JavaScript '\n' – це символ нового рядка.`

// Багаторядкові рядки
`У JavaScript шаблонні рядки можуть стояти
 на кількох рядках, а рядки з подвійними
 чи одинарними рядками – ні.`

// Рядкова інтерполяція
const name = 'Лев', time = 'сьогодні';
`Привіт, ${name}, як ти ${time}?`
```

[Теговані шаблони](/uk/docs/Web/JavaScript/Reference/Template_literals#tehovani-shablony) – це стислий синтаксис для задання шаблонного літерала вкупі з викликом функції "тегу" для його розбору. Тегований шаблон – це лишень стисліший та семантичний спосіб для заклику функції, що обробляє рядок, і задає відповідні значення. Ім'я шаблонної тегової функції ставиться перед шаблонним літералом – як у наступному прикладі, де шаблонна тегова функція зветься `print`. Функція `print` інтерполює аргументи та серіалізує всі об'єкти чи масиви, що можуть зустрітися, уникаючи неприємного `[object Object]`.

```js
const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Надрукувати список з маркерами
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // Цей об'єкт серіалізується в "[object Object]".
    // Надрукуймо щось приємніше.
    return JSON.stringify(arg);
  }
  return arg;
};

const print = (segments, ...args) => {
  // Для всіх як слід сформованих шаблонних літералів завжди буде N аргументів
  // і (N+1) рядкових сегментів.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = [
  "Вивчити JavaScript",
  "Вивчити API Вебу",
  "Зробити власний вебсайт",
  "Успіх!",
];

const progress = { javascript: 20, html: 50, css: 10 };

print`Що я повинен зробити:
${todos}
Мій поточний прогрес: ${progress}
`;

// Що я повинен зробити:
// - Вивчити JavaScript
// - Вивчити API Вебу
// - Зробити власний вебсайт
// - Успіх!
// Мій поточний прогрес: {"javascript":20,"html":50,"css":10}
```

Оскільки теговані шаблонні літерали – це лишень цукор викликів функцій, код вище можна переписати у вигляді рівносильного виклику функції:

```js
print(
  ["Що я повинен зробити:\n", "\nМій поточний прогрес: ", "\n"],
  todos,
  progress,
);
```

Це може нагадувати про інтерполяцію в стилі `console.log`:

```js
console.log(
  "Що я повинен зробити:\n%o\nМій поточний прогрес: %o\n",
  todos,
  progress,
);
```

Як видно, теговані шаблони читаються природніше за традиційну функцію-"форматувальника", для якої змінні та сам шаблон повинні бути оголошені окремо.

#### Використання в рядках спеціальних символів

Крім звичайних символів, у рядки можна додавати спеціальні символи, як показано в наступному прикладі.

```js
"один рядок \n інший рядок";
```

Наступна таблиця перелічує спеціальні символи, які можна використовувати в рядках JavaScript.

| Символ      | Значення                                                                                                                                                                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Нульовий байт                                                                                                                                                                                                                                                     |
| `\b`        | Реверс                                                                                                                                                                                                                                                            |
| `\f`        | Нова сторінка                                                                                                                                                                                                                                                     |
| `\n`        | Новий рядок                                                                                                                                                                                                                                                       |
| `\r`        | Повернення каретки                                                                                                                                                                                                                                                |
| `\t`        | Табуляція                                                                                                                                                                                                                                                         |
| `\v`        | Вертикальна табуляція                                                                                                                                                                                                                                             |
| `\'`        | Апостроф чи одинарна лапка                                                                                                                                                                                                                                        |
| `\"`        | Подвійна лапка                                                                                                                                                                                                                                                    |
| `\\`        | Символ зворотного скосу                                                                                                                                                                                                                                           |
| `\XXX`      | Символ з кодуванням Latin-1, заданий не більш ніж трьома вісімковими цифрами `XXX`, від `0` до `377`. Наприклад, `\251` – це вісімкова послідовність символу авторського права.                                                                                   |
| `\xXX`      | Символ з кодуванням Latin-1, заданий двома шістнадцятковими цифрами `XX`, від `00` до `FF`. Наприклад, `\xA9` – це шістнадцяткова послідовність для символу авторського права.                                                                                    |
| `\uXXXX`    | Символ Unicode, заданий чотирма шістнадцятковими цифрами `XXXX`. Наприклад, `\u00A9` – це послідовність Unicode для символу авторського права. Дивіться [Екранувальні послідовності Unicode](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#riadkovi-literaly) |
| `\u{XXXXX}` | Екранування кодових точок Unicode. Наприклад, `\u{2F804}` – це те саме, що й прості екранування Unicode `\uD87E\uDC04`.                                                                                                                                           |

#### Екранування символів

Для символів, не згаданих у таблиці вище, зворотний скіс перед ними ігнорується, але таке його використання є нерекомендованим, його слід уникати.

Символи лапок можна додавати в рядок, ставлячи перед ними зворотний скіс. Це зветься _екрануванням_ символу лапки. Наприклад:

```js-nolint
const quote = "Він читав \"The Cremation of Sam McGee\" Роберта В. Сервіса.";
console.log(quote);
```

Результатом буде:

```plain
Він читав "The Cremation of Sam McGee" Роберта В. Сервіса.
```

Щоб додати в рядок буквальний зворотний скіс, необхідно екранувати його. Наприклад, щоб присвоїти рядкове значення `c:\temp`, слід використати наступне:

```js
const home = "c:\\temp";
```

Також можна екранувати розриви рядків, ставлячи перед ними зворотні скоси. І зворотні скоси, і розриви рядків тоді вилучаються зі значення рядка.

```js
const str =
  "цей рядок \
розбитий \
на кілька \
рядків.";
console.log(str); // цей рядок розбитий на кілька рядків.
```

## Більше інформації

Цей розділ зосереджений на базовому синтаксисі оголошень і типів. Щоб дізнатися більше про конструкції мови JavaScript, також варто переглянути наступні розділи цього посібника:

- [Керування плином виконання й обробка помилок](/uk/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Цикли та ітерування](/uk/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Функції](/uk/docs/Web/JavaScript/Guide/Functions)
- [Вирази й оператори](/uk/docs/Web/JavaScript/Guide/Expressions_and_operators)

У наступному розділі поглянемо на конструкції керування плином виконання й обробку помилок.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}