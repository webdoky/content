---
title: Протоколи ітерування
slug: Web/JavaScript/Reference/Iteration_protocols
page-type: guide
spec-urls: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iteration
---

{{jsSidebar("More")}}

**Протоколи ітерування** – це не нові вбудовані значення чи синтаксис, а _протоколи_. Ці протоколи можуть бути реалізовані будь-яким об'єктом, шляхом виконання певних умов.

Є два протоколи: [Протокол ітерованого об'єкта](#protokol-iterovanoho-obiekta) та [протокол ітератора](#protokol-iteratora).

## Протокол ітерованого об'єкта

**Протокол ітерованого об'єкта** дає об'єктам JavaScript змогу означити або налаштувати власну логіку ітерування, наприклад, те, які значення обробляються в циклі {{jsxref("Statements/for...of", "for...of")}}. Частина вбудованих типів є [вбудованими ітерованими об'єктами](#vbudovani-iterovani-obiekty) з усталеною логікою ітерування, як то {{jsxref("Array")}} і {{jsxref("Map")}}, коли інші (як то {{jsxref("Object")}}) – ні.

Аби бути **ітерованим**, об'єкт мусить реалізувати метод **`@@iterator`**, що означає, що об'єкт (або один з об'єктів у його [ланцюжку прототипів](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) мусить мати властивість з ключем `@@iterator`, доступним через сталу {{jsxref("Symbol.iterator")}}:

- `[Symbol.iterator]`
  - : Функція без аргументів, що повертає об'єкт, котрий виконує [протокол ітератора](#protokol-iteratora).

Щоразу, коли об'єкт готується до ітерування (наприклад, на початку циклу {{jsxref("Statements/for...of", "for...of")}}), викликається без аргументів його метод `@@iterator`, і повернений **ітератор** використовується для отримання значень ітерування.

Зверніть увагу, що коли викликається ця функція без аргументів, вона закликається як метод ітерованого об'єкта. Таким чином, всередині цієї функції для звертання до властивостей ітерованого об'єкта може використовуватися ключове слово `this`, аби з'ясувати, що повинно видаватися під час ітерації.

Ця функція може бути звичайною функцією, а може бути генераторною функцією, щоб при її заклику повертався об'єкт-ітератор. Всередині такої генераторної функції кожен запис надається за допомогою `yield`.

## Протокол ітератора

**Протокол ітератора** задає стандартний спосіб вироблення послідовності (або скінченної, або нескінченної) значень, і, потенційно, повернене значення, коли всі елементи послідовності були згенеровані.

Об'єкт є ітератором, коли має реалізацію метода **`next()`** з наступною семантикою:

- `next()`
  - : Функція, що приймає нуль або один аргумент і повертає об'єкт, що відповідає інтерфейсові `IteratorResult` (див. нижче). Якщо повертається необ'єктне значення (наприклад, `false` або `undefined`), коли ітератор використовується вбудованою можливістю мови (як то `for...of`), то викидається {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`).

Від усіх методів протоколу ітератора (`next()`, `return()` і `throw()`) очікується повернення об'єкта, що реалізує інтерфейс `IteratorResult`. Такий об'єкт повинен мати наступні властивості:

- `done` {{optional_inline}}

  - : Булеве значення, котре дорівнює `false`, якщо ітератор зміг виробити наступне значення послідовності. (Це рівносильно тому, щоб не задати властивість `done` узагалі.)

    Має значення `true`, якщо ітератор завершив свою послідовність. У такому випадку `value` є необов'язковим завершальним значенням ітератора.

- `value` {{optional_inline}}
  - : Будь-яке значення JavaScript, повернене ітератором. Може бути опущено, коли значення `done` дорівнює `true`.

На практиці жодна з цих властивостей не є суворо обов'язковою; якщо повертається об'єкт без якої-небудь властивості, то це фактично рівносильно поверненню `{ done: false, value: undefined }`.

Коли ітератор повертає результат із `done: true`, то очікується, що всі наступні виклики `next()` так само повернуть `done: true`, хоч це і не вимагається на рівні мови.

Метод `next` може прийняти значення, котре буде доступним тілу метода. Жодна вбудована можливість мови ніякого значення передавати не буде. Значення, передане в метод `next` [генераторів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Generator), стане значенням відповідного виразу `yield`.

Крім цього, ітератор може, необов'язково, реалізувати методи **`return(value)`** і **`throw(exception)`**, котрі, бувши викликаними, кажуть ітераторові, що викликач закінчив ітерування і можна виконати яке-небудь важливе очищення (як то закриття з'єднання з базою даних).

- `return(value)` {{optional_inline}}
  - : Функція, котра приймає нуль або один аргумент і повертає об'єкт, котрий відповідає інтерфейсові `IteratorResult`, зазвичай із полем `value`, рівним переданому в нього `value`, і полем `done` зі значенням `true`. Виклик цього метода каже ітераторові, що викликач не має наміру більше викликати `next()` і що можна зайнятися очищенням.
- `throw(exception)` {{optional_inline}}
  - : Функція, котра приймає нуль або один аргумент і повертає об'єкт, що відповідає інтерфейсові `IteratorResult`, зазвичай із полем `done`, рівним `true`. Виклик цього метода каже ітераторові, що викликач увійшов у помилковий стан, а `exception` зазвичай є примірником {{jsxref("Error")}}.

> **Примітка:** Неможливо рефлективно дізнатися (тобто без фактичного виклику `next()` і перевірки поверненого результату), чи реалізує певний об'єкт протокол ітератора.

Дуже легко зробити ітератор також ітерованим об'єктом: достатньо реалізувати метод `[@@iterator]()`, котрий повертає `this`.

```js
// Відповідає і протоколові ітератора, і протоколові ітерованого об'єкта
const myIterator = {
  next() {
    // ...
  },
  [Symbol.iterator]() {
    return this;
  },
};
```

Такий об'єкт зветься _ітерованим ітератором_. Це дає змогу використати ітератор в певних синтаксичних структурах, що розраховують на ітеровані об'єкти – таким чином, нечасто є корисною реалізація протоколу ітератора без реалізації водночас протоколу ітерованого об'єкта. (Насправді майже всі мовні структури й API очікують на _ітеровані об'єкти_, а не _ітератори_.) [Генераторний об'єкт](/uk/docs/Web/JavaScript/Reference/Global_Objects/Generator) є прикладом цього:

```js
const aGeneratorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof aGeneratorObject.next);
// "function": є метод next (котрий повертає правильний результат), тож це ітератор

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function": є метод @@iterator (котрий повертає правильний ітератор), тож це ітерований об'єкт

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true: метод @@iterator повертає сам об'єкт (сам ітератор), тож це ітерований ітератор
```

Усі вбудовані ітератори мають в ланцюжку прототипів об'єкт {{jsxref("Iterator", "Iterator.prototype")}}, котрий має реалізацію методу `[@@iterator]()`, що повертає `this`, тож вбудовані ітератори також є ітерованими об'єктами.

А проте, коли це можливо, краще, щоб `iterable[Symbol.iterator]` повертав різні ітератори, що завжди починаються спочатку, як це робить [`Set.prototype[@@iterator]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator).

## Асинхронний ітератор і протокол асинхронного ітерованого об'єкта

Є іще одна пара протоколів, яка використовується для асинхронного ітерування – вони звуться протоколами **асинхронного ітератора** й **асинхронного ітерованого об'єкта**. Їх інтерфейси дуже схожі на інтерфейси протоколів ітерованого об'єкта та ітератора, окрім того, що кожне повернене при викликах методів ітератора значення – загорнуте в проміс.

Об'єкт реалізує протокол асинхронного ітерованого об'єкта, коли має реалізацію наступних методів:

- [`[Symbol.asyncIterator]`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Функція без аргументів, що повертає об'єкт, котрий відповідає протоколові асинхронного ітератора.

Об'єкт реалізує протокол асинхронного ітератора, коли має реалізацію наступних методів:

- `next()`
  - : Функція, котра приймає нуль або один аргумент і повертає проміс. Цей проміс сповнюється об'єктом, що відповідає інтерфейсові `IteratorResult`, а його властивості мають таку ж семантику, як в синхронного ітератора.
- `return(value)` {{optional_inline}}
  - : Функція, котра приймає нуль або один аргумент і повертає проміс. Цей проміс сповнюється об'єктом, що відповідає інтерфейсові `IteratorResult`, а його властивості мають таку ж семантику, як в синхронного ітератора.
- `throw(exception)` {{optional_inline}}
  - : Функція, котра приймає нуль або один аргумент і повертає проміс. Цей проміс сповнюється об'єктом, що відповідає інтерфейсові `IteratorResult`, а його властивості мають таку ж семантику, як в синхронного ітератора.

## Взаємодія між мовою та протоколами ітерування

Мова задає API, котрі або виробляють, або приймають ітеровані об'єкти й ітератори.

### Вбудовані ітеровані об'єкти

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}} і [`Segments`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (повернений з [`Intl.Segmenter.prototype.segment()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) є вбудованими ітерованими об'єктами, адже кожний з їхніх об'єктів `prototype` має реалізацію метода `@@iterator`. На додачу, об'єкт [`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments) і частина типів колекцій DOM, як то {{domxref("NodeList")}}, так само є ітерованими об'єктами.
У ядрі мови JavaScript немає жодного об'єкта, що був би асинхронним ітерованим. Деякі API Вебу, як то {{domxref("ReadableStream")}}, усталено мають метод `Symbol.asyncIterator`.

[Генераторні функції](/uk/docs/Web/JavaScript/Reference/Statements/function*) повертають [генераторні об'єкти](/uk/docs/Web/JavaScript/Reference/Global_Objects/Generator), котрі є ітерованими ітераторами. [Асинхронні генераторні функції](/uk/docs/Web/JavaScript/Reference/Statements/async_function*) повертають [асинхронні генераторні об'єкти](/uk/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator), котрі є асинхронними ітерованими ітераторами.

Ітератори, повернені зі вбудованих ітерованих об'єктів, успадковують від спільного класу {{jsxref("Iterator")}} (наразі прихованого), котрий має реалізацію вищезгаданого методу `[Symbol.iterator]() { return this; }`, що робить їх всіх ітерованими ітераторами. У майбутньому ці вбудовані ітератори можуть отримати додаткові [допоміжні методи](https://github.com/tc39/proposal-iterator-helpers), на додачу до методу `next()`, котрий вимагається протоколом ітератора. Ланцюжок прототипів ітератора можна дослідити шляхом виведення його в графічну консоль.

```plain
console.log([][Symbol.iterator]());

Array Iterator {}
  [[Prototype]]: Array Iterator     ==> Цей прототип — спільний для всіх ітераторів-масивів
    next: ƒ next()
    Symbol(Symbol.toStringTag): "Array Iterator"
    [[Prototype]]: Object           ==> Цей прототип — спільний для всіх вбудованих ітераторів
      Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      [[Prototype]]: Object         ==> Це — Object.prototype
```

### Вбудовані API, що приймають ітератори

Є чимало API, що приймають ітеровані об'єкти. Серед прикладів:

- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
- {{jsxref("Set/Set", "Set()")}}
- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}

```js
const myObj = {};

new WeakSet(
  (function* () {
    yield {};
    yield myObj;
    yield {};
  })(),
).has(myObj); // true
```

### Синтаксичні конструкції, що очікують на ітеровані об'єкти

Частина інструкцій і виразів очікує на ітеровані об'єкти, наприклад, цикли {{jsxref("Statements/for...of", "for...of")}}, [розгортання масивів і параметрів](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}} і [деструктурування масивів](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js
for (const value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

console.log([..."abc"]); // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
console.log(a); // "a"
```

Коли вбудовані синтаксичні конструкції ітерують ітератор, і поле `done` останнього результату дорівнює `false` (тобто ітератор може виробити більше значень), але більше значень не потрібно, то буде викликано метод `return`, якщо такий метод є. Це може статися, наприклад, якщо в циклі `for...of` зустрілася інструкція `break` або `return`, або коли при деструктуруванні масиву усі ідентифікатори вже отримали значення.

```js
const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        console.log("Повернення", i);
        if (i === 3) return { done: true, value: i };
        return { done: false, value: i };
      },
      return() {
        console.log("Закривання");
        return { done: true };
      },
    };
  },
};

