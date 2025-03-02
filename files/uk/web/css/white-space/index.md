---
title: white-space
slug: Web/CSS/white-space
page-type: css-property
browser-compat: css.properties.white-space
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`white-space`** (пробіл) задає те, як обробляються {{Glossary("whitespace", "пробіли")}} всередині елемента.

{{EmbedInteractiveExample("pages/css/white-space.html")}}

Ця властивість задає дві речі:

- Чи [перекриваються](#perekryttia-probiliv) пробіли, і якщо перекриваються — то як.
- Чи може відбутися перенос рядка, і як він відбувається.

> [!NOTE]
> Аби слова розривались _посередині_, слід натомість використати {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}} або {{CSSxRef("hyphens")}}.

## Синтаксис

```css
/* Значення з одного ключового слова */
white-space: normal;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* Скорочені значення white-space-collapse і text-wrap-mode */
white-space: wrap;
white-space: collapse;
white-space: preserve nowrap;

/* Глобальні значення */
white-space: inherit;
white-space: initial;
white-space: revert;
white-space: revert-layer;
white-space: unset;
```

Властивість `white-space` задається у вигляді єдиного ключового слова, обраного зі списку значень нижче.

### Значення

Значення властивості `white-space` може бути задано у вигляді одного ключового слова, вибраного зі списку значень нижче, або двох значень, що являють скорочення властивостей {{CSSxRef("white-space-collapse")}} і {{cssxref("text-wrap-mode")}}.

