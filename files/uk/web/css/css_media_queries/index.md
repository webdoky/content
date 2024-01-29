---
title: Медіазапити CSS
slug: Web/CSS/CSS_media_queries
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/mediaqueries-3/
  - https://drafts.csswg.org/mediaqueries/
  - https://drafts.csswg.org/mediaqueries-5/
---

{{CSSRef}}

Модуль **Медіазапитів CSS** дає змогу перевіряти та робити запити щодо значень області перегляду та характеристик браузера чи пристрою, щоб умовно застосовувати стилі CSS на основі поточного користувацького середовища. Медіазапити використовуються в директиві CSS `@media` та інших контекстах та мовах, таких як HTML та JavaScript.

Медіазапити – це ключова компонента [чуйного дизайну](/uk/docs/Learn/CSS/CSS_layout/Responsive_Design). Вони дають змогу умовно задавати стилі CSS, залежно від присутності чи значень характеристик пристрою. Поширено використання медіазапитів на основі розміру {{Glossary("viewport", "області перегляду")}}, щоб задавати відповідні макети на пристроях з різними розмірами екранів – наприклад, три колонки на широкому екрані чи одна колонка на вузькому.

Серед інших поширених прикладів – збільшення розміру шрифту та приховування навігаційних меню при друку сторінки, припасування внутрішніх відступів між абзацами, коли сторінку переглядають у портретному чи ландшафтному режимі, або збільшення розміру кнопок, щоб забезпечити більшу площу для натискання на сенсорних екранах.

У [CSS](/uk/docs/Web/CSS) можна скористатися [директивою](/uk/docs/Web/CSS/At-rule) {{cssxref("@media")}}, щоб умовно застосувати частину списку стилів на основі результату медіазапиту. Щоб умовно застосувати весь список стилів, краще скористатися директивою {{cssxref("@import")}}.

При розробці компонентів HTML для багаторазового використання також можна скористатися [контейнерними запитами](/uk/docs/Web/CSS/CSS_container_queries), які дають змогу застосовувати стилі на основі розміру контейнерного елемента, а не області перегляду чи інших характеристик пристрою.

## Довідка

### Директиви

- {{cssxref("@import")}}
- {{cssxref("@media")}}

### Дескриптори

- {{cssxref("@media/any-hover", "any-hover")}}
- {{cssxref("@media/any-pointer", "any-pointer")}}
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
- {{cssxref("@media/color", "color")}}
- {{cssxref("@media/color-gamut", "color-gamut")}}
- {{cssxref("@media/color-index", "color-index")}}
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
- {{cssxref("@media/device-height", "device-height")}}
- {{cssxref("@media/device-width", "device-width")}}
- {{cssxref("@media/display-mode", "display-mode")}}
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
- {{cssxref("@media/forced-colors", "forced-colors")}}
- {{cssxref("@media/grid", "grid")}}
- {{cssxref("@media/height", "height")}}
- {{cssxref("@media/hover", "hover")}}
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
- {{cssxref("@media/monochrome", "monochrome")}}
- {{cssxref("@media/orientation", "orientation")}}
- {{cssxref("@media/overflow-block", "overflow-block")}}
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
- {{cssxref("@media/pointer", "pointer")}}
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
- {{cssxref("@media/resolution", "resolution")}}
- {{cssxref("@media/scan", "scan")}}
- {{cssxref("@media/scripting", "scripting")}}
- {{cssxref("@media/update", "update")}}
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
- {{cssxref("@media/width", "width")}}

> **Примітка:** Медіазапити CSS рівня 5 додали п'ять дескрипторів `@media`, які ще не отримали реалізації: {{cssxref("@media/environment-blending", "environment-blending")}}, {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}, {{cssxref("@media/nav-controls", "nav-controls")}}, {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} і {{cssxref("@media/video-color-gamut", "video-color-gamut")}}.
> **Примітка:** Медіазапити CSS рівня 4 зробили нерекомендованими три дескриптори `@media`: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}} і {{cssxref("@media/device-width", "device-width")}}.

### Типи даних та оператори

