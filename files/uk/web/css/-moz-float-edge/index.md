---
title: '-moz-float-edge'
slug: Web/CSS/-moz-float-edge
tags:
  - CSS
  - CSS Property
  - CSS:Mozilla Extensions
  - Layout
  - NeedsCompatTable
  - Non-standard
  - recipe:css-property
browser-compat: css.properties.-moz-float-edge
---
{{CSSRef}}{{Non-standard_header}}

Нестандартна властивість **`-moz-float-edge`** [CSS](/uk/docs/Web/CSS) вказує, чи включають властивості висоти та ширини зовнішні відступи, межі та товщину внутрішніх відступів.

```css
/* Ключові значення */
-moz-float-edge: border-box;
-moz-float-edge: content-box;
-moz-float-edge: margin-box;
-moz-float-edge: padding-box;

/* Глобальні значення */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

## Синтаксис

### Значення

- `border-box`
  - : Висота та ширина враховують вміст, внутрішні відступи та межі, проте без зовнішніх відступів.
- `content-box`
  - : Висота та ширина включають вміст, але не включають ані внутрішніх відступів, ані меж, ані зовнішніх відступів.
- `margin-box`
  - : Висота та ширина враховують і вміст, і внутрішні відступи, і межі, і зовнішні відступи.
- `padding-box`
  - : Висота і ширина включають вміст та внутрішні відступи, але не включають межі та зовнішні відступи

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### HTML

```html
<div class="box">
  <p>З'їв аґрусу — та ягода цілюща б'є жах інфекцій шипучим «ь».</p>
</div>
```

### CSS

```css
.box {
  display: block;
  height: 5px;
  margin: 0.5em auto 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}
```

### Результат

{{ EmbedLiveSample('Examples') }}

## Специфікації

Не є частиною жодного стандарту.

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- {{bug(432891)}}
