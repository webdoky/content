---
title: Об'єктний ініціалізатор
slug: Web/JavaScript/Reference/Operators/Object_initializer
page-type: javascript-language-feature
browser-compat: javascript.operators.object_initializer
---

{{JsSidebar("Operators")}}

**Об'єктний ініціалізатор** – це розділений список з нуля або більше пар назв властивостей та відповідних їм значень в об'єкті, оточений фігурними дужками (`{}`). Також об'єкти можуть бути ініціалізовані за допомогою [`Object.create()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/create) або [шляхом виклику функції-конструктора](/uk/docs/Web/JavaScript/Guide/Working_with_objects#zastosuvannia-funktsii-konstruktora) з оператором [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new).

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}

## Синтаксис

```js-nolint
o = {
  a: "foo",
  b: 42,
  c: {},
  1: "числова літеральна властивість",
  "foo:bar": "рядкова літеральна властивість",

  shorthandProperty,

  method(parameters) {
    // …
  },

  get property() {},
  set property(value) {},

  [expression]: "обчислена властивість",

  __proto__: prototype,

  ...spreadProperty,
};
```

## Опис

Об'єктний ініціалізатор – це вираз, що описує ініціалізацію {{jsxref("Object", "об'єкта")}}. Об'єкти складаються з \_властивостей, що використовуються для опису об'єкта. Значення властивостей об'єкта можуть містити як [примітивні](/uk/docs/Glossary/Primitive) типи даних, так і інші об'єкти.

### Запис літералів об'єктів і JSON

Запис літералів об'єктів – це не те саме, що **J**ava**S**cript **O**bject **N**otation ([JSON](/uk/docs/Glossary/JSON) – об'єктний запис JavaScript). Хоч вони мають подібний вигляд, між ними є різниця:

- JSON дозволяє оголошення властивостей _лише_ за допомогою запису `"property": value`. Назва властивостей повинна бути в подвійних лапках, і таке оголошення не може бути скороченим. Також не дозволені обчислені назви властивостей.
- Значення властивостей об'єктів JSON можуть бути рядками, числами, `true`, `false`, `null`, масивами або іншими об'єктами JSON. Це означає, що JSON не може виражати методи або не звичайні об'єкти, як то [`Date`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date) or [`RegExp`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
- У JSON `"__proto__"` є звичайним ключем властивості. В об'єктному літералі такий ключ [задає прототип об'єкта](#seter-prototypa).

JSON – це _сувора підмножина_ запису літералів об'єктів, тобто будь-який дійсний текст JSON може бути розібраний як літерал об'єкта і, ймовірно, не призведе до жодних синтаксичних помилок. Єдиним винятком є те, що запис літерала об'єкта не дозволяє дублювання ключів `__proto__`, що відрізняється від поведінки [`JSON.parse()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse). Цей статичний метод розглядає `__proto__` як звичайну властивість і бере за її значення останнє входження. Єдиний випадок, коли об'єктні значення, котрі вони представляють (тобто їхня семантика), відрізняються, також стосується ключа `__proto__`: в літералах об'єктів цей ключ задає прототип об'єкта, а для JSON це звичайна властивість.

```js
console.log(JSON.parse('{ "__proto__": 0, "__proto__": 1 }')); // {__proto__: 1}
console.log({ "__proto__": 0, "__proto__": 1 }); // SyntaxError: Duplicate __proto__ fields are not allowed in object literals

console.log(JSON.parse('{ "__proto__": {} }')); // { __proto__: {} }
console.log({ "__proto__": {} }); // {} (with {} as prototype)
```

## Приклади

### Створення об'єктів

Порожній об'єкт без властивостей може бути створений так:

```js
const object = {};
```

Проте перевагою запису _літерала_ або _ініціалізатора_ є те, що можна швидко створювати об'єкти зі властивостями всередині фігурних дужок. Записується низка пар `key: value`, розділених комами.

Наступний код створює об'єкт з трьома властивостями, чиї ключі – `"foo"`, `"age"` і `"baz"`. Значення цих ключів – рядок `"bar"`, число `42` і ще один об'єкт.

```js
const object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### Звертання до властивостей

Коли створено об'єкт, може знадобитися зчитати або змінити його. До його властивостей можна звернутися за допомогою запису крапки або запису квадратних дужок. (Докладніше про це читайте в [аксесорах властивостей](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors).)

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; //12
```

### Оголошення властивостей

Ми вже навчилися записувати властивості за допомогою запису ініціалізатора. Нерідко у коді є змінні, котрі хочеться додати в об'єкт. Можна зустріти такий код:

```js
const a = "foo";
const b = 42;
const c = {};

const o = {
  a: a,
  b: b,
  c: c,
};
```

Є коротший запис, що дає змогу досягнути такого ж результату:

```js
const a = "foo";
const b = 42;
const c = {};

// Властивості з назвами-скороченнями
const o = { a, b, c };

// Інакше кажучи,
console.log(o.a === { a }.a); // true
```

#### Дублювання назв властивостей

Коли в записі об'єктного ініціалізатора є дві властивості з однаковою назвою, друга з них відкидає першу.

```js
const a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

Починаючи від ES2015 дублювання назв властивостей дозволено всюди, в тому числі в [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode#dubliuvannia-nazv-vlastyvostei). Також дублікати назв властивостей можуть зустрічатися у [класах](/uk/docs/Web/JavaScript/Reference/Classes). Єдиний виняток – [приватні властивості](/uk/docs/Web/JavaScript/Reference/Classes/Private_class_fields): вони повинні бути унікальні в межах тіла класу.

### Оголошення методів

Властивість об'єкта також може вказувати на [функцію](/uk/docs/Web/JavaScript/Reference/Functions) або метод-[гетер](/uk/docs/Web/JavaScript/Reference/Functions/get) чи метод-[сетер](/uk/docs/Web/JavaScript/Reference/Functions/set).

```js
const o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {},
};
```

Доступний скорочений запис, тож ключове слово `function` уже не потрібне.

```js
// Скорочені назви властивостей
const o = {
  property(parameters) {},
};
```

Також є спосіб стисло оголошувати методи-генератори.

```js
const o = {
  *generator() {
    // …
  },
};
```

Що рівносильно цьому записові у стилі ES5 (утім, зверніть увагу на те, що ECMAScript 5 не має генераторів):

```js
const o = {
  generator: function* () {
    // …
  },
};
```

Більше інформації та прикладів з методами – в [оголошенні методів](/uk/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Обчислені назви властивостей

Запис об'єктного ініціалізатора також підтримує обчислені назви властивостей. Це дає змогу додавати вираз у квадратних дужках `[]`, котрий буде обчислений і вжитий як назва властивості. Це нагадує запис квадратних дужок запису [аксесора властивостей](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors), котрий ви уже, можливо, використовуєте для зчитування та запису властивостей.

Відтак, можна використовувати подібний запис і в об'єктних літералах:

```js
// Обчислені назви властивостей
let i = 0;
const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

