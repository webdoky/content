---
title: "<form> – елемент форми"
slug: Web/HTML/Element/form
page-type: html-element
browser-compat: html.elements.form
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<form>`** (форма) представляє розділ документа, що містить інтерактивні контрольні елементи для подання інформації.

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

Можна застосувати [псевдокласи](/uk/docs/Web/CSS/Pseudo-classes) CSS{{cssxref(':valid')}} й {{cssxref(':invalid')}} для оформлення елемента `<form>` на основі того, чи мають {{domxref("HTMLFormElement.elements", "елементи")}} всередині форми дійсні значення.

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Розділені комами [типи вмісту](/uk/docs/Web/SVG/Content_type), котрі приймає сервер.

    > **Примітка:** **Цей атрибут тепер нерекомендований, його не слід використовувати.** Натомість слід використовувати атрибут [`accept`](/uk/docs/Web/HTML/Element/input#accept-pryimannia) на елементах `<input type=file>`.

- `accept-charset`

  - : Розділені пробілами {{Glossary("character encoding", "кодування символів")}}, котрі приймає сервер. Браузер використає їх в порядку, в якому вони вказані. Усталене значення – [таке саме кодування, яке має сторінка](/uk/docs/Web/HTTP/Headers/Content-Encoding).
    (У попередніх версіях HTML кодування символів також могли бути розділені комами.)

- `autocapitalize`

- : Контролює те, чи додаються великі літери до тексту, введеного у поля вводу, а також, якщо так, то яким чином. Шукайте більше інформації на сторінці глобального атрибута [`autocapitalize`](/uk/docs/Web/HTML/Global_attributes/autocapitalize).

- `autocomplete`

  - : Позначає те, чи можуть поля введення усталено автоматично заповнюватись браузером. Атрибути `autocomplete` на елементах форми відкидають такий атрибут на `<form>`. Можливі значення:

    - `off`: Браузер може не заповнювати автоматично поля. (Браузери мають тенденцію ігнорувати це там, де підозрюють форми автентифікації; дивіться [Атрибут autocomplete і поля автентифікації](/uk/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#atrybut-autocomplete-i-polia-avtentyfikatsii).)
    - `on`: Браузер може заповнювати поля автоматично.

- `name`

  - : Ім'я форми. Значення мусить не бути порожнім рядком, і бути унікальним серед елементів `form` у колекції форм, в котрій лежить форма, якщо така є.

- `rel`
  - : Контролює анотації й те, якого роду посилання породжує форма. Серед анотацій: [`external`](/uk/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/uk/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/uk/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/uk/docs/Web/HTML/Attributes/rel#noopener) і [`noreferrer`](/uk/docs/Web/HTML/Attributes/rel#noreferrer). Серед різновидів посилань: [`help`](/uk/docs/Web/HTML/Attributes/rel#help), [`prev`](/uk/docs/Web/HTML/Attributes/rel#prev), [`next`](/uk/docs/Web/HTML/Attributes/rel#next), [`search`](/uk/docs/Web/HTML/Attributes/rel#search) і [`license`](/uk/docs/Web/HTML/Attributes/rel#license). Значення [`rel`](/uk/docs/Web/HTML/Attributes/rel) є розділеним пробілами списком таких значень.

### Атрибути для подання форми

Наступні атрибути контролюють поведінку під час подання форми.

- `action`
  - : URL, що обробляє подання форми. Це значення може бути відкинуто атрибутом [`formaction`](/uk/docs/Web/HTML/Element/button#formaction) на елементі {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image). Цей атрибут ігнорується, коли задано `method="dialog"`.
- `enctype`

  - : Якщо значення атрибута `method` – `post`, то `enctype` – це [тип MIME](https://uk.wikipedia.org/wiki/MIME_%D1%82%D0%B8%D0%BF) подання форми. Можливі значення:

    - `application/x-www-form-urlencoded`: Усталене значення.
    - `multipart/form-data`: Слід застосовувати, якщо форма містить елементи {{HTMLElement("input")}} з `type=file`.
    - `text/plain`: Корисно для потреб зневадження.

    Це значення може бути відкинуто атрибутами [`formenctype`](/uk/docs/Web/HTML/Element/button#formenctype) на елементах {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image).

- `method`

  - : Метод [HTTP](/uk/docs/Web/HTTP), котрим буде подана форма.
    Єдині дозволені методи (значення) (чутливі до регістру):

    - `post`: Метод {{HTTPMethod("POST")}}; дані форми надсилаються як [тіло запиту](/uk/docs/Web/API/Request/body).
    - `get` (усталене значення): Метод {{HTTPMethod("GET")}}; дані форми додаються до URL `action` після роздільника `?`. Слід застосовувати, коли форма [не має побічних ефектів](/uk/docs/Glossary/Idempotent).
    - `dialog`: Коли форма знаходиться всередині {{HTMLElement("dialog")}}, при поданні закриває діалог і запускає подію `submit`, не надсилаючи дані й не очищаючи форму.

    Це значення відкидається атрибутами [`formmethod`](/uk/docs/Web/HTML/Element/button#formmethod) на елементах {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image).

- `novalidate`
  - : Цей булів атрибут позначає те, що форма не повинна валідуватися при поданні. Якщо цей атрибут не заданий (а отже – форма **_має_** валідування), це може бути відкинуто атрибутом [`formnovalidate`](/uk/docs/Web/HTML/Element/button#formnovalidate) на елементі {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image), що належить цій формі.
- `target`

  - : Вказує, де виводити відповідь після поданні форми. Це ім'я чи ключове слово на позначення _контексту перегляду_ (наприклад, вкладки, вікна чи вбудованого фрейму). Наступні ключові слова мають особливі значення:

    - `_self` (усталене): Завантажувати в поточний контекст перегляду.
    - `_blank`: Завантажувати в новий безіменний контекст перегляду. Це додає такої ж логіки, як задання [`rel="noopener"`](#rel), тобто відсутність заповнення [`window.opener`](/uk/docs/Web/API/Window/opener).
      - `_parent`: Завантажувати в батьківський щодо поточного контекст перегляду. Якщо батьківського немає, то діє так само як `_self`.
      - `_top`: Завантажувати в контекст перегляду найвищого рівня (тобто контекст перегляду, що є предком поточного і не має предка). Якщо батьківського контексту немає, то діє так само як `_self`.

    Це значення може бути відкинуто атрибутом [`formtarget`](/uk/docs/Web/HTML/Element/button#formtarget) на елементі {{HTMLElement("button")}}, [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) чи [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image).

## Приклади

```html
<!-- Форма, котра пошле запит GET на поточний URL -->
<form method="get">
  <label>
    Ім'я:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Зберегти</button>
</form>

<!-- Форма, котра пошле запит POST на поточний URL -->
<form method="post">
  <label>
    Ім'я:
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

### Результат

{{EmbedLiveSample('pryklady')}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories">Категорії вмісту</a>
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">Потоковий вміст</a>,
        <a href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist">відчутний вміст</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">Потоковий вміст</a>, але жодних елементів <code>&#x3C;form></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Всі елементи, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">потоковий вміст</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code><a href="/uk/docs/Web/Accessibility/ARIA/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <code><a href="/uk/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
         або <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Посібник форм HTML](/uk/docs/Learn/Forms)
- Інші елементи, що використовуються при створенні форм: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Отримання списку елементів у формі: {{domxref("HTMLFormElement.elements")}}
- [ARIA – роль form](/uk/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA – роль search](/uk/docs/Web/Accessibility/ARIA/Roles/search_role)
