---
title: Поверхневе копіювання
slug: Glossary/Shallow_copy
page-type: glossary-definition
---

{{MDNSidebar}}

**Поверхнева копія** об'єкта – це копія, чиї властивості поділяють ті самі [посилання](/uk/docs/Glossary/Object_reference) (вказують на ті самі значення), що й властивості вихідного об'єкта, котрий було скопійовано. Як наслідок, при зміні як вихідного об'єкта, так і копії, може статися видозміна обох об'єктів – таким чином, може трапитись ненавмисне змінювання джерела або копії, котре не було очікуваним. Ця логіка відрізняється від логіки [глибокого копіювання](/uk/docs/Glossary/Deep_copy), при якому вихідний об'єкт і копія є цілковито незалежними.

При поверхневому копіюванні важливо розуміти, що вибіркове змінювання значення спільної властивості наявного в об'єкті елемента – відрізняється від присвоювання наявному елементові цілковито нового значення.

Наприклад, якщо в поверхневій копії об'єкта-масиву, що зветься `copy`, значенням елемента `copy[0]` є `{"list":["butter","flour"]}`, і виконати `copy[0].list = ["oil","flour"]`, то відповідний елемент вихідного об'єкта так само зміниться, адже відбудеться вибіркове змінювання властивості об'єкта, котрий є спільним і для вихідного об'єкта, і для його поверхневої копії.

Проте якщо замість цього зробити `copy[0] = {"list":["oil","flour"]}`, то тоді відповідний елемент вихідного об'єкта **не зміниться** — адже в такому випадку відбувається не просто вибіркове змінювання властивості наявного елемента масиву, котрий є спільним для поверхневої копії та вихідного об'єкта, а фактично присвоювання цілковито нового значення цьому елементові масиву – `copy[0]`, лише в поверхневу копію.

Усі вбудовані операції копіювання об'єктів у JavaScript ([синтаксис розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) і [`Object.create()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/create)) створюють поверхневі копії, а не глибокі.

## Приклад

Для прикладу – наступний приклад, у якому створюється об'єкт-масив `ingredients_list`, а тоді створюється `ingredients_list_copy` – шляхом копіювання цього об'єкта `ingredients_list`.

```js
let ingredients_list = ["локшина", { list: ["яйця", "борошно", "вода"] }];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["локшина",{"list":["яйця","борошно","вода"]}]
```

Змінювання значення у властивості `list` всередині `ingredients_list_copy` також призведе до змін властивості `list` у вихідному об'єкті `ingredients_list`.

```js
ingredients_list_copy[1].list = ["рисове борошно", "вода"];
console.log(ingredients_list[1].list);
// Array [ "рисове борошно", "вода" ]
console.log(JSON.stringify(ingredients_list));
// ["локшина",{"list":["рисове борошно","вода"]}]
```

Присвоєння першому елементові `ingredients_list_copy` цілковито нового значення не призведе до жодних змін у першому елементі вихідного об'єкта `ingredients_list`.

```js
ingredients_list_copy[0] = "рисова локшина";
console.log(ingredients_list[0]);
// локшина
console.log(JSON.stringify(ingredients_list_copy));
// ["рисова локшина",{"list":["рисове борошно","вода"]}]
console.log(JSON.stringify(ingredients_list));
// ["локшина",{"list":["рисове борошно","вода"]}]
```

## Дивіться також

- [Глибоке копіювання](/uk/docs/Glossary/Deep_copy)
