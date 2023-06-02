---
title: "Клас символів: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.character_class
---

{{JsSidebar}}

**Клас символів** дає збіг з будь-яким символом, присутнім або відсутнім в заданому наборі символів.

## Синтаксис

```regex
[]
[abc]
[A-Z]

[^]
[^abc]
[^A-Z]
```

## Опис

Клас символів задає список символів між квадратними дужками та дає збіг з будь-яким символом зі списку. Доступні наступні записи:

- Єдиний символ: дає збіг з самим цим символом.
- Діапазон символів: дає збіг з будь-яким символом у діапазоні, що включає свої краї. Цей діапазон задається двома символами, розділеними дефісом (`-`). Перший символ повинен бути меншим за символьним значенням, ніж другий. Оскільки кодові точки Unicode зазвичай присвоюють алфавітам послідовно, то `[a-z]` задає всі малі латинські літери, а `[α-ω]` задає всі малі грецькі літери. У режимі без [unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) регулярні вирази тлумачаться як послідовність символів [Базового багатомовного плану](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery). Таким чином, сурогатні пари в класах символів представляють два символи, а не один; дивіться деталі нижче.
- Послідовності екранування: `\b`, `\-`, [екранування класів символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [екранування класів символів Unicode](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) та інші [екранування символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Ці записи можуть зустрічатися будь-яку кількість разів, і набори символів, котрі вони представляють, об'єднуються. Наприклад, `/[a-zA-Z0-9]/` дає збіг з будь-якою літерою або цифрою.

На відміну від інших частин регулярного виразу, класи символів тлумачать більшість символів [буквально](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) та мають менше обмежень щодо символів, котрі можуть вміщати. Наприклад, `.` – це буквальний символ крапки, а не [джокер](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Єдині символи, що не можуть зустрічатися буквально, це `\`, `]` і `-`.

- У класах символів підтримується більшість послідовностей екранування, окрім `\b`, `\B` і [зворотних посилань](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` позначає символ реверсу, а не [край слова](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion), тим часом інші два класи викликають синтаксичні помилки. Щоб використовувати `\` буквально, цей символ слід екранувати: `\\`.
- Символ `]` позначає кінець класу символів. Щоб використати його буквально, його слід екранувати: `\]`.
- Символ дефіса (`-`), коли вживається між двома символами, позначає діапазон. Коли він зустрічається на початку або в кінці класу символів, він є буквальним символом. Він також є буквальним символом, коли використовується в межах діапазону. Наприклад, `[a-]` збігається з символами `a` і `-`, `[!--]` збігається з символами від `!` до `-`, а `[--9]` збігається з символами від `-` до `9`. Також можна екранувати дефіс як `\-`, щоб використовувати його будь-де буквально.

[Лексична граматика](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#literaly-rehuliarnykh-vyraziv) виконує дуже грубий розбір літералів регулярних виразів, тому що вона не завершує літерал регулярного виразу на символі `/`, котрий зустрічається всередині класу символів. Це означає, що `/[/]/` є допустимим без необхідності екранування `/`.

Краї діапазону символів не повинні задавати більш ніж один символ, що відбувається, якщо використати [екранування класу символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape). Наприклад:

```js
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

В режимі без [unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) діапазони символів, у яких одна з меж є класом символів, змушують `-` стати буквальним символом. Це [нерекомендований запис, необхідний для вебсумісності](/uk/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), і на нього не слід покладатися.

```js
/[\s-9]/.test("-"); // true
```

В режимі без [unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) регулярні вирази тлумачаться як послідовності символів Базового багатомовного плану. Таким чином, сурогатні пари в класах символів представляють два символи замість одного.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Вихід за межі допустимих значень в класі символів
/[😄-😛]/u.test("😑"); // true
```

Навіть якщо патерн [ігнорує регістр](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), то регістр двох кінців діапазону є важливим при з'ясуванні того, які символи належать до цього діапазону. Наприклад, патерн `/[E-F]/i` дає збіг лише з `E`, `F`, `e` та `f`, а патерн `/[E-f]/i` дає збіг з усіма великими та малими літерами ASCII (тому, що простягається від `E` до `Z` та від `a` до `f`), а також `[`, `\`, `]`, `^`, `_` та `` ` ``.

Префікс `^` в класі символів – обертає збіг. Наприклад, `[^abc]` збігається з будь-яким символом, крім `a`, `b` і `c`. Символ `^` є буквальним символом, коли з'являється всередині класу символів – наприклад, `[a^b]` збігається з символами `a`, `^` та `b`.

## Приклади

### Пошук шістнадцяткових цифр

Наступна функція з'ясовує, чи містить рядок дійсне шістнадцяткове число:

```js
function isHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

isHexadecimal("2F3"); // true
isHexadecimal("beef"); // true
isHexadecimal("undefined"); // false
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Класи символів](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Довідка з регулярних виразів](/uk/docs/Web/JavaScript/Reference/Regular_expressions)
- [Екранування класів символів: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Екранування класів символів Unicode: `\p{...}`, `\P{...}`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Буквальні символи: `a`, `b`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Екранування символів: `\n`, `\u{...}`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Диз'юнкція: `|`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
