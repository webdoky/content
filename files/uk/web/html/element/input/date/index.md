---
title: <input type="date">
slug: Web/HTML/Element/input/date
page-type: html-element
browser-compat: html.elements.input.type_date
---

{{HTMLSidebar}}

Елементи {{HTMLElement("input")}} з атрибутом **`type="date"`** ("тип=дата") створюють поля введення, що дають користувачеві можливість ввести дату. Зовнішній вигляд інтерфейсу вибору дати буває різним залежно від браузера та операційної системи. Значення нормалізується до формату `yyyy-mm-dd`.

Значення результату включає рік, місяць та день, але _не_ час. Типи поля введення {{HTMLElement("input/time", "time")}} підтримує введення часу, а {{HTMLElement("input/datetime-local", "datetime-local")}} – дати разом з часом.

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

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

Можна скористатися атрибутом [`step`](/uk/docs/Web/HTML/Element/input#step-krok), щоб варіювати число днів, на котрі відбувається стрибок при інкременті (наприклад, щоб можна було вибрати лише суботи).

### Контроль розміру поля введення

`<input type="date">` не підтримує атрибути розміру форми, наприклад, [`size`](/uk/docs/Web/HTML/Element/input#size-rozmir). Віддавайте перевагу [CSS](/uk/docs/Web/CSS) для задання їм розмірів.

## Валідація

Усталено `<input type="date">` не перевіряє дійсність введеного значення, окрім його формату. Інтерфейси в загальному не дають ввести будь-що, що не є датою – що корисно.

Маючи обмеження доступних дат [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) і [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum) (дивіться [Встановлення максимальної та мінімальної дат](#vstanovlennia-maksymalnoi-ta-minimalnoi-dat)), контрольний елемент деактивує під час вибору неприйнятні дати й покаже помилку, якщо спробувати надіслати дату поза заданим діапазоном.

Також можна використати атрибут [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi), щоб зробити введення дати обов'язковим: буде показана помилка, якщо спробувати подати пусте поле дати.

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

> **Застереження:** Валідація на боці клієнта _не усуває потреби_ виконувати валідацію на сервері. Будь-кому легко змінити HTML – чи обійти HTML взагалі, надсилаючи дані напряму на ваш сервер. Якщо ваш сервер не зможе валідувати отримані дані, може статися лихо: дані можуть бути невідформатованими, занадто великими, не того типу тощо.

## Приклади

У цьому прикладі за допомогою нативного елемента `<input type="date">` створюється інтерфейс вибору дати.

### HTML

HTML має такий вигляд:

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">Введіть дату свого народження:</label>
    <input type="date" id="bday" name="bday" />
    <span class="validity"></span>
  </div>
</form>
```

### CSS

CSS має такий вигляд:

```css
input:invalid + span::after {
  content: " ✖";
}

input:valid + span::after {
  content: " ✓";
}
```

### Результати

{{EmbedLiveSample('pryklady', 600, 100)}}

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
