---
title: Оператор null-злиття (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
page-type: javascript-operator
browser-compat: javascript.operators.nullish_coalescing
---

{{jsSidebar("Operators")}}

Оператор **null-злиття (`??`)** – логічний оператор, що повертає свій правий операнд, коли його лівий операнд – [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) чи {{jsxref("undefined")}}, інакше – повертає лівий оператор.

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Синтаксис

```js-nolint
leftExpr ?? rightExpr
```

## Опис

Оператор null-злиття може розглядатися як особливий випадок [оператора логічного АБО (`||`)](/uk/docs/Web/JavaScript/Reference/Operators/Logical_OR). Останній повертає правий операнд, якщо лівий операнд дорівнює _будь-якому_ зі значень {{Glossary("falsy", "хибності")}}, а не лише `null` чи `undefined`. Інакше кажучи, якщо застосувати `||` для надання певній змінній усталеного значення, то можна зіткнутися з неочікуваною поведінкою, якщо частина значень хибності усе ж є корисною (наприклад, `''` або `0`). [Нижче](#prysvoiennia-zminnii-ustalenoho-znachennia) є більше прикладів.

Оператор null-злиття має п'ятий з кінця [пріоритет оператора](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence) – зразу після `||` і зразу перед [умовним (тернарним) оператором](/uk/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Як оператор логічного І (`&&`), так і оператор логічного АБО (`||`) не можна безпосередньо поєднувати з `??`. Така спроба призведе до викидання [синтаксичної помилки](/uk/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized).

```js-nolint example-bad
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

Подібно до логічних операторів 'OR' та 'AND', вираз справа не обчислюється, якщо вираз зліва не є ані `null`, ані `undefined`.

```js
function a() {
  console.log("a була викликана");
  return undefined;
}
function b() {
  console.log("b була викликана");
  return false;
}
function c() {
  console.log("c була викликана");
  return "foo";
}

console.log(a() ?? c());
// Виводить "a була викликана", потім "c була викликана", і потім – "foo"
// оскільки a() повертає undefined, тож обчислюються обидва вирази

console.log(b() ?? c());
// Виводить "b була викликана", потім "false"
// оскільки b() повернув false (а не null чи undefined), то вираз
// справа не був обчислений
```

### Взаємини з оператором необов'язкового ланцюжка (?.)

Оператор null-злиття обробляє `undefined` і `null` як особливі значення, так само як [оператор необов'язкового ланцюжка (`?.`)](/uk/docs/Web/JavaScript/Reference/Operators/Optional_chaining), котрий є корисним для доступу до властивості об'єкта, котрий може виявитись `null` чи `undefined`. Поєднуючи їх, можна безпечно звертатися до властивості об'єкта, котрий може виявитись відсутнім, і задати усталене значення на такий випадок.

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

- [Присвоєння з null-злиттям (`??=`)](/uk/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Необов'язковий ланцюжок (`?.`)](/uk/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Логічне АБО (`||`)](/uk/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Усталені параметри](/uk/docs/Web/JavaScript/Reference/Functions/Default_parameters)
