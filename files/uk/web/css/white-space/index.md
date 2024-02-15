---
title: white-space
slug: Web/CSS/white-space
page-type: css-property
browser-compat: css.properties.white-space
---

{{CSSRef}}

Властивість CSS **`white-space`** (пробіл) задає те, як обробляються {{Glossary("whitespace", "пробіли")}} всередині елемента.

{{EmbedInteractiveExample("pages/css/white-space.html")}}

Ця властивість задає дві речі:

- Чи [перекриваються](#perekryttia-probiliv) пробіли, і якщо перекриваються — то як.
- Чи може відбутися перенос рядка, і як він відбувається.

> **Примітка:** Аби слова розривались _посередині_, слід натомість використати {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}} або {{CSSxRef("hyphens")}}.

## Синтаксис

```css
/* Значення з одного ключового слова */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* Скорочені значення white-space-collapse і text-wrap */
white-space: collapse balance;
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

Значення властивості `white-space` може бути задано у вигляді одного ключового слова, вибраного зі списку значень нижче, або двох значень, що являють скорочення властивостей {{CSSxRef("white-space-collapse")}} і {{cssxref("text-wrap")}}.

- `normal`
  - : Кілька пробілів підряд – [перекриваються](#perekryttia-probiliv). Символи нового рядка у вихідному коді обробляються як додаткові пробіли. Рядки розриваються так, як необхідно для заповнення їхніх рамок.
- `nowrap`
  - : [Перекриває](#perekryttia-probiliv) пробіли, як із `normal`, але нейтралізує розриви шеренги символів (переведення тексту на новий рядок), присутні у вихідному коді.
- `pre`
  - : Кілька пробілів підряд – зберігаються. Шеренги символів розриваються лише на символах нового рядка з вихідного коду та елементах {{HTMLElement("br")}}.
- `pre-wrap`
  - : Кілька пробілів підряд – зберігаються. Шеренги символів розриваються лише на символах нового рядка, {{HTMLElement("br")}} і тоді, коли необхідно заповнити рядкові рамки.
- `pre-line`
  - : Кілька пробілів підряд – [перекриваються](#perekryttia-probiliv). Шеренги символів розриваються на символах нового рядка, на {{HTMLElement("br")}} і тоді, коли необхідно заповнити рядкові рамки.
- `break-spaces`

  - : Логіка, ідентична до логіки `pre-wrap`, окрім того, що:

    - Пробіли підряд завжди займають місце, в тому числі в кінці шеренги.
    - Точка розриву шеренги стоїть після кожного збереженого символу пробілу, в тому числі між двома символами пробілу.
    - Такі збережені проміжки займають простір і не повисають, чим впливають на природний розмір рамки (розміри min-content і max-content).

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
      <th><code>nowrap</code></th>
      <td>Перекриваються</td>
      <td>Перекриваються</td>
      <td>Без переходу на новий рядок</td>
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
    <tr>
      <th><code>break-spaces</code></th>
      <td>Зберігаються</td>
      <td>Зберігаються</td>
      <td>Перехід на новий рядок</td>
      <td>Перехід на новий рядок</td>
      <td>Перехід на новий рядок</td>
    </tr>
  </tbody>
</table>

> **Примітка:** Є різниця між **пробілами** та **іншими пробільними розділювачами**. Ці групи визначені наступним чином:
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
    <option>preserve nowrap</option>
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
  width: 300px;
  padding: 16px;
}

#css-code {
  background-color: rgb(220 220 220);
  font-size: 16px;
  font-family: monospace;
}

#css-code select {
  font-family: inherit;
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
  results.setAttribute("style", `white-space: ${e.target.value}`);
});
```

{{EmbedLiveSample("u-dii", "100%", 500)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Властивості, котрі визначають те, як слова розриваються _посередині_: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
