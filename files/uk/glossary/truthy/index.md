---
title: Істинні значення
slug: Glossary/Truthy
page-type: glossary-definition
---

{{GlossarySidebar}}

**Істинне** значення в {{Glossary("JavaScript")}} – це значення, яке вважається `true`, коли зустрічається в {{Glossary("Boolean", "булевому")}} контексті. Всі значення є істинними, якщо не визначені як {{Glossary("Falsy", "хибні")}}. Тобто _істинними_ є всі значення, окрім `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` і {{domxref("document.all")}}.

{{Glossary("JavaScript")}} використовує в булевих контекстах {{Glossary("Type_Coercion", "зведення типів")}}.

Приклади _істинних_ у JavaScript значень (ці значення зводяться до `true` у булевих контекстах, а отже – виконують блок `if`):

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

### Логічний оператор І, &&

Якщо перший операнд є істинним, то [логічний оператор І](/uk/docs/Web/JavaScript/Reference/Operators/Logical_AND) повертає другий операнд:

```js
true && "пес"
// returns "пес"

[] && "dog"
// returns "пес"
```

## Дивіться також

- Споріднені терміни глосарія:
  - {{Glossary("Falsy", "Хибні значення")}}
  - {{Glossary("Type_Coercion", "Зведення типів")}}
  - {{Glossary("Boolean", "Булеве значення")}}
- [Зведення до булевого](/uk/docs/Web/JavaScript/Reference/Global_Objects/Boolean#zvedennia-do-bulevoho)
