---
title: "<tr>: Елемент ряду таблиці"
slug: Web/HTML/Element/tr
page-type: html-element
browser-compat: html.elements.tr
---

{{HTMLSidebar}}

Елемент **`<tr>`** [HTML](/uk/docs/Web/HTML) визначає ряд комірок у таблиці. Комірки ряду можуть бути визначені за допомогою поєднання елементів {{HTMLElement("td")}} (комірка даних) та {{HTMLElement("th")}} (заголовкова комірка).

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

## Атрибути

Цей елемент включає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

### Застарілі атрибути

Наступні атрибути застарілі і не повинні використовуватися. Вони описані для довідки при оновленні коду та з історичної цікавості.

- `align` {{deprecated_inline}}

  - : Вирівнює горизонтально вміст комірок ряду. Можливі значення: `left` (ліворуч), `center` (по центру), `right` (праворуч), `justify` (по ширині) і `char` (за символом). Якщо підтримується, значення `char` вирівнює текст за символом, заданим атрибутом [`char`](#char), зі зсувом, визначеним атрибутом [`charoff`](#charoff). Замість цього атрибута використовуйте CSS-властивість {{cssxref("text-align")}}, оскільки він застарів.

- `bgcolor` {{deprecated_inline}}

  - : Визначає фоновий колір кожної комірки ряду. Значення – це HTML колір; або [6-значний шістнадцятковий RGB код](/uk/docs/Web/CSS/hex-color), з префіксом '`#`', або [ключове слово кольору](/uk/docs/Web/CSS/named-color). Інші значення CSS {{cssxref("color_value", "&lt;color&gt")}} не підтримуються. Використовуйте CSS-властивість {{cssxref("background-color")}} замість цього атрибута, оскільки він застарів.

- `char` {{deprecated_inline}}

  - : Вирівнює контент за символом в кожній комірці ряду. Типові значення включають крапку (`.`) при спробі вирівняти числа або грошові значення. Якщо [`align`](#align) не встановлено на `char`, цей атрибут ігнорується.

- `charoff` {{deprecated_inline}}

  - : Визначає кількість символів, на яку зсунути вміст комірки ряду від символу вирівнювання, зазначеного атрибутом [`char`](#char).

- `valign` {{deprecated_inline}}

  - : Визначає вертикальне вирівнювання кожної комірки ряду. Можливі {{Glossary("enumerated")}} значення: `baseline` (по базовій лінії), `bottom` (внизу), `middle` (по центру), і `top` (угорі). Використовуйте CSS-властивість {{cssxref("vertical-align")}} замість цього атрибута, оскільки він застарів.

## Примітки щодо використання

- Елемент `<tr>` є дійсним як дочірній елемент {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, або {{HTMLElement("tfoot")}}.
- Якщо `<tr>` розміщений безпосередньо як дочірній елемент {{HTMLElement("table")}}, то передбачається наявність батьківського `<tbody>`, і браузери автоматично додадуть `<tbody>` до розмітки.
- Імпліцитний батьківський елемент `<tbody>` підтримується лише коли `<table>` не має інших дочірніх елементів `<tbody>`, і якщо `<tr>` розміщений після будь-яких {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, та `<thead>` елементів.
- CSS псевдокласи {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, та {{cssxref(":last-of-type")}} часто корисні для вибору потрібного набору рядів і їхніх комірок даних та заголовків (елементи {{HTMLElement("td")}} та {{HTMLElement("th")}}).
- Коли `<tr>` розташований як прямий дочірній елемент `<table>`, оскільки браузер автоматично додає `<tbody>` до розмітки, CSS селектори, як-от `table > tr`, можуть працювати неочікувано або не працювати взагалі.

## Приклади

Перегляньте {{HTMLElement("table")}} як приклад таблиці, що демонструє загальні стандарти та найкращі практики.

### Базове налаштування рядів

Цей приклад демонструє таблицю з чотирма рядами та трьома стовпцями, де перший стовпець містить заголовки для комірок даних ряду.

#### HTML

Чотири елементи <tr> створюють чотири ряди таблиці. Кожен рядок містить три комірки – одну заголовкову ({{HTMLElement("th")}}) та дві комірки даних ({{HTMLElement("td")}}), що утворюють три стовпці. Атрибут [`scope`](/uk/docs/Web/HTML/Element/th#scope) у заголовкових комірках вказує до яких комірок вони відносяться, в цьому випадку – до всіх комірок даних у `ряду`.

```html
<table>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td>DELL tah</td>
  </tr>
</table>
```

#### CSS

CSS псевдоклас {{cssxref(":nth-of-type")}} обирає кожний непарний рядок і змінює його {{cssxref("background-color")}} на колір темнішого відтінку, створюючи так званий ефект "зебри". Такий змінний фон робить таблицю простішою для сприйняття та читання, особливо коли вона має багато рядів та стовпців. До того ж, заголовкові комірки ({{HTMLElement("th")}}) підсвічуються {{cssxref("background-color")}}, відокремлюючись від комірок даних ({{HTMLElement("td")}}).

```css
tr:nth-of-type(odd) {
  background-color: #eee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Результат

{{EmbedLiveSample("bazove-nalashtuvannia-riadiv", 650, 140)}}

### Заголовковий рядок

Цей приклад доповнює базову таблицю з [попереднього прикладу](#basic_row_setup), додавши першим рядом таблиці заголовковий.

#### HTML

До таблиці першим додається додатковий рядок (`<tr>`), де комірки заголовка ({{HTMLElement("th")}}) відзначають кожен стовпець.
Цей рядок розміщено всередині {{HTMLElement("thead")}}, що вказує, що це заголовок таблиці. Атрибут [`scope`](/uk/docs/Web/HTML/Element/th#scope) додається до кожної комірки заголовка (`<th>`) у цьому ряду, щоб чітко показати, що кожна комірка заголовка відповідає всім коміркам у своєму стовпці, навіть якщо комірки розташовані в {{HTMLElement("tbody")}}.

```html
<table>
  <tr>
    <th scope="col">Символ</th>
    <th scope="col">Слово</th>
    <th scope="col">Вимова</th>
  </tr>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td>DELL tah</td>
  </tr>
</table>
```

#### CSS

CSS від [попереднього прикладу](#basic_row_setup) майже не змінився, за винятком додаткового підкреслення "ряду заголовка", щоб відокремити заголовки стовпців від інших комірок.

```css
tr:nth-of-type(odd) {
  background-color: #eee;
}

tr th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Результат

{{EmbedLiveSample("zaholovkovyi-riadok", 650, 170)}}

### Сортування рядів

У {{HTMLElement("table")}} немає вбудованих методів для сортування рядів (`<tr>`). Але за допомогою {{jsxref("Array.prototype.sort()")}}, {{domxref("Node.removeChild")}}, і {{domxref("Node.appendChild")}} можна реалізувати користувацьку функцію `sort()` на JavaScript для сортування {{domxref("HTMLCollection")}} елементів `<tr>`.

#### HTML

Елемент {{HTMLElement("tbody")}} позначає основну частину таблиці і містить три ряди (`<tr>`) з даними ({{HTMLElement("td")}}), створюючи один стовпець з числами в порядку спадання.

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

#### JavaScript

У наведеному JavaScript-коді створена функція `sort()` прикріплюється до елемента {{HTMLElement("tbody")}}, щоб впорядковувати комірки таблиці за зростанням значення та відповідно оновлювати відображення.

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

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}
```

#### Результат

{{EmbedLiveSample('sortuvannia-riadiv', '650', '80')}}

### Сортування рядів при клацанні на заголовки стовпців

Цей приклад розширює базову таблицю з [попереднього прикладу](#sorting_rows), додаючи можливість інтерактивного незалежного сортування для кількох стовпців.

#### HTML

До кожного ряду (`<tr>`) в тілі таблиці ({{HTMLElement("tbody")}}) додається додаткова комірка даних ({{HTMLElement("td")}}), створюючи другий стовпець з літерами в порядку зростання. За допомогою елемента {{HTMLElement("thead")}} додається заголовок перед основною частиною таблиці, включаючи рядок заголовків з комірками заголовків ({{HTMLElement("th")}} елемент). Ці заголовкові комірки в наведеному нижче JavaScript-коді зроблено такими, щоб виконати відповідне сортування при клацанні.

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
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B</td>
    </tr>
    <tr>
      <td>1</td>
      <td>C</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

До кожного заголовка таблиці ({{HTMLElement("th")}}) у кожному {{HTMLElement("table")}} в документі ({{domxref("HTMLDocument", "document")}}) додається обробник подій клацання. Це сортує всі ряди (`<tr>`) в {{HTMLElement("tbody")}} на основі вмісту комірок даних ({{HTMLElement("td")}}), що містяться в цих рядах.

> [!NOTE]
> Це рішення передбачає, що елементи {{HTMLElement("td")}} заповнені простим текстом без вкладених елементів.

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

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}

th {
  background-color: #505050;
  color: #fff;
  cursor: pointer;
}
```

#### Результат

{{EmbedLiveSample('sortuvannia-riadiv-pry-klatsanni-na-zaholovky-stovptsiv', '650', '100')}}

> [!NOTE]
> Для доступності та зрозумілості заголовкової комірки кожного сортувального стовпця, вона повинна виглядати як кнопка сортування. Також потрібно візуально показувати, чи стовпець відсортовано у порядку зростання чи спадання, і використовувати атрибут [`aria-sort`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-sort). Для отримання додаткової інформації дивіться [приклад сортування таблиці](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) з [Посібника з авторських практик ARIA](https://www.w3.org/WAI/ARIA/apg/).

## Технічне резюме

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories"
          >Категорії контенту</a
        >
      </th>
      <td>Відсутні</td>
    </tr>
    <tr>
      <th scope="row">Дозволений контент</th>
      <td>
        Нуль або більше елементів {{HTMLElement("td")}} та/або
        {{HTMLElement("th")}};
        {{Glossary("script-supporting element", "script-supporting elements")}}
        ({{HTMLElement("script")}} та
        {{HTMLElement("template")}}) також дозволені.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегів</th>
      <td>
        Тег початку обов'язковий. Тег завершення може бути опущений, якщо
        елемент <code>&lt;tr&gt;</code> безпосередньо слідує за
        елементом <code>&lt;tr&gt;</code>, або якщо рядок є останнім елементом
        у групі таблиці ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} або {{HTMLElement("tfoot")}})
        елементів.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        {{HTMLElement("table")}} (тільки якщо таблиця не має дочірнього
        елемента {{HTMLElement("tbody")}}, і навіть тоді лише після будь-яких
        елементів {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, та
        {{HTMLElement("thead")}}); в іншому випадку батьківським елементом
        повинен бути {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} або
        {{HTMLElement("tfoot")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/row_role"
            >row</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Будь-які</td>
    </tr>
    <tr>
      <th scope="row">DOM інтерфейс</th>
      <td>{{DOMxRef("HTMLTableRowElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- [Вчити: HTML таблиці](/uk/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Інші елементи, пов'язані з таблицями
- {{cssxref("background-color")}}: CSS властивість для встановлення кольору фону кожної комірки ряду
- {{cssxref("border")}}: CSS властивість для керування межами комірок ряду
- {{cssxref("text-align")}}: CSS властивість для горизонтального вирівнювання вмісту кожної комірки ряду
- {{cssxref("vertical-align")}}: CSS властивість для вертикального вирівнювання вмісту кожної комірки ряду
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS псевдокласи для вибору бажаних комірок ряду
