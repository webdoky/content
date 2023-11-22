---
title: "Група захоплення: (...)"
slug: Web/JavaScript/Reference/Regular_expressions/Capturing_group
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.capturing_group
---

{{JsSidebar}}

**Група захоплення** групує підпатерн, даючи змогу застосувати до всієї групи [квантор](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier), або застосувати в ній [диз'юнкції](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction). Вона запам'ятовує інформацію про збіг з підпатерном, щоб на цей збіг можна було пізніше посилатися за допомогою [зворотного посилання](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) та звертатися до цієї інформації за допомогою [об'єкта результатів збігу](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#povernene-znachennia).

Якщо результат збігу з підпатерном – не потрібен, слід натомість використовувати [незахоплювальну групу](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), що покращує продуктивність та уникне неприємностей при рефакторингу.

## Синтаксис

```regex
(патерн)
```

### Параметри

- `pattern`
  - : Патерн, що складається з будь-чого, що можна використовувати в літералі регулярного виразу, включно з [диз'юнкцією](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Опис

Група захоплення діє подібно до [оператора групування](/uk/docs/Web/JavaScript/Reference/Operators/Grouping) в JavaScript-виразах, даючи змогу використовувати підпатерн як єдиний [атом](/uk/docs/Web/JavaScript/Reference/Regular_expressions#atomy).

Групи захоплення нумеруються за порядком їхніх стартових дужок. Перша група захоплення отримує номер `1`, друга – `2`, і так далі. [Іменовані групи захоплення](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) також є групами захоплення та нумеруються разом з іншими (безіменними) групами захоплення. Інформацію про збіг з групою захоплення можна отримати за допомогою:

- Поверненого значення (котре є масивом) з методу {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}} або {{jsxref("String.prototype.matchAll()")}}
- Параметрів `pN` функції зворотного виклику `replacement` методів {{jsxref("String.prototype.replace()")}} і {{jsxref("String.prototype.replaceAll()")}}
- [Зворотних посилань](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) у межах того самого патерну

> **Примітка:** Навіть у результівному масиві методу `exec()` групи захоплення доступні за числами `1`, `2` тощо, адже елемент `0` – це ввесь збіг. `\0` – це не зворотне посилання, а [послідовність екранування](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) для символу NUL.

Групи захоплення у вихідному коді регулярного виразу відповідають своїм результатам один до одного. Якщо група захоплення не отримала збігу (наприклад, коли вона належить до варіанту [диз'юнкції](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction), що не отримав збігу), то відповідним результатом є `undefined`.

```js
/(ab)|(cd)/.exec("cd"); // ['cd', undefined, 'cd']
```

Групи захоплення можуть бути [квантовані](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier). У такому випадку інформація про збіг, що відповідає такій групі, – це останній збіг групи.

```js
/([ab])+/.exec("abc"); // ['ab', 'b']; через те, що "b" стоїть після "a", цей результат відкидає попередній
```

Групи захоплення можуть вживатися у твердженнях [визирання](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) й [озирання](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion). У зв'язку з тим, що твердження озирання шукають збіг зі своїми атомами позаду справа наліво, то остаточний збіг, що відповідає такій групі, це той, що стоїть з _лівого_ боку рядка. А проте, індекси груп збігів все одно відповідатимуть їхнім відносним розташуванням у вихідному коді регулярного виразу.

```js
/c(?=(ab))/.exec("cab"); // ['c', 'ab']
/(?<=(a)(b))c/.exec("abc"); // ['c', 'a', 'b']
/(?<=([ab])+)c/.exec("abc"); // ['c', 'a']; тому що "a" помічено озиранням після того, як озиранням помічено "b"
```

Групи захоплення можуть мати вкладеність, у випадку чого зовнішня група нумерується першою, потім – внутрішня група, тому що нумерація відповідає стартовим дужкам. Якщо вкладена група повторюється за допомогою квантора, то кожного разу, коли з нею трапляється збіг, результати підгруп перезаписуються, іноді – значенням `undefined`.

```js
/((a+)?(b+)?(c))*/.exec("aacbbbcac"); // ['aacbbbcac', 'ac', 'a', undefined, 'c']
```

У прикладі вище зовнішня група збігається тричі:

1. Збігається з `"aac"`, з підгрупами `"aa"`, `undefined` і `"c"`.
2. Збігається з `"bbbc"`, з підгрупами `undefined`, `"bbb"` і `"c"`.
3. Збігається з `"ac"`, з підгрупами `"a"`, `undefined` і `"c"`.

Результат `"bbb"` з другого збігу – не зберігається, тому що третій збіг відкидає його своїм значенням `undefined`.

Початковий та кінцевий індекси кожної групи захоплення в вихідному рядку можна отримати за допомогою позначки [`d`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices). Це створює додаткову властивість `indices` у масиві, поверненому з `exec()`.

Іще можна задати назву групи захоплення, що допомагає уникнути пасток, пов'язаних із позиціями груп та індексами. Докладніше про це – читайте [Іменовані групи захоплення](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group).

Дужки в різних записах регулярних виразів мають інші значення. Наприклад, також вони охоплюють твердження визирання й озирання. Через те, що всі такі записи починаються з `?`, а `?` - це [квантор](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier), котрий зазвичай не стоїть зразу після `(`, це не призводить до неоднозначностей.

## Приклади

### Пошук дати

Наступний приклад шукає дату в форматі `YYYY-MM-DD`:

```js
function parseDate(input) {
  const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input);
  if (!parts) {
    return null;
  }
  return parts.map((p) => parseInt(p, 10));
}

parseDate("2019-01-01"); // [2019, 1, 1]
parseDate("2019-06-19"); // [2019, 6, 19]
```

### Парування лапок

Наступна функція шукає в рядку патерни `title='xxx'` і `title="xxx"`. Аби пересвідчитися, що лапки збігаються, використовується зворотне посилання, аби звернутися до першої лапки. Звертання до другої групи захоплення (`[2]`) повертає рядок між лапками, що збігаються:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Групи та зворотні посилання](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Довідник з регулярних виразів](/uk/docs/Web/JavaScript/Reference/Regular_expressions)
- [Незахоплювальна група – `(?:...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Іменована група захоплення – `(?<name>...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Зворотне посилання – `\1`, `\2`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
