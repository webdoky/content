---
title: Фони та межі CSS
slug: Web/CSS/CSS_backgrounds_and_borders
page-type: css-module
spec-urls: https://drafts.csswg.org/css-backgrounds/
---

{{CSSRef}}

Модуль **Фонів і меж CSS** пропонує властивості для додавання до елементів меж, закруглених кутів та рамкових тіней.

Можна додавати різні типи стилів меж, включно з межами, зробленими з зображень будь-якого типу зображень, від растрових зображень до градієнтів CSS. Межі можуть бути квадратними або закругленими, і для кожного кута можна задати різний радіус. Елементи можуть бути закругленими незалежно від того, чи мають вони видиму межу.

Рамкові тіні включають внутрішні та зовнішні тіні, одну або кілька тіней, а також тіні, що переходять від непрозорості до прозорості. Зовнішня рамкова тінь відкидається так, ніби border-box елемента є непрозорим. Внутрішня тінь рамки відображає тінь так, ніби все за межами краю внутрішніх відступів – непрозоре. Тінь може бути непрозорою, а може мати відстань розсіювання, з кольором, що переходитиме до прозорого.

Властивості в цьому модулі також дозволяють визначати, чи мають клітинки всередині {{HTMLElement("table")}} спільні, чи мають окремі межі.

### Фони, межі та рамкові тіні в дії

Цей зразок меж, фонів і рамкових тіней складається з відцентрованих зображень фонів, зроблених з лінійних і радіальних градієнтів. Низка рамкових тіней змушує межу ніби "виступати". В елемента зліва задано зображення межі. Елемент справа має закруглену пунктирну межу.

```html hidden live-sample___backgrounds
<article>
  <div></div>
  <div></div>
</article>
```

```css hidden live-sample___backgrounds
article {
  display: flex;
  gap: 10px;
}
div {
  color: #58ade3;
  height: 320px;
  width: 240px;
  padding: 20px;
  margin: 10px;
  border: dotted 15px; /* усталено `currentcolor` */
  border-radius: 100px 0;
  background-image: radial-gradient(
      circle,
      transparent 60%,
      currentcolor 60% 70%,
      transparent 70%
    ),
    linear-gradient(45deg, currentcolor, white),
    linear-gradient(transparent, transparent);
  /* третє фонове зображення (прозоре) додано для того, щоб фоновий колір міг проступати */
  background-color: currentcolor;
  background-position: center;
  background-size:
    60px 60px,
    120px 120px;
  background-clip: content-box, content-box, padding-box;
  box-shadow:
    inset 5px 5px 5px rgb(0 0 0 / 0.4),
    inset -5px -5px 5px rgb(0 0 0 / 0.4),
    5px 5px 5px rgb(0 0 0 / 0.4),
    -5px -5px 5px rgb(0 0 0 / 0.4);
}
div:first-of-type {
  border-radius: 0;
  border-image-source: repeating-conic-gradient(
    from 3deg at 25% 25%,
    currentColor 0 3deg,
    transparent 3deg 6deg
  );
  border-image-slice: 30;
}
```

{{EmbedLiveSample("backgrounds", "", "450px")}}

Фонові зображення визначені за допомогою {{cssxref("background-image")}}. Вони відцентровані за допомогою {{cssxref("background-position")}}. Різні значення властивості {{cssxref("background-clip")}} для кількох фонових зображень використовуються для того, щоб ці фонові зображення залишалися всередині рамки вмісту. Колір фону обрізається до рамки внутрішніх відступів, що не дає фону проступати крізь прозорі секції для {{cssxref("border-image")}} та {{cssxref("border-style", "пунктирний")}} {{cssxref("border")}}. Закруглені кути в елементі справа створюються за допомогою властивості {{cssxref("border-radius")}}. Одне оголошення {{cssxref("box-shadow")}} використовується для задання всіх тіней, як внутрішніх, так і зовнішніх.

