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

Властивість [CSS](/uk/docs/Web/CSS) **`display`** встановлює, як розглядається елемент: як [блоковий чи рядковий елемент](/uk/docs/Web/CSS/CSS_Flow_Layout), і яке компонування буде застосовано до його нащадків: [потокове](/uk/docs/Web/CSS/CSS_Flow_Layout), [сіткове](/uk/docs/Web/CSS/CSS_Grid_Layout) чи [гнучке](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout).

Формально кажучи, властивість **`display`** встановлює для елемента внутрішній та зовнішній _типи відображення_. Зовнішній тип визначає участь елемента у [потоковому компонуванні](/uk/docs/Web/CSS/CSS_Flow_Layout); внутрішній тип визначає компонування нащадків. Деякі значення `display` повністю описані у власних специфікаціях; до прикладу, деталі того, що відбувається при встановленні `display: flex` визначено у специфікації Гнучкої блокової моделі CSS. Перегляньте [таблицю у кінці цього документа](#spetsyfikatsii) з усіма окремими специфікаціями.

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

  - : Ці ключові слова вказують зовнішній тип представлення елемента, що по суті є його роллю у потоковому компонуванні:

    - `block`
      - : Елемент створює рамки блока, додаючи розрив рядка до та після елемента у звичайному потоці.
    - `inline`
      - : Елемент утворює одну або більше рядкових рамок, що не утворюють розривів рядка до або після них. У нормальному потоці наступний елемент буде розташований на тому ж самому рядку, що й попередній, якщо в рядку достатньо місця для нього.

> **Зверніть увагу:** У випадку отримання виключно зовнішнього значення (наприклад, `display: block`, чи `display: inline`) ті браузери, що підтримують синтаксис із двома значеннями, встановлюють внутрішнє значення у `flow`.
> Така логіка призводить до очікуваної поведінки, наприклад: описавши елемент як `block`, очікуємо, що нащадки такого елемента братимуть участь у блоковій та рядковій звичайних потокових розкладках.

### Спрямовані всередину

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Ці ключові слова вказують внутрішній тип представлення елемента, що визначає тип форматування контексту, в якому його вміст розташовано (припускаючи, що елемент не заміщується):

    - `flow` {{Experimental_Inline}}

      - : Елемент розміщує свій вміст за допомогою потокової розкладки (комбінації блокової та рядкової).
        Якщо його зовнішній тип представлення – `inline` чи `run-in`, і він бере участь у блоковому чи рядковому контексті форматування, то генерує рядкові рамки. Інакше – утворює рамки блокового контейнера.
        Залежно від значень інших властивостей (наприклад, {{CSSxRef("position")}}, {{CSSxRef("float")}} чи {{CSSxRef("overflow")}}) та від того, чи він бере участь у блоковому чи рядковому контексті форматування, він або створює новий [блоковий контекст форматування](/uk/docs/Web/Guide/CSS/Block_formatting_context) (БКФ) для свого вмісту, або інтегрує свій вміст у батьківський контекст форматування.

    - `flow-root`
      - : Елемент породжує рамки блокового елемента, що утворює новий [блоковий контекст форматування](/uk/docs/Web/Guide/CSS/Block_formatting_context), визначаючи розташування кореня форматування.
    - `table`
      - : Такі елементи поводяться неначе HTML-елементи {{HTMLElement("table")}}. Вони визначають рамки блокового рівня.
    - `flex`
      - : Елемент поводиться як блоковий, і розкладає свій вміст згідно з [моделлю flexbox](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout).
    - `grid`
      - : Елемент поводиться як блоковий, і розглядає свій вміст згідно з [сітковою моделлю](/uk/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    - `ruby` {{Experimental_Inline}}
      - : Елемент поводиться як рядковий, і розкладає свій вміст згідно з рубіновою моделлю форматування. Він поводиться як відповідний елемент HTML {{HTMLElement("ruby")}}.

> **Зверніть увагу:** Браузери, що підтримують синтаксис із двома значеннями, отримуючи виключно внутрішнє значення, наприклад, `display: flex`, чи `display: grid`, встановлюють внутрішнє значення у `block`.
> Така логіка призводить до очікуваної поведінки, наприклад: описавши елемент як `grid`, очікуємо, що для сіткового контейнера буде створено рамки блокового рівня.

### Пункт списку

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Елемент генерує блок для вмісту та окремий рядковий блок для пункту списку.

Окреме значення `list-item` змусить елемент поводити себе як елемент списку.
Це можна використовувати разом з властивостями {{CSSxRef("list-style-type")}} і {{CSSxRef("list-style-position")}}.

`list-item` також може бути скомбінований з будь-яким ключовим значенням {{CSSxRef("&lt;display-outside&gt;")}}, а також із ключовими словами {{CSSxRef("&lt;display-inside&gt;")}} `flow` чи `flow-root`.

> **Зверніть увагу:** У браузерах, що підтримують синтаксис із двома значеннями, якщо внутрішнє значення не вказане, то воно вважається рівним `flow`.
> Якщо не вказане зовнішнє значення, головні рамки елемента матимуть тип зовнішнього представлення `block`.

### Внутрішні

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Деякі моделі компонування, наприклад, `table` та `ruby`, мають складну внутрішню структуру, з багатьма різними ролями, що можуть бути заповнені їх нащадками.

    Ця секція визначає ці "внутрішні" значення display, котрі мають зміст лише всередині такого особливого режиму компонування.

    - `table-row-group`
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("tbody")}}.
    - `table-header-group`
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("thead")}}.
    - `table-footer-group`
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("tfoot")}}.
    - `table-row`
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("tr")}}.
    - `table-cell`
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("td")}}.
    - `table-column-group`
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("colgroup")}}.
    - `table-column`
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("col")}}.
    - `table-caption`
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("caption")}}.
    - `ruby-base` {{Experimental_Inline}}
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("rb")}}.
    - `ruby-text` {{Experimental_Inline}}
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("rt")}}.
    - `ruby-base-container` {{Experimental_Inline}}
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("rbc")}}, які утворені як анонімні рамки.
    - `ruby-text-container` {{Experimental_Inline}}
      - : Такі елементи поводяться неначе елементи HTML {{HTMLElement("rtc")}}.


