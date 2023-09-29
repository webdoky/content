---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.matchAll
---

{{JSRef}}

Метод **`matchAll()`** (шукати всі збіги) значень {{jsxref("String")}} повертає ітератор з усіма результатами зіставлення свого рядка з _[регулярним виразом](/uk/docs/Web/JavaScript/Guide/Regular_expressions)_, в тому числі [групи захоплення](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## Синтаксис

```js-nolint
matchAll(regexp)
```

### Параметри

- `regexp`

  - : Об'єкт регулярного виразу, або ж будь-який об'єкт, що має метод [`Symbol.matchAll`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll).

    Якщо `regexp` не є об'єктом `RegExp` і не має методу `Symbol.matchAll`, то він неявно перетворюється на {{jsxref("RegExp")}} за допомогою `new RegExp(regexp, 'g')`.

    Якщо `regexp` [є регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv), то цей регулярний вираз повинен мати позначку глобальності (`g`), а інакше – викидається {{jsxref("TypeError")}}.

### Повернене значення

[Ітерований об'єкт-ітератор](/uk/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (непридатний до повторного перебирання) зі збігами. Кожний збіг є масивом з такою ж структурою, як повернене значення методу {{jsxref("RegExp.prototype.exec()")}}.

### Винятки

- {{jsxref("TypeError")}}
  - : Викидається, коли `regexp` [є регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv), але не має позначки глобальності (`g`) (тобто його властивість [`flags`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) не містить `"g"`).

## Опис

Реалізація `String.prototype.matchAll` сама по собі є дуже простою: цей метод просто викликає метод `Symbol.matchAll` свого аргументу з вихідним рядком як першим параметром (коли не рахувати додаткової валідації вихідних даних на предмет того, що регулярний вираз є глобальним). Фактична реалізація надходить із [`RegExp.prototype[@@matchAll]`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll).

## Приклади

### Методи Regexp.prototype.exec() і matchAll()

Без `matchAll()` отримувати всі збіги можна за допомогою викликів [`regexp.exec()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (і регулярних виразів з позначкою `g`) у циклі:

```js
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(
    `Знайдено слово ${match[0]}, початок=${match.index}, закінчення=${regexp.lastIndex}.`,
  );
}
// Знайдено слово football, початок=6, закінчення=14.
// Знайдено слово foosball, початок=16, закінчення=24.
```

За наявності методу `matchAll` є можливість уникати циклу {{jsxref("Statements/while", "while")}} і використання методу `exec` із `g`. Це можливо завдяки тому, що повертається ітератор, який можна використовувати зі зручнішими конструкціями – {{jsxref("Statements/for...of", "for...of")}}, [розгортанням масиву](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax) і {{jsxref("Array.from()")}}:

```js
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(
    `Знайдено слово ${match[0]}, початок=${match.index}, закінчення=${
      match.index + match[0].length
    }.`,
  );
}
// Знайдено слово football, початок=6, закінчення=14.
// Знайдено слово foosball, початок=16, закінчення=24.

// ітератор зі збігами вичерпується після перебирання у for...of
// Новий виклик matchAll створить новий ітератор
Array.from(str.matchAll(regexp), (m) => m[0]);
// [ "football", "foosball" ]
```

Якщо прапорець `g` опущено, метод `matchAll` викине виняток.

```js
const regexp = /[a-c]/;
const str = "abc";
str.matchAll(regexp);
// TypeError
```

Метод `matchAll` для своїх потреб створює клон глобального об'єкта `RegExp`. Тому, на відміну від використання методу {{jsxref("RegExp/exec", "regexp.exec()")}}, властивість `lastIndex` об'єкта `RegExp` не змінюється під час сканування рядка.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Проте це означає, що на відміну від використання [`regexp.exec()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) у циклі, не можна змінювати `lastIndex` для перемотування регулярного виразу вперед або назад.

### Кращий доступ до груп захоплення (ніж у String.prototype.match())

Іншою привабливою причиною використати `matchAll` є покращений доступ до груп захоплення.

Під час застосування {{jsxref("String/match", "match()")}} з прапорцем глобального пошуку `g` групи захоплення ігноруються:

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

str.match(regexp); // ['test1', 'test2']
```

За допомогою `matchAll` можна легко отримати доступ до груп:

```js
const array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

### Застосування matchAll() вкупі з об'єктом, що не є RegExp, але має реалізацію @@matchAll

Якщо об'єкт має метод `Symbol.matchAll`, то він може використовуватися як власний шукач збігів. Повернене значення `Symbol.matchAll` стає поверненим значенням `matchAll()`.

```js
const str = "Гм, це цікаво.";
str.matchAll({
  [Symbol.matchAll](str) {
    return [["Так, це цікаво."]];
  },
}); // returns [["Yes, it's interesting."]]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.matchAll` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- Посібник [Регулярні вирази](/uk/docs/Web/JavaScript/Guide/Regular_expressions)
- Посібник [Групи та зворотні посилання](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`RegExp.prototype[@@matchAll]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
