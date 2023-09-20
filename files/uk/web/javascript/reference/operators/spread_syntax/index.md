---
title: Синтаксис розгортання (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
page-type: javascript-operator
browser-compat: javascript.operators.spread
---

{{jsSidebar("Operators")}}

Синтаксис **розгортання (`...`)** дає ітерованим елементам (таким, як вираз із масивом чи рядок) змогу розгортатися в тих місцях, де очікується нуль чи більше аргументів (у викликах функцій) чи елементів (для літералів масиву). Для літерала об'єкта синтаксис розгортання перелічує властивості об'єкта й додає пари ключ-значення до об'єкта, що створюється.

Синтаксис розгортання має такий самий вигляд, як синтаксис решти. У певному розумінні синтаксис розгортання є протилежністю синтаксису решти. Синтаксис розгортання "розпускає" масив на його елементи, натомість синтаксис решти збирає декілька елементів і "стискає" їх в один елемент. Дивіться [решту параметрів](/uk/docs/Web/JavaScript/Reference/Functions/rest_parameters) і [решту властивостей](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#reshta-vlastyvostei).

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Синтаксис

```js-nolint
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', "п'ять", 6]
{ ...obj, key: 'значення' }
```

## Опис

Синтаксис розгортання може використовуватися тоді, коли всі елементи об'єкта чи масиву треба включити в новий масив чи об'єкт, або коли їх треба один за одним застосувати в списку аргументів при виклику функції. Є три різні місця, що приймають синтаксис розгортання:

- Список [аргументів функції](#rozghortannia-u-vyklykakh-funktsii) (`myFunction(a, ...iterableObj, b)`)
- [Літерали масивів](#rozghortannia-v-literalakh-masyviv) (`[1, ...iterableObj, '4', "п'ять", 6]`)
- [Літерали об'єктів](#rozghortannia-v-obiektnykh-literalakh) (`{ ...obj, key: 'value' }`)

Хоч синтаксис має однаковий вигляд, ці місця мають дещо різну семантику.

Лише [ітеровані](/uk/docs/Web/JavaScript/Reference/Iteration_protocols) значення, як то {{jsxref("Array")}} та {{jsxref("String")}}, можуть бути розгорнуті в [літералах масивів](/uk/docs/Web/JavaScript/Guide/Grammar_and_types#literaly-masyviv) та списках аргументів. Чимало об'єктів не є ітерованими, включно з усіма [простими об'єктами](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object), що не мають метода [`Symbol.iterator`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator):

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

З іншого боку, розгортання в [літералах об'єктів](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer) [перелічує](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#obkhid-vlastyvostei-obiekta) власні властивості значення. В типових масивів усі індекси є перелічуваними власними властивостями, тому масиви можуть бути розгорнуті в об'єкти.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

Усі [примітиви](/uk/docs/Web/JavaScript/Data_structures#prymityvni-znachennia) можуть бути розгорнуті в об'єктах. Лише рядки мають перелічувані власні властивості, а розгортання будь-чого іншого не додасть новому об'єктові жодних властивостей.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

При використанні синтаксису розгортання для викликів функцій слід мати на увазі можливість перевищення обмеження кількості аргументів рушія JavaScript. Дивіться {{jsxref("Function.prototype.apply()")}} для отримання подробиць.

## Приклади

### Розгортання у викликах функцій

#### Заміна apply()

Зазвичай у тих випадках, де потрібно передати елементи масиву як аргументи до функції, використовують {{jsxref("Function.prototype.apply()")}}.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

За допомогою синтаксису розгортання наведений вище приклад можна записати так:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Будь-який аргумент зі списку може використовувати синтаксис розгортання. Також цей синтаксис можна вживати декілька разів.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Застосування до оператора `new`

Під час виклику конструктора з оператором {{jsxref("Operators/new", "new")}} не можна **безпосередньо** використати масив і `apply()`, тому що `apply()` _викликає_ цільову функцію замість її _конструювання_, а отже, серед іншого, [`new.target`](/uk/docs/Web/JavaScript/Reference/Operators/new.target) дорівнюватиме `undefined`. Проте масив легко можна використовувати з `new`, завдяки синтаксису розгортання:

```js
const dateFields = [1970, 0, 1]; // 1 січня 1970
const d = new Date(...dateFields);
```

### Розгортання в літералах масивів

#### Потужніший літерал масиву

Коли не використовувати синтаксис розгортання, то синтаксису літерала масиву вже не достатньо для створення нового масиву із використанням наявного масиву як однієї з його частин. Замість цього треба використовувати імперативний код із комбінацією методів, серед яких {{jsxref("Array.prototype.push", "push()")}}, {{jsxref("Array.prototype.splice", "splice()")}}, {{jsxref("Array.prototype.concat", "concat()")}} тощо. За допомогою синтаксису розгортання це стає набагато коротше:

```js
const parts = ["плечі", "коліна"];
const lyrics = ["голова", ...parts, "й", "пальці"];
//  [ "голова", "плечі", "коліна", "й", "пальці" ]
```

Точнісінько як для розгортання списку аргументів, `...` можна вживати будь-де всередині масиву, і робити це більш ніж однократно.

#### Копіювання масиву

Синтаксис розгортання можна використовувати для створення {{Glossary("shallow copy", "поверхневої копії")}} масиву. Кожний елемент масиву зберігає свою ідентичність, не бувши скопійованим.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // так само, як arr.slice()

arr2.push(4);
// arr2 стає [1, 2, 3, 4]
// arr залишається незміненим
```

Синтаксис розгортання проходить на один рівень вглиб масиву під час копіювання. У зв'язку з чим він може не підходити для копіювання багатовимірних масивів. Те саме стосується комбінації синтаксису розгортання із {{jsxref("Object.assign()")}}: жодна нативна операція JavaScript не виконує глибокого клонування. Метод веб API {{domxref("structuredClone()")}} дає змогу виконувати глибоке копіювання значень певних [підтримуваних типів](/uk/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#pidtrymuvani-typy). Дивіться детальніше на сторінці [Поверхневе копіювання](/uk/docs/Glossary/Shallow_copy).

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// ОЙ лишенько! Це також вплинуло і на масив 'a':
console.log(a);
// [[], [2], [3]]
```

#### Кращий спосіб з'єднання масивів

{{jsxref("Array.prototype.concat()")}} часто вживається для приєднання масиву до кінця вже наявного масиву. Без застосування синтаксису розгортання це можна зробити так:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Додати всі елементи масиву arr2 у масив arr1
arr1 = arr1.concat(arr2);
```

З появою синтаксису розгортання це перетворилося на:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 тепер дорівнює [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} часто вживається для приєднання масиву до початку вже наявного масиву. Без застосування синтаксису розгортання це можна зробити так:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Приєднати всі елементи масиву arr2 на початку arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

З появою синтаксису розгортання це перетворилося на:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> **Примітка:** На відміну від `unshift()`, цей код створює новий `arr1`, а не модифікує початковий масив `arr1` на місці.

#### Умовне додавання значень до масиву

Елемент можна зробити присутнім або відсутнім у літералі масиву, залежно від певної умови, за допомогою [умовного оператора](/uk/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

```js
const isSummer = false;
const fruits = ["яблуко", "банан", ...(isSummer ? ["кавун"] : [])];
// ['яблуко', 'банан']
```

Коли умова – `false`, то розгортається порожній масив, тож нічого не додається в кінцевий масив. Зауважте, що це відрізняється від наступного:

```js
const fruits = ["яблуко", "банан", isSummer ? "кавун" : undefined];
// ['яблуко', 'банан', undefined]
```

В цьому випадку додається додатковий елемент `undefined`, коли `isSummer` дорівнює `false`, і цей елемент буде оброблятися методами штибу {{jsxref("Array.prototype.map()")}}.

### Розгортання в об'єктних літералах

#### Копіювання та злиття об'єктів

Синтаксис розгортання можна використовувати для злиття кількох об'єктів у один.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

Одне розгортання утворює поверхневу копію вихідного об'єкта (але без його неперелічуваних властивостей і без копіювання прототипу), подібно до [копіювання масиву](#kopiiuvannia-masyvu).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Перевизначення властивостей

Коли один об'єкт розгортається в інший, або коли кілька об'єктів розгортаються в один, і зустрічаються властивості з однаковими назвами, то така властивість бере останнє значення з присвоєних, залишаючись на позиції, на якій спершу була визначена.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Умовне додавання властивостей до об'єкта

Елемент можна зробити присутнім або відсутнім в об'єктному літералі залежно від умови, використавши [умовний оператор](/uk/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

Варіант на випадок того, що умова дорівнює `false`, – порожній об'єкт, тож тоді нічого не розгортається в кінцевий об'єкт. Зауважте, що це відрізняється від наступного:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

У такому випадку властивість `watermelon` завжди присутня, і її будуть обробляти методи штибу {{jsxref("Object.keys()")}}.

Оскільки примітиви також можна розгортати в об'єкти, і враховуючи те, що всі {{Glossary("falsy", "хибні")}} значення не мають перелічуваних властивостей, можна просто використати [логічний оператор І](/uk/docs/Web/JavaScript/Reference/Operators/Logical_AND):

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

У такому випадку, якщо `isSummer` є хибним значенням, то на об'єкті `fruits` не створюється жодної властивості.

#### Порівняння з Object.assign()

Зауважте, що {{jsxref("Object.assign()")}} може застосовуватись для модифікації об'єкта, а от синтаксис розгортання — ні.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

На додачу, {{jsxref("Object.assign()")}} провокує виклик сетерів цільового об'єкта, а синтаксис розгортання – ні.

```js
const objectAssign = Object.assign(
  {
    set foo(val) {
      console.log(val);
    },
  },
  { foo: 1 },
);
// Друкує "1"; objectAssign.foo досі містить первинний сетер

const spread = {
  set foo(val) {
    console.log(val);
  },
  ...{ foo: 1 },
};
// Нічого не друкується; spread.foo дорівнює 1
```

Неможливо в нативному коді повторно реалізувати функцію {{jsxref("Object.assign()")}} за допомогою одного розгортання:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

У наведеному вище прикладі синтаксис розгортання працює не так, як можна було очікувати: він розгортає _масив_ аргументів у об'єктний літерал, через параметр решти. Нижче – інша реалізація функції `merge` із застосуванням синтаксису розгортання, поведінка якої аналогічна до {{jsxref("Object.assign()")}}, за винятком того, що вона не змушує спрацьовувати сетери й не модифікує жодного об'єкта:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = merge(obj1, obj2);
// { foo: 'baz', x: 42, y: 13 }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Решта параметрів](/uk/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Решта властивостей](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#reshta-vlastyvostei)
- {{jsxref("Function.prototype.apply()")}}
