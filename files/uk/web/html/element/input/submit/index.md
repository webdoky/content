---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
page-type: html-element
browser-compat: html.elements.input.type_submit
---

{{HTMLSidebar}}

Елементи {{HTMLElement("input")}} типу **`submit`** (подати) візуалізуються як кнопки. Коли трапляється подія {{domxref("Element/click_event", "click")}} (зазвичай у зв'язку з тим, що користувач клацнув кнопку), то {{Glossary("User agent", "користувацький агент")}} намагається подати форму на сервер.

## Значення

Атрибут [`value`](/uk/docs/Web/HTML/Element/input#value) елемента `<input type="submit">` містить рядок, що виводиться як підпис кнопки. Без нього кнопка не матиме фактичного значення.

### Задання атрибута value

```html
<input type="submit" value="Надіслати запит" />
```

{{EmbedLiveSample("zadannia-atrybuta-value", 650, 30)}}

### Пропуск атрибута value

Якщо не задати `value`, то кнопка матиме усталений підпис, обраний користувацьким агентом. Такий підпис, імовірно, буде чимось схожим на "Submit" або "Submit Query". Ось приклад кнопки подання з усталеним підписом у вашому браузері:

```html
<input type="submit" />
```

{{EmbedLiveSample("propusk-atrybuta-value", 650, 30)}}

## Додаткові атрибути

На додачу до атрибутів, спільних для всіх елементів {{HTMLElement("input")}}, поля кнопки `submit` приймають наступні атрибути.

### formaction

Рядок, що позначає URL, на котру будуть подані дані. Це значення має пріоритет над атрибутом [`action`](/uk/docs/Web/HTML/Element/form#action) елемента {{HTMLElement("form")}}, котрому належить {{HTMLElement("input")}}.

Цей атрибут також доступний на елементах [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image) і {{HTMLElement("button")}}.

### formenctype

Рядок, що позначає метод кодування при поданні даних форми на сервер. Є три дозволені значення:

- `application/x-www-form-urlencoded`
  - : Це усталене значення, котре надсилає дані форми як рядок після [відсоткового кодування](https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D0%BE%D0%B2%D0%B5_%D0%BA%D0%BE%D0%B4%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F) тексту за допомогою алгоритму штибу {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Використовує для керування даними API {{domxref("FormData")}}, даючи змогу подавати на сервер файли. Цей тип кодування _повинен_ використовуватися, якщо форма містить елементи {{HTMLElement("input")}} з [`type`](/uk/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/uk/docs/Web/HTML/Element/input/file)).
- `text/plain`
  - : Простий текст; найкорисніше лише для зневадження, щоб можна було легко бачити дані до подання.

Якщо атрибут `formenctype` задано, то його значення відкидає атрибут [`action`](/uk/docs/Web/HTML/Element/form#action) форми-власника.

Цей атрибут також доступний на елементах [`<input type="image">`](/uk/docs/Web/HTML/Element/input/image) і {{HTMLElement("button")}}.

### formmethod

Рядок, що вказує метод HTTP, що використовується при поданні даних форми; це значення заміщає атрибут [`method`](/uk/docs/Web/HTML/Element/form#method), заданий на формі-власнику. Дозволені значення:

- `get`
  - : URL формується, починаючи від URL, заданої атрибутом `formaction` або [`action`](/uk/docs/Web/HTML/Element/form#action), далі додається символ знаку питання ("?"), після чого додаються дані форми, закодовані так, як описано в `formenctype` або атрибуті [`enctype`](/uk/docs/Web/HTML/Element/form#enctype) форми. Потім цей URL надсилається на сервер за допомогою запиту HTTP {{HTTPMethod("get")}}. Цей метод добре працює для простих форм, що містять лише символи ASCII та не мають побічних ефектів. Це усталене значення.
- `post`
  - : Дані форми включаються в тіло запиту, що надсилається за URL, заданою атрибутом `formaction` або [`action`](/uk/docs/Web/HTML/Element/form#action) за допомогою запиту HTTP {{HTTPMethod("post")}}. Цей метод підтримує складні дані та файлові прикріплення.
- `dialog`
  - : Цей метод використовується, аби вказати, що кнопка закриває діалог, з яким пов'язане поле, і взагалі не передає дані форми.

Також цей атрибут доступний на елементах [`<input type="image">`](/uk/docs/Web/HTML/Element/input/submit) і {{HTMLElement("button")}}.

### formnovalidate

Булів атрибут, котрий, якщо присутній, то задає те, що форма не повинна бути валідована перед поданням на сервер. Він заміщає значення атрибута [`novalidate`](/uk/docs/Web/HTML/Element/form#novalidate) форми-власника елемента.

Також цей атрибут доступний на елементах [`<input type="submit">`](/uk/docs/Web/HTML/Element/input/submit) і {{HTMLElement("button")}}.

### formtarget

Рядок, що задає ім'я або ключове слово, що вказує на те, де виводити відповідь, отриману після подання форми. Рядок повинен бути ім'ям **контексту перегляду** (тобто вкладки, вікна або {{HTMLElement("iframe")}}). Задане цим атрибутом значення заміщає цільовий контекст, заданий атрибутом [`target`](/uk/docs/Web/HTML/Element/form#target) елемента {{HTMLElement("form")}}, що є власником поля.

На додачу до реальних імен вкладок, вікон чи вбудованих фреймів, є кілька особливих ключових слів, що також можуть бути використані:

- `_self`
  - : Завантажує відповідь в той самий контекст перегляду, що й той, що містить поточну форму. Це замінить поточний документ отриманими даними. Це усталене значення, що використовується, якщо нічого не задано.
- `_blank`
  - : Завантажує відповідь у новий, безіменний контекст перегляду. Здебільшого це нова вкладка в тому самому вікні, що й поточний документ, але може бути й не так, залежно від налаштувань {{Glossary("User agent", "користувацького агента")}}.
- `_parent`
  - : Завантажує відповідь у батьківський контекст перегляду щодо поточного. Якщо такого контексту немає, то спрацьовує так само, як `_self`.
- `_top`
  - : Завантажує відповідь у контекст перегляду найвищого рівня; це контекст перегляду, що є найстаршим предком поточного. Якщо поточний контекст є найвищим, то спрацьовує так само, як `_self`.

Також цей атрибут доступний на елементах [`<input type="image">`](/uk/docs/Web/HTML/Element/input/submit) і {{HTMLElement("button")}}.

## Застосування кнопок подання

Кнопки `<input type="submit">` використовуються для подання форм. При потребі створити власну кнопку, а потім налаштувати її поведінку за допомогою JavaScript – необхідно використовувати [`<input type="button">`](/uk/docs/Web/HTML/Element/input/button), а ще краще – елемент {{htmlelement("button")}}.

Якщо вирішено використовувати елементи `<button>` для створення кнопок у формі, то слід мати на увазі: якщо `<button>` перебуває всередині {{HTMLElement("form")}}, то така кнопка працює як кнопка "submit" (подання). Тож слід мати звичку явно задавати те, яка кнопка є кнопкою подання.

### Проста кнопка подання

Почнімо зі створення форми з простою кнопкою подання:

```html
<form>
  <div>
    <label for="example">Подаймо трохи тексту</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Надіслати" />
  </div>
</form>
```

Це візуалізується так:

{{EmbedLiveSample("prosta-knopka-podannia", 650, 100)}}

Спробуйте ввести в текстове поле трохи тексту, а потім подати форму.

При поданні пара ім'я-значення надсилається на сервер. У цьому прикладі ця пара буде `text=usertext`, де "usertext" – це текст, введений користувачем, закодований для збереження спеціальних символів. Те, де і як подаються дані, залежать від налаштувань `<form>`; дивіться більше деталей в [Надсиланні даних форми](/uk/docs/Learn/Forms/Sending_and_retrieving_form_data).

### Додавання до кнопки подання комбінації клавіш

Комбінації клавіш, також відомі як клавіші активації або клавіатурні еквіваленти, дають користувачам змогу активувати кнопку за допомогою клавіші або комбінації клавіш клавіатури. Щоб додати до кнопки подання комбінацію клавіш, як і до будь-якого іншого {{HTMLElement("input")}}, для якого це має зміст, використовується глобальний атрибут [`accesskey`](/uk/docs/Web/HTML/Global_attributes/accesskey).

У цьому прикладі <kbd>s</kbd> задано як клавішу активації (необхідно натиснути <kbd>s</kbd> плюс певні клавіші-модифікатори, відповідні щодо комбінації браузера та ОС). Щоб уникнути конфліктів зі власними комбінаціями клавіш користувацького агента, використовуються інакші клавіші-модифікатори, ніж в інших комбінаціях на комп'ютері. Дивіться більше деталей в [`accesskey`](/uk/docs/Web/HTML/Global_attributes/accesskey).

Ось попередній приклад, до якого додана клавіша активації <kbd>s</kbd>:

```html
<form>
  <div>
    <label for="example">Введіть трохи тексту</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Надіслати" accesskey="s" />
  </div>
</form>
```

Наприклад, у Firefox для Mac натискання <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> активує клавішу "Надіслати", а Chrome на Windows використовує <kbd>Alt</kbd>+<kbd>S</kbd>.

{{EmbedLiveSample("dodavannia-do-knopky-podannia-kombinatsii-klavish", 650, 100)}}

Проблема з прикладом вище полягає в тому, що користувач не може дізнатися про комбінацію клавіш! Це особливо важливо, оскільки модифікатори зазвичай є нестандартними, аби уникати їхніх конфліктів. При розробці сайту слід обов'язково подати цю інформацію в формі, що не шкодить дизайну сайту (наприклад, шляхом надання легкодоступного посилання, що веде до інформації про комбінації клавіш на сайті). Додавання підказки до кнопки (за допомогою атрибута [`title`](/uk/docs/Web/HTML/Global_attributes#title)) також може допомогти, попри те, що у зв'язку з потребами доступності, таке рішення не є повним.

### Вимикання та вмикання кнопки подання

Щоб вимкнути кнопку подання, необхідно задати на ній атрибут [`disabled`](/uk/docs/Web/HTML/Attributes/disabled), отак:

```html
<input type="submit" value="Надіслати" disabled />
```

На ходу вмикати та вимикати кнопки можна шляхом присвоєння `disabled` зі значенням `true` або `false`; у JavaScript це має вигляд `btn.disabled = true` або `btn.disabled = false`.

> **Примітка:** Більше ідей щодо вмикання та вимикання кнопок дивіться на сторінці [`<input type="button">`](/uk/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Валідація

Кнопки не беруть участі в валідації обмежень; вони не мають значення, котре можна було б обмежити.

## Приклади

Прості приклади наведено вище. Насправді про кнопки подання більше нічого додати. Контрольний елемент іноді зветься "простою кнопкою" не просто так.

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#znachennia">Значення</a></strong></td>
      <td>Рядок, що використовується як підпис кнопки</td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>Доступні спільні атрибути</strong></td>
      <td>
        <a href="/uk/docs/Web/HTML/Element/input#type"><code>type</code></a> і
        <a href="/uk/docs/Web/HTML/Element/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Інтерфейс DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Методи</strong></td>
      <td>Жодних</td>
    </tr>
    <tr>
      <td><strong>Неявна роль ARIA</strong></td>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Специфікація

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement("input")}} та інтерфейс {{domxref("HTMLInputElement")}}, що його реалізовує.
- [Форми та кнопки](/uk/docs/Learn/Forms/Basic_native_form_controls#spravzhni-knopky)
- [Форми HTML](/uk/docs/Learn/Forms)
- Елемент {{HTMLElement("button")}}
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
