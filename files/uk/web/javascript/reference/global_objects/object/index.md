---
title: Object (Об'єкт)
slug: Web/JavaScript/Reference/Global_Objects/Object
page-type: javascript-class
browser-compat: javascript.builtins.Object
---

{{JSRef}}

Тип **`Object`** позначає один із [типів даних JavaScript](/uk/docs/Web/JavaScript/Data_structures). Його використовують для зберігання різноманітних асоціативних масивів та складніших сутностей. Об'єкти можна створювати за допомогою конструктора {{jsxref("Object/Object", "Object()")}} та [синтаксису об'єктного ініціалізатора / літерала](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Опис

Майже всі [об'єкти](/uk/docs/Web/JavaScript/Data_structures#obiekty) у JavaScript — це примірники `Object`; типовий об'єкт успадковує властивості (включно з методами) від `Object.prototype`, хоча ці властивості можна затінювати (явище, відоме як заміщення). Єдині об'єкти, котрі не успадковують від `Object.prototype` – ті, котрі мають [прототип `null`](#null-prototypni-obiekty) чи походять від інших об'єктів з прототипом `null`.

Зміни у прототипному об'єкті `Object` видимі **всім** об'єктам через ланцюжок прототипів, окрім тих випадків, коли змінені властивості й методи заміщені далі в прототипному ланцюжку. Це надає надзвичайно потужний, хоча й потенційно небезпечний, механізм для заміщення чи розширення поведінки об'єктів. Аби зробити його безпечнішим, `Object.prototype` є єдиним об'єктом в ядрі мови JavaScript, що має [незмінний прототип](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#opys): прототип `Object.prototype` завжди тотожний `null` і не може бути змінений.

### Властивості прототипу об'єкта

Слід уникати виклику будь-яких методів `Object.prototype`, особливо тих, котрі не створені поліморфними (тобто лише їхня початкова логіка має зміст, і жодний об'єкт-нащадок не зможе перевизначити їх у змістовний спосіб). Усі об'єкти, що походять від `Object.prototype`, можуть визначати власні властивості, що мають ідентичні імена, але з геть інакшою семантикою, ніж та, на котру ви очікуєте. Понад те, ці властивості не успадковуються [`null`-прототипними об'єктами](#null-prototypni-obiekty). Усі сучасні службові засоби JavaScript для роботи з об'єктами є [статичними](#statychni-metody). Конкретніше:

- [`valueOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) і [`toLocaleString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) існують заради поліморфності, і слід очікувати, що об'єкт визначає власну реалізацію з доцільною логікою, тож їх можна викликати як методи примірника. Проте `valueOf()` і `toString()` зазвичай неявно викликаються під час [перетворення типів](/uk/docs/Web/JavaScript/Data_structures#zvedennia-typiv), і їх немає потреби самотужки викликати у своєму коді.
- [`__defineGetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) і [`__lookupSetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) – нерекомендовані до використання. Натомість слід використовувати статичні альтернативи {{jsxref("Object.defineProperty()")}} і {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Властивість [`__proto__`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) нерекомендована до використання. Альтернативи {{jsxref("Object.getPrototypeOf()")}} і {{jsxref("Object.setPrototypeOf()")}} є статичними методами.
- Методи [`propertyIsEnumerable()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) і [`hasOwnProperty()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) можуть бути замінені статичними методами {{jsxref("Object.getOwnPropertyDescriptor()")}} і {{jsxref("Object.hasOwn()")}} відповідно.
- Метод [`isPrototypeOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) зазвичай може бути замінений [`instanceof`](/uk/docs/Web/JavaScript/Reference/Operators/instanceof), якщо перевіряється властивість конструктора `prototype`.

У випадку, коли семантично рівносильний статичний метод не існує, або коли є охота використати саме метод `Object.prototype`, слід безпосередньо викликати [`call()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/call) метода з `Object.prototype`, аби запобігти спрацюванню перевизначеної властивості об'єкта, що виробляє неочікувані результати.

```js
const obj = {
  foo: 1,
  // Не слід визначати такий метод на власному об'єкті,
  // але може бути неможливо цьому запобігти,
  // якщо об'єкт надходить зовні
  propertyIsEnumerable() {
    return false;
  },
};
obj.propertyIsEnumerable("foo"); // false; неочікуваний результат
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; очікуваний результат
```

### Видалення властивості з об'єкта

Не існує в `Object` такого методу, який би давав змогу видаляти його власні властивості (подібно до {{jsxref("Map.prototype.delete", "Map.prototype.delete()")}}). Для цього необхідно використовувати [оператор видалення (`delete`)](/uk/docs/Web/JavaScript/Reference/Operators/delete).

### null-прототипні об'єкти

Майже всі об'єкти в JavaScript врешті решт успадковують від `Object.prototype` (дивіться [успадкування і ланцюжок прототипів](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)). Проте `null`-прототипні об'єкти можна створити за допомогою [`Object.create(null)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/create) або [синтаксису ініціалізатора об'єкта](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer) з `__proto__:null` (примітка: ключ `__proto__` в об'єктному літералі відрізняється від нерекомендованої властивості [`Object.prototype.__proto__`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)). Також можна замінити прототип наявного об'єкта на `null` шляхом виклику [`Object.setPrototypeOf(obj, null)`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Об'єкт з прототипом `null` може поводитись у неочікуваний спосіб, тому що не успадковує жодних методів об'єкта від `Object.prototype`. Це особливо важливо при зневадженні, адже загальновживані службові функції для перетворення й перевірки властивостей об'єкта можуть породжувати помилки чи втрачати інформацію (особливо при використанні мовчазних пасток для помилок, що ігнорують помилки).

Наприклад, відсутність [`Object.prototype.toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) нерідко робить зневадження проблематичним:

```js
const normalObj = {}; // створення звичайного об'єкта
const nullProtoObj = Object.create(null); // створення об'єкта з прототипом "null"
console.log(`normalObj – це ${normalObj}`); // виводить "normalObj – це [object Object]"
console.log(`nullProtoObj – це ${nullProtoObj}`); // викидає помилку: Cannot convert object to primitive value
alert(normalObj); // виводить [object Object]
alert(nullProtoObj); // викидає помилку: Cannot convert object to primitive value
```

Інші методи також не матимуть успіху.

```js
normalObj.valueOf(); // виводить {}
nullProtoObj.valueOf(); // викидає помилку: nullProtoObj.valueOf is not a function
normalObj.hasOwnProperty("p"); // виводить "true"
nullProtoObj.hasOwnProperty("p"); // викидає помилку: nullProtoObj.hasOwnProperty is not a function
normalObj.constructor; // виводить "Object() { [native code] }"
nullProtoObj.constructor; // виводить "undefined"
```

Можна повернути `null`-прототипному об'єкту метод `toString` шляхом безпосереднього присвоєння:

```js
nullProtoObj.toString = Object.prototype.toString; // Оскільки новий об'єкт не має toString, додаймо оригінальну узагальнену реалізацію
console.log(nullProtoObj.toString()); // виводить "[object Object]"
console.log(`nullProtoObj – це ${nullProtoObj}`); // виводить "nullProtoObj – це [object Object]"
```

На відміну від звичайних об'єктів, котрі мають `toString()` на своєму прототипі, у цьому випадку `toString()` є власною властивістю `nullProtoObj`. Це пов'язано з тим, що `nullProtoObj` не має прототипу (має прототип `null`).

На практиці об'єкти з прототипом `null` зазвичай використовуються як дешевий замінник [відображень](/uk/docs/Web/JavaScript/Reference/Global_Objects/Map). Присутність властивостей `Object.prototype` призводить до певних проблем:

```js
const ages = { alice: 18, bob: 27 };
function hasPerson(name) {
  return name in ages;
}
function getAge(name) {
  return ages[name];
}
hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]
```

Використання `null`-прототипного об'єкта усуває цю небезпеку, не приносячи забагато складності до функцій `hasPerson` і `getAge`:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});
hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

У такому випадку методи слід додавати обережно, адже вони можуть конфліктувати з іншими парами ключ-значення, збереженими як дані.

Створення об'єктів, що не успадковують від `Object.prototype`, також запобігає атакам забруднення прототипу. Якщо зловмисний сценарій додасть властивість до `Object.prototype`, то вона буде доступна на кожному об'єкті програми, окрім тих, котрі мають прототип `null`.

```js
const user = {};
// Зловмисний сценарій:
Object.prototype.authenticated = true;
// Неочікувано дозволяє пройти далі неавторизованому користувачеві
if (user.authenticated) {
  // доступ до конфіденційних даних
}
```

JavaScript також має вбудовані API, що виробляють `null`-прототипні об'єкти, особливо ті, що використовують об'єкти як імпровізовані колекції ключ-значення. Наприклад:

- Повернене значення {{jsxref("Array.prototype.group()")}}
- Властивості `groups` та `indices.groups` результату {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[@@unscopables]`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables) (усі об'єкти `@@unscopables` повинні мати прототип `null`)
- [`import.meta`](/uk/docs/Web/JavaScript/Reference/Operators/import.meta)
- Об'єкти простору імен модулів, отримані за допомогою [`import * as ns from "module";`](/uk/docs/Web/JavaScript/Reference/Statements/import#import-prostoru-imen) або [`import()`](/uk/docs/Web/JavaScript/Reference/Operators/import)

Термін "`null`-прототипний об'єкт" також включає будь-які об'єкти, що не містять у своєму ланцюжку прототипів `Object.prototype`. При використанні класів такі об'єкти можуть бути створені за допомогою [`extends null`](/uk/docs/Web/JavaScript/Reference/Classes/extends#rozshyrennia-null).

### Зведення до об'єкта

Чимало вбудованих операцій, котрі очікують отримати об'єкти, спершу зводять свої аргументи до об'єктів. [Ця операція](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) може бути підсумована так:

- Об'єкти повертаються як є.
- [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined) і [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) викидають {{jsxref("TypeError")}}.
- Примітиви {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}} загортаються у відповідні собі об'єктні обгортки.

Найкращий спосіб досягнути в JavaScript такого самого ефекту – конструктор [`Object()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/Object). `Object(x)` перетворює `x` на об'єкт, а для `undefined` та `null` це повертає простий об'єкт, а не викидає {{jsxref("TypeError")}}.

Серед місць, що використовують зведення до об'єкта:

- Параметр циклу [`for...in`](/uk/docs/Web/JavaScript/Reference/Statements/for...in) `object`.
- Значення `this` методів {{jsxref("Array")}}.
- Параметри методів `Object`, як то {{jsxref("Object.keys()")}}.
- Автоматичне запаковування, коли відбувається звертання до властивості на примітивному значенні, адже примітиви не мають властивостей.
- Значення [`this`](/uk/docs/Web/JavaScript/Reference/Operators/this) при виклику несуворої функції. Примітиви запаковуються, а `null` і `undefined` замінюються [глобальним об'єктом](/uk/docs/Glossary/Global_object).

На відміну від [перетворення на примітив](/uk/docs/Web/JavaScript/Data_structures#zvedennia-do-prymityva), зведення до об'єкта не можна жодним чином перехопити, адже воно не викличе жодного самописного коду, як то методів `toString` чи `valueOf`.

## Конструктор

- {{jsxref("Object/Object", "Object()")}}
  - : Перетворює передане значення на об'єкт.

## Статичні методи

- {{jsxref("Object.assign()")}} (присвоїти)
  - : Копіює значення всіх власних перелічуваних властивостей з одного чи більше об'єктів-донорів у цільовий об'єкт.
- {{jsxref("Object.create()")}} (створити)
  - : Створює новий об'єкт зі вказаним прототипним об'єктом і властивостями.
- {{jsxref("Object.defineProperties()")}} (означити властивості)
  - : Додає до об'єкта названі властивості, описані переданими дескрипторами.
- {{jsxref("Object.defineProperty()")}} (означити властивість)
  - : Додає до об'єкта названу властивість, описану переданим дескриптором.
- {{jsxref("Object.entries()")}} (записи)
  - : Повертає масив, що містить всі пари `[ключ, значення]` **власних** перелічуваних властивостей (з рядковими ключами) переданого об'єкта.
- {{jsxref("Object.freeze()")}} (заморозити)
  - : Заморожує об'єкт. Інший код не може видаляти або змінювати його властивості.
- {{jsxref("Object.fromEntries()")}} (із записів)
  - : Створює новий об'єкт на основі переданого ітератора пар `[ключ, значення]`. (Це — обернений метод до {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}} (взяти дескриптор власної властивості)
  - : Повертає дескриптор вказаної властивості об'єкта.
- {{jsxref("Object.getOwnPropertyDescriptors()")}} (взяти дескриптори власних властивостей)
  - : Повертає об'єкт, що містить дескриптори всіх власних властивостей переданого об'єкта.
- {{jsxref("Object.getOwnPropertyNames()")}} (взяти імена власних властивостей)
  - : Повертає масив, що містить імена всіх **власних** перелічуваних і неперелічуваних властивостей переданого об'єкта.
- {{jsxref("Object.getOwnPropertySymbols()")}} (взяти символи власних властивостей)
  - : Повертає масив усіх символьних властивостей, знайдених безпосередньо у переданому об'єкті.
- {{jsxref("Object.getPrototypeOf()")}} (взяти прототип від)
  - : Повертає прототип (внутрішню властивість `[[Prototype]]`) вказаного об'єкта.
- {{jsxref("Object.hasOwn()")}}
  - : Повертає `true`, якщо заданий об'єкт має вказану властивість як свою _власну_ властивість, або `false`, якщо властивість є успадкованою або не існує.
- {{jsxref("Object.is()")}} (є)
  - : Порівнює два значення і визначає, чи вони є одним значенням. Прирівнює всі значення `NaN` між собою (що відрізняється і від алгоритму `IsLooselyEqual`, що використовується [`==`](/uk/docs/Web/JavaScript/Reference/Operators/Equality), і від `IsStrictlyEqual`, що використовується [`===`](/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality)).
- {{jsxref("Object.isExtensible()")}} (є розширюваним)
  - : Визначає, чи можна розширювати переданий об'єкт.
- {{jsxref("Object.isFrozen()")}} (є замороженим)
  - : Визначає, чи переданий об'єкт є замороженим.
- {{jsxref("Object.isSealed()")}} (є запечатаним)
  - : Визначає, чи переданий об'єкт було запечатано.
- {{jsxref("Object.keys()")}} (ключі)
  - : Повертає масив, що містить імена всіх **власних** перелічуваних рядкових властивостей переданого об'єкта.
- {{jsxref("Object.preventExtensions()")}} (перешкодити розширенню)
  - : Перешкоджає розширенню об'єкта.
- {{jsxref("Object.seal()")}} (запечатати)
  - : Перешкоджає видаленню властивостей об'єкта іншим кодом.
- {{jsxref("Object.setPrototypeOf()")}} (встановити прототип для)
  - : Встановлює прототип об'єкта (його внутрішню властивість `[[Prototype]]`).
- {{jsxref("Object.values()")}} (значення)
  - : Повертає масив, що містить значення, які відповідають всім **власним** перелічуваним рядковим властивостям переданого об'єкта.

## Властивості примірника

Ці властивості означені на `Object.prototype` і є спільними для всіх примірників `Object`.

- [`Object.prototype.__proto__`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{Deprecated_Inline}}
  - : Вказує на об'єкт, який було використано як прототип під час створення примірника цього об'єкта.
- {{jsxref("Object.prototype.constructor")}} (конструктор)
  - : Функція-конструктор, що створила об'єкт-примірник. Для простих примірників `Object` початковим значенням є конструктор {{jsxref("Object/Object", "Object")}}. Кожний з примірників інших конструкторів успадковує властивість `constructor` від відповідного об'єкта `Constructor.prototype`.

## Методи примірника

- [`Object.prototype.__defineGetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) (означити гетер) {{Deprecated_Inline}}
  - : Пов'язує функцію з властивістю так, що під час спроби доступитися до властивості вона викликає цю функцію та повертає її результат.
- [`Object.prototype.__defineSetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) (означити сетер) {{Deprecated_Inline}}
  - : Пов'язує функцію з властивістю так, що під час спроби встановлення її значення викликається ця функція, яка і змінює властивість.
- [`Object.prototype.__lookupGetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) (шукати гетер) {{Deprecated_Inline}}
  - : Повертає функцію, прив'язану до вказаної властивості як гетер.
- [`Object.prototype.__lookupSetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) (шукати сетер) {{Deprecated_Inline}}
  - : Повертає функцію, прив'язану до вказаної властивості як сетер.
- {{jsxref("Object.prototype.hasOwnProperty()")}} (має власну властивість)
  - : Повертає булеве значення, яке вказує на те, що об'єкт містить вказану властивість прямо в собі, а не успадковує її через прототипний ланцюжок.
- {{jsxref("Object.prototype.isPrototypeOf()")}} (є прототипом для)
  - : Повертає булеве значення, яке вказує на те, що об'єкт, на якому викликався цей метод, присутній у прототипному ланцюжку переданого об'єкта.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}} (властивість є перелічуваною)
  - : Повертає булеве значення, яке вказує на те, чи є задана властивість [перелічуваною власною](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) властивістю об'єкта.
- {{jsxref("Object.prototype.toLocaleString()")}} (до локалізованого рядка)
  - : Викликає {{jsxref("Object/toString", "toString()")}}.
- {{jsxref("Object.prototype.toString()")}} (до рядка)
  - : Повертає значення об'єкта, подане у формі рядка.
- {{jsxref("Object.prototype.valueOf()")}} (значення від)
  - : Повертає примітивне значення вказаного об'єкта.

## Приклади

### Конструювання порожніх об'єктів

У наступному прикладі порожні об'єкти створюються за допомогою ключового слова `new` та різних аргументів:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Застосування `Object` для створення булевих об'єктів

В наступному прикладі у змінній `o` зберігається {{jsxref("Boolean", "булевий")}} об'єкт:

```js
// еквіваленто виразу const o = new Boolean(true)
const o = new Object(true);
```

```js
// еквіваленто виразу const o = new Boolean(false)
const o = new Object(Boolean());
```

### Прототипи об'єктів

Під час зміни поведінки вже наявних методів `Object.prototype` слід зважити можливість внесення ізольованого коду перед або після чинної логіки. Наприклад, наведений нижче (нетестований) код за умовою виконає користувацьку логіку до того, як спрацює вбудована логіка (або виконається інше розширення).

В разі внесення змін у прототипи за допомогою таких причеп – слід передавати `this` та аргументи (стан виклику) до чинної логіки шляхом виклику `apply()` на функції. Цей патерн можна використовувати на будь-яких прототипах, як от `Node.prototype`, `Function.prototype`, та ін.

```js
const current = Object.prototype.valueOf;

// Оскільки властивість "-prop-value" є наскрізною, і не завжди присутня
// в тому самому прототипному ланцюжку, виникає потреба змінити Object.prototype:
Object.prototype.valueOf = function (...args) {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  } else {
    // Це не схоже на наш об'єкт, тому повернімося до усталеної поведінки
    // шляхом відтворення діючої поведінки, наскільки це можливо.
    // Функція "apply" поводить себе подібно до "super" у деяких інших мовах.
    // І хоча "valueOf()" не приймає аргументів, їх можуть приймати якісь інші причепи.
    return current.apply(this, args);
  }
};
```

> **Застереження:** Змінювати властивість `prototype` будь-якого вбудованого конструктора вважається недоброю практикою і є ризиком щодо сумісності.

Більше про прототипи можна прочитати в [Успадкуванні й ланцюжку прототипів](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Ініціалізатор об'єкта](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer)
