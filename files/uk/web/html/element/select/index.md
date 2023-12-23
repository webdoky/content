---
title: "<select>: Елемент вибору HTML"
slug: Web/HTML/Element/select
page-type: html-element
browser-compat: html.elements.select
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<select>`** (вибір) представляє контрольний елемент, що надає меню з варіантів вибору.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Приклад вище показує типове використання `<select>`. Елемент отримує атрибут `id`, котрий дає змогу пов'язати його з елементом {{htmlelement("label")}} для потреб доступності, а також атрибут `name`, котрий представляє ім'я відповідної порції даних при поданні форми на сервер. Кожен варіант меню описується елементом {{htmlelement("option")}}, дочірнім щодо `<select>`.

Кожен елемент `<option>` повинен мати атрибут [`value`](/uk/docs/Web/HTML/Element/option#value), що містить значення, котре буде подано на сервер, якщо відповідний варіант – обраний. Якщо атрибута `value` немає, то усталеним значенням є текст всередині елемента. Щоб елемент `option` був обраним при першому завантаженні сторінки, слід вказати атрибут [`selected`](/uk/docs/Web/HTML/Element/option#selected) елемента `<option>`.

Елемент `<select>` має певні унікальні атрибути для контролю над собою, наприклад, `multiple` для задання можливості (чи неможливості) вибору кількох варіантів та `size` з кількістю варіантів, котру можна обрати водночас. Також він приймає більшість звичних атрибутів полів вводу, наприклад, `required`, `disabled`, `autofocus` тощо.

Можна вкладати елементи {{HTMLElement("option")}} в елементи {{HTMLElement("optgroup")}}, щоб створити розмежовані групи варіантів всередині спадного списку. Також можна додавати елементи {{HTMLElement("hr")}}, щоб утворювати розділювачі, що служать візуальними розривами між варіантами.

Інші приклади використання доступні за посиланням: [Нативні віджети форми: Вміст спадного списку](/uk/docs/Learn/Forms/Other_form_controls#spadni-kontrolni-elementy).

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `autocomplete` (автозаповнення)
  - : Рядок, що дає підказку функціональності автозаповнення {{Glossary("user agent", "користувацького агента")}}. Повний список значень та деталей про те, як використовувати автозаповнення, доступний за посиланням: [HTML-атрибут автозаповнення](/uk/docs/Web/HTML/Attributes/autocomplete).
- `autofocus` (автофокус)
  - : Цей булів атрибут дає змогу вказати, що контрольний елемент повинен отримати фокус введення, коли сторінка завантажилась. Лише один елемент форми в документі може мати атрибут `autofocus`.
- `disabled` (вимкнений)
  - : Цей булів атрибут показує, що користувач не може взаємодіяти з контрольним елементом. Якщо цей атрибут не вказаний, то контрольний елемент успадковує це налаштування від контейнерного елемента, наприклад, {{htmlelement("fieldset")}}; якщо немає контейнерного елемента з атрибутом `disabled`, то контрольний елемент є увімкненим.
- `form` (форма)

  - : Елемент {{HTMLElement("form")}}, з котрим елемент `<select>` пов'язаний (його _форма-власник_). Значення цього атрибута мусить відповідати значенню атрибута [`id`](/uk/docs/Web/HTML/Global_attributes#id) елемента `<form>` в тому самому документі. (Якщо цей атрибут не вказаний, то `<select>` пов'язується з елементом `<form>`, котрий є його предком, якщо такий предок є.)

    Цей атрибут дає змогу пов'язати елементи `<select>` із `<form>`'ами будь-де в документі, не поміщаючи їх у відповідний `<form>`. Також така поведінка змушує нехтувати батьківським елементом `<form>`.

- `multiple` (декілька)
  - : Цей булів атрибут показує, що зі списку можуть бути обрані кілька варіантів. Якщо він не вказаний, то лише один варіант може бути обраним водночас. Коли вказаний `multiple`, більшість браузерів замість однорядкового спадного списку показують віконце списку з прокруткою.
- `name` (ім'я)
  - : Цей атрибут використовується, щоб вказати ім'я контрольного елемента.
- `required` (обов'язковий)
  - : Булів атрибут, що показує, що повинен бути обраний варіант із непустим значенням-рядком.
- `size` (розмір)

  - : Якщо контрольний елемент поданий у вигляді віконця списку з прокруткою (наприклад, коли вказано `multiple`), цей атрибут представляє кількість рядів списку, контрі повинні бути видимі водночас. Браузери не зобов'язані показувати елемент вибору як віконце списку з прокруткою. Усталене значення – `0`.

    > **Примітка:** Згідно зі специфікацією HTML, усталеним значенням `size` має бути `1`; втім, на практиці виявилось, що це ламає певні вебсайти, і що жоден інший браузер так не робить, тому Mozilla вирішила продовжити повертати в Firefox `0` на постійній основі.

## Примітки щодо використання

### Вибір декількох варіантів

На настільних комп'ютерах доступна низка способів обрати декілька варіантів у елементі `<select>` з атрибутом `multiple`:

Користувачі миші можуть утримувати клавішу <kbd>Ctrl</kbd>, <kbd>Command</kbd> чи <kbd>Shift</kbd> (залежно від того, що має зміст для вашої операційної системи), а потім клацнути декілька варіантів, щоб обрати їх або скасувати вибір.

> **Застереження:** Механізм вибору декількох несуміжних елементів за допомогою клавіатури, описаний нижче, схоже, наразі працює лише в Firefox.
>
> На macOS комбінації клавіш <kbd>Ctrl</kbd> + <kbd>вгору</kbd> та <kbd>Ctrl</kbd> + <kbd>вниз</kbd> конфліктують з усталеними комбінаціями _контролю місії_ та _вікон застосунків_, тож ці усталені комбінації слід відключити, перш ніж описаний нижче механізм запрацює.

Користувачі клавіатури можуть обрати декілька суміжних елементів наступним чином:

- Перевести фокус на елемент `<select>` (на приклад, використовуючи

  <kbd>Tab</kbd>

  ).

- Обрати елемент нагорі чи внизу діапазону, котрий бажають обрати, використовуючи курсорні клавіші

  <kbd>вгору</kbd>

  та

  <kbd>вниз</kbd>

  , щоб рухатись вгору та вниз по списку варіантів.

- Утримуючи клавішу

  <kbd>Shift</kbd>

  , за допомогою курсорних клавіш

  <kbd>вгору</kbd>

  та

  <kbd>вниз</kbd>

  , аби збільшити чи зменшити діапазон обраних елементів.

Користувачі клавіатури можуть обрати декілька несуміжних елементів наступним чином:

- Перевести фокус на елемент `<select>` (на приклад, використовуючи

  <kbd>Tab</kbd>

  ).

- Утримуючи клавішу

  <kbd>Ctrl</kbd>

  , за допомогою курсорних клавіш

  <kbd>вгору</kbd>

  та

  <kbd>вниз</kbd>

  , змінювати "сфокусований" варіант вибору, тобто той, котрий стане обраним, якщо так вирішить користувач. "Сфокусований" варіант вибору підсвічується пунктирним контуром, – так само як сфокусоване за допомогою клавіатури посилання.

- Натискаючи клавішу

  <kbd>пробіл</kbd>

  , обрати чи скасувати вибір "сфокусованого" варіанту вибору.

## Оформлення засобами CSS

Елемент `<select>` відомий складністю ефективного оформлення засобами CSS. Можна повпливати на певні аспекти, як і в будь-якого елемента, – наприклад, оперуючи [рамковою моделлю](/uk/docs/Learn/CSS/Building_blocks/The_box_model), [використаним шрифтом](/uk/docs/Web/CSS/CSS_fonts) тощо, а також можна використати властивість {{cssxref("appearance")}}, щоб усунути усталений системний вигляд.

Втім, ці властивості не дають сталих результатах на всіх браузерах, тож важко робити речі штибу шикування різних типів елементів форми одне з одним в один стовпець. Внутрішня структура елемента `<select>` – складна, а також важка для контролю. При потребі отримати повний контроль слід розглянути варіанти використання бібліотеки з добрими можливостями з оформленнями віджетів форми та розгортання власного спадного меню за допомогою несемантичних елементів і JavaScript, а також [WAI-ARIA](/uk/docs/Learn/Accessibility/WAI-ARIA_basics) для надання семантики.

Більше інформації про оформлення `<select>`:

- [Оформлення HTML-форм](/uk/docs/Learn/Forms/Styling_web_forms)
- [Поглиблене оформлення HTML-форм](/uk/docs/Learn/Forms/Advanced_form_styling)

Також дивіться приклад "Власні стилі select" нижче: він показує, що можна спробувати зробити шляхом простого оформлення `<select>`.

## Приклади

### Простий select

Наступний приклад створює украй просте спадне меню, другий варіант котрого є усталено обраним.

```html
<!-- Спершу буде обрано друге значення -->
<select name="choice">
  <option value="first">Перше значення</option>
  <option value="second" selected>Друге значення</option>
  <option value="third">Третє значення</option>
