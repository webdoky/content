---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
tags:
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.toLocaleLowerCase
---
{{JSRef}}

Метод **`toLocaleLowerCase()`** повертає значення рядка, на якому викликається, переведене в нижній регістр із врахуванням будь-яких, специфічних для конкретної локалі, перетворень.

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## Синтаксис

```js
toLocaleLowerCase()
toLocaleLowerCase(locale)
toLocaleLowerCase([locale1, locale2, ...])
```

### Параметри

- `locale` {{optional_inline}}
  - : Параметр `locale` позначає локаль, налаштування якої будуть використані для переведення рядка в нижній регістр, з урахуванням будь-яких, специфічних для локалі, перетворень. В разі, якщо було передано декілька локалей у {{jsxref("Array", "масиві")}}, буде використано [найкращу наявну локаль](https://tc39.github.io/ecma402/#sec-bestavailablelocale). Усталена локаль — це локаль середовища хост-системи.

### Повернене значення

Новий рядок, що містить значення рядка, на якому було викликано метод, переведене в нижній регістр, з урахуванням будь-яких, специфічних для конкретної локалі, перетворень.

### Винятки

- Викидається виняток {{jsxref("RangeError")}} ("invalid language tag: xx_yy"), якщо передане в параметрі `locale` значення не є дійсним позначенням мови.
- Викидається виняток {{jsxref("TypeError")}} ("invalid element in locales argument"), якщо елементи переданого масиву мають тип, відмінний від рядкового.

## Опис

Метод `toLocaleLowerCase()` повертає значення рядка, переведене в нижній регістр, з урахуванням будь-яких, специфічних для конкретної локалі, перетворень. Метод `toLocaleLowerCase()` не впливає на на значення початкового рядка. В більшості випадків він виведе такий самий результат, як і {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}, проте для деяких локалей (зокрема турецької, чиї перетворення регістру не відповідають усталеним перетворенням, закріпленим в Unicode), результат може відрізнятись.

## Приклади

### Застосування методу toLocaleLowerCase()

```js
'АБЕТКА'.toLocaleLowerCase(); // 'абетка'

'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
