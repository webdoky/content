---
title: Загальні селектори
slug: Web/CSS/Universal_selectors
page-type: css-selector
browser-compat: css.selectors.universal
---

{{CSSRef}}

**Загальний селектор** CSS (`*`) дає збіг з елементами будь-якого типу.

```css
/* Вибирає всі елементи */
* {
  color: green;
}
```

Загальний селектор – це спеціальний [селектор типу](/uk/docs/Web/CSS/Type_selectors), а отже, до нього при використанні {{CSSXref("@namespace")}} можна додати простір імен. Це корисно при роботі з документами, що містять кілька просторів імен, таких як HTML зі вбудованими SVG або MathML, або XML, що поєднує кілька словників.

- `ns|*` – дає збіг з усіма елементами в просторі імен _ns_
- `*|*` – дає збіг з усіма елементами
- `|*` – дає збіг з усіма елементами без простору імен

## Синтаксис

```css
* { style properties }
```

Зірочка є необов'язковою для простих селекторів. Наприклад, `*.warning` і `.warning` еквівалентні.

## Приклади

### CSS

```css
* [lang^="uk"] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left;
}

/* автоматично звільняти наступний сестринський елемент після рухомого елемента */
.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning"><span lang="uk">Зелений уривок</span> у червоному абзаці.</p>
<p id="maincontent" lang="uk">
  <span class="warning">Червоний уривок</span> у зеленому абзаці.
</p>
```

### Результат

{{EmbedLiveSample('pryklady')}}

### Простори імен

У цьому прикладі селектор дає збіг лише з елементами в просторі імен _example_.

```css
@namespace example url(http://www.example.com);
example|* {
  color: blue;
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Модуль [Селектори CSS](/uk/docs/Web/CSS/CSS_selectors)
- [Вивчаймо CSS – Селектори](/uk/docs/Learn/CSS/Building_blocks/Selectors)
