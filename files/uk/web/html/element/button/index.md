---
title: '<button>: Елемент кнопки'
slug: Web/HTML/Element/button
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Web
browser-compat: html.elements.button
---

{{HTMLRef}}

Елемент [HTML](/uk/docs/Web/HTML) **`<button>`** (кнопка) – інтерактивний елемент, що активується користувачем за допомогою миші, клавіатури, пальця, голосової команди чи іншої допоміжної технології. Бувши активованою, кнопка виконує програмовану дію, наприклад, подання [форми](/uk/docs/Learn/Forms) чи відкриття діалогу.

Усталено кнопки HTML подаються в стилі, що нагадує стиль платформи, на котрій працює {{Glossary("user agent", "користувацький агент")}}, але вигляд кнопок можна змінити за допомогою [CSS](/uk/docs/Web/CSS).

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

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
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        >,
        <a
          href="/uk/docs/Web/Guide/HTML/Content_categories#interaktyvnyi-vmist"
          >інтерактивний вміст</a
        >,
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#perelicheni"
          >перелічений</a
        >,
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#pidpysuvani"
          >підписуваний</a
        > та
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#podavani"
          >подаваний</a
        >
        <a
          href="/uk/docs/Web/Guide/HTML/Content_categories#poviazanyi-z-formoiu-vmist"
          >пов‘язаний з формою</a
        >
        елемент, дотиковий вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Оповідальний вміст</a
        >
        але не повинно бути
        <a
          href="/uk/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >інтерактивного вмісту</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Упускання тегів</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Будь-який елемент, що приймає
        <a href="/uk/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >оповідальний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        {{ARIARole("checkbox")}}, {{ARIARole("link")}},
        {{ARIARole("menuitem")}},
        {{ARIARole("menuitemcheckbox")}},
        {{ARIARole("menuitemradio")}}, {{ARIARole("option")}},
        {{ARIARole("radio")}}, {{ARIARole("switch")}},
        {{ARIARole("tab")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLButtonElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

Атрибути цього елемента включають [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("autofocus")}}
  - : Цей булів атрибут вказує, що кнопка повинна отримати [фокус](/uk/docs/Web/API/HTMLElement/focus) введення, коли сторінка завантажилась. **Лише один елемент в документі може мати такий атрибут.**
- {{htmlattrdef("autocomplete")}} {{non-standard_inline}}
  - : Цей атрибут {{HTMLElement("button")}} є нестандартним, специфічним для Firefox. На відміну від інших браузерів, [Firefox зберігає динамічний стан вимкненості (англ.)](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) елемента {{HTMLElement("button")}} між завантаженнями сторінки. Встановлення на кнопці `autocomplete="off"` вимикає цю функціональність; дивіться {{bug(654072)}}.
- {{htmlattrdef("disabled")}}

  - : Цей булів атрибут не дає користувачеві взаємодіяти з кнопкою: вона не може бути натиснута чи отримати фокус.

    Firefox, на відміну від решти браузерів, [зберігає динамічний стан вимкненості](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) елемента {{HTMLElement("button")}} між завантаженнями сторінки. Використовуйте атрибут {{htmlattrxref("autocomplete","button")}}, щоб контролювати цю функціональність.

- {{htmlattrdef("form")}}

  - : Елемент {{HTMLElement("form")}}, з яким кнопка повинна бути пов‘язана (її _форма-власник_). Значення цього атрибута мусить дорівнювати значенню атрибута `id` елемента `<form>` у тому самому документі. (Якщо цей атрибут не вказаний, то `<button>` пов‘язується з елементом `<form>`, що є її предком, якщо такий є.)

    Цей атрибут дає змогу пов‘язувати елементи `<button>` з елементами `<form>`, що знаходяться будь-де в елементі, а не лише тими, в котрих `<button>` знаходиться. Також таке пов‘язування відкидає зв‘язок з елементом `<form>`, що є предком `<button>`.

- {{htmlattrdef("formaction")}}
  - : URL, що обробляє інформацію, подану кнопкою. Відкидає атрибут {{htmlattrxref("action","form")}} форми-власника кнопки. Нічого не робить, якщо форми-власника немає.
- {{htmlattrdef("formenctype")}}

  - : Якщо кнопка є кнопкою подання (вона знаходиться всередині `<form>` чи пов‘язана з формою в інакший спосіб, а також не має `type="button"`), то цей атрибут вказує, як кодувати при поданні дані форми. Можливі значення:

    - `application/x-www-form-urlencoded`: Усталене значення, якщо атрибут не використаний.
    - `multipart/form-data`: Слід використовувати для подання елементів {{HTMLElement("input")}}, що мають атрибут {{htmlattrxref("type","input")}} зі значенням `file`.
    - `text/plain`: Вказується як поміч при налагодженні; не повинно використовуватись для реального подання форми.

    Якщо вказаний цей атрибут, він відкидає атрибут {{htmlattrxref("enctype","form")}} форми-власника кнопки.

- {{htmlattrdef("formmethod")}}

  - : Якщо кнопка є кнопкою подання (вона знаходиться всередині `<form>` чи пов‘язана з формою в інакший спосіб, а також не має `type="button"`), то цей атрибут задає [метод HTTP](/uk/docs/Web/HTTP/Methods), що використовується для подання форми:

    - `post`: Дані з форми при надсиланні на сервер включені в тіло запиту HTTP. Використовується, коли форма містить інформацію, котра не повинна бути публічною, типу даних для входу.
    - `get`: Дані форми додаються в кінець URL `action` форми, відділені `?`, і результівний URL надсилається на сервер. Цей метод слід використовувати, коли форма [не має побічних ефектів](/uk/docs/Glossary/Idempotent), наприклад, коли це форма пошуку.

    Коли вказаний, то відкидає атрибут {{htmlattrxref("method","form")}} форми-власника кнопки.

- {{htmlattrdef("formnovalidate")}}

  - : Якщо кнопка є кнопкою подання, то цей булів атрибут вказує, що форма не повинна бути [перевірена](/uk/docs/Learn/Forms/Form_validation) при поданні. Якщо вказаний цей атрибут, то він відкидає атрибут {{htmlattrxref("novalidate","form")}} форми-власника кнопки.

    Цей атрибут також доступний на елементах [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image) й [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit).

- {{htmlattrdef("formtarget")}}

  - : Якщо кнопка є кнопкою подання, то цей атрибут є визначеним автором іменем чи стандартизованим ключовим словом, що починається з підкреслення, котре вказує, де показувати відповідь на подання форми. Це `name` чи ключове слово на позначення _контексту перегляду_ (вкладки, вікна чи {{HTMLElement("iframe")}}). Якщо цей атрибут вказаний, то він відкидає атрибут {{htmlattrxref("target", "form")}} форми-власника кнопки. Наступні ключові слова мають особливі значення:

    - `_self`: Завантажує відповідь у той самий контекст перегляду, що й поточний. Це значення є усталеним, коли атрибут не заданий.
    - `_blank`: Завантажує відповідь у новий безіменний контекст перегляду – зазвичай нову вкладку чи вікно, залежно від налаштувань браузера користувача.
    - `_parent`: Завантажує відповідь у контекст перегляду, що є батьківським відносно поточного. Якщо батьківського контексту немає, то результат такий самий, як при використанні значення `_self`.
    - `_top`: Завантажує відповідь у контекст перегляду вищого рівня (тобто такий контекст перегляду, що є предком відносно поточного, а сам батьківського контексту не має). Якщо батьківського контексту немає, то результат такий самий, як при використанні значення `_self`.

- {{htmlattrdef("name")}}
  - : Ім‘я кнопки, котре подається в парі зі значенням атрибута `value` як частина даних форми, коли ця кнопка використовується для її подання.
- {{htmlattrdef("type")}}

  - : Усталена поведінка кнопки. Можливими значеннями є:

    - `submit`: Кнопка подає дані форми на сервер. Це усталена поведінка для пов‘язаних з `<form>` кнопок, коли цей атрибут не вказаний, або ж якщо він має пусте чи недійсне значення.
    - `reset`: Кнопка скидає усі контрольні елементи до їх початкових значень, подібно до [\<input type="reset">](/uk/docs/Web/HTML/Element/input/reset). (Така логіка має тенденцію дратувати користувачів.)
    - `button`: Кнопка не має усталеної поведінки й нічого не робить, коли на неї натискають. Можуть бути клієнтські сценарії, що слухають події елемента.

- {{htmlattrdef("value")}}
  - : Визначає значення, асоційоване з `name` кнопки, коли вона подається разом з даними форми. Це значення передається серверу в параметрах, коли форма подається за допомогою цієї кнопки.

## Примітки

Форма подання з атрибутом `formaction`, але без пов‘язаної з нею форми – нічого не робить. Треба задати їй форму-власника, або обгорнувши в `<form>`, або задавши її атрибуту `form` значення ідентифікатора форми.

Елементи `<button>` набагато простіше оформлювати, ніж елементи {{HTMLElement("input")}}. Можна додати HTML всередину (припустімо, `<i>`, `<br>` чи навіть `<img>`), а також використати для складної візуалізації псевдоелементи {{Cssxref("::after")}} і {{Cssxref("::before")}}.

Якщо кнопки не призначені для подання даних форми на сервер, слід пересвідчитись, що вони мають атрибут `type` зі значенням `button`. Інакше вони спробують подати дані форми й завантажити (відсутню) відповідь, можливо, руйнуючи поточний стан документа.

## Приклад

```html
<button name="button">Натисніть мене</button>
```

{{ EmbedLiveSample('pryklad', 200, 64) }}

## Занепокоєння щодо доступності

### Кнопки-піктограми

Кнопки, що показують своє призначення лише піктограмою, не мають _доступної назви_. Доступні назви надають інформацію допоміжним технологіям, наприклад, читачам з екрана, для розбору сторінки та генерування [дерева доступності](/uk/docs/Learn/Accessibility/What_is_accessibility#api-dostupnosti). Потім допоміжні технології використовують дерево доступності для орієнтування та маніпулювання вмістом сторінки.

Щоб надати кнопці-піктограмі доступне ім‘я, слід додати всередину елемента `<button>` текст, що влучно опише функціональність кнопки.

#### Приклад

```html
<button name="favorite">
  <svg aria-hidden="true" viewBox="0 0 10 10">
    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
  </svg>
  Додати до улюблених
</button>
```

При потребі візуально приховати текст кнопки доступним способом це зробити є використання для її візуального усунення з екрана, але збереження в доступності для допоміжних технологій – [комбінації властивостей CSS (англ.)](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link).

Проте варто зазначити, що якщо залишити текст кнопки візуально видимим, то це допоможе людям, котрі можуть не бути знайомими зі значенням піктограми чи призначенням кнопки. Це особливо доречно для людей, котрі не є технологічно досвідченими, або тих, хто може мати інакші культурні інтерпретації піктограми, котру використовує кнопка.

- [Що таке доступна назва? | The Paciello Group (англ.)](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Розуміння WCAG, пояснення Настанов 4.1 explanations](/uk/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Розуміння критерію успіху 4.1.2 | W3C розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Розмір та суміжність

#### Розмір

Інтерактивні елементи, як то кнопки, повинні надавати достатньо велику область, щоб їх легко було активувати. Це допомагає різним людям, в тому числі тим, хто має розлади контролю рухів, та тим, хто використовує засоби введення невисокої точності, наприклад, стилус чи пальці. Рекомендований мінімальний інтерактивний розмір – 44×44 [пікселів CSS (англ.)](https://www.w3.org/TR/WCAG21/#dfn-css-pixels).

- [Розуміння критерію успіху 2.5.5: розмір мішені | W3C розуміння WCAG 2.1 (англ.)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Розмір мішені та 2.5.5 | Адріан Розеллі (англ.)](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Швидка перевірка: Великі мішені дотику - The A11Y Project (англ.)](https://www.a11yproject.com/posts/large-touch-targets/)

#### Суміжність

Велика кількість інтерактивного вмісту – включно з кнопками – бувши розташованою в тісній суміжності елемент відносно елемента, повинна мати розділовий простір. Такі відступи корисні для людей, котрі мають розлади контролю руху, що можуть випадково активувати не той інтерактивний вміст.

Відступи можуть бути створені за допомогою властивостей CSS, наприклад, {{cssxref("margin")}}.

- [Тремтіння рук та проблема велетенської кнопки - Axess Lab (англ.)](https://axesslab.com/hand-tremors/)

### Інформація про стан ARIA

Щоб описати стан кнопки, коректним атрибутом ARIA є [`aria-pressed`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-pressed), а не [`aria-checked`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-checked) чи [`aria-selected`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Щоб дізнатися більше, читайте інформацію про [роль кнопки ARIA](/uk/docs/Web/Accessibility/ARIA/Roles/button_role).

### Firefox

Firefox додасть кнопці, що має фокус, дрібний пунктирний контур. Такий контур оголошується за допомогою CSS в списку стилів браузера, але його можна відкинути, щоб додати власний стиль кнопки з фокусом за допомогою [`button::-moz-focus-inner { }`](/uk/docs/Web/CSS/::-moz-focus-inner).

Коли такий вбудований стиль відкинутий, важливо **пересвідчитися, що зміни стану при переведенні фокуса на кнопку достатньо значні**, щоб люди з розладами зору могли його помітити.

Співвідношення колірного контрасту визначається порівнянням світності тексту кнопки й кольору тла зі тлом, на котрому розташована кнопка. Для виконання нинішніх [Настанов з доступності вебвмісту (WCAG) (англ.)](https://www.w3.org/WAI/standards-guidelines/wcag/) потрібне співвідношення 4.5:1 для текстового вмісту і 3:1 для великого тексту. (Великий текст – визначений як 18.66px і {{cssxref("font-weight", "грубий")}} чи більший, або 24px чи більший.)

- [WebAIM: Перевірка колірного контрасту (англ.)](https://webaim.org/resources/contrastchecker/)
- [MDN розуміння WCAG, пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння критерію успіху 1.4.3 | W3C Розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Клацання й фокус

Те, чи передасть клацання {{HTMLElement("button", "кнопки")}} цій кнопці фокус, залежить від браузера й операційної системи. Результати для {{HTMLElement("input")}} з `type="button"` і `type="submit"` – такі самі.

<table>
  <caption>
    Чи передасть клацання {{HTMLElement("button", "кнопки")}} цій кнопці фокус?
  </caption>
  <thead>
    <tr>
      <th>Настільні браузери</th>
      <th>Windows 8.1</th>
      <th>OS X 10.X</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Firefox</th>
      <td>✅ Так - Firefox 30.0</td>
      <td>❌ Ні (навіть із <code>tabindex</code>) Firefox 63</td>
    </tr>
    <tr>
      <th>Chrome</th>
      <td>✅ Так - Chrome 35</td>
      <td>✅ Так - Chrome 65</td>
    </tr>
    <tr>
      <th>Safari</th>
      <td>Н/З</td>
      <td>
        ❌ Ні (навіть із <code>tabindex</code>) Safari 12 (<a
          href="https://bugs.webkit.org/show_bug.cgi?id=22261"
          >вада 22261</a
        >)
      </td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td>✅ Так - Internet Explorer 11</td>
      <td>Н/З</td>
    </tr>
    <tr>
      <th>Presto</th>
      <td>✅ Так - Opera 12</td>
      <td>✅ Так - Opera 12</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>
    Чи передає тикання {{HTMLElement("button", "кнопки")}} цій кнопці фокус?
  </caption>
  <thead>
    <tr>
      <th>Мобільні браузери</th>
      <th>iOS 7.1.2</th>
      <th>Android 4.4.4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Safari Mobile</th>
      <td>❌ Ні (навіть із <code>tabindex</code>)</td>
      <td>Н/З</td>
    </tr>
    <tr>
      <th>Chrome 35</th>
      <td>❌ Ні (навіть із <code>tabindex</code>)</td>
      <td>✅ Так</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}
