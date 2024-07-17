---
title: <input type="time">
slug: Web/HTML/Element/input/time
page-type: html-element
browser-compat: html.elements.input.type_time
---

{{HTMLSidebar}}

Елементи {{HTMLElement("input")}} типу **`time`** (час) утворюють поля введення, призначені для того, щоб дозволити користувачам легко вводити час (години та хвилини, а також, за бажанням, секунди).

Попри те, що зовнішній вигляд користувацького інтерфейсу цього контрольного елемента залежить від браузера та операційної системи, можливості в нього одні й ті ж. Значення завжди є 24-годинним відформатованим часом `hh:mm` або `hh:mm:ss`, з додатковими нулями, незалежно від формату введення UI.

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

### Задання атрибута value

Усталене значення поля можна задати при створенні елемента `<input>` шляхом включення в атрибут [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) дійсного часу, наприклад:

```html
<label for="appt-time">Виберіть час запису: </label>
<input id="appt-time" type="time" name="appt-time" value="13:30" />
```

{{EmbedLiveSample('zadannia-atrybuta-value', 600, 60)}}

### Задання значення за допомогою JavaScript

Також отримати та задати значення часу можна за допомогою властивості `value` {{domxref("HTMLInputElement")}} у JavaScript, наприклад:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Формат значення часу

