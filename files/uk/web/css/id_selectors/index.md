---
title: Селектори ідентифікатора
slug: Web/CSS/ID_selectors
page-type: css-selector
browser-compat: css.selectors.id
---

{{CSSRef}}

**Селектор ідентифікатора** CSS дають збіг з елементом на основі значення атрибута [`id`](/uk/docs/Web/HTML/Global_attributes/id) цього елемента. Щоб елемент був вибраний, його атрибут `id` повинен точно відповідати значенню, вказаному в селекторі.

```css
/* Елемент з id="demo" */
#demo {
  border: red 2px solid;
}
```

## Синтаксис

```css
#id_value { style properties }
```

Зверніть увагу на те, що синтаксично (але не щодо специфічності) це рівносильно наступному [селектору атрибута](/uk/docs/Web/CSS/Attribute_selectors):

```css
[id=id_value] { style properties }
```

Значення `id_value` мусить бути валідним [ідентифікатором CSS](/uk/docs/Web/CSS/ident). Атрибути HTML `id`, що не є валідними ідентифікаторами CSS, повинні бути [екрановані](/uk/docs/Web/CSS/ident#escaping_characters) для вжитку в класових селекторах.

## Приклади

### Валідні селектори ідентифікатора

#### HTML

```html
<p id="blue">Цей абзац має блакитне тло.</p>
<p>Це просто звичайний абзац.</p>
```

```html
<!-- Наступні два абзаци мають атрибути id,
що містять символи, які необхідно екранувати в CSS -->

<p id="item?one">Цей абзац має рожеве тло.</p>
<p id="123item">Цей абзац має жовте тло.</p>
```

#### CSS

```css
#blue {
  background-color: skyblue;
}
```

```css
/* У наступних двох правилах необхідно екранувати атрибути id */

#item\?one {
  background-color: pink;
}

#\00003123item {
  background-color: yellow;
}
```

#### Результат

{{EmbedLiveSample("pryklady", '100%', 200)}}

### Невалідні селектори ідентифікатора

Селектори ідентифікатора в наступних правилах не є валідними ідентифікаторами CSS, а тому ігноруються.

```css example-bad
#item?one {
  background-color: green;
}

#123item {
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
