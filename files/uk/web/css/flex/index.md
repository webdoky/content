---
title: flex
slug: Web/CSS/flex
page-type: css-shorthand-property
browser-compat: css.properties.flex
---

{{CSSRef}}

[Властивість-скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`flex`** (гнутися) задає те, як {{glossary("flex item", "гнучкий елемент")}} зростатиме чи скорочуватиметься для заповнення доступного в гнучкому контейнері простору.

{{EmbedInteractiveExample("pages/css/flex.html")}}

## Складові властивості

Ця властивість є скороченням наступних властивостей CSS:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## Синтаксис

```css
/* Значення – ключове слово */
flex: none; /* 0 0 auto */

/* Одне значення, число без одиниць вимірювання: flex-grow
flex-basis у такому разі дорівнює 0%. */
flex: 2; /* 2 1 0% */

/* Одне значення, ширина чи висота: flex-basis */
flex: auto; /* 1 1 auto */
flex: 10em; /* 1 1 10em */
flex: 30%;
flex: min-content;

/* Два значення: flex-grow | flex-basis */
flex: 1 30px; /* 1 1 30px */

/* Два значення: flex-grow | flex-shrink */
flex: 2 2; /* 2 2 0% */

/* Три значення: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Глобальні значення */
flex: inherit;
flex: initial; /* 0 1 auto */
flex: revert;
flex: revert-layer;
flex: unset;
```

Властивість `flex` може бути задана у вигляді одного, двох чи трьох значень.

- **Синтаксис одного значення:** значення мусить бути одним з таких варіантів:

  - валідне для {{cssxref("&lt;flex-grow&gt;")}} значення: тоді це скорочення в усіх браузерах розгортається як `flex: <flex-grow> 1 0%`. Проте специфікація стверджує, що воно повинно розгортатися як `flex: <flex-grow> 1 0`.
  - валідне для {{cssxref("&lt;flex-basis&gt;")}} значення: тоді скорочення розгортається як `flex: 1 1 <flex-basis>`.
  - ключове слово `none`, або одне з глобальних ключових слів.

- **Синтаксис двох значень:**

  - Перше значення мусить бути:

    - {{cssxref("&lt;number&gt;")}} – тлумачиться як `<flex-grow>`.

  - Друге значення мусить бути одним з таких варіантів:

    - валідне для {{cssxref("flex-shrink")}} значення: тоді це скорочення в усіх браузерах розгортається як `flex: <flex-grow> <flex-shrink> 0%`.
    - валідне для {{cssxref("flex-basis")}} значення: тоді скорочення розгортається як `flex: <flex-grow> 1 <flex-basis>`.

- **Синтаксис трьох значень:** значення мусять бути в наступному порядку:

  1. валідне для {{cssxref("flex-grow")}} значення.
  2. валідне для {{cssxref("flex-shrink")}} значення.
  3. валідне для {{cssxref("flex-basis")}} значення.

### Значення

- `<'flex-grow'>`
  - : Визначає {{cssxref("flex-grow")}} гнучкого елемента. Від'ємні значення вважаються невалідними. Коли пропущено – вважається `1`. (початкове значення – `0`)
- `<'flex-shrink'>`
  - : Визначає {{cssxref("flex-shrink")}} гнучкого елемента. Від'ємні значення вважаються невалідними. Коли пропущено – вважається `1`. (початкове значення – `1`)
- `<'flex-basis'>`
  - : Визначає {{cssxref("flex-basis")}} гнучкого елемента. Коли пропущено – вважається `0%`. Початкове значення – `auto`.
- `none`
  - : Елемент отримує розмір згідно зі своїми властивостями `width` і `height`. Він є цілком негнучким: ані скорочення, ані зростання щодо гнучкого контейнера не відбувається. Це рівносильно заданню `flex: 0 0 auto`.

Того, чого зазвичай хочуть від флексбокса, можна досягнути за допомогою наступних значень `flex`:

- `initial`: Гнучкий елемент не зростає, але може скоротитися. Це усталене значення розгортається до `flex: 0 1 auto`. Елемент отримує розмір згідно зі своїми властивостями `width` або `height`, залежно від `flex-direction`. Якщо є від'ємний доступний простір, то елемент скорочується до свого мінімального розміру, аби вміститися в контейнері, але не зростає для вбирання жодного додатного простору, доступного в гнучкому контейнері.
- `auto`: Гнучкий елемент може зростати та скорочуватися. Це значення розгортається до `flex: 1 1 auto`. Елемент отримує розмір згідно зі своїми властивостями `width` або `height`, залежно від `flex-direction`, але зростає для вбирання доступного в гнучкому контейнері додатного простору або скорочується до свого мінімального розміру, аби вміститися в контейнер у випадку присутності від'ємного простору. Такий гнучкий елемент є гнучким повністю.
- `none`: Гнучкий елемент не зростає та не скорочується. Це значення розгортається до `flex: 0 0 auto`. Елемент отримує розмір згідно зі своїми властивостями `width` або `height`, залежно від орієнтації гнучкого контейнера. Такий гнучкий елемент є цілком негнучким.
- `flex: <number [1,∞]>`: Головний розмір гнучкого елемента пропорційний до заданого числа. Це значення розгортається до `flex: <number> 1 0`. Такий вираз задає властивості `flex-basis` значення нуля й робить гнучкий елемент справді гнучким. Такий елемент стає щонайменше настільки широким або високим, як його мінімальний розмір, а додатний доступний простір у контейнері пропорційно розподіляється на основі множників росту цього елемента та його сестринських гнучких елементів. Якщо всі гнучкі елементи використовують такий патерн, то всі вони отримують свій розмір пропорційно до своїх числових значень.

  > [!WARNING]
  > Коли в значенні `flex` не задано `flex-basis`, браузери використовують значення `0%`. Це не те саме, що значення `flex-basis` `0`, яке задано в специфікації. Це може в певних випадках впливати на гнучкі макети. Цей вплив можна побачити в прикладі [flex-basis `0` і `0%`](/uk/docs/Web/CSS/flex-basis#flex-basis-0-i-0).

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

Усталено гнучкі елементи не скорочуються до розмірів, менших за їхній розмір {{cssxref("min-content")}}. Щоб це змінити, треба задати елементові {{cssxref("min-width")}} чи {{cssxref("min-height")}}.

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
    flex: auto (клацніть, аби прибрати чи додати рамку `flex: initial`)
  </div>
  <div id="default">flex: initial</div>
</div>
```

#### CSS

```css hidden
body * {
  padding: 1rem;
  text-select: none;
  box-sizing: border-box;
  font-family: Consolas, Arial, sans-serif;
}
```

```css
#flex-container {
  border: 2px dashed gray;
  display: flex;
}

#flex-auto {
  cursor: pointer;
  background-color: wheat;

  flex: auto;
}

