---
title: '<select>: Елемент вибору HTML'
slug: Web/HTML/Element/select
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Web
browser-compat: html.elements.select
---

{{HTMLRef}}

Елемент [HTML](/uk/docs/Web/HTML) **`<select>`** (вибір) представляє контрольний елемент, що надає меню з варіантів:

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Приклад вище показує типове використання `<select>`. Цей елемент отримує атрибут `id`, щоб сполучити його із {{htmlelement("label")}} для потреб доступності, а також атрибут `name` – щоб представити ім‘я відповідної порції даних, що подається на сервер. Кожен варіант меню визначений елементом {{htmlelement("option")}}, вкладеним у `<select>`.

Кожний елемент `<option>` повинен мати атрибут {{htmlattrxref("value", "option")}}, що містить значення, котре буде подано на сервер, коли такий варіант обраний. Якщо немає жодного атрибута `value` – усталеним значенням стає текст, поміщений в елемент. Можна включити атрибут {{htmlattrxref("selected", "option")}}, щоб елемент `<option>` став обраним усталено іще при завантаженні сторінки.

Елемент `<select>` має певні неповторні атрибути для його контролю, наприклад, `multiple` – щоб вказати, чи можуть бути обрані кілька варіантів, і `size` – щоб вказати, скільки варіантів показувати водночас. Він також приймає більшість загальних атрибутів поля введення, наприклад, `required`, `disabled`, `autofocus` тощо.

Можна вкладати елементи `<option>` всередину елементів {{htmlelement("optgroup")}}, щоб створити окремі групи варіантів усередині спадного меню.

Для різноманітніших прикладів – дивіться [Природні віджети форми: Вміст спадного меню](/uk/docs/Learn/Forms/Other_form_controls#drop-down_controls).

## Атрибути

This element includes the [global attributes](/uk/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("autocomplete")}} (автозаповнення)
  - : {{domxref("DOMString")}}, що надає підказки функціональності автозаповнення {{Glossary("user agent", "агента користувача")}}. Дивіться [HTML-атрибут autocomplete](/uk/docs/Web/HTML/Attributes/autocomplete) для отримання вичерпного списку прийнятних значень та використання автозаповнення.
- {{htmlattrdef("autofocus")}} (самофокусування)
  - : Цей булевий атрибут дає змогу вказати, що контрольний елемент повинен отримати фокус введення після завантаження сторінки. Лише один елемент форми у документі може мати атрибут `autofocus`.
- {{htmlattrdef("disabled")}} (вимкнений)
  - : Цей булевий атрибут показує, що користувач не може взаємодіяти із контрольним елементом. Якщо цей атрибут не вказаний, то елемент успадковує значення від свого контейнера, наприклад, {{htmlelement("fieldset")}}; якщо немає контейнера з атрибутом `disabled` – контрольний елемент є ввімкненим.
- {{htmlattrdef("form")}} (форма)

  - : Елемент {{HTMLElement("form")}}, з яким буде пов‘язаний `<select>` (його _форма-власник_). Значення цього атрибута мусить дорівнювати {{htmlattrxref("id")}} елемента `<form>` у тому ж документі. (Якщо цей атрибут не встановлений, то `<select>` асоціюється з елементом `<form>`, що є його предком, якщо такий є.)

    Цей атрибут дає змогу пов‘язати елементи `<select>` із `<form>`'ами будь-де в документі, а не лише як предок `<form>` із нащадками. Таким чином можна знехтувати елементом `<form>`, що є предком.

- {{htmlattrdef("multiple")}} (багаторазовий)
  - : Цей булевий атрибут показує, що зі списку може бути обрано кілька варіантів. Якщо він не вказаний, то водночас може бути обраний лише один варіант. Коли вказаний `multiple`, більшість браузерів показуватимуть прокручуване віконце списку замість однорядкового спадного списку.
- {{htmlattrdef("name")}} (ім‘я)
  - : Цей атрибут – для вказання імені контрольного елемента.
