---
title: Колекції з індексами
slug: Web/JavaScript/Guide/Indexed_collections
page-type: guide
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

Цей розділ знайомить з колекціями даних, котрі упорядковані за значенням індексу. Серед них – масиви та масивоподібні конструкції, як то об'єкти {{jsxref("Array")}} і {{jsxref("TypedArray")}}.

_Масив_ – упорядкований список значень, до котрих звертаються за його іменем та індексом.

Припустімо, що є масив під назвою `emp`, котрий містить імена працівників, індексовані за їхніми числовими номерами. Тож `emp[0]` буде працівником номер нуль, `emp[1]` – працівником номер один, і так далі.

JavaScript не має явного типу даних – масиву. Проте для роботи з масивами в застосунках можна використати наперед визначений об'єкт `Array` і його методи. Об'єкт `Array` має методи для роботи з масивами у різний спосіб, як то їх об'єднання, розвороту й сортування. Він має властивість для з'ясування довжини масиву та інші властивості – для використання з регулярними виразами.

Ця стаття зосереджена на масивах, однак чимало тих же концепцій застосовуються також до типізованих масивів, адже масиви й типізовані масиви мають чимало подібних методів. Більше інформації про типізовані масиви – у [посібнику типізованих масивів](/uk/docs/Web/JavaScript/Guide/Typed_arrays).

## Створення масиву

Наступні інструкції створюють рівносильні масиви:

```js
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

`element0, element1, …, elementN` – список значень елементів масиву. Коли ці значення задані, масив ініціалізується з ними як своїми елементами. Властивість масиву `length` отримує число аргументів.

Синтаксис із квадратними дужками зветься "літералом масиву" чи "ініціалізатором масиву". Він коротший за інші форми створення масиву, тож зазвичай перевагу віддають саме йому. Дивіться подробиці в [Літералах масивів](/uk/docs/Web/JavaScript/Guide/Grammar_and_types#literaly-masyviv).

Щоб створити масив з ненульовою довжиною, але без елементів, можна використати один з наступних варіантів:

```js
// Це...
const arr1 = new Array(arrayLength);

// ...дає такий само результат, що й це
const arr2 = Array(arrayLength);

// Цей варіант дає точно такий же результат
const arr3 = [];
arr3.length = arrayLength;
```

> **Примітка:** У коді вище `arrayLength` мусить належати до типу `Number`. Інакше – буде створено масив з єдиним елементом (переданим значенням). Виклик `arr.length` поверне `arrayLength`, але масив не містить жодних елементів. Цикл {{jsxref("Statements/for...in","for...in")}} не знайде в масиві жодних властивостей.

На додачу до нововизначеної змінної, як це показано вище, масив може бути присвоєний властивості нового або наявного об'єкта:

```js
const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// Або
const obj = { prop: [element0, element1, /* …, */ elementN] };
```

Коли є охота ініціалізувати масив єдиним елементом, і трапилось так, що цей елемент – `Number`, треба використовувати синтаксис з квадратними дужками. Коли в конструктор або функцію `Array()` передається єдине значення `Number`, воно тлумачиться як `arrayLength`, а не як єдиний елемент.

```js
// Це створює масив з лише одним елементом: числом 42.
const arr = [42];

// Це створює масив без елементів, а arr.length отримує значення 42.
const arr = Array(42);

// Це рівносильно:
const arr = [];
arr.length = 42;
```

Виклик `Array(N)` призводить до `RangeError`, якщо `N` є нецілим числом, чия дробова частина – ненульова. Наступний приклад ілюструє цю логіку.

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

Якщо треба, аби код створював масиви, що містять по одному елементу довільного типу даних, безпечніше використовувати літерали масивів. Інший варіант – створювати порожній масив, а вже потім додавати в нього один елемент.

Крім цього, можна використовувати для створення масивів з одним елементом статичний метод {{jsxref("Array.of")}}.

```js
const wisenArray = Array.of(9.3); // wisenArray містить лише один елемент – 9.3
```

## Звертання до елементів масиву

Через те, що елементи також є властивостями, до них можна звертатися за допомогою [засобів доступу до властивостей](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors). Припустімо, визначено такий масив:

```js
const myArray = ["Вітер", "Дощ", "Вогонь"];
```

До першого елемента масиву можна звернутись як до `myArray[0]`, – до другого – як до `myArray[1]` тощо… Індекси елементів починаються від нуля.

> **Примітка:** Також [засоби доступу до властивостей](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors) можна використовувати для звертання до інших властивостей масиву, як з об'єктом.
>
> ```js
> const arr = ["один", "два", "три"];
> arr[2]; // три
> arr["length"]; // 3
> ```

## Заповнення масиву

Масив можна заповнити, присвоївши значення його елементам. Наприклад:

```js
const emp = [];
emp[0] = "Іван Франко";
emp[1] = "Степан Гіга";
emp[2] = "Дмитро Кошельник";
```

> **Примітка:** Якщо, в наведеному вище коді, передати оператору масиву значення, що не є цілим числом, то в об'єкті, що представляє масив, буде створена властивість, а не елемент масиву.
>
> ```js
> const arr = [];
> arr[3.4] = "Помаранчі";
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

