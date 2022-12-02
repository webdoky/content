---
title: "<form>: Елемент форми"
slug: Web/HTML/Element/form
tags:
  - Element
  - Form Element
  - Forms
  - HTML
  - HTML Form Element
  - HTML forms
  - Reference
  - Web
browser-compat: html.elements.form
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<form>`** (форма) представляє розділ документа, що містить інтерактивні контрольні елементи для подання інформації.

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

Можна застосувати [псевдокласи](/uk/docs/Web/CSS/Pseudo-classes) CSS{{cssxref(':valid')}} й {{cssxref(':invalid')}} для оформлення елемента `<form>` на основі того, чи мають {{domxref("HTMLFormElement.elements", "елементи")}} всередині форми дійсні значення.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/Guide/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#potokovyi-vmist"
          >Потоковий вміст</a
        >,
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#dotykovyi-vmist"
          >дотиковий вміст</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#potokovyi-vmist"
          >Потоковий вміст</a
        >, але жодних елементів <code>&#x3C;form></code>
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
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/form_role"
            >form</a
          ></code
        >, якщо форма має
        <a href="https://www.w3.org/TR/accname-1.1/#dfn-accessible-name"
          >доступне ім'я</a
        >, інакше –
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >відповідної ролі немає</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/search_role"
            >search</a
          ></code
        >, {{ARIARole("none")}} або {{ARIARole("presentation")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## Атрибути

Цей елемент включає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("accept")}} {{deprecated_inline}}

  - : Розділені комами [типи вмісту](/uk/docs/Web/SVG/Content_type), котрі приймає сервер.

    > **Примітка:** **Цей атрибут тепер нерекомендований, його не слід використовувати.** Натомість слід використовувати атрибут {{htmlattrxref("accept", "input")}} на елементах `<input type=file>`.

- {{htmlattrdef("accept-charset")}}
  - : Розділені пробілами {{Glossary("character encoding", "кодування символів")}}, котрі приймає сервер. Браузер використає їх в порядку, в якому вони вказані. Усталене значення – [таке саме кодування, яке має сторінка](/uk/docs/Web/HTTP/Headers/Content-Encoding).
    (У попередніх версіях HTML кодування символів також могли бути розділені комами.)
- {{htmlattrdef("autocapitalize")}} {{non-standard_inline}}

  - : Нестандартний атрибут, що використовується iOS Safari для контролю того, як текстові елементи форми повинні автоматично отримувати великі літери. Атрибути `autocapitalize` на елементах форми відкидають такі атрибути на `<form>`. Можливі значення:

    - `none`: Без автоматичного додавання великих літер.
    - `sentences` (усталено): Велика літера на початку кожного речення.
    - `words`: Велика літера на початку кожного слова.
    - `characters`: Усі літери великі – тобто верхній регістр.

- {{htmlattrdef("autocomplete")}}

  - : Показує, чи можуть поля введення усталено автоматично заповнюватись браузером. Атрибути `autocomplete` елементів форми відкидають такий атрибут на `<form>`. Можливі значення:

    - `off`: Браузер може не заповнювати автоматично поля. (Браузери мають тенденцію ігнорувати це там, де підозрюють форми автентифікації; дивіться [Атрибут autocomplete і поля автентифікації](/uk/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#atrybut-autocomplete-i-polia-avtentyfikatsii).)
    - `on`: Браузер може заповнювати поля автоматично.

- {{htmlattrdef("name")}}
  - : Ім'я форми. Значення мусить не бути порожнім рядком, і бути унікальним серед елементів `form` у колекції форм, в котрій лежить форма, якщо така є.
- {{htmlattrdef("rel")}}
  - : Утворює гіперпосилання чи анотацію, залежно від значення; дивіться подробиці на сторінці атрибута [`rel`](/uk/docs/Web/HTML/Attributes/rel).

### Атрибути для подання форми

Наступні атрибути контролюють поведінку під час подання форми.

- {{htmlattrdef("action")}}
  - : URL, що обробляє подання форми. Це значення може бути відкинуто атрибутом {{htmlattrxref("formaction", "button")}} на елементі {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image). Цей атрибут ігнорується, коли задано `method="dialog"`.
- {{htmlattrdef("enctype")}}

  - : Якщо значення атрибута `method` – `post`, то `enctype` – це [тип MIME](https://uk.wikipedia.org/wiki/MIME_%D1%82%D0%B8%D0%BF) подання форми. Можливі значення:

    - `application/x-www-form-urlencoded`: Усталене значення.
    - `multipart/form-data`: Слід застосовувати, якщо форма містить елементи {{HTMLElement("input")}} з `type=file`.
    - `text/plain`: Корисно для потреб зневадження.

    Це значення може бути відкинуто атрибутами {{htmlattrxref("formenctype", "button")}} на елементах {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image).

- {{htmlattrdef("method")}}

  - : Метод [HTTP](/uk/docs/Web/HTTP), котрим буде подана форма.
    Єдині дозволені методи (значення) (чутливі до регістру):

    - `post`: [Метод POST (англ.)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5); дані форми надсилаються як [тіло запиту](/uk/docs/Web/API/Request/body).
    - `get` (усталене значення): [Метод GET (англ.)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); дані форми додаються до URL `action` після роздільника `?`. Слід застосовувати, коли форма [не має побічних ефектів](/uk/docs/Glossary/Idempotent).
    - `dialog`: Коли форма знаходиться всередині {{HTMLElement("dialog")}}, при поданні закриває діалог і викидає подію подання, не подаючи дані й не очищаючи форму.

    Це значення відкидається атрибутами {{htmlattrxref("formmethod", "button")}} на елементах {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image).

- {{htmlattrdef("novalidate")}}
  - : Цей булів атрибут указує, що форма не повинна затверджуватися при поданні. Якщо цей атрибут не заданий (а отже – форма **_має_** затвердження), це може бути відкинуто атрибутом {{htmlattrxref("formnovalidate", "button")}} на елементі {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image), що належить формі.
- {{htmlattrdef("target")}}

  - : Вказує, де виводити відповідь після поданні форми. Це ім'я чи ключове слово на позначення _контексту перегляду_ (наприклад, вкладки, вікна чи iframe). Наступні ключові слова мають особливі значення:

    - `_self` (усталене): Завантажувати в поточний контекст перегляду.
    - `_blank`: Завантажувати в новий безіменний контекст перегляду.
    - `_parent`: Завантажувати в батьківський щодо поточного контекст перегляду. Якщо батьківського немає, то діє так само як `_self`.
    - `_top`: Завантажувати в контекст перегляду найвищого рівня (тобто контекст перегляду, що є предком поточного і не має предка). Якщо батьківського контексту немає, то діє так само як `_self`.

    Це значення може бути відкинуто атрибутом {{htmlattrxref("formtarget", "button")}} на елементі {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image).

    > **Примітка:** Встановлення на елементах `<form>` `target="_blank"` неявно задає таку само логіку `rel`, як встановлення [`rel="noopener"`](/uk/docs/Web/HTML/Link_types/noopener), тобто відсутність заповнення `window.opener`.

## Приклади

### HTML

```html
<!-- Форма, котра пошле запит GET на поточний URL -->
<form method="get">
  <label
    >Ім'я:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Зберегти</button>
</form>

<!-- Форма, котра пошле запит POST на поточний URL -->
<form method="post">
  <label
    >Ім'я:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Зберегти</button>
</form>

<!-- Форма з fieldset, legend і label -->
<form method="post">
  <fieldset>
    <legend>Погоджуєтеся з положеннями?</legend>
    <label><input type="radio" name="radio" value="yes" /> Так</label>
    <label><input type="radio" name="radio" value="no" /> Ні</label>
  </fieldset>
</form>
```

{{EmbedLiveSample('pryklady', '100%', 110)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Посібник форм HTML](/uk/docs/Learn/Forms)
- Інші елементи, що використовуються при створенні форм: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Отримання списку елементів у формі: {{domxref("HTMLFormElement.elements")}}
- [ARIA: Роль form](/uk/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: Роль search](/uk/docs/Web/Accessibility/ARIA/Roles/search_role)
