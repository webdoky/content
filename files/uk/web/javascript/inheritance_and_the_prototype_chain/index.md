---
title: Успадкування та ланцюжок прототипів
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
page-type: guide
---

{{jsSidebar("Advanced")}}

У програмуванні _успадкуванням_ звуть передачу характеристик від предка до нащадка таким чином, що новий уривок коду може їх повторно використовувати та вибудовувати власні можливості на основі наявних. JavaScript має реалізацію успадкування, засновану на [об'єктах](/uk/docs/Web/JavaScript/Data_structures#obiekty). Кожний об'єкт має приховане посилання на інший об'єкт, який зветься його _прототипом_. Цей об'єкт-прототип також має прототип, і так далі, поки не буде досягнуто об'єкта, чиїм прототипом є `null`. Значення `null` за визначенням не має прототипа і грає роль кінцевої ланки такого **ланцюжка прототипів**. Можна видозмінювати будь-який член ланцюжка прототипів, або навіть замінювати прототип в ході виконання, тож концепції штибу [статичної диспетчеризації](https://en.wikipedia.org/wiki/Static_dispatch) в JavaScript не існують.

JavaScript дещо спантеличує розробників, котрі мають досвід у мовах на основі класів (як то Java чи C++), оскільки він є [динамічною мовою](/uk/docs/Web/JavaScript/Data_structures#dynamichna-i-slabka-typizatsiia) та не має статичних типів. Хоч таке спантеличення нерідко вважається одним з недоліків JavaScript, сама модель прототипного успадкування фактично є потужнішою за класичну. Наприклад, доволі тривіальною є побудова класичної моделі поверх прототипної – і саме так реалізовані [класи](/uk/docs/Web/JavaScript/Reference/Classes).

Попри те, що класи нині – загальноприйнятий підхід, що став новою парадигмою JavaScript, вони не приносять нового патерну успадкування. Хоч класи приховують більшість прототипного механізму за абстракцією, розуміння того, як за лаштунками працюють прототипи, досі є корисним.

## Успадкування за ланцюжком прототипів

### Успадкування властивостей

Об'єкти JavaScript є динамічними "мішками" властивостей (котрі звуть **власними властивостями**). Об'єкти JavaScript мають посилання на об'єкт-прототип. При спробі звертання до властивості об'єкта, ця властивість буде шукатися не лише на самому об'єкті, а й на його прототипі, прототипі його прототипа, і так далі, поки або не буде знайдена властивість з відповідною назвою, або буде досягнутий кінець ланцюжка прототипів.

> **Примітка:** Згідно зі стандартом ECMAScript, для позначення прототипу `someObject` використовується запис `someObject.[[Prototype]]`. До прихованої комірки `[[Prototype]]` можна звернутися та змінити її вміст за допомогою функцій {{jsxref("Object.getPrototypeOf()")}} і {{jsxref("Object.setPrototypeOf()")}} відповідно. Це рівносильно аксесорові JavaScript [`__proto__`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), котрий є нестандартним, але фактично реалізований багатьма рушіями JavaScript. Аби уникнути плутанини та зберегти стислість, у нашому тексті ми уникатимемо вживання `obj.__proto__`, а натомість писатимемо `obj.[[Prototype]]`. Це відповідає `Object.getPrototypeOf(obj)`.
>
> Цю комірку не слід плутати зі властивістю функцій `func.prototype`, котра натомість задає `[[Prototype]]`, що буде присвоєна всім _примірникам_ об'єктів, створених такою функцією, коли вона використовується як конструктор. Властивість функцій-конструкторів `prototype` буде розкрита в [розділі нижче](#konstruktory).

Є кілька способів задати `[[Prototype]]` об'єкта, – вони перелічені в [розділі нижче](#rizni-sposoby-stvorennia-ta-zminiuvannia-lantsiuzhkiv-prototypiv). Поки що вживатимемо [синтаксис `__proto__` syntax](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer#seter-prototypa) – для ілюстративних потреб. Слід зауважити, що синтаксис `{ __proto__: ... }` відрізняється від аксесора `obj.__proto__`: такий синтаксис є стандартним і рекомендованим.

В об'єктному літералі виду `{ a: 1, b: 2, __proto__: c }` значення `c` (котре повинно бути або `null`, або іншим об'єктом) стане `[[Prototype]]` об'єкта, представленого літералом, а решта ключів, як то `a` і `b`, стане _власними властивостями_ цього об'єкта. Такий синтаксис читається вельми природно, оскільки `[[Prototype]]` є лишень "прихованою властивістю" об'єкта.

Ось що відбувається, коли спробувати звернутися до властивості:

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ задає [[Prototype]]. Тут вона задана
  // як іще один об'єктний літерал.
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]] має властивості b та c.
// o.[[Prototype]].[[Prototype]] – це Object.prototype (пояснимо,
// що це означає, згодом).
// Врешті решт, o.[[Prototype]].[[Prototype]].[[Prototype]] – null.
// Це кінець ланцюжка прототипів, оскільки null,
// за визначенням, не має [[Prototype]].
// Таким чином, увесь ланцюжок прототипів має такий вигляд:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Чи є в o власна властивість 'a'? Так, і її значення – 1.

