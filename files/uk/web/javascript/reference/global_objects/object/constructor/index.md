---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Object.constructor
---

{{JSRef}}

Властивість даних **`constructor`** (конструктор) примірника {{jsxref("Object")}} повертає посилання на функцію-конструктор, що створила цей об'єкт-примірник. Зверніть увагу: значення цієї властивості – посилання на _саму функцію_, а не рядок, що містить назву цієї функції.

> **Примітка:** Це властивість об'єктів JavaScript. Метод `constructor` в класах описано на [окремій сторінці довідника](/uk/docs/Web/JavaScript/Reference/Classes/constructor).

## Значення

Посилання на функцію-конструктор, що створила цей об'єкт-примірник.

{{js_property_attributes(1, 0, 1)}}

> **Примітка:** Ця властивість усталено створюється на властивості [`prototype`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) кожної функції-конструктора й успадковується всіма об'єктами, створеними таким конструктором.

## Опис

Усі об'єкти (за винятком [`null`-прототипних об'єктів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty)) мають властивість `constructor` на своєму `[[Prototype]]`. Об'єкти, створені за допомогою літералів, також мають властивість `constructor`, що вказує на відповідний типовий конструктор для об'єкта – наприклад, літерали масивів створюють об'єкти {{jsxref("Array")}}, а [літерали об'єктів](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer) створюють прості об'єкти.

```js
const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true
```

Зверніть увагу: `constructor` зазвичай приходить з властивості [`prototype`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) конструктора. Якщо присутній довший ланцюжок прототипів, то зазвичай можна очікувати того, що кожний об'єкт у ланцюжку матиме властивість `constructor`.

```js
const o = new TypeError(); // Успадкування: TypeError -> Error -> Object
const proto = Object.getPrototypeOf;

Object.hasOwn(o, "constructor"); // false
proto(o).constructor === TypeError; // true
proto(proto(o)).constructor === Error; // true
proto(proto(proto(o))).constructor === Object; // true
```

## Приклади

### Виведення конструктора об'єкта

Наступний приклад створює конструктор (`Tree`) і об'єкт новоствореного типу (`theTree`). Потім цей приклад виводить властивість `constructor` об'єкта `theTree`.

```js
function Tree(name) {
  this.name = name;
}

const theTree = new Tree("Червоне дерево");
console.log(`theTree.constructor – це ${theTree.constructor}`);
```

Цей приклад має наступний вивід:

```plain
theTree.constructor – це function Tree(name) {
  this.name = name;
}
```

### Присвоєння властивості constructor об'єктові

Можна присвоїти непримітивам властивість `constructor`.

```js
const arr = [];
arr.constructor = String;
arr.constructor === String; // true
arr instanceof String; // false
arr instanceof Array; // true

const foo = new Foo();
foo.constructor = "bar";
foo.constructor === "bar"; // true

// тощо.
```

Це не замінить стару властивість `constructor` – вона спочатку була присутня в `[[Prototype]]` екземпляра, а не як власна властивість.

```js
const arr = [];
Object.hasOwn(arr, "constructor"); // false
Object.hasOwn(Object.getPrototypeOf(arr), "constructor"); // true

arr.constructor = String;
Object.hasOwn(arr, "constructor"); // true: властивість примірника затіняє властивість прототипа
```

Але навіть коли `Object.getPrototypeOf(a).constructor` отримує нове значення, це не змінює решту поведінки об'єкта. Наприклад, поведінка `instanceof` контролюється [`Symbol.hasInstance`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance), а не `constructor`:

```js
const arr = [];
arr.constructor = String;
arr instanceof String; // false
arr instanceof Array; // true
```

Ніщо не захищає властивість `constructor` від присвоєння нового значення або затінення, тож використання її для з'ясування типу змінної зазвичай слід уникати на користь більш стійких способів, як то `instanceof` і [`Symbol.toStringTag`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) для об'єктів або [`typeof`](/uk/docs/Web/JavaScript/Reference/Operators/typeof) для примітивів.

### Зміна constructor прототипа функції-конструктора

Кожний конструктор має властивість [`prototype`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype), яка стане `[[Prototype]]` примірника при виклику за участі оператора [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new). `ConstructorFunction.prototype.constructor` стане властивістю `[[Prototype]]` примірника, як показано вище.

Однак якщо `ConstructorFunction.prototype` присвоєно нове значення, то властивість `constructor` буде втрачена. Наприклад, наступний приклад показує поширений спосіб створення патерну успадкування:

