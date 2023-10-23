---
title: z-index
slug: Web/CSS/z-index
page-type: css-property
browser-compat: css.properties.z-index
---

{{CSSRef}}

Властивість CSS **`z-index`** (індекс за аплікатою) задає аплікатний порядок [позиціонованого](/uk/docs/Web/CSS/position) елемента та його нащадків або гнучких і сіткових елементів. Накладання елементів з більшим значенням z-index закриває елементи з меншим значенням цієї властивості.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

Для позиціонованої рамки (тобто такої, що має `position` зі значенням, відмінним від `static`) властивість `z-index` задає:

1. Рівень накладання рамки в поточному [контексті нагромадження](/uk/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
2. Те, чи утворює рамка локальний контекст нагромадження.

## Синтаксис

```css
/* Значення – ключове слово */
z-index: auto;

/* Значення <integer> */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Від'ємні значення – для нижчого пріоритету */

/* Глобальні значення */
z-index: inherit;
z-index: initial;
z-index: revert;
z-index: revert-layer;
z-index: unset;
```

Властивість `z-index` задається або як ключове слово `auto`, або як `<integer>` (ціле число).

### Значення

- `auto`
  - : Рамка не утворює нового локального контексту нагромадження. Рівень накладання породженої рамки в поточному контексті нагромадження – `0`.
- `<integer>`
  - : Цей {{cssxref("&lt;integer&gt;")}} є рівнем накладання породженої рамки в поточному контексті нагромадження. Ця рамка також утворює локальний контекст нагромадження. Це означає, що значення z-index її нащадків – не порівнюються зі значеннями z-index елементів поза цим елементом.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Візуальне нашарування елементів

#### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Рискова рамка</div>
  <div class="gold-box">Золота рамка</div>
  <div class="green-box">Зелена рамка</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* поставити .gold-box над .green-box і .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* поставити .green-box над .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### Результат

{{EmbedLiveSample('vizualne-nasharuvannia-elementiv', '550', '200')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Властивість CSS {{Cssxref("position")}}
- [Розуміння z-index CSS](/uk/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
