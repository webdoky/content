---
title: "<tr> – Елемент ряду таблиці"
slug: Web/HTML/Element/tr
page-type: html-element
browser-compat: html.elements.tr
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<tr>`** (table row – ряд таблиці)  визначає ряд комірок у таблиці. Комірки ряду можуть бути визначені за допомогою поєднання елементів {{HTMLElement("td")}} (комірка даних) та {{HTMLElement("th")}} (заголовкова комірка).

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

### Нерекомендовані атрибути

Наступні атрибути – нерекомендовані й не повинні використовуватися. Вони описані для довідки при оновленні коду та з історичної цікавості.

- `align` {{deprecated_inline}}

  - : Задає горизонтальне вирівнювання кожної комірки ряду. Можливі значення: `left` (ліворуч), `center` (по центру), `right` (праворуч), `justify` (по ширині) і `char` (за символом). Значення `char`, коли воно підтримується, вирівнює текст за символом, заданим атрибутом [`char`](#char), зі зсувом, визначеним атрибутом [`charoff`](#charoff). Замість цього атрибута використовуйте властивість CSS {{cssxref("text-align")}}, оскільки він нерекомендований.

- `bgcolor` {{deprecated_inline}}

  - : Визначає фоновий колір кожної комірки ряду. Значення – колір HTML; це або [6-значний шістнадцятковий код RGB](/uk/docs/Web/CSS/hex-color), з префіксом '`#`', або [ключове слово кольору](/uk/docs/Web/CSS/named-color). Інші значення CSS {{cssxref("color_value", "&lt;color&gt")}} не підтримуються. Використовуйте замість цього атрибута властивість CSS {{cssxref("background-color")}}, оскільки він нерекомендований.

