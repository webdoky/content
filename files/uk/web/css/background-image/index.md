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
background-image: linear-gradient(
    to bottom,
    rgb(255 255 0 / 50%),
    rgb(0 0 255 / 50%)
  ), url("catfront.png");

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
  font-size: 1.5em;
  color: #fe7f88;
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

- [Імплементація спрайтових зображень на CSS](/uk/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
- {{HTMLElement("img")}}
- Типи даних, пов'язані з зображеннями: {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;gradient&gt;")}}
- Функції, пов'язані з зображеннями:

  - {{cssxref("cross-fade", "cross-fade()")}}
  - {{cssxref("element", "element()")}}
  - {{cssxref("image/image", "image()")}}
  - {{cssxref("image/image-set", "image-set()")}}
  - {{cssxref("gradient/linear-gradient", "linear-gradient()")}}
  - {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
  - {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
  - {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
  - {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
  - {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
  - {{cssxref("image/paint", "paint()")}}
  - {{cssxref("url", "url()")}}
