---
title: "<table>: Елемент таблиці"
slug: Web/HTML/Element/table
page-type: html-element
browser-compat: html.elements.table
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<table>`** представляє табличні дані, тобто інформацію, представлену у двовимірній таблиці, що складається з рядів та колонок комірок, що містять дані.

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >Потоковий вміст</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        У такому порядку:
        <ol>
          <li>необов'язковий елемент {{HTMLElement("caption")}},</li>
          <li>нуль чи більше елементів {{HTMLElement("colgroup")}},</li>
          <li>необов'язковий елемент {{HTMLElement("thead")}},</li>
          <li>
            щось одне з наступного:
            <ul>
              <li>нуль чи більше елементів {{HTMLElement("tbody")}}</li>
              <li>нуль чи більше елементів {{HTMLElement("tr")}}</li>
            </ul>
          </li>
          <li>необов'язковий елемент {{HTMLElement("tfoot")}}</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Упущення тега</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>Усі елементи, що приймають потоковий вміст</td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/Table_Role"
            >table</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Всі</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## Атрибути

Цей елемент включає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

### Нерекомендовані атрибути

- `align` {{Deprecated_inline}}

  - : Цей [перелічуваний](/uk/docs/Glossary/Enumerated) атрибут показує, як таблиця повинна шикуватися всередині контейнерного документа. Може мати наступні значення:

    - `left`: таблиця виводиться з лівого боку документа;
    - `center`: таблиця виводиться в центрі документа;
    - `right`: таблиця виводиться з правого боку документа.

    Щоб отримати подібний до атрибута align ефект, слід задати {{cssxref("margin-left")}} і {{cssxref("margin-right")}}:

    - `left`: `margin-right: auto; margin-left: 0;`
    - `center`: `margin-right: auto; margin-left: auto;`
    - `right`: `margin-right: 0; margin-left: auto;`

- `bgcolor` {{Deprecated_inline}}

  - : Колір тла таблиці. Є [шестицифровим шістнадцятковим кодом RGB](/uk/docs/Web/CSS/hex-color) з префіксом '`#`'. Також може бути використане одне з наперед визначених [колірних ключових слів](/uk/docs/Web/CSS/named-color).

    Подібного ефекту можна досягнути за допомогою властивості CSS {{cssxref("background-color")}}.

- `border` {{Deprecated_inline}}

  - : Цей цілочисловий атрибут визначає у пікселях розмір рамки, що оточує таблицю. Якщо задано 0, то атрибут [`frame`](#frame) отримує порожнє значення.

    Подібного ефекту можна досягнути за допомогою властивості-скорочення CSS {{cssxref("border")}}.

- `cellpadding` {{Deprecated_inline}}

  - : Цей атрибут визначає проміжок між вмістом комірки та її межами, показаними чи ні. Якщо розмір cellpadding визначений у пікселях, то цей піксельний простір буде застосований до всіх чотирьох сторін вмісту комірки. Якщо розмір визначений за допомогою відсоткового значення, то вміст буде центрований, і загальний вертикальний простір (згори та внизу) представлятиме це значення. Те саме діє для загального горизонтального простору (зліва та справа).

    Подібного ефекту можна досягнути, застосувавши властивість {{cssxref("border-collapse")}} зі значенням collapse до елемента `<table>`, і властивість {{cssxref("padding")}} до елементів {{HTMLElement("td")}}.

- `cellspacing` {{Deprecated_inline}}

  - : Цей атрибут визначає розмір простору між двома комірками у відсоткових значеннях чи пікселях. Він застосовується і по горизонталі, і по вертикалі, до простору між верхом таблиці та комірками першого ряду, лівого боку таблиці та першої колонки, правого боку таблиці та останньої колонки, і низу таблиці та останнього ряду.

    Подібного ефекту можна досягнути, застосувавши властивість {{cssxref("border-spacing")}} до елемента `<table>`. `border-spacing` ніяк не діє, якщо {{cssxref("border-collapse")}} має значення collapse.

- `frame` {{Deprecated_inline}}

  - : Цей атрибут визначає, який бік рамок, що оточують таблицю, повинен бути показаний.

    Подібного ефекту можна досягнути за допомогою властивостей {{cssxref("border-style")}} і {{cssxref("border-width")}}.

- `rules` {{Deprecated_inline}}

  - : Цей атрибут визначає, де напрямні, тобто лінії, повинні з'явитися в таблиці. Може мати наступні значення:

    - `none` – жодні напрямні не будуть виведені; це усталене значення;
    - `groups` – призведе до виводу напрямних винятково між групами рядів (визначених елементами {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} і {{HTMLElement("tfoot")}}) та між групами колонок (визначеними елементами {{HTMLElement("col")}} і {{HTMLElement("colgroup")}});
    - `rows` – напрямні будуть виведені між рядами;
    - `cols` – напрямні будуть виведені між колонками;
    - `all` – напрямні будуть виведені як між рядами, так і між колонками.

    Подібного ефекту можна досягнути, застосувавши властивість {{cssxref("border")}} до відповідних елементів {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("col")}} чи {{HTMLElement("colgroup")}}.

