---
title: Конструктор String()
slug: Web/JavaScript/Reference/Global_Objects/String/String
page-type: javascript-constructor
browser-compat: javascript.builtins.String.String
---

{{JSRef}}

Конструктор **`String()`** (рядок) створює об'єкти {{jsxref("String")}}. Коли він викликається як функція, то повертає примітивні значення типу String.

## Синтаксис

```js-nolint
new String(thing)
String(thing)
```

> [!NOTE]
> Конструктор `String()` можна викликати як з, так і без [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new), але з різним результатом. Дивіться [Повернене значення](#povernene-znachennia).

### Параметри

- `thing`
  - : Що завгодно, що може бути перетворено на рядок.

### Повернене значення

Коли `String()` викликається як функція (без [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new)), то повертає `value`, [зведене до рядкового примітива](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka). А саме, значення [Symbol](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol) перетворюються на `"Symbol(опис)"`, де `опис` – це [опис](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) значення Symbol, без викидання винятку.

Коли `String` викликається як конструктор (з додаванням `new`), то `value` зводиться до рядкового примітива (без особливої обробки символів), і повертається об'єкт-обгортка {{jsxref("String")}}, який **не** є примітивом.

> [!WARNING]
>
> `String` рідко доводиться використовувати як конструктор.

## Приклади

### Конструктор String та функція String

Конструктор String та функція String повертають різні результати:

```js
const a = new String("Привіт, світе"); // a === "Привіт, світе" – це хиба
const b = String("Привіт, світе"); // b === "Привіт, світе" – це істина
a instanceof String; // істина
b instanceof String; // хиба
typeof a; // "object"
typeof b; // "string"
```

Як наведено вище, функція повертає рядок ({{Glossary("primitive", "примітивний")}} тип), як і очікувалось.
Однак конструктор повертає екземпляр об'єкта типу String (об'єктну обгортку), і саме тому дуже рідко виникає потреба використовувати конструктор String.

### Використання String() для рядкування символу

`String()` – це єдиний випадок, при якому символ може бути перетворений на рядок без викидання помилки, оскільки ця операція – украй очевидна.

```js example-bad
const sym = Symbol("приклад");
`${sym}`; // TypeError: Cannot convert a Symbol value to a string
"" + sym; // TypeError: Cannot convert a Symbol value to a string
"".concat(sym); // TypeError: Cannot convert a Symbol value to a string
```

```js example-good
const sym = Symbol("приклад");
String(sym); // "Symbol(приклад)"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Форматування тексту](/uk/docs/Web/JavaScript/Guide/Text_formatting)
