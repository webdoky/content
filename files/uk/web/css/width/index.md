---
title: width
slug: Web/CSS/width
tags:
  - CSS
  - CSS Property
  - Layout
  - Reference
  - dimensions
  - recipe:css-property
  - size
  - width
browser-compat: css.properties.width
---

{{CSSRef}}

Властивість CSS **`width`** встановлює ширину елемента. Як усталено, вона встановлює ширину [області вмісту](/uk/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content_area), однак якщо властивість {{cssxref("box-sizing")}} має значення `border-box`, то вказане значення стає шириною [відмежованої області](/uk/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border_area).

{{EmbedInteractiveExample("pages/css/width.html")}}

Властивості {{cssxref("min-width")}} та {{cssxref("max-width")}} зневажають `width`.

## Синтаксис

```css
/* Значення <length> */
width: 300px;
width: 25em;

/* Значення <percentage> */
width: 75%;

/* Значення – ключові слова */
width: max-content;
width: min-content;
width: fit-content(20em);
width: auto;

/* Глобальні значення */
width: inherit;
width: initial;
width: revert;
width: unset;
```

### Значення

- {{cssxref("&lt;length&gt;")}}
  - : Визначає ширину у вигляді абсолютного значення.
- {{cssxref("&lt;percentage&gt;")}}
  - : Визначає ширину у вигляді відсотків від ширини контейнерного блока.
- `auto`
  - : Браузер обчислить та обере ширину для обраного елемента.
- `max-content`
  - : Внутрішньо бажана ширина.
- `min-content`
  - : Внутрішньо найменша можлива ширина.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Використовує формулу fit-content щодо доступного простору, заміненого вказаним аргументом, тобто `min(max-content, max(min-content, <length-percentage>))`.

## Занепокоєння щодо доступності

Слід пересвідчитись, що елементи, для котрих вказана `width`, не обрізаються і не затуляються іншим вмістом, коли до сторінки застосовується збільшення для укрупнення тексту.

- [MDN Розуміння WCAG, Пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння мірила успіху 1.4.4 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Усталена ширина

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">Спільнота Mozilla виробляє чимало чудового ПЗ.</p>
```

{{EmbedLiveSample('ustalena-shyryna', '500px', '64px')}}

### Пікселі та еми

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Ширина, вказана у px</div>
<div class="em_length">Ширина, вказана у em</div>
```

{{EmbedLiveSample('pikseli-ta-emy', '500px', '64px')}}

### Відсотки

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Ширина у відсотках</div>
```

{{EmbedLiveSample('vidsotky', '500px', '64px')}}

### max-content

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit використовує нестандартне найменування */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
}
```

```html
<p class="maxgreen">Спільнота Mozilla виробляє чимало чудового ПЗ.</p>
```

{{EmbedLiveSample('max-content', '500px', '64px')}}

### min-content

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
  width: min-content;
}
```

```html
<p class="minblue">Спільнота Mozilla виробляє чимало чудового ПЗ.</p>
```

{{EmbedLiveSample('min-content', '500px', '155px')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Блокова модель](/uk/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- Відповідні логічні властивості: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
