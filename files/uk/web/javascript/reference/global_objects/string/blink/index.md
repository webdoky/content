---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.blink
---

{{JSRef}} {{Deprecated_Header}}

Метод **`blink()`** (блимати) значень {{jsxref("String")}} створює рядок, що вбудовує рядок цього методу в елемент `<blink>` (`<blink>str</blink>`), що в старих браузерах змушувало результівний рядок блимати.

> **Примітка:** Всі [методи для обгортання HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html) – нерекомендовані, вони стандартизовані лише для потреб сумісності. У випадку `blink()` – сам елемент `<blink>` прибраний з сучасних браузерів, і декілька стандартів доступності не схвалюють мерехтливий текст. Уникайте застосування цього елемента за будь-яких умов.

## Синтаксис

```js-nolint
blink()
```

### Параметри

Жодних.

### Повернене значення

Рядок, що на початку має початковий тег `<blink>`, потім текст `str`, і в кінці – кінцевий тег `</blink>`.

## Приклади

### Застосування методу blink()

Код нижче створює рядок HTML, а потім замінює тіло документа цим рядком:

```js
const contentString = "Привіт, світе";

document.body.innerHTML = contentString.blink();
```

Це породжує наступний HTML:

```html
<blink>Привіт, світе</blink>
```

> **Застереження:** Така розмітка є недійсною, адже `blink` більше не є дійсним елементом.
> Елементів, що блимають, слід взагалі уникати.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.blink` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Методи для обгортання в HTML](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#metody-dlia-obhortannia-v-html)
