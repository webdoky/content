---
title: <thead> – Елемент заголовка таблиці
slug: Web/HTML/Element/thead
page-type: html-element
browser-compat: html.elements.thead
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<thead>`** (table head – заголовок таблиці) обгортає низку рядів таблиці (елементів {{HTMLElement("tr")}}), вказуючи на те, що ці ряди утворюють заголовок таблиці, який містить інформацію про її стовпці. Це зазвичай виражається у вигляді заголовків стовпців (елементів {{HTMLElement("th")}}).

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

### Нерекомендовані атрибути

Наступні атрибути є нерекомендованими та не повинні використовуватися. Вони задокументовані нижче для довідкових потреб при оновленні наявного коду та задля історичного інтересу.

- `align` {{deprecated_inline}}

  - : Задає горизонтальне вирівнювання кожної комірки-заголовка. Можливі значення {{Glossary("enumerated", "перелічені")}}: `left`, `center`, `right`, `justify` і `char`. Значення `char`, коли підтримується, вирівнює текстовий вміст за символом, визначеним в атрибуті [`char`](#char), і з відступом, визначеним атрибутом [`charoff`](#charoff). Натомість слід використовувати властивість CSS {{cssxref("text-align")}}, адже цей атрибут – нерекомендований.

- `bgcolor` {{deprecated_inline}}

  - : Визначає колір фону кожної комірки-заголовка. Значенням є колір HTML; або [шестицифровий шістнадцятковий код RGB](/uk/docs/Web/CSS/hex-color), перед яким стоїть `#`, або [ключове слово кольору](/uk/docs/Web/CSS/named-color). Інші значення CSS {{cssxref("color_value", "&lt;color&gt")}} не підтримуються. Натомість слід використовувати властивість CSS {{cssxref("background-color")}}, оскільки цей атрибут є нерекомендованим.

