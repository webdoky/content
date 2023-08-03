---
title: "<label>: Елемент підпису"
slug: Web/HTML/Element/label
page-type: html-element
browser-compat: html.elements.label
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<label>`** (підпис, позначка) представляє підпис для елемента користувацького інтерфейсу.

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

Пов'язання `<label>` з контрольним елементом, як то {{htmlelement("input")}} чи {{htmlelement("textarea")}}, пропонує доволі суттєві переваги:

- Текст підпису не лише візуально пов'язується з відповідним текстовим полем; він також пов'язаний з ним програмно. Це означає, що, наприклад, читач з екрана зачитає підпис, коли користувач зосереджений на полі форми, полегшуючи користувачеві допоміжної технології зрозуміти, які дані повинні бути введені.
- Коли користувач клацає чи тицяє позначку, браузер переводить увагу на пов'язане з нею поле введення (результівна подія також спрацьовує для поля). Це збільшує область спрацювання для переведення уваги на поле, що зручно для всіх, хто спробує його активувати – включно з тим, хто користується пристроєм з дотиковим екраном.

Щоб явно пов'язати елемент `<label>` з елементом `<input>`, спершу треба надати елементові `<input>` атрибут `id`. Далі – додати до елемента `<label>` атрибут `for`, чиє значення – таке ж, як в атрибута `id` елемента `<input>`.

Інший варіант: можна вкласти `<input>` безпосередньо в `<label>`, у випадку чого атрибути `for` і `id` непотрібні, адже тоді пов'язування спрацьовує неявно:

```html
<label>
  Любите вареники?
  <input type="checkbox" name="varenyky" />
</label>
```

Контрольний елемент, котрий позначає підпис, зветься _підписаним контрольним елементом_ елемента підпису. З одним контрольним елементом можуть бути пов'язані декілька підписів:

```html
<label for="username">Уведіть своє ім'я користувача:</label>
<input id="username" name="username" type="text" />
<label for="username">Забули своє ім'я користувача?</label>
```

Серед елементів, що можуть бути пов'язані з `<label>`: {{HTMLElement('button')}}, {{HTMLElement('input')}} (except for `type="hidden"`), {{HTMLElement('meter')}}, {{HTMLElement('output')}}, {{HTMLElement('progress')}}, {{HTMLElement('select')}} і {{HTMLElement('textarea')}}.

## Атрибути

Цей елемент включає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `for`

  - : Значення атрибута `for` мусить бути одним [`id`](/uk/docs/Web/HTML/Global_attributes#id) [підписуваного](/uk/docs/Web/HTML/Content_categories#pidpysni) елемента форми у тому самому документі, що й елемент `<label>`. Отже, будь-який елемент `label` може бути пов'язаний лише з одним контрольним елементом.

    > **Примітка:** Щоб задати атрибут `for` програмно, слід використовувати [`htmlFor`](/uk/docs/Web/API/HTMLLabelElement/htmlFor).

    Перший елемент в документі, чий атрибут `id` збігається зі значенням атрибута `for`, є _підписаним контрольним елементом_ щодо такого елемента `label` – за умови, що елемент з таким `id` справді є [підписуваним елементом (англ.)](https://html.spec.whatwg.org/multipage/forms.html#category-label). Якщо він _не_ є підписуваним елементом, то атрибут `for` не має жодної дії. Якщо далі в документі є інші елементи, котрі мають таке ж значення `id`, то вони не враховуються.

    Декільком елементам `label` можна надати однакове значення атрибутів `for`; це призводить до того, що пов'язаний контрольний елемент (той, на котрий посилається `for`) має декілька підписів.

    > **Примітка:** Елемент `<label>` може мати як атрибут `for`, так і контрольний елемент всередині себе, за умови що атрибут `for` вказує на той контрольний елемент, що всередині.

## Оформлення засобами CSS

Немає жодних рекомендацій щодо оформлення елементів `<label>`: структурно вони є простими рядковими елементами, тож їх можна оформлювати так само як елемент {{htmlelement("span")}} чи {{htmlelement("a")}}. До них можна застосовувати будь-яке оформлення, за умови, що текст не стає складно читати.

## Приклади

### Визначення неявного підпису

```html
<label>Клацни мене <input type="text" /></label>
```

{{EmbedLiveSample('vyznachennia-neiavnoho-pidpysu', '200', '50')}}

### Визначення явного підпису з атрибутом "for"

```html
<label for="username">Клацни мене для зосередження на полі введення</label>
<input type="text" id="username" />
```

{{EmbedLiveSample('vyznachennia-yavnoho-pidpysu-z-atrybutom-for', '200', '50')}}

## Занепокоєння щодо доступності

### Інтерактивний вміст

Не слід вміщувати інтерактивні елементи, як то {{HTMLElement("a", "anchors")}} чи {{HTMLElement("button", "buttons")}}, всередину `label`. Подібна практика ускладнює активацію поля форми, пов'язаного з `label`.

**Не робіть так:**

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  Погоджуюся з <a href="terms-and-conditions.html">Положеннями та умовами</a>
</label>
```

**Краще робіть так:**

```html example-good
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  Погоджуюся з Положеннями та умовами
</label>
<p>
  <a href="terms-and-conditions.html">Читати Положення та умови</a>
</p>
```

### Заголовки

Поміщення [заголовкових елементів](/uk/docs/Web/HTML/Element/Heading_Elements) всередину `<label>` стає на заваді різноманітним допоміжним технологіям, адже заголовки загальноприйнято використовуються як [поміч в орієнтуванні](/uk/docs/Web/HTML/Element/Heading_Elements#oriientuvannia). Якщо текст підпису треба підлаштувати візуально, краще натомість застосувати до `<label>` класи CSS.

Якщо [форма](/uk/docs/Web/HTML/Element/form) чи розділ форми потребує заголовка, слід використовувати елемент {{HTMLElement("legend")}}, розташований всередині {{HTMLElement("fieldset")}}.

**Не робіть так:**

```html example-bad
<label for="your-name">
  <h3>Ваше ім'я</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

**Краще робіть так:**

```html example-good
<label class="large-label" for="your-name">
  Ваше ім'я
  <input id="your-name" name="your-name" type="text" />
</label>
```

### Кнопки

Елемент {{HTMLElement("input")}} з оголошенням `type="button"` та дійсним атрибутом `value` не потребує пов'язування з ним підпису. Така практика насправді може стати на заваді тому, як допоміжні технології розбирають кнопкове поле. Те саме стосується елемента {{HTMLElement("button")}}.

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
        <a
          href="/uk/docs/Web/HTML/Content_categories#formovyi-vmist"
          >формовий вміст</a
        >, дотиковий вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >Оповідальний вміст</a
        >, що не містить жодних елементів <code>label</code>. Не дозволені інші
        <a href="/uk/docs/Web/HTML/Content_categories#pidpysni"
          >підписні</a
        >
        елементи, крім того, що підписується цим підписом.
      </td>
    </tr>
    <tr>
      <th scope="row">Упускання тега</th>
      <td>{{no_tag_omission}}</td>
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Немає відповідної ролі</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td><code>role</code> не дозволено</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLLabelElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}
