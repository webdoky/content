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

Тип **`Object`** позначає один із [типів даних JavaScript](/uk/docs/Web/JavaScript/Data_structures). Його використовують для зберігання різноманітних асоціативних масивів та складніших сутностей. Об'єкти можна створювати за допомогою конструктора {{jsxref("Object/Object", "Object()")}} та [синтаксису об'єктного ініціалізатора / літерала](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Опис

Майже всі об'єкти у JavaScript — це екземпляри {{jsxref("Object")}}; типовий об'єкт успадковує властивості (включно з методами) від `Object.prototype`, хоча ці властивості можна затінювати (явище, відоме як заміщення). Проте, можна навмисно створити такий `Object`, для якого це буде не так (наприклад, за допомогою {{jsxref("Object.create", "Object.create(null)")}}). Або ж можна змінити об'єкт таким чином, що ця властивість для нього не буде справджуватись (наприклад, за допомогою {{jsxref("Object.setPrototypeOf")}}).

Зміни у прототипному об'єкті `Object` видимі **всім** об'єктам через ланцюжок прототипів, окрім тих випадків, коли змінені властивості й методи заміщені далі в прототипному ланцюжку. Це надає надзвичайно потужний, хоча й потенційно небезпечний, механізм для заміщення чи розширення поведінки об'єктів.

Поведінка конструктора `Object` залежить від типу переданого значення.

- Якщо передане значення дорівнює [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) чи {{jsxref("undefined")}}, буде повернено порожній об'єкт.
- Якщо передане значення уже є об'єктом, буде повернено це значення.
- В інших випадках – він поверне об'єкт, тип якого відповідає переданому значенню.

Під час викликання поза контекстом конструктора `Object` поводить себе ідентично до `new Object()`.

Дивіться також [синтаксис об'єктного ініціалізатора / літерала](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer).

### Видалення властивості з об'єкта

Не існує в `Object` такого методу, який би давав змогу видаляти його власні властивості (подібно до {{jsxref("Map.prototype.delete", "Map.prototype.delete()")}}). Для цього необхідно використовувати [оператор видалення (`delete`)](/uk/docs/Web/JavaScript/Reference/Operators/delete).

## Конструктор

- {{jsxref("Object/Object", "Object()")}}
  - : Перетворює передане значення на об'єкт.

## Статичні методи

- {{jsxref("Object.assign","Object.assign()")}} (присвоїти)
  - : Копіює значення всіх власних перелічуваних властивостей з одного чи більше об'єктів-донорів у цільовий об'єкт.
- {{jsxref("Object.create","Object.create()")}} (створити)
  - : Створює новий об'єкт зі вказаним прототипним об'єктом і властивостями.
- {{jsxref("Object.defineProperty","Object.defineProperty()")}} (означити властивість)
  - : Додає до об'єкта названу властивість, описану переданим дескриптором.
- {{jsxref("Object.defineProperties","Object.defineProperties()")}} (означити властивості)
  - : Додає до об'єкта названі властивості, описані переданими дескрипторами.
- {{jsxref("Object.entries","Object.entries()")}} (записи)
  - : Повертає масив, що містить всі пари `[ключ, значення]` **власних** перелічуваних властивостей (з рядковими ключами) переданого об'єкта.
- {{jsxref("Object.freeze","Object.freeze()")}} (заморозити)
  - : Заморожує об'єкт. Інший код не може видаляти або змінювати його властивості.
- {{jsxref("Object.fromEntries","Object.fromEntries()")}} (із записів)
  - : Створює новий об'єкт на основі переданого ітератора пар `[ключ, значення]`. (Це — обернений метод до {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor","Object.getOwnPropertyDescriptor()")}} (взяти дескриптор власної властивості)
  - : Повертає дескриптор вказаної властивості об'єкта.
- {{jsxref("Object.getOwnPropertyDescriptors","Object.getOwnPropertyDescriptors()")}} (взяти дескриптори власних властивостей)
  - : Повертає об'єкт, що містить дескриптори всіх власних властивостей переданого об'єкта.
- {{jsxref("Object.getOwnPropertyNames","Object.getOwnPropertyNames()")}} (взяти імена власних властивостей)
  - : Повертає масив, що містить імена всіх **власних** перелічуваних і неперелічуваних властивостей переданого об'єкта.
- {{jsxref("Object.getOwnPropertySymbols","Object.getOwnPropertySymbols()")}} (взяти символи власних властивостей)
  - : Повертає масив усіх символьних властивостей, знайдених безпосередньо у переданому об'єкті.
- {{jsxref("Object.getPrototypeOf","Object.getPrototypeOf()")}} (взяти прототип від)
  - : Повертає прототип (внутрішню властивість `[[Prototype]]`) вказаного об'єкта.
- {{jsxref("Object.is","Object.is()")}} (являється)
  - : Порівнює два значення і визначає, чи вони є одним значенням. Прирівнює всі значення `NaN` між собою (що відрізняється і від алгоритму `IsLooselyEqual`, що використовується [`==`](/uk/docs/Web/JavaScript/Reference/Operators/Equality), і від `IsStrictlyEqual`, що використовується [`===`](/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality)).
- {{jsxref("Object.isExtensible","Object.isExtensible()")}} (є розширюваним)
  - : Визначає, чи можна розширювати переданий об'єкт.
- {{jsxref("Object.isFrozen","Object.isFrozen()")}} (є замороженим)
  - : Визначає, чи переданий об'єкт є замороженим.
- {{jsxref("Object.isSealed","Object.isSealed()")}} (є запечатаним)
  - : Визначає, чи переданий об'єкт було запечатано.
- {{jsxref("Object.keys","Object.keys()")}} (ключі)
  - : Повертає масив, що містить імена всіх **власних** перелічуваних рядкових властивостей переданого об'єкта.
- {{jsxref("Object.preventExtensions","Object.preventExtensions()")}} (перешкодити розширенню)
  - : Перешкоджає розширенню об'єкта.
- {{jsxref("Object.seal","Object.seal()")}} (запечатати)
  - : Перешкоджає видаленню властивостей об'єкта іншим кодом.
- {{jsxref("Object.setPrototypeOf","Object.setPrototypeOf()")}} (встановити прототип для)
  - : Встановлює прототип об'єкта (його внутрішню властивість `[[Prototype]]`).
- {{jsxref("Object.values","Object.values()")}} (значення)
  - : Повертає масив, що містить значення, які відповідають всім **власним** перелічуваним рядковим властивостям переданого об'єкта.

## Властивості примірника

- {{jsxref("Object.prototype.constructor")}} (конструктор)
  - : Вказує на функцію, яка створює прототип об'єкта.
- [`Object.prototype.__proto__`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{Deprecated_Inline}}
  - : Вказує на об'єкт, який було використано як прототип під час створення примірника цього об'єкта.

## Методи примірника

- [`Object.prototype.__defineGetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) (означити геттер)
  - : Пов'язує функцію з властивістю так, що під час спроби доступитися до властивості вона викликає цю функцію та повертає її результат.
- [`Object.prototype.__defineSetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) (означити сеттер)
  - : Пов'язує функцію з властивістю так, що під час спроби встановлення її значення викликається ця функція, яка і змінює властивість.
- [`Object.prototype.__lookupGetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) (шукати геттер)
  - : Повертає функцію, яку було асоційовано зі вказаною властивістю методом [`Object.prototype.__defineGetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__).
- [`Object.prototype.__lookupSetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) (шукати сеттер)
  - : Повертає функцію, яку було асоційовано зі вказаною властивістю методом [`Object.prototype.__defineSetter__()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__).
- {{jsxref("Object.prototype.hasOwnProperty()")}} (має власну властивість)
  - : Повертає булеве значення, яке вказує на те, що об'єкт містить вказану властивість прямо в собі, а не успадковує її через прототипний ланцюжок.
- {{jsxref("Object.prototype.isPrototypeOf()")}} (є прототипом для)
  - : Повертає булеве значення, яке вказує на те, що об'єкт, на якому викликався цей метод, присутній у прототипному ланцюжку переданого об'єкта.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}} (властивість є перелічуваною)
  - : Повертає булеве значення, яке вказує на те, що було встановлено внутрішній [ECMAScript-атрибут \[\[Enumerable\]\]](/uk/docs/Web/JavaScript/Data_structures#vlastyvosti).
- {{jsxref("Object.prototype.toLocaleString()")}} (до локалізованого рядка)
  - : Викликає {{jsxref("Object/toString", "toString()")}}.
- {{jsxref("Object.prototype.toString()")}} (до рядка)
  - : Повертає значення об'єкта, подане у формі рядка.
- {{jsxref("Object.prototype.valueOf()")}} (значення від)
  - : Повертає примітивне значення вказаного об'єкта.

## Приклади

### Конструювання порожніх об'єктів

В наступному прикладі у змінній `o` зберігається порожній об'єкт `Object`:

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
  if (Object.hasOwn(this, '-prop-value')) {
    return this['-prop-value'];
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
