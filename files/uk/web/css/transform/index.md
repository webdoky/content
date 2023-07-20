---
title: transform
slug: Web/CSS/transform
page-type: css-property
browser-compat: css.properties.transform
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`transform`** (перетвір) дає змогу обертати, масштабувати, скошувати й переміщувати елемент.
Вона видозмінює координатний простір [моделі візуального форматування](/uk/docs/Web/CSS/Visual_formatting_model) CSS.

{{EmbedInteractiveExample("pages/css/transform.html")}}

Якщо властивість має значення, відмінне від `none`, то створюється [контекст нагромадження](/uk/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
В такому випадку елемент діє для будь-яких `position: fixed;` чи `position: absolute;` елементів, котрі містить, як [контейнерний блок](/uk/docs/Web/CSS/Containing_block).

> **Застереження:** Перетворені за допомогою `transform` можуть бути лише елементи, котрі піддаються перетворенню.
> А саме – всі елементи, чиє компонування обумовлене рамковою моделлю CSS, окрім: [незаміщених рядкових рамок](/uk/docs/Glossary/Inline-level_content), [рамок колонок таблиці](/uk/docs/Web/HTML/Element/col) й [рамок груп колонок таблиці](/uk/docs/Web/HTML/Element/colgroup).

## Синтаксис

```css
/* Значення – ключові слова */
transform: none;

/* Функційні значення */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Декілька функційних значень */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Глобальні значення */
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
```

Властивість `transform` може бути задана або як ключове слово `none`, або як одне чи більше значень `<transform-function>`.

Якщо одним з кількох функційних значень є {{cssxref("transform-function/perspective", "perspective()")}}, то воно повинно стояти першим.

### Значення

- {{cssxref("&lt;transform-function&gt;")}}
  - : Одна чи більше [функцій перетворення CSS](/uk/docs/Web/CSS/transform-function) до застосування.
    Функції перетворення множаться в порядку зліва направо, а отже – складені перетворення фактично [застосовуються в порядку справа наліво](#poriadok-peretvoren).
- `none`
  - : Вказує, що не застосовується жодне перетворення.

## Занепокоєння щодо доступності

Анімації масштабування й наближення є проблемними для доступності, адже вони є поширеним тригером певних різновидів мігрені.
Якщо є потреба додати до вебсайту такі анімації, слід надати користувачам контроль для їх вимкнення, бажано для всього сайту.

Крім того, слід розглянути використання ознаки медіа {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}: за її допомогою можна написати [медіазапит](/uk/docs/Web/CSS/CSS_media_queries), котрий вимкне анімації, якщо користувач має у своїх системних налаштуваннях позначку "менше анімації".

Більше подробиць:

- [MDN розуміння WCAG, пояснення Настанов 2.3](/uk/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_—_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Розуміння критерію успіху 2.3.3 | W3C розуміння WCAG 2.1 (англ.)](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Переміщення й обертання елемента

#### HTML

```html
<div>Перетворений елемент</div>
```

#### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

#### Результат

{{EmbedLiveSample("peremishchennia-y-obertannia-elementa", "400", "160")}}

### Порядок перетворень

Порядок функцій перетворень має значення. В цьому прикладі дві рамки повертаються й переміщуються на однакові значення, але порядок функцій перетворення – різний.

#### HTML

```html
<div class="original"></div>
<div class="one">1</div>
<div class="two">2</div>
```

#### CSS

```css hidden
div {
  height: 200px;
  width: 200px;
  position: absolute;
  left: 200px;
  top: 50px;
  font-size: 4rem;
  line-height: 200px;
  text-align: center;
}
.original {
  border: 1px dashed;
}
.original:before,
.original:after {
  content: "";
  position: absolute;
  top: 100px;
  width: 500px;
  left: -150px;
  height: 1px;
  border-top: 2px dotted;
}
.original:after {
  transform: rotate(135deg);
}
.one {
  background-color: #ccc;
}
.two {
  background-color: #d6bb72;
}
```

```css
.one {
  transform: translateX(200px) rotate(135deg);
}
.two {
  transform: rotate(135deg) translateX(200px);
}
```

#### Результат

{{EmbedLiveSample("poriadok-peretvoren", "400", "460")}}

Коли елемент повертається перед переміщенням, то напрямок переміщення – по повернутій осі. Такі осі показані пунктирними лініями.

### Більше прикладів

Більше прикладів можна знайти у [Застосуванні перетворень CSS](/uk/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms) і {{cssxref("&lt;transform-function&gt;")}}.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Застосування перетворень CSS](/uk/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- Тип даних {{cssxref("&lt;transform-function&gt;")}}, де пояснені всі функції перетворення.
- Окремі властивості CSS: {{cssxref('translate')}}, {{cssxref('rotate')}} і {{cssxref('scale')}} (властивості `skew` немає).
- Інструмент для візуалізації функцій перетворень CSS, доступний в мережі: [Ігровий майданчик перетворень CSS](https://css-transform.moro.es/)
