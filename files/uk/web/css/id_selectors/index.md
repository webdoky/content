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

Зверніть увагу на те, що синтаксично (але не щодо специфічності) це рівносильно наступному {{Cssxref("Attribute_selectors", "селектору атрибута")}}:

```css
[id=id_value] { style properties }
```

## Приклади

### CSS

```css
#identified {
  background-color: skyblue;
}
```

### HTML

```html
<div id="identified">На цьому div є особливий ідентифікатор!</div>
<div>Це лишень звичайний div.</div>
```

### Результат

{{EmbedLiveSample("pryklady", '100%', 50)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Селектори CSS](/uk/docs/Web/CSS/CSS_selectors)
- [Вивчаймо CSS – Селектори](/uk/docs/Learn/CSS/Building_blocks/Selectors)
