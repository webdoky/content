---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.concat
---
{{JSRef}}

Метод **`concat()`** (конкатенація) приєднує рядкові аргументи до рядка, на якому викликається, і повертає результат як новий рядок.

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## Синтаксис

```js
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)
```

### Параметри

- `strN`
  - : Один чи більше рядків, які слід приєднати до початкового рядка `str`.

### Повернене значення

Новий рядок, що містить всі передані рядки, з'єднані в один.

## Опис

Функція `concat()` приєднує передані в аргументах рядки до рядка, на якому викликається, і повертає результат як новий рядок. Зміни до початкового чи поверненого рядків не впливають на інші залучені рядки.

Якщо передані аргументи не є рядками, їх буде зведено до рядкового типу безпосередньо перед конкатенацією.

## Швидкодія

Наполегливо рекомендується вживати {{jsxref("Operators/Assignment_Operators", "оператори присвоєння", "", 1)}} (`+`, `+=`) замість методу `concat()`.

## Приклади

### Застосування concat()

Наступний приклад поєднує два рядки в один новий.

```js
let hello = 'Привіт, '
console.log(hello.concat('Кевіне', '. Гарного дня.'))
// Привіт, Кевіне. Гарного дня.

let greetList = ['Привіт', ' ', 'Венкате', '!']
"".concat(...greetList)  // "Привіт Венкате!"

"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Operators/Assignment_Operators", "Оператори присвоєння", "", 1)}}