console.log(o.b); // 2
// Чи є в o власна властивість 'b'? Так, і її значення – 2.
// Прототип також має властивість 'b', але вона не обробляється
// Це зветься Затулянням властивостей

console.log(o.c); // 4
// Чи є в o власна властивість 'c'? Ні, слід перевірити його прототип.
// Чи є в o.[[Prototype]] власна властивість 'c'? Так, і її значення – 4.

console.log(o.d); // undefined
// Чи є в o власна властивість 'd'? Ні, слід перевірити його прототип.
// Чи є в o.[[Prototype]] власна властивість 'd'? Ні, слід перевірити його прототип.
// o.[[Prototype]].[[Prototype]] – це Object.prototype, і
// на ньому усталено немає властивості 'd', слід перевірити його прототип.
// o.[[Prototype]].[[Prototype]].[[Prototype]] – це null, кінець пошуку,
// властивість не знайдена, повертається undefined.
```

Присвоєння властивості об'єкта утворює власну властивість Єдиний виняток правил логіки отримання й задання – коли ці операції перехоплює [гетер або сетер](/uk/docs/Web/JavaScript/Guide/Working_with_Objects#oznachennia-heteriv-ta-seteriv).

Аналогічно, можна створювати довгі ланцюжки прототипів, і пошук властивості відбуватиметься на всьому ланцюжку.

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ задає [[Prototype]]. Тут вона задана
  // як іще один об'єктний літерал.
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(o.d); // 5
```

### Успадкування "методів"

JavaScript не має "[методів](/uk/docs/Glossary/Method)" у тому вигляді, в якому їх передбачають класові мови програмування. У JavaScript будь-яка функція може бути додана до об'єкта у вигляді властивості. Успадкована функція працює так само, як і будь-яка інша властивість, включно з затулянням властивостей, показаним вище (у цьому випадку – у вигляді _перевизначення методів_).

Коли виконується успадкована функція, то значення [`this`](/uk/docs/Web/JavaScript/Reference/Operators/this) вказує на об'єкт, котрий успадковує, а не на об'єкт-прототип, для якого функція є власною властивістю.

```js
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// При виклику parent.method, у цьому випадку, 'this' вказує на parent

// child – об'єкт, котрий успадковує від parent
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// Коли викликається child.method, то 'this' вказує на child.
// Тож коли child успадковує метод від parent,
// То властивість 'value' шукається в child. Проте оскільки child
// не має власної властивості з іменем 'value', то ця властивість
// береться з [[Prototype]], тобто з parent.value.

child.value = 4; // присвоїти значення 4 властивості 'value' об'єкта child.
// Це затуляє властивість 'value' об'єкта parent.
// Об'єкт child отримає наступний вигляд:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Оскільки child тепер має властивість 'value', то 'this.value' означає
// тепер child.value
```

