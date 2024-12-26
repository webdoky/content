---
title: Селектори типу
slug: Web/CSS/Type_selectors
page-type: css-selector
browser-compat: css.selectors.type
---

{{CSSRef}}

**Селектор типу** CSS дає збіг з елементами за назвою їх вузла. Іншими словами, він вибирає всі елементи даного типу всередині документа.

```css
/* Усі елементи <a>. */
a {
  color: red;
}
```

Селектори типу можуть бути обмежені простором імен за допомогою {{CSSXref("@namespace")}}. Це корисно при роботі з документами, що містять кілька просторів імен, таких як HTML з вбудованим SVG або MathML, або XML, що поєднує кілька словників.

- `ns|h1` – дає збіг з елементами `<h1>` в просторі імен _ns_
- `*|h1` – дає збіг з усіма елементами `<h1>`
- `|h1` – дає збіг з усіма елементами `<h1>`, які не належать до простору імен

## Синтаксис

```css
element { style properties }
```

## Приклади

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Ось span, що містить текст.</span>
<p>Ось p, що містить текст.</p>
<span>Ось span, що містить ще трохи тексту.</span>
```

### Результат

{{EmbedLiveSample('pryklady', '100%', 150)}}

### Простори імен

У цьому прикладі селектор дає збіг лише з елементами `<h1>` у просторі імен example.

```css
@namespace example url(http://www.example.com/);
example|h1 {
  color: blue;
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Селектори CSS](/uk/docs/Web/CSS/CSS_selectors)
- [Вивчаймо CSS – Селектори](/uk/docs/Learn/CSS/Building_blocks/Selectors)
