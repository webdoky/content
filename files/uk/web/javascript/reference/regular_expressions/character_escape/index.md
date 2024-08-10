---
title: "Екранування символів: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.character_escape
---

{{jsSidebar}}

**Екранування символу** представляє символ, який не може бути зручно представлений у своїй буквальній формі.

## Синтаксис

```regex
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \{, \}, \|, \/

\xHH
\uHHHH
\u{HHH}
```

> **Примітка:** `,` не є частиною цього синтаксису.

### Параметри

- `HHH`
  - : Шістнадцяткове число, що представляє кодову точку Unicode, що відповідає символу. Форма `\xHH` повинна містити дві шістнадцяткові цифри; форма `\uHHHH` повинна містити чотири; форма `\u{HHH}` може містити від однієї до шести шістнадцяткових цифр.ʼ

## Опис

В регулярних виразах працюють наступні екранування символів:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Такі ж, як у [рядкових літералах](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#poslidovnosti-ekranuvannia), за винятком `\b`, що представляє у регулярних виразах [межу слова](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion), якщо не знаходиться у [класі символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\c`, після чого стоїть літера від `A` до `Z` або від `a` до `z`
  - : Представляє контрольний символ зі значенням, що дорівнює остачі від ділення значення символу літери на 32. Наприклад, `\cJ` представляє розрив рядка (`\n`), оскільки кодова точка `J` дорівнює 74, а остача від ділення 74 на 32 дорівнює 10, що є кодовою точкою розриву рядка. Оскільки велика літера та її мала форма мають різницю 32, `\cJ` та `\cj` еквівалентні. У цій формі можна представити контрольні символи від 1 до 26.
- `\0`
  - : Представляє символ U+0000 NUL. Після нього не може стояти цифра (що зробило б його [історичним вісімковим екрануванням](/uk/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#poslidovnosti-ekranuvannia)).
- `\^`, `\$`, `\\`, `\.` `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\{`, `\}`, `\|`, `\/`
  - : Представляє сам символ. Наприклад, `\\` представляє зворотну скісну риску, а `\(` – ліву дужку. Ці символи в регулярних виразах є [синтаксичними символами](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) (наприклад, `/` є межею регулярного виразу), тому вони потребують екранування, якщо не знаходяться у [класі символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\xHH`
  - : Представляє символ, що має дану шістнадцяткову кодову точку Unicode. Шістнадцяткове число повинно складатися рівно з двох цифр.
- `\uHHHH`
  - : Представляє символ, що має дану шістнадцяткову кодову точку Unicode. Шістнадцяткове число повинно складатися рівно з чотирьох цифр. Два такі екранування можна використовувати для представлення сурогатної пари у [режимі з урахуванням Unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#rezhym-z-ukrakhuvanniam-unicode). (У режимі без урахування Unicode вони завжди будуть двома окремими символами.)
- `\u{HHH}`
  - : (Лише в [режимі з урахуванням Unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicoderezhym-z-ukrakhuvanniam-unicode)) Представляє символ, що має дану шістнадцяткову кодову точку Unicode. Шістнадцяткове число може містити від 1 до 6 цифр.

У [режимі без урахування Unicode](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#rezhym-z-ukrakhuvanniam-unicode), екранування символів, що не належить до перелічених вище, стає _екрануванням ідентичності_: воно представляє символ, що йде після зворотної скісної риски. Наприклад, `\a` представляє символ `a`. Ця поведінка обмежує можливість введення нових екранувань символів без порушення сумісності з попередніми версіями, тому вона заборонена у режимі з урахуванням Unicode.

У режимі без урахування Unicode `]`, `{` і `}` можуть зустрічатися [буквально](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character), якщо неможливо сприйняти їх за кінець класу символів або межу квантора. Це [нерекомендований синтаксис, залишений заради сумісності у Вебі](/uk/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), і на нього не слід покладатися.

У режимі без урахування Unicode екранування символів у межах [класів символів](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) у формі `\cX`, де `X` – це число або `_`, кодуються так само, як і ті, що містять літери {{Glossary("ASCII")}}: `\c0` – те саме, що й `\cP`, якщо взято остачу від ділення на 32. Крім того, якщо форма `\cX` зустрічається де завгодно, де `X` не є одним із розпізнаних символів, то зворотна скісна риска вважається буквальним символом. Ці форми синтаксису також нерекомендовані.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (синтаксис \c0 підтримується лише у класах символів)
```

## Приклади

### Використання екранувань символів

Екранування символів корисні тоді, коли є потреба шукати збіг із символом, який не легко представити у його буквальній формі. Наприклад, не можна буквально вписати у літеральний регулярний вираз розрив рядка, тому потрібно використовувати екранування символу:

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Класи символів](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Регулярні вирази](/uk/docs/Web/JavaScript/Reference/Regular_expressions)
- [Клас символів: `[...]`, `[^...]`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Екранування класу символів: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Буквальний символ: `a`, `b`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Екранування класу символів Unicode: `\p{...}`, `\P{...}`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Зворотне посилання: `\1`, `\2`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Іменоване зворотне посилання: `\k<name>`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Твердження про межу слова: `\b`, `\B`](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
