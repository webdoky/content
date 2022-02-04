---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
tags:
  - Advanced
  - Intermediate
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.padStart
---
{{JSRef}}

Метод **`padStart()`** підбиває рядок, на якому викликається, значенням переданого рядка (повторюючи його, якщо необхідно) таким чином, що довжина рядка в результаті збільшується до вказаного значення. Рядок підбивається від початку вихідного рядка.

{{EmbedInteractiveExample("pages/js/string-padstart.html")}}

## Синтаксис

```js
padStart(targetLength)
padStart(targetLength, padString)
```

### Параметри

- `targetLength`
  - : Довжина поверненого рядка після того, як поточний рядок `str` було підбито. Якщо вказане значення нижче за `str.length`, то буде повернено початковий рядок як є.
- `padString` {{optional_inline}}
  - : Рядок, яким підбивається початковий `str`. Якщо `padString` задовгий і виходить за межі `targetLength` — він буде обрізаний. Для мов з режимом письма зліва направо буде вставлено лівий кінець, а для мов з письмом справа наліво — правий. Усталене значення цього параметру — символ пробілу в Unicode (U+0020).

### Повернене значення

{{jsxref("String", "Рядок")}} вказаної параметром `targetLength` довжини, зі вмістом рядка `padString`, вставленим на початку вихідного рядка.

## Приклади

### Базове застосування

```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

### Перетворення чисел на рядки фіксованої довжини

```js
// Версія Javascript: (unsigned)
// printf "%0*d" з числом
function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}

const num = 123;
console.log(leftFillNum(num, 5));
// очікуваний вивід: "00123"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.padStart` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padEnd()")}}
- [Поліфіл](https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js)
