---
title: "<dialog> – діалоговий елемент"
slug: Web/HTML/Element/dialog
page-type: html-element
browser-compat: html.elements.dialog
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<dialog>`** представляє модальне або немодальне діалогове віконце або інший інтерактивний компонент, такий як віконце попередження, інспектор або підвікно.

Елемент HTML `<dialog>` використовується для створення як модальних, так і немодальних діалогових віконець. Модальні діалогові віконця переривають взаємодію з іншою частиною сторінки, яка стає нерухомою, тоді як немодальні діалогові віконця дозволяють взаємодію з рештою сторінки.

Для виведення елемента `<dialog>` повинен використовуватися JavaScript. Використовуйте метод {{domxref("HTMLDialogElement.showModal()", ".showModal()")}}, щоб показати модальне вікно, та метод {{domxref("HTMLDialogElement.show()", ".show()")}}, щоб показати немодальне вікно. Вікно можна закрити за допомогою методу {{domxref("HTMLDialogElement.close()", ".close()")}} або методу [`dialog`](/uk/docs/Web/HTML/Element/form#method), коли подається елемент `<form>`, вкладений в елемент `<dialog>`. Модальні діалогові вікна також можна закрити, натиснувши клавішу <kbd>Esc</kbd>.

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

> **Застереження:** Атрибут `tabindex` не повинен використовуватися на елементі `<dialog>`.

- `open`

  - : Вказує на те, що діалогове віконце – активне та доступне для взаємодії. Якщо атрибут `open` не задано, то це діалогове віконце не буде видимим для користувача.
    Рекомендовано використовувати для візуалізації діалогів методи `.show()` або `.showModal()`, а не атрибут `open`. Якщо `<dialog>` відкрито за допомогою атрибуту `open`, то він буде немодальним.

    > **Примітка:** Попри те, що можна перемикатися між відкритим і закритим станами немодальних діалогових віконець шляхом перемикання наявності атрибута `open`, цей підхід не рекомендується.

## Примітки щодо застосування

- Елементи {{HTMLElement("form")}} можуть використовуватися для закривання діалогового віконця, якщо мають атрибут `method="dialog"` або якщо кнопка, що використовується для подання такої форми, має [`formmethod="dialog"`](/uk/docs/Web/HTML/Element/input#formmethod). Коли `<form>` усередині `<dialog>` подається за допомогою методу `dialog`, діалогове віконце закривається, стани елементів керування форми зберігаються, але не подаються, а властивість {{domxref("HTMLDialogElement.returnValue", "returnValue")}} отримує значення кнопки, що була активована.
- Псевдоелемент CSS {{cssxref('::backdrop')}} може використовуватися для оформлення задника модального діалогу, який виводиться під елементом `<dialog>`, коли цей діалог виводиться за допомогою метода {{domxref("HTMLDialogElement.showModal()")}}. Наприклад, цей елемент можна використовувати для затемнення нерухомого вмісту за модальним діалогом.
- Атрибут [`autofocus`](/uk/docs/Web/HTML/Global_attributes/autofocus) повинен бути доданий до елемента, щодо якого очікується, що користувач буде взаємодіяти з ним негайно після відкриття модального діалогу. Якщо немає елемента, що вимагає негайної взаємодії, то атрибут `autofocus` можна додати до самого елемента `<dialog>`.

## Приклади

### Діалог лише з HTML

Цей приклад демонструє створення немодального діалогу за допомогою лише HTML. У зв'язку з присутністю на елементі `<dialog>` булевого атрибута `open`, діалог відкривається при завантаженні сторінки. Його можна закрити, натиснувши кнопку "OK", оскільки атрибут `method` на елементі `<form>` має значення `"dialog"`. У цьому випадку для закриття форми не потрібний JavaScript.

```html
<dialog open>
  <p>Вітання кожному та всім!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Результат

{{EmbedLiveSample("dialoh-lyshe-z-html", "100%", 200)}}

> **Примітка:** Перезавантажте сторінку, щоб скинути вивід.

