---
title: height
slug: Web/CSS/height
page-type: css-property
browser-compat: css.properties.height
---

{{CSSRef}}

Властивість CSS **`height`** (висота) вказує висоту елемента. Усталено властивість визначає висоту [області вмісту](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#oblast-vmistu). Втім, якщо властивість {{cssxref("box-sizing")}} має значення `border-box`, то вказане значення стає висотою [області меж](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#oblast-mezh).

{{EmbedInteractiveExample("pages/css/height.html")}}

Властивості {{cssxref("min-height")}} та {{cssxref("max-height")}} зневажають `height`.

## Синтаксис

```css
/* Значення <length> */
height: 120px;
height: 10em;
height: 100vh;

/* Значення <percentage> */
height: 75%;

/* Значення – ключові слова */
height: max-content;
height: min-content;
height: fit-content;
height: fit-content(20em);
height: auto;

/* Глобальні значення */
height: inherit;
height: initial;
height: revert;
height: revert-layer;
height: unset;
```

### Значення

- {{cssxref("&lt;length&gt;")}}
  - : Визначає висоту у вигляді значення відстані.
- {{cssxref("&lt;percentage&gt;")}}
  - : Визначає висоту у вигляді відсотків від висоти [контейнерного блока](/uk/docs/Web/CSS/Containing_block).
- `auto` (автоматично)
  - : Браузер обчислить та обере висоту для обраного елемента.
- `max-content` (максимальний вміст)
  - : Внутрішньо бажана висота.
- `min-content` (мінімальний вміст)
  - : Внутрішньо найменша можлива ширина.
- `fit-content` (припасувати вміст)
  - : Використовує доступний простір, але не більше, ніж [max-content](/uk/docs/Web/CSS/max-content), тобто `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})` {{Experimental_Inline}}
  - : Використовує формулу fit-content щодо доступного простору, заміненого вказаним аргументом, тобто `min(max-content, max(min-content, <length-percentage>))`.
- {{cssxref("clamp", "clamp()")}}
  - : Дає змогу вибрати середнє значення з діапазону значень між заданими мінімумом та максимумом.

## Занепокоєння щодо доступності

Слід пересвідчитись, що елементи, для котрих вказана `height`, не обрізаються і не затуляються іншим вмістом, коли до сторінки застосовується збільшення для укрупнення тексту.

- [MDN Розуміння WCAG, Пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanovy-1.4-polehshennia-perehliadu-ta-proslukhovuvannia-dlia-korystuvachiv-vkliuchno-iz-viddilenniam-perednioho-planu-vid-tla)
- [Розуміння мірила успіху 1.4.4 | W3C Розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Встановлення висоти за допомогою пікселів та відсотків

#### HTML

```html
<div id="taller">Я – 50 пікселів заввишки.</div>
<div id="shorter">Я – 25 пікселів заввишки.</div>
<div id="parent">
  <div id="child">Я маю половину висоти предка.</div>
</div>
```

#### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

#### Результат

{{EmbedLiveSample('vstanovlennia-vysoty-za-dopomohoiu-pikseliv-ta-vidsotkiv', 'auto', 240)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Блокова модель](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}, {{cssxref("max-height")}}
- Відповідні логічні властивості: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
