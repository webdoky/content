---
title: border-radius
slug: Web/CSS/border-radius
page-type: css-shorthand-property
browser-compat: css.properties.border-radius
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`border-radius`** закруглює кути зовнішнього краю меж елемента. Можна вказати один радіус – для симетричного закруглення, або два – для еліптичного закруглення.

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

Радіус застосовується до всього {{cssxref("background", "тла")}}, навіть якщо елемент не має меж; точне положення обрізання визначається властивістю {{cssxref("background-clip")}}.

Властивість `border-radius` не застосовується до табличних елементів, коли властивість {{cssxref("border-collapse")}} має значення `collapse`.

> **Примітка:** Так само як з рештою властивостей-скорочень, окремі підвластивості не можуть успадковуватися отак: `border-radius:0 0 inherit inherit`, що частково відкинуло б наявні визначення. Натомість слід використовувати окремі, розгорнуті властивості.

## Складові властивості

Ця властивість є скороченням наступних властивостей CSS:

- [`border-top-left-radius`](/uk/docs/Web/CSS/border-top-left-radius)
- [`border-top-right-radius`](/uk/docs/Web/CSS/border-top-right-radius)
- [`border-bottom-right-radius`](/uk/docs/Web/CSS/border-bottom-right-radius)
- [`border-bottom-left-radius`](/uk/docs/Web/CSS/border-bottom-left-radius)

## Синтаксис

```css
/* Синтаксис першого радіуса дозволяє від одного до чотирьох значень */
/* Радіус встановлюється для всіх 4 сторін */
border-radius: 10px;

/* згори-зліва-і-знизу-справа | згори-справа-і-знизу-зліва */
border-radius: 10px 5%;

/* згори-зліва | згори-справа-і-знизу-зліва | знизу-справа */
border-radius: 2px 4px 2px;

/* згори-зліва | згори-справа | знизу-справа | знизу-зліва */
border-radius: 1px 0 3px 4px;

/* Синтаксис другого радіуса дозволяє від одного до чотирьох значень */
/* (значення першого радіуса) / радіус */
border-radius: 10px / 20px;

/* (значення першого радіуса) / згори-зліва-і-знизу-справа | згори-справа-і-знизу-зліва */
border-radius: 10px 5% / 20px 30px;

/* (значення першого радіуса) / згори-зліва | згори-справа-і-знизу-зліва | знизу-справа */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (значення першого радіуса) / згори-зліва | згори-справа | знизу-справа | знизу-зліва */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Глобальні значення */
border-radius: inherit;
border-radius: initial;
border-radius: revert;
border-radius: revert-layer;
border-radius: unset;
```

Властивість `border-radius` вказується наступним чином:

- одне, два, три або чотири значення {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}. Встановлюється для встановлення єдиного радіуса для кутів.
- після цього, необов'язково, "/" і один, два, три або чотири значення `<length>` чи `<percentage>`. Використовується для встановлення додаткового радіуса, щоб отримати еліптичне скруглення кутів

### Значення