Цей діалог зразу відкривається, завдяки присутності атрибута `open`. Діалоги, виведені за допомогою атрибута `open`, є немодальними. Коли клацнути "OK", цей діалог закривається, залишаючи фрейм Результату порожнім. Коли він закритий, вже немає методу його відкрити знову. З цієї причини, найкращим методом виведення немодальних діалогових віконець є використання методу {{domxref("HTMLDialogElement.show()")}}. Можна перемикати відображення діалогу, додаючи або видаляючи булевий атрибут `open`, але це не рекомендований підхід.

### Створення модального діалогу

Цей приклад демонструє модальний діалог з [градієнтним](/uk/docs/Web/CSS/gradient) задником. Метод `.showModal()` відкриває цей модальний діалог, коли активується кнопка "Показати діалог". Його можна закрити, натиснувши клавішу <kbd>Esc</kbd>, або за допомогою методу `close()`, коли активувати в діалозі кнопку "Закрити".

Коли діалог відкривається, усталено браузер передає фокус до першого елемента в діалозі, який може прийняти фокус. У цьому прикладі до кнопки "Закрити" застосовано атрибут {{HTMLElement("autofocus")}}, щоб передати їй фокус, коли діалог відкривається, оскільки це елемент, з яким користувач буде взаємодіяти негайно після відкриття діалогу.

#### HTML

```html
<dialog>
  <button autofocus>Закрити</button>
  <p>Цей модальний діалог має драйвовий задник!</p>
</dialog>
<button>Показати діалог</button>
```

#### CSS

Оформлювати задник можна за допомогою псевдоелемента {{cssxref('::backdrop')}}.

```css
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
```

#### JavaScript

Цей діалог відкривається модально за допомогою методу `.showModal()` і закривається за допомогою методу `.close()`.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Кнопка "Показати діалог" відкриває діалог модально
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Кнопка "Закрити" закриває діалог
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Результат

{{EmbedLiveSample("stvorennia-modalnoho-dialohu", "100%", 200)}}

Коли виводиться модальний діалог, він з'являється поверх усіх інших діалогів, що вже виведені. Все, що знаходиться поза цим модальним діалогом, стає нерухомим, а взаємодія поза діалогом блокується. Зверніть увагу, що коли діалог відкритий, то, за винятком самого діалогу, взаємодія з документом неможлива; кнопка "Показати діалог" здебільшого прихована майже непрозорим задником діалогу і є нерухомою.

### Обробка поверненого значення з діалогу

Цей приклад демонструє [`returnValue`](/uk/docs/Web/API/HTMLDialogElement/returnValue) елемента `<dialog>` і те, як закрити модальний діалог за допомогою форми. Усталено `returnValue` – це порожній рядок або значення кнопки, що подала форму в елементі `<dialog>`, якщо така є.

Цей приклад відкриває модальний діалог, коли активована кнопка "Показати діалог". Цей діалог містить форму з елементом {{HTMLElement("select")}} та двома елементами {{HTMLElement("button")}}, які усталено мають `type="submit"`. Слухач подій оновлює значення кнопки "Підтвердити", коли змінюється варіант вибору. Якщо кнопка "Підтвердити" активована для закриття діалогу, то поточне значення кнопки є значенням повернення. Якщо цей діалог закривається шляхом натискання кнопки "Скасувати", то `returnValue` – це `cancel`.

Коли діалог закривається, то повернене значення виводиться під кнопкою "Показати діалог". Якщо діалог закривається шляхом натискання клавіші <kbd>Esc</kbd>, то `returnValue` не оновлюється, а подія `close` не відбувається, тому текст в елементі {{HTMLElement("output")}} не оновлюється.

#### HTML

```html
<!-- Модальний діалог, що містить форму -->
<dialog id="favDialog">
  <form>
    <p>
      <label
        >Улюблена тварина:
        <select>
          <option value="default">Оберіть…</option>
          <option>Артемія</option>
          <option>Червона панда</option>
          <option>Мавпа-павук</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Скасувати</button>
      <button id="confirmBtn" value="default">Підтвердити</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Показати діалог</button>
</p>
<output></output>
```

