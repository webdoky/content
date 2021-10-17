---
title: '-moz-context-properties'
slug: Web/CSS/-moz-context-properties
tags:
  - '-moz-context-properties'
  - CSS
  - CSS Property
  - CSS:Mozilla Extensions
  - Experimental
  - Needs Privileges
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-context-properties
---
{{CSSRef}}{{Non-standard_header}}

Властивість **`-moz-context-properties`** може використовуватись у привілейованих контекстах у Firefox для передачі вказаних властивостей елементові з дочірнім SVG зображенням.

Якщо ви посилаєтесь на веб-сторінці на SVG зображення (наприклад, {{htmlelement("img")}} елементом або у якості зображення тла), SVG зображення може координуватись із елементом, що його вбудовує (своїм контекстом, далі - контекстний елемент) для перейняття зображенням значень властивостей, встановлених для контекстного елементу. Щоб цього досягти, контекстний елемент повинен перелічити властивості, котрі повинні бути доступні зображенню, передавши такий перелік властивості `-moz-context-properties`, а зображення мусить вказати використання цих значень у значенні своєї властивості `context-fill`.

## Синтаксис

```css
/* Ключові значення */
-moz-context-properties: fill;
-moz-context-properties: fill, stroke;

/* Глобальні значення */
-moz-context-properties: inherit;
-moz-context-properties: initial;
-moz-context-properties: unset;
```

### Значення

- `fill`
  - : Розкрити значення `fill`, встановлене на зображенні, вбудованому SVG.
- `stroke`
  - : Розкрити значення `stroke`, встановлене на зображенні, вбудованому SVG.
- `fill-opacity`
  - : Розкрити значення `fill-opacity`, встановлене на зображенні, вбудованому SVG.
- `stroke-opacity`
  - : Розкрити значення `stoke-opacity`, встановлене на зображенні, вбудованому SVG.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Розкриття fill та stroke SVG зображенню

У цьому прикладі маємо простий SVG, вбудований за допомогою `<img>` елемента.

Спершу слід вказати на контекстному елементі властивості, чиї значення бажаємо розкрити вбудованому SVG, використовуючи властивість `-moz-context-properties`. Наприклад:

```css
.img1 {
  width: 100px;
  height: 100px;
  -moz-context-properties: fill, stroke;
  fill: lime;
  stroke: purple;
}
```

Коли це зроблено, SVG зображення може використовувати значення властивостей {{SVGAttr("fill")}} та {{SVGAttr("stroke")}}, наприклад:

```html
<img class="img1" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'>
                       <rect width='100%' height='100%' stroke-width='30px'
                       fill='context-fill red' stroke='context-stroke' fill-opacity='0.5'/></svg>">
```

Тут ми встановлюємо атрибут зображення `src` у URI, що містить просте SVG зображення. Елемент `<rect>` всередині приймає значення `fill` та `stroke` від {{SVGAttr("fill")}} та {{SVGAttr("stroke")}}, встановлених на `<img>` елементі, шляхом передачі властивостям `<img>` ключових слів `context-fill`/`context-stroke` у якості їх значень. Поруч вказано резервний колір заповнення (червоний), котрий буде використаний, якщо SVG завантажать окремо у вікні верхнього рівня (де не буде контекстного елементу для отримання контекстних значень із нього). Зверніть увагу, що якщо колір встановлений напряму на SVG, але контекстний колір також вказаний, то контекстний колір заміщає напряму встановлений колір.

> **Зверніть увагу:** Ви можете переглянути [робочий приклад на Github](https://mdn.github.io/css-examples/moz-context-properties/).

## Специфікації

Не є частиною жодного стандарту.

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Розширення CSS від Mozilla](/uk/docs/Web/CSS/Mozilla_Extensions)
- [Використання зображень у HTML](/uk/docs/Web/Media/images)
- [Додання векторної графіки до вебсторінок](/uk/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [SVG у якості зображення](/uk/docs/Web/SVG/SVG_as_an_Image)
- [Адаптивні зображення](/uk/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
