---
title: Довідник з JavaScript
slug: Web/JavaScript/Reference
page-type: landing-page
---

{{JsSidebar}}

Довідник JavaScript служить вмістилищем фактів про мову JavaScript. Тут докладно описана вся мова. При написанні коду на JavaScript саме до цих сторінок доведеться найчастіше звертатися.

Мова JavaScript задумана для використання в певному більшому середовищі – браузері, сценаріях на сервері чи чомусь подібному. Здебільшого цей довідник прагне бути агностичним щодо середовища і не зосереджуватись на середовищі веббраузера.

Якщо ви лишень знайомитесь із JavaScript, то почніть з [посібника](/uk/docs/Web/JavaScript/Guide). Коли матимете впевнене розуміння корінних засад, зможете використовувати довідник для отримання докладнішої інформації про окремі об'єкти або конструкції мови.

## Вбудовані об'єкти

[Стандартні вбудовані об'єкти JavaScript](/uk/docs/Web/JavaScript/Reference/Global_Objects), разом з їхніми властивостями й методами.

### Властивості-значення

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

### Властивості-функції

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{JSxRef("Global_Objects/escape", "escape()")}} {{Deprecated_Inline}}
- {{JSxRef("Global_Objects/unescape", "unescape()")}} {{Deprecated_Inline}}

### Корінні об'єкти

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Об'єкти помилок

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("InternalError")}} {{Non-Standard_Inline}}

### Числа та дати

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### Робота з текстом

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### Колекції з індексами

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}

### Колекції з ключами

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### Структуровані дані

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("DataView")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("JSON")}}

### Керування пам'яттю

- {{JSxRef("WeakRef")}}
- {{JSxRef("FinalizationRegistry")}}

### Об'єкти абстракцій контролю

- {{JSxRef("Iterator")}}
- {{JSxRef("AsyncIterator")}}
- {{JSxRef("Promise")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}

### Рефлексія

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### Інтернаціоналізація

- {{JSxRef("Intl")}}
- {{JSxRef("Intl.Collator")}}
- {{JSxRef("Intl.DateTimeFormat")}}
- {{JSxRef("Intl.DisplayNames")}}
- {{JSxRef("Intl.DurationFormat")}}
- {{JSxRef("Intl.ListFormat")}}
- {{JSxRef("Intl.Locale")}}
- {{JSxRef("Intl.NumberFormat")}}
- {{JSxRef("Intl.PluralRules")}}
- {{JSxRef("Intl.RelativeTimeFormat")}}
- {{JSxRef("Intl.Segmenter")}}

### Інші

- {{JSxRef("Functions/arguments", "arguments")}}

## Інструкції

[Інструкції та оголошення JavaScript](/uk/docs/Web/JavaScript/Reference/Statements)

### Керування потоком виконання

- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### Оголошення змінних

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### Функції та класи

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}

### Ітерації

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### Інші

- {{jsxref("Statements/Empty", "Порожня інструкція", "", 1)}}
- {{jsxref("Statements/block", "Блок", "", 1)}}
- {{jsxref("Statements/Expression_statement", "Інструкція-вираз", "", 1)}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "label", "", 1)}}
- {{jsxref("Statements/with", "with")}} {{Deprecated_Inline}}

## Вирази та оператори

[Вирази та оператори JavaScript](/uk/docs/Web/JavaScript/Reference/Operators).

### Основні вирази

