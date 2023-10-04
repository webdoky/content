---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.toLocaleUpperCase
---

{{JSRef}}

Метод **`toLocaleUpperCase()`** (до вищого регістру згідно з локаллю) значень {{jsxref("String")}} повертає свій рядок, переведений у вищий регістр, з врахуванням будь-яких перетворень, специфічних для конкретної локалі.

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## Синтаксис

```js-nolint
toLocaleUpperCase()
toLocaleUpperCase(locales)
```

### Параметри

- `locales` {{optional_inline}}
  - : Рядок з тегом мови BCP 47, або масив таких рядків. Позначає локаль, налаштування якої будуть використані для переведення рядка у верхній регістр, з урахуванням будь-яких, специфічних для локалі, перетворень. Загальну форму та тлумачення аргументу `locales` дивіться в [описі цього параметра на головній сторінці `Intl`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl#arhument-locales).

На відміну від інших методів, що використовують аргумент `locales`, `toLocaleUpperCase()` не дозволяє зіставлення локалей. Таким чином, перевіривши валідність аргументу `locales`, цей метод завжди використовує першу локаль у списку (або усталену локаль, якщо цей список порожній), навіть тоді, коли ця локаль не підтримується реалізацією.

### Повернене значення

Новий рядок, що містить значення рядка, на якому було викликано метод, переведене у верхній регістр, з урахуванням будь-яких, специфічних для конкретної локалі, перетворень.

## Опис

Метод `toLocaleUpperCase()` повертає значення рядка, переведене у верхній регістр, з урахуванням будь-яких, специфічних для конкретної локалі, перетворень. Метод `toLocaleUpperCase()` не впливає на значення початкового рядка. В більшості випадків він виведе такий самий результат, як і {{jsxref("String/toUpperCase", "toUpperCase()")}}, проте для деяких локалей (зокрема турецької, чиї перетворення регістру не відповідають усталеним перетворенням, закріпленим в Unicode), результат може відрізнятись.

Також варто зауважити, що зміна регістру не завжди означає перетворення символів 1:1, деякі символи запросто можуть перетворитися на два (чи навіть більше) символів після переведення у верхній регістр. Тому довжина рядка з результатом може відрізнятись від довжини початкового рядка. Це також означає, що таке перетворення не є стабільним, тобто такий вираз може повернути `false`:
`x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

## Приклади

### Застосування toLocaleUpperCase()

```js
"абетка".toLocaleUpperCase(); // 'АБЕТКА'

"Gesäß".toLocaleUpperCase(); // 'GESÄSS'

"i\u0307".toLocaleUpperCase("lt-LT"); // 'I'

const locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
"i\u0307".toLocaleUpperCase(locales); // 'I'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