- `summary` {{Deprecated_inline}}
  - : Цей атрибут визначає альтернативний текст, що резюмує вміст таблиці. Замість нього слід використовувати елемент {{htmlelement("caption")}}.
- `width` {{Deprecated_inline}}
  - : Цей атрибут визначає ширину таблиці. Замість нього слід використовувати властивість {{cssxref("width")}}.

> **Примітка:** Хоч жодна специфікація HTML не включає `height` як атрибут `<table>`, частина браузерів підтримують нестандартне тлумачення `height`. Значення без одиниць вимірювання задає мінімальну абсолютну висоту в пікселях. Якщо задати його як відсоткове значення, то мінімальна висота таблиці буде відносною щодо висоти батьківського контейнера.

## Приклади

### Проста таблиця

```html
<table>
  <tr>
    <td>Андрій</td>
    <td>Мельник</td>
  </tr>
  <tr>
    <td>Ганна</td>
    <td>Мельник</td>
  </tr>
</table>
```

#### Результат

{{EmbedLiveSample('prosta-tablytsia', '100%', '100')}}

### Іще простих прикладів

```html
<p>Проста таблиця з заголовком</p>
<table>
  <tr>
    <th>Ім'я</th>
    <th>Прізвище</th>
  </tr>
  <tr>
    <td>Андрій</td>
    <td>Мельник</td>
  </tr>
  <tr>
    <td>Ганна</td>
    <td>Мельник</td>
  </tr>
</table>

<p>Таблиця з thead, tfoot і tbody</p>
<table>
  <thead>
    <tr>
      <th>Вміст заголовку 1</th>
      <th>Вміст заголовку 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Тіло вмісту 1</td>
      <td>Тіло вмісту 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Вміст підвалу 1</td>
      <td>Вміст підвалу 2</td>
    </tr>
  </tfoot>
</table>

<p>Таблиця з colgroup</p>
<table>
  <colgroup span="4"></colgroup>
  <tr>
    <th>Країни</th>
    <th>Столиці</th>
    <th>Населення</th>
    <th>Мова</th>
  </tr>
  <tr>
    <td>США</td>
    <td>Вашингтон</td>
    <td>329,5 мільйона</td>
    <td>Англійська</td>
  </tr>
  <tr>
    <td>Швеція</td>
    <td>Стокгольм</td>
    <td>10,35 мільйона</td>
    <td>Шведська</td>
  </tr>
</table>

<p>Таблиця з colgroup і col</p>
<table>
  <colgroup>
    <col style="background-color: #0f0" />
    <col span="2" />
  </colgroup>
  <tr>
    <th>Лайм</th>
    <th>Лимон</th>
    <th>Помаранч</th>
  </tr>
  <tr>
    <td>Зелений</td>
    <td>Жовтий</td>
    <td>Помаранчевий</td>
  </tr>
</table>

<p>Проста таблиця з caption</p>
<table>
  <caption>
    Чудовий підпис
  </caption>
  <tr>
    <td>Чудові дані</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample('ishche-prostykh-prykladiv', '100%', '700')}}

### Сортування таблиці

#### Сортування рядів таблиці

Немає нативних методів для сортування рядів (елементів [`<tr>`](/uk/docs/Web/HTML/Element/tr)) таблиці HTML. Але за допомогою [`Array.prototype.slice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.prototype.sort()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`Node.removeChild()`](/uk/docs/Web/API/Node/removeChild) і [`Node.appendChild()`](/uk/docs/Web/API/Node/appendChild) можна реалізувати власну функцію `sort()` для сортування [`HTMLCollection`](/uk/docs/Web/API/HTMLCollection) елементів `<tr>` elements.

У прикладі нижче – саме такий приклад. Ця функція прикріплюється до елемента \<tbody>, щоб він сортував комірки таблиці в порядку зростання значення, і оновлював відповідно представлення.

##### HTML

```html
<table>
  <tbody>
    <tr>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

##### JavaScript

```js
HTMLTableSectionElement.prototype.sort = function (cb) {
  Array.from(this.rows)
    .sort(cb)
    .forEach((e) => this.appendChild(this.removeChild(e)));
};