<table>
  <tbody>
    <tr>
      <td><em>радіус</em></td>
      <td><img alt="Блакитний прямокутник зі світло-сірою межею. Всі 4 кути закруглені." src="all-corner.png" /></td>
      <td>
        {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}, що позначає радіус для використання в кожному куті межі. Використовується лише в синтаксисі одного значення.
      </td>
    </tr>
    <tr>
      <td><em>згори-зліва-і-знизу-справа</em></td>
      <td>
        <img alt="Блакитний прямокутник зі світло-сірою межею. 2 кути, згори зліва й внизу справа, закруглені." src="top-left-bottom-right.png" />
      </td>
      <td>
        {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}, що позначає радіус для використання у верхньому лівому й нижньому правому кутах рамок елемента. Використовується лише в синтаксисі двох значень.
      </td>
    </tr>
    <tr>
      <td><em>згори-справа-і-знизу-зліва</em></td>
      <td>
        <img alt="Блакитний прямокутник зі світло-сірою межею. 2 кути, згори справа і внизу зліва, закруглені." src="top-right-bottom-left.png" />
      </td>
      <td>
        {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}, що позначає радіус для використання у верхньому правому й нижньому лівому кутах рамок елемента. Використовується лише в синтаксисах двох і трьох значень.
      </td>
    </tr>
    <tr>
      <td><em>згори-зліва</em></td>
      <td><img alt="Блакитний прямокутник зі світло-сірою межею. Кут згори зліва закруглений." src="top-left.png" /></td>
      <td>
        {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}, що позначає радіус для використання у верхньому лівому куті рамок елемента. Використовується лише в синтаксисах трьох та чотирьох значень.
      </td>
    </tr>
    <tr>
      <td><em>згори-справа</em></td>
      <td><img alt="Блакитний прямокутник зі світло-сірою межею. Кут згори справа закруглений." src="top-right.png" /></td>
      <td>
        {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}, що позначає радіус для використання у верхньому правому куті рамок елемента. Використовується лише в синтаксисі чотирьох значень.
      </td>
    </tr>
    <tr>
      <td><em>знизу-справа</em></td>
      <td><img alt="Блакитний прямокутник зі світло-сірою межею. Кут внизу справа закруглений." src="bottom-right.png" /></td>
      <td>
        {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}, що позначає радіус для використання у нижньому правому куті рамок елемента. Використовується лише в синтаксисах трьох і чотирьох значень.
      </td>
    </tr>
    <tr>
      <td><em>знизу-зліва</em></td>
      <td><img alt="Блакитний прямокутник зі світло-сірою межею. Кут знизу зліва закруглений." src="bottom-left.png" /></td>
      <td>
        {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}, що позначає радіус для використання у нижньому лівому куті рамок елемента. Використовується лише в синтаксисі чотирьох значень.
      </td>
    </tr>
  </tbody>
</table>

- {{cssxref("&lt;length&gt;")}}
  - : Позначає розмір радіуса кола, або ж – великої й малої півосей еліпса, використовуючи значення довжини. Від'ємні значення є недійсними.
- {{cssxref("&lt;percentage&gt;")}}
  - : Позначає розмір радіуса кола, або ж – великої й малої півосей еліпса, використовуючи відсоткові значення. Відсоткові значення для горизонтальної осі стосуються ширини рамок; відсоткові значення для вертикальної осі стосуються висоти рамок. Від'ємні значення є недійсними.

Наприклад:

```css
border-radius: 1em/5em;

/* Це еквівалентно щодо: */
border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* Це еквівалентно щодо: */
border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

```html hidden
<pre id="example-1">
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
</pre>
<pre id="example-2">
  border: groove 1em red;
  border-radius: 2em;
</pre>
<pre id="example-3">
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
</pre>
<pre id="example-4">
  border: none;
  border-radius: 40px 10px;
  background: gold;
</pre>
<pre id="example-5">
  border: none;
  border-radius: 50%;
  background: burlywood;
</pre>
<pre id="example-6">
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
</pre>
<pre id="example-7">
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
</pre>
```

```css hidden
pre {
  margin: 20px;
  padding: 20px;
  width: 80%;
  height: 80px;
}

pre#example-1 {
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
}

pre#example-2 {
  border: groove 1em red;
  border-radius: 2em;
}

pre#example-3 {
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
}

pre#example-4 {
  border: none;
  border-radius: 40px 10px;
  background: gold;
}

pre#example-5 {
  border: none;
  border-radius: 50%;
  background: burlywood;
}

pre#example-6 {
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
}

pre#example-7 {
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
}
```

{{EmbedLiveSample("pryklady", "200", "1150")}}

### Живі зразки

- Зразок 1 : <https://jsfiddle.net/Tripad/qnGKj/2/>
- Зразок 2 : <https://jsfiddle.net/Tripad/qnGKj/3/>
- Зразок 3 : <https://jsfiddle.net/Tripad/qnGKj/4/>
- Зразок 4 : <https://jsfiddle.net/Tripad/qnGKj/5/>
- Зразок 5 : <https://jsfiddle.net/Tripad/qnGKj/6/>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Пов'язані з border-radius властивості CSS: {{cssxref("border-top-left-radius")}}, {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, {{cssxref("border-end-end-radius")}}
