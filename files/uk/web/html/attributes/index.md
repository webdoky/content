---
title: Довідка атрибутів HTML
short-title: Атрибути
slug: Web/HTML/Attributes
page-type: landing-page
---

{{HTMLSidebar("Attributes")}}

Елементи в HTML мають **атрибути**; це додаткові значення, що налаштовують ці елементи або підлаштовують їх поведінку в різний спосіб, щоб відповідати бажаним критеріям.

## Список атрибутів

<table class="standard-table">
  <thead>
    <tr>
      <th>Назва атрибута</th>
      <th>Елементи</th>
      <th>Опис</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/accept">accept</a></code>
      </td>
      <td>
        {{HTMLElement("form")}}, {{HTMLElement("input")}}
      </td>
      <td>Список типів, які приймає сервер, зазвичай – типів файлів.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/form#accept-charset">accept-charset</a></code>
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>
      Список кодувань, що підтримуються.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/accesskey">accesskey</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
      Клавіатурна комбінація для активування чи додання фокуса до елемента.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/form#action">action</a></code>
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>
        URI програми, що обробляє інформацію, подану через форму.
      </td>
    </tr>
    <tr>
      <td>
        <code>align</code> {{deprecated_inline}}
      </td>
      <td>
        {{HTMLElement("caption")}}, {{HTMLElement("col")}},
        {{HTMLElement("colgroup")}},
        {{HTMLElement("hr")}}, {{HTMLElement("iframe")}},
        {{HTMLElement("img")}}, {{HTMLElement("table")}},
        {{HTMLElement("tbody")}}, {{HTMLElement("td")}},
        {{HTMLElement("tfoot")}}, {{HTMLElement("th")}},
        {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
      </td>
      <td>
      Задає горизонтальне шикування елемента.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/iframe#allow">allow</a></code>
      </td>
      <td>{{HTMLElement("iframe")}}</td>
      <td>
      Задає feature-policy для вбудованого фрейму.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/alt">alt</a></code>
      </td>
      <td>
        {{HTMLElement("area")}},
        {{HTMLElement("img")}}, {{HTMLElement("input")}}
      </td>
      <td>
      Альтернативний текст на випадок того, що зображення не може бути показане.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/link#as">as</a></code>
      </td>
      <td>
        {{HTMLElement("link")}}
      </td>
      <td>Задає тип вмісту, який завантажується зв'язком.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/script#async">async</a></code>
      </td>
      <td>{{HTMLElement("script")}}</td>
      <td>
      Виконує сценарій асинхронно.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/autocapitalize">autocapitalize</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Задає те, чи додаються автоматично великі літери до введення користувача
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/autocomplete">autocomplete</a></code>
      </td>
      <td>
        {{HTMLElement("form")}}, {{HTMLElement("input")}},
        {{HTMLElement("select")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Позначає те, чи контрольні елементи в формі повинні усталено автоматично доповнюватися браузером.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/autoplay">autoplay</a></code>
      </td>
      <td>
        {{HTMLElement("audio")}},
        {{HTMLElement("video")}}
      </td>
      <td>
      Аудіо чи відео повинно відтворюватися якомога скоріше.
      </td>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>
        {{HTMLElement("body")}}, {{HTMLElement("table")}},
        {{HTMLElement("td")}}, {{HTMLElement("th")}}
      </td>
      <td>
        Задає URL файлу зображення.
        <div class="note">
          <p>
            <strong>Примітка:</strong> Попри те, що браузери та клієнти електронної пошти досі можуть підтримувати цей атрибут, він є застарілим. Замість нього слід використовувати CSS {{Cssxref("background-image")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>bgcolor</code></td>
      <td>
        {{HTMLElement("body")}}, {{HTMLElement("col")}},
        {{HTMLElement("colgroup")}},
        {{HTMLElement("marquee")}},
        {{HTMLElement("table")}},
        {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}}, {{HTMLElement("td")}},
        {{HTMLElement("th")}}, {{HTMLElement("tr")}}
      </td>
      <td>
        <p>Колір фону елемента.</p>
        <div class="note">
          <p>
            <strong>Примітка:</strong> Це історичний атрибут. Замість нього слід використовувати властивість CSS {{Cssxref("background-color")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>border</code></td>
      <td>
        {{HTMLElement("img")}}, {{HTMLElement("object")}},
        {{HTMLElement("table")}}
      </td>
      <td>
        <p>Ширина межі.</p>
        <div class="note">
          <p>
            <strong>Примітка:</strong> Це історичний атрибут. Будь ласка, використовуйте замість нього властивість CSS {{Cssxref("border")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/capture">capture</a></code>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td>
        Атрибут зі <a href="https://w3c.github.io/html-media-capture/#the-capture-attribute">специфікації Медіазахоплення</a>, що задає, що можна захопити новий файл.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/meta#charset">charset</a></code>
      </td>
      <td>
        {{HTMLElement("meta")}}
      </td>
      <td>
        Оголошує кодування символів сторінки або сценарію.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/input#checked">checked</a></code>
      </td>
      <td>
        {{HTMLElement("input")}}
      </td>
      <td>
        Позначає, чи повинен елемент мати позначку при завантаженні сторінки.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/cite">cite</a></code>
      </td>
      <td>
        {{HTMLElement("blockquote")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}},
        {{HTMLElement("q")}}
      </td>
      <td>
        Містить URI, який вказує на джерело цитати чи зміни.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/class">class</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Нерідко застосовується вкупі з CSS для оформлення елементів загальними властивостями.
      </td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>
        {{HTMLElement("font")}}, {{HTMLElement("hr")}}
      </td>
      <td>
        <p>
          Цей атрибут задає колір тексту за допомогою або назви кольору, або кольору, заданого в шістнадцятковому форматі #RRGGBB.
        </p>
        <div class="note">
          <p>
            <strong>Примітка:</strong> Це історичний атрибут. Будь ласка, використовуйте замість нього властивість CSS {{Cssxref("color")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/textarea#cols">cols</a></code>
      </td>
      <td>{{HTMLElement("textarea")}}</td>
      <td>
        Визначає число колонок у текстовій області.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/colspan">colspan</a></code>
      </td>
      <td>
        {{HTMLElement("td")}}, {{HTMLElement("th")}}
      </td>
      <td>
        Атрибут колонкової протяжності визначає число колонок, які повинна охоплювати комірка.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/meta#content">content</a></code>
      </td>
      <td>{{HTMLElement("meta")}}</td>
      <td>
        Значення, пов'язане з <code>http-equiv</code> або <code>name</code>, в залежності від контексту.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/contenteditable">contenteditable</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Позначає те, чи доступний вміст елемента для редагування.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/controls">controls</a></code>
      </td>
      <td>
        {{HTMLElement("audio")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        Позначає те, чи повинен браузер показувати користувачам елементи керування відтворенням.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/area#coords">coords</a></code>
      </td>
      <td>{{HTMLElement("area")}}</td>
      <td>
        Набір значень, що визначають координати активної ділянки.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/crossorigin">crossorigin</a></code>
      </td>
      <td>
        {{HTMLElement("audio")}}, {{HTMLElement("img")}},
        {{HTMLElement("link")}}, {{HTMLElement("script")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        Як елемент обробляє запити до інших походжень
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/API/HTMLIFrameElement/csp">csp</a></code>
        {{experimental_inline}}
      </td>
      <td>{{HTMLElement("iframe")}}</td>
      <td>
        Задає Політику безпеки вмісту, яку повинен накласти на себе вбудований документ.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/object#data">data</a></code>
      </td>
      <td>{{HTMLElement("object")}}</td>
      <td>
        Задає URL ресурсу.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/data-*">data-*</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Дає змогу приєднувати до елементів HTML власні атрибути.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/datetime">datetime</a></code>
      </td>
      <td>
        {{HTMLElement("del")}}, {{HTMLElement("ins")}},
        {{HTMLElement("time")}}
      </td>
      <td>
        Позначає дату та час, пов'язані з елементом.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/img#decoding">decoding</a></code>
      </td>
      <td>{{HTMLElement("img")}}</td>
      <td>
        Позначає бажаний метод декодування зображення.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/track#default">default</a></code>
      </td>
      <td>{{HTMLElement("track")}}</td>
      <td>
        Позначає те, що доріжка повинна бути ввімкнена, якщо налаштування користувача не задають щось інше.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/script#defer">defer</a></code>
      </td>
      <td>{{HTMLElement("script")}}</td>
      <td>
        Позначає те, що сценарій повинен бути виконаний після того, як сторінка буде розібрана.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/dir">dir</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Визначає напрям тексту. Дозволені значення: ltr (зліва направо) й rtl (справа наліво).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/dirname">dirname</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("textarea")}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/disabled">disabled</a></code>
      </td>
      <td>
        {{HTMLElement("button")}},
        {{HTMLElement("fieldset")}},
        {{HTMLElement("input")}},
        {{HTMLElement("optgroup")}},
        {{HTMLElement("option")}},
        {{HTMLElement("select")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Позначає те, чи може користувач взаємодіяти з елементом.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/download">download</a></code>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>
        Позначає те, що гіперпосилання призначене для завантаження ресурсу.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/draggable">draggable</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Визначає те, чи може елемент бути перетягнутий.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/form#enctype">enctype</a></code>
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>
        Визначає тип вмісту даних форми, коли <code>method</code> має значення POST.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/enterkeyhint">enterkeyhint</a></code>
        {{experimental_inline}}
      </td>
      <td>
        {{HTMLElement("textarea")}},
        <a href="/uk/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        <a href="https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute"><code>enterkeyhint</code></a> задає те, який підпис дії (або піктограма) повинен бути показаний для клавіші введення на віртуальних клавіатурах. Цей атрибут може бути використаний на формових елементах (наприклад, як значення елементів <code>textarea</code>), або на елементах в режимі редагування (наприклад, з використанням атрибута <code>contenteditable</code>).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/for">for</a></code>
      </td>
      <td>
        {{HTMLElement("label")}},
        {{HTMLElement("output")}}
      </td>
      <td>
        Описує елементи, що належать цьому елементові.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/form">form</a></code>
      </td>
      <td>
        {{HTMLElement("button")}},
        {{HTMLElement("fieldset")}},
        {{HTMLElement("input")}},
        {{HTMLElement("label")}},
        {{HTMLElement("meter")}},
        {{HTMLElement("object")}},
        {{HTMLElement("output")}},
        {{HTMLElement("progress")}},
        {{HTMLElement("select")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Позначає форму, що є власником елемента.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/formaction">formaction</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("button")}}
      </td>
      <td>
        Позначає дію елемента, відкидаючи дію, визначену на {{HTMLElement("form")}}.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/formenctype">formenctype</a></code>
      </td>
      <td>
        {{HTMLElement("button")}},
        {{HTMLElement("input")}}
      </td>
      <td>
        Якщо кнопка чи поле є {{Glossary("submit button", "кнопкою подання")}} (наприклад, <code>type="submit"</code>), то цей атрибут задає тип кодування для відправлення форми. Якщо цей атрибут заданий, то він відкидає атрибут <code>enctype</code> <a href="/uk/docs/Web/HTML/Element/form">форми</a>-власника кнопки.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/formmethod">formmethod</a></code>
      </td>
      <td>
        {{HTMLElement("button")}},
        {{HTMLElement("input")}}
      </td>
      <td>
        Якщо кнопка чи поле є {{Glossary("submit button", "кнопкою подання")}} (наприклад, <code>type="submit"</code>), то цей атрибут задає метод відправлення форми (<code>GET</code>, <code>POST</code> тощо). Якщо цей атрибут заданий, то він відкидає атрибут <code>method</code> <a href="/uk/docs/Web/HTML/Element/form">форми</a>-власника кнопки.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/formnovalidate">formnovalidate</a></code>
      </td>
      <td>
        {{HTMLElement("button")}},
        {{HTMLElement("input")}}
      </td>
      <td>
        Якщо кнопка чи поле є {{Glossary("submit button", "кнопкою подання")}} (наприклад, <code>type="submit"</code>), то цей булевий атрибут вказує, що форма не повинна перевірятися при поданні. Якщо цей атрибут заданий, то він відкидає атрибут <code>novalidate</code> <a href="/uk/docs/Web/HTML/Element/form">форми</a>-власника кнопки.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/formtarget">formtarget</a></code>
      </td>
      <td>
        {{HTMLElement("button")}},
        {{HTMLElement("input")}}
      </td>
      <td>
        Якщо кнопка чи поле є {{Glossary("submit button", "кнопкою подання")}} (наприклад, <code>type="submit"</code>), то цей атрибут задає контекст перегляду (наприклад, вкладку, вікно чи вбудований фрейм), в якому повинна бути показана відповідь, отримана після подання форми. Якщо цей атрибут заданий, то він відкидає атрибут <code>target</code> <a href="/uk/docs/Web/HTML/Element/form">форми</a>-власника кнопки.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/headers">headers</a></code>
      </td>
      <td>
        {{HTMLElement("td")}}, {{HTMLElement("th")}}
      </td>
      <td>
        Ідентифікатори елементів <code>&#x3C;th></code>, що застосовуються до цього елемента.
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{HTMLElement("canvas")}},
        {{HTMLElement("embed")}},
        {{HTMLElement("iframe")}}, {{HTMLElement("img")}},
        {{HTMLElement("input")}},
        {{HTMLElement("object")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        <p>
          Задає висоту елементів, перелічених тут. Для всіх інших елементів слід використовувати властивість CSS {{cssxref("height")}}.
        </p>
        <div class="note">
          <p>
            <strong>Примітка:</strong> У певних випадках, наприклад, для {{HTMLElement("div")}}, це історичний атрибут, і в такому разі слід натомість використовувати властивість CSS {{Cssxref("height")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/hidden">hidden</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Запобігає візуалізації елемента, при цьому залишаючи дочірні елементи, наприклад, елементи сценаріїв, активними.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/meter#high">high</a></code>
      </td>
      <td>{{HTMLElement("meter")}}</td>
      <td>
        Позначає нижню межу верхнього діапазону.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/href">href</a></code>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("base")}}, {{HTMLElement("link")}}
      </td>
      <td>
        URL зв'язаного ресурсу.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/hreflang">hreflang</a></code>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("link")}}
      </td>
      <td>
      Задає мову зв'язаного ресурсу.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/meta#http-equiv">http-equiv</a></code>
      </td>
      <td>{{HTMLElement("meta")}}</td>
      <td>
        Визначає директиву pragma.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/id">id</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Нерідко вживається вкупі з CSS для оформлення конкретного елемента. Значення цього атрибута повинно бути унікальним.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/Security/Subresource_Integrity">integrity</a></code>
      </td>
      <td>
        {{HTMLElement("link")}}, {{HTMLElement("script")}}
      </td>
      <td>
        <p>
          Задає значення <a href="/uk/docs/Web/Security/Subresource_Integrity">Цілісності підресурсу</a>, яке дає браузерам змогу перевірити те, що вони завантажують.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/uk/docs/Web/HTML/Element/img#intrinsicsize"><code>intrinsicsize</code></a>
        {{deprecated_inline}}
      </td>
      <td>{{HTMLElement("img")}}</td>
      <td>
        Цей атрибут каже браузеру ігнорувати фактичний власний розмір зображення та вдавати, ніби він має власний розмір, вказаний в цьому атрибуті.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes/inputmode"><code>inputmode</code></a>
      </td>
      <td>
        {{HTMLElement("textarea")}},
        <a href="/uk/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        Надає підказку щодо типу даних, які можуть бути введені користувачем під час редагування елемента або його вмісту. Цей атрибут може бути використаний з формовими елементами (наприклад, як значення елементів <code>textarea</code>), або на елементах в режимі редагування (наприклад, з використанням атрибута <code>contenteditable</code>).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/img#ismap">ismap</a></code>
      </td>
      <td>{{HTMLElement("img")}}</td>
      <td>
        Позначає те, що зображення є частиною серверної карти зображень.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/track#kind">kind</a></code>
      </td>
      <td>{{HTMLElement("track")}}</td>
      <td>Задає різновид текстової доріжки.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/label">label</a></code>
      </td>
      <td>
        {{HTMLElement("optgroup")}},
        {{HTMLElement("option")}},
        {{HTMLElement("track")}}
      </td>
      <td>
        Задає заголовок елемента для прочитання користувачем.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/lang">lang</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Визначає мову, що вживається в елементі.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/script#language">language</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{HTMLElement("script")}}</td>
      <td>Визначає мову сценарію, що вживається в елементі.</td>
    </tr>
    <tr>
      <td><code>loading</code> {{experimental_inline}}</td>
      <td>
        {{HTMLElement("img")}}, {{HTMLElement("iframe")}}
      </td>
      <td>
        Позначає те, чи повинен елемент завантажуватися ліниво
        (<code>loading="lazy"</code>), чи негайно
        (<code>loading="eager"</code>).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/input#list-spysok">list</a></code>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td>
        Позначає список наперед визначених варіантів для пропонування користувачу.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/loop">loop</a></code>
      </td>
      <td>
        {{HTMLElement("audio")}},
        {{HTMLElement("marquee")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        Позначає те, чи повинен медіаресурс починати відтворення з початку, коли він закінчиться.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/meter#low">low</a></code>
      </td>
      <td>{{HTMLElement("meter")}}</td>
      <td>Позначає верхню межу нижнього діапазону.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/max">max</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("meter")}},
        {{HTMLElement("progress")}}
      </td>
      <td>
        Позначає максимальне дозволене значення.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/maxlength">maxlength</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Визначає максимальне число символів, дозволене в елементі.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/minlength">minlength</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Визначає мінімальну кількість символів, дозволену в елементі.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/media">media</a></code>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}, {{HTMLElement("source")}},
        {{HTMLElement("style")}}
      </td>
      <td>
        Задає підказку щодо засобу візуалізації, для якого створений зв'язаний ресурс.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/form#method">method</a></code>
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>
        Визначає те, який метод <a href="/uk/docs/Web/HTTP">HTTP</a> повинен використовуватися при поданні форми. Може бути <code>GET</code> (усталено) або <code>POST</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/min">min</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("meter")}}
      </td>
      <td>
        Позначає мінімальне дозволене значення.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/multiple">multiple</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("select")}}
      </td>
      <td>
        Позначає те, чи можуть в поле бути введені кілька значень типу <code>email</code> або <code>file</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/muted">muted</a></code>
      </td>
      <td>
        {{HTMLElement("audio")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        Позначає те, чи буде аудіо спочатку заглушене при завантаженні сторінки.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/name">name</a></code>
      </td>
      <td>
        {{HTMLElement("button")}}, {{HTMLElement("form")}},
        {{HTMLElement("fieldset")}},
        {{HTMLElement("iframe")}},
        {{HTMLElement("input")}},
        {{HTMLElement("object")}},
        {{HTMLElement("output")}},
        {{HTMLElement("select")}},
        {{HTMLElement("textarea")}},
        {{HTMLElement("map")}}, {{HTMLElement("meta")}},
        {{HTMLElement("param")}}
      </td>
      <td>
        Назва елемента. Наприклад, використовується сервером для ідентифікації полів при поданні форми.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/form#novalidate">novalidate</a></code>
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>
        Цей атрибут позначає те, що форма не повинна проходити валідацію при поданні.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/open">open</a></code>
      </td>
      <td>
        {{HTMLElement("details")}},
        {{HTMLElement("dialog")}}
      </td>
      <td>
        Позначає те, чи є вміст наразі видимим (у випадку елемента <code>&#x3C;details></code>), або чи є діалог активним і доступним для взаємодії (у випадку елемента <code>&#x3C;dialog></code>).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/meter#optimum">optimum</a></code>
      </td>
      <td>{{HTMLElement("meter")}}</td>
      <td>
        Позначає оптимальне числове значення.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/pattern">pattern</a></code>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td>
        Визначає регулярний вираз, відносно якого виконуватиметься валідація значення елемента.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/a#ping">ping</a></code>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>
        Атрибут <code>ping</code> задає розділений пробілами список URL, які сповіщаються, коли користувач переходить за гіперпосиланням.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/placeholder">placeholder</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Надає користувачам підказку щодо того, що повинно бути введено в поле.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/video#playsinline">playsinline</a></code>
      </td>
      <td>
        {{HTMLElement("video")}}
      </td>
      <td>
        Булів атрибут, який вказує на те, що відео повинно відтворюватися «вбудовано», тобто в межах області відтворення елемента. Зауважте, що відсутність цього атрибута не означає, що відео завжди буде відтворюватися на весь екран.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/video#poster">poster</a></code>
      </td>
      <td>{{HTMLElement("video")}}</td>
      <td>
        URL, що вміщає кадр-афішу, який буде показаний до того, як користувач почне відтворення або перемотування.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/preload">preload</a></code>
      </td>
      <td>
        {{HTMLElement("audio")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        Позначає те, чи повинен бути попередньо завантажений весь ресурс, його частина або нічого.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/readonly">readonly</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Позначає те, чи може елемент редагуватися.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/referralpolicy">referrerpolicy</a></code>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("iframe")}}, {{HTMLElement("img")}},
        {{HTMLElement("link")}}, {{HTMLElement("script")}}
      </td>
      <td>Задає те, який посилач надсилається при отриманні ресурсу.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/rel">rel</a></code>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td>
        Задає взаємозв'язок між цільовим та зв'язаним об'єктами.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/required">required</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("select")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Позначає те, чи є цей елемент обов'язковим для заповнення, чи ні.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/ol#reversed">reversed</a></code>
      </td>
      <td>{{HTMLElement("ol")}}</td>
      <td>
        Позначає те, чи повинен список відображатися у зворотному порядку, а не у звичайному.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/Accessibility/ARIA/Roles">role</a></code>
      </td>
      <td><a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a></td>
      <td>
        Визначає явну роль елемента для використання допоміжними технологіями.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/textarea#rows">rows</a></code>
      </td>
      <td>{{HTMLElement("textarea")}}</td>
      <td>
        Визначає число рядків у текстовій області.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/rowspan">rowspan</a></code>
      </td>
      <td>
        {{HTMLElement("td")}}, {{HTMLElement("th")}}
      </td>
      <td>
        Визначає число рядків, які повинна охоплювати комірка таблиці.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/iframe#sandbox">sandbox</a></code>
      </td>
      <td>{{HTMLElement("iframe")}}</td>
      <td>
        Не дає документові, завантаженому у вбудованому фреймі, використовувати певні можливості (наприклад, подавання форм або відкриття нових вікон).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/th#scope">scope</a></code>
      </td>
      <td>{{HTMLElement("th")}}</td>
      <td>
        Визначає комірки, до яких відноситься заголовок (визначений в елементі <code>th</code>).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/style#scoped">scoped</a></code>
        {{non-standard_inline}} {{deprecated_inline}}
      </td>
      <td>{{HTMLElement("style")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/option#selected">selected</a></code>
      </td>
      <td>{{HTMLElement("option")}}</td>
      <td>
        Визначає значення, яке буде вибрано при завантаженні сторінки.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/shape">shape</a></code>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/size">size</a></code>
      </td>
      <td>
        {{HTMLElement("input")}},
        {{HTMLElement("select")}}
      </td>
      <td>
        Визначає ширину елемента (в пікселях). Якщо атрибут <code>type</code> елемента має значення <code>text</code> або <code>password</code>, то це число символів.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/sizes">sizes</a></code>
      </td>
      <td>
        {{HTMLElement("link")}}, {{HTMLElement("img")}},
        {{HTMLElement("source")}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/slot">slot</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Присвоює елементові слот в тіньовому дереві тіньового DOM.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/span">span</a></code>
      </td>
      <td>
        {{HTMLElement("col")}},
        {{HTMLElement("colgroup")}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/spellcheck">spellcheck</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Позначає те, чи дозволена перевірка правопису для елемента.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/src">src</a></code>
      </td>
      <td>
        {{HTMLElement("audio")}},
        {{HTMLElement("embed")}},
        {{HTMLElement("iframe")}}, {{HTMLElement("img")}},
        {{HTMLElement("input")}},
        {{HTMLElement("script")}},
        {{HTMLElement("source")}},
        {{HTMLElement("track")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        URL вбудованого вмісту.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/iframe#srcdoc">srcdoc</a></code>
      </td>
      <td>{{HTMLElement("iframe")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/track#srclang">srclang</a></code>
      </td>
      <td>{{HTMLElement("track")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/srcset">srcset</a></code>
      </td>
      <td>
        {{HTMLElement("img")}}, {{HTMLElement("source")}}
      </td>
      <td>
        Одне чи більше зображень-кандидатів.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/ol#start">start</a></code>
      </td>
      <td>{{HTMLElement("ol")}}</td>
      <td>
        Визначає номер першого пункту, якщо це не 1.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/style">style</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Визначає стилі CSS, які відкидають раніше задані стилі.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/table#summary">summary</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{HTMLElement("table")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Відкидає усталений порядок табулювання браузера і використовує замість нього заданий.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/target">target</a></code>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("base")}}, {{HTMLElement("form")}}
      </td>
      <td>
        Задає те, де відкривати пов'язаний документ (у випадку елемента <code>&#x3C;a></code>) або де відображати отриману відповідь (у випадку елемента <code>&#x3C;form></code>).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/title">title</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Текст для виведення в спливній підказці при наведенні на елемент курсора.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Global_attributes/translate">translate</a></code>
      </td>
      <td>
        <a href="/uk/docs/Web/HTML/Global_attributes">Глобальний атрибут</a>
      </td>
      <td>
        Задає те, чи повинні перекладатися значення атрибутів елемента та значення його дочірніх вузлів <code><a href="https://dom.spec.whatwg.org/#text">Text</a></code> при локалізації сторінки, чи залишатися незмінними.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/type">type</a></code>
      </td>
      <td>
        {{HTMLElement("button")}},
        {{HTMLElement("input")}},
        {{HTMLElement("embed")}},
        {{HTMLElement("object")}},
        {{HTMLElement("ol")}},
        {{HTMLElement("script")}},
        {{HTMLElement("source")}},
        {{HTMLElement("style")}}, {{HTMLElement("menu")}},
        {{HTMLElement("link")}}
      </td>
      <td>
        Визначає тип елемента.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/usemap">usemap</a></code>
      </td>
      <td>
        {{HTMLElement("img")}}, {{HTMLElement("input")}},
        {{HTMLElement("object")}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/value">value</a></code>
      </td>
      <td>
        {{HTMLElement("button")}}, {{HTMLElement("data")}},
        {{HTMLElement("input")}}, {{HTMLElement("li")}},
        {{HTMLElement("meter")}},
        {{HTMLElement("option")}},
        {{HTMLElement("progress")}},
        {{HTMLElement("param")}}
      </td>
      <td>
        Визначає усталене значення, яке буде відображатися в елементі при завантаженні сторінки.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Attributes/width">width</a></code>
      </td>
      <td>
        {{HTMLElement("canvas")}},
        {{HTMLElement("embed")}},
        {{HTMLElement("iframe")}}, {{HTMLElement("img")}},
        {{HTMLElement("input")}},
        {{HTMLElement("object")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        <p>
          Для елементів, перерахованих тут, це встановлює їх ширину.
        </p>
        <div class="note">
          <p>
            <strong>Примітка:</strong> Для всіх інших елементів, таких як {{HTMLElement("div")}}, це історичний атрибут, і в такому випадку слід використовувати властивість CSS {{Cssxref("width")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/uk/docs/Web/HTML/Element/textarea#wrap">wrap</a></code>
      </td>
      <td>{{HTMLElement("textarea")}}</td>
      <td>
        Позначає те, чи може текст переноситися на новий рядок.
      </td>
    </tr>
  </tbody>
</table>

## Атрибути вмісту та атрибути IDL

У HTML більшість атрибутів має дві сторони: **атрибут вмісту** та **атрибут IDL (мови визначення інтерфейсу)**.

Атрибут вмісту – це атрибут, заданий зі вмісту (коду HTML), і його можна задати чи отримати за допомогою {{domxref("element.setAttribute()")}} або {{domxref("element.getAttribute()")}}. Атрибут вмісту завжди є рядком, навіть якщо очікуване значення повинно бути цілим числом. Наприклад, щоб задати атрибут `maxlength` елемента {{HTMLElement("input")}} значенням 42 за допомогою атрибута вмісту, необхідно викликати `setAttribute("maxlength", "42")` на відповідному елементі.

Атрибут IDL також відомий як властивість JavaScript. Це атрибути, які можна зчитати чи задати за допомогою властивостей JavaScript виду `element.foo`. Атрибут IDL завжди буде використовувати (але може перетворювати) базовий атрибут вмісту для повернення значення при його отриманні, і зберігатиме щось в атрибуті вмісту при своєму заданні. Іншими словами, атрибути IDL, по суті, відображають атрибути вмісту.

У більшості випадків атрибути IDL повертають свої значення в такому вигляді, в якому вони фактично використовують. Наприклад, усталений `type` елементів {{HTMLElement("input")}} – це "text", тому якщо задати `input.type="foobar"`, то елемент `<input>` буде мати тип text (за зовнішнім виглядом та поведінкою), але значення атрибута вмісту "type" буде "foobar". Однак атрибут IDL `type` поверне рядок "text".

Атрибути IDL не завжди є рядками; наприклад, `input.maxlength` – це число (знакове довге). При використанні атрибутів IDL зчитується та задається значення потрібного типу, тому `input.maxlength` завжди повертатиме число, а при заданні `input.maxlength` очікуватиметься число. Якщо передати інший тип, то цей тип автоматично перетворюється на число, відповідно до стандартних правил JavaScript для перетворення типів.

Атрибути IDL можуть [відображати інші типи](https://html.spec.whatwg.org/multipage/urls-and-fetching.html), такі як беззнакове довге, URL, булеві значення тощо. На жаль, немає чітких правил, і спосіб поведінки атрибутів IDL у поєднанні з відповідними атрибутами вмісту залежить від конкретного атрибута. У більшості випадків виконуються [правила, викладені в специфікації](https://html.spec.whatwg.org/multipage/urls-and-fetching.html), але іноді цього не відбувається. Специфікації HTML намагаються зробити це якомога більш зручним для розробників, але з різних причин (в основному історичних) деякі атрибути поводяться дивно (наприклад, `select.size`), і варто прочитати специфікації, щоб зрозуміти, як саме вони поводяться.

## Булеві атрибути

Частина атрибутів вмісту (наприклад, `required`, `readonly`, `disabled`) називаються [булевими атрибутами](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes). Якщо булевий атрибут присутній, то його значення – **true**, а якщо він відсутній, то його значення – **false**.

HTML визначає обмеження щодо дозволених значень булевих атрибутів: якщо такий атрибут присутній, то його значення повинно бути або порожнім рядком (або, що рівносильно, атрибут може мати неприсвоєне значення), або значення, що є нечутливою до регістру відповідністю канонічної назви атрибута в ASCII, без пробілів на початку чи в кінці. Наступні приклади – допустимі способи розмітки булевого атрибута:

```html-nolint
<div itemscope>Це дійсний HTML, але недійсний XML.</div>
<div itemscope=itemscope>Це також дійсний HTML, але недійсний XML.</div>
<div itemscope="">Це дійсний HTML, а також дійсний XML.</div>
<div itemscope="itemscope">
  Це також дійсний HTML і XML, але, можливо, трохи задовгий.
</div>
```

Для ясності слід додати, що значення "`true`" та "`false`" не дозволені для булевих атрибутів. Щоб представити значення false, атрибут повинен бути взагалі відсутнім. Це обмеження роз'яснює деякі поширені непорозуміння: наприклад, з `checked="false"` атрибут `checked` елемента буде розтлумачено як **true**, оскільки атрибут присутній.

## Атрибути обробників подій

> **Застереження:** Використання атрибутів обробників подій не рекомендується. Суміш HTML та JavaScript нерідко призводить до непідтримуваного коду, а виконання атрибутів обробників подій також може бути заблоковано політиками безпеки вмісту.

На додачу до атрибутів, перелічених у таблиці вище, на всіх елементах також можуть бути задані глобальні [обробники подій](/uk/docs/Web/Events/Event_handlers#zastosuvannia-vlastyvostei-onevent), такі як [`onclick`](/uk/docs/Web/API/Element/click_event), як [атрибути вмісту](#atrybuty-vmistu-ta-atrybuty-idl).

Усі атрибути обробників подій приймають рядок. Цей рядок використовується для синтезування [функції JavaScript](/uk/docs/Web/JavaScript/Reference/Functions) у вигляді `function name(/*args*/) {body}`, де `name` – це назва атрибута, а `body` – його значення. Обробник отримує ті ж параметри, що і його JavaScript-аналог – більшість обробників отримують лише один параметр `event`, тоді як `onerror` отримує п'ять: `event`, `source`, `lineno`, `colno`, `error`. Це означає, що ви можете, загалом, використовувати змінну `event` всередині атрибута.

```html
<div onclick="console.log(event)">Клацни мене!</div>
<!-- Синтезований обробник має назву; можна посилатися за нею -->
<div onclick="console.log(onclick)">Клацни мене!</div>
```

## Дивіться також

- [Елементи HTML](/uk/docs/Web/HTML/Element)
