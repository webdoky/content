---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
page-type: html-element
browser-compat: html.elements.input.type_datetime-local
---

{{HTMLSidebar}}

Елементи {{htmlelement("input")}} типу **`datetime-local`** (локальні дата й час) утворюють контрольні елементи, що дають користувачеві змогу легко ввести і дату, і час, включно з роком, місяцем і днем місяця, а також годинами та хвилинами.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

Загалом, користувацький інтерфейс відрізняється в різних браузерах. У тих серед них, що не підтримують це поле, воно доладно деградує до простого контрольного елемента [`<input type="text">`](/uk/docs/Web/HTML/Element/input/text).

Цей контрольний елемент створений для представлення _місцевих дати та часу_, але не обов'язково _місцевих дати та часу користувача_. Інакше кажучи, реалізація повинна дозволяти будь-яку дійсну комбінацію року, місяця, дня місяця, години й хвилини – навіть тоді, коли ця комбінація є недійсною в поточній часовій зоні користувача (наприклад, як тоді, коли мить належить до недійсного діапазону, спричиненого переходом на літній час). Частина мобільних браузерів (особливо на iOS) наразі не має коректної реалізації цієї можливості.

У зв'язку з обмеженою браузерною підтримкою `datetime-local`, а також розбіжностями того, як такі поля працюють, наразі найкращим варіантом може бути використання для представлення таких полів фреймворку чи бібліотеки, або ж використання власного поля. Іще один варіант – використання окремих полів `date` і `time`, кожне з яких має ширшу підтримку, ніж `datetime-local`.

Частина браузерів може спиратися на суто текстові поля, що валідують результати на дійсність значень дати й часу перед пропуску їх до надсилання на сервер, однак не слід покладатися на таку логіку, адже її не можна легко передбачити.

## Значення

