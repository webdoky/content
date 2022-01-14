---
title: background
slug: Web/CSS/background
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.background
---

{{CSSRef("CSS Background")}}

Властивість-[скорочення](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) **`background`** ("тло", "фон") встановлює усі властивості стилю тла за раз: колір, зображення, вихідне положення, розмір, метод повторення.

{{EmbedInteractiveExample("pages/css/background.html")}}

## Складові властивості

Ця властивість є скороченням наступних властивостей CSS:

- {{cssxref("background-attachment")}} (прикріплення тла)
- {{cssxref("background-clip")}} (обрізання тла)
- {{cssxref("background-color")}} (колір тла)
- {{cssxref("background-image")}} (зображення тла)
- {{cssxref("background-origin")}} (вихідне положення тла)
- {{cssxref("background-position")}} (положення тла)
- {{cssxref("background-repeat")}} (метод повторення тла)
- {{cssxref("background-size")}} (розмір тла)

## Синтаксис

```css
/* За допомогою <background-color> (значення кольору тла) */
background: green;

/* За допомогою <bg-image> (значення зображення тла) та <repeat-style> (значення стилю повторення) */
background: url('test.jpg') repeat-y;

/* За допомогою <box> (значення рамок) та <background-color> (значення кольору тла) */
background: border-box red;

/* Одне зображення, відцентроване та масштабоване */
background: no-repeat center/80% url('../img/image.png');

/* Глобальні значення */
background: inherit;
background: initial;
background: revert;
background: unset;
```

Властивість `background` вказується як перелік одного чи кількох шарів тла, відділених комами.

Синтаксис кожного шару – наступний

- Кожний шар може містити нуль або більше входжень будь-якого із наступних значень:

  - `<attachment>` (прикріплення)
  - `<bg-image>` (зображення тла)
  - `<position>` (положення)
  - `<bg-size>` (розмір тла)
  - `<repeat-style>` (стиль повторення)

- Значення `<bg-size>` може бути вказане лише відразу після `<position>`, відділене символом '/', ось так: "`center/80%`".
- Значення `<box>` може бути вказано нуль, один або два рази. Якщо вказане раз, то воно встановлює як {{cssxref("background-origin")}}, так {{cssxref("background-clip")}}. Якщо вказано двічі, то перше входження встановлює {{cssxref("background-origin")}}, а друге – {{cssxref("background-clip")}}.
- Значення `<background-color>` може бути вказане лише в останньому вказаному шарі.

### Значення

- `<attachment>` (прикріплення)
  - : Дивіться {{cssxref("background-attachment")}}
- `<box>` (рамки)
  - : Дивіться {{cssxref("background-clip")}} та {{cssxref("background-origin")}}
- `<background-color>` (колір тла)
  - : Дивіться {{cssxref("background-color")}}
- `<bg-image>` (зображення тла)
  - : Дивіться {{Cssxref("background-image")}}
- `<position>` (положення)
  - : Дивіться {{cssxref("background-position")}}
- `<repeat-style>` (стиль повторення)
  - : Дивіться {{cssxref("background-repeat")}}
- `<bg-size>` (розмір тла)
  - : Дивіться {{cssxref("background-size")}}.

## Занепокоєння щодо доступності

Браузери не надають допоміжній технології жодної особливої інформації про зображення тла. Це важливо перш за все для програм зчитування екрана, оскільки вони не оголошують присутності зображень тла і, таким чином, нічого не передають користувачам про них. Якщо зображення містить критичну для розуміння призначення сторінки в цілому інформацію, краще описати його в документі семантично.

- [MDN Розуміння WCAG, пояснення Настанов 1.1](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)
- [Розуміння мірила успіху 1.1.1 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Встановлення фонів із ключовими словами кольорів та зображень

#### HTML

```html
<p class="topbanner">
  Зоряне небо<br />
  Мерехчи-мерехчи<br />
  Зоряне небо
</p>
<p class="warning">Ось – абзац</p>
```

#### CSS

```css
.warning {
  background: pink;
}

.topbanner {
  background: url('starsolid.gif') #99f repeat-y fixed;
}
```

#### Результат

{{EmbedLiveSample("Setting_backgrounds_with_color_keywords_and_images")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("box-decoration-break")}} (оздоблення розривів рамок)
- [Використання градієнтів](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- [Використання кількох фонів](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
