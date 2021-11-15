---
title: '<hr> (горизонтальне правило): Елемент що розділяє через зміну теми'
slug: Web/HTML/Element/hr
tags:
  - Element
  - HTML
  - HTML grouping content
  - Reference
browser-compat: html.elements.hr
---

{{HTMLRef}}

Елемент **<hr>** в [HTML](/uk/docs/Web/HTML)  відокремлює параграфи, наприклад коли змінюється сцена в історії, чи коли змінюємо тему всередині секції.

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

Історично, елемент **<hr>**,  як "горизонтальне правило" презентував горизонтальну лінію, що розділяє зміст. Але ж сьогодні ми говоримо про **<hr>** у семантичному сенсі більш ніж у графічному. Одже, якщо бажаєте просто провести горизонтальну лінію, робить це за допомогою відповідного CSS.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None, it is an {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>It must have start tag, but must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>{{ARIARole("separator")}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("presentation")}} or {{ARIARole("none")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## Атрибути елементу

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).
Атрибути <hr> елементу включають [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{deprecated_inline}}
  - : Вирівнює обрані елементи на сторінці. Значення за замовчання — вирівнювати по лівому боку.
- {{htmlattrdef("color")}} {{Non-standard_inline}}
  - : Визначає колір обраних елементів згідно з шістнадцятковою номенклатурою кольорів.
- {{htmlattrdef("noshade")}} {{deprecated_inline}}
  - : Визначає, що обрані елементи позбавлені тіні.
- {{htmlattrdef("size")}} {{deprecated_inline}}
  - : Встановлює висоту обраних елементів на сторінці у пікселях.
- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : Встановлює довжину  обраних елементів на сторінці у пікселях чи відсотках від сторінки.

## Приклад

### HTML

```html
<p>
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
</p>

<hr>

<p>
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
</p>
```

### Результат

{{EmbedLiveSample("Example")}}

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Також дивиться

- {{HTMLElement('p')}}
