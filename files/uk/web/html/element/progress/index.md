---
title: "<progress>: Елемент – індикатор прогресу"
slug: Web/HTML/Element/progress
page-type: html-element
browser-compat: html.elements.progress
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<progress>`** (прогрес) виводить індикатор, що показує ступінь завершення завдання і, як правило, відображається у вигляді смуги прогресу.

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `max`
  - : Цей атрибут описує те, скільки роботи вимагає завдання, позначене елементом `progress`. Якщо атрибут `max` присутній, він повинен мати значення більше за `0` і бути дійсним числом з рухомою комою. Усталене значення — `1`.
- `value`
  - : Цей атрибут задає те, скільки роботи виконано. Він повинен бути дійсним числом з рухомою комою між `0` і `max`, або між `0` і `1`, якщо `max` пропущено. Якщо атрибут `value` відсутній, смуга прогресу є невизначеною; це означає, що дія триває, але немає вказівок на те, скільки часу вона буде тривати.

> **Примітка:** На відміну від елемента {{htmlelement("meter")}}, мінімальне значення завжди дорівнює `0`, а атрибут `min` для елемента `<progress>` не дозволений.

> **Примітка:** Псевдоклас {{cssxref(":indeterminate")}} можна використовувати для збігу з невизначеними смугами прогресу. Щоб змінити смугу прогресу на невизначену після того, як їй надано значення, необхідно видалити атрибут `value` за допомогою {{domxref("Element.removeAttribute", "element.removeAttribute('value')")}}.

## Приклади

```html
<progress value="70" max="100">70 %</progress>
```

### Результат

{{EmbedLiveSample("pryklady", 200, 50)}}

## Занепокоєння щодо доступності

### Підписування

У більшості випадків при використанні `<progress>` слід надати доступний підпис. Окрім того, що можна використовувати стандартні підписні атрибути ARIA [`aria-labelledby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) та [`aria-label`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-label), як і на будь-якому елементі з `role="progressbar"`, при використанні `<progress>` також можна використовувати елемент {{htmlelement("label")}}.

> **Примітка:** Текст, розміщений між тегами елемента, не є доступним підписом, він рекомендований лише як запасний вміст для старих браузерів, які не підтримують `<progress>`.

#### Приклади

```html
<label>
  Відвантаження документа: <progress value="70" max="100">70 %</progress>
</label>

<!-- АБО -->
<br />

<label for="progress-bar">Відвантаження документа</label>
<progress id="progress-bar" value="70" max="100">70 %</progress>
```

#### Результат

{{EmbedLiveSample('pidpysuvannia')}}

### Описування певного регіону

Якщо елемент `<progress>` описує прогрес завантаження розділу сторінки, слід використовувати атрибут [`aria-describedby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), щоб вказати статус, і задати [`aria-busy="true"`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-busy) на розділі, який оновлюється, видаливши атрибут `aria-busy`, коли завантаження завершено.

#### Приклади

```html
<div aria-busy="true" aria-describedby="progress-bar">
  <!-- вміст для цього регіона – завантажується -->
</div>

<!-- ... -->

<progress id="progress-bar" aria-label="Завантаження вмісту…"></progress>
```

##### Результат

{{EmbedLiveSample('opysuvannia-pevnoho-rehionu')}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories">Категорії вмісту</a>
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">Потоковий вміст</a>,
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist">оповідальний вміст</a>, підписний вміст,
        <a href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist">відчутний вміст</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist">Оповідальний вміст</a>, але серед нащадків не повинно бути елементів <code>&#x3C;progress></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Усі, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist">оповідальний вміст</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Немає дозволеної ролі</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLProgressElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Створення вертикальних формових елементів](/uk/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{htmlelement("meter")}}
- {{cssxref(":indeterminate")}}
- {{cssxref("-moz-orient")}}
- {{cssxref("::-moz-progress-bar")}}
- {{cssxref("::-webkit-progress-bar")}}
- {{cssxref("::-webkit-progress-value")}}
- {{cssxref("::-webkit-progress-inner-element")}}
