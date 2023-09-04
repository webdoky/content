---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.padStart
---

{{JSRef}}

Метод **`padStart()`** (підбити з початку) значень {{jsxref("String")}} підбиває свій рядок значенням переданого рядка (повторюючи його, якщо необхідно) таким чином, що довжина рядка в результаті збільшується до вказаного значення. Підбивання відбувається від початку рядка, якому належить метод.

{{EmbedInteractiveExample("pages/js/string-padstart.html")}}

## Синтаксис

```js-nolint
padStart(targetLength)
padStart(targetLength, padString)
```

### Параметри

- `targetLength`
  - : Довжина поверненого рядка після того, як поточний рядок `str` було підбито. Якщо вказане значення менше або рівне `str.length`, то буде повернено вихідний рядок, як є.
- `padString` {{optional_inline}}
  - : Рядок, яким підбивається початковий `str`. Якщо `padString` задовгий і виходить за межі `targetLength` — він буде обрізаний. Для мов з режимом письма зліва направо буде вставлено лівий кінець, а для мов з письмом справа наліво — правий. Усталене значення цього параметру — символ пробілу в Unicode (U+0020).

### Повернене значення

{{jsxref("String", "Рядок")}} вказаної параметром `targetLength` довжини, зі вмістом рядка `padString`, вставленим на початку вихідного рядка.

## Приклади

### Базове застосування

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### Перетворення чисел на рядки фіксованої довжини

```js
// JavaScript-версія виразу: (беззнакового)
// printf "%0*d" з числом
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}

const num = 123;
console.log(leftFillNum(num, 5)); // "00123"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.padStart` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padEnd()")}}
