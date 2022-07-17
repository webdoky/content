---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Map
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Map
---

{{JSRef}}

Об'єкт **`Map`** (відображення) містить пари ключ-значення і запам'ятовує порядок вставки ключів у об'єкт. Будь-які значення (і об'єкти, і {{glossary("Primitive", "примітивні значення")}}) можуть використовуватись і як ключ, і як значення.

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## Опис

Об'єкт `Map` перебирає свої елементи в порядку їх вставки, тобто цикл {{jsxref("Statements/for...of", "for...of")}} повертатиме масив `[ключ, значення]` на кожній ітерації.

Специфікація вимагає, щоб відображення були реалізовані "так, щоб в середньому час доступу був сублінійним відносно числа елементів колекції". Таким чином, внутрішньо вони можуть бути представлені як геш-таблиця (з доступом O(1)), як дерево пошуку (з доступом O(log(N))) або будь-яка інша структура даних, поки складність доступу краща за O(N).

### Рівність ключів

- Рівність ключів заснована на алгоритмі [`sameValueZero`](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
- Значення {{jsxref("NaN")}} вважається рівним `NaN` (хоча `NaN !== NaN`), а всі інші значення вважаються однаковими згідно з семантикою оператора `===`.
- В чинній специфікації ECMAScript `-0` та `+0` вважаються рівними, хоча в більш ранніх чернетках це було не так. Зверніться до _"Value equality for -0 and
  0"_ в таблиці [Сумісності з браузерами](#sumisnist-iz-brauzeramy) за подробицями.

### Порівняння `Object` та `Map`

{{jsxref("Object")}} дуже схожий до `Map`: обидві структури даних дають змогу задавати значення за ключами, отримувати ці значення, видаляти ключі та визначати, чи зберігається щось за певним ключем. З таких міркувань (а ще тому, що не існувало вбудованих альтернатив), історично `Object` використовується як `Map`.

Однак, є важливі відмінності, котрі роблять `Map` бажаним у деяких випадках:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">`Map`</th>
      <th scope="col">`Object`</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Випадкові ключі</th>
      <td>
        Новостворений <code>Map</code> усталено не містить ніяких ключів. Він містить лише те, що було явно покладено в нього.
      </td>
      <td>
        <p>
          <code>Object</code> має прототип, а тому він містить певні усталені ключі, котрі можуть конфліктувати з вашими, якщо ви недостатньо обережні.
        </p>
        <div class="notecard note">
          <p>
            <strong>Зауваження:</strong> Починаючи з ES5, цю проблему можна обійти за допомогою {{jsxref("Object.create", "Object.create(null)")}}, хоча такий підхід рідко застосовується.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Типи ключів</th>
      <td>
        Ключі в <code>Map</code> можуть мати будь-яке значення (включно з функціями, об'єктами та будь-якими примітивними значеннями).
      </td>
      <td>
        Ключі в <code>Object</code> повинні мати тип або {{jsxref("String")}}, або {{jsxref("Symbol")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Порядок ключів</th>
      <td>
        <p>
          Ключі в <code>Map</code> впорядковані простим і прямолінійним чином, а саме: об'єкт <code>Map</code> перебирає записи, ключі та значення в порядку, в якому вони були вставлені.
        </p>
      </td>
      <td>
        <p>
          Хоча ключі звичайного <code>Object</code> наразі впорядковані, це не завжди було так, та й сам порядок складний. Як наслідок, краще не опиратися на порядок властивостей в об'єктах.
        </p>
        <p>
          Цей порядок було вперше визначено лише для власних властивостей в ECMAScript
          2015; ECMAScript 2020 визначає також порядок успадкованих властивостей.
          Дивіться специфікації абстрактних операцій
          <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys"
            >OrdinaryOwnPropertyKeys</a
          >
          та
          <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties"
            >EnumerateObjectProperties</a
          >. Проте зауважте, що жоден механізм не дозволяє перебрати <strong>всі</strong> властивості об'єкта; різні механізми охоплюють різні підмножини властивостей. Зокрема, ({{jsxref("Statements/for...in", "for-in")}}
          охоплює лише перелічувані властивості з рядковими ключами;
          {{jsxref("Object.keys")}} враховує лише власні перелічувані властивості з рядковими ключами;
          {{jsxref("Object.getOwnPropertyNames")}} включає власні властивості з рядковими ключами, навіть неперелічувані;
          {{jsxref("Object.getOwnPropertySymbols")}} робить те саме, але лише для властивостей з ключами-символами, і т.д.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Розмір</p></th>
      <td>
        Кількість елементів всередині <code>Map</code> легко отримується з його властивості {{jsxref("Map.prototype.size", "size")}}.
      </td>
      <td>
        Кількість елементів всередині <code>Object</code> слід обраховувати самотужки.
      </td>
    </tr>
    <tr>
      <th scope="row">Перебирання</th>
      <td>
        <code>Map</code> — це
        <a href="/uk/docs/Web/JavaScript/Reference/Iteration_protocols"
          >ітерований</a
        > об'єкт, тож його елементи можна перебирати напряму.
      </td>
      <td>
        <p>
          <code>Object</code> не реалізовує <a
            href="/uk/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
            >протокол ітерації</a
          >, тому поля об'єктів типово не можна перебирати напряму JavaScript-інструкцією
          <a href="/uk/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          >.
        </p>
        <div class="notecard note">
          <p><strong>Зауваження:</strong></p>
          <ul>
            <li>
              Об'єкт може реалізовувати протокол ітерації, а ще можна отримати ітероване значення для об'єкта за допомогою <a
                href="/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              > чи <a
                href="/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              >.
            </li>
            <li>
              Інструкція
              <a href="/uk/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              >
              дає змогу перебирати лише <em>перелічувані</em> властивості об‘єкта.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Швидкодія</th>
      <td>
        <p>
          Краще працює при ситуаціях, коли необхідно часто додавати й видаляти пари ключ-значення.
        </p>
      </td>
      <td>
        <p>
          Не оптимізований для частого вставляння і видалення пар ключ-значення.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Серіалізація і парсинг</th>
      <td>
        <p>Не має нативної підтримки для серіалізації чи парсингу.</p>
        <p>
          (Проте можна збудувати власну підтримку для серіалізації та розбирання об'єктів <code>Map</code> за допомогою {{jsxref("JSON.stringify()")}} з його аргументом <em>replacer</em>, і {{jsxref("JSON.parse()")}} з його аргументом <em>reviver</em>. Дивіться запитання на Stack Overflow <a href="https://stackoverflow.com/q/29085197/"
            >Як застосувати JSON.stringify до ES6 Map? (англ.)</a
          >).
        </p>
      </td>
      <td>
        <p>
          Нативна підтримка серіалізації з {{jsxref("Object")}} у
          JSON за допомогою {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Нативна підтримка для парсингу JSON у {{jsxref("Object")}} за допомогою {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Призначення властивостей об‘єкта

Призначення властивостей об‘єкта так само працює і для об'єктів типу Map, і це може спричинити суттєву плутанину.

Отже, може скластися враження, що це працює таким чином:

```js example-bad
const wrongMap = new Map();
wrongMap['bla'] = 'blaa';
wrongMap['bla2'] = 'blaaa2';

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Однак цей спосіб присвоєння властивості ніяк не взаємодіє зі структурою даних `Map`. Він лише використовує особливість звичайного об‘єкта. Значення 'bla' не збереглося всередині `Map` для запитів. Інші операції на даних зазнають невдачі:

```js example-bad
wrongMap.has('bla'); // false
wrongMap.delete('bla'); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Правильно використовувати `Map` для зберігання даних через метод `set(key, value)`.

```js example-good
const contacts = new Map();
contacts.set('Яся', { phone: '213-555-1234', address: '123 N 1st Ave' });
contacts.has('Яся'); // true
contacts.get('Галина'); // undefined
contacts.set('Галина', { phone: '617-555-4321', address: '321 S 2nd St' });
contacts.get('Яся'); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Роман'); // false
contacts.delete('Яся'); // true
console.log(contacts.size); // 1
```

## Конструктор

- {{jsxref("Map/Map", "Map()")}}
  - : Створює новий об'єкт `Map`.

## Статичні властивості

- {{jsxref("Map.@@species", "get Map[@@species]")}}
  - : Функція конструктора, що застосовується для створення похідних об'єктів.

## Властивості примірника

- {{jsxref("Map.prototype.size")}}
  - : Повертає кількість пар ключ-значення об'єкта `Map`.

## Методи примірника

- {{jsxref("Map.prototype.clear()")}}
  - : Видаляє всі пари ключ-значення з об'єкта `Map`.
- {{jsxref("Map.delete", "Map.prototype.delete(<var>key</var>)")}}
  - : Повертає `true`, якщо вказаний елемент знаходився всередині `Map` і був успішно видалений, або ж `false`, якщо вказаний елемент не існує. Після цього `Map.prototype.has(key)` повертатиме `false`.
- {{jsxref("Map.get", "Map.prototype.get(<var>key</var>)")}}
  - : Повертає значення, пов'язане з `key`, або ж `undefined`, якщо такого значення немає.
- {{jsxref("Map.has", "Map.prototype.has(<var>key</var>)")}}
  - : Повертає булеве значення, яке відображає наявність чи відсутність якогось значення, пов'язаного з ключем `key` в об'єкті `Map`.
- {{jsxref("Map.set", "Map.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : Призначає значення `value` за ключем `key` в об'єкті `Map`. Повертає об'єкт `Map`.

### Методи для перебирання

- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
  - : Повертає новий об'єкт Iterator, що містить **масив `[key, value]`** на кожний елемент об‘єкта `Map`, у порядку їх вставки.
- {{jsxref("Map.prototype.keys()")}}
  - : Повертає новий об'єкт Iterator, що містить **ключі** кожного елементу об‘єкта `Map`, в порядку їх вставки.
- {{jsxref("Map.prototype.values()")}}
  - : Повертає новий об'єкт Iterator, який містить **значення** кожного елементу об‘єкта `Map`, в порядку їх вставки.
- {{jsxref("Map.prototype.entries()")}}
  - : Повертає новий об'єкт Iterator, який містить **масив `[key, value]`** на кожний елемент об‘єкта `Map`, у порядку їх вставки.
- {{jsxref("Map.forEach", "Map.prototype.forEach(<var>callbackFn</var>[,
    <var>thisArg</var>])")}}
  - : Викликає функцію `callbackFn` один раз для кожної пари ключ-значення, наявної в об'єкті `Map`, в порядку вставки. Якщо в метод `forEach` передано параметр `thisArg`, його буде використано як значення `this` для кожної функції зворотного виклику.

## Приклади

### Застосування об‘єкта `Map`

```js
const myMap = new Map();

const keyString = 'рядок';
const keyObj = {};
const keyFunc = function () {};

// встановлення значень
myMap.set(keyString, 'значення, асоційоване з рядком');
myMap.set(keyObj, "значення, асоційоване з об'єктом");
myMap.set(keyFunc, 'значення, асоційоване з функцією');

myMap.size; // 3

// отримання значень
myMap.get(keyString); // "значення, асоційоване з рядком"
myMap.get(keyObj); // "значення, асоційоване з об\'єктом"
myMap.get(keyFunc); // "значення, асоційоване з функцією"

myMap.get('рядок'); // "значення, асоційоване з рядком"
// оскільки keyString === 'a string'
myMap.get({}); // undefined, оскільки keyObj !== {}
myMap.get(function () {}); // undefined, оскільки keyFunc !== function () {}
```

### Застосування NaN як ключів для `Map`

Значення {{jsxref("NaN")}} також можна використовувати як ключ. І хоча кожне значення `NaN` не дорівнює саме собі (вираз `NaN !== NaN` — істинний), наступний приклад спрацює, тому що значення `NaN` неможливо розрізнити одне від одного:

```js
const myMap = new Map();
myMap.set(NaN, 'не число');

myMap.get(NaN);
// "не число"

const otherNaN = Number('foo');
myMap.get(otherNaN);
// "не число"
```

### Перебирання об'єктів `Map` за допомогою `for..of`

Об'єкти `Map` можна перебирати за допомогою циклу `for..of`:

```js
const myMap = new Map();
myMap.set(0, 'нуль');
myMap.set(1, 'один');

for (const [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
// 0 = нуль
// 1 = один

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// нуль
// один

for (const [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
// 0 = нуль
// 1 = один
```

### Перебирання об'єктів `Map` за допомогою `forEach()`

Об'єкти `Map` можна перебирати за допомогою методу {{jsxref("Map.prototype.forEach", "forEach()")}}:

```js
myMap.forEach(function (value, key) {
  console.log(key + ' = ' + value);
});
// 0 = нуль
// 1 = один
```

### Зв'язок з масивами

```js
const kvArray = [
  ['key1', 'value1'],
  ['key2', 'value2'],
];

// Використаємо звичайний конструктор Map, щоб перетворити двовимірний масив комбінацій ключ-значення на `Map`
const myMap = new Map(kvArray);

myMap.get('key1'); // повертає "value1"

// Використаємо Array.from(), щоб перетворити об'єкт `Map` у двовимірний масив пар ключ-значення
console.log(Array.from(myMap)); // Покаже точнісінько такий самий масив, як kvArray

// Лаконічний спосіб зробити те саме, за допомогою оператора розгортання
console.log([...myMap]);

// Або ж використовуйте ітератори keys() чи values() і перетворюйте їх у масив
console.log(Array.from(myMap.keys())); // ["key1", "key2"]
```

### Клонування і злиття об'єктів `Map`

Так само як і масиви, об'єкти `Map` можна клонувати:

```js
const original = new Map([[1, 'one']]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (корисно для поверхневого порівняння)
```

> **Зауваження:** Майте на увазі, що _власне дані_ тут клоновано не було.

Об'єкти `Map` можна поєднувати, зберігаючи унікальність ключів:

```js
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos'],
]);

// Зливаємо докупи два об'єкти `Map`. У разі конфлікту ключів наступний перезапише попередній.
// Оператор розгортання фактично перетворює `Map` на масив
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

Об'єкти `Map` можна також об'єднувати з іншими масивами:

```js
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos'],
]);

// Зливаємо докупи об'єкти `Map` з масивом. У разі конфлікту ключів наступний перезапише попередній.
const merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Map` наявний в складі [`core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
