---
title: Умовний (тернарний) оператор
slug: Web/JavaScript/Reference/Operators/Conditional_operator
page-type: javascript-operator
browser-compat: javascript.operators.conditional
---

{{jsSidebar("Operators")}}

**Умовний (тернарний) оператор** — це єдиний оператор у JavaScript, який приймає три операнди: умова зі знаком питання (`?`) після неї, далі вираз, який слід виконати, якщо умова {{Glossary("truthy", "істинна")}}, слідом за якою двокрапка (`:`), і нарешті – вираз, який виконається, якщо умова {{Glossary("falsy", "хибна")}}. Цей оператор часто використовується як альтернатива інструкції [`if`](/uk/docs/Web/JavaScript/Reference/Statements/if...else).

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## Синтаксис

```js-nolint
condition ? exprIfTrue : exprIfFalse
```

### Параметри

- `condition` ("умова")
  - : Вираз, значення якого буде використано як умову.
- `exprIfTrue` ("вираз якщо істина")
  - : Вираз, який буде обчислено, якщо `condition` зводиться до {{Glossary("truthy", "істинного")}} значення (такого, яке еквівалентно `true`).
- `exprIfFalse` ("вираз якщо хиба")
  - : Вираз, який буде обчислено, якщо значення `condition` є {{Glossary("falsy", "хибним")}} (значенням, еквівалентним `false`).

## Опис

На додачу до `false`, "хибними" значеннями є: `null`, `NaN`, `0`, порожній рядок (`""`) і `undefined`. Якщо значення `condition` належить до цього переліку, результатом всього умовного виразу буде результат виконання виразу `exprIfFalse`.

## Приклади

### Простий приклад

```js
const age = 26;
const beverage = age >= 21 ? "Пиво" : "Сік";
console.log(beverage); // "Пиво"
```

### Обробка нульових значень

Одне з поширених застосувань умовного виразу — це обробка значення, яке може дорівнювати `null`:

```js
const greeting = (person) => {
  const name = person ? person.name : `незнайомцю`;
  return `Агов, ${name}`;
};

console.log(greeting({ name: `Аліса` })); // "Агов, Аліса"
console.log(greeting(null)); // "Агов, незнайомцю"
```

### Ланцюжки умовних виразів

Тернарний оператор — правоасоціативний. Це означає, що його можна "об'єднувати в ланцюжки" подібно до ланцюжків `if … else if … else if … else`, так, як це наведено нижче:

```js
function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}
```

Такий запис еквівалентний ланцюжкові [`if...else`](/uk/docs/Web/JavaScript/Reference/Statements/if...else) нижче.

```js
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`if...else`](/uk/docs/Web/JavaScript/Reference/Statements/if...else)
- [Оператор null-злиття (`??`)](/uk/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Необов'язковий ланцюжок (`?.`)](/uk/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Приймання рішень в коді — умовні вирази](/uk/docs/Learn/JavaScript/Building_blocks/conditionals)
- Посібник [Вирази та оператори](/uk/docs/Web/JavaScript/Guide/Expressions_and_operators)
