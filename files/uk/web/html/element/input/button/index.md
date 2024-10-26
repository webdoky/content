---
title: <input type="button">
slug: Web/HTML/Element/input/button
page-type: html-element
browser-compat: html.elements.input.type_button
---

{{HTMLSidebar}}

Елементи {{HTMLElement("input")}} типу **`button`** (кнопка) виводяться як прості натисні кнопки, котрі можуть бути запрограмовані для контролю певної функціональності, будь-де на сторінці, коли їм присвоєна функція – обробник подій (зазвичай подій {{domxref("Element/click_event", "клацання")}}).

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> [!NOTE]
> Хоч елементи `<input>` типу `button` досі є цілковито дійсним HTML, та бажаним способом створювати кнопки є новіший елемент {{HTMLElement("button")}}. Враховуючи, що текст підпису {{HTMLElement("button")}} вставляється між початковим і кінцевим тегами, можна додати в підпис код на HTML, навіть зображення.

## Значення

### Кнопка зі значенням

Атрибут [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) елементів `<input type="button">` містить рядок, що використовується як підпис кнопки. Цей атрибут забезпечує кнопці {{glossary("accessible description", "доступний опис")}}.

```html
<input type="button" value="Клацни мене" />
```

{{EmbedLiveSample("knopka-zi-znachenniam", 650, 30)}}

### Кнопка без значення

Якщо не задати `value`, то вийде порожня кнопка:

```html
<input type="button" />
```

{{EmbedLiveSample("knopka-bez-znachennia", 650, 30)}}

## Застосування кнопок

Елементи `<input type="button">` не мають усталеної логіки (їхні родичі, `<input type="submit">` і [`<input type="reset">`](/uk/docs/Web/HTML/Element/input/reset), застосовуються для подання та скидання форм відповідно). Щоб кнопка щось робила, треба написати код JavaScript, котрий виконуватиме роботу.

### Проста кнопка

Почнімо з простої кнопки з обробником події {{domxref("Element/click_event", "клацання")}}, що запускає машину (зрештою, він перемикає `value` кнопки й текстовий вміст відповідного абзацу):

```html
<form>
  <input type="button" value="Запустити машину" />
</form>
<p>Машина зупинена.</p>
```

```js
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Запустити машину") {
    button.value = "Запустити машину";
    paragraph.textContent = "Машина запущена!";
  } else {
    button.value = "Запустити машину";
    paragraph.textContent = "Машина зупинена.";
  }
}
```

Цей сценарій отримує посилання на об'єкт {{domxref("HTMLInputElement")}}, що представляє `<input>` у DOM, зберігши це посилання в змінній `button`. Далі використовується {{domxref("EventTarget.addEventListener", "addEventListener()")}} – для встановлення функції, що запуститься, коли на кнопці відбудеться подія {{domxref("Element/click_event", "клацання")}}.

{{EmbedLiveSample("prosta-knopka", 650, 100)}}

### Додавання до кнопок комбінацій клавіш

Комбінації клавіш, також відомі як клавіші звертання та клавіатурні еквіваленти, дають користувачам змогу активувати кнопку за допомогою клавіші або комбінації клавіш клавіатури. Для додавання кнопці комбінації клавіш, як і будь-якому елементу {{HTMLElement("input")}}, для якого це має зміст, слід використовувати глобальний атрибут [`accesskey`](/uk/docs/Web/HTML/Global_attributes/accesskey).

В цьому прикладі <kbd>s</kbd> задана як клавіша звертання (знадобиться натиснути <kbd>s</kbd> плюс певні клавіші-модифікатори, специфічні для комбінації браузера й ОС; дивіться змістовний список модифікаторів на сторінці [accesskey](/uk/docs/Web/HTML/Global_attributes/accesskey)).

```html
<form>
  <input type="button" value="Запустити машину" accesskey="s" />
</form>
<p>Машина зупинена.</p>
```

```js hidden
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Запустити машину") {
    button.value = "Зупинити машину";
    paragraph.textContent = "Машина запущена!";
  } else {
    button.value = "Запустити машину";
    paragraph.textContent = "Машина зупинена.";
  }
}
```

{{EmbedLiveSample("dodavannia-do-knopok-kombinatsii-klavish", 650, 100)}}

> [!NOTE]
> Проблема з прикладом вище, звісно, в тому, що користувач не знатиме, яка клавіша є клавішею звертання! На реальному сайті доведеться надати цю інформацію в спосіб, що не суперечить дизайну сайту (наприклад, шляхом надання легкодоступного посилання, що вказує на інформацію про те, які в сайту клавіші звертання).

### Вимкнення та вмикання кнопки

Щоб вимкнути кнопку, слід задати на ній глобальний атрибут [`disabled`](/uk/docs/Web/HTML/Attributes/disabled), отак:

```html
<input type="button" value="Вимкни мене" disabled />
```

#### Задання атрибута disabled