</select>
```

#### Результат

{{EmbedLiveSample("prostyi-select", "", "100")}}

### Select з групуванням варіантів

Наступний приклад створює спадне меню з групуванням за допомогою {{HTMLElement("optgroup")}} і {{HTMLElement("hr")}}, щоб користувачу було легше зрозуміти вміст цього спадного меню.

```html
<label for="hr-select">Ваша улюблена їжа</label> <br />

<select name="foods" id="hr-select">
  <option value="">Оберіть їжу</option>
  <hr />
  <optgroup label="Фрукти">
    <option value="apple">Яблука</option>
    <option value="banana">Банани</option>
    <option value="cherry">Вишні</option>
    <option value="damson">Сливи</option>
  </optgroup>
  <hr />
  <optgroup label="Овочі">
    <option value="artichoke">Артишоки</option>
    <option value="broccoli">Броколі</option>
    <option value="cabbage">Капуста</option>
  </optgroup>
  <hr />
  <optgroup label="М'ясо">
    <option value="beef">Яловичина</option>
    <option value="chicken">Курка</option>
    <option value="pork">Свинина</option>
  </optgroup>
  <hr />
  <optgroup label="Риба">
    <option value="cod">Тріска</option>
    <option value="haddock">Пікша</option>
    <option value="salmon">Лосось</option>
    <option value="turbot">Калкан</option>
  </optgroup>
