---
title: Компонування гнучкої рамки CSS
slug: Web/CSS/CSS_flexible_box_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-flexbox/
---

{{CSSRef}}

Модуль **Компонування гнучкої рамки CSS** (також відомий під назвою "флексбокс") визначає рамкову модель CSS, оптимізовану для дизайну користувацьких інтерфейсів та компонування елементів в одному вимірі. При моделі гнучкого компонування, дочірні елементи гнучкого контейнера можуть бути розкладені в будь-якому напрямку, а їх розміри є "гнучкими", можуть або збільшуватися – для заповнення невикористаного простору, або зменшуватися – для запобігання переповнення батьківського елемента. Можна легко керувати як горизонтальним, так і вертикальним вирівнюванням дочірніх елементів.

## Компонування гнучкої рамки в дії

В наступному прикладі контейнер отримує `display: flex`, що означає, що три дочірні елементи стають гнучкими елементами. Значенням `justify-content` стало `space-between`, щоб розташувати елементи рівномірно на головній осі. Однакова кількість простору розташовується між всіма елементами, а лівий і правий елементи знаходяться на краях гнучкого контейнера. Також можна спостерігати, що елементи розтягуються вздовж поперечної осі, адже значення `align-items` – `stretch`. Елементи розтягуються до висоти гнучкого контейнера, тобто кожен з них стає настільки ж високим, як найвищий елемент.

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 600)}}

## Довідка

### Властивості

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### Терміни глосарія

- {{Glossary("Flexbox", "Флексбокс")}}
- {{Glossary("Flex Container", "Гнучкий контейнер")}}
- {{Glossary("Flex Item", "Гнучкий елемент")}}
- {{Glossary("Main Axis", "Головна вісь")}}
- {{Glossary("Cross Axis", "Перехресна вісь")}}
- {{Glossary("Flex", "Гнучкий")}}

## Посібники

- [Базові концепції флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

  - : Огляд можливостей Флексбоксу

- [Взаємини між флексбоксом та іншими способами компонування](/uk/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)

  - : Порівняння Флексбоксу з іншими способами компонування та іншими специфікаціями CSS

- [Вирівнювання елементів у гнучкому контейнері](/uk/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)

  - : Те, як властивості рамкового вирівнювання працюють зі Флексбоксом.

- [Упорядкування гнучких елементів](/uk/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)

  - : Пояснення різних способів для змінювання порядку й напряму елементів, а також роз'яснення потенційних негативних наслідків цього.

- [Контроль співвідношень гнучких елементів за головною віссю](/uk/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Пояснення властивостей flex-grow, flex-shrink і flex-basis.

- [Освоєння загортання гнучких елементів](/uk/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)

  - : Про те, як створювати гнучкі контейнери з багатьма рядами й контролювати виведення елементів на цих рядах.

- [Типові ситуації для використання флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

  - : Поширені патерни проєктування, котрі є типовими випадками для використання Флексбоксу.

- [Компонування CSS – флексбокс](/uk/docs/Learn/CSS/CSS_layout/Flexbox)

  - : Дізнайтеся, як користуватися для створення макетів у вебі компонуванням флексбоксу.

- [Рамкове вирівнювання у флексбоксі](/uk/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Детально описує можливості [Рамкового вирівнювання CSS](/uk/docs/Web/CSS/CSS_box_alignment), що є притаманними саме флексбоксу.

## Споріднені концепції

[Модуль Виведення CSS](/uk/docs/Web/CSS/CSS_display)

- {{cssxref("display")}}
- {{cssxref("order")}}

Модуль [Рамкового вирівнювання CSS](/uk/docs/Web/CSS/CSS_box_alignment)

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}

Модуль [Розмірів рамок CSS](/uk/docs/Web/CSS/CSS_box_sizing)

- {{cssxref("aspect-ratio")}}
- Значення {{cssxref("max-content")}}
- Значення {{cssxref("min-content")}}
- Значення {{cssxref("fit-content")}}
- Термін глосарія: {{glossary("intrinsic size", "природний розмір")}}

## Специфікації

{{Specifications}}

## Дивіться також

- Модуль [Напрямків письма CSS](/uk/docs/Web/CSS/CSS_writing_modes)
- [Використання синтаксису із кількома значеннями у Відображенні CSS](/uk/docs/Web/CSS/display/multi-keyword_syntax_of_display)
