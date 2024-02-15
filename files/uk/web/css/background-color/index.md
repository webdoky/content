---
title: background-color
slug: Web/CSS/background-color
page-type: css-property
browser-compat: css.properties.background-color
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`background-color`** (колір тла) встановлює колір тла елемента.

{{EmbedInteractiveExample("pages/css/background-color.html")}}

## Синтаксис

```css
/* Значення – ключові слова */
background-color: red;
background-color: indigo;

/* Шістнадцяткові значення */
background-color: #bbff00; /* Цілком непрозорий */
background-color: #bf0; /* Цілком непрозорий, скорочений запис */
background-color: #11ffee00; /* Цілком прозорий */
background-color: #1fe0; /* Цілком прозорий, скорочений запис  */
background-color: #11ffeeff; /* Цілком непрозорий */
background-color: #1fef; /* Цілком непрозорий, скорочений запис  */

/* Значення RGB */
background-color: rgb(255 255 128); /* Цілком непрозорий */
background-color: rgb(117 190 218 / 50%); /* Прозорий на 50% */

/* Значення HSL */
background-color: hsl(50 33% 25%); /* Цілком непрозорий */
background-color: hsl(
  50 33% 25% / 75%
); /* непрозорий на 75%, а отже – прозорий на 25% */

/* Особливі значення – ключові слова */
background-color: currentcolor;
background-color: transparent;

/* Глобальні значення */
background-color: inherit;
background-color: initial;
background-color: revert;
background-color: revert-layer;
background-color: unset;
```

Властивість `background-color` приймає значення у вигляді єдиного значення `<color>`.

### Значення

- {{cssxref("&lt;color&gt;")}}
  - : Однорідний колір тла. Наноситься під сподом будь-яких вказаних {{cssxref("background-image")}}; втім, такий колір буде видимим крізь будь-яку прозорість зображення.

## Занепокоєння щодо доступності

Важливо пересвідчитись, що співвідношення контрасту між кольором тла та кольором тексту, накладеного на тло, достатньо високе, аби люди зі слабким зором мали змогу прочитати вміст сторінки.

Співвідношення контрасту кольору визначається порівнянням яскравості кольорових значень тексту та тла. Аби відповідати поточним [Настановам із доступності вебконтенту (WCAG) (англ.)](https://www.w3.org/WAI/standards-guidelines/wcag/), для звичайного тексту необхідне співвідношення 4.5:1, а для більшого тексту штибу заголовків – 3:1. Великим вважається текст розміру 18.66 пікселів або більше, якщо [грубим шрифтом](/uk/docs/Web/CSS/font-weight), інакше – 24 пікселів або більше.

- [WebAIM: Перевірка контрасту кольору (англ.)](https://webaim.org/resources/contrastchecker/)
- [MDN Розуміння WCAG, Пояснення настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння критеріїв успіху 1.4.3 | W3C Розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### HTML

```html
<div class="exampleone">Але щоб ви зрозуміли, звідки</div>

<div class="exampletwo">Але щоб ви зрозуміли, звідки</div>

<div class="examplethree">Але щоб ви зрозуміли, звідки</div>
```

### CSS

```css
.exampleone {
  background-color: transparent;
}

.exampletwo {
  background-color: rgb(153 102 153);
  color: rgb(255 255 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

### Результат

{{EmbedLiveSample("pryklady", 200, 150)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Множинні фони](/uk/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- Тип даних {{cssxref("&lt;color&gt;")}}
- Інші властивості, пов'язані з кольором: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} та {{cssxref("column-rule-color")}}
- [Застосування кольору до елементів HTML за допомогою CSS](/uk/docs/Web/CSS/CSS_colors/Applying_color)
