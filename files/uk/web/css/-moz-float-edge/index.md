---
title: "-moz-float-edge"
slug: Web/CSS/-moz-float-edge
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.-moz-float-edge
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

Нестандартна властивість **`-moz-float-edge`** [CSS](/uk/docs/Web/CSS) вказує, чи включають властивості висоти та ширини зовнішні відступи, межі та товщину внутрішніх відступів.

## Синтаксис

```css
/* Ключові значення */
-moz-float-edge: content-box;
-moz-float-edge: margin-box;

/* Глобальні значення */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

### Значення

- `content-box`
  - : Висота та ширина враховують лише вміст, без внутрішніх відступів, меж і зовнішніх відступів.
- `margin-box`
  - : Висота та ширина враховують і вміст, і внутрішні відступи, і межі, і зовнішні відступи.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

```plain
-moz-float-edge =
  content-box | margin-box
```

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

{{EmbedLiveSample('pryklady')}}

## Специфікації

Не є частиною жодного стандарту.

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- [Вада Firefox 432891](https://bugzil.la/432891)