document
  .querySelector("table")
  .tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));
```

##### Результат

{{EmbedLiveSample('sortuvannia-riadiv-tablytsi', '100%', '100')}}

#### Сортування рядів за клацанням елемента th

Наступний приклад додає обробник подій до кожного елемента `<th>` у кожному `<table>` в `document`; він сортує всі ряди `<tbody>` на основі комірок `td`, що містяться в рядах.

> **Примітка:** Це рішення засноване на припущенні, що всі елементи `<td>` заповнені простим текстом, без елементів-нащадків.

##### HTML

```html
<table>
  <thead>
    <tr>
      <th>Числа</th>
      <th>Літери</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>А</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Б</td>
    </tr>
    <tr>
      <td>1</td>
      <td>В</td>
    </tr>
  </tbody>
</table>
```

##### JavaScript

```js
const allTables = document.querySelectorAll("table");

for (const table of allTables) {
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.rows);
  const headerCells = table.tHead.rows[0].cells;

  for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
      rows.sort((tr1, tr2) => {
        const tr1Text = tr1.cells[cellIndex].textContent;
        const tr2Text = tr2.cells[cellIndex].textContent;
        return tr1Text.localeCompare(tr2Text);
      });

      tBody.append(...rows);
    });
  }
}
```

##### Результат

{{EmbedLiveSample('sortuvannia-riadiv-za-klatsanniam-elementa-th', '100%', '100')}}

### Виведення великих таблиць у малому просторі

Поширена проблема з таблицями в Інтернеті – те, що вони не працюють нативно достатньо добре на дрібних екранах, коли в них багато вмісту, і спосіб зробити їх прокрутними – неочевидний, особливо коли розмітка надходить з CMS і не можна додати обгортку.

Цей приклад пропонує один зі способів виведення таблиць у малому просторі. HTML приховано, адже він дуже великий, і в ньому немає нічого особливого. У цьому прикладі цікавіше дослідити CSS.

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> дорівнює:
      <th>2<sup>3</sup> дорівнює:
      <th>3<sup>3</sup> дорівнює:
      <th>4<sup>3</sup> дорівнює:
      <th>5<sup>3</sup> дорівнює:
      <th>6<sup>3</sup> дорівнює:
      <th>7<sup>3</sup> дорівнює:
  <tbody>
    <tr>
      <td>ряд 1: 1
      <td>ряд 1: 8
      <td>ряд 1: 27
      <td>ряд 1: 64
      <td>ряд 1: 125
      <td>ряд 1: 216
      <td>ряд 1: 343
    <tr>
      <td>ряд 2: 1
      <td>ряд 2: 8
      <td>ряд 2: 27
      <td>ряд 2: 64
      <td>ряд 2: 125
      <td>ряд 2: 216
      <td>ряд 2: 343
    <tr>
      <td>ряд 3: 1
      <td>ряд 3: 8
      <td>ряд 3: 27
      <td>ряд 3: 64
      <td>ряд 3: 125
      <td>ряд 3: 216
      <td>ряд 3: 343
    <tr>
      <td>ряд 4: 1
      <td>ряд 4: 8
      <td>ряд 4: 27
      <td>ряд 4: 64
      <td>ряд 4: 125
      <td>ряд 4: 216
      <td>ряд 4: 343
    <tr>
      <td>ряд 5: 1
      <td>ряд 5: 8
      <td>ряд 5: 27
      <td>ряд 5: 64
      <td>ряд 5: 125
      <td>ряд 5: 216
      <td>ряд 5: 343
    <tr>
      <td>ряд 6: 1
      <td>ряд 6: 8
      <td>ряд 6: 27
      <td>ряд 6: 64
      <td>ряд 6: 125
      <td>ряд 6: 216
      <td>ряд 6: 343
    <tr>
      <td>ряд 7: 1
      <td>ряд 7: 8
      <td>ряд 7: 27
      <td>ряд 7: 64
      <td>ряд 7: 125
      <td>ряд 7: 216
      <td>ряд 7: 343
    <tr>
      <td>ряд 8: 1
      <td>ряд 8: 8
      <td>ряд 8: 27
      <td>ряд 8: 64
      <td>ряд 8: 125
      <td>ряд 8: 216
      <td>ряд 8: 343
    <tr>
      <td>ряд 9: 1
      <td>ряд 9: 8
      <td>ряд 9: 27
      <td>ряд 9: 64
      <td>ряд 9: 125
      <td>ряд 9: 216
      <td>ряд 9: 343
    <tr>
      <td>ряд 10: 1
      <td>ряд 10: 8
      <td>ряд 10: 27
      <td>ряд 10: 64
      <td>ряд 10: 125
      <td>ряд 10: 216
      <td>ряд 10: 343
    <tr>
      <td>ряд 11: 1
      <td>ряд 11: 8
      <td>ряд 11: 27
      <td>ряд 11: 64
      <td>ряд 11: 125
      <td>ряд 11: 216
      <td>ряд 11: 343
    <tr>
      <td>ряд 12: 1
      <td>ряд 12: 8
      <td>ряд 12: 27
      <td>ряд 12: 64
      <td>ряд 12: 125
      <td>ряд 12: 216
      <td>ряд 12: 343
    <tr>
      <td>ряд 13: 1
      <td>ряд 13: 8
      <td>ряд 13: 27
      <td>ряд 13: 64
      <td>ряд 13: 125
      <td>ряд 13: 216
      <td>ряд 13: 343
    <tr>
      <td>ряд 14: 1
      <td>ряд 14: 8
      <td>ряд 14: 27
      <td>ряд 14: 64
      <td>ряд 14: 125
      <td>ряд 14: 216
      <td>ряд 14: 343
    <tr>
      <td>ряд 15: 1
      <td>ряд 15: 8
      <td>ряд 15: 27
      <td>ряд 15: 64
      <td>ряд 15: 125
      <td>ряд 15: 216
      <td>ряд 15: 343
    <tr>
      <td>ряд 16: 1
      <td>ряд 16: 8
      <td>ряд 16: 27
      <td>ряд 16: 64
      <td>ряд 16: 125
      <td>ряд 16: 216
      <td>ряд 16: 343
    <tr>
      <td>ряд 17: 1
      <td>ряд 17: 8
      <td>ряд 17: 27
      <td>ряд 17: 64
      <td>ряд 17: 125
      <td>ряд 17: 216
      <td>ряд 17: 343
    <tr>
      <td>ряд 18: 1
      <td>ряд 18: 8
      <td>ряд 18: 27
      <td>ряд 18: 64
      <td>ряд 18: 125
      <td>ряд 18: 216
      <td>ряд 18: 343
    <tr>
      <td>ряд 19: 1
      <td>ряд 19: 8
      <td>ряд 19: 27
      <td>ряд 19: 64
      <td>ряд 19: 125
      <td>ряд 19: 216
      <td>ряд 19: 343
    <tr>
      <td>ряд 20: 1
      <td>ряд 20: 8
      <td>ряд 20: 27
      <td>ряд 20: 64
      <td>ряд 20: 125
      <td>ряд 20: 216
      <td>ряд 20: 343
</table>
```

