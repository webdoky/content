---
title: <select> – елемент вибору HTML
slug: Web/HTML/Element/select
page-type: html-element
browser-compat: html.elements.select
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<select>`** (вибір) представляє контрольний елемент, що надає меню з варіантів вибору.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

Приклад вище показує типове використання `<select>`. Елемент отримує атрибут `id`, котрий дає змогу пов'язати його з елементом {{htmlelement("label")}} для потреб доступності, а також атрибут `name`, котрий представляє ім'я відповідної порції даних при поданні форми на сервер. Кожен варіант меню описується елементом {{htmlelement("option")}}, дочірнім щодо `<select>`.

Кожен елемент `<option>` повинен мати атрибут [`value`](/uk/docs/Web/HTML/Element/option#value), що містить значення, котре буде подано на сервер, якщо відповідний варіант – обраний. Якщо атрибута `value` немає, то усталеним значенням є текст всередині елемента. Щоб елемент `option` був обраним при першому завантаженні сторінки, слід вказати атрибут [`selected`](/uk/docs/Web/HTML/Element/option#selected) елемента `<option>`. Якщо атрибут `selected` не заданий, то усталено обраним стає перший елемент `<option>`.

У JavaScript елемент `<select>` представляється об'єктом {{domxref("HTMLSelectElement")}}, і цей об'єкт має властивість {{domxref("HTMLSelectElement.value", "value")}}, яка вміщає значення вибраного `<option>`.

Елемент `<select>` має певні унікальні атрибути для контролю над собою, наприклад, `multiple` для задання можливості (чи неможливості) вибору кількох варіантів та `size` з кількістю варіантів, котру можна обрати водночас. Також він приймає більшість звичних атрибутів полів вводу, наприклад, `required`, `disabled`, `autofocus` тощо.

Можна вкладати елементи {{HTMLElement("option")}} в елементи {{HTMLElement("optgroup")}}, щоб створити розмежовані групи варіантів всередині спадного списку. Також можна додавати елементи {{HTMLElement("hr")}}, щоб утворювати розділювачі, що служать візуальними розривами між варіантами.

Інші приклади використання доступні за посиланням: [Нативні віджети форми: Вміст спадного списку](/uk/docs/Learn_web_development/Extensions/Forms/Other_form_controls#spadni-kontrolni-elementy).

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/uk/docs/Web/HTML/Attributes/autocomplete) (автозаповнення)
  - : Рядок, що дає підказку функціональності автозаповнення {{Glossary("user agent", "користувацького агента")}}. Повний список значень та деталей про те, як використовувати автозаповнення, доступний за посиланням: [HTML-атрибут автозаповнення](/uk/docs/Web/HTML/Attributes/autocomplete).
- `autofocus` (автофокус)
  - : Цей булів атрибут дає змогу вказати, що контрольний елемент повинен отримати фокус введення, коли сторінка завантажилась. Лише один елемент форми в документі може мати атрибут `autofocus`.
- [`disabled`](/uk/docs/Web/HTML/Attributes/disabled) (вимкнений)
  - : Цей булів атрибут показує, що користувач не може взаємодіяти з контрольним елементом. Якщо цей атрибут не вказаний, то контрольний елемент успадковує це налаштування від контейнерного елемента, наприклад, {{htmlelement("fieldset")}}; якщо немає контейнерного елемента з атрибутом `disabled`, то контрольний елемент є увімкненим.
- `form` (форма)

  - : Елемент {{HTMLElement("form")}}, з котрим елемент `<select>` пов'язаний (його _форма-власник_). Значення цього атрибута мусить відповідати значенню атрибута [`id`](/uk/docs/Web/HTML/Global_attributes/id) елемента `<form>` в тому самому документі. (Якщо цей атрибут не вказаний, то `<select>` пов'язується з елементом `<form>`, котрий є його предком, якщо такий предок є.)

    Цей атрибут дає змогу пов'язувати елементи `<select>` із формами будь-де в документі, не поміщаючи їх у відповідний `<form>`. Також така поведінка змушує нехтувати батьківським елементом `<form>`.

- [`multiple`](/uk/docs/Web/HTML/Attributes/multiple) (декілька)
  - : Цей булів атрибут показує, що зі списку можуть бути обрані кілька варіантів. Якщо він не вказаний, то лише один варіант може бути обраним водночас. Коли вказаний `multiple`, більшість браузерів замість однорядкового спадного списку показують віконце списку з прокруткою.
- `name` (ім'я)
  - : Цей атрибут використовується, щоб вказати ім'я контрольного елемента.
- [`required`](/uk/docs/Web/HTML/Attributes/required) (обов'язковий)
  - : Булів атрибут, що показує, що повинен бути обраний варіант із непустим значенням-рядком.
- [`size`](/uk/docs/Web/HTML/Attributes/size) (розмір)

  - : Якщо контрольний елемент поданий у вигляді віконця списку з прокруткою (наприклад, коли вказано `multiple`), цей атрибут представляє кількість рядів списку, контрі повинні бути видимі водночас. Браузери не зобов'язані показувати елемент вибору як віконце списку з прокруткою. Усталене значення – `0`.

    > [!NOTE]
    > Згідно зі специфікацією HTML, усталеним значенням `size` має бути `1`; втім, на практиці виявилось, що це ламає певні вебсайти, і що жоден інший браузер так не робить, тому Mozilla вирішила продовжити повертати в Firefox `0` на постійній основі.

## Примітки щодо використання

### Вибір декількох варіантів

На настільних комп'ютерах доступна низка способів обрати декілька варіантів у елементі `<select>` з атрибутом `multiple`:

Користувачі миші можуть утримувати клавішу <kbd>Ctrl</kbd>, <kbd>Command</kbd> чи <kbd>Shift</kbd> (залежно від того, що має зміст для вашої операційної системи), а потім клацнути декілька варіантів, щоб обрати їх або скасувати вибір.

> [!WARNING]
> Механізм вибору декількох несуміжних елементів за допомогою клавіатури, описаний нижче, схоже, наразі працює лише в Firefox.
>
> На macOS комбінації клавіш <kbd>Ctrl</kbd> + <kbd>вгору</kbd> та <kbd>Ctrl</kbd> + <kbd>вниз</kbd> конфліктують з усталеними комбінаціями _контролю місії_ та _вікон застосунків_, тож ці усталені комбінації слід відключити, перш ніж описаний нижче механізм запрацює.

Користувачі клавіатури можуть обрати декілька суміжних елементів наступним чином:

- Перевести фокус на елемент `<select>` (наприклад, використовуючи <kbd>Tab</kbd>).
- Обрати елемент нагорі чи внизу діапазону, котрий бажають обрати, використовуючи курсорні клавіші <kbd>вгору</kbd> та <kbd>вниз</kbd>, щоб рухатись вгору та вниз по списку варіантів.
- Утримуючи клавішу <kbd>Shift</kbd>, за допомогою курсорних клавіш <kbd>вгору</kbd> та <kbd>вниз</kbd>, аби збільшити чи зменшити діапазон обраних елементів.

Користувачі клавіатури можуть обрати декілька несуміжних елементів наступним чином:

- Перевести фокус на елемент `<select>` (на приклад, використовуючи <kbd>Tab</kbd>).
- Утримуючи клавішу <kbd>Ctrl</kbd>, за допомогою курсорних клавіш <kbd>вгору</kbd> та <kbd>вниз</kbd>, змінювати "сфокусований" варіант вибору, тобто той, котрий стане обраним, якщо так вирішить користувач. "Сфокусований" варіант вибору підсвічується пунктирним контуром, – так само як сфокусоване за допомогою клавіатури посилання.
- Натискаючи клавішу <kbd>пробіл</kbd>, обрати чи скасувати вибір "сфокусованого" варіанту вибору.

## Оформлення засобами CSS

Елемент `<select>` відомий складністю ефективного оформлення засобами CSS. Можна повпливати на певні аспекти, як і в будь-якого елемента, – наприклад, оперуючи [рамковою моделлю](/uk/docs/Learn_web_development/Core/Styling_basics/Box_model), [використаним шрифтом](/uk/docs/Web/CSS/CSS_fonts) тощо, а також можна використати властивість {{cssxref("appearance")}}, щоб усунути усталений системний вигляд.

Втім, ці властивості не дають сталих результатах на всіх браузерах, тож важко робити речі штибу шикування різних типів елементів форми одне з одним в один стовпець. Внутрішня структура елемента `<select>` – складна, а також важка для контролю. При потребі отримати повний контроль слід розглянути варіанти використання бібліотеки з добрими можливостями з оформленнями віджетів форми та розгортання власного спадного меню за допомогою несемантичних елементів і JavaScript, а також [WAI-ARIA](/uk/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) для надання семантики.

Більше інформації про оформлення `<select>`:

- [Оформлення HTML-форм](/uk/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Поглиблене оформлення HTML-форм](/uk/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- Властивість {{cssxref("field-sizing")}}, яка контролює те, чи отримують елементи `<select>` розмір відповідно до вміщених у них варіантів.

## Доступність

Елемент `<hr>` усередині `<select>` слід розглядати як суто декоративний, оскільки він наразі не відображається у дереві доступності, а тому не видається допоміжним технологіям.

## Приклади

### Базовий select

Наступний приклад створює спадне меню з трьох значень, другий варіант котрого є усталено обраним.

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
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
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

- Події, що їх викидає `<select>`: {{domxref("HTMLElement/change_event", "change")}}, {{domxref("Element/input_event", "input")}}
- Елемент {{HTMLElement("option")}}
- Елемент {{HTMLElement("optgroup")}}
