---
title: Директиви
slug: Web/CSS/At-rule
page-type: guide
spec-urls:
  - https://drafts.csswg.org/css-conditional-3/
  - https://compat.spec.whatwg.org/#css-at-rules
---

{{CSSRef}}

**Директиви** – це [інструкції CSS](/uk/docs/Web/CSS/Syntax#instruktsii-css), що вказують CSS, як поводитися. Вони починаються зі знаку «равлика», '`@`' (`U+0040 COMMERCIAL AT`), за яким слідує ідентифікатор, і включають усе до наступної крапки з комою, '`;`' (`U+003B SEMICOLON`), або наступного [блоку CSS](/uk/docs/Web/CSS/Syntax#bloky-oholoshen-css), залежно від того, що зустрінеться першим.

## Синтаксис

### Звичайний

```css
/* Загальна структура */
@identifier (RULE);

/* Приклад: вказує браузеру використовувати множину символів UTF-8 */
@charset "utf-8";
```

Є декілька звичайних директив, що визначаються їх ідентифікаторами, кожна з власним синтаксисом:

- {{cssxref("@charset")}} – Визначає множину символів, що використовується в таблиці стилів.
- {{cssxref("@import")}} – Вказує рушієві CSS включити зовнішній список стилів.
- {{cssxref("@namespace")}} – Вказує рушієві CSS, що весь вміст директиви повинен вважатися таким, що має префікс у межах простору імен XML.

### Вкладений

```css
@identifier (RULE) {
}
```

Підмножина вкладених інструкцій, що може вживатися як інструкція списку стилів, а також всередині умовних групових директив.

- {{cssxref("@media")}} – Умовна групова директива, що застосовує свій вміст, якщо пристрій відповідає критеріям умови, визначеної за допомогою _запиту медіа_.
- {{cssxref("@scope")}} – Умовна групова директива, що застосовує свій вміст, якщо пристрій відповідає критеріям заданої умови.
- {{cssxref("@supports")}} – Умовна групова директива, що застосовує свій вміст, якщо браузер відповідає критеріям даної умови.
- {{cssxref("@document")}} {{deprecated_inline}} – Умовна групова директива, що застосовує свій вміст, якщо документ, в якому застосовується список стилів, відповідає критеріям даної умови.
- {{cssxref("@page")}} – Описує аспект змін компонування, що будуть застосовані при друку документа.
- {{cssxref("@font-face")}} – Описує аспект зовнішнього шрифту до завантаження.
- {{cssxref("@keyframes")}} – Описує аспект проміжних кроків у послідовності анімації CSS.
- {{cssxref("@counter-style")}} – Визначає конкретні стилі лічильників, що не є частиною попередньо визначеного набору стилів.
- {{cssxref("@font-feature-values")}} (плюс `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` і `@character-variant`) – Визначає загальні назви в {{cssxref("font-variant-alternates")}} для функцій, що активуються по-різному в OpenType.
- {{cssxref("@property")}} – Описує аспект нетипових властивостей і змінних.
- {{cssxref("@layer")}} – Оголошує шар каскаду і визначає порядок пріоритету в разі кількох шарів каскаду.

## Умовні групові директиви

Доволі подібно до значень властивостей, кожна директива має власний синтаксис. А проте, декілька з них можуть бути згруповані в спеціальну категорію, що називається **умовними груповими директивами**. Ці інструкції мають спільний синтаксис, і кожна з них може містити _вкладені інструкції_ — або _набори правил_, або _вкладені директиви_. Крім того, вони всі несуть спільне семантичне значення: всі вони посилаються на якийсь тип умови, яка в кожну мить часу оцінюється як **істинна** або **хибна**. Якщо умова оцінюється як **істинна**, то всі інструкції всередині групи будуть застосовані.

Умовні групові директиви:

- {{cssxref("@media")}},
- {{cssxref("@scope")}},
- {{cssxref("@supports")}},
- {{cssxref("@document")}}. _(Відкладена до рівня 4 Специфікації CSS)_

Оскільки кожна умовна група може містити вкладені інструкції, то може бути невизначена кількість вкладень.

## Вкладення @layer при вкладеному CSS

[Каскадні шари](/uk/docs/Web/CSS/@layer) можна вкладати одне в одного, щоб [створювати вкладені шари](/uk/docs/Web/CSS/@layer#vkladeni-shary). Це робиться за допомогою `.` (крапки). Це також можна зробити за допомогою [вкладення CSS](/uk/docs/Web/CSS/CSS_nesting/Nesting_at-rules#vkladennia-kaskadnykh-shariv-layer).

## Покажчик

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}}
- {{cssxref("@container")}}
- {{cssxref("@counter-style")}}
- {{cssxref("@document")}} {{deprecated_inline}}
- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}
- {{cssxref("@font-palette-values")}}
- {{cssxref("@import")}}
- {{cssxref("@keyframes")}}
- {{cssxref("@layer")}}
- {{cssxref("@media")}}
- {{cssxref("@namespace")}}
- {{cssxref("@page")}}
- {{cssxref("@property")}}
- {{cssxref("@scope")}},
- {{cssxref("@supports")}}

## Специфікації

{{Specifications}}

## See also

- Ключові концепції CSS:
  - [Синтаксис CSS](/uk/docs/Web/CSS/Syntax)
  - [Коментарі](/uk/docs/Web/CSS/Comments)
  - [Специфічність](/uk/docs/Web/CSS/Specificity)
  - [Успадкування](/uk/docs/Web/CSS/inheritance)
  - [Рамкова модель](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Режими компонування](/uk/docs/Web/CSS/Layout_mode)
  - [Моделі візуального форматування](/uk/docs/Web/CSS/Visual_formatting_model)
  - [Перекриття зовнішніх відступів](/uk/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Значення
    - [Початкові значення](/uk/docs/Web/CSS/initial_value)
    - [Обчислені значення](/uk/docs/Web/CSS/computed_value)
    - [Застосовані значення](/uk/docs/Web/CSS/used_value)
    - [Фактичні значення](/uk/docs/Web/CSS/actual_value)
  - [Синтаксис визначення значень](/uk/docs/Web/CSS/Value_definition_syntax)
  - [Властивості-скорочення](/uk/docs/Web/CSS/Shorthand_properties)
  - [Заміщені елементи](/uk/docs/Web/CSS/Replaced_element)
  - [Модуль Вкладеності CSS](/uk/docs/Web/CSS/CSS_nesting)
