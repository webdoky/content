---
title: Array (масив)
slug: Web/JavaScript/Reference/Global_Objects/Array
page-type: javascript-class
browser-compat: javascript.builtins.Array
---

{{JSRef}}

Об'єкт класу **`Array`** (масив), подібно до масивів у інших мовах програмування, дає змогу [зберігати колекцію багатьох елементів за єдиною назвою змінної](/uk/docs/Learn/JavaScript/First_steps/Arrays) та має методи для [виконання звичних операцій над масивами](#pryklady).

## Опис

У мові JavaScript масиви не є [примітивами](/uk/docs/Glossary/Primitive), а натомість є об'єктами класу `Array`, із наступними ключовими характеристиками:

- **Масиви JavaScript можуть змінювати розмір** і **можуть містить суміш різних [типів даних](/uk/docs/Web/JavaScript/Data_structures)**. (Коли ці характеристики є небажаними, слід натомість використовувати [типізовані масиви](/uk/docs/Web/JavaScript/Guide/Typed_arrays).)
- **Масиви JavaScript не є асоціативними**, а отже – елементи масиву не можуть бути отримані з використанням рядків замість індексів, індекси масиву – лише цілі числа.
- **Масиви JavaScript [нумеруються від нуля](https://uk.wikipedia.org/wiki/%D0%9D%D1%83%D0%BC%D0%B5%D1%80%D0%B0%D1%86%D1%96%D1%8F_%D0%B2%D1%96%D0%B4_%D0%BD%D1%83%D0%BB%D1%8F)**: перший елемент масиву знаходиться за індексом `0`, другий – за індексом `1`, і так далі; останній же елемент знаходиться за індексом, рівним значенню властивості масиву {{jsxref("Array/length", "length")}} мінус `1`.
- **[Операції копіювання масиву](#kopiiuvannia-masyvu) створюють [поверхневі копії](/uk/docs/Glossary/Shallow_copy)**. (Усі стандартні вбудовані операції копіювання _будь-яких_ об'єктів JavaScript створюють поверхневі, а не [глибинні копії](/uk/docs/Glossary/Deep_copy)).

### Індекси масиву

Об'єкти `Array` не можуть використовувати як індекси елементів рядки (як це буває в [асоціативному масиві](https://uk.wikipedia.org/wiki/%D0%90%D1%81%D0%BE%D1%86%D1%96%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9_%D0%BC%D0%B0%D1%81%D0%B8%D0%B2)), а мусять використовувати цілі числа (або відповідну їм рядкову форму). Встановлення чи отримання значень за ключами, що не є цілими числами, не встановить і не отримає елементів самого списку елементів масиву, але встановить чи отримає змінну, пов'язану з [колекцією властивостей об'єкта](/uk/docs/Web/JavaScript/Data_structures#vlastyvosti) масиву. Об'єктні властивості масиву та список елементів масиву – окремі одне від одного, і [операції перебору та зміни](/uk/docs/Web/JavaScript/Guide/Indexed_collections#metody-masyviv) не можуть застосовуватись до таких іменованих властивостей.

Елементи масиву є властивостями об'єкта так само, як `toString` (для точності, втім, слід нагадати, що `toString()` є методом). Попри це, спроба отримати елемент масиву у наступний спосіб призведе до синтаксичної помилки, адже таке ім'я властивості є недійсним:

```js-nolint example-bad
arr.0; // синтаксична помилка
```

Синтаксис JavaScript вимагає, аби до властивостей, що починаються з цифри, зверталися за допомогою [запису квадратних дужок](/uk/docs/Web/JavaScript/Guide/Working_with_objects#obiekty-i-vlastyvosti), а не [запису крапки](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors). Крім цього, можна брати в лапки індекси масивів (наприклад, `years['2']` замість `years[2]`), хоч зазвичай для цього немає потреби.

`2` в записі `years[2]` зводиться до рядка рушієм JavaScript шляхом неявного перетворення `toString`. Як наслідок, `'2'` і `'02'` вказують на дві різні комірки в об'єкті `years`, і результатом роботи наступного прикладу може бути `true`:

```js
console.log(years["2"] !== years["02"]);
```

Лише `years['2']` є справжнім індексом масиву. `years['02'] – звичайна рядкова властивість, котру не враховуватиме ітерація масиву.

### Взаємини між length і числовими властивостями

Існує взаємозв'язок між властивістю масиву JavaScript {{jsxref("Array/length", "length")}} та його числовими властивостями.

Декілька вбудованих методів масиву (наприклад, {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/indexOf", "indexOf()")}} тощо) враховують значення властивості масиву {{jsxref("Array/length", "length")}}, коли спрацьовують.

Інші методи (наприклад, {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}} тощо) на додачу оновлюють властивість масиву {{jsxref("Array/length", "length")}}.

```js
const fruits = [];
fruits.push("банан", "яблуко", "персик");
console.log(fruits.length); // 3
```

При зміні значення властивості масиву JavaScript, за умови що властивість є дійсним індексом масиву і що цей індекс лежить поза поточними межами масиву, рушій відповідним чином оновить властивість масиву {{jsxref("Array/length", "length")}}:

```js
fruits[5] = "манго";
console.log(fruits[5]); // 'манго'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Збільшення властивості {{jsxref("Array/length", "length")}} спричиняє розширення масиву шляхом додавання порожніх комірок, без додавання жодних нових елементів – навіть `undefined`.

```js
fruits.length = 10;
console.log(fruits); // ['банан', 'яблуко', 'персик', порожнеча x 2, 'манго', порожнеча x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
```

Зменшення властивості {{jsxref("Array/length", "length")}}, утім, видаляє елементи.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

Така поведінка докладніше пояснена на сторінці {{jsxref("Array/length", "length")}}.

### Методи масиву й порожні комірки

Порожні комірки [розріджених масивів](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy) поводяться в методах масиву по-різному. Загалом, старші методи пропускають порожні комірки, а новіші – обробляють їх як `undefined`.

Серед методів, що ітерують багато елементів, перелічені нижче – виконують перед звертанням до індексу перевірку [`in`](/uk/docs/Web/JavaScript/Reference/Operators/in) і не зводять порожні комірки до `undefined`:

- {{jsxref("Array/concat", "concat()")}}
- {{jsxref("Array/copyWithin", "copyWithin()")}}
- {{jsxref("Array/every", "every()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/flat", "flat()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/forEach", "forEach()")}}
- {{jsxref("Array/indexOf", "indexOf()")}}
- {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/reduce", "reduce()")}}
- {{jsxref("Array/reduceRight", "reduceRight()")}}
- {{jsxref("Array/reverse", "reverse()")}}
- {{jsxref("Array/slice", "slice()")}}
- {{jsxref("Array/some", "some()")}}
- {{jsxref("Array/sort", "sort()")}}
- {{jsxref("Array/splice", "splice()")}}

Щодо того, як саме вони обробляють порожні комірки, дивіться на їх власних сторінках.

Ці методи обробляють порожні комірки так, ніби в них `undefined`:

- {{jsxref("Array/entries", "entries()")}}
- {{jsxref("Array/fill", "fill()")}}
- {{jsxref("Array/find", "find()")}}
- {{jsxref("Array/findIndex", "findIndex()")}}
- {{jsxref("Array/findLast", "findLast()")}}
- {{jsxref("Array/findLastIndex", "findLastIndex()")}}
- {{jsxref("Array/includes", "includes()")}}
- {{jsxref("Array/join", "join()")}}
- {{jsxref("Array/keys", "keys()")}}
- {{jsxref("Array/toLocaleString", "toLocaleString()")}}
- {{jsxref("Array/values", "values()")}}

### Копіювальні та змінювальні методи

Частина методів не змінює наявний масив, на котрому викликали метод, а повертає новий масив. Це робиться спершу створенням нового масиву, а потім – заповненням його елементами. Копіювання завжди відбувається [_поверхнево_](/uk/docs/Glossary/Shallow_copy): метод ніколи не копіює нічого поза початково створеним масивом. Елементи вихідного масиву (чи масивів) копіюються в новий масив так:

- Об'єкти: посилання на об'єкт копіюється в новий масив. І вихідний, і новий масиви посилаються на один об'єкт. Тобто якщо змінити цей об'єкт, то зміни будуть помітні як у новому, так і в вихідному масиві.
- Примітивні типи, як то рядки, числа й булеві значення (не об'єкти {{jsxref("String")}}, {{jsxref("Number")}} і {{jsxref("Boolean")}}): їхні значення копіюються в новий масив.

Решта методів змінює масив, на котрому викликано метод, у випадку чого їхнє повернене значення відрізняється залежно від методу: іноді це посилання на той самий масив, іноді – довжина нового масиву.

Наступні методи створюють нові масиви шляхом звертання до [`this.constructor[Symbol.species]`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species) для визначення конструктора, який буде використаний:

- {{jsxref("Array/concat", "concat()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/flat", "flat()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/slice", "slice()")}}
- {{jsxref("Array/splice", "splice()")}} (для створення поверненого масиву прибраних елементів)

Наступні методи завжди створюють нові масиви з базовим конструктором `Array`:

- {{jsxref("Array/toReversed", "toReversed()")}}
- {{jsxref("Array/toSorted", "toSorted()")}}
- {{jsxref("Array/toSpliced", "toSpliced()")}}
- {{jsxref("Array/with", "with()")}}

Наступна таблиця перераховує методи, які змінюють вихідний масив, і відповідні їм незмінювальні альтернативи:

| Змінювальний метод                             | Незмінювальна альтернатива                               |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}} | Немає альтернативи одним методом                         |
| {{jsxref("Array/fill", "fill()")}}             | Немає альтернативи одним методом                         |
| {{jsxref("Array/pop", "pop()")}}               | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}       | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}       | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}           | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}             | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}         | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}} | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

