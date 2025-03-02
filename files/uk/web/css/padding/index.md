---
title: padding
slug: Web/CSS/padding
page-type: css-shorthand-property
browser-compat: css.properties.padding
---

{{CSSRef}}

[Властивість-скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`padding`** (набивка) встановлює [розмах внутрішніх відступів](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#oblast-vnutrishnikh-vidstupiv) з усіх чотирьох сторін елемента за раз.

{{EmbedInteractiveExample("pages/css/padding.html")}}

Розмах внутрішніх відступів елемента – простір між елементом та його межами.

> [!NOTE]
> Зовнішні відступи створюють додатковий простір всередині елемента. На відміну від них, {{cssxref("margin", "зовнішні відступи")}} створюють додатковий простір _навколо_ елемента.

## Складові властивості

Ця властивість є скороченням для наступних властивостей CSS:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

## Синтаксис

```css
/* Застосування до всіх чотирьох сторін */
padding: 1em;

/* згори та знизу | зліва та справа */
padding: 5% 10%;

/* згори | зліва та справа | знизу */
padding: 1em 2em 2em;

/* згори | справа | знизу | зліва */
padding: 5px 1em 0 2em;

/* Глобальні значення */
padding: inherit;
padding: initial;
padding: revert;
position: revert-layer;
padding: unset;
```

Властивість `padding` (набивка) може бути вказана за допомогою одного, двох, трьох чи чотирьох значень. Кожне значення – {{cssxref("&lt;length&gt;")}} (довжина) або {{cssxref("&lt;percentage&gt;")}} (відсотки). Від'ємні значення є недійсними.

- Коли вказано **одне** значення, то однакові внутрішні відступи застосовуються на **всіх чотирьох сторонах**.
- Коли вказано **два** значення, то перше застосовується як ширина відступу **згори та внизу**, а друге – **зліва та справа**.
- Коли вказано **три** значення, то перше застосовується як ширина відступу **згори**, друге – **зліва та справа**, а третє – **знизу**.
- Коли вказано **чотири** значення, то вони використовуються як ширини відступу, відповідно, **згори**, **справа**, **знизу** та **зліва** (за годинниковою стрілкою).

### Значення

- {{cssxref("&lt;length&gt;")}} (довжина)
  - : Розмір внутрішнього відступу як фіксоване значення.
- {{cssxref("&lt;percentage&gt;")}}
  - : Розмір внутрішнього відступу як відсоток від його розміру в рядку (_ширини_ в горизонтальному письмі, означеному у {{cssxref("writing-mode")}}), або від [контейнерного блока](/uk/docs/Web/CSS/Containing_block).

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Встановлення внутрішніх відступів у пікселях

#### HTML

```html
<h4>Цей елемент має внутрішні відступи помірних розмірів.</h4>
<h3>Внутрішні відступи у цьому елементі – велетенські!</h3>
```

#### CSS

```css
h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### Результат

{{EmbedLiveSample('vstanovlennia-vnutrishnikh-vidstupiv-u-pikseliakh', '100%', 300)}}

### Встановлення внутрішніх відступів у пікселях та відсотках

```css
/* З кожної сторони: 5% внутрішнього відступу */
padding: 5%;

/* З кожної сторони: 10px внутрішнього відступу */
padding: 10px;

/* згори та знизу: 10px внутрішнього відступу */
/* зліва та справа: 20px внутрішнього відступу */
padding: 10px 20px;

/* згори:           10px внутрішнього відступу */
/* зліва та справа: 3% внутрішнього відступу   */
/* знизу:           20px внутрішнього відступу */
padding: 10px 3% 20px;

/* згори:  1em внутрішнього відступу  */
/* справа: 3px внутрішнього відступу  */
/* знизу:  30px внутрішнього відступу */
/* зліва:  5px внутрішнього відступу  */
padding: 1em 3px 30px 5px;
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} і {{cssxref("padding-left")}}
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} і {{cssxref("padding-inline-end")}}
- Скорочення {{cssxref("padding-block")}} і {{cssxref("padding-inline")}}
- [Вступ до базової рамкової моделі CSS](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- Модуль [Рамкової моделі CSS](/uk/docs/Web/CSS/CSS_box_model)
