---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.getOwnPropertyNames
---

{{JSRef}}

Статичний метод **`Object.getOwnPropertyNames()`** (отримати імена власних властивостей) повертає масив усіх властивостей (включно з неперелічуваними, окрім тих, що є символами), присутніх на переданому об'єкті безпосередньо.

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## Синтаксис

```js-nolint
Object.getOwnPropertyNames(obj)
```

### Параметри

- `obj`
  - : Об'єкт, чиї перелічувані та неперелічувані властивості повинні бути отримані.

### Повернене значення

Масив рядків, що відповідають властивостям, присутнім безпосередньо на переданому об'єкті.

## Опис

`Object.getOwnPropertyNames()` повертає масив, чиї елементи – рядки, що відповідають перелічуваним і неперелічуваним властивостям, присутнім безпосередньо на переданому об'єкті `obj`. Порядок перелічуваних властивостей у масиві – відповідає порядкові, котрий виконується циклом {{jsxref("Statements/for...in", "for...in")}} (або ж {{jsxref("Object.keys()")}}) при ітеруванні властивостей об'єкта. Невід'ємні цілочислові ключі об'єкта (і перелічувані, і неперелічувані) додаються в порядку зростання до масиву першими, а вже після них – рядкові ключі, в порядку додавання.

У ES5, якщо аргумент цього метода не є об'єктом (є примітивом), то це призводить до {{jsxref("TypeError")}}. В ES2015, необ'єктний аргумент зводиться до об'єкта.

```js
Object.getOwnPropertyNames("foo");
// TypeError: "foo" is not an object (код ES5)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (код ES2015)
```

## Приклади

### Застосування Object.getOwnPropertyNames()

```js
const arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"]

// Масивоподібний об'єкт
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"]

Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
  console.log(`${val} -> ${obj[val]}`);
});
// 0 -> a
// 1 -> b
// 2 -> c

// неперелічувана властивість
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
myObj.foo = 1;

console.log(Object.getOwnPropertyNames(myObj).sort()); // ["foo", "getFoo"]
```

Якщо потрібні лише перелічувані властивості, слід поглянути в бік {{jsxref("Object.keys()")}} або циклу {{jsxref("Statements/for...in", "for...in")}} (зверніть увагу, що такий підхід також поверне перелічувані властивості, знайдені в ланцюжку прототипів об'єкта, якщо вони не відкинуті за допомогою {{jsxref("Object.hasOwn()")}}).

Елементи з ланцюжка прототипів – не виводяться:

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass();
ChildClass.prototype.prototypeMethod = function () {};

console.log(Object.getOwnPropertyNames(new ChildClass()));
// ["prop", "method"]
```

### Отримати лише неперелічувані властивості

Цей приклад застосовує функцію {{jsxref("Array.prototype.filter()")}} для прибирання перелічуваних ключів (отриманих за допомогою {{jsxref("Object.keys()")}}) зі списку всіх ключів (отриманих за допомогою `Object.getOwnPropertyNames()`), таким чином – надаючи вивід у вигляді виключно неперелічуваних ключів.

```js
const target = myObject;
const enumAndNonenum = Object.getOwnPropertyNames(target);
const enumOnly = new Set(Object.keys(target));
const nonenumOnly = enumAndNonenum.filter((key) => !enumOnly.has(key));

console.log(nonenumOnly);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Object.getOwnPropertyNames` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Перелічуваність і власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.prototype.forEach()")}}