Рядок, що представляє значення дати, введене в поле. Формат значення дати й часу, використовуваний полем цього типу, описаний в [Рядках місцевих дати та часу](/uk/docs/Web/HTML/Date_and_time_formats#riadky-mistsevykh-daty-ta-chasu).

Задати усталене значення поля можна шляхом додавання дати й часу в атрибуті [`value`](/uk/docs/Web/HTML/Element/input#value), отак:

```html
<label for="party">Введіть дату й час для бронювання вашої вечірки:</label>
<input
  id="party"
  type="datetime-local"
  name="partydate"
  value="2017-06-01T08:30" />
```

{{EmbedLiveSample('znachennia', 600, 60)}}

Єдине, що варто пам'ятати: показані формати дати й часу відрізняються від фактичного значення `value`; показані дата й час форматуються згідно з локаллю користувача, як її подала операційна система, натомість дата й час `value` зазвичай форматується як `YYYY-MM-DDThh:mm`. Коли значення вище подається на сервер, наприклад, воно має вигляд `partydate=2017-06-01T08:30`.

> **Примітка:** Також майте на увазі, що якщо дані подаються за допомогою HTTP [`GET`](/uk/docs/Web/HTTP/Methods/GET), то символ двокрапки потребує екранування для включення в параметрі URL, наприклад, `partydate=2017-06-01T08%3A30`. Дивіться один з варіантів того, як це можна зробити, в {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}.

Також отримати й задати значення дати в JavaScript можна за допомогою властивості {{domxref("HTMLInputElement")}} `value`; наприклад:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Додаткові атрибути

На додачу до атрибутів, спільних для всіх елементів {{HTMLElement("input")}}, поля datetime-local приймають наступні.

### max

Найпізніші дата й час, що будуть прийняті. Якщо [значення](/uk/docs/Web/HTML/Element/input#value), введене в елемент, є пізнішим за цю мітку часу, то елемент провалює [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation). Якщо значення атрибута `max` не є дійсним рядком, що відповідає форматові `YYYY-MM-DDThh:mm`, то такий елемент не має максимального значення.

Це значення повинно задавати рядок дати, пізнішої або рівної даті, заданій в атрибуті `min`.

### min

Найраніші дата й час, що будуть прийняті; раніші мітки часу змусять елемент провалити [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation). Якщо значення атрибута `min` не є дійсним рядком, що відповідає форматові `YYYY-MM-DDThh:mm`, то такий елемент не має мінімального значення.

Це значення повинно задавати рядок дати, ранішої або рівної даті, заданій в атрибуті `max`.

### step

Атрибут `step` – це число, що задає гранулярність, котрої повинно дотримуватись значення, або особливе значення `any`, описане нижче. Лише значення, рівні основі крокування ([`min`](#min), якщо цей атрибут є, інакше – [`value`](/uk/docs/Web/HTML/Element/input#value), а ще інакше – відповідному усталеному значенню), є дійсними.

Рядкове значення `any` означає, що крокування не застосовується, і дозволяється будь-яке значення (зі врахуванням інших обмежень, як то [`min`](#min) і [`max`](#max)).

> **Примітка:** Коли введені користувачем дані не відповідають налаштуванням крокування, то {{Glossary("User agent", "користувацький агент")}} може округлити число до найближчого дійсного, віддаючи перевагу числам у додатному напрямку, коли є два рівновіддалені варіанти.

Для полів `datetime-local` значення `step` задається в секундах, з масштабним фактором 1000 (оскільки за лаштунками числове значення виражене в мілісекундах). Усталене значення `step` – 60, що позначає 60 секунд (або 1 хвилину, або 60.000 мілісекунд).

_Наразі неясно, що означає для `step` значення `any`, коли застосовано до полів `datetime-local`. Цей розділ буде оновлено, щойно ця інформація буде з'ясована._

## Застосування полів datetime-local

Поля дати й часу, на перший погляд, здаються зручними, вони надають легкий користувацький інтерфейс для вибору дати й часу, а також нормалізують формат дати, надісланий на сервер, незалежно від локалі користувача. Проте є проблеми з `<input type="datetime-local">`, пов'язані з обмеженою підтримкою браузерами.

Тут розглядаються базові й складніші випадки застосування `<input type="datetime-local">`, а потім пропонується порада щодо розв'язання проблеми з підтримкою браузерами (дивіться [Роботу з підтримкою браузерами](#robota-z-pidtrymkoiu-brauzeriv)).

### Базове застосування datetime-local

Найпростіше використання `<input type="datetime-local">` включає поєднання базового `<input>` з елементом {{htmlelement("label")}}, як показано нижче:

```html
<form>
  <label for="party">Уведіть дату й час для бронювання вашої вечірки:</label>
  <input id="party" type="datetime-local" name="partydate" />
</form>
```

{{EmbedLiveSample('bazove-zastosuvannia-datetime-local', 600, 40)}}

### Задання максимальних і мінімальних дати й часу

Для обмеження дат і часу, що їх може ввести користувач, можна використати атрибути [`min`](/uk/docs/Web/HTML/Element/input#min) і [`max`](/uk/docs/Web/HTML/Element/input#max). У наступному прикладі задається мінімальна мить `2017-06-01T08:30` і максимальна `2017-06-30T16:30`:

```html
<form>
  <label for="party">Уведіть дату й час для бронювання вашої вечірки:</label>
  <input
    id="party"
    type="datetime-local"
    name="partydate"
    min="2017-06-01T08:30"
    max="2017-06-30T16:30" />
</form>
```

{{EmbedLiveSample('zadannia-maksymalnykh-i-minimalnykh-daty-y-chasu', 600, 40)}}

Результатом є наступне:

- Можуть бути вибрані лише дні в червні 2017 року: лише частина "днів місяця" буде редагованою, а дати поза червнем не будуть прокрутними у віджеті вибору дати.
- Залежно від браузера користувача, може виявитися, що час поза заданими значеннями не може бути вибраний в інтерфейсі вибору часу (наприклад, в Edge), або вважатися недійсним (дивіться [Валідацію](#validatsiia)), але все ж доступним (наприклад, у Chrome).

> **Примітка:** Повинна бути присутня змога використати атрибут [`step`](/uk/docs/Web/HTML/Element/input#step) для видозміни кількості днів, на котру відбувається стрибок при кожному збільшенні дати (наприклад, може бути потреба зробити доступними лише суботи). Проте здається, що це фактично не працює в жодній з реалізацій, на мить написання цих слів.

### Контроль розміру поля

`<input type="datetime-local">` не підтримує атрибутів контролю розміру контрольних елементів, як то [`size`](/uk/docs/Web/HTML/Element/input#size). Доведеться звернутися до [CSS](/uk/docs/Web/CSS), аби налаштувати розмір таких елементів

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

Для обмеження доступних дат можна використати [`min`](/uk/docs/Web/HTML/Element/input#min) і [`max`](/uk/docs/Web/HTML/Element/input#max) (дивіться [Задання максимальної й мінімальної дати](#zadannia-maksymalnoii-y-minimalnoii-dat)), а щоб зробити введення дати й часу обов'язковим – атрибут [`required`](/uk/docs/Web/HTML/Element/input#required). Як наслідок, браузери, що це підтримують, покажуть помилку, якщо спробувати подати дату, що лежить поза заданим діапазоном, або порожнє поле дати.

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
      name="partydate"
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

Ось CSS, використаний в прикладі вище. Тут використовуються властивості CSS {{cssxref(":valid")}} і {{cssxref(":invalid")}}, аби оформити поле на основі того, чи є поточне значення дійсним. Довелося додати піктограми в {{htmlelement("span")}}, після поля, а не в саме поле, адже в Chrome згенерований вміст розташовується всередині контрольного елемента і не може бути надійно оформлений чи показаний.

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

> **Застереження:** Валідація форм HTML _не_ є заміною сценаріїв, котрі пересвідчуються, що введені дані мають коректний формат. Будь-кому занадто легко підлаштувати HTML так, щоб отримати змогу обійти валідацію, або ж геть її прибрати. Також користувачі можуть обійти HTML узагалі й подати дані безпосередньо на сервер. Якщо ваш код на сервері не може валідувати дані, що отримує, може статися лихо, коли подано некоректно відформатовані дані (або дані, що завеликими, мають не той тип, і так далі).

## Робота з підтримкою браузерів

Як згадувалося вище, браузери, що не мають підтримки поля `datetime-local`, доладно деградують до текстового поля, однак це створює проблеми і щодо сталості користувацького інтерфейсу (виведений контрольний елемент буде інакшим), і щодо обробки даних.

Друга проблема – найсуттєвіша з усіх; як згадувалося раніше, в полі `datetime-local` фактичне значення завжди нормалізується до формату `YYYY-MM-DDThh:mm`. У текстовому ж полі браузер, усталено, не має поняття про те, в якому форматі повинна бути дата, і є чимало різних способів, у які люди записують дати й час, наприклад:

- `DDMMYYYY`
- `DD/MM/YYYY`
- `MM/DD/YYYY`
- `DD-MM-YYYY`
- `MM-DD-YYYY`
- `MM-DD-YYYY hh:mm` (12-годинний запис)
- `MM-DD-YYYY HH:mm` (24-годинний запис)
- тощо.

Один зі способів це обійти – додати на полі `datetime-local` атрибут [`pattern`](/uk/docs/Web/HTML/Element/input#pattern). Навіть попри те, що поле `datetime-local` його не використовує, це зробить запасне текстове поле. Наприклад, спробуймо переглянути демо нижче в браузері без підтримки `datetime-local`:

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
      name="partydate"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Забронювати вечірку!" />
  </div>
  <input type="hidden" id="timezone" name="timezone" value="-08:00" />
</form>
```

{{EmbedLiveSample('robota-z-pidtrymkoiu-brauzeriv', 600, 100)}}

Якщо спробувати подати цю форму, то буде видно, що браузер тепер виводить повідомлення про помилку (і виділяє недійсні поля), якщо введені дані не відповідають патернові `nnnn-nn-nnTnn:nn`, де `n` – число від 0 до 9. Звісно, це не зупинить людей від уведення недійсних дат або некоректно відформатованих дат і часу.

І як же користувач зрозуміє патерн, згідно з яким повинен увести час і дату?

Досі маємо проблему.

```css hidden
div {
  margin-bottom: 10px;
}

input:invalid + span {
  position: relative;
}

input:invalid + span::after {
  content: "✖";
  position: absolute;
  right: -18px;
}

input:valid + span {
  position: relative;
}

input:valid + span::after {
  content: "✓";
  position: absolute;
  right: -18px;
}
```

Наразі найкращий спосіб працювати з датами в формах у кросбраузерний спосіб – це змусити користувача вводити день місяця, місяць, рік і час в окремих контрольних елементах (непопулярних {{htmlelement("select")}} – дивіться реалізацію нижче), або ж використати бібліотеки Javascript, як то [Інтерфейс вибору дати jQuery](https://jqueryui.com/datepicker/) чи [втулок інтерфейсу вибору часу jQuery](https://timepicker.co/).

## Проблема Y2K38 (нерідко серверна)

JavaScript використовує для зберігання дат числа з рухомою комою подвійної точності, як і для всіх чисел, а отже кодові на JavaScript не загрожує проблема Y2K38, якщо не використовуються хитрощі зі зведенням цілих чисел і бітовим численням, адже всі бітові операції JavaScript використовують 32-бітові доповняльні коди зі знаками.

Проблема лежить на серверному боці справ: зберігання дат, більших за 2^31 - 1. Щоб її виправити, необхідно зберігати всі дати або за допомогою беззнакових 32-бітових цілих чисел, 64-бітових цілих зі знаком, або чисел з рухомою комою подвійної точності. Якщо сервер написаний на PHP, то для виправлення може бути достатньо оновити PHP до версії 8 або 7, а також оновити апаратне забезпечення до x86_64 або IA64.

## Проблема Y10k (нерідко на клієнтському боці)

В багатьох серверах дати зберігаються як числа, а не рядки – числа фіксованої ширини й байдужі до формату (окрім порядку байтів). Після 10.000 року ці числа будуть лишень трохи більші, ніж раніше, тож чимало серверів не спостерігатиме проблем з формами, поданими після 10.000 року.

Проблема лежить на клієнтському боці справ: розбір дат з більш ніж 4 цифрами року.

```html
<!--північ 1 січня 10000 року: точна мить Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Все настільки просто. Лишень підготуйте свій код до будь-якого числа цифр. Не готуйтеся до лише 5 цифр. Ось код JavaScript для програмного задання значення:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Чому слід турбуватися про проблему Y10K, якщо вона станеться через багато століть після вашої смерті? Саме через те, що ви вже будете мертві, тож компанії, що використовують ваше програмне забезпечення, будуть змушені його використовувати, не маючи іншого програміста, що знає систему достатньо, аби прийти та все виправити.

## Приклади

У цьому прикладі створюються два набори елементів інтерфейсу для вибору дати й часу – нативний `<input type="datetime-local">` і набір з п'яти елементів{{htmlelement("select")}} для вибору дати й часу в старих браузерах, що не підтримують нативне поле.

{{EmbedLiveSample('pryklady', 600, 140)}}

HTML має наступний вигляд:

```html
<form>
  <div class="nativeDateTimePicker">
    <label for="party">Оберіть дату й час своєї вечірки:</label>
    <input type="datetime-local" id="party" name="bday" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">Оберіть дату й час своєї вечірки:</p>
  <div class="fallbackDateTimePicker">
    <div>
      <span>
        <label for="day">День:</label>
        <select id="day" name="day"></select>
      </span>
      <span>
        <label for="month">Місяць:</label>
        <select id="month" name="month">
          <option selected value="January">Січень</option>
          <option value="February">Лютий</option>
          <option value="March">Березень</option>
          <option value="April">Квітень</option>
          <option value="May">Травень</option>
          <option value="June">Червень</option>
          <option value="July">Липень</option>
          <option value="August">Серпень</option>
          <option value="September">Вересень</option>
          <option value="October">Жовтень</option>
          <option value="November">Листопад</option>
          <option value="December">Грудень</option>
        </select>
      </span>
      <span>
        <label for="year">Рік:</label>
        <select id="year" name="year"></select>
      </span>
    </div>
    <div>
      <span>
        <label for="hour">Година:</label>
        <select id="hour" name="hour"></select>
      </span>
      <span>
        <label for="minute">Хвилина:</label>
        <select id="minute" name="minute"></select>
      </span>
    </div>
  </div>
</form>
```

Місяці – жорстко закодовані (адже вони завжди одні й ті ж), а дні й роки – генеруються динамічно, залежно від наразі вибраних місяця й року в першому випадку й поточного року в другому (дивіться детальні пояснення того, як працюють ці функції, в коментарях до коду нижче.) Також ми вирішили динамічно генерувати години та хвилини, адже їх так багато!

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Іще одна частина коду, що може бути цікавою – код для з'ясування доступних можливостей: щоб перевірити, чи підтримує браузер `<input type="datetime-local">`, ми створюємо новий елемент {{htmlelement("input")}}, пробуємо присвоїти його `type` значення `datetime-local`, а тоді негайно перевіряємо, що записалося в це поле. Браузери, що не підтримують `datetime-local`, повертають `text`, оскільки це те значення, котре є запасним для `datetime-local`. Якщо `<input type="datetime-local">` не підтримується, то нативний інтерфейс вибору дати й часу приховується, а виводиться – запасний ({{htmlelement("select")}}).

```js
// Отримання віджетів користувацького інтерфейсу
const nativePicker = document.querySelector(".nativeDateTimePicker");
const fallbackPicker = document.querySelector(".fallbackDateTimePicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const monthSelect = document.querySelector("#month");
const daySelect = document.querySelector("#day");
const hourSelect = document.querySelector("#hour");
const minuteSelect = document.querySelector("#minute");

// спершу ховаємо запасне
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// перевіряємо, чи перемикається поле datetime-local на поле text
const test = document.createElement("input");

try {
  test.type = "datetime-local";
} catch (e) {
  console.log(e.description);
}

// якщо це так, то виконується код всередині блоку if () {}
if (test.type === "text") {
  // приховати нативний інтерфейс і показати запасний
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // динамічно заповнити дні та роки
  // (місяці – завжди одні й ті самі, тому закодовані жорстко)
  populateDays(monthSelect.value);
  populateYears();
  populateHours();
  populateMinutes();
}

function populateDays(month) {
  // видалення поточного набору елементів <option> з
  // <select> дня місяця, підготовка до додання нового набору
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }

  // Створення змінної для зберігання нового числа днів до додання
  let dayNum;

  // 31 або 30 днів?
  if (
    [
      "January",
      "March",
      "May",
      "July",
      "August",
      "October",
      "December",
    ].includes(month)
  ) {
    dayNum = 31;
  } else if (["April", "June", "September", "November"].includes(month)) {
    dayNum = 30;
  } else {
    // Якщо місяць – лютий, то перевірити, чи є рік високосним
    const year = yearSelect.value;
    const isLeap = new Date(year, 1, 29).getMonth() === 1;
    dayNum = isLeap ? 29 : 28;
  }

  // додати в <select> дня місяця коректну кількість нових елементів <option>
  for (let i = 1; i <= dayNum; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // якщо попередній день вже був заданий, то присвоїти значенн dateSelect
  // цей день, аби уникнути перескакування дня на 1, коли змінюється рік
  if (previousDay) {
    daySelect.value = previousDay;

    // Якщо попередній день був заданий з великим числом, скажімо, 31, а потім
    // був вибраний місяць з меншою кількістю днів (наприклад, лютий),
    // то ця частина коду пересвідчується, що вибраний найбільший
    // з доступних днів, а не порожній daySelect
    if (daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // отримати поточний рік як число
  const date = new Date();
  const year = date.getFullYear();

  // Зробити цей рік, а також 100 років перед ним, доступним у <select> року
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}

function populateHours() {
  // заповнити <select> годин 24 годинами дня
  for (let i = 0; i <= 23; i++) {
    const option = document.createElement("option");
    option.textContent = i < 10 ? `0${i}` : i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // заповнити <select> хвилин 60 годинами кожної хвилини
  for (let i = 0; i <= 59; i++) {
    const option = document.createElement("option");
    option.textContent = i < 10 ? `0${i}` : i;
    minuteSelect.appendChild(option);
  }
}

// коли змінюються значення <select> місяця або року, запустити populateDays()
// повторно, на випадок того, що зміни вплинули на кількість доступних днів
yearSelect.onchange = () => {
  populateDays(monthSelect.value);
};

monthSelect.onchange = () => {
  populateDays(monthSelect.value);
};

//зберегти вибір дня
let previousDay;

// оновити те, який день був обраний попереднім
// дивіться використання цього значення в кінці populateDays()
daySelect.onchange = () => {
  previousDay = daySelect.value;
};
```

> **Примітка:** Пам'ятайте, що певні роки містять 53 тижні (дивіться [Кількість тижнів у році](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Це потрібно враховувати при розробці промислових застосунків.

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Значення</a></strong></td>
      <td>
        Рядок, що представляє дату й час (у місцевій часовій зоні), або порожній.
      </td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} та
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Підтримувані спільні атрибути</strong></td>
      <td>
        <a href="/uk/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a> і
        <a href="/uk/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td>
        <code>list</code>, <code>value</code>, <code>valueAsNumber</code>.
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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"><code>немає відповідної ролі</code></a></td>
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
- [Підручник з інтерфейсу вибору дати та часу](/uk/docs/Learn/Forms/Basic_native_form_controls#interfeis-vyboru-daty-ta-chasu)
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
