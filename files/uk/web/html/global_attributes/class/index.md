---
title: class
slug: Web/HTML/Global_attributes/class
page-type: html-attribute
browser-compat: html.global_attributes.class
---

{{HTMLSidebar("Global_attributes")}}

[Глобальний атрибут](/uk/docs/Web/HTML/Global_attributes) **`class`** (клас) – це список класів елемента, розділених [пробілами ACSII](/uk/docs/Glossary/Whitespace#v-html).

{{EmbedInteractiveExample("pages/tabbed/attribute-class.html","tabbed-standard")}}

## Опис

Класи дають CSS і JavaScript змогу вибирати та звертатися до конкретних елементів за допомогою [селекторів типу](/uk/docs/Web/CSS/Class_selectors) або функцій штибу {{domxref("document.getElementsByClassName()")}}.

Хоч специфікація не встановлює обмежень на імена класів, веброзробників заохочують використовувати імена, що описують семантичне призначення елементів, а не їх подання. Наприклад, _attribute_ – для опису атрибута, а не _italics_, хоч елемент із таким класом і може бути поданий курсивом (англ. "italics"). Семантичні імена залишаються логічними навіть тоді, коли вигляд сторінки змінюється.

### Синтаксис

Атрибут `class` – це список значень класів, розділених [пробілами ACSII](/uk/docs/Glossary/Whitespace#v-html).

Кожне значення класу може містити будь-які символи Unicode (окрім, звісно, пробілу ASCII). Проте для вживання в селекторах CSS, як через JavaScript за допомогою API штибу {{domxref("Document.querySelector()")}}, так і в списках стилів CSS, значення атрибута class мусять бути валідними [ідентифікаторами CSS](/uk/docs/Web/CSS/ident). Це означає, що якщо значення атрибута class не є валідним ідентифікатором CSS (наприклад, `my?class` або `1234`), то його необхідно екранувати перед вживанням у селекторі або за допомогою методу {{domxref("CSS.escape_static", "CSS.escape()")}}, або [вручну](/uk/docs/Web/CSS/ident#ekranuvannia-symvoliv).

У зв'язку з цим рекомендується, щоб для атрибутів class розробники обирали значення, які є валідними ідентифікаторами CSS, що не потребують екранування.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Усі [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).
- {{domxref('element.className')}}
- {{domxref('element.classList')}}
- [Знайомство із CSS](/uk/docs/Learn/CSS)
