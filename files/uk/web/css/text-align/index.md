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

Властивість `text-align` задається в один з наступних способів:

- За допомогою ключових слів `start`, `end`, `left`, `right`, `center`, `justify`, `justify-all` чи `match-parent`.
- За допомогою лиш значення `<string>`, у випадку чого решта значень вважаються `right`.
- За допомогою і ключового слова, і значення [`<string>`](#string).

### Значення

- `start`
  - : Те саме, що `left`, якщо напрям тексту – зліва направо, і `right`, якщо справа наліво.
- `end`
  - : Те саме, що `right`, якщо напрям тексту – зліва направо, і `left`, якщо справа наліво.
- `left` {{deprecated_inline}} {{non-standard_inline}}
  - : Рядковий вміст шикується до лівого краю рамок строю.
- `right` {{deprecated_inline}} {{non-standard_inline}}
  - : Рядковий вміст шикується до правого краю рамок строю.
- `center` {{deprecated_inline}} {{non-standard_inline}}
  - : Рядковий вміст центрується в рамках строю.
- `justify`
  - : Рядковий вміст розподіляється рівномірно. Текст повинен отримати такі проміжки, щоб його лівий та правий краї лежали на лівому й правому краях рамок строю, відповідно, крім останнього рядка.
- `justify-all` {{experimental_inline}}
  - : Те саме, що `justify`, але, крім того, рівномірно розподіляє останній рядок.
- `match-parent`
  - : Подібне до `inherit`, але значення `start` і `end` обчислюються згідно з {{cssxref("direction")}} батьківського елемента і замінюються відповідним значенням – `left` чи `right`.

## Занепокоєння щодо доступності

Непостійний розмір пробілів між словами, породжений рівномірним шикуванням тексту, може бути проблемним для людей з негараздами мислення, як то дислексією.

- [MDN розуміння WCAG, пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння критерію успіху 1.4.8 | Розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

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

{{EmbedLiveSample("shykuvannia-start","100%","100%")}}

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

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