- {{htmlattrdef("required")}} (обов‘язковий)
  - : Булевий атрибут, що показує, що варіант зі значенням непустого рядка мусить бути обраним.
- {{htmlattrdef("size")}} (розмір)

  - : Якщо контрольний елемент подається як прокручуваний спадний список (наприклад, коли вказано `multiple`), то цей атрибут представляє число рядків списку, котрі повинні бути видимі водночас. Браузери не зобов‘язані показувати елемент вибору як прокручуваний спадний список. Усталене значення – `0`.

    > **Примітка:** Згідно зі специфікацією HTML5 усталеним значенням тут повинно бути `1`; утім, на практиці виявилось, що це б ламало деякі вебсайти, і жодні інші браузери так не поводяться, тож Mozilla вирішили продовжувати `0` у Firefox.

## Примітки щодо використання

### Вибір кількох варіантів

На настільних комп‘ютерах є кілька способів обрати кілька варіантів у елементі `<select>` з атрибутом `multiple`:

Користувачі миші можуть затиснути клавішу <kbd>Ctrl</kbd>, <kbd>Command</kbd> чи <kbd>Shift</kbd> (залежно від операційної системи) та клацнути по черзі кілька варіантів, щоб обрати їх чи скасувати вибір.

> **Застереження:** Механізм вибору кількох несуміжних елементів за допомогою клавіатури, описаний нижче, схоже, наразі працює лише в Firefox.
>
> На macOS сполучення клавіш <kbd>Ctrl</kbd> + <kbd>Up</kbd> та <kbd>Ctrl</kbd> + <kbd>Down</kbd> конфліктують з усталеними сполученнями ОС для _Mission Control_ ("Контроль місії") та _Application windows_ ("Вікна застосунків"), тож їх доведеться вимкнути, щоб нижчеописаний спосіб запрацював.

Користувачі клавіатур можуть обрати кілька суміжних елементів наступним чином:

- Перевівши фокус на елемент `<select>` (наприклад, за допомогою клавіші табуляції

  <kbd>Tab</kbd>

  ).

- Обравши елемент вгорі чи внизу діапазону, котрий має бути обраний, за допомогою клавіш

  <kbd>Up</kbd> (вгору)

  та

  <kbd>Down</kbd> (вниз)

  рухаючись вгору та вниз списком варіантів.

- Утримуючи клавішу

  <kbd>Shift</kbd>

  натисненою, за допомогою клавіш

  <kbd>Up</kbd> (вгору)

  та

  <kbd>Down</kbd> (вниз)

  збільшити чи зменшити діапазон обраних елементів.

Користувачі клавіатур можуть обрати кілька несуміжних елементів наступним чином:

- Перевівши фокус на елемент `<select>` (наприклад, за допомогою клавіші табуляції

  <kbd>Tab</kbd>

  ).

- Утримуючи клавішу

  <kbd>Ctrl</kbd>

  , використовуючи клавіші

  <kbd>Up</kbd> (вгору)

  та

  <kbd>Down</kbd> (вниз)

  для переведення фокусу між варіантами вибору. Варіант вибору, що має фокус, виділений пунктирним контуром, аналогічно до посилання, що отримало фокус при навігації за допомогою клавіатури.

- Натискаючи клавішу

  <kbd>Space</kbd> (пробіл)

  для вибору чи скасування вибору варіантів, що мають фокус.

## Оформлення за допомогою CSS

Елемент `<select>` сумнозвісний своє складністю для продуктивного оформлення засобами CSS. Можна вплинути на деякі аспекти, як із будь-яким елементом – наприклад, маніпулюючи [рамковою моделлю](/uk/docs/Learn/CSS/Building_blocks/The_box_model), [використаним шрифтом](/uk/docs/Web/CSS/CSS_Fonts) тощо, а також можна використати властивість {{cssxref("appearance")}} для усунення усталеного системного зовнішнього вигляду.

