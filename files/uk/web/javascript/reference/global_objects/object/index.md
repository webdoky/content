---
title: Object (Об'єкт)
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Class
  - JavaScript
  - Object
browser-compat: javascript.builtins.Object
---
{{JSRef}}

Клас **`Object`** позначає один із [типів даних JavaScript](/uk/docs/Web/JavaScript/Data_structures). Його використовують для зберігання різноманітних асоціативних масивів та складніших сутностей. Об'єкти можна створювати за допомогою конструктора {{jsxref("Object/Object", "Object()")}} та [синтаксису об'єктного ініціалізатора / літерала](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Опис

Майже всі об'єкти у JavaScript — це екземпляри {{jsxref("Object")}}; типовий об'єкт успадковує властивості (включно з методами) від `Object.prototype`, хоча ці властивості можна затінювати (явище, відоме як заміщення). Проте, можна навмисно створити такий `Object`, для якого це буде не так (наприклад, за допомогою {{jsxref("Object.create", "Object.create(null)")}}). Або ж можна змінити об'єкт таким чином, що ця властивість для нього не буде справджуватись (наприклад, за допомогою {{jsxref("Object.setPrototypeOf")}}).

Зміни у прототипному об'єкті `Object` видимі **всім** об'єктам через ланцюжок прототипів, окрім тих випадків, коли змінені властивості й методи заміщені далі в прототипному ланцюжку. Це надає надзвичайно потужний, хоча й потенційно небезпечний, механізм для заміщення чи розширення поведінки об'єктів.

Конструктор `Object` створює об'єктну обгортку над переданим значенням.

- Якщо передане значення дорівнює {{jsxref("null")}} чи {{jsxref("undefined")}}, буде повернено порожній об'єкт.
- Якщо передане значення уже є об'єктом, буде повернено це значення.
- В інших випадках – він поверне об'єкт, тип якого відповідає переданому значенню.

Під час викликання поза контекстом конструктора `Object` поводить себе ідентично до `new Object()`.

Дивіться також [синтаксис об'єктного ініціалізатора / літерала](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer).

### Видалення властивості з об'єкта

Не існує в `Object` такого методу, який би давав змогу видаляти його власні властивості (подібно до {{jsxref("Map.prototype.delete", "Map.prototype.delete()")}}). Для цього необхідно використовувати [оператор видалення (`delete`)](/uk/docs/Web/JavaScript/Reference/Operators/delete).

## Конструктор

- {{jsxref("Object/Object", "Object()")}}
  - : Створює новий об'єкт типу `Object`. Є обгорткою для переданого значення.

## Статичні методи

- {{jsxref("Object.assign","Object.assign()")}}
  - : Копіює значення всіх власних перелічуваних властивостей з одного чи більше об'єктів-донорів у цільовий об'єкт.
- {{jsxref("Object.create","Object.create()")}}
  - : Створює новий об'єкт зі вказаним прототипним об'єктом і властивостями.
- {{jsxref("Object.defineProperty","Object.defineProperty()")}}
  - : Додає до об'єкта названу властивість, описану переданим дескриптором.
- {{jsxref("Object.defineProperties","Object.defineProperties()")}}
  - : Додає до об'єкта названі властивості, описані переданими дескрипторами.
- {{jsxref("Object.entries","Object.entries()")}}
  - : Повертає масив, що містить всі пари `[ключ, значення]` **власних** перелічуваних властивостей (з рядковими ключами) переданого об'єкта.
- {{jsxref("Object.freeze","Object.freeze()")}}
  - : Заморожує об'єкт. Інший код не може видаляти або змінювати його властивості.
- {{jsxref("Object.fromEntries","Object.fromEntries()")}}
  - : Створює новий об'єкт на основі переданого ітератора пар `[ключ, значення]`. (Це — обернений метод до {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor","Object.getOwnPropertyDescriptor()")}}
  - : Повертає дескриптор вказаної властивості об'єкта.
- {{jsxref("Object.getOwnPropertyDescriptors","Object.getOwnPropertyDescriptors()")}}
  - : Повертає об'єкт, що містить дескриптори всіх власних властивостей переданого об'єкта.
- {{jsxref("Object.getOwnPropertyNames","Object.getOwnPropertyNames()")}}
  - : Повертає масив, що містить імена всіх **власних** перелічуваних і неперелічуваних властивостей переданого об'єкта.
- {{jsxref("Object.getOwnPropertySymbols","Object.getOwnPropertySymbols()")}}
  - : Повертає масив усіх символьних властивостей, знайдених безпосередньо у переданому об'єкті.
- {{jsxref("Object.getPrototypeOf","Object.getPrototypeOf()")}}
  - : Повертає прототип (внутрішню властивість `[[Prototype]]`) вказаного об'єкта.
- {{jsxref("Object.is","Object.is()")}}
  - : Порівнює два значення і визначає, чи вони є одним значенням. Прирівнює всі значення `NaN` між собою (що відрізняється і від "порівняння на абстрактну рівність", і від "порівняння на точну рівність").
- {{jsxref("Object.isExtensible","Object.isExtensible()")}}
  - : Визначає, чи можна розширювати переданий об'єкт.
- {{jsxref("Object.isFrozen","Object.isFrozen()")}}
  - : Визначає, чи переданий об'єкт є замороженим.
- {{jsxref("Object.isSealed","Object.isSealed()")}}
  - : Визначає, чи переданий об'єкт було запечатано.
- {{jsxref("Object.keys","Object.keys()")}}
  - : Повертає масив, що містить імена всіх **власних** перелічуваних рядкових властивостей переданого об'єкта.
- {{jsxref("Object.preventExtensions","Object.preventExtensions()")}}
  - : Перешкоджає розширенню об'єкта.
- {{jsxref("Object.seal","Object.seal()")}}
  - : Перешкоджає видаленню властивостей об'єкта іншим кодом.
- {{jsxref("Object.setPrototypeOf","Object.setPrototypeOf()")}}
  - : Встановлює прототип об'єкта (його внутрішню властивість `[[Prototype]]`).
- {{jsxref("Object.values","Object.values()")}}
  - : Повертає масив, що містить значення, які відповідають всім **власним** перелічуваним рядковим властивостям переданого об'єкта.

## Властивості екземпляру

- {{jsxref("Object.prototype.constructor")}}
  - : Вказує на функцію, яка створює прототип об'єкта.
- {{jsxref("Object/proto","Object.prototype.__proto__")}}
  - : Вказує на об'єкт, який було використано прототипом під час створення екземпляра цього об'єкта.

## Методи екземпляру

- {{jsxref("Object.prototype.__defineGetter__()")}}
  - : Пов'язує функцію з властивістю так, що під час спроби доступитися до властивості вона викликає цю функцію та повертає її результат.
- {{jsxref("Object.prototype.__defineSetter__()")}}
  - : Пов'язує функцію з властивістю так, що під час спроби встановлення її значення викликається ця функція, яка і змінює властивість.
- {{jsxref("Object.prototype.__lookupGetter__()")}}
  - : Повертає функцію, яку було асоційовано зі вказаною властивістю методом {{jsxref("Object.prototype.__defineGetter__()", "__defineGetter__()")}}.
- {{jsxref("Object.prototype.__lookupSetter__()")}}
  - : Повертає функцію, яку було асоційовано зі вказаною властивістю методом {{jsxref("Object.prototype.__defineSetter__()", "__defineSetter__()")}}.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Повертає булеве значення, яке вказує на те, що об'єкт містить вказану властивість прямо в собі, а не успадковує її через прототипний ланцюжок.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Повертає булеве значення, яке вказує на те, що об'єкт, на якому викликався цей метод, присутній у прототипному ланцюжку переданого об'єкта.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Повертає булеве значення, яке вказує на те, що було встановлено внутрішній [ECMAScript-атрибут \[\[Enumerable\]\]](/uk/docs/Web/JavaScript/Data_structures#properties).
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Викликає {{jsxref("Object.toString", "toString()")}}.
- {{jsxref("Object.prototype.toString()")}}
  - : Повертає значення об'єкта, подане у формі рядка.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Повертає примітивне значення вказаного об'єкта.

## Приклади

### Застосування `Object` з типами `undefined` і `null`

В наступному прикладі у змінній `o` зберігається порожній об'єкт `Object`:

```js
let o = new Object()
```

```js
let o = new Object(undefined)
```

```js
let o = new Object(null)
```

### Застосування `Object` для створення об'єктів типу `Boolean`

В наступному прикладі у змінній `o` зберігається {{jsxref("Boolean", "булевий")}} об'єкт:

```js
// еквіваленто виразу o = new Boolean(true)
let o = new Object(true)
```

```js
// еквіваленто виразу o = new Boolean(false)
let o = new Object(Boolean())
```

### Прототипи об'єктів

Під час зміни поведінки вже наявних методів `Object.prototype` слід зважити можливість внесення ізольованого коду перед або після чинної логіки. Наприклад, наведений нижче (нетестований) код за умовою виконає користувацьку логіку до того, як спрацює вбудована логіка (або виконається інше розширення).

На момент виклику функції аргументи виклику знаходяться у масивоподібній "змінній" [arguments](/uk/docs/Web/JavaScript/Reference/Functions/arguments). Наприклад, у виклику `myFn(a, b, c)` `arguments` всередині тіла функції `myFn` міститиме 3 елементи відповідно до `(a, b, c)`.

В разі внесення змін у прототипи за допомогою таких причеп – слід передавати `this` та аргументи (стан виклику) до чинної логіки шляхом виклику `apply()` на функції. Цей патерн можна використовувати на будь-яких прототипах, як от `Node.prototype`, `Function.prototype`, та ін.

```js
const current = Object.prototype.valueOf;

// Оскільки властивість "-prop-value" є наскрізною, і не завжди присутня
// в тому самому прототипному ланцюжку, виникає потреба змінити Object.prototype:
Object.prototype.valueOf = function() {
  if (this.hasOwnProperty('-prop-value')) {
    return this['-prop-value'];
  } else {
    // Це не схоже на наш об'єкт, тому повернімося до усталеної поведінки
    // шляхом відтворення діючої поведінки, наскільки це можливо.
    // Функція "apply" поводить себе подібно до "super" у деяких інших мовах.
    // І хоча "valueOf()" не приймає аргументів, їх можуть приймати якісь інші причепи.
    return current.apply(this, arguments);
  }
}
```

Оскільки JavaScript не має повного аналога підкласових об'єктів, прототип є корисним обхідним способом створити об'єкт "базового класу" певних функцій, що працюють як об'єкти. Наприклад:

```js
const Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Привіт, я — ' + this.name);
  }
};

const Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //Якщо явно не встановити Employee значенням конструктора Object.prototype.constructor,
                                           //він отримає значення prototype.constructor об'єкта Person (предка).
                                           //Щоб уникнути цього, ми явно встановлюємо в prototype.constructor значення Employee (нащадок).

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Привіт, я — ' + this.name + ', ' + this.title);
  }
};

const Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //Якщо явно не встановити Customer значенням конструктора Object.prototype.constructor,
                                           //він отримає значення prototype.constructor об'єкта Person (предка).
                                           //Щоб уникнути цього, ми явно встановлюємо в prototype.constructor значення Customer (нащадок).

const Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; //Якщо явно не встановити Mime значенням конструктора Object.prototype.constructor,
                                   //він отримає значення prototype.constructor об'єкта Person (предка).
                                   //Щоб уникнути цього, ми явно встановлюємо в prototype.constructor значення Mime (нащадок).

const bob = new Employee('Боб', 'будівельник');
const joe = new Customer('Джо');
const rg = new Employee('Ред Грін', 'різнороб');
const mike = new Customer('Майк');
const mime = new Mime('Мім');

bob.greet();
// Привіт, я — Боб, будівельник

joe.greet();
// Привіт, я — Джо

rg.greet();
// Привіт, я — Ред Грін, різнороб

mike.greet();
// Привіт, я — Майк

mime.greet();
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Ініціалізатор об'єкту](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer)
