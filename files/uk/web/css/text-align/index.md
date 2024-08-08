---
title: text-align
slug: Web/CSS/text-align
page-type: css-property
browser-compat: css.properties.text-align
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`text-align`** (шикування тексту) задає горизонтальне шикування вмісту рядкового рівня всередині блокового елемента чи рамок комірки таблиці. Це означає, що вона працює подібно до {{cssxref("vertical-align")}}, але в горизонтальному напрямку.

{{EmbedInteractiveExample("pages/css/text-align.html")}}

## Синтаксис

```css
/* Значення – ключові слова */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: match-parent;

/* Значення блокового шикування (нестандартний синтаксис) */
text-align: -moz-center;
text-align: -webkit-center;

/* Глобальні значення */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

Властивість `text-align` задається як одне ключове слово зі списку нижче.

### Значення

- `start`
  - : Те саме, що `left`, якщо напрям тексту – зліва направо, і `right`, якщо справа наліво.
- `end`
  - : Те саме, що `right`, якщо напрям тексту – зліва направо, і `left`, якщо справа наліво.
- `left`
  - : Рядковий вміст шикується до лівого краю рамок строю.
- `right`
  - : Рядковий вміст шикується до правого краю рамок строю.
- `center`
  - : Рядковий вміст центрується в рамках строю.
- `justify`
  - : Рядковий вміст розподіляється рівномірно. Розділяє вміст проміжками так, щоб його лівий та правий краї лежали на лівому й правому краях рамок строю, відповідно, крім останнього рядка.
- `justify-all`
  - : Те саме, що `justify`, але, крім того, рівномірно розподіляє останній рядок.
- `match-parent`
  - : Подібне до `inherit`, але значення `start` і `end` обчислюються згідно з {{cssxref("direction")}} батьківського елемента і замінюються відповідним значенням – `left` чи `right`.

## Доступність

Непостійний розмір пробілів між словами, породжений рівномірним шикуванням тексту, може бути проблемним для людей з негараздами мислення, як то дислексією.

- [MDN розуміння WCAG, пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння критерію успіху 1.4.8 | Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Шикування start

#### HTML

```html
<p class="example">
  Глупість тисячі нерозумних живописців не може примусити нас зневажати
  живописне мистецтво, а научає, що ця наука многотрудна, і тільки дехто з
  величезної кількості любителів її осягає.
</p>
```

#### CSS

```css
.example {
  text-align: start;
  border: solid;
}
```

#### Результат

{{EmbedLiveSample("shykuvannia-start", "100%", "100%")}}

### Центрований текст

#### HTML

```html
<p class="example">
  Глупість тисячі нерозумних живописців не може примусити нас зневажати
  живописне мистецтво, а научає, що ця наука многотрудна, і тільки дехто з
  величезної кількості любителів її осягає.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### Результат

{{EmbedLiveSample("tsentrovanyi-tekst","100%","100%")}}

### Приклад з використанням "justify"

#### HTML

```html
<p class="example">
  Глупість тисячі нерозумних живописців не може примусити нас зневажати
  живописне мистецтво, а научає, що ця наука многотрудна, і тільки дехто з
  величезної кількості любителів її осягає.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### Результат

{{EmbedLiveSample('pryklad-z-vykorystanniam-justify',"100%","100%")}}

### Вирівнювання таблиць

Цей приклад демонструє використання `text-align` на елементах {{htmlelement("table")}}:

- {{htmlelement("caption")}} задано шикування праворуч.
- Перші два елементи {{htmlelement("th")}} успадковують шикування ліворуч `text-align: left`, задане на {{htmlelement("thead")}}, а третьому задане шикування праворуч.
- Всередині елемента {{htmlelement("tbody")}} першому ряду задано шикування праворуч, другому – шикування по центру, а третій користується усталеним шикуванням (ліворуч).
- У кожному ряду певним коміркам (к12, к31) задано інше шикування, ніж у ряду.

#### HTML

```html
<table>
  <caption>
    Таблиця-приклад
  </caption>
  <thead>
    <tr>
      <th>Колонка 1</th>
      <th>Колонка 2</th>
      <th class="right">Колонка 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="right">
      <td>11</td>
      <td class="center">12</td>
      <td>13</td>
    </tr>
    <tr class="center">
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr id="r3">
      <td class="right">31</td>
      <td>32</td>
      <td>33</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}

thead {
  text-align: left;
}

td,
th {
  border: solid 1px black;
}

.center {
  text-align: center;
}

.right,
caption {
  text-align: right;
}
```

#### Результат

{{EmbedLiveSample('shykuvannia-tablyts', "100%", "200")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
