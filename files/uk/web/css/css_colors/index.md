---
title: Кольори CSS
slug: Web/CSS/CSS_colors
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-color/
  - https://drafts.csswg.org/css-color-5/
---

{{CSSRef}}

Модуль **Кольорів CSS** визначає кольори, колірні типи, змішування кольорів, непрозорість та те, як ці кольори та ефекти можна застосовувати до вмісту HTML.

Попри те, що цей модуль вміщає лише дві властивості CSS, {{cssxref("color")}} і {{cssxref("opacity")}}, понад 20 властивостей CSS і SVG, зображень CSS, директив і правил @media залежать від цих двох властивостей.

### Кольори в дії

Перетворювач колірного синтаксису нижче демонструє значення поточного вибраного кольору в колірних форматах CSS [червоному-зеленому-синьому](/uk/docs/Web/CSS/color_value/rgb) (RGB), [шістнадцятковому](/uk/docs/Web/CSS/hex-color) (HEX), [барві, насиченості та світності](/uk/docs/Web/CSS/color_value/hsl) (HSL) та [барві, білизні та чорноті](/uk/docs/Web/CSS/color_value/hwb) (HWB). Усі колірні значення тут, RGB, HEX, HSL та HWB, хоча і записані по-різному, представляють одне й те ж колірне значення.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Вибір кольору за допомогою [інтерфейсу вибору кольору](/uk/docs/Web/HTML/Element/input/color) та непрозорості за допомогою [повзуна](/uk/docs/Web/HTML/Element/input/range) оновлює значення RGB, HEX, HSL та HWB. Коли обирається новий колір або значення непрозорості, то колір фону та повзуна оновлюється за допомогою властивостей CSS {{cssxref("background-color")}} та {{cssxref("accent-color")}} відповідно.

Щоб побачити код цього перетворювача колірного синтаксису, [перегляньте вихідний код на GitHub](https://github.com/webdoky/css-examples/blob/main/modules/colors.html).

## Довідкові матеріали

### Властивості

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### Директиви та дескриптори

- {{cssxref("@color-profile")}}
  - Дескриптор [`components`](/uk/docs/Web/CSS/@color-profile#deskryptory)
  - Дескриптор [`rendering-intent`](/uk/docs/Web/CSS/@color-profile#deskryptory)
  - Дескриптор [`src`](/uk/docs/Web/CSS/@color-profile#deskryptory)

### Функції

- Колірні функції:
  - [`rgb()`](/uk/docs/Web/CSS/color_value/rgb) та її псевдонім `rgba()`
  - [`hsl()`](/uk/docs/Web/CSS/color_value/hsl) та її псевдонім `hsla()`
  - [`hwb()`](/uk/docs/Web/CSS/color_value/hwb)
  - [`lab()`](/uk/docs/Web/CSS/color_value/lab)
  - [`lch()`](/uk/docs/Web/CSS/color_value/lch)
  - [`oklab()`](/uk/docs/Web/CSS/color_value/oklab)
  - [`oklch()`](/uk/docs/Web/CSS/color_value/oklch)
  - [`color()`](/uk/docs/Web/CSS/color_value/color)
- [`color-contrast()`](/uk/docs/Web/CSS/color_value/color-contrast) {{experimental_inline}}
- [`color-mix()`](/uk/docs/Web/CSS/color_value/color-mix)
- [`device-cmyk()`](/uk/docs/Web/CSS/color_value/device-cmyk)
- {{CSSXref("color_value/light-dark", "light-dark()")}}

### Типи даних

- {{cssxref("&lt;color&gt;")}}
- [`<color-function>`](#funktsii)
- {{cssxref("hex-color")}}
- {{cssxref("named-color")}}
- {{cssxref("alpha-value")}}
- {{cssxref("hue")}}
- {{cssxref("system-color")}}
- [`<colorspace-params>`](/uk/docs/Web/CSS/color_value/color#vykorystannia-napered-vyzhachenykh-kolirnykh-prostoriv-vkupi-z-color)

### Терміни глосарія та ключові слова

- {{glossary("color space", "колірний простір")}}
- [`currentcolor`](/uk/docs/Web/CSS/color_value#kliuchove-slovo-currentcolor)
- {{glossary("interpolation", "інтерполяція")}}
- {{glossary("RGB")}}
- [`transparent`](/uk/docs/Web/CSS/named-color#transparent)

### Інтерфейси

- `CSSColorProfileRule`

## Посібники

- [Застосування кольору до елементів HTML за допомогою CSS](/uk/docs/Web/CSS/CSS_colors/Applying_color)
  - : Посібник з використання CSS для застосування кольору до різноманітного вмісту; містить всі властивості CSS, що приймають `<color>` за значення.
- [Колірні значення CSS](/uk/docs/Web/CSS/CSS_colors/Color_values)
  - : Огляд колірних просторів і різних функційних записів `<color>`, доступних у CSS.
- [Мудре використання кольорів](/uk/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Колірна теорія та ресурси, в тому числі пошук доречних кольорів для створення доступної колірної палітри, контраст і кольоровий друк.
- [Застосування відносних кольорів](/uk/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Ця стаття пояснює синтаксис відносних кольорів CSS, показує, які є варіанти, та розглядає деякі ілюстративні приклади.
- [Розуміння кольору та світності](/uk/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
  - : Сприйняття кольору та використання кольорів для потреб нечутливих до кольору (колірно-сліпих) користувачів, користувачів зі зниженим зором та користувачів з вестибулярними або іншими неврологічними порушеннями.
- [WCAG 1.4.1: Колірний контраст](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
  - : Пояснення вимог до контрасту між заднім і переднім планами для забезпечення читабельності.

## Споріднені концепції

- Властивості CSS, що входять до інших специфікацій:
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}
- Колірні властивості SVG, що входять до інших специфікацій:
  - [`fill`](/uk/docs/Web/SVG/Attribute/fill)
  - [`flood-color`](/uk/docs/Web/SVG/Attribute/flood-color)
  - [`lighting-color`](/uk/docs/Web/SVG/Attribute/lighting-color)
  - [`stop-color`](/uk/docs/Web/SVG/Attribute/stop-color)
  - [`stroke`](/uk/docs/Web/SVG/Attribute/stroke)
- Атрибут SVG [`color`](/uk/docs/Web/SVG/Attribute/color)
- Термін глосарія {{glossary("Color wheel", "Колірне коло")}}
- Термін глосарія {{glossary("Interpolation", "Інтерполяція")}}
- Дескриптор [`override-colors`](/uk/docs/Web/CSS/@font-palette-values/override-colors) директиви [`@font-palette-values`](/uk/docs/Web/CSS/@font-palette-values)
- Директива [`@color-profile`](/uk/docs/Web/CSS/@color-profile)
- Можливість @media [`color-gamut`](/uk/docs/Web/CSS/@media/color-gamut)
- Можливість @media [`forced-colors`](/uk/docs/Web/CSS/@media/forced-colors)

## Специфікації

{{Specifications}}

## Дивіться також

- Модуль [Налаштування кольору CSS](/uk/docs/Web/CSS/CSS_color_adjustment) і властивість {{cssxref("print-color-adjust")}}.
- Модуль [Зображень CSS](/uk/docs/Web/CSS/CSS_images), у якому визначені зображення CSS [`<gradient>`](/uk/docs/Web/CSS/gradient).
- Інтерфейс [`VideoColorSpace`](/uk/docs/Web/API/VideoColorSpace)
- Елемент SVG [`<feColorMatrix>`](/uk/docs/Web/SVG/Element/feColorMatrix)
- [API полотна: застосування стилів і кольорів](/uk/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#kolory)
