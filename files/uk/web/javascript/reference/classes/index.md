---
title: Класи
slug: Web/JavaScript/Reference/Classes
page-type: guide
browser-compat: javascript.classes
---

{{jsSidebar("Classes")}}

Класи — це зразки, за якими створюються нові об'єкти. Вони інкапсулюють дані й код, який працює з цими даними. Класи в JS побудовані на [прототипах](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), хоча й містять певні унікальні синтаксичні та семантичні особливості.

Більше прикладів та пояснень – у посібнику [Застосування класів](/uk/docs/Web/JavaScript/Guide/Using_classes).

## Опис

### Означення класів

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

Подібно до виразів функцій, вирази класів можуть бути анонімними, а ще можуть мати назву, котра відрізняється від назви змінної, котрій такий клас присвоюється. Проте на відміну від оголошень функцій, оголошення класів мають такі ж обмеження [темпоральної мертвої зони](/uk/docs/Web/JavaScript/Reference/Statements/let#temporalna-mertva-zona-tdz), що й `let` і `const`, і поводяться так, ніби [не підіймаються](/uk/docs/Web/JavaScript/Guide/Using_classes#pidniattia-oholoshen-klasiv).

### Тіло класу

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

> **Примітка:** Приватні можливості мають таке обмеження, що всі імена властивостей, оголошені в одному класі, повинні бути неповторними. Інші, публічні властивості – не мають такого обмеження: можна мати декілька публічних властивостей з одним іменем, і остання серед них замінить всі попередні. Так само це працює в [об'єктних ініціалізаторах](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer#dubliuvannia-nazv-vlastyvostei).

На додачу до цього, є два особливі записи елементів класу: [`constructor`](#konstruktor) і [блоки статичної ініціалізації](#bloky-statychnoi-initsializatsii), котрі мають власні довідкові матеріали.

#### Конструктор

Метод {{jsxref("Classes/constructor", "constructor")}} – це спеціальний метод для створення та ініціалізації об'єктів, створених за допомогою класу. В класі може бути лише один спеціальний метод з назвою "constructor" – викидається {{jsxref("SyntaxError")}}, якщо клас містить більш ніж один метод `constructor`.

Конструктор може застосовувати ключове слово [`super`](/uk/docs/Web/JavaScript/Reference/Operators/super) для виклику конструктора надкласу.

Всередині конструктора можна створювати властивості примірника:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Інший варіант: якщо значення властивостей примірника не залежать від аргументів конструктора, то їх можна означувати як [поля класу](#oholoshennia-poliv).

#### Блоки статичної ініціалізації

[Блоки статичної ініціалізації](/uk/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) дають змогу гнучко ініціалізувати [статичні властивості](#statychni-metody-i-polia), в тому числі виконувати інструкції під час ініціалізації, надаючи доступ до приватних областей.

Можна оголошувати декілька статичних блоків і перемежовувати їх з оголошеннями статичних полів і методів (всі статичні елементи опрацьовуються в порядку їх оголошення).

#### Методи

Методи означаються на прототипі всіх примірників класу, їх поділяють всі примірники. Методи можуть бути простими функціями, асинхронними функціями, генераторними функціями й асинхронними генераторними функціями. Більше про це – в [означенні методів](/uk/docs/Web/JavaScript/Reference/Functions/Method_definitions).

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Гетер
  get area() {
    return this.calcArea();
  }
  // Метод
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}
const square = new Rectangle(10, 10);
console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```

#### Статичні методи і поля

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

#### Оголошення полів

За допомогою синтаксису оголошення полів класу приклад [constructor](#konstruktor) може бути переписаний так:

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

Поля класів подібні до властивостей об'єктів, а не змінних, тож для їх оголошення не потрібні ключові слова штибу `const`. [Приватні можливості](#pryvatni-mozhlyvosti-klasiv) у JavaScript використовують особливий синтаксис ідентифікаторів, тому `public` і `private` також не повинні використовуватися.

Як видно вище, поля можуть бути оголошені як з усталеним значенням, так і без нього. Поля без усталених значень усталено мають значення `undefined`. Коли оголошувати поля заздалегідь, то вони виходять більш самодокументованими, а іще – такі поля присутні завжди, що допомагає оптимізації.

Більше інформації – на сторінці [публічних полів класів](/uk/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

#### Приватні можливості класів

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

Приватні поля можна оголошувати лише заздалегідь, під час опису полів. Їх не можна створювати пізніше шляхом присвоєння їм значень, так, як це можна робити зі звичайними властивостями.

Додаткову інформацію можна знайти в розділі [приватних можливостей класів](/uk/docs/Web/JavaScript/Reference/Classes/Private_class_fields).

### Успадкування

Ключове слово {{jsxref("Classes/extends", "extends")}} використовується в _оголошеннях класів_ чи _класових виразах_ для створення класу, який є нащадком іншого конструктора (класу або функції).

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

Якщо в підкласі є конструктор, то такий конструктор мусить викликати `super()`, перш ніж використовувати `this`. Також ключове слово {{jsxref("Operators/super", "super")}} може застосовуватись для виклику відповідних методів надкласу.

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

### Порядок виконання

Коли виконується [оголошення `class`](/uk/docs/Web/JavaScript/Reference/Statements/class) або [вираз `class`](/uk/docs/Web/JavaScript/Reference/Operators/class), то різні його компоненти виконуються в такому порядку:

1. Першим виконується положення {{jsxref("Classes/extends", "extends")}}, якщо воно є. Воно повинно обчислюватись до дійсної функції-конструктора або `null`, інакше – буде викинуто {{jsxref("TypeError")}}.
2. Видобувається метод {{jsxref("Classes/constructor", "constructor")}}; він замінюється усталеною реалізацією `constructor`, якщо відсутній. Проте оскільки визначення `constructor` є лише визначенням методу, цей крок не відстежується.
3. У порядку оголошення обчислюються ключі властивостей елементів класу. Якщо ключ властивості є обчислюваним, то його вираз обчислюється, і `this` при цьому дорівнює значенню `this` навколо класу (а не самому класові). Значення жодної властивості поки не обчислюється.
4. У порядку оголошення встановлюються методи та аксесори. Методи та аксесори примірника встановлюються на властивості `prototype` поточного класу, а статичні методи та аксесори – на самому класі. Приватні методи та аксесори примірника – зберігаються для встановлення безпосередньо на примірнику пізніше. Цей крок не відстежується.
5. Тепер клас ініціалізується прототипом, заданим `extends`, та реалізацією, заданою `constructor`. Для всіх кроків вище, якщо обчислюваний вираз намагається отримати доступ до імені класу, то викидається {{jsxref("ReferenceError")}}, оскільки клас тоді ще не ініціалізовано.
6. У порядку оголошення обчислюються значення елементів класу:
   - Для кожного [поля примірника](/uk/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (публічного або приватного) – зберігається його вираз-ініціалізатор. Цей ініціалізатор обчислюється під час створення примірника, на початку конструктора (для базових класів) або безпосередньо перед поверненням виклику `super()` (для похідних класів).
   - Для кожного [статичного поля](/uk/docs/Web/JavaScript/Reference/Classes/static) (публічного або приватного) – його ініціалізатор обчислюється, і при цьому `this` дорівнює самому класові, а властивість створюється на класі.
   - Обчислюються [блоки статичної ініціалізації](/uk/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), при чому `this` дорівнює самому класові.
7. На цьому етапі клас є цілком ініціалізованим і може використовуватися як функція-конструктор.

Про те, як створюються примірники, дивіться у довідці про {{jsxref("Classes/constructor", "constructor")}}.

## Приклади

### Зв'язування this із примірником і статичні методи

Коли статичний метод або метод примірника викликається без значення {{jsxref("Operators/this", "this")}}, наприклад, шляхом присвоєння методу змінній, а потім виклику його через змінну, то всередині такого методу `this` матиме значення `undefined`. Така логіка діє навіть тоді, коли не задана директива [`"use strict"`](/uk/docs/Web/JavaScript/Reference/Strict_mode), адже код всередині тіла `class` завжди виконується в суворому режимі.

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

Коли переписати приклад вище за допомогою традиційного синтаксису на основі функцій, у несуворому режимі, то виклики методів з `this` будуть автоматично прив'язані до {{jsxref("globalThis")}}. У суворому режимі значенням `this` залишиться `undefined`.

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
speak(); // глобальний об'єкт (у несуворому режимі)
const eat = Animal.eat;
eat(); // глобальний об'єкт (у несуворому режимі)
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Застосування класів](/uk/docs/Web/JavaScript/Guide/Using_classes)
- [`class`](/uk/docs/Web/JavaScript/Reference/Statements/class)
- [Вираз `class`](/uk/docs/Web/JavaScript/Reference/Operators/class)
- [Функції](/uk/docs/Web/JavaScript/Reference/Functions)
- [Заглиблення в ES6: Класи](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/) на hacks.mozilla.org (2015)