Значення поля `time` завжди має 24-годинний формат, що включає нулі на початку: `hh:mm`, незалежно від формату введення, який, ймовірно, вибирається на основі локалі користувача (або з боку користувацького агента). Якщо час включає секунди (дивіться [Використання атрибута step](#vykorystannia-atrybuta-step)), то формат завжди має вигляд `hh:mm:ss`. Дізнатися більше про формат значення часу, який використовується цим типом поля вводу, можна у розділі [Рядків часу](/uk/docs/Web/HTML/Date_and_time_formats#riadky-chasu).

У цьому прикладі можна побачити значення поля часу, увівши час та побачивши, як це значення змінюється.

По-перше, погляньмо на HTML. Він досить простий, з підписом та полем введення, що вже бачено раніше, але з додаванням елемента {{HTMLElement("p")}} зі {{HTMLElement("span")}}, щоб відображати значення поля `time`:

```html
<form>
  <label for="startTime">Час початку: </label>
  <input type="time" id="startTime" />
  <p>
    Значення поля <code>time</code>: <code> "<span id="value">–</span>"</code>.
  </p>
</form>
```

Код JavaScript додає до поля часу логіку, що відстежує подію {{domxref("Element/input_event", "input")}}, яка спрацьовує кожного разу, коли змінюється вміст елемента введення. Коли це стається, вміст `<span>` замінюється новим значенням елемента введення.

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener(
  "input",
  () => {
    valueSpan.innerText = startTime.value;
  },
  false,
);
```

{{EmbedLiveSample("format-znachennia-chasu", 600, 80)}}

Коли подається форма, що містить поле `time`, то його значення перед додаванням до даних форми – кодується. Запис у дані форми для поля часу завжди має форму `name=hh%3Amm`, або `name=hh%3Amm%3Ass`, якщо включено секунди (дивіться [Використання атрибута step](#vykorystannia-atrybuta-step)).

## Додаткові атрибути

На додачу до атрибутів, спільних для всіх елементів {{HTMLElement("input")}}, поля `time` приймають наступні.

> **Примітка:** На відміну від багатьох типів даних, значення часу мають **періодичний інтервал**, а отже – значення досягають найвищого можливого значення, а потім знову повертаються до початку. Наприклад, якщо задати `min` зі значенням `14:00` та `max` зі значенням `2:00`, то це означає, що допустимі значення часу починаються о 14:00, проходять через північ до наступного дня, закінчуючись о 2:00. Дивіться більше в розділі [min і max по два боки від півночі](#min-i-max-po-dva-boky-vid-pivnochi) цієї статті.

### list

Значення атрибута list – це {{domxref("Element.id", "id")}} елемента {{HTMLElement("datalist")}}, розташованого в тому самому документі. {{HTMLElement("datalist")}} надає список наперед визначених значень, що пропонуються користувачем для поля. Всі значення, що несумісні з [`type`](/uk/docs/Web/HTML/Element/input#type-typ), не включаються в список запропонованих варіантів. Ці варіанти є пропозиціями, а не обов'язковими: користувачі можуть як обирати серед них, так і ввести інше значення.

### max

Рядок, що вказує на найпізніший час, що буде прийнятий, заданий у тому самому [форматі значення часу](#format-znachennia-chasu), описаному вище. Якщо заданий рядок не є дійсним часом, то максимальне значення не задається.

### min

Рядок, що задає найраніший час, що буде прийнятий, заданий у тому самому [форматі значення часу](#format-znachennia-chasu), описаному вище. Якщо заданий рядок не є дійсним часом, то мінімальне значення не задається.

### readonly

Булів атрибут, котрий, якщо присутній, означає, що користувач не може редагувати поле. Проте `value` цього поля усе ж може бути змінено кодом JavaScript, шляхом безпосереднього присвоєння властивості `value` об'єкта {{domxref("HTMLInputElement")}}.

> **Примітка:** Оскільки таке поле не може мати значення, `required` не діє на поля, на котрих також задано атрибут `readonly`.

### step

Атрибут `step` – це число, що задає дискретність, якій повинно відповідати значення, або спеціальне значення `any`, описане нижче. Лише значення, що дорівнюють основі для кроку ([`min`](#min), якщо цей атрибут задано, інакше – [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia), іще інакше – відповідне усталене значення) є дійсними.

Рядкове значення `any` означає, що крокування не накладається, і дозволено будь-яке значення (за винятком інших обмежень, як то [`min`](#min) і [`max`](#max)).

> **Примітка:** Коли введені користувачем дані не відповідають налаштуванням крокування, то {{Glossary("User agent", "користувацький агент")}} може округлити до найближчого дійсного значення, віддаючи перевагу числам у позитивному напрямку, коли є два однаково близьких варіанти.

Для полів `time` значення `step` дається в секундах, з масштабним фактором 1000 (оскільки за лаштунками числове значення зберігається в мілісекундах). Усталене значення `step` – 60, що відповідає 60 секундам (або 1 хвилині, або 60.000 мілісекунд).

Коли як значення `step` задано `any`, то вживається усталене значення 60 секунд, а секундне значення не виводиться в UI.

## Використання полів часу

### Базове використання time

Найпростіше використання `<input type="time">` включає базову комбінацію елементів `<input>` і {{htmlelement("label")}}, як показано нижче:

```html
<form>
  <label for="appt-time">Оберіть час запису: </label>
  <input id="appt-time" type="time" name="appt-time" />
</form>
```

{{EmbedLiveSample('bazove-vykorystannia-time', 600, 40)}}

### Контроль розміру поля

Елемент `<input type="time">` не підтримує атрибути розміру форми, як то [`size`](/uk/docs/Web/HTML/Element/input#size-rozmir), оскільки час завжди має приблизно однакову довжину в символах. Для потреб задання розміру доведеться використовувати [CSS](/uk/docs/Web/CSS).

### Використання атрибута step

Для зміни кількості часу, на котру відбувається стрибок при інкременті або декременті, можна скористатися атрибутом [`step`](/uk/docs/Web/HTML/Element/input#step-krok) (наприклад, так, щоб час змінювався на 10 хвилин при кожному клацанні маленьких віджетів стрілок).

Цей атрибут приймає ціле числове значення, що визначає кількість секунд, на які повинен відбувати інкремент; усталене значення – 60 секунд. Коли вживається це усталене значення, більшість UI часу користувацьких агентів виводять години та хвилини, але не секунди. Додання атрибуту [`step`](/uk/docs/Web/HTML/Element/input#step-krok) з будь-яким числовим значенням, що не ділиться на `60`, додає до UI секунди, якщо до появи секунд не призвели значення `min` або `max`.

```html
<form>
  <label for="appt-time">Оберіть час запису: </label>
  <input id="appt-time" type="time" name="appt-time" step="2" />
</form>
```

{{EmbedLiveSample('vykorystannia-atrybuta-step', 600, 40)}}

Щоб задати як крок хвилини або години, задайте число хвилин або годин у секундах, наприклад, 120 для 2 хвилин, або 7200 для 2 годин.

## Валідація

Усталено `<input type="time">` не застосовує до введених значень жодної валідації, окрім того, що інтерфейс користувацького агента, загалом, не дозволяє ввести нічого, крім значення часу. Це корисно, але не можна повністю покладатися на те, що значення буде коректним часовим рядком, оскільки воно може бути порожнім рядком (`""`), що допускається.

### Задання максимального та мінімального часу

Для обмеження діапазону допустимих значень часу, котрі може обрати користувач, можна використовувати атрибути [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) і [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum). У наступному прикладі задається мінімальний час `12:00` та максимальний час `18:00`:

```html
<form>
  <label for="appt-time">
    Оберіть час запису (робочі години з 12:00 до 18:00):
  </label>
  <input id="appt-time" type="time" name="appt-time" min="12:00" max="18:00" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('zadannia-maksymalnoho-ta-minimalnoho-chasu', 600, 40)}}

