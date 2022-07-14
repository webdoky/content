---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - Unary
browser-compat: javascript.operators.typeof
---
{{JSSidebar("Operators")}}

Оператор **`typeof`** ("тип ...") повертає рядок, який вказує на тип операнда, без його обчислення.

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## Синтаксис

Оператор `typeof`, за яким слідує його операнд:

```js
typeof operand
typeof(operand)
```

### Параметри

- `operand`
  - : Вираз, який позначає об'єкт або [примітив](/uk/docs/Glossary/Primitive), чий тип буде повернено.

## Опис

Таблиця нижче наводить всі можливі повернені значення `typeof`. Більше інформації про типи та примітиви можна знайти на сторінці, присвяченій [структурам даних JavaScript](/uk/docs/Web/JavaScript/Data_structures).

| Тип                                                                                              | Результат                               |
| ------------------------------------------------------------------------------------------------ | --------------------------------------- |
| [Undefined](/uk/docs/Glossary/undefined)                                                         | `"undefined"`                           |
| [Null](/uk/docs/Glossary/Null)                                                                   | `"object"` (див. [нижче](#typeof_null)) |
| [Boolean](/uk/docs/Glossary/Boolean)                                                             | `"boolean"`                             |
| [Number](/uk/docs/Glossary/Number)                                                               | `"number"`                              |
| [BigInt](/uk/docs/Glossary/BigInt) (з'явився в ECMAScript 2020)                                  | `"bigint"`                              |
| [String](/uk/docs/Glossary/String)                                                               | `"string"`                              |
| [Symbol](/uk/docs/Glossary/Symbol) (з'явився в ECMAScript 2015)                                  | `"symbol"`                              |
| Об'єкт [Function](/uk/docs/Glossary/Function) (реалізовує метод [[Call]] в термінах ECMA-262)    | `"function"`                            |
| Будь-який інший об'єкт                                                                           | `"object"`                              |

> **Примітка:** ECMAScript 2019 та старіші вільні реалізації `typeof`
> повертають будь-які визначені реалізацією рядкові значення для нестандартних
> екзотичних об'єктів, непридатних для викликання.
>
> Єдиним браузером, про який відомо, що йому вдалося цим скористатися, був старий
> Internet Explorer (див. [нижче](#ie-specific_notes)).

## Приклади

### Елементарне застосування

```js
// Числа
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Не дивлячись на те, що це "Not-A-Number"
typeof Number('1') === 'number';      // Конструктор Number намагається перетворити значення на числа
typeof Number('shoe') === 'number';   // навіть ті, які неможливо привести до числа

typeof 42n === 'bigint';

// Рядки
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `шаблонний літерал` === 'string';
typeof '1' === 'string'; // зауважте, що число всередині рядка все ж має рядковий тип
typeof (typeof 1) === 'string'; // typeof завжди повертає рядок
typeof String(1) === 'string'; // конструктор String перетворює все на рядок, безпечніше за toString

// Булеві значення
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // конструктор Boolean() перетворює значення залежно від того, істинні вони чи хибні
typeof !!(1) === 'boolean'; // подвійний виклик оператора ! (логічне НЕ) еквівалентно виклику конструктора Boolean()

// Символи
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Об'єкти
typeof {a: 1} === 'object';

// Для розрізнення звичайних об'єктів від масивів слід
// застосовувати Array.isArray або Object.prototype.toString.call
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // історичні результати можна знайти в секції "Регулярні вирази"

// Наступні варіанти — заплутані, небезпечні і марнотратні. Їх слід уникати.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// Функції
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
```

### `typeof null`

```js
// Ця рівність зберігається з часів створення JavaScript
typeof null === 'object';
```

В першій реалізації JavaScript, його значення позначалися як тег типу та власне значення. Тег типу для об'єктів був `0`. `null` позначався як нульовим вказівником (на більшості платформ це `0x00`). Як наслідок, `null` мав тег типу `0`, тому `typeof` повертає значення `"object"`. ([посилання (англ.)](https://2ality.com/2013/10/typeof-null.html))

Було запропоновано виправлення для ECMAScript (як "opt-in" — можливість, яку можна було б увімкнути), проте [його відхилили](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). Результатом його прийняття була б рівність `typeof null === 'null'`.

### Застосування оператора `new`

```js
// Всі функції-конструктори, за винятком конструктора Function, завжди матимуть тип 'object'
let str = new String('String');
let num = new Number(100);

typeof str; // Поверне 'object'
typeof num; // Поверне 'object'

let func = new Function();

typeof func; // Поверне 'function'
```

### Потреба в дужках в синтаксисі

```js
// За допомогою дужок можна визначати тип даних цілих виразів.
let iData = 99;

typeof iData + ' Wisen'; // 'number Wisen'
typeof (iData + ' Wisen'); // 'string'
```

### Регулярні вирази

Регулярні вирази, які можна було викликати, були нестандартним доповненням у деяких браузерах.

```js
typeof /s/ === 'function'; // Chrome 1-12 — не відповідає ECMAScript 5.1
typeof /s/ === 'object';   // Firefox 5+  — згідно ECMAScript 5.1
```

### Помилки

До ECMAScript 2015 гарантувалося, що `typeof` завжди повертатиме рядок для будь-якого операнда, який йому буде передано. Навіть для неоголошених ідентифікаторів `typeof` поверне `'undefined'`. Неможливо було спричинити помилку за допомогою `typeof`.

Проте, з появою {{JSxRef("Statements/let", "let")}} та {{JSxRef("Statements/const", "const")}} з блоковою областю видимості, застосування `typeof` на змінній `let` чи `const` (або при застосуванні `typeof` на `class`) в блоці до їхнього оголошення викине {{JSxRef("ReferenceError")}}. Змінні з блоковою областю видимості знаходяться у "[мертвій часовій зоні](/uk/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" від початку блоку і до обробки ініціалізації, в межах якої будь-яка спроба доступитися до змінної викине помилку.

```js
typeof undeclaredVariable === 'undefined';

typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = 'hello';
class newClass{};
```

### Винятки

Всі актуальні браузери дають змогу доступитися до нестандартного об'єкта системного об'єкта [`document.all`](/uk/docs/Web/API/Document/all)
з типом `undefined`.

```js
typeof document.all === 'undefined';
```

Хоча специфікація дає змогу мати користувацькі теги типу для нестандартних екзотичних об'єктів, вона вимагає, щоб ці теги відрізнялися від раніше заданих. Випадок з `document.all`, що має тип `'undefined'`, класифіковано у вебстандартах як "навмисне порушення" первісного стандарту ECMA JavaScript.

### Застосування в реальному світі

Оператор `typeof` дуже корисний, проте він не настільки універсальний, наскільки це може бути потрібно. Наприклад, `typeof([])` дорівнює `'object'`, так само як `typeof(new Date())`, `typeof(/abc/)` та ін.

Для більшої специфічности під час перевірки типів можна зробити таку обгортку над `typeof` для використання в робочому коді (за умови, що `obj` існує):

```js
  function type(obj, showFullClass) {

    // отримує toPrototypeString() від obj (обробляє всі типи)
    if (showFullClass && typeof obj === "object") {
        return Object.prototype.toString.call(obj);
    }
    if (obj == null) { return (obj + '').toLowerCase(); } // неявне перетворення toString()

    var deepType = Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
    if (deepType === 'generatorfunction') { return 'function' }

    // Запобігає занадто специфічному результату (наприлад, [object HTMLDivElement], та ін.)
    // Враховує подібний до функції Regexp (Android <=2.3), подібний до функції елемент <object> (Chrome <=57, Firefox <=52), та ін.
    // String.prototype.match підтримується всюди.

    return deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/) ? deepType :
       (typeof obj === 'object' || typeof obj === 'function') ? 'object' : typeof obj;
  }
```

Для перевірки недійсних змінних, які в іншому випадку викинули б {{JSxRef("ReferenceError")}}, слід застосовувати `typeof nonExistentVar === 'undefined'`.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

### Примітки стосовно IE

Велика кількість системних об'єктів у середовищі IE 6, 7, та 8 — об'єкти, а не функції. Наприклад:

```js
typeof alert === 'object'
```

Деякі нестандартні властивості IE повертають інші значення ([tc39/ecma262#1440 (коментар - англ.)](https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872)):

```js
typeof window.external.AddSearchProvider === "unknown";
typeof window.external.IsSearchProviderInstalled === "unknown";
```

## Дивіться також

- {{JSxRef("Operators/instanceof", "instanceof")}}
- [`document.all` — навмисне порушення стандарту (англ.)](https://github.com/tc39/ecma262/issues/668)
