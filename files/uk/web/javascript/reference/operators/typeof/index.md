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
typeof operand;
<!-- markdownlint-disable-next-line -->
typeof(operand);
```

### Параметри

- `operand`
  - : Вираз, який позначає об'єкт або [примітив](/uk/docs/Glossary/Primitive), чий тип буде повернено.

## Опис

Таблиця нижче наводить всі можливі повернені значення `typeof`. Більше інформації про типи та примітиви можна знайти на сторінці, присвяченій [структурам даних JavaScript](/uk/docs/Web/JavaScript/Data_structures).

| Тип                                                                                                                                                                    | Результат                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [Undefined](/uk/docs/Glossary/undefined)                                                                                                                               | `"undefined"`                           |
| [Null](/uk/docs/Glossary/Null)                                                                                                                                         | `"object"` (див. [нижче](#typeof_null)) |
| [Boolean](/uk/docs/Glossary/Boolean)                                                                                                                                   | `"boolean"`                             |
| [Number](/uk/docs/Glossary/Number)                                                                                                                                     | `"number"`                              |
| [BigInt](/uk/docs/Glossary/BigInt)                                                                                                                                     | `"bigint"`                              |
| [String](/uk/docs/Glossary/String)                                                                                                                                     | `"string"`                              |
| [Symbol](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol)                                                                                                      | `"symbol"`                              |
| Об'єкт [Function](/uk/docs/Glossary/Function) (реалізовує [[Call]] у термінах ECMA-262; [класи](/uk/docs/Web/JavaScript/Reference/Statements/class) також є функціями) | `"function"`                            |
| Будь-який інший об'єкт                                                                                                                                                 | `"object"`                              |

> **Примітка:** ECMAScript 2019 та старіші вільні реалізації `typeof`
> повертають будь-які визначені реалізацією рядкові значення для нестандартних
> екзотичних об'єктів, непридатних для викликання.
>
> Єдиним браузером, про який відомо, що йому вдалося цим скористатися, був старий
> Internet Explorer (див. [нижче](#prymitky-shchodo-ie)).

## Приклади

### Елементарне застосування

```js
// Числа
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof 42 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Не дивлячись на те, що це "Not-A-Number"
typeof Number('1') === 'number'; // Конструктор Number намагається перетворити значення на числа
typeof Number('shoe') === 'number'; // навіть ті, які неможливо привести до числа

typeof 42n === 'bigint';

// Рядки
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `шаблонний літерал` === 'string';
typeof '1' === 'string'; // зауважте, що число всередині рядка все ж має рядковий тип
<!-- markdownlint-disable-next-line -->
typeof (typeof 1) === 'string'; // typeof завжди повертає рядок
typeof String(1) === 'string'; // конструктор String перетворює все на рядок, безпечніше за toString

// Булеві значення
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // конструктор Boolean() перетворює значення залежно від того, істинні вони чи хибні
typeof !!1 === 'boolean'; // подвійний виклик оператора ! (логічне НЕ) еквівалентно виклику конструктора Boolean()

// Символи
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Об'єкти
typeof { a: 1 } === 'object';

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
typeof function () {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
```

### typeof null

```js
// Ця рівність зберігається з часів створення JavaScript
typeof null === 'object';
```

В першій реалізації JavaScript, його значення позначалися як тег типу та власне значення. Тег типу для об'єктів був `0`. `null` позначався як нульовим вказівником (на більшості платформ це `0x00`). Як наслідок, `null` мав тег типу `0`, тому `typeof` повертає значення `"object"`. ([посилання (англ.)](https://2ality.com/2013/10/typeof-null.html))

Було запропоновано виправлення для ECMAScript (як "opt-in" — можливість, яку можна було б увімкнути), проте [його відхилили](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). Результатом його прийняття була б рівність `typeof null === 'null'`.

### Застосування оператора new

```js
// Всі функції-конструктори, за винятком конструктора Function, завжди матимуть тип 'object'
const str = new String('String');
const num = new Number(100);

typeof str; // Поверне 'object'
typeof num; // Поверне 'object'

const func = new Function();

typeof func; // Поверне 'function'
```

### Потреба в дужках в синтаксисі

Оператор `typeof` має вищий [пріоритет](/uk/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), ніж бінарні оператори типу оператора додавання (`+`). Таким чином, для обчислення типу результату додавання необхідні дужки.

```js
// За допомогою дужок можна визначати тип даних цілих виразів.
const iData = 99;

typeof iData + ' Wisen'; // 'number Wisen'
typeof (iData + ' Wisen'); // 'string'
```

### Регулярні вирази

Регулярні вирази, які можна було викликати, були нестандартним доповненням у деяких браузерах.

```js
typeof /s/ === 'function'; // Chrome 1-12 — не відповідає ECMAScript 5.1
typeof /s/ === 'object'; // Firefox 5+  — згідно ECMAScript 5.1
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
class newClass {}
```

### Винятки

Всі актуальні браузери дають змогу доступитися до нестандартного об'єкта системного об'єкта [`document.all`](/uk/docs/Web/API/Document/all)
з типом `undefined`.

```js
typeof document.all === 'undefined';
```

Хоча специфікація дає змогу мати користувацькі теги типу для нестандартних екзотичних об'єктів, вона вимагає, щоб ці теги відрізнялися від раніше заданих. Випадок з `document.all`, що має тип `'undefined'`, класифіковано у вебстандартах як "навмисне порушення" первісного стандарту ECMA JavaScript.

### Власний метод, що отримує більш конкретний тип

Оператор `typeof` дуже корисний, проте він не настільки універсальний, наскільки це може бути потрібно. Наприклад, `typeof []` дорівнює `'object'`, так само як `typeof new Date()`, `typeof /abc/` тощо.

Для більшої конкретики при перевірці типів, нижче представлена самописна функція `type(value)`, котра здебільшого імітує логіку `typeof`, але для непримітивних значень (наприклад, об'єктів та функцій) повертає більш гранульоване ім'я типу, коли це можливо.

```js
function type(value) {
  if (typeof value !== 'object' && typeof value !== 'function') {
    return typeof value;
  }
  if (value === null) {
    return 'null';
  }
  if (
    Object.getPrototypeOf(value) === Function.prototype &&
    /^class/.test(String(value))
  ) {
    return 'class';
  }
  // Symbol.toStringTag часто вказує "ім'я для виведення" класу об'єкта
  if (
    Symbol.toStringTag in value &&
    typeof value[Symbol.toStringTag] === 'string'
  ) {
    return value[Symbol.toStringTag];
  }
  // Ім'я конструктора; наприклад: `Array`, `GeneratorFunction`,
  // `Number`, `String`, `Boolean` чи `MyCustomObject`
  if (
    typeof value.constructor.name === 'string' &&
    value.constructor.name !== ''
  ) {
    return value.constructor.name;
  }
  // В цій точці немає надійного способа отримати тип значення,
  // тож використовується базова реалізація.
  return typeof value;
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
typeof alert === 'object';
```

Деякі нестандартні властивості IE повертають інші значення ([tc39/ecma262#1440 (коментар - англ.)](https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872)):

```js
typeof window.external.AddSearchProvider === 'unknown';
typeof window.external.IsSearchProviderInstalled === 'unknown';
```

## Дивіться також

- {{JSxRef("Operators/instanceof", "instanceof")}}
- [`document.all` — навмисне порушення стандарту (англ.)](https://github.com/tc39/ecma262/issues/668)