#default {
  background-color: lightblue;
}
```

#### JavaScript

```js
const flexAutoItem = document.getElementById("flex-auto");
const defaultItem = document.getElementById("default");
flexAutoItem.addEventListener("click", () => {
  defaultItem.style.display =
    defaultItem.style.display === "none" ? "block" : "none";
});
```

#### Результат

Цей гнучкий контейнер вміщає два гнучкі елементи:

- Елемент `#flex-auto` має властивість `flex` зі значенням [`auto`](#auto). Значення `auto` розгортається до `1 1 auto`, тобто цьому елементу дозволено розширюватися.
- Елемент `#default` не має заданої властивості `flex`, тому йому дістається усталене значення [`initial`](#initial). Значення `initial` розгортається до `0 1 auto`, тобто цьому елементу розширюватися не дозволено.

Елемент `#default` займає стільки простору, скільки вимагає його ширина, але не розширюється, щоб зайняти більше. Весь вільний простір займає елемент `#flex-auto`.

Коли клацнути `#flex-auto`, елемент `#default` отримує властивість {{cssxref("display")}} зі значенням `none`, що прибирає його з макета. Потім елемент `#flex-auto` розширюється, щоб зайняти весь доступний у контейнері простір. Повторне клацання елемента `#flex-auto` знову додає елемент `#default` до контейнера.

{{EmbedLiveSample('flex-auto','100%','150')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## See also

- [Базові концепції флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Контролювання співвідношень гнучких елементів за головною віссю](/uk/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- Модуль [Компонування гнучкої рамки CSS](/uk/docs/Web/CSS/CSS_flexible_box_layout)
