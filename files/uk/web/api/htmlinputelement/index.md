---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
page-type: web-api-interface
tags:
  - API
  - DOM
  - HTML DOM
  - HTMLInputElement
  - Input
  - Interface
  - NeedsContent
  - NeedsMarkupWork
  - Reference
browser-compat: api.HTMLInputElement
---

{{APIRef("HTML DOM")}}

Інтерфейс **`HTMLInputElement`** пропонує спеціальні властивості й методи для роботи з опціями, компонуванням і представленням елементів {{HtmlElement("input")}}.

{{InheritanceDiagram}}

## Властивості примірників

Частина властивостей застосовується лише до типів елементів введення, що підтримують відповідні атрибути.

- {{domxref("HTMLInputElement.align", "align")}} {{Deprecated_Inline}}

  - : `string`: **Представляє** шикування елемента. _Натомість використовуйте CSS._

- {{domxref("HTMLInputElement.autocapitalize", "autocapitalize")}} {{Experimental_Inline}}

  - : `string`: **Визначає** логіку додавання великої літери в полі введення. Дійсні значення: `none`, `off`, `characters`, `words`, `sentences`.

- {{domxref("HTMLInputElement.defaultValue", "defaultValue")}}

  - : `string`: **Повертає чи задає** усталене значення, від початку задане в HTML, що породив цей об'єкт.

- {{domxref("HTMLInputElement.dirName", "dirName")}}

  - : `string`: **Повертає чи задає** напрям письма тексту в елементі.

- {{domxref("HTMLInputElement.inputmode", "inputmode")}}

  - : Дає підказку браузерам щодо того, який тип конфігурації віртуальної клавіатури використовувати, коли редагується такий елемент чи його вміст.

- {{domxref("HTMLInputElement.labels", "labels")}} {{ReadOnlyInline}}

  - : Масив {{domxref("NodeList")}}: **Повертає** список елементів {{HTMLElement("label")}}, котрі є підписами для такого елемента.

