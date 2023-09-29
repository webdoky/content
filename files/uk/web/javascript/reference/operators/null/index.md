---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
page-type: javascript-language-feature
browser-compat: javascript.operators.null
---

{{jsSidebar("Operators")}}

Значення **`null`** (пустота) представляє навмисну відсутність будь-якого об'єктного значення. Це одне з [примітивних значень](/uk/docs/Glossary/Primitive) JavaScript, його значення вважається [хибністю](/uk/docs/Glossary/Falsy) в булевих операціях.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## Синтаксис

```js-nolint
null
```

## Опис

Значення `null` записується за допомогою літерала: `null`.
`null` не є ідентифікатором властивості глобального об'єкта, як це може бути з {{jsxref("undefined")}}. Натомість `null` виражає відсутність ідентифікації, що вказує на те, що змінна позначає відсутність об'єкта. В API `null` нерідко повертається в тих місцях, де може очікуватись об'єкт, але жодний об'єкт не знайдений.

```js
// foo не існує. Вона не визначена й ніколи не була ініціалізована:
foo; //ReferenceError: foo is not defined
```

```js
// відомо, що foo існує, але вона не має ані типу, ані значення:
const foo = null;
foo; //null
```

## Приклади

### Різниця між `null` і `undefined`

При перевірці на `null` чи `undefined` слід мати на увазі [різницю між операторами рівності (==) та ідентичності (===)](/uk/docs/Web/JavaScript/Reference/Operators), адже перший із них виконує перетворення типів.

```js
typeof null; // "object" (через історичні причини – не "null")
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
isNaN(1 + null); // false
isNaN(1 + undefined); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
- {{jsxref("Operators/void", "void")}}
