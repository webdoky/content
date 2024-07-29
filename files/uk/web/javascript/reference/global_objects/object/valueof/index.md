---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Object.valueOf
---

{{JSRef}}

Метод **`valueOf()`** (значення) примірників {{jsxref("Object")}} перетворює значення `this` [на об'єкт](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#zvedennia-do-obiekta). Очікується, що цей метод перевизначений похідними об'єктами задля їх власної логіки [перетворення типів](/uk/docs/Web/JavaScript/Data_structures#zvedennia-typiv).

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## Синтаксис

```js-nolint
valueOf()
```

### Параметри

Жодних.

### Повернене значення

Значення `this` перетворене на об'єкт.

> **Примітка:** Щоб `valueOf` був корисним під час перетворення типів, він мусить повертати примітив. Через те, що всі примітивні типи мають власні методи `valueOf()`, загалом `aPrimitiveValue.valueOf()` не закликає `Object.prototype.valueOf()`.

## Опис

JavaScript викликає метод `valueOf` для [перетворення об'єкта на примітивне значення](/uk/docs/Web/JavaScript/Data_structures#zvedennia-typiv). Закликати `valueOf` власноруч доводиться рідко; його автоматично закликає JavaScript, коли зустрічає об'єкт у місці, де очікується примітив.

Цей метод у першу чергу викликається алгоритмами [зведення до числового значення](/uk/docs/Web/JavaScript/Data_structures#zvedennia-do-chysla) та [зведення до примітива](/uk/docs/Web/JavaScript/Data_structures#zvedennia-do-prymityva), однак [зведення до рядка](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka) у першу чергу викликає `toString()`, а `toString()`, із високою імовірністю, поверне рядкове значення (навіть у базовій реалізації {{jsxref("Object.prototype.toString()")}}), тож `valueOf()` у цьому випадку зазвичай не викликається.

Усі об'єкти, що успадковують від `Object.prototype` (тобто всі, крім [`null`-прототипних об'єктів](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty)), успадковують метод `toString()`. Базова реалізація `Object.prototype.valueOf()` навмисно зроблена непридатною: вона повертає об'єкт, тож повернене нею значення ніколи не буде використано жодним [алгоритмом зведення до примітива](/uk/docs/Web/JavaScript/Data_structures#zvedennia-typiv). Чимало вбудованих об'єктів перевизначає цей метод, аби повертати відповідне примітивне значення. При створенні власного об'єкта можна перевизначити `valueOf()`, аби викликався власний метод, щоб такий власний об'єкт міг бути перетворений на примітивне значення. Загалом, `valueOf()` використовується для повертання значення, що є найсуттєвішим в об'єкті – на відміну від `toString()`, це не обов'язково повинен бути рядок. Інший варіант: можна додати метод [`[Symbol.toPrimitive]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), котрий дає змогу іще краще контролювати процес перетворення; такий об'єкт завжди матиме пріоритет над `valueOf` і `toString`, при будь-якому перетворенні типів.

## Приклади

### Вживання valueOf()

Базовий метод `valueOf()` повертає саме значення `this`, перетворивши його на об'єкт, якщо воно ним не є. Таким чином, таке повернене значення ніколи не вживається жодним алгоритмом перетворення на примітив.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (об'єкт-обгортка)
```

### Перевизначення valueOf для власних об'єктів

Можна створити функцію, що викликатиметься на місці усталеного методу `valueOf`. Така функція не повинна приймати аргументи, адже їй не будуть передані жодні аргументи, коли її викличуть при перетворенні типів.

Наприклад, можна додати метод `valueOf` власному класові `Box`.

```js
class Box {
  #value;
  constructor(value) {
    this.#value = value;
  }
  valueOf() {
    return this.#value;
  }
}
```

При використанні такого коду, щоразу, коли об'єкт типу `Box` вживатиметься в контексті, де він повинен бути представлений примітивним значенням (але не конкретно рядком), JavaScript автоматично викликатиме функцію, означену в коді вище.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Метод `valueOf` зазвичай закликається з боку JavaScript, але можна закликати й самотужки, отак:

```js
box.valueOf();
```

### Застосування до об'єктів унарного плюса

[Унарний плюс](/uk/docs/Web/JavaScript/Reference/Operators/Unary_plus) виконує над своїм операндом [зведення до числового значення](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#zvedennia-do-chysla), що для більшості об'єктів без [`[Symbol.toPrimitive]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) означає виклик їхніх методів `valueOf()`. Проте якщо об'єкт не має власного методу `valueOf()`, то базова реалізація призведе до ігнорування `valueOf()`, і натомість використовуватиметься повернене значення `toString()`.

```js
+new Date(); // Поточна мітка часу; те саме, що й new Date().getTime()
+{}; // NaN (toString() повертає "[object Object]")
+[]; // 0 (toString() повертає рядок порожнього списку)
+[1]; // 1 (toString() повертає "1")
+[1, 2]; // NaN (toString() повертає "1,2")
+new Set([1]); // NaN (toString() повертає "[object Set]")
+{ valueOf: () => 42 }; // 42
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
