---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
tags:
  - Date
  - IANA Timezone Format
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toLocaleDateString
---

{{JSRef}}

Метод **`toLocaleDateString()`** (до рядка дати згідно з локаллю) повертає рядок з чутливим до мови представленням частки заданої дати, згідно з часовим поясом користувацького агента. В реалізаціях з підтримкою [API `Intl.DateTimeFormat`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) цей метод просто викликає `Intl.DateTimeFormat`.

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html")}}

## Синтаксис

```js-nolint
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
```

### Параметри

Аргументи `locales` і `options` видозмінюють поведінку функції та дають застосункам змогу вказати мову, чиї поняття про оформлення дат будуть використані.

В реалізаціях, що підтримують [API `Intl.DateTimeFormat`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), ці параметри точно відповідають параметрам конструктора [`Intl.DateTimeFormat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Від реалізацій без підтримки `Intl.DateTimeFormat` очікується ігнорування обох параметрів, через що використана локаль та форма поверненого рядка – цілком залежать від реалізації.

- `locales` {{optional_inline}}

  - : Рядок з тегом мови BCP 47, або ж масив таких рядків. Відповідає параметрові [`locales`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) конструктора `Intl.DateTimeFormat()`.

    В реалізаціях без підтримки `Intl.DateTimeFormat` цей параметр ігнорується, і зазвичай використовується системна локаль.

- `options` {{optional_inline}}

  - : Об'єкт, що налаштовує формат виведення. Відповідає параметрові [`options`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) конструктора `Intl.DateTimeFormat()`. Опція `timeStyle` мусить бути невизначеною, інакше буде викинуто {{jsxref("TypeError")}}. Коли опції `weekday`, `year`, `month` і `day` – усі невизначені, то опції `year`, `month` і `day` приймаються за `"numeric"`.

    В реалізаціях без підтримки `Intl.DateTimeFormat` цей параметр ігнорується.

Подробиці про ці параметри та те, як їх використовувати – на сторінці [конструктора `Intl.DateTimeFormat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Повернене значення

Рядок, що представляє дату з переданого примірника {{jsxref("Global_Objects/Date", "Date")}}, згідно зі специфічними для мови поняттями.

В реалізаціях з `Intl.DateTimeFormat` це рівносильно `new Intl.DateTimeFormat(locales, options).format(date)`, де `options` був нормалізований, як показано вище.

## Швидкодія

При форматуванні великої кількості дат краще створити об'єкт [`Intl.DateTimeFormat`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) і використовувати його метод [`format()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format).

## Приклади

### Застосування toLocaleDateString()

При базовому застосуванні, без вказування локалі, повертається відформатований рядок, згідно з усталеною локаллю й усталеними опціями.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() без аргументів залежить від реалізації,
// усталеної локалі та усталеного часового поясу
console.log(date.toLocaleDateString());
// "12/11/2012", коли запущено з локаллю en-US в часовому поясі America/Los_Angeles
```

### Перевірка підтримки аргументів locales і options

Аргументи `locales` і `options` поки не підтримуються в усіх браузерах.
Для перевірки того, чи реалізація вже їх підтримує, можна використати вимогу того, що неприпустимі теги мови відкидаються з винятком {{jsxref("RangeError")}}:

```js
function toLocaleDateStringSupportsLocales() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Використання locales

Цей приклад демонструє частину варіацій локалізованих форматів дати. Аби отримати формат мови, що використовується в користувацькому інтерфейсі вашого застосунку, слід обов'язково вказати цю мову (і, можливо, якісь запасні мови) за допомогою аргументу `locales`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// формати нижче виходять із місцевого часового поясу локалі;
// America/Los_Angeles для США

// Англійська мова США використовує порядок місяць-день-рік
console.log(date.toLocaleDateString("en-US"));
// "12/20/2012"

// Британська англійська використовує порядок день-місяць-рік
console.log(date.toLocaleDateString("en-GB"));
// "20/12/2012"

// Корейська використовує порядок рік-місяць-день
console.log(date.toLocaleDateString("ko-KR"));
// "2012. 12. 20."

// Подія для перської мови, Важко вручну перевести дату на перський календар
console.log(date.toLocaleDateString("fa-IR"));
// "۱۳۹۱/۹/۳۰"

// Арабська в більшості арабськомовних країн використовує справжні арабські цифри
console.log(date.toLocaleDateString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢"

// у випадку японської застосунки можуть вирішити використовувати японський календар,
// в якому 2012 рік був 24 роком епохи Хейсей
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// "24/12/20"

// при запиті мови, котра може не підтримуватися, як то
// балійська, слід задати запасну мову, в цьому випадку – індонезійську
console.log(date.toLocaleDateString(["ban", "id"]));
// "20/12/2012"
```

### Застосування options

Результати `toLocaleDateString()` можуть бути налаштовані за допомогою аргументу `options`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// запитати день тижня поруч з розгорнутою датою
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// застосунок може використовувати UTC і явно це показувати
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleDateString("en-US", options));
// "Thursday, December 20, 2012, UTC"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`Intl.DateTimeFormat`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