#### JavaScript

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// Кнопка "Показати діалог" модально відкриває <dialog>
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// Поле вводу "Улюблена тварина" задає значення кнопки подання
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// Кнопка "Скасувати" закриває діалог без подання, у зв'язку з [formmethod="dialog"], запускаючи подію закриття.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "Немає значення повернення."
      : `Значення повернення: ${favDialog.returnValue}.`; // Необхідно перевіряти на "default", а не на порожній рядок
});
// Не дати кнопці "підтвердження" запустити усталену поведінку подання форми, а також закрити діалог методом `close()`, що запускає подію "close".
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Ми не хочемо подавати цю несправжню форму
  favDialog.close(selectEl.value); // Тут необхідно надіслати значення віконця вибору.
});
```

#### Результат

{{EmbedLiveSample("obrobka-povernenoho-znachennia-z-dialohu", "100%", 300)}}

Приклади вище демонструють наступні три методи закриття модальних діалогових віконець:

- Шляхом подавання форми всередині діалогу за допомогою методу `dialog` (як у прикладі [діалогу лише з HTML](#dialoh-lyshe-z-html)).
- Шляхом натискання клавіші <kbd>Esc</kbd>.
- By calling the {{domxref("HTMLDialogElement.close()")}} method (as seen in the [modal example](#creating_a_modal_dialog)).
- Шляхом виклику методу {{domxref("HTMLDialogElement.close()")}} (як у прикладі [модального діалогу](#stvorennia-modalnoho-dialohu)).
  У цьому прикладі кнопка "Скасувати" закриває діалог за допомогою методу форми `dialog`, а кнопка "Підтвердити" закриває діалог за допомогою методу {{domxref("HTMLDialogElement.close()")}}.

Кнопка "Скасувати" має атрибут [`formmethod="dialog"`](/uk/docs/Web/HTML/Element/input/submit#formmethod), який відкидає усталений метод {{HTMLElement("form")}} {{HTTPMethod("GET")}}. Коли метод форми – [`dialog`](#prymitky-shchodo-zastosuvannia), стан форми зберігається, але не подається, а діалог закривається.

Коли `action` немає, подання форми з усталеним методом {{HTTPMethod("GET")}} призводить до перезавантаження сторінки. Тут використовується JavaScript, щоб запобігти поданню та закрити діалог за допомогою методів {{domxref("event.preventDefault()")}} і {{domxref("HTMLDialogElement.close()")}} відповідно.

Важливо надавати механізм закриття в кожному елементі `dialog`. Клавіша <kbd>Esc</kbd> усталено не закриває немодальні діалоги, і не можна виходити з того, що користувач взагалі має доступ до фізичної клавіатури (наприклад, це може бути користувач пристрою з сенсорним екраном, без доступу до клавіатури).

### Закриття діалогу з обов'язковим полем форми

Коли форма всередині діалогу має обов'язкове поле, браузер дозволяє закрити такий діалог лише після введення значення для такого поля. Щоб закрити такий діалог, використовуйте або атрибут [`formnovalidate`](/uk/docs/Web/HTML/Element/input#formnovalidate-nevaliduvannia-formy) на кнопці закриття, або викликайте метод `close()` на об'єкті діалогу, коли клацають кнопку закриття.

```html
<dialog id="dialog">
  <form method="dialog">
    <p>
      <label>
        Улюблена тварина:
        <input type="text" required />
      </label>
    </p>
    <div>
      <input type="submit" id="normal-close" value="Закрити – нормально" />
      <input
        type="submit"
        id="novalidate-close"
        value="Закрити – novalidate"
        formnovalidate />
      <input type="submit" id="js-close" value="Закрити – JS" />
    </div>
  </form>
</dialog>
<p>
  <button id="show-dialog">Показати діалог</button>
