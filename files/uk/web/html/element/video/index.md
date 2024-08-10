---
title: <video> – елемент вбудованого відео
slug: Web/HTML/Element/video
page-type: html-element
browser-compat: html.elements.video
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<video>`** вставляє в документ мультимедійний програвач, що підтримує відтворення відео. Також `<video>` можна використовувати для аудіо, однак елемент {{HTMLElement("audio")}} може запропонувати більш відповідний для цього користувацький досвід.

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

Приклад вище показує просте використання елемента `<video>`. Подібно до елемента {{htmlelement("img")}}, шлях до мультимедійного ресурсу, котрий треба показати, вказується як значення атрибута `src`; можна вказати інші атрибути, щоб задати інформацію типу ширини й висоти відео, чи потрібно його автоматично відтворювати й зациклювати, чи треба показувати усталені в браузері контрольні засоби відео тощо.

Вміст між тегами `<video></video>` виводиться як запасний варіант у тих браузерах, що не підтримують цього елемента.

## Атрибути

Подібно до всіх решти елементів HTML, цей елемент підтримує [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Булів атрибут; коли вказаний, то відео автоматично починає відтворення, щойно може зробити це без зупинки для закінчення завантаження даних.

    > [!NOTE]
    > Сучасні браузери блокують автоматичне відтворення аудіо (та відео з незаглушеною аудіодоріжкою), адже сайти, що автоматично відтворюють аудіо, можуть бути неприємними для користувачів. Дивіться додаткову інформацію про те, як правильно користуватися автоматичним відтворенням, у нашому [посібнику з автоматичного відтворення](/uk/docs/Web/Media/Autoplay_guide)

    Щоб вимкнути автоматичне відтворення відео, `autoplay="false"` не спрацює; відео автоматично заграє, якщо цей атрибут присутній на тегу `<video>` взагалі. Щоб прибрати автоматичне відтворення, цей атрибут повинен бути прибраний взагалі.

- `controls`
  - : Якщо присутній цей атрибут, то браузер запропонує користувачеві контрольні засоби для керування відтворенням відео, в тому числі гучністю, перемоткою та паузою-відновленням відтворення.
- `controlslist`

  - : Атрибут [`controlslist` (англ.)](https://wicg.github.io/controls-list/explainer.html), бувши вказаним, допомагає браузеру обрати, які контрольні елементи показати на елементі `video`, коли браузер показує власний набір контрольних елементів (тобто коли вказаний атрибут `controls`).

    Дозволені значення: `nodownload`, `nofullscreen` і `noremoteplayback`.

    Використовуйте атрибут [`disablepictureinpicture`](#disablepictureinpicture) при потребі вимкнути режим картинки-в-картинці (і контрольні елементи).

- [`crossorigin`](/uk/docs/Web/HTML/Attributes/crossorigin)

  - : Цей [перелічений](/uk/docs/Glossary/Enumerated) атрибут вказує, чи треба використовувати для отримання відповідного відео CORS. [Ресурси, що дозволяють CORS](/uk/docs/Web/HTML/CORS_enabled_image), можуть бути перевикористані в елементі {{HTMLElement("canvas")}}, не бувши _ославленими_. Дозволеними значеннями є:

    - `anonymous`
      - : Надсилає запит на інше походження без авторизації. Інакше кажучи, надсилає заголовок HTTP `Origin:` без реп'яшка, сертифіката X.509 чи виконання базової автентифікації HTTP. Якщо сервер не надає походженню сайту даних авторизації (не встановлюючи заголовок HTTP `Access-Control-Allow-Origin:`), то ресурс буде _ославлений_, а його використання – обмежено.
    - `use-credentials`
      - : Посилає запит на інше походження з авторизацією. Інакше кажучи, надсилає заголовок HTTP `Origin:` з реп'яшком, сертифікатом чи виконанням базової автентифікації HTTP. Якщо сервер не надає походженню сайту даних авторизації (за допомогою заголовка HTTP `Access-Control-Allow-Credentials:`), то ресурс буде _ославлений_, а його використання – обмежено.

    Коли цього атрибута немає, ресурс отримується без запиту CORS (тобто без надсилання заголовка HTTP `Origin:`), запобігаючи його неославленому використанню в елементах {{HTMLElement('canvas')}}. Якщо значення недійсне, то це працює так, ніби використано ключове слово `anonymous`. Дивіться [атрибути налаштувань CORS](/uk/docs/Web/HTML/Attributes/crossorigin) для отримання додаткової інформації.

- `disablepictureinpicture`
  - : Запобігає тому, щоб браузер пропонував контекстне меню картинки-в-картинці чи, у певних випадках, автоматично запитував картинку-в-картинці.
- `disableremoteplayback`

  - : Булів атрибут, що використовується для вимкнення можливості віддаленого відтворення на пристроях, що під'єднані за допомогою провідних (HDMI, DVI тощо) та безпровідних технологій (Miracast, Chromecast, DLNA, AirPlay тощо).

    У Safari як запасний варіант можна використати [`x-webkit-airplay="deny"` (англ.)](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html).

- `height`
  - : Висота області відтворення відео, задана в [пікселях CSS (англ.)](https://drafts.csswg.org/css-values/#px) (приймаються лише абсолютні значення; [жодних відсотків (англ.)](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Булів атрибут; коли вказаний, браузер автоматично перемотуватиме на початок після досягнення кінця відео.
- `muted`
  - : Булів атрибут, що вказує усталене налаштування заглушення для аудіо, включеного у відео. Якщо встановлений, то аудіо спершу буде заглушене. Усталене значення – `false`, тому аудіо буде відтворено разом з відтворенням відео.
- `playsinline`
  - : Булів атрибут, що вказує, що відео повинно бути відтворено "вбудованим", тобто в межах області відтворення елемента. Зверніть увагу, що відсутність цього атрибута _не_ означає, що відео завжди буде відтворено в повноекранному режимі.
- `poster`
  - : URL зображення, що буде показано, поки відео стягується. Якщо цей атрибут не вказаний, то нічого не буде показано, поки не буде доступний перший кадр, а потім – як кадр анонсу буде показаний перший кадр.
- `preload`

  - : Цей {{Glossary("enumerated", "перелічений")}} атрибут повинен надавати пораду браузерові про те, що, як вважає автор, приведе до найкращого користувацького досвіду щодо того, який вміст завантажений до відтворення відео. Може мати одне з наступних значень:

    - `none`: Вказує, що відео не повинно бути завантажено попередньо.
    - `metadata`: Вказує, що попередньо отримуються лише метадані (наприклад, тривалість).
    - `auto`: Вказує, що може бути стягнуто все відео, навіть якщо не очікується, що користувач ним скористається.
    - _порожній рядок_: Синонім значення `auto`.

    Усталене значення відрізняється в різних браузерах. Специфікація радить, щоб це було `metadata`.

    > [!NOTE]
    >
    > - Атрибут `autoplay` має пріоритет над `preload`. Якщо вказаний `autoplay`, то, очевидно, браузер буде змушений почати завантажувати відео, аби його відтворити.
    > - Специфікація не змушує браузер виконувати вказівку цього атрибута; це радше порада.

- `src`
  - : URL відео, що має бути вбудоване. Цей атрибут необов'язковий; натомість для вказівки, яке відео вбудовувати, можна використати елемент {{HTMLElement("source")}} всередині блока `<video>`.
- `width`
  - : Ширина області відтворення відео, задана в [пікселях CSS (англ.)](https://drafts.csswg.org/css-values/#px) (приймаються лише абсолютні значення; [жодних відсотків (англ.)](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Події

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ім'я події</th>
      <th scope="col">Коли вилітає</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}} {{Deprecated_Inline}}
      </td>
      <td>
        Буфер введення {{DOMxRef("ScriptProcessorNode")}} готовий до обробки
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
      </td>
      <td>
        Браузер може відтворити мультимедійний об'єкт, але робить оцінку, що наразі завантажено недостатньо даних для відтворення від початку до кінця без пауз для буферизації вмісту.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
      </td>
      <td>
        Браузер робить оцінку, що може відтворити мультимедійний об'єкт від початку до кінця без пауз для буферизації вмісту.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("OfflineAudioContext.complete_event", "complete")}}
      </td>
      <td>
        Візуалізація {{DOMxRef("OfflineAudioContext")}} припинена.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
      </td>
      <td>Атрибут <code>duration</code> оновився.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
      </td>
      <td>
        Мультимедійний об'єкт став порожнім; наприклад, ця подія надсилається, якщо мультимедійний об'єкт вже був завантажений (або завантажений частково), і для його перезавантаження був викликаний метод
        <a href="/uk/docs/Web/API/HTMLMediaElement/load" rel="internal"
          ><code>load()</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ended_event", 'ended')}}
      </td>
      <td>Відтворення зупинилося, бо був досягнутий кінець мультимедійного об'єкта.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.error_event", 'error')}}
      </td>
      <td>
        Помилка сталася під час отримання медіаданих, або ж тип
        ресурсу не є підтримуваним форматом медіа.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>Завантаження першого кадра мультимедійного об'єкта було завершене.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
      </td>
      <td>Метадані були завантажені.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
      </td>
      <td>Спрацьовує, коли браузер розпочинає завантаження ресурсу.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.pause_event", 'pause')}}
      </td>
      <td>Відтворення було призупинено.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.play_event", 'play')}}
      </td>
      <td>Відтворення розпочалося.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.playing_event", 'playing')}}
      </td>
      <td>
        Відтворення готово розпочатися, бувши призупиненим чи відкладеним через нестачу даних.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.progress_event", 'progress')}}
      </td>
      <td>Періодично вилітає по ходу завантаження ресурсу браузером.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
      </td>
      <td>Темп відтворення змінився.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
      </td>
      <td>Операція <em>seek</em> була завершена.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
      </td>
      <td>Операція <em>seek</em> розпочалася.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
      </td>
      <td>
        Користувацький агент намагається отримати мультимедійні дані, але ці дані неочікувано не надходять.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
      </td>
      <td>Завантаження мультимедійних даних було тимчасово припинено.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
      </td>
      <td>
        Час, вказаний атрибутом <code>currentTime</code>, був оновлений.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
      </td>
      <td>Гучність змінилася.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
      </td>
      <td>Відтворення було зупинене через тимчасову нестачу даних.</td>
    </tr>
  </tbody>
</table>

## Примітки щодо використання

Браузери не підтримують однакові формати відео; можна надати декілька джерел всередині вкладених елементів {{htmlelement("source")}}, і тоді браузер використає перший формат, котрий розуміє.

```html
<video controls>
  <source src="myVideo.webm" type="video/webm" />
  <source src="myVideo.mp4" type="video/mp4" />
  <p>
    Ваш браузер не підтримує відео HTML. Ось натомість
    <a href="myVideo.mp4" download="myVideo.mp4">посилання на відео</a>.
  </p>
