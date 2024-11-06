---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.toString
---

{{JSRef}}

Метод **`toString()`** (до рядка) значень {{jsxref("String")}} повертає рядкове значення, з якого викликаний.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## Синтаксис

```js-nolint
toString()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що представляє задане рядкове значення.

## Опис

Об'єкт {{jsxref("String")}} заміщує метод `toString()` об'єкта {{jsxref("Object")}}, а не успадковує {{jsxref("Object.prototype.toString()")}}. Для значень `String` метод `toString` повертає сам рядок (якщо він є примітивом) або рядок, котрий обгортає об'єкт `String`. Він має таку ж реалізацію, як {{jsxref("String.prototype.valueOf()")}}.

Метод `toString()`вимагає, щоб його значення `this` було примітивом або об'єктом-обгорткою `String`. Він викидає {{jsxref("TypeError")}} у випадку інших значень `this`, не намагаючись звести їх до рядкових значень.

У зв'язку з тим, що `String` не має методу [`[Symbol.toPrimitive]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), JavaScript викликає метод `toString()` автоматично, коли _об'єкт_ `String` вживається в контексті, що очікує на рядок, наприклад, у [шаблонному літералі](/uk/docs/Web/JavaScript/Reference/Template_literals). Проте _примітивні_ значення String не радяться з методом `toString()` для свого [зведення до рядків](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka): оскільки вони вже є рядками, перетворення не виконується.

```js
String.prototype.toString = () => "Відкинуто";
console.log(`${"агов"}`); // "агов"
console.log(`${new String("агов")}`); // "Відкинуто"
```

## Приклади

### Застосування методу toString()

Наступний приклад виводить рядкове значення об'єкта {{jsxref("String")}}:

```js
const x = new String("Привіт, світе");

console.log(x.toString()); // "Привіт, світе"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.valueOf()")}}