- `char` {{deprecated_inline}}

  - : Нічого не робить. Спершу планувався для задання вирівнювання вмісту за символом кожної комірки-заголовка. Якщо [`align`](#align) не задано з `char`, то цей атрибут ігнорується.

- `charoff` {{deprecated_inline}}

  - : Нічого не робить. Спершу планувався для задання кількості символів, на які робиться відступ вмісту комірки-заголовка від символу вирівнювання, заданого атрибутом [`char`](#char).

- `valign` {{deprecated_inline}}

  - : Задає вертикальне вирівнювання кожної комірки-заголовка. Можливі значення {{Glossary("enumerated", "перелічені")}}: `baseline`, `bottom`, `middle` і `top`. Натомість слід використовувати властивість CSS {{cssxref("vertical-align")}}, оскільки цей атрибут є нерекомендованим.

## Примітки щодо використання

- `<thead>` розміщується після всіх елементів {{HTMLElement("caption")}} і {{HTMLElement("colgroup")}}, але перед усіма {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} і {{HTMLElement("tr")}}.
- Вкупі зі спорідненими елементами {{HTMLElement("tbody")}} і {{HTMLElement("tfoot")}} елемент `<tbody>` надає корисну {{Glossary("semantics", "семантичну")}} інформацію і може використовуватися при відображенні як на екрані, так і на друку. Задання таких груп вмісту таблиці також надає цінну контекстну інформацію для допоміжних технологій, серед яких читачі з екрана та пошукові системи.
- Коли друкується документ, у разі багатосторінкової таблиці, то заголовок таблиці зазвичай задає інформацію, що залишається однаковою на кожній сторінці.

## Приклади

Дивіться повний приклад таблиці на сторінці {{HTMLElement("table")}}, де викладені загальні стандарти та найкращі практики.

### Базова структура заголовка

Цей приклад демонструє таблицю, розділену на розділ заголовка з заголовками стовпців та розділ тіла з основними даними таблиці.

#### HTML

Елементи `<thead>` і {{HTMLElement("tbody")}} використовуються для структурування рядів таблиці на {{Glossary("semantics", "семантичні")}} розділи. Елемент `<thead>` представляє заголовок таблиці, який містить ряд ({{HTMLElement("tr")}}) комірок заголовків стовпців ({{HTMLElement("th")}}).

```html
<table>
  <thead>
    <tr>
      <th>ID студента</th>
      <th>Ім'я</th>
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
```

#### CSS

Трохи базового CSS вжито для стилізації та виділення заголовка таблиці, щоб заголовки стовпців виділялися серед даних у тілі таблиці.

```css
thead {
  border-bottom: 2px solid rgb(160 160 160);
  text-align: center;
  background-color: #2c5e77;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
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

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Результат

{{EmbedLiveSample("bazova-struktura-zaholovka", 650, 140)}}

### Кілька рядів заголовка

Цей приклад демонструє розділ заголовка таблиці з двома рядами.

#### HTML

У цьому прикладі розмітка таблиці з [базового прикладу](#bazova-struktura-zaholovku) розширена наявністю двох рядів таблиці ({{HTMLElement("tr")}}) в елементі `<thead>`, що утворює багаторядний заголовок таблиці. Додано додатковий стовпець, що розділяє імена студентів на ім'я та прізвище.

```html
<table>
  <thead>
    <tr>
      <th>ID студента</th>
      <th>Студент</th>
      <th>Спеціальність</th>
      <th>Кредити</th>
    </tr>
    <tr>
      <th>Прізвище</th>
      <th>Ім'я</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Коваленко</td>
      <td>Марія</td>
      <td>Інформаційні технології</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Шевченко</td>
      <td>Віктор</td>
      <td>Українська філологія</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Петренко</td>
      <td>Олександра</td>
      <td>Прикладна фізика</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### Розтягнення комірок

Аби пов'язати та вишикувати комірки-заголовки щодо відповідних стовпців і рядів, на елементах {{HTMLElement("th")}} використовуються атрибути [`colspan`](/uk/docs/Web/HTML/Element/th#colspan) і [`rowspan`](/uk/docs/Web/HTML/Element/th#rowspan). Значення, задані в цих атрибутах, задають те, на скільки комірок простягається кожна комірка-заголовок ({{HTMLElement("th")}}). Через те, як задано ці атрибути, дві комірки-заголовки другого ряду вишикувано щодо стовпців, заголовками яких вони є. Кожна з них простягається на один ряд і один стовпець, оскільки усталені значення і атрибута [`colspan`](/uk/docs/Web/HTML/Element/th#colspan), і [`rowspan`](/uk/docs/Web/HTML/Element/th#rowspan) – `1`.

Розтягнення стовпця та ряду, продемонстроване цим прикладом, показано на наступній ілюстрації:

![Ілюстрація, що демонструє розтягнення стовпців і рядів: комірки 1, 3 і 4 кожна простягається на один стовпець і два ряди; комірка 2 простягається на два стовпці та один ряд; комірки 5 і 6 кожна простягаються на один ряд і один стовпець, вписуючись у доступні комірки, тобто другий і третій стовпці в другому ряді](column-row-span.png)

#### CSS

CSS не змінився порівняно з [попереднім прикладом](#bazova-struktura-zaholovku).

```css hidden
thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: #fff;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

tbody {
  background-color: #e4f0f5;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Результати

{{EmbedLiveSample("kilka-riadiv-zaholovku", 650, 180)}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>Немає.</td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>Нуль або більше елементів {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>
        Початковий тег – обов'язковий. Кінцевий тег може бути пропущений, якщо після
        елемента <code>&lt;thead&gt;</code> зразу стоїть елемент
        {{HTMLElement("tbody")}} або {{HTMLElement("tfoot")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Елемент {{HTMLElement("table")}}. <code>&lt;thead&gt;</code> повинен стояти після усіх елементів {{HTMLElement("caption")}} і
        {{HTMLElement("colgroup")}}, якщо вони є, навіть коли елемент <code>&lt;thead&gt;</code> визначено неявно, але до всіх елементів {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} і {{HTMLElement("tr")}}.
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}} – інші елементи, пов'язані з таблицями
- {{cssxref("background-color")}} – властивість CSS для задання кольору фону кожної комірки-заголовка
- {{cssxref("border")}} – властивість CSS для контролю меж комірок-заголовків
- {{cssxref("text-align")}} – властивість CSS для горизонтального вирівнювання вмісту кожної комірки-заголовка
- {{cssxref("vertical-align")}} – властивість CSS для вертикального вирівнювання вмісту кожної комірки-заголовка
