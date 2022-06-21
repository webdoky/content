---
title: '-moz-outline-radius-bottomleft'
slug: Web/CSS/-moz-outline-radius-bottomleft
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-outline-radius-bottomleft
---

{{CSSRef}}{{deprecated_header}}

У застосунках Mozilla властивість [CSS](/uk/docs/Web/CSS) **`-moz-outline-radius-bottomleft`** може використовуватись для закруглення нижнього лівого кута {{cssxref("outline")}} елемента.

## Синтаксис

Значення `-moz-outline-radius-bottomleft` &mdash; або {{cssxref("length", "&lt;length&gt;")}}, або [відсоткова частка](/uk/docs/Web/CSS/percentage) відповідних розмірів обрамленого блоку. Також може бути використана функція {{cssxref("calc()", "calc()")}}.

### Значення

- `<довжина>`
  - : Радіус кола, що визначає вигин нижнього та лівого країв елемента, вказаний у вигляді {{cssxref("length", "&lt;довжини&gt;")}}.
- `<відсотки>`
  - : Радіус кола, що визначає закруглення нижнього лівого кута елемента, вказаний у вигляді [відсоткових величин](/uk/docs/Web/CSS/percentage) відносно нижньої та лівої сторін обрамленого блоку.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Закруглення обрису

Оскільки це Firefox-специфічна властивість, цей приклад не покаже очікуваного ефекту при перегляді у браузерах, відмінних від Firefox.

#### HTML

```html
<p>Зверніть увагу на нижній лівий кут параграфа.</p>
```

#### CSS

```css
p {
  margin: 10px;
  border: solid cyan;
  outline: dotted green;
  -moz-outline-radius-bottomleft: 2em;
}
```

#### Результат

{{EmbedLiveSample("zakruhlennia-obrysu")}}

## Специфікації

Не є частиною жодного стандарту.

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Перегляньте властивість {{cssxref("-moz-outline-radius")}}, аби отримати більше інформації.