```js
function Parent() {
  // …
}
Parent.prototype.parentMethod = function () {};

function Child() {
  Parent.call(this); // Пересвідчитись, що все ініціалізовано як слід
}
// Спрямування [[Prototype]] об'єкта Child.prototype на Parent.prototype
Child.prototype = Object.create(Parent.prototype);
```

Значенням `constructor` примірників `Child` буде `Parent`, оскільки `Child.prototype` присвоєно нове значення.

Зазвичай це не є великою проблемою: мова майже ніколи не читає властивість `constructor` об'єкта. Єдиним винятком є використання [`@@species`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) для створення нових екземплярів класу, але такі випадки рідкісні, та й усе одно слід використовувати запис [`extends`](/uk/docs/Web/JavaScript/Reference/Classes/extends) для підкласів вбудованих класів.

Проте слідкувати, що `Child.prototype.constructor` завжди посилається на сам `Child`, важливо, коли якийсь викликач використовує `constructor` для доступу до початкового класу з екземпляра. Розгляньте наступний випадок: об'єкт має метод `create()`, щоб створювати себе.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  Parent.call(this);
}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // TypeError: new CreatedConstructor().create().create is undefined, since constructor === Parent
```

У прикладі вище викидається помилка, оскільки `constructor` зв'язано з `Parent`. Щоб цього уникнути, слід просто присвоїти необхідний конструктор, який ви збираєтеся використовувати.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

CreatedConstructor.prototype = Object.create(Parent.prototype, {
  // Повернути вихідний конструктор до Child
  constructor: {
    value: CreatedConstructor,
    enumerable: false, // Зробити його неітерованим, щоб він не з'являвся в циклах `for...in`
    writable: true,
    configurable: true,
  },
});

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // доволі непогано
```

Зверніть увагу, що коли додати властивість `constructor` вручну, то критично необхідно зробити її [неітерованою](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties), щоб `constructor` не з'являвся у циклах [`for...in`](/uk/docs/Web/JavaScript/Reference/Statements/for...in) – як це зазвичай і буває.

Якщо код вище здається надто сильно схожим на шаблонний, то можна також розглянути використання [`Object.setPrototypeOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) для роботи з ланцюжком прототипів.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

Object.setPrototypeOf(CreatedConstructor.prototype, Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // все одно працює, без відтворення властивості constructor
```

Статичний метод `Object.setPrototypeOf()` приносить власні потенційні недоліки щодо продуктивності, тому що всі раніше створені об'єкти, присутні в ланцюжку прототипів, повинні бути заново скомпільовані; однак якщо код ініціалізації вище виконується до того, як будуть створені `Parent` і `CreatedConstructor`, то цей ефект повинен бути мінімальним.

Розгляньмо іще один складний випадок.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Статична властивість-член
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Повернути вихідний конструктор до Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  // Використання this.constructor, у надії на те, що getStartPosition існує як статичний метод
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

new Child(1, 1).getOffsetByInitialPosition();
// Error: this.constructor.getStartPosition is undefined, оскільки
// constructor – Child, що не має статичного метода getStartPosition
```

Щоб цей приклад працював як слід, можна скопіювати статичні властивості `Parent` до `Child`:

```js
// …
Object.assign(Child, ParentWithStatic); // Зверніть увагу, що вони присвоюються до create() прототипа нижче
Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Повернути вихідний конструктор до Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
// …
```

Іще краще: можна змусити функції-конструктори самі розширяти одна одну, як це робить ключове слово [`extends`](/uk/docs/Web/JavaScript/Reference/Classes/extends) для класів.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Статична властивість-член
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

// Коректне створення успадкування!
Object.setPrototypeOf(Child.prototype, ParentWithStatic.prototype);
Object.setPrototypeOf(Child, ParentWithStatic);

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

console.log(new Child(1, 1).getOffsetByInitialPosition()); // { offsetX: -1, offsetY: -1 }
```

Знову таки, використання `Object.setPrototypeOf()` може мати негативний вплив на продуктивність, тому слід переконатися, що це відбувається безпосередньо після оголошення конструктора і до створення будь-яких примірників – щоб уникнути "ославлення" об'єктів.

> **Примітка:** Ручне оновлення чи присвоєння constructor може призвести до різних, а іноді – дивних наслідків. Щоб цьому запобігти, слід визначити роль `constructor` у кожному окремому випадку. В більшості випадків `constructor` не використовується, і її повторне присвоєння не є необхідним.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Statements/class", "class")}}
- {{jsxref("Classes/constructor", "constructor")}}
- {{Glossary("Constructor", "Конструктор")}}
