---
title: <color-interpolation-method>
slug: Web/CSS/color-interpolation-method
page-type: css-type
browser-compat:
  - css.types.color.color-mix
  - css.types.image.gradient.conic-gradient.interpolation_color_space
  - css.types.image.gradient.linear-gradient.interpolation_color_space
  - css.types.image.gradient.radial-gradient.interpolation_color_space
  - css.types.image.gradient.repeating-conic-gradient.interpolation_color_space
  - css.types.image.gradient.repeating-linear-gradient.interpolation_color_space
  - css.types.image.gradient.repeating-radial-gradient.interpolation_color_space
spec-urls: https://drafts.csswg.org/css-color/#interpolation-space
---

{{CSSRef}}

[Тип даних](/uk/docs/Web/CSS/CSS_Types) [CSS](/uk/docs/Web/CSS) **`<color-interpolation-method>`** (метод інтерполяції кольору) представляє колірний простір, що вживається для інтерполяції між значеннями {{CSSXref("&lt;color&gt;")}}. Він може використовуватися для перевизначення усталеного колірного простору інтерполяції для функційних записів, пов'язаних з кольором, наприклад, {{CSSXref("color_value/color-mix", "color-mix()")}} і {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

При інтерполяції значень `<color>` усталено використовується колірний простір інтерполяції Oklab.

## Синтаксис

Тип `<color-interpolation-method>` задає те, чи слід використовувати прямокутний колірний простір, чи полярний колірний простір з необов'язковим методом інтерполяції відтінку:

```plain
in <rectangular-color-space>
// або
in <polar-color-space>[ <hue-interpolation method>]
```

### Значення

- `<rectangular-color-space>`

  - : Одне з ключових слів: `srgb`, `srgb-linear`, `lab`, `oklab`, `xyz`, `xyz-d50` або `xyz-d65`.

- `<polar-color-space>`

  - : Одне з ключових слів: `hsl`, `hwb`, `lch` або `oklch`.

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}

  - : Алгоритм інтерполяції барв. Усталено – `shorter hue`.

## Формальний синтаксис

{{CSSSyntax}}

## Приклади

### Порівняння колірних просторів інтерполяції за допомогою градієнтів

Наступний приклад демонструє ефект використання різних колірних просторів інтерполяції для {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

#### HTML

```html
<div>sRGB:</div>
<div class="gradient srgb"></div>
<div>Oklab:</div>
<div class="gradient oklab"></div>
<div>Oklch (з <code>longer hue</code>):</div>
<div class="gradient oklch-longer"></div>
```

#### CSS

```css hidden
/* Запасні стилі */
.srgb {
  background-image: linear-gradient(
    to right,
    rgb(0% 0% 100%),
    rgb(20% 0% 80%),
    rgb(40% 0% 60%),
    rgb(60% 0% 40%),
    rgb(80% 0% 20%),
    rgb(100% 0% 0%)
  );
}
.oklab {
  background-image: linear-gradient(
    to right,
    oklab(45.2% -0.032 -0.312),
    oklab(48.7% 0.019 -0.224),
    oklab(52.2% 0.07 -0.137),
    oklab(55.8% 0.122 -0.049),
    oklab(59.3% 0.173 0.038),
    oklab(62.8% 0.225 0.126)
  );
}
.oklch-longer {
  background-image: linear-gradient(
    to right,
    oklch(45.2% 0.313 264),
    oklch(46.8% 0.308 243),
    oklch(48.4% 0.303 221),
    oklch(50% 0.298 200),
    oklch(51.6% 0.293 179),
    oklch(53.2% 0.288 157),
    oklch(54.8% 0.283 136),
    oklch(56.4% 0.278 115),
    oklch(58% 0.273 93),
    oklch(59.6% 0.268 72),
    oklch(61.2% 0.263 51),
    oklch(62.8% 0.258 29)
  );
}
```

```css
.gradient {
  height: 50px;
  width: 100%;
}
.srgb {
  background-image: linear-gradient(in srgb to right, blue, red);
}
.oklab {
  background-image: linear-gradient(in oklab to right, blue, red);
}
.oklch-longer {
  background-image: linear-gradient(in oklch longer hue to right, blue, red);
}
```

#### Результат

{{EmbedLiveSample("porivniannia-kolirnykh-prostoriv-interpoliatsii-za-dopomohoiu-hradiientiv", "100%", 250)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{CSSXref("&lt;color&gt;")}}, {{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
