---
title: "<a>: Якірний елемент"
slug: Web/HTML/Element/a
page-type: html-element
browser-compat: html.elements.a
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<a>`** (він же _якірний_ елемент) з [атрибутом `href`](#href) створює гіперпосилання до вебсторінок, файлів, адрес електронної пошти, місць на тій самій сторінці чи будь-чого іще, на що може посилатися URL.

Вміст всередині кожного `<a>` _повинен_ відображати спрямування посилання. Якщо присутній атрибут `href`, то натискання клавіші `Enter`, коли фокус знаходиться на елементі `<a>`, активує перехід.

{{EmbedInteractiveExample("pages/tabbed/a.html", "tabbed-shorter")}}

## Атрибути

Атрибути цього елемента включають [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `download`

  - : Змушує браузер обробляти заданий URL як завантаження. Може використовуватись як без, так і зі значенням `filename`:

    - Якщо значення немає, то браузер запропонує ім'я файлу та розширення, згенеровані з різних джерел:

      - Заголовка HTTP {{HTTPHeader("Content-Disposition")}}
      - Останнього сегмента [шляху](/uk/docs/Web/API/URL/pathname) URL
      - {{Glossary("MIME_type", "Типу медіаданих")}} (із заголовка {{HTTPHeader("Content-Type")}}, початку [URL `data:`](/uk/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) чи {{domxref("Blob.type")}} в [URL `blob:`](/uk/docs/Web/API/URL/createObjectURL_static))

    - `filename`: якщо значення задане, то воно буде запропоновано як назва файлу. Символи `/` і `\` перетворюються на підкреслення (`_`). Файлові системи можуть забороняти інші символи в іменах файлів, тож браузери підлаштовуватимуть запропоноване ім'я, якщо це необхідно.

    > **Примітка:**
    >
    > - `download` працює лише для [URL того самого походження](/uk/docs/Web/Security/Same-origin_policy), а також для схем `blob:` і `data:`.
    > - Те, як браузери обробляють завантаження, залежить від браузера, налаштувань користувача та інших чинників. Користувача можуть запитати підтвердження перед початком завантаження, або ж файл може бути збережений автоматично, або ж буде автоматично відкритий: у зовнішньому застосунку, або в самому браузері.
    > - Якщо заголовок `Content-Disposition` містить інформацію, що відрізняється від значення атрибута `download`, логіка може відрізнятися:
    >
    >   - Якщо заголовок задає `filename`, то таке ім'я файлу матиме пріоритет над заданим в атрибуті `download`.
    >   - Якщо заголовок задає природу ресурсу як `inline` (вбудовану), Chrome і Firefox віддадуть пріоритет атрибутові та оброблятимуть це як завантаження. Старі версії Firefox (до 82) віддавали пріоритет заголовкові та показували вміст як вбудований.

- `href`

  - : URL, на котрий вказує гіперпосилання. Посилання не обмежені HTTP URL: вони можуть використовувати будь-яку схему URL, котру підтримують браузери:

    - Розділи сторінки – за допомогою фрагментів документів
    - Конкретні частини тексту - за допомогою [текстових фрагментів](/uk/docs/Web/Text_fragments)
    - Шматочки медіафайлів – за допомогою фрагментів медіа
    - Номери телефонів – за допомогою URL `tel:`
    - Адреси електронної пошти – за допомогою URL `mailto:`
    - Текстові повідомлення SMS – за допомогою URL `sms:`
    - Хоч веббраузери можуть не підтримувати інші схеми URL, вебсайти можуть їх підтримувати за допомогою [`registerProtocolHandler()`](/uk/docs/Web/API/Navigator/registerProtocolHandler)

- `hreflang`
  - : Рекомендації щодо мови тексту в ресурсі за посиланням. Вбудованої логіки немає. Дозволені значення – такі самі, як в [глобального атрибута `lang`](/uk/docs/Web/HTML/Global_attributes/lang).
- `ping`
  - : Розділений пробілами список URL. Коли відбувається перехід за посиланням, браузер пошле на ці URL запити {{HTTPMethod("POST")}} із тілом `PING`. Зазвичай цей атрибут використовується для відстеження.
- `referrerpolicy`

  - : Яка інформація про [посилача](/uk/docs/Web/HTTP/Headers/Referer) буде надіслана при переході за посиланням.

    - `no-referrer`: Заголовок {{HTTPHeader("Referer")}} не буде надісланий.
    - `no-referrer-when-downgrade`: Заголовок {{HTTPHeader("Referer")}} не буде надісланий на ті {{Glossary("origin", "походження")}}, що не мають {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: Надісланий посилач буде обмежений походженням сторінки, що містить посилання: її [схемою](/uk/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "хостом")}} та {{Glossary("port", "портом")}}.
    - `origin-when-cross-origin`: Посилач, надісланий іншим походженням, буде обмежений схемою, хостом та портом. Переходи в межах того самого походження включатимуть увесь шлях.
    - `same-origin`: Посилач буде надісланий, якщо {{Glossary("Same-origin policy", "збігається походження")}}, натомість запити між різними походженнями не міститимуть інформації про посилача.
    - `strict-origin`: Надсилати як посилач походження документа, коли рівень протоколу захисту залишається сталим (HTTPS→HTTPS), але не надсилати його за менш захищеною адресою (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (усталене значення): Надсилати увесь URL при виконанні запиту за тим само походженням, надсилати лише походження, коли рівень протоколу захисту залишається сталим (HTTPS→HTTPS), і не надсилати заголовка за менш захищеною адресою (HTTPS→HTTP).
    - `unsafe-url`: Посилач включатиме походження _та_ шлях (але не [фрагмент](/uk/docs/Web/API/HTMLAnchorElement/hash), [пароль](/uk/docs/Web/API/HTMLAnchorElement/password) чи [ім'я користувача](/uk/docs/Web/API/HTMLAnchorElement/username)). **Це значення є небезпечним**, тому що воно пропускає походження та шляхи з захищених TLS ресурсів до незахищених походжень.

- `rel`
  - : Відношення вказаного URL як розділені пробілами типи посилань.
- `target`

  - : Де показувати вказаний URL; значенням є ім'я _контексту перегляду_ (вкладка, вікно чи {{HTMLElement("iframe")}}). Наступні ключові слова мають особливі значення щодо того, де завантажувати URL:

    - `_self`: поточний контекст перегляду. (Усталене значення)
    - `_blank`: зазвичай нова вкладка, але користувач може налаштувати свій браузер так, що він замість цього відкриватиме такі посилання у новому вікні.
    - `_parent`: контекст перегляду, що є батьківським відносно поточного. Якщо такого контексту немає, це значення поводиться як `_self`.
    - `_top`: найвищий контекст перегляду (серед тих, що є предками відносно поточного). Якщо предків немає, це значення поводиться як `_self`.

    > **Примітка:** `target="_blank"` на елементах `<a>` неявно встановлює таку саму поведінку `rel`, як встановлення [`rel="noopener"`](/uk/docs/Web/HTML/Attributes/rel/noopener), що не заповнює `window.opener`.

- `type`
  - : Дає підказку щодо формату ресурсу за URL у вигляді {{Glossary("MIME type", "типу MIME")}}. Вбудованої функціональності немає.

### Нерекомендовані атрибути

- `charset` {{Deprecated_Inline}}

  - : Підказка щодо {{Glossary("character encoding", "кодування символів")}} ресурсу за URL.

    > **Примітка:** Цей атрибут є нерекомендованим і **не повинен використовуватись авторами**. Використовуйте HTTP заголовок {{HTTPHeader("Content-Type")}} за вказаним URL.

- `coords` {{Deprecated_Inline}}
  - : Використовується разом з [атрибутом `shape`](#shape). Розділений комами список координат.
- `name` {{Deprecated_Inline}}

  - : Був необхідним для встановлення можливого цільового місця на сторінці. В HTML 4.01 і `id`, і `name` могли використовуватися на `<a>`, за умови що вони мали ідентичні значення.

    > **Примітка:** Використовуйте натомість глобальний атрибут [`id`](/uk/docs/Web/HTML/Global_attributes#id).

- `rev` {{Deprecated_Inline}}
  - : Вказував зворотне посилання; протилежність [атрибута `rel`](#rel). Став нерекомендованим через те, що збивав з пантелику.
- `shape` {{Deprecated_Inline}}

  - : Форма регіону гіперпосилання на бітовій карті.

    > **Примітка:** Використовуйте натомість для бітових карт елемент {{HTMLElement("area")}}.

## Приклади

### Посилання на абсолютний URL

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### Результат

{{EmbedLiveSample('posylannia-na-absoliutnyi-url')}}

### Посилання на відносні URL

#### HTML

```html
<a href="//example.com">Відносний щодо схеми URL</a>
<a href="/uk/docs/Web/HTML">Відносний щодо походження URL</a>
<a href="./p">Відносний щодо директорії URL</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### Результат

