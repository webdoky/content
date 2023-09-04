---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.concat
---

{{JSRef}}

Метод **`concat()`** (зчепити) значень {{jsxref("String")}} приєднує рядкові аргументи до свого рядка, і повертає результат як новий рядок.

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## Синтаксис

```js-nolint
concat()
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
```

### Параметри

- `str1`, …, `strN`
  - : Один чи більше рядків, які слід приєднати до початкового рядка `str`.

### Повернене значення

Новий рядок, що містить всі передані рядки, з'єднані в один.

## Опис

Функція `concat()` приєднує передані в аргументах рядки до рядка, на якому викликається, і повертає результат як новий рядок. Зміни до початкового чи поверненого рядків не впливають на інші залучені рядки.

Якщо передані аргументи не є рядками, їх буде зведено до рядкового типу безпосередньо перед конкатенацією.

Метод `concat` вельми подібний до операторів [додавання та зчеплення рядків](/uk/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`), за винятком того, що `concat()` [зводить свої аргументи безпосередньо до рядків](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka), натомість додавання перш за все зводить свої операнди до примітивів. Для отримання додаткової інформації дивіться довідкову сторінку [оператора `+`](/uk/docs/Web/JavaScript/Reference/Operators/Addition).

## Приклади

### Застосування concat()

Наступний приклад поєднує два рядки в один новий.

```js
const hello = "Привіт, ";
console.log(hello.concat("Кевіне", ". Гарного дня."));
// Привіт, Кевіне. Гарного дня.

const greetList = ["Привіт", " ", "Венкате", "!"];
"".concat(...greetList); // "Привіт Венкате!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.concat()")}}
- [Додавання (`+`)](/uk/docs/Web/JavaScript/Reference/Operators/Addition)
