---
title: <tbody> – елемент тіла таблиці
slug: Web/HTML/Element/tbody
page-type: html-element
browser-compat: html.elements.tbody
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<tbody>`** (table body – тіло таблиці) обгортає низку рядів таблиці (елементи {{HTMLElement("tr")}}), вказуючи, що вони утворюють тіло (основні дані) таблиці.

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

### Нерекомендовані атрибути

Наступні атрибути є нерекомендованими та не повинні використовуватися. Вони задокументовані нижче для довідкових потреб при оновленні наявного коду та задля історичного інтересу.

- `align` {{deprecated_inline}}

  - : Задає горизонтальне вирівнювання кожної комірки тіла.. Можливі значення {{Glossary("enumerated", "перелічені")}}: `left`, `center`, `right`, `justify` і `char`. Значення `char`, коли підтримується, вирівнює текстовий вміст за символом, визначеним в атрибуті [`char`](#char), і з відступом, визначеним атрибутом [`charoff`](#charoff). Натомість слід використовувати властивість CSS {{cssxref("text-align")}}, адже цей атрибут – нерекомендований.

- `bgcolor` {{deprecated_inline}}

  - : Визначає колір фону кожної комірки тіла. Значенням є колір HTML; або [шестицифровий шістнадцятковий код RGB](/uk/docs/Web/CSS/hex-color), перед яким стоїть `#`, або [ключове слово кольору](/uk/docs/Web/CSS/named-color). Інші значення CSS {{cssxref("color_value", "&lt;color&gt")}} не підтримуються. Натомість слід використовувати властивість CSS {{cssxref("background-color")}}, оскільки цей атрибут є нерекомендованим.

