---
title: Синтаксис CSS
slug: Web/CSS/CSS_syntax
page-type: css-module
spec-urls: https://drafts.csswg.org/css-syntax
---

{{CSSRef}}

Модуль **Синтаксису CSS** у загальних поняттях описує структуру та синтаксис каскадних таблиць стилів, також відомих як CSS. Він визначає CSS як мову для опису візуалізації структурованих документів (наприклад, HTML та XML) в Інтернеті та інших місцях.

Цей модуль не визначає жодних властивостей, [типів даних](/uk/docs/Web/CSS/CSS_Types), [функцій](/uk/docs/Web/CSS/CSS_Functions) і [директив](/uk/docs/Web/CSS/At-rule). Натомість він розгорнуто пояснює те, як всі ці можливості повинні бути визначені, та те, як користувацькі агенти повинні розбирати CSS.

## Директиви

- жодних

> **Примітка:** Цей модуль явно зазначає, що {{cssxref("@charset")}} фактично є не директивою, а радше невизнаним історичним правилом, яке слід пропускати при граматичній перевірці списку стилів.

## Довідка

### Ключові концепції

- {{cssxref("at-rule")}}
- [екранування символів](/uk/docs/Web/CSS/custom-ident#ekranuvannia-symvoliv)
- [Коментарі CSS](/uk/docs/Web/CSS/Comments)
- [Оголошення CSS](/uk/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [Блок оголошень CSS](/uk/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [Функція CSS](/uk/docs/Web/CSS/CSS_Functions)
- [недійсне](/uk/docs/Web/CSS/CSS_syntax/Error_handling)
- [стилістичне правило](/uk/docs/Web/API/CSSStyleRule)

### Терміни глосарія

- {{glossary("CSS_Descriptor", "Дескриптор CSS")}}
- {{glossary("parse", "розбирати")}}
- {{glossary("stylesheet", "список стилів")}}
- {{glossary("whitespace", "пробіл")}}

## Посібники

- [Синтаксис](/uk/docs/Web/CSS/Syntax)

  - : Огляд синтаксису CSS, в тому числі оголошень, блоків оголошень, наборів правил та інструкцій CSS.

- [Синтаксис визначення значень](/uk/docs/Web/CSS/Value_definition_syntax)

  - : Пояснює формальну граматику для визначення дійсних значень властивостей і функцій CSS, а також семантичні обмеження. Посібник для розуміння типів значень компонент, комбінаторів і множників CSS.

- [Обробка синтаксичних помилок CSS](/uk/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Огляд того, як користувацький агент обробляє недійсний CSS.

- [Перші кроки з вивчення CSS: синтаксис CSS](/uk/docs/Learn/CSS/First_steps/What_is_CSS#syntaksys-css)

  - : Вступний посібник з CSS, в тому числі вступ до синтаксису CSS.

## Споріднені концепції

Модуль [Селекторів CSS](/uk/docs/Web/CSS/CSS_selectors):

- [Специфічність CSS](/uk/docs/Web/CSS/Specificity)

Модуль [Каскаду CSS](/uk/docs/Web/CSS/CSS_cascade):

- Директива {{cssxref("@import")}}
- Позначка {{cssxref("important")}}
- [Початкові значення](/uk/docs/Web/CSS/initial_value)
- [Обчислені значення](/uk/docs/Web/CSS/computed_value)
- [Вжиті значення](/uk/docs/Web/CSS/used_value)
- [Фактичні значення](/uk/docs/Web/CSS/actual_value)
- [Успадкування CSS](/uk/docs/Web/CSS/Inheritance)
- {{Glossary("Property/CSS", "Властивість CSS")}}

Модуль [Кастомних властивостей як каскадних змінних CSS](/uk/docs/Web/CSS/CSS_cascading_variables):

- [кастомна властивість (`--*`)](/uk/docs/Web/CSS/--*)
- функція {{cssxref("var")}}

Модуль [Умовних правил CSS](/uk/docs/Web/CSS/CSS_conditional_rules):

- Директива {{cssxref("@media")}}
- Директива {{cssxref("@supports")}}

API [Об'єктної моделі CSS (CSSOM)](/uk/docs/Web/API/CSS_Object_Model):

- Властивість {{domxref("CSSValue.cssText", "cssText")}}
- Метод {{domxref("CSSStyleSheet.insertRule()", "insertRule(rule)")}}
- Метод {{domxref("CSSStyleSheet.replace()", "replace(text)")}}

Специфікація [WHATWG](/uk/docs/Glossary/WHATWG):

- Елемент {{HTMLElement("style")}}
- Елемент {{HTMLElement("link")}}
- Атрибут [`class`](/uk/docs/Web/HTML/Global_attributes/class)
- Атрибут [`rel`](/uk/docs/Web/HTML/Attributes/rel#stylesheet)

## Специфікації

{{Specifications}}

## Дивіться також

- Модуль [Селекторів CSS](/uk/docs/Web/CSS/CSS_selectors)
- Модуль [Значень та одиниць вимірювання CSS](/uk/docs/Web/CSS/CSS_Values_and_Units)
