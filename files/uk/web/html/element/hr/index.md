---
title: "<hr> – Елемент тематичного розриву (горизонтальна лінія)"
slug: Web/HTML/Element/hr
page-type: html-element
browser-compat: html.elements.hr
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<hr>`** (horizontal rule - горизонтальна лінія) служить для розділення елементів рівня абзацу: наприклад, коли змінюється сцена в історії, чи тема всередині розділу.

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

Історично цей елемент зображався як горизонтальна лінійка чи лінія. Позаяк він все ще може мати вигляд горизонтальної лінії у візуальних браузерах, цей елемент тепер має більше семантичний зміст, аніж візуальний. Отже, якщо потрібно просто провести горизонтальну лінію, слід робити це за допомогою відповідного CSS.

## Атрибути

Серед атрибутів цього елемента присутні [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Задає шикування лінії на сторінці. Якщо значення не задано, то усталеним значенням є `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Задає колір лінії за допомогою назви кольору або шістнадцяткового значення.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Задає лінії відсутність тіні.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Задає висоту лінії в пікселях.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Задає довжину лінії на сторінці, за допомогою значення в пікселях або відсотках.

## Приклад

### HTML

```html
<p>
  Це перший абзац тексту. Це перший абзац тексту. Це перший абзац тексту. Це
  перший абзац тексту.
</p>

<hr />

<p>
  Це другий абзац тексту. Це другий абзац тексту. Це другий абзац тексту. Це
  другий абзац тексту.
</p>
```

### Результат

{{EmbedLiveSample("pryklad")}}

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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>Жодного; це {{Glossary("Void element", "пустий елемент")}}.</td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Повинен мати початковий тег, проте не повинен мати кінцевого тега.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        <ul>
          <li>Усі елементи, що приймають <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">потоковий вміст</a></li>
          <li>Елемент <a href="/uk/docs/Web/HTML/Element/select"><code>&lt;select></code></a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> або <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role">жодної ролі</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement('p')}}
- [`<hr>` усередині `<select>`](/uk/docs/Web/HTML/Element/select#hr-useredyni-select)
