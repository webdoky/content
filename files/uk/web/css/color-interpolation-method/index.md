---
title: <color-interpolation-method>
slug: Web/CSS/color-interpolation-method
page-type: css-type
browser-compat: css.types.color.color-mix
spec-urls: https://drafts.csswg.org/css-color/#interpolation-space
---

{{CSSRef}}

[Тип даних](/uk/docs/Web/CSS/CSS_Types) [CSS](/uk/docs/Web/CSS) **`<color-interpolation-method>`** (метод інтерполяції кольору) представляє [колірний простір](/uk/docs/Glossary/Color_space), що вживається для інтерполяції між значеннями {{CSSXref("&lt;color&gt;")}}. Він може використовуватися для перевизначення усталеного колірного простору інтерполяції для функційних записів, пов'язаних з кольором, наприклад, {{CSSXref("color_value/color-mix", "color-mix()")}} і {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

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

  - : Одне з ключових слів: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz`, `xyz-d50` або `xyz-d65`.

- `<polar-color-space>`

  - : Одне з ключових слів: `hsl`, `hwb`, `lch` або `oklch`.

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}

  - : Алгоритм інтерполяції барв. Усталено – `shorter hue`.

- `<custom-color-space>`
  - : Значення [`<dashed-ident>`](/uk/docs/Web/CSS/dashed-ident#zastosuvannia-vkupi-z-profilem-color), що вказує на кастомний [профіль @color](/uk/docs/Web/CSS/@color-profile).

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

### Колірна інтерполяція з повторюваними градієнтами

Наступний приклад показує, як задати колірний простір для інтерполяції кольорів у разі повторюваних градієнтів.
Три рамки демонструють різні види повторюваних градієнтів – використовуючи функції [`repeating-conic-gradient()`](/uk/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/uk/docs/Web/CSS/gradient/repeating-linear-gradient) і [`repeating-radial-gradient()`](/uk/docs/Web/CSS/gradient/repeating-radial-gradient).
Перша рамка користується для інтерполяції між двома колірними значеннями колірним простором Lab.
Друга та третя рамки користуються для задання того, як інтерполювати між двома значеннями барв, Oklch, а також задають [`<hue-interpolation-method>`](/uk/docs/Web/CSS/hue-interpolation-method).

#### HTML

```html
<div class="gradient conic">конічний</div>
<div class="gradient linear">лінійний</div>
<div class="gradient radial">радіальний</div>
```

#### CSS

У кожному з градієнтів використано ті самі два кольори, щоб продемонструвати різний вплив [`<hue-interpolation-method>`](/uk/docs/Web/CSS/hue-interpolation-method) і {{glossary("color space", "колірного простору")}} на колірну інтерполяцію в градієнтах.

```css hidden
.gradient {
  height: 200px;
  width: 200px;
  display: inline-block;
  font-family: monospace;
  margin: 10px;
  font-size: 16px;
}
```

```css
.conic {
  background-image: repeating-conic-gradient(
    in lab,
    burlywood,
    blueviolet 120deg
  );
}
.linear {
  background-image: repeating-linear-gradient(
    in oklch,
    burlywood,
    blueviolet 75px
  );
}
.radial {
  background-image: repeating-radial-gradient(
    in oklch longer hue,
    blueviolet 50px,
    burlywood 100px
  );
}
```

#### Результат

{{EmbedLiveSample("interpoliatsiia-barv-z-povtoriuvanymy-hradiientamy", "100%", 250)}}
Коли порівняти першу та другу рамки, видно різницю інтерполювання між двома кольорами в різних колірних просторах.
Коли порівняти другу та третю рамки, видно різницю між різними значеннями [`<hue-interpolation-method>`](/uk/docs/Web/CSS/hue-interpolation-method), а саме – лінійний градієнт користується коротшим методом (усталеним), а радіальний – довшим.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{CSSXref("&lt;color&gt;")}}, {{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
