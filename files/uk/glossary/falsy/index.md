---
title: Хибні значення
slug: Glossary/Falsy
page-type: glossary-definition
---

{{GlossarySidebar}}

**Хибне** значення – це значення, яке вважається хибою, коли зустрічається в {{Glossary("Boolean", "булевому")}} контексті.

{{Glossary("JavaScript")}} використовує {{Glossary("Type_Conversion", "перетворення типів")}} для зведення будь-якого значення до булевого в тих контекстах, які цього вимагають, як то {{Glossary("Conditional", "умовні інструкції")}} та {{Glossary("Loop", "цикли")}}.

Наступна таблиця містить вичерпний список хибних значень JavaScript:

| Значення                    | Тип       | Опис                                                                                                                                                     |
| --------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("null")}}        | Null      | Ключове слово [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) — відсутність будь-якого значення.                                              |
| {{Glossary("undefined")}}   | Undefined | [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined) — примітивне значення.                                                         |
| `false`                     | Boolean   | Ключове слово [`false`](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#zarezervovani-slova).                                                          |
| {{Glossary("NaN")}}         | Number    | [`NaN`](/uk/docs/Web/JavaScript/Reference/Global_Objects/NaN) — не число.                                                                                |
| `0`                         | Number    | {{jsxref("Number", "Числовий")}} нуль, у тому числі `0.0`, `0x0` тощо.                                                                                   |
| `-0`                        | Number    | {{jsxref("Number", "Числовий")}} від'ємний нуль, у тому числі `-0.0`, `-0x0` тощо.                                                                       |
| `0n`                        | BigInt    | Нуль-{{jsxref("BigInt")}}, у тому числі `0x0n` тощо. Зверніть увагу, що немає від'ємного нуля-{{jsxref("BigInt")}}: протилежним числом щодо `0n` є `0n`. |
| `""`                        | String    | Значення порожнього [рядка](/uk/docs/Web/JavaScript/Reference/Global_Objects/String), в тому числі `''` і ` `` `.                                        |
| {{domxref("document.all")}} | Object    | Єдиний хибний об'єкт у JavaScript – це вбудоване значення {{domxref("document.all")}}.                                                                   |

Значення `null` і `undefined` також є [нульовими](/uk/docs/Glossary/Nullish).

## Приклади

Приклади _хибних_ значень у JavaScript (таких, які зводяться до хиби у булевих контекстах, і таким чином – _пропускають_ блок `if`):

```js
if (false) {
  // Недосяжне
}

if (null) {
  // Недосяжне
}

if (undefined) {
  // Недосяжне
}

if (0) {
  // Недосяжне
}

if (-0) {
  // Недосяжне
}

if (0n) {
  // Недосяжне
}

if (NaN) {
  // Недосяжне
}

if ("") {
  // Недосяжне
}
```

### Логічний оператор І, &&

Якщо перший об'єкт є хибним, цей оператор повертає такий об'єкт:

```js
console.log(false && "пес");
// ↪ false

console.log(0 && "пес");
// ↪ 0
```

## Дивіться також

- {{Glossary("Truthy", "Істинні значення")}}
- {{Glossary("Type_coercion", "Зведення типів")}}
- {{Glossary("Boolean", "Булеве значення")}}
- [Зведення до булевого](/uk/docs/Web/JavaScript/Reference/Global_Objects/Boolean#zvedennia-do-bulevoho)
