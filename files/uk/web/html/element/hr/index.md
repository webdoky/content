---
title: '<hr> (horizontal rule — горизонтальна лінія): Елемент розділу між темами'
slug: Web/HTML/Element/hr
tags:
  - Element
  - HTML
  - HTML grouping content
  - Reference
browser-compat: html.elements.hr
---

{{HTMLRef}}

Елемент **<hr>** в [HTML](/uk/docs/Web/HTML) служить для розділення елементів рівня абзацу: наприклад, коли змінюється сцена в історії, чи тема всередині секції.

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

Історично, елемент **<hr>** зображався як горизонтальна лінія. Позаяк він все ще може мати вигляд горизонтальної лінії у візуальних браузерах, цей елемент тепер має більше семантичний зміст, аніж графічний. Отже, якщо потрібно просто провести горизонтальну лінію, слід робити це за допомогою відповідного CSS.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Основний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>Ніякого, це {{Glossary("empty element", "порожній елемент")}}.</td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегів</th>
      <td>Повинен мати початковий тег, проте не повинен мати кінцевого тега.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Будь-який елемент, який дозволяє містити
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#flow_content"
          >основний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна ARIA-роль</th>
      <td>{{ARIARole("separator")}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені ARIA-ролі</th>
      <td>
        {{ARIARole("presentation")}} чи {{ARIARole("none")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-інтерфейс</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## Атрибути елементу

Атрибути <hr> елементу включають [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{deprecated_inline}}
  - : Вирівнює елемент на сторінці. Усталене значення — вирівнювати по лівому боці.
- {{htmlattrdef("color")}} {{Non-standard_inline}}
  - : Задає колір лінії шляхом вказування словесного позначення кольору, або його шістнадцяткового значення.
- {{htmlattrdef("noshade")}} {{deprecated_inline}}
  - : Визначає, що лінія буде позбавлена тіні.
- {{htmlattrdef("size")}} {{deprecated_inline}}
  - : Встановлює висоту лінії в пікселях.
- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : Встановлює довжину лінії на сторінці у пікселях чи відсотках.

## Приклад

### HTML

```html
<p>
  Це — перший абзац тексту.
  Це — перший абзац тексту.
  Це — перший абзац тексту.
  Це — перший абзац тексту.
</p>

<hr>

<p>
  Це — другий абзац тексту.
  Це — другий абзац тексту.
  Це — другий абзац тексту.
  Це — другий абзац тексту.
</p>
```

### Результат

{{EmbedLiveSample("pryklad")}}

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement('p')}}
