---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
page-type: javascript-statement
browser-compat: javascript.statements.if_else
---

{{jsSidebar("Statements")}}

Інструкція **`if...else`** (якщо... інакше) виконує інструкцію if, якщо задана умова є {{Glossary("truthy", "істинною")}}. Якщо ця умова є {{Glossary("falsy", "хибною")}}, то виконується інша інструкція, в положенні `else`.

{{EmbedInteractiveExample("pages/js/statement-ifelse.html")}}

## Синтаксис

```js-nolint
if (condition)
  statement1

// З положенням else
if (condition)
  statement1
else
  statement2
```

- `condition`
  - : Вираз, котрий розглядатиметься на предмет {{Glossary("truthy", "істинності")}} або {{Glossary("falsy", "хибності")}}.
- `statement1`
  - : Інструкція, що виконується, якщо _condition_ має {{Glossary("truthy", "істинне")}} значення. Може бути будь-якою інструкцією, включно зі вкладеними інструкціями `if`. Аби виконати декілька інструкцій, слід використати інструкцію-[блок](/uk/docs/Web/JavaScript/Reference/Statements/block) (`{ /* ... */ }`) для їх групування. Аби не виконувати жодних інструкцій, слід використати [порожню](/uk/docs/Web/JavaScript/Reference/Statements/Empty) інструкцію.
- `statement2`
  - : Інструкція, що виконується, якщо `condition` має {{Glossary("falsy", "хибне")}} значення і якщо положення `else` існує. Може бути будь-якою інструкцією, включно з інструкцією-блоком та вкладеними інструкціями `if`.

## Опис

Декілька інструкцій `if...else` можуть бути вкладені одна в одну, аби утворити положення `else if`. Зверніть увагу, що в JavaScript немає ключового слова `elseif` (одним словом).

```js-nolint
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
// …
else
  statementN
```

Аби побачити, як це працює, то ось, який вигляд це б мало, якби вкладення мали коректні відступи:

```js-nolint
if (condition1)
  statement1
else
  if (condition2)
    statement2
  else
    if (condition3)
      statement3
// …
```

Аби виконати декілька інструкцій в межах одного положення, слід використати інструкцію-блок (`{ /* ... */ }`) для їх групування.

```js-nolint
if (condition) {
  statements1
} else {
  statements2
}
```

Невикористання блоків може призводити до неочевидної поведінки, особливо якщо код відформатований вручну. Наприклад:

```js-nolint example-bad
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a – це 1, а b – це 2");
  else
    console.log("a – це не 1");
}
```

Цей код має безневинний вигляд, а проте виконання `checkValue(1, 3)` виведе "a – це не 1". Так відбувається через те, що при наявності [обірваного else](https://en.wikipedia.org/wiki/Dangling_else) положення `else` приєднується до найближчого положення `if`. Таким чином, код вище, отримавши коректні відступи, матиме такий вигляд:

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a – це 1, а b – це 2");
    else
      console.log("a – це не 1");
}
```

Загалом, доброю практикою є завжди використовувати інструкції-блоки, особливо коли в коді є вкладені інструкції `if`.

```js example-good
function checkValue(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a – це 1, а b – це 2");
    }
  } else {
    console.log("a – це не 1");
  }
}
```

Не слід плутати примітивні значення Boolean `true` і `false` з істинністю або хибністю об'єкта {{jsxref("Global_Objects/Boolean", "Boolean")}}. Усі значення, окрім `false`, `undefined`, `null`, `0`, `-0`, `NaN` і порожнього рядка (`""`), в тому числі будь-які об'єкти, серед яких об'єкти Boolean зі значенням `false`, вважаються {{Glossary("truthy", "істинними")}}, бувши використані як умова. Наприклад:

```js
const b = new Boolean(false);
if (b) {
  console.log("b – істинне значення"); // "b – істинне значення"
}
```

## Приклади

### Вживання if...else

```js
if (cipherChar === fromChar) {
  result += toChar;
  x++;
} else {
  result += clearChar;
}
```

### Вживання else if

Зверніть увагу на те, що в JavaScript немає синтаксису `elseif`. Проте можна написати таке з пробілом між `else` та `if`:

```js
if (x > 50) {
  /* якісь дії */
} else if (x > 5) {
  /* якісь дії */
} else {
  /* якісь дії */
}
```

### Використання присвоєння як умови

Майже ніколи не повинно бути `if...else` з присвоєнням виду `x = y` як умовою:

```js-nolint example-bad
if (x = y) {
  // якісь дії
}
```

Проте на той рідкісний випадок, коли захочеться зробити щось подібне, документація [`while`](/uk/docs/Web/JavaScript/Reference/Statements/while) містить розділ [Використання присвоєння як умови](/uk/docs/Web/JavaScript/Reference/Statements/while#vykorystannia-prysvoiennia-yak-umovy), з прикладом, що демонструє, загалом, синтаксис найкращої практики, про яку варто знати і якої варто дотримуватися.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- [Умовний оператор](/uk/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
