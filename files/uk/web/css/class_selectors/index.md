---
title: Селектори класу
slug: Web/CSS/Class_selectors
page-type: css-selector
browser-compat: css.selectors.class
---

{{CSSRef}}

**Селектор класу** [CSS](/uk/docs/Web/CSS) дає збіг з елементами на основі їхнього атрибута [`class`](/uk/docs/Web/HTML/Global_attributes#class).

```css
/* Усі елементи з class="spacious" */
.spacious {
  margin: 2em;
}

/* Усі елементи <li> з class="spacious" */
li.spacious {
  margin: 2em;
}

/* Усі елементи <li>, чий список класів включає як "spacious", так і "elegant" */
/* Наприклад, class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
```

## Синтаксис

```css
.class_name { style properties }
```

Зверніть увагу на те, що це рівносильно наступному {{Cssxref("Attribute_selectors", "селектору атрибута")}}:

```css
[class~=class_name] { style properties }
```

## Приклади

### CSS

```css
.red {
  color: #f33;
}

.yellow-bg {
  background: #ffa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}
```

### HTML

```html
<p class="red">Цей абзац має червоний текст.</p>
<p class="red yellow-bg">Цей абзац має червоний текст і жовтий фон.</p>
<p class="red fancy">Цей абзац має червоний текст і "вишукане" оформлення.</p>
<p>Це лишень звичайний абзац.</p>
```

### Результат

{{EmbedLiveSample('pryklady')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Селектори CSS](/uk/docs/Web/CSS/CSS_selectors)
- [Вивчаймо CSS – Селектори](/uk/docs/Learn/CSS/Building_blocks/Selectors)
