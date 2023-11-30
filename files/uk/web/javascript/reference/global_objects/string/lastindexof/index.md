---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.lastIndexOf
---

{{JSRef}}

Метод значень {{jsxref("String")}} **`lastIndexOf()`** (останній індекс елемента) шукає в поточному рядку та повертає індекс останнього входження заданого підрядка. Він приймає необов'язкову початкову позицію і повертає останнє входження заданого підрядка за індексом, меншим або рівним заданому числу.

{{EmbedInteractiveExample("pages/js/string-lastindexof.html")}}

## Синтаксис

```js-nolint
lastIndexOf(searchString)
lastIndexOf(searchString, position)
```

### Параметри

- `searchString`

  - : Підрядок до пошуку. Всі значення [зводяться до рядків](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka), тому його відсутність або передача `undefined` призводить до того, що `lastIndexOf()` шукає рядок `"undefined"`, а це рідко саме те, що потрібно.

- `position` {{optional_inline}}

  - : Цей метод повертає індекс останнього входження заданого підрядка за індексом, меншим або рівним `position`, чиє усталене значення – `+Infinity`. Якщо `position` більше довжини поточного рядка, то метод шукає в ньому всьому. Якщо `position` менше `0`, то поведінка така ж, як для `0` — тобто метод шукає заданий підрядок лише за індексом `0`.

    - `'hello world hello'.lastIndexOf('world', 4)` повертає `-1` – адже попри те, що підрядок `world` зустрічається за індексом `6`, ця позиція не менша або рівна `4`.

    - `'hello world hello'.lastIndexOf('hello', 99)` повертає `12` – адже останнє входження `hello` за індексом, меншим або рівним `99`, знаходиться на позиції `12`.

    - Як `'hello world hello'.lastIndexOf('hello', 0)`, так і `'hello world hello'.lastIndexOf('hello', -5)` повертають `0` – адже обидва ці вирази змушують метод шукати `hello` лише на індексі `0`.

### Повернене значення

Індекс останньої появи шуканого `searchString`; `-1`, якщо значення не знайшлося.

## Опис

Рядки індексуються від нуля: Індекс першого символу рядка – `0`, а індекс останнього символу рядка – його довжина мінус 1

```js
"канал".lastIndexOf("а"); // повертає 3
"канал".lastIndexOf("а", 2); // повертає 1
"канал".lastIndexOf("а", 0); // повертає -1
"канал".lastIndexOf("х"); // повертає -1
"канал".lastIndexOf("к", -5); // повертає 0
"канал".lastIndexOf("к", 0); // повертає 0
"канал".lastIndexOf(""); // повертає 5
"канал".lastIndexOf("", 2); // повертає 2
```

### Чутливість до регістру

Метод `lastIndexOf()` чутливий до регістру. Наприклад, наступний вираз поверне `-1`:

```js
"Синій Кит, Косатка".lastIndexOf("синій"); // повертає -1
```

## Приклади

### Застосування методів indexOf() та lastIndexOf()

Наступні приклади використовують {{jsxref("String/indexOf", "indexOf()")}} і `lastIndexOf()` для визначення розташування значень у рядку `"Прекрасний, Прекрасний Новий Світ"`.

```js
const anyString = "Прекрасний, Прекрасний Новий Світ";

console.log(anyString.indexOf("Прекрасний")); // 0
console.log(anyString.lastIndexOf("Прекрасний")); // 12
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
