---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.toLocaleDateString
---

{{JSRef}}

Метод **`toLocaleDateString()`** (до рядка дати згідно з локаллю) примірників {{jsxref("Date")}} повертає рядок із чутливим до мови відображенням тієї частини поточної дати, яка містить лише календарну дату, в локальній часовій зоні. В тих реалізаціях, що мають підтримку [API `Intl.DateTimeFormat`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), цей метод просто делегує виконання до `Intl.DateTimeFormat`.

Щоразу, коли викликається `toLocaleString`, цей метод мусить виконати пошук у великій базі даних рядків локалізації, що потенційно може бути неефективним. Коли цей метод викликається багато разів з однаковими аргументами, краще створити об'єкт {{jsxref("Intl.DateTimeFormat")}} і використовувати його метод {{jsxref("Intl/DateTimeFormat/format", "format()")}}, оскільки об'єкт `DateTimeFormat` запам'ятовує передані йому аргументи, і може вирішити кешувати частину бази даних, щоб майбутні виклики `format` могли шукати рядки локалізації в більш обмеженому контексті.

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html", "taller")}}

## Синтаксис

```js-nolint
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
```

### Параметри

Параметри `locales` та `options` підлаштовують поведінку функції, і дають застосункам змогу задати ту мову, чиї правила форматування слід застосувати.

В тих реалізаціях, які підтримують [API `Intl.DateTimeFormat`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), ці параметри чітко відповідають параметрам конструктора [`Intl.DateTimeFormat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Від реалізацій, що не мають підтримки `Intl.DateTimeFormat`, вимагається ігнорувати обидва параметри, що робить вжиту локаль та форму поверненого рядка цілковито залежною від реалізацій.

- `locales` {{optional_inline}}

  - : Рядок із позначенням мови у форматі BCP 47, або масив таких рядків. Відповідає параметрові [`locales`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) конструктора `Intl.DateTimeFormat()`.

    В тих реалізаціях, що не мають підтримки `Intl.DateTimeFormat`, цей параметр ігнорується, і зазвичай використовується локаль хоста.

- `options` {{optional_inline}}

  - : Об'єкт, що підлаштовує формат виводу. Відповідає параметрові [`options`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) конструктора `Intl.DateTimeFormat()`. Опція `timeStyle` повинна залишатися невизначеною — інакше викидатиметься виняток {{jsxref("TypeError")}}. Якщо невизначеними є всі опції: `weekday`, `year`, `month`, та `day` — то значеннями `year`, `month`, і `day` буде встановлено `"numeric"`.

    В реалізаціях без підтримки `Intl.DateTimeFormat` цей параметр ігнорується.

Докладніше про ці параметри та про те, як їх використовувати — в розділі [Конструктор `Intl.DateTimeFormat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Повернене значення

Рядок, що позначає ту частку даної дати, яка містить дату, сформований згідно із притаманними мові правилами.

В реалізаціях, що містять `Intl.DateTimeFormat`, це еквівалентно викликові `new Intl.DateTimeFormat(locales, options).format(date)`, де параметр `options` нормалізовано так, як описано вище.

> [!NOTE]
> В більшості випадків форматування, повернене `toLocaleDateString()`, є сталим. Проте вивід може відрізнятися в різних реалізаціях, навіть із використанням однієї локалі: відмінності виводу є свідомими та дозволені специфікацією. Також вивід може бути не таким, як ви очікуєте. Наприклад, рядок може містити нерозривні пробіли або бути оточеним символами контролю напрямку письма. Не слід порівнювати результати `toLocaleDateString()` із жорстко зафіксованими сталими значеннями.

## Приклади

### Застосування toLocaleDateString()

Базове використання цього методу без задання `locale` повертає відформатований рядок згідно з усталеною локаллю та з усталеними опціями.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Без аргументів, toLocaleDateString() залежить від реалізації,
// усталеної локалі та усталеного часового поясу
console.log(date.toLocaleDateString());
// "12/11/2012", якщо виконано в локалі en-US та часовому поясі America/Los_Angeles
```

### Перевірка підтримки параметрів locales та options

Параметри `locales` та `options` можуть підтримуватися не у всіх реалізаціях, оскільки підтримка API інтернаціоналізації є необов'язковою, і деякі системи можуть не мати необхідних даних. У реалізаціях без підтримки інтернаціоналізації `toLocaleString()` завжди використовує локаль системи, що може не відповідати вашим потребам. Оскільки будь-яка реалізація, що підтримує параметри `locales` та `options`, повинна підтримувати API {{jsxref("Intl")}}, ви можете перевірити його наявність для підтримки:

```js
function toLocaleDateStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Застосування локалей

Цей приклад ілюструє деякі відмінності в локалізованих форматах дати. Аби отримати формат згідно з тією мовою, яка використана в користувацькому інтерфейсі застосунку, слід вказати її (разом із можливими запасними варіантами), використавши аргумент `locales`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// формати, наведені нижче з урахуванням припущення певного місцевого часового поясу локалі;
// America/Los_Angeles для US

// Американська англійська послуговується послідовністю місяць-день-рік
console.log(date.toLocaleDateString("en-US"));
// "12/20/2012"

// В британській англійській вживають послідовність день-місяць-рік
console.log(date.toLocaleDateString("en-GB"));
// "20/12/2012"

// Корея використовує порядок рік-місяць-день
console.log(date.toLocaleDateString("ko-KR"));
// "2012. 12. 20."

// В разі перської мови, доволі складно вручну привести дату до сонячної хіджрі
console.log(date.toLocaleDateString("fa-IR"));
// "۱۳۹۱/۹/۳۰"

// Араби в більшості арабомовних країн використовують справжні арабські цифри
console.log(date.toLocaleDateString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢"

// для японської локалі, застосунки можуть вирішити використовувати такий японський
// календар, де 2012 рік був 24 роком епохи Хейсей
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// "24/12/20"

// в разі запиту мови, яка може не підтримуватись, наприклад — балійської,
// варто додати запасну мову, в цьому випадку — індонезійську
console.log(date.toLocaleDateString(["ban", "id"]));
// "20/12/2012"
```

### Застосування опцій

Результат, наданий методом `toLocaleDateString()`, можна налаштувати за допомогою параметра `options`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Запитати день тижня разом із довгим форматом дати
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// Якийсь застосунок може вирішити вжити часовий пояс UTC, і явно показати це
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

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
