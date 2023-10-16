---
title: flex-grow
slug: Web/CSS/flex-grow
page-type: css-property
browser-compat: css.properties.flex-grow
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`flex-grow`** (флексбокс зростання) задає множник гнучкого зростання, який впливає на те, яка частина вільного простору контейнера буде віддана [головному розмірові](https://www.w3.org/TR/css-flexbox/#main-size) цього елемента.

Коли головний розмір гнучкого контейнера перевищує суму головних розмірів гнучких елементів, надлишок простору розподіляється між гнучкими елементами, причому зростання кожного елемента пропорційно його множнику зростання відносно загальної суми множників зростання всіх елементів контейнера.

{{EmbedInteractiveExample("pages/css/flex-grow.html")}}

## Синтаксис

```css
/* Значення <number> */
flex-grow: 3;
flex-grow: 0.6;

/* Глобальні значення */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: revert-layer;
flex-grow: unset;
```

Властивість `flex-grow` задається у вигляді єдиного значення `<number>`.

### Значення

- `<number>`
  - : Дивіться {{cssxref("&lt;number&gt;")}}. Від'ємні значення є недійсними. Усталено – 0.

## Опис

Ця властивість задає те, скільки вільного простору контейнера буде віддано цьому гнучкому елементу (множник зростання гнучкого елемента).

[Головний розмір](https://www.w3.org/TR/css-flexbox/#main-size) – це або ширина, або висота елемента, залежно від значення {{cssxref("flex-direction")}}.

Вільний простір - це розмір гнучкого контейнера мінус розмір всіх гнучких елементів разом. Якщо у всіх сусідніх елементів один і той же множник зростання, то всі елементи отримають однакові частки вільного простору, а інакше він розподіляється відповідно до співвідношення, визначеного різними множниками зростання гнучких елементів.

Властивість `flex-grow` використовується поруч з іншими гнучкими властивостями {{cssxref("flex-shrink")}} та {{cssxref("flex-basis")}}, і зазвичай визначається за допомогою скорочення {{cssxref("flex")}}, щоб забезпечити задання всіх значень.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Задання множника зростання гнучкого елемента

In this example, there is a total of 8 growth factors distributed among the 6 flex items, meaning each growth factor is 12.5% of the remaining space.

У цьому прикладі сумарний множник зростання 8 розподіляється між 6 гнучкими елементами, що означає, що кожен множник зростання становить 12,5% від вільного простору.

#### HTML

```html
<h4>Це Flex-Grow</h4>
<h5>А, Б, В і Г – flex-grow:1 . Ґ і Д – flex-grow:2 .</h5>
<div id="content">
  <div class="small" style="background-color:red;">А</div>
  <div class="small" style="background-color:lightblue;">Б</div>
  <div class="small" style="background-color:yellow;">В</div>
  <div class="double" style="background-color:brown;">Г</div>
  <div class="double" style="background-color:lightgreen;">Ґ</div>
  <div class="small" style="background-color:brown;">Д</div>
</div>
```

#### CSS

```css
#content {
  display: flex;

  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.small {
  flex-grow: 1;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.double {
  flex-grow: 2;
  border: 3px solid rgba(0, 0, 0, 0.2);
}
```

#### Результат

{{EmbedLiveSample('zadannia-mnozhnyka-zrostannia-hnuchkoho-elementa')}}

When the six flex items are distributed along the container's main axis, if the sum of the main content of those flex items is less than the size of the container's main axis, the extra space is distributed among the size flex items, with A, B, C, and F, each getting 12.5% of the remaining space and D and E each getting 25% of the extra space.

Коли шість гнучких елементів розподіляються вздовж головної осі контейнера, то якщо сума головного вмісту цих гнучких елементів менша за довжину головної осі контейнера, то надлишковий простір розподіляється між гнучкими елементами, причому А, Б, В і Г отримують по 12,5% вільного простору, а Ґ і Д – по 25%.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник зі Флексбоксу CSS: _[Базові концепції флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- Посібник зі Флексбоксу CSS: _[Контроль співвідношень гнучких елементів на головній осі](/uk/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_
- Стаття [`flex-grow` – дивний. Або ні?](https://css-tricks.com/flex-grow-is-weird/) від Мануеля Матузовича на CSS-Tricks, яка ілюструє те, як працює flex-grow
