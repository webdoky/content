---
title: object-position
slug: Web/CSS/object-position
page-type: css-property
browser-compat: css.properties.object-position
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`object-position`** (позиція об'єкта) задає шикування вмісту вибраного [заміщеного елемента](/uk/docs/Web/CSS/Replaced_element) в межах рамки елемента. Області рамки, які не покриті об'єктом заміщеного елемента, показують фон цього елемента.

Підлаштувати те, як власний розмір об'єкта заміщеного елемента (тобто його природний розмір) підлаштовується до розміру рамки елемента, можна використовуючи властивість {{cssxref("object-fit")}}.

{{EmbedInteractiveExample("pages/css/object-position.html")}}

## Синтаксис

```css
/* Значення – ключові слова */
object-position: top;
object-position: bottom;
object-position: left;
object-position: right;
object-position: center;

/* Значення <percentage> */
object-position: 25% 75%;

/* Значення <length> */
object-position: 0 0;
object-position: 1cm 2cm;
object-position: 10ch 8em;

/* Значення крайових зміщень */
object-position: bottom 10px right 20px;
object-position: right 3em bottom 10px;
object-position: top 0 right 10px;

/* Глобальні значення */
object-position: inherit;
object-position: initial;
object-position: revert;
object-position: revert-layer;
object-position: unset;
```

### Значення

- {{cssxref("&lt;position&gt;")}}
  - : Від одного до чотирьох значень, які визначають двовимірне положення елемента. Можна використовувати відносні або абсолютні зміщення.

> **Примітка:** Позицію можна задати так, щоб заміщений елемент був намальований за межами своєї рамки.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Позиціювання вмісту зображення

#### HTML

Тут HTML, що містить два елементи {{HTMLElement("img")}}, кожен з яких відображає логотип MDN.

```html
<img id="object-position-1" src="mdn.svg" alt="Логотип MDN" />
<img id="object-position-2" src="mdn.svg" alt="Логотип MDN" />
```

#### CSS

CSS включає усталене оформлення самого елемента `<img>`, а також окремі стилі для кожного з двох зображень.

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

Перше зображення розміщене так, щоб його лівий край був відступлений від лівого краю рамки елемента на 10 пікселів. Друге зображення розміщене так, щоб його правий край стояв по правому краю рамки елемента, а саме зображення розміщене на відстані 10% від верхнього краю рамки елемента.

#### Результат

{{EmbedLiveSample('pozytsiiuvannia-vmistu-zobrazhennia', '100%','600px')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші властивості CSS, пов'язані з зображеннями: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
