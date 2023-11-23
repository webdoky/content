---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.localeCompare
---

{{JSRef}}

Метод **`localeCompare()`** (порівняти за локаллю) значень {{jsxref("String")}} повертає число, яке вказує, чи переданий рядок під час сортування повинен стояти перед, після, або є еквівалентним до поточного рядка. В реалізаціях, що підтримують [API `Intl.Collator`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), цей метод просто викликає `Intl.Collator`.

Для порівняння великої кількості рядків (наприклад, під час сортування великих масивів) краще створити окремий об'єкт {{jsxref("Intl.Collator")}} і застосувати функцію, яка надається його методом {{jsxref("Intl/Collator/compare", "compare()")}}.

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

## Синтаксис

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### Параметри

Параметри `locales` і `options` налаштовують поведінку функції й дають застосункам змогу задати мову, чиї поняття про форматування повинні бути застосовані.

В реалізаціях, що підтримують [API `Intl.Collator`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), ці параметри точно відповідають параметрам конструктора [`Intl.Collator()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator). Від реалізацій без підтримки `Intl.Collator` очікується ігнорування обох цих параметрів, через що повернений результат порівняння цілком залежить від реалізації – від нього лишень вимагають _сталості_.

- `compareString`
  - : Рядок, з яким порівнюється вихідний рядок `referenceStr`. Будь-які значення [зводяться до рядка](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka), тож пропуск цього параметра або передача `undefined` призводить до того, що `localeCompare()` виконує порівняння з рядком `"undefined"`, а це рідко саме те, що потрібно.
- `locales` {{optional_inline}}

  - : Рядок з тегом мови BCP 47, або масив таких рядків. Відповідає параметрові [`locales`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales) конструктора `Intl.Collator()`.

    В реалізаціях без підтримки `Intl.Collator` цей параметр ігнорується, і зазвичай використовується домашня локаль.

- `options` {{optional_inline}}

  - : Об'єкт, що налаштовує формат виведення. Відповідає параметрові [`options`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options) конструктора `Intl.Collator()`.

    В реалізаціях без підтримки `Intl.Collator` цей параметр ігнорується.

Деталі щодо параметрів `locales` і `options` та їх використання – дивіться на сторінці [конструктора `Intl.Collator()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator).

### Повернене значення

**Від'ємне** число, якщо `referenceStr` повинен стояти до `compareString`; **додатне**, якщо `referenceStr` повинен стояти після `compareString`; `0`, якщо ці рядки рівносильні.

В реалізаціях з `Intl.Collator` це рівносильно `new Intl.Collator(locales, options).compare(referenceStr, compareString)`.

## Опис

Повертає ціле число, яке вказує, чи переданий рядок `compareString` під час сортування повинен стояти перед, після, або є еквівалентним до початкового рядка `referenceStr`.

- Від'ємне, якщо `referenceStr` опиняється перед `compareString`
- Додатне, якщо `referenceStr` опиняється після `compareString`
- Повертає `0`, якщо рядки еквівалентні

> **Примітка:** Не варто покладатись на конкретні значення `-1` чи `1`.
>
> Додатні та від'ємні цілочисельні результати можуть відрізнятися залежно від браузера (так само як і між різними версіями одного браузера), оскільки специфікація ECMAScript формально вимагає лише від'ємність чи додатність значення, а не його величину. Деякі браузери можуть повертати `-2` чи `2`, або навіть якісь інші додатні чи від'ємні значення.

## Приклади

### Застосування методу localeCompare()

```js
// Літера "a" знаходиться перед "c", що видає в результаті від'ємне значення
"a".localeCompare("c"); // -2 або -1 (чи якесь інше від'ємне число)

// З точки зору алфавітного порядку –
// слово "check" йде після "against", видаючи в результаті додатне значення
"check".localeCompare("against"); // 2 або 1 (чи якесь інше додатне значення)

// "a" та "a" — еквівалентні, що видає в результаті беззнаковий нуль
"a".localeCompare("a"); // 0
```

### Сортування масиву

`localeCompare()` дає змогу виконувати нечутливе до регістру сортування масиву.

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Перевірка підтримки браузером розширених аргументів

Аргументи `locales` та `options` підтримуються іще поки не всіма браузерами.

Для перевірки їх підтримки даною реалізацією достатньо вжити `"i"` другим аргументом (відповідно до вимоги відхиляти недійсні мовні позначення) і перевірити наявність винятку {{jsxref("RangeError")}}:

```js
function localeCompareSupportsLocales() {
  try {
    "foo".localeCompare("bar", "i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Застосування аргументу locales

Результат, повернений методом `localeCompare()`, відрізняється для різних мов. Аби отримати порядок сортування згідно з мовою інтерфейсу конкретного застосунку, необхідно впевнитися, що ця мова (разом із, можливо, якимись запасними варіантами мов) вказана в аргументі `locales`:

```js
console.log("ä".localeCompare("z", "de")); // від'ємне значення: у німецькій мові ä ставиться перед z
console.log("ä".localeCompare("z", "sv")); // додатне значення: у шведській мові ä ставиться після z
```

### Застосування аргументу options

Результат, отриманий з `localeCompare()`, можна налаштувати за допомогою аргументу `options`:

```js
// у німецькій мові базовою літерою "ä" є "a"
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// у шведській мові "ä" та "a" — це літери з різними основами
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // додатне значення
```

### Сортування чисел

```js
// усталено, "2" > "10"
console.log("2".localeCompare("10")); // 1

// сортування чисел шляхом вказання "options":
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// сортування чисел шляхом передачі спеціальної позначки локалі:
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`Intl.Collator`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
