---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
page-type: css-property
browser-compat: css.properties.backdrop-filter
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`backdrop-filter`** (фільтр задника) дає змогу застосувати графічні ефекти, як то розмиття чи зсув кольору, до області під елементом. Через те, що вона застосовується до всього _під_ елементом, для того, аби помітити її ефект, необхідно зробити елемент чи його тло принаймні частково прозорим.

{{EmbedInteractiveExample("pages/css/backdrop-filter.html")}}

## Синтаксис

```css
/* Значення – ключове слово */
backdrop-filter: none;

/* Фільтр з URL до SVG */
backdrop-filter: url(commonfilters.svg#filter);

/* Значення <filter-function> */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Декілька фільтрів */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* Глобальні значення */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: revert-layer;
backdrop-filter: unset;
```

### Значення

- `none`
  - : До задника не застосовується жодний фільтр.
- `<filter-function-list>`
  - : Розділений пробілами список значень {{cssxref("&lt;filter-function&gt;")}}, або [SVG-фільтр](/uk/docs/Web/SVG/Element/filter), що буде застосовано до задника. Серед значень `<filter-function>` CSS – {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/brightness", "brightness()")}}, {{CSSxRef("filter-function/contrast", "contrast()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}, {{CSSxRef("filter-function/grayscale", "grayscale()")}}, {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}, {{CSSxRef("filter-function/invert", "invert()")}}, {{CSSxRef("filter-function/opacity", "opacity()")}}, {{CSSxRef("filter-function/saturate", "saturate()")}} і {{CSSxRef("filter-function/sepia", "sepia()")}}.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### CSS

```css
.box {
  background-color: rgb(255 255 255 / 0.3);
  backdrop-filter: blur(10px);
}

body {
  background-image: url("anemones.jpg");
}
```

```css hidden
html,
body {
  height: 100%;
  width: 100%;
}

.container {
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.box {
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}
```

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### Результат

{{EmbedLiveSample("pryklady", 600, 400)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("filter")}}
- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [Фільтрувальні ефекти CSS](/uk/docs/Web/CSS/CSS_filter_effects)
- [Компонування та накладання в CSS](/uk/docs/Web/CSS/CSS_compositing_and_blending)