Утім, ці властивості не дають надійного результату на різних браузерах, і важко робити штуки типу шикування різних типів елементів форми одного над одним у стовпці. Внутрішня структура елемента`<select>` – складна і слабо піддається контролю. Якщо необхідний повний контроль, то варто розглянути використання бібліотеки з добрими можливостями оформлення віджетів форми, або ж спробувати розгортати власне спадне меню за допомогою несемантичних елементів та JavaScript, додаючи [WAI-ARIA](/uk/docs/Learn/Accessibility/WAI-ARIA_basics) для семантики.

Для більш докладної інформації про оформлення `<select>` – дивіться:

- [Оформлення форм HTML](/uk/docs/Learn/Forms/Styling_web_forms)
- [Розширене оформлення форм HTML](/uk/docs/Learn/Forms/Advanced_form_styling)

Також дивіться приклад "Налаштування стилів select" нижче – щодо того, як можна було б оформлювати простий `<select>`.

## Приклади

### Базовий select

Наступний приклад створює дуже просте спадне меню, другий варіант котрого відразу обраний.

```html
<!-- Початково буде обрано другий варіант -->
<select name="choice">
  <option value="first">Перше значення</option>
  <option value="second" selected>Друге значення</option>
  <option value="third">Третє значення</option>
</select>
```

{{EmbedLiveSample("Basic_select", "", "100")}}

### Поглиблений огляд можливостей select

Наступний приклад – складніший, показує більше можливостей, котрі можна використати з елементом `<select>`:

```html
<label
  >Будь ласка, оберіть одну чи більше тваринок:
  <select name="pets" multiple size="4">
    <optgroup label="Чотирилапі тваринки">
      <option value="dog">Пес</option>
      <option value="cat">Кіт</option>
      <option value="hamster" disabled>Хом‘як</option>
    </optgroup>
    <optgroup label="Літаючі тваринки">
      <option value="parrot">Папуга</option>
      <option value="macaw">Ара</option>
      <option value="albatross">Альбатрос</option>
    </optgroup>
  </select>
</label>
```

{{EmbedLiveSample("Advanced_select_with_multiple_features", "", "100")}}

Можна помітити, що:

- Можна обрати кілька варіантів, адже включено атрибут `multiple`.
- Атрибут `size` приводить до виводу лише 4 рядків за раз; можна використати прокручування, щоб побачити усі варіанти.
- Включено елементи {{htmlelement("optgroup")}} (група варіантів) для поділу варіантів на різні групи. Це суто візуальне групування, чиє представлення по суті складається з імені групи, виділеного жирним шрифтом, та варіантів, виведених із відступом зліва.
- Варіант "Хом‘як" має атрибут `disabled`, тож не може бути обраним взагалі.

### Налаштування стилів select

Цей приклад показує, як можна використовувати CSS та JavaScript для докладного налаштування оформлення віконця `<select>`.

Цей приклад по суті

- Копіює контекст `<select>` ([`<option>-и](/uk/docs/Web/HTML/Element/option)) у батьківську обгортку та наново реалізовує стандартну очікувану поведінку за допомогою додаткових елементів HTML та JavaScript. Це включає базову логіку Tab-навігації для надання доступності користувачам клавіатури.
- Відображає деякі стандартні нативні атрибути на `data-`атрибути нових елементів для керування станом та CSS.

> **Примітка:** Не всі нативні можливості підтримуються; наведений приклад – перевірка ідеї. Він заснований на стандартному HTML, але такі самі результати можуть бути досягнуті на основі JSON-даних, власного HTML або інших рішень.

#### HTML

```html
<form>
  <fieldset>
    <legend>Стандартні контрольні елементи</legend>
    <select name="1A" id="select" autocomplete="off" required>
      <option>Морква</option>
      <option>Горох</option>
      <option>Квасоля</option>
      <option>Дихлордифенілтрихлорметилметан</option>
    </select>
  </fieldset>
  <fieldset id="custom">
    <legend>Власні контрольні елементи</legend>
    <select name="2A" id="select" autocomplete="off" required>
      <option>Морква</option>
      <option>Горох</option>
      <option>Квасоля</option>
      <option>Дихлордифенілтрихлорметилметан</option>
    </select>
  </fieldset>
</form>
```

#### CSS

```css
body {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.select:focus {
  border-color: blue;
}

html body form fieldset#custom div.select[data-multiple] div.header {
  display: none;
}

html body form fieldset#custom div.select div.header {
  content: '↓';
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0;
  position: relative;
}

html body form fieldset#custom div.select div.header::after {
  content: '↓';
  align-self: stretch;
  display: flex;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 0.5em;
}

