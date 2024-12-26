---
title: object-fit
slug: Web/CSS/object-fit
page-type: css-property
browser-compat: css.properties.object-fit
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`object-fit`** задає те, як вміст [заміщеного елемента](/uk/docs/Web/CSS/Replaced_element), як то {{HTMLElement("img")}} чи {{HTMLElement("video")}}, повинен адаптуватися для вміщення у своєму контейнері.

> [!NOTE]
> Властивість `object-fit` не діє на елементах {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} і {{HTMLElement("fencedframe")}}.

Шикування об'єкта вмісту заміщеного елемента всередині рамок елемента можна змінити за допомогою властивості {{cssxref("object-position")}}.

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

## Синтаксис

```css
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;

/* Глобальні значення */
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: revert-layer;
object-fit: unset;
```

Властивість `object-fit` задається одним ключовим словом, обраним зі списку значень нижче.

### Значення

- `contain` (вмістити)
  - : Заміщений вміст масштабується для збереження своїх {{glossary("aspect ratio", "пропорцій")}}, вміщуючись у рамки вмісту елемента. Увесь об'єкт заповнює рамки, зберігаючи свої пропорції, тож до об'єкта застосовується техніка [Letterbox](https://uk.wikipedia.org/wiki/Letterbox) або [Pillarbox](https://uk.wikipedia.org/wiki/Pillarbox), якщо його пропорції не відповідають пропорціям рамок.
- `cover` (накриття)
  - : Заміщений вміст калібрується для збереження своїх пропорцій при заповненні всіх рамок вмісту елемента. Якщо пропорції об'єкта не відповідають пропорціям рамок, то об'єкт обрізається, щоб уміститись.
- `fill` (заповнення)
  - : Заміщений вміст калібрується для уміщення в рамках вмісту елемента. Увесь об'єкт повністю заповнить рамки. Якщо {{glossary("aspect ratio", "пропорції")}} об'єкта не відповідають пропорціям рамок його рамок, то об'єкт розтягується, щоб уміститись.
- `none` (жодного)
  - : Заміщений вміст не змінює розміру.
- `scale-down` (скоротити)
  - : Вміст калібрується так, ніби задано `none` чи `contain`, а результатом стає той із варіантів, що дає менший конкретний розмір об'єкта.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Задання object-fit зображенню

#### HTML

```html
<section>
  <h2>object-fit: fill</h2>
  <img class="fill" src="mdn_logo_only_color.png" alt="Логотип MDN" />

  <img class="fill narrow" src="mdn_logo_only_color.png" alt="Логотип MDN" />

  <h2>object-fit: contain</h2>
  <img class="contain" src="mdn_logo_only_color.png" alt="Логотип MDN" />

  <img class="contain narrow" src="mdn_logo_only_color.png" alt="Логотип MDN" />

  <h2>object-fit: cover</h2>
  <img class="cover" src="mdn_logo_only_color.png" alt="Логотип MDN" />

  <img class="cover narrow" src="mdn_logo_only_color.png" alt="Логотип MDN" />

  <h2>object-fit: none</h2>
  <img class="none" src="mdn_logo_only_color.png" alt="Логотип MDN" />

  <img class="none narrow" src="mdn_logo_only_color.png" alt="Логотип MDN" />

  <h2>object-fit: scale-down</h2>
  <img class="scale-down" src="mdn_logo_only_color.png" alt="Логотип MDN" />

  <img
    class="scale-down narrow"
    src="mdn_logo_only_color.png"
    alt="Логотип MDN" />
</section>
```

#### CSS

```css
h2 {
  font-family:
    Courier New,
    monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
  margin: 10px 0;
}

.narrow {
  width: 100px;
  height: 150px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

#### Результат

{{EmbedLiveSample('zadannia-object-fit-zobrazhenniu', 500, 1100)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші пов'язані з зображеннями властивості CSS: {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("background-size")}}
- [Розуміння пропорцій](/uk/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
