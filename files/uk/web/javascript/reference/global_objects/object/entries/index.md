---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.entries
---

{{JSRef}}

Статичний метод **`Object.entries()`** (записи) повертає власні перелічувані властивості об'єкта, котрі мають рядкові ключі, у вигляді масиву пар ключ-значення.

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## Синтаксис

```js-nolint
Object.entries(obj)
```

### Параметри

- `obj`
  - : Об'єкт.

### Повернене значення

Масив власних перелічуваних властивостей об'єкта, котрі мають рядкові ключі, у вигляді масиву пар ключ-значення. Кожна пара ключ-значення є масивом з двома елементами: перший елемент – ключ властивості (котрий завжди є рядком), а другий – її значення.

## Опис

`Object.entries()` повертає масив, чиї елементи – масиви, що відповідають перелічуваним властивостям з рядковими ключами, знайденим безпосередньо на `object`. Алгоритм такий само, як при ітеруванні за допомогою циклу {{jsxref("Statements/for...in", "for...in")}}, окрім того, що цикл `for...in` також обробляє властивості з ланцюжка прототипів. Порядок масиву, поверненого `Object.entries()`, такий само, як порядок обробки циклом {{jsxref("Statements/for...in", "for...in")}}.

Коли потрібні лише ключі властивостей, слід натомість використовувати {{jsxref("Object.keys()")}}. Коли потрібні лише їх значення, слід натомість використовувати {{jsxref("Object.values()")}}.

## Приклади

### Застосування Object.entries()

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo – неперелічувана властивість
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
```

### Застосування Object.entries() на примітивах

Необ'єктні аргументи [зводяться до об'єктів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#zvedennia-do-obiekta). Лише рядки можуть мати власні перелічувані властивості, тим часом решта примітивів повертає порожній масив.

```js
// Рядки мають перелічувані властивості у вигляді індексів
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
// Решта примітивів не має власних властивостей
console.log(Object.entries(100)); // []
```

### Перетворення Object на Map

Конструктор {{jsxref("Map/Map", "Map()")}} приймає ітерований об'єкт `entries`. За допомогою `Object.entries` можна легко перетворювати {{jsxref("Object")}} на {{jsxref("Map")}}:

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Ітерування по Object

За допомогою [деструктурування масиву](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#destrukturuvannia-masyvu) можна з легкістю перебирати поля об'єкта.

```js
// За допомогою циклу for...of
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}
// За допомогою методів масиву
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Object.entries` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Перелічуваність і власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
