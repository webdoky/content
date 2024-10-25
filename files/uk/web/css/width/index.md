---
title: width
slug: Web/CSS/width
page-type: css-property
browser-compat: css.properties.width
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`width`** (ширина) встановлює ширину елемента. Усталено вона встановлює ширину [області вмісту](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#oblast-vmistu), однак якщо властивість {{cssxref("box-sizing")}} має значення `border-box`, то вказане значення стає шириною [відмежованої області](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#vidmezhovana-oblast).

{{EmbedInteractiveExample("pages/css/width.html")}}

Задане значення `width` застосовується до області вмісту, поки воно залишається в межах значень, заданих властивостями {{cssxref("min-width")}} і {{cssxref("max-width")}}.

- Якщо значення `width` менше за значення `min-width`, то `min-width` відкидає `width`.
- Якщо значення `width` більше за значення `max-width`, то `max-width` відкидає `width`.

> [!NOTE]
> Як геометрична властивість, `width` також застосовується до елементів SVG {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} і {{SVGElement("foreignObject")}}, причому `auto` вирішується як `100%` для `<svg>` і як `0` для інших елементів, а відсоткові значення відносні щодо ширини області перегляду SVG для `<rect>`. Значення властивості CSS `width` перемагає значення атрибута SVG {{SVGAttr("width")}}, якщо на елементі SVG такий задано.

## Синтаксис

```css
/* Значення <length> */
width: 300px;
width: 25em;
width: anchor-size(--myAnchor inline, 120%);
width: minmax(100px, anchor-size(width));

/* Значення <percentage> */
width: 75%;

/* Значення – ключові слова */
width: max-content;
width: min-content;
width: fit-content;
width: fit-content(20em);
width: auto;
width: stretch;

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
  - : Визначає ширину у вигляді відсотків від ширини [контейнерного блока](/uk/docs/Web/CSS/Containing_block).
- `auto` (автоматично)
  - : Браузер обчислить та обере ширину для обраного елемента.
- `max-content` (максимальний вміст)
  - : Внутрішньо бажана ширина.
- `min-content` (мінімальний вміст)
  - : Внутрішньо найменша можлива ширина.
- `fit-content`
  - : Використовує доступний простір, але не більше, ніж [max-content](/uk/docs/Web/CSS/max-content), тобто `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Використовує формулу fit-content щодо доступного простору, заміненого вказаним аргументом, тобто `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Задає ширині [рамки зовнішніх відступів](/uk/docs/Learn/CSS/Building_blocks/The_box_model#chastyny-ramky) елемента ширину його [контейнерного блока](/uk/docs/Web/CSS/Containing_block#vybir-konteinernoho-bloka). Намагається змусити рамку зовнішніх відступів заповнити доступний у контейнерному блоці простір так, щоб це вийшло схоже на `100%`, але застосовуючи результівний розмір до рамки зовнішніх відступів, а не рамки, визначеної [box-sizing](/uk/docs/Web/CSS/box-sizing).

    > [!NOTE]
    > Аби перевірити псевдоніми значення `stretch`, що використовуються браузерами, та статус реалізації цього значення, дивіться наш розділ [Сумісності з браузерами](#sumisnist-iz-brauzeramy).

## Доступність

Слід пересвідчитись, що елементи, для котрих вказана `width`, не обрізаються і не затуляються іншим вмістом, коли до сторінки застосовується збільшення для укрупнення тексту.

- [MDN Розуміння WCAG, Пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanovy-1.4-polehshennia-perehliadu-ta-proslukhovuvannia-dlia-korystuvachiv-vkliuchno-iz-viddilenniam-perednioho-planu-vid-tla)
- [Розуміння мірила успіху 1.4.4 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

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
<p class="goldie">Спільнота MDN пише справді добру документацію.</p>
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
  width: max-content;
}
```

```html
<p class="maxgreen">Спільнота MDN пише справді добру документацію.</p>
```

{{EmbedLiveSample('pryklad-iz-max-content', '500px', '64px')}}

### Приклад із min-content

```css
p.minblue {
  background: lightblue;
  width: min-content;
}
```

```html
<p class="minblue">Спільнота MDN пише справді добру документацію.</p>
```

{{EmbedLiveSample('pryklad-iz-min-content', '500px', '155px')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
- [Вступ у Базову рамкову модель CSS](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- Модуль [Рамкової моделі CSS](/uk/docs/Web/CSS/CSS_box_model)
