---
title: <img> – елемент вбудовування зображень
slug: Web/HTML/Element/img
page-type: html-element
browser-compat: html.elements.img
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<img>`** вбудовує в документ зображення.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Приклад вище демонструє використання елемента `<img>`:

- Атрибут `src` є **required** (обов'язковим) і містить шлях до зображення, котре має бути вбудоване.
- Атрибут `alt` зберігає текстову заміну для зображення, яка є обов'язковою та **приголомшливо корисною** для доступності: читачі з екрана зачитують своїм користувачам значення атрибута, щоб вони знали, що означає зображення. Альтернативний текст також виводиться на сторінці, якщо зображення з якоїсь причини не може бути завантажене: наприклад, через мережеві помилки, блокування вмісту чи гниття посилань.

Є чимало інших атрибутів для досягнення різних цілей:

- Контроль [посилача](/uk/docs/Web/HTTP/Headers/Referrer-Policy)/{{glossary("CORS")}} для безпеки й приватності: дивіться [`crossorigin`](#crossorigin) й [`referrerpolicy`](#referrerpolicy).
- Щоб задати зображенню його природний розмір, слід задати й атрибут [`width`](#width), і атрибут [`height`](#height): це дасть змогу зарезервувати для зображення місце й уникнути зсувів компонування вмісту.
- Підказки чуйності зображень за допомогою [`sizes`](#sizes) і [`srcset`](#srcset) (також дивіться елемент {{htmlelement("picture")}} і наш підручник [Чуйні зображення](/uk/docs/Web/HTML/Responsive_images)).

## Підтримувані формати зображень

Стандарт HTML не перелічує, які формати зображень слід підтримувати, тому {{glossary("user agent","користувацькі агенти")}} можуть підтримувати різні формати.

> [!NOTE]
>
> [Посібник з типів файлів та форматів](/uk/docs/Web/Media/Guides/Formats/Image_types) надає всебічну інформацію про формати зображень та їх підтримку веббраузерами.
> Цей розділ – лишень стислий конспект!

Формати файлів зображень, що найбільш поширені у Вебі:

- [APNG (анімована переносна мережева графіка)](/uk/docs/Web/Media/Guides/Formats/Image_types#apng-animovana-perenosna-merezheva-hrafika) — Добрий вибір для послідовностей анімації без втрат (GIF має меншу ефективність)
- [AVIF (формат файлів зображень AV1)](/uk/docs/Web/Media/Guides/Formats/Image_types#zobrazhennia-avif) — У зв'язку з високою ефективністю є добрим вибором і для простих, і для анімованих зображень.
- [GIF (формат обміну графікою)](/uk/docs/Web/Media/Guides/Formats/Image_types#gif-format-obminu-hrafikoiu) — Добрий вибір для _простих_ зображень та анімацій.
- [JPEG (зображення Об'єднаної експертної групи з фотографій)](/uk/docs/Web/Media/Guides/Formats/Image_types#jpeg-zobrazhennia-obiednanoi-ekspertnoi-hrupy-z-fotohrafii) — Добрий вибір для стиснення зі втратами нерухомих зображень (наразі найпопулярніший).
- [PNG (переносна мережева графіка)](/uk/docs/Web/Media/Guides/Formats/Image_types#png-perenosna-merezheva-hrafika) — Добрий вибір для стиснення без втрат нерухомих зображень (дещо краща якість, ніж в JPEG).
- [SVG (масштабована векторна графіка)](/uk/docs/Web/Media/Guides/Formats/Image_types#svg-masshtabovana-vektorna-hrafika) — Векторний формат зображень. Його слід використовувати для зображень, що повинні бути точно відтворені в різних розмірах.
- [WebP (формат вебзображень)](/uk/docs/Web/Media/Guides/Formats/Image_types#zobrazhennia-webp) — Чудовий варіант як для простих, так і анімованих зображень

Формати штибу [WebP](/uk/docs/Web/Media/Guides/Formats/Image_types#zobrazhennia-webp) та [AVIF](/uk/docs/Web/Media/Guides/Formats/Image_types#zobrazhennia-avif) є рекомендованими, адже вони мають набагато кращу ефективність, ніж PNG, JPEG, GIF, як для нерухомих, так для анімованих зображень.

SVG залишається рекомендованим форматом для зображень, що повинні бути точно відтворені в різних розмірах.

## Помилки завантаження зображень

Якщо помилка трапляється при завантаженні чи візуалізації зображення, і якщо був встановлений обробник помилки `onerror` для події {{domxref("HTMLElement/error_event", "error")}}, то такий обробник помилки буде викликаний. Це може статися в декількох ситуаціях, в тому числі:

- Коли атрибут `src` є порожнім (`""`) або має значення `null`.
- Коли {{glossary("URL")}} в атрибуті `src` дорівнює URL сторінки, на котрій знаходиться користувач.
- Коли зображення якимсь чином зіпсовано, через що не може бути завантажене.
- Коли метадані зображення зіпсовані в такий спосіб, що неможливо отримати його розміри, і – жодні розміри не вказані в атрибутах елемента `<img>`.
- Коли зображення має формат, що не підтримується {{Glossary("user agent", "користувацьким агентом")}}.

## Атрибути

Цей елемент включає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- [`alt`](/uk/docs/Web/API/HTMLImageElement/alt#prymitky-shchodo-vykorystannia)

  - : Визначає текст, що може замінити зображення на сторінці.

    > [!NOTE]
    > Браузери показують зображення не завжди. Є низка ситуацій, в яких браузер може не показувати зображення, наприклад:
    >
    > - Коли браузер є невізуальним (штибу тих, котрими користуються люди з розладами зору)
    > - Коли користувач вирішує не виводити зображень (для економії пропускної здатності, з міркувань приватності)
    > - Коли зображення є недійсним чи [має непідтримуваний тип](#pidtrymuvani-formaty-zobrazhen)
    >
    > В таких випадках браузер може замінити зображення текстом з атрибута `alt` елемента. З цих та інших міркувань, слід надавати змістовне значення `alt` завжди, коли це можливо.

    Надання цьому атрибутові порожнього рядка (`alt=""`) вказує на те, що це зображення _не_ є ключовою частиною вмісту (є прикрасою чи пікселем стеження) і що невізуальні браузери можуть упустити його при {{glossary("Engine/Rendering", "візуалізації")}}. Візуальні браузери також приховають піктограму зламаного зображення, якщо атрибут `alt` є порожнім і зображення не вийшло відтворити.

    Цей атрибут також використовується при копіюванні й вставленні зображення в текст, а також збереженні пов'язаного зображення в закладку.

- `attributionsrc` {{experimental_inline}}

  - : задає те, що браузер повинен надіслати вкупі з запитом на зображення заголовок {{httpheader("Attribution-Reporting-Eligible")}}.

    На серверному боці такий заголовок використовується для запуску надсилання у відповіді заголовка {{httpheader("Attribution-Reporting-Register-Source")}} або {{httpheader("Attribution-Reporting-Register-Trigger")}}, щоб зареєструвати засноване на JavaScript [джерело атрибуції](/uk/docs/Web/API/Attribution_Reporting_API/Registering_sources#dzherela-podii-na-osnovi-html) або [пускача атрибуції](/uk/docs/Web/API/Attribution_Reporting_API/Registering_triggers#puskach-atrybutsii-na-osnovi-html) відповідно. Те, який заголовок відповіді слід надсилати у відповідь, залежить від значення заголовка `Attribution-Reporting-Eligible`, що спричинив реєстрацію.

    Відповідне джерело або пускач подій створюється тоді, коли браузер отримує відповідь, що містить файл зображення.

    > [!NOTE]
    > Дивіться подробиці в [API звітування атрибуції](/uk/docs/Web/API/Attribution_Reporting_API).
    > Є дві версії цього атрибуту:

    - Булева, тобто просто запис `attributionsrc`. Це задає те, щоб заголовок {{httpheader("Attribution-Reporting-Eligible")}} надсилався тому самому серверу, на який посилається атрибут `src`. Це годиться, коли джерело атрибуції чи реєстрація пускача обробляється на тому самому сервері. Під час реєстрації пускача атрибуції ця властивість не обов'язкова, і за її опущення використовується значення пустого рядка.
    - Значення, що вміщає один або кілька URL, наприклад:

    ```html
    <img
      src="image-file.png"
      alt="Опис мого файлу зображення"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Це корисно в тих випадках, коли запитаний ресурс не перебуває на сервері під вашим контролем або просто хочеться обробляти реєстрацію джерела атрибуції на іншому сервері. Тоді можна задати одну або більше адрес URL як значення `attributionsrc`. Коли відбувається запит на ресурс, заголовок {{httpheader("Attribution-Reporting-Eligible")}} надсилається на адреси URL, задані в `attributionSrc`, а не лише за походженням ресурсу. Ці адреси URL потім можуть відповісти заголовком {{httpheader("Attribution-Reporting-Register-Source")}} або {{httpheader("Attribution-Reporting-Register-Trigger")}} відповідно для завершення реєстрації.

    > [!NOTE]
    > Задання кількох адрес URL означає те, що на один елемент можна зареєструвати кілька джерел атрибуції. Можна, наприклад, мати різні кампанії, для вимірювання успішності яких потрібно генерувати різні звіти щодо різних даних.

