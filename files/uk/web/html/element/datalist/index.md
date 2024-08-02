---
title: "<datalist>: Елемент HTML списку даних"
slug: Web/HTML/Element/datalist
page-type: html-element
browser-compat: html.elements.datalist
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<datalist>`** (список даних) уміщає набір елементів {{HTMLElement("option")}}, що представляють допустимі або рекомендовані варіанти, доступні для вибору в інших контрольних елементах.

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

Щоб зв'язати елемент `<datalist>` з контрольним елементом, йому задається унікальний ідентифікатор в атрибуті [`id`](/uk/docs/Web/HTML/Global_attributes/id), а потім до елемента {{HTMLElement("input")}}додається атрибут [`list`](/uk/docs/Web/HTML/Element/input#list-spysok) зі значенням того ж ідентифікатора.
Лише певні типи {{HTMLElement("input")}} підтримують таку логіку, а ще ця логіка може відрізнятися в різних браузерах.

Кожний елемент `<option>` повинен мати атрибут `value`, який є пропозицією для введення в поле. Також він може мати атрибут `label` або, якщо останнього немає, певний текстовий вміст, який браузер може відображати замість `value` (Firefox) або на додачу до `value` (Chrome і Safari – як доповняльний текст). Конкретний вміст спадного меню залежить від браузера, проте коли варіантом клацають, то вміст, що вводиться у поле контрольного елемента, завжди береться з атрибута `value`.

> **Примітка:** `<datalist>` не є заміною для {{HTMLElement("select")}}. `<datalist>`, по суті, не є полем для введення; це список пропонованих значень для пов'язаного контрольного елемента. Цей контрольний елемент все одно може прийняти будь-яке значення, що проходить валідацію, навіть якщо його нема в списку пропозицій.

## Атрибути

Цей елемент не має атрибутів, окрім [глобальних атрибутів](/uk/docs/Web/HTML/Global_attributes), спільних для всіх елементів.

## Доступність

Коли вирішено використовувати елемент `<datalist>`, слід пам'ятати про такі проблеми доступності:

- Розмір шрифту варіантів списку даних не збільшується, завжди залишаючись однаковим. Вміст автозаповнення не збільшується та не зменшується, коли решта вмісту збільшується або зменшується.
- Оскільки доступ до списку варіантів за допомогою CSS дуже обмежений або відсутній, їхня візуалізація не може бути стилізована для режиму високого контрасту.
- Частина комбінацій читачів з екрана та браузерів, включно з NVDA та Firefox, не виголошує вміст спливного списку автозаповнення.

## Приклади

### Текстові типи

Рекомендовані значення в типах {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} і {{HTMLElement("input/number", "number")}} відображаються у спадному меню, коли користувач клацає або подвійно клацає контрольний елемент.
Зазвичай права сторона контрольного елемента також містить стрілку, що вказує на наявність попередньо визначених значень.

```html
<label for="myBrowser">Оберіть браузер з цього списку:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

{{EmbedLiveSample("tekstovi-typy", 600, 40)}}

### Типи дати та часу

Типи {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} і {{HTMLElement("input/datetime-local", "datetime-local")}} можуть показати інтерфейс, що дає змогу зручно вибрати дату та час. У них також можуть бути показані наперед визначені значення, що дає користувачам змогу швидше заповнити значення контрольного елемента.

> **Примітка:** Коли тип не підтримується, замість нього використовується тип `text`, що утворює просте текстове поле. Таке поле коректно розуміє рекомендовані значення та виводить їх користувачам у спадному меню.

```html
<input type="time" list="popularHours" />
<datalist id="popularHours">
  <option value="12:00"></option>
  <option value="13:00"></option>
  <option value="14:00"></option>
</datalist>
```

{{EmbedLiveSample("typy-daty-ta-chasu", 600, 40)}}

### Діапазонний тип

Рекомендовані значення для типу {{HTMLElement("input/range", "range")}} виводяться як послідовність позначок, які користувач може легко вибрати.

```html
<label for="tick">Розмір чайових:</label>
<input type="range" list="tickmarks" min="0" max="100" id="tick" name="tick" />
<datalist id="tickmarks">
  <option value="0"></option>
  <option value="10"></option>
  <option value="20"></option>
  <option value="30"></option>
</datalist>
```

{{EmbedLiveSample("diapazonnyi-typ", 600, 70)}}

### Колірний тип

Тип {{HTMLElement("input/color", "color")}} може показати наперед визначені кольори в інтерфейсі, що надається браузером.

```html
<label for="colors">Оберіть колір (бажано відтінок червоного):</label>
<input type="color" list="redColors" id="colors" />
<datalist id="redColors">
  <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
</datalist>
```

{{EmbedLiveSample("kolirnyi-typ", 600, 70)}}

### Парольний тип

Специфікація дозволяє сполучати `<datalist>` з типом {{HTMLElement("input/password", "password")}}, але жоден браузер не підтримує це з міркувань безпеки.

```html
<label for="pwd">Уведіть пароль:</label>
<input type="password" list="randomPassword" id="pwd" />
<datalist id="randomPassword">
  <option value="5Mg[_3DnkgSu@!q#"></option>
</datalist>
```

{{EmbedLiveSample("parolnyi-typ", 600, 40)}}

## Технічний підсумок

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
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        Або
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        >, або нуль чи більше елементів {{HTMLElement("option")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Всі елементи, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/listbox_role"
          >listbox</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Жодної ролі не дозволено</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLDataListElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Елемент {{HTMLElement("input")}}, а конкретніше – його атрибут [`list`](/uk/docs/Web/HTML/Element/input#list-spysok);
- Елемент {{HTMLElement("option")}}.