html body form fieldset#custom div.select div.header:hover:after {
  background-color: blue;
}

.select .header select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  border-width: 0;
  width: 100%;
  flex: 1;
  display: none;
}

.select .header select optgroup {
  display: none;
}

.select select div.option {
  display: none;
}

html body form fieldset#custom div.select {
  user-select: none;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border-style: solid;
  border-width: 0;
  border-color: gray;
  width: auto;
  display: inline-block;
}

html body form fieldset#custom div.select:focus {
  border-color: blue;
}

html body form fieldset#custom div.select:hover {
  border-color: blue;
}

html body form fieldset#custom div.select[data-open] {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

html body form fieldset#custom div.select[data-open] datalist {
  display: initial;
}

html body form fieldset#custom div.select datalist {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  left: 0;
  display: none;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

html body form fieldset#custom div.select datalist div.option {
  background-color: white;
  margin-bottom: 1px;
  cursor: pointer;
  padding: 0.5em;
  border-width: 0;
}

html body form fieldset#custom div.select datalist div.option:hover {
  background-color: blue;
  color: white;
}

html body form fieldset#custom div.select datalist div.option:focus {
  background-color: blue;
  color: white;
}

html body form fieldset#custom div.select datalist div.option:checked {
  background-color: blue;
  color: white;
}

html
  body
  form
  fieldset#custom
  div.select
  div.optgroup
  div.option[data-disabled] {
  color: gray;
}

html
  body
  form
  fieldset#custom
  div.select
  div.optgroup
  div.option[data-checked] {
  background-color: blue;
  color: white;
}

html body form fieldset#custom div.select div.optgroup div.label {
  font-weight: bold;
}

html body form fieldset#custom div.select div.optgroup div.option div.label {
  font-weight: normal;
  padding: 0.25em;
}

html body form fieldset#custom div.select div.header {
  flex: 1;
  display: flex;
  width: auto;
  box-sizing: border-box;
  border-width: 1px;
  border-style: inherit;
  border-color: inherit;
  border-radius: inherit;
}