</video>
```

Ми пропонуємо змістовний і вичерпний [посібник з типів мультимедійних файлів](/uk/docs/Web/Media/Formats) і [посібник щодо кодеків, котрі підтримуються для відео](/uk/docs/Web/Media/Formats/Video_codecs). Також доступний посібник з [аудіокодеків, які можна з ними використовувати](/uk/docs/Web/Media/Formats/Audio_codecs).

Інші примітки щодо використання:

- Якщо не вказати атрибута `controls`, то відео не включатиме усталених контрольних елементів браузера; можна створити власні контрольні елементи за допомогою JavaScript й API {{domxref("HTMLMediaElement")}}. Дивіться [Створення кросбраузерного програвача відео](/uk/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) для отримання подробиць.
- Щоб дати змогу контролювати відео (та аудіо) вміст з високою точністю, `HTMLMediaElement` викидає багато різних [подій](/uk/docs/Web/API/HTMLMediaElement#podii). На додачу до надання контрольованості, ці події дають змогу контролювати прогрес як стягнення, так і відтворення мультимедійного об'єкта, а також стан та позицію відтворення.
- Для прилаштування позиціонування відео всередині рамок елемента можна використовувати властивість {{cssxref("object-position")}}, а для контролю того, як розмір відео припасовується для вміщення в рамки – {{cssxref("object-fit")}}.
- Для демонстрації разом з відео субтитрів можна використати трохи JavaScript разом з елементом {{htmlelement("track")}} і форматом [WebVTT](/uk/docs/Web/API/WebVTT_API). Дивіться [Додавання до відео HTML підписів та субтитрів](/uk/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) для отримання додаткової інформації.
- За допомогою елемента `<video>` можна відтворювати аудіо. Це може бути корисним, якщо, наприклад, треба відтворювати аудіо вкупі з розшифровкою [WebVTT](/uk/docs/Web/API/WebVTT_API), оскільки елемент {{HTMLElement("audio")}} не дозволяє субтитрів WebVTT.
- Щоб перевірити запасний вміст у браузерах, що підтримують елемент, можна замінити `<video>` вигаданим елементом, наприклад, `<notavideo>`.

Добрим загальним джерелом інформації про використання HTML `<video>` є підручник для початківців [Відео й аудіо вміст](/uk/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content).

### Стилізація за допомогою CSS

Елемент `<video>` є заміщеним елементом: його значення {{cssxref("display")}} усталено дорівнює `inline`, але його усталені ширина й висота в області перегляду визначаються відео, що вбудовується.

Особливих міркувань щодо стилізації `<video>` немає; загальною стратегією є надати йому властивість `display` зі значенням `block`, щоб йому було легше задати розташування, розмір тощо, а потім надати стилізацію та інформацію про компонування, як необхідно. Певні методи стилізації наведено в [основах стилізації програвача відео](/uk/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics).

### Додавання титрів та інших хронометрованих текстових доріжок

Хронометровані текстові доріжки з титрами, закритими субтитрами, заголовками розділів і так далі можна декларативно додавати, вкладаючи їх в елемент {{HTMLElement("track")}}.

Доріжки задаються у [Форматі файлів текстових доріжок вебвідео (WebVTT)](/uk/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (файлах `.vtt`).

Наприклад, HTML нижче додає файл "captions.vtt", що вживатиметься для накладання закритих субтитрів на відео, якщо субтитрування буде ввімкнено користувачем.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Хронометровані текстові доріжки також можна додавати програмно, користуючись [API WebVTT](/uk/docs/Web/API/WebVTT_API).

### Відстеження додавання й вилучення доріжок

Додавання й видалення доріжок з елемента `<video>` можна відстежувати за допомогою подій {{domxref("VideoTrackList/addtrack_event", "addtrack")}} і {{domxref("VideoTrackList/removetrack_event", "removetrack")}}. Втім, ці події не надсилаються до самого елемента `<video>`.

Натомість вони надсилаються до об'єкта списку доріжок всередині {{domxref("HTMLMediaElement")}} елемента `<video>`, що відповідає типу доріжки, котра була додана:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : {{domxref("AudioTrackList")}}, що містить усі аудіодоріжки мультимедійного елемента.
    Додайте до цього об'єкта слухач `addtrack`, щоб отримати сповіщення, коли до елемента будуть додані нові аудіодоріжки.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : A {{domxref("VideoTrackList")}}, що вміщає усі відеодоріжки медійного елемента.
    Додайте до цього об'єкта слухач `addtrack`, щоб отримати сповіщення, коли до елемента будуть додані нові відеодоріжки.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : {{domxref("TextTrackList")}}, що вміщає усі текстові доріжки медійного елемента (які використовуються як титри, закриті субтитри й так далі).
    Додайте до цього об'єкта слухач `addtrack`, щоб отримати сповіщення, коли до елемента будуть додані текстові доріжки.

Наприклад, для відстеження додавання чи вилучення з елемента `<video>` доріжок аудіо можна використати код типу наступного:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Цей код стежить за додаванням та вилученням з елемента доріжок аудіо і викликає гіпотетичну функцію на редакторі доріжок, щоб зареєструвати та вилучити доріжку зі списку доступних доріжок редактора.

Також для слухання подій {{domxref("VideoTrackList/addtrack_event", "addtrack")}} і {{domxref("VideoTrackList/removetrack_event", "removetrack")}} можна використати {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

### Серверна підтримка відео

Якщо тип MIME відео не був коректно заданий на сервері, то відео може не бути показане чи показати сіру рамку з X (якщо JavaScript увімкнений).

Якщо для подачі відео WebM використовується Apache Web Server, то цю проблему можна вирішити шляхом додавання до типу MIME `video/webm` розширень типу файлу відео (найпоширеніше розширення файлу WebM – `.webm`). Щоб це зробити, відредагуйте файл `mime.types` в `/etc/apache` або використайте директиву конфігурації `AddType` в `httpd.conf`.

```plain
AddType video/webm .webm
```

Вебхостинг може надавати зручний інтерфейс конфігурування змін для нових технологій, поки природним чином не станеться глобальне оновлення.

## Доступність

Відео повинні пропонувати як субтитри, так і стенограми, що з точністю описують їхній вміст (читайте більше про те, як це реалізувати, в [Додаванні субтитрів і титрів до відео HTML](/uk/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)). Субтитри дають змогу тим, хто має проблеми зі слухом, розуміти звуковий вміст відео під час його відтворення, тоді як стенограми дозволяють тим, хто потребує додаткового часу, сприймати аудіовміст у зручних для себе темпі та форматі.

Варто зазначити, що хоч і можна субтитрувати суто звуковий вміст, це можливо лише при відтворенні аудіо в елементі `<video>`, оскільки область відео в елементі використовується для подачі субтитрів. Це один з особливих сценаріїв, коли корисно відтворювати аудіо в елементі відео.

Якщо використовуються служби автоматичного субтитрування, важливо перевіряти згенерований вміст, аби пересвідчитись щодо точного відображення ним вихідного відео.

На додачу до усних розмов, субтитри та стенограми також повинні містити позначення музики та звукових ефектів, що передають важливу інформацію. Серед такої інформації – емоції та тон:

```plain
14
00:03:14 --> 00:03:18
[Драматична рокмузика]
15
00:03:19 --> 00:03:21
[шепотом] Що це там, удалині?
16
00:03:22 --> 00:03:24
Це… це…
16 00:03:25 --> 00:03:32
[Гучне гуркотіння]
[Брязкіт посуду]
```

Субтитри не повинні затуляти суть відео. Їх можна позиціонувати за допомогою [налаштування cue VTT `align`](/uk/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#nalashtuvannia-cue).

- [Формат текстових доріжок вебвідео (WebVTT)](/uk/docs/Web/API/WebVTT_API)
- [WebAIM – Субтитри, стенограми та описи аудіо](https://webaim.org/techniques/captions/)
- [MDN Розуміння WCAG, пояснення Настанови 1.2](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanova-1-2-nadannia-tekstovykh-alternatyv-chasozalezhnym-nosiiam)
- [Розуміння критерію успіху 1.2.1 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Розуміння критерію успіху 1.2.2 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Приклади

### Одне джерело

Цей приклад, бувши активованим, відтворює відео, надаючи користувачеві усталені елементи контролю відео для контролю відтворення.

#### HTML

```html
<!-- Простий приклад відео -->
<!-- 'Big Buck Bunny' ліцензовано Blender foundation під CC 3.0. Розміщено на archive.org -->
<!-- Анонс із peach.blender.org -->
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Вибачте, ваш браузер не підтримує вбудовані відео, але не турбуйтесь, ви
  можете
  <a href="https://archive.org/details/BigBuckBunny_124">його стягнути</a> і
  переглянути в улюбленому програвачі відео!
