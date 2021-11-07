---
title: Умовний (тернарний) оператор
slug: Web/JavaScript/Reference/Operators/Conditional_Operator
tags:
  - Conditional
  - Decision
  - JS
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - else
  - if
  - ternary
browser-compat: javascript.operators.conditional
---
{{jsSidebar("Operators")}}

**Умовний (тернарний) оператор** — це єдиний оператор в JavaScript, який приймає три операнди: умова зі знаком питання (`?`) за нею, далі вираз, який слід виконати, якщо умова {{Glossary("truthy", "істинна")}}, слідом за якою двокрапка (`:`), і нарешті вираз, який виконається, якщо умова є {{Glossary("falsy", "хибною")}}. Цей оператор часто використовується як скорочення для інструкції [`if`](/uk/docs/Web/JavaScript/Reference/Statements/if...else).

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## Синтаксис

```js
condition ? exprIfTrue : exprIfFalse
```

### Параметри

- `condition`
  - : Вираз, значення якого буде використано як умову.
- `exprIfTrue`
  - : Вираз, який буде обраховано, якщо `condition` зводиться до {{Glossary("truthy", "істинного")}} значення (те значення, яке дорівнює `true`, або може бути перетворено в нього).
- `exprIfFalse`
  - : Вираз, який буде обраховано, якщо `condition` є {{Glossary("falsy", "хибним")}} (значення, яке можна перетворити на `false`).

## Опис

На додачу до `false`, є такі можливі "хибні" значення: `null`, `NaN`, `0`, порожній рядок (`""`), і `undefined`. Якщо `condition` складається з будь-якого з цих значень, результатом всього умовного виразу буде результат виконання виразу `exprIfFalse`.

## Приклади

### Простий приклад

```js
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### Обробка нульових значень

Одним із поширених застосувань умовного виразу є обробка значення, яке може дорівнювати `null`:

```js
let greeting = person => {
    let name = person ? person.name : `stranger`
    return `Howdy, ${name}`
}

console.log(greeting({name: `Alice`}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"
```

### Ланцюжки умовних виразів

Тернарний оператор — правоасоціативний. Це означає, що його можна "об'єднувати в ланцюжки" подібно до ланцюжків `if … else if … else if … else`; так, як це наведено нижче:

```js
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Еквівалентно виразу:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Інструкція "if"](/uk/docs/Web/JavaScript/Reference/Statements/if...else)
- [Оператор нульового злиття](/uk/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [Необов'язкові послідовності](/uk/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Приймання рішень в коді — умовні вирази](/uk/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Вирази та оператори](/uk/docs/Web/JavaScript/Guide/Expressions_and_Operators)
