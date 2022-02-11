---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
tags:
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.toLocaleUpperCase
---
{{JSRef}}

Метод **`toLocaleUpperCase()`** повертає значення рядка, на якому викликається, переведене у верхній регістр із врахуванням будь-яких, специфічних для конкретної локалі, перетворень.

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## Синтаксис

```js
toLocaleUpperCase()
toLocaleUpperCase(locale)
toLocaleUpperCase([locale1, locale2, ...])
```

### Параметри

- `locale` {{optional_inline}}
  - : Параметр `locale` позначає локаль, налаштування якої будуть використані для переведення рядка у верхній регістр, з урахуванням будь-яких, специфічних для локалі, перетворень. В разі, якщо було передано декілька локалей у {{jsxref("Array", "масиві")}}, буде використано [найкращу наявну локаль (англ.)](https://tc39.github.io/ecma402/#sec-bestavailablelocale). Усталена локаль — це локаль середовища хост-системи.

### Повернене значення

Новий рядок, що містить значення рядка, на якому було викликано метод, переведене у верхній регістр, з урахуванням будь-яких, специфічних для конкретної локалі, перетворень.

### Винятки

- Викидається виняток {{jsxref("RangeError")}} ("invalid language tag: xx_yy"), якщо передане в параметрі `locale` значення не є дійсним позначенням мови.
- Викидається виняток {{jsxref("TypeError")}} ("invalid element in locales argument"), якщо елементи переданого масиву мають тип, відмінний від рядкового.

## Опис

Метод `toLocaleUpperCase()` повертає значення рядка, переведене у верхній регістр, з урахуванням будь-яких, специфічних для конкретної локалі, перетворень. Метод `toLocaleUpperCase()` не впливає на значення початкового рядка. В більшості випадків він виведе такий самий результат, як і {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}, проте для деяких локалей (зокрема турецької, чиї перетворення регістру не відповідають усталеним перетворенням, закріпленим в Unicode), результат може відрізнятись.

Також варто зауважити, що зміна регістру не завжди означає перетворення символів 1:1, деякі символи запросто можуть перетворитися на два (чи навіть більше) символів після переведення у верхній регістр. Тому довжина рядка з результатом може відрізнятись від довжини початкового рядка. Це також означає, що таке перетворення не є стабільним, тобто такий вираз може повернути `false`:
`x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

## Приклади

### Застосування toLocaleUpperCase()

```js
'абетка'.toLocaleUpperCase(); // 'АБЕТКА'

'Gesäß'.toLocaleUpperCase(); // 'GESÄSS'

'i\u0307'.toLocaleUpperCase('lt-LT'); // 'I'

let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
'i\u0307'.toLocaleUpperCase(locales); // 'I'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
