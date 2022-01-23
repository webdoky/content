---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - lastIndexOf
browser-compat: javascript.builtins.String.lastIndexOf
---
{{JSRef}}

Метод **`lastIndexOf()`** повертає індекс останньої появи переданого значення всередині об'єкта {{jsxref("String")}}, на якому викликається. Пошук ведеться починаючи зі вказаного значення `fromIndex`, у зворотному напрямку. Повертає `-1`, якщо шукане значення не знайшлося.

{{EmbedInteractiveExample("pages/js/string-lastindexof.html", "shorter")}}

## Синтаксис

```js
lastIndexOf(searchValue)
lastIndexOf(searchValue, fromIndex)
```

### Параметри

- `searchValue`
  - : Рядок, який містить шукане значення. Якщо `searchValue` містить порожній рядок, то метод поверне значення `fromIndex`.
- `fromIndex` {{optional_inline}}
  - : Індекс останнього символу в рядку, з якого починається збіг з шуканим рядком. Усталено дорівнює `+Infinity`. Якщо `fromIndex >= str.length`, то цілий рядок перевіряється на збіги. Якщо `fromIndex < 0`, то поведінка буде така сама, як якби цей параметр дорівнював `0`.

### Повернене значення

Індекс останньої появи шуканого `searchValue`, або `-1`, якщо значення не знайшлося.

## Опис

Індекси символів у рядку нумеруються зліва направо. Індекс першого символу дорівнює `0`, а індекс останнього символу в рядку дорівнює значенню виразу `str.length - 1`.

```js
'канал'.lastIndexOf('а');     // повертає 3
'канал'.lastIndexOf('а', 2);  // повертає 1
'канал'.lastIndexOf('а', 0);  // повертає -1
'канал'.lastIndexOf('х');     // повертає -1
'канал'.lastIndexOf('к', -5); // повертає 0
'канал'.lastIndexOf('к', 0);  // повертає 0
'канал'.lastIndexOf('');      // повертає 5
'канал'.lastIndexOf('', 2);   // повертає 2
```

> **Примітка:** `'баба'.lastIndexOf('ба', 2)` поверне `2`, а не `0`, оскільки `fromIndex` обмежує лише початок збігу.

### Чутливість до регістру

Метод `lastIndexOf()` чутливий до регістру. Наприклад, наступний вираз поверне `-1`:

```js
'Синій Кит, Косатка'.lastIndexOf('синій'); // повертає -1
```

## Приклади

### Застосування методів indexOf() та lastIndexOf()

Наступні приклади використовують {{jsxref("String.prototype.indexOf()", "indexOf()")}} та `lastIndexOf()` для визначення розташування значень у рядку "`Прекрасний новий світ`".

```js
let anyString = 'Прекрасний новий світ';

console.log('Індекс першої літери "с" з початку: ' + anyString.indexOf('с'));
// виводить 6
console.log('Індекс першої літери "с" з кінця: ' + anyString.lastIndexOf('с'));
// виводить 17
console.log('Індекс рядка "новий" з початку: ' + anyString.indexOf('новий'));
// виводить 11
console.log('Індекс рядка "новий" з кінця: ' + anyString.lastIndexOf('новий'));
// виводить 11
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
