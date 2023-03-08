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
  - : Розділений пробілами список значень {{cssxref("&lt;filter-function&gt;")}}, або [SVG-фільтр](/uk/docs/Web/SVG/Element/filter), що буде застосовано до задника.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url("anemones.jpg"), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
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