html body form fieldset#custom div.select div.header span {
  flex: 1;
  padding: 0.5em;
}
```

#### JavaScript

```js
const selects = custom.querySelectorAll('select');
for (const select of selects) {
  const div = document.createElement('div');
  const header = document.createElement('div');
  const datalist = document.createElement('datalist');
  const optgroups = select.querySelectorAll('optgroup');
  const span = document.createElement('span');
  const options = select.options;
  const parent = select.parentElement;
  const multiple = select.hasAttribute('multiple');
  const onclick = function (e) {
    const disabled = this.hasAttribute('data-disabled');
    select.value = this.dataset.value;
    span.innerText = this.dataset.label;
    if (disabled) return;
    if (multiple) {
      if (e.shiftKey) {
        const checked = this.hasAttribute('data-checked');
        if (checked) {
          this.removeAttribute('data-checked');
        } else {
          this.setAttribute('data-checked', '');
        }
      } else {
        const options = div.querySelectorAll('.option');
        for (i = 0; i < options.length; i++) {
          const option = options[i];
          option.removeAttribute('data-checked');
        }
        this.setAttribute('data-checked', '');
      }
    }
  };
  const onkeyup = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.keyCode === 13) {
      this.click();
    }
  };
  div.classList.add('select');
  header.classList.add('header');
  div.tabIndex = 1;
  select.tabIndex = -1;
  span.innerText = select.label;
  header.appendChild(span);
  for (attribute of select.attributes)
    div.dataset[attribute.name] = attribute.value;
  for (i = 0; i < options.length; i++) {
    const option = document.createElement('div');
    const label = document.createElement('div');
    const o = options[i];
    for (attribute of o.attributes)
      option.dataset[attribute.name] = attribute.value;
    option.classList.add('option');
    label.classList.add('label');
    label.innerText = o.label;
    option.dataset.value = o.value;
    option.dataset.label = o.label;
    option.onclick = onclick;
    option.onkeyup = onkeyup;
    option.tabIndex = i + 1;
    option.appendChild(label);
    datalist.appendChild(option);
  }
  div.appendChild(header);
  for (o of optgroups) {
    const optgroup = document.createElement('div');
    const label = document.createElement('div');
    const options = o.querySelectorAll('option');
    Object.assign(optgroup, o);
    optgroup.classList.add('optgroup');
    label.classList.add('label');
    label.innerText = o.label;
    optgroup.appendChild(label);
    div.appendChild(optgroup);
    for (o of options) {
      const option = document.createElement('div');
      const label = document.createElement('div');
      for (attribute of o.attributes)
        option.dataset[attribute.name] = attribute.value;
      option.classList.add('option');
      label.classList.add('label');
      label.innerText = o.label;
      option.tabIndex = i + 1;
      option.dataset.value = o.value;
      option.dataset.label = o.label;
      option.onclick = onclick;
      option.onkeyup = onkeyup;
      option.tabIndex = i + 1;
      option.appendChild(label);
      optgroup.appendChild(option);
    }
  }
  div.onclick = function (e) {
    e.preventDefault();
  };
  parent.insertBefore(div, select);
  header.appendChild(select);
  div.appendChild(datalist);
  datalist.style.top = header.offsetTop + header.offsetHeight + 'px';
  div.onclick = function (e) {
    if (multiple) {
    } else {
      const open = this.hasAttribute('data-open');
      e.stopPropagation();
      if (open) {
        this.removeAttribute('data-open');
      } else {
        this.setAttribute('data-open', '');
      }
    }
  };
  div.onkeyup = function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.click();
    }
  };
  document.addEventListener('click', function (e) {
    if (div.hasAttribute('data-open')) div.removeAttribute('data-open');
  });
  const width = Math.max(
    ...Array.from(options).map(function (e) {
      span.innerText = e.label;
      return div.offsetWidth;
    }),
  );
  console.log(width);
  div.style.width = width + 'px';
}
document.forms[0].onsubmit = function (e) {
  const data = new FormData(this);
  e.preventDefault();
  submit.innerText = JSON.stringify([...data.entries()]);
};
```

#### Результат

{{EmbedGHLiveSample("html-examples/custom-select", '100%', 300)}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/Guide/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Плинний вміст</a
        >,
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Фразований вміст</a
        >,
        <a
          href="/uk/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >Інтерактивний вміст</a
        >,
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#form_listed"
          >Списковий</a
        >,
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#form_labelable"
          >Підписуваний</a
        >,
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#form_resettable"
          >Скиданий</a
        > та
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#form_submittable"
          >подаваний</a
        >
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#form-associated_"
          >пов‘язаний з формою</a
        > елемент
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        Нуль чи більше елементів {{HTMLElement("option")}} або
        {{HTMLElement("optgroup")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Упущення тега</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені предки</th>
      <td>
        Будь-який елемент, що приймає
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >фразовий вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        Якщо <strong>немає</strong> атрибута
        <code>multiple</code> і <strong>немає</strong> атрибута
        <code>size</code> зі значенням понад 1 – {{ARIARole("combobox")}}, інакше –
        {{ARIARole("listbox")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        Якщо <strong>немає</strong> атрибута
        <code>multiple</code> і <strong>немає</strong> атрибута
        <code>size</code> зі значенням понад 1 – {{ARIARole("menu")}}, інакше –
        жодна роль не дозволена
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLSelectElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Події, що їх викидає `<select>`: {{domxref("HTMLElement/change_event", "change")}}, {{domxref("HTMLElement/input_event", "input")}}
- Елемент {{HTMLElement("option")}} (варіант)
- Елемент {{HTMLElement("optgroup")}} (група варіантів)
