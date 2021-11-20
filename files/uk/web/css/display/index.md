---
title: display
slug: Web/CSS/display
tags:
  - CSS
  - CSS Display
  - CSS Property
  - Reference
  - display
  - recipe:css-property
browser-compat: css.properties.display
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`display`** встановлює, як розглядається елемент: як [блоковий чи вбудований елемент](/uk/docs/Web/CSS/CSS_Flow_Layout), і яке компонування буде застосовано до його нащадків: [потокове](/uk/docs/Web/CSS/CSS_Flow_Layout), [сіткове](/uk/docs/Web/CSS/CSS_Grid_Layout) чи [гнучке](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout).

Формально кажучи, властивість **`display`** встановлює для елемента внутрішній та зовнішній _типи відображення_. Зовнішній тип визначає участь елемента у [потоковому компонуванні](/uk/docs/Web/CSS/CSS_Flow_Layout); внутрішній тип визначає компонування нащадків. Деякі значення `display` повністю описані у власних специфікаціях; до прикладу, деталі того, що відбувається при встановленні `display: flex` визначено у специфікації Гучкої блокової моделі CSS. Перегляньте [таблицю у кінці цього документа](#specifications) з усіма окремими специфікаціями.

## Синтаксис

Властивість CSS `display` вказується за допомогою ключових слів.

```css
/* застарілі значення */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* створення блока */
display: none;
display: contents;

/* синтаксис із двома значеннями */
display: block flow;
display: inline flow;
display: inline flow-root;
display: block flex;
display: inline flex;
display: block grid;
display: inline grid;
display: block flow-root;

/* інші значення */
display: table;
display: table-row; /* усі табличні елементи мають еквівалентне значення CSS-властивості display */
display: list-item;

/* Глобальні значення */
display: inherit;
display: initial;
display: revert;
display: unset;
```

## Згруповані значення

Ключові значення можуть бути згруповані у шість категорій значень.

### Спрямовані назовні

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Ці ключові слова вказують зовнішній тип представлення елемента, що по суті є його роллю у потоковому компонуванні.

{{page("/uk/docs/Web/CSS/display-outside", "Синтаксис")}}

### Спрямовані всередину

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Ці ключові слова вказують внутрішній тип представлення елемента, що визначає тип форматування контекста, в якому його вміст розташовано (припускаючи, що елемент не заміщується).

{{page("/uk/docs/Web/CSS/display-inside", "Синтаксис")}}

### Пункт списку

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Елемент генерує блок для вмісту та окремий вбудований блок пункта списку.

{{page("/uk/docs/Web/CSS/display-listitem", "Syntax")}}

### Внутрішні

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Деякі моделі компонування, наприклад, `table` та `ruby`, мають складну внутрішню структуру, з багатьма різними ролями, що можуть бути заповнені їх нащадками. Ця секція визначає ці "внутрішні" значення display, котрі мають зміст лише всередині такого особливого режиму компонування.

{{page("/uk/docs/Web/CSS/display-internal", "Синтаксис")}}

### Блокові

- {{CSSxRef("&lt;display-box&gt;")}}
  - : Ці значення визначають, чи створює елемент блоки представлення взагалі.

{{page("/uk/docs/Web/CSS/display-box", "Синтаксис")}}

### Застарілі

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 використовував однослівний синтаксис властивості `display`, вимагаючи окремих ключових слів для варіантів одного й того ж режиму компонування на рівні блока та рівні вбудування.

{{page("/uk/docs/Web/CSS/display-legacy", "Синтаксис")}}

### Який синтаксис слід використовувати сьогодні?

Специфікація рівня 3 вимагає два значення для властивості `display`, аби дати змогу вказати зовнішній та внутрішній типи представлення явно, &mdash; однак це поки не підтримується браузерами як слід.

Методи `<display-legacy>` дають змогу досягнути тих самих результатів з одним ключовим значенням, і розробники повинні надавати йому перевагу, поки двослівний синтаксис не отримає більшої підтримки. Наприклад, при використанні двох значень можна було б описати вбудований flex-контейнер наступним чином:

```css
.container {
  display: inline flex;
}
```

Те саме наразі може бути описано з використанням єдиного значення.

```css
.container {
  display: inline-flex;
}
```

Аби отримати більше інформації про ці зміни до специфікації, перегляньте статтю [Пристосування до нового двослівного синтаксису display](/uk/docs/Web/CSS/display/two-value_syntax_of_display).

### Глобальні

```css
/* Глобальні значення */
display: inherit;
display: initial;
display: unset;
```

## Опис

Окремі сторінки для різних типів значень, котрі може прийняти властивість `display`, містять численні приклади цих значень в дії &mdash; дивіться розділ {{anch("Syntax")}}. На додачу &mdash; перегляньте наступний матеріал, що покриває різні значення display у заглибленні.

- [Пристосування до двослівного синтаксису display](/uk/docs/Web/CSS/display/two-value_syntax_of_display)

### Потокове компонування CSS (display: block, display: inline)

- [Блокове та вбудоване компонування у звичайному потоці](/uk/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Потокове компонування та переповнення](/uk/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [Потокове компонування та режими письма](/uk/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [Контексти форматування: пояснення](/uk/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [В потоці та поза потоком](/uk/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### display: flex

- [Засади flex-блоку](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Шикування елементів у flex-контейнері](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [Контроль за пропорціями flex-елементів за основною віссю](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [Кросбраузерні flex-блокові домішки](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Опанування переносу flex-елементів](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Порядок flex-елементів](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [Взаємини flex-блоку та інших способів компонування](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [Зворотня сумісність flex-блоку](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Типові випадки використання flex-блоку](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### display: grid

- [Засади сіткового компонування](/uk/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Взаємини із іншими способами компонування](/uk/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Розташування за grid-лініями](/uk/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Сіткові зони шаблонів](/uk/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Компонування з використанням іменованих grid-ліній](/uk/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Автоматичне розташування у сітковому компонуванні](/uk/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Блокове шикування у сітковому компонуванні](/uk/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Сітки, логічні значення та режими письма](/uk/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- [Сіткове компонування CSS та доступність](/uk/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [Сіткове компонування CSS та поступове поліпшення підтримки](/uk/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Втілення звичних макетів за допомогою сіток](/uk/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

## Занепокоєння щодо доступності

### display: none

Використання `display` значення `none` на елементі прибере його із [дерева доступності](/uk/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Це призведе до того, що елемент та його нащадки більше не будуть оголошені технологією читачів екрану.

Якщо потрібно візуально приховате елемент, більш доступною альтернативою є використання [комбінації властивостей](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) для видимого усунення з екрану, але збереження для розбору допоміжними технологіями, наприклад, читачами екрану.

### display: contents

Поточні реалізації у більшості браузерів приберуть із [дерева доступності](/uk/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) будь-який елемент із `display` значенням `contents` (залишивши у дереві його нащадків). Це призведе до того, що сам елемент більше не буде оголошений технологією читання екрану. Це некоректна поведінка згідно [специфікації CSS](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Більш доступна розмітка із display: contents | Гідде де Вріс](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [Display: Contents не є скиданням CSS | Адріан Розеллі](http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Таблиці

Зміна значення `display` для елемента {{HTMLElement("table")}} на `block`, `grid` чи `flex` змінить його представлення у [дереві доступності](/uk/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Це спричинить до того, що таблиця не буде оголошена як слід технологією читання екрану.

- [Коротка нотатка про те, що властивість CSS display робить із семантикою таблиці — The Paciello Group](https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Прихований вміст для кращої доступності | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN: Розуміння Настанов доступності веб-контенту, Настанова 1.3, пояснення](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Розуміння критерію успіху 1.3.1 | W3C Розуміння Настанов доступності веб-контенту 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Порівняння значень display

У цьому прикладі &mdash; два контейнерні елементи блокового рівня, кожен із трьома вбудованими дочірніми елементами. Нижче &mdash; меню вибору, що дає змогу застосувати різні значення `display` до контейнерів, аби порівняти та протиставити те, як різні значення впливають на компонування елемента і його нащадків.

Ми включили {{cssxref("padding")}} та {{cssxref("background-color")}} на контейнерах та їх нащадках, щоб було легше бачити ефект значень `display`.

> **Зверніть увагу:** Ми не включали жодного двослівного синтаксису, оскільки його підтримка досі доволі обмежена.

#### HTML

```html
<article class="container">
  <span>Перший</span>
  <span>Другий</span>
  <span>Третій</span>
</article>

<article class="container">
  <span>Перший</span>
  <span>Другий</span>
  <span>Третій</span>
</article>

<div>
  <label for="display">Оберіть значення display:</label>
  <select id="display">
    <option selected>block</option>
    <option>inline</option>
    <option>inline-block</option>
    <option>none</option>
    <option>flex</option>
    <option>inline-flex</option>
    <option>grid</option>
    <option>inline-grid</option>
    <option>table</option>
    <option>list-item</option>
  </select>
</div>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
  padding-top: 10px;
}

article {
  background-color: red;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article,
div {
  margin: 20px;
}
```

#### JavaScript

```js
const articles = document.querySelectorAll('.container');
const select = document.querySelector('select');

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener('change', updateDisplay);

updateDisplay();
```

#### Результат

{{EmbedLiveSample('display_value_comparison','100%', 440)}}

> **Зверніть увагу:** Більше прикладів можна знайти на сторінках кожного окремого типу представлення даних, посилання &mdash; вище.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Блокове та вбудоване компонування у звичайному потоці](/uk/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Вступ до контекстів форматування](/uk/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
