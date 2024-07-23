---
title: flex-wrap
slug: Web/CSS/flex-wrap
page-type: css-property
browser-compat: css.properties.flex-wrap
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`flex-wrap`** (гнучке загортання) задає те, чи змушені гнучкі елементи ставати в одну лінію, чи можуть загортатись на наступні. Якщо загортання – дозволене, то ця властивість задає напрям, в якому нагромаджуються лінії.

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

Властивість-скорочення {{cssxref("flex-flow")}} може вживатися для задання водночас властивостей {{CSSXRef("flex-direction")}} і `flex-wrap`, у такий спосіб визначаючи головну та поперечну осі гнучкого контейнера.

## Синтаксис

```css
flex-wrap: nowrap; /* Усталене значення */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Глобальні значення */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

### Значення

Властивість `flex-wrap` задається у вигляді єдиного ключового слова, вибраного серед значень нижче:

- `nowrap`
  - : Гнучкі елементи розкладаються на єдиній лінії, що може призвести до переповнення гнучкого контейнера. Точка **cross-start** – рівносильна [inline-start або block-start](/uk/docs/Glossary/Flow_relative_values) залежно від значення {{cssxref("flex-direction")}}. Це значення – усталене.
- `wrap`
  - : Гнучкі елементи розриваються на декілька ліній. Точка **cross-start** – рівносильна [inline-start або block-start](/uk/docs/Glossary/Flow_relative_values), залежно від поточного [напрямку письма](/uk/docs/Web/CSS/CSS_writing_modes), а також значення {{cssxref("flex-direction")}}.
- `wrap-reverse`
  - : Поводиться так само, як `wrap`, але cross-start і cross-end стоять навпаки.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Задання значень загортання гнучкого контейнера

#### HTML

```html
<h4>Це приклад для flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>Це приклад для flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>Це приклад для flex-wrap:wrap-reverse</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css
/* Загальні стилі */
.content,
.content1,
.content2 {
  color: #fff;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 300px;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Стилі флексбоксу */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Результати

{{EmbedLiveSample('zadannia-znachen-zahortannia-hnuchkoho-konteinera', '', '700')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{CSSXRef("flex-direction")}}
- Скорочення {{CSSXRef("flex-flow")}}
- [Базові концепції флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Майстерність загортання гнучких елементів](/uk/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- Модуль [Компонування гнучкої рамки CSS](/uk/docs/Web/CSS/CSS_flexible_box_layout)
