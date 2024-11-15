---
title: Вирази та оператори
slug: Web/JavaScript/Reference/Operators
page-type: landing-page
browser-compat: javascript.operators
---

{{jsSidebar("Operators")}}

Цей розділ документує всі оператори, вирази й ключові слова мови JavaScript.

## Вирази та оператори за категоріями

Для перегляду списку в алфавітному порядку зверніть увагу на ліву бокову панель.

### Первинні вирази

Базові ключові слова та загальні вирази в JavaScript. Ці вирази мають вищий пріоритет (вищий за пріоритет [операторів](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("Operators/this", "this")}} (це)
  - : Ключове слово `this` посилається на спеціальну властивість контексту виконання.
- [Літерали](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#literaly)
  - : Базові літерали `null`, булевих значень, чисел та рядків.
- {{jsxref("Array", "[]")}}
  - : Синтаксис ініціалізаторів, чи літералів, масивів.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Синтаксис об'єктних ініціалізаторів – літералів.
- {{jsxref("Operators/function", "function")}} (функція)
  - : Ключове слово `function` оголошує функціональний вираз.
- {{jsxref("Operators/class", "class")}} (клас)
  - : Ключове слово `class` оголошує вираз класу.
- {{jsxref("Operators/function*", "function*")}}
  - : Ключове слово `function*` оголошує вираз функції-генератора.
- {{jsxref("Operators/async_function", "async function")}} (асинхронна функція)
  - : `async function` оголошує вираз асинхронної функції.
- {{jsxref("Operators/async_function*", "async function*")}}
  - : Ключові слова `async function*` оголошують вираз асинхронної функції-генератора.
- {{jsxref("RegExp", "/ab+c/i")}}
  - : Літеральний синтаксис регулярного виразу.
- {{jsxref("Template_literals", "`string`")}}
  - : Синтаксис шаблонних літералів.
- {{jsxref("Operators/Grouping", "( )")}} (дужки)
  - : Оператор групування.

### Вирази лівої сторони

Лівосторонні значення є пунктом призначення для присвоєння.

- {{jsxref("Operators/Property_accessors", "Засоби доступу до властивостей", "", 1)}}
  - : Оператори роботи з членами надають доступ до властивостей чи методів об'єкта (`object.property` і `object["property"]`)
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : Оператор необов'язкового зв'язування повертає `undefined` замість спричинення помилки, коли посилання є [порожнім](/uk/docs/Glossary/Nullish) (дорівнює [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) або [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- {{jsxref("Operators/new", "new")}} (нове)
  - : Оператор `new` створює новий екземпляр об'єкта за допомогою переданого конструктора.
- {{jsxref("Operators/new.target", "new.target")}} (нове.цільовий)
  - : Всередині конструктора `new.target` посилається на конструктор, який було викликано оператором {{jsxref("Operators/new", "new")}}.
- {{jsxref("Operators/import.meta", "import.meta")}} (імпорт.метадані)
  - : Об'єкт, що розкриває контекстно-специфічні метадані JavaScript-модуля.
- {{jsxref("Operators/super", "super")}} (вищий)
  - : Ключове слово `super` викликає батьківський конструктор або дає змогу звертатися до властивостей батьківського об'єкта.
- {{jsxref("Operators/import", "import()")}}
  - : Синтаксис `import()` дає змогу асинхронно та динамічно завантажувати модуль в середовищі, котре може не бути модульним.

### Збільшення та зменшення на одиницю

Постфіксні та префіксні оператори інкременту та декременту.

- {{jsxref("Operators/Increment", "A++")}}
  - : Постфіксний оператор інкременту.
- {{jsxref("Operators/Decrement", "A--")}}
  - : Постфіксний оператор декременту.
- {{jsxref("Operators/Increment", "++A")}}
  - : Префіксний оператор інкременту.
- {{jsxref("Operators/Decrement", "--A")}}
  - : Префіксний оператор декременту.

### Унарні оператори

Унарна операція — це операція з лише одним операндом.

- {{jsxref("Operators/delete", "delete")}} (видалити)
  - : Оператор `delete` видаляє властивість з об'єкта.
- {{jsxref("Operators/void", "void")}} (відкинути)
  - : Оператор `void` обчислює вираз та відкидає повернене ним значення.
- {{jsxref("Operators/typeof", "typeof")}} (тип ...)
  - : Оператор `typeof` визначає тип переданого об'єкта.
- {{jsxref("Operators/Unary_plus", "+")}} (плюс)
  - : Оператор «унарний плюс» перетворює операнд на значення типу Number.
- {{jsxref("Operators/Unary_negation", "-")}} (мінус)
  - : Оператор «унарний мінус» перетворює операнд на значення типу Number, а потім робить його від'ємним.
- {{jsxref("Operators/Bitwise_NOT", "~")}} (тильда)
  - : Бітовий оператор NOT.
- {{jsxref("Operators/Logical_NOT", "!")}} (знак оклику)
  - : Логічний оператор NOT.
- {{jsxref("Operators/await", "await")}}
  - : Призупиняє та відновлює виконання асинхронної функції та очікує на сповнення чи відхилення промісу.

### Арифметичні оператори

Арифметичні оператори приймають числові значення (як літерали, так і змінні) своїми операндами, і повертають єдине числове значення.

- {{jsxref("Operators/Exponentiation", "**")}}
  - : Оператор піднесення до степеня.
- {{jsxref("Operators/Multiplication", "*")}} (зірочка)
  - : Оператор множення.
- {{jsxref("Operators/Division", "/")}}
  - : Оператор ділення.
- {{jsxref("Operators/Remainder", "%")}} (відсоток)
  - : Оператор взяття остачі від ділення.
- {{jsxref("Operators/Addition", "+")}} (Plus)
  - : Оператор додавання.
- {{jsxref("Operators/Subtraction", "-")}}
  - : Оператор віднімання.

### Оператори відношення

Оператор порівняння порівнює операнди та повертає булеве значення, котре залежить від того, чи виконується умова порівняння.

- {{jsxref("Operators/Less_than", "&lt;")}} (менше)
  - : Оператор «менше».
- {{jsxref("Operators/Greater_than", "&gt;")}} (більше)
  - : Оператор «більше».
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Оператор «менше або дорівнює».
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Оператор «більше або дорівнює».
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : Оператор `instanceof` встановлює, чи є об'єкт примірником іншого об'єкта.
- {{jsxref("Operators/in", "in")}}
  - : Оператор `in` встановлює, чи має об'єкт дану властивість.

> [!NOTE] > `=>` — це не оператор, а позначення для [стрілкових функцій](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Оператори рівності

Результат обчислення оператора рівності — це завжди величина булевого типу, і її значення залежить від того, чи порівняння є істинним.

- {{jsxref("Operators/Equality", "==")}}
  - : Оператор рівності.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Оператор нерівності.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Оператор точної рівності.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Оператор точної нерівності.

### Оператори побітового зсуву

Операції зміщення всіх бітів операнда.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Оператор побітового зсуву вліво.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Оператор побітового зсуву вправо.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Оператор беззнакового побітового зсуву вправо.

### Бінарні бітові оператори

Бітові оператори вважають свої операнди наборами з 32 бітів (нулів та одиниць), і повертають стандартні для JavaScript числові значення.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}} (амперсанд)
  - : Бітовий AND.
- {{jsxref("Operators/Bitwise_OR", "|")}} (вертикальна риска)
  - : Бітовий OR.
- {{jsxref("Operators/Bitwise_XOR", "^")}} (циркумфлекс)
  - : Бітовий XOR.

### Бінарні логічні оператори

Логічні оператори реалізовують булеві (логічні) значення й мають логіку [закорочення](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting).

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Логічний AND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Логічне OR.
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : Оператор нульового злиття.

### Умовний (тернарний) оператор

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Умовний оператор повертає одне з двох значень залежно від логічного значення умови.

### Оператори присвоєння

Оператор присвоєння присвоює певне значення лівому операнду на основі значення правого.

- {{jsxref("Operators/Assignment", "=")}} (дорівнює)
  - : Оператор присвоєння.
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
  - : Присвоєння з множенням.
- {{jsxref("Operators/Division_assignment", "/=")}}
  - : Присвоєння з діленням.
- {{jsxref("Operators/Remainder_assignment", "%=")}}
  - : Присвоєння з отриманням остачі.
- {{jsxref("Operators/Addition_assignment", "+=")}}
  - : Присвоєння з додаванням.
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
  - : Присвоєння з відніманням.
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : Присвоєння зі зсувом вліво.
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Присвоєння зі зсувом вправо.
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Присвоєння з беззнаковим зсувом вправо.
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Присвоєння з бітовим AND.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Присвоєння з бітовим XOR.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Присвоєння з бітовим OR.
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
  - : Присвоєння з піднесенням до степеня.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Присвоєння з логічним AND.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Присвоєння з логічним OR.
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
  - : Присвоєння з нульовим злиттям.
- [`[a, b] = arr`, `{ a, b } = obj`](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - : Присвоєння з деструктуризацією дає змогу призначити властивості масиву чи об'єкта змінним, з використанням синтаксису, який має подібний до літералів масивів та об'єктів вигляд.

### Оператори видачі

- {{jsxref("Operators/yield", "yield")}}
  - : Призупиняє й відновлює виконання генераторної функції.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Делегує видачу іншій генераторній функції або ітерованому об'єктові.

### Синтаксис розгортання

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Синтаксис розгортання дає змогу розпустити ітерований об'єкт, як то масив чи рядок, у місцях, де очікуються нуль або більше аргументів (у випадку викликів функцій) чи елементів (у випадку літералів масивів). У об'єктному літералі синтаксис розгортання перелічує властивості об'єкта й додає пари ключ-значення до об'єкта, що створюється.

### Оператор коми

- {{jsxref("Operators/Comma_operator", ",")}}
  - : Оператор кома дозволяє обчислити декілька виразів як одну інструкцію і повертає результат останнього виразу.

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- [Пріоритет операторів](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
