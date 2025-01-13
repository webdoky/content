---
title: scroll-padding
slug: Web/CSS/scroll-padding
page-type: css-shorthand-property
browser-compat: css.properties.scroll-padding
---

{{CSSRef}}

[Властивість-скорочення](/uk/docs/Web/CSS/Shorthand_properties) **`scroll-padding`** (відступ прокручення) задає відступ прокручення з усіх сторін елемента водночас, схоже на те, як властивість {{cssxref("padding")}} задає на елементах внутрішні відступи.

{{EmbedInteractiveExample("pages/css/scroll-padding.html")}}

Властивості `scroll-padding-*` визначають відступи для _оптимальної області перегляду_ прокрутного порту: область, що використовується як цільова область для розміщення елементів у полі зору користувача. Це дає розробникам змогу виключити області прокрутного порту, що затуляються іншим вмістом (наприклад, панелі інструментів і бічні панелі з фіксованим положенням), або додати більше вільного простору між цільовим елементом та краями прокрутного порту.

## Властивості-складові

Ця властивість є скороченням для наступних властивостей CSS:

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## Синтаксис

```css
/* Значення – ключові слова */
scroll-padding: auto;

/* Значення <length> */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* Глобальні значення */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### Значення

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Відступ усередину від відповідного краю прокрутного порту, у вигляді валідного значення {{cssxref("&lt;length&gt;")}} або {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Відступ визначається користувацьким агентом. Зазвичай це буде `0px`, але користувацький агент має право виявити і зробити щось інше, якщо ненульове значення буде доречнішим.

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
- [Добрий контроль прокручення за допомогою схоплення прокручення CSS](https://web.dev/articles/css-scroll-snap)
