---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
  - Polyfill
browser-compat: javascript.builtins.String.split
---

{{JSRef}}

Метод **`split()`** (розщепити) приймає патерн і ділить {{jsxref("String", "рядок")}} на впорядкований список підрядків шляхом пошуку переданого патерну, додання підрядків до масиву і повернення цього масиву.

{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}

## Синтаксис

```js
split();
split(separator);
split(separator, limit);
```

### Параметри

- `separator` (розділювач) {{optional_inline}}
  - : Патерн, що вказує, де повинно відбутися кожне розщеплення. Може бути або рядком, або об'єктом з методом [`Symbol.split`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split); типовим прикладом такого об'єкта є {{jsxref("Global_Objects/RegExp", "регулярний вираз", "", 1)}}. Якщо цей параметр `undefined`, то повертається вихідний рядок, обгорнутий в масив.
- `limit` (обмеження) {{optional_inline}}
  - : Невід'ємне ціле число, котре позначає обмеження кількості підрядків, які буде включено в повернений масив. Якщо цей параметр задано, рядок розділяється в кожному місці, де трапляється вказаний `separator`, проте зупиняється, коли в масиві опиняється вказана в `limit` кількість елементів. Будь-який залишок тексту не буде включено в масив узагалі.
    - Масив може містити менше елементів, ніж вказано в `limit`, якщо функція дійшла до кінця рядка раніше, ніж був вибраний `limit`.
    - Якщо `limit` дорівнює `0`, буде повернено `[]`.

### Повернене значення

{{jsxref("Array", "Масив")}} рядків, розділених в місцях, де в початковому рядку знаходилися значення розділювача `separator`.

## Опис

Якщо `separator` – непустий рядок, то цільовий рядок ділиться за всіма входженнями `separator`, не включаючи `separator` в результати. Наприклад, рядок, що містить розділені табуляцією значення (TSV) може бути розібраний шляхом передачі символу табуляції як розділювача: `myString.split("\t")`. Якщо `separator` містить декілька символів, то для розділення мусить бути знайдена вся послідовність `separator`. Якщо `separator` зустрічається на початку (або кінці) рядка, розділення все одно спрацьовує, внаслідок чого на початку (або в кінці) поверненого масиву з'являється порожній (тобто нульової довжини) рядок. Якщо `separator` не зустрічається в `str`, то повернений масив містить єдиний елемент, котрий містить ввесь рядок.

Якщо `separator` – порожній рядок (`""`), то `str` перетворюється на масив своїх "символів" UTF-16, котрий не містить порожніх рядків на жодному зі своїх кінців.

