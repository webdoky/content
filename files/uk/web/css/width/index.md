---
title: width
slug: Web/CSS/width
page-type: css-property
browser-compat: css.properties.width
---

{{CSSRef}}

Властивість CSS **`width`** (ширина) встановлює ширину елемента. Усталено вона встановлює ширину [області вмісту](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#oblast-vmistu), однак якщо властивість {{cssxref("box-sizing")}} має значення `border-box`, то вказане значення стає шириною [відмежованої області](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#vidmezhovana-oblast).

{{EmbedInteractiveExample("pages/css/width.html")}}

Задане значення `width` застосовується до області вмісту, поки воно залишається в межах значень, заданих властивостями {{cssxref("min-width")}} і {{cssxref("max-width")}}.

- Якщо значення `width` менше за значення `min-width`, то `min-width` відкидає `width`.
- Якщо значення `width` більше за значення `max-width`, то `max-width` відкидає `width`.

## Синтаксис

```css
/* Значення <length> */
width: 300px;
width: 25em;

/* Значення <percentage> */
width: 75%;

/* Значення – ключові слова */
width: max-content;
width: min-content;
width: fit-content(20em);
width: auto;

/* Глобальні значення */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### Значення

- {{cssxref("&lt;length&gt;")}}
  - : Визначає ширину у вигляді значення відстані.
- {{cssxref("&lt;percentage&gt;")}}
  - : Визначає ширину у вигляді відсотків від ширини контейнерного блока.
- `auto` (автоматично)
  - : Браузер обчислить та обере ширину для обраного елемента.
- `max-content` (максимальний вміст)
  - : Внутрішньо бажана ширина.
- `min-content` (мінімальний вміст)
  - : Внутрішньо найменша можлива ширина.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})` (припасувати вміст)
  - : Використовує формулу fit-content щодо доступного простору, заміненого вказаним аргументом, тобто `min(max-content, max(min-content, <length-percentage>))`.

## Занепокоєння щодо доступності

Слід пересвідчитись, що елементи, для котрих вказана `width`, не обрізаються і не затуляються іншим вмістом, коли до сторінки застосовується збільшення для укрупнення тексту.

- [MDN Розуміння WCAG, Пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanovy-1.4-polehshennia-perehliadu-ta-proslukhovuvannia-dlia-korystuvachiv-vkliuchno-iz-viddilenniam-perednioho-planu-vid-tla)
- [Розуміння мірила успіху 1.4.4 | W3C Розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Усталена ширина

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">Спільнота Mozilla виробляє чимало чудового ПЗ.</p>
```

{{EmbedLiveSample('ustalena-shyryna', '500px', '64px')}}

### Приклад із пікселями та емами

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Ширина, вказана у px</div>
<div class="em_length">Ширина, вказана у em</div>
```

{{EmbedLiveSample('pryklad-iz-pikseliamy-ta-emamy', '500px', '64px')}}

### Приклад із відсотками

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Ширина у відсотках</div>
```

{{EmbedLiveSample('pryklad-iz-vidsotkamy', '500px', '64px')}}

### Приклад із max-content

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit використовує нестандартне найменування */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
}
```

```html
<p class="maxgreen">Спільнота Mozilla виробляє чимало чудового ПЗ.</p>
```

{{EmbedLiveSample('pryklad-iz-max-content', '500px', '64px')}}

### Приклад із min-content

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
  width: min-content;
}
```

```html
<p class="minblue">Спільнота Mozilla виробляє чимало чудового ПЗ.</p>
```

{{EmbedLiveSample('pryklad-iz-min-content', '500px', '155px')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Блокова модель](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- Відповідні логічні властивості: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
