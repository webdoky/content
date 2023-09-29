---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.toLocaleLowerCase
---

{{JSRef}}

Метод **`toLocaleLowerCase()`** (до нижнього регістру згідно з локаллю) значень {{jsxref("String")}} повертає свій рядок, переведений у нижній регістр із врахуванням будь-яких перетворень, специфічних для конкретної локалі.

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## Синтаксис

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Параметри

- `locales` {{optional_inline}}
  - : Рядок з тегом мови BCP 47, або масив таких рядків. Позначає локаль, налаштування якої будуть використані для переведення рядка в нижній регістр, з урахуванням будь-яких, специфічних для локалі, перетворень. Загальну форму та тлумачення аргументу `locales` дивіться в [описі цього параметра на головній сторінці `Intl`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl#arhument-locales).

На відміну від інших методів, що використовують аргумент `locales`, `toLocaleLowerCase()` не дозволяє зіставлення локалей. Таким чином, перевіривши валідність аргументу `locales`, цей метод завжди використовує першу локаль у списку (або усталену локаль, якщо цей список порожній), навіть тоді, коли ця локаль не підтримується реалізацією.

### Повернене значення

Новий рядок, що містить значення рядка, на якому було викликано метод, переведене в нижній регістр, з урахуванням будь-яких, специфічних для конкретної локалі, перетворень.

## Опис

Метод `toLocaleLowerCase()` повертає значення рядка, переведене в нижній регістр, з урахуванням будь-яких, специфічних для конкретної локалі, перетворень. Метод `toLocaleLowerCase()` не впливає на значення початкового рядка. В більшості випадків він виведе такий самий результат, як і {{jsxref("String/toLowerCase", "toLowerCase()")}}, проте для деяких локалей (зокрема турецької, чиї перетворення регістру не відповідають усталеним перетворенням, закріпленим в Unicode), результат може відрізнятись.

## Приклади

### Застосування методу toLocaleLowerCase()

```js
"АБЕТКА".toLocaleLowerCase(); // 'абетка'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
