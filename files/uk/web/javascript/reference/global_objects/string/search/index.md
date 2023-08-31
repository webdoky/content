---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.search
---

{{JSRef}}

Метод **`search()`** (шукати) значень {{jsxref("String")}} виконує пошук збігу між регулярним виразом та своїм рядком, повертаючи індекс першого знайденого у своєму рядку збігу.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## Синтаксис

```js-nolint
search(regexp)
```

### Параметри

- `regexp`

  - : Об'єкт регулярного виразу, або будь-який інший об'єкт, що має метод [`Symbol.search`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search).

    Якщо параметр `regexp` не є об'єктом `RegExp` і не має методу `Symbol.search`, то він неявно перетворюється на {{jsxref("RegExp")}} за допомогою `new RegExp(regexp)`.

### Повернене значення

Індекс першого збігу вмісту рядка з регулярним виразом, або `-1` — якщо збігу знайдено не було.

## Опис

Реалізація `String.prototype.search()` сама по собі є дуже простою: вона лишень викликає метод `Symbol.search` переданого аргументу зі своїм рядком як першим параметром. Фактична реалізація надходить з [`RegExp.prototype[@@search]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search).

Позначка `g` виразу `regexp` не впливає на результат `search()`, і пошук завжди відбувається так, ніби властивість `lastIndex` регулярного виразу має значення `0`. Більше інформації про логіку `search()` дивіться на сторінці [`RegExp.prototype[@@search]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search).

Коли треба знати, чи був знайдений патерн, а _також_ індекс збігу в рядку, слід використовувати `search()`.

- Якщо треба знати лише те, чи збіг існує, слід використовувати метод {{jsxref("RegExp.prototype.test()", "test()")}}, який повертає булеве значення.
- Якщо потрібен сам текст, що дає збіг, слід використовувати {{jsxref("String.prototype.match()", "match()")}} або {{jsxref("RegExp.prototype.exec()")}}.

## Приклади

### Застосування методу search()

Наступний приклад шукає збіг з двома різними регулярними виразами для ілюстрації різниці між успішним пошуком (додатне значення) та неуспішним (`-1`)

```js
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // повертає значення 4 — індекс першої великої літери "J"
console.log(str.search(reDot)); // повертає -1 — не може знайти розділовий знак '.'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.search` у складі `core-js`, з виправленнями та реалізацією сучасної логіки штибу підтримки `Symbol.search`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Застосування регулярних виразів у JavaScript](/uk/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- [`RegExp.prototype[@@search]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)
