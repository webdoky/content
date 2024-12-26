---
title: Довідник з JavaScript
slug: Web/JavaScript/Reference
page-type: landing-page
---

{{jsSidebar}}

Довідник JavaScript служить вмістилищем фактів про мову JavaScript. Тут докладно описана вся мова. При написанні коду на JavaScript саме до цих сторінок доведеться найчастіше звертатися.

Мова JavaScript задумана для використання в певному більшому середовищі – браузері, сценаріях на сервері чи чомусь подібному. Здебільшого цей довідник прагне бути агностичним щодо середовища і не зосереджуватись на середовищі веббраузера.

Якщо ви лишень знайомитесь із JavaScript, то почніть з [посібника](/uk/docs/Web/JavaScript/Guide). Коли матимете впевнене розуміння корінних засад, зможете використовувати довідник для отримання докладнішої інформації про окремі об'єкти або конструкції мови.

## Вбудовані об'єкти

[Стандартні вбудовані об'єкти JavaScript](/uk/docs/Web/JavaScript/Reference/Global_Objects), разом з їхніми властивостями й методами.

### Властивості-значення

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Властивості-функції

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("isFinite()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("escape()")}} {{deprecated_inline}}
- {{jsxref("unescape()")}} {{deprecated_inline}}

### Корінні об'єкти

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### Об'єкти помилок

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### Числа та дати

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Робота з текстом

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Колекції з індексами

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### Колекції з ключами

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Структуровані дані

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### Керування пам'яттю

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### Об'єкти абстракцій контролю

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}

### Рефлексія

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Інтернаціоналізація

- {{jsxref("Intl")}}
- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.Segmenter")}}

### Інші

- {{jsxref("Functions/arguments", "arguments")}}

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
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}

## Вирази та оператори

[Вирази та оператори JavaScript](/uk/docs/Web/JavaScript/Reference/Operators).

### Основні вирази