</select>
```

#### Результат

{{EmbedLiveSample("select-z-hrupuvanniam-variantiv", "", "100")}}

### Поглиблений приклад select з використанням багатьох можливостей

Наступний приклад – складніший, він показує більше можливостей, котрі можна використати з елементом `<select>`:

```html
<label
  >Будь ласка, оберіть одну чи більше тваринок:
  <select name="pets" multiple size="4">
    <optgroup label="Чотирилапі">
      <option value="dog">Пес</option>
      <option value="cat">Кіт</option>
      <option value="hamster" disabled>Хом'як</option>
    </optgroup>
    <optgroup label="Птахи">
      <option value="parrot">Папуга</option>
      <option value="macaw">Ара</option>
      <option value="albatross">Альбатрос</option>
    </optgroup>
  </select>
</label>
```

#### Результат

{{EmbedLiveSample("pohlyblenyi-pryklad-select-z-vykorystanniam-bahatokh-mozhlyvostei", "", "100")}}

Ви побачите, що

- Можна обрати декілька варіантів, адже додано атрибут `multiple`.
- Атрибут `size` приводить до того, що водночас видно лише 4 пункти; щоб побачити усі варіанти, можна використати прокручування.
- Ми додали елементи {{htmlelement("optgroup")}}, щоб поділити варіанти на різні групи. Це суто візуальне групування, чиє відображення в цілому складається із назви групи грубим шрифтом та відступу на варіантах.
- Варіант "Хом'як" має атрибут `disabled`, а тому не може бути обраний узагалі.

### Власне оформлення select

Цей приклад показує, як можна було б використати трохи CSS та JavaScript для більш детального власного оформлення рамки `<select>`.

Цей приклад по суті:

- Клонує контекст `<select>` (елементи [`<option>`](/uk/docs/Web/HTML/Element/option)) в обгортку-предка та наново реалізує стандартну очікувану поведінку за допомогою додаткових елементів HTML та JavaScript. В тому числі базову поведінку табуляції для надання доступності з клавіатури.
- Відтворює певні стандартні нативні атрибути у вигляді `data-`-атрибутів нових елементів, щоб керувати станом та CSS.

> **Примітка:** Не всі нативні можливості підтримуються, це лишень підтвердження концепції. Реалізація заснована на стандартному HTML, але таких само результатів можна досягти на основі JSON-даних, власного HTML чи інших рішень.

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
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.select:focus {
  border-color: blue;
}

html body form fieldset#custom div.select[data-multiple] div.header {
  display: none;
}

html body form fieldset#custom div.select div.header {
  content: "↓";
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0;
  position: relative;
  width: auto;
  box-sizing: border-box;
  border-width: 1px;
  border-style: inherit;
  border-color: inherit;
  border-radius: inherit;
}

html body form fieldset#custom div.select div.header::after {
  content: "↓";
  align-self: stretch;
  display: flex;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 0.5em;
}

html body form fieldset#custom div.select div.header:hover::after {
  background-color: blue;
}

.select .header select {
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

html body form fieldset#custom div.select:focus,
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

html body form fieldset#custom div.select datalist div.option:hover,
html body form fieldset#custom div.select datalist div.option:focus,
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

html body form fieldset#custom div.select div.header span {
  flex: 1;
  padding: 0.5em;
}
```

#### JavaScript