Крім цього, масив можна заповнити при створенні:

```js
const myArray = new Array("Привіт", myVar, 3.14159);
// Або
const myArray = ["Манго", "Яблуко", "Помаранч"];
```

### Розуміння довжини

На рівні реалізації масиви JavaScript насправді зберігають свої елементи як стандартні властивості об'єкта, використовуючи індекси масиву як імена властивостей.

Властивість `length` – особлива. Її значення завжди є додатним цілим числом, більшим за індекс останнього елемента, якщо такий є. (У прикладі нижче `'Пилок'` стоїть за індексом `30`, тож `cats.length` повертає `30 + 1`).

Слід пам'ятати, що індекси об'єктів Array у JavaScript починаються від `0`, а не `1`. А отже, властивість `length` буде на одиницю більшою за найбільший індекс, присутній в масиві:

```js
const cats = [];
cats[30] = ["Пилок"];
console.log(cats.length); // 31
```

Крім цього, властивості `length` можна присвоювати значення.

Присвоєння значення, меншого за кількість збережених елементів, обрізає масив. Присвоєння `0` повністю його спорожнює:

```js
const cats = ["Пилок", "Хмаринка", "Сушинка"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Пилок', 'Хмаринка' ]: Сушинка прибрана

cats.length = 0;
console.log(cats); // []; масив котів – порожній

cats.length = 3;
console.log(cats); // [ <3 порожні елементи> ]
```

### Ітерування масивів

Поширена операція – ітерування значень масиву, обробка кожного з них у певний спосіб. Найпростіший спосіб це зробити – наступний:

```js
const colors = ["червоний", "зелений", "синій"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Якщо відомо, що жодний з елементів масиву не рівносильний `false` у булевому контексті – наприклад, коли масив складається лише з вузлів [DOM](/uk/docs/Web/API/Document_Object_Model) – можна використати більш ефективну ідіому:

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Обробка div у певний спосіб */
}
```

Такий підхід дає змогу уникнути накладних витрат з перевірки довжини масиву й пересвідчитися, що змінна `div` щоразу отримує поточний елемент, задля додаткової зручності.

Метод [`forEach()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) пропонує інакший спосіб ітерування масиву:

```js
const colors = ["червоний", "зелений", "синій"];
colors.forEach((color) => console.log(color));
// червоний
// зелений
// синій
```

Функція, передана в `forEach`, виконується раз для кожного елемента масиву, і цей елемент передається в функцію як аргумент. Елементи без присвоєних їм значень не ітеруються циклом `forEach`.

Зверніть увагу, що елементи масиву, пропущені при визначенні масиву, не враховуються при ітеруванні за допомогою `forEach`, але _враховуються_, якщо елементу вручну присвоєно значення `undefined`:

```js
const sparseArray = ["перший", "другий", , "четвертий"];

sparseArray.forEach((element) => {
  console.log(element);
});
// Друкує:
// перший
// другий
// четвертий

if (sparseArray[2] === undefined) {
  console.log("sparseArray[2] має значення undefined"); // true
}

const nonsparseArray = ["перший", "другий", undefined, "четвертий"];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// Друкує:
// перший
// другий
// undefined
// четвертий
```

Оскільки елементи масивів JavaScript зберігаються як стандартні властивості об'єкта, не варто ітерувати масиви JavaScript за допомогою циклу {{jsxref("Statements/for...in","for...in")}}, адже будуть перелічені як звичайні елементи, так і всі перелічувані властивості.

### Методи масивів

Об'єкт {{jsxref("Array")}} має наступні методи:

Метод [`concat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) об'єднує два чи більше масивів і повертає новий масив.

```js
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// Тепер myArray – ["1", "2", "3", "a", "b", "c"]
```