- `char` {{deprecated_inline}}

  - : Задає вирівнювання за символом кожної комірки ряду. Серед типових значень – крапка (`.`); вона використовується при намаганнях вирівняти числа або грошові значення. Якщо [`align`](#align) не має значення `char`, цей атрибут ігнорується.

- `charoff` {{deprecated_inline}}

  - : Визначає кількість символів, на яку зсунути вміст комірки ряду від символу вирівнювання, заданого в атрибуті [`char`](#char).

- `valign` {{deprecated_inline}}

  - : Визначає вертикальне вирівнювання кожної комірки ряду. Можливі {{Glossary("enumerated", "перелічені")}} значення: `baseline` (по базовій лінії), `bottom` (внизу), `middle` (по центру), і `top` (угорі). Використовуйте властивість CSS {{cssxref("vertical-align")}} замість цього атрибута, оскільки він нерекомендований.

## Примітки щодо використання

- Елемент `<tr>` є валідним як дочірній елемент {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} та {{HTMLElement("tfoot")}}.
- Якщо `<tr>` розміщений безпосередньо як дочірній елемент {{HTMLElement("table")}}, то передбачається наявність батьківського `<tbody>`, і браузери автоматично додають до розмітки `<tbody>`.
- Неявний батьківський елемент `<tbody>` підтримується лише тоді, коли `<table>` не має інших дочірніх елементів `<tbody>`, і якщо `<tr>` розміщений після усіх присутніх елементів {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} і `<thead>` (якщо вони є).
- Псевдокласи CSS {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} і {{cssxref(":last-of-type")}} нерідко корисні для вибирання потрібного набору рядів, їхніх комірок даних та заголовків (елементів {{HTMLElement("td")}} та {{HTMLElement("th")}}).
- Коли `<tr>` розташований як безпосередній дочірній елемент `<table>`, то оскільки браузер автоматично додає до розмітки `<tbody>`, деякі селектори CSS, як-от `table > tr`, можуть працювати непередбачувано або не працювати взагалі.

## Приклади

Повний приклад таблиці, що демонструє загальні стандарти та найкращі практики, дивіться на сторінці {{HTMLElement("table")}}.

### Базове налаштування рядів

Цей приклад демонструє таблицю з чотирма рядами та трьома стовпцями, де перший стовпець містить заголовки для комірок даних ряду.

#### HTML

Чотири елементи <tr> утворюють чотири ряди таблиці. Кожен рядок містить три комірки: одну заголовкову ({{HTMLElement("th")}}) та дві комірки даних ({{HTMLElement("td")}}), що утворюють три стовпці. Атрибут [`scope`](/uk/docs/Web/HTML/Element/th#scope) у заголовкових комірках вказує, яких комірок вони стосуються, в цьому випадку – до всіх комірок даних у `row` (ряду).

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

Псевдоклас CSS {{cssxref(":nth-of-type")}} використовується, щоб вибрати кожний непарний рядок і змінити його {{cssxref("background-color")}} на колір темнішого відтінку, створюючи так званий "ефект зебри". Такий змінний фон робить таблицю простішою для сприйняття та читання, особливо коли вона має багато рядів та стовпців. До того ж заголовкові комірки ({{HTMLElement("th")}}) підсвічуються {{cssxref("background-color")}}, аби відрізняти їх від комірок даних ({{HTMLElement("td")}}).

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

Цей приклад доповнює базову таблицю з [попереднього прикладу](#bazove-nalashtuvannia-riadiv), додавши згори таблиці заголовковий ряд.

#### HTML

До таблиці на першій позиції додається ще один ряд (`<tr>`), у якому стовпцеві заголовкові комірки ({{HTMLElement("th")}}) забезпечують кожен стовпець заголовком.
Цей рядок розміщено всередині {{HTMLElement("thead")}}, що вказує, що це заголовок таблиці. У цьому ряду до кожної комірки заголовка (`<th>`) додається атрибут [`scope`](/uk/docs/Web/HTML/Element/th#scope), аби чітко показати, що кожна комірка заголовка відповідає всім коміркам у своєму стовпці, попри те, що комірки розташовані в {{HTMLElement("tbody")}}.

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

CSS [попереднього прикладу](#bazove-nalashtuvannia-riadiv) тут майже не змінився, за винятком додаткового виділення "заголовкового ряду", призначеного для виокремлення заголовків стовпців серед інших комірок.

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

У {{HTMLElement("table")}} немає вбудованих методів для сортування рядів (`<tr>`). Але на JavaScript за допомогою {{jsxref("Array.prototype.sort()")}}, {{domxref("Node.removeChild")}} і {{domxref("Node.appendChild")}} можна реалізувати для сортування {{domxref("HTMLCollection")}} елементів `<tr>` користувацьку функцію `sort()`.

#### HTML

Елемент {{HTMLElement("tbody")}} позначає основну частину таблиці та містить три ряди (`<tr>`) з даними ({{HTMLElement("td")}}), утворюючи один стовпець з числами в порядку спадання.

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

У наведеному коді JavaScript функція `sort()` прикріплюється до елемента {{HTMLElement("tbody")}}, щоб впорядковувати комірки таблиці за зростанням значення та відповідно оновлювати відображення.

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

Цей приклад розширює базову таблицю з [попереднього прикладу](#sortuvannia-riadiv), додаючи можливість інтерактивного незалежного сортування для кількох стовпців.

#### HTML

До кожного ряду (`<tr>`) в тілі таблиці ({{HTMLElement("tbody")}}) додається додаткова комірка даних ({{HTMLElement("td")}}), що утворює другий стовпець з літерами в порядку зростання. За допомогою елемента {{HTMLElement("thead")}} додається заголовок перед основною частиною таблиці, що містить рядок заголовків з комірками заголовків (елементами {{HTMLElement("th")}}). Ці заголовкові комірки в наведеному нижче коді JavaScript зроблено такими, щоб виконати відповідне сортування при клацанні.

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

До кожного заголовка таблиці ({{HTMLElement("th")}}) у кожному {{HTMLElement("table")}} в документі ({{domxref("HTMLDocument", "document")}}) додається обробник подій клацання. Він сортує всі ряди (`<tr>`) в {{HTMLElement("tbody")}} на основі вмісту комірок даних ({{HTMLElement("td")}}), що містяться в цих рядах.

> [!NOTE]
> Це рішення передбачає, що елементи {{HTMLElement("td")}} заповнені простим текстом, без вкладених елементів.

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
> Щоб заголовкова комірка кожного сортувального стовпця була доступною та зрозумілою, вона повинна мати вигляд кнопки сортування. Також потрібно візуально показати, чи стовпець відсортовано у порядку зростання, чи спадання, і скористатися атрибутом [`aria-sort`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-sort). Для отримання додаткової інформації дивіться [приклад сортування таблиці](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) [Посібника з авторських практик ARIA](https://www.w3.org/WAI/ARIA/apg/).

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>Відсутні</td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        Нуль або більше елементів {{HTMLElement("td")}} чи
        {{HTMLElement("th")}};
        також дозволені {{Glossary("script-supporting element", "елементи, що підтримують сценарії")}}
        ({{HTMLElement("script")}} і
        {{HTMLElement("template")}}).
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегів</th>
      <td>
        Початковий тег – обов'язковий. Кінцевий тег може бути пропущений, якщо
        елемент <code>&lt;tr&gt;</code> стоїть зразу після
        елемента <code>&lt;tr&gt;</code>, або якщо ряд є останнім елементом
        у групі табличних елементів ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} або {{HTMLElement("tfoot")}}).
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        {{HTMLElement("table")}} (тільки якщо таблиця не має дочірнього
        елемента {{HTMLElement("tbody")}}, і навіть тоді лише після всіх
        елементів {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}} і
        {{HTMLElement("thead")}}), якщо вони є; інакше – батьківським елементом
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
      <td>Всі</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{DOMxRef("HTMLTableRowElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Вивчення – Таблиці HTML](/uk/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Інші елементи, пов'язані з таблицями
- {{cssxref("background-color")}}: Властивість CSS для задання кольору фону кожної комірки ряду
- {{cssxref("border")}}: Властивість CSS для керування межами комірок ряду
- {{cssxref("text-align")}}: Властивість CSS для горизонтального вирівнювання вмісту кожної комірки ряду
- {{cssxref("vertical-align")}}: властивість CSS для вертикального вирівнювання вмісту кожної комірки ряду
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: Псевдокласи CSS для вибирання бажаних комірок ряду
