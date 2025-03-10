---
title: Каскадування й успадкування CSS
slug: Web/CSS/CSS_cascade
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-cascade/
  - https://drafts.csswg.org/css-cascade-5/
  - https://drafts.csswg.org/css-cascade-6/
---

{{CSSRef}}

Модуль **Каскадування й успадкування CSS** визначає правила для присвоєння значень властивостям шляхом каскадування й успадкування. Цей модуль задає правила для віднаходження заданого значення для всіх властивостей на всіх елементах.

Один з кореневих принципів устрою CSS – каскадування правил. Воно дає кільком спискам стилів змогу впливати на подання документа. Оголошення властивостей CSS і їх значень визначають те, як візуалізується документ. Кілька оголошень можуть задавати різні значення для тої ж комбінації елемента та його властивості, проте лише до кожної із властивостей CSS може бути застосоване лише одне значення. Модуль Каскаду CSS визначає те, як розв'язуються такі конфлікти.

Також трапляється протилежне. Іноді оголошень, що визначають значення властивості, немає. Модуль Каскаду CSS визначає те, як такі пропущені значення задаються, через успадкування чи на основі початкового значення властивості.

> [!NOTE]
> Правила віднаходження заданих значень у контексті сторінки та її рамок зовнішніх відступів описані в [модулі Сторінки CSS](/uk/docs/Web/CSS/CSS_paged_media).

## Довідник

### Властивості

- {{cssxref("all")}}

### Директиви

- {{cssxref("@import")}}
- {{cssxref("@layer")}}

### Ключові слова

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- Позначка {{cssxref("important", "!important")}}

### Інтерфейси

- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSRule")}}

### Глосарій і визначення

- [Фактичне значення](/uk/docs/Web/CSS/CSS_cascade/actual_value)
- [Анонімний шар](/uk/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#dyrektyva-blok-layer-dlia-imenovanykh-i-anonimnykh-shariv)
- [Походження від розробника](/uk/docs/Web/CSS/CSS_cascade/Cascade#rozrobnytski-spysky-styliv)
- [Каскад](/uk/docs/Web/CSS/CSS_cascade/Cascade)
- [Обчислене значення](/uk/docs/Web/CSS/CSS_cascade/computed_value)
- [Початкове значення](/uk/docs/Web/CSS/CSS_cascade/initial_value)
- [Іменований шар](/uk/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#dyrektyva-instruktsiia-layer-dlia-imenovanykh-shariv)
- [Вирішене значення](/uk/docs/Web/CSS/resolved_value)
- [Специфічність](/uk/docs/Web/CSS/CSS_cascade/Specificity)
- [Задане значення](/uk/docs/Web/CSS/CSS_cascade/specified_value)
- {{glossary("style origin", "походження стилю")}}
- [Вжите значення](/uk/docs/Web/CSS/CSS_cascade/used_value)
- [Походження (стилів) від користувача](/uk/docs/Web/CSS/CSS_cascade/Cascade#korystuvatski-spysky-styliv)
- [Походження (стилів) від користувацького агента](/uk/docs/Web/CSS/CSS_cascade/Cascade#spysky-styliv-korystuvatskoho-ahenta)

## Посібники

- [Вступ до Каскаду CSS](/uk/docs/Web/CSS/CSS_cascade/Cascade)

  - : Посібник з каскадного алгоритму, що визначає те, як користувацькі агенти поєднують значення властивостей, що походять з різних джерел.

- [Успадкування CSS](/uk/docs/Web/CSS/CSS_cascade/Inheritance)

  - : Посібник з успадкування CSS.

- [Навчання – Обробка конфліктів](/uk/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

  - : Найбазовіші концепції CSS – каскад, специфічність та успадкування – які керують тим, як CSS застосовується до HTML, і тим, як розв'язуються конфлікти.

- [Навчання – Каскадні шари](/uk/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)

  - : Вступ до [каскадних шарів](/uk/docs/Web/CSS/@layer), просунутішої можливості, яка доповнює базові концепції [каскаду CSS](/uk/docs/Web/CSS/CSS_cascade/Cascade) та [специфічності CSS](/uk/docs/Web/CSS/CSS_cascade/Specificity).

## Споріднені концепції

- [Стилі, прикріплені до елементів](/uk/docs/Web/HTML/Global_attributes/style)
- [Елементні стилі та каскад](/uk/docs/Web/CSS/CSS_cascade/Cascade#vbudovani-styli)
- [Умовні правила для @import](/uk/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)
- [Синтаксис визначення значення](/uk/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

## Специфікації

{{Specifications}}

## Дивіться також

- [Модуль Селекторів CSS](/uk/docs/Web/CSS/CSS_selectors)
- [Модуль Псевдоелементів CSS](/uk/docs/Web/CSS/CSS_pseudo-elements)
- [Модуль Сторінкових медіа CSS](/uk/docs/Web/CSS/CSS_paged_media)
- [Модуль Умовних правил CSS](/uk/docs/Web/CSS/CSS_conditional_rules)
- [Модуль Вкладеності CSS](/uk/docs/Web/CSS/CSS_nesting)
- [Властивості-скорочення](/uk/docs/Web/CSS/Shorthand_properties)