```js
const selects = custom.querySelectorAll("select");
for (const select of selects) {
  const div = document.createElement("div");
  const header = document.createElement("div");
  const datalist = document.createElement("datalist");
  const optgroups = select.querySelectorAll("optgroup");
  const span = document.createElement("span");
  const options = select.options;
  const parent = select.parentElement;
  const multiple = select.hasAttribute("multiple");
  function onclick(e) {
    const disabled = this.hasAttribute("data-disabled");
    select.value = this.dataset.value;
    span.innerText = this.dataset.label;
    if (disabled) return;
    if (multiple) {
      if (e.shiftKey) {
        const checked = this.hasAttribute("data-checked");
        if (checked) {
          this.removeAttribute("data-checked");
        } else {
          this.setAttribute("data-checked", "");
        }
      } else {
        const options = div.querySelectorAll(".option");
        for (let i = 0; i < options.length; i++) {
          const option = options[i];
          option.removeAttribute("data-checked");
        }
        this.setAttribute("data-checked", "");
      }
    }
  }

  function onkeyup(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.keyCode === 13) {
      this.click();
    }
  }

  div.classList.add("select");
  header.classList.add("header");
  div.tabIndex = 1;
  select.tabIndex = -1;
  span.innerText = select.label;
  header.appendChild(span);

  for (const attribute of select.attributes) {
    div.dataset[attribute.name] = attribute.value;
  }
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("div");
    const label = document.createElement("div");
    const o = options[i];
    for (const attribute of o.attributes) {
      option.dataset[attribute.name] = attribute.value;
    }
    option.classList.add("option");
    label.classList.add("label");
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
  for (const o of optgroups) {
    const optgroup = document.createElement("div");
    const label = document.createElement("div");
    const options = o.querySelectorAll("option");

    Object.assign(optgroup, o);
    optgroup.classList.add("optgroup");
    label.classList.add("label");
    label.innerText = o.label;
    optgroup.appendChild(label);
    div.appendChild(optgroup);
    for (const o of options) {
      const option = document.createElement("div");
      const label = document.createElement("div");

      for (const attribute of o.attributes) {
        option.dataset[attribute.name] = attribute.value;
      }
      option.classList.add("option");
      label.classList.add("label");
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

  div.onclick = (e) => {
    e.preventDefault();
  };

  parent.insertBefore(div, select);
  header.appendChild(select);
  div.appendChild(datalist);
  datalist.style.top = `${header.offsetTop + header.offsetHeight}px`;

  div.onclick = (e) => {
    if (!multiple) {
      const open = div.hasAttribute("data-open");
      e.stopPropagation();
      if (open) {
        div.removeAttribute("data-open");
      } else {
        div.setAttribute("data-open", "");
      }
    }
  };

  div.onkeyup = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      div.click();
    }
  };

  document.addEventListener("click", (e) => {
    if (div.hasAttribute("data-open")) {
      div.removeAttribute("data-open");
    }
  });

  const width = Math.max(
    ...Array.from(options).map((e) => {
      span.innerText = e.label;
      return div.offsetWidth;
    }),
  );

  console.log(width);
  div.style.width = `${width}px`;
}
document.forms[0].onsubmit = (e) => {
  const data = new FormData(this);
  e.preventDefault();
  submit.innerText = JSON.stringify([...data.entries()]);
};
```

#### Результат

{{EmbedGHLiveSample("html-examples/custom-select", '100%', 300)}}

## Занепокоєння щодо доступності

Елемент `<hr>` усередині `<select>` слід розглядати як суто декоративний, оскільки він наразі не відображається у дереві доступності, а отже – не видається допоміжним технологіям.

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
        >,
        <a
          href="/uk/docs/Web/HTML/Content_categories#interaktyvnyi-vmist"
          >інтерактивний вміст</a
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#perelicheni"
          >перелічений</a
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#pidpysni"
          >підписний</a
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#skydani"
          >скиданий</a
        > та
        <a href="/uk/docs/Web/HTML/Content_categories#podavalni"
          >подавальний</a
        >
        <a href="/uk/docs/Web/HTML/Content_categories#formovyi-vmist"
          >асоційований з формою</a
        > елемент
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        Нуль чи більше елементів {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}} або {{HTMLElement("hr")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Упущення тегів</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені предки</th>
      <td>
        Будь-які елементи, котрі приймають
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>, якщо <strong>немає</strong> атрибута <code>multiple</code> і <strong>немає</strong> атрибута <code>size</code> зі значенням, більшим за 1, інакше – <a href="/uk/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>, якщо <strong>немає</strong> атрибута <code>multiple</code> і <strong>немає</strong> атрибута <code>size</code> зі значенням, більшим за 1, інакше – всі ролі недозволені
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
- Елемент {{HTMLElement("option")}}
- Елемент {{HTMLElement("optgroup")}}
