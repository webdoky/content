---
title: "<button>: Елемент кнопки"
slug: Web/HTML/Element/button
page-type: html-element
browser-compat: html.elements.button
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<button>`** (кнопка) – інтерактивний елемент, що активується користувачем за допомогою миші, клавіатури, пальця, голосової команди чи іншої допоміжної технології. Бувши активованою, кнопка виконує дію, наприклад, подання [форми](/uk/docs/Learn/Forms) чи відкриття діалогу.

Усталено кнопки HTML подаються в стилі, що нагадує стиль платформи, на котрій працює {{Glossary("user agent", "користувацький агент")}}, але вигляд кнопок можна змінити за допомогою [CSS](/uk/docs/Web/CSS).

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

## Attributes

Атрибути цього елемента включають [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `autofocus`
  - : Цей булів атрибут вказує, що кнопка повинна отримати [фокус](/uk/docs/Web/API/HTMLElement/focus) введення, коли сторінка завантажилась. **Лише один елемент в документі може мати такий атрибут.**
- `autocomplete` {{non-standard_inline}}
  - : Цей атрибут {{HTMLElement("button")}} є нестандартним, специфічним для Firefox. На відміну від інших браузерів, [Firefox зберігає динамічний стан вимкненості (англ.)](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) елемента {{HTMLElement("button")}} між завантаженнями сторінки. Встановлення на кнопці `autocomplete="off"` вимикає цю функціональність; дивіться [ваду Firefox 654072](https://bugzil.la/654072).
- `disabled`

  - : Цей булів атрибут не дає користувачеві взаємодіяти з кнопкою: вона не може бути натиснута чи отримати фокус.

    Firefox, на відміну від решти браузерів, [зберігає динамічний стан вимкненості](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) елемента {{HTMLElement("button")}} між завантаженнями сторінки. Використовуйте атрибут [`autocomplete`](#autocomplete), щоб контролювати цю функціональність.

- `form`

  - : Елемент {{HTMLElement("form")}}, з яким кнопка повинна бути пов'язана (її _форма-власник_). Значення цього атрибута мусить дорівнювати значенню атрибута `id` елемента `<form>` у тому самому документі. (Якщо цей атрибут не вказаний, то `<button>` пов'язується з елементом `<form>`, що є її предком, якщо такий є.)

    Цей атрибут дає змогу пов'язувати елементи `<button>` з елементами `<form>`, що знаходяться будь-де в елементі, а не лише тими, в котрих `<button>` знаходиться. Також таке пов'язування відкидає зв'язок з елементом `<form>`, що є предком `<button>`.

- `formaction`
  - : URL, що обробляє інформацію, подану кнопкою. Відкидає атрибут [`action`](/uk/docs/Web/HTML/Element/form#action) форми-власника кнопки. Нічого не робить, якщо форми-власника немає.
- `formenctype`

  - : Якщо кнопка є кнопкою подання (вона знаходиться всередині `<form>` чи пов'язана з формою в інакший спосіб, а також не має `type="button"`), то цей атрибут вказує, як кодувати дані форми при її поданні. Можливі значення:

    - `application/x-www-form-urlencoded`: Усталене значення, якщо атрибут не залучено.
    - `multipart/form-data`: Використовується для подання елементів {{HTMLElement("input")}}, що мають атрибут [`type`](/uk/docs/Web/HTML/Element/input#type) зі значенням `file`.
    - `text/plain`: Вказується як поміч при налагодженні; не повинно використовуватись для реального подання форми.

    Якщо вказаний цей атрибут, він відкидає атрибут [`enctype`](/uk/docs/Web/HTML/Element/form#enctype) форми-власника кнопки.

- `formmethod`

  - : Якщо кнопка є кнопкою подання (вона знаходиться всередині `<form>` чи пов'язана з формою в інакший спосіб, а також не має `type="button"`), то цей атрибут задає [метод HTTP](/uk/docs/Web/HTTP/Methods), що використовується для подання форми:

    - `post`: Дані з форми при надсиланні на сервер включені в тіло запиту HTTP. Використовується, коли форма містить інформацію, котра не повинна бути публічною, типу даних для входу.
    - `get`: Дані форми додаються в кінець URL `action` форми, відділені `?`, і результівний URL надсилається на сервер. Цей метод слід використовувати, коли форма [не має побічних ефектів](/uk/docs/Glossary/Idempotent), наприклад, коли це форма пошуку.

    Коли вказаний, то відкидає атрибут [`method`](/uk/docs/Web/HTML/Element/form#method) форми-власника кнопки.

- `formnovalidate`

  - : Якщо кнопка є кнопкою подання, то цей булів атрибут вказує, що форма не повинна бути [перевірена](/uk/docs/Learn/Forms/Form_validation) при поданні. Якщо вказаний цей атрибут, то він відкидає атрибут [`novalidate`](/uk/docs/Web/HTML/Element/form#novalidate) форми-власника кнопки.

    Цей атрибут також доступний на елементах [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image) й [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit).

- `formtarget`

  - : Якщо кнопка є кнопкою подання, то цей атрибут є визначеним автором іменем чи стандартизованим ключовим словом, що починається з підкреслення, котре вказує, де показувати відповідь на подання форми. Це `name` чи ключове слово на позначення _контексту перегляду_ (вкладки, вікна чи {{HTMLElement("iframe")}}). Якщо цей атрибут вказаний, то він відкидає атрибут [`target`](/uk/docs/Web/HTML/Element/form#target) форми-власника кнопки. Наступні ключові слова мають особливі значення:

    - `_self`: Завантажує відповідь у той самий контекст перегляду, що й поточний. Це значення є усталеним, коли атрибут не заданий.
    - `_blank`: Завантажує відповідь у новий безіменний контекст перегляду – зазвичай нову вкладку чи вікно, залежно від налаштувань браузера користувача.
    - `_parent`: Завантажує відповідь у контекст перегляду, що є батьківським відносно поточного. Якщо батьківського контексту немає, то результат такий самий, як при використанні значення `_self`.
    - `_top`: Завантажує відповідь у контекст перегляду вищого рівня (тобто такий контекст перегляду, що є предком відносно поточного, а сам батьківського контексту не має). Якщо батьківського контексту немає, то результат такий самий, як при використанні значення `_self`.

- `name`
  - : Ім'я кнопки, котре подається в парі зі значенням атрибута `value` як частина даних форми, коли ця кнопка використовується для її подання.
- `type`

  - : Усталена поведінка кнопки. Можливими значеннями є:

    - `submit`: Кнопка подає дані форми на сервер. Це усталена поведінка для пов'язаних з `<form>` кнопок, коли цей атрибут не вказаний, або ж якщо він має пусте чи недійсне значення.
    - `reset`: Кнопка скидає усі контрольні елементи до їх початкових значень, подібно до [\<input type="reset">](/uk/docs/Web/HTML/Element/input/reset). (Така логіка має тенденцію дратувати користувачів.)
    - `button`: Кнопка не має усталеної поведінки й нічого не робить, коли на неї натискають. Можуть бути клієнтські сценарії, що слухають події елемента.

- `value`
  - : Визначає значення, асоційоване з `name` кнопки, коли вона подається разом з даними форми. Це значення передається серверу в параметрах, коли форма подається за допомогою цієї кнопки.

## Примітки

Кнопка подання з атрибутом `formaction`, але без пов'язаної з нею форми – нічого не робить. Треба задати їй форму-власника, або обгорнувши в `<form>`, або задавши її атрибуту `form` значення ідентифікатора форми.

Елементи `<button>` набагато простіше оформлювати, ніж елементи {{HTMLElement("input")}}. Можна додати HTML всередину (припустімо, `<i>`, `<br>` чи навіть `<img>`), а також використати для складної візуалізації псевдоелементи {{Cssxref("::after")}} і {{Cssxref("::before")}}.

Якщо кнопки не призначені для подання даних форми на сервер, слід пересвідчитись, що вони мають атрибут `type` зі значенням `button`. Інакше вони спробують подати дані форми й завантажити (відсутню) відповідь, можливо, руйнуючи поточний стан документа.

Хоч `<button type="button">` не має усталеної поведінки, сценарії можуть додавати обробники подій, котрі реалізують якусь логіку. Активована кнопка може виконувати програмовані дії, описані мовою [JavaScript](/uk/docs/Learn/JavaScript), як то усунення елемента зі списку.

## Приклади

```html
<button name="button">Натисніть мене</button>
```

{{EmbedLiveSample('pryklady', 200, 64)}}

## Занепокоєння щодо доступності

### Кнопки-піктограми

Кнопки, що показують своє призначення лише піктограмою, не мають _доступної назви_. Доступні назви надають інформацію допоміжним технологіям, наприклад, читачам з екрана, для розбору сторінки та генерування [дерева доступності](/uk/docs/Learn/Accessibility/What_is_accessibility#api-dostupnosti). Потім допоміжні технології використовують дерево доступності для орієнтування та маніпулювання вмістом сторінки.

Щоб надати кнопці-піктограмі доступне ім'я, слід додати всередину елемента `<button>` текст, що влучно опише функціональність кнопки.

#### Приклади

```html
<button name="favorite">
  <svg aria-hidden="true" viewBox="0 0 10 10">
    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
  </svg>
  Додати до улюблених