## Конструктори

Потужність прототипів полягає в змозі повторно використовувати набір властивостей, якщо вони повинні бути присутні на кожному примірнику – особливо методи. Припустімо, створюється низка контейнерів, і кожен контейнер – це об'єкт, котрий містить значення, до котрого можна звернутися за допомогою функції `getValue`. Інтуїтивна реалізація була б такою:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Це субоптимально, адже кожен примірник має власну властивість-функцію, котра робить одне й те ж, що надлишково й непотрібно. Натомість можна перемістити `getValue` в `[[Prototype]]` усіх контейнерів:

```js
const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];
```

Таким чином, метод `getValue` усіх контейнерів посилатиметься на одну функцію, зменшивши використання пам'яті. Проте ручне прив'язування `__proto__` при кожному створенні об'єкта – все одно вельми незручне. Тут варто використати функцію-_конструктор_, котра автоматично задає `[[Prototype]]` кожному об'єктові, що створюється. Конструктори – це функції, котрі викликаються з ключовим словом [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new).

```js
// Функція-конструктор
function Box(value) {
  this.value = value;
}

// Властивості, котрі матимуть всі контейнери,
// створені за допомогою конструктора Box()
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
```

Кажуть, що `new Box(1)` – це _примірник_, створений з функції-конструктора `Box`. `Box.prototype` не сильно відрізняється від об'єкта `boxPrototype`, створеного раніше: це лишень простий об'єкт. Кожний примірник, створений з функції-конструктора, автоматично отримує [`prototype`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) конструктора за свій `[[Prototype]]` — тобто `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` усталено має одну власну властивість – [`constructor`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), котра вказує на саму функцію-конструктор, тобто `Box.prototype.constructor === Box`. Це дає змогу звертатися до вихідного конструктора з будь-якого примірника.

> **Примітка:** Якщо з функції-конструктора повертається непримітивне значення, то воно стає результатом виразу `new`. В такому випадку `комірка [[Prototype]]` може не бути коректно задана – але на практиці це відбувається в більшості випадків.

На [класах](/uk/docs/Web/JavaScript/Reference/Classes) функція-конструктор вище може бути переписана так:

```js
class Box {
  constructor(value) {
    this.value = value;
  }

  // Методи створюються на Box.prototype
  getValue() {
    return this.value;
  }
}
```

Класи – це синтаксичний цукор над функціями-конструкторами, а отже – з ними так само можна користуватися `Box.prototype` для зміни поведінки всіх примірників. Проте через те, що класи розроблені як абстракція над прихованим прототипним механізмом, в цій статті використовуватиметься легший синтаксис – функції-конструктори, аби у повноті продемонструвати те, як працюють прототипи.

Через те, що `Box.prototype` вказує на той же об'єкт, що й комірка `[[Prototype]]` кожного з примірників, поведінку всіх примірників можна змінити шляхом внесення змін у `Box.prototype`.

```js
function Box(value) {
  this.value = value;
}
Box.prototype.getValue = function () {
  return this.value;
};
const box = new Box(1);

// Всенення змін до Box.prototype після того, як примірник вже був створений
Box.prototype.getValue = function () {
  return this.value + 1;
};
box.getValue(); // 2
```

Як наслідок, _повторне присвоєння_ `Constructor.prototype` (`Constructor.prototype = ...`) є недоброю ідеєю з двох причин:

