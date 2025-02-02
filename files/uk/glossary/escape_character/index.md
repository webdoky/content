---
title: Екранувальний символ
slug: Glossary/Escape_character
page-type: glossary-definition
---

{{GlossarySidebar}}

**Екранувальний символ** – це {{glossary("character", "символ")}}, що змушує один або більше символів, які стоять після нього, тлумачитися інакше. Разом вони утворюють **екранувальну послідовність**, яка нерідко використовується для представлення символу, що має інакше значення, коли наводиться буквально, наприклад, символ лапок у рядковому літералі. Екранувальні послідовності можуть мати й інші застосування, особливо в [регулярних виразах](/uk/docs/Web/JavaScript/Reference/Regular_expressions#ekranuvalni-poslidovnosti).

- У [регулярних виразах](/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), [рядкових літералах](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#riadkovi-literaly) та [ідентифікаторах](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#identyfikatory) JavaScript можна користуватися зворотним скосом (`\`), щоб екранувати символи, такі як `\'`, `\"`, `\u0026` тощо.
- В ідентифікаторах CSS можна користуватися зворотним скосом (`\`), щоб екранувати символи, такі як `\\`, `\n`, `\26` тощо. Дивіться докладніше в [екранувальних символах](/uk/docs/Web/CSS/ident#ekranuvalni-symvoly).
- У текстовому вмісті та значеннях атрибутів HTML можна користуватися {{glossary("character reference", "символьними згадками")}} виду `&lt;`, `&#60;` або `&#x3C;`.
- У {{glossary("URL")}} можна скористатися знаком відсотка (`%`), щоб екранувати символи: `%20`, `%3C`, `%3E` тощо.

## Дивіться також

- Споріднені терміни глосарія:
  - {{glossary("Character", "Символ")}}
  - {{glossary("Character reference", "Символьна згадка")}}
  - {{glossary("Code point", "Кодова точка")}}
- [Escape character](https://en.wikipedia.org/wiki/Escape_character) на Wikipedia
- [Escape sequence](https://en.wikipedia.org/wiki/Escape_sequence) на Wikipedia
