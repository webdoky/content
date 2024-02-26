---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
page-type: javascript-static-method
browser-compat: javascript.builtins.Date.parse
---

{{JSRef}}

Статичний метод **`Date.parse()`** (розібрати) розбирає рядкове представлення дати й повертає її [мітку часу](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#epokha-mitky-chasu-ta-nediisna-data).

Лише [формат рядка дати та часу](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#format-riadka-daty-ta-chasu) явно вказаний як такий, що підтримується. Інші формати залежать від реалізації й можуть не працювати на всіх браузерах. Якщо треба узгоджувати кілька різних форматів, може допомогти бібліотека.

{{EmbedInteractiveExample("pages/js/date-parse.html")}}

## Синтаксис

```js-nolint
Date.parse(dateString)
```

### Параметри

- `dateString`
  - : Рядок у [форматі рядка дати та часу](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#format-riadka-daty-ta-chasu). Дивіться застереження щодо використання різних форматів у довідці за посиланням.

### Повернене значення

Число, що представляє [мітку часу](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date#format-riadka-daty-ta-chasu) переданої дати. Якщо `dateString` не виходить розібрати як дійсну дату, повертається {{jsxref("NaN")}}.

## Опис

Ця функція корисна для задання значень дати, заснованих на рядкових значеннях, наприклад, у поєднанні з методом {{jsxref("Date/setTime", "setTime()")}}.

У зв'язку з тим, що `parse()` є статичним методом `Date`, викликається він завжди як `Date.parse()`, а не як метод самотужки створеного об'єкта `Date`.

## Приклади

### Використання Date.parse()

Усі наступні виклики повернуть `1546300800000`. Перший зробить припущення про часовий пояс Всесвітнього координованого часу, оскільки вказана лише дата, а інші явно задають часовий пояс В.К.Ч..

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Наступний виклик, котрий не вказує часовий пояс, призведе до 2019-01-01 00:00:00 в місцевому часовому поясі системи, тому що містить і дату, і час.

```js
Date.parse("2019-01-01T00:00:00");
```

### Нестандартні рядки дат

> **Примітка:** Цей розділ містить залежну від реалізації логіку, котра може бути неоднаковою на різних реалізаціях.

Реалізації зазвичай використовують місцеву часову зону як усталену, коли рядок дати є нестандартним. З метою узгодженості ми будемо припускати, що код використовує часову зону В.К.Ч..

> **Примітка:** Зміщення місцевої часової зони походить від системних налаштувань пристрою та застосовується до дати, що розбирається. [Також на це може впливати літній час (DST) місцевої часової зони](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#rizni-rezultaty-v-rehionakh-z-litnim-chasom-dst).

```js
Date.parse("Jan 1, 1970"); // 0 у всіх реалізаціях

Date.parse("Thu, 01 Jan 1970 00:00:00"); // 0 у всіх реалізаціях

Date.parse("1970,1,1"); // 0 у Chrome і Firefox, NaN у Safari

Date.parse("02 01 1970");
// 2678400000 у Chrome і Firefox (Sun Feb 01 1970 00:00:00 GMT+0000);
// NaN у Safari

// З явною часовою зоною
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT+0300");
// -10800000 у всіх реалізаціях у всіх часових зонах

// Одне число
Date.parse("0");
// NaN у Firefox ≤122
// 946684800000 у Chrome and Firefox ≥123  (Sat Jan 01 2000 00:00:00 GMT+0200 (Eastern European Standard Time));
// -62167219200000 у Safari (Sat Jan 01 0000 02:02:04 GMT+0202 (Eastern European Standard Time))

// Двоцифрове число, котре може бути місяцем
Date.parse("28");
// NaN у Chrome і Firefox
// -61283606400000 у Safari (Sat Jan 01 0028 02:02:04 GMT+0202 (Eastern European Standard Time))

// Двоцифровий рік
Date.parse("70/01/01"); // 0 у всіх реалізаціях

// Компоненти дати поза межами допустимих значень
Date.parse("2014-25-23"); // NaN у всіх реалізаціях
Date.parse("Mar 32, 2014"); // NaN у всіх реалізаціях
Date.parse("2014/25/23"); // NaN у всіх реалізаціях

Date.parse("2014-02-30");
// NaN у Safari
// 1393718400000 у Chrome і Firefox (Sun Mar 02 2014 02:00:00 GMT+0200 (Eastern European Standard Time))
Date.parse("02/30/2014"); // 1393718400000 у всіх реалізаціях

// Chrome, Safari та Firefox від 122 версії розбирають лише перші три літери місяця.
// FF121 і раніші версії розбирають перші літери і все, що далі, поки не вийде коректна назва місяця.
Date.parse("04 Dec 1995"); // 818031600000 у всіх реалізаціях
Date.parse("04 Decem 1995"); // 818031600000 у всіх реалізаціях
Date.parse("04 December 1995"); // 818031600000 у всіх реалізаціях
Date.parse("04 DecFoo 1995"); // NaN у Firefox до 121 версії включно. 818031600000 у решті реалізацій
Date.parse("04 De 1995"); // NaN у всіх реалізаціях
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Date.UTC()")}}
