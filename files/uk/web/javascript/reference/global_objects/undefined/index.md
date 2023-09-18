---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
page-type: javascript-global-property
browser-compat: javascript.builtins.undefined
---

{{jsSidebar("Objects")}}

Глобальна властивість **`undefined`** (невизначене) представляє примітивне значення [`undefined`](/uk/docs/Web/JavaScript/Data_structures#typ-undefined). Це один з {{Glossary("Primitive", "примітивних типів")}} JavaScript.

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## Значення

Примітивне значення [`undefined`](/uk/docs/Web/JavaScript/Data_structures#typ-undefined).

{{js_property_attributes(0, 0, 0)}}

## Опис

`undefined` – властивість _глобального об'єкта_. Тобто це змінна у глобальній області видимості.

У всіх незастарілих браузерах `undefined` є неналаштовною властивістю, недоступною для запису. Навіть тоді, коли це не так, слід уникати її перевизначення.

Змінна, котрій не було присвоєно значення, має тип `undefined`. Крім цього, метод чи інструкція повертає `undefined`, якщо обчислювана змінна не має присвоєного значення. Функція повертає `undefined` якщо не було {{jsxref("Statements/return", "повернено")}} жодне значення.

> **Примітка:** Хоч `undefined` можливо використати як {{Glossary("identifier", "ідентифікатор")}} (ім'я змінної) у будь-якій області видимості, крім глобальної (адже `undefined` не є [зарезервованим словом](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#zarezervovani-slova)), та це дуже погана ідея, що зробить код складним у підтримці та зневадженні.
>
> ```js example-bad
> // НЕ РОБІТЬ ТАК
>
> (() => {
>   const undefined = "foo";
>   console.log(undefined, typeof undefined); // foo string
> })();
>
> ((undefined) => {
>   console.log(undefined, typeof undefined); // foo string
> })("foo");
> ```

## Приклади

### Сувора рівність і undefined

Можна використовувати `undefined` і оператори строгої рівності та нерівності, аби з'ясувати, чи має змінна значення. У наступному коді змінна `x` – не ініціалізована, й інструкція `if` обчислюється в істинність.

```js
let x;
if (x === undefined) {
  // ці інструкції виконуються
} else {
  // ці інструкції не виконуються
}
```

> **Примітка:** Тут повинен бути використаний оператор _строгої рівності_ (а не оператор _стандартної рівності_), тому що `x == undefined` також перевіряє, чи `x` є `null`, а строга рівність – ні. Це так, тому що `null` не рівносильно `undefined`.
>
> Дивіться подробиці на сторінці [Перевірки рівності та тотожності](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness).

### Оператор typeof і undefined

Інший варіант – використати {{jsxref("Operators/typeof", "typeof")}}:

```js
let x;
if (typeof x === "undefined") {
  // ці інструкції виконуються
}
```

Одна з причин використати {{jsxref("Operators/typeof", "typeof")}} – те, що він не викидає помилку, коли змінна не оголошена.

```js
// x тут не оголошена
// обчислюється в true без помилок
if (typeof x === "undefined") {
  // ці інструкції виконуються
}

// Викидає ReferenceError
if (x === undefined) {
}
```

Проте є іще один варіант. JavaScript – мова статичних областей видимості, тож чи оголошена змінна – можна дізнатися, поглянувши, чи оголошена вона в охоплювальному контексті.

Глобальна область видимості прив'язана до {{jsxref("globalThis", "глобального об'єкта", "", 1)}}, тож перевірка існування змінної в глобальному контексті може бути виконана шляхом перевірки існування властивості на _глобальному об'єкті_, за допомогою, наприклад, оператора {{jsxref("Operators/in", "in")}}:

```js
if ("x" in window) {
  // Ці інструкції виконуються лише якщо x визначено глобально
}
```

### Оператори void і undefined

Оператор {{jsxref("Operators/void", "void")}} – третій варіант.

```js
let x;
if (x === void 0) {
  // ці інструкції виконуються
}

// y тут не оголошено
if (y === void 0) {
  // викидає Uncaught ReferenceError: y is not defined
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Типи даних і структури даних JavaScript](/uk/docs/Web/JavaScript/Data_structures)
- [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null)
