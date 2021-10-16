---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.forEach
---
{{JSRef}}

Метод **`forEach()`** виконує дану функцію один раз для кожного елементу масиву.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## Синтаксис

```js
// Стрілкова функція
forEach((element) => { ... } )
forEach((element, index) => { ... } )
forEach((element, index, array) => { ... } )

// Функція зворотного виклику
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Функція зворотного виклику, оголошена на місці
forEach(function callbackFn(element) { ... })
forEach(function callbackFn(element, index) { ... })
forEach(function callbackFn(element, index, array){ ... })
forEach(function callbackFn(element, index, array) { ... }, thisArg)
```

### Параметри

- `callbackFn`

  - : Функція, яку буде викликано на кожному елементі. Приймає від одного до трьох аргументів:

    - `element`
      - : Поточний елемент масиву, який зараз опрацьовується.
    - `index` {{optional_inline}}
      - : Порядковий номер цього елементу в масиві.
    - `array` {{optional_inline}}
      - : Власне масив, на якому було викликано `forEach()`.

- `thisArg` {{optional_inline}}
  - : Значення, яке буде підставлено як `this` під час виконання `callbackFn`.

### Результат

`undefined`.

## Опис

Метод `forEach()` викликає подану функцію `callbackFn` один раз для кожного елементу в масиві, у порядку зростання їх порядкового номера. Функція не викликається для елементів, які було видалено, або які не було ініціалізовано. (для розріджених масивів [дивіться приклад нижче](#sparsearray).)

Функція `callbackFn` викликається з трьома аргументами:

1.  значення елементу
2.  порядковий номер елементу
3.  масив, на котрому викликано `forEach`

Якщо у `forEach()` задано параметр `thisArg`, його буде використано як значення `this` у функції зворотного виклику. В загальному випадку значення `this`, яке бачитиме функція `callback` визначається згідно з [загальними правилами визначення значення `this`, доступного для функції](/en-US/docs/Web/JavaScript/Reference/Operators/this).

Діапазон елементів, що опрацьовуються функцією `forEach()`, задається до першого виклику `callbackFn`. Елементи, які будуть присвоєні за індексами, що вже перебрані методом, або ж до індексів за межами цього діапазону, не будуть опрацьовані функцією `callbackFn`. Якщо наявні елементи змінюються чи видаляються, то до `callbackFn` буде передано їх фактичне значення на момент, коли функція `forEach()` їх опрацьовує. Ті елементи, які були видалені до того, як їх опрацювала функція, опрацьовані не будуть. Якщо елементи, які уже були опрацьовані, видаляються (наприклад, за допомогою {{jsxref("Array.prototype.shift()", "shift()")}}) під час проходження по масиву, наступні елементи буде пропущено. ([Дивіться цей приклад нижче](#modifying_the_array_during_iteration).)

**Обережно:** Одночасні модифікації такого типу, як описано в попередньому абзаці, часто приводять до коду, який важко зрозуміти. Загалом заведено уникати такого запису (окрім особливих випадків).

Метод `forEach()` виконує функцію `callbackFn` один раз для кожного елементу в масиві, і на відміну від {{jsxref("Array.prototype.map()", "map()")}} чи
{{jsxref("Array.prototype.reduce()", "reduce()")}} він завжди повертає значення {{jsxref("undefined")}}, і не придатний до послідовних викликів. Зазвичай його використовують для виконання побічних ефектів наприкінці послідовності.

Метод `forEach()` не змінює масив, на якому він викликається. (Хоча,
`callbackFn` може це робити)

> **Зауваження:** Не існує способу зупинити або перервати цикл `forEach()` окрім 
> як шляхом викидання винятку. Якщо вам потрібна можливість перервати цикл, метод `forEach()`
> для цього не підходить.
>
> Зупинка циклу до його завершення може бути досягнена шляхом використання:
>
> - Простого циклу [for](/en-US/docs/Web/JavaScript/Reference/Statements/for)
> - Циклів [for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
>   або [for...in](/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
> - {{jsxref("Array.prototype.every()")}}
> - {{jsxref("Array.prototype.some()")}}
> - {{jsxref("Array.prototype.find()")}}
> - {{jsxref("Array.prototype.findIndex()")}}
>
> Методи масиву, як от {{jsxref("Array.prototype.every()", "every()")}},
> {{jsxref("Array.prototype.some()", "some()")}}, {{jsxref("Array.prototype.find()", "find()")}}, і {{jsxref("Array.prototype.findIndex()", "findIndex()")}} перевіряють
> елементи масиву за допомогою предикату, що повертає істинне значення, якщо 
> продовження перебирання масиву є необхідним.

> **Зауваження:** `forEach` приймає синхронну функцію.
>
> `forEach` не чекає на завершення промісів. Впевніться, що ви розумієте можливі наслідки
> передачі промісів (чи асинхронних функцій) в аргументах функції `forEach`.
>
> ```js
> let ratings = [5, 4, 5];
> let sum = 0;
>
> let sumFunction = async function (a, b)
> {
>   return a + b
> }
>
> ratings.forEach(async function(rating) {
>   sum = await sumFunction(sum, rating)
> })
>
> console.log(sum)
> // Наївно очікуваний результат: 14
> // Фактичний результат: 0
> ```

## Поліфіл

Метод `forEach()` було додано до стандарту ECMA-262 у його 5-й редакції. Тобто, він може бути доступний не у всіх його реалізаціях. Цю проблему можна обійти шляхом додавання наступного коду на початку скрипту. Фактично це дозволить використовувати `forEach()` у реалізаціях ECMA-262, які не підтримують його нативно.

Це той самий алгоритм, який наведено у 5-й редакції ECMA-262, з поправкою на припущення, що {{jsxref("Object")}} і {{jsxref("TypeError")}} мають свої початкові значення, і що `fun.call` зводиться до початкового значення {{jsxref("Function.prototype.call()")}}.

```js
// Етапи створення ECMA-262, 5 редакція, 15.4.4.18
// Посилання: https://es5.github.io/#x15.4.4.18

if (!Array.prototype['forEach']) {

  Array.prototype.forEach = function(callback, thisArg) {

    if (this == null) { throw new TypeError('Array.prototype.forEach called on null or undefined'); }

    var T, k;
    // 1. Нехай O є результатом викликання функції toObject(), що передає
    // значення |this| як аргумент.
    var O = Object(this);

    // 2. Нехай lenValue є результатом викликання внутрішнього методу Get()
    // об'єкту O з аргументом "length".
    // 3. Нехай len буде значенням toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Якщо isCallable(callback) є хибою, викинемо виняток TypeError.
    // Дивіться: https://es5.github.com/#x9.11
    if (typeof callback !== "function") { throw new TypeError(callback + ' is not a function'); }

    // 5. Якщо дано аргумент thisArg, нехай T буде thisArg;
    // інакше нехай T буде невизначено.
    if (arguments.length > 1) { T = thisArg; }

    // 6. Нехай k буде 0
    k = 0;

    // 7. Повторюємо, доки k < len
    while (k < len) {

      var kValue;

      // a. Нехай Pk буде ToString(k).
      //    Таке перетворення відбувається неявно для лівих операндів оператора "in"
      // b. Нехай kPresent буде результатом викликання внутрішнього
      //    методу HasProperty об'єкту O з аргументом Pk.
      //    Допускається суміщати цей крок із c
      // c. Якщо kPresent є істиною, тоді
      if (k in O) {

        // i. Нехай kValue буде результатом викликання внутрішнього методу Get
        // об'єкта O з аргументом Pk.
        kValue = O[k];

        // ii. Викличемо внутрішній метод Call функції зворотного виклику
        // з T як значенням "this", і набором аргументів, що містять kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Збільшуємо k на 1.
      k++;
    }
    // 8. Повертаємо undefined
  };
}
```

## Приклади

### Нічого не відбувається на неініціалізованих значеннях (розріджені масиви)

```js
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach(function(element) {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// коментар: як можна побачити, пропущене значення між 3 та 7 не викликало функції зворотного виклику
```

### Перетворення циклу for на forEach

```js
const items = ['item1', 'item2', 'item3']
const copyItems = []

// до
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}

// після
items.forEach(function(item){
  copyItems.push(item)
})
```

### Друк вмісту масиву

> **Зауваження:** Щоб показати вміст масиву у консолі,
> можна застосувати метод {{domxref("console/table", "console.table()")}}, який друкує
> відформатований варіант масиву.
>
> Приклад далі ілюструє альтернативний підхід, із застосуванням
> `forEach()`.

Наступний код друкує рядок для кожного елементу в масиві:

```js
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element)
}

// Зауважте, що порядковий номер 2 пропущено, оскільки в масиві не існує
// елементу на цій позиції...
[2, 5, , 9].forEach(logArrayElements)
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### Застосування thisArg

Наступний (надуманий) приклад оновлює властивості об'єкту, з урахуванням поданих елементів масиву:

```js
function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry
    ++this.count
  }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3
obj.sum
// 16
```

Оскільки параметр `thisArg` (`this`) було задано в `forEach()`, він передавався до функції `callback` кожного разу, коли вона викликалась. Сама функція зворотного виклику використовує її як значення `this`.

> **Зауваження:** Якщо при передачі функції зворотного виклику було використано вираз
> [стрілкової функції](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), значення параметру `thisArg` можна опустити,
> оскільки всі стрілкові функції прив'язують значення {{jsxref("Operators/this", "this")}}
> лексично.

### Функція копіювання об'єкту

Наступний код створює копію поданого об'єкту.

Існує декілька різних способів створити копію об'єкту. Спосіб, що наведено нижче - це лише один із багатьох, наведений для ілюстрації того, як `Array.prototype.forEach()` працює шляхом використання методів `Object.*` для роботи з властивостями, що з'явились у ECMAScript 5.

```js
function copy(obj) {
  const copy = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach(function(name) {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    Object.defineProperty(copy, name, desc)
  })

  return copy
}

const obj1 = { a: 1, b: 2 }
const obj2 = copy(obj1) // obj2 тепер виглядає точнісінько як obj1
```

### Зміна масиву під час перебирання його елементів

Наступний приклад друкує `one`, `two`, `four`.

Коли в процесі перебору елементів функція підходить до значення `two`, перший елемент цілого масиву витісняється з нього. В результаті всі елементи, що залишилися, зміщуються на одну позицію вліво. Оскільки елемент `four` тепер займає лівішу позицію, елемент `three` пропускається.

Метод `forEach()` не робить копію масиву перед перебиранням.

```js
let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift() // елемент 'one' видаляється з масиву
  }
}) // one // two // four

console.log(words);  //['two', 'three', 'four']
```

### Сплощення масиву

Приклад нижче наведено лише для навчальних потреб. Для сплощення масивів вбудованими методами можна застосовувати {{jsxref("Array.prototype.flat()")}}.

```js
function flatten(arr) {
  const result = []

  arr.forEach(function(i) {
    if (Array.isArray(i)) {
      result.push(...flatten(i))
    } else {
      result.push(i)
    }
  })

  return result
}

// Застосування
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Array.prototype.forEach` присутній у [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
