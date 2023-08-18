---
title: border-width
slug: Web/CSS/border-width
page-type: css-shorthand-property
browser-compat: css.properties.border-width
---

{{CSSRef}}

Властивість-[скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`border-width`** задає ширину меж елемента.

{{EmbedInteractiveExample("pages/css/border-width.html")}}

## Властивості-складові

Ця властивість є скороченням наступних властивостей CSS:

- [`border-bottom-width`](/uk/docs/Web/CSS/border-bottom-width)
- [`border-left-width`](/uk/docs/Web/CSS/border-left-width)
- [`border-right-width`](/uk/docs/Web/CSS/border-right-width)
- [`border-top-width`](/uk/docs/Web/CSS/border-top-width)

## Синтаксис

```css
/* Значення – ключові слова */
border-width: thin;
border-width: medium;
border-width: thick;

/* Значення <length> */
border-width: 4px;
border-width: 1.2rem;

/* верх і низ | ліво та право */
border-width: 2px 1.5em;

/* верх | ліво та право | низ */
border-width: 1px 2em 1.5cm;

/* верх | право | низ | ліво */
border-width: 1px 2em 0 4rem;

/* Глобальні значення */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: revert-layer;
border-width: unset;
```

Властивість `border-width` може бути задана з одним, двома, трьома чи чотирма значеннями.

- Коли задано **одне** значення, то вона застосовує однакову ширину до **всіх чотирьох сторін**.
- Коли задано **два** значення, то перше з них застосовується до **верху та низу**, а друге – до **лівої та правої** сторін.
- Коли задано **три** значення, то перше з них застосовується до **верху**, друге – до **лівої та правої** сторін, а третє – до **низу**.
- Коли задано **чотири** значення, то вони застосовуються до **верху**, **права**, **низу** та **ліва** відповідно (за годинниковою стрілкою).

### Значення

- `<line-width>`

  - : Задає ширину меж, або у вигляді явного невід'ємного значення {{cssxref("&lt;length&gt;")}}, або ключового слова. Допустимі такі ключові слова:

    - `thin`
    - `medium`
    - `thick`

> **Примітка:** Через те, що специфікація не задає конкретної товщини, котру позначає кожне ключове слово, конкретний результат при їх використанні – залежить від реалізації. Попри це, ці ключові слова завжди відповідають патернові `thin ≤ medium ≤ thick`, і в межах одного документу їхні значення є сталими.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Суміш ключових слів і ширин

#### HTML

```html
<p id="one-value">одне значення: межі 6px завширшки з усіх 4 сторін</p>
<p id="two-values">
  два різні значення: межі 2px завширшки згори та знизу, 10px завширшки справа
  та зліва
</p>
<p id="three-values">
  три різні значення: межі 0.3em завширшки згори, 9px завширшки знизу та
  нульової ширини справа та зліва
</p>
<p id="four-values">
  чотири різні значення: "thin" згори, "medium" справа, "thick" знизу та 1em
  завширшки зліва
</p>
```

#### CSS

```css
#one-value {
  border: ridge #ccc;
  border-width: 6px;
}
#two-values {
  border: solid red;
  border-width: 2px 10px;
}
#three-values {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#four-values {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### Результат

{{EmbedLiveSample('sumish-kliuchovykh-sliv-i-shyryn', 320, 320)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Властивості-скорочення, котрі стосуються меж: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}
- Властивості, котрі стосуються ширини меж: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}