- {{JSxRef("Operators/this", "this")}}
- [Literals](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#literaly)
- {{JSxRef("Global_Objects/Array", "[]")}}
- {{JSxRef("Operators/Object_initializer", "{}")}}
- {{JSxRef("Operators/function", "function")}}
- {{JSxRef("Operators/class", "class")}}
- {{JSxRef("Operators/function*", "function*")}}
- {{JSxRef("Operators/async_function", "async function")}}
- {{JSxRef("Operators/async_function*", "async function*")}}
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
- {{JSxRef("Template_literals", "`string`")}}
- {{JSxRef("Operators/Grouping", "( )")}}

### Вирази лівої сторони

- {{JSxRef("Operators/Property_accessors", "Доступ до властивостей", "", 1)}}
- {{JSxRef("Operators/Optional_chaining", "?.")}}
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
- {{JSxRef("Operators/import%2Emeta", "import.meta")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/import", "import()")}}

### Інкремент та декремент

- {{JSxRef("Operators/Increment", "A++")}}
- {{JSxRef("Operators/Decrement", "A--")}}
- {{JSxRef("Operators/Increment", "++A")}}
- {{JSxRef("Operators/Decrement", "--A")}}

### Унарні оператори

- {{JSxRef("Operators/delete", "delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators/Unary_plus", "+")}}
- {{JSxRef("Operators/Unary_negation", "-")}}
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
- {{JSxRef("Operators/Logical_NOT", "!")}}
- {{JSxRef("Operators/await", "await")}}

### Арифметичні оператори

- {{JSxRef("Operators/Exponentiation", "**")}}
- {{JSxRef("Operators/Multiplication", "*")}}
- {{JSxRef("Operators/Division", "/")}}
- {{JSxRef("Operators/Remainder", "%")}}
- {{JSxRef("Operators/Addition", "+")}} (Плюс)
- {{JSxRef("Operators/Subtraction", "-")}}

### Реляційні оператори

- {{JSxRef("Operators/Less_than", "&lt;")}} (Менше)
- {{JSxRef("Operators/Greater_than", "&gt;")}} (Більше)
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators/in", "in")}}

### Оператори рівності

- {{JSxRef("Operators/Equality", "==")}}
- {{JSxRef("Operators/Inequality", "!=")}}
- {{JSxRef("Operators/Strict_equality", "===")}}
- {{JSxRef("Operators/Strict_inequality", "!==")}}

### Оператори побітового зсуву

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### Бінарні оператори для бітової логіки

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
- {{JSxRef("Operators/Bitwise_OR", "|")}}
- {{JSxRef("Operators/Bitwise_XOR", "^")}}

### Бінарні логічні оператори

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
- {{JSxRef("Operators/Logical_OR", "||")}}
- {{JSxRef("Operators/Nullish_coalescing", "??")}}

### Умовний (тернарний) оператор

- {{JSxRef("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}

### Оператори присвоєння

- {{JSxRef("Operators/Assignment", "=")}}
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
- {{JSxRef("Operators/Division_assignment", "/=")}}
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
- {{JSxRef("Operators/Addition_assignment", "+=")}}
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
- {{JSxRef("Operators/Nullish_coalescing_assignment", "??=")}}
- [`[a, b] = arr`, `{ a, b } = obj`](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Оператори видачі

- {{JSxRef("Operators/yield", "yield")}}
- {{JSxRef("Operators/yield*", "yield*")}}

### Синтаксис розгортання

- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### Оператор коми

- {{JSxRef("Operators/Comma_operator", ",")}}

## Функції

[Функції у JavaScript.](/uk/docs/Web/JavaScript/Reference/Functions)

- {{JSXRef("Functions/Arrow_functions", "Стрілкові функції", "", 1)}}
- {{JSxRef("Functions/Default_parameters", "Усталені параметри", "", 1)}}
- {{JSxRef("Functions/rest_parameters", "Решта параметрів", "", 1)}}
- {{JSxRef("Functions/arguments", "arguments")}}
- {{JSxRef("Functions/Method_definitions", "Опис методів", "", 1)}}
- {{JSxRef("Functions/get", "гетер", "", 1)}}
- {{JSxRef("Functions/set", "сетер", "", 1)}}

## Класи

[Класи в JavaScript.](/uk/docs/Web/JavaScript/Reference/Classes)

- {{JSxRef("Classes/Constructor", "constructor")}}
- {{JSxRef("Classes/extends", "extends")}}
- [Приватні властивості класів](/uk/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [Публічні поля класів](/uk/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{JSxRef("Classes/static", "static")}}
- [Блоки статичної ініціалізації](/uk/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## Додаткові довідкові сторінки

- {{JSxRef("Lexical_grammar", "Лексична граматика", "", 1)}}
- [Типи та структури даних](/uk/docs/Web/JavaScript/Data_structures)
- [Протоколи ітерування](/uk/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Прикінцеві коми](/uk/docs/Web/JavaScript/Reference/Trailing_commas)
- [Помилки](/uk/docs/Web/JavaScript/Reference/Errors)
- {{JSxRef("Strict_mode", "Суворий режим", "", 1)}}
- {{JSxRef("Deprecated_and_obsolete_features", "Нерекомендовані можливості", "", 1)}}
