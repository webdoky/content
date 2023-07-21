---
title: flex
slug: Web/CSS/flex
page-type: css-shorthand-property
browser-compat: css.properties.flex
---

{{CSSRef}}

[Властивість-скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`flex`** (гнутися) задає те, як гнучкий _елемент_ зростатиме чи скорочуватиметься для заповнення доступного в гнучкому контейнері простору.

{{EmbedInteractiveExample("pages/css/flex.html")}}

## Складові властивості

Ця властивість є скороченням наступних властивостей CSS:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## Синтаксис

```css
/* Значення – ключові слова */
flex: auto;
flex: initial;
flex: none;

/* Одне значення, число без одиниць вимірювання: flex-grow
flex-basis у такому разі дорівнює 0. */
flex: 2;

/* Одне значення, ширина чи висота: flex-basis */
flex: 10em;
flex: 30%;
flex: min-content;

/* Два значення: flex-grow | flex-basis */
flex: 1 30px;

/* Два значення: flex-grow | flex-shrink */
flex: 2 2;

/* Три значення: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Глобальні значення */
flex: inherit;
flex: initial;
flex: revert;
flex: revert-layer;
flex: unset;
```

Властивість `flex` може бути задана у вигляді одного, двох чи трьох значень.

- **Синтаксис одного значення:** значення мусить бути одним з таких варіантів:

  - дійсне для {{cssxref("&lt;flex-grow&gt;")}} значення: тоді скорочення розгортається як `flex: <flex-grow> 1 0`.
  - дійсне для {{cssxref("&lt;flex-basis&gt;")}} значення: тоді скорочення розгортається як `flex: 1 1 <flex-basis>`.
  - ключове слово `none`, або одне з глобальних ключових слів.

- **Синтаксис двох значень:**

  - Перше значення мусить бути:

    - {{cssxref("&lt;number&gt;")}} – тлумачиться як `<flex-grow>`.

  - Друге значення мусить бути одним з таких варіантів:

    - дійсне для {{cssxref("flex-shrink")}} значення: тоді скорочення розгортається як `flex: <flex-grow> <flex-shrink> 0`.
    - дійсне для {{cssxref("flex-basis")}} значення: тоді скорочення розгортається як `flex: <flex-grow> 1 <flex-basis>`.

- **Синтаксис трьох значень:** значення мусять бути в наступному порядку:

  1. дійсне для {{cssxref("flex-grow")}} значення.
  2. дійсне для {{cssxref("flex-shrink")}} значення.
  3. дійсне для {{cssxref("flex-basis")}} значення.

### Значення

- `initial`
  - : Елемент калібрується згідно зі своїми властивостями `width` і `height`. Він скорочується до свого мінімального розміру, аби вміститись у контейнер, але не росте для захоплення доступного в гнучкому контейнері вільного простору. Це рівносильно заданню "`flex: 0 1 auto`".
- `auto`
  - : Елемент калібрується згідно зі своїми властивостями `width` і `height`, але росте для захоплення доступного в гнучкому контейнері вільного простору, а також скорочується до свого мінімального розміру, аби в контейнері поміститися. Це рівносильно заданню "`flex: 1 1 auto`".
- `none`
  - : Елемент калібрується згідно зі своїми властивостями `width` і `height`. Він геть негнучкий: і не скорочується, і не росте щодо гнучкого контейнера. Це рівносильно заданню "`flex: 0 0 auto`".
- `<'flex-grow'>`
  - : Визначає {{cssxref("flex-grow")}} гнучкого елемента. Від'ємні значення вважаються недійсними. Коли упущено – вважається `1`. (початкове значення – `0`)
- `<'flex-shrink'>`
  - : Визначає {{cssxref("flex-shrink")}} гнучкого елемента. Від'ємні значення вважаються недійсними. Коли упущено – вважається `1`. (початкове значення – `1`)
- `<'flex-basis'>`
  - : Визначає {{cssxref("flex-basis")}} гнучкого елемента. Значення `0` мусить мати одиниці вимірювання, щоб не тлумачитись як гнучкість. Коли упущено – вважається `0`. (початкове значення – `auto`)

## Опис

У більшості випадків розробники повинні давати `flex` одне з наступних значень: `auto`, `initial`, `none` чи додатне число без одиниць вимірювання. Аби побачити в дії ці значення, спробуйте змінити розмір гнучких контейнерів нижче:

```html hidden
<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item initial">initial</div>
  <div class="item initial">initial</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item initial">initial</div>
  <div class="item none">none</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item four">4</div>
  <div class="item two">2</div>
  <div class="item one">1</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.flex-container {
  background-color: #f4f7f8;
  resize: horizontal;
  overflow: hidden;
  display: flex;
  margin: 1em;
}

.item {
  margin: 1em;
  padding: 0.5em;
  width: 110px;
  min-width: 0;
  background-color: #1b5385;
  color: white;
  font-family: monospace;
  font-size: 13px;
}

.initial {
  flex: initial;
}

.auto {
  flex: auto;
}

.none {
  flex: none;
}

.four {
  flex: 4;
}

.two {
  flex: 2;
}

.one {
  flex: 1;
}
```

{{EmbedLiveSample("opys", 1200, 400)}}

Усталено гнучкі елементи не скорочуються до розмірів, менших за їх мінімальний розмір вмісту. Щоб це змінити, треба задати елементові {{cssxref("min-width")}} чи {{cssxref("min-height")}}.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### flex: auto

Цей приклад демонструє те, як гнучкий елемент із `flex: auto` зростає, щоб зайняти вільний простір у контейнері.

#### HTML

```html
<div id="flex-container">
  <div id="flex-auto">
    flex: auto (клацніть, аби показати чи прибрати звичайний елемент)
  </div>
  <div id="flex-initial">flex: initial</div>
</div>
```

#### CSS

```css
#flex-container {
  display: flex;
  font-family: Consolas, Arial, sans-serif;
}
#flex-container > div {
  padding: 1rem;
}
#flex-auto {
  flex: auto;
  border: 1px solid #f00;
}
#flex-initial {
  border: 1px solid #000;
}
```

#### JavaScript

```js
const flexAuto = document.getElementById("flex-auto");
const flexInitial = document.getElementById("flex-initial");
flexAuto.addEventListener("click", () => {
  flexInitial.style.display =
    flexInitial.style.display === "none" ? "block" : "none";
});
```

#### Результат

Цей гнучкий контейнер вміщає два гнучкі елементи:

- "flex: auto" має `flex` зі значенням [`auto`](auto)
- "flex: initial" має `flex` зі значенням [`initial`](#initial)

Елемент "flex: initial" займає стільки простору, скільки вимагає його ширина, але не розширюється, щоб зайняти більше. Весь вільний простір займає "flex: auto".

Коли клацнути "flex: auto", елемент "flex: initial" отримує властивість {{cssxref("display")}} зі значенням `none`, що прибирає його з макета. Потім елемент "flex: auto" розширюється, щоб зайняти ввесь доступний в контейнері простір.

{{EmbedLiveSample('flex-auto','100%','100')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## See also

- Посібник зі флексбокса CSS: _[Базові концепції флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- Посібник зі флексбокса CSS: _[Контролювання співвідношень гнучких елементів за головною віссю](/uk/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_
