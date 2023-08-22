---
title: Оператор new
slug: Web/JavaScript/Reference/Operators/new
page-type: javascript-operator
browser-compat: javascript.operators.new
---

{{jsSidebar("Operators")}}

Оператор **`new`** дає розробникам змогу створювати примірники самотужки визначених об'єктних типів, а також вбудованих об'єктних типів, котрі мають функцію-конструктор.

{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}

## Синтаксис

```js-nolint
new constructor
new constructor()
new constructor(arg1)
new constructor(arg1, arg2)
new constructor(arg1, arg2, /* …, */ argN)
```

### Параметри

- `constructor`
  - : Клас чи функція, що задає тип примірника об'єкта.
- `arg1`, `arg2`, …, `argN`
  - : Список значень, з якими буде викликаний `constructor`. Запис `new Foo` – рівносильний `new Foo()`, тобто якщо список аргументів не заданий, то `Foo` викликається без аргументів.

## Опис

Коли функція викликається з ключовим словом **`new`**, то ця функція використовується як конструктор. `new` виконає наступні дії:

1. Створить чистенький простий об'єкт JavaScript. Заради зручності, назвімо його `newInstance`.
2. Спрямовує комірку [[Prototype]] об'єкта `newInstance` на значення властивості `prototype` функції-конструктора, якщо це значення є {{jsxref("Object", "об'єктом")}}. Інакше – `newInstance` залишається простим об'єктом, зі значенням `Object.prototype` у комірці [[Prototype]].

   > **Примітка:** Властивості й об'єкти, додані до властивості `prototype` функції-конструктора, таким чином, доступні всім примірникам, створені на основі цієї функції-конструктора.