</p>
<output></output>
```

```css hidden
[type="submit"] {
  margin-right: 1rem;
}
```

#### JavaScript

```js
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
```

#### Результат

{{EmbedLiveSample("zakryttia-dialohu-z-oboviazkovym-polem-formy", "100%", 300)}}

Судячи з результату, неможливо закрити діалог за допомогою кнопки _Закрити – нормально_. Проте його можна закрити, якщо обійти валідацію форми за допомогою атрибута `formnovalidate` на кнопці _Скасувати_. Програмно – `dialog.close()` також закриває такий діалог.

### Анімування діалогів

Елементи `<dialog>` отримують `display: none;`, коли приховані, і `display: block;`, коли показані, а також вилучаються чи додаються до {{glossary("top layer", "вищого шару")}} та [дерева доступності](/uk/docs/Web/Performance/How_browsers_work#vybudovuvannia-dereva-dostupnosti). Тому для анімування елементів `<dialog>` властивість {{cssxref("display")}} повинна бути придатною для анімування. [Браузери, що це підтримують](/uk/docs/Web/CSS/display#sumisnist-iz-brauzeramy), анімують `display` з варіацією на [дискретному типі анімації](/uk/docs/Web/CSS/CSS_animated_properties#dyskretni). А саме, браузер перемикається між `none` та іншим значенням `display` так, щоб анімований вміст був видимим протягом усієї тривалості анімації.

Отже, наприклад:

- Коли `display` анімується від `none` до `block` (чи іншого видимого значення `display`), значення перемикається на `block` на `0%` тривалості анімації, щоб воно було видимим протягом усієї анімації.
- Коли `display` анімується від `block` (чи іншого видимого значення `display`) до `none`, значення перемикається на `none` на `100%` тривалості анімації, щоб воно було видимим протягом усієї анімації.

> **Примітка:** При анімуванні за допомогою [Переходів CSS](/uk/docs/Web/CSS/CSS_transitions), для ввімкнення логіки, описаної вище, необхідно задати [`transition-behavior: allow-discrete`](/uk/docs/Web/CSS/transition-behavior). Ця поведінка усталено доступна при анімуванні за допомогою [Анімацій CSS](/uk/docs/Web/CSS/CSS_animations); еквівалентний крок не потрібний.

#### Переходи елементів діалогу

При анімуванні елементів `<dialog>` за допомогою Переходів CSS необхідні такі речі:

- Директива [`@starting-style`](/uk/docs/Web/CSS/@starting-style)
  - : Задає набір стартових значень для властивостей, що задаються на `<dialog>`, від яких повинен відбуватись перехід щоразу, коли діалог відкривається. Це необхідно для уникання неочікуваної поведінки. Усталено переходи CSS відбуваються лише тоді, коли властивість змінюється з одного значення на інше на видимому елементі; вони не запускаються при першому оновленні стилю елементів, або коли тип `display` змінюється з `none` на інший тип.
- Властивість [`display`](/uk/docs/Web/CSS/display)
  - : Додайте `display` до списку переходу, щоб `<dialog>` залишався як `display: block` (або інше видиме значення `display`, задане на відкритому стані діалогу) протягом усієї тривалості переходу, забезпечуючи видимість інших переходів.
- Властивість [`overlay`](/uk/docs/Web/CSS/overlay)
  - : Включіть до списку переходу `overlay`, щоб забезпечити відкладання вилучення `<dialog>` з вищого шару до завершення переходу, що, знову таки, забезпечує видимість переходу.
- Властивість {{cssxref("transition-behavior")}}
  - : Задайте на переходах `display` та `overlay` `transition-behavior: allow-discrete` (або на скороченні {{cssxref("transition")}}), щоб увімкнути дискретні переходи на цих двох властивостях, які усталено не піддаються анімуванню.

Нижче – стислий приклад того, який вигляд це може мати.

##### HTML

HTML вміщає елемент `<dialog>`, плюс кнопку для показу діалогу. Крім того, елемент `<dialog>` містить іншу кнопку для закриття себе.

```html
<dialog id="dialog">
  Тут вміст
  <button class="close">Закрити</button>
</dialog>

<button class="show">Показати модально</button>
```

##### CSS

У CSS додано блок `@starting-style`, який визначає стартові стилі переходу для властивостей `opacity` і `transform`, кінцеві стилі переходу на стані `dialog[open]` і усталені стилі на усталеному стані `dialog`, до яких повертається перехід, як тільки `<dialog>` з'являється. Зверніть увагу на те, що список `transition` `<dialog>` вміщає не тільки ці властивості, а й `display` та `overlay`, кожна з яких має `allow-discrete`.

Також задано стартове значення стилю для властивості {{cssxref("background-color")}} на [`::backdrop`](/uk/docs/Web/CSS/::backdrop), який з'являється під `<dialog>`, коли той відкривається, щоб забезпечити гарну анімацію затемнення. Селектор `dialog[open]::backdrop` вибирає лише задники елементів `<dialog>`, коли діалог відкритий.

```css
/*   Відкритий стан діалогу  */
dialog[open] {
  opacity: 1;
  transform: scaleY(1);
}

