---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
page-type: javascript-static-method
browser-compat: javascript.builtins.Date.now
---

{{JSRef}}

Статичний метод **`Date.now()`** (зараз) повертає число мілісекунд, що сплили від початку [епохи](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#epokha-mitky-chasu-ta-nediisna-data), котрий визначений як північ на початку 1 січня 1970 року за Всесвітнім координованим часом.

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## Синтаксис

```js-nolint
Date.now()
```

### Параметри

Жодних.

### Повернене значення

Число, котре представляє [мітку часу](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#epokha-mitky-chasu-ta-nediisna-data) поточної миті в мілісекундах.

## Опис

### Знижена точність часу

Для забезпечення захисту від часових атак і [створення цифрових відбитків](/uk/docs/Glossary/Fingerprinting), точні значення `Date.now()` можуть заокруглюватись залежно від налаштувань браузера. Наприклад, у Firefox опція `privacy.reduceTimerPrecision` — усталено ввімкнена, і усталено дорівнює 20 мкс у Firefox. Також можна увімкнути `privacy.resistFingerprinting`, і в цьому випадку точність дорівнюватиме 100 мс або значенню `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` — залежно від того, яке з цих значень більше.

Наприклад, за зниженої точності значення часу результат `Date.now()` завжди буде кратним 2 та буде кратним 100 (або `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), коли ввімкнено `privacy.resistFingerprinting`.

```js
// знижена точність часу (2мс) у Firefox 60
Date.now();
// Може бути:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// знижена точність часу із увімкненою опцією `privacy.resistFingerprinting`
Date.now();
// Може бути:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Приклади

### Вимірювання часу, що минув

`Date.now()` можна скористатися, щоб отримати поточний час у мілісекундах, а потім відняти попередній час, щоб дізнатися, скільки часу минуло між двома викликами.

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
```

Для складніших сценаріїв можна замість цього скористатися [API продуктивності](/uk/docs/Web/API/Performance_API/High_precision_timing).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Date.now` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{domxref("Performance.now()")}}
- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
