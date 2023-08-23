---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.trimEnd
---

{{JSRef}}

Метод **`trimEnd()`** (обітнути кінець) значень {{jsxref("String")}} видаляє пробільні символи з кінця свого рядка та повертає новий рядок, не змінюючи вихідний. У цього методу також є псевдонім – `trimRight()`.

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## Синтаксис

```js-nolint
trimEnd()

trimRight()
```

### Повернене значення

Новий рядок, що містить значення початкового рядка `str`, у якого пробільні символи в кінці (з правого боку) — обрізані. Пробільні символи визначені як символи-[пробіли](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#probily) плюс [символи кінця рядка](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#symvoly-kintsia-riadka).

Якщо кінець рядка `str` не містить пробільних символів, однаково повертається новий рядок (практично — копія рядка `str`).

### Вживання псевдонімів

Після того, як метод {{jsxref("String/trim", "trim()")}} був стандартизований, рушії також реалізували нестандартний метод `trimRight`. Проте, заради одноманітності з {{jsxref("String/padEnd", "padEnd()")}}, коли цей метод було стандартизовано, було обрано назву `trimEnd`. У зв'язку з міркуваннями вебсумісності `trimRight` залишається псевдонімом `trimEnd`, і вони посилаються на той самий об'єкт-функцію. У деяких рушіях це означає:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Приклади

### Застосування trimEnd()

Наступний приклад обтинає пробіли на кінці `str`, але не на початку.

```js
<!-- markdownlint-disable-next-line -->
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.trimEnd` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
