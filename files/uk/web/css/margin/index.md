---
title: margin
slug: Web/CSS/margin
page-type: css-shorthand-property
browser-compat: css.properties.margin
---

{{CSSRef}}

Скорочення [CSS](/uk/docs/Web/CSS) **`margin`** (берег) задає [область зовнішніх відступів](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#oblast-zovnishnikh-vidstupiv) з усіх чотирьох боків елемента.

{{EmbedInteractiveExample("pages/css/margin.html")}}

## Складові властивості

Ця властивість є скороченням наступних властивостей CSS:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

## Синтаксис

```css
/* застосовується до всіх чотирьох боків */
margin: 1em;
margin: -3px;

/* згори та знизу | зліва та справа */
margin: 5% auto;

/* згори | зліва та справа | знизу */
margin: 1em auto 2em;

/* згори | справа | знизу | знизу */
margin: 2px 1em 0 auto;

/* значення anchor-size() */
margin: 5% anchor-size(width);
margin: calc(anchor-size(width) / 4) 1em 0
  anchor-size(--myAnchor self-inline, 50px);

/* Значення - ключові слова */
margin: auto;

/* Глобальні значення */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

Властивість `margin` може бути задана з одним, двома, трьома чи чотирма значеннями. Кожне значення – це {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} або ключове слово `auto`. Від'ємні значення притягують елемент ближче до сусідів, ніж було б усталено.

- Коли задано **одне** значення, то воно застосовується до **усіх чотирьох сторін**.
- Коли задано **два** значення, то перший відступ застосовується **згори та знизу**, а другий – **зліва і справа**.
- Коли задано **три** значення, то перший відступ застосовується **згори**, другий – **справа і зліва**, а третій – **знизу**.
- Коли задано **чотири** значення, то ці відступи застосовуються **згори**, **справа**, **знизу** і **зліва** – в такому порядку (за годинниковою стрілкою).

### Значення

- {{cssxref("length")}}

  - : Розмір зовнішнього поля як фіксоване значення.
    - У разі _якірно-позиційних елементів_ функція {{cssxref("anchor-size()")}} вирішується до значення {{cssxref("&lt;length&gt;")}}, відносного щодо ширини або висоти пов'язаного _якірного елемента_ (дивіться [Задання зовнішніх відступів елемента, залежних від розміру якоря](/uk/docs/Web/CSS/CSS_anchor_positioning/Using#zadannia-zovnishnikh-vidstupiv-elementa-zalezhnykh-vid-rozmiru-yakoria)).

- {{cssxref("percentage")}}
  - : Розмір зовнішнього поля як відсоткове значення, відносне щодо рядкового розміру (_ширини_ для горизонтальної мови, визначеної {{cssxref("writing-mode")}}) [контейнерного блока](/uk/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Браузер сам обирає годящий зовнішній відступ. Наприклад, у певних випадках це значення може використовуватися для центрування елемента.

## Опис

Ця властивість може використовуватися для задання зовнішнього відступу на всіх чотирьох сторонах елемента. Зовнішні відступи породжують додатковий проміжок _навколо_ елемента, на відміну від {{cssxref("padding")}}, котра породжує додатковий проміжок _всередині_ елемента.

Верхній та нижній зовнішні відступи не мають дії на _не[заміщених](/uk/docs/Web/CSS/Replaced_element)_ рядкових елементах, як то {{HTMLElement("span")}} чи {{HTMLElement("code")}}.

### Горизонтальне центрування

Центрувати елемент за горизонталлю в межах його батьківського елемента можна, задавши йому `margin: 0 auto;`.

Поширеніший метод центрування елемента за горизонталлю – задання контейнеру `display: flex;` і [`justify-content: center;`](/uk/docs/Web/CSS/justify-content), у такий спосіб [центруючи його гнучкі дочірні елементи](/uk/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container).

### Стягування зовнішніх відступів

Верхній та нижній зовнішні відступи елементів іноді стягуються в один відступ, рівний більшому з двох відступів. Більше подробиць – у розділі [Опанування явища складання берегів](/uk/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing).

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Простий приклад

#### HTML

```html
<div class="center">Цей елемент центровано.</div>

<div class="outside">Цей елемент розташований поза своїм контейнером.</div>
```

#### CSS

```css
.center {
  margin: auto;
  background: lime;
  width: 66%;
}

.outside {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

{{EmbedLiveSample('prostyi-pryklad','100%',120)}}

### Більше прикладів

```css
margin: 5%; /* Усі сторони: 5% відступу */

margin: 10px; /* Усі сторони: 10px відступу */

margin: 1.6em 20px; /* згори та знизу: 1.6em відступу */
/* зліва і справа: 20px відступу */

margin: 10px 3% -1em; /* згори:            10px відступу */
/* зліва і справаt: 3% відступу   */
/* знизу:         -1em відступу */

margin: 10px 3px 30px 5px; /* згори:    10px відступу */
/* справаt:  3px відступу  */
/* знизу: 30px відступу */
/* зліва:   5px відступу  */

margin: 2em auto; /* згори та знизу: 2em відступу   */
/* Рамки відцентровані по горизонталі */

margin: auto; /* згори та знизу: 0 відступу     */
/* Рамки відцентровані по горизонталі */
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} і {{cssxref("margin-left")}}
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} і {{cssxref("margin-inline-end")}}
- Скорочення {{cssxref("margin-block")}} і {{cssxref("margin-inline")}}
- [Опанування перекриття зовнішніх відступів](/uk/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Вступ у Базову рамкову модель CSS](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- Модуль [Рамкової моделі CSS](/uk/docs/Web/CSS/CSS_box_model)
