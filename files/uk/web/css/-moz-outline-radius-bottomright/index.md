---
title: '-moz-outline-radius-bottomright'
slug: Web/CSS/-moz-outline-radius-bottomright
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-outline-radius-bottomright
---

{{CSSRef}}{{deprecated_header}}

У застосунках Mozilla властивість [CSS](/uk/docs/Web/CSS) **`-moz-outline-radius-bottomright`** може використовуватись для закруглення нижнього правого кута {{cssxref("outline")}} елемента.

## Синтаксис

Значення `-moz-outline-radius-bottomright` &mdash; або {{cssxref("length", "&lt;length&gt;")}}, або [відсоткова частка](/uk/docs/Web/CSS/percentage) відповідних розмірів обрамленого блоку. Також може бути використана функція {{cssxref("calc", "calc()")}}.

### Значення

- `<довжина>`
  - : Радіус кола, що визначає вигин нижнього та правого країв елемента, вказаний у вигляді {{cssxref("length", "&lt;довжини&gt;")}}.
- `<відсотки>`
  - : Радіус кола, що визначає закруглення нижнього правого кута елемента, вказаний у вигляді [відсоткових величин](/uk/docs/Web/CSS/percentage) відносно нижньої та правої сторін обрамленого блоку.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### HTML

```html
<p>Зверніть увагу на нижній правий кут параграфа.</p>
```

### CSS

```css
p {
  margin: 5px;
  border: solid cyan;
  outline: dotted red;
  -moz-outline-radius-bottomright: 2em;
}
```

#### Результат

{{EmbedLiveSample("pryklady")}}

> **Зверніть увагу:** Попередній приклад не покаже очікуваного ефекту при перегляді його у браузері, відмінному від Firefox.

## Специфікації

Не є частиною жодного стандарту.

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Перегляньте властивість {{cssxref("-moz-outline-radius")}}, аби отримати більше інформації.