Легкий спосіб замінити змінювальний метод на незмінювальний альтернативний – використати [синтаксис розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax) або {{jsxref("Array/slice", "slice()")}}, щоб спершу створити копію:

```js-nolint
arr.copyWithin(0, 1, 2); // змінює arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // не змінює arr
const arr3 = [...arr].copyWithin(0, 1, 2); // не змінює arr
```

### Ітеративні методи

Чимало методів масиву приймає як аргумент функцію зворотного виклику. Вона викликається послідовно й щонайбільше раз для кожного елемента масиву, і її повернене значення використовується для визначення поверненого методом значення. Вони поділяють одну сигнатуру:

```js-nolint
method(callbackFn, thisArg)
```

Де `callbackFn` приймає три аргументи:

- `element`
  - : Поточний елемент, що обробляється масивом.
- `index`
  - : Індекс поточного елемента, що обробляється масивом.
- `array`
  - : Масив, на якому було викликано метод.

Те, що має повернути `callbackFn`, залежить від викликаного метода масиву.

Аргумент `thisArg` (чиє усталене значення – `undefined`) використовуватиметься як значення `this` при виклику `callbackFn`. Значення `this`, отримане функцією `callbackFn`, визначається згідно зі [звичними правилами](/uk/docs/Web/JavaScript/Reference/Operators/this): якщо `callbackFn` є [несуворою](/uk/docs/Web/JavaScript/Reference/Strict_mode#bez-zaminy-this) функцією, то примітивні значення `this` загортаються в об'єкти, а `undefined` і `null` – замінюються на [`globalThis`](/uk/docs/Web/JavaScript/Reference/Global_Objects/globalThis). Аргумент `thisArg` є беззмістовним для будь-якої `callbackFn`, визначеною у вигляді [стрілкової функції](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions), адже такі функції не мають власного {{Glossary("binding", "зв'язування")}} `this`.

Усі ітеративні методи є [копіювальними](#kopiiuvalni-ta-zminiuvalni-metody) та [узагальненими](#uzahalneni-metody-masyvu), хоч вони по-різному поводяться з [порожніми комірками](#metody-masyvu-y-porozhni-komirky).

Наступні методи - ітеративні:

- {{jsxref("Array/every", "every()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/find", "find()")}}
- {{jsxref("Array/findIndex", "findIndex()")}}
- {{jsxref("Array/findLast", "findLast()")}}
- {{jsxref("Array/findLastIndex", "findLastIndex()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/forEach", "forEach()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/some", "some()")}}

А саме – {{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}} і {{jsxref("Array/some", "some()")}} не завжди закликають `callbackFn` на кожному елементі: вони зупиняють ітерування, щойно повернене значення визначено.

Є два інші методи, що приймають функцію зворотного виклику й запускають її щонайбільше раз для кожного елементу в масиві, але мають дещо інакші сигнатури, ніж типові ітеративні методи (до прикладу, вони не приймають `thisArg`):

- {{jsxref("Array/reduce", "reduce()")}}
- {{jsxref("Array/reduceRight", "reduceRight()")}}

Метод {{jsxref("Array/sort", "sort()")}} також приймає функцію зворотного виклику, але не є ітеративним методом. Він змінює масив на місці, не приймає `thisArg` і може закликати функцію зворотного виклику кілька разів на кожному індексі.

### Узагальнені методи масиву

Методи масиву завжди є узагальненими: вони не звертаються до жодних прихованих даних об'єкта масиву, а звертаються лише до елементів масиву – через властивість `length` та елементи з індексами. Це означає, що ці методи також можуть бути викликані на масивоподібних об'єктах.

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### Нормалізація властивості length

Властивість `length` [перетворюється на ціле число](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile), а потім обрізається до діапазону між 0 і 2<sup>53</sup> - 1. `NaN` стає `0`, тож навіть тоді, коли `length` немає або в ній `undefined`, це працює так, ніби довжина дорівнює `0`.

Мова JavaScript уникає задання `length` зі значенням [небезпечного цілого числа](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). Всі вбудовані методи викидають {{jsxref("TypeError")}}, коли `length` задається з числом, більшим за 2<sup>53</sup> - 1. Однак оскільки властивість масивів {{jsxref("Array/length", "length")}} завжди викидає помилку, коли отримує значення, більше за 2<sup>32</sup> - 1, то зазвичай поріг небезпечних цілих чисел не досягається, якщо метод не викликається на об'єкті, що не є масивом.

```js
Array.prototype.flat.call({}); // []
```

Частина методів масиву змінює властивість `length` об'єкта масиву. Вони завжди присвоюють значення після нормалізації, тому `length` завжди стає цілим числом.

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### Масивоподібні об'єкти

Термін [_масивоподібний об'єкт_](/uk/docs/Web/JavaScript/Guide/Indexed_collections#robota-z-masyvopodibnymy-obiektamy) позначає будь-який об'єкт, що не викидає помилки при процесі перетворення `length`, описаному вище. На практиці очікується, що такий об'єкт має властивість `length`, а також індексовані елементи в діапазоні від `0` до `length - 1`. (Якщо він має не всі індекси, то це на практиці буде рівносильно [розрідженому масивові](#metody-masyvu-y-porozhni-komirky).) Усі індекси - цілі числа, менші за нуль або більші за `length - 1`, ігноруються, коли метод масиву працює над масивоподібним об'єктом.

Масивоподібними є чимало об'єктів DOM – наприклад, [`NodeList`](/uk/docs/Web/API/NodeList) і [`HTMLCollection`](/uk/docs/Web/API/HTMLCollection). Об'єкт [`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments) так само є масивоподібним. На них можна викликати методи масиву, навіть якщо вони самі цих методів не мають.

```js
function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}
f("a", "b"); // 'a+b'
```

## Конструктор

- {{jsxref("Array/Array", "Array()")}}
  - : Створює новий об'єкт типу `Array`.

## Статичні властивості

- {{jsxref("Array/@@species", "Array[@@species]")}} ("вид")
  - : Повертає конструктор `Array`.

## Статичні методи

- {{jsxref("Array.from()")}} ("від")
  - : Створює новий примірник `Array` на основі ітерованого або масивоподібного об'єкта.
- {{jsxref("Array.fromAsync()")}}
  - : Створює новий примірник `Array` на основі асинхронного ітератора, ітерованого або масивоподібного об'єкта.
- {{jsxref("Array.isArray()")}} ("чи є масивом")
  - : Повертає `true`, якщо аргумент є масивом, інакше – `false`.
- {{jsxref("Array.of()")}}
  - : Створює новий примірник `Array`, котрий містить усі елементи, передані як аргументи, незалежно від їх кількості й типу.

## Властивості примірника

Ці властивості означені на `Array.prototype` і є спільними для всіх примірників `Array`.

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : Функція-конструктор, котра створила об'єкт-примірник. Для примірників `Array` початковим значенням цієї властивості є конструктор {{jsxref("Array/Array", "Array")}}.
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}} ("недоступні для огляду")
  - : Містить імена властивостей, котрі не були включені до стандарту ECMAScript до версії ES2015 та є ігнорованими інструкцією прив'язування [`with`](/uk/docs/Web/JavaScript/Reference/Statements/with).

Ці властивості є власними властивостями кожного примірника `Array`.

- {{jsxref("Array/length", "length")}}
  - : Відображає кількість елементів у масиві.

## Методи примірника

- {{jsxref("Array.prototype.at()")}} ("за")
  - : Повертає елемент масиву за переданим індексом. Приймає від'ємні цілі числа, для яких відлік починається з кінця масиву (`-1` відповідає останньому елементові).
- {{jsxref("Array.prototype.concat()")}} ("зв'язати")
  - : Повертає новий масив, котрий є об'єднанням поточного масиву з масивами та окремими елементами, переданими як аргументи.
- {{jsxref("Array.prototype.copyWithin()")}} ("копіювати в межах")
  - : Копіює послідовність елементів масиву в інше місце в межах того самого масиву.
- {{jsxref("Array.prototype.entries()")}} ("записи")
  - : Повертає новий об'єкт [_ітератора масиву_](/uk/docs/Web/JavaScript/Guide/Iterators_and_generators), що містить пари ключ-значення для кожного індексу масиву.
- {{jsxref("Array.prototype.every()")}} ("кожен")
  - : Повертає `true`, якщо кожен елемент поточного масиву задовольняє перевіркову функцію.
- {{jsxref("Array.prototype.fill()")}} ("заповнити")
  - : Заповнює елементи масиву від початкового індексу до кінцевого певним статичним значенням.
- {{jsxref("Array.prototype.filter()")}} ("фільтрувати")
  - : Повертає новий масив, котрий містить усі елементи поточного масиву, для котрих передана функція фільтрування повертає `true`.
- {{jsxref("Array.prototype.find()")}} ("знайти")
  - : Повертає значення першого елемента масиву, що задовольняє передану перевіркову функцію, або `undefined` – якщо відповідного елемента не знайдено.
- {{jsxref("Array.prototype.findIndex()")}} ("знайти індекс")
  - : Повертає індекс першого елемента масиву, що задовольняє передану перевіркову функцію, або `-1` – якщо відповідного елемента не знайдено.
- {{jsxref("Array.prototype.findLast()")}} ("знайти останнього")
  - : Повертає значення останнього елемента масиву, що задовольняє передану перевіркову функцію, або `undefined` – якщо відповідного елемента не знайдено.
- {{jsxref("Array.prototype.findLastIndex()")}} ("знайти останній індекс")
  - : Повертає індекс останнього елемента масиву, що задовольняє передану перевіркову функцію, або `-1` – якщо відповідного елемента не знайдено.
- {{jsxref("Array.prototype.flat()")}} ("сплощити")
  - : Повертає новий масив з усіма елементами підмасивів, склеєними докупи рекурсивно, до вказаної глибини.
- {{jsxref("Array.prototype.flatMap()")}} ("сплощити та відобразити")
  - : Повертає новий масив, утворений застосуванням переданої функції зворотного виклику до кожного елемента поточного масиву, а тоді – сплощенням результату на один рівень.
- {{jsxref("Array.prototype.forEach()")}} ("для кожного")
  - : Викликає функцію для кожного елемента поточного масиву.
- {{jsxref("Array.prototype.includes()")}} ("включає")
  - : Визначає, чи містить поточний масив певне значення, повертаючи `true` чи `false` відповідно.
- {{jsxref("Array.prototype.indexOf()")}} ("індекс")
  - : Повертає перший (якнайменший) індекс, за яким переданий елемент може бути знайдений у поточному масиві.
- {{jsxref("Array.prototype.join()")}} ("об'єднати")
  - : Об'єднує усі елементи масиву в рядок.
- {{jsxref("Array.prototype.keys()")}} ("ключі")
  - : Повертає новий [_ітератор масиву_](/uk/docs/Web/JavaScript/Guide/Iterators_and_generators), що містить кожен індекс поточного масиву.
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
  - : Вирізає секцію з поточного масиву і повертає її як новий масив.
- {{jsxref("Array.prototype.some()")}} ("якийсь")
  - : Повертає `true`, якщо принаймні один елемент поточного масиву задовольняє передану перевіркову функцію.
- {{jsxref("Array.prototype.sort()")}} ("сортувати")
  - : Сортує елементи масиву на місці й повертає поточний масив.
- {{jsxref("Array.prototype.splice()")}} ("зростити")
  - : Додає чи прибирає елементи масиву.
- {{jsxref("Array.prototype.toLocaleString()")}} ("до рядка за регіональними стандартами")
  - : Повертає локалізований рядок, що представляє поточний масив та його елементи. Заміщає метод {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Array.prototype.toReversed()")}} ("до оберненого")
  - : Повертає новий масив з елементами у зворотному порядку, не змінюючи вихідний масив.
- {{jsxref("Array.prototype.toSorted()")}} ("до сортованого")
  - : Повертає новий масив з елементами, відсортованими в порядку зростання, не змінюючи вихідний масив.
- {{jsxref("Array.prototype.toSpliced()")}} ("до зрізаного")
  - : Повертає новий масив, в якому прибрані чи замінені певні елементи за певним індексом, не змінюючи вихідний масив.
- {{jsxref("Array.prototype.toString()")}} ("до рядка")
  - : Повертає рядок, що представляє поточний масив та його елементи. Заміщає метод {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Array.prototype.unshift()")}} ("відсунути")
  - : Додає один чи більше елементів у початок масиву й повертає значення `length` масиву.
- {{jsxref("Array.prototype.values()")}} ("значення")
  - : Повертає новий об'єкт [_ітератора масиву_](/uk/docs/Web/JavaScript/Guide/Iterators_and_generators), що містить значення за кожним індексом цього масиву.
- {{jsxref("Array.prototype.with()")}} ("зі значенням")
  - : Повертає новий масив, у якому елемент за певним індексом замінений заданим значенням, не змінюючи вихідний масив.
- [`Array.prototype[@@iterator]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) ("ітератор")
  - : Усталено є псевдонімом функції [`values()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/values).

## Приклади

Цей розділ пропонує кілька прикладів звичних операцій над масивами у JavaScript.

> **Примітка:** Читачам, що поки не є тісно знайомими з основами масивів, варто спершу прочитати статтю [Перші кроки в JavaScript: масиви](/uk/docs/Learn/JavaScript/First_steps/Arrays), котра [пояснює, чим є масиви](/uk/docs/Learn/JavaScript/First_steps/Arrays#shcho-take-masyv), та містить інші приклади звичних операцій над масивами.

### Створення масиву

Цей приклад показує три способи створення нового масиву: спершу за допомогою [запису літерала масиву](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#zapys-literala-masyvu), далі за допомогою конструктора [`Array()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), і зрештою – за допомогою [`String.prototype.split()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split) – для створення масиву з рядка.

```js
// Масив 'fruits' створений за допомогою запису літерала масиву
const fruits = ["Яблуко", "Банан"];
console.log(fruits.length);
// 2

// Масив 'fruits2' створений за допомогою конструктора Array()
const fruits2 = new Array("Яблуко", "Банан");
console.log(fruits2.length);
// 2

// Масив 'fruits3' створений за допомогою String.prototype.split().
const fruits3 = "Яблуко, Банан".split(", ");
console.log(fruits3.length);
// 2
```

### Створення рядка з масиву

Цей приклад використовує метод [`join()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/join) для створення рядка з масиву `fruits`.

```js
const fruits = ["Яблуко", "Банан"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Яблуко, Банан"
```

### Доступ до елемента масиву за його індексом

Цей приклад показує, як отримати елемент масиву `fruits` на основі числа, що є індексом його позиції в масиві.

```js
const fruits = ["Яблуко", "Банан"];

// Індекс першого елемента масиву – завжди 0.
fruits[0]; // Яблуко

// Індекс другого елемента масиву – завжди 1.
fruits[1]; // Банан

// Індекс останнього елемента масиву – завжди на одиницю
// менший за довжину масиву.
fruits[fruits.length - 1]; // Банан

// Використання індексу, більшого за довжину масиву,
// повертає 'undefined'.
fruits[99]; // undefined
```

### Пошук у масиві індексу елемента

Цей приклад використовує метод [`indexOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) для пошуку позиції (індексу) рядка `"Банан"` у масиві `fruits`.

```js
const fruits = ["Яблуко", "Банан"];
console.log(fruits.indexOf("Банан"));
// 1
```

### Перевірка присутності в масиві певного елемента

Цей приклад показує два способи перевірки того, чи містить масив `fruits` значення `"Банан"` і значення `"Вишня"`: спершу за допомогою [`includes()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), а тоді – методом [`indexOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), із перевіркою, чи не рівний повернений індекс `-1`.

```js
const fruits = ["Яблуко", "Банан"];

fruits.includes("Банан"); // true
fruits.includes("Вишня"); // false

// Якщо indexOf() не повертає -1, то масив містить переданий елемент.
fruits.indexOf("Банан") !== -1; // true
fruits.indexOf("Вишня") !== -1; // false
```

### Додавання елемента в кінець масиву

Цей приклад використовує метод [`push()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/push), щоб докласти у масив `fruits` новий рядок.

```js
const fruits = ["Яблуко", "Банан"];
const newLength = fruits.push("Апельсин");
console.log(fruits);
// ["Яблуко", "Банан", "Апельсин"]
console.log(newLength);
// 3
```

### Усунення з масиву останнього елемента

Цей приклад використовує для усунення з масиву `fruits` останнього елемента метод [`pop()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/pop).

```js
const fruits = ["Яблуко", "Банан", "Апельсин"];
const removedItem = fruits.pop();
console.log(fruits);
// ["Яблуко", "Банан"]
console.log(removedItem);
// Апельсин
```

> **Примітка:** `pop()` може застосовуватись лише для усунення з масиву останнього елемента. Як прибрати з кінця масиву кілька елементів – дивіться наступний приклад.

### Усунення з кінця масиву кількох елементів

Цей приклад використовує для усунення з масиву `fruits` останніх 3 елементів метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

```js
const fruits = ["Яблуко", "Банан", "Полуниця", "Манго", "Вишня"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Яблуко", "Банан"]
console.log(removedItems);
// ["Полуниця", "Манго", "Вишня"]
```

### Урізання масиву до його перших N елементів

Цей приклад використовує для урізання масиву `fruits` до його перших 2 елементів метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

```js
const fruits = ["Яблуко", "Банан", "Полуниця", "Манго", "Вишня"];
const start = 2;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Яблуко", "Банан"]
console.log(removedItems);
// ["Полуниця", "Манго", "Вишня"]
```

### Усунення з масиву першого елемента

Цей приклад використовує для усунення з масиву `fruits` першого елемента метод [`shift()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).

```js
const fruits = ["Яблуко", "Банан"];
const removedItem = fruits.shift();
console.log(fruits);
// ["Банан"]
console.log(removedItem);
// Яблуко
```

> **Примітка:** `shift()` може використовуватись лише для усунення з масиву першого елемента. Як прибрати з початку масиву кілька елементів – дивіться наступний приклад.

### Усунення з початку масиву кількох елементів

Цей приклад використовує для усунення з масиву `fruits` перших 3 елементів метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

```js
const fruits = ["Яблуко", "Полуниця", "Вишня", "Банан", "Манго"];
const start = 0;
const deleteCount = 3;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Банан", "Манго"]
console.log(removedItems);
// ["Яблуко", "Полуниця", "Вишня"]
```

### Додання в масив нового першого елемента

Цей приклад використовує метод [`unshift()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), щоб додати (за індексом `0`) новий елемент у масив `fruits` – роблячи його новим першим елементом цього масиву.

```js
const fruits = ["Банан", "Манго"];
const newLength = fruits.unshift("Полуниця");
console.log(fruits);
// ["Полуниця", "Банан", "Манго"]
console.log(newLength);
// 3
```

### Усунення одного елемента за індексом

Цей приклад використовує для усунення із масиву `fruits` рядка `"Банан"` метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) – шляхом вказання індексу-позиції значення `"Банан"`.

```js
const fruits = ["Полуниця", "Банан", "Манго"];
const start = fruits.indexOf("Банан");
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Полуниця", "Манго"]
console.log(removedItems);
// ["Банан"]
```

### Усунення кількох елементів за індексом

Цей приклад використовує для усунення з масиву `fruits` рядків `"Банан"` і `"Полуниця"` метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) – шляхом вказання індексу-позиції значення `"Банан"`, а також кількості елементів до видалення.

```js
const fruits = ["Яблуко", "Банан", "Полуниця", "Манго"];
const start = 1;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Яблуко", "Манго"]
console.log(removedItems);
// ["Банан", "Полуниця"]
```

### Заміна кількох елементів масиву

Цей приклад використовує для заміни новими елементами останніх 2 елементів масиву `fruits` метод [`splice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

```js
const fruits = ["Яблуко", "Банан", "Полуниця"];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, "Манго", "Вишня");
console.log(fruits);
// ["Яблуко", "Манго", "Вишня"]
console.log(removedItems);
// ["Банан", "Полуниця"]
```

### Ітерація масиву

Цей приклад використовує для ітерації масиву `fruits` цикл [`for...of`](/uk/docs/Web/JavaScript/Reference/Statements/for...of), виводячи кожний елемент у консоль.

```js
const fruits = ["Яблуко", "Манго", "Вишня"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Яблуко
// Манго
// Вишня
```

Утім, `for...of` – лише один з багатьох способів ітерації будь-якого масиву; більше способів можна знайти у розділі [Цикли й ітерація](/uk/docs/Web/JavaScript/Guide/Loops_and_iteration), а також у документації методів [`every()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) і [`reduceRight()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) – ну і наступному прикладі, що використовує метод [`forEach()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

### Виклик функції над кожним елементом масиву

Цей приклад використовує метод [`forEach()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), щоб викликати функцію над кожним елементом масиву `fruits`; функція призводить до виведення у консоль кожного елемента поруч зі своїм індексом.

```js
const fruits = ["Яблуко", "Манго", "Вишня"];
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// Яблуко 0
// Манго 1
// Вишня 2
```

### Злиття кількох масивів докупи

Цей приклад використовує для злиття масиву `fruits` із масивом `moreFruits` метод [`concat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), щоб утворити новий масив `combinedFruits`. Зверніть увагу, що `fruits` і `moreFruits` залишаються незмінними.

```js
const fruits = ["Яблуко", "Банан", "Полуниця"];
const moreFruits = ["Манго", "Вишня"];
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
const fruits = ["Полуниця", "Манго"];

// Створення копії за допомогою синтаксису розгортання.
const fruitsCopy = [...fruits];
// ["Полуниця", "Манго"]

// Створення копії за допомогою метода from().
const fruitsCopy2 = Array.from(fruits);
// ["Полуниця", "Манго"]

// Створення копії за допомогою метода slice().
const fruitsCopy3 = fruits.slice();
// ["Полуниця", "Манго"]
```

Усі вбудовані операції копіювання масиву ([синтаксис розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) і [`Array.prototype.concat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) створюють [поверхневі копії](/uk/docs/Glossary/Shallow_copy). Якщо натомість потрібна [глибинна копія](/uk/docs/Glossary/Deep_copy) масиву, можна використати {{jsxref("JSON.stringify()")}} для перетворення масиву на рядок JSON, а тоді – {{jsxref("JSON.parse()")}} – для перетворення рядка на новий масив, цілком незалежний від початкового масиву.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

Також глибинні копії можна створювати за допомогою метода [`structuredClone()`](/uk/docs/Web/API/structuredClone), причому перевага такого підходу – [переносні об'єкти](/uk/docs/Web/API/Web_Workers_API/Transferable_objects) всередині джерела будуть _перенесені_ в нову копію, а не просто скопійовані.

Врешті решт, важливо розуміти, що присвоєння наявного масиву новій змінній не створює копій ані масиву, ані його елементів. Натомість нова змінна є лишень посиланням чи псевдонімом початкового масиву; тобто початкове ім'я масиву та нове ім'я змінної є лише двома іменами одного й того ж об'єкта (і, таким чином, завжди будуть вважатись [строго рівними](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness#stroha-rivnist-za-dopomohoiu-)). Отже, якщо внести будь-які зміни або у значення початкового масиву, або у значення нової змінної, то зміняться обидва:

```js
const fruits = ["Полуниця", "Манго"];
const fruitsAlias = fruits;
// 'fruits' і 'fruitsAlias' – один і той же об'єкт, строго рівні.
fruits === fruitsAlias; // true
// Будь-які зміни масиву 'fruits' також змінять 'fruitsAlias'.
fruits.unshift("Яблуко", "Банан");
console.log(fruits);
// ['Яблуко', 'Банан', 'Полуниця', 'Манго']
console.log(fruitsAlias);
// ['Яблуко', 'Банан', 'Полуниця', 'Манго']
```

### Створення двовимірного масиву

Створюється шахова дошка у вигляді двовимірного масиву рядків. Перший хід виконується копіюванням `'p'` із `board[6][4]` на `board[4][4]`. Стара позиція, на `[6][4]`, очищується.

```js
const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(`${board.join("\n")}\n\n`);

// Хід королівського пішака на 2 вперед
board[4][4] = board[6][4];
board[6][4] = " ";
console.log(board.join("\n"));
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

### Використання масиву для зведення у таблицю низки значень

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

### Створення масиву на основі результату збігу

Результат збігу між {{jsxref("RegExp")}} та рядком може утворити масив JavaScript, котрий має властивості та елементи, що надають інформацію про збіг. Такий масив повертають методи {{jsxref("RegExp.prototype.exec()")}} і {{jsxref("String.prototype.match()")}}.

Наприклад:

```js
// Збіг з однією d, після якої одна чи більше літера b, після якої одна d
// Запам'ятати b, з якими був збіг, та d опісля
// Зневажати регістр

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");
console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // [ "dbBd", "bB", "d" ]
```

Більше інформації про результат збігу – на сторінках {{jsxref("RegExp.prototype.exec()")}} і {{jsxref("String.prototype.match()")}}.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Колекції з індексами](/uk/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
