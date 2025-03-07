---
title: "-moz-force-broken-image-icon"
slug: Web/CSS/-moz-force-broken-image-icon
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.-moz-force-broken-image-icon
---

{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header}}

Розширена властивість CSS **`-moz-force-broken-image-icon`** (Mozilla – примусити піктограму зламаного зображення) може використовуватись, аби змусити показати значок зламаного зображення навіть коли зображення має атрибут `alt`.

## Синтаксис

### Значення

- {{cssxref("&lt;integer&gt;")}}
  - : Значення `1` означає, що значок зламаного зображення буде показаний навіть якщо зображення має атрибут [`alt`](/uk/docs/Web/HTML/Element/img#alt). Коли вживається значення `0`, зображення поводитиметься у звичний спосіб та просто покаже вміст атрибута `alt`.

> [!NOTE]
> Навіть якщо значення встановлено у `1`, вміст атрибута `alt` все одно буде показаний, поруч зі значком зламаного зображення.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

```plain
-moz-force-broken-image-icon = {{cssxref("&lt;integer&gt;")}}
```

## Приклади

### HTML

```html
<img src="/broken/image/link.png" alt="Зламане посилання на зображення" />
```

### CSS

```css
img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### Результат

{{EmbedLiveSample('pryklady','125','125')}}

> [!NOTE]
> Якщо зображення не має заданих висоти та ширини, то вміст атрибута alt не буде показаний, якщо `-moz-force-broken-image-icon` задано зі значенням `1`.

## Зауваження

- Ця властивість працюватиме лише у браузерах, заснованих на Gecko.
- Використання цієї властивості не рекомендовано. Натомість слід використовувати атрибут `alt` із належним значенням.

## Специфікації

Не є частиною жодного стандарту.

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Вада Firefox 58646](https://bugzil.la/58646)