### Блокові

- {{CSSxRef("&lt;display-box&gt;")}}

  - : Ці значення визначають, чи задає елемент візуальні рамки взагалі.

    - `contents`
      - : Такі елементи самі по собі не породжують якихось певних рамок. Вони замінюються власними псевдорамками та рамками своїх нащадків. Будь ласка, зверніть увагу, що специфікація "Представлення CSS, рівень 3" визначає, як значення `contents` мусить впливати на "незвичні елементи" – елементи, що не відображаються суто згідно з концепціями коробки CSS, наприклад, заміщені елементи. Дивіться [Додаток B: Дія `display: contents` на незвичні елементи](https://drafts.csswg.org/css-display/#unbox)
        _У зв‘язку із вадою у браузерах, це значення наразі прибирає елемент із дерева доступності – програми для зчитування з екрану не дивитимуться на те, що всередині. Дивіться розділ [Занепокоєння щодо доступності](#zanepokoiennia-shchodo-dostupnosti) нижче для заглиблення в цю проблему._
    - `none`
      - : Вимикає відображення елемента так, що він не впливає на розкладку (документ візуалізується так, ніби елемент не існує). Усі дочірні елементи також не відображаються.
        Аби змусити елемент зайняти простір, котрий він би усталено зайняв, але не показувати нічого на його місці, використовуйте натомість властивість {{CSSxRef("visibility")}}.

### Застарілі

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 використовував однослівний синтаксис властивості `display`, вимагаючи окремих ключових слів для варіантів одного й того ж режиму компонування на рівні блока та рівні вбудування.

    - `inline-block`

      - : Елемент утворює рамки блокового елемента, що будуть розташовані в єдиному потоці з навколишнім вмістом так, ніби це єдиний рядковий елемент (поводячись так, як поводився б заміщений елемент).

        Це еквівалентно до `inline flow-root`.

    - `inline-table`
      - : Значення `inline-table` не має прямого відповідника у HTML. Такий елемент поводиться неначе HTML-елемент {{HTMLElement("table")}}, але не як рамки блокового рівня, а як рядковий елемент. Всередині табличних рамок діє контекст блокового рівня.
        Це еквівалентно до `inline table`.
    - `inline-flex`
      - : Елемент поводиться неначе рядковий і розкладає власний вміст згідно з моделлю flexbox.
        Це еквівалентно до `inline flex`.
    - `inline-grid`
      - : Елемент поводиться неначе рядковий і розкладає власний вміст згідно з сітковою моделлю.
        Це еквівалентно до `inline grid`.

### Який синтаксис слід використовувати сьогодні?

Специфікація рівня 3 вимагає два значення для властивості `display`, аби дати змогу вказати зовнішній та внутрішній типи представлення явно, — однак це поки не підтримується браузерами як слід.

Методи `<display-legacy>` дають змогу досягнути тих самих результатів з одним ключовим значенням, і розробники повинні надавати йому перевагу, поки двослівний синтаксис не отримає більшої підтримки. Наприклад, при використанні двох значень можна було б описати рядковий flex-контейнер наступним чином:

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

Окремі сторінки для різних типів значень, котрі може прийняти властивість `display`, містять численні приклади цих значень в дії — дивіться розділ {{anch("Syntax")}}. На додачу — перегляньте наступний матеріал, що поглиблено описує різні значення display.

- [Пристосування до двослівного синтаксису display](/uk/docs/Web/CSS/display/two-value_syntax_of_display)

### Потокове компонування CSS (display: block, display: inline)

- [Блокове та рядкове компонування у звичайному потоці](/uk/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Потокове компонування та переповнення](/uk/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [Потокове компонування та режими письма](/uk/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [Контексти форматування: пояснення](/uk/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [В потоці та поза потоком](/uk/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### display: flex

- [Засади flex-блоку](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Шикування елементів у flex-контейнері](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [Контроль за пропорціями flex-елементів за основною віссю](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [Кросбраузерні flex-блокові домішки](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Опанування перенесення flex-елементів](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Порядок flex-елементів](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [Взаємини flex-блоку та інших способів компонування](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [Зворотна сумісність flex-блоку](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Типові випадки використання flex-блоку](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### display: grid

- [Засади сіткового компонування](/uk/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Взаємини з іншими способами компонування](/uk/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Розташування за grid-лініями](/uk/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Шаблонні зони в сітках](/uk/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Компонування з використанням іменованих grid-ліній](/uk/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Автоматичне розташування у сітковому компонуванні](/uk/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Шикування блоків у сітковому компонуванні](/uk/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Сітки, логічні значення та режими письма](/uk/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- [Сіткове компонування CSS та доступність](/uk/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [Сіткове компонування CSS та поступове поліпшення підтримки](/uk/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Втілення звичних макетів за допомогою сіток](/uk/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

## Занепокоєння щодо доступності

### display: none

Використання `display` значення `none` на елементі прибере його із [дерева доступності](/uk/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Це призведе до того, що елемент та його нащадки більше не будуть оголошені технологією зчитування з екрана.

Якщо потрібно візуально приховати елемент, більш доступною альтернативою є використання [комбінації властивостей](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) для видимого усунення з екрана, але збереження для розбору допоміжними технологіями, наприклад, читачами екрану.

### display: contents

Поточні реалізації у більшості браузерів приберуть із [дерева доступності](/uk/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) будь-який елемент зі значенням `contents` властивості `display` (залишивши у дереві його нащадків). Це призведе до того, що сам елемент більше не буде оголошений технологією читання екрану. Це некоректна поведінка згідно зі [специфікацією CSS](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Більш доступна розмітка із display: contents | Гідде де Вріс](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [Display: Contents не є скиданням CSS | Адріан Розеллі](http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Таблиці

Зміна значення `display` для елемента {{HTMLElement("table")}} на `block`, `grid` чи `flex` змінить його представлення у [дереві доступності](/uk/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Це спричинить до того, що таблиця не буде оголошена як слід технологією читання екрану.

- [Коротка нотатка про те, що властивість CSS display робить із семантикою таблиці — The Paciello Group](https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Прихований вміст для кращої доступності | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN: Розуміння Вказівок з доступності вебконтенту, пояснення Вказівки 1.3](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Розуміння критерію успіху 1.3.1 | W3C Розуміння Вказівок з доступності вебконтенту 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Порівняння значень display

У цьому прикладі — два контейнерні елементи блокового рівня, кожен із трьома рядковими дочірніми елементами. Нижче — меню вибору, що дає змогу застосувати різні значення `display` до контейнерів, аби порівняти та протиставити те, як різні значення впливають на компонування елемента і його нащадків.

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

> **Зверніть увагу:** Більше прикладів можна знайти на сторінках кожного окремого типу представлення даних, посилання — вище.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Блокове та рядкове компонування у звичайному потоці](/uk/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Вступ до контекстів форматування](/uk/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
