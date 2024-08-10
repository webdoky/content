---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.@@iterator
---

{{JSRef}}

Метод **`[@@iterator]()`** значень {{jsxref("String")}} реалізовує [протокол ітерованого об'єкта](/uk/docs/Web/JavaScript/Reference/Iteration_protocols) та дає рядкам змогу працювати в багатьох записах, що очікують на ітеровані об'єкти, наприклад, [синтаксисі розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax) та циклах {{jsxref("Statements/for...of", "for...of")}}. Він повертає [об'єкт-ітератор рядка](/uk/docs/Web/JavaScript/Reference/Global_Objects/Iterator), що видає кодові точки Unicode свого рядкового значення як окремі рядки.

{{EmbedInteractiveExample("pages/js/string-prototype-@@iterator.html")}}

## Синтаксис

```js-nolint
string[Symbol.iterator]()
```

### Повернене значення

Новий [ітерований об'єкт-ітератор](/uk/docs/Web/JavaScript/Reference/Global_Objects/Iterator), що видає кодові точки Unicode свого рядкового значення як окремі рядки.

## Опис

Рядки ітеруються за кодовими точками Unicode. Це означає, що графемні кластери розбиваються, а сурогатні пари – зберігаються.

```js
// "Зворот долоні показує направо: темний колір шкіри"
[..."👉🏿"]; // ['👉', '🏿']
// розбивається на базовий емодзі "Зворот долоні показує направо" та
// емодзі "Темний колір шкіри"

// "Родина: чоловік, хлопчик"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// розбивається на емодзі "Чоловік" і "Хлопчик", сполучені ZWJ
```

## Приклади

### Ітерування за допомогою циклу for...of

Зверніть увагу, що цей метод рідко потрібно викликати безпосередньо. Наявність методу `@@iterator` робить рядки [ітерованими](/uk/docs/Web/JavaScript/Reference/Iteration_protocols#protokol-iterovanoho-obiekta), а записи ітерування, наприклад, цикл `for...of`, автоматично викликають цей метод для отримання ітератора.

```js
const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (const v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

### Ручне скручування ітератора

Все ж, можна викликати метод `next()` поверненого об'єкта-ітератора вручну, щоб отримати максимальний контроль над процесом ітерування.

```js
const str = "A\uD835\uDC68";

const strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype[@@iterator]` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Посібник [Форматування тексту](/uk/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("Symbol.iterator")}}
- [Протоколи ітерування](/uk/docs/Web/JavaScript/Reference/Iteration_protocols)
