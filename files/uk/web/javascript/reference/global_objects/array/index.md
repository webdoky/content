---
title: Array (масив)
slug: Web/JavaScript/Reference/Global_Objects/Array
tags:
  - Array
  - Class
  - Example
  - Global Objects
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Array
---

{{JSRef}}

Об‘єкт класу **`Array`** (масив), подібно до масивів у інших мовах програмування, дає змогу [зберігати колекцію багатьох елементів за єдиною назвою змінної](/uk/docs/Learn/JavaScript/First_steps/Arrays) та має методи для [виконання звичних операцій над масивами](#pryklady).

## Опис

У мові JavaScript масиви не є [примітивами](/uk/docs/Glossary/Primitive), а натомість є об‘єктами класу `Array` із наступними ключовими характеристиками:

- **Масиви JavaScript можуть змінювати розмір** і **можуть містить суміш різних [типів даних](/uk/docs/Web/JavaScript/Data_structures)**. (Коли ці характеристики є небажаними, слід натомість використовувати [типізовані масиви](/uk/docs/Web/JavaScript/Typed_arrays).)

- **Масиви JavaScript не є асоціативними ми**, а отже – [елементи масиву не можуть бути отримані з використанням рядків замість індексів](#prymitky), натомість слід використовувати цілі числа як індекси.

- **Масиви JavaScript [нумеруються з нуля (англ.)](https://en.wikipedia.org/wiki/Zero-based_numbering)**: перший елемент масиву знаходиться за індексом `0`, другий – за індексом `1`, і так далі – а останній елемент знаходиться індексом, рівним значенню властивості {{jsxref("Array.length", "length")}} масиву мінус `1`.

- **[Операції копіювання масиву](#kopiiuvannia-masyva) створюють [поверхневі копії](/uk/docs/Glossary/Shallow_copy)**. (Усі стандартні вбудовані операції копіювання _будь-яких_ об‘єктів JavaScript objects створюють поверхневі копії, а не [глибинні копії](/uk/docs/Glossary/Deep_copy)).

## Конструктор

- {{jsxref("Array/Array", "Array()")}}
  - : Створює новий об'єкт типу `Array`.

## Статичні властивості

- {{jsxref("Array/@@species", "get Array[@@species]")}} ("вид")
  - : Повертає конструктор `Array`.

## Статичні методи

- {{jsxref("Array.from()")}} ("від")
  - : Створює новий екземпляр `Array` на основі будь-якого подібного до масиву чи ітерованого об‘єкта.
- {{jsxref("Array.isArray()")}} ("чи є масивом")
  - : Повертає `true`, якщо аргумент є масивом, інакше – `false`.
- {{jsxref("Array.of()")}}
  - : Створює новий екземпляр `Array`, що містить усі елементи, передані як аргументи, незалежно від їх кількості чи типу.

## Властивості екземпляра

- {{jsxref("Array.prototype.length")}} ("довжина")
  - : Відображає кількість елементів у масиві.
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}} ("недоступні для огляду")
  - : Містить імена властивостей, що не були включені до стандарту ECMAScript до версії ES2015 та є ігнорованими інструкцією прив‘язування [`with`](/uk/docs/Web/JavaScript/Reference/Statements/with).

## Методи екземпляру

- {{jsxref("Array.prototype.at()")}} ("за")
  - : Повертає елемент масиву за переданим індексом. Приймає від‘ємні цілі числа, при яких відлік починається з кінця масиву (`-1` відповідає останньому елементові).
- {{jsxref("Array.prototype.concat()")}} ("зв‘язати")
  - : Повертає новий масив, що є об‘єднанням поточного масиву з масивами та окремими елементами, переданими як аргументи.
- {{jsxref("Array.prototype.copyWithin()")}} ("копіювати в межах")
  - : Копіює послідовність елементів масиву в межах масиву.
- {{jsxref("Array.prototype.entries()")}} ("записи")
  - : Повертає новий об‘єкт [_ітератора масиву_](/uk/docs/Web/JavaScript/Guide/Iterators_and_Generators), що містить пари ключ-значення для кожного індексу масиву.
- {{jsxref("Array.prototype.every()")}} ("кожен")
  - : Повертає `true`, якщо кожен елемент поточного масиву задовольняє перевіркову функцію.
- {{jsxref("Array.prototype.fill()")}} ("заповнити")
  - : Заповнює елементи масиву від початкового індексу до кінцевого певним статичним значенням.
- {{jsxref("Array.prototype.filter()")}} ("фільтрувати")
  - : Повертає новий масив, що містить усі елементи поточного масиву, для котрих передана функція фільтрування повертає `true`.
- {{jsxref("Array.prototype.find()")}} ("знайти")
  - : Повертає знайдений у поточному масиві елемент, що задовольняє перевіркову функцію, або `undefined` – якщо такого елемента не знайдено.
- {{jsxref("Array.prototype.findIndex()")}} ("знайти індекс")
  - : Повертає знайдений індекс у поточному масиві, елемент за яким задовольняє перевіркову функцію, або `-1`, якщо такого індексу не знайдено.
- {{jsxref("Array.prototype.flat()")}} ("сплощити")
  - : Повертає новий масив з усіма елементами підмасивів, склеєними докупи рекурсивно, до вказаної глибини.
- {{jsxref("Array.prototype.flatMap()")}} ("сплощити та відобразити")
  - : Повертає новий масив, утворений застосуванням переданої функції зворотного виклику до кожного елемента поточного масиву, а тоді – сплощенням результату на один рівень.
- {{jsxref("Array.prototype.forEach()")}} ("для кожного")

  - : Викликає функцію для кожного елемента поточного масиву.

- {{jsxref("Array.prototype.groupBy()")}} ("групувати за")

  - : Групує елементи масиву згідно з результатами перевіркової функції. До груп в результаті можна доступитись як до властивостей об‘єкта.

- {{jsxref("Array.prototype.includes()")}} ("включає")
  - : Визначає, чи містить поточний масив певне значення, повертаючи `true` чи `false` відповідно.
- {{jsxref("Array.prototype.indexOf()")}} ("індекс")
  - : Повертає перший (якнайменший) індекс, за яким переданий елемент може бути знайдений у поточному масиві.
- {{jsxref("Array.prototype.join()")}} ("об‘єднати")
  - : Об‘єднує усі елементи масиву в рядок.
- {{jsxref("Array.prototype.keys()")}} ("ключі")
  - : Повертає новий [_ітератор масиву_](/uk/docs/Web/JavaScript/Guide/Iterators_and_Generators), що містить кожен індекс поточного масиву.
- {{jsxref("Array.prototype.lastIndexOf()")}} ("останній індекс")
  - : Повертає останній (якнайбільший) індекс, за яким переданий елемент може бути знайдений у поточному масиві, або `-1`, якщо такого індексу не знайдено.
- {{jsxref("Array.prototype.map()")}} ("відобразити")
  - : Повертає новий масив, що містить результати виклику функції на кожному елементі поточного масиву.
- {{jsxref("Array.prototype.pop()")}} ("вистрелити")
  - : Прибирає останній елемент з масиву і повертає його.
- {{jsxref("Array.prototype.push()")}} ("запхати")
  - : Додає один чи більше елементів у кінець масиву і повертає нове значення `length` масиву.
- {{jsxref("Array.prototype.reduce()")}} ("звести")
  - : Виконує надану користувачем функцію-редуктор над кожним елементом масиву (зліва направо), аби звести його до єдиного значення.
- {{jsxref("Array.prototype.reduceRight()")}} ("звести справа")
  - : Виконує надану користувачем функцію-редуктор над кожним елементом масиву (справа наліво), аби звести його до єдиного значення.
- {{jsxref("Array.prototype.reverse()")}} ("перевернути")
  - : Розвертає порядок елементів масиву _на місці_. (Перший стає останнім, останній – першим.)
- {{jsxref("Array.prototype.shift()")}} ("зсунути")
  - : Прибирає перший елемент з масиву і повертає його.
- {{jsxref("Array.prototype.slice()")}} ("вирізати скибку, зріз")
  - : Вирізає секцію з поточного масиву і повертає як новий масив.
- {{jsxref("Array.prototype.some()")}} ("якийсь")
  - : Повертає `true`, якщо принаймні один елемент поточного масиву задовольняє передану перевіркову функцію.
- {{jsxref("Array.prototype.sort()")}} ("сортувати")
  - : Сортує елементи масиву на місці й повертає поточний масив.
- {{jsxref("Array.prototype.splice()")}} ("зростити")
  - : Додає та (або) прибирає елементи масиву.
- {{jsxref("Array.prototype.toLocaleString()")}} ("до рядка за регіональними стандартами")
  - : Повертає локалізований рядок, що представляє поточний масив та його елементи. Заміщає метод {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Array.prototype.toString()")}} ("до рядка")
  - : Повертає рядок, що представляє поточний масив та його елементи. Заміщає метод {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Array.prototype.unshift()")}} ("відсунути")
  - : Додає один чи більше елементів спереду масиву й повертає значення `length` масиву.
- {{jsxref("Array.prototype.values()")}} ("значення")
  - : Повертає новий об‘єкт [_ітератора масиву_](/uk/docs/Web/JavaScript/Guide/Iterators_and_Generators), що містить значення за кожним індексом масиву.
- [`Array.prototype[@@iterator]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) ("ітератор")
  - : Усталено повертає функцію [`values()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/values).

## Приклади

Цей розділ надає деякі приклади звичних операцій над масивами у JavaScript.

> **Примітка:** Читачам, що поки не є близько знайомими з основами масивів, варто спершу прочитати [Перші кроки в JavaScript: масиви](/uk/docs/Learn/JavaScript/First_steps/Arrays), що [пояснює, чим є масиви](/uk/docs/Learn/JavaScript/First_steps/Arrays#shcho-take-masyv) та включає інші приклади звичних операцій над масивами.

### Створення масиву

Цей приклад показує три способи створення нового масиву: спершу за допомогою [запису літерала масиву](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#zapys-literala-masyva), далі за допомогою конструктора [`Array()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), і зрештою – за допомогою [`String.prototype.split()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split) для створення масиву із рядка.

```js
// Масив 'fruits' створений за допомогою запису літерела масиву
const fruits = ['Яблуко', 'Банан'];
console.log(fruits.length);
// 2

// Масив 'fruits' створений за допомогою конструктора Array()
const fruits = new Array('Яблуко', 'Банан');
console.log(fruits.length);
// 2

// Масив 'fruits' створений за допомогою String.prototype.split().
const fruits = 'Яблуко, Банан'.split(', ');
console.log(fruits.length);
// 2
```

### Створення рядка з масиву

Цей приклад використовує метод [`join()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/join) для створення рядка з масиву `fruits`.

```js
const fruits = ['Яблуко', 'Банан'];
const fruitsString = fruits.join(', ');
console.log(fruitsString);
// "Яблуко, Банан"
```

### Доступ до елемента масиву за його індексом

Цей приклад показує, як отримати елементи масиву `fruits` шляхом вказання числа, що є індексом їх позиції в масиві.

```js
const fruits = ['Яблуко', 'Банан'];

// Індекс першого елемента масиву – завжди 0.
fruits[0]; // Яблуко

// Індекс другого елемента масиву – завжди 1.
fruits[1]; // Банан

// Індекс останнього елемента масиву – завжди на один
// манший за довжину масиву.
fruits[fruits.length - 1]; // Банан

// Використання індексу, що більший за довжину масиву,
// повертає 'undefined'.
fruits[99]; // undefined
```

### Пошук індексу елемента в масиві

Цей приклад використовує метод [`indexOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) для пошуку позиції (індексу) рядка "`Банан`" у масиві `fruits`.

```js
const fruits = ['Яблуко', 'Банан'];
console.log(fruits.indexOf('Банан'));
// 1
```

### Перевірка присутності певного елемента в масиві

Цей приклад показує два способи перевірки того, чи містить масив `fruits` значення "`Банан`" і "`Вишня`": спершу за допомогою [`includes()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), а тоді – із методом [`indexOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), щоб перевірити, чи не рівний повернений індекс `-1`.

```js
const fruits = ['Яблуко', 'Банан'];

fruits.includes('Банан'); // true
fruits.includes('Вишня'); // false

// Якщо indexOf() не повертає -1, то масив містить переданий елемент.
fruits.indexOf('Банан') !== -1; // true
fruits.indexOf('Вишня') !== -1; // false
```

### Додання елемента в кінець масиву

Цей приклад використовує метод [`push()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/push), щоб докласти новий рядок у масив `fruits`.

```js
const fruits = ['Яблуко', 'Банан'];
const newLength = fruits.push('Апельсин');
console.log(fruits);
// ["Яблуко", "Банан", "Апельсин"]
console.log(newLength);
// 3
```

### Усунення останнього елемента з масиву

Цей приклад використовує метод [`pop()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) для усунення останнього елемента з масиву `fruits`.

```js
const fruits = ['Яблуко', 'Банан', 'Апельсин'];
const removedItem = fruits.pop();
console.log(fruits);
// ["Яблуко", "Банан"]
console.log(removedItem);
// Апельсин
```

> **Примітка:** `pop()` Може вживатись виключно для усунення останнього елемента з масиву. Як прибрати кілька елементів з кінця масиву – дивіться наступний приклад

### Усунення кількох елементів з кінця масиву

Цей приклад використовує метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) для усунення останній 3 елементів з масиву `fruits`.

```js
const fruits = ['Яблуко', 'Банан', 'Полуниця', 'Манго', 'Вишня'];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Яблуко", "Банан"]
console.log(removedItems);
// ["Полуниця", "Манго", "Вишня"]
```

### Урізання масиву до його перших _N_ елементів

Цей приклад використовує метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) для урізання масиву `fruits` до його перших 2 елементів.

```js
const fruits = ['Яблуко', 'Банан', 'Полуниця', 'Манго', 'Вишня'];
const start = 2;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Яблуко", "Банан"]
console.log(removedItems);
// ["Полуниця", "Манго", "Вишня"]
```

### Усунення першого елемента з масиву

Цей приклад використовує метод [`shift()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) для усунення першого елемента з масиву `fruits`.

```js
const fruits = ['Яблуко', 'Банан'];
const removedItem = fruits.shift();
console.log(fruits);
// ["Банан"]
console.log(removedItem);
// Яблуко
```

> **Примітка:** `shift()` може використовуватись лише для усунення першого елемента з масиву. Як прибрати кілька елементів з початку масиву – дивіться наступний приклад.

### Усунення кількох елементів з початку масиву

Цей приклад використовує метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) для усунення перших 3 елементів з масиву `fruits`.

```js
const fruits = ['Яблуко', 'Полуниця', 'Вишня', 'Банан', 'Манго'];
const start = 0;
const deleteCount = 3;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Банан", "Манго"]
console.log(removedItems);
// ["Яблуко", "Полуниця", "Вишня"]
```

### Додання нового першого елемента в масив

Цей приклад використовує метод [`unshift()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), щоб додати (за індексом `0`) новий елемент у масив `fruits` – роблячи його новим першим елементом цього масиву.

```js
const fruits = ['Банан', 'Манго'];
const newLength = fruits.unshift('Полуниця');
console.log(fruits);
// ["Полуниця", "Банан", "Манго"]
console.log(newLength);
// 2
```

### Усунення єдиного елемента за індексом

Цей приклад використовує метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) для усунення рядка "`Банан`" із масиву `fruits` – шляхом вказання індексу-позиції значення "`Банан`".

```js
const fruits = ['Полуниця', 'Банан', 'Манго'];
const start = fruits.indexOf('Банан');
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Полуниця", "Манго"]
console.log(removedItems);
// ["Банан"]
```

### Усунення кількох елементів за індексом

Цей приклад використовує метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) для усунення рядків "`Банан`" і "`Полуниця`" з масиву `fruits` – шляхом вказання індексу-позиції "`Банан`"а, поруч із кількістю елементів до видалення.

```js
const fruits = ['Яблуко', 'Банан', 'Полуниця', 'Манго'];
const start = 1;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Яблуко", "Манго"]
console.log(removedItems);
// ["Банан", "Полуниця"]
```

### Заміна кількох елементів масиву

Цей приклад використовує метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) для заміни останніх 2 елементів масиву `fruits` новими елементами.

```js
const fruits = ['Яблуко', 'Банан', 'Полуниця'];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, 'Манго', 'Вишня');
console.log(fruits);
// ["Яблуко", "Манго", "Вишня"]
console.log(removedItems);
// ["Банан", "Полуниця"]
```

### Перебір масиву

Цей приклад використовує цикл [`for...of`](/uk/docs/Web/JavaScript/Reference/Statements/for...of) для перебору масиву `fruits`, виводячи кожний елемент у консоль.

```js
const fruits = ['Яблуко', 'Манго', 'Вишня'];
for (const fruit of fruits) {
  console.log(fruit);
}
// Яблуко
// Манго
// Вишня
```

Утім, `for...of` – лише один з багатьох способів перебору будь-якого масиву; більше способів можна знайти у розділі [Цикли та перебирання](/uk/docs/Web/JavaScript/Guide/Loops_and_iteration), а також у документації методів [`every()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) і [`reduceRight()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) – ну і наступний приклад, що використовує метод [`forEach()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

### Виклик функції над кожним елементом масиву

Цей приклад використовує метод [`forEach()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), щоб викликати функцію над кожним елементом масиву `fruits`; функція призводить до виведення у консоль кожного елемента поруч зі своїм індексом.

```js
const fruits = ['Яблуко', 'Манго', 'Вишня'];
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Яблуко 0
// Манго 1
// Вишня 2
```

### Злиття кількох масивів докупи

Цей приклад використовує метод [`concat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) для злиття масиву `fruits` із масивом `moreFruits`, щоб утворити новий масив `combinedFruits`. Зверніть увагу, що `fruits` і `moreFruits` залишаються незмінними.

```js
const fruits = ['Яблуко', 'Банан', 'Полуниця'];
const moreFruits = ['Манго', 'Вишня'];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);
// ["Яблуко", "Банан", "Полуниця", "Манго", "Вишня"]

// Масив 'fruits' залишається незмінним.
console.log(fruits);
// ["Яблуко", "Банан", "Полуниця"]

// Масив 'moreFruits' також залишається без змін.
console.log(moreFruits);
// ["Манго", "Вишня"]
```

### Копіювання масиву

Цей приклад показує три способи створення нового масиву на основі наявного масиву `fruits`: спершу за допомогою [синтаксису розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax), далі за допомогою метода [`from()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/from), а тоді – за допомогою метода [`slice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

```js
const fruits = ['Полуниця', 'Манго'];

// Створення копії за допомогою синтаксису розгортання.
const fruitsCopy = [...fruits];
// ["Полуниця", "Манго"]

// Створення копії за допомогою метода from().
const fruitsCopy = Array.from(fruits);
// ["Полуниця", "Манго"]

// Створення копії за допомогою метода slice().
const fruitsCopy = fruits.slice();
// ["Полуниця", "Манго"]
```

Усі вбудовані операції копіювання масиву ([синтаксис розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) і [`Array.prototype.concat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) створюють [поверхневі копії](/uk/docs/Glossary/Shallow_copy). Якщо натомість потрібна [глибинна копія](/uk/docs/Glossary/Deep_copy) масиву, можна використати {{jsxref("JSON.stringify()")}} для перетворення масиву на рядок JSON, а тоді – {{jsxref("JSON.parse()")}} – для перетворення рядка назад на новий масив, що є цілком незалежним від початкового масиву.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

