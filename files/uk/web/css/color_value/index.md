---
title: <color>
slug: Web/CSS/color_value
page-type: css-type
browser-compat: css.types.color
---

{{CSSRef}}

[Тип даних](/uk/docs/Web/CSS/CSS_Types) [CSS](/uk/docs/Web/CSS) **`<color>`** (колір) представляє колір.
`<color>` також може включати _значення прозорості_ [альфа-каналу](https://uk.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C%D1%84%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%B8%D0%BD%D0%B3), котре вказує на те, як колір повинен [комбінуватися](https://www.w3.org/TR/compositing-1/#simplealphacompositing) зі своїм тлом.

> [!NOTE]
> Попри те, що значення `<color>` мають точну визначеність, їхній фактичний вигляд може відрізнятися (іноді суттєво) на різних пристроях. Це пов'язано з тим, що більшість пристроїв не відкалібровано, і частина браузерів не підтримує [колірні профілі](https://en.wikipedia.org/wiki/ICC_profile) пристроїв виведення.

## Синтаксис

```css
/* Іменовані кольори */
rebeccapurple
aliceblue

/* Шістнадцятковий запис RGB */
#f09
#ff0099

/* RGB (Red, Green, Blue – червоний, зелений, синій) */
rgb(255 0 153)
rgb(255 0 153 / 80%)

/* HSL (Hue, Saturation, Lightness – барва, насиченість, світлість) */
hsl(150 30% 60%)
hsl(150 30% 60% / 80%)

/* HWB (Hue, Whiteness, Blackness – барва, білизна, чорнота) */
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* LAB (Lightness, A-axis, B-axis – світлість, вісь A, вісь B) */
lab(50% 40 59.5)
lab(50% 40 59.5 / 0.5)

/* LCH (Lightness, Chroma, Hue – світлість, інтенсивність, барва) */
lch(52.2% 72.2 50)
lch(52.2% 72.2 50 / 0.5)

/* Oklab (Lightness, A-axis, B-axis – світлість, вісь A, вісь B) */
oklab(59% 0.1 0.1)
oklab(59% 0.1 0.1 / 0.5)

/* Oklch (Lightness, Chroma, Hue – світлість, інтенсивність, барва) */
oklch(60% 0.15 50)
oklch(60% 0.15 50 / 0.5)

/* Відносні кольори CSS */
/* Видозміна барви HSL */
hsl(from red 240deg s l)
/* Видозміна альфа-каналу HWB */
hwb(from green h w b / 0.5)
/* Видозміна світності LCH */
lch(from blue calc(l + 20) c h)

/* light-dark */
light-dark(white, black)
light-dark(rgb(255 255 255), rgb(0 0 0))
```

Значення `<color>` можна задати за допомогою одного з методів, перелічених нижче:

- Ключовими словами: {{CSSXref("&lt;named-color&gt;")}} (such as `blue` or `pink`), {{CSSXref("&lt;system-color&gt;")}} і [`currentcolor`](#kliuchove-slovo-currentcolor).
- Шістнадцятковим записом: {{CSSXref("&lt;hex-color&gt;")}} (наприклад, `#ff0000`).
- За допомогою `<color-function>`, з параметрами в {{glossary("color space", "колірному просторі")}}, за допомогою функційних записів:
  - Колірного простору [sRGB](https://uk.wikipedia.org/wiki/SRGB): {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}} і {{CSSXref("color_value/rgb", "rgb()")}}.
  - Колірного простору [CIELAB](https://uk.wikipedia.org/wiki/Lab): {{CSSXref("color_value/lab", "lab()")}} і {{CSSXref("color_value/lch", "lch()")}}.
  - Колірного простору [Oklab](https://bottosson.github.io/posts/oklab/): {{CSSXref("color_value/oklab", "oklab()")}} і {{CSSXref("color_value/oklch", "oklch()")}}.
  - Інших колірних просторів: {{CSSXref("color_value/color", "color()")}}.
- Шляхом застосування синтаксису [відносного кольору](/uk/docs/Web/CSS/CSS_colors/Relative_colors), щоб вивести новий колір на основі наявного. Кожна з колірних функцій вище може прийняти **початковий колір**, перед яким повинно стояти ключове слово `from`, після якого – визначення значень каналів для нового **результівного кольору**.
- Шляхом змішування двох кольорів: {{CSSXref("color_value/color-mix", "color-mix()")}}.
- Шляхом задання двох кольорів, перший з яких використовується для світлих колірних палітр, а другий – для темних: {{CSSXref("color_value/light-dark", "light-dark()")}}.

### Ключове слово `currentcolor`

Ключове слово `currentcolor` представляє значення властивості {{Cssxref("color")}} елемента. Це дає змогу використовувати значення `color` на властивостях, що усталено його не отримують.

Коли `currentcolor` застосовується як значення властивості `color`, воно отримує своє значення з успадкованого значення властивості `color`.

```html
<div style="color: blue; border: 1px dashed currentcolor;">
  Колір цього тексту – синій.
  <div style="background: currentcolor; height:9px;"></div>
  Цей блок оточений синіми межами.
</div>
```

{{EmbedLiveSample('kliuchove-slovo-currentcolor', 600, 80)}}

### Відсутні компоненти кольору

Кожна компонента будь-якої колірної функції CSS, окрім тих, що використовують історичний запис із розділенням комами, може бути задана у вигляді ключового слова `none`, щоб стати відсутньою.

Явне задання [відсутніх компонент при колірній інтерполяції](#interpoliatsiia-z-vidsutnimy-komponentamy) – корисне для випадків, коли потрібно {{glossary("interpolation", "інтерполювати")}} одні колірні компоненти, але не інші. Для всіх решти випадків відсутня компонента по суті має нульове значення з відповідною одиницею: `0`, `0%` або `0deg`. Наприклад, наступні кольори – рівносильні, коли вживаються поза інтерполяцією:

```css
/* Ці кольори рівносильні */
color: oklab(50% none -0.25);
color: oklab(50% 0 -0.25);

/* Ці кольори рівносильні */
background-color: hsl(none 100% 50%);
background-color: hsl(0deg 100% 50%);
```

## Інтерполяція

Колірна інтерполяція відбувається в [градієнтах](/uk/docs/Web/CSS/gradient), при [переходах](/uk/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) та [анімаціях](/uk/docs/Web/CSS/CSS_animations/Using_CSS_animations).

При інтерполяції значень `<color>` вони спершу перетворюються до заданого колірного простору, а потім кожний компонент [обчислених значень](/uk/docs/Web/CSS/computed_value) інтерполюється лінійно, причому швидкість інтерполяції при переходах та анімаціях визначається [функцією пом'якшення](/uk/docs/Web/CSS/easing-function). Усталений колірний простір інтерполяції – Oklab, але в деяких функціональних записах, що стосуються кольору, це можна перевизначити за допомогою {{CSSXref("&lt;color-interpolation-method&gt;")}}.

### Інтерполяція з відсутніми компонентами

#### Інтерполяція кольорів у одному просторі

Коли інтерполюються кольори, що точно виражаються в колірному просторі інтерполяції, то відсутні компоненти одного кольору замінюються наявними значеннями тих же компонент іншого кольору.
Наприклад, наступні два вирази – рівносильні:

```css
color-mix(in oklch, oklch(none 0.2 10), oklch(60% none 30))
color-mix(in oklch, oklch(60% 0.2 10), oklch(60% 0.2 30))
```

> [!NOTE]
> Якщо компонента відсутня в обох кольорах, то така компонента буде відсутньою після інтерполяції.

#### Інтерполяція кольорів з різних просторів – аналогічні компоненти

Якщо будь-який з інтерпольованих кольорів не перебуває в колірному просторі інтерполяції, то його відсутні компоненти переносяться в обчислений колір на основі **аналогічних компонент** тієї ж категорії, як описано в наступній таблиці:

| Категорія    | Аналогічні компоненти |
| ------------ | --------------------- |
| Червоні      | `R`, `X`              |
| Зелені       | `G`, `Y`              |
| Сині         | `B`, `Z`              |
| Світлість    | `L`                   |
| Кольоровість | `C`, `S`              |
| Барва        | `H`                   |
| a            | `a`                   |
| b            | `b`                   |

Наприклад:

- `X` (`0.2`) у `color(xyz 0.2 0.1 0.6)` – аналогічна щодо `R` (`50%`) у `rgb(50% 70% 30%)`.
- `H` (`0deg`) у `hsl(0deg 100% 80%)` – аналогічна щодо `H` (`140`) в `oklch(80% 0.1 140)`.

Використання Oklch як колірного простору інтерполяції та два кольори нижче - як приклад:

```css
lch(80% 30 none)
color(display-p3 0.7 0.5 none)
```

Процедура попередньої обробки:

1. Замінити відсутні компоненти в обох кольорах нульовими значеннями:

   ```css
   lch(80% 30 0)
   color(display-p3 0.7 0.5 0)
   ```

2. Привести обидва кольори до колірного простору інтерполяції:

   ````css

   ```css
   oklch(83.915% 0.0902 0.28)
   oklch(63.612% 0.1522 78.748)
   ````

3. Якщо будь-яка компонента приведених кольорів є аналогічною щодо відсутньої компоненти у відповідному вихідному кольорі, то скинути її як відсутню компоненту:

   ```css
   oklch(83.915% 0.0902 none)
   oklch(63.612% 0.1522 78.748)
   ```

4. Замінити всі відсутні компоненти на такі ж компоненти з іншого приведеного кольору:

   ```css
   oklch(83.915% 0.0902 78.748)
   oklch(63.612% 0.1522 78.748)
   ```

## Доступність

Частина людей має проблеми з розрізненням кольорів. Рекомендація [WCAG 2.2](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) наполегливо радить не використовувати колір як єдиний засіб донесення певного повідомлення, дії чи результату. Дивіться подробиці в [кольорі та колірному контрасті](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast).

## Формальний синтаксис

{{csssyntax}}

## Приклад

### Дослідження колірних значень

В цьому прикладі пропонується `<div>` і текстове поле. Введення в поле дійсного кольору призводить до того, що `<div>` набуває такого кольору, даючи змогу перевірити значення кольору.

#### HTML

```html
<div></div>
<hr />
<label for="color">Введіть дійсне значення кольору:</label>
<input type="text" id="color" />
```

```css hidden
div {
  height: 200px;
  width: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "inherit" || stringToTest === "transparent") {
    return false;
  }

  const div = document.createElement("div");
  div.style.color = stringToTest;
  return !!div.style.color;
}

inputElem.addEventListener("input", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.removeAttribute("style");
    divElem.textContent = "Недійсне значення кольору";
  }
});
```

#### Результат

{{EmbedLiveSample('doslidzhennia-kolirnykh-znachen','100%', 300)}}

### Генерування цілком насичених кольорів sRGB

Цей приклад демонструє цілком насичені кольори sRGB у колірному просторі sRGB.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 50%);
}
div:nth-child(2) {
  background-color: hsl(30 100% 50%);
}
div:nth-child(3) {
  background-color: hsl(60 100% 50%);
}
div:nth-child(4) {
  background-color: hsl(90 100% 50%);
}
div:nth-child(5) {
  background-color: hsl(120 100% 50%);
}
div:nth-child(6) {
  background-color: hsl(150 100% 50%);
}
div:nth-child(7) {
  background-color: hsl(180 100% 50%);
}
div:nth-child(8) {
  background-color: hsl(210 100% 50%);
}
div:nth-child(9) {
  background-color: hsl(240 100% 50%);
}
div:nth-child(10) {
  background-color: hsl(270 100% 50%);
}
div:nth-child(11) {
  background-color: hsl(300 100% 50%);
}
div:nth-child(12) {
  background-color: hsl(330 100% 50%);
}
```

#### Результат

{{EmbedLiveSample("heneruvannia-tsilkom-nasychenykh-koloriv-srgb", "100%", 200)}}

### Створення різних відтінків червоного

Цей приклад демонструє різні відтінки червоного у колірному просторі sRGB.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  box-sizing: border-box;
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 0%);
}
div:nth-child(2) {
  background-color: hsl(0 100% 20%);
}
div:nth-child(3) {
  background-color: hsl(0 100% 40%);
}
div:nth-child(4) {
  background-color: hsl(0 100% 60%);
}
div:nth-child(5) {
  background-color: hsl(0 100% 80%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 100%);
  border: solid;
}
```

#### Результат

{{EmbedLiveSample("stvorennia-riznykh-vidtinkiv-chervonoho", "100%", 150)}}

### Створення червоного різної насиченості

Цей приклад демонструє різну насиченість червоного у колірному просторі sRGB.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 0% 50%);
}
div:nth-child(2) {
  background-color: hsl(0 20% 50%);
}
div:nth-child(3) {
  background-color: hsl(0 40% 50%);
}
div:nth-child(4) {
  background-color: hsl(0 60% 50%);
}
div:nth-child(5) {
  background-color: hsl(0 80% 50%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 50%);
}
```

#### Результат

{{EmbedLiveSample("stvorennia-chervonoho-riznoii-nasychenosti", "100%", 150)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{CSSXref("opacity")}} – властивість, що дає змогу визначати прозорість на рівні елемента
- {{CSSXref("&lt;hue&gt;")}} тип даних, що представляє кут барви кольору
- {{CSSXref("color")}}, {{CSSXref("background-color")}}, {{CSSXref("border-color")}}, {{CSSXref("box-shadow")}}, {{CSSXref("outline-color")}}, {{CSSXref("text-shadow")}} – поширені властивості, що використовують `<color>`
- [Застосування кольору до елементів HTML за допомогою CSS](/uk/docs/Web/CSS/CSS_colors/Applying_color)
- [Застосування відносних кольорів](/uk/docs/Web/CSS/CSS_colors/Relative_colors)
- [Нові функції, градієнти та барви у Кольорах CSS (Рівень 4)](https://developer.mozilla.org/en-US/blog/css-color-module-level-4/) на блозі MDN (2023)
