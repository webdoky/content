---
title: ":blank"
slug: Web/CSS/:blank
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.blank
---

{{CSSRef}}{{SeeCompatTable}}

> [!NOTE]
> Селектор `:blank` вважається ризикованим, оскільки CSSWG постійно його змінює.
>
> Дивіться [проблему CSSWG #1967](https://github.com/w3c/csswg-drafts/issues/1967).

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:blank`** (незаповнений, прогалина) вибирає порожні елементи користувацького введення (наприклад, {{HTMLElement("input")}} або {{HTMLElement("textarea")}}).

## Синтаксис

```css
:blank {
  /* ... */
}
```

## Приклади

### Базовий приклад :blank

У браузерах, що врешті-решт його підтримуватимуть, псевдоклас `:blank` дасть розробникам змогу певним чином виділяти контрольні поля, які не є обов'язковими, але все ж не мають введеного вмісту, можливо, як нагадування для користувачів.

#### HTML

```html
<textarea></textarea>
```

#### CSS

```css
textarea:blank {
  border: 3px solid red;
}
```

#### Результат

{{EmbedLiveSample('bazovyi-pryklad-blank', '100%', 150)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{CSSxRef(":empty")}}