{{EmbedLiveSample('posylannia-na-vidnosni-url')}}

### Посилання на елемент в межах тієї самої сторінки

```html
<!-- <a> елемент посилається на секцію нижче -->
<p><a href="#rozdil-nyzhche">Перескочити до заголовка нижче</a></p>

<!-- Заголовок для посилання на нього -->
<h2 id="rozdil-nyzhche">Розділ нижче</h2>
```

#### Результат

{{EmbedLiveSample('posylannia-na-element-v-mezhakh-tiiei-samoi-storinky')}}

> **Примітка:** Для посилання на верх поточної сторінки можна використовувати `href="#top"` чи пустий фрагмент (`href="#"`), [це описано в специфікації HTML (англ.)](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Посилання на адресу електронної пошти

Щоб створити посилання, котрі відкривають програму електронної пошти користувача, щоб дати змогу надіслати нове повідомлення, слід використовувати схему `mailto:`:

```html
<a href="mailto:nowhere@mozilla.org">Послати в нікуди електронного листа</a>
```

#### Результат

{{EmbedLiveSample('posylannia-na-adresu-elektronnoi-poshty')}}

Для деталей щодо URL `mailto:`, наприклад, включення в них теми чи тіла листа, читайте [посилання електронної пошти](/uk/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#posylannia-elektronnoi-poshty) чи {{RFC(6068)}}.

### Посилання на номери телефонів

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Результат

{{EmbedLiveSample('posylannia-na-nomery-telefoniv')}}

Поведінка посилання `tel:` відрізняється залежно від можливостей пристрою:

- Стільникові пристрої автоматично починають дзвінок за номером.
- Більшість операційних систем мають програми, котрі можуть робити дзвінки, наприклад, Skype чи FaceTime.
- Вебсайти можуть робити телефонні дзвінки за допомогою {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}}, наприклад, через `web.skype.com`.
- Інша можлива поведінка – збереження номера до контактів, надсилання номера на інший пристрій тощо.

Дивіться {{RFC(3966)}} для синтаксису, додаткових можливостей та інших деталей щодо схеми URL `tel:`.

### Використання атрибута download для збереження \<canvas> як PNG зображення

Щоб зберегти вміст елемента {{HTMLElement("canvas")}} як зображення, треба створити посилання, в якого `href` буде даними полотна у вигляді URL `data:`, створеного за допомогою JavaScript, а атрибут `download` надаватиме ім'я файлу зображення PNG, що буде стягуватися:

#### Приклад застосунку для малювання з посиланням для збереження

##### HTML

```html
<p>
  Малюйте, затискаючи ліву кнопку миші та рухаючи.
  <a href="" download="my_painting.png">Стягнути мій малюнок</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}
```

##### JavaScript

```js
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.fillStyle = "hotpink";
let isDrawing;

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY),
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL()),
  );
```

##### Результат

{{EmbedLiveSample('pryklad-zastosunku-dlia-maliuvannia-z-posylanniam-dlia-zberezhennia', '100%', '400')}}

## Захищеність та приватність

Елементи `<a>` можуть мати наслідки для захищеності та приватності користувачів. Дивіться [Заголовок `Referer`: занепокоєння щодо приватності та захищеності](/uk/docs/Web/Security/Referer_header:_privacy_and_security_concerns) для отримання інформації на цю тему.

Використання `target="_blank"` без [`rel="noreferrer"`](/uk/docs/Web/HTML/Attributes/rel/noreferrer) і [`rel="noopener"`](/uk/docs/Web/HTML/Attributes/rel/noopener) робить вебсайт вразливим то атак експлуатації API {{domxref("window.opener")}}; втім, майте на увазі, що в новіших версіях браузерів встановлення `target="_blank"` неявно додає такий само захист, як встановлення `rel="noopener"`. Дивіться [сумісність із браузерами](#sumisnist-iz-brauzeramy) для отримання деталей.

## Занепокоєння щодо доступності

### Виразний текст посилання

**Вміст всередині посилання повинен вказувати, куди веде це посилання**, навіть при розгляді поза контекстом.

#### Невиразний текст посилання із проблемами доступності

Прикро поширена помилка – робити посилання зі словами "клацніть тут" або "тут".

```html example-bad
<p>Дізнайтеся більше про наші продукти <a href="/products">тут</a>.</p>
```

##### Результат

{{EmbedLiveSample('nevyraznyi-tekst-posylannia-iz-problemamy-dostupnosti')}}

#### Виразний текст посилання

На щастя, це легко виправити, і виходить насправді коротше за версію з проблемами доступності!

```html example-good
<p>Дізнайтеся більше <a href="/products">про наші продукти</a>.</p>
```

##### Результат

{{EmbedLiveSample('vyraznyi-tekst-posylannia-1')}}

Допоміжне програмне забезпечення має зручне скорочення для перелічення усіх посилань на сторінці. Втім, виразний текст посилань корисний для всіх користувачів: скорочення "перелічити всі посилання" імітує те, як зрячі користувачі хутко проглядають сторінки.

### Події onclick

Якірними елементами часто зловживають у вигляді підробних кнопок, задаючи їх значення `href` у `#` чи `javascript:void(0)`, щоб запобігти оновленню сторінки, а потім слухаючи їхні події `click`.

Ці неповноцінні значення `href` приводять до неочікуваної поведінки при копіюванні чи перетягуванні посилань, відкритті посилань у нових вкладках чи вікнах, доданні закладок, або ж коли JavaScript завантажується, дає збій чи вимкнений. Також вони надають допоміжним технологіям, як то читачам з екрана, некоректну семантику.

Натомість слід використовувати {{HTMLElement("button")}}. Як правило, **слід використовувати гіперпосилання лише для переходу за справжнім URL**.

### Зовнішні посилання та посилання на не-HTML ресурси

Посилання, що за допомогою `target="_blank"` відкриваються в новій вкладці чи новому вікні, а також посилання, що вказують на файл для завантаження, повинні показувати, що станеться, коли за посиланням відбудеться перехід.

Люди зі слабким зором, орієнтуючись з допомогою читачів з екрана, а також люди з когнітивними розладами можуть бути спантеличені, коли неочікувано відкриється нова вкладка, нове вікно чи новий застосунок. Старіші програми читання з екрана можуть навіть не оголошувати таку поведінку.

#### Посилання, що відкривається в новій вкладці чи новому вікні

```html
<a target="_blank" href="https://uk.wikipedia.org">
  Вікіпедія (відкривається у новій вкладці)
</a>
```

##### Результат

{{EmbedLiveSample('posylannia-shcho-vidkryvaietsia-v-novii-vkladtsi-chy-novomu-vikni')}}

#### Посилання на не-HTML ресурс

```html
<a href="2017-annual-report.ppt">2017 Річний звіт (PowerPoint)</a>
```

Якщо призначення посилання позначено іконкою, слід пересвідчитись, що ця іконка має [_текстову альтернативу_](/uk/docs/Web/HTML/Element/img#alt):

```html
<a target="_blank" href="https://uk.wikipedia.org">
  Вікіпедія
  <img alt="(відкривається в новій вкладці)" src="newtab.svg" />
</a>

<a href="2017-annual-report.ppt">
  2017 Річний звіт
  <img alt="(файл PowerPoint)" src="ppt-icon.svg" />
</a>
```

##### Результат

{{EmbedLiveSample('posylannia-na-ne-html-resurs')}}

- [WebAIM: Посилання та гіпертекст – гіпертекстові посилання (англ.)](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Розуміння WCAG, Настанови 3.2](/uk/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Відкривання посилань в нових вікнах та вкладках лише тоді, коли це необхідно (англ.)](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Покращене попередження користувачів про відкривання нового вікна (англ.)](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Стрибкові посилання

**Стрибкові посилання** – це посилання, що розміщене якомога вище у вмісті {{HTMLElement("body")}} і веде до початку головного вмісту сторінки. Зазвичай CSS приховує стрибкові посилання поза екраном, поки воно не отримує фокус.

```html
<body>
  <a href="#content" class="skip-link">Перескочити на головний вміст</a>

  <header>…</header>

  <!-- Стрибкове посилання приводить сюди -->
  <main id="content"></main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: #fff;
}
.skip-link:focus {
  top: 0;
}
```

#### Результат

{{EmbedLiveSample('strybkovi-posylannia')}}

Стрибкові посилання дають користувачам клавіатури змогу пропустити вміст, що повторюється на багатьох сторінках, наприклад, навігацію у верхньому колонтитулі.

Стрибкові посилання особливо корисні для тих, хто орієнтується за допомогою допоміжних технологій, як то управління за допомогою перемикачів, голосових команд чи ротових або наголовних паличок, коли проходження крізь повторювані посилання може бути працемістким.

- [WebAIM: посилання "стрибкового переходу" (англ.)](https://webaim.org/techniques/skipnav/)
- [Довідка: Використовуйте посилання стрибкового переходу (англ.)](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Розуміння WCAG, пояснення Настанов 2.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Розуміння критеріїв успіху 2.4.1 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Розмір та суміжність

#### Розмір

Інтерактивні елементи типу посилань повинні надавати достатньо велику зону, щоб їх легко було активувати. Це корисно для різних людей, включно з тими, хто має розлади контролю рухів та тих, хто має малоточні засоби введення, наприклад, сенсорний екран. Рекомендований мінімальний розмір – 44×44 [пікселів CSS (англ.)](https://www.w3.org/TR/WCAG21/#dfn-css-pixels).

Суто текстові посилання всередині оповідального вмісту звільняються від цієї вимоги, але все ж є доброю думкою пересвідчитись, що тексту всередині посилання достатньо, щоб посилання легко було активувати.

- [Розуміння критеріїв успіху 2.5.5: Розмір мішені (англ.)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Розмір мішені та 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Хуткий тест: Великі мішені для дотику (англ.)](https://www.a11yproject.com/posts/large-touch-targets/)

#### Суміжність

Інтерактивні елементи типу посилань, бувши розміщеними з видимою суміжністю, повинні мати між собою простір. Відступ допоможе людям з розладами контролю рухів, котрі інакше можуть випадково активувати не той інтерактивний вміст.

Відступи можна утворити за допомогою властивостей CSS типу {{CSSxRef("margin")}}.

- [Тремтіння рук та проблема велетенської кнопки (англ.)](https://axesslab.com/hand-tremors/)

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
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        >,
        <a
          href="/uk/docs/Web/HTML/Content_categories#interaktyvnyi-vmist"
          >інтерактивний вміст</a
        >, відчутний вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a
          href="/uk/docs/Web/HTML/Content_categories#model-prozoroho-vmistu"
          >Прозорий</a
        >, але жодний нащадок не може бути
        <a
          href="/uk/docs/Web/HTML/Content_categories#interaktyvnyi-vmist"
          >інтерактивним вмістом</a
        > чи елементом
        <a href="/uk/docs/Web/HTML/Element/a"
          >a</a
        >; крім того, жодний нащадок не може мати атрибута
        <a
          href="/uk/docs/Web/HTML/Global_attributes/tabindex"
          >tabindex</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Упущення тегів</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Будь-який елемент, що приймає
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >, але не інший елемент <code>&#x3C;a></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>, коли присутній атрибут <code>href</code>, інакше –
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <p>Коли присутній атрибут <code>href</code>:</p>
        <ul>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></li>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></li>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a></li>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a></li>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a></li>
          <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
        </ul>
        <p>Коли атрибута <code>href</code> немає:</p>
        <ul>
          <li>будь-яка роль</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{DOMxRef("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

### Результат

{{EmbedLiveSample('pryklady')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement("link")}} подібний до `<a>`, але призначений для гіперпосилань метаданих, невидимих для користувачів.
- {{CSSxRef(":link")}} – це псевдоклас CSS, що дає збіг з елементами `<a>`, в атрибуті `href` яких задані URL, котрі користувач поки не відвідував.
- {{CSSxRef(":visited")}} – це псевдоклас CSS, що дає збіг з елементами `<a>`, в атрибуті `href` яких задані URL, котрі користувач уже відвідував у минулому.
- {{CSSxRef(":any-link")}} – це псевдоклас CSS, що дає збіг з елементами `<a>`, котрі мають атрибут `href`.
- [Текстові фрагменти](/uk/docs/Web/Text_fragments) – це інструкції користувацькому агентові, додані до URL, що дають змогу авторам вмісту посилатися на конкретний текст на сторінці, не вимагаючи від елементів мати ID.
