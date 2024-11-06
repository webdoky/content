---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.assign
---

{{JSRef}}

Статичний метод **`Object.assign()`** (присвоїти) копіює всі {{jsxref("Object/propertyIsEnumerable", "перелічувані", "", 1)}} {{jsxref("Object/hasOwn", "власні властивості", "", 1)}} від одного чи більше _донорських об'єктів_ до _цільового об'єкта_. Він повертає модифікований цільовий об'єкт.

{{EmbedInteractiveExample("pages/js/object-assign.html")}}

## Синтаксис

```js-nolint
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, /* …, */ sourceN)
```

### Параметри

- `target`
  - : Цільовий об'єкт — об'єкт, на який буде перенесено властивості з донорів, і який буде повернено після змін.
- `sourceN`
  - : Донорські об'єкти — об'єкти, що містять властивості, які потрібно скопіювати.

### Повернене значення

Цільовий об'єкт.

## Опис

Властивості цільового об'єкта перезаписуються властивостями донорів, якщо вони мають однакові {{jsxref("Object/keys", "ключі", "", 1)}}. Властивості наступних донорських об'єктів перезаписують властивості попередніх (в цільовому об'єкті).

Метод `Object.assign()` копіює до цільового об'єкта лише _перелічувані_ та _власні_ властивості донорських об'єктів. Він використовує `[[Get]]` на донорі та `[[Set]]` на цільовому об'єкті, тобто він викликає [гетери](/uk/docs/Web/JavaScript/Reference/Functions/get) й [сетери](/uk/docs/Web/JavaScript/Reference/Functions/set). Інакше кажучи, він саме _присвоює_ властивості, замість копіювання чи оголошення нових. Це може робити його непридатним для злиття нових властивостей у прототип, якщо донори для злиття містять гетери.

Для копіювання оголошень властивостей (включно з їхньою перелічуваністю) у прототипи слід натомість використовувати {{jsxref("Object.getOwnPropertyDescriptor()")}} та {{jsxref("Object.defineProperty()")}}.

Копіюються властивості, що мають за ключі як {{jsxref("String")}}, так і {{jsxref("Symbol")}}.

В разі помилки (наприклад, якщо властивість недоступна для запису) викидається {{jsxref("TypeError")}}, а об'єкт `target` залишається модифікованим, якщо якісь властивості були вже додані до виникнення помилки.

> [!NOTE]
>
> `Object.assign()` не викидає помилок на таких донорах, як [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) чи {{jsxref("undefined")}}.

## Приклади

### Клонування об'єкта

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Застереження щодо глибинного клонування

Для [глибокого клонування](/uk/docs/Glossary/Deep_copy) необхідно використовувати альтернативи штибу {{DOMxRef("Window.structuredClone", "structuredClone()")}}, оскільки `Object.assign()` копіює значення властивостей.

Якщо значення в донорі містить посилання на об'єкт, `Object.assign()` скопіює лише це посилання.

```js
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 } }
obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }
obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }
obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }
// Глибоке клонування
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }
```

### Злиття об'єктів

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, цільовий об'єкт також змінився.
```

### Злиття об'єктів з однаковими властивостями

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

Властивості перезаписуються іншими об'єктами, які мають аналогічні властивості далі в переліку аргументів.

### Копіювання властивостей із символьними ключами

```js
const o1 = { a: 1 };
const o2 = { [Symbol("foo")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (для порівняння, вада 1207182 у Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

### Неможливо скопіювати властивості в прототипному ланцюжку чи неперелічувані властивості

```js
const obj = Object.create(
  // foo знаходиться в прототипному ланцюжку obj
  { foo: 1 },
  {
    bar: {
      value: 2, // bar не є перелічуваною властивістю
    },
    baz: {
      value: 3,
      enumerable: true, // baz є власною перелічуваною властивістю.
    },
  },
);

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### Примітиви обгортаються в об'єкти

```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Примітиви обгортаються, null та undefined ігноруються.
// Зауважте, що лише рядкові обгортки мають власні перелічувані властивості.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### Винятки переривають операцію копіювання, що триває

```js
const target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false,
}); // target.foo — це властивість лише для читання

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// Виняток викинуто під час присвоєння значення target.foo

console.log(target.bar); // 2, властивості першого донора успішно скопійовано.
console.log(target.foo2); // 3, перша властивість другого донора скопійована успішно.
console.log(target.foo); // 1, тут викинуто виняток.
console.log(target.foo3); // undefined, робота методу "assign" завершилася, foo3 скопійовано не буде.
console.log(target.baz); // undefined, третій донор також копіюватися не буде.
```

### Копіювання методів доступу

```js
const obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

let copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }
// Значення copy.bar дорівнює поверненому значенню гетера obj.bar.

// Ось фінкція присвоєння, яка капіює дескриптори цілком
function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    const descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // Як усталено, Object.assign копіює також перелічувані символи
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Object.assign` у `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperties()")}}
- [Перелічуваність і власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- [Розгортання в об'єктних літералах](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax#rozghortannia-v-obiektnykh-literalakh)
