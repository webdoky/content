---
title: Класи
slug: Web/JavaScript/Reference/Classes
page-type: guide
tags:
  - Classes
  - Constructors
  - ECMAScript 2015
  - Guide
  - Inheritance
  - Intermediate
  - JavaScript
browser-compat: javascript.classes
---

{{JsSidebar("Classes")}}

Класи — це зразки, за якими створюються нові об'єкти. Вони інкапсулюють дані й код, який працює з цими даними. Класи в JS побудовані на [прототипах](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), хоча й містять певні унікальні синтаксичні та семантичні особливості.

Більше прикладів та пояснень – у посібнику [Застосування класів](/uk/docs/Web/JavaScript/Guide/Using_Classes).

## Означення класів

Насправді класи — це "особливі [функції](/uk/docs/Web/JavaScript/Reference/Functions)". Тож так само, як функції оголошуються за допомогою [виразів функцій](/uk/docs/Web/JavaScript/Reference/Operators/function) та [оголошень функцій](/uk/docs/Web/JavaScript/Reference/Statements/function), клас можна означити в один із двох способів: [вираз класу](/uk/docs/Web/JavaScript/Reference/Operators/class) або [оголошення класу](/uk/docs/Web/JavaScript/Reference/Statements/class).

```js
// Оголошення
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Вираз; клас є анонімним, однак присвоюється змінній
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Вираз; цей клас має власну назву
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

Подібно до виразів функцій, вирази класів можуть бути анонімними, а ще можуть мати назву, котра відрізняється від назви змінної, котрій такий клас присвоюється. Проте на відміну від оголошень функцій, оголошення класів мають такі ж обмеження [темпоральної мертвої зони](/uk/docs/Web/JavaScript/Reference/Statements/let#temporalna-mertva-zona-tdz), що й `let` і `const`, і поводяться так, ніби [не підіймаються](/uk/docs/Web/JavaScript/Guide/Using_Classes#pidniattia-oholoshen-klasiv).

## Тіло класу

Тіло класу – його частина, що лежить всередині фігурних дужок `{}`. Саме в ньому оголошуються члени класу, як то методи чи конструктор.

Тіло класу виконується в [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode), навіть коли не містить директиви `"use strict"`.

Елемент класу характеризується трьома аспектами:

- Ґатунок: гетер, сетер, метод або поле
- Місце: статичний або на примірнику
- Видимість: публічна або приватна

Вкупі це дає до 16 можливих комбінацій. Аби більш логічно розділити довідку й уникнути перекриття вмісту, докладне знайомство з різними елементами винесено на окремі сторінки:

- [Означення методів](/uk/docs/Web/JavaScript/Reference/Functions/Method_definitions)
  - : Публічний метод примірника
- [гетер](/uk/docs/Web/JavaScript/Reference/Functions/get)
  - : Публічний гетер примірника
- [сетер](/uk/docs/Web/JavaScript/Reference/Functions/set)
  - : Публічний сетер примірника
- [Публічні поля класу](/uk/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
  - : Публічне поле примірника
- [`static`](/uk/docs/Web/JavaScript/Reference/Classes/static)
  - : Публічний статичний метод, гетер, сетер чи поле
- [Приватні можливості класів](/uk/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
  - : Усе, що приватно

На додачу до цього, є два особливі записи елементів класу: [`constructor`](#konstruktor) і [блоки статичної ініціалізації](#bloky-statychnoii-initsializatsii), котрі мають власні довідкові матеріали.

### Конструктор

{{jsxref("Classes/constructor", "Конструктор", "", "true")}} — це спеціальний метод для створення та ініціалізації об'єктів, створених за допомогою класу. В класі може міститися лише один особливий метод з іменем "constructor". Якщо клас містить більше одного методу `constructor`, то буде викинуто виняток {{jsxref("SyntaxError")}}.

Конструктор може використовувати ключове слово `super`, щоб звернутись до конструктора батьківського класу.

### Блоки статичної ініціалізації

[Блоки статичної ініціалізації](/uk/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) дають змогу гнучко ініціалізувати [статичні властивості](#statychni-metody-i-vlastyvosti), в тому числі виконувати інструкції під час ініціалізації та надавати доступ до приватних областей.

Можна оголошувати декілька статичних блоків і перемежовувати їх з оголошеннями статичних методів та властивостей (всі статичні елементи опрацьовуються в порядку їх оголошення).

### Методи прототипу

Дивіться також {{jsxref("Functions/Method_definitions", "визначення методу", "", "true")}}.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Геттер
  get area() {
    return this.calcArea();
  }
  // Метод
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

### Методи-генератори

Дивіться також [Ітератори й генератори](/uk/docs/Web/JavaScript/Guide/Iterators_and_Generators).

```js
class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Метод
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]
```

### Статичні методи і поля

Ключове слово {{jsxref("Classes/static", "static")}} оголошує статичний метод чи поле класу. Статичні властивості (поля та методи) означаються на самому класі, а не кожному примірнику. Статичні методи часто використовуються для створення допоміжних функцій для застосунку, а статичні поля корисні для кешів, фіксованої конфігурації чи будь-яких інших даних, які не потрібно дублювати на кожний примірник.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### Прив'язка `this` до прототипу і статичних методів

Коли статичний метод чи метод прототипу викликається без значення {{jsxref("Operators/this", "this")}} — наприклад, шляхом присвоєння цього методу змінній, і викликання її — значення `this` всередині методу буде дорівнювати `undefined`. Така поведінка зберігається навіть за відсутності директиви {{jsxref("Strict_mode", "\"use strict\"")}}, оскільки код всередині синтаксичних меж тіла класу завжди виконується в суворому режимі.

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const obj = new Animal();
obj.speak(); // об'єкт Animal
const speak = obj.speak;
speak(); // undefined

Animal.eat(); // клас Animal
const eat = Animal.eat;
eat(); // undefined
```

