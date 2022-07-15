---
title: '-moz-outline-radius-topleft'
slug: Web/CSS/-moz-outline-radius-topleft
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-outline-radius-topleft
---

{{CSSRef}}{{deprecated_header}}

У застосунках Mozilla властивість [CSS](/uk/docs/Web/CSS) **`-moz-outline-radius-topleft`** може використовуватись для закруглення верхнього лівого кута {{cssxref("outline")}} елемента.

## Синтаксис

Значення `-moz-outline-radius-topleft` — або [`<length>`](/uk/docs/Web/CSS/length), або [відсоткова частка](/uk/docs/Web/CSS/percentage) відповідних розмірів обрамленого блоку. Також може бути використана функція [`calc()`](/uk/docs/Web/CSS/calc).

### Значення

- `<довжина>`
  - : Радіус кола, що визначає вигин верхнього та лівого країв елемента, вказаний у вигляді {{cssxref("length", "&lt;довжини&gt;")}}.
- `<відсотки>`
  - : Радіус кола, що визначає закруглення верхнього лівого кута елемента, вказаний у вигляді [відсоткових величин](/uk/docs/Web/CSS/percentage) відносно верхньої та лівої сторін обрамленого блоку.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### HTML

```html
<p>Зверніть увагу на верхній лівий кут параграфа.</p>
```

### CSS

```css
p {
  margin: 5px;
  border: solid cyan;
  outline: dotted red;
  -moz-outline-radius-topleft: 2em;
}
```

#### Результат

{{EmbedLiveSample("pryklady")}}

## Специфікації

Не є частиною жодного стандарту.

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Перегляньте властивість {{cssxref("-moz-outline-radius")}}, аби отримати більше інформації.