Також можна створювати глибинні копії за допомогою метода [`structuredClone()`](/uk/docs/Web/API/structuredClone), причому перевага такого підходу – {{Glossary("transferable objects", "переносні об‘єкти")}} джерела будуть _перенесені_ в нову копію, а не просто скопійовані.

Врешті решт, важливо розуміти, що присвоєння наявного масиву новій змінній не створює копій ані масиву, ані його елементів. Натомість нова змінна є лишень посиланням чи псевдонімом початкового масиву; тобто початкове ім‘я масиву та нове ім‘я змінної є лише двома іменами одного й того ж об‘єкта (і, таким чином, завжди будуть вважатись [строго рівними](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#stroha-rivnist-za-dopomohoiu-)). Отже, якщо внести будь-які зміни або у значення початкового масиву, або у значення нової змінної, то зміняться обидва:

```js
const fruits = ['Полуниця', 'Манго'];
const fruitsAlias = fruits;
// 'fruits' і 'fruitsAlias' – один і той же об‘єкт, строго рівні.
fruits === fruitsAlias; // true
// Будь-які зміни масиву 'fruits' також змінять 'fruitsAlias'.
fruits.unshift('Яблуко', 'Банан');
console.log(fruits);
// ['Яблуко', 'Банан', 'Полуниця', 'Манго']
console.log(fruitsAlias);
// ['Яблуко', 'Банан', 'Полуниця', 'Манго']
```

## Інші приклади

### Створення двовимірного масиву

Тут створюється шахова дошка у вигляді двовимірного масиву рядків. Перший хід виконується копіюванням `'p'` на `board[6][4]` до `board[4][4]`. Стара позиція на `[6][4]` очищується.

```js
const board = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];

console.log(board.join('\n') + '\n\n');

// Хід королівського пішака на 2 вперед
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));
```

Ось – вивід:

```plain
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
```

### Використання масиву для зведення набору значень у таблицю

```js
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

Результат:

```plain
// Перший стовпець – індекс
0  1    0
1  2    2
2  4    8
3  8    18
4  16   32
5  32   50
6  64   72
7  128  98
8  256  128
9  512  162
```

## Примітки

Об‘єкти `Array` не можуть використовувати рядки як індекси елементів (як це буває в [асоціативному масиві](https://uk.wikipedia.org/wiki/%D0%90%D1%81%D0%BE%D1%86%D1%96%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9_%D0%BC%D0%B0%D1%81%D0%B8%D0%B2)), а мусять використовувати цілі числа. Встановлення чи отримання значень за допомогою [запису квадратних дужок](/uk/docs/Web/JavaScript/Guide/Working_with_Objects#obiekty-ta-vlastyvosti) (чи [запису крапки](/uk/docs/Web/JavaScript/Reference/Operators/Property_Accessors)) не встановить і не отримає елемента самого списку елементів масиву, але встановить чи отримає змінну, пов‘язану з [колекцією властивостей об‘єкта](/uk/docs/Web/JavaScript/Data_structures#vlastyvosti) масиву. Властивості об‘єкта-масиву та список елементів масиву окремі одне від одного, і [операції перебору та зміни](/uk/docs/Web/JavaScript/Guide/Indexed_collections#metody-masyva) не можуть застосовуватись до таких іменованих властивостей.

Елементи масиву є властивостями об‘єкта, так само як `toString` є властивістю (для точності, втім, слід нагадати, що `toString()` є методом). Не зважаючи на це, спроба отримати елемент масиву у наступний спосіб призведе до синтаксичної помилки, бо таке ім‘я властивості не є дійсним:

```js
console.log(arr.0); // синтаксична помилка
```

Немає нічого особливого у тому, що масиви та властивості JavaScript так поводяться. Властивості JavaScript, що починаються з цифри, не можуть використовуватись із записом крапки, натомість слід використовувати запис квадратних дужок.

Наприклад, якщо є об‘єкт із властивістю, названою `3d`, на неї можна посилатись лише з квадратними дужками.

```js
const years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years.0);   // синтаксична помилка
console.log(years[0]);  // працює як слід
```

```js
renderer.3d.setTexture(model, 'character.png');     // синтаксична помилка
renderer['3d'].setTexture(model, 'character.png');  // працює як слід
```

У прикладі `3d` – `'3d'` _повинно_ бути загорнуто в лапки (бо починається з цифри). Утім, можна також обгортати в лапки також індекси масивів (наприклад, `years['2']` замість `years[2]`), хоч це й не є необхідним.

`2` у `years[2]` приводиться до рядка рушієм JavaScript через неявне перетворення `toString`. Як наслідок – `'2'` і `'02'` посилались би на дві різні комірки об‘єкта `years`, і наступний приклад міг би дати `true`:

```js
console.log(years['2'] != years['02']);
```

### Взаємозв‘язок між довжиною та числовими властивостями

Властивість масиву JavaScript {{jsxref("Array.length", "length")}} та числові властивості є пов‘язаними.

Декілька вбудованих методів масиву (наприклад, {{jsxref("Array.join", "join()")}}, {{jsxref("Array.slice", "slice()")}}, {{jsxref("Array.indexOf", "indexOf()")}} тощо) враховують значення властивості масиву {{jsxref("Array.length", "length")}}, коли спрацьовують.

Інші методи (наприклад, {{jsxref("Array.push", "push()")}}, {{jsxref("Array.splice", "splice()")}} тощо) на додачу оновлюють властивість масиву {{jsxref("Array.length", "length")}}.

```js
const fruits = [];
fruits.push('банан', 'яблуко', 'персик');
console.log(fruits.length); // 3
```

При встановленні властивості масиву JavaScript, за умови що значення є дійсним індексом масиву і що індекс лежить за поточними межами масиву, рушій оновить властивість {{jsxref("Array.length", "length")}} масиву відповідним чином:

```js
fruits[5] = 'манго';
console.log(fruits[5]); // 'манго'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Збільшення {{jsxref("Array.length", "length")}}.

```js
fruits.length = 10;
console.log(fruits); // ['банан', 'яблуко', 'персик', порожнеча x 2, 'манго', порожнеча x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
```

Зменшення властивості {{jsxref("Array.length", "length")}}, утім, видаляє елементи.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

Така поведінка докладніше пояснена на сторінці {{jsxref("Array.length")}}.

#### Створення масиву на основі результату збігу

Результат збігу між {{jsxref("RegExp")}} та рядком може створити масив JavaScript, що має властивості та елементи, котрі надають інформацію про збіг. Такий масив повертають методи {{jsxref("RegExp.exec()")}} і {{jsxref("String.match()")}}.

Дивіться роз‘яснення цих властивостей та елементів у наступному прикладі та таблиці нижче:

```js
// Збіг з однією d, після якої одна чи більше літера b, після якої одна d
// Запам‘ятати b, з якими був збіг, та d опісля
// Зневажати регістр

const myRe = /d(b+)(d)/i;
const myArray = myRe.exec('cdbBdbsbz');
```

Властивості та елементи, повернені зі збігу, наступні:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th class="header" scope="col">Властивість чи елемент</th>
      <th class="header" scope="col">Опис</th>
      <th class="header" scope="col">Приклад</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>input</code><br />{{ReadOnlyInline}}</td>
      <td>
        Початковий рядок, у якому відбувався пошук збігу з регулярним виразом.
      </td>
      <td><code>"cdbBdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>index</code><br />{{ReadOnlyInline}}</td>
      <td>Індекс (починаючи з нуля) збігу в рядку.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>[0]</code><br />{{ReadOnlyInline}}</td>
      <td>Останні символи, з якими відбувся збіг.</td>
      <td><code>"dbBd"</code></td>
    </tr>
    <tr>
      <td><code>[1], ...[n]</code><br />{{ReadOnlyInline}}</td>
      <td>
        Елементи, що відповідають збігам виділених дужками збігів підрядків (якщо такі є) регулярного виразу. Число можливих підрядків не обмежено.
      </td>
      <td>
        <code>[1]: "bB"<br />[2]: "d"</code>
      </td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- З настанов із JavaScript:

  - ["Індексування властивостей об‘єкту"](/uk/docs/Web/JavaScript/Guide/Working_with_Objects#indeksuvannia-vlastyvostei-obiekta)
  - ["Індексовані колекції: об‘єкт `Array`"](/uk/docs/Web/JavaScript/Guide/Indexed_collections#obiekt-masyva)

- [Типізовані масиви](/uk/docs/Web/JavaScript/Typed_arrays)
- [RangeError: invalid array length](/uk/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
