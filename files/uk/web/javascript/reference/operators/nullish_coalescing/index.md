---
title: Оператор null-злиття (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
page-type: javascript-operator
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - nullish coalescing
browser-compat: javascript.operators.nullish_coalescing
---

{{JSSidebar("Operators")}}

Оператор **null-злиття (`??`)** – логічний оператор, що повертає свій правий операнд, коли його лівий операнд – [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) чи {{jsxref("undefined")}}, інакше – повертає лівий оператор.

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Синтаксис

```js-nolint
leftExpr ?? rightExpr
```

## Опис

Оператор null-злиття може розглядатися як особливий випадок [оператора логічного АБО (`||`)](/uk/docs/Web/JavaScript/Reference/Operators/Logical_OR). Останній повертає правий операнд, якщо лівий операнд дорівнює _будь-якому_ зі значень {{Glossary("falsy", "хибності")}}, а не лише `null` чи `undefined`. Інакше кажучи, якщо застосувати `||` для надання певній змінній усталеного значення, то можна зіткнутися з неочікуваною поведінку, якщо частина значень хибності усе ж є корисною (наприклад, `''` або `0`). [Нижче](#prysvoiennia-zminniy-ustalenoho-znachennia) є більше прикладів.

Оператор null-злиття має п'ятий з кінця [пріоритет оператора](/uk/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) – зразу після `||` і зразу перед [умовним (тернарним) оператором](/uk/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

Не можна безпосередньо поєднувати з `??` і оператор логічного І (`&&`), і оператор логічного АБО (`||`). Така спроба призведе до викидання [синтаксичної помилки](/uk/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized).

```js example-bad
null || undefined ?? "foo"; // запускає SyntaxError
true && undefined ?? "foo"; // запускає SyntaxError
```

Натомість слід додати дужки, для явного задання пріоритету:

```js example-good
(null || undefined) ?? "foo"; // повертає "foo"
```

## Приклади

### Застосування оператора null-злиття

В цьому прикладі надаються усталені значення, однак значення, відмінні від `null` чи `undefined`, зберігаються.

```js
const nullValue = null;
const emptyText = ""; // хибність
const someNumber = 42;

const valA = nullValue ?? "усталене для A";
const valB = emptyText ?? "усталене для B";
const valC = someNumber ?? 0;

console.log(valA); // "усталене для A"
console.log(valB); // "" (оскільки порожній рядок не є null чи undefined)
console.log(valC); // 42
```

### Присвоєння змінній усталеного значення

Раніше при потребі присвоїти змінній усталене значення загальноприйнятим патерном було використання логічного оператора АБО ([`||`](/uk/docs/Web/JavaScript/Reference/Operators/Logical_OR)):

```js
let foo;

// foo ніколи не було присвоєне будь-яке значення, тож в ній досі undefined
const someDummyText = foo || "Привіт!";
```

Проте у зв'язку з тим, що `||` – булів логічний оператор, його лівий операнд зводиться до булевого значення, і будь-яке значення _хибності_ (`0`, `''`, `NaN`, `null`, `false` тощо) не повертається. Така логіка може призвести до неочікуваних наслідків, якщо `0`, `''` чи `NaN` вважаються дійсними значеннями.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "агов!";
console.log(qty); // 42, а не 0
console.log(message); // "агов!", а не ""
```

Оператор null-злиття уникає цієї пастки, повертаючи другий операнд, коли перший зводиться або до `null`, або до `undefined` (але не до інших значень хибності):

```js
const myText = ""; // Порожній рядок (що також є значенням хибності)

const notFalsyText = myText || "Привіт, світе";
console.log(notFalsyText); // Привіт, світе

const preservingFalsy = myText ?? "Привіт, сусіди";
console.log(preservingFalsy); // '' (оскільки myText не є ані undefined, ані null)
```

### Закорочення

Подібно до логічних операторів АБО та І, вираз справа не обчислюється, якщо вираз зліва не є ані `null`, ані `undefined`.

```js
function A() {
  console.log("A була викликана");
  return undefined;
}
function B() {
  console.log("B була викликана");
  return false;
}
function C() {
  console.log("C була викликана");
  return "foo";
}

console.log(A() ?? C());
// Виводить "A була викликана", потім "C була викликана", і потім – "foo"
// оскільки A() повертає undefined, тож обчислюються обидва вирази

console.log(B() ?? C());
// Виводить "B була викликана", потім "false"
// оскільки B() повернув false (а не null чи undefined), то вираз
// справа не був обчислений
```

### Взаємини з оператором необов'язкового ланцюжка (?.)

Оператор null-злиття обробляє `undefined` і `null` як особливі значення, так само як [оператор необов'язкового ланцюжка (`?.`)](/uk/docs/Web/JavaScript/Reference/Operators/Optional_chaining), котрий є корисним для доступу до властивості об'єкта, котрий може виявитись `null` чи `undefined`. Поєднуючи їх, можна безпечно звертатися до властивості об'єкта, котрий може виявитись відсутнім, і задати усталене значення на випадок того, що це саме так.

```js
const foo = { someFooProp: "привіт" };

console.log(foo.someFooProp?.toUpperCase() ?? "недоступно"); // "ПРИВІТ"
console.log(foo.someBarProp?.toUpperCase() ?? "недоступно"); // "недоступно"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Оператор присвоєння з null-злиттям (`??=`)](/uk/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Оператор необов'язкового ланцюжка (`?.`)](/uk/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Оператор логічного АБО (`||`)](/uk/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Усталені параметри в функціях](/uk/docs/Web/JavaScript/Reference/Functions/Default_parameters)