> **Примітка:** Таким чином, при передачі рядка як `separator` – `"".split("")` є єдиним способом отримати порожній масив.
> **Застереження:** Коли як розділювач використовується порожній рядок (`""`), то рядок **не** ділиться на _видимі символи_ ([графемні кластери (англ.)](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) чи символи юнікоду (кодові точки), натомість – на кодові одиниці UTF-17. Отже – руйнуються [сурогатні пари (англ.)](https://unicode.org/faq/utf_bom.html#utf16-2). Дивіться ["Як на JavaScript отримати з рядка масив символів?" на StackOverflow (англ.)](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402).
> Якщо `separator` є регулярним виразом із групами захоплення, то при кожному збігу `separator` отримані групи захоплення (включно з усіма результатами `undefined`) додаються до результівного масиву. Така поведінка задана методом регулярного виразу [`Symbol.split`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)

Якщо `separator` є об'єктом з методом [`Symbol.split`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split), то цей метод викликається із передачею йому цільового рядка та `limit`, а значенням `this` є цей об'єкт. Результат виклику методу стає поверненим значенням `split`.

Будь-яке інше значення перед використанням як роздільник буде приведено до рядка.

## Приклади

### Застосування split()

Якщо початковий рядок порожній, і не вказаний жодний розділювач, `split()` поверне масив з одним порожнім рядком замість порожнього масиву. Якщо ж обидва значення — і рядок, і розділювач — це порожні рядки, буде повернено порожній масив.

```js
const emptyString = '';

// Рядок є порожнім, жодний розділювач не вказаний
console.log(emptyString.split());
// [""]

// і рядок, і розділювач – порожні рядки
console.log(emptyString.split(emptyString));
// []
```

В наступному прикладі оголошується функція, яка розділяє початковий рядок на масив рядків, використовуючи розділювач `separator`. Після розділення функція друкує повідомлення з початковим рядком (до розділення), використаний розділювач, кількість елементів у масиві-результаті, а також самі окремі елементи цього масиву.

```js
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log('Початковий рядок — ', stringToSplit);
  console.log('Розділювач — ', separator);
  console.log(
    'Масив містить ',
    arrayOfStrings.length,
    ' елементів: ',
    arrayOfStrings.join(' / '),
  );
}

const tempestString = 'Який чудесний світ новий оцей, де отакі є люди!';
const monthString = 'Січ,Лют,Бер,Кві,Тра,Чер,Лип,Сер,Вер,Жов,Лис,Гру';

const space = ' ';
const comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
```

Цей приклад видає наступний вивід:

```plain
Початковий рядок — "Який чудесний світ новий оцей, де отакі є люди!"
Розділювач — " "
Масив містить 9 елементів: Який / чудесний / світ / новий / оцей, / де / отакі / є / люди!.

Початковий рядок — "Який чудесний світ новий оцей, де отакі є люди!"
Розділювач — "undefined"
Масив містить 1 елемент: Який чудесний світ новий оцей, де отакі є люди!

Початковий рядок — "Січ,Лют,Бер,Кві,Тра,Чер,Лип,Сер,Вер,Жов,Лис,Гру"
Розділювач — ","
Масив містить 12 елементів: Січ / Лют / Бер / Кві / Тра / Чер / Лип / Сер / Вер / Жов / Лис / Гру
```

### Видалення пробілів з рядка

В наступному прикладі `split()` шукає нуль чи більше пробілів, за якими йде крапка з комою, далі – знову нуль чи більше пробілів, і, коли знаходить, видаляє їх з рядка. Масив `nameList` містить результат, повернений з `split()`.

```js
const names =
  'Сергій Мельник ;Антон Коваленко; Олена Шевченко ; Михайло Бондаренко ;Євген Бойко ';

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
```

Цей код записує два рядки: перший містить початкову стрічку тексту, а другий — масив із результатами.

```plain
Сергій Мельник ;Антон Коваленко; Олена Шевченко ; Михайло Бондаренко ;Євген Бойко
[ "Сергій Мельник", "Антон Коваленко", "Олена Шевченко", "Михайло Бондаренко", "Євген Бойко", "" ]
```

### Повернення обмеженої кількості розділених значень

В наступному прикладі `split()` шукає пробіли в рядку, і повертає перші три відділених значення з-поміж тих, які знаходить.

```js
const myString = 'Здрастуй, світе. Як ся маєш?';
const splits = myString.split(' ', 3);

console.log(splits);
```

Цей скрипт виводить наступне:

```js
['Здрастуй,', 'світе.', 'Як'];
```

### Розділення рядка за регулярним виразом `RegExp` для включення частин розділювача в результат

Якщо `separator` є регулярним виразом, що містить дужки для захоплення `(` `)`, знайдені збіги будуть також включені до масиву.

```js
const myString = 'Здрастуй 1 слово. Речення номер 2.';
const splits = myString.split(/(\d)/);

console.log(splits);
```

Цей скрипт виводить наступне:

```js
['Здрастуй ', '1', ' слово. Речення номер ', '2', '.'];
```

> **Примітка:** `\d` шукає збіги з [класом символів](/uk/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), що відповідає цифрам від 0 до 9.

### Використання власного розщеплювача

Об'єкт із методом `Symbol.split` може використовуватися як розщеплювач з особливою логікою.

Наступний приклад розщеплює рядок, використовуючи внутрішній стан, що складається з числа, котре щоразу збільшується на одиницю:

```js
const splitByNumber = {
  [Symbol.split](str) {
    let num = 1;
    let pos = 0;
    const result = [];
    while (pos < str.length) {
      const matchPos = str.indexOf(num, pos);
      if (matchPos === -1) {
        result.push(str.substring(pos));
        break;
      }
      result.push(str.substring(pos, matchPos));
      pos = matchPos + String(num).length;
      num++;
    }
    return result;
  },
};
const myString = 'a1bc2c5d3e4f';
console.log(myString.split(splitByNumber)); // => [ "a", "bc", "c5d", "e", "f" ]
```

Наступний приклад використовує внутрішній стан, щоб застосувати певну поведінку та пересвідчитися, що виробляється "дійсний" результат.

```js
const DELIMITER = ';';
// Розщепити команди, але усунути будь-які недійсні чи непотрібні значення.
const splitCommands = {
  [Symbol.split](str, lim) {
    const results = [];
    const state = {
      on: false,
      brightness: {
        current: 2,
        min: 1,
        max: 3,
      },
    };
    let pos = 0;
    let matchPos = str.indexOf(DELIMITER, pos);
    while (matchPos !== -1) {
      const subString = str.slice(pos, matchPos).trim();
      switch (subString) {
        case 'світло увімкнути':
          // Якщо стан `on` вже `true` – нічого не робити.
          if (!state.on) {
            state.on = true;
            results.push(subString);
          }
          break;
        case 'світло вимкнути':
          // Якщо стан `on` вже `false` – нічого не робити.
          if (state.on) {
            state.on = false;
            results.push(subString);
          }
          break;
        case 'яскравість збільшити':
          // Накласти верхню межу яскравості.
          if (state.brightness.current < state.brightness.max) {
            state.brightness.current += 1;
            results.push(subString);
          }
          break;
        case 'яскравість зменшити':
          // Накласти нижню межу яскравості.
          if (state.brightness.current > state.brightness.min) {
            state.brightness.current -= 1;
            results.push(subString);
          }
          break;
      }
      if (results.length === lim) {
        break;
      }
      pos = matchPos + DELIMITER.length;
      matchPos = str.indexOf(DELIMITER, pos);
    }
    // Якщо відбувся ранній вихід у зв'язку з досягненням межі кількості команд `lim` – решту команд не додавати.
    if (results.length < lim) {
      results.push(str.slice(pos).trim());
    }
    return results;
  },
};
const commands =
  'світло увімкнути; яскравість збільшити; яскравість збільшити; яскравість збільшити; світло увімкнути; яскравість зменшити; яскравість зменшити; світло вимкнути';
console.log(commands.split(splitCommands, 3)); // => ["світло увімкнути", "яскравість збільшити", "яскравість зменшити"]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.split` у складі `core-js`, з виправленнями й реалізацією сучасної логіки, як то підтримки `Symbol.split`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
- [Застосування регулярних виразів у JavaScript](/uk/docs/Web/JavaScript/Guide/Regular_Expressions)
