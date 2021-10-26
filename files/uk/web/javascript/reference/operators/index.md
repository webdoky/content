---
title: Вирази та оператори
slug: Web/JavaScript/Reference/Operators
tags:
  - JavaScript
  - Landing page
  - Operators
  - Overview
  - Reference
browser-compat: javascript.operators
---
{{JSSidebar("Operators")}}

Цей розділ документує всі оператори, вирази, і ключові слова мови JavaScript.

## Вирази та оператори за категоріями

Для перегляду списку в алфавітному порядку зверніть увагу на ліву бокову панель.

### Первинні вирази

Базові ключові слова та загальні вирази в JavaScript.

- {{JSxRef("Operators/this", "this")}}
  - : Ключове слово `this` посилається на спеціальну властивість контексту виконання.
- {{JSxRef("Operators/function", "function")}}
  - : Ключове слово `function` оголошує функціональний вираз.
- {{JSxRef("Operators/class", "class")}}
  - : Ключове слово `class` оголошує вираз класу.
- {{JSxRef("Operators/function*", "function*")}}
  - : Ключове слово `function*` оголошує вираз функції-генератора.
- {{JSxRef("Operators/yield", "yield")}}
  - : Призупинити і відновити виконання функції-генератора.
- {{JSxRef("Operators/yield*", "yield*")}}
  - : Делегувати виконання іншій функції-генератору чи ітерованому об'єкту.
- {{JSxRef("Operators/async_function", "async function")}}
  - : `async function` оголошує вираз асинхронної функції.
- {{JSxRef("Operators/await", "await")}}
  - : Призупинити виконання асинхронної функції і зачекати до виконання чи відхилення промісу.
- {{JSxRef("Global_Objects/Array", "[]")}}
  - : Літеральний синтаксис створення чи ініціалізації масиву.
- {{JSxRef("Operators/Object_initializer", "{}")}}
  - : Літеральний синтаксис створення чи ініціалізації об'єкту.
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
  - : Літеральний синтаксис регулярного виразу.
- {{JSxRef("Operators/Grouping", "( )")}}
  - : Оператор групування.

### Вирази лівої сторони

Лівостороннії значення є пунктом призначення для присвоєння.

- {{JSxRef("Operators/Property_accessors", "Засоби доступу до властивостей", "", 1)}}
  - : Оператор доступу до членів надає доступ до методу чи властивості об'єкта (`object.property` і `object["property"]`).
- {{JSxRef("Operators/new", "new")}}
  - : Оператор `new` створює новий екземпляр об'єкта за допомогою переданого конструктора.
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
  - : Всередині конструктора, `new.target` посилається на конструктор, який було викликано оператором {{JSxRef("Operators/new", "new")}}.
- {{JSxRef("Statements/import%2Emeta", "import.meta")}}
  - : Об'єкт, що розкриває контекст-специфічні метадані JavaScript-модуля.
- {{JSxRef("Operators/super", "super")}}
  - : Ключове слово `super` викликає батьківський конструктор.
- {{JSxRef("Operators/Spread_syntax", "...obj")}}
  - : Спред-оператор дозволяє розширити вираз у місцях, де очікуються декілька аргументів (виклики функцій) чи декілька елементів (літерали масиву).

### Збільшення та зменшення на одиницю

Постфіксні та префіксні оператори оператори інкремента та декремента.

- {{JSxRef("Operators/Increment", "A++")}}
  - : Постфіксний оператор інкремента.
- {{JSxRef("Operators/Decrement", "A--")}}
  - : Постфіксний оператор декремента.
- {{JSxRef("Operators/Increment", "++A")}}
  - : Префіксний оператор інкремента.
- {{JSxRef("Operators/Decrement", "--A")}}
  - : Префіксний оператор декремента.

### Унарні оператори

Унарна операція — це операція з лише одним операндом.

- {{JSxRef("Operators/delete", "delete")}}
  - : Оператор `delete` видаляє властивість з об'єкту.
- {{JSxRef("Operators/void", "void")}}
  - : Оператор `void` відкидає повернене значення виразу.
- {{JSxRef("Operators/typeof", "typeof")}}
  - : Оператор `typeof` визначає тип переданого об'єкту.
- {{JSxRef("Operators/Unary_plus", "+")}}
  - : Опертор «унарний плюс» перетворює операнд на значення типу Number.
