---
title: Селектори класу
slug: Web/CSS/Class_selectors
page-type: css-selector
browser-compat: css.selectors.class
---

{{CSSRef}}

**Селектор класу** [CSS](/uk/docs/Web/CSS) дає збіг з елементами на основі їхнього атрибута [`class`](/uk/docs/Web/HTML/Global_attributes/class).

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

Зверніть увагу на те, що це рівносильно наступному [селектору атрибута](/uk/docs/Web/CSS/Attribute_selectors):

```css
[class~=class_name] { style properties }
```

Значення `class_name` мусить бути дійсним [ідентифікатором CSS](/uk/docs/Web/CSS/ident). Атрибути HTML `class`, що не є дійсними ідентифікаторами CSS, повинні бути [екрановані](/uk/docs/Web/CSS/ident#escaping_characters) перед вживанням їх у класових селекторах.

## Приклади

### Дійсні селектори класу

#### HTML

```html
<p class="red">Цей абзац має червоний текст.</p>
<p class="red yellow-bg">Цей абзац має червоний текст і жовте тло.</p>
<p class="red fancy">Цей абзац має червоний текст і "вишуканий" стиль.</p>
<p>Це просто звичайний абзац.</p>
```

```html
<!-- Наступні два абзаци мають атрибути class,
 що містять символи, які необхідно екранувати в CSS -->

<p class="item?one">Цей абзац має рожеве тло.</p>
<p class="123item">Цей абзац має жовте тло.</p>
```

#### CSS

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

```css
/* У наступних двох правилах атрибути class необхідно екранувати */

.item\?one {
  background-color: pink;
}

.\00003123item {
  background-color: yellow;
}
```

#### Результат

{{EmbedLiveSample('pryklady', "", 300)}}

### Невалідні селектори класу

Селектори класу в наступних правилах не є валідними ідентифікаторами CSS, а тому ігноруються.

```css example-bad
.item?one {
  background-color: green;
}

.123item {
  background-color: green;
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Селектори CSS](/uk/docs/Web/CSS/CSS_selectors)
- [Вивчаймо CSS – Селектори](/uk/docs/Learn/CSS/Building_blocks/Selectors)