- [`crossorigin`](/uk/docs/Web/HTML/Attributes/crossorigin)

  - : Вказує, що отримання зображення повинно виконуватися за допомогою запиту із {{glossary("CORS")}}. Дані [зображення із CORS](/uk/docs/Web/HTML/CORS_enabled_image), повернені з запиту CORS, можуть бути повторно використані в елементі {{HTMLElement("canvas")}}, не бувши позначеними як "[ославлені](/uk/docs/Web/HTML/CORS_enabled_image#bezpeka-ta-oslavleni-polotna)".

    Якщо атрибут `crossorigin` – _не_ вказаний, то надсилається запит без CORS (без заголовка запиту {{httpheader("Origin")}}), і браузер позначає зображення як ославлене й обмежує доступ до його даних, запобігаючи його використанню в елементах {{HTMLElement("canvas")}}.

    Якщо атрибут `crossorigin` _присутній_, то надсилається запит із CORS (з заголовком запиту {{httpheader("Origin")}}); але якщо сервер не погоджується дозволити доступ до даних зображення для стороннього походження (не надсилаючи жодного заголовка відповіді {{httpheader("Access-Control-Allow-Origin")}}, або ж не включивши походження сайту в жодному надісланому заголовку відповіді {{httpheader("Access-Control-Allow-Origin")}}), то браузер блокує завантаження зображення і виводить помилку CORS в консоль інструментів розробника.

    Дозволені значення:

    - `anonymous` (анонімний)
      - : Запит із CORS надсилається без авторизації (тобто без {{glossary("cookie", "реп'яшків")}}, [сертифікатів X.509](https://datatracker.ietf.org/doc/html/rfc5280) і заголовка запиту {{httpheader("Authorization")}}).
    - `use-credentials`
      - : Запит із CORS надсилається із будь-якою активною авторизацією (тобто з реп'яшками, сертифікатами X.509 та заголовком запиту `Authorization`). Якщо сервер не погоджується поділитися авторизацією з сайтом походження (надіславши назад заголовок відповіді `Access-Control-Allow-Credentials: true`), то браузер позначає зображення як ославлене й обмежує доступ до його даних.

    Якщо цей атрибут має недійсне значення, то браузери обробляють його так, ніби використано значення `anonymous`. Дивіться [Атрибути налаштувань CORS](/uk/docs/Web/HTML/Attributes/crossorigin) для отримання додаткової інформації.

- `decoding`

  - : Цей атрибут дає браузеру підказку щодо того, чи повинен він виконувати декодування зображення при візуалізації іншого вмісту DOM в одному кроці відображення, що виглядає більш "правильно" (`sync`), чи візуалізувати та відображати інший вміст DOM спочатку, а потім декодувати зображення і відобразити його пізніше (`async`). На практиці `async` означає, що наступне малювання не чекає, поки зображення декодується.

    Нерідко складно помітити який-небудь суттєвий ефект, коли `decoding` використовується на статичних елементах `<img>`. Ймовірно, вони спершу візуалізуються як порожні зображення, поки отримуються файли зображень (або з мережі, або з кешу), а потім так чи інакше обробляються незалежно, тож "синхронізація" оновлень вмісту – менш помітна. Однак блокування візуалізації під час декодування, хоча й невелике, _може_ бути виміряне – навіть якщо важко помітити його людським зором. Дивіться більш докладний аналіз у [Що насправді робить атрибут image decoding?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023).

    Використання різних типів `decoding` може призвести до більш помітної різниці при динамічному вставлянні елементів `<img>` у DOM засобами JavaScript – дивіться подробиці в {{domxref("HTMLImageElement.decoding")}}.

    Дозволені значення:

    - `sync`
      - : Декодувати зображення синхронно, вкупі з візуалізацією решти вмісту DOM, та показати все разом.
    - `async`
      - : Декодувати зображення асинхронно, після візуалізації, а показати інший вміст DOM.
    - `auto`
      - : Немає побажань щодо режиму декодування; браузер вирішує, що найкраще для користувача. Це усталене значення.

- [`elementtiming`](/uk/docs/Web/HTML/Attributes/elementtiming)

  - : Позначає зображення для відстеження з боку API {{domxref("PerformanceElementTiming")}}. Задане значення стає ідентифікатором відстежуваного елемента зображення. Дивіться також сторінку атрибута [`elementtiming`](/uk/docs/Web/HTML/Attributes/elementtiming).

- `fetchpriority`

  - : Надає підказку щодо відносного пріоритету під час отримання зображення.
    Дозволені значення:

    - `high`
      - : Отримує зображення з високим пріоритетом відносно інших зображень.
    - `low`
      - : Отримує зображення з низьким пріоритетом відносно інших зображень.
    - `auto`
      - : Не задає налаштування пріоритету отримання.
        Це усталене значення.
        Воно вживається, якщо значення не задано або задане значення – невалідне.

  Докладніше в {{domxref("HTMLImageElement.fetchPriority")}}.

- `height`

  - : Природна висота зображення, в пікселях. Мусить бути цілим числом без одиниць вимірювання.

    > [!NOTE]
    > Задання `height` і [`width`](#width) дає браузерові змогу обчислити {{glossary("aspect ratio", "співвідношення сторін")}} зображення до того, як воно завантажене. Це співвідношення використовується для резервування простору, необхідного для виведення зображення, частково або навіть повністю запобігаючи зсувові компонування сторінки при завершенні завантаження й візуалізації зображення. Зменшення зсуву компонування – важлива деталь доброго користувацького досвіду й швидкодії вебсторінки.

- `ismap`

  - : Цей булів атрибут вказує, що зображення є частиною [серверної карти](https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%82%D0%B0_%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D1%8C#%D0%9D%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%96_%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0). Якщо це так, то координати, в яких користувач клацнув на зображення, надсилаються на сервер.

    > [!NOTE]
    > Цей атрибут дозволений лише тоді, коли елемент `<img>` є нащадком елемента {{htmlelement("a")}} з дійсним атрибутом [`href`](/uk/docs/Web/HTML/Element/a#href). Це надає користувачам без вказівних пристроїв запасний напрям переходу.

- `loading`

  - : Вказує, як браузер повинен завантажувати зображення:

    - `eager`:
      - : Завантажує зображення негайно, незалежно від того, чи знаходиться зображення наразі в межах області перегляду (це значення – усталене).
    - `lazy`:
      - : Відкладає завантаження зображення, поки воно не досягне обчисленої відстані від області перегляду, визначеної браузером. Задумом є уникнення використання мережевого з'єднання й пропускної здатності сховища, необхідних для обробки зображення, поки не настане певність, що воно знадобиться. Це загалом покращує швидкодію вмісту в найтиповіших ситуаціях.

    > [!NOTE]
    > Завантаження відкладається лише тоді, коли ввімкнений JavaScript. Така особливість є заходом запобігання стеженню, тому що якби користувацький агент підтримував ледаче завантаження при вимкнених сценаріях, то було й надалі можливо відстежити приблизну позицію прокрутки користувача протягом сесії, стратегічно розташовуючи зображення в розмітці сторінки, щоб сервер міг відстежувати, скільки зображень завантажувалися й коли.
    > [!NOTE]
    > Зображення, чий атрибут `loading` має значення `lazy`, не завантажуються, якщо не перетинаються з видимою частиною елемента, навіть якщо їх завантаження змінило б це, оскільки незавантажені зображення мають `width` і `height`, що дорівнюють `0`. Задання `width` і `height` на зображеннях з ледачим завантаженням виправляє цю проблему та є доброю практикою, [яку рекомендує специфікація](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Також це допомагає запобігти зсувам компонування.

- `referrerpolicy`

  - : Рядок, що вказує, якого посилача слід використовувати при отриманні ресурсу:

    - `no-referrer`: Заголовок {{HTTPHeader("Referer")}} не буде надісланий.
    - `no-referrer-when-downgrade`: Заголовок {{HTTPHeader("Referer")}} не буде надісланий на ті {{Glossary("origin", "походження")}}, що не мають {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: Надісланий посилач буде обмежений походженням сторінки, що містить посилання: її [схемою](/uk/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "хостом")}} та {{Glossary("port", "портом")}}.
    - `origin-when-cross-origin`: Посилач, надісланий іншим походженням, буде обмежений схемою, хостом та портом. Переходи в межах того самого походження включатимуть увесь шлях.
    - `same-origin`: Посилач буде надісланий, якщо {{Glossary("Same-origin policy", "збігається походження")}}, натомість запити між різними походженнями не міститимуть інформації про посилача.
    - `strict-origin`: Надсилати як посилач походження документа, коли рівень протоколу захисту залишається сталим (HTTPS→HTTPS), але не надсилати його за менш захищеною адресою (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (усталене значення): Надсилати увесь URL при виконанні запиту за тим само походженням, надсилати лише походження, коли рівень протоколу захисту залишається сталим (HTTPS→HTTPS), і не надсилати заголовка за менш захищеною адресою (HTTPS→HTTP).
    - `unsafe-url`: Посилач включатиме походження _та_ шлях (але не [фрагмент](/uk/docs/Web/API/HTMLAnchorElement/hash), [пароль](/uk/docs/Web/API/HTMLAnchorElement/password) чи [ім'я користувача](/uk/docs/Web/API/HTMLAnchorElement/username)). **Це значення є небезпечним**, тому що воно пропускає походження та шляхи з захищених TLS ресурсів до незахищених походжень.

- `sizes`

  - : Один чи більше рядків, розділених комами, що вказують набір розмірів джерела. Кожен розмір джерела складається із:

    1. [Умови медіа](/uk/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntaksys). Повинна бути опущена для останнього елемента списку.
    2. Значення розміру джерела.

    Умови медіа описують властивості _області перегляду_, а не _зображення_. Наприклад, `(max-height: 500px) 1000px` пропонує використати джерело ширини 1000px, якщо _область перегляду_ не вища за 500px.

    Значення розмірів джерела вказують бажаний виведений розмір зображення. {{glossary("User agent", "Користувацькі агенти")}} використовують розмір джерела, щоб обрати одне з джерел, наданих в атрибуті `srcset`, коли ці джерела описані за допомогою дескрипторів (`w`). Обраний розмір джерела впливає на {{glossary("intrinsic size", "природний розмір)}} зображення (розмір виведення зображення, коли не застосовується оформлення {{glossary("CSS")}}). Якщо немає атрибута `srcset`, або якщо в ньому немає значень з дескриптором ширини, то атрибут `sizes` ні на що не впливає.

- `src`
  - : {{glossary("URL")}} зображення. Обов'язковий для елемента `<img>` атрибут. В {{glossary("Browser", "браузерах")}}, що підтримують `srcset`, `src` враховується як зображення-кандидат з дескриптором піксельної щільності `1x`, якщо `srcset` зображення з таким дескриптором піксельної щільності не визначене в `srcset` і якщо `srcset` не містить дескрипторів `w`.
- `srcset`

  - : Один чи більше рядків, розділених комами, що вказують можливі джерела зображення для використання {{glossary("user agent", "користувацьким агентом")}}. Кожен рядок складається із:

    1. {{glossary("URL")}} зображення
    2. (Необов'язково) пробілу, після якого – один з двох варіантів:

       - Дескриптор ширини (додатне ціле число, після котрого зразу стоїть літера `w`). Дескриптор ширини ділиться на розмір джерела, наданий атрибутом `sizes`, для обчислення активної піксельної щільності.
       - Дескриптор піксельної щільності (додатне число з рухомою комою, після котрого зразу стоїть літера `x`).

    Якщо дескриптор не вказаний, то джерело отримує усталений дескриптор – `1x`.

    Некоректно змішувати дескриптори ширини й дескриптори піксельної щільності в одному атрибуті `srcset`. Повторювані дескриптори (наприклад, два джерела з однаковим `srcset`, що обидва описані як `2x`) – також недійсні.

    Якщо атрибут `srcset` використовує дескриптори ширини, то атрибут `sizes` також повинен бути присутній, інакше – `srcset` буде ігноруватися.

    Користувацький агент обирає будь-яке з доступних джерел на свій розсуд. Це дає йому значну свободу дій, щоб адаптувати свій вибір на основі речей штибу користувацьких налаштувань чи умов {{glossary("bandwidth", "пропускної здатності")}}. Дивіться наш підручник [Чуйні зображення](/uk/docs/Web/HTML/Responsive_images) для отримання прикладів.

- `width`
  - : Природна ширина зображення в пікселях. Повинна бути цілим числом без одиниць вимірювання.
- `usemap`

  - : Частковий {{glossary("URL")}} (починається з `#`) [карти зображення](/uk/docs/Web/HTML/Element/map), пов'язаної з елементом.

    > [!NOTE]
    > Не можна використовувати цей атрибут, якщо елемент `<img>` знаходиться всередині елемента {{htmlelement("a")}} чи {{HTMLElement("button")}}.

### Нерекомендовані атрибути

- `align` {{deprecated_inline}}

  - : Шикує зображення відносно контексту навколо. Натомість слід використовувати властивості {{glossary("CSS")}} {{cssxref('float')}} і {{cssxref('vertical-align')}}. Дозволені значення атрибута:

    - `top`
      - : Еквівалентно щодо `vertical-align: top` чи `vertical-align: text-top`
    - `middle`
      - : Еквівалентно щодо `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Усталене значення, еквівалентно щодо `vertical-align: unset` чи `vertical-align: initial`
    - `left`
      - : Еквівалентно щодо `float: left`
    - `right`
      - : Еквівалентно щодо `float: right`

- `border` {{deprecated_inline}}
  - : Ширина меж навколо зображення. Натомість слід використовувати властивість {{glossary("CSS")}} {{cssxref('border')}}.
- `hspace` {{deprecated_inline}}
  - : Кількість пікселів відступу зліва і справа зображення. Натомість слід використовувати властивість CSS {{cssxref('margin')}}.
- `longdesc` {{deprecated_inline}}

  - : Посилання на більш докладний опис зображення. Прийнятними значеннями є {{glossary("URL")}} і [`id`](/uk/docs/Web/HTML/Global_attributes/id) елемента.

    > [!NOTE]
    > Цей атрибут згадується в останній версії {{glossary("W3C")}}, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), але був прибраний з [Живого стандарту HTML](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) {{glossary("WHATWG")}}. Він має непевне майбутнє; авторам слід використовувати альтернативи {{glossary("WAI")}}-{{glossary("ARIA")}}, наприклад, [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) чи [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details).

- `name` {{deprecated_inline}}
  - : Ім'я елемента. Натомість слід використовувати атрибут [`id`](/uk/docs/Web/HTML/Global_attributes/id).
- `vspace` {{deprecated_inline}}
  - : Кількість пікселів відступу згори та знизу зображення. Натомість слід використовувати властивість CSS {{cssxref('margin')}}.

## Оформлення засобами CSS

`<img>` є [заміщеним елементом](/uk/docs/Web/CSS/Replaced_element); його властивість {{cssxref("display")}} має усталене значення `inline`, але його усталені розміри визначаються природними розмірами його зображення, як ніби значення було б `inline-block`. На зображенні можна встановлювати властивості штибу {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} тощо.

`<img>` не має базової лінії, тож коли зображення використовуються в рядковому контексті форматування із {{cssxref("vertical-align", "vertical-align: baseline")}}, то низ зображення розміщується на базовій лінії тексту.

Для розташування зображення всередині рамок елемента можна використовувати властивість {{cssxref("object-position")}}, а властивість {{cssxref("object-fit")}} – для припасування розмірів зображення всередині рамок (наприклад, щодо того, чи повинно зображення повністю вміщатися в рамках чи повністю їх заповнювати навіть тоді, коли це призведе до обрізання).

Залежно від свого типу, зображення може мати природні ширину й висоту. Для певних типів зображень, утім, природні розміри – необов'язкові. Наприклад, зображення {{glossary("SVG")}} не мають природних розмірів, якщо їх кореневий елемент {{SVGElement("svg")}} не має встановлених `width` і `height`.

## Доступність

### Створення змістовних альтернативних описів

Значення атрибута `alt` повинно надавати ясну та стислу текстову заміну для вмісту зображення. Воно не повинно описувати присутність самого зображення чи ім'я файлу зображення. Якщо атрибут `alt` навмисно упущений через те, що зображення не має текстового еквівалента, слід розглянути варіанти представлення того, що зображення намагається повідомити, в інший спосіб.

#### Так робити не варто

```html example-bad
<img alt="зображення" src="penguin.jpg" />
```

#### А так – варто

```html example-good
<img alt="Пінгвін на узбережжі." src="penguin.jpg" />
```

Важлива перевірка доступності – зчитати вміст атрибута `alt` вкупі з попереднім текстовим вмістом та визначити, чи доносить він те ж значення, що й зображення. Наприклад, якщо перед зображенням стоїть речення "У своїх мандрах я зустрів милу маленьку тваринку:", то приклад _Так робити не варто_ може бути зчитаний читачем з екрана як "У своїх мандрах я зустрів милу маленьку тваринку: зображення", що не має змісту. Приклад _А так – варто_ може бути зчитаний як "У своїх мандрах я зустрів милу маленьку тваринку: Пінгвін на узбережжі.", що зміст має.
Для зображень, що вживаються для запуску дій, наприклад, зображень, вкладених в елемент {{htmlelement("a")}} або {{htmlelement("button")}}, слід розглянути варіант опису дії, що запускається, в значенні атрибута `alt`. Наприклад, можна написати `alt="наступна сторінка"`, а не `alt="стрілка вправо"`. Також можна додати необов'язкове розгорнуте пояснення в атрибуті `title`; воно може бути зачитано читачем з екрана, якщо про це попросить користувач.

Коли атрибут `alt` не присутній на зображенні, певні читачі з екрана можуть оголосити натомість ім'я файлу зображення. Це може плутати, якщо ім'я файлу не відповідає вмістові зображення.

- [Дерево рішення alt • Зображення • Підручники з вебдоступності WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Альтернативний текст: Повний посібник — Axess Lab](https://axesslab.com/alt-texts/)
- [Як створити чудовий альтернативний текст | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Розуміння WCAG, пояснення Настанов 1.1](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanovy-1.1-nadannia-netekstovomu-vmistu-tekstovykh-alternatyv)
- [Розуміння критерію успіху 1.1.1 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Впізнання SVG як зображення

У зв'язку з [вадою VoiceOver](https://webkit.org/b/216364) VoiceOver не оголошував коректно зображення SVG як зображення. Слід додавати [`role="img"`](/uk/docs/Web/Accessibility/ARIA/Roles/img_role) до всіх елементів `<img>` з SVG файлами, щоб пересвідчитися, що допоміжні технології коректно оголошують SVG як вміст-зображення.

```html
<img src="webdoky.svg" alt="ВебДоки" role="img" />
```

### Атрибут title

Атрибут [`title`](/uk/docs/Web/HTML/Global_attributes/title) не є прийнятною заміною атрибута `alt`. Крім того, слід уникати дублювання значення атрибута `alt` в атрибуті `title`, оголошеному на тому самому зображенні. Це призвело б до того, що певні читачі з екрана оголосили б один і той же текст двічі, спантеличуючи користувачів.

Атрибут `title` також не слід використовувати як додатковий підпис, що супроводжує опис зображення в `alt`. Якщо зображення потребує підпису, слід використовувати елементи [`figure`](/uk/docs/Web/HTML/Element/figure) і [`figcaption`](/uk/docs/Web/HTML/Element/figcaption).

Значення атрибута `title` зазвичай представляють користувачеві як спливну підказку, котра з'являється невдовзі після того, як курсор зупиняється над зображенням. Хоч це _може_ надати користувачеві додаткову інформацію, не слід виходити з припущення, що користувач таку підказку побачить: користувач може мати лише клавіатуру або лише сенсорний екран. Якщо певна інформація точно є важливою чи цінною для користувача, її слід вбудувати за допомогою одного зі способів, перелічених вище, а не атрибута `title`.

- [Використання атрибута HTML title – оновлено | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Приклади

### Альтернативний текст

Наступний приклад вбудовує в сторінку зображення і включає альтернативний текст для потреб доступності.

```html
<img src="favicon144.png" alt="ВебДоки" />
```

{{EmbedLiveSample('alternatyvnyi-tekst', '100%', '160')}}

### Посилання-зображення

Цей приклад заснований на попередньому, він показує, як перетворити зображення на посилання. Щоб це зробити, слід помітити тег `<img>` всередину {{HTMLElement("a")}}. Слід описати в альтернативному тексті ресурс, на котрий вказує посилання, так, як це було б зроблено із текстовим посиланням.

```html
<a href="https://webdoky.org">
  <img src="favicon144.png" alt="Відвідайте ВебДоки" />
</a>
```

{{EmbedLiveSample('posylannia-zobrazhennia', '100%', '160')}}

### Використання атрибута srcset

В цьому прикладі є атрибут `srcset` із вказівкою на версію логотипа з високою роздільністю; вона буде завантажена замість зображення `src` на пристроях з високою роздільною здатністю. Зображення `src` рахується як кандидат `1x` на тих {{glossary("User agent", "користувацьких агентах")}}, що підтримують `srcset`.

```html
<img src="favicon72.png" alt="ВебДоки" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("vykorystannia-atrybuta-srcset", "100%", "160")}}

### Використання атрибутів srcset і sizes

Атрибут `src` ігнорується {{glossary("User agent", "користувацькими агентами")}}, що підтримують `srcset`, коли включені дескриптори `w`. Коли дає збіг умова медіа `(max-width: 600px)`, то завантажується зображення ширини 200 (це те зображення, що найближче до умови `200px`), інакше – завантажується інше зображення.

```html
<img
  src="clock-demo-200px.png"
  alt="Поточний час – 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("vykorystannia-atrybutiv-srcset-i-sizes", "100%", 350)}}

> [!NOTE]
> Щоб побачити зміну розміру в дії, {{LiveSampleLink('vykorystannia-atrybutiv-srcset-i-sizes', 'перегляньте приклад на окремій сторінці')}}, щоб мати змогу справді змінити розмір області вмісту.

## Занепокоєння щодо безпеки та приватності

Хоч елементи `<img>` мають безневинні застосування, вони можуть мати небажані наслідки для безпеки й приватності користувачів. Дивіться [Заголовок посилача: занепокоєння щодо приватності й безпеки](/uk/docs/Web/Security/Referer_header:_privacy_and_security_concerns) для отримання докладнішої інформації й шляхів до залагодження.

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
        <a href="/uk/docs/Web/HTML/Content_categories#vbudovanyi-vmist"
          >вбудований вміст</a
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist"
          >дотиковий вміст</a
        >. Якщо елемент має атрибут <code>usemap</code>, то він також є частиною категорії інтерактивного вмісту.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>Жодного; це {{Glossary("void element", "пустий елемент")}}.</td>
    </tr>
    <tr>
      <th scope="row">Упускання тегів</th>
      <td>Мусить починатися з початкового тега і не мати кінцевого тега.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>Будь-який елемент, що приймає вбудований вміст.</td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <ul>
          <li>
            з непорожнім атрибутом <code>alt</code> чи без
            атрибута <code>alt</code>:
            <code
              ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            з порожнім атрибутом <code>alt</code>:
            <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"
              ><code>presentation</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <ul>
          <li>
            з непорожнім атрибутом <code>alt</code>:
            <ul>
              <li>
                <code
                  ><a
                    href="/uk/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/uk/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/uk/docs/Web/Accessibility/ARIA/Roles/switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/tab_Role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/uk/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            з порожнім атрибутом <code>alt</code> – <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a> або <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            без атрибута <code>alt</code> – жодна <code>role</code> не дозволена
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLImageElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Елементи {{HTMLElement("picture")}}, {{HTMLElement("object")}} і {{HTMLElement("embed")}}
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}} й {{cssxref("image-resolution")}} – властивості, пов'язані з зображеннями.
- Інтерфейс {{domxref("HTMLImageElement")}} для цього елемента
- [Зображення HTML](/uk/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Тип файлу зображення й настанови щодо форматів](/uk/docs/Web/Media/Guides/Formats/Image_types)
- [Чуйні зображення](/uk/docs/Web/HTML/Responsive_images)