- {{JSxRef("Operators/Unary_negation", "-")}}
  - : Опертор «унарний мінус» перетворює операнд на значення типу Number, а потім робить його від'ємним.
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
  - : Бітовий оператор NOT.
- {{JSxRef("Operators/Logical_NOT", "!")}}
  - : Логічний оператор NOT.

### Арифметичні оператори

Арифметичні оператори приймають числові значення (як літерали, так і змінні) своїми операндами, і повертають єдине числове значення.

- {{JSxRef("Operators/Addition", "+")}}
  - : Оператор додавання.
- {{JSxRef("Operators/Subtraction", "-")}}
  - : Оператор віднімання.
- {{JSxRef("Operators/Division", "/")}}
  - : Оператор ділення.
- {{JSxRef("Operators/Multiplication", "*")}}
  - : Оператор добутку.
- {{JSxRef("Operators/Remainder", "%")}}
  - : Оператор взяття остачі від ділення.
- {{JSxRef("Operators/Exponentiation", "**")}}
  - : Оператор піднесення до степеня.

### Оператори відношення

Оператор порівняння порівнює операнди, і повертає булеве значення залежно від того, чи порівняння є істинним.

- {{JSxRef("Operators/in", "in")}}
  - : Оператор `in` визначає, чи об'єкт містить передану властивість.
- {{JSxRef("Operators/instanceof", "instanceof")}}
  - : Оператор `instanceof` визначає, чи є об'єкт екземпляром іншого об'єкта.
- {{JSxRef("Operators/Less_than", "&lt;")}}
  - : Оператор «менше».
- {{JSxRef("Operators/Greater_than", "&gt;")}}
  - : Оператор «більше».
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
  - : Оператор «менше або дорівнює».
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Оператор «більше або дорівнює».

> **Зауваження:** `=>` — це не оператор, а позначення для [стрілкових функцій](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

Операції зміщення всіх бітів операнду.

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
  - : Оператор побітового зсуву вліво.
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
  - : Оператор побітового зсуву вправо.
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Оператор беззнакового побітового зсуву вправо.

### Бінарні бітові оператори

Бітові оператори вважають свої операнди наборами з 32 бітів (нулів та одиниць), і повертають стандартні для JavaScript числові значення.

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
  - : Бітовий AND.
- {{JSxRef("Operators/Bitwise_OR", "|")}}
  - : Бітовий OR.
- {{JSxRef("Operators/Bitwise_XOR", "^")}}
  - : Бітовий XOR.

### Бінарні логічні оператори

Логічні оператори типово використовуються з булевими (логічними) значеннями, і в таких випадках повертають булеве значення.

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
  - : Логічний AND.
- {{JSxRef("Operators/Logical_OR", "||")}}
  - : Логічне OR.
- {{JSxRef("Operators/Nullish_coalescing_operator", "??")}}
  - : Оператор нульового злиття.

### Умовний (тернарний) оператор

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}
  - : Умовний оператор повертає одне з двох значень залежно від логічного значення умови.

### Оператор необов'язкової послідовності

- {{JSxRef("Operators/Optional_chaining", "?.")}}
  - : Оператор необов'язкової послідовності повертає `undefined` замість викликання помилки в разі [нульового](/uk/docs/Glossary/Nullish) ([`null`](/uk/docs/Web/JavaScript/Reference/Global_Objects/null) або [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined)) посилання.

### Оператори присвоєння

Оператор присвоєння присвоює певне значення лівому операнду на основі значення правого.

- {{JSxRef("Operators/Assignment", "=")}}
  - : Оператор присвоєння.
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
  - : Присвоєння з множенням.
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
  - : Присвоєння з піднесенням до степеня.
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
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Присвоєння з логічним AND.
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
  - : Присвоєння з логічним OR.
- {{JSxRef("Operators/Logical_nullish_assignment", "??=")}}
  - : Логічне нульове присвоєння.
- {{JSxRef("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{JSxRef("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : Присвоєння з деструктуризацією дозволяє призначити властивості масиву чи об'єкту змінним, з використанням синтаксису, який виглядає подібно до літералів масивів та об'єктів.

### Оператор кома

- {{JSxRef("Operators/Comma_Operator", ",")}}
  - : Оператор кома дозволяє обчислити декілька виразів як одну інструкцію, і повертає результат останнього виразу.

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- [Пріоритет операторів](/uk/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