При розгляді цих стилів можна помітити, що властивість таблиці {{cssxref("display")}} має значення `block`. Хоч це дозволяє прокручування, таблиця втрачає частину своєї цілісності, і комірки таблиці намагаються стати якомога меншими. Щоб розв'язати цю проблему, додано {{cssxref("white-space")}} зі значенням `nowrap` на `<tbody>`. Проте цього не зроблено з `<thead>`, щоб довгі назви не змушували колонки бути ширшими, ніж насправді потрібно для виведення даних.

Щоб заголовки таблиці залишалися на сторінці при прокручуванні, додано {{cssxref("position")}} зі значенням sticky на елементах `<th>`. Зверніть увагу, що властивість **не** має {{cssxref("border-collapse")}} зі значенням `collapse`, адже тоді заголовок не міг би бути коректно відділений від решти таблиці.

```css
table,
th,
td {
  border: 1px solid;
}

table {
  width: 100%;
  max-width: 400px;
  height: 240px;
  margin: 0 auto;
  display: block;
  overflow-x: auto;
  border-spacing: 0;
}

tbody {
  white-space: nowrap;
}

th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
}

th {
  position: sticky;
  top: 0;
  background: #fff;
  vertical-align: bottom;
}

th:last-child,
td:last-child {
  border-right-width: 0;
}

tr:last-child td {
  border-bottom-width: 0;
}
```

#### Результат

{{EmbedLiveSample('vyvedennia-velykykh-tablyts-u-malomu-prostori', '100%', 240)}}

## Занепокоєння щодо доступності

### Підписи

Додання елемента {{HTMLElement("caption")}}, чиє значення ясно й влучно описує призначення таблиці, допомагає людям вирішити, чи потрібна їм решта вмісту таблиці, чи краще її пропустити.

Це допомагає людям, котрі орієнтуються з допомогою допоміжної технології, як то читача з екрана, людям з вадами зору та людям з когнітивними негараздами.

