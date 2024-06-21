---
title: <input type="file">
slug: Web/HTML/Element/input/file
page-type: html-element
browser-compat: html.elements.input.type_file
---

{{HTMLSidebar}}

Елементи {{HTMLElement("input")}} з атрибутом **`type="file"`** дають користувачеві змогу обрати один чи більше файлів з його пристрою. Бувши обраними, файли можуть бути завантажені на сервер за допомогою [подання форми](/uk/docs/Learn/Forms), або ж використані за допомогою коду на JavaScript та [файлового API](/uk/docs/Web/API/File_API/Using_files_from_web_applications).

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Значення

Атрибут файлового поля [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) містить рядок, що представляє шлях до обраного файлу (або файлів). Поки жоден файл не обраний, значенням є порожній рядок (`""`). Коли користувач обирає декілька файлів, то `value` представляє перший файл з обраних. Решта файлів можуть бути встановлені за допомогою [властивості поля `HTMLInputElement.files`](/uk/docs/Web/API/File_API/Using_files_from_web_applications#otrymannia-informatsii-pro-obrani-faily).

> **Примітка:** Значенням [завжди є ім'я файлу, перед котрим додано `C:\fakepath\` (англ.)](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), що не є справжнім шляхом до файлу. Так зроблено, щоб не дати зловмисним програмам дізнатися про файлову структуру пристрою користувача.

## Додаткові атрибути

На додачу до загальних атрибутів, що їх поділяють усі елементи {{HTMLElement("input")}}, поля типу `file` також підтримують наступні:

### accept

Значення атрибута [`accept`](/uk/docs/Web/HTML/Attributes/accept) – рядок, що визначає типи файлів, котрі повинно приймати файлове поле. Цей рядок – розділений комами список **[унікальних вказівок типу файлу](#unikalni-vkazivky-typu-failu)**. Оскільки певний тип файлу може бути ідентифікований більш ніж одним способом, слушно надавати повний набір вказівок типу, коли необхідні файли конкретного формату.

Наприклад, є низка способів ідентифікувати файли Microsoft Word, тому сайт, що приймає файли Word, може використовувати `<input>` такого виду:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Значення атрибута [`capture`](/uk/docs/Web/HTML/Attributes/capture) – рядок, що вказує яку камеру слід використовувати для захоплення фото чи відео, якщо атрибут [`accept`](/uk/docs/Web/HTML/Attributes/accept) вказує, що введені дані повинні бути фото чи відео. Значення `user` ("користувач") вказує, що повинні використовуватися фронтальні камера чи мікрофон. Значення `environment` ("середовище") вказує, що повинні використовуватися камера чи мікрофон, спрямовані назовні. Якщо такого атрибута немає, то {{Glossary("user agent", "користувацький агент")}} вільний сам вирішувати, що робити. Якщо вказаний фронтальний режим, але він недоступний, то користувацький агент може відступити до свого усталеного режиму.

> **Примітка:** `capture` раніше був булевим атрибутом, котрий призводив до запиту на використання захоплення медіа, камери чи мікрофона, а не введення файлу.

### multiple

Коли вказаний булів атрибут [`multiple`](/uk/docs/Web/HTML/Attributes/multiple), то файлове поле дозволяє користувачеві вибрати більш ніж один файл.

## Нестандартні атрибути

На додачу до вище перелічених атрибутів, у деяких браузерах доступні наступні нестандартні атрибути. Слід уникати їх використання, коли це можливо, адже воно обмежує змогу вашого коду діяти в браузерах, що не мають їх реалізації.

### `webkitdirectory`

Булів атрибут `webkitdirectory`, коли присутній, вказує, що для вибору користувачем в інтерфейсі вибору файлу повинні бути доступні лише директорії. Дивіться {{domxref("HTMLInputElement.webkitdirectory")}} для отримання подробиць та прикладів.

Бувши спершу реалізованим лише в браузерах на основі WebKit, `webkitdirectory` також працює в Microsoft Edge, а також Firefox 50 і новішим. Втім, навіть попри його відносно широку підтримку, він все ж є нестандартним і не повинен використовуватись, окрім випадків, коли немає інших варіантів.

## Унікальні вказівки типу файлу

**Унікальна вказівка типу** – рядок, що описує тип файлу, котрий може бути обраний користувачем в елементі {{HTMLElement("input")}} типу `file`. Кожна унікальна вказівка типу файлу може приймати одну з наступних форм:

- Дійсне байдуже до регістру розширення імені файлу, що починається з символу крапки ("."). Наприклад: `.jpg`, `.pdf`, `.doc`.
- Чинний рядок типу MIME, без розширень.
- Рядок `audio/*`, що означає "будь-який файл аудіо".
- Рядок `video/*`, що означає "будь-який файл відео".
- Рядок `image/*`, що означає "будь-який файл зображення".

Атрибут `accept` приймає за значення рядок, що містить одну чи більше таких унікальних вказівок типу файлу, розділених комами. Наприклад, вибір файлу, що потребує вмісту, котрий може бути представлений як зображення, включно зі стандартними форматами зображень і файлами PDF, може мати такий вигляд:

```html
<input type="file" accept="image/*,.pdf" />
```

## Використання файлових полів

### Найпростіший приклад

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Оберіть файл для завантаження</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Надіслати</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

This produces the following output:

{{EmbedLiveSample('naiprostishyi-pryklad', 650, 90)}}

> **Примітка:** Також цей приклад можна знайти на GitHub, дивіться [вихідний код](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), а також [погляньте на нього в дії](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Незалежно від пристрою чи операційної системи користувача, файлове поле надає кнопку, що відкриває діалог вибору файлу, котрий дає користувачеві змогу вибрати файл.

Включення атрибута [`multiple`](#multiple), як показано вище, вказує, що водночас можуть бути обрані декілька файлів. Користувач може обрати декілька файлів у будь-який спосіб, котрий пропонує його платформа (наприклад, утримуючи натисненою клавішу <kbd>Shift</kbd> або <kbd>Control</kbd>, а потім клацаючи). Якщо необхідно, щоб користувач міг обрати лише один файл в одному `<input>`, слід упустити атрибут `multiple`.

### Отримання інформації про вибрані файли

Вибрані файли повертає властивість елемента `HTMLInputElement.files`, причому повертає у вигляді об'єкта {{domxref("FileList")}}, що зберігає список об'єктів {{domxref("File")}} objects. `FileList` поводиться подібно до масиву, тож для отримання числа вибраних файлів можна перевірити властивість `length`.

Кожний об'єкт `File` містить наступну інформацію:

- `name` (ім'я)
  - : Ім'я файлу.
- `lastModified` (востаннє змінений)
  - : Число, що вказує дату й час, коли файл востаннє був змінений, у вигляді мілісекунд, що минули від початку епохи UNIX (опівночі 1 січня 1970 року).
- `lastModifiedDate` (дата останніх змін) {{deprecated_inline}}
  - : Об'єкт {{jsxref("Date")}}, що представляє дату й час, коли файл востаннє був змінений. _Ця властивість є нерекомендованою. Замість неї слід використовувати `lastModified`._
- `size` (розмір)
  - : Розмір файлу в байтах.
- `type` (тип)
  - : [MIME-тип](/uk/docs/Web/HTTP/Basics_of_HTTP/MIME_types) файлу.
- `webkitRelativePath` (відносний шлях WebKit) {{non-standard_inline}}
  - : Рядок, що представляє шлях до файлу відносно базової директорії, обраної при виборі директорії (тобто в інтерфейсі вибору `file`, що має атрибут [`webkitdirectory`](#webkitdirectory). _Ця властивість є нестандартною, її слід використовувати з обережністю._

> **Примітка:** У всіх сучасних браузерах значення `HTMLInputElement.files` можна як отримати, так і встановити; останнім з браузерів цю функціональність додав Firefox у версії 57 (дивіться [ваду Firefox 1384030](https://bugzil.la/1384030)).

### Обмеження прийнятних типів файлу

Часто не хочеться давати користувачеві змогу обрати файл будь-якого довільного типу; натомість часто хочеться дозволити йому обирати файли певного типу чи типів. Наприклад, якщо файлове поле дає користувачам змогу завантажити зображення профілю, то, ймовірно, ви хочете дозволити вибрати сумісні з вебом формами зображень, наприклад, {{Glossary("JPEG")}} чи {{Glossary("PNG")}}.

Прийнятні типи файлу можна задати за допомогою атрибута [`accept`](#accept), котрий приймає список дозволених розширень файлу чи MIME-типів, розділених комами. Трохи прикладів:

- `accept="image/png"` чи `accept=".png"` — приймає файли PNG.
- `accept="image/png, image/jpeg"` чи `accept=".png, .jpg, .jpeg"` — Приймає файли PNG чи JPEG.
- `accept="image/*"` — Приймає будь-який файл з MIME-типом `image/*`. (Чимало мобільних пристроїв також дозволять користувачеві зробити фото за допомогою камери, коли таке застосовується.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — приймає що завгодно, від чого віє документом MS Word.

Погляньмо на повніший приклад:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Оберіть файл для завантаження</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>Надіслати</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Це породжує вивід, подібний до того, що був у попередньому прикладі:

{{EmbedLiveSample('obmezhennia-pryiniatnykh-typiv-failu', 650, 90)}}

> **Примітка:** Цей приклад також можна знайти на GitHub, – дивіться [вихідний код](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html), а також [той самий приклад у дії](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Це може здаватися схожим, але якщо спробувати вибрати файл із таким полем, то стане помітно, що інтерфейс вибору файлу дозволяє вибрати файли лише тих типів, що вказані у значенні `accept` (конкретний інтерфейс відрізняється в різних браузерах та операційних системах).

Атрибут `accept` не перевіряє типи вибраних файлів; цей атрибут підказує браузерам, як підвести користувачів до вибору відповідних типів файлів. Усе ж можливо (в більшості випадків) вимкнути при виборі файлу це обмеження і вибрати будь-який бажаний файл, із некоректним типом.

У зв'язку з цим слід пересвідчитися, що атрибут `accept` доповнений відповідною валідацією на боці сервера.

### Відстеження скасувань

Подія `cancel` спрацьовує тоді, коли користувач не змінює свого вибору, повторно вибираючи раніше вибрані файли. Також вона спрацьовує, коли діалог вибору файлу закривається чи скасовується за допомогою кнопки "скасувати" або клавіші <kbd>escape</kbd>.

Наприклад, наступний код виведе повідомлення в консоль, якщо користувач закриє спливне вікно, не вибравши файл:

```js
const elem = document.createElement("input");
elem.type = "file";
elem.addEventListener("cancel", () => {
  console.log("Скасовано.");
});
elem.addEventListener("change", () => {
  if (elem.files.length == 1) {
    console.log("Вибрано файл: ", elem.files[0]);
  }
});
elem.click();
```

### Примітки

1. Не можна встановити значення файлового поля зі сценарію, – код типу того, що нижче, не подіє:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Коли за допомогою `<input type="file">` обирається файл, реальний шлях до такого файлу з очевидних міркувань безпеки не показується в атрибуті `value`. Натомість його ім'я показується із `C:\fakepath\` на початку. Цей виверт має певні історичні підстави, але він підтримується у всіх сучасних браузерах і фактично є [визначеним специфікацією (англ.)](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Приклади

У цьому прикладі представлений дещо ускладнений вибір файлу, що користується інформацією про файл, доступною у властивості `HTMLInputElement.files`, а також демонструє кілька кмітливих фокусів.

> **Примітка:** Повний вихідний код цього прикладу доступний на GitHub: [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([дивіться також у дії](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Пояснювати CSS не будемо, JavaScript є головною темою.

Перш за все, погляньмо на HTML:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads"
      >Оберіть зображення для завантаження (PNG, JPG)</label
    >
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept=".jpg, .jpeg, .png"
      multiple />
  </div>
  <div class="preview">
    <p>Наразі жодні файли не вибрані для завантаження</p>
  </div>
  <div>
    <button>Надіслати</button>
  </div>
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  background: #ccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

form img {
  height: 64px;
  order: 1;
}

form p {
  line-height: 32px;
  padding-left: 10px;
}

form label,
form button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover,
form button:hover {
  background-color: #2d5ba3;
  color: white;
}

form label:active,
form button:active {
  background-color: #0d3f8f;
  color: white;
}
```

Це подібно до того, що ми вже бачили вище, – нічого додати.

Далі перегляньмо JavaScript.

У перших рядках сценарію отримуються посилання на саме поле форми, а також елемент {{htmlelement("div")}} із класом `.preview`. Далі – приховується елемент {{htmlelement("input")}}: це необхідно, тому що файлові поля мають тенденцію до потворності, складності в оформленні та неодноманітності в дизайні між різними браузерами. Елемент `input` можна активувати, клацнувши його {{htmlelement("label")}}, тож краще візуально приховати `input` і оформити `label` як кнопку, щоб користувач знав, що для завантаження файлів взаємодіяти треба із `label`.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Примітка:** Для приховування файлового поля використовується {{cssxref("opacity")}}, а не {{cssxref("visibility", "visibility: hidden")}} чи {{cssxref("display", "display: none")}}, тому що допоміжні технології інтерпретують два останні стилі так, ніби файлове поле не є інтерактивним.

Далі – до поля додається [слухач подій](/uk/docs/Web/API/EventTarget/addEventListener), щоб відстежувати зміни його значення (у цьому випадку це відповідає вибору файлів). Слухач подій викликає самописну функцію `updateImageDisplay()`.

```js
input.addEventListener("change", updateImageDisplay);
```

Кожного виклику функції `updateImageDisplay()`:

- Для очищення попереднього вмісту `<div>` із попереднім виглядом використовується цикл {{jsxref("Statements/while", "while")}}.
- Витягується об'єкт {{domxref("FileList")}}, що містить інформацію про всі вибрані файли, та зберігається у змінній, названій `curFiles`.
- За допомогою порівняння `curFiles.length` із 0 виконується перевірка, чи не було вибрано 0 (нуль) файлів. Якщо є рівність, то в `<div>` попереднього вигляду виводиться повідомлення про те, що жодні файли не були вибрані.
- Якщо файли _були_ вибрані, то відбувається обхід кожного з них, – із виводом інформації про них у `<div>` попереднього вигляду. Слід зауважити, що:
- Для перевірки, чи належить файл до коректного типу (наприклад, типів зображень, зазначених в атрибуті `accept`), використовується самописна функція `validFileType()`.
- Якщо він справді належить до коректного типу, то:

  - Його ім'я та розмір (отримані з `file.name` і `file.size`) виводяться в елемент списку всередині попереднього `<div>`. Самописна функція `returnFileSize()` повертає приємно відформатовану версію розміру, в байтах, кілобайтах, мегабайтах (усталено браузер звітує про розмір в абсолютних байтах).
  - Шляхом виклику {{domxref("URL/createObjectURL_static", "URL.createObjectURL(file)")}} генерується ескіз зображення. Потім – за допомогою створення нового {{htmlelement("img")}} і присвоєння його атрибутові [`src`](/uk/docs/Web/HTML/Element/img#src) ескізу – зображення вставляється в елемент списку.

- Якщо тип файлу є недійсним, то всередині елемента списку виводиться повідомлення, що сповіщає користувача про необхідність вибрати файл іншого типу.

```js
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "Наразі жодні файли не вибрані для завантаження";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `Ім'я файлу – ${
          file.name
        }, розмір файлу – ${returnFileSize(file.size)}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.alt = image.title = file.name;

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `Ім'я файлу – ${file.name}: недійсний тип файлу. Оновіть свій вибір.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

Самописна функція `validFileType()` приймає як параметр об'єкт {{domxref("File")}}, а потім використовує {{jsxref("Array.prototype.includes()")}}, щоб перевірити, чи відповідає будь-яке з `fileTypes` значення властивості файлу `type`. Якщо відповідність знайдена, то функція повертає `true`. Якщо не знайдена – `false`.

```js
// https://webdoky.org/uk/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
```

Функція `returnFileSize()` приймає число (байтів, отримане з властивості `size` відповідного файлу) і перетворює його на приємно відформатований розмір у байтах, кілобайтах, мегабайтах.

```js
function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} кБ`;
  } else {
    return `${(number / 1e6).toFixed(1)} МБ`;
  }
}
```

> **Примітка:** Одиниці вимірювання "кБ" і "МБ" тут використовують прийняті [префікси міжнародної системи числення (SI)](https://uk.wikipedia.org/wiki/%D0%94%D0%B2%D1%96%D0%B9%D0%BA%D0%BE%D0%B2%D1%96_%D0%BF%D1%80%D0%B5%D1%84%D1%96%D0%BA%D1%81%D0%B8): 1 кБ = 1000 Б, подібно до того, як це працює в macOS. Інші системи представляють розміри файлів інакше – наприклад, Ubuntu користується префіксами Міжнародної електричної комісії (IEC), в яких 1 КіБ = 1024 Б, а специфікації RAM нерідко використовують префікси SI для представлення степенів двійки (1 кБ = 1024 Б). У зв'язку з цим тут використовуються `1e3` (`1000`) і `ie6` (`100000`), а не `1024` і `1048576`. У власному застосунку вам слід ясно подати систему одиниць вимірювання користувачам, якщо важливий точний розмір.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Зображення завантажене!");
  preview.replaceChildren(para);
});
```

Приклад має наступний вигляд; пограйтеся:

{{EmbedLiveSample('pryklady', '100%', 200)}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#znachennia">Значення</a></strong></td>
      <td>
        Рядок, що представляє шлях до вибраного файлу.
      </td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}}, {{domxref("Element/input_event", "input")}} і {{domxref("HTMLElement/cancel_event", "cancel")}}
      </td>
    </tr>
    <tr>
      <td><strong>Підтримувані загальні атрибути</strong></td>
      <td><a href="/uk/docs/Web/HTML/Element/input#required-oboviazkovyi"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>Додаткові атрибути</strong></td>
      <td>
        <a href="#accept" aria-current="page"><code>accept</code></a>,
        <a href="#capture" aria-current="page"><code>capture</code></a>,
        <a href="#multiple" aria-current="page"><code>multiple</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td><code>files</code> і <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Інтерфейс DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Методи</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
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

- [Використання файлів у вебзастосунках](/uk/docs/Web/API/File_API/Using_files_from_web_applications) — містить низку інших корисних прикладів, що стосуються `<input type="file">` і [File API](/uk/docs/Web/API/File).
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
