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

#### HTML

```html
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>
        Щастя — єдине мірило і критерій. Ради нього люди воюють, страждають.
        Його шукають у мандрах, у подвигах. Заради нього запускають ракети,
        будують машини, клопочуться за квартиру. Ради нього ми прагнемо кудись у
        неоглядну далину, в майбуття.
      </p>
      <p>
        А може, все це фікція, химера? Воно не десь, а тут, поруч з нами. Оця
        дивовижна, неповторна мить... Зараз, тепер. Як її зберегти?
      </p>
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
```

#### Result

{{EmbedLiveSample("vertykalne-shykuvannia-u-komirtsi-tablytsi", '100%', 230, "", "")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Типові випадки використання флексбоксу, розділ "Центрування елемента"](/uk/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#tsentruvannia-elementa)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Розуміння `vertical-align`, або "Як (не варто) центрувати вміст вертикально" (англ.)](http://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: Усе, що варто знати (англ.)](https://christopheraue.net/design/vertical-align)
