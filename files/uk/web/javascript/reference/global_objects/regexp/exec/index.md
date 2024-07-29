---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
page-type: javascript-instance-method
browser-compat: javascript.builtins.RegExp.exec
---

{{JSRef}}

Метод **`exec()`** (виконати) примірників {{jsxref("RegExp")}} виконує пошук збігу свого регулярного виразу в заданому рядку й повертає результівний масив або [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null).

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## Синтаксис

```js-nolint
exec(str)
```

### Параметри

- `str`
  - : Рядок, з котрим зіставляється регулярний вираз. Будь-які значення [зводяться до рядків](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka), тож пропуск цього параметра або передача в ньому `undefined` змусить `exec()` шукати рядок `"undefined"`, а це рідко саме те, що необхідно.

### Повернене значення

Якщо зіставлення не вдається, то метод `exec()` повертає [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) і присвоює властивості регулярного виразу [`lastIndex`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) значення `0`.

Якщо зіставлення вдається, то метод `exec()` повертає масив і оновлює властивість [`lastIndex`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) об'єкта регулярного виразу. Повернений масив містить текст збігу на першій позиції, а далі – по одному елементу на кожну групу захоплення в тексті збігу. Цей масив також має наступні додаткові властивості:

- `index`
  - : Індекс збігу в рядку, з нумерацією від нуля.
- `input`
  - : Вихідний рядок, з котрим відбувалось зіставлення.
- `groups`
  - : [Об'єкт з прототипом `null`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty) іменованих груп захоплення, чиї ключі – імена цих груп, а значення – самі групи, або {{jsxref("undefined")}}, якщо не була визначена жодна іменована група захоплення. Дивіться більше інформації на сторінці [груп захоплення](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- `indices` {{optional_inline}}

  - : Ця властивість присутня лише тоді, коли задана позначка [`d`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices). Це масив, кожен елемент якого представляє межі збігу підрядка. Індекс кожного елемента цього масиву відповідає індексові в масиві, поверненому `exec()`, відповідного збігу підрядка. Інакше кажучи, перший запис `indices` представляє ввесь збіг, другий – першу групу захоплення, і так далі. Кожний запис сам по собі є двоелементним масивом, у якого перше число представляє індекс початку збігу, а друге – індекс кінця.

    Крім цього, масив `indices` має властивість `groups`, котра зберігає [об'єкт з прототипом `null`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty), що містить усі іменовані групи захоплення. Його ключі – імена цих груп, а значення – масиви з двох елементів, у яких перше число – індекс початку, а друге – індекс кінця групи захоплення. Якщо регулярний вираз не містить жодних іменованих груп захоплення, то `groups` отримує значення `undefined`.

## Опис

Об'єкти JavaScript {{jsxref("RegExp")}} _мають стан_, коли мають позначку [глобальності](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) чи [липкості](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) (наприклад, `/foo/g` або `/foo/y`). Вони зберігають [`lastIndex`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) від попереднього зіставлення. Завдяки неявному використанню цієї властивості `exec()` можна використовувати для ітерації по багатьох збігах у рядку тексту (з групами захоплення), а не просто отримувати рядки збігу за допомогою {{jsxref("String.prototype.match()")}}.

При використанні `exec()` позначка глобальності не діє за присутності позначки липкості: зіставлення обов'язково буде липким.

`exec()` – примітивний метод регулярних виразів. Чимало інших їхніх методів неявно викликають `exec()` – включно з тими, що викликаються методами рядків, як то [`[Symbol.replace]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Хоч сам по собі `exec()` є потужним (і найефективнішим), він нерідко не доносить намір розробника якнайясніше.

- Якщо важливо лише те, чи збігається регулярний вираз із рядком, але не сам текст збігу, варто натомість використати {{jsxref("RegExp.prototype.test()")}}.
- Якщо шукаються усі входження глобального регулярного виразу, і неважлива інформація штибу груп захоплення, варто натомість використати {{jsxref("String.prototype.match()")}}. На додачу: {{jsxref("String.prototype.matchAll()")}} допомагає шукати збіг з багатьма частинами рядка (з групами захоплення), даючи змогу ітерувати по збігах.
- Якщо зіставлення виконується для пошуку індексу початку збігу в рядку, варто натомість використати {{jsxref("String.prototype.search()")}}.

## Приклади

### Застосування exec()

Для прикладу:

```js
// Знайти "quick brown", після чого є "jumps", ігноруючи символи між цими частинами
// Запам'ятати "brown" і "jumps"
// Ігнорувати регістр
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

Наступна таблиця демонструє стан `result` після роботи цього сценарію

| Властивість | Значення                                                           |
| ----------- | ------------------------------------------------------------------ |
| `[0]`       | `"Quick Brown Fox Jumps"`                                          |
| `[1]`       | `"Brown"`                                                          |
| `[2]`       | `"Jumps"`                                                          |
| `index`     | `4`                                                                |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`    | `{ color: "brown" }`                                               |

На додачу, `re.lastIndex` отримала значення `25`, адже цей регулярний вираз є глобальним.

### Пошук послідовних збігів

Коли регулярний вираз застосовує позначку [`g`](/uk/docs/Web/JavaScript/Guide/Regular_expressions#pohlyblenyi-poshuk-z-poznachkamy), можна використовувати метод `exec()` багато разів для отримання послідовних збігів у тому самому рядку. У такому випадку пошук починається від підрядка `str`, заданого властивістю регулярного виразу {{jsxref("RegExp/lastIndex", "lastIndex")}} ({{jsxref("RegExp/test", "test()")}} також посуває властивість {{jsxref("RegExp/lastIndex", "lastIndex")}}). Зверніть увагу, що властивість {{jsxref("RegExp/lastIndex", "lastIndex")}} не скидається при пошуку в іншому рядку, а почне пошук згідно з наявним значенням {{jsxref("RegExp/lastIndex", "lastIndex")}}.

Наприклад, припустімо, є такий сценарій:

```js
const myRe = /ab*/g;
const str = "abbcdefabh";
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = `Знайдено ${myArray[0]}. `;
  msg += `Наступне зіставлення починається від ${myRe.lastIndex}`;
  console.log(msg);
}
```

Цей сценарій виведе наступний текст:

```plain
Знайдено abb. Наступне зіставлення починається від 3
Знайдено ab. Наступне зіставлення починається від 9
```

> **Застереження:** Є чимало підводних каменів, котрі можуть привести цю функціональність до нескінченного циклу!
>
> - Ніколи _не_ ставте літерал регулярного виразу (або конструктор {{jsxref("RegExp")}}) всередину умови `while`: це буде створювати регулярний вираз заново для кожної ітерації та скидати {{jsxref("RegExp/lastIndex", "lastIndex")}}.
> - Перевірте, що заданий [прапорець глобальності (`g`)](/uk/docs/Web/JavaScript/Guide/Regular_expressions#pohlyblenyi-poshuk-z-poznachkamy), інакше `lastIndex` ніколи не буде посунуто.
> - Якщо регулярний вираз може дати збіг з символами нульової довжини (наприклад, `/^/gm`), збільшуйте його {{jsxref("RegExp/lastIndex", "lastIndex")}} щоразу вручну, інакше застрягнете в одному місці.

Зазвичай код такого роду можна замінити {{jsxref("String.prototype.matchAll()")}}, аби зробити його надійнішим.

### Застосування exec() з літералами RegExp

Також `exec()` можна застосовувати без явного створення об'єкта {{jsxref("RegExp")}}:

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

Це виведе повідомлення, що містить `'hello world!'`.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Регулярні вирази](/uk/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
