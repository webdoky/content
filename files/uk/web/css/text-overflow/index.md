---
title: text-overflow
slug: Web/CSS/text-overflow
page-type: css-property
browser-compat: css.properties.text-overflow
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`text-overflow`** (переповнення текстом) задає те, як користувачів повідомляють про прихований вміст, що переливається через край. Він може бути обрізаний, може бути показана трикрапка (`…`) чи якийсь особливий рядок.

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

Властивість `text-overflow` не примушує до жодного переповнення. Щоб змусити текст переливатися через край свого контейнера, треба задати інші властивості CSS: {{cssxref("overflow")}} і {{cssxref("white-space")}}. Наприклад:

```css
overflow: hidden;
white-space: nowrap;
```

Властивість `text-overflow` впливає лише на той вміст, котрий переливається через блоковий контейнер у його _рядковому_ напрямку (не на текст, котрий переливається через нижню рамку, наприклад).

## Синтаксис

```css
text-overflow: clip;
text-overflow: ellipsis ellipsis;
text-overflow: ellipsis " [..]";

/* Глобальні значення */
text-overflow: inherit;
text-overflow: initial;
text-overflow: revert;
text-overflow: revert-layer;
text-overflow: unset;
```

Властивість `text-overflow` може бути задана у вигляді одного чи двох значень. Якщо дано одне значення, то воно задає поведінку для кінця рядка (правого кінця для тексту зліва направо, лівого кінця для тексту справа наліво). Якщо дані два значення, то перше з них задає поведінку переповнення зліва рядка, а друге – справа. Ця властивість приймає або значення – ключове слово (`clip` або `ellipsis`), або значення `<string>`.

### Значення

- `clip` (обрізати)
  - : Усталене значення цієї властивості. Це ключове слово обріже текст на межі [області вмісту](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), таким чином – обрізання може відбутися посередині символу. Щоб обрізати у проміжку між символами, можна задати `text-overflow` зі значенням порожнього рядка, якщо це підтримується цільовими браузерами: `text-overflow: '';`.
- `ellipsis` (трикрапка)
  - : Це ключове слово покаже трикрапку (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`), що представлятиме обрізаний текст. Трикрапка демонструється всередині [області вмісту](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), зменшуючи кількість показаного тексту. Якщо простору для виведення трикрапки недостатньо, вона обрізається.
- `<string>`
  - : {{cssxref("&lt;string&gt;")}}, що буде використовуватись для представлення обрізаного тексту. Рядок виводиться всередині [області вмісту](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), скорочуючи розмір показаного тексту. Якщо простору для виведення самого рядка недостатньо, вона обрізається.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Синтаксис одного значення

Цей приклад демонструє, як застосовуються до абзацу різні значення `text-overflow`, для тексту зліва направо і справа наліво.

#### HTML

```html
<div class="ltr">
  <h2>Текст зліва направо</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
  </p>
</div>

<div class="rtl">
  <h2>Текст справа наліво</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
  </p>
</div>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* Для text-overflow потрібні обидва правила нижче */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  text-overflow: " [..]";
}

body {
  display: flex;
  justify-content: space-around;
}

.ltr > p {
  direction: ltr;
}

.rtl > p {
  direction: rtl;
}
```

#### Результат

{{EmbedLiveSample('syntaksys-odnoho-znachennia', 600, 320)}}

### Синтаксис двох значень

Цей приклад показує синтаксис `text-overflow` зі двома значеннями, з яким можна визначити різну поведінку переповнення на початку і в кінці тексту. Щоб побачити ефект, доводиться прокрутити стрій, аби початок строю також сховався.

#### HTML

```html
<pre>clip clip</pre>
<p class="overflow-clip-clip">
  Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
</p>
<pre>clip ellipsis</pre>
<p class="overflow-clip-ellipsis">
  Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
</p>
<pre>ellipsis ellipsis</pre>
<p class="overflow-ellipsis-ellipsis">
  Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
</p>
<pre>ellipsis " [..]"</pre>
<p class="overflow-ellipsis-string">
  Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей
</p>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* Для text-overflow потрібні обидва правила нижче */
  white-space: nowrap;
  overflow: scroll;
}

.overflow-clip-clip {
  text-overflow: clip clip;
}

.overflow-clip-ellipsis {
  text-overflow: clip ellipsis;
}

.overflow-ellipsis-ellipsis {
  text-overflow: ellipsis ellipsis;
}

.overflow-ellipsis-string {
  text-overflow: ellipsis " [..]";
}
```

#### JavaScript

```js
// Прокрутити кожний абзац, щоб початок також сховався
const paras = document.querySelectorAll("p");

for (const para of paras) {
  para.scroll(100, 0);
}
```

#### Результат

{{EmbedLiveSample('syntaksys-dvokh-znachen', 600, 360)}}

## Специфікації

{{Specifications}}

Попередня версія цього інтерфейсу досягнула статусу _Рекомендації в кандидати_. Через потребу прибрати певні можливості, не внесені до групи ризику, статус специфікації знизили до рівня _Робочої чернетки_, що пояснює, чому браузери реалізували цю властивість без префіксів, але вона не має статусу рекомендації.

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Пов'язані властивості CSS: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- Властивості CSS, що контролюють розриви строю в словах: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