- `normal`
  - : Кілька пробілів підряд – [перекриваються](#perekryttia-probiliv). Символи нового рядка у вихідному коді обробляються так само, як всі інші пробільні символи. Рядки розриваються так, як необхідно для заповнення їхніх рамок.
- `pre`
  - : Кілька пробілів підряд – зберігаються. Шеренги символів розриваються лише на символах нового рядка з вихідного коду та елементах {{HTMLElement("br")}}.
- `pre-wrap`
  - : Кілька пробілів підряд – зберігаються. Шеренги символів розриваються лише на символах нового рядка, {{HTMLElement("br")}} і тоді, коли необхідно заповнити рядкові рамки.
- `pre-line`
  - : Кілька пробілів підряд – [перекриваються](#perekryttia-probiliv). Шеренги символів розриваються на символах нового рядка, на {{HTMLElement("br")}} і тоді, коли необхідно заповнити рядкові рамки.

Наступна таблиця підсумовує логіку різних значень `white-space` – ключових слів:

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>Символи нового рядка</th>
      <th>Пробіли й табуляції</th>
      <th>Переходи на новий рядок</th>
      <th>Пробіли-термінатори</th>
      <th>Пробіли-термінатори інші пробіли-відділювачі</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>Перекриваються</td>
      <td>Перекриваються</td>
      <td>Перехід на новий рядок</td>
      <td>Прибираються</td>
      <td>Повисають</td>
    </tr>
    <tr>
      <th><code>pre</code></th>
      <td>Зберігаються</td>
      <td>Зберігаються</td>
      <td>Не працюють</td>
      <td>Зберігаються</td>
      <td>Без переходу на новий рядок</td>
    </tr>
    <tr>
      <th><code>pre-wrap</code></th>
      <td>Зберігаються</td>
      <td>Зберігаються</td>
      <td>Перехід на новий рядок</td>
      <td>Повисають</td>
      <td>Повисають</td>
    </tr>
    <tr>
      <th><code>pre-line</code></th>
      <td>Зберігаються</td>
      <td>Перекриваються</td>
      <td>Перехід на новий рядок</td>
      <td>Прибираються</td>
      <td>Повисають</td>
    </tr>
  </tbody>
</table>

Табуляція усталено відповідає 8 пробілам, але може бути налаштована за допомогою властивості [`tab-size`](/uk/docs/Web/CSS/tab-size). У разі значень `normal`, `nowrap` і `pre-line` кожна табуляція перетворюється на символ пробілу (U+0020).

> [!NOTE]
> Є різниця між **пробілами** та **іншими пробільними розділювачами**. Ці групи визначені наступним чином:
>
> - пробіли
>   - : Пробіли (U+0020), табуляції (U+0009) та сегментні розриви (як то символи нового рядка).
> - інші пробільні розділювачі
>   - : Вся решта пробільних розділювачів, визначених в Unicode, окрім зазначених вище як пробіли.
>
> Там, де вказано, що пробіл _повисає_, таке висіння може вплинути на розмір рамки при визначенні її природних розмірів.

## Перекриття пробілів

Сторінка властивості {{cssxref("white-space-collapse")}} пояснює [браузерний алгоритм перекриття пробілів](/uk/docs/Web/CSS/white-space-collapse#perekryttia-probiliv).

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{CSSSyntax}}

## Приклади

### Базовий приклад

```css
code {
  white-space: pre;
}
```

### Розриви рядка всередині елементів \<pre>

```css
pre {
  white-space: pre-wrap;
}
```

### У дії

```html hidden
<div id="css-code" class="box">
  p { white-space:
  <select>
    <option>normal</option>
    <option>nowrap</option>
    <option>pre</option>
    <option>pre-wrap</option>
    <option>pre-line</option>
    <option>break-spaces</option>
  </select>
  }
</div>
<div id="results" class="box">
  <p>
    Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись
    насолоди і вихваляти страждання, я розкрию перед вами всю картину і
    роз'ясню, що саме говорив цей чоловік, який відкрив істину, якого я б назвав
    зодчим щасливого життя. Дійсно, ніхто не відкидає, не зневажає, не уникає
    насолод тільки через те, що це насолоди, але лише через те, що тих, хто не
    вміє розумно вдаватися насолоді, осягають великі страждання.
  </p>
</div>
```

```css hidden
.box {
  width: 350px;
  padding: 16px;
}

#css-code {
  background-color: rgb(220 220 220);
  font-size: 16px;
  font-family: monospace;
}

#css-code select {
  font-family: inherit;
  width: 100px;
}

#results {
  background-color: rgb(230 230 230);
  overflow-x: scroll;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
const select = document.querySelector("#css-code select");
const results = document.querySelector("#results p");
select.addEventListener("change", (e) => {
  results.style.setProperty("white-space", e.target.value);
});
```

{{EmbedLiveSample("u-dii", "100%", 450)}}

### Контроль перенесення в таблицях

#### HTML

```html
<table>
  <tr>
    <td></td>
    <td>Дуже довгий вміст, що розривається</td>
    <td class="nw">Дуже довгий вміст, що не розривається</td>
  </tr>
  <tr>
    <td class="nw">white-space:</td>
    <td>normal</td>
    <td>nowrap</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
  text-align: center;
}
.nw {
  white-space: nowrap;
}
```

#### Результат

{{EmbedLiveSample('kontrol-perenesennia-v-tablytsiakh', "100%", "100%")}}

### Кілька ліній у елементі SVG text

Властивість CSS `white-space` може бути використана для створення кількох рядків у елементі {{SVGElement("text")}}, який усталено не має перенесення тексту.

#### HTML

Текст всередині елемента `<text>` потрібно розбити на кілька рядків, щоб були виявлені символи нового рядка. Після першого рядка решта не повинні мати пробілів.

```html-nolint
<svg viewBox="0 0 320 150">
  <text y="20" x="10">Це абзац українською мовою,
який розбитий на кілька ліній
у вихідному коді, щоб його було
легше читати та редагувати
у текстовому редакторі.</text>
  </text>
</svg>
```

#### CSS

```css
text {
  white-space: break-spaces;
}
```

#### Результат

{{EmbedLiveSample("kilka-linii-u-elementi-svg-text", "100%", 350)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Властивості, котрі визначають те, як слова розриваються _посередині_: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
- [`tab-size`](/uk/docs/Web/CSS/tab-size)
