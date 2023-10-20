---
title: font
slug: Web/CSS/font
page-type: css-shorthand-property
browser-compat: css.properties.font
---

{{CSSRef}}

[Властивість-скорочення](/uk/docs/Web/CSS/Shorthand_properties) CSS **`font`** (шрифт) задає всі різноманітні властивості шрифту елемента. Як інший варіант, вона може задавати елементові системний шрифт.

{{EmbedInteractiveExample("pages/css/font.html")}}

Як і в випадку будь-якої властивості-скорочення, будь-яке окреме значення, що не задано, отримує відповідне собі початкове значення (можливо, відкидаючи значення, раніше задані за допомогою нескорочених властивостей). Хоча властивості {{cssxref("font-size-adjust")}} та {{cssxref("font-kerning")}} не можна задати безпосередньо за допомогою `font`, вони також скидаються до своїх початкових значень.

## Властивості-складові

Ця властивість є скороченням наступних властивостей CSS:

- {{cssxref("font-family")}}
- {{cssxref("font-size")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

## Синтаксис

```css-nolint
/* font-size font-family */
font: 1.2em "Fira Sans", sans-serif;

/* font-size/line height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em "Fira Sans", sans-serif;

/* font-stretch font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em "Fira Sans", sans-serif;

/* системний шрифт */
font: caption;
```

Властивість `font` може задаватися або як одне ключове слово, що вказує на системний шрифт, або як скорочення різних властивостей, що стосуються шрифту.

Якщо `font` задано як системне ключове слово, то це повинно буде одне з цих слів: `caption`, `icon`, `menu`, `message-box`, `small-caption`, `status-bar`.

Якщо `font` задано як скорочення декількох властивостей, що стосуються шрифту, то:

- значення повинно вміщати значення для:

  - {{cssxref("&lt;font-size&gt;")}}
  - {{cssxref("&lt;font-family&gt;")}}

- а також, необов'язково:

  - {{cssxref("&lt;font-style&gt;")}}
  - {{cssxref("&lt;font-variant&gt;")}}
  - {{cssxref("&lt;font-weight&gt;")}}
  - {{cssxref("&lt;font-stretch&gt;")}}
  - {{cssxref("&lt;line-height&gt;")}}

- `font-style`, `font-variant` і `font-weight` повинні стояти перед `font-size`
- `font-variant` може задавати лише значення, задані в CSS 2.1, тобто `normal` або `small-caps`
- `font-stretch` може бути лише єдиним значенням – ключовим словом.
- `line-height` повинно стояти зразу після `font-size`, з префіксом "/", наприклад, "`16px/3`
- `font-family` повинно бути останнім заданим значенням.

### Значення

- `<'font-style'>`
  - : Дивіться властивість CSS {{cssxref("font-style")}}.
- `<'font-variant'>`
  - : Дивіться властивість CSS {{cssxref("font-variant")}}.
- `<'font-weight'>`
  - : Дивіться властивість CSS {{cssxref("font-weight")}}.
- `<'font-stretch'>`
  - : Дивіться властивість CSS {{cssxref("font-stretch")}}.
- `<'font-size'>`
  - : Дивіться властивість CSS {{cssxref("font-size")}}.
- `<'line-height'>`
  - : Дивіться властивість CSS {{cssxref("line-height")}}.
- `<'font-family'>`
  - : Дивіться властивість CSS {{cssxref("font-family")}}.

#### Значення системних шрифтів

- `caption`
  - : Системний шрифт, що вживається для контрольних елементів з підписами (наприклад, кнопок, спадних списків тощо).
- `icon`
  - : Системний шрифт, що вживається для підписів піктограм.
- `menu`
  - : Системний шрифт, що вживається в меню (наприклад, у спадних меню та списках меню).
- `message-box`
  - : Системний шрифт, що вживається в діалогових віконцях.
- `small-caption`
  - : Системний шрифт, що вживається для підписів малих елементів керування.
- `status-bar`
  - : Системний шрифт, що вживається в рядках стану вікон.
- Ключові слова системних шрифтів з префіксами
  - : Браузери нерідко мають реалізацію іще декількох ключових слів з префіксами – Gecko має `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list` і `-moz-field`.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{CSSSyntax}}

## Приклади

### Задання властивостей шрифту

```css
/* Задати розмір шрифту 12px, висоту рядка 14px.
   Задати сімейство шрифту sans-serif */
p {
  font: 12px/14px sans-serif;
}

/* Задати розмір шрифту на 80% від батьківського елемента
   або усталеного значення (якщо батьківський елемент відсутній).
   Задати сімейство шрифту sans-serif */
p {
  font: 80% sans-serif;
}

/* Задати вагу шрифту як грубий,
    стиль шрифту як курсив,
    розмір шрифту як великий,
    сімейство шрифту як serif */
p {
  font: bold italic large serif;
}

/* Використовувати той же шрифт, що й рядок стану вікна */
p {
  font: status-bar;
}
```

### Живий зразок

```html hidden
<p>
  Перемикайте радіокнопки нижче, щоб побачити згенероване скорочення та його
  дію.
</p>
<form action="createShortHand()">
  <div class="cf">
    <div class="setPropCont">
      font-style<br />
      <input
        type="radio"
        id="font-style-none"
        name="font_style"
        checked=""
        value=""
        onchange="setCss()" />
      <label for="font-style-none">none</label><br />
      <input
        type="radio"
        id="font-style-normal"
        name="font_style"
        value="normal"
        onchange="setCss()" />
      <label for="font-style-normal">normal</label><br />
      <input
        type="radio"
        id="font-style-italic"
        name="font_style"
        value="italic"
        onchange="setCss()" />
      <label for="font-style-italic">italic</label><br />
      <input
        type="radio"
        id="font-style-oblique"
        name="font_style"
        value="oblique"
        onchange="setCss()" />
      <label for="font-style-oblique">oblique</label>
    </div>

    <div class="setPropCont">
      font-variant<br />
      <input
        type="radio"
        id="font-variant-none"
        name="font_variant"
        checked=""
        value=" "
        onchange="setCss()" />
      <label for="font-variant-none">none</label><br />
      <input
        type="radio"
        id="font-variant-normal"
        name="font_variant"
        value="normal"
        onchange="setCss()" />
      <label for="font-variant-normal">normal</label><br />
      <input
        type="radio"
        id="font-variant-small-caps"
        name="font_variant"
        value="small-caps"
        onchange="setCss()" />
      <label for="font-variant-small-caps">small-caps</label>
    </div>

    <div class="setPropCont">
      font-weight<br />
      <input
        type="radio"
        id="font-weight-none"
        name="font_weight"
        value=""
        onchange="setCss()" />
      <label for="font-weight-none">none</label><br />
      <input
        type="radio"
        id="font-weight-normal"
        checked=""
        name="font_weight"
        value="400"
        onchange="setCss()" />
      <label for="font-weight-normal">normal</label><br />
      <input
        type="radio"
        id="font-weight-bold"
        name="font_weight"
        value="700"
        onchange="setCss()" />
      <label for="font-weight-bold">bold</label>
    </div>

    <div class="setPropCont">
      font-size<br />
      <input
        type="radio"
        id="font-size-12px"
        name="font_size"
        value="12px"
        onchange="setCss()" />
      <label for="font-size-12px">12px</label><br />
      <input
        type="radio"
        id="font-size-16px"
        name="font_size"
        value="16px"
        checked=""
        onchange="setCss()" />
      <label for="font-size-16px">16px</label><br />
      <input
        type="radio"
        id="font-size-24px"
        name="font_size"
        value="24px"
        onchange="setCss()" />
      <label for="font-size-24px">24px</label>
    </div>

    <div class="setPropCont">
      line-height<br />
      <input
        type="radio"
        id="line-height-none"
        name="line_height"
        checked=""
        value=""
        onchange="setCss()" />
      <label for="line-height-none">none</label><br />
      <input
        type="radio"
        id="line-height-1.2"
        name="line_height"
        value="/1.2"
        onchange="setCss()" />
      <label for="line-height-1.2">1.2</label><br />
      <input
        type="radio"
        id="line-height-3"
        name="line_height"
        value="/3"
        onchange="setCss()" />
      <label for="line-height-3">3</label>
    </div>
    <br />

    <div class="setPropCont fontfamily">
      font-family<br />
      <input
        type="radio"
        id="font-family-courier"
        name="font_family"
        checked=""
        value="courier"
        onchange="setCss(5,'courier')" />
      <label for="font-family-courier">courier</label><br />
      <input
        type="radio"
        id="font-family-serif"
        name="font_family"
        value="serif"
        onchange="setCss()" />
      <label for="font-family-serif">serif</label><br />
      <input
        type="radio"
        id="font-family-sans-serif"
        name="font_family"
        value="sans-serif"
        onchange="setCss()" />
      <label for="font-family-sans-serif">sans-serif</label><br />
      <input
        type="radio"
        id="font-family-arial"
        name="font_family"
        value="arial"
        onchange="setCss()" />
      <label for="font-family-arial">Arial</label><br />
      <input
        type="radio"
        id="font-family-monospace"
        name="font_family"
        value="monospace"
        onchange="setCss()" />
      <label for="font-family-monospace">monospace</label><br />
      <input
        type="radio"
        id="font-family-cursive"
        name="font_family"
        value="cursive"
        onchange="setCss()" />
      <label for="font-family-cursive">cursive</label><br />
      <input
        type="radio"
        id="font-family-fantasy"
        name="font_family"
        value="fantasy"
        onchange="setCss()" />
      <label for="font-family-fantasy">fantasy</label><br />
      <input
        type="radio"
        id="font-family-system-ui"
        name="font_family"
        value="system-ui"
        onchange="setCss()" />
      <label for="font-family-system-ui">system-ui</label><br />
    </div>
  </div>

  <div class="cf propInputs">
    <div class="propInputCont tar">font :</div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_style" /><br />
      font-style <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_variant" /> <br />
      font-variant <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_weight" /> <br />
      font-weight <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_size" /> <br />
      font-size <br />
      mandatory
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_line_height" /> <br />
      line-height <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_family" />
      <br />
      font-family <br />
      mandatory
    </div>
  </div>
</form>

<div class="fontShortHand">Це текст для прикладу.</div>
<br /><br /><br /><br /><br /><br />
```

```css hidden
body,
input {
  font: 14px arial;
  overflow: hidden;
}

.propInputCont {
  float: left;
  text-align: center;
  margin-right: 5px;
  width: 80px;
}

.setPropCont {
  float: left;
  margin-right: 5px;
  width: 120px;
}

.propInputs,
.setPropCont {
  margin-bottom: 1em;
}

.curCss {
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  width: 80px;
}

.mandatory {
  border-bottom-color: red;
}

.cf::before,
.cf::after {
  content: " ";
  display: table;
}

.cf::after {
  clear: both;
}

.tar {
  width: 40px;
  text-align: right;
}
.fontfamily {
  display: inline-block;
}
```

```js hidden
const textAreas = document.getElementsByClassName("curCss");

function getProperties() {
  return (
    `${getCheckedValue("font_style")} ` +
    `${getCheckedValue("font_variant")} ` +
    `${getCheckedValue("font_weight")} ` +
    `${getCheckedValue("font_size")}` +
    `${getCheckedValue("line_height")} ` +
    `${getCheckedValue("font_family")}`
  );
}

function getCheckedValue(radioName) {
  const radios = document.forms[0].elements[radioName];
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      const curElemName = `input_${radioName}`;
      const curElem = document.getElementById(curElemName);
      curElem.value = radios[i].value;

      return radios[i].value;
    }
  }
}

function setCss() {
  injectCss(getProperties());
}

function injectCss(cssFragment) {
  const old = document.body.getElementsByTagName("style");
  if (old.length > 1) {
    old[1].parentElement.removeChild(old[1]);
  }
  css = document.createElement("style");
  css.textContent = `.fontShortHand{font: ${cssFragment}}`;
  document.body.appendChild(css);
}

setCss();
```

{{EmbedLiveSample('zhyvyi-zrazok','100%', '440px')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [Засади оформлення тексту та шрифту](/uk/docs/Learn/CSS/Styling_text/Fundamentals)