</video>
```

#### Результат

{{EmbedLiveSample('odne-dzherelo', '', '400')}}

Поки відео починає відтворення, на його місці виводиться зображення, надане атрибутом `poster`. Якщо браузер не підтримує відтворення відео – він виводить запасний текст.

### Декілька джерел

Цей приклад заснований на попередньому, але пропонує три різні джерела мультимедійних даних; це дає змогу переглядати відео незалежно від того, які кодеки відео підтримує браузер

#### HTML

```html
<!-- Використання декількох джерел як запасних варіантів для тега video -->
<!-- 'Elephants Dream' від Orange Open Movie Project Studio, ліцензовано під CC-3.0, розміщено на archive.org -->
<!-- Анонс розміщено на Wikimedia -->
<video
  width="620"
  controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi" />
  <source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4" />

  Вибачте, Ваш браузер не підтримує вбудованих відео, але не переймайтесь: Ви
  можете
  <a
    href="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    download="ed_1024_512kb.mp4">
    стягнути файл MP4
  </a>
  і переглянути його в своєму улюбленому програвачі відео!
</video>
```

#### Результат

{{EmbedLiveSample('dekilka-dzherel', '', '400')}}

Спершу виконується спроба відтворити AVI. Якщо це не вдається, то [MP4](/uk/docs/Web/Media/Formats/Containers#mpeg-4_mp4). Запасне повідомлення виводиться, якщо елемент video не підтримується, але не тоді, коли всі джерела не спрацьовують.

Певні типи мультимедійних файлів дають змогу надати більш конкретну інформацію за допомогою параметра [`codecs`](/uk/docs/Web/Media/Formats/codecs_parameter) як частини рядка типу файлу. Відносно простий приклад – `video/webm; codecs="vp8, vorbis"`; він вказує, що файл – це відео [WebM](/uk/docs/Web/Media/Formats/Containers#webm) з використанням [VP8](/uk/docs/Web/Media/Formats/Video_codecs#vp8) для самого відео й [Vorbis](/uk/docs/Web/Media/Formats/Audio_codecs#vorbis) для аудіо.

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories">Категорії вмісту</a>
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">Потоковий вміст</a>, оповідальний вміст, вбудований вміст. Якщо має атрибут <a href="#controls"><code>controls</code></a>: інтерактивний вміст і дотиковий вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <p>
          Якщо елемент має атрибут <a href="#src"><code>src</code></a>:
          нуль чи більше елементів {{HTMLElement("track")}}, за якими прозорий вміст, що не містить мультимедійних елементів, тобто жодних {{HTMLElement("audio")}} чи <code>&lt;video&gt;</code>.
        </p>
        <p>
          Інакше: нуль чи більше елементів {{HTMLElement("source")}}, за якими нуль чи більше елементів {{HTMLElement("track")}}, за якими прозорий вміст, що не містить мультимедійних елементів, тобто жодних {{HTMLElement("audio")}} чи <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>Будь-який елемент, що приймає вбудований вміст.</td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Відповідної ролі немає (англ.)</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLVideoElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Настанови щодо типів та форматів мультимедіа у вебі](/uk/docs/Web/Media/Formats)

  - [Формати контейнерів мультимедіа (типи файлів)](/uk/docs/Web/Media/Formats/Containers)
  - [Настанови щодо кодеків вебвідео](/uk/docs/Web/Media/Formats/Video_codecs)
  - [Настанови щодо кодеків вебаудіо](/uk/docs/Web/Media/Formats/Audio_codecs)

- Позиціонування та розмір картинки всередині її рамок: {{cssxref("object-position")}} і {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [Використання аудіо й відео HTML](/uk/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Взаємодія з відео за допомогою полотна](/uk/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Налаштування серверів для мультимедійних даних Ogg](/uk/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