Клацніть "Відтворити" в прикладі вище, щоб переглянути або відредагувати код для анімації на Ігровому майданчику MDN.

## Довідка

### Властивості

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- Скорочення {{cssxref("background")}}
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- Скорочення {{cssxref("border-bottom")}}
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- Скорочення {{cssxref("border-left")}}
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- Скорочення {{cssxref("border-right")}}
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- Скорочення {{cssxref("border-top")}}
- Скорочення {{cssxref("border-color")}}
- Скорочення {{cssxref("border-style")}}
- Скорочення {{cssxref("border-width")}}
- Скорочення {{cssxref("border")}}

- {{cssxref("border-collapse")}}

- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- Скорочення {{cssxref("border-radius")}}

- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- Скорочення {{cssxref("border-image")}}

- {{cssxref("box-shadow")}}

### Типи даних

- Перелічений тип {{cssxref("line-style")}}

## Посібники

- [Вивчаймо CSS – Фони та межі](/uk/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Пояснює, як реалізувати декоративні зображення за допомогою фонових зображень CSS.
- [Застосування кількох фонів](/uk/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Пояснює, як задати на елементі один чи більше фонів.
- [Зміни розмірів зображень тла](/uk/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Описує, як змінити розмір та повторюваність зображень тла.
- [Вивчаймо CSS – Рамкова модель](/uk/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Пояснює, як межі, поруч з іншими властивостями рамкової моделі, впливають на рамкову модель CSS.
- [Застосування градієнтів CSS](/uk/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Пояснює, як створювати градієнтові фонові зображення CSS.

## Споріднені концепції

- Властивість {{cssxref("border-block-end-color")}}
- Властивість {{cssxref("border-block-start-color")}}
- Властивість {{cssxref("border-inline-end-color")}}
- Властивість {{cssxref("border-inline-start-color")}}
- Властивість {{cssxref("border-block-end-style")}}
- Властивість {{cssxref("border-block-start-style")}}
- Властивість {{cssxref("border-inline-end-style")}}
- Властивість {{cssxref("border-inline-start-style")}}
- Властивість {{cssxref("border-block-end-width")}}
- Властивість {{cssxref("border-block-start-width")}}
- Властивість {{cssxref("border-inline-end-width")}}
- Властивість {{cssxref("border-inline-start-width")}}

- Властивість {{cssxref("border-start-start-radius")}}
- Властивість {{cssxref("border-start-end-radius")}}
- Властивість {{cssxref("border-end-start-radius")}}
- Властивість {{cssxref("border-end-end-radius")}}

- Властивість {{cssxref("box-sizing")}}
- Властивість {{cssxref("box-decoration-break")}}
- Властивість {{cssxref("text-shadow")}}

- Тип CSS {{cssxref("url_value", "&lt;url&gt;")}}
- Тип даних [`<color>`](/uk/docs/Web/CSS/color)
- Тип даних [`<image>`](/uk/docs/Web/CSS/image)
- Тип даних [`<position>`](/uk/docs/Web/CSS/position)

- Ключове слово [`currentcolor`](/uk/docs/Web/CSS/color_value#kliuchove-slovo-currentcolor) keyword

## Специфікації

{{Specifications}}

## Дивіться також

- Інтерактивні інструменти, що дають змогу візуально створювати межові зображення, закруглені кути та рамкові тіні:
  - [Генератор border-image](/uk/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - [Генератор border-radius](/uk/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - [Генератор box-shadow](/uk/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Застосування кольору до елементів HTML за допомогою CSS](/uk/docs/Web/CSS/CSS_colors/Applying_color), включаючи межі.
- Фільтрувальна функція [`drop-shadow()`](/uk/docs/Web/CSS/filter-function/drop-shadow), що застосовує до вихідного зображення ефект тіні. Вона використовується властивостями {{cssxref("filter")}} та {{cssxref("backdrop-filter")}}.
