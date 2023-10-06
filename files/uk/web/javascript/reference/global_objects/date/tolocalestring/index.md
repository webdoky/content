---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
browser-compat: javascript.builtins.Date.toLocaleString
---

{{JSRef}}

Метод **`toLocaleString()`** (до рядка згідно з локаллю) примірників {{jsxref("Date")}} повертає рядок з чутливим до мови представленням дати. У реалізаціях без підтримки [API `Intl.DateTimeFormat`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) цей метод просто викликає `Intl.DateTimeFormat`.

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## Синтаксис

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Параметри

Аргументи `locales` та `options` підлаштовують поведінку функції, і дають застосункам змогу задати ту мову, чиї правила форматування слід застосувати.

В тих реалізаціях, які підтримують [API `Intl.DateTimeFormat`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), ці параметри чітко відповідають параметрам конструктора [`Intl.DateTimeFormat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Від реалізацій, що не мають підтримки `Intl.DateTimeFormat`, вимагається ігнорувати обидва параметри, що робить вжиту локаль та форму поверненого рядка цілковито залежною від реалізацій.

- `locales` {{optional_inline}}

  - : Рядок із позначенням мови у форматі BCP 47, або масив таких рядків. Відповідає параметрові [`locales`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) конструктора `Intl.DateTimeFormat()`.

    В тих реалізаціях, що не мають підтримки `Intl.DateTimeFormat`, цей параметр ігнорується, і зазвичай використовується локаль хоста.

- `options` {{optional_inline}}

  - : Об'єкт, що підлаштовує формат виводу. Відповідає параметрові [`options`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) конструктора `Intl.DateTimeFormat()`. Опція `timeStyle` повинна залишатися невизначеною — інакше викидатиметься виняток {{jsxref("TypeError")}}. Якщо невизначеними є всі опції: `weekday`, `year`, `month`, та `day` — то значеннями `year`, `month`, і `day` буде встановлено `"numeric"`.

    В реалізаціях без підтримки `Intl.DateTimeFormat` цей параметр ігнорується.

Докладніше про ці параметри та про те, як їх використовувати — в розділі [Конструктор `Intl.DateTimeFormat()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Повернене значення

Рядок, що позначає дату, сформований згідно із притаманними мові правилами.

В реалізаціях, що містять `Intl.DateTimeFormat`, це еквівалентно викликові `new Intl.DateTimeFormat(locales, options).format(date)`.

> **Примітка:** У більшості випадків форматування, котре повертає `toLocaleString()`, є сталим. Проте вивід може відрізнятися відповідно до часу, мови та реалізації: варіація виводу є частиною задуму цього методу й дозволена специфікацією. Не можна порівнювати результати `toLocaleString()` зі статичними значеннями.

## Приклади

### Застосування toLocaleString()

В найпростішому випадку, без вказання конкретної локалі, буде повернено рядок, відформатований згідно з усталеними локаллю та опціями.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Без аргументів, toLocaleString() залежить від реалізації,
// усталеної локалі та усталеного часового поясу
console.log(date.toLocaleDateString());
// "12/11/2012, 7:00:00 PM", якщо виконано в локалі en-US та часовому поясі America/Los_Angeles
```

### Перевірка підтримки параметрів locales та options

Параметри `locales` та `options` можуть підтримуватися не у всіх реалізаціях, оскільки підтримка API інтернаціоналізації є необов'язковою, і деякі системи можуть не мати необхідних даних. У реалізаціях без підтримки інтернаціоналізації `toLocaleString()` завжди використовує локаль системи, що може не відповідати вашим потребам. Оскільки будь-яка реалізація, що підтримує параметри `locales` та `options`, повинна підтримувати API {{jsxref("Intl")}}, ви можете перевірити його наявність для підтримки:

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Застосування локалей

Цей приклад ілюструє деякі відмінності в локалізованих форматах дати та часу. Аби отримати формат згідно з тією мовою, яка використана в користувацькому інтерфейсі застосунку, слід вказати її (разом із можливими запасними варіантами), використавши аргумент `locales`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// формати, наведені нижче, приймають часовий пояс за місцевий для локалі;
// America/Los_Angeles для US

// Американська англійська послуговується послідовністю місяць-день-рік і 12-годинним часом, із AM чи PM
console.log(date.toLocaleString("en-US"));
// "12/19/2012, 7:00:00 PM"

// В британській англійській вживають послідовність день-місяць-рік і 24 годинним часом, без AM чи PM
console.log(date.toLocaleString("en-GB"));
// "20/12/2012 03:00:00"

// Корея використовує порядок рік-місяць-день і 12-годинний час, із AM чи PM
console.log(date.toLocaleString("ko-KR"));
// "2012. 12. 20. 오후 12:00:00"

// Арабська у більшості арабськомовних країн використовує східноарабські цифри
console.log(date.toLocaleString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// У випадку японської мови, застосунки можуть вирішити застосовувати японський календар, у якому 2012 рік був 24 роком епохи Хейсей
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// "24/12/20 12:00:00"

// в разі запиту мови, яка може не підтримуватись, наприклад — балійської,
// варто додати запасну мову (в цьому випадку — індонезійську)
console.log(date.toLocaleString(["ban", "id"]));
// "20/12/2012 11.00.00"
```

### Застосування опцій

Результат, наданий методом `toLocaleString()`, можна налаштувати за допомогою аргументу `options`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Запитати день тижня разом із довгим форматом дати
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// якийсь застосунок може вирішити вжити часовий пояс UTC, і явно показати це
options.timeZone = "UTC";
options.timeZoneName = "short";

console.log(date.toLocaleString("en-US", options));
// "Thursday, December 20, 2012, GMT"

// Іноді навіть для США необхідний 24-годинний час
console.log(date.toLocaleString("en-US", { hour12: false }));
// "12/19/2012, 19:00:00"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
