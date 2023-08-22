---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.trimStart
---

{{JSRef}}

Метод **`trimStart()`** (обітнути початок) прибирає пробіли з початку рядка та повертає новий рядок, не змінюючи вихідний. Метод `trimLeft()` є його псевдонімом.

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## Синтаксис

```js-nolint
trimStart()

trimLeft()
```

### Повернене значення

Новий рядок, що містить значення початкового рядка `str`, у якого пробільні символи спочатку (з лівого боку) — обрізані. Пробіли визначені як символи [пробілів](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#probily) плюс [символи кінця рядка](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#symvoly-kintsia-riadka).

Якщо початок рядка `str` не містить пробільних символів, однаково повертається новий рядок (практично — копія рядка `str`).

### Вживання псевдонімів

Після стандартизації {{jsxref("String/trim", "trim()")}}, рушії також реалізували нестандартний метод `trimLeft`. Проте заради узгодженості з {{jsxref("String/padEnd", "padEnd()")}}, коли цей метод був стандартизований, за його назву було обрано `trimStart`. У зв'язку з міркуваннями сумісності у Вебі `trimLeft` залишається псевдонімом `trimStart`, і може вказувати на той самий об'єкт-функцію. В деяких рушіях це буквально означає:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Приклади

### Застосування trimStart()

Наступний приклад обтинає пробіли з початку `str`, але не з кінця.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.trimStart` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
