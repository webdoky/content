---
title: Вирази та оператори
slug: Web/JavaScript/Reference/Operators
page-type: landing-page
browser-compat: javascript.operators
---

{{JSSidebar("Operators")}}

Цей розділ документує всі оператори, вирази й ключові слова мови JavaScript.

## Вирази та оператори за категоріями

Для перегляду списку в алфавітному порядку зверніть увагу на ліву бокову панель.

### Первинні вирази

Базові ключові слова та загальні вирази в JavaScript. Ці вирази мають вищий пріоритет (вищий за пріоритет [операторів](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{JSxRef("Operators/this", "this")}} (це)
  - : Ключове слово `this` посилається на спеціальну властивість контексту виконання.
- [Літерали](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#literaly)
  - : Базові літерали `null`, булевих значень, чисел та рядків.
- {{JSxRef("Global_Objects/Array", "[]")}}
  - : Синтаксис ініціалізаторів, чи літералів, масивів.
- {{JSxRef("Operators/Object_initializer", "{}")}}
  - : Синтаксис об'єктних ініціалізаторів – літералів.
- {{JSxRef("Operators/function", "function")}} (функція)
  - : Ключове слово `function` оголошує функціональний вираз.
- {{JSxRef("Operators/class", "class")}} (клас)
  - : Ключове слово `class` оголошує вираз класу.
- {{JSxRef("Operators/function*", "function*")}}
  - : Ключове слово `function*` оголошує вираз функції-генератора.
- {{JSxRef("Operators/async_function", "async function")}} (асинхронна функція)
  - : `async function` оголошує вираз асинхронної функції.
- {{JSxRef("Operators/async_function*", "async function*")}}
  - : Ключові слова `async function*` оголошують вираз асинхронної функції-генератора.
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
  - : Літеральний синтаксис регулярного виразу.
- {{JSxRef("Template_literals", "`string`")}}
  - : Синтаксис шаблонних літералів.
- {{JSxRef("Operators/Grouping", "( )")}} (дужки)
  - : Оператор групування.

### Вирази лівої сторони

Лівосторонні значення є пунктом призначення для присвоєння.

- {{JSxRef("Operators/Property_accessors", "Засоби доступу до властивостей", "", 1)}}
  - : Оператори роботи з членами надають доступ до властивостей чи методів об'єкта (`object.property` і `object["property"]`)
- {{JSxRef("Operators/Optional_chaining", "?.")}}
  - : Оператор необов'язкового зв'язування повертає `undefined` замість спричинення помилки, коли посилання є [порожнім](/uk/docs/Glossary/Nullish) (дорівнює [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) або [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- {{JSxRef("Operators/new", "new")}} (нове)
  - : Оператор `new` створює новий екземпляр об'єкта за допомогою переданого конструктора.
- {{JSxRef("Operators/new%2Etarget", "new.target")}} (нове.цільовий)
  - : Всередині конструктора `new.target` посилається на конструктор, який було викликано оператором {{JSxRef("Operators/new", "new")}}.
- {{JSxRef("Operators/import%2Emeta", "import.meta")}} (імпорт.метадані)
  - : Об'єкт, що розкриває контекстно-специфічні метадані JavaScript-модуля.
- {{JSxRef("Operators/super", "super")}} (вищий)
  - : Ключове слово `super` викликає батьківський конструктор або дає змогу звертатися до властивостей батьківського об'єкта.
- {{JSxRef("Operators/import", "import()")}}
  - : Синтаксис `import()` дає змогу асинхронно та динамічно завантажувати модуль в середовищі, котре може не бути модульним.

### Збільшення та зменшення на одиницю

Постфіксні та префіксні оператори інкременту та декременту.

- {{JSxRef("Operators/Increment", "A++")}}
  - : Постфіксний оператор інкременту.
- {{JSxRef("Operators/Decrement", "A--")}}
  - : Постфіксний оператор декременту.
- {{JSxRef("Operators/Increment", "++A")}}
  - : Префіксний оператор інкременту.
- {{JSxRef("Operators/Decrement", "--A")}}
  - : Префіксний оператор декременту.

### Унарні оператори

Унарна операція — це операція з лише одним операндом.

- {{JSxRef("Operators/delete", "delete")}} (видалити)
  - : Оператор `delete` видаляє властивість з об'єкта.
- {{JSxRef("Operators/void", "void")}} (відкинути)
  - : Оператор `void` обчислює вираз та відкидає повернене ним значення.
- {{JSxRef("Operators/typeof", "typeof")}} (тип ...)
  - : Оператор `typeof` визначає тип переданого об'єкта.
- {{JSxRef("Operators/Unary_plus", "+")}} (плюс)
  - : Оператор «унарний плюс» перетворює операнд на значення типу Number.
- {{JSxRef("Operators/Unary_negation", "-")}} (мінус)
  - : Оператор «унарний мінус» перетворює операнд на значення типу Number, а потім робить його від'ємним.
- {{JSxRef("Operators/Bitwise_NOT", "~")}} (тильда)
  - : Бітовий оператор NOT.
- {{JSxRef("Operators/Logical_NOT", "!")}} (знак оклику)
  - : Логічний оператор NOT.
- {{JSxRef("Operators/await", "await")}}
  - : Призупиняє та відновлює виконання асинхронної функції та очікує на сповнення чи відхилення промісу.

### Арифметичні оператори

Арифметичні оператори приймають числові значення (як літерали, так і змінні) своїми операндами, і повертають єдине числове значення.

- {{JSxRef("Operators/Exponentiation", "**")}}
  - : Оператор піднесення до степеня.
- {{JSxRef("Operators/Multiplication", "*")}} (зірочка)
  - : Оператор множення.
- {{JSxRef("Operators/Division", "/")}}
  - : Оператор ділення.
- {{JSxRef("Operators/Remainder", "%")}} (відсоток)
  - : Оператор взяття остачі від ділення.
- {{JSxRef("Operators/Addition", "+")}} (Plus)
  - : Оператор додавання.
- {{JSxRef("Operators/Subtraction", "-")}}
  - : Оператор віднімання.

### Оператори відношення

Оператор порівняння порівнює операнди та повертає булеве значення, котре залежить від того, чи виконується умова порівняння.

- {{JSxRef("Operators/Less_than", "&lt;")}} (менше)
  - : Оператор «менше».
- {{JSxRef("Operators/Greater_than", "&gt;")}} (більше)
  - : Оператор «більше».
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
  - : Оператор «менше або дорівнює».
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Оператор «більше або дорівнює».
- {{JSxRef("Operators/instanceof", "instanceof")}}
  - : Оператор `instanceof` встановлює, чи є об'єкт примірником іншого об'єкта.
- {{JSxRef("Operators/in", "in")}}
  - : Оператор `in` встановлює, чи має об'єкт дану властивість.

> **Примітка:** `=>` — це не оператор, а позначення для [стрілкових функцій](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Оператори рівності

Результат обчислення оператора рівності — це завжди величина булевого типу, і її значення залежить від того, чи порівняння є істинним.

- {{JSxRef("Operators/Equality", "==")}}
  - : Оператор рівності.
- {{JSxRef("Operators/Inequality", "!=")}}
  - : Оператор нерівності.
- {{JSxRef("Operators/Strict_equality", "===")}}
  - : Оператор точної рівності.
- {{JSxRef("Operators/Strict_inequality", "!==")}}
  - : Оператор точної нерівності.

### Оператори побітового зсуву

Операції зміщення всіх бітів операнда.

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
  - : Оператор побітового зсуву вліво.
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
  - : Оператор побітового зсуву вправо.
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Оператор беззнакового побітового зсуву вправо.

### Бінарні бітові оператори

Бітові оператори вважають свої операнди наборами з 32 бітів (нулів та одиниць), і повертають стандартні для JavaScript числові значення.

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}} (амперсанд)
  - : Бітовий AND.
- {{JSxRef("Operators/Bitwise_OR", "|")}} (вертикальна риска)
  - : Бітовий OR.
- {{JSxRef("Operators/Bitwise_XOR", "^")}} (циркумфлекс)
  - : Бітовий XOR.

### Бінарні логічні оператори

Логічні оператори реалізовують булеві (логічні) значення й мають логіку [закорочення](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting).

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
  - : Логічний AND.
- {{JSxRef("Operators/Logical_OR", "||")}}
  - : Логічне OR.
- {{JSxRef("Operators/Nullish_coalescing", "??")}}
  - : Оператор нульового злиття.

### Умовний (тернарний) оператор

- {{JSxRef("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : Умовний оператор повертає одне з двох значень залежно від логічного значення умови.

### Оператори присвоєння

Оператор присвоєння присвоює певне значення лівому операнду на основі значення правого.

- {{JSxRef("Operators/Assignment", "=")}} (дорівнює)
  - : Оператор присвоєння.
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
  - : Присвоєння з множенням.
- {{JSxRef("Operators/Division_assignment", "/=")}}
  - : Присвоєння з діленням.
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
  - : Присвоєння з отриманням остачі.
- {{JSxRef("Operators/Addition_assignment", "+=")}}
  - : Присвоєння з додаванням.
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
  - : Присвоєння з відніманням.
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : Присвоєння зі зсувом вліво.
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Присвоєння зі зсувом вправо.
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Присвоєння з беззнаковим зсувом вправо.
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Присвоєння з бітовим AND.
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Присвоєння з бітовим XOR.
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
  - : Присвоєння з бітовим OR.
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
  - : Присвоєння з піднесенням до степеня.
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Присвоєння з логічним AND.
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
  - : Присвоєння з логічним OR.
- {{JSxRef("Operators/Nullish_coalescing_assignment", "??=")}}
  - : Присвоєння з нульовим злиттям.
- [`[a, b] = arr`, `{ a, b } = obj`](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - : Присвоєння з деструктуризацією дає змогу призначити властивості масиву чи об'єкта змінним, з використанням синтаксису, який має подібний до літералів масивів та об'єктів вигляд.

### Оператори видачі

- {{JSxRef("Operators/yield", "yield")}}
  - : Призупиняє й відновлює виконання генераторної функції.
- {{JSxRef("Operators/yield*", "yield*")}}
  - : Делегує видачу іншій генераторній функції або ітерованому об'єктові.

### Синтаксис розгортання

- {{JSxRef("Operators/Spread_syntax", "...obj")}}
  - : Синтаксис розгортання дає змогу розпустити ітерований об'єкт, як то масив чи рядок, у місцях, де очікуються нуль або більше аргументів (у випадку викликів функцій) чи елементів (у випадку літералів масивів). У об'єктному літералі синтаксис розгортання перелічує властивості об'єкта й додає пари ключ-значення до об'єкта, що створюється.

### Оператор коми

- {{JSxRef("Operators/Comma_operator", ",")}}
  - : Оператор кома дозволяє обчислити декілька виразів як одну інструкцію і повертає результат останнього виразу.

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- [Пріоритет операторів](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
