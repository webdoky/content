---
title: color
slug: Web/CSS/color
page-type: css-property
browser-compat: css.properties.color
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`color`** (колір) задає [значення кольору](/uk/docs/Web/CSS/color_value) переднього плану тексту елемента й [оздоблення цього тексту](/uk/docs/Web/CSS/text-decoration), а також задає значення [`currentcolor`](/uk/docs/Web/CSS/color_value#kliuchove-slovo-currentcolor). `currentcolor` може використовуватися як непряме значення на _інших_ властивостях, а також як усталене значення інших властивостей кольору, як то {{cssxref("border-color")}}.

{{EmbedInteractiveExample("pages/css/color.html")}}

Огляд використання кольорів у HTML – на сторінці [Застосування кольору до елементів HTML за допомогою CSS](/uk/docs/Web/CSS/CSS_colors/Applying_color).

## Синтаксис

```css
/* Значення – ключові слова */
color: currentcolor;

/* Значення <named-color> */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* Значення <hex-color> */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* Значення <rgb()> та історичні значення <rgba()> */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.6);
color: rgb(34.6 12 64 / 60%);
color: rgba(34.6 12 64 / 60%);

/* Значення <hsl()> та історичні значення <hsla()> */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.2 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* Значення <hwb()> */
color: hwb(90 10% 10%);
color: hwb(90 10% 10% / 0.5);
color: hwb(90deg 10% 10%);
color: hwb(1.5708rad 60% 0%);
color: hwb(0.25turn 0% 40% / 50%);

/* Глобальні значення */
color: inherit;
color: initial;
color: revert;
color: revert-layer;
color: unset;
```

Властивість `color` задається у вигляді одного значення {{cssxref("&lt;color&gt;")}}.

Зверніть увагу, що значення мусить бути однорідним кольором. Воно не може бути {{cssxref("&lt;gradient&gt;", "градієнтом")}}, котрий насправді є різновидом {{cssxref("&lt;image&gt;", "зображення")}}.

### Значення

- {{cssxref("&lt;color&gt;")}}
  - : Задає колір текстових і оздобних частин елемента.
- [`currentcolor`](/uk/docs/Web/CSS/color_value#kliuchove-slovo-currentcolor)
  - : Задає колір як значення властивості `color` елемента. Проте якщо це значення вжито як значення `color`, то `currentcolor` обробляється як `inherit`.

## Доступність

Важливо пересвідчитись, що співвідношення контрасту між текстом та тлом, на якому цей текст розташований, достатньо високе, аби люди з розладами зору мали змогу прочитати вміст сторінки.

Співвідношення контрасту кольору визначається шляхом порівняння значень світності кольорів тексту і тла. Аби виконати [Настанови доступності вебвмісту (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), необхідне співвідношення 4.5:1 для текстового вмісту і 3:1 для великого тексту, як то заголовків. Великий текст визначений як 18.66px і [грубий](/uk/docs/Web/CSS/font-weight) чи більший, або 24px чи більший.

- [WebAIM: Інструмент перевірки контрасту кольору](https://webaim.org/resources/contrastchecker/)
- [Розуміння WCAG, пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння критерію успіху 1.4.3 | W3C розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Червоний текст

Наступні записи – способи зробити текст абзацу червоним:

```css
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: rgb(255 0 0);
}
p {
  color: rgb(100% 0% 0%);
}
p {
  color: hsl(0 100% 50%);
}

/* 50% прозорості */
p {
  color: #ff000080;
}
p {
  color: rgb(255 0 0 / 50%);
}
p {
  color: hsl(0 100% 50% / 50%);
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Тип даних {{cssxref("&lt;color&gt;")}}
- Інші пов'язані з кольором властивості: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}} і {{cssxref("print-color-adjust")}}
- [Застосування кольору до елементів HTML за допомогою CSS](/uk/docs/Web/CSS/CSS_colors/Applying_color)
- [WCAG – колірний контраст](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