Якщо ми перепишемо наведений вище код у традиційному синтаксисі, за допомогою функцій у нестрогому режимі, то звертання до `this` у коді методів будуть автоматично прив'язані до первісного значення `this`, яке усталено дорівнює {{Glossary("Global_object", "глобальному об'єкту")}}. В суворому режимі автоматичне прив'язування не відбувається, а значення `this` залишається таким, яким його було передано до методу.

```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
speak(); // глобальний об'єкт (у нестрогому режимі)

const eat = Animal.eat;
eat(); // глобальний об'єкт (у нестрогому режимі)
```

### Властивості примірника

Властивості примірника повинні задаватись всередині методів класу:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Оголошення полів

#### Оголошення публічних полів

Згідно з синтаксисом JavaScript для оголошення полів, наведений вище приклад можна записати так:

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Поля класів подібні до властивостей об'єктів, а не змінних, тож для їх оголошення не потрібні ключові слова штибу `const`. [Приватні поля](#oholoshennia-pryvatnykh-poliv) у JavaScript використовують особливий синтаксис ідентифікаторів, тому `public` і `private` також не повинні використовуватися.

Попереднє оголошення полів робить означення класу більш самодокументованим, а також гарантує наявність цих полів.

Як було показано вище, поля можуть оголошуватись як з усталеним значенням, так і без нього.

Для отримання додаткової інформації зверніть увагу на розділ {{jsxref("Classes/Public_class_fields", "публічні поля класу", "", "true")}}.

#### Оголошення приватних полів

Вищезазначений опис класу можна переробити у такий спосіб, застосувавши приватні поля:

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

Звертання до приватних полів класу зовні є помилкою, їх можна читати й записувати лише зсередини тіла класу. Шляхом оголошення полів класу, невидимих ззовні, можна гарантувати, що користувачі класу не матимуть змоги залежати від внутрішніх деталей реалізації, які можуть змінюватися від версії до версії.

> **Примітка :** Приватні поля можна оголошувати лише заздалегідь, під час опису полів.

Приватні поля не можна створювати пізніше шляхом присвоєння їм значень, так, як це можна робити зі звичайними властивостями.

Додаткову інформацію можна знайти в розділі {{jsxref("Classes/Private_class_fields", "приватні особливості класу", "", "true")}}.

## Створення підкласів за допомогою `extends`

