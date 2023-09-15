---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
page-type: javascript-operator
browser-compat: javascript.operators.typeof
---

{{JSSidebar("Operators")}}

Оператор **`typeof`** ("тип ...") повертає рядок, який вказує на тип значення операнда.

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## Синтаксис

```js-nolint
typeof operand
```

### Параметри

- `operand`
  - : Вираз, який позначає об'єкт або [примітив](/uk/docs/Glossary/Primitive), чий тип буде повернено.

## Опис

Таблиця нижче наводить всі можливі повернені значення `typeof`. Більше інформації про типи та примітиви можна знайти на сторінці, присвяченій [структурам даних JavaScript](/uk/docs/Web/JavaScript/Data_structures).

| Тип                                                                                                                                                                                                   | Результат                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [Undefined](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined)                                                                                                                               | `"undefined"`                        |
| [Null](/uk/docs/Web/JavaScript/Reference/Operators/null)                                                                                                                                              | `"object"` ([причина](#typeof-null)) |
| [Boolean](/uk/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                   | `"boolean"`                          |
| [Number](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                                                     | `"number"`                           |
| [BigInt](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt)                                                                                                                                     | `"bigint"`                           |
| [String](/uk/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                     | `"string"`                           |
| [Symbol](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol)                                                                                                                                     | `"symbol"`                           |
| Об'єкт [Function](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function) (реалізовує [[Call]] у термінах ECMA-262; [класи](/uk/docs/Web/JavaScript/Reference/Statements/class) також є функціями) | `"function"`                         |
| Будь-який інший об'єкт                                                                                                                                                                                | `"object"`                           |

Цей список значень є вичерпним. Повідомляють, що рушії, котрі не відповідають специфікації, виробляють (чи історично виробляли) інакші значення, ніж перелічені вище.

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
typeof null === "object";
```

В першій реалізації JavaScript, його значення позначалися як тег типу та власне значення. Тег типу для об'єктів був `0`. `null` позначався як нульовим вказівником (на більшості платформ це `0x00`). Як наслідок, `null` мав тег типу `0`, тому `typeof` повертає значення `"object"`. ([посилання (англ.)](https://2ality.com/2013/10/typeof-null.html))

Було запропоновано виправлення для ECMAScript (як "opt-in" — можливість, яку можна було б увімкнути), проте [його відхилили](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). Результатом його прийняття була б рівність `typeof null === 'null'`.

### Застосування оператора new

Усі функції-конструктори, викликані з [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new), повернуть непримітиви (`"object"` чи `"function"`). Більшість повертає об'єкти, крім вагомого винятку в особі [`Function`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function), що повертає функцію.

```js
const str = new String("String");
const num = new Number(100);

typeof str; // 'object'
typeof num; // 'object'

const func = new Function();

typeof func; // 'function'
```

### Потреба в дужках в синтаксисі

Оператор `typeof` має вищий [пріоритет](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence), ніж бінарні оператори типу оператора додавання (`+`). Таким чином, для обчислення типу результату додавання необхідні дужки.

```js
// За допомогою дужок можна визначати тип даних цілих виразів.
const someData = 99;

typeof someData + " Wisen"; // 'number Wisen'
typeof (someData + " Wisen"); // 'string'
```

### Взаємодія з неоголошеними й неініціалізованими змінними

Загалом `typeof` гарантовано поверне рядок, для будь-якого наданого операнда. Навіть з неоголошеними ідентифікаторами `typeof` поверне `"undefined"`, а не викине помилку.

```js
typeof undeclaredVariable; // "undefined"
```

Проте застосування `typeof` на лексичних оголошеннях ({{JSxRef("Statements/let", "let")}} {{JSxRef("Statements/const", "const")}} і [`class`](/uk/docs/Web/JavaScript/Reference/Statements/class)), в тому ж блоці перед місцем оголошення, викине {{JSxRef("ReferenceError")}}. Змінні блокової видимості перебувають у _[темпоральній мертвій зоні](/uk/docs/Web/JavaScript/Reference/Statements/let#temporalna-mertva-zona-tdz)_ від початку блока до обробки ініціалізації, протягом чого така змінна викине помилку, якщо спробувати до неї звернутися.

```js example-bad
typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}
```

### Виняткова поведінка document.all

Всі актуальні браузери дають змогу доступитися до нестандартного об'єкта системного об'єкта [`document.all`](/uk/docs/Web/API/Document/all)
з типом `undefined`.

```js
typeof document.all === "undefined";
```

Попри те, що `document.all` також є [хибним значенням](/uk/docs/Glossary/Falsy) і [приблизно дорівнює](/uk/docs/Web/JavaScript/Reference/Operators/Equality) `undefined`, він не є [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined). Ситуація з тим, що `document.all` має тип `"undefined"`, класифікована у вебстандартах як "навмисне порушення" оригінального стандарту ECMAScript заради сумісності.

### Власний метод, що отримує більш конкретний тип

Оператор `typeof` дуже корисний, проте він не настільки універсальний, наскільки це може бути потрібно. Наприклад, `typeof []` дорівнює `'object'`, так само як `typeof new Date()`, `typeof /abc/` тощо.

Для більшої конкретики при перевірці типів, нижче представлена самописна функція `type(value)`, котра здебільшого імітує логіку `typeof`, але для непримітивних значень (наприклад, об'єктів та функцій) повертає більш гранульоване ім'я типу, коли це можливо.

```js
function type(value) {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // Примітивні типи
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }
  // Symbol.toStringTag нерідко вказує на "показне ім'я"
  // класу об'єкта. Він використовується в Object.prototype.toString().
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }
  // Якщо це функція, чий вихідний код починається з ключового слова "class"
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }
  // Ім'я конструктора; наприклад, `Array`, `GeneratorFunction`,
  // `Number`, `String`, `Boolean` чи `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }
  // Тут вже немає надійного способа отримати тип значення,
  // тож застосовується базова реалізація.
  return baseType;
}
```

Для перевірки недійсних змінних, які в іншому випадку викинули б {{JSxRef("ReferenceError")}}, слід застосовувати `typeof nonExistentVar === 'undefined'`, адже таку поведінку неможливо імітувати за допомогою самописного коду.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{JSxRef("Operators/instanceof", "instanceof")}}
- [`document.all` — навмисне порушення стандарту (англ.)](https://github.com/tc39/ecma262/issues/668)
