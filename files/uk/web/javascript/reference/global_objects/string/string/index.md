---
title: String() constructor
slug: Web/JavaScript/Reference/Global_Objects/String/String
tags:
  - Constructor
  - JavaScript
  - Reference
  - String
browser-compat: javascript.builtins.String.String
---
{{JSRef}}

Конструктор **`String`** використовується для створення нових об'єктів {{jsxref("String")}}. Викликаний як функція, він виконує приведення типу аргументу до {{Glossary("string", "примітивного рядка")}}, що, зазвичай, корисніше.

## Синтаксис

```js
new String(thing)
String(thing)
```

### Параметри

- `thing`
  - : Будь-що може бути перетворене на рядок.

## Приклади

### Конструктор String та функція String

Конструктор String та функція String повертають різні результати:

```js
typeof String('Привіт, світе!'); // string
typeof new String('Привіт, світе!'); // object
```

Як наведено вище, функція повертає рядок ({{Glossary("primitive", "примітивний")}} тип), як і очікувалось.
Однак конструктор повертає екземпляр об'єкту типу String (об'єктну обгортку), і саме тому дуже рідко виникає потреба використовувати конструктор String.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Настанови з JavaScript щодо форматування тексту](/uk/docs/Web/JavaScript/Guide/Text_formatting)
