---
title: "<object> – елемент зовнішнього об'єкта"
slug: Web/HTML/Element/object
page-type: html-element
browser-compat: html.elements.object
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<object>`** (об'єкт) представляє зовнішній ресурс, який може розглядатися як зображення, вкладений контекст перегляду чи ресурс, який обробляється плагіном.

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `archive` {{deprecated_inline}}
  - : Розділений пробілами список URI для архівів ресурсів для об'єкта.
- `border` {{deprecated_inline}}
  - : Ширина межі навколо контрольного елемента, в пікселях.
- `classid` {{deprecated_inline}}
  - : URI реалізації об'єкта. Може вживатися разом із, або замість, атрибута **data**.
- `codebase` {{deprecated_inline}}
  - : Базовий шлях, що використовується для розв'язання відносних URI, заданих у **classid**, **data** або **archive**. Якщо не задано, то для цього усталено використовується URI поточного документа.
- `codetype` {{deprecated_inline}}
  - : Тип вмісту даних, заданих у **classid**.
- `data`
  - : Адреса ресурсу в вигляді дійсного URL. Як мінімум один з атрибутів **data** і **type** має бути заданий.
- `declare` {{deprecated_inline}}
  - : Присутність цього булевого атрибута робить цей елемент суто оголошенням. Сам об'єкт повинен бути створений об'єктом `<object>` десь далі. Необхідно повторювати повністю елемент `<object>` кожного разу, коли ресурс використовується знову.
- `form`
  - : Елемент форми, з яким пов'язаний елемент об'єкта, якщо такий є (його _форма-власник_). Значення цього атрибута повинне бути ідентифікатором елемента {{HTMLElement("form")}} в тому ж документі.
- `height`
  - : Висота виведеного ресурсу, в [пікселях CSS](https://drafts.csswg.org/css-values/#px). – (Тільки абсолютні значення. [ЖОДНИХ відсотків](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))
- `name`
  - : Ім'я дійсного контексту перегляду (HTML5), або ім'я контрольного елемента (HTML 4).
- `standby` {{deprecated_inline}}
  - : Повідомлення, яке браузер може показати під час завантаження реалізації та даних об'єкта.
- `type`
  - : [Тип вмісту](/uk/docs/Glossary/MIME_type) ресурсу, заданого **data**. Як мінімум один з атрибутів **data** і **type** має бути заданий.
- `usemap` {{deprecated_inline}}
  - : Хеш-ім'я посилання на елемент {{HTMLElement("map")}}; тобто символ '#', після якого стоїть [`name`](/uk/docs/Web/HTML/Element/map#name) елемента карти.
- `width`
  - : Ширина виведеного ресурсу, в [пікселях CSS](https://drafts.csswg.org/css-values/#px). – (Тільки абсолютні значення. [ЖОДНИХ відсотків](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))

## Приклади

### Вбудування відео

#### HTML

```html
<object
  type="video/mp4"
  data="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
  width="600"
  height="140">
  <img src="path/image.jpg" alt="корисний опис зображення" />
</object>
```

#### Результат

{{EmbedLiveSample("vbuduvannia-video")}}

Якщо відео в прикладі не вдається завантажити, користувачу як запасний варіант показується зображення. Тег {{HTMLElement("img")}} використовується для відображення зображення. Атрибут `src` заданий зі шляхом до зображення, яке вбудовується. Також додано атрибут `alt`, який дає зображенню доступне ім'я. Якщо зображення також не виходить завантажити, то виводиться вміст атрибута `alt`.

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories">Категорії вмісту</a>
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">Потоковий вміст</a>;
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist">оповідальний вміст</a>;
        <a href="/uk/docs/Web/HTML/Content_categories#vbudovanyi-vmist">вбудований вміст</a>, відчутний вміст; якщо елемент має атрибут
        <a href="/uk/docs/Web/HTML/Element/object#usemap"><code>usemap</code></a>, то <a href="/uk/docs/Web/HTML/Content_categories#interaktyvnyi-vmist">інтерактивний вміст</a>;
        <a href="/uk/docs/Web/HTML/Content_categories#perelicheni">перелічений</a>,
        <a href="/uk/docs/Web/HTML/Content_categories#podavalni">подавальний</a>
        <a href="/uk/docs/Web/HTML/Content_categories#formovyi-vmist">формовий</a> елемент.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        нуль або більше елементів {{HTMLElement("param")}}, а після них – <a href="/uk/docs/Web/HTML/Content_categories#model-prozoroho-vmistu">прозорий</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Всі елементи, що приймають <a href="/uk/docs/Web/HTML/Content_categories#vbudovanyi-vmist">вбудований вміст</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Немає відповідної ролі</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLObjectElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement("embed")}}
- {{HTMLElement("param")}}