- `char` {{deprecated_inline}}

  - : Задає вирівнювання вмісту до символу кожної комірки тіла. Серед типових значень – крапка (`.`), коли потрібно вирівняти числа або грошові значення. Якщо [`align`](#align) задано з `char`, цей атрибут ігнорується.

- `charoff` {{deprecated_inline}}

  - : Задає кількість символів для відступу вмісту комірки тіла від символу вирівнювання, вказаного атрибутом [`char`](#char).

- `valign` {{deprecated_inline}}

  - : Задає вертикальне вирівнювання кожної комірки тіла. Можливі значення {{Glossary("enumerated", "перелічені")}}: `baseline`, `bottom`, `middle` і `top`. Натомість слід використовувати властивість CSS {{cssxref("vertical-align")}}, оскільки цей атрибут є нерекомендованим.

## Примітки щодо використання

- `<tbody>` розміщається після всіх елементів {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}} і {{HTMLElement("thead")}}.
- Якщо елементи {{HTMLElement("tr")}} задані як безпосередні нащадки {{HTMLElement("table")}} (дивіться опис того, коли це валідно, в розділі "пропуск тега" в [технічному підсумку](#technichnyi-pidsumok)), то розмітка, яку генерує браузер, буде містити елемент `<tbody>`, який їх обгортає. В результаті селектори CSS виду `table > tr` не будуть вибирати такі елементи. Дивіться також приклад [Незадання тіла](#nezadannia-tila).
- Дозволено використовувати в одній таблиці більш ніж один `<tbody>`, якщо всі вони стоять підряд. Це дає змогу розділяти ряди (елементи {{HTMLElement("tr")}}) у великих таблицях на розділи, кожен з яких може бути відформатований окремо, якщо так хочеться. Якщо не поставити такі елементи підряд, то браузери виправлять цю помилку розробника, щоб елементи {{HTMLElement("thead")}} і {{HTMLElement("tfoot")}}, якщо є, візуалізувалися як перший і останній елементи таблиці відповідно.
- Вкупі зі спорідненими елементами {{HTMLElement("thead")}} і {{HTMLElement("tfoot")}} елемент `<tbody>` надає корисну {{Glossary("semantics", "семантичну")}} інформацію і може використовуватися при відображенні як на екрані, так і на друку. Задання таких груп вмісту таблиці також надає цінну контекстну інформацію для допоміжних технологій, серед яких читачі з екрана та пошукові системи.
- Коли друкується документ, у разі багатосторінкової таблиці, то елементи {{HTMLElement("thead")}} і {{htmlelement("tfoot")}} зазвичай вказують інформацію, яка залишається такою ж або дуже схожою на кожній сторінці, тоді як вміст елементу `<tbody>` зазвичай буде відрізнятися на різних сторінках.
- Коли таблиця подається в екранному контексті (наприклад, вікні), розміру якого не вистачає для відображення всієї таблиці, агент користувача може дозволити користувачеві прокручувати вміст блоків {{HTMLElement("thead")}}, `<tbody>`, {{htmlelement("tfoot")}} і {{HTMLElement("caption")}} окремо один від одного для однієї й тієї ж батьківської {{htmlelement("table", "таблиці")}}.

## Приклади

Дивіться повний приклад таблиці на сторінці {{HTMLElement("table")}}, де викладені загальні стандарти та найкращі практики.

### Незадання тіла

Цей приклад демонструє, що браузер автоматично загортає елементи {{HTMLElement("tr")}} в елемент `<tbody>`, якщо рядки не вкладені в елемент групування таблиці (`<tbody>`, `<tfoot>` або `<thead>`) і є, як у цьому прикладі, безпосередніми нащадками елемента {{HTMLElement("table")}}.

#### HTML

Тут дуже базова таблиця з кількома рядами таблиці (елементами {{HTMLElement("tr")}}), що містять дані (елементи {{HTMLElement("td")}}) про студентів.

```html
<table>
  <tr>
    <td>3741255</td>
    <td>Коваленко Марія</td>
    <td>Інформаційні технології</td>
    <td>240</td>
  </tr>
  <tr>
    <td>3971244</td>
    <td>Шевченко Віктор</td>
    <td>Українська філологія</td>
    <td>220</td>
  </tr>
  <tr>
    <td>4100332</td>
    <td>Петренко Олександра</td>
    <td>Прикладна фізика</td>
    <td>260</td>
  </tr>
</table>
```

#### CSS

Зверніть увагу на CSS у цьому прикладі, в якому для елемента `<tbody>` задано {{cssxref("background-color")}}, а також використано `tbody` як частину додаткового {{Glossary("css_selector", "селектора CSS")}}. Інший варіант: можна скористатися {{Glossary("developer_tools", "інструментами розробника в браузері")}}, щоб перевірити наявність елемента `<tbody>` у {{Glossary("dom", "DOM")}}.

```css
tbody {
  background-color: #e4f0f5;
}

tbody > tr > td:last-of-type {
  width: 60px;
  text-align: center;
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

td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Результат

{{EmbedLiveSample("nezadannia-tila", 650, 100)}}

### Базова структура тіла

Цей приклад розширює та покращує базову таблицю з [попереднього прикладу](#nezadannia-tila).

#### HTML

We introduce a table head ({{HTMLElement("thead")}} element) and explicitly use a `<tbody>` element to structure the table into {{Glossary("semantics", "semantic")}} sections. The table head contains the column headers ({{HTMLElement("th")}} elements). The `<tbody>` element represents the body section of the table, which contains a number of rows ({{HTMLElement("tr")}} elements) with the table's main data, which is the data of each student.

The use of such table content groups and {{Glossary("semantics", "semantic")}} markup is not only useful for visual presentation (via CSS styling) and contextual information for assistive technologies; moreover, the explicit use of the `<tbody>` element helps the browser to create the intended table structure, avoiding unwanted results.

<table>
 <thead>
   <tr>
     <th>ID студента</th>
     <th>Прізвище, ім'я</th>
     <th>Спеціальність</th>
     <th>Кредити</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>3741255</td>
     <td>Коваленко Марія</td>
     <td>Інформаційні технології</td>
     <td>240</td>
   </tr>
   <tr>
     <td>3971244</td>
     <td>Шевченко Віктор</td>
     <td>Українська філологія</td>
     <td>220</td>
   </tr>
   <tr>
     <td>4100332</td>
     <td>Петренко Олександра</td>
     <td>Прикладна фізика</td>
     <td>260</td>
   </tr>
 </tbody>
</table>

#### CSS

CSS майже такий самий, як у [попередньому прикладі](#nezadannia-tila), за винятком додаткового стилю для виділення заголовка таблиці, щоб заголовки стовпців виділялися серед даних тіла таблиці. Як і в [прикладі вище](#nezadannia-tila), використовується [селектор типу](/uk/docs/Web/CSS/Type_selectors) `tbody`, щоб стилізувати комірки тіла.

```css
tbody {
  background-color: #e4f0f5;
}

tbody > tr > td:last-of-type {
  text-align: center;
}

thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: #fff;
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

{{EmbedLiveSample("bazova-struktura-tila", 650, 140)}}

### Кілька тіл

Цей приклад розширює та ще більше покращує таблицю з [прикладу вище](#basic_body_structure), вводячи кілька розділів тіла.

Використання кількох елементів `<tbody>` дає змогу створювати групування рядів у таблиці. Кожне тіло таблиці може мати власний ряд-заголовок або кілька таких рядів; проте _в таблиці може бути лише один елемент {{HTMLElement("thead")}}_! У зв'язку з цим, для створення заголовків у кожному `<tbody>` можна використовувати {{HTMLElement("tr")}} з елементами {{HTMLElement("th")}}.

#### HTML

Засновуючи на таблиці в [попередньому базовому прикладі](#bazova-struktura-tila), додано більше студентів і, замість того, щоб перераховувати спеціальність кожного студента в кожному рядку, студенти групуються за спеціальністю. Зверніть увагу, що кожна спеціальність обгорнута власним блоком `<tbody>`, де перший ряд (елемент {{HTMLElement("tr")}}) служить за заголовок блоку, виводячи назву спеціальності в елементі {{HTMLElement("th")}}, який використовує атрибут [`colspan`](/uk/docs/Web/HTML/Element/th#colspan), щоб охопити всі три стовпці таблиці. Кожен з інших рядів у кожному тілі таблиці представляє одного студента.

```html
<table>
  <thead>
    <tr>
      <th>ID студента</th>
      <th>Прізвище, ім'я</th>
      <th>Кредити</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3">Інформаційні технології</th>
    </tr>
    <tr>
      <td>3741255</td>
      <td>Коваленко Марія</td>
      <td>240</td>
    </tr>
    <tr>
      <td>4077830</td>
      <td>Петрук Богдан</td>
      <td>200</td>
    </tr>
    <tr>
      <td>5151701</td>
      <td>Кравчук Ярослав</td>
      <td>230</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="3">Українська філологія</th>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Шевченко Віктор</td>
      <td>220</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="3">Прикладна фізика</th>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Петренко Олександра</td>
      <td>260</td>
    </tr>
    <tr>
      <td>8892377</td>
      <td>Токаренко Галина</td>
      <td>240</td>
    </tr>
  </tbody>
</table>
```

#### CSS

CSS в більшості не змінився. Проте для комірок-заголовків, розміщених безпосередньо в елементі `<tbody>` (на відміну від тих, що знаходяться в {{HTMLElement("thead")}}), додано трохи тонший стиль. Це використовується для заголовків, що позначають відповідну спеціальність кожного розділу таблиці.

```css
tbody > tr > th {
  border-top: 2px solid rgb(160 160 160);
  border-bottom: 1px solid rgb(140 140 140);
  background-color: #e4f0f5;
  font-weight: normal;
}

tbody {
  background-color: whitesmoke;
}

thead {
  background-color: #2c5e77;
  color: #fff;
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
  padding: 6px 8px;
  text-align: left;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Результат

{{EmbedLiveSample("kilka-til", 650, 300)}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>Жодних.</td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>Нуль або більше елементів {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>
        Початковий тег елемента <code>&lt;tbody&gt;</code> можна пропустити, якщо перше, що є всередині елемента <code>&lt;tbody&gt;</code>, – це елемент {{HTMLElement("tr")}}, і якщо перед цим елементом не стоїть елемент <code>&lt;tbody&gt;</code>, {{HTMLElement("thead")}} або {{HTMLElement("tfoot")}}, чий кінцевий тег було пропущено. (Не можна пропустити, якщо елемент порожній.)
        Кінцевий тег елемента <code>&lt;tbody&gt;</code> можна пропустити, якщо після елемента <code>&lt;tbody&gt;</code> зразу стоїть елемент <code>&lt;tbody&gt;</code> або {{HTMLElement("tfoot")}}, або якщо в батьківському елементі далі немає вмісту.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Всередині обов'язкового батьківського елемента {{HTMLElement("table")}}
        елемент <code>&lt;tbody&gt;</code> можна додати після всіх
        елементів {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}
        і {{HTMLElement("thead")}}, якщо такі є.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/rowgroup_role"
            >rowgroup</a
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
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Навчання – Основи таблиць HTML](/uk/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}} – інші елементи, що стосуються таблиць
- {{cssxref("background-color")}} – властивість CSS для задання кольору кожної комірки тіла
- {{cssxref("border")}} – властивість CSS для керування межами комірок тіла
- {{cssxref("text-align")}} – властивість CSS для горизонтального вирівнювання вмісту кожної комірки тіла
- {{cssxref("vertical-align")}} – властивість CSS для вертикального вирівнювання вмісту кожної комірки тіла