</button>
```

##### Результат

{{EmbedLiveSample('knopky-piktohramy')}}

При потребі візуально приховати текст кнопки доступним способом це зробити є використання для її візуального усунення з екрана, але збереження в доступності для допоміжних технологій – [комбінації властивостей CSS (англ.)](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link).

Проте варто зазначити, що якщо залишити текст кнопки візуально видимим, то це допоможе людям, котрі можуть не бути знайомими зі значенням піктограми чи призначенням кнопки. Це особливо доречно для людей, котрі не є технологічно досвідченими, або тих, хто може мати інакші культурні інтерпретації піктограми, котру використовує кнопка.

- [Що таке доступна назва? | The Paciello Group (англ.)](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Розуміння WCAG, пояснення Настанов 4.1](/uk/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
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

Те, чи передасть клацання кнопки {{HTMLElement("button")}} або {{HTMLElement("input")}} цій кнопці фокус, залежить від браузера й операційної системи. Більшість браузерів – це робить, але [Safari – ні, і це не помилка](https://webkit.org/b/22261).

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
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        >,
        <a
          href="/uk/docs/Web/HTML/Content_categories#interaktyvnyi-vmist"
          >інтерактивний вміст</a
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#perelicheni"
          >перелічений</a
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#pidpysni"
          >підписуваний</a
        > та
        <a href="/uk/docs/Web/HTML/Content_categories#podavalni"
          >подаваний</a
        >
        <a
          href="/uk/docs/Web/HTML/Content_categories#formovyi-vmist"
          >пов'язаний з формою</a
        >
        елемент, відчутний вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >Оповідальний вміст</a
        >,
        але не повинно бути
        <a
          href="/uk/docs/Web/HTML/Content_categories#interaktyvnyi-vmist"
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
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
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
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLButtonElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}
