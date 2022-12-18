---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
page-type: javascript-static-method
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

Статичний метод **`Date.now()`** (зараз) повертає число мілісекунд, що сплили від початку [епохи](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#epokha-ecmascript-i-mitky-chasu), котрий визначений як північ на початку 1 січня 1970 року за Всесвітнім координованим часом.

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## Синтаксис

```js-nolint
Date.now()
```

### Повернене значення

Число, котре позначає число мілісекунд, яке сплило від початку [епохи](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#epokha-ecmascript-i-mitky-chasu), котрий визначено як північ на початку 1 січня 1970 року за Всесвітнім координованим часом.

## Приклади

### Зменшена точність часу

Для забезпечення захисту від часових атак і створення цифрових відбитків, точні значення `Date.now()` можуть заокруглюватись залежно від налаштувань браузера. Наприклад, у Firefox опція `privacy.reduceTimerPrecision` — усталено ввімкнена, і усталено дорівнює 20 мкс у версії Firefox 59; у версії 60 вона дорівнює вже 2 мс.

```js
// зменшена точність часу (2мс) у Firefox 60
Date.now();
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
