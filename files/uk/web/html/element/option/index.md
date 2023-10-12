---
title: "<option>: Елемент варіанту HTML"
slug: Web/HTML/Element/option
page-type: html-element
browser-compat: html.elements.option
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<option>`** (варіант) використовується для визначення елемента, що вміщається в елементі {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} або {{HTMLElement("datalist")}}. Таким чином, `<option>` може представляти елементи спливних меню та інших списків елементів у документі HTML.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `disabled`
  - : Якщо заданий цей булів атрибут, то такий варіант не можна вибрати. Нерідко браузери виділяють його сірим, і він не отримує жодних браузерних подій штибу клацання мишею чи пов'язаних з фокусом. Якщо цей атрибут не задано, то елемент може все одно бути вимкнений, якщо одним з його предків є вимкнений елемент {{HTMLElement("optgroup")}}.
- `label`
  - : Цей атрибут – текст для підпису, що позначає значення варіанту. Якщо атрибут `label` не визначено, то його значення – це текстовий вміст елемента.
- `selected`
  - : Цей булів атрибут, якщо присутній, позначає те, що цей варіант на початку вибрано. Якщо такий елемент є нащадком елемента {{HTMLElement("select")}}, атрибут [`multiple`](/uk/docs/Web/HTML/Element/select#multiple) якого не задано, то тільки один варіант цього {{HTMLElement("select")}} може мати атрибут `selected`.
- `value`
  - : Вміст цього атрибута представляє значення, що подається з формою, якщо цей варіант вибрано. Якщо цей атрибут відсутній, то значення береться з текстового вмісту елемента варіанту.

## Оформлення засобами CSS

Оформлення елемента **`<option>`** – вельми обмежено. Варіанти не успадковують шрифт, заданий на батьківському елементі. У Firefox можна задати лише [`color`](/uk/docs/Web/CSS/color) і [`background-color`](/uk/docs/Web/CSS/background-color), натомість у Chrome та Safari не можна задати жодних властивостей. Детальніше про оформлення можна дізнатися з [нашого посібника з поглибленого оформлення форм](/uk/docs/Learn/Forms/Advanced_form_styling).

## Приклади

Дивіться приклади на сторінці {{HTMLElement("select")}}.

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
      <td>
        Текст, можливо, з екранованими символами (наприклад,
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>
        Початковий тег – обов'язковий. Кінцевий тег є необов'язковим, якщо після цього елемента зразу стоїть інший елемент <code>&#x3C;option></code> або {{HTMLElement("optgroup")}}, або якщо у батьківському елементі немає більше вмісту.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        {{HTMLElement("select")}},
        {{HTMLElement("optgroup")}} або
        {{HTMLElement("datalist")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Не дозволена жодна роль</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLOptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші елементи, пов'язані з формами: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} і {{HTMLElement("meter")}}.