3. Виконує функцію-конструктор із заданими аргументами, зв'язуючи `newInstance` як контекст [`this`](/uk/docs/Web/JavaScript/Reference/Operators/this) (тобто всі посилання на `this` у функції-конструкторі, відтак, вказуватимуть на `newInstance`).
4. Якщо функція-конструктор повертає [непримітивне значення](/uk/docs/Web/JavaScript/Data_structures#prymityvni-znachennia), то таке повернене значення стає результатом усього виразу `new`. Інакше, якщо функція-конструктор не повертає нічого або повертає примітив, то замість цього повертається `newInstance`. (Здебільшого конструктори не повертають значень, але можуть вирішити повернути, щоб перевизначити звичайний процес створення об'єкта.)

Примірник [класу](/uk/docs/Web/JavaScript/Reference/Classes) можна створити лише за допомогою оператора `new` – спроба викликати клас без `new` викине `TypeError`.

Створення об'єкта зі власною функцією-конструктором вимагає двох кроків:

1. Означення типу об'єкта, шляхом написання функції, що задає його назву та властивості. Наприклад, функція-конструктор для створення об'єкта `Foo` могла б мати такий вигляд:

   ```js
   function Foo(bar1, bar2) {
     this.bar1 = bar1;
     this.bar2 = bar2;
   }
   ```

2. Створення примірника об'єкта за допомогою `new`.

   ```js
   const myFoo = new Foo("Bar 1", 2021);
   ```

> **Примітка:** Об'єкти можуть мати властивості, котрі самі є іншими об'єктами. Приклади цього – нижче.

До раніше означного примірника об'єкта завжди можна додати властивість. Наприклад, інструкція `car1.color = "black"` додає властивість `color` до `car1`, а тоді присвоює їй значення `"black"`.

Проте це не впливає на жодні інші об'єкти. Аби додати нову властивість до всіх об'єктів певного типу, необхідно додати цю властивість до властивості `prototype` конструктора. Це означить властивість, котра є спільною для всіх об'єктів, створених за допомогою цієї функції, а не лише для одного примірника об'єктного типу. Наступний код додає всім об'єктам типу `Car` властивість `color` зі значенням `"original color"`, а тоді перезаписує це значення рядком `"black"`, але лише на об'єкті-примірнику `car1`. Докладніше про це – на сторінці [прототипів](/uk/docs/Learn/JavaScript/Objects/Object_prototypes).

```js
function Car() {}
const car1 = new Car();
const car2 = new Car();

console.log(car1.color); // undefined

Car.prototype.color = "original color";
console.log(car1.color); // 'original color'

car1.color = "black";
console.log(car1.color); // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'original color'
console.log(Object.getPrototypeOf(car2).color); // 'original color'
console.log(car1.color); // 'black'
console.log(car2.color); // 'original color'
```

> **Примітка:** Попри те, що функція-конструктор може бути викликана так, як будь-яка звичайна функція (тобто без оператора `new` operator),
> в такому випадку новий об'єкт не створюється, і значення `this` – також буде іншим.

Функція може дізнатися, чи була вона викликана з `new`, шляхом перевірки [`new.target`](/uk/docs/Web/JavaScript/Reference/Operators/new.target). `new.target` має значення `undefined` лише тоді, коли функція закликана без `new`. Наприклад, можна мати функцію, що поводиться по-різному, коли вона викликана і коли конструюється:

```js
function Car(color) {
  if (!new.target) {
    // Викликана як функція.
    return `${color} car`;
  }
  // Викликана з new.
  this.color = color;
}

const a = Car("red"); // a має значення "red car"
const b = new Car("red"); // b має значення `Car { color: "red" }`
```

До стандарту ES6, котрий запровадив [класи](/uk/docs/Web/JavaScript/Reference/Classes), більшість вбудованих об'єктних типів JavaScript можна було створювати і з, і без `new`, хоч чимало з них при цьому поводиться по-різному. Кілька прикладів:

- [`Array()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), [`Error()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) і [`Function()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) поводяться однаково і бувши викликаними як функція, і як конструктор.
- [`Boolean()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean), [`Number()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) і [`String()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/String), бувши викликаними, зводять свій аргумент до відповідного примітивного типу, а коли конструюються – повертають об'єкти-обгортки.
- [`Date()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) повертає рядок, що представляє поточну дату, бувши викликаною, що рівносильно `new Date().toString()`.

Згідно зі стандартом ES6, мова стала суворішою щодо того, що є конструктором, а що – функцією. Наприклад:

- [`Symbol()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) і [`BigInt()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) можна викликати лише без `new`. Спроба конструювати їх – викине `TypeError`.
- [`Proxy`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) і [`Map`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) можуть бути сконструйовані лише зі `new`. Спроба викликати їх – викине `TypeError`.

## Приклади

### Об'єктні типи та примірники об'єктів

Припустімо, що розробляється об'єктний тип для автівок. Цей тип об'єктів повинен зватися `Car`, і мати властивості з маркою, моделлю та роком виробництва. Щоб цього досягнути, варто написати наступну функцію:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Тепер об'єкт на ймення `myCar` можна створити так:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Ця інструкція створює `myCar` і присвоює їй задані значення властивостей. Далі значенням `myCar.make` є рядок "Eagle", `myCar.year` – ціле число 1993, і так далі.

Шляхом викликів `new` можна створити будь-яке число об'єктів `car`.

```js
const kensCar = new Car("Nissan", "300ZX", 1992);
```

### Властивість об'єкта, котра сама є іншим об'єктом

Припустімо, що означується об'єкт, названий `Person`, отак:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

А потім створюються два нові об'єкти `Person`, отак:

```js
const rand = new Person("Rand McNally", 33, "M");
const ken = new Person("Ken Jones", 39, "M");
```

Далі можна переписати означення `Car`, аби додати властивість `owner`, котра приймає об'єкт `Person`, отак:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Щоб створювати нові об'єкти, можна використовувати наступне:

```js
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
```

Замість передавання при створенні нових об'єктів рядків-літералів чи цілих чисел, інструкції вище передають за параметр власника об'єкти `rand` і `ken`. Аби з'ясувати ім'я власника `car2`, можна звернутися до наступної властивості:

```js
car2.owner.name;
```

### Використання `new` вкупі з класами

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Привіт, моє ім'я – ${this.name}`);
  }
}

const p = new Person("Кароліна");
p.greet(); // Привіт, моє ім'я – Кароліна
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object")}}
