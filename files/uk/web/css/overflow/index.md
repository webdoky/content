---
title: overflow
slug: Web/CSS/overflow
page-type: css-shorthand-property
tags:
  - CSS
  - CSS Box Model
  - CSS Property
  - Clipping
  - Layout
  - Reference
  - overflow
  - recipe:css-shorthand-property
  - scrolling
browser-compat: css.properties.overflow
---

{{CSSRef}}

[Властивість-скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`overflow`** (надлишок) задає бажану поведінку переповнення елемента – тобто коли вміст елемента завеликий, аби вміститись у його [контексті блокового форматування](/uk/docs/Web/Guide/CSS/Block_formatting_context) — в обох напрямках.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Складові властивості

Ця властивість є скороченням для наступних властивостей CSS:

- [`overflow-x`](/uk/docs/Web/CSS/overflow-x)
- [`overflow-y`](/uk/docs/Web/CSS/overflow-y)

## Синтаксис

```css
/* Значення – ключові слова */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* Глобальні значення */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

Властивість `overflow` задається як одне чи два ключові слова зі списку значень нижче. Якщо задані два ключові слова, то перше застосовується до `overflow-x`, а друге – до `overflow-y`. Інакше – і `overflow-x`, і `overflow-y` отримують одне значення.

### Значення

- `visible` (видимий)
  - : Вміст не обрізається і може бути зображений поза рамками внутрішніх полів.
- `hidden` (прихований)
  - : Вміст обрізається, коли це необхідно для вміщення у рамки внутрішніх полів. Не надаються жодні смуги прокручування, не дозволяється жодна підтримка прокручування користувачем (як то перетягуванням чи колесом миші). Вміст _може_ бути прокручений програмно (наприклад, шляхом задання значення властивості, як то {{domxref("Element.scrollLeft", "scrollLeft")}}, чи викликом метода {{domxref("Element.scrollTo", "scrollTo()")}}), тож елемент усе ж залишається контейнером прокручування.
- `clip` (обрізати)
  - : Подібно до `hidden`, вміст обрізається до рамок внутрішніх полів елемента. Різниця між `clip` і `hidden` полягає в тому, що ключове слово `clip` також забороняє будь-яке прокручування, включно з програмним. Рамки не є контейнером прокручування, вони не започатковують нового контексту форматування. При потребі започаткувати новий контекст форматування це можна зробити за допомогою {{cssxref("display", "display: flow-root", "#flow-root")}}.
- `scroll` (прокручувати)
  - : Вміст обрізається для вміщення у рамках внутрішніх полів, якщо це необхідно. Браузери обов'язково показують смуги прокрутки, незалежно від того, чи якийсь вміст насправді обрізаним, запобігаючи появі та зникненню цих смуг при зміні вмісту. Принтери можуть усе ж надрукувати вміст, що переливається через край.
- `auto` (автоматично)
  - : Залежить від {{Glossary("user agent", "користувацького агента")}}. Якщо вміст уміщається в рамках внутрішніх полів, це має такий само вигляд, як `visible`, але все ж започатковує новий контекст блокового форматування. Стільникові браузери надають смуги прокручування, якщо вміст переливається через край.
- `overlay` (перекриття) {{deprecated_inline}}
  - : Поводиться так само, як `auto`, але смуги прокручування малюються поверх вмісту замість займати окремий простір.

#### Розширення Mozilla

- `-moz-scrollbars-none` {{deprecated_inline}}
  - : Використовуйте натомість `overflow: hidden`.
- `-moz-scrollbars-horizontal` {{deprecated_inline}}
  - : Використовуйте натомість `{{Cssxref("overflow-x")}}: scroll` і `{{Cssxref("overflow-y")}}: hidden` чи `overflow: scroll hidden`.
- `-moz-scrollbars-vertical` {{deprecated_inline}}
  - : Використовуйте натомість `{{Cssxref("overflow-x")}}: hidden` і `{{Cssxref("overflow-y")}}: scroll` чи `overflow: hidden scroll`.
- `-moz-hidden-unscrollable` {{deprecated_inline}}
  - : Використовуйте натомість `overflow: clip`.

Станом на Firefox версії 63, значення `-moz-scrollbars-none`, `-moz-scrollbars-horizontal` і `-moz-scrollbars-vertical` заховані за налаштуваннями можливостей. На about:config, перемкніть `layout.css.overflow.moz-scrollbars.enabled` на `true`.

## Опис

Варіанти переповнення включають обрізання, демонстрацію смуг прокручування і виведення вмісту, котрий переливається з контейнера в навколишній простір.

Задання значення, відмінного від `visible` (усталеного) і `clip`, породжує новий [контекст блокового форматування](/uk/docs/Web/Guide/CSS/Block_formatting_context). Це необхідно з технічних причин: якби плавучий елемент перетнувся з прокрутним елементом, це змусило б повторно розставляти переноси всередині вмісту після кожного кроку прокручування, і як наслідок – призвело б до повільного прокручування.

Щоб `overflow` мала дію, контейнер блокового рівня мусить мати або задану висоту (`height` чи `max-height`), або `white-space` зі значенням `nowrap`.

Встановлення однієї осі у `visible` (усталене значення), а іншої – у _відмінне_ значення – призводить до того, що `visible` поводиться як `auto`.

Властивість JavaScript {{domxref("Element.scrollTop")}} може застосовуватись для прокручування елемента HTML навіть тоді, коли `overflow` має значення `hidden`.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Встановлення різних значень overflow для тексту

#### HTML

```html
<div>
  <code>visible</code>
  <p class="visible">
    Жебракують філософи при ґанку церкви в Гадячі, ще й шатро їхнє п'яне знаємо.
  </p>
</div>

<div>
  <code>hidden</code>
  <p class="hidden">
    Жебракують філософи при ґанку церкви в Гадячі, ще й шатро їхнє п'яне знаємо.
  </p>
</div>

<div>
  <code>scroll</code>
  <p class="scroll">
    Жебракують філософи при ґанку церкви в Гадячі, ще й шатро їхнє п'яне знаємо.
  </p>
</div>

<div>
  <code>auto</code>
  <p class="auto">
    Жебракують філософи при ґанку церкви в Гадячі, ще й шатро їхнє п'яне знаємо.
  </p>
</div>
```

#### CSS

```css
body {
  display: flex;
  justify-content: space-around;
}

div {
  margin: 1em;
  font-size: 1.2em;
}

p {
  width: 8em;
  height: 5em;
  border: dotted;
}

p.visible {
  overflow: visible;
}

p.hidden {
  overflow: hidden;
}

p.scroll {
  overflow: scroll;
}

p.auto {
  overflow: auto;
}
```

#### Результат

{{EmbedLiveSample("vstanovlennia-riznykh-znachen-overflow-dlia-tekstu", "600", "250")}}

### Занепокоєння щодо доступності

Область прокрутного вмісту не може прокручуватись користувачем, в розпорядженні якого є лише клавіатура, окрім користувачів Firefox (котрий усталено дає змогу контейнерові такого змісту отримувати фокус за допомогою клавіатури).

Аби дати змогу користувачам лише клавіатури прокручувати такий контейнер не тільки у Firefox, розробникам слід задавати цьому контейнеру [`tabindex`](/uk/docs/Web/HTML/Global_attributes/tabindex), вживши `tabindex="0"`. На жаль, коли читач з екрана зустріне таку зупинку табуляції, то не матиме контексту для розуміння, що це таке, і оголосить увесь його вміст. Задання такому контейнерові відповідної [ролі WAI-ARIA](/uk/docs/Web/Accessibility/ARIA/Roles) (`role="region"`, наприклад) і доступного імені (за допомогою [`aria-label`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-label) або [`aria-labelledby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)) може пом'якшити цю проблему.

- [Прокрутні області, доступні з клавіатури](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html)

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Пов'язані властивості CSS: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-block")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [Переповнення CSS](/uk/docs/Web/CSS/CSS_Overflow) і [Зневадження прокрутного переповнення (англ.)](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)