- Комірки `[[Prototype]]` примірників, створених до повторного присвоєння, тепер вказують не на той об'єкт, що комірки `[[Prototype]]` примірників, створених після нього – внесення змін до одного з `[[Prototype]]` більше не впливатиме на всі інші.
- Якщо вручну не скинути властивість `constructor`, то функція-конструктор більше не зможе бути відстежена за допомогою `instance.constructor`, що може суперечити очікуванням користувача. Частина вбудованих операцій зчитує також властивість `constructor`, і якщо вона не задана, такі операції можуть не працювати, як очікується.

Властивість `Constructor.prototype` корисна лише при створенні примірників. Вона ніяк не торкається комірки `Constructor.[[Prototype]]`, котра є _власним_ прототипом функції-конструктора, тобто `Function.prototype` — таким чином, `Object.getPrototypeOf(Constructor) === Function.prototype`.

### Неявні конструктори літералів

Частина літеральних записів JavaScript створює примірники, котрі неявно отримують `[[Prototype]]`. Наприклад:

```js
// Об'єктні літерали (без ключа `__proto__`) автоматично
// отримують `Object.prototype` собі в `[[Prototype]]`
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// Літерали масивів автоматично отримують `Array.prototype` собі в `[[Prototype]]`
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// Літерали регулярних виразів автоматично отримують `RegExp.prototype` собі в `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true
```

Їх можна "розцукрувати" до їхнього вигляду з конструктором.

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Наприклад, "методи масивів" штибу [`map()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/map) є простими методами, означеними на `Array.prototype`, і саме тому вони автоматично доступні на всіх примірниках масивів.

