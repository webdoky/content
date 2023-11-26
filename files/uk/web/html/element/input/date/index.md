---
title: <input type="date">
slug: Web/HTML/Element/input/date
page-type: html-element
browser-compat: html.elements.input.type_date
---

{{HTMLSidebar}}

Елементи {{HTMLElement("input")}} з атрибутом **`type="date"`** ("тип=дата") створюють поля введення, що дають користувачеві можливість ввести дату: або за допомогою текстового поля, котре перевіряє відповідність введених даних, або особливого інтерфейсу вибору дати.

Значення результату включає рік, місяць та день, але _не_ час. Типи поля введення {{HTMLElement("input/time", "time")}} підтримує введення часу, а {{HTMLElement("input/datetime-local", "datetime-local")}} – дати разом з часом.

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

Користувацький інтерфейс введення в цілому відрізняється між браузерами; зверніться до [Сумісності з браузерами](#sumisnist-iz-brauzeramy) по детальнішу інформацію. В непідтримуваних браузерах контрольний елемент зводиться до [`<input type="text">`](/uk/docs/Web/HTML/Element/input/text).

## Значення

Рядок, що представляє дату, введену в поле. Форматується згідно з [форматом рядків дат](/uk/docs/Web/HTML/Date_and_time_formats#riadky-dat).

Можна встановити усталене значення поля введення з датою всередині атрибута [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia), ось так:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('znachennia', 600, 40)}}

> **Примітка:** Показаний формат дати відрізнятиметься від реального `value`: показана дата форматується _на основі локалі браузера користувача_, однак розібране `value` завжди форматується відповідно до `yyyy-mm-dd`.

Можна отримати та встановити значення дати за допомогою JavaScript, використовуючи властивості {{domxref("HTMLInputElement")}} `value` та `valueAsNumber`. Наприклад:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // виводить "2017-06-01"
console.log(dateControl.valueAsNumber); // виводить 1496275200000, мітку часу JavaScript (у мілісекундах)
```

Цей код знаходить перший елемент {{HTMLElement("input")}}, чий атрибут `type` має значення `date`, і встановлює його значенням `2017-06-01` (1 червня 2017 року). Потім він зчитує це значення назад у вигляді рядка та числа.

## Додаткові атрибути

Атрибути, що є спільними для всіх елементів {{HTMLElement("input")}}, застосовуються і до полів `date`, але можуть не впливати на їх подання. Наприклад, `size` та `placeholder` можуть не працювати. Поля `date` мають наступні додаткові атрибути.

### max

Найпізніша прийнятна дата. Якщо [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia), введене в елемент, пізніше, то елемент провалює [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation). Якщо значення атрибута `max` не є можливим рядком дати у форматі `yyyy-mm-dd`, то елемент не має максимального значення дати.

Якщо встановлені й `max`, і `min`, то значення `max` мусить бути рядком дати, що є **пізнішою чи рівною** тій, що в атрибуті `min`.

### min

Найраніша прийнятна дата. Якщо [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia), введене в елемент, раніше, то елемент провалює [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation). Якщо значення атрибута `min` не є можливим рядком дати у форматі `yyyy-mm-dd`, то елемент не має мінімального значення дати.

Якщо встановлені й `max`, і `min`, то значення `min` мусить бути рядком дати, що є **ранішою чи рівною** тій, що в атрибуті `max`.

### step

Атрибут `step` (крок) – число, що вказує відстань між поділками, до котрих має приставати значення, або особливе значення `any`, описане нижче. Лише значення, рівні базі крокування ([`min`](#min), якщо вказаний, інакше – [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia), або ж відповідне усталене значення, якщо і цього немає), є дійсними.

Рядкове значення `any` означає, що крокування не застосовується, тож дозволено будь-яке значення (враховуючи інші обмеження, наприклад, [`min`](#min) і [`max`](#max)).

> **Примітка:** Коли дані, введені користувачем, не відповідають налаштуванням крокування, {{Glossary("user agent", "користувацький агент")}} може заокруглити до найближчого дійсного значення, віддаючи перевагу числам у напрямку збільшення, коли є два рівновіддалені варіанти.

Для полів `date` значення `step` задається в днях, а працює – як число мілісекунд, рівне 86.400.000 разів по значення `step` (воно зберігається й працює в мілісекундах). Усталене значення `step` – 1, тобто 1 день.

> **Примітка:** Якщо вказати `any` як значення `step`, то для полів `date` це матиме такий само ефект, як `1`.

## Використання полів дати

Поля введення дати надають зручний інтерфейс вибору дат, а також нормалізують формат дати перед надсиланням на сервер, незалежно від локалі користувача.

В цьому розділі розглядатиметься просте та складніше використання `<input type="date">`.

### Базове використання полів дати

Найпростіше використання `<input type="date">` залучає один `<input>` разом із його {{htmlelement("label")}}, дивіться нижче:

```html
<form action="https://example.com">
  <label>
    Введіть свій день народження:
    <input type="date" name="bday" />
  </label>

  <p><button>Надіслати</button></p>
