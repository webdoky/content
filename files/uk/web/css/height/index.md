---
title: height
slug: Web/CSS/height
tags:
  - CSS
  - CSS Property
  - Layout
  - Reference
  - Vertical
  - dimensions
  - height
  - recipe:css-property
  - size
browser-compat: css.properties.height
---

{{CSSRef}}

Властивість CSS **`height`** вказує висоту елемента. Як усталено, властивість визначає висоту [області вмісту](/uk/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content_area). Втім, якщо властивість {{cssxref("box-sizing")}} має значення `border-box`, то вказане значення стає висотою [відмежованої області](/uk/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border_area).

{{EmbedInteractiveExample("pages/css/height.html")}}

Властивості {{cssxref("min-height")}} та {{cssxref("max-height")}} зневажають `height`.

## Синтаксис

```css
/* Значення <length> */
height: 120px;
height: 10em;

/* Значення <percentage> */
height: 75%;

/* Значення – ключові слова */
height: max-content;
height: min-content;
height: fit-content(20em);
height: auto;

/* Глобальні значення */
height: inherit;
height: initial;
height: revert;
height: unset;
```

### Значення

- {{cssxref("&lt;length&gt;")}}
  - : Визначає висоту у вигляді абсолютного значення.
- {{cssxref("&lt;percentage&gt;")}}
  - : Визначає висоту у вигляді відсотків від висоти контейнерного блока.
- `auto`
  - : Браузер обчислить та обере висоту для обраного елемента.
- `max-content`
  - : Внутрішньо бажана висота.
- `min-content`
  - : Внутрішньо найменша можлива ширина.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Використовує формулу fit-content щодо доступного простору, заміненого вказаним аргументом, тобто, i.e. `min(max-content, max(min-content, <length-percentage>))`.

## Занепокоєння щодо доступності

Слід пересвідчитись, що елементи, для котрих вказана `height`, не обрізаються і не затуляються іншим вмістом, коли до сторінки застосовується збільшення для укрупнення тексту.

- [MDN Розуміння WCAG, Пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння мірила успіху 1.4.4 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Встановлення висоти за допомогою пікселів та відсотків

#### HTML

```html
<div id="taller">Я – 50 пікселів заввишки.</div>
<div id="shorter">Я – 25 пікселів заввишки.</div>
<div id="parent">
  <div id="child">Я маю половину висоти предка.</div>
</div>
```

#### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

#### Результат

{{EmbedLiveSample('Setting_height_using_pixels_and_percentages', 'auto', 240)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Блокова модель](/uk/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}, {{cssxref("max-height")}}
- Відповідні логічні властивості: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
