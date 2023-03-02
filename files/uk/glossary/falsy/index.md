---
title: Хибні значення
slug: Glossary/Falsy
page-type: glossary-definition
---

**Хибне** значення – це значення, яке вважається хибою, коли зустрічається в {{Glossary("Boolean", "булевому")}} контексті.

{{Glossary("JavaScript")}} використовує {{Glossary("Type_Conversion", "перетворення типів")}} для зведення будь-якого значення до булевого в тих контекстах, які цього вимагають, як то {{Glossary("Conditional", "умовні інструкції")}} та {{Glossary("Loop", "цикли")}}.

Наступна таблиця містить вичерпний список хибних значень JavaScript:

| Значення                    | Опис                                                                                                                                                                                                                                         |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`                     | Ключове слово [`false`](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#zarezervovani-slova).                                                                                                                                              |
| `0`                         | {{jsxref("Number", "Число")}} нуль (таким чином, так само `0.0` тощо, а також `0x0`).                                                                                                                                                        |
| `-0`                        | {{jsxref("Number", "Число")}} від'ємний нуль (таким чином, так само `-0.0` тощо, а також `-0x0`).                                                                                                                                            |
| `0n`                        | {{jsxref("BigInt")}} – нуль (таким чином, так само`0x0n`). Зверніть увагу на те, що немає від'ємного нуля {{jsxref("BigInt")}}: зворотнім значенням `0n` є `0n`.                                                                             |
| `""`, `''`, ` `` `          | Значення порожнього [рядка](/uk/docs/Web/JavaScript/Reference/Global_Objects/String).                                                                                                                                                        |
| {{Glossary("null")}}        | [null](/uk/docs/Web/JavaScript/Reference/Operators/null) — відсутність будь-якого значення.                                                                                                                                                  |
| {{Glossary("undefined")}}   | [undefined](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined) — примітивне значення.                                                                                                                                               |
| {{Glossary("NaN")}}         | [NaN](/uk/docs/Web/JavaScript/Reference/Global_Objects/NaN) — нечисло.                                                                                                                                                                       |
| {{domxref("document.all")}} | Об'єкти є хибними тоді й лише тоді, коли мають внутрішню комірку [\[\[IsHTMLDDA\]\]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot). Така комірка існує лише в {{domxref("document.all")}} і не може бути задана засобами JavaScript. |

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