- [ВебДоки | Додавання до таблиці підпису за допомогою \<caption>](/uk/docs/Learn/HTML/Tables/Advanced#dodavannia-do-tablytsi-pidpysu-za-dopomohoiu-caption)
- [Підпис і підсумок • Таблиці • W3C WAI Підручники з вебдоступності (англ.)](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Рядні й колонкові області

Атрибут [`scope`](/uk/docs/Web/HTML/Element/th#scope) на елементах заголовків є надлишковим у простих контекстах, бо тоді область застосування виводиться автоматично. Проте частина допоміжних технологій може не справитись з коректним виведенням, тому задання області дії заголовка може покращити користувацький досвід. У складних таблицях область дії може бути задана, щоб надати необхідну інформацію про комірки, пов'язані з заголовком.

#### Приклади

```html
<table>
  <caption>
    Імена та значення кольорів
  </caption>
  <tbody>
    <tr>
      <th scope="col">Ім'я</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Синій</th>
      <td><code>#0057b8</code></td>
      <td><code>hsl(212 100% 36.1% / 1)</code></td>
      <td><code>rgb(0 87 184 / 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Жовтий</th>
      <td><code>#ffd700</code></td>
      <td><code>hsl(51 100% 50% / 1)</code></td>
      <td><code>rgb(255 215 0 / 1)</code></td>
    </tr>
  </tbody>
</table>
```

#### Результат

{{EmbedLiveSample('riadni-y-kolonkovi-oblasti')}}

Додавання `scope="col"` до елемента {{HTMLElement("th")}} допомагає в описі того, що комірка знаходиться нагорі колонки. Додавання `scope="row"` до елемента {{HTMLElement("th")}} допомагає в описі того, що колонка стоїть першою в ряду.

- [ВебДоки | Таблиці для користувачів з вадами зору](/uk/docs/Learn/HTML/Tables/Advanced#tablytsi-dlia-korystuvachiv-z-vadamy-zoru)
- [Таблиці з двома заголовками • Таблиці • W3C WAI Підручники з вебдоступності (англ.)](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Таблиці з незвичайними заголовками • Таблиці • Підручники з вебдоступності (англ.)](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Використання атрибута scope для пов'язання між собою комірок заголовків та комірок даних у таблиці з даними | W3C техніки для WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Мудровані таблиці

Допоміжним технологіям, як то читачам з екрана, може виявитись складно розбирати таблиці, котрі настільки складні, що заголовкові комірки не можуть пов'язані зі своїми даними строго по горизонталі чи по вертикалі. Ознакою такої таблиці зазвичай є присутність атрибутів [`colspan`](/uk/docs/Web/HTML/Element/td#colspan) і [`rowspan`](/uk/docs/Web/HTML/Element/td#rowspan).

В ідеалі добре було б помізкувати над кращим способом представлення вмісту таблиці, в тому числі поділом її на набір менших таблиць, пов'язаних між собою, котрим не доведеться покладатися на використання атрибутів `colspan` і `rowspan`. На додачу до допомоги людям, котрі використовують для вмісту таблиці допоміжні технології, це може бути корисним для людей з когнітивними негараздами, котрим може бути складно зрозуміти зв'язки, описані табличним компонуванням.

Якщо таблиця не може бути поділена на частини, слід використовувати атрибути [`id`](/uk/docs/Web/HTML/Global_attributes#id) і [`headers`](/uk/docs/Web/HTML/Element/td#headers), аби програмно пов'язати кожну комірку таблиці з заголовками, з котрими вона пов'язана.

- [ВебДоки | Таблиці для користувачів з вадами зору](/uk/docs/Learn/HTML/Tables/Advanced#tablytsi-dlia-korystuvachiv-z-vadamy-zoru)
- [Таблиці з багаторівневими заголовками • Таблиці • W3C WAI Підручники з вебдоступності (англ.)](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Використання атрибутів id і headers для пов'язування комірок даних з заголовковими комірками в таблицях даних | Техніки для W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Підручник з таблиць даних HTML](/uk/docs/Learn/HTML/Tables)
- Властивості CSS, що можуть бути особливо корисними для оформлення елемента `<table>`:

  - {{cssxref("width")}} – для контролю ширини таблиці;
  - {{cssxref("border")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}} – для контролю меж комірок, напрямних та рамок;
  - {{cssxref("margin")}} і {{cssxref("padding")}} – для оформлення вмісту окремих комірок;
  - {{cssxref("text-align")}} і {{cssxref("vertical-align")}} – для визначення шикування тексту й вмісту комірок.