- {{jsxref("Operators/this", "this")}}
- [Літерали](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#literaly)
- {{jsxref("Array", "[]")}}
- {{jsxref("Operators/Object_initializer", "{}")}}
- {{jsxref("Operators/function", "function")}}
- {{jsxref("Operators/class", "class")}}
- {{jsxref("Operators/function*", "function*")}}
- {{jsxref("Operators/async_function", "async function")}}
- {{jsxref("Operators/async_function*", "async function*")}}
- {{jsxref("RegExp", "/ab+c/i")}}
- {{jsxref("Template_literals", "`string`")}}
- {{jsxref("Operators/Grouping", "( )")}}

### Вирази лівої сторони

- {{jsxref("Operators/Property_accessors", "Доступ до властивостей", "", 1)}}
- {{jsxref("Operators/Optional_chaining", "?.")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Operators/new.target", "new.target")}}
- {{jsxref("Operators/import.meta", "import.meta")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Operators/import", "import()")}}

### Інкремент та декремент

- {{jsxref("Operators/Increment", "A++")}}
- {{jsxref("Operators/Decrement", "A--")}}
- {{jsxref("Operators/Increment", "++A")}}
- {{jsxref("Operators/Decrement", "--A")}}

### Унарні оператори

- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Operators/Unary_plus", "+")}}
- {{jsxref("Operators/Unary_negation", "-")}}
- {{jsxref("Operators/Bitwise_NOT", "~")}}
- {{jsxref("Operators/Logical_NOT", "!")}}
- {{jsxref("Operators/await", "await")}}

### Арифметичні оператори

- {{jsxref("Operators/Exponentiation", "**")}}
- {{jsxref("Operators/Multiplication", "*")}}
- {{jsxref("Operators/Division", "/")}}
- {{jsxref("Operators/Remainder", "%")}}
- {{jsxref("Operators/Addition", "+")}} (Плюс)
- {{jsxref("Operators/Subtraction", "-")}}

### Реляційні оператори

- {{jsxref("Operators/Less_than", "&lt;")}} (Менше)
- {{jsxref("Operators/Greater_than", "&gt;")}} (Більше)
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/in", "in")}}

### Оператори рівності

- {{jsxref("Operators/Equality", "==")}}
- {{jsxref("Operators/Inequality", "!=")}}
- {{jsxref("Operators/Strict_equality", "===")}}
- {{jsxref("Operators/Strict_inequality", "!==")}}

### Оператори побітового зсуву

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### Бінарні оператори для бітової логіки

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
- {{jsxref("Operators/Bitwise_OR", "|")}}
- {{jsxref("Operators/Bitwise_XOR", "^")}}

### Бінарні логічні оператори

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
- {{jsxref("Operators/Logical_OR", "||")}}
- {{jsxref("Operators/Nullish_coalescing", "??")}}

### Умовний (тернарний) оператор

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}

### Оператори присвоєння

- {{jsxref("Operators/Assignment", "=")}}
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
- {{jsxref("Operators/Division_assignment", "/=")}}
- {{jsxref("Operators/Remainder_assignment", "%=")}}
- {{jsxref("Operators/Addition_assignment", "+=")}}
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
- [`[a, b] = arr`, `{ a, b } = obj`](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Оператори видачі

- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}

### Синтаксис розгортання

- {{jsxref("Operators/Spread_syntax", "...obj")}}

### Оператор коми

- {{jsxref("Operators/Comma_operator", ",")}}

## Функції

[Функції у JavaScript.](/uk/docs/Web/JavaScript/Reference/Functions)

- {{jsxref("Functions/Arrow_functions", "Стрілкові функції", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Усталені параметри", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Решта параметрів", "", 1)}}
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Functions/Method_definitions", "Опис методів", "", 1)}}
- {{jsxref("Functions/get", "гетер", "", 1)}}
- {{jsxref("Functions/set", "сетер", "", 1)}}

## Класи

[Класи в JavaScript.](/uk/docs/Web/JavaScript/Reference/Classes)

- {{jsxref("Classes/Constructor", "constructor")}}
- {{jsxref("Classes/extends", "extends")}}
- [Приватні властивості](/uk/docs/Web/JavaScript/Reference/Classes/Private_properties)
- [Публічні поля класів](/uk/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Classes/static", "static")}}
- [Блоки статичної ініціалізації](/uk/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## Регулярні вирази

[Регулярні вирази JavaScript.](/uk/docs/Web/JavaScript/Reference/Regular_expressions)

- [Зворотні посилання: `\1`, `\2`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Групи захоплення: `(...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Класи символів: `[...]`, `[^...]`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Екранування класів символів: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Екранування символів: `\n`, `\u{...}`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Диз'юнкція: `|`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Твердження про межу вводу: `^`, `$`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Буквальні символи: `a`, `b`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Твердження зазирання: `(?=...)`, `(?!...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Твердження озирання: `(?<=...)`, `(?<!...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Модифікатори: `(?ims-ims:...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Іменовані зворотні посилання: `\k<name>`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Іменовані групи захоплення: `(?<name>...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Незахоплювальні групи: `(?:...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Квантифікатори: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Екранування класів символів Unicode: `\p{...}`, `\P{...}`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Джокер: `.`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
- [Твердження про межі слів: `\b`, `\B`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)

## Додаткові довідкові сторінки

- {{jsxref("Lexical_grammar", "Лексична граматика", "", 1)}}
- [Типи та структури даних](/uk/docs/Web/JavaScript/Data_structures)
- [Протоколи ітерування](/uk/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Прикінцеві коми](/uk/docs/Web/JavaScript/Reference/Trailing_commas)
- [Помилки](/uk/docs/Web/JavaScript/Reference/Errors)
- {{jsxref("Strict_mode", "Суворий режим", "", 1)}}
- {{jsxref("Deprecated_and_obsolete_features", "Нерекомендовані можливості", "", 1)}}
