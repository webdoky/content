---
title: Сіткове компонування CSS
slug: Web/CSS/CSS_Grid_Layout
page-type: css-module
tags:
  - CSS
  - Grid Layout
  - Grids
  - Guide
  - Layout
  - Overview
  - Reference
spec-urls: https://drafts.csswg.org/css-grid/
---

{{CSSRef}}

**Сіткове компонування CSS** чудово справляється з поділом сторінки на основні ділянки, чи визначенням взаємин між частинами інтерфейсу, збудованого з примітивів HTML, в термінах розмірів, положення й нашарування.

Подібно до таблиць, сіткове компонування дає авторові змогу шикувати елементи в колонки й ряди. Проте за допомогою сітки CSS, на противагу таблиці, чимало видів компонування можливо чи легше реалізувати. Наприклад, дочірні елементи контейнера сітки можуть розташовуватися так, що вони насправді перекриваються й нашаровуються, подібно до елементів, розташованих за допомогою CSS.

## Базовий приклад

Приклад нижче демонструє сітку триколонкової доріжки, в котрій нові ряди створюються щонайменше зі 100 пікселями, а щонайбільше - з auto. Елементи розміщені на сітці за допомогою розташування на основі ліній.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233 171 88);
  border-radius: 5px;
  background-color: rgba(233 171 88 / 0.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
<div class="wrapper">
  <div class="one">Один</div>
  <div class="two">Два</div>
  <div class="three">Три</div>
  <div class="four">Чотири</div>
  <div class="five">П'ять</div>
  <div class="six">Шість</div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{EmbedLiveSample("bazovyi-pryklad", "100%", "460")}}

## Довідник

### Властивості

- {{CSSxRef("display")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid")}}
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-row")}}
- {{CSSxRef("grid-column")}}
- {{CSSxRef("grid-area")}}
- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("masonry-auto-flow")}} {{Experimental_Inline}}
- {{CSSxRef("align-tracks")}} {{Experimental_Inline}}
- {{CSSxRef("justify-tracks")}} {{Experimental_Inline}}

### Функції

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### Типи даних

- {{CSSxRef("&lt;flex&gt;")}}

## Посібники

- [Базові концепції сіткового компонування](/uk/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Взаємини сіткового компонування з іншими методиками компонування](/uk/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Шаблонні простори сітки](/uk/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Сіткове компонування з розташуванням на основі ліній](/uk/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Сіткове компонування з іменованими сітковими лініями](/uk/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Автоматичне розташування при сітковому компонуванні](/uk/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Рамкове шикування при сітковому компонуванні](/uk/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Сітки, логічні значення та напрям письма](/uk/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- [Сіткове компонування та доступність](/uk/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [Реалізація загальноприйнятих компонувань за допомогою сіток](/uk/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)
- [Підсітка](/uk/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
- [Кладкове компонування](/uk/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) {{Experimental_Inline}}

## Специфікації

{{Specifications}}

## Дивіться також

- Терміни глосарія:
  - [Сітка](/uk/docs/Glossary/Grid)
  - [Строї сітки](/uk/docs/Glossary/Grid_Lines)
  - [Доріжки сітки](/uk/docs/Glossary/Grid_Tracks)
  - [Комірка сітки](/uk/docs/Glossary/Grid_Cell)
  - [Простір сітки](/uk/docs/Glossary/Grid_Areas)
  - [Жолоби](/uk/docs/Glossary/Gutters)
  - [Вісь сітки](/uk/docs/Glossary/Grid_Axis)
  - [Ряд сітки](/uk/docs/Glossary/Grid_Rows)
  - [Колонка сітки](/uk/docs/Glossary/Grid_Column)
- [Сітка за прикладом](https://gridbyexample.com/) - Колекція прикладів застосування та відеоуроків
- [Довідка сітки CSS - Codrops (англ.)](https://tympanus.net/codrops/css_reference/grid/)
- [Інспектор сітки CSS - Firefox DevTools (англ.)](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [Ігровий майданчик сітки CSS](https://mozilladevelopers.github.io/playground/css-grid/)
- [Сад сітки CSS](https://cssgridgarden.com) - Гра для вивчення сітки CSS
