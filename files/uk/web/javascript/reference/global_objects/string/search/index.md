---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
browser-compat: javascript.builtins.String.search
---
{{JSRef}}

Метод **`search()`** виконує пошук збігів між переданим регулярним виразом і об'єктом {{jsxref("String", "рядка")}}, на якому викликається.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## Синтаксис

```js
search(regexp)
```

### Параметри

- `regexp`

  - : Об'єкт [регулярного виразу](/uk/docs/Web/JavaScript/Guide/Regular_Expressions).

    Якщо аргументом `regexp` передано не регулярний вираз, він неявно перетворюється на {{jsxref("RegExp")}} за допомогою виклику `new RegExp(regexp)`.

### Повернене значення

Індекс першого збігу вмісту рядка з регулярним виразом, або `-1` — якщо збігу знайдено не було.

## Опис

Коли необхідно дізнатися, чи певний патерн знаходиться в рядку, і _також_ його індекс в рядку, слід використовувати `search()`. (Якщо потрібно просто перевірити, чи він існує в рядку, краще вжити схожий метод {{jsxref("RegExp.prototype.test()", "test()")}} прототипного об'єкта `RegExp`, який повертає булеве значення.)

Для отримання докладнішої інформації (але повільнішого виконання) можна використати {{jsxref("String.prototype.match()", "match()")}} (схожий до методу {{jsxref("RegExp.prototype.exec()", "exec()")}} регулярного виразу).

## Приклади

### Застосування методу search()

Наступний приклад шукає збіг з двома різними регулярними виразами для ілюстрації різниці між успішним пошуком (додатне значення) та неуспішним (`-1`)

```js
let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // повертає значення 4 — індекс першої великої літери "J"
console.log(str.search(reDot)) // повертає -1 — не може знайти розділовий знак '.'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Застосування регулярних виразів у JavaScript](/uk/docs/Web/JavaScript/Guide/Regular_Expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
