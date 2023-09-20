---
title: "-moz-image-rect"
slug: Web/CSS/-moz-image-rect
page-type: css-function
status:
  - experimental
  - non-standard
browser-compat: css.types.-moz-image-rect
---

{{CSSRef}}{{Non-standard_Header}}{{SeeCompatTable}}

Властивість [CSS](/uk/docs/Web/CSS) **`-moz-image-rect`** (Mozilla – прямокутник зображення) для {{CSSxRef("background-image")}} дає змогу використовувати частину більшого зображення як тло.

## Синтаксис

```css
-moz-image-rect({{CSSxRef("url", "url()")}}, top, right, bottom, left);
```

### Значення

- {{CSSxRef("url", "url()")}}
  - : URI зображення, з якої потрібно отримати підзображення.
- `top`
  - : Верхній край підзображення, заданий як {{CSSxRef("&lt;integer&gt;")}} або {{CSSxRef("&lt;percentage&gt;")}}, у межах вказаного зображення.
- `right`
  - : Правий край підзображення, заданий як {{CSSxRef("&lt;integer&gt;")}} або {{CSSxRef("&lt;percentage&gt;")}}, у межах вказаного зображення.
- `bottom`
  - : Нижній край підзображення, заданий як {{CSSxRef("&lt;integer&gt;")}} або {{CSSxRef("&lt;percentage&gt;")}}, у межах вказаного зображення.
- `left`
  - : Лівий край підзображення, заданий як {{CSSxRef("&lt;integer&gt;")}} або {{CSSxRef("&lt;percentage&gt;")}}, у межах вказаного зображення.

## Опис

Ця властивість дає змогу, наприклад, використовувати різні частини одного великого зображення як тло у різних частинах вмісту.

Це працює вельми подібно до властивості {{CSSxRef("-moz-image-region")}}, котра використовується вкупі із властивістю {{CSSxRef("list-style-image")}} для використання частин зображення замість маркерів у списках. Втім, властивість `-moz-image-rect` може використовуватись для встановлення будь-якого CSS-тла.

Синтаксис прямокутника подібний до функції [`rect()`](/uk/docs/Web/CSS/shape#syntax), що генерує CSS-тип {{CSSxRef("&lt;shape&gt;")}}. Усі чотири значення відносні до верхнього лівого кута зображення.

## Приклади

Цей приклад завантажує зображення і використовує його у чотирьох сегментах, аби намалювати лого Firefox у чотирьох {{HTMLElement("div")}} блоках. Кліки по їх контейнеру змусять чотири сегменти чергуватись шляхом обміну значень властивості {{CSSxRef("background-image")}} між чотирма {{HTMLElement("div")}} блоками.

### CSS

CSS описує один стиль контейнера, далі стилі чотирьох блоків, котрі утворюють повне зображення.

Контейнер має наступний вигляд:

```css
#container {
  width: 267px;
  height: 272px;
  top: 100px;
  left: 100px;
  position: absolute;
  font-size: 16px;
  text-shadow: white 0px 0px 6px;
  text-align: center;
}
```

Далі чотири блоки описують сегменти зображення.

```css
#box1 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 50%, 50%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

Код вище — верхній лівий кут зображення. Він описує прямокутник, що містить верхню ліву чверть зображення з файлу `firefox.jpg`.

```css
#box2 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 100%, 50%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

Код вище описує верхній правий кут зображення.

Інші кути описані аналогічно:

```css
#box3 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 50%, 100%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}
#box4 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 100%, 100%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

### HTML

HTML код доволі простий:

```html
<div id="container" onclick="rotate()">
  <div id="box1" style="left:0px;top:0px;">Верхній лівий</div>
  <div id="box2" style="left:133px;top:0px;">Верхній правий</div>
  <div id="box3" style="left:0px;top:136px;">Нижній лівий</div>
  <div id="box4" style="left:133px;top:136px;">Нижній правий</div>
</div>
```

Такий код розміщує чотири сегменти зображення у сітці два на два. Ці сегменти вкупі розташовані всередині більшого {{HTMLElement("div")}} блоку, чиє основне призначення — отримувати події кліку та направляти їх до JavaScript коду.

### Код на JavaScript

Цей код обробляє подію кліку, коли контейнер отримує клік миші.

```js
function rotate() {
  let prevStyle = window
    .getComputedStyle(document.getElementById("box4"), null)
    .getPropertyValue("background-image");

  // Тепер, оскільки збережене останнє значення, починається чергування
  for (let i = 1; i <= 4; i++) {
    const curId = `box${i}`;

    // Зсування зображень тла
    const curStyle = window
      .getComputedStyle(document.getElementById(curId), null)
      .getPropertyValue("background-image");
  }
}
```

Тут використовується {{DOMxRef("window.getComputedStyle()")}} для отримання стилю кожного елементу, зсуваючи його до наступного елементу. Зверніть увагу, що до початку чергування зберігається копія стилю останнього блоку, оскільки він буде перезаписаний стилем третього елементу. Копіюючи значення властивості {{CSSxRef("background-image")}} від першого елементу до наступного з кожним кліком миші, досягається бажаний ефект.

### На що це схоже

{{EmbedLiveSample("pryklady","400","400")}}

## Специфікації

Не є частиною жодного стандарту.

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- [Розширення CSS від Mozilla](/uk/docs/Web/CSS/Mozilla_Extensions)
- [Модуль CSS тла та меж](/uk/docs/Web/CSS/CSS_backgrounds_and_borders)