/*   Закритий стан діалогу   */
dialog {
  opacity: 0;
  transform: scaleY(0);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out,
    overlay 0.7s ease-out allow-discrete,
    display 0.7s ease-out allow-discrete;
  /* Рівносильно щодо
  transition: all 0.7s allow-discrete; */
}

/*   Стан перед відкриттям  */
/* Цей блок повинен стояти після правила dialog[open], щоб подіяти,
    оскільки специфічність однакова */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* Перехід для :backdrop, коли діалогове модальне віконце виноситься на вищий шар */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Рівносильно щодо
  transition: all 0.7s allow-discrete; */
}

dialog[open]::backdrop {
  background-color: rgb(0 0 0 / 0.25);
}

/* Це правило starting-style не може бути вкладено в селектор вище,
тому що вкладені селектори не можуть представляти псевдоелементи. */

@starting-style {
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0);
  }
}
```

##### JavaScript

JavaScript додає до кнопок показу та закриття слухачі подій, змушуючи їх показувати та закривати `<dialog>`, коли по них клацають:

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### Результат

Цей код візуалізується так:

{{EmbedLiveSample("perekhody-elementiv-dialohu", "100%", "200")}}

> **Примітка:** Оскільки елементи `<dialog>` змінюють `display: none` на `display: block` щоразу, коли показуються, то `<dialog>` переходять від їхніх стилів `@starting-style` до їхніх стилів `dialog[open]` щоразу, коли відбувається перехід появи. Коли `<dialog>` закривається, він переходить від свого стану `dialog[open]` до усталеного стану `dialog`.
>
> У таких випадках переходи стилю при появі та зникненні можуть бути різними. Дивіться доказ цього в нашому прикладі [Демонстрації того, коли вживаються стартові стилі](/uk/docs/Web/CSS/@starting-style#demonstratsiia-toho-koly-vzhyvaiutsia-startovi-styli).

#### Анімування діалогів за допомогою ключових кадрів

Коли `<dialog>` анімується за допомогою ключових кадрів, є деякі відмінності від переходів, які слід зауважити:

- Не задається `@starting-style`.
- Значення `display` задається для ключового кадру; це буде значення `display` для всієї анімації, або поки не зустрінеться інше значення display, відмінне від `none`.
- Немає потреби явно вмикати дискретні анімації; в ключових кадрах немає еквівалента `allow-discrete`.
- Немає потреби задавати всередині ключових кадрів `overlay`; анімація `display` обробляє анімування `<dialog>` від показу до прихованості.

Погляньмо на приклад, щоб побачити, як це виглядає.

##### HTML

По-перше, HTML містить елемент `<dialog>`, плюс кнопку для показу діалогу. Крім того, елемент `<dialog>` містить іншу кнопку для закриття себе.

```html
<dialog id="dialog">
  Вміст тут
  <button class="close">закрити</button>
</dialog>

<button class="show">Показати модально</button>
```

##### CSS

CSS Визначає ключові кадри для анімації між закритим і показаним станами `<dialog>`, плюс анімацію появи для задника елемента `<dialog>`. Анімації `<dialog>` включають анімування `display`, щоб забезпечити видимість ефектів анімації протягом усієї її тривалості. Зверніть увагу, що не було можливості анімувати зникнення задника: задник негайно вилучається з DOM, коли `<dialog>` закритий, тому немає нічого, що можна було б анімувати.

```css
dialog {
  animation: fade-out 0.7s ease-out;
}

dialog[open] {
  animation: fade-in 0.7s ease-out;
}

dialog[open]::backdrop {
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* Ключові кадри анімації */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: rgb(0 0 0 / 0);
  }

  100% {
    background-color: rgb(0 0 0 / 0.25);
  }
}

