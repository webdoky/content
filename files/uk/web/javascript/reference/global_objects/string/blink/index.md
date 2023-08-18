---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.blink
---

{{JSRef}} {{deprecated_header}}

Метод **`blink()`** (блимати) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в (`<blink>str</blink>`), що в старих браузерах змушувало результівний рядок блимати.

> **Примітка:** Всі [методи для обгортання HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) – нерекомендовані, вони стандартизовані лише для потреб сумісності. У випадку `blink()` – сам елемент `<blink>` прибраний з сучасних браузерів, і декілька стандартів доступності не схвалюють мерехтливий текст. Уникайте застосування цього елемента за будь-яких умов.

## Синтаксис

```js-nolint
blink()
```

### Повернене значення

Рядок, що на початку має початковий тег `<blink>`, потім текст `str`, і в кінці – кінцевий тег `</blink>`.

## Приклади

### Застосування методу blink()

Наступний приклад демонструє, як змінити форматування рядка за допомогою різних нерекомендованих методів самого рядка:

```js
const worldString = "Привіт, світе!";

console.log(worldString.blink()); // <blink>Привіт, світе!</blink>
console.log(worldString.bold()); // <b>Привіт, світе!</b>
console.log(worldString.italics()); // <i>Привіт, світе!</i>
console.log(worldString.strike()); // <strike>Привіт, світе!</strike>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.blink` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
