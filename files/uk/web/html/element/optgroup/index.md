---
title: <optgroup> – елемент групи варіантів
slug: Web/HTML/Element/optgroup
page-type: html-element
browser-compat: html.elements.optgroup
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<optgroup>`** створює групування варіантів усередині елемента {{HTMLElement("select")}}.

{{EmbedInteractiveExample("pages/tabbed/optgroup.html", "tabbed-standard")}}

> **Примітка:** Елементи optgroup не можна вкладати один в одного.

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `disabled`
  - : Якщо задано цей Булів атрибут, то жоден з елементів цієї групи варіантів не може бути вибраним. Зазвичай браузери позначають такі контрольні елементи сірим кольором і не передають їм жодних браузерних подій, таких як клацання мишею або події, пов'язані з фокусом.
- `label`
  - : Назва групи варіантів, яку браузер може використовувати при позначенні варіантів у користувацькому інтерфейсі. Цей атрибут є обов'язковим, якщо цей елемент використовується.

## Приклади

```html
<select>
  <optgroup label="Група 1">
    <option>Варіант 1.1</option>
  </optgroup>
  <optgroup label="Група 2">
    <option>Варіант 2.1</option>
    <option>Варіант 2.2</option>
  </optgroup>
  <optgroup label="Група 3" disabled>
    <option>Варіант 3.1</option>
    <option>Варіант 3.2</option>
    <option>Варіант 3.3</option>
  </optgroup>
</select>
```

### Результат

{{EmbedLiveSample("pryklady")}}

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
      <td>Нуль або більше елементів {{HTMLElement("option")}}.</td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>
        Початковий тег є обов'язковим. Кінцевий тег є необов'язковим, якщо після цього елемента зразу стоїть інший елемент <code>&#x3C;optgroup></code>, або якщо батьківський елемент не має далі вмісту.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>Елемент {{HTMLElement("select")}}.</td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Жодної дозволеної ролі</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLOptGroupElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші елементи, пов'язані з формами: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} і {{HTMLElement("meter")}}.