Метод [`join()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/join) об'єднує всі елементи масиву в рядок.

```js
const myArray = ["Вітер", "Дощ", "Вогонь"];
const list = myArray.join(" - "); // list – "Вітер - Дощ - Вогонь"
```

Метод [`push()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/push) додає один чи більше елементів у кінець масиву й повертає результівне значення `length` масиву.

```js
const myArray = ["1", "2"];
myArray.push("3"); // Тепер myArray – ["1", "2", "3"]
```

Метод [`pop()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) прибирає з масиву останній елемент і повертає цей елемент.

```js
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// Тепер myArray – ["1", "2"], last = "3"
```

Метод [`shift()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) прибирає з масиву перший елемент і повертає цей елемент.

```js
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// Тепер myArray – ["2", "3"], first – "1"
```

Метод [`unshift()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) додає один чи більше елементів у початок масиву й повертає нову довжину масиву.

```js
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray стає ["4", "5", "1", "2", "3"]
```

Метод [`slice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) дістає з масиву частину й повертає її як новий масив.

```js
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // починає від індексу 1 й дістає всі елементи
// до індексу 3, повертаючи [ "b", "c", "d"]
```

Метод [`at()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/at) повертає елемент на заданому індексі масиву, або `undefined`, якщо цей індекс лежить поза діапазоном. Також використовується з від'ємними індексами, котрі вказують на елементи з кінця масиву.

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", другий з кінця елемент myArray
```

Метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) прибирає елементи з масиву і (необов'язково) замінює їх. Повертає елементи, котрі були прибрані з масиву.

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// Тепер myArray – ["1", "a", "b", "c", "d", "5"]
// Цей код починає від індексу одиниці (того, де знаходиться "2"),
// далі прибирає 3 елементи, а потім вставляє по черзі
// в це місце всі елементи.
```

Метод [`reverse()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) транспонує елементи масиву, причому на місці: перший елемент масиву стає останнім, а останній - першим. Повертає посилання на масив.

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// так транспонує масив, що myArray = ["3", "2", "1"]
```

Метод [`flat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) повертає новий масив з усіма елементами підмасивів, зчепленими в нього рекурсивно, до заданої глибини.

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// Тепер myArray – [1, 2, 3, 4], адже підмасив [3, 4] сплощується
```

Метод [`sort()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) на місці сортує елементи масиву й повертає посилання на цей масив.

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// сортує масив так, що myArray = ["Fire", "Rain", "Wind"]
```

Крім цього, `sort()` також може прийняти функцію зворотного виклику для визначення того, як порівнюються елементи масиву. Функція зворотного виклику викликається з двома аргументами, котрі є елементами масиву. Ця функція порівнює отримані два значення й повертає додатне число, від'ємне число або нуль, таким чином вказуючи на порядок цих значень. Наприклад, наступний код відсортує за останньою літерою рядка:

```js
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // Від'ємне число => a < b, a стоїть до b
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // Додатне число => a > b, а стоїть після b
  }
  return 0; // Нуль => a = b, a і b зберігають свій початковий порядок
};
myArray.sort(sortFn);
// сортує масив так, що myArray = ["Wind","Fire","Rain"]
```

- якщо `a` менше за `b`, згідно з системою сортування, то повертається `-1` (або будь-яке від'ємне число)
- якщо `a` більше за `b`, згідно з системою сортування, то повертається `1` (або будь-яке додатне число)
- якщо `a` і `b` вважаються рівнозначними, то повертається `0`.

Метод [`indexOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) шукає в масиві `searchElement` і повертає індекс першого збігу.

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Тепер спробуймо знову, починаючи з місця після попереднього збігу
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, тому що 'z' не знайдено
```

Метод [`lastIndexOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) працює як `indexOf`, але починає з кінця й шукає задом наперед.

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// Тепер спробуймо знову, починаючи з місця перед останнім збігом
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

Метод [`forEach()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) виконує `callback` на кожному елементі масиву й повертає `undefined`.

```js
const a = ["a", "b", "c"];
a.forEach((element) => {
  console.log(element);
});
// Друкує:
// a
// b
// c
```

Метод `forEach` та інші методи нижче, що приймає функцію зворотного виклику, відомі як _ітеративні методи_, тому що вони у певний спосіб ітерують ввесь масив. Кожний з них приймає необов'язковий другий аргумент, що зветься `thisArg`. Коли він є, то `thisArg` стає значенням ключового слова `this` всередині функції зворотного виклику. Коли його немає, то, як і в інших випадках, коли функція викликана поза явним контекстом об'єкта, `this` вказує на глобальний об'єкт ([`window`](/uk/docs/Web/API/Window), [`globalThis`](/uk/docs/Web/JavaScript/Reference/Global_Objects/globalThis) тощо), коли функція [несувора](/uk/docs/Web/JavaScript/Reference/Strict_mode), або має значення `undefined`, коли функція сувора.

> **Примітка:** Метод `sort()`, описаний вище, не є ітеративним методом, тому що його функція зворотного виклику використовується лише для порівняння і може не бути викликана у певному відомому на основі послідовності елементів порядку. Також `sort()` не приймає параметр `thisArg`.

Метод [`map()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/map) повертає новий масив повернених з виклику `callback` на кожному елементі масиву значень.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

