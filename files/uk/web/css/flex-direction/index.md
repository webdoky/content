---
title: flex-direction
slug: Web/CSS/flex-direction
page-type: css-property
browser-compat: css.properties.flex-direction
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`flex-direction`** (гнучкий напрям) задає те, як гнучкі елементи розміщаються в гнучкому контейнері, встановлюючи головну вісь та її напрям (прямий або зворотний).

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

Зверніть увагу, що на значення `row` і `row-reverse` впливає напрямленість гнучкого контейнера. Якщо його атрибут [`dir`](/uk/docs/Web/HTML/Global_attributes/dir) має значення `ltr`, то `row` представляє горизонтальну вісь, напрямлену зліва направо, а `row-reverse` – справа наліво; якщо атрибут `dir` має значення `rtl`, то `row` представляє цю вісь як напрямлену справа наліво, а `row-reverse` – зліва направо.

## Синтаксис

```css
/* Такий напрямок, в якому літери тексту викладаються в рядок */
flex-direction: row;

/* Як <row>, але в зворотному порядку */
flex-direction: row-reverse;

/* Такий напрямок, в якому рядки тексту додаються одне до одного */
flex-direction: column;

/* Як <column>, але в зворотному порядку */
flex-direction: column-reverse;

/* Глобальні значення */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### Значення

Приймаються наступні значення:

- `row`
  - : Головна вісь гнучкого контейнера задається як тотожна напрямкові тексту. Кінці **main-start** і **main-end** – такі ж, як для спрямування вмісту.
- `row-reverse`
  - : Поводиться так само, як `row`, але кінці **main-start** і **main-end** – протилежні щодо спрямування тексту.
- `column`
  - : Головна вісь гнучкого контейнера тотожна блоковій осі. Кінці **main-start** і **main-end** тотожні кінцям **before** та **after** напряму письма.
- `column-reverse`
  - : Поводиться так само, як `column`, але **main-start** і **main-end** – протилежні щодо спрямування тексту.

## Доступність

Застосування властивості `flex-direction` зі значенням `row-reverse` або `column-reverse` утворює неузгодженість між візуальним представленням вмісту та порядком вузлів DOM. Це негативно впливає на користувачів зі слабким зором, котрі орієнтуються за допомогою допоміжних технологій, як то читача з екрана. Якщо візуальний порядок (порядок CSS) є важливим, то користувачі читачів з екрана не матимуть доступу до коректного порядку прочитання.

- [Флексбокс і неузгодженість клавіатурного орієнтування — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Порядок у коді має значення | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Розуміння WCAG, пояснення Настанов 1.3](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Розуміння критерію успіху 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Розворот колонок та рядів гнучкого контейнера

#### HTML

```html
<h4>Це – Column-Reverse</h4>
<div id="col-rev" class="content">
  <div class="box red">А</div>
  <div class="box lightblue">Б</div>
  <div class="box yellow">В</div>
</div>
<h4>Це – Row-Reverse</h4>
<div id="row-rev" class="content">
  <div class="box red">А</div>
  <div class="box lightblue">Б</div>
  <div class="box yellow">В</div>
</div>
```

#### CSS

```css
.content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
}

.box {
  width: 50px;
  height: 50px;
}

#col-rev {
  flex-direction: column-reverse;
}

#row-rev {
  flex-direction: row-reverse;
}

.red {
  background-color: red;
}

.lightblue {
  background-color: lightblue;
}

.yellow {
  background-color: yellow;
}
```

#### Результат

{{EmbedLiveSample('rozvorot-kolonok-ta-riadiv-hnuchkoho-konteinera', '', '550')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Властивість-скорочення CSS {{CSSXRef("flex-flow")}} для властивостей CSS `flex-direction` і {{CSSXRef("flex-wrap")}}.
- [Базові концепції флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Упорядкування гнучких елементів](/uk/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
