---
title: "Екранування класів символів: \\d, \\D, \\w, \\W, \\s, \\S"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class_escape
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.character_class_escape
---

{{jsSidebar}}

**Екранування класу символів** – це екранувальна послідовність, що представляє набір символів.

## Синтаксис

```regex
\d, \D
\s, \S
\w, \W
```

> **Примітка:** `,` не є частиною синтаксису.

## Опис

На відміну від [екранувань символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), екранування класів символів представляють попередньо визначені _набори_ символів, подібні до [класів символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Підтримуються наступні класи символів:

- `\d`
  - : Дає збіг з будь-яким символом-цифрою. Рівносильний `[0-9]`.
- `\w`
  - : Дає збіг з будь-яким символом слова, причому серед символів слова – літери (A–Z, a–z), цифри (0–9) та підкреслення (\_). Якщо задано як позначку [врахування Unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#rezhym-z-urakhuvanniam-unicode), так і позначку [`i`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), то також дає збіг з іншими символами Unicode, які канонічно перетворюються на один з вищезазначених символів під час [згортання регістру](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).
- `\s`
  - : Дає збіг з будь-яким [пробільним символом](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#probily) або [символом завершення рядка](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#symvoly-kintsia-riadka).

Форми з великими літерами, `\D`, `\W` та `\S`, створюють відповідні доповняльні класи щодо `\d`, `\w` та `\s` відповідно. Вони дають збіг з будь-яким символом, який не належить до набору символів, з яким дає збіг форма з малою літерою.

[Екранування класів символів Unicode](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) починаються з `\p` і `\P`, але підтримуються лише в [режимі з урахуванням Unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#rezhym-z-urakhuvanniam-unicode). В режимі без урахування Unicode ці екранування є [екрануваннями ідентичності](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) символів `p` і `P`.

Екранування класів символів можуть вживатися в [класах символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Однак вони не можуть використовуватися як межі діапазонів символів, – це дозволяється лише як [нерекомендований запис для забезпечення вебсумісності](/uk/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), і на це не можна покладатися.

## Приклади

### Розбивання за пробілами

Наступний приклад розбиває рядок на масив слів, підтримуючи всі різновиди роздільників-пробілів:

```js
function splitWords(str) {
  return str.split(/\s+/);
}

splitWords(`Look at the stars
Look  how they\tshine for you`);
// ['Look', 'at', 'the', 'stars', 'Look', 'how', 'they', 'shine', 'for', 'you']
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Класи символів](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Регулярні вирази](/uk/docs/Web/JavaScript/Reference/Regular_expressions)
- [Класи символів: `[...]`, `[^...]`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Екранування класів символів Unicode: `\p{...}`, `\P{...}`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Екранування символів: `\n`, `\u{...}`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Диз'юнкція: `|`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
