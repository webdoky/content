---
title: border-style
slug: Web/CSS/border-style
page-type: css-shorthand-property
browser-compat: css.properties.border-style
---

{{CSSRef}}

[Властивість-скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`border-style`** (стиль меж) задає стиль лінії для всіх чотирьох сторін меж елемента.

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## Властивості-складові

Ця властивість є скороченням для наступних властивостей CSS:

- [`border-bottom-style`](/uk/docs/Web/CSS/border-bottom-style)
- [`border-left-style`](/uk/docs/Web/CSS/border-left-style)
- [`border-right-style`](/uk/docs/Web/CSS/border-right-style)
- [`border-top-style`](/uk/docs/Web/CSS/border-top-style)

## Синтаксис

```css
/* Значення – ключові слова */
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/* згори і знизу | зліва і справа */
border-style: dotted solid;

/* згори | зліва і справа | знизу */
border-style: hidden double dashed;

/* згори | справа | знизу | зліва */
border-style: none solid dotted dashed;

/* Глобальні значення */
border-style: inherit;
border-style: initial;
border-style: revert;
border-style: revert-layer;
border-style: unset;
```

Властивість `border-style` може бути задана з одним, двома, трьома або чотирма значеннями.

- Коли задане **одне** значення, то один стиль застосовується до **всіх чотирьох сторін**.
- Коли задані **два значення**, то перший стиль застосовується до **верху і низу**, а другий – до **лівої та правої** сторін.
- Коли задані **три** значення, то перший стиль застосовується до **верху**, другий – до **лівої та правої** сторін, а третій – до **низу**.
- Коли задані **чотири** значення, то ці стилі застосовуються до **верху**, **правої** сторони, **низу** та **лівої** сторони відповідно (за годинниковою стрілкою).

Кожне значення – ключове слово, вибране зі списку нижче.

### Значення

- `<line-style>`

  - : Описує стиль межі. Може мати наступні значення:

    - `none`
      - : Подібно до ключового слова `hidden`, призводить до відсутності межі. Якщо не задано {{cssxref("background-image")}}, то обчислене значення {{cssxref("border-width")}} тієї ж сторони буде `0`, навіть якщо задане значення – якесь інакше. У випадку комірки таблиці та перекривання зовнішніх меж, значення `none` має _найнижчий_ пріоритет: якщо задана будь-яка конфліктна межа, то вона буде показана.
    - `hidden`
      - : Подібно до ключового слова `none`, призводить до відсутності межі. Якщо не задано {{cssxref("background-image")}}, то обчислене значення {{cssxref("border-width")}} тієї ж сторони буде `0`, навіть якщо задане значення – якесь інакше. У випадку комірки таблиці та перекривання зовнішніх меж, значення `hidden` має _найвищий_ пріоритет: якщо задана будь-яка конфліктна межа, то вона не буде показана.
    - `dotted`
      - : Виводить послідовність округлих крапок. Проміжки між крапками – не задані специфікацією, вони залежать від реалізації. Радіус крапок – половина обчисленого значення {{cssxref("border-width")}} тієї ж сторони.
    - `dashed`
      - : Виводить послідовність коротких рисок з прямокутними краями або відрізки. Точний розмір і довжина відрізків не задані специфікацією, вони залежать від реалізації.
    - `solid`
      - : Виводить єдину, пряму, суцільну лінію.
    - `double`
      - : Виводить дві прямі лінії, що складаються в піксельний розмір, заданий {{cssxref("border-width")}}.
    - `groove`
      - : Виводить межу, подібну до вирізьбленої. Це значення є протилежністю `ridge`.
    - `ridge`
      - : Виводить межу, подібну до вдавленої. Це значення є протилежністю `groove`.
    - `inset`
      - : Виводить межу, завдяки якій елемент має вигляд вдавленого. Це значення є протилежністю `outset`. Бувши застосованим до комірки таблиці, чия властивість {{cssxref("border-collapse")}} має значення `collapsed`, це значення поводиться як `ridge`.
    - `outset`
      - : Виводить межу, завдяки якій елемент має вигляд виступу. Це значення є протилежністю `inset`. Бувши застосованим до комірки таблиці, чия властивість {{cssxref("border-collapse")}} має значення `collapsed`, це значення поводиться як `groove`.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Усі значення властивості

Це приклад з усіма значеннями властивості.

#### HTML

```html
<pre class="b1">none</pre>
<pre class="b2">hidden</pre>
<pre class="b3">dotted</pre>
<pre class="b4">dashed</pre>
<pre class="b5">solid</pre>
<pre class="b6">double</pre>
<pre class="b7">groove</pre>
<pre class="b8">ridge</pre>
<pre class="b9">inset</pre>
<pre class="b10">outset</pre>
```

#### CSS

```css
pre {
  height: 80px;
  width: 120px;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  background-color: palegreen;
  border-width: 5px;
  box-sizing: border-box;
}

/* класи прикладів border-style */
.b1 {
  border-style: none;
}

.b2 {
  border-style: hidden;
}

.b3 {
  border-style: dotted;
}

.b4 {
  border-style: dashed;
}

.b5 {
  border-style: solid;
}

.b6 {
  border-style: double;
}

.b7 {
  border-style: groove;
}

.b8 {
  border-style: ridge;
}

.b9 {
  border-style: inset;
}

.b10 {
  border-style: outset;
}
```

#### Результат

{{EmbedLiveSample('usi-znachennia-vlastyvosti', "1200", 450)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Властивості-скорочення CSS, що стосуються меж: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