- [`<media-types>`](/uk/docs/Web/CSS/@media#mediini-typy)
- [`<media-features>`](/uk/docs/Web/CSS/@media#mediini-mozhlyvosti)
- [`<resolution>`](/uk/docs/Web/CSS/resolution)
- [Логічні оператори](/uk/docs/Web/CSS/@media#lohichni_operatory)

### Терміни глосарія

- [медія](/uk/docs/Glossary/Media/CSS)
- [медійний запит](/uk/docs/Glossary/Media_query)

## Посібники

- [Застосування медіазапитів](/uk/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Знайомить з медіазапитами, їхнім синтаксисом, а також операторами та медійними можливостями, які використовуються для створення виразів медіазапитів.

- [Посібник початківця з медіазапитів](/uk/docs/Learn/CSS/CSS_layout/Media_queries)

  - : Знайомить з медіазапитами та підходами до їхнього використання для створення чуйних дизайнів.

- [Перевірка медіазапитів](/uk/docs/Web/CSS/CSS_media_queries/Testing_media_queries)

  - : Описує, як використовувати медіазапити в коді JavaScript, щоб з'ясовувати стан пристрою, а також задавати слухачів, що сповіщають код, коли результати медіазапитів змінюються (наприклад, коли користувач обертає екран або змінює розмір вікна браузера).

- [Використання медіазапитів заради доступності](/uk/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)

  - : Дізнайтеся, як медіазапити можуть допомогти користувачам краще розуміти ваш вебсайт.

- [Друк](/uk/docs/Web/CSS/CSS_media_queries/Printing)

  - : Поради та техніки, які допоможуть покращити виведення вебвмісту на принтер.

- [Вивчення – чуйні зображення](/uk/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

  - : Дізнайтеся, як використовувати медіазапити вкупі з `sizes` для реалізації чуйних зображень на вебсайтах.

## Споріднені концепції

- Модуль [Утримання CSS](/uk/docs/Web/CSS/CSS_containment)
  - Директива {{cssxref("@container")}}
  - [Застосування контейнерних запитів](/uk/docs/Web/CSS/CSS_container_queries)
- Модуль [Умовні правила CSS](/uk/docs/Web/CSS/CSS_container_queries)
  - Директива {{cssxref("@supports")}}
  - [Застосування запитів можливостей](/uk/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- Модуль [Сторінкових медій CSS](/uk/docs/Web/CSS/CSS_paged_media) module
  - Директива {{cssxref("@page")}}
- Модуль [Об'єктна модель CSS](/uk/docs/Web/API/CSS_Object_Model)
  - Інтерфейс {{DOMxRef("MediaQueryList")}}
    - Властивість {{DOMxRef("MediaQueryList.matches", "matches")}}
    - Властивість {{DOMxRef("MediaQueryList.media", "media")}}
    - Подія {{DOMxRef("MediaQueryList.change_event", "change")}}
  - Інтерфейс {{DOMxRef("MediaList")}}
    - Властивість {{DOMxRef("MediaList.mediaText", "mediaText")}}
  - Об'єкт {{DOMxRef("MediaQueryListEvent")}}
- HTML
  - Атрибут `sizes` для [`<img>`](/uk/docs/Web/HTML/Element/img#sizes), [`<link>`](/uk/docs/Web/HTML/Element/link#sizes), а також [`<source>`](/uk/docs/Web/HTML/Element/source#sizes) для {{HTMLElement("picture")}}
  - Атрибут `media` для [`<link>`](/uk/docs/Web/HTML/Element/link#media), [`<source>`](/uk/docs/Web/HTML/Element/source#media) і [`<style>`](/uk/docs/Web/HTML/Element/style#media) [HTML](/uk/docs/Web/HTML)
  - [Тег `<meta>` області перегляду](/uk/docs/Web/HTML/Viewport_meta_tag)
- Атрибут SVG [`media`](/uk/docs/Web/SVG/Attribute/media)

## Специфікації

{{Specifications}}

## Дивіться також

- [Використання атрибутів `srcset` і `sizes`](/uk/docs/Web/HTML/Element/img#vykorystannia-atrybutiv-srcset-i-sizes)
- [Контейнерні запити](/uk/docs/Web/CSS/CSS_container_queries)
- [Сторінкові медії CSS](/uk/docs/Web/CSS/CSS_paged_media)
- Використовуйте {{cssxref("@supports")}}, щоб застосовувати стилі, що залежать від браузерної підтримки різних технологій CSS.
