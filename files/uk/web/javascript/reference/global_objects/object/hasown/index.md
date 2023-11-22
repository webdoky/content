---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.hasOwn
---

{{JSRef}}

Статичний метод **`Object.hasOwn()`** (має власну) повертає `true`, якщо заданий об'єкт має вказану властивість як _власну_. Якщо ця властивість успадкована чи не існує, то він повертає `false`.

> **Примітка:** `Object.hasOwn()` задуманий як заміна для {{jsxref("Object.prototype.hasOwnProperty()")}}.

{{EmbedInteractiveExample("pages/js/object-hasown.html")}}

## Синтаксис

```js-nolint
Object.hasOwn(obj, prop)
```

### Параметри

- `obj`
  - : Примірник об'єкта JavaScript, який має бути перевірений.
- `prop`
  - : Ім'я властивості, яка має бути перевірена – {{jsxref("String")}} або [Symbol](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

### Повернене значення

`true`, якщо заданий об'єкт безпосередньо має визначену задану властивість.
Інакше – `false`

## Опис

Метод **`Object.hasOwn()`** повертає `true`, якщо вказана властивість є безпосередньою властивістю об'єкта – навіть якщо її значенням є `null` або `undefined`.
Цей метод повертає `false`, якщо така властивість успадкована або не була оголошена взагалі.
На відміну від оператора {{jsxref("Operators/in", "in")}}, цей метод не перевіряє на вказану властивість ланцюжок прототипів об'єкта.

Рекомендовано віддавати перевагу цьому методові замість {{jsxref("Object.prototype.hasOwnProperty()")}}, оскільки він працює для [`null`-прототипних об'єктів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty), і для об'єктів, які перевизначили успадкований метод `hasOwnProperty()`. Хоча можливо обійти ці проблеми, викликавши `Object.prototype.hasOwnProperty()` на зовнішньому об'єкті, `Object.hasOwn()` є більш інтуїтивно зрозумілим.

## Приклади

### Застосування hasOwn для перевірки існування властивості

Наступний код демонструє, як визначити, чи містить об'єкт `example` властивість `prop`.

```js
const example = {};
Object.hasOwn(example, "prop"); // false - 'prop' не була оголошена

example.prop = "exists";
Object.hasOwn(example, "prop"); // true - 'prop' була визначенв

example.prop = null;
Object.hasOwn(example, "prop"); // true - існує власна властивість зі значенням null

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - існує власна властивість зі значенням undefined
```

### Безпосередні й успадковані властивості

Наступний приклад розрізняє безпосередні властивості та властивості, успадковані за ланцюжком прототипів:

```js
const example = {};
example.prop = "існує";

// `hasOwn` поверне true лише для безпосередніх властивостей:
Object.hasOwn(example, "prop"); // true
Object.hasOwn(example, "toString"); // false
Object.hasOwn(example, "hasOwnProperty"); // false

// Оператор `in` поверне true і для безпосередніх, і для успадкованих властивостей:
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true
```

### Ітерування властивостей об'єкта

Щоб ітерувати перелічувані властивості об'єкта, _необхідно_ використовувати:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

Але якщо потрібно використати `for...in`, то можна використати `Object.hasOwn()` для пропуску успадкованих властивостей:

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Перевірка існування індексу в Array

Елементи {{jsxref("Array")}} визначаються як безпосередні властивості, тож для перевірки існування певного індексу можна використати метод `hasOwn()`:

```js
const fruits = ["Яблуко", "Банан", "Кавун", "Апельсин"];
Object.hasOwn(fruits, 3); // true ('Апельсин')
Object.hasOwn(fruits, 4); // false - не визначено
```

### Проблемні для hasOwnProperty випадки

Цей розділ демонструє те, що `hasOwn()` не піддається проблемам, які впливають на `hasOwnProperty`. По-перше, його можна використовувати з об'єктами, які мають власну реалізацію `hasOwnProperty()`:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Драконів геть з офісу",
};

if (Object.hasOwn(foo, "bar")) {
  console.log(foo.bar); // true - власна реалізація hasOwnProperty() не впливає на Object
}
```

Також його можна використовувати щодо [`null`-прототипних об'єктів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty). Вони не успадковують властивості від `Object.prototype`, тож `hasOwnProperty()` недоступний.

```js
const foo = Object.create(null);
foo.prop = "існує";
if (Object.hasOwn(foo, "prop")) {
  console.log(foo.prop); // true - працює незалежно від того, як створено об'єкт.
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Object.hasOwn` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [Перелічуваність та власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Успадкування та ланцюжок прототипів](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
