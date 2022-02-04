---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
  - Polyfill
browser-compat: javascript.builtins.String.matchAll
---
{{JSRef}}

Метод **`matchAll()`** повертає ітератор з усіма результатами зіставлення _рядка_ з _[регулярним виразом](/uk/docs/Web/JavaScript/Guide/Regular_Expressions)_, в тому числі [групи захоплення](/uk/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges).

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## Синтаксис

```js
matchAll(regexp)
```

### Параметри

- `regexp`

  - : Об'єкт регулярного виразу.

    Якщо до методу передається не регулярний вираз, а інший об'єкт `obj`, він неявним чином конвертується у {{jsxref("RegExp", "регулярний вираз")}} шляхом виконання виразу `new RegExp(obj)`.

    Переданий регулярний вираз мусить мати прапорець `/g`, інакше буде викинуто помилку `TypeError`.

### Повернене значення

Метод повертає [ітератор](/uk/docs/Web/JavaScript/Guide/Iterators_and_Generators) зі знайденими збігами (непридатний до повторного перебирання).

Кожен збіг є масивом (з двома додатковими властивостями `index` та `input`; докладніше про це в описі поверненого значення методу {{jsxref("RegExp.exec")}}). Масив збігів містить першим елементом знайдений текст, за яким йдуть всі знайдені збіги для груп захоплення, зазначених в дужках.

## Приклади

### Методи Regexp.exec() і matchAll()

До появи методу `matchAll` в JavaScript було можливо викликати [regexp.exec](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (на регулярних виразах з прапорцем `/g`) в циклі для отримання всіх збігів:

```js
const regexp = new RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(`Знайдено слово ${match[0]}, початок=${match.index}, закінчення=${regexp.lastIndex}.`);
  // очікуваний вивід: "Знайдено слово football, початок=6, закінчення=14."
  // очікуваний вивід: "Знайдено слово foosball, початок=16, закінчення=24."
}
```

За наявності методу `matchAll` є можливість уникати циклу {{jsxref("Statements/while", "while")}} і використання методу `exec` із `g`.

Натомість під час роботи з `matchAll` створюється ітератор, який можна використати зі зручнішими конструкціями {{jsxref("Statements/for...of", "for...of")}},
{{jsxref("Operators/Spread_syntax", "array spread")}}, чи {{jsxref("Array.from()")}}:

```js
const regexp = new RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Знайдено слово ${match[0]}, початок=${match.index}, закінчення=${match.index + match[0].length}.`);
}
// очікуваний вивід: "Знайдено слово football, початок=6, закінчення=14."
// очікуваний вивід: "Знайдено слово foosball, початок=16, закінчення=24."

// ітератор зі збігами вичерпується після перебирання у for..of
// Новий виклик matchAll створить новий ітератор
Array.from(str.matchAll(regexp), m => m[0]);
// Array [ "football", "foosball" ]
```

Якщо прапорець `g` опущено, метод `matchAll` викине виняток.

```js
const regexp = new RegExp('[a-c]','');
const str = 'abc';
str.matchAll(regexp);
// TypeError
```

Метод `matchAll` для своїх потреб створює клон глобального об'єкта `RegExp`. Тому, на відміну від використання методу {{jsxref("Global_Objects/RegExp/exec", "regexp.exec()")}}, властивість `lastIndex` об'єкта `RegExp` не змінюється під час сканування рядка.

```js
const regexp = new RegExp('[a-c]','g');
regexp.lastIndex = 1;
const str = 'abc';
Array.from(str.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]
```

### Кращий доступ до груп захоплення (ніж у String.prototype.match())

Іншою привабливою причиною використати `matchAll` є покращений доступ до груп захоплення.

Під час застосування {{jsxref("Global_Objects/String/match", "match()")}} з прапорцем глобального пошуку `/g` групи захоплення ігноруються:

```js
let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']
```

За допомогою `matchAll` можна легко отримати доступ до груп:

```js
let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.matchAll` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- [Застосування регулярних виразів у JavaScript](/uk/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Групи захоплення](/uk/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
