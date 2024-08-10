---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
page-type: javascript-class
browser-compat: javascript.builtins.Intl.NumberFormat
---

{{JSRef}}

Об'єкт **`Intl.NumberFormat`** (інтернаціоналізація – формат чисел) дає змогу форматувати числа з урахуванням мови.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## Конструктор

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : Створює новий об'єкт `NumberFormat`.

## Статичні методи

- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Повертає масив, що містить ті з переданих локалей, котрі підтримуються без потреби відступати до усталеної локалі середовища виконання.

## Властивості примірника

Ці властивості означені на `Intl.NumberFormat.prototype` і спільні для всіх примірників `Intl.NumberFormat`.

- {{jsxref("Object/constructor", "Intl.NumberFormat.prototype.constructor")}}
  - : Функція-конструктор, котра створила цей об'єкт-примірник. Для примірників `Intl.NumberFormat` початковим значенням є конструктор {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat")}}.
- `Intl.NumberFormat.prototype[Symbol.toStringTag]`
  - : Початковим значенням властивості [`Symbol.toStringTag`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) є рядок `"Intl.NumberFormat"`. Ця властивість використовується в {{jsxref("Object.prototype.toString()")}}.

## Методи примірника

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : Функція-гетер, котра форматує число згідно з локаллю та опціями форматування цього об'єкта `Intl.NumberFormat`.
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}}
  - : Функція-гетер, котра форматує діапазон чисел згідно з локаллю та опціями форматування об'єкта `Intl.NumberFormat`, з якого цей метод викликано.
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}}
  - : Повертає {{jsxref("Array")}} з об'єктів, що представляють діапазон числових рядків у вигляді частин, що можуть бути використані для виконання власного форматування з урахуванням локалі.
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : Повертає {{jsxref("Array")}} з об'єктів, котрі представляють числовий рядок у вигляді частин, що може використовуватися для виконання власного форматування з урахуванням локалі.
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : Повертає новий об'єкт з властивостями, що відбивають локаль та опції порівняння, обчислені під час ініціалізації цього об'єкта.

## Приклади

### Базове застосування

При базовому застосуванні, без задання локалі, повертається рядок, форматований згідно з усталеними локаллю та опціями.

```js
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// '3,500', коли в локалі англійської мови в США
```

### Застосування локалей

Цей приклад демонструє частину варіацій форматів локалізованих чисел. Для отримання формату мови, котра використовується в користувацькому інтерфейсі застосунку, слід обов'язково задати цю мову (і бажано – якісь запасні мови) за допомогою аргументу `locales`:

```js
const number = 123456.789;

// Німецька використовує кому як десятковий розділювач і крапку як розділювач груп розрядів
console.log(new Intl.NumberFormat("de-DE").format(number));
// 123.456,789

// Арабська у більшості арабськомовних країн застосовує справжні арабські цифри
console.log(new Intl.NumberFormat("ar-EG").format(number));
// ١٢٣٤٥٦٫٧٨٩

// Індія використовує розділювач груп розрядів, а також лакх і крор
console.log(new Intl.NumberFormat("en-IN").format(number));
// 1,23,456.789

// ключ розширення nu задає систему числення, наприклад, китайські цифри
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// 一二三,四五六.七八九

// при заданні мови, котра може не підтримуватися, як то
// балійської, слід задати запасну мову, в цьому випадку це індонезійська
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// 123.456,789
```

### Використання опцій

Результати можуть бути налаштовані за допомогою аргументу [`options`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options):

```js
const number = 123456.789;

// задання формату валюти
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// 123.456,79 €

// Японська єна не використовує дробових значень
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// ￥123,457

// обмеження до трьох знаків після коми
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// 1,23,000

// Форматування з одиницями вимірювання
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// 16 litres
```

Вичерпний список опцій доступний на сторінці [конструктора `Intl.NumberFormat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Intl.NumberFormat` у складі FormatJS](https://formatjs.io/docs/polyfills/intl-numberformat/)
- {{jsxref("Intl")}}