- {{domxref("HTMLInputElement.list", "list")}} {{ReadOnlyInline}}

  - : {{domxref("HTMLElement")}}: **Повертає** елемент, на котрий вказує атрибут [`list`](/uk/docs/Web/HTML/Element/input#list-spysok). Властивість може мати значення `null`, якщо елемент не знайдений в тому самому дереві.

- {{domxref("HTMLInputElement.multiple", "multiple")}}

  - : `boolean`: **Повертає чи задає** атрибут [`multiple`](/uk/docs/Web/HTML/Element/input#multiple-kilka) елемента, котрий вказує на те, чи може бути більш ніж одне значення (наприклад, кілька файлів зразу).

- {{domxref("HTMLInputElement.name", "name")}}

  - : `string`: **Повертає чи задає** атрибут [`name`](/uk/docs/Web/HTML/Element/input#name-imia) елемента, що містить ім'я, котре ідентифікує елемент при подачі форми.

- {{domxref("HTMLInputElement.step", "step")}}

  - : `string`: **Повертає чи задає** атрибут [`step`](/uk/docs/Web/HTML/Element/input#step-krok) елемента, котрий взаємодіє з [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) і [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum) для обмеження того, на яке значення може бути збільшено значення числа або дати з часом. Може бути рядком `any` або будь-яким додатним дійсним числом. Якщо значення – не `any`, то контрольний елемент приймає лише такі значення, які більші за мінімум на число, кратне значенню `step`.

- {{domxref("HTMLInputElement.type", "type")}}

  - : `string`: **Повертає чи задає** атрибут [`type`](/uk/docs/Web/HTML/Element/input#type-typ) елемента, , що вказує на тип контрольного елемента до виводу. Можливі значення перелічені в документації атрибута [`type`](/uk/docs/Web/HTML/Element/input#type-typ).

- {{domxref("HTMLInputElement.useMap", "useMap")}} {{Deprecated_Inline}}

  - : `string`: **Представляє** зображення-карту клієнтського боку.

- {{domxref("HTMLInputElement.value", "value")}}

  - : `string`: **Повертає чи задає** поточне значення контрольного елемента. Якщо користувач вводить значення, відмінне від очікуваного, ця властивість може повернути порожній рядок.

- {{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}

  - : {{jsxref("Date")}}: **Повертає чи задає** значення елемента, розтлумачене як дата, або `null`, якщо перетворення неможливе.

- {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
  - : `double`: **Повертає** значення елемента, розтлумачене як щось із наступного, по черзі: часове значення, число, або `NaN`, якщо перетворення неможливе

### Властивості примірника, пов'язані з батьківською формою

- {{domxref("HTMLInputElement.form", "form")}} {{ReadOnlyInline}}

  - : {{domxref("HTMLFormElement")}}: **Повертає** посилання на батьківський елемент {{HtmlElement("form")}}.

- {{domxref("HTMLInputElement.formAction", "formAction")}}

  - : `string`: **Повертає чи задає** атрибут [`formaction`](/uk/docs/Web/HTML/Element/input#formaction-diia-formy) елемента, що містить URL програми, що обробляє інформацію, подану елементом. Ця властивість відкидає атрибут {{htmlattrxref("action", "form")}} батьківської форми.

- {{domxref("HTMLInputElement.formEnctype", "formEnctype")}}

  - : `string`: **Повертає чи задає** атрибут [`formenctype`](/uk/docs/Web/HTML/Element/input#formenctype-typ-koduvannia-formy) елемента, що містить тип вмісту, котрий використовується для подання форми на сервер. Ця властивість відкидає атрибут {{htmlattrxref("enctype", "form")}} батьківської форми.

- {{domxref("HTMLInputElement.formMethod", "formMethod")}}

  - : `string`: **Повертає чи задає** атрибут [`formmethod`](/uk/docs/Web/HTML/Element/input#formmethod-metod-formy) елемента, що містить метод HTTP, котрий браузер використовує для подання форми. Ця властивість відкидає атрибут {{htmlattrxref("method", "form")}} батьківської форми.

- {{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}

  - : `boolean`: **Повертає чи задає** атрибут [`formnovalidate`](/uk/docs/Web/HTML/Element/input#formnovalidate-nevaliduvannia-formy) елемента, котрий вказує на те, що форма не повинна перевірятися при подачі. Ця властивість відкидає атрибут {{htmlattrxref("novalidate", "form")}} батьківської форми.

- {{domxref("HTMLInputElement.formTarget", "formTarget")}}
  - : `string`: **Повертає чи задає** атрибут [`formtarget`](/uk/docs/Web/HTML/Element/input#formtarget-tsil-formy) елемента, що містить ім'я чи ключове слово, котре вказує на те, куди буде виведена відповідь на подання форми. Ця властивість відкидає атрибут {{htmlattrxref("target", "form")}} батьківської форми.

### Властивості примірника, що застосовуються до полів введення будь-якого типу, окрім hidden

- {{domxref("HTMLInputElement.autofocus", "autofocus")}}

  - : `boolean`: **Повертає чи задає** атрибут [`autofocus`](/uk/docs/Web/HTML/Element/input#autofocus) елемента, котрий задає те, чи повинний контрольний елемент отримувати фокус введення при завантаженні сторінки, якщо користувач це не перевизначить, наприклад, почавши друкувати в іншому полі. Лише один елемент форми в документі може мати атрибут [`autofocus`](/uk/docs/Web/HTML/Element/input#autofocus).

- {{domxref("HTMLInputElement.disabled", "disabled")}}

  - : `boolean`: **Повертає чи задає** атрибут [`disabled`](/uk/docs/Web/HTML/Element/input#disabled-vymknene) елемента, котрий вказує на те, що контрольний елемент недоступний для взаємодії. Значення поля не будуть подані з формою. Дивіться також [`readonly`](/uk/docs/Web/HTML/Element/input#-lyshe-dlia-chytannia).

- {{domxref("HTMLInputElement.required", "required")}}

  - : `boolean`: **Повертає чи задає** атрибут [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi) елемента, котрий вказує на те, що користувач мусить додати значення перед поданням форми.

- {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}

  - : `string`: **Повертає** повідомлення з урахуванням локальних особливостей, котре описує обмеження валідації, котрим контрольний елемент не відповідає (якщо такі є). Це буде порожній рядок, якщо контрольний елемент не є кандидатом на валідацію обмежень ([`willValidate`](/uk/docs/Web/API/HTMLObjectElement/willValidate) має значення `false`) або обмеження виконано. Це значення може бути задано за допомогою методу {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}.

- {{domxref("HTMLInputElement.validity", "validity")}} {{ReadOnlyInline}}

  - : {{domxref("ValidityState")}}: **Повертає** поточний стан валідності елемента.

- {{domxref("HTMLInputElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : `boolean`: **Повертає** значення, котре вказує на те, чи є елемент кандидатом на валідацію обмежень. Значенням є `false`, якщо якісь умови відмовляють йому в валідації обмежень, серед них: його `type` – `hidden`, `reset` або `button`, він має предка {{HTMLElement("datalist")}}, або його властивість `disabled` має значення `true`.

### Властивості примірника, котрі застосовуються лише до елементів типу checkbox і radio

- {{domxref("HTMLInputElement.checked", "checked")}}

  - : `boolean`: **Повертає чи задає** поточний стан елемента.

- {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}

  - : `boolean`: **Повертає чи задає** усталений стан радіокнопки чи поля для галочки, початково задане в HTML, що породив такий об'єкт.

- {{domxref("HTMLInputElement.indeterminate", "indeterminate")}}
  - : `boolean`: **Повертає** значення, котре вказує на те, чи перебуває поле для галочки або радіокнопка в стані невизначеності. Для полів для галочки такий стан призводить до певного затемнення, аби продемонструвати, що стан поля – невизначеність (немає ані галочки, ані відсутності галочки). Не впливає на значення атрибута `checked`, а клацання поля призведе до присвоєння `indeterminate` значення хибності.

### Властивості примірника, котрі застосовуються лише до елементів типу image

- {{domxref("HTMLInputElement.alt", "alt")}}

  - : `string`: **Повертає чи задає** атрибут [`alt`](/uk/docs/Web/HTML/Element/input#alt-alternatyva) елемента, котрий містить запасний текст.

- {{domxref("HTMLInputElement.height", "height")}}

  - : `string`: **Повертає чи задає** атрибут [`height`](/uk/docs/Web/HTML/Element/input#height-vysota) елемента, котрий задає висоту зображення, виведеного за кнопку.

- {{domxref("HTMLInputElement.src", "src")}}

  - : `string`: **Повертає чи задає** атрибут [`src`](/uk/docs/Web/HTML/Element/input#src-dzherelo) елемента, котрий задає URI місцеперебування зображення, котре буде показано на графічній кнопці подання.

- {{domxref("HTMLInputElement.width", "width")}}
  - : `string`: **Повертає чи задає** атрибут [`width`](/uk/docs/Web/HTML/Element/input#width-shyryna) елемента, котрий задає ширину зображення, виведеного за кнопку.

### Властивості примірника, котрі застосовуються лише до елементів типу file

- {{domxref("HTMLInputElement.accept", "accept")}}

  - : `string`: **Повертає чи задає** атрибут [`accept`](/uk/docs/Web/HTML/Element/input#accept-pryimannia) елемента, що містить розділений комами список типів файлів, котрі можуть бути вибрані.

- {{domxref("HTMLInputElement.allowdirs", "allowdirs")}} {{Non-standard_Inline}}

  - : `boolean`: Частина нестандартного API завантаження тек. Вказує на те, чи повинні бути доступні для вибору в списку файлів і теки, і файли. Реалізовано лише в Firefox, приховано за налаштуванням.

- {{domxref("HTMLInputElement.files", "files")}}

  - : {{domxref("FileList")}}: **Повертає чи задає** список {{domxref("File")}} objects representing the files selected for upload.

- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}

  - : `boolean`: **Повертає** атрибут [`webkitdirectory`](/uk/docs/Web/HTML/Element/input#webkitdirectory). Коли `true`, то інтерфейс вибору файлу приймає замість файлів винятково теки.

- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}}
  - : Масив {{domxref("FileSystemEntry")}}: **Описує** вибрані файли чи теки.

### Властивості примірника, котрі застосовуються лише до видимих елементів, що містять текст або числа

- {{domxref("HTMLInputElement.autocomplete", "autocomplete")}}

  - : `string`: **Повертає чи задає** атрибут [`autocomplete`](/uk/docs/Web/HTML/Element/input#autocomplete) елемента, котрий вказує на те, чи повинно значення контрольного елемента автоматично доповнюватися браузером.

- {{domxref("HTMLInputElement.max", "max")}}

  - : `string`: **Повертає чи задає** атрибут [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum) елемента, що містить максимальне (числове або дати й часу) значення такого елемента, котре повинно не бути меншим за його мінімальне (атрибут [`min`](/uk/docs/Web/HTML/Element/input#min-minimum)) значення.

- {{domxref("HTMLInputElement.maxLength", "maxLength")}}

  - : `unsigned long`: **Повертає чи задає** атрибут [`maxlength`](/uk/docs/Web/HTML/Element/input#maxlength-maksymalna-dovzhyna) елемента, що містить максимальну кількість символів (у кодових точках Unicode), котру може містити його значення.

- {{domxref("HTMLInputElement.min", "min")}}

  - : `string`: **Повертає чи задає** атрибут [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) елемента, що містить мінімальне (числове або дати й часу) значення такого елемента, котре повинно не бути більшим за його максимальне (атрибут [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum)) значення.

- {{domxref("HTMLInputElement.minLength", "minLength")}}

  - : `unsigned long`: **Повертає чи задає** атрибут [`minlength`](/uk/docs/Web/HTML/Element/input#minlength-minimalna-dovzhyna) елемента, що містить мінімальну кількість символів (у кодових точках Unicode), котру може містити його значення.

- {{domxref("HTMLInputElement.pattern", "pattern")}}

  - : `string`: **Повертає чи задає** атрибут [`pattern`](/uk/docs/Web/HTML/Element/input#pattern-patern) елемента, що містить регулярний вираз, на відповідність котрому перевіряється значення контрольного елемента. Атрибут [`title`](/uk/docs/Web/HTML/Element/input#title-zaholovok) слід використовувати для описування патерну й допомоги користувачу. Цей атрибут застосовується лише тоді, коли значення атрибута [`type`](/uk/docs/Web/HTML/Element/input#type-typ) – `text`, `search`, `tel`, `url` або `email`.

- {{domxref("HTMLInputElement.placeholder", "placeholder")}}

  - : `string`: **Повертає чи задає** атрибут [`placeholder`](/uk/docs/Web/HTML/Element/input#placeholder) елемента, containing a hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. This attribute only applies when the value of the [`type`](/uk/docs/Web/HTML/Element/input#type) attribute is `text`, `search`, `tel`, `url` or `email`.

- {{domxref("HTMLInputElement.readOnly", "readOnly")}}

  - : `boolean`: **Повертає чи задає** атрибут [`readonly`](/uk/docs/Web/HTML/Element/input#readonly) елемента, котрий позначає те, що користувач не може змінювати значення контрольного елемента. Ця властивість ігнорується, якщо [`type`](/uk/docs/Web/HTML/Element/input#type-typ) має значення `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, або кнопкове значення.

- {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}

  - : `unsigned long`: **Повертає чи задає** індекс кінця виділеного тексту. Коли виділення немає, ця властивість повертає відступ символу, котрий стоїть зразу після поточного положення текстового курсора введення.

- {{domxref("HTMLInputElement.selectionStart", "selectionStart")}}

  - : `unsigned long`: **Повертає чи задає** індекс початку виділеного тексту. Коли виділення немає, ця властивість повертає положення текстового курсора введення (каретки) всередині елемента {{HTMLElement("input")}}.

- {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}

  - : `string`: **Повертає чи задає** напрям, в якому відбулось виділення. Можливі значення: `forward` (виділення відбулося в напрямку від початку до кінця, згідно з поточною локаллю), `backward` (протилежний напрям) або `none` (напрям невідомий).

- {{domxref("HTMLInputElement.size", "size")}}
  - : `unsigned long`: **Повертає чи задає** атрибут [`size`](/uk/docs/Web/HTML/Element/input#size) елемента, що містить візуальний розмір контрольного елемента. Це значення позначає розмір у пікселях, якщо значення [`type`](/uk/docs/Web/HTML/Element/input#type-typ) не `text` і не `password`, – тоді розмір – це кількість символів. Застосовується лише тоді, коли [`type`](/uk/docs/Web/HTML/Element/input#type-typ) має значення `text`, `search`, `tel`, `url`, `email` чи `password`.

## Методи примірника

- {{domxref("HTMLElement/blur", "blur()")}}

  - : Прибирає фокус з елемента введення; подальші натискання клавіш не подіють.

- {{domxref("HTMLElement.click()", "click()")}}

  - : Імітує клацання елемента введення.

- {{domxref("HTMLElement/focus", "focus()")}}

  - : Переводить фокус на елемент введення; подальші натискання спрацюють в цьому елементі.

- {{domxref("HTMLInputElement.select()", "select()")}}

  - : Виділяє ввесь текст в елементі введення, а також переводить на цей елемент фокус, аби користувач міг далі замінити вміст елемента.

- {{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}

  - : Виділяє частину тексту в полі введення (але не передає фокус на елемент).

- {{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}

  - : Замінює частину тексту в полі введення новим текстом.

- {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}

  - : Задає авторське повідомлення валідності для елемента. Якщо це повідомлення не є порожнім рядком, то елемент зазнає авторської помилки валідації й не пройде валідацію.

- {{domxref("HTMLInputElement.showPicker()", "showPicker()")}}

  - : Виводить браузерний інтерфейс вибору дати, часу, кольору й файлів.

- {{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}

  - : Повертає булеве значення, котре є `false`, якщо елемент є кандидатом на валідацію обмежень і не виконує цих обмежень. У такому випадку метод викидає на елементі подію {{domxref("HTMLInputElement/invalid_event", "недійсності")}}. Повертає `true`, якщо елемент не є кандидатом на валідацію обмежень або виконує її обмеження.

- {{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}

  - : Запускає метод `checkValidity()`, і якщо повертається хибність (через недійсне поле або відсутність атрибута патерну), то цей метод звітує користувачеві про недійсність поля в такий само спосіб, як при поданні форми.

- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}

  - : Зменшує [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) на ([`step`](/uk/docs/Web/HTML/Element/input#step-krok) \* n), де n має усталене значення 1, коли не задано. Викидає виняток `InvalidStateError`:
    - якщо метод незастосовний до поточного [`type`](/uk/docs/Web/HTML/Element/input#type-typ),
    - якщо елемент не має значення [`step`](/uk/docs/Web/HTML/Element/input#step-krok),
    - якщо [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) не може бути перетворено на число,
    - якщо результівне значення більше за [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum) чи менше за [`min`](/uk/docs/Web/HTML/Element/input#min-minimum).

- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}
  - : Збільшує [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) на ([`step`](/uk/docs/Web/HTML/Element/input#step-krok) \* n), де n має усталене значення 1, коли не задано. Викидає виняток `InvalidStateError`:
    - якщо метод незастосовний до поточного [`type`](/uk/docs/Web/HTML/Element/input#type-typ),
    - якщо елемент не має значення [`step`](/uk/docs/Web/HTML/Element/input#step-krok),
    - якщо [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) не може бути перетворено на число,
    - якщо результівне значення більше за [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum) чи менше за [`min`](/uk/docs/Web/HTML/Element/input#min-minimum).

## Події

Ці події можна відстежувати за допомогою [`addEventListener()`](/uk/docs/Web/API/EventTarget/addEventListener) або шляхом присвоєння слухача повідомлень властивості `oneventname` цього інтерфейсу:

- [`input`](/uk/docs/Web/API/HTMLElement/input_event)
  - : Викидається, коли `value` елемента {{HTMLElement("input")}}, {{HTMLElement("select")}} або {{HTMLElement("textarea")}} змінюється. Звернуть увагу, що насправді ця подія викидається на інтерфейсі {{domxref("HTMLElement")}} і також застосовується до елементів [`contenteditable`](/uk/docs/Web/HTML/Global_attributes/contenteditable), але була перелічена тут, адже найпоширеніше її використання – саме з елементами полів форм.
- [`invalid`](/uk/docs/Web/API/HTMLInputElement/invalid_event)
  - : Викидається, коли елемент не відповідає обмеженням при валідації обмежень.
- [`search`](/uk/docs/Web/API/HTMLInputElement/search_event) {{Non-standard_Inline}}
  - : Викидається, коли пошук ініціюється на {{HTMLElement("input")}} з `type="search"`.
- Подія {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} {{Experimental_Inline}}
  - : Викидається, коли вибір тексту в елементі {{HTMLElement("input")}} змінився.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Елемент HTML, що реалізовує цей інтерфейс: {{HTMLElement("input")}}