> **Застереження:** Є одна недобра можливість, котрою раніше зловживали – розширення `Object.prototype` або одного з інших вбудованих прототипів. Як приклад цієї недоброї можливості, можна означити `Array.prototype.myMethod = function () {...}`, а тоді використовувати `myMethod` на всіх примірниках масивів.
>
> Ця недобра можливість зветься _мавпячим латанням_. Мавпяче латання призводить до ризику несумісності при оновленні, тому що якщо мова додасть такий метод в майбутньому, але з інакшою сигнатурою, то ваш код зламається. Це вже призводило до проблем, наприклад, [SmooshGate](https://developer.chrome.com/blog/smooshgate/), і може бути великою перешкодою для розвитку мови, оскільки JavaScript прагне "не ламати Веб".
>
> **Єдина** добра підстава для розширення вбудованих прототипів – портування можливостей нових рушіїв JavaScript, як то `Array.prototype.forEach`.

Цікаве зауваження: у зв'язку з історичними причинами, частина властивостей `prototype` вбудованих конструкторів самі є примірниками. Наприклад, `Number.prototype` – це число 0, `Array.prototype` – порожній масив, а `RegExp.prototype` – це `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype сам по собі є функцією, яка нічого не робить
```

Проте це не так для визначених користувачем конструкторів, а також сучасних конструкторів, як то `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Утворення довших ланцюжків прототипів

Властивість `Constructor.prototype` стає коміркою `[[Prototype]]` примірників конструктора, в такому вигляді, як є – включно з коміркою `[[Prototype]]` самої `Constructor.prototype`. Усталено `Constructor.prototype` є _простим об'єктом_ – тобто `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. Єдиний виняток – сама `Object.prototype`, чия комірка `[[Prototype]]` містить значення `null` — тобто `Object.getPrototypeOf(Object.prototype) === null`. Таким чином, типовий конструктор утворює наступний ланцюжок прототипів:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Аби утворювати довші ланцюжки прототипів, можна задати комірку `[[Prototype]]` об'єкта `Constructor.prototype` за допомогою функції [`Object.setPrototypeOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

```js
function Base() {}
function Derived() {}
// Задати `[[Prototype]]` об'єкта `Derived.prototype`
// зі значенням `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

У класових поняттях це рівносильно використанню запису [`extends`](/uk/docs/Web/JavaScript/Reference/Classes/extends).

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

Може зустрітися якийсь давній код, що використовує для утворення ланцюжка успадкування статичний метод {{jsxref("Object.create()")}}. Проте через те, що він повторно присвоює властивість `prototype` і прибирає властивість [`constructor`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), він може приносити більше помилок, а переваги швидкодії можуть бути несуттєвими, якщо конструктори ще не створювали жодних примірників.

```js example-bad
function Base() {}
function Derived() {}
// Повторно присвоює `Derived.prototype` з новим об'єктом,
// `[[Prototype]]` якого є `Base.prototype`
// НЕ РОБІТЬ ТАК – замість цього використовуйте Object.setPrototypeOf
Derived.prototype = Object.create(Base.prototype);
```

## Дослідження прототипів – глибоке занурення

Розгляньмо те, що відбувається за лаштунками, трохи детальніше.

У JavaScript, як сказано вище, функції можуть мати властивості. Всі функції мають особливу властивість, що зветься `prototype`. Будь ласка, зверніть увагу, що код нижче є самодостатнім (можна спокійно виходити з того, що на вебсторінці немає жодного JavaScript, крім цього коду). Задля якнайкращого вивчення JavaScript наполегливо радимо відкрити консоль, перейти у вкладку "консоль", скопіювати та вставити туди код JavaScript нижче, а тоді запустити його за допомогою клавіші Enter чи Return. (Консоль включена в Інструменти розробника більшості веббраузерів. Більше інформації доступно для [Інструментів розробника Firefox](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Інструментів розробника Chrome](https://developer.chrome.com/docs/devtools/) й [Інструментів розробника Edge](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/).)

```js
function doSomething() {}
console.log(doSomething.prototype);
// Неважливо, як оголошена функція;
// функція в JavaScript завжди має усталену
// властивість prototype – з єдиним винятком:
// стрілкові функції не мають усталеної властивості prototype:
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);
```

Як показано вище, `doSomething()` має усталену властивість `prototype`, як це продемонстровано консоллю. Після запуску цього коду консоль повинна вивести об'єкт, котрий подібний на вигляд до наступного.

```plain
{
  constructor: ƒ doSomething(),
  [[Prototype]]: {
    constructor: ƒ Object(),
    hasOwnProperty: ƒ hasOwnProperty(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toLocaleString: ƒ toLocaleString(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf()
  }
}
```

> **Примітка:** Консоль Chrome вживає `[[Prototype]]` на позначення прототипа об'єкта, згідно з поняттями специфікації; Firefox використовує `<prototype>`. З міркувань сталості, ми використовуватимемо `[[Prototype]]`.

Можна додати властивості до прототипу `doSomething()`, як показано нижче.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

Це призводить до:

```plain
{
  foo: "bar",
  constructor: ƒ doSomething(),
  [[Prototype]]: {
    constructor: ƒ Object(),
    hasOwnProperty: ƒ hasOwnProperty(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toLocaleString: ƒ toLocaleString(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf()
  }
}
```

Тепер для створення примірника `doSomething()` на основі цього прототипу можна використовувати оператор `new`. Для використання цього оператора слід викликати функцію як зазвичай, а перед викликом поставити `new`. Виклик функції з оператором `new` повертає об'єкт, котрий є примірником цієї функції. Після цього до такого об'єкта можуть бути додані додаткові властивості.

Спробуйте наступний код:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // додати прототипові властивість
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // додати об'єктові властивість
console.log(doSomeInstancing);
```

Це призводить до виводу, подібного до наступного:

```plain
{
  prop: "some value",
  [[Prototype]]: {
    foo: "bar",
    constructor: ƒ doSomething(),
    [[Prototype]]: {
      constructor: ƒ Object(),
      hasOwnProperty: ƒ hasOwnProperty(),
      isPrototypeOf: ƒ isPrototypeOf(),
      propertyIsEnumerable: ƒ propertyIsEnumerable(),
      toLocaleString: ƒ toLocaleString(),
      toString: ƒ toString(),
      valueOf: ƒ valueOf()
    }
  }
}
```

Як показано вище, `[[Prototype]]` об'єкта `doSomeInstancing` – це `doSomething.prototype`. Але що це означає? Коли звернутися до властивості об'єкта `doSomeInstancing`, середовище виконання спершу перевіряє, чи має `doSomeInstancing` таку властивість.

Якщо `doSomeInstancing` не має такої властивості, то середовище виконання шукає її в `doSomeInstancing.[[Prototype]]` (вона ж `doSomething.prototype`). Якщо `doSomeInstancing.[[Prototype]]` має шукану властивість, то використовується саме властивість у `doSomeInstancing.[[Prototype]]`.

Інакше, якщо `doSomeInstancing.[[Prototype]]` не має такої властивості, то перевіряється її наявність у `doSomeInstancing.[[Prototype]].[[Prototype]]`. Усталено в комірці `[[Prototype]]` значення властивості `prototype` будь-якої функції лежить `Object.prototype`. Таким чином, далі шукана властивість перевіряється в `doSomeInstancing.[[Prototype]].[[Prototype]]` (вона ж `doSomething.prototype.[[Prototype]]` (вона ж `Object.prototype`)).

Якщо властивість не знайдена в `doSomeInstancing.[[Prototype]].[[Prototype]]`, то тоді перевіряється `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]`. Проте є проблема: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` – не існує, тому що `Object.prototype.[[Prototype]]` має значення `null`. Тоді й лише тоді, після перевірки всього ланцюжка прототипів через `[[Prototype]]`, середовище виконання вирішує, що значення властивості – `undefined`.

Спробуймо ввести в консоль іще трохи коду:

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:     ", doSomeInstancing.prop);
console.log("doSomeInstancing.foo:      ", doSomeInstancing.foo);
console.log("doSomething.prop:          ", doSomething.prop);
console.log("doSomething.foo:           ", doSomething.foo);
console.log("doSomething.prototype.prop:", doSomething.prototype.prop);
console.log("doSomething.prototype.foo: ", doSomething.prototype.foo);
```

Це дає наступний результат:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Різні способи створення та змінювання ланцюжків прототипів

Ми побачили декілька способів створення об'єктів та змінювання їхніх ланцюжків прототипів. Підсумуймо ці способи систематично, порівнюючи переваги й недоліки кожного з них.

### Об'єкти, створені за допомогою синтаксичних конструкцій

```js
const o = { a: 1 };
// Новостворений об'єкт o має [[Prototype]] зі значенням Object.prototype
// Object.prototype має за свій прототип null.
// o ---> Object.prototype ---> null

const b = ["yo", "whadup", "?"];
// Масиви успадковують від Array.prototype
// (котрий має методи indexOf, forEach тощо)
// Ланцюжок прототипів має наступний вигляд:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// Функції успадковують від Function.prototype
// (котрий має методи call, bind тощо)
// f ---> Function.prototype ---> Object.prototype ---> null

const p = { b: 2, __proto__: o };
// Можна задати [[Prototype]] новоствореного об'єкта
// як інший об'єкт, за допомогою властивості літерала __proto__. (Не плутати
// з аксесорами Object.prototype.__proto__)
// p ---> o ---> Object.prototype ---> null
```

При використанні ключа `__proto__` в [ініціалізаторах об'єктів](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer), спрямування ключа `__proto__` на щось, що не є об'єктом, призводить лише до непомітної невдачі, без викидання винятку. На противагу сетеру [`Object.prototype.__proto__`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), `__proto__` у літеральних ініціалізаторах об'єктів – стандартизована й оптимізована можливість, що може бути навіть ефективнішою за {{jsxref("Object.create")}}. Оголошення власних додаткових властивостей на об'єкті під час його створення – ергономічніше за {{jsxref("Object.create")}}.

### За допомогою функцій-конструкторів

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g – це об'єкт зі власними властивостями 'vertices' та 'edges'.
// g.[[Prototype]] має значення Graph.prototype, коли виконується new Graph().
```

Функції-конструктори доступні починаючи від дуже ранніх версій JavaScript. Таким чином, вони дуже швидкі, дуже стандартизовані та дуже гарно піддаються оптимізації JIT. Проте важко "правильно їх готувати", адже методи, додані таким чином, усталено є перелічуваними, що не узгоджується з синтаксисом класів і тим, як поводяться вбудовані методи. Створення довгих ланцюжків успадкування також збільшує ймовірність помилки, як показано раніше.

### За допомогою Object.create()

Виклик {{jsxref("Object.create()")}} створює новий об'єкт. Комірка `[[Prototype]]` цього об'єкта отримує перший аргумент цієї функції:

```js
const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (успадковане)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null (d – це об'єкт, прототипом якого є безпосередньо null)
console.log(d.hasOwnProperty);
// undefined, адже d не успадковує від Object.prototype
```

Подібно до ключа `__proto__` в об'єктних ініціалізаторах, `Object.create()` дає змогу безпосередньо задавати прототип об'єкта під час його створення, завдяки чому середовище виконання отримує змогу ще більше оптимізувати цей об'єкт. Також дає змогу створювати об'єкти з прототипом `null`, за допомогою `Object.create(null)`. Другий параметр `Object.create()` дає змогу точно задати атрибути кожної властивості в новому об'єкті, що може бути двосічним мечем:

- Це дає змогу створювати неперелічувані властивості тощо під час створення об'єкта, що неможливо з використанням об'єктних літералів.
- Це куди розлогіший підхід, більш схильний до помилок, ніж об'єктні літерали.
- Він може бути повільнішим за об'єктні літерали, особливо коли створюється чимало властивостей.

### За допомогою класів

```js
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  get area() {
    return this.height * this.width;
  }

  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

const square = new Square(2);
// square ---> Square.prototype ---> Polygon.prototype ---> Object.prototype ---> null
```

Класи пропонують найкращу прочитність і підтримуваність при визначенні складних структур успадкування. [Приватні властивості](/uk/docs/Web/JavaScript/Reference/Classes/Private_properties) – це можливість без тривіальної заміни за допомогою прототипного успадкування. Проте класи менше оптимізовані, аніж традиційні функції-конструктори, й не підтримуються в старих середовищах.

### За допомогою Object.setPrototypeOf()

На противагу всім методам вище, котрі задають ланцюжок прототипів під час створення об'єкта, [`Object.setPrototypeOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) дає змогу змінювати приховану властивість `[[Prototype]]` наявного об'єкта. Він навіть може накласти прототип на безпрототипний об'єкт, створений за допомогою `Object.create(null)`, або вилучити прототип об'єкта, задавши його як `null`.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

Проте слід задавати прототип під час створення об'єкта, якщо це можливо, тому що динамічне задання прототипу порушує усі оптимізації, які рушії виконують щодо ланцюжка прототипів. Це може змусити частину рушіїв компілювати ваш код наново заради деоптимізації, аби він працював згідно зі специфікаціями.

### За допомогою аксесора \_\_proto\_\_

Усі об'єкти успадковують сетер [`Object.prototype.__proto__`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), котрий може використовуватися для задання `[[Prototype]]` наявного об'єкта (якщо ключ `__proto__` не перевизначений на такому об'єкті).

> **Застереження:** Аксесори `Object.prototype.__proto__` – **нестандартні** та нерекомендовані. Слід завжди натомість використовувати `Object.setPrototypeOf`.

```js
const obj = {};
// НЕ ВИКОРИСТОВУЙТЕ ЦЕ: це лише приклад.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

Порівняно з `Object.setPrototypeOf`, задання `__proto__` з чимось, що не є об'єктом, тихо не вдається, без викидання винятку. Також у цієї можливості трохи краща підтримка з боку браузерів. Проте вона нестандартна та нерекомендована. Замість неї майже завжди слід користуватися `Object.setPrototypeOf`.

## Швидкодія

Час пошуку властивостей, котрі розташовані високо в ланцюжку прототипів, може мати негативний вплив на швидкодію, і це може бути суттєвим для коду, для якого швидкодія є критичною. Крім цього, намагання звернутися до відсутніх властивостей завжди призводить до обходу всього ланцюжка прототипів.

Крім цього, при ітеруванні властивостей об'єкта, **кожна** перелічувана властивість, присутня в ланцюжку прототипів, так само буде перелічена. Для перевірки того, чи має об'єкт властивість, означену на _ньому самому_, а не десь в ланцюжку прототипів, необхідно використовувати методи [`hasOwnProperty`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) або [`Object.hasOwn`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn). Усі об'єкти, крім тих, що мають `null` у `[[Prototype]]`, успадковують [`hasOwnProperty`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) від `Object.prototype` — якщо цей метод не перевизначений десь у ланцюжку прототипів. Щоб запропонувати конкретний приклад, візьмімо код прикладу з графом вище:

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}
Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};
const g = new Graph();
// g ---> Graph.prototype ---> Object.prototype ---> null
g.hasOwnProperty("vertices"); // true
Object.hasOwn(g, "vertices"); // true
g.hasOwnProperty("nope"); // false
Object.hasOwn(g, "nope"); // false
g.hasOwnProperty("addVertex"); // false
Object.hasOwn(g, "addVertex"); // false
Object.getPrototypeOf(g).hasOwnProperty("addVertex"); // true
```

Примітка: **Не**достатньо перевірити, чи має властивість значення [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined). Властивість може прекрасно існувати, і водночас її значенням може бути `undefined`.

## Висновок

JavaScript може викликати спантеличення в розробників, що прийшли з Java або C++, адже ця мова – завжди динамічна, все відбувається під час виконання, і взагалі нема статичних типів. Все є або об'єктом (примірником), або функцією (конструктором), і навіть самі функції є примірниками конструктора `Function`. Навіть "класи" як синтаксичні конструкції під час виконання є лишень функціями-конструкторами.

Усі функції-конструктори в JavaScript мають особливу властивість `prototype`, котра працює з оператором `new`. Посилання на об'єкт-прототип копіюється в приховану властивість `[[Prototype]]` нового примірника. Наприклад, коли зробити `const a1 = new A()`, то JavaScript (після створення об'єкта в пам'яті та до виконання функції `A()` з `this` зі значенням цього об'єкта) задає `a1.[[Prototype]] = A.prototype`. При звертанні до властивостей примірника, JavaScript спершу перевіряє, чи вони існують на об'єкті безпосередньо, а якщо ні, то шукає в `[[Prototype]]`. `[[Prototype]]` перевіряється _рекурсивно_, тобто `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` тощо, поки властивість не знайдена або `Object.getPrototypeOf` не поверне `null`. Це означає, що всі властивості, означені на `prototype`, фактично поділяються всіма примірниками, і навіть можна потім змінити частини `prototype` і отримати появу таких змін на всіх наявних примірниках.

Якщо, у прикладі вище, зробити `const a1 = new A(); const a2 = new A();`, то `a1.doSomething` фактично вказуватиме на `Object.getPrototypeOf(a1).doSomething`, що тотожно означеному `A.prototype.doSomething`, тобто `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Критично необхідно розуміти модель прототипного успадкування до написання складного коду, заснованого на ній. Крім цього, слід слідкувати за довжиною ланцюжків прототипів і ніколи не розривати їх, якщо є потреба уникнути можливих проблем зі швидкодією. Крім цього, нативні прототипи **ніколи** не повинні бути розширені, якщо це потрібно не для сумісності з новими можливостями JavaScript.