const [a] = obj;
// Повернення 1
// Закривання

const [b, c, d] = obj;
// Повернення 1
// Повернення 2
// Повернення 3
// Уже досягнутий кінець (останній виклик повернув `done: true`),
// тож `return` не викликається

for (const b of obj) {
  break;
}
// Повернення 1
// Закривання
```

Цикл [`for await...of`](/uk/docs/Web/JavaScript/Reference/Statements/for-await...of) і [`yield*`](/uk/docs/Web/JavaScript/Reference/Operators/yield*) в [асинхронних генераторних функціях](/uk/docs/Web/JavaScript/Reference/Statements/async_function*) (але не [синхронних генераторних функціях](/uk/docs/Web/JavaScript/Reference/Statements/function*)) – єдині способи взаємодіяти з асинхронними ітерованими об'єктами. Використання `for...of`, розгортання масиву тощо на асинхронному ітерованому об'єкті, що не є водночас синхронним ітерованим об'єктом (тобто має `[@@asyncIterator]()`, але не має `[@@iterator]()`) викине TypeError: x is not iterable.

### Погано сформовані ітеровані об'єкти

Якщо метод `@@iterator` ітерованого об'єкта не повертає об'єкт-ітератор, то такий ітерований об'єкт вважається _погано сформованим_.

Його використання, ймовірно, призведе до помилок під час виконання або проблемної логіки:

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
```

