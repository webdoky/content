---
title: background-image
slug: Web/CSS/background-image
page-type: css-property
browser-compat: css.properties.background-image
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`background-image`** (зображення тла) встановлює одне або більше зображень тла елемента.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

Зображення тла наносяться на шарах контексту нагромадження одне поверх одного. Перший вказаний шар наноситься так, ніби він найближчий до користувача.

[Межі](/uk/docs/Web/CSS/border) елемента наносяться поверх зображень тла, а {{cssxref("background-color")}} – під їх сподом. Те, як зображення наносяться відносно рамок та їх меж, визначається властивостями CSS {{cssxref("background-clip")}} і {{cssxref("background-origin")}}.

Якщо певне зображення не може бути нанесено (наприклад, коли файл, вказаний через URI, не може бути завантажений), браузери обробляють таку ситуацію так, ніби вказано значення `none`.

> **Примітка:** Навіть якщо зображення непрозорі, і колір тла не повинен з'явитися за звичайних умов, веброзробники мусять завжди вказувати {{cssxref("background-color")}}. Якщо зображення не можуть бути завантажені, – наприклад, коли мережа недоступна, – колір тла буде використаний як запасний варіант.

## Синтаксис

```css
/* одне зображення */
background-image: linear-gradient(black, white);
background-image: url("catfront.png");

/* кілька зображень */
background-image: radial-gradient(circle, #0000 45%, #000f 48%),
  radial-gradient(ellipse farthest-corner, #fc1c14 20%, #cf15cf 80%);

/* Глобальні значення */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: revert-layer;
background-image: unset;
```

Кожне зображення тла вказується як ключове слово `none` або як значення {{cssxref("&lt;image&gt;")}}.

Аби вказати кілька зображень тла – слід вказати кілька значень, розділених комами.

### Значення

- `none`
  - : Ключове слово, що вказує на відсутність зображень.
- `<image>`
  - : Значення {{cssxref("&lt;image&gt;")}}, котре вказує зображення до нанесення. Може бути кілька зображень, розділених комами, оскільки підтримуються [кілька фонів](/uk/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds).

## Занепокоєння щодо доступності

Браузери не надають допоміжній технології жодної особливої інформації про зображення тла. Це важливо перш за все для програм зчитування екрана, оскільки вони не оголошують присутності зображень тла і, таким чином, нічого не передають користувачам про них. Якщо зображення містить критичну для розуміння призначення сторінки в цілому інформацію, краще описати його в документі семантично.

- [MDN Розуміння WCAG, пояснення Настанови 1.1](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanova-1-1-nadannia-tekstovykh-alternatyv-netekstovomu-vmistu)
- [Розуміння мірила успіху 1.1.1 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Крім цього, важливо пересвідчитись, що контрастне співвідношення між зображенням тла та текстом переднього плану достатньо високе, щоб люди зі слабким зором могли читати вміст сторінки.

Співвідношення колірного контрасту визначається шляхом порівняння світності тексту та значень кольору тла. Щоб відповідати вимогам [Настанов з доступності вебвмісту (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), потрібне співвідношення 4,5:1 для текстового вмісту тіла сторінки та 3:1 для більшого тексту, такого як заголовки. Великий текст визначається як 24px або більше, або [грубий текст](/uk/docs/Web/CSS/font-weight) 18.66px або більше.

- [WebAIM – Інструмент перевірки колірного контрасту](https://webaim.org/resources/contrastchecker/)
- [MDN розуміння WCAG, пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння критерію успіху 1.4.3 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Нашарування зображень тла

Зверніть увагу на те, що зображення зірки частково прозоре і накладається на зображення кота.

#### HTML

```html
<div>
  <p class="catsandstars">Цей параграф сповнений котів<br />та зірок.</p>
  <p>А цей – ні.</p>
  <p class="catsandstars">Ось іще коти для вас.<br />Погляньте на них!</p>
  <p>І – це все.</p>
</div>
```

#### CSS

```css
p {
  font-weight: bold;
  font-size: 1.5em;
  color: white;
  text-shadow: 0.07em 0.07em 0.05em black;
  background-image: none;
  background-color: transparent;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.catsandstars {
  background-image: url("startransparent.gif"), url("catfront.png");
  background-color: transparent;
}
```

#### Результат

{{EmbedLiveSample('nasharuvannia-zobrazhen-tla')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement("img")}}
- Функції, пов'язані з зображеннями:
  - {{cssxref("gradient/linear-gradient", "linear-gradient()")}}
  - {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
  - {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
  - {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
  - {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
  - {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
  - {{cssxref("url", "url()")}}
- [Використання градієнтів CSS](/uk/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Реалізація спрайтових зображень за допомогою CSS](/uk/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
- Модуль [Зображень CSS](/uk/docs/Web/CSS/CSS_images)

- Властивості, пов'язані з фонами
  - {{cssxref("background-attachment")}}
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - Скорочення {{cssxref("background")}}
- [Вивчаймо CSS – Фони та межі](/uk/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Застосування кількох фонів](/uk/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [Зміна розмірів фонових зображень](/uk/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- Модуль [Фонів і меж CSS](/uk/docs/Web/CSS/CSS_backgrounds_and_borders)
