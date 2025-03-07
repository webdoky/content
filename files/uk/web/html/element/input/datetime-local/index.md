---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
page-type: html-element
browser-compat: html.elements.input.type_datetime-local
---

{{HTMLSidebar}}

Елементи {{htmlelement("input")}} типу **`datetime-local`** (локальні дата й час) утворюють контрольні елементи, що дають користувачеві змогу легко ввести як дату, так і час, включно з роком, місяцем і днем місяця, а також годинами та хвилинами.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

Загалом, користувацький інтерфейс відрізняється в різних браузерах. У тих, що не підтримують це поле, воно доладно деградує, як ніби задано [`<input type="text">`](/uk/docs/Web/HTML/Element/input/text).

Цей контрольний елемент створений для представлення _місцевих дати та часу_, але не обов'язково _місцевих дати та часу користувача_. Інакше кажучи, це поле дозволяє будь-яку дійсну комбінацію року, місяця, дня місяця, години й хвилини – навіть тоді, коли ця комбінація є недійсною в поточній часовій зоні користувача (наприклад, як одна година, що належить до недійсного діапазону, спричиненого переходом на літній час).

## Значення

Рядок, що представляє значення дати, введене в поле. Формат значення дати й часу, використовуваний полем цього типу, описаний в [Рядках місцевих дати та часу](/uk/docs/Web/HTML/Date_and_time_formats#riadky-mistsevykh-daty-ta-chasu).

Задати усталене значення поля можна шляхом додавання дати й часу в атрибуті [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia), отак:

```html
<label for="party">Введіть дату й час для бронювання вашої вечірки:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{EmbedLiveSample('znachennia', 600, 60)}}

Єдине, що варто пам'ятати: показані формати дати й часу відрізняються від фактичного значення `value`; показані дата й час форматуються згідно з локаллю користувача, як її подала операційна система, натомість дата й час `value` зазвичай форматується як `YYYY-MM-DDTHH:mm`. Коли значення вище подається на сервер, наприклад, воно має вигляд `party-date=2024-06-01T08:30`.

> [!NOTE]
> Також майте на увазі, що якщо дані подаються за допомогою HTTP [`GET`](/uk/docs/Web/HTTP/Methods/GET), то символ двокрапки потребує екранування для включення в параметрі URL, наприклад, `party-date=2024-06-01T08%3A30`. Дивіться один з варіантів того, як це можна зробити, в {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}.

Також отримати й задати значення дати в JavaScript можна за допомогою властивості {{domxref("HTMLInputElement")}} `value`; наприклад:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Додаткові атрибути

На додачу до атрибутів, спільних для всіх елементів {{HTMLElement("input")}}, поля `datetime-local` приймають наступні.

### max

Найпізніші дата й час, що будуть прийняті. Якщо [значення](/uk/docs/Web/HTML/Element/input#value-znachennia), введене в елемент, є пізнішим за цю мітку часу, то елемент провалює [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation). Якщо значення атрибута `max` не є дійсним рядком, що відповідає форматові `YYYY-MM-DDTHH:mm`, то такий елемент не має максимального значення.

Це значення повинно задавати рядок дати, пізнішої або рівної даті, заданій в атрибуті `min`.

### min

Найраніші дата й час, що будуть прийняті; раніші мітки часу змусять елемент провалити [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation). Якщо значення атрибута `min` не є дійсним рядком, що відповідає форматові `YYYY-MM-DDTHH:mm`, то такий елемент не має мінімального значення.

Це значення повинно задавати рядок дати, ранішої або рівної даті, заданій в атрибуті `max`.

### step

Атрибут `step` – це число, що задає гранулярність, котрої повинно дотримуватись значення, або особливе значення `any`, описане нижче. Лише значення, рівні основі крокування ([`min`](#min), якщо цей атрибут є, інакше – [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia), а ще інакше – відповідному усталеному значенню), є дійсними.

Рядкове значення `any` означає, що крокування не застосовується, і дозволяється будь-яке значення (з урахуванням інших обмежень, як то [`min`](#min) і [`max`](#max)).

> [!NOTE]
> Коли введені користувачем дані не відповідають налаштуванням крокування, то {{Glossary("User agent", "користувацький агент")}} може округлити число до найближчого дійсного, віддаючи перевагу числам у додатному напрямку, коли є два рівновіддалені варіанти.

Для полів `datetime-local` значення `step` задається в секундах, з масштабним фактором 1000 (оскільки за лаштунками числове значення виражене в мілісекундах). Усталене значення `step` – 60, що позначає 60 секунд (або 1 хвилину, або 60.000 мілісекунд).

_Наразі неясно, що означає для `step` значення `any`, коли застосовано до полів `datetime-local`. Цей розділ буде оновлено, щойно ця інформація буде з'ясована._

## Застосування полів datetime-local

Поля дати й часу – зручні, вони надають легкий користувацький інтерфейс для вибору дати й часу, а також нормалізують формат дати, надісланий на сервер, незалежно від локалі користувача. Проте важливо бути розсудливими щодо своїх користувачів. Не слід вимагати від них вводити дані, що не потрібні для роботи застосунку.

### Контроль розміру поля

`<input type="datetime-local">` не підтримує атрибутів контролю розміру контрольних елементів, як то [`size`](/uk/docs/Web/HTML/Element/input#size-rozmir). Доведеться звернутися до [CSS](/uk/docs/Web/CSS), аби налаштувати розмір таких елементів.

### Задання часових зон

Єдине, чого тип поля `datetime-local` не надає – це способу задати часову зону чи локаль дати й часу. Така можливість була доступна в типі поля `datetime`, але такий тип тепер є застарілим, бувши прибраним зі специфікації. Основні причини того, чому це було прибрано, – відсутність реалізацій у браузерах, а також занепокоєння щодо користувацьких інтерфейсу й досвіду. Легше просто мати контрольний елемент (або елементи) для задання дати й часу, а тоді мати справу з локаллю окремо, в іншому полі.

Наприклад, якщо створюється система, в якій користувач, ймовірно, вже автентифікований, а його локаль вже задана, можна надавати часову зону в полі типу [`hidden`](/uk/docs/Web/HTML/Element/input/hidden). Наприклад:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

З іншого боку, якби була потреба дозволити користувачу ввести часову зону вкупі з датою й часом, то можна було б додати елемент {{htmlelement("select")}}, аби дати йому змогу задавати правильну часову зону шляхом вибору конкретного місця зі списку місць:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Атол Еніветок, атол Кваджалейн</option>
  <option value="Pacific/Midway">Атол Мідвей, Самоа</option>
  <option value="Pacific/Honolulu">Гаваї</option>
  <option value="Pacific/Marquesas">Тайохе</option>
  <!-- і так далі -->
</select>
```

В будь-якому випадку значення дати з часом і часової зони автоматично подаються на сервер як окремі порції даних, і потім їх необхідно відповідно зберегти в базі даних на боці сервера.

## Валідація

Усталено `<input type="datetime-local">` не застосовує до введених даних жодної валідації. Реалізації користувацького інтерфейсу, загалом, не дозволяють уводити будь-що, що не є датою й часом, що корисно, але користувач усе ж може не ввести жодного значення й подати таке, або ввести недійсні дату й час (наприклад, 32 квітня).

Для обмеження доступних дат можна використати [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) і [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum) (дивіться [Задання максимальної й мінімальної дати](#zadannia-maksymalnykh-i-minimalnykh-daty-ta-chasu)), а щоб зробити введення дати й часу обов'язковим – атрибут [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi). Як наслідок, браузери, що це підтримують, покажуть помилку, якщо спробувати подати дату, що лежить поза заданим діапазоном, або порожнє поле дати.

Погляньмо на приклад. Тут задаються значення мінімальних і максимальних дати й часу, а також поле є обов'язковим:

```html
<form>
  <div>
    <label for="party">
      Оберіть бажані дату й час вечірки (обов'язково, між 8:30 1 червня до 16:30
      30 червня):
    </label>
    <input
      id="party"
      type="datetime-local"
      name="party-date"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Забронювати вечірку!" />
  </div>
</form>
```

Якщо спробувати подати форму з неповною датою (або з датою поза заданим діапазоном), то браузер покаже помилку. Спробуйте погратися з цим прикладом:

{{EmbedLiveSample('validatsiia', 600, 120)}}

Ось CSS, використаний в прикладі вище. Тут використовуються властивості CSS {{cssxref(":valid")}} і {{cssxref(":invalid")}}, аби оформити поле на основі того, чи є поточне значення дійсним. Піктограми додані в {{htmlelement("span")}}, після поля.

```css
div {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

label {
  display: inline-block;
  width: 300px;
}

input:invalid + span::after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  content: "✓";
  padding-left: 5px;
}
```

> [!WARNING]
> Валідація форм HTML _не_ є заміною сценаріїв, котрі пересвідчуються, що введені дані мають коректний формат. Будь-кому занадто легко підлаштувати HTML так, щоб отримати змогу обійти валідацію, або ж геть її прибрати. Також користувачі можуть обійти HTML узагалі й подати дані безпосередньо на сервер. Якщо ваш код на сервері не може валідувати дані, що отримує, може статися лихо, коли подано некоректно відформатовані дані (або дані, що завеликими, мають не той тип, і так далі).

> [!NOTE]
> У полі `datetime-local` значення дати завжди нормалізується до формату `YYYY-MM-DDTHH:mm`.

## Приклади

### Базове застосування datetime-local

Найбазовіше застосування `<input type="datetime-local">` включає базову комбінацію елементів `<input>` і {{htmlelement("label")}}, як показано нижче:

```html
<form>
  <label for="party">Уведіть дату та час для бронювання вечірки:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{EmbedLiveSample('bazove-zastosuvannia-datetime-local', 600, 40)}}

### Задання максимальних і мінімальних дати та часу

Щоб обмежити дату та час, які може ввести користувач, можна використати атрибути [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) and [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum). У наступному прикладі задається мінімальний час `2024-06-01T08:30` і максимальний `2024-06-30T16:30`:

```html
<form>
  <label for="party">Уведіть дату та час для бронювання вечірки:</label>
  <input
    id="party"
    type="datetime-local"
    name="party-date"
    min="2024-06-01T08:30"
    max="2024-06-30T16:30" />
</form>
```

{{EmbedLiveSample('zadannia-maksymalnykh-i-minimalnykh-daty-ta-chasu', 600, 40)}}

Можуть бути вибрані лише дні в червні 2024 року. Залежно від того, який браузер використовується, час поза заданими значеннями може бути недоступним для вибору. В інших браузерах недоступні дату та час можна вибрати, але тоді поле дасть збіг з {{CSSXref(":invalid")}} і {{CSSXref(":out-of-range")}} та не пройде [валідацію](#validatsiia).

У частині браузерів (Chrome та Edge) лише частина "дня" у значенні дати буде редагованою, а до дат поза червнем не можна буде прокрутити. В інших (Safari) інтерфейс вибору дати нібито дозволятиме будь-яку дату, але значення буде примушено до дійсного діапазону, коли дата буде вибрана.

Дійсний діапазон включає ввесь час між значеннями `min` і `max`; час дня обмежений лише в першій та останній датах діапазону.

> [!NOTE]
> Повинна бути змога використати атрибут [`step`](/uk/docs/Web/HTML/Element/input#step-krok), щоб змінювати кількість днів, що пропускаються при кожному збільшенні дати (наприклад, можливо, ви хочете, щоб можна було вибирати лише суботи). Проте схоже, що це фактично не працює в жодній реалізації під час написання цих слів.

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#znachennia">Значення</a></strong></td>
      <td>
        Рядок, що представляє дату й час (у місцевій часовій зоні), або порожній.
      </td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} та
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Підтримувані спільні атрибути</strong></td>
      <td>
        <a href="/uk/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#list-spysok"><code>list</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#readonly-lyshe-dlia-chytannia"><code>readonly</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#step-krok"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td>
        <a href="/uk/docs/Web/HTML/Element/input#list-spysok"><code>list</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#value-znachennia"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>Інтерфейс DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Методи</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Неявна роль ARIA</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">немає відповідної ролі</a></td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Узагальнений елемент {{HTMLElement("input")}}, а також інтерфейс, що використовується для роботи з ним, – {{domxref("HTMLInputElement")}}
- [`<input type="date">`](/uk/docs/Web/HTML/Element/input/date) і [`<input type="time">`](/uk/docs/Web/HTML/Element/input/time)
- [Формати дати й часу, що використовуються в HTML](/uk/docs/Web/HTML/Date_and_time_formats)
- [Підручник з інтерфейсу вибору дати та часу](/uk/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#interfeis-vyboru-daty-ta-chasu)
