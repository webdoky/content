---
title: "Зворотні посилання: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.backreference
---

{{JsSidebar}}

**Зворотні посилання** стосуються підзбігу попередньої [групи захоплення](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) і дають збіг з таким же текстом, як у тій групі. Вкупі з [іменованими групами захоплення](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) може бути краще використати [іменовані зворотні посилання](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference).

## Синтаксис

```regex
\N
```

> **Примітка:** `N` – це не буквально символ `N`.

### Параметри

- `N`
  - : Додатне ціле число, що вказує номер групи захоплення.

## Опис

Зворотне посилання – це спосіб шукати збіг з таким же текстом, як той, що раніше дав збіг з групою захоплення. Групи захоплення нумеруються від 1, тому результат першої групи захоплення можна вказати за допомогою `\1`, другої – `\2` і так далі. `\0` – це [послідовність екранування](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) для символу NUL.

При [чутливому до збігів](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) пошуку збігів зворотні посилання можуть збігатися з текстом іншого регістру, ніж у вихідному тексті.

```js
/(b)\1/i.test("bB"); // true
```

Зворотне посилання повинно вказувати на наявну групу захоплення. Якщо номер, який вона задає, більший за загальну кількість груп захоплення, викидається синтаксична помилка.

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

У [режимі без урахування Unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#rezhym-z-urakhuvanniam-unicode) недійсні зворотні посилання стають послідовностями [старого вісімкового екранування](/uk/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#poslidovnosti-ekranuvannia). Це [нерекомендований синтаксис, збережений задля сумісності у Вебі](/uk/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), і на нього не слід покладатися.

```js
/(a)\2/.test("a\x02"); // true
```

Якщо вказана група захоплення не має збігу (наприклад, через те, що вона належить до альтернативи у [диз'юнкції](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction), що не дала збігу), або група ще не спрацювала (наприклад, через те, що вона знаходиться праворуч від зворотного посилання), зворотне посилання завжди має успіх (так, ніби воно збігається з порожнім рядком).

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## Приклади

### Парування лапок

Наступна функція шукає збіг з патернами `title='xxx'` and `title="xxx"`. Щоб пересвідчитися, що лапки відповідають одна одній, використовується зворотне посилання, щоб вказувати на першу лапку. Звертання до другої групи захоплення (`[2]`) повертає рядок між відповідними лапками:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### Пошук збігу зі словами-дублікатами

Наступна функція шукає у рядку слова-дублікати (котрі зазвичай є хибодруками). Зверніть увагу на те, що вона використовує [екранування класу символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) `\w`, котре дає збіг лише з англійськими літерами, але не з будь-якими літерами з акцентами чи іншими алфавітами. Якщо потрібен більш загальний збіг, можна [розбити](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split) рядок за пробілами та перебрати отриманий масив.

```js
function findDuplicates(text) {
  return text.match(/\b(\w+)\s+\1\b/i)?.[1];
}

findDuplicates("foo foo bar"); // 'foo'
findDuplicates("foo bar foo"); // undefined
findDuplicates("Hello hello"); // 'Hello'
findDuplicates("Hello hellos"); // undefined
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Групи та зворотні посилання](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Довідка з регулярних виразів](/uk/docs/Web/JavaScript/Reference/Regular_expressions)
- [Групи захоплення – `(...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Іменовані групи захоплення – `(?<name>...)`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Іменовані зворотні посилання – `\k<name>`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