Метод [`flatMap()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) виконує `map()`, а потім `flat()` з глибиною 1.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

Метод [`filter()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) повертає новий масив, що містить елементи, для яких `callback` повернула `true`.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

Метод [`find()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/find) повертає перший елемент, для якого `callback` повернула `true`.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
```

Метод [`findLast()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) повертає останній елемент, для якого `callback` повернула `true`.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
```

Метод [`findIndex()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) повертає індекс першого елемента, для якого `callback` повернула `true`.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
```

Метод [`findLastIndex()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) повертає індекс останнього елемента, для якого `callback` повернула `true`.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
```

Метод [`every()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/every) повертає `true`, якщо `callback` повертає `true` для кожного елемента масиву.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

Метод [`some()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/some) повертає `true`, якщо `callback` повертає `true` принаймні для одного елемента масиву.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // true
const a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // false
```

Метод [`reduce()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) застосовує `callback(accumulator, currentValue, currentIndex, array)` до кожного значення в масиві задля зведення списку елементів до єдиного значення. Функція `reduce` повертає остаточне значення, повернене функцією `callback`.

Якщо задано `initialValue`, то `callback` викликається з `initialValue` як значенням першого параметра й значенням першого елементу в масиві як значенням другого параметра.

Якщо `initialValue` _не_ задано, то значення перших двох параметрів `callback` будуть першим та другим елементами масиву. При _кожному_ наступному виклику значення першого параметра буде тим, що повернула `callback` при попередньому виклику, а другого – наступним значенням масиву.

Якщо `callback` потрібен доступ до індексу елемента, що обробляється, або до всього масиву, то вони доступні як необов'язкові параметри.

```js
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```

Метод [`reduceRight()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) працює подібно до `reduce()`, але починає від останнього елемента.

`reduce` і `reduceRight` – найменш очевидні серед ітеративних методів масивів. Їх слід використовувати для алгоритмів, що рекурсивно об'єднують два значення для зведення послідовності до єдиного значення.

## Перетворення масивів

Можна виконувати перетворення в обидва боки між масивами та іншими структурами даних.

### Групування елементів масиву

Метод {{jsxref("Object.groupBy()")}} може використовуватися для групування елементів масиву, за допомогою перевіркової функції, що повертає рядок, який позначає групу для поточного елемента.

Тут – простий інвентарний масив, що містить об'єкти "їжі", котрі мають `name` (назву) та `type` (тип).

```js
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];
```

Щоб використати `group()`, необхідно надати функцію зворотного виклику, що викликається з поточним елементом, і (необов'язково) – поточними індексом та масивом, і повертає рядок, що позначає групу для елемента.

Код нижче використовує стрілкову функцію, щоб повернути `type` кожного елемента масиву (застосовується [запис деструктурування об'єкта для аргументів функції](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rozpakovuvannia-vlastyvostei-obiekta-peredanoho-parametrom-funktsii), щоб розпакувати елемент `type` з переданого об'єкта). Результатом є об'єкт, що має властивості, названі згідно з унікальними рядками, поверненими функцією зворотного виклику. Кожній з властивостей присвоюється масив, що містить елементи групи.

```js
const result = inventory.group(({ type }) => type);
console.log(result.vegetables);
// [{ name: "asparagus", type: "vegetables" }]
```

Зверніть увагу на те, що повернений об'єкт посилається на _ті самі_ елементи, що й у вихідному масиві (а не їхні {{glossary("deep copy","глибокі копії")}}). Внесення змін до внутрішньої структури цих елементів відбиватиметься і на вихідному масиві, і на поверненому об'єкті.

Якщо немає змоги використати як ключ рядок, наприклад, якщо інформація для групування пов'язана з об'єктом, що може змінитись, то натомість можна скористатися {{jsxref("Map.groupBy()")}}. Цей статичний метод вельми подібний до `Object.groupBy()`, крім того, що групує елементи масиву в {{jsxref("Map")}}, котрий може використовувати як ключ будь-яке значення (і {{Glossary("object", "об'єкт")}}, і {{Glossary("primitive", "примітивне")}}).

## Розріджені масиви

Масиви можуть містити "порожні комірки", що не те саме, що комірки зі значенням `undefined`. Порожні комірки можуть бути створені в один з наступних способів:

```js
// Конструктор Array:
const a = Array(5); // [ <5 порожніх елементів> ]

// Коми підряд в літералі масиву:
const b = [1, 2, , , 5]; // [ 1, 2, <2 порожні елементи>, 5 ]

// Безпосереднє присвоєння комірки з індексом, більшим за array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 порожні елементи>, 5 ]

// Видовження масиву шляхом безпосереднього присвоєння .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 порожні елементи> ]

// Видалення елемента:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 порожній елемент>, 4, 5 ]
```

При певних операціях порожні комірки поводяться так, ніби містять `undefined`.

```js
const arr = [1, 2, , , 5]; // Створення розрідженого масиву

// Звертання за індексом
console.log(arr[2]); // undefined

// For...of
for (const i of arr) {
  console.log(i);
}
// Друкує: 1 2 undefined undefined 5

// Розгортання
const another = [...arr]; // "another" – [ 1, 2, undefined, undefined, 5 ]
```

Але при інших (перш за все – ітеративних методах масивів) порожні комірки пропускаються.

```js
const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 порожні елементи>, 6 ]
arr.forEach((i) => console.log(i)); // 1 2 5
const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
const hasFalsy = arr.some((k) => !k); // false

// Перелічення властивостей
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) {
  console.log(key);
}
// Друкує: '0' '1' '4'
// Розгортання в об'єкт використовує перелічення властивостей, а не ітератор масиву
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }
```

Повний список того, як методи масивів поводяться з розрідженими масивами, дивіться на [довідковій сторінці `Array`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array#metody-masyvu-y-porozhni-komirky).

## Багатовимірні масиви

Масиви можуть бути вкладеними, тобто масив може містити інший масив як свій елемент. За допомогою цієї характеристики масивів JavaScript можуть бути створені багатовимірні масиви.

Наступний код створює двовимірний масив.

```js
const a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = `[${i}, ${j}]`;
  }
}
```

Цей приклад створює масив з наступними рядами:

```plain
Ряд 0: [0, 0] [0, 1] [0, 2] [0, 3]
Ряд 1: [1, 0] [1, 1] [1, 2] [1, 3]
Ряд 2: [2, 0] [2, 1] [2, 2] [2, 3]
Ряд 3: [3, 0] [3, 1] [3, 2] [3, 3]
```

## Використання масивів для зберігання інакших властивостей

Масиви також можуть використовуватися як об'єкти, для збереження пов'язаної інформації.

```js
const arr = [1, 2, 3];
arr.property = "значення";
console.log(arr.property); // "значення"
```

Наприклад, коли масив є результатом пошуку збігу між регулярним виразом та рядком, масив повертає властивості та елементи, що містять інформацію про збіг. Масив є поверненим значенням методів [`RegExp.prototype.exec()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype.match()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/match) і [`String.prototype.split()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split). Інформацію про використання масивів з регулярними виразами дивіться на сторінці [Регулярні вирази](/uk/docs/Web/JavaScript/Guide/Regular_expressions).

## Робота з масивоподібними об'єктами

Частина об'єктів JavaScript, як то [`NodeList`](/uk/docs/Web/API/NodeList), повернений методом [`document.getElementsByTagName()`](/uk/docs/Web/API/Document/getElementsByTagName), чи об'єкт {{jsxref("Functions/arguments","arguments")}}, доступний в межах тіла функції, — нібито мають вигляд та поведінку, подібну до масивів, але не поділяють всіх їхніх методів. Об'єкт `arguments` має атрибут {{jsxref("Global_Objects/Function/length","length")}}, але не реалізовує методів масиву, як то [`forEach()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Методи масивів не можуть бути безпосередньо викликані на масивоподібних об'єктах

```js example-bad
function printArguments() {
  arguments.forEach((item) => {
    // TypeError: arguments.forEach is not a function
    console.log(item);
  });
}
```

Але їх можна викликати опосередковано, використавши {{jsxref("Global_Objects/Function/call","Function.prototype.call()")}}.

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
```

Методи прототипу Array можуть також бути використані на рядках, оскільки рядки надають послідовний доступ до своїх символів, подібно до масивів:

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
