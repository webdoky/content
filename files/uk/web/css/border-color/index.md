---
title: border-color
slug: Web/CSS/border-color
page-type: css-shorthand-property
browser-compat: css.properties.border-color
---

{{CSSRef}}

Властивість-[скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`border-color`** (колір межі) задає колір межі елемента.

{{EmbedInteractiveExample("pages/css/border-color.html")}}

Кожен бік можна задати окремо, використовуючи {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}} і {{CSSxRef("border-left-color")}}, або за допомогою властивостей, що враховують напрям письма: {{CSSxRef("border-block-start-color")}}, {{CSSxRef("border-block-end-color")}}, {{CSSxRef("border-inline-start-color")}} і {{CSSxRef("border-inline-end-color")}}.

Більше інформації про кольори меж можна знайти в [Застосуванні кольорів до елементів HTML](/uk/docs/Web/CSS/CSS_colors/Applying_color#mezhi).

## Властивості-складові

Ця властивість є скороченням для наступних властивостей CSS:

- [`border-bottom-color`](/uk/docs/Web/CSS/border-bottom-color)
- [`border-left-color`](/uk/docs/Web/CSS/border-left-color)
- [`border-right-color`](/uk/docs/Web/CSS/border-right-color)
- [`border-top-color`](/uk/docs/Web/CSS/border-top-color)

## Синтаксис

```css
/* Значення <color> */
border-color: red;

/* верх і низ | ліво та право */
border-color: red #f015ca;

/* верх | ліво та право | низ */
border-color: red rgb(240 30 50 / 70%) green;

/* верх | право | низ | ліво */
border-color: red yellow green blue;

/* Глобальні значення */
border-color: inherit;
border-color: initial;
border-color: revert;
border-color: revert-layer;
border-color: unset;
```

Властивість `border-color` може бути задана одним, двома, трьома або чотирма значеннями.

- Коли задано **одне** значення, то воно застосовує один колір до **всіх чотирьох боків**.
- Коли задано **два** значення, то перший колір застосовується до **верху та низу**, а другий до **лівого та правого боків**.
- Коли задано **три** значення, то перший колір застосовується до **верху**, другий до **лівого та правого боків**, а третій до **низу**.
- Коли задано **чотири** значення, то кольори застосовуються до **верху**, **правого боку**, **низу** та **лівого** боку відповідно (за годинниковою стрілкою).

### Значення

- {{CSSxRef("&lt;color&gt;")}}
  - : Визначає колір межі.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Повноцінне використання border-color

#### HTML

```html
<div id="justone">
  <p><code>border-color: red;</code> рівносильно щодо</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> рівносильно щодо</p>
  <ul>
    <li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="topvertbott">
  <p><code>border-color: red cyan gold;</code> рівносильно щодо</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="trbl">
  <p><code>border-color: red cyan black gold;</code> рівносильно щодо</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

#### CSS

```css
#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

/* Задати ширину та стиль для всіх div */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

#### Результат

{{EmbedLiveSample("povnotsinne-vykorystannia-border-color", 600, 700)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Властивості CSS, споріднені з border-color: {{CSSxRef("border")}}, {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, {{CSSxRef("border-left-color")}},
- Інші властивості CSS, що стосуються меж: {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}}
- Тип даних {{CSSxRef("&lt;color&gt;")}}
- Інші властивості, що стосуються кольору: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}} і {{CSSxRef("column-rule-color")}}
- [Застосування кольору до елементів HTML за допомогою CSS](/uk/docs/Web/CSS/CSS_colors/Applying_color)