Вмикати й вимикати кнопки динамічно можна за допомогою присвоєння `disabled` значень `true` і `false`. У цьому прикладі кнопка з'являється ввімкненою, однак коли її натиснути, вона вимикається за допомогою `button.disabled = true`. Потім використовується функція {{domxref("Window.setTimeout", "setTimeout()")}}, щоб скинути кнопку до її ввімкненого стану за дві секунди.

```html
<input type="button" value="Ввімкнена" />
```

```js
const button = document.querySelector("input");

button.addEventListener("click", disableButton);

function disableButton() {
  button.disabled = true;
  button.value = "Вимкнена";
  setTimeout(() => {
    button.disabled = false;
    button.value = "Ввімкнена";
  }, 2000);
}
```

{{EmbedLiveSample("zadannia-atrybuta-disabled", 650, 60)}}

#### Успадкування стану вимкненості

Якщо атрибут `disabled` не заданий, то кнопка успадковує свій стан `disabled` від свого елемента-предка. Це уможливлює ввімкнення й вимкнення груп елементів водночас, шляхом загортання їх у контейнер, наприклад, поставивши їх в елемент {{HTMLElement("fieldset")}}, а потім додавши такому контейнеру `disabled`.

Приклад нижче демонструє це в дії. Він вельми подібний до попереднього, окрім того, що атрибут `disabled` задається на `<fieldset>`, коли натискається перша кнопка – це призводить до того, що всі три кнопки вимикаються, поки не спливе двосекундний період.

```html
<fieldset>
  <legend>Група кнопок</legend>
  <input type="button" value="Кнопка 1" />
  <input type="button" value="Кнопка 2" />
  <input type="button" value="Кнопка 3" />
</fieldset>
```

```js
const button = document.querySelector("input");
const fieldset = document.querySelector("fieldset");

button.addEventListener("click", disableButton);

function disableButton() {
  fieldset.disabled = true;
  setTimeout(() => {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("uspadkuvannia-stanu-vymknenosti", 650, 100)}}

> [!NOTE]
> Firefox, на відміну від решти браузерів, зберігає стан `disabled` елемента `<input>` при перезавантаженні сторінки. Щоб це обійти, можна задати атрибут [`autocomplete`](/uk/docs/Web/HTML/Element/button#autocomplete) елемента `<input>` зі значенням `off`. (Дивіться подробиці у [Ваді Firefox 654072](https://bugzil.la/654072).)

## Валідація

Кнопки не беруть участі в валідації обмежень; вони не мають справжнього значення, котре можна було б обмежити.

## Приклади

Приклад нижче демонструє дуже простий застосунок для малювання, створений за допомогою елемента {{htmlelement("canvas")}} і трохи CSS і JavaScript (CSS прихований заради стислості). Верхні два контрольні елементи дають змогу обрати колір та розмір пензля. Кнопка, коли її клацнули, закликає функцію, що очищує полотно.

```html
<div class="toolbar">
  <input type="color" aria-label="обрати колір пензля" />
  <input
    type="range"
    min="2"
    max="50"
    value="30"
    aria-label="обрати колір пензля" /><span class="output">30</span>
  <input type="button" value="Очистити полотно" />
</div>

<canvas class="myCanvas">
  <p>Тут додати доцільний запасний вміст.</p>
</canvas>
```

```css hidden
body {
  background: #ccc;
  margin: 0;
  overflow: hidden;
}

.toolbar {
  background: #ccc;
  width: 150px;
  height: 75px;
  padding: 5px;
}

input[type="color"],
input[type="button"] {
  width: 90%;
  margin: 0 auto;
  display: block;
}

input[type="range"] {
  width: 70%;
}

span {
  position: relative;
  bottom: 5px;
}
```

```js
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 85);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);

const colorPicker = document.querySelector('input[type="color"]');
const sizePicker = document.querySelector('input[type="range"]');
const output = document.querySelector(".output");
const clearBtn = document.querySelector('input[type="button"]');

// перетворити градуси в радіани
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// оновити виведене значення вибору розміру

sizePicker.oninput = () => {
  output.textContent = sizePicker.value;
};

// зберегти координати вказівника миші, і те, чи є кнопка натисненою
let curX;
let curY;
let pressed = false;

// оновити координати вказівника миші
document.onmousemove = (e) => {
  curX = e.pageX;
  curY = e.pageY;
};

canvas.onmousedown = () => {
  pressed = true;
};

canvas.onmouseup = () => {
  pressed = false;
};

clearBtn.onclick = () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
};

function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("pryklady", '100%', 600)}}

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
      <td><strong>Підтримувані спільні атрибути</strong></td>
      <td>
        <a href="/uk/docs/Web/HTML/Element/input#type-typ"><code>type</code></a> і
        <a href="/uk/docs/Web/HTML/Element/input#value-znachennia"><code>value</code></a>
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

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement("input")}}, а також інтерфейс {{domxref("HTMLInputElement")}}, котрий його реалізовує.
- Сучасніший елемент {{HTMLElement("button")}}.
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
