---
title: font-synthesis-position
slug: Web/CSS/font-synthesis-position
page-type: css-property
browser-compat: css.properties.font-synthesis-position
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`font-synthesis-position`** (шрифт, синтез позиційних) дає змогу задати те, чи повинен браузер синтезувати підрядкові та надрядкові "позиційні" гарнітури, коли вони відсутні в сімействі шрифтів, використовуючи {{cssxref("font-variant-position")}} для задання позицій.

Властивість **`font-synthesis-position`** не діє, коли використовуються елементи {{htmlelement("sup")}} і {{htmlelement("sub")}}.

Нерідко зручно використовувати властивість-скорочення {{cssxref("font-synthesis")}}, щоб керувати всіма значеннями синтезу гарнітур.

## Синтаксис

```css
/* Значення – ключові слова */
font-synthesis-position: auto;
font-synthesis-position: none;

/* Глобальні значення */
font-synthesis-position: inherit;
font-synthesis-position: initial;
font-synthesis-position: revert;
font-synthesis-position: revert-layer;
font-synthesis-position: unset;
```

### Значення

- `auto`
  - : Позначає те, що відсутня позиційна гарнітура може бути синтезована браузером, якщо це потрібно.
- `none`
  - : Позначає те, що синтез відсутньої позиційної гарнітури браузером – не дозволений.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Вимикання синтезу позиційних гарнітур

Цей приклад демонструє вимикання синтезу браузером надрядкової та підрядкової гарнітур для шрифту `Montserrat`.

#### HTML

```html
<p>
  Ось усталені гарнітури: позиційна <span class="super">надрядкова</span>,
  позиційна <span class="sub">підрядкова</span>, <strong>груба</strong> та
  <em>похила</em>.
</p>

<p class="no-syn">
  Позиційні гарнітури, <span class="super">надрядкова</span> та
  <span class="sub">підрядкова</span>, тут вимкнені, але не гарнітури
  <strong>груба</strong> та <em>похила</em> (у браузерах, що підтримують
  <code>font-synthesis-position</code>).
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}
.super {
  font-variant-position: super;
}
.sub {
  font-variant-position: sub;
}
.no-syn {
  font-synthesis-position: none;
}
```

#### Результат

{{EmbedLiveSample('vymykannia-syntezu-pozytsiinykh-harnitur', '', '100')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Скорочення {{cssxref("font-synthesis")}}, {{cssxref("font-synthesis-style")}}, {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-weight")}}
