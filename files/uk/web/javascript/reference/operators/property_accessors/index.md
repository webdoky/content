---
title: Аксесори властивостей
slug: Web/JavaScript/Reference/Operators/Property_accessors
page-type: javascript-operator
browser-compat: javascript.operators.property_accessors
---

{{jsSidebar("Operators")}}

**Аксесори властивостей** надають доступ до властивостей об'єкта за допомогою крапки (крапкова нотація) і квадратних дужок (дужкова нотація).

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html", "taller")}}

## Синтаксис

```js-nolint
object.propertyName
object[expression]
```

## Опис

Можна розглядати об'єкт як _асоціативний масив_ (він же _відображення_, _словник, _геш_, _таблиця пошуку_). _Ключами_ в такому масиві є імена [властивостей](/uk/docs/Glossary/Property/JavaScript) об'єкта.

Є два варіанти доступу до властивостей: _крапкова нотація_ та _дужкова нотація_.

### Крапкова нотація

`propertyName` у синтаксисі `object.propertyName` має бути дійсним [ідентифікатором](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#identyfikatory) JavaScript, який також може бути [зарезервованим словом](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#klichovi-slova). Наприклад, `object.$1` – дійсне звертання, тоді як `object.1` – ні.

```js
const variable = object.propertyName;
object.propertyName = value;
```

```js
const object = {};
object.$1 = "foo";
console.log(object.$1); // 'foo'
```

```js example-bad
const object = {};
object.1 = 'bar'; // SyntaxError
console.log(object.1); // SyntaxError
```

Тут метод під назвою `createElement` береться з `document` і викликається.

```js
document.createElement("pre");
```

Якщо ви використовуєте метод для числового літерала, і числовий літерал не має експоненти та десяткової коми, то слід залишити [пробіл (або пробіли)](/uk/docs/Glossary/Whitespace) перед крапкою, за якою йде виклик методу, щоб крапка не тлумачилася як десяткова кома.

```js-nolint
77 .toExponential();
// або
77
.toExponential();
// або
(77).toExponential();
// або
77..toExponential();
// або
77.0.toExponential();
// because 77. === 77.0, не має двозначності
```

### Дужкова нотація

У синтаксисі `object[expression]`, `expression` має обчислюватися як рядок або [Symbol](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol), який представляє назву властивості. Таким чином, це може бути будь-який рядковий літерал, наприклад, `'1foo'`, `'!bar!'` або навіть `' '` (пробіл).

```js
const variable = object[propertyName];
object[propertyName] = value;
```

Наступний приклад робить те саме, що й попередній.

```js
document["createElement"]("pre");
```

Пробіл перед позначенням у дужках допускається.

```js-nolint
document ["createElement"]("pre");
```

Передача виразів, які обчислюють назву властивості, виконуватиме те ж саме, що й передача безпосередньо назви властивості.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // повертає "Michel"
Obj[key]; // обчислюється як Obj["name"] і повертає "Michel"
Obj[getKey()]; // обчислюється як Obj["name"] і повертає "Michel"
```

Попри те, стережіться використання квадратних дужок для доступу до властивостей, назви яких надаються зовнішнім введенням. Це може зробити ваш код сприйнятливим до [атак із впровадженням об'єктів](https://github.com/nodesecurity/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md).

### Назви властивостей

Назва кожної властивості є рядком або [символом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Будь-яке інше значення, включаючи число, приводиться до рядка. Наступний код виведе ``value``, оскільки `1` примусово перетворюється на `'1'`.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

Слідуючий код також виводить `'value'`, оскільки `foo` і `bar` перетворюються на той самий рядок (`"[object Object]"`).

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### Спосіб прив'язки

Говорячи про властивості об'єкта, типово розрізняти властивості та методи. Однак відмінність між властивостями та методами є не більш ніж умовністю. Метод — це властивість, яку можна викликати (наприклад, коли вона має посилання на екземпляр {{jsxref("Function")}} як своє значення).

Метод не прив'язаний до об'єкта, властивістю якого він є. Зокрема, `this` не фіксується в методі і не обов'язково посилається на об'єкт, що містить метод. Натомість `this` "передається" викликом функції. Дивіться [посилання на `this`](/uk/docs/Web/JavaScript/Reference/Operators/this).

## Приклади

### Дужкова нотація або eval()

Початківці JavaScript часто роблять помилку, використовуючи {{jsxref("Global_Objects/eval", "eval()")}}, де можна використовувати нотацію в дужках.

Наприклад, наступний синтаксис часто зустрічається в багатьох сценаріях.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` працює повільно, тому його слід уникати, коли це можливо. Крім того, `strFormControl` мав би містити ідентифікатор, який не потрібен для полей та `id` елементів форми. Замість цього краще використовувати позначення в дужках:

```js
const x = document.forms.form_name.elements[strFormControl].value;
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Object")}}
- {{jsxref("Object.defineProperty()")}}
- [Необов'язковий ланцюжок](/uk/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
