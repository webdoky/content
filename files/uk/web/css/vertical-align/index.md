---
title: vertical-align
slug: Web/CSS/vertical-align
page-type: css-property
browser-compat: css.properties.vertical-align
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`vertical-align`** (шикувати вертикально) задає вертикальне шикування для рядкового, рядково-блокового чи таблично-коміркового елемента.

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

Властивість vertical-align може застосовуватися у двох контекстах:

- Для вертикального шикування рамки елемента рядкового рівня всередині лінійної рамки, що його вміщає. Наприклад, це можна застосувати для [вертикального розташування зображення в рядку тексту](#vertykalne-shykuvannia-v-riadkovykh-ramkakh).
- Для вертикального шикування [вмісту в комірці таблиці](#vertykalne-shykuvannia-u-komirtsi-tablytsi).

Зверніть увагу, що `vertical-align` застосовується лише до рядкових, рядково-блокових та таблично-коміркових елементів: її не можна використовувати для вертикального шикування [елементів блокового рівня](/uk/docs/Glossary/Block-level_content).

## Синтаксис

```css
/* Значення – ключові слова */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* Значення <length> */
vertical-align: 10em;
vertical-align: 4px;

/* Значення <percentage> */
vertical-align: 20%;

/* Глобальні значення */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: revert-layer;
vertical-align: unset;
```

Властивість `vertical-align` задається за допомогою одного зі значень, перелічених нижче.

### Значення для рядкових елементів

#### Відносні щодо батьківського елемента значення

Ці значення вертикально шикують елемент відносно його батьківського елемента:

- `baseline`
  - : Шикує базову лінію елемента до базової лінії батьківського елемента. Базова лінія частини [заміщених елементів](/uk/docs/Web/CSS/Replaced_element), наприклад, {{HTMLElement("textarea")}}, не задана специфікацією HTML, а отже – їх поведінка з цим ключовим словом може відрізнятися на різних браузерах.
- `sub`
  - : Шикує базову лінію елемента до базової лінії підрядкового тексту батьківського елемента.
- `super`
  - : Шикує базову лінію елемента до базової лінії надрядкового тексту батьківського елемента.
- `text-top`
  - : Шикує верх елемента до верху шрифту батьківського елемента.
- `text-bottom`
  - : Шикує низ елемента до низу шрифту батьківського елемента.
- `middle`
  - : Шикує середину елемента до базової лінії плюс половини x-height батьківського елемента.
- {{cssxref("&lt;length&gt;")}}
  - : Шикує базову лінію елемента до даної відстані над базовою лінією батьківського елемента. Дозволені від'ємні значення.
- {{cssxref("&lt;percentage&gt;")}}
  - : Шикує базову лінію елемента до даного відсоткового значення над базовою лінією батьківського елемента, причому значення є відсотками від значення властивості {{Cssxref("line-height")}}. Дозволені від'ємні значення.

#### Відносні до строю значення

Наступні значення відносно шикують елемент відносно всього строю:

- `top`
  - : Шикує верх елемента і його нащадки до верху всього строю.
- `bottom`
  - : Шикує низ елемента і його нащадків до низу всього строю.

Для елементів, що не мають базової лінії, натомість застосовується край нижнього зовнішнього поля.

### Значення для комірок таблиці

- `baseline` (а також `sub`, `super`, `text-top`, `text-bottom`, `<length>` і `<percentage>`)
  - : Шикують базову лінію комірки до базової лінії всіх решти комірок ряду, що шиковані за базовою лінією.
- `top`
  - : Шикує край верхнього внутрішнього відступу комірки до верху ряду.
- `middle`
  - : Центрує рамки внутрішнього відступу комірки в межах ряду.
- `bottom`
  - : Шикує нижній край внутрішнього відступу комірки до низу ряду.

Дозволені від'ємні значення.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Базовий приклад

#### HTML

```html
<div>
  Зображення
  <img src="frame_image.svg" alt="link" width="32" height="32" /> з усталеним
  шикуванням.
</div>
<div>
  Зображення
  <img class="top" src="frame_image.svg" alt="link" width="32" height="32" />
  з шикуванням text-top.
</div>
<div>
  Зображення
  <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" />
  з шикуванням text-bottom.
</div>
<div>
  Зображення
  <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" />
  з шикуванням middle.
</div>
```

#### CSS

```css
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

#### Результат

{{EmbedLiveSample("bazovyi-pryklad")}}

### Вертикальне шикування в рядкових рамках

#### HTML

```html-nolint
<p>
top:         <img style="vertical-align: top" src="star.png" alt="зірка"/>
middle:      <img style="vertical-align: middle" src="star.png" alt="зірка"/>
bottom:      <img style="vertical-align: bottom" src="star.png" alt="зірка"/>
super:       <img style="vertical-align: super" src="star.png" alt="зірка"/>
sub:         <img style="vertical-align: sub" src="star.png" alt="зірка"/>
</p>
<p>
text-top:    <img style="vertical-align: text-top" src="star.png" alt="зірка"/>
text-bottom: <img style="vertical-align: text-bottom" src="star.png" alt="зірка"/>
0.2em:       <img style="vertical-align: 0.2em" src="star.png" alt="зірка"/>
-1em:        <img style="vertical-align: -1em" src="star.png" alt="зірка"/>
20%:         <img style="vertical-align: 20%" src="star.png" alt="зірка"/>
-100%:       <img style="vertical-align: -100%" src="star.png" alt="зірка"/>
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

#### Результат

{{EmbedLiveSample("vertykalne-shykuvannia-v-riadkovykh-ramkakh", '100%', 160, "", "")}}

### Вертикальне шикування у комірці таблиці

У цьому прикладі таблиця з одним рядом, що містить шість комірок. Ряд задає усталене значення `bottom` для `vertical-align`.

- Кожна з перших чотирьох комірок має власне значення `vertical-align`, і ці значення перевизначають значення від ряду.
- П'ята комірка не має жодного значення `vertical-align`, тому успадковує значення від ряду.

Шоста комірка використовується лише для того, щоб комірки були достатньо високими, аби дія властивості була помітна.

#### HTML

```html
<table>
  <tr class="bottom">
    <td class="baseline">baseline</td>
    <td class="top">top</td>
    <td class="middle">middle</td>
    <td>bottom</td>
    <td>Стиль ряду</td>
    <td>
      Ми впевнені, що впровадження продуктів харчування (збільшення асортименту
      товарів) критично необхідне для розвитку.
    </td>
  </tr>
</table>
```

#### CSS

```css
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}

.bottom {
  vertical-align: bottom;
}

.baseline {
  vertical-align: baseline;
}

.top {
  vertical-align: top;
}

.middle {
  vertical-align: middle;
}
```

#### Result

{{EmbedLiveSample("vertykalne-shykuvannia-u-komirtsi-tablytsi", '100%', 230, "", "")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Типові випадки використання флексбоксу, розділ "Центрування елемента"](/uk/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#tsentruvannia-elementa)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Розуміння `vertical-align`, або "Як (не варто) центрувати вміст вертикально"](https://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: Усе, що варто знати](https://christopheraue.net/design/vertical-align)