body,
button {
  font-family: system-ui;
}
```

##### JavaScript

Врешті-решт, JavaScript додає до кнопок слухачі подій, щоб мати змогу показувати та закривати `<dialog>`:

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### Результат

Цей код візуалізується так:

{{EmbedLiveSample("animuvannia-dialohiv-za-dopomohoiu-kluchovykh-kadriv", "100%", "200")}}

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
        <a href="/uk/docs/Web/HTML/Element/Heading_Elements#rozdilovi-koreni"
          >розділовий корінь</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >Потоковий вміст</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Всі елементи, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/dialog_role"
          >dialog</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## Міркування щодо доступності

При реалізації діалогу важливо поміркувати про найкраще місце для перенесення фокуса користувача. Коли для відкриття `<dialog>` використовується {{domxref("HTMLDialogElement.showModal()")}}, то фокус передається до першого вкладеного елемента, що приймає фокус. Явне задання розміщення початкового фокуса за допомогою атрибута [`autofocus`](/uk/docs/Web/HTML/Global_attributes/autofocus) допомагає забезпечити те, що початковий фокус передається до елемента, що вважається найкращим положенням початкового фокуса в кожному конкретному діалозі. Коли є сумніви, оскільки не завжди відомо, де в діалозі можна розмістити початковий фокус, особливо в тих випадках, коли вміст діалогу візуалізується динамічно при його заклику, елемент `<dialog>` сам може запропонувати найкраще положення початкового фокуса.

Слід забезпечити користувачів механізмом для закриття діалогу. Найнадійніший спосіб пересвідчитись, що всі користувачі можуть закрити діалог, – це додати явну кнопку для цього, наприклад, кнопку підтвердження, скасування чи закриття.

Усталено діалог, закликаний методом `showModal()`, може бути закритий шляхом натискання клавіші <kbd>Esc</kbd>. Немодальний діалог усталено не закривається клавішею <kbd>Esc</kbd>, і залежно від того, що він представляє, це може бути небажаним. Клавіатурні користувачі розраховують на те, що клавіша <kbd>Esc</kbd> закриває модальні діалоги; переконайтеся, що ця поведінка реалізована та підтримується. Якщо відкрито кілька модальних діалогів, то натискання клавіші <kbd>Esc</kbd> має закривати лише останній показаний діалог. Коли використовується `<dialog>`, ця логіка надається браузером.

Попри те, що діалоги можна створювати за допомогою інших елементів, нативний елемент `<dialog>` надає зручність і можливості доступності, які необхідно відтворювати, якщо для подібних потреб використовуються інші елементи. Якщо створюється власна реалізація діалогу, слід пересвідчитися, що всі очікувані усталені поведінки підтримуються, а також слід дотримуватися рекомендацій щодо правильних підписів.

Елемент `<dialog>` видається браузерами у спосіб, подібний до саморобних діалогів, що використовують атрибут ARIA [role="dialog"](/uk/docs/Web/Accessibility/ARIA/Roles/dialog_role). Елементи `<dialog>`, закликані методом `showModal()`, неявно мають [aria-modal="true"](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-modal), а елементи `<dialog>`, закликані методом `show()` або виведені за допомогою атрибута `open` або шляхом зміни усталеного `display` `<dialog>`, видається як `[aria-modal="false"]`. При реалізації модальних діалогів усе, крім `<dialog>` та його вмісту, повинно бути зроблено нерухомим за допомогою атрибута [`inert`](/uk/docs/Web/HTML/Global_attributes/inert). Коли використовується `<dialog>` разом із методом `HTMLDialogElement.showModal()`, ця поведінка надається браузером.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інтерфейс {{domxref("HTMLDialogElement")}} interface
- Подія {{domxref("HTMLDialogElement/close_event", "close")}}
- Подія {{domxref("HTMLElement/cancel_event", "cancel")}}
- Властивість {{domxref("HTMLDialogElement/open", "open")}} інтерфейсу `HTMLDialogElement`
- Глобальний атрибут елементів HTML [`inert`](/uk/docs/Web/HTML/Global_attributes/inert)
- Псевдоелемент CSS {{CSSXref("::backdrop")}}
- [Вебформи](/uk/docs/Learn/Forms) в Області навчання
