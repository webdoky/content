---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
page-type: javascript-instance-method
browser-compat: javascript.builtins.Object.hasOwnProperty
---

{{JSRef}}

Метод **`hasOwnProperty()`** (має власну властивість) примірників {{jsxref("Object")}} повертає булеве значення, котре вказує на те, чи має його об'єкт задану властивість як свою власну (але не успадковану).

> **Примітка:** {{jsxref("Object.hasOwn()")}} є рекомендованою альтернативою `hasOwnProperty()` в тих браузерах, у котрих підтримується.

{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}

## Синтаксис

```js-nolint
hasOwnProperty(prop)
```

### Параметри

- `prop`
  - : {{jsxref("String")}} з іменем або [Symbol](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol) властивості до перевірки.

### Повернене значення

Повертає `true`, якщо об'єкт має задану властивість за власну; інакше – `false`.

## Опис

Метод **`hasOwnProperty()`** повертає `true`, якщо задана властивість є безпосередньою властивістю об'єкта, навіть якщо значенням цієї властивості є `null` чи `undefined`. Цей метод повертає `false`, якщо властивість була успадкована чи не була оголошена взагалі. На відміну від оператора {{jsxref("Operators/in", "in")}}, цей метод не шукає задану властивість у ланцюжку прототипів об'єкта.

Цей метод можна викликати на _більшості_ об'єктів JavaScript, адже більшість об'єктів походить від {{jsxref("Object")}}, а отже – успадковують його методи. Наприклад, {{jsxref("Array")}} – це також {{jsxref("Object")}}, тому `hasOwnProperty()` можна використовувати для перевірки існування індексу:

```js
const fruits = ["Яблуко", "Банан", "Кавун", "Апельсин"];
fruits.hasOwnProperty(3); // true ('Апельсин')
fruits.hasOwnProperty(4); // false - не визначено
```

Цей метод не буде доступним на об'єктах, в котрих ця логіка заміщена, або на об'єктах, створених за допомогою `Object.create(null)` (адже вони не успадковують від `Object.prototype`). Приклади таких випадків надані нижче.

## Приклади

### Використання hasOwnProperty для перевірки існування власної властивості

Наступний код демонструє, як можна з'ясувати, чи містить об'єкт `example` властивість на ім'я `prop`.

```js
const example = {};
example.hasOwnProperty("prop"); // false

example.prop = "існує";
example.hasOwnProperty("prop"); // true - 'prop' була визначена

example.prop = null;
example.hasOwnProperty("prop"); // true - присутня власна властивість зі значенням null

example.prop = undefined;
example.hasOwnProperty("prop"); // true - присутня власна властивість зі значенням undefined
```

### Безпосередні та успадковані властивості

Наступний приклад розрізняє безпосередні властивості та властивості, що були успадковані за ланцюжком прототипів:

```js
const example = {};
example.prop = "існує";

// `hasOwnProperty` поверне true лише для безпосередніх властивостей:
example.hasOwnProperty("prop"); // повертає true
example.hasOwnProperty("toString"); // повертає false
example.hasOwnProperty("hasOwnProperty"); // повертає false

// Оператор `in` поверне true і для безпосередніх, і для успадкованих властивостей:
"prop" in example; // повертає true
"toString" in example; // повертає true
"hasOwnProperty" in example; // повертає true
```

### Ітерування властивостей об'єкта

Наступний приклад демонструє, як можна ітерувати перелічувані властивості об'єкта, не обробляючи успадкованих властивостей.

```js
const buz = {
  fog: "stack",
};

for (const name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log(`це точно fog (${name}). Значення: ${buz[name]}`);
  } else {
    console.log(name); // toString чи щось іще
  }
}
```

Зверніть увагу, що цикл {{jsxref("Statements/for...in", "for...in")}} ітерує лише перелічувані елементи: відсутність неперелічуваних властивостей, виведених в циклі, не означає, що сам `hasOwnProperty` обмежений перелічуваними елементами (те саме стосується {{jsxref("Object.getOwnPropertyNames()")}}).

### Використання hasOwnProperty як імені властивості

JavaScript не захищає ім'я властивості `hasOwnProperty`; об'єкт, що має властивість з таким іменем, може повертати некоректні результати:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Тут живуть дракони",
};

foo.hasOwnProperty("bar"); // власна реалізація завжди повертає false
```

Рекомендований спосіб розв'язати цю проблему – використовувати натомість {{jsxref("Object.hasOwn()")}} (у тих браузерах, що це підтримують). Серед інших альтернатив – використання _зовнішнього_ `hasOwnProperty`:

```js
const foo = { bar: "Тут живуть дракони" };

// Використання методу Object.hasOwn() – рекомендовано
Object.hasOwn(foo, "bar"); // true

// Використання властивості hasOwnProperty з прототипа Object
Object.prototype.hasOwnProperty.call(foo, "bar"); // true

// Використання hasOwnProperty іншого Object
// і виклик його з foo як 'this'
({}).hasOwnProperty.call(foo, "bar"); // true
```

Зверніть увагу, що у двох перших випадках нові об'єкти не створюються.

### Об'єкти, створені за допомогою Object.create(null)

Об'єкти, створені за допомогою {{jsxref("Object.create()","Object.create(null)")}}, не успадковують від `Object.prototype`, а отже – `hasOwnProperty()` – недоступний.

```js
const foo = Object.create(null);
foo.prop = "існує";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

Способи розв'язання цієї проблеми – такі самі, як в попередньому розділі: віддання переваги {{jsxref("Object.hasOwn()")}}, або ж використання `hasOwnProperty()` зовнішнього об'єкта.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Object.hasOwn()")}}
- [Перелічуваність і власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Посібник JavaScript: Повторний огляд успадкування](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
