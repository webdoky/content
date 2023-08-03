---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.padEnd
---

{{JSRef}}

Метод **`padEnd()`** підбиває рядок, на якому викликається, значенням переданого рядка (повторюючи його, якщо необхідно) таким чином, що довжина рядка в результаті збільшується до вказаного значення. Рядок підбивається від кінця початкового рядка.

{{EmbedInteractiveExample("pages/js/string-padend.html")}}

## Синтаксис

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### Параметри

- `targetLength`
  - : Довжина поверненого рядка після того, як поточний рядок `str` буде підбито. Якщо вказане значення менше або дорівнює `str.length`, то буде повернено початковий рядок як є.
- `padString` {{optional_inline}}
  - : Рядок, яким підбивається початковий `str`. Якщо `padString` задовга і виходить за межі `targetLength` — вона обріжеться. Для мов з режимом письма зліва направо буде вставлено лівий кінець, а для мов з письмом справа наліво — правий. Усталене значення цього параметру — " "(`U+0020`).

### Повернене значення

{{jsxref("String", "Рядок")}} вказаної в параметрі `targetLength` довжини, з вмістом `padString`, вставленим в кінець даного рядка.

## Приклади

### Застосування методу padEnd

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `String.prototype.padEnd` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padStart()")}}