Ось CSS, використаний у прикладі вище. Тут використовуються властивості CSS {{cssxref(":valid")}} та {{cssxref(":invalid")}}, щоб оформити поле на основі того, чи є поточне значення дійсним. Піктограма додана як згенерована піктограма content на {{htmlelement("span")}} поряд з полем.

```css
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

Результатом є те, що:

- Лише час між 12:00 і 18:00 вважатиметься дійсним; час поза цим діапазоном буде позначений як недійсний.

#### min і max по два боки від півночі

Якщо задати атрибут [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) зі значенням, що більше за значення атрибута [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum), то отриманий діапазон загорнеться через північ, і вийде дійсний діапазон. Така функціональність не підтримується жодними іншими типами полів.

```js
const input = document.createElement("input");
input.type = "time";
input.min = "23:00";
input.max = "01:00";
input.value = "23:59";

if (input.validity.valid && input.type === "time") {
  // Розвернений діапазон <input type=time> підтримується
} else {
  // Розвернений діапазон <input type=time> не підтримується
}
```

### Обов'язковість часу

На додачу можна скористатися атрибутом [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi), щоб зробити заповнення часу обов'язковим. Браузери покажуть помилку, якщо спробувати подати час, що виходить за задані межі, або пусте поле часу.

Погляньмо на приклад; тут задано мінімальний і максимальний час, а також поле зроблено обов'язковим:

```html
<form>
  <div>
    <label for="appt-time">
      Оберіть час запису (робочі години з 12:00 до 18:00):
    </label>
    <input
      id="appt-time"
      type="time"
      name="appt-time"
      min="12:00"
      max="18:00"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Подати форму" />
  </div>
</form>
```

Якщо спробувати подати форму з незаповненим часом (або часом поза заданими межами), то браузер покаже помилку. Спробуйте погратися з цим прикладом:

{{EmbedLiveSample('oboviazkovist-chasu', 600, 120)}}

> **Застереження:** Валідація форм HTML _не_ є заміною сценаріїв, що пересвідчуються в тому, що введені дані мають коректний формат.Занадто легко підлаштувати HTML, щоб обійти валідацію, або навіть геть її прибрати. Також можна обійти HTML взагалі, й подавати дані безпосередньо на сервер. Якщо ваш код на серверному боці не може валідувати дані, котрі отримує, то може статись лихо, коли в вашу базу даних введуть некоректно відформатовані дані (або завеликі дані, дані не того типу, і так далі).

## Приклади

У цьому прикладі створюється елемент інтерфейсу для вибору часу; використовується нативний інтерфейс, створений за допомогою `<input type="time">`:

### HTML

```html
<form>
  <label for="appt-time">
      Оберіть час запису (робочі години від 12:00 до 18:00):
  </label>
  <input
    id="appt-time"
    type="time"
    name="appt-time"
    min="12:00"
    max="18:00"
    required />
  <span class="validity"></span
```

### CSS

```css
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

### Результат

{{EmbedLiveSample('pryklady', 600, 140)}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="/uk/docs/Web/HTML/Element/input#value-znachennia">Значення</a></strong></td>
      <td>Рядок, що представляє час, або порожній.</td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} та
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Доступні спільні атрибути</strong></td>
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
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
        і
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}.
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

- [`<input type="date">`](/uk/docs/Web/HTML/Element/input/date)
- [`<input type="datetime-local">`](/uk/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="week">`](/uk/docs/Web/HTML/Element/input/week)
- [`<input type="month">`](/uk/docs/Web/HTML/Element/input/month)
- Загальний елемент {{HTMLElement("input")}} та інтерфейс, що використовується для роботи з ним, – {{domxref("HTMLInputElement")}}
- [Формати дати та часу, що використовуються в HTML](/uk/docs/Web/HTML/Date_and_time_formats)
- [Підручник з інтерфейсу вибору дати та часу](/uk/docs/Learn/Forms/HTML5_input_types#interfeis-vyboru-daty-ta-chasu)
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
