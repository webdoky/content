---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
tags:
  - Date
  - JavaScript
  - Method
  - Reference
  - Time
  - Polyfill
browser-compat: javascript.builtins.Date.now
---
{{JSRef}}

Статичний метод **`Date.now()`** (зараз) повертає число мілісекунд, що сплили з моменту 1 січня 1970 року, 00:00:00 за UTC (Всесвітнім координованим часом).

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## Синтаксис

```js
Date.now()
```

### Повернене значення

{{jsxref("Number", "Число")}}, котре позначає число мілісекунд, що сплило від початку епохи UNIX.

## Приклади

### Зменшена точність часу

Для забезпечення захисту від часових атак і створення цифрових відбитків, точні значення `Date.now()` можуть заокруглюватись залежно від налаштувань браузера. Наприклад, у Firefox опція `privacy.reduceTimerPrecision` — усталено ввімкнена, і усталено дорівнює 20 мкс у версії Firefox 59; у версії 60 вона дорівнює вже 2 мс.

```js
// зменшена точність часу (2мс) у Firefox 60
Date.now()
// 1519211809934
// 1519211810362
// 1519211811670
// …

// зменшена точність часу із увімкненою опцією `privacy.resistFingerprinting`
Date.now();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

У Firefox також можна увімкнути `privacy.resistFingerprinting`, і в цьому випадку точність дорівнюватиме 100 мс або значенню `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` — тому з них, яке буде більшим.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл для `Date.now` у `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{domxref("Performance.now()")}} — надає відмітки часу із субмілісекундною роздільною здатністю, для застосування з метою вимірювання продуктивності вебсторінок
- {{domxref("console.time()")}} / {{domxref("console.timeEnd()")}}
