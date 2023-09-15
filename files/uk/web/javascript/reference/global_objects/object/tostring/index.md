---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Object.toString
---

{{JSRef}}

Метод **`toString()`** (до рядка) примірників {{jsxref("Object")}} повертає рядкове представлення свого об'єкта. Призначення цього методу — бути заміщеним в похідних об'єктах, для реалізації нетипової логіки [перетворення типів](/uk/docs/Web/JavaScript/Data_structures#zvedennia-typiv).

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## Синтаксис

```js-nolint
toString()
```

### Параметри

Усталено метод `toString()` не приймає аргументів. Проте об'єкти, які успадковують від `Object`, можуть заміщати його власними реалізаціями, що приймають аргументи. До прикладу, методи [`Number.prototype.toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) і [`BigInt.prototype.toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) приймають необов'язковий параметр `radix`.

### Повернене значення

Рядок, який представляє даний об'єкт.

## Опис

JavaScript викликає метод `toString` для [перетворення об'єкта на примітивне значення](/uk/docs/Web/JavaScript/Data_structures#zvedennia-typiv). Необхідність звертатися до методу `toString` власноруч виникає рідко; JavaScript автоматично звертається до нього, коли в місці, де очікується примітивне значення, зустрічається об'єкт.

Цей метод пріоритетно викликається під час [зведення до рядка](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka), проте операції [зведення до рядка](/uk/docs/Web/JavaScript/Data_structures#zvedennia-do-chyslovoho) та [зведення до примітива](/uk/docs/Web/JavaScript/Data_structures#zvedennia-do-prymityva) в першу чергу викликають `valueOf()`. Однак, оскільки базовий метод [`valueOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) повертає об'єкт, зазвичай в кінці викликається `toString()`, за умови, що сам об'єкт не заміщує `valueOf()`. Наприклад, вираз `+[1]` поверне `1`, оскільки його метод [`toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) повертає рядок `"1"`, який далі перетворюється на число.

Всі об'єкти, які успадковують від `Object.prototype` (тобто всі, за винятком [об'єктів з прототипом `null`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty)) також успадковують і метод `toString()`. При створенні власного об'єкта можна замістити `toString()` так, щоб викликався власний метод — таким чином цей об'єкт можливо буде перетворити на рядкове значення. Інший варіант — додати метод [`@@toPrimitive`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), який дає змогу іще краще керувати процесом перетворення, і який завжди матиме пріоритет над `valueOf` чи `toString`, для будь-якого виду перетворення.

Аби застосувати базовий метод `Object.prototype.toString()` на об'єкті, в якому його було заміщено (або звернутися до нього на значеннях `null` чи `undefined`), слід на такому методі викликати {{jsxref("Function.prototype.call()")}} чи {{jsxref("Function.prototype.apply()")}}, передавши першим параметром (називається `thisArg`) об'єкт, який потрібно дослідити.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

Метод `Object.prototype.toString()` повертає рядок `"[object Type]"`, де `Type` — це тип об'єкта. Якщо об'єкт містить властивість [`Symbol.toStringTag`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) із рядковим значенням — це значення і буде використано як `Type`. Багато вбудованих об'єктів мають свій `Symbol.toStringTag`, включно з [`Map`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Map) і [`Symbol`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Деякі об'єкти, що з'явилися до ES6, не мають свого `Symbol.toStringTag`, — проте все ж мають особливий позначник. До таких відносяться (позначник — такий само, як і ім'я типу, наведене нижче):

- [`Array`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/uk/docs/Web/JavaScript/Reference/Functions) (будь-що, на що оператор [`typeof`](/uk/docs/Web/JavaScript/Reference/Operators/typeof) повертає `"function"`)
- [`Error`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Об'єкт [`arguments`](/uk/docs/Web/JavaScript/Reference/Functions/arguments) повертає `"[object Arguments]"`. Всі інші, включно з означеними користувачем класами, повертатимуть `"[object Object]"` (якщо не матимуть власного `Symbol.toStringTag`).

Закликання `Object.prototype.toString()` на значеннях [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) та {{jsxref("undefined")}} поверне `[object Null]` та `[object Undefined]` відповідно.

## Приклади

### Заміщення методу toString для власних об'єктів

Можна створити функцію, яка буде викликатися замість усталеного методу `toString()`. Ця власна функція `toString()` повинна повертати рядкове значення. Якщо вона поверне об'єкт, коли метод неявно викликано під час [перетворення типів](/uk/docs/Web/JavaScript/Data_structures#zvedennia-typiv) — її результат проігнорується, і натомість буде використано результат пов'язаного методу {{jsxref("Object/valueOf", "valueOf()")}}, або викинуто `TypeError`, якщо жоден із цих методів не повернув примітива.

Наступний код визначає клас `Dog`.

```js
class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
}
```

Якщо викликати метод `toString()`, явно чи неявно, на примірнику `Dog` — він поверне усталене значення, успадковане від {{jsxref("Object")}}:

```js
const theDog = new Dog("Лапа", "лабрадор", "шоколадний", "дівчинка");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

Наступний код заміщає усталений метод `toString()`. Цей метод генерує рядок, що містить поля об'єкта `name`, `breed`, `color`, та `sex`.

```js
class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
  toString() {
    return `Собака ${this.name} — це ${this.color} ${this.breed}-${this.sex}`;
  }
}
```

З урахуванням попереднього коду, кожного разу, коли примірник класу `Dog` вживається в рядковому контексті, JavaScript автоматично викличе метод `toString()`.

```js
const theDog = new Dog("Лапа", "лабрадор", "шоколадний", "дівчинка");

`${theDog}`; // "Собака Лапа — це шоколадний лабрадор-дівчинка"
```

### Застосування методу toString() для виявлення класу об'єкта

Метод `toString()` можна використовувати з кожним об'єктом, і (усталено) це дає можливість отримувати його клас.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Об'єкт Math має свій Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

Застосування методу `toString()` у такий спосіб є ненадійним: об'єкти можуть змінювати поведінку `Object.prototype.toString()` шляхом означення властивості {{jsxref("Symbol.toStringTag")}}, що призводить до несподіваних результатів. Наприклад:

```js
const myDate = new Date();
Object.prototype.toString.call(myDate); // [object Date]

myDate[Symbol.toStringTag] = "myDate";
Object.prototype.toString.call(myDate); // [object myDate]

Date.prototype[Symbol.toStringTag] = "забруднений прототип";
Object.prototype.toString.call(new Date()); // [object забруднений прототип]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл методу `Object.prototype.toString` із підтримкою `Symbol.toStringTag` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
- {{jsxref("Symbol.toStringTag")}}