Ключове слово {{jsxref("Classes/extends", "extends")}} використовується в _оголошеннях класів_ чи _класових виразах_ для створення класу, який є нащадком іншого класу.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} галасує.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // виклик конструктора суперкласу із передачею йому параметру імені
  }

  speak() {
    console.log(`${this.name} гавкає.`);
  }
}

const d = new Dog("Сірко");
d.speak(); // Сірко гавкає.
```

Якщо в підкласі наявний конструктор, перед використанням "this" він повинен спершу викликати `super()`.

Також можна розширювати класи, виконані в традиційному синтаксисі, на основі функцій:

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} галасує.`);
};

class Dog extends Animal {
  speak() {
    console.log(`${this.name} гавкає.`);
  }
}

const d = new Dog("Сірко");
d.speak(); // Сірко гавкає.

// Якщо зустрічаються однакові методи, метод нащадка матиме перевагу над батьківським методом
```

Зауважте, що класи не можуть розширяти звичайні об'єкти (ті, що не мають конструктора). Якщо потрібно наслідувати звичайний об'єкт, можна натомість вжити {{jsxref("Object.setPrototypeOf()")}}:

```js
const Animal = {
  speak() {
    console.log(`${this.name} галасує.`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Без цього рядка під час виклику методу `speak` буде викинуто виняток TypeError
Object.setPrototypeOf(Dog.prototype, Animal);

const d = new Dog("Сірко");
d.speak(); // Сірко галасує.
```

## Види

Може виникнути потреба повернути з похідного від масиву класу `MyArray` об'єкт {{jsxref("Array")}}. Патерн «види» дає змогу заміщувати усталені конструктори.

Наприклад, під час використання методів, що повертають усталений конструктор, таких як {{jsxref("Array.prototype.map()")}}, може виникнути потреба повернути батьківський об'єкт `Array` замість `MyArray`. Символ {{jsxref("Symbol.species")}} дозволяє цього досягти таким чином:

```js
class MyArray extends Array {
  // Заміщуємо вид так, що він вказує на батьківський конструктор Array
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Звертання до надкласів за допомогою `super`

Ключове слово {{jsxref("Operators/super", "super")}} використовується для викликання відповідних методів надкласу. Це одна із переваг над прототипним наслідуванням.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} галасує.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} гарчить.`);
  }
}

const l = new Lion("Пушок");
l.speak();
// Пушок галасує.
// Пушок гарчить.
```

## Домішки

Абстрактні підкласи, або _домішки_, — це шаблони для класів. Клас в ECMAScript може мати лише один надклас, тож множинне наслідування від, наприклад, інструментальних класів не є можливим. Така функціональність повинна надаватися надкласом.

Функція, яка приймає надклас на вхід і розширяє цей надклас на виході, може використовуватись для реалізації домішок в ECMAScript:

```js
const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

Клас, який використовує ці домішки, можна записати таким чином:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

## Повторне виконання опису класу

Клас не можна описати повторно. Спроба це зробити призведе до помилки `SyntaxError`.

Якщо при експериментуванні з кодом у середовищі веббраузера, такому як «Firefox Web Console» (**Tools** > **Web Developer** > **Web Console**), ви виконаєте опис класу з одним і тим самим іменем двічі, то отримаєте `SyntaxError: redeclaration of let ClassName;`. (Дивіться продовження дискусії цієї проблеми в {{Bug(1428672)}}.) Виконання подібної дії у «Chrome Developer Tools» виведе повідомлення, схоже на `Uncaught SyntaxError: Identifier 'ClassName' has already been declared at <anonymous>:1:1`.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Functions", "Функції", "", "true")}}
- {{jsxref("Statements/class", "Оголошення класів", "", "true")}}
- {{jsxref("Operators/class", "Вирази класів", "", "true")}}
- {{jsxref("Classes/Public_class_fields", "Публічні поля класів", "", "true")}}
- {{jsxref("Classes/Private_class_fields", "Приватні особливості класів", "", "true")}}
- {{jsxref("Operators/super", "super")}}
- [Допис у блозі: "Заглиблення в ES6: Класи" (англ.)](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
- [Поля та пропозиція публічних та приватних властивостей класів (етап 3) (англ.)](https://github.com/tc39/proposal-class-fields)
