---
title: height
slug: Web/CSS/height
page-type: css-property
browser-compat: css.properties.height
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`height`** (висота) вказує висоту елемента. Усталено властивість визначає висоту [області вмісту](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#oblast-vmistu). Втім, якщо властивість {{cssxref("box-sizing")}} має значення `border-box`, то вказане значення стає висотою [області меж](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#oblast-mezh).

{{EmbedInteractiveExample("pages/css/height.html")}}

Властивості {{cssxref("min-height")}} та {{cssxref("max-height")}} зневажають `height`.

> [!NOTE]
> Як геометрична властивість, `height` також застосовується до елементів SVG {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} і {{SVGElement("foreignObject")}}, причому `auto` вирішується як `100%` для `<svg>` і як `0` для інших елементів, а відсоткові значення відносні щодо висоти області перегляду SVG для `<rect>`. Значення властивості CSS `height` перемагає значення атрибута SVG {{SVGAttr("width")}}, якщо на елементі SVG такий задано.

## Синтаксис

```css
/* Значення <length> */
height: 120px;
height: 10em;
height: 100vh;
height: anchor-size(height);
height: anchor-size(--myAnchor self-block, 250px);
height: clamp(200px, anchor-size(width));

/* Значення <percentage> */
height: 75%;

/* Значення – ключові слова */
height: max-content;
height: min-content;
height: fit-content;
height: fit-content(20em);
height: auto;
height: minmax(min-content, anchor-size(width));

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
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Використовує формулу fit-content щодо доступного простору, заміненого вказаним аргументом, тобто `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Задає висоті [рамки зовнішніх відступів](/uk/docs/Learn/CSS/Building_blocks/The_box_model#chastyny-ramky) елемента висоту його [контейнерного блока](/uk/docs/Web/CSS/Containing_block#vybir-konteinernoho-bloka). Намагається змусити рамку зовнішніх відступів заповнити доступний у контейнерному блоці простір так, щоб це вийшло схоже на `100%`, але застосовуючи результівний розмір до рамки зовнішніх відступів, а не рамки, визначеної [box-sizing](/uk/docs/Web/CSS/box-sizing).

    > [!NOTE]
    > Аби перевірити псевдоніми значення `stretch`, що використовуються браузерами, та статус реалізації цього значення, дивіться наш розділ [Сумісності з браузерами](#sumisnist-iz-brauzeramy).

## Доступність

Слід пересвідчитись, що елементи, для котрих вказана `height`, не обрізаються і не затуляються іншим вмістом, коли до сторінки застосовується збільшення для укрупнення тексту.

- [MDN Розуміння WCAG, Пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanovy-1.4-polehshennia-perehliadu-ta-proslukhovuvannia-dlia-korystuvachiv-vkliuchno-iz-viddilenniam-perednioho-planu-vid-tla)
- [Розуміння мірила успіху 1.4.4 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

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
- {{cssxref("anchor-size()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("clamp", "minmax()")}}
