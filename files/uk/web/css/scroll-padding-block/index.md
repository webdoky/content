---
title: scroll-padding-block
slug: Web/CSS/scroll-padding-block
page-type: css-shorthand-property
browser-compat: css.properties.scroll-padding-block
---

{{CSSRef}}

[Властивість-скорочення](/uk/docs/Web/CSS/Shorthand_properties) `scroll-padding-block` (блоковий відступ прокручення) задає відступ прокручення елемента на блоковій осі.

{{EmbedInteractiveExample("pages/css/scroll-padding-block.html")}}

Властивості відступів прокручення визначають відступи для _оптимальної області перегляду_ прокрутного порту: область, що використовується як цільова область для розміщення елементів у полі зору користувача. Це дає розробникам змогу виключити області прокрутного порту, що затуляються іншим вмістом (наприклад, панелі інструментів і бічні панелі з фіксованим положенням), або додати більше вільного простору між цільовим елементом та краями прокрутного порту.

## Властивості-складові

Ця властивість є скороченням для наступних властивостей CSS:

- [`scroll-padding-block-end`](/uk/docs/Web/CSS/scroll-padding-block-end)
- [`scroll-padding-block-start`](/uk/docs/Web/CSS/scroll-padding-block-start)

## Синтаксис

```css
/* Значення – ключові слова */
scroll-padding-block: auto;

/* Значення <length> */
scroll-padding-block: 10px;
scroll-padding-block: 1em 0.5em;
scroll-padding-block: 10%;

/* Глобальні значення */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: revert;
scroll-padding-block: revert-layer;
scroll-padding-block: unset;
```

### Значення

- `<length-percentage>`
  - : Відступ усередину від відповідного краю прокрутного порту, у вигляді валідної довжини або відсоткового значення.
- `auto`
  - : Відступ визначається користувацьким агентом. Зазвичай це буде `0px`, але користувацький агент має право виявити та зробити щось інше, якщо ненульове значення буде доречнішим.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Схоплення прокручення CSS](/uk/docs/Web/CSS/CSS_scroll_snap)
- [Добре контрольоване прокручення за допомогою схоплення прокручення CSS](https://web.dev/articles/css-scroll-snap)