const items = ["A", "B", "C"];
const obj = {
  [items]: "Привіт",
};
console.log(obj); // A,B,C: "Привіт"
console.log(obj["A,B,C"]); // "Привіт"

const param = "size";
const config = {
  [param]: 12,
  [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

### Розгортання властивостей

Літерали об'єктів підтримують [запис розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Він копіює власні перелічувані властивості з даного об'єкта в новий об'єкт.

Відтак, поверхневе клонування (окрім `prototype`) і злиття об'єктів тепер можливо за допомогою коротшого запису, ніж {{jsxref("Object.assign()")}}.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

> **Застереження:** Зверніть увагу на те, що {{jsxref("Object.assign()")}} запускає [сетери](/uk/docs/Web/JavaScript/Reference/Functions/set), а запис розгортання – ні!

### Сетер властивості

Означення властивості в формі `__proto__: value` або `"__proto__": value` не створює властивості з назвою `__proto__`. Натомість якщо задане значення є об'єктом або [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null), то така властивість спрямовує `[[Prototype]]` створеного об'єкта на це значення. (Якщо значення не є об'єктом або `null`, то об'єкт не змінюється).

Зверніть увагу на те, що ключ `__proto__` – це стандартизований запис, на противагу нестандартним і повільним аксесорам [`Object.prototype.__proto__`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Він задає `[[Prototype]]` під час створення об'єкта, подібно до {{jsxref("Object.create")}} — а не змінює ланцюжок прототипів.

```js
const obj1 = {};
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true

const obj2 = { __proto__: null };
console.log(Object.getPrototypeOf(obj2)); // null

const protoObj = {};
<!-- markdownlint-disable-next-line -->
const obj3 = { "__proto__": protoObj };
console.log(Object.getPrototypeOf(obj3) === protoObj); // true

const obj4 = { __proto__: "не об'єкт і не null" };
console.log(Object.getPrototypeOf(obj4) === Object.prototype); // true
console.log(Object.hasOwn(obj4, "__proto__")); // false
```

В літералі об'єкта дозволений лише один сетер прототипа. Кілька сетерів прототипа разом – це синтаксична помилка.

Означення властивостей, що не використовують запис "двокрапки", не є сетерами прототипу. Це означення властивостей, що поводяться ідентично до аналогічних означень з будь-якою іншою назвою.

```js
const __proto__ = "змінна";

const obj1 = { __proto__ };
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.hasOwn(obj1, "__proto__")); // true
console.log(obj1.__proto__); // "змінна"

const obj2 = { __proto__() { return "привіт"; } };
console.log(obj2.__proto__()); // "привіт"

const obj3 = { ["__proto__"]: 17 };
console.log(obj3.__proto__); // 17

// Змішування сетера прототипу зі звичайними властивостями з ключем "__proto__"
const obj4 = { ["__proto__"]: 17, __proto__: {} }; // {__proto__: 17} (з {} як прототипом)
const obj5 = {
  ["__proto__"]: 17,
  __proto__: {},
  __proto__: null, // SyntaxError: Duplicate __proto__ fields are not allowed in object literals
};
const obj6 = {
  ["__proto__"]: 17,
  ["__proto__"]: "привіт",
  __proto__: null,
}; // {__proto__: "привіт"} (з null як прототипом)
const obj7 =  {
  ["__proto__"]: 17,
  __proto__,
  __proto__: null,
}; // {__proto__: "variable"} (з null як прототипом)
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Аксесори властивостей](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`get`](/uk/docs/Web/JavaScript/Reference/Functions/get) і [`set`](/uk/docs/Web/JavaScript/Reference/Functions/set)
- [Означення методів](/uk/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Лексична граматика](/uk/docs/Web/JavaScript/Reference/Lexical_grammar)
