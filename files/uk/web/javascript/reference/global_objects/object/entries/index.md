---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
tags:
  - JavaScript
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.entries
---

{{JSRef}}

Метод **`Object.entries()`** (записи) повертає власні перелічувані властивості переданого об'єкта як масив пар `[ключ, значення]`. Метод враховує лише ті властивості, які мають рядковий ключ. Це працює так само як і цикл {{jsxref("Statements/for...in", "for...in")}}, за винятком того, що цикл `for...in` також перебирає властивості, які доступні через ланцюжок прототипів.

Порядок елементів у масиві, поверненому з `Object.entries()`, є таким самим, як і при циклі {{jsxref("Statements/for...in", "for...in")}}. Якщо потрібен якийсь інший порядок, то масив слід спочатку відсортувати, як от `Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));`.

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## Синтаксис

```js
Object.entries(obj);
```

### Параметри

- `obj`
  - : Об'єкт, чиї власні перелічувані властивості з рядковими ключами буде повернуто як масив пар `[ключ, значення]`.

### Повернене значення

Масив власних перелічуваних властивостей об'єкта, з рядковими ключами, у вигляді пар `[ключ, значення]`.

## Опис

Метод `Object.entries()` повертає масив, елементи якого є масивами пар `[ключ, значення]`, що відповідають перелічуваним властивостям з рядковими ключами, знайденим безпосередньо на об'єкті. Порядок властивостей такий самий, як і під час перебору властивостей об'єкта в циклі.

## Приклади

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// масивоподібний об'єкт
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// масивоподібний об'єкт з випадковим порядком ключів
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// з властивістю getFoo, яка не є перелічуваною
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
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// аргумент, що не є об'єктом, буде приведено до об'єктної форми
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// повертає порожній масив для будь-якого примітивного значення,
// окрім рядків (див. приклад вище), оскільки примітиви не мають власних властивостей
console.log(Object.entries(100)); // [ ]

// елегантно перебираємо пари ключ-значення властивостей об'єкта
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// або те саме, застосувавши принади самого масива
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

### Перетворення `Object` на `Map`

Конструктор {{jsxref("Map", "new Map()")}} приймає ітерований об'єкт `entries`. За допомогою `Object.entries` можна легко перетворювати {{jsxref("Object")}} на {{jsxref("Map")}}:

```js
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Перебирання властивостей `Object`

За допомогою [деструктуризації масиву](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#destrukturyzatsiia-masyvu) можна з легкістю перебирати поля об'єкта.

```js
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
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
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