## Приклади

### Користувацькі ітеровані об'єкти

Так можна створювати власні ітеровані об'єкти:

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log([...myIterable]); // [1, 2, 3]
```

### Простий ітератор

Ітератори за своєю природою мають стан. Якщо не означити ітератор як [генераторну функцію](/uk/docs/Web/JavaScript/Reference/Statements/function*) (як це показано в прикладі вище), то, ймовірно, доведеться інкапсулювати цей стан в замиканні.

```js
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const it = makeIterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### Нескінченний ітератор

```js
function idMaker() {
  let index = 0;
  return {
    next() {
      return {
        value: index++,
        done: false,
      };
    },
  };
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### Означення ітерованого об'єкта за допомогою генератора

```js
function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeSimpleGenerator(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### Означення ітерованого об'єкта за допомогою класу

Інкапсуляція стану можлива також за допомогою [приватних властивостей](/uk/docs/Web/JavaScript/Reference/Classes/Private_properties).

```js
class SimpleClass {
  #data;

  constructor(data) {
    this.#data = data;
  }

  [Symbol.iterator]() {
    // Використання нового індексу для кожного ітератора. Це робить кілька
    // ітерувань одного ітерованого безпечними для нетривіальних випадків,
    // як то використання break або вкладеного ітерування одного ітерованого.
    let index = 0;

    return {
      // Примітка: використання стрілкової функції дає `this` змогу вказувати на
      // `this` методу `[@@iterator]()`, а не `this` методу `next()`
      next: () => {
        if (index < this.#data.length) {
          return { value: this.#data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); // 1 2 3 4 5
}
```

### Заміщення вбудованих ітерованих об'єктів

Наприклад, {{jsxref("String")}} – це вбудований ітерований об'єкт:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

[Усталений ітератор](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) `String` повертає одну за одною кодові точки рядка:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Можна перевизначити логіку ітерування, задавши власний `@@iterator`:

```js
// необхідно сконструювати об'єкт String явно, аби уникнути автоматичного пакування
const someString = new String("hi");

someString[Symbol.iterator] = function () {
  return {
    // це об'єкт-ітератор, котрий повертає один-єдиний елемент(рядок "bye")
    next() {
      return this._first
        ? { value: "bye", done: (this._first = false) }
        : { done: true };
    },
    _first: true,
  };
};
```

Зверніть увагу, як заміщення `@@iterator` впливає на поведінку вбудованих конструкцій, котрі користуються протоколом ітерування:

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

## Специфікації

{{Specifications}}

## Дивіться також

- Посібник [Ітератори та генератори](/uk/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
