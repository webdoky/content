---
title: '-moz-orient'
slug: Web/CSS/-moz-orient
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-orient
---
{{CSSRef}}{{Non-standard_header}}

Властивість [CSS](/en-US/docs/Web/CSS) **`-moz-orient`** вказує орієнтацію елемента, до котрого застосована.

## Синтаксис

Доступні значення властивості `-moz-orient` вичерпно перелічені нижче.

### Значення

- `inline`
  - : Елемент рендериться у напрямку осі тексту: горизонтально для режиму горизонтального письма, вертикально для режиму вертикального письма.
- `block`
  - : Елемент рендериться перпендикулярно до осі тексту: вертикально для режиму горизонтального письма, горизонтально для режиму вертикального письма.
- `horizontal`
  - : Елемент рендериться горизонтально.
- `vertical`
  - : Елемент рендериться вертикально.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### HTML

```html
<p>
  Наступний прогресбар &mdash;
  горизонтальний (як усталено):
</p>
<progress max="100" value="75"></progress>

<p>
 Наступний прогресбар &mdash;
 вертикальний:
</p>
<progress class="vert" max="100" value="75"></progress>
```

### CSS

```css
.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}
```

### Результат

{{EmbedLiveSample("Examples","200","360")}}

## Специфікації

Не є частиною жодного стандарту. Втім, [подана](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) до W3C, із початково схвальним відгуком, ця властивість поки не є частиною жодної специфікації; наразі це Mozilla-специфічне розширення (власне, `-moz-orient`).

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- {{cssxref("box-orient")}}
