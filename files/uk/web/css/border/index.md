---
title: border
slug: Web/CSS/border
page-type: css-shorthand-property
browser-compat: css.properties.border
---

{{CSSRef}}

[Скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`border`** ("межі") встановлює межі елемента. Воно задає значення властивостей {{Cssxref("border-width")}}, {{Cssxref("border-style")}} та {{Cssxref("border-color")}}.

{{EmbedInteractiveExample("pages/css/border.html")}}

## Складові властивості

Ця властивість є скороченим записом наступних властивостей CSS:

- [`border-width`](/uk/docs/Web/CSS/border-width) (ширина меж)
- [`border-style`](/uk/docs/Web/CSS/border-style) (стиль меж)
- [`border-color`](/uk/docs/Web/CSS/border-color) (колір меж)

## Синтаксис

```css
/* стиль */
border: solid;

/* ширина | стиль */
border: 2px dotted;

/* стиль | колір */
border: outset #f33;

/* ширина | стиль | колір */
border: medium dashed green;

/* Глобальні значення */
border: inherit;
border: initial;
border: revert;
border: revert-layer;
border: unset;
```

Властивість `border` може бути вказана за допомогою одного, двох чи трьох значень, перелічених нижче. Порядок значень не важливий.

> [!NOTE]
> Межі будуть невидимими, якщо не вказаний їх стиль. Так виходить, тому що усталений стиль – `none`.

### Значення

- `<line-width>` (ширина лінії)
  - : Встановлює товщину меж. Якщо не вказати, то усталене значення – `medium`. Дивіться {{Cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}} (стиль лінії)
  - : Встановлює стиль меж. Якщо не вказати, то усталене значення – `none`. Дивіться {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Встановлює колір меж. Якщо не вказати, то усталене значення – `currentcolor`. Дивіться {{Cssxref("border-color")}}.

## Опис

Як і в решті властивостей-скорочень, будь-які опущені підзначення отримують свої [початкові значення](/uk/docs/Web/CSS/initial_value). Важливо зауважити, що за допомогою `border` не можна вказати користувацьке значення {{cssxref("border-image")}}, – замість такого значення буде використано початкове значення цієї властивості, тобто `none`.

Скорочення `border` особливо корисне тоді, коли усі чотири межі мають бути однаковими. Аби зробити їх відмінними одне від одного, втім, можна окремо вказати властивості {{Cssxref("border-width")}}, {{Cssxref("border-style")}} та {{Cssxref("border-color")}}, що приймають різні значення для кожної сторони. Іще можна націлитись на одну межу за раз за допомогою матеріальних (наприклад, {{Cssxref("border-top")}}) та логічних (наприклад, {{Cssxref("border-block-start")}}) властивостей меж.

### Межі та обриси

Межі та [обриси](/uk/docs/Web/CSS/outline) – дуже схожі. А проте, обриси відрізняються від меж наступним чином:

- Обриси ніколи не займають простір, оскільки вони наносяться зовні вмісту елемента.
- Згідно зі специфікацією, обриси не обов'язково мають прямокутну форму, хоч зазвичай мають саме таку.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклад

### Встановлення рожевих зовнішніх меж

#### HTML

```html
<div>Я маю межі, обриси, а також тіні рамок! Захопливо, чи не так?</div>
```

#### CSS

```css
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

#### Результат

{{EmbedLiveSample('vstanovlennia-rozhevykh-zovnishnikh-mezh')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{Cssxref("border-width")}}
- {{Cssxref("border-style")}}
- {{Cssxref("border-color")}}
- {{Cssxref("outline")}}
- [Фони та межі](/uk/docs/Web/CSS/CSS_backgrounds_and_borders)
- [Вивчаймо CSS: Фони та межі](/uk/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
