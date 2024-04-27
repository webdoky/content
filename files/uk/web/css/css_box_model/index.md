---
title: Рамкова модель CSS
slug: Web/CSS/CSS_box_model
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-box-4/
  - https://drafts.csswg.org/css-box-3/
---

{{CSSRef}}

Модуль **Рамкової моделі CSS** визначає властивості `height`, `width`, `margin` і `padding`, які разом зі [властивостями меж](/uk/docs/Web/CSS/CSS_backgrounds_and_borders) утворюють [рамкову модель](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) CSS.

Кожний видимий елемент на вебсторінці - це рамка, скомпонована згідно з [моделлю візуального форматування](/uk/docs/Web/CSS/Visual_formatting_model). Властивості CSS визначають для цих рамок їхні розмір, положення та рівень в нагромадженні, а властивості рамкової моделі (серед інших) визначають власний розмір кожної рамки та вільний простір навколо неї.

Кожна рамка має прямокутну область вмісту, всередині якої виводяться текст, зображення та інший вміст. Цей вміст може бути оточений внутрішніми відступами, межею та зовнішніми відступами, на одному або декількох боках. Внутрішні відступи – навколо вмісту, межа – навколо внутрішніх відступів, а зовнішні відступи – поза межами. Рамкова модель описує, як ці аспекти – вміст, внутрішні відступи, межі та зовнішні відступи – взаємодіють для утворення рамки, яку відображає CSS.

![Складові частини Рамкової моделі CSS](boxmodel.png)

Модуль Рамкової моделі CSS визначає фізичні (тобто "відносні щодо сторінки") властивості, штибу `width` та `margin-top`. Плинові властивості, штибу `inline-size` та `margin-block-start` (які стосуються напрямку тексту), визначені в [Логічних властивостях та значеннях](/uk/docs/Web/CSS/CSS_logical_properties_and_values). Модуль рамкової моделі розширюється [модулем Розмірності рамки CSS](/uk/docs/Web/CSS/CSS_box_sizing), який вводить значення {{glossary("intrinsic size", "власного розміру")}} та дає змогу визначати співвідношення сторін для елементів, які автоматично змінюють розмір принаймні в одному напрямку.

## Довідка

### Властивості

- {{cssxref("box-sizing")}}
- {{cssxref("height")}}
- {{cssxref("margin")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-top")}}
- {{cssxref("margin-trim")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}
- {{cssxref("padding")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-top")}}
- {{cssxref("width")}}

### Типи даних

- [`<box>`](/uk/docs/Web/CSS/box-edge)
  - [`<visual-box>`](/uk/docs/Web/CSS/box-edge#visual_box)
  - [`<layout-box>`](/uk/docs/Web/CSS/box-edge#layout_box)
  - [`<paint-box>`](/uk/docs/Web/CSS/box-edge#paing_box)
  - [`<coord-box>`](<(/uk/docs/Web/CSS/box-edge#coord_box)>)

## Посібники

- [Вступ у Рамкову модель CSS](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Пояснює одну з фундаментальних концепцій CSS – рамкову модель. Ця модель визначає, як CSS компонує елементи, включно з їхніми областями вмісту, внутрішніми відступами, межами та зовнішніми відступами.

- [Опанування перекриття зовнішніх полів](/uk/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Іноді два сусідні зовнішні відступи перекриваються. Ця стаття описує правила, що керують тим, коли та чому це відбувається, і як це контролювати.

- [Модель візуального форматування](/uk/docs/Web/CSS/Visual_formatting_model)

  - : Пояснює модель візуального форматування.

## Споріднені концепції

- Модуль [Фонів і меж CSS](/uk/docs/Web/CSS/CSS_backgrounds_and_borders)
  - {{cssxref("border-width")}} shorthand
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- Модуль [Логічних властивостей CSS](/uk/docs/Web/CSS/CSS_logical_properties_and_values)
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-block-end")}}
  - {{CSSxRef("margin-block-start")}}
  - {{CSSxRef("margin-inline")}}
  - {{CSSxRef("margin-inline-end")}}
  - {{CSSxRef("margin-inline-start")}}
  - {{CSSxRef("padding-block")}}
  - {{CSSxRef("padding-block-end")}}
  - {{CSSxRef("padding-block-start")}}
  - {{CSSxRef("padding-inline")}}
  - {{CSSxRef("padding-inline-end")}}
  - {{CSSxRef("padding-inline-start")}}
  - {{CSSxRef("border-block")}}
  - {{CSSxRef("border-block-end")}}
  - {{CSSxRef("border-block-end-width")}}
  - {{CSSxRef("border-block-start")}}
  - {{CSSxRef("border-block-start-width")}}
  - {{CSSxRef("border-block-style")}}
  - {{CSSxRef("border-block-width")}}
  - {{CSSxRef("border-inline")}}
  - {{CSSxRef("border-inline-end")}}
  - {{CSSxRef("border-inline-end-width")}}
  - {{CSSxRef("border-inline-start")}}
  - {{CSSxRef("border-inline-start-width")}}
  - {{CSSxRef("border-inline-width")}}
- Модуль [Розмірності рамок CSS](/uk/docs/Web/CSS/CSS_box_sizing)
  - {{cssxref("aspect-ratio")}}
  - {{cssxref("contain-intrinsic-block-size")}}
  - {{cssxref("contain-intrinsic-height")}}
  - {{cssxref("contain-intrinsic-inline-size")}}
  - {{cssxref("contain-intrinsic-size")}}
  - {{cssxref("contain-intrinsic-width")}}
  - {{cssxref("max-height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
- Модуль [Переповнення CSS](/uk/docs/Web/CSS/CSS_overflow)
  - {{CSSxRef("overflow")}} shorthand
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}

## Специфікації

{{Specifications}}

## Дивіться також

- Модуль [Відображення CSS](/uk/docs/Web/CSS/CSS_display)
- Модуль [Гнучкого компонування CSS](/uk/docs/Web/CSS/CSS_flexible_box_layout)
- Модуль [Сіткового компонування CSS](/uk/docs/Web/CSS/CSS_grid_layout)
- Модуль [Таблиць CSS](/uk/docs/Web/CSS/CSS_table)
- Модуль [Позиційного компонування CSS](/uk/docs/Web/CSS/CSS_positioned_layout)
- Модуль [Подрібнення CSS](/uk/docs/Web/CSS/CSS_fragmentation)