</form>
```

{{EmbedLiveSample('bazove-vykorystannia-poliv-daty', 600, 40)}}

Цей HTML надсилає введену дату за ключем `bday` на `https://example.com` — в результаті URL стане виду `https://example.com/?bday=1955-06-08`.

### Встановлення максимальної та мінімальної дат

Можна використовувати атрибути [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) і [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum), щоб обмежити дати, що можуть бути обрані користувачем. В наступному прикладі встановлена мінімальна дата `2017-04-01` та максимальна `2017-04-30`:

```html
<form>
  <label
    >Оберіть бажану дату вечірки:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('vstanovlennia-maksymalnoi-ta-minimalnoi-dat', 600, 40)}}

Наслідком є те, що можна обрати дні лише у квітні 2017 року: місяць та рік в текстовому полі не редагуються, і дати поза квітнем 2017 не можуть бути обрані у віджеті вибору.

> **Примітка:** Ви _повинні_ мати змогу використовувати атрибут [`step`](/uk/docs/Web/HTML/Element/input#step-krok), щоб варіювати число днів, на котрі відбувається стрибок при інкременті (наприклад, щоб можна було вибрати лише суботи). Втім, схоже, що на час написання цього тексту це не у всіх реалізаціях так.

### Контроль розміру поля введення

`<input type="date">` не підтримує атрибути розміру форми, наприклад, [`size`](/uk/docs/Web/HTML/Element/input#size-rozmir). Віддавайте перевагу [CSS](/uk/docs/Web/CSS) для задання їм розмірів.

## Валідація

Усталено `<input type="date">` не перевіряє дійсність введеного значення, окрім його формату. Інтерфейси в загальному не дають ввести будь-що, що не є датою – що корисно – але можна залишити поле пустим чи, в тих браузерах, де поле введення виводиться як запасний варіант `text`, ввести недійсну дату (штибу 32 квітня).

При використанні для обмеження доступних дат [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) і [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum) (дивіться [Встановлення максимальної та мінімальної дат](#vstanovlennia-maksymalnoi-ta-minimalnoi-dat)) браузери, що це підтримують, покажуть помилку при спробі подати дату, що знаходиться поза межами. Втім, слід повторно перевірити подані результати, щоб пересвідчитися, що значення лежить в заданих межах, – на випадок, якщо вибір дати не повністю підтримується на пристрої користувача.

Також можна використати атрибут [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi), щоб зробити введення дати обов'язковим: буде показана помилка, якщо спробувати подати пусте поле дати. Це повинно спрацювати в більшості браузерів, навіть якщо вони показують поле дати як текстове.

Погляньмо на приклад мінімальної та максимальної дат, де поле також є обов'язковим:

```html
<form>
  <label>
    Оберіть бажану дату вечірки (обов'язково, між 1 та 20 квітня):
    <input
      type="date"
      name="party"
      min="2017-04-01"
      max="2017-04-20"
      required />
    <span class="validity"></span>
  </label>

  <p>
    <button>Надіслати</button>
  </p>
</form>
```

При спробі подати форму з неповною датою (чи датою поза встановленими межами) браузер покаже помилку. Спробуйте пограти з прикладом нижче:

{{EmbedLiveSample('validatsiia', 600, 100)}}

Нижче – CSS, використаний у прикладі вище. Використовуються [псевдоелементи](/uk/docs/Web/CSS/Pseudo-elements) {{cssxref(":valid")}} та {{cssxref(":invalid")}}, щоб додати іконку після поля, відповідну дійсності чи недійсності поточного значення. Доводиться встановлювати іконку на {{htmlelement("span")}} після поля, а не саме поле, бо принаймні в Chrome згенерований вміст поля показується всередині контрольного елемента, його не можна ефективно оформити чи щось додати.

```css
label {
  display: flex;
  align-items: center;
}

span::after {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

> **Застереження:** Валідація на боці клієнта _не усуває потреби_ виконувати валідацію на сервері. Будь-кому легко змінити HTML – чи обійти HTML взагалі, надсилаючи дані напряму на ваш сервер. Якщо ваш сервер не зможе валідувати отримані дані, може статися лихо: дані можуть мати поганий формат, бути занадто великими, бути не того типу тощо.

## Поводження з підтримкою браузерами

Браузери, що не підтримують такий тип поля, ввічливо відступають до текстового поля, але це створює проблему сталості користувацького інтерфейсу (представлені контрольні елементи відрізняються) та обробки даних.

Друга проблема – більш серйозна; при підтримці поля дати значення нормалізується до формату `yyyy-mm-dd`. Однак із текстовим полем браузер не має уявлення, в якому форматі дата повинна бути, і є чимало форматів, у котрих люди записують дати. Наприклад:

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`
- `Month dd, yyyy`

Одним способом це обійти є атрибут [`pattern`](/uk/docs/Web/HTML/Element/input#pattern-patern) на полі дати. Навіть попри те, що віджет вибору дати його не використовуватиме, запасному текстовому полю такий атрибут знадобиться. Наприклад, спробуйте поглянути на наступне в браузері, що не підтримує поле дати:

```html
<form>
  <label
    >Введіть дату свого народження:
    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" />
    <span class="validity"></span>
  </label>
  <p>
    <button>Надіслати</button>
  </p>
</form>
```

{{EmbedLiveSample('povodzhennia-z-pidtrymkoiu-brauzeramy', 600, 100)}}

Якщо подати форму, то буде видно, що браузер показує помилку та підсвічує поле як недійсне, якщо введене не відповідає патернові `####-##-##` (де `#` – цифра від 0 до 9). Звісно, це не зупинить людей від введення недійсних дат чи некоректних форматів. Тож проблема досі є.

```css hidden
span {
  position: relative;
}

span::after {
  right: -18px;
  position: absolute;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

Найкращий наразі спосіб роботи з даними у кросбраузерний спосіб – це або мати день, місяць та рік в окремих полях, або використовувати JavaScript-бібліотеку типу [jQuery date picker](https://jqueryui.com/datepicker/).

## Приклади

В цьому прикладі створюються два набори елементів користувацького інтерфейсу для вибору дат: нативний `<input type="date">` та набір з трьох елементів {{htmlelement("select")}} – для старших браузерів, що не підтримують нативне поле дати.

{{EmbedLiveSample('pryklady', 600, 100)}}

### HTML

HTML має такий вигляд:

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">Введіть дату свого народження:</label>
    <input type="date" id="bday" name="bday" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">Введіть дату свого народження:</p>
  <div class="fallbackDatePicker">
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
</form>
```

Місяці – намертво вписані в код (вони завжди ті самі), а значення дня й року – динамічно генеруються залежно від обраних місяця й року, а також поточного року (дивіться коментарі коду нижче з детальними поясненнями, як ці функції працюють).

```css hidden
span {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

### JavaScript

Інша частина коду, що може бути цікавою – визначення доступності функціональності: чи підтримує браузер `<input type="date">`.

Створюється новий елемент {{htmlelement("input")}} element, потім його `type` встановлюється в `date`, потім негайно відбувається перевірка типу: браузери, що підтримують `date`, повернуть `text`, бо для типу `date` запасним варіантом є тип `text`. Якщо `<input type="date">` не підтримується, то нативний віджет вибору ховається, а натомість показується запасний варіант – ({{htmlelement("select")}}).

```js
// отримати віджети користувацького інтерфейсу
const nativePicker = document.querySelector(".nativeDatePicker");
const fallbackPicker = document.querySelector(".fallbackDatePicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const monthSelect = document.querySelector("#month");
const daySelect = document.querySelector("#day");

// спершу приховати запасний варіант
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// перевірити, чи відступає поле дати до запасного текстового варіанту, чи ні
const test = document.createElement("input");

try {
  test.type = "date";
} catch (e) {
  console.log(e.message);
}

// якщо відступає, то виконати код всередині блока if () {}
if (test.type === "text") {
  // приховати нативний віджет вибору та показати запасний варіант
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // динамічно заповнити дні та роки
  // (місяці завжди одні, тому – вписані в код)
  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  // видалити поточний набір елементів <option> із меню
  // <select> вибору дня, готуючи до встановлення нового набору
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }

  // Створити змінну для зберігання нового числа днів до встановлення
  let dayNum;

  // 31 чи 30 днів?
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
    // Якщо місяць – лютий, то перевірити, чи не є рік високосним
    const year = yearSelect.value;
    const isLeap = new Date(year, 1, 29).getMonth() === 1;
    dayNum = isLeap ? 29 : 28;
  }

  // вставити коректне число нових елементів <option> в <select> дня
  for (i = 1; i <= dayNum; i++) {
    var option = document.createElement("option");
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // якщо попередній день вже був встановлений, встановити значення daySelect
  // до того дня, аби уникнути перескакування дня на 1, коли
  // міняють рік
  if (previousDay) {
    daySelect.value = previousDay;

    // Якщо попередній день був встановлений у велике число, наприклад, 31, а потім
    // обрали місяць, в котрому менше днів (наприклад, лютий),
    // ця частина коду пересвідчується, що найпізніший доступний день
    // є обраним, замість показувати пустий daySelect
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

  // Зробити цей рік, а також 100 років перед ним – доступними в меню <select> вибору року
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}

// коли значення <select> місяця чи року міняються, перезапустити populateDays()
// на випадок того, що зміна вплинула на число доступних днів
yearSelect.onchange = () => {
  populateDays(monthSelect.value);
};

monthSelect.onchange = () => {
  populateDays(monthSelect.value);
};

//зберігати вибір дня
let previousDay;

// оновити те, який день був установленим раніше
// дивіться використання в кінці populateDays()
daySelect.onchange = () => {
  previousDay = daySelect.value;
};
```

> **Примітка:** Слід пам'ятати, що певні роки містять 53 тижні (дивіться [Скільки тижнів у році (англ.)](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Це слід враховувати при промисловій розробці застосунків.

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#znachennia">Значення</a></strong></td>
      <td>
        Рядок, що представляє дату в форматі YYYY-MM-DD,
        або є порожнім
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
      <td><strong>Доступні спільні атрибути</strong></td>
      <td>
         <a href="/uk/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#list-spysok"><code>list</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#readonly-lyshe-dlia-chytannia"><code>readonly</code></a> і
        <a href="/uk/docs/Web/HTML/Element/input#step-krok"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td>
        <code>list</code>, <code>value</code>, <code>valueAsDate</code>,
        <code>valueAsNumber</code>.
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

## Додаткова інформація

- Загальний елемент {{HTMLElement("input")}} та інтерфейс для керування ним, {{domxref("HTMLInputElement")}}
- [Настанови з віджетів вибору дати й часу](/uk/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Вживані в HTML формати дати й часу](/uk/docs/Web/HTML/Date_and_time_formats)
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

Тестові зміни.
