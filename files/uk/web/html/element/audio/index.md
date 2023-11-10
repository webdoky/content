---
title: "<audio>: The Embed Audio element"
slug: Web/HTML/Element/audio
page-type: html-element
browser-compat: html.elements.audio
---

{{HTMLSidebar}}

Елемент **`<audio>`** [HTML](/uk/docs/Web/HTML) використовується для вбудовування звукового контенту в документи. Він може містити одне або кілька аудіо джерел, представлених за допомогою атрибута `src` або елемента {{HTMLElement("source")}}: браузер вибере найбільш підхожий. Він також може приймати потокове медіа, використовуючи {{domxref("MediaStream")}}.

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

Приклад вище демонструє просте використання елемента **`<audio>`**. Подібно до елемента {{htmlelement("img")}}, шлях до медіа для вбудування включається в атрибут `src`; можна включити й інші атрибути, щоб задати інформацію штибу того, чи потрібно, щоб звук автоматично відтворювався і повторювався, чи потрібно показати типові елементи керування аудіо від браузера тощо.

Вміст між початковим та кінцевим тегами `<audio></audio>` виводиться як запасний варіант у тих браузерах, що не підтримують цей елемент.

## Атрибут

Серед атрибутів цього елемента – [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Булів атрибут: коли він заданий, то аудіо буде автоматично починати відтворення, як тільки це можливо, не чекаючи завершення завантаження всього аудіофайлу.

    > **Примітка:** Сайти, що автоматично відтворюють аудіо (або відео з доріжкою аудіо), можуть бути неприємними для користувачів, тому цього слід уникати, якщо можливо. Якщо ви все ж хочете надати функціональність автоматичного відтворення, то повинні зробити це лише доступним варіантом (вимагаючи від користувача спеціально ввімкнути це). Проте така можливість може бути корисною при створенні елементів медіа, джерело яких буде задано пізніше, під контролем користувача. Дивіться додаткову інформацію про те, як правильно використовувати автоматичне відтворення, у нашому [посібнику з автоматичного відтворення](/uk/docs/Web/Media/Autoplay_guide).

- `controls`

  - : Якщо цей атрибут присутній, то браузер надасть елементи керування, що дозволять користувачу керувати відтворенням аудіо, включно з гучністю, перемотуванням та паузою й продовженням відтворення.

- `controlslist` {{experimental_inline}}{{non-standard_inline}}

  - : Атрибут [`controlslist`](https://wicg.github.io/controls-list/explainer.html), коли заданий, допомагає браузерові обрати, які елементи керування показувати для елемента `audio`, коли браузер показує свій власний набір елементів керування (тобто коли заданий атрибут `controls`).

    Дозволені значення – `nodownload`, `nofullscreen` і `noremoteplayback`.

- `crossorigin`

  - : Цей [перелічений](/uk/docs/Glossary/Enumerated) атрибут позначає те, чи потрібно використовувати CORS для отримання пов'язаного аудіофайлу. [Ресурси, що підтримують CORS](/uk/docs/Web/HTML/CORS_enabled_image), можуть бути використані повторно в елементі {{HTMLElement("canvas")}}, не ставши _ославленими_. Дозволені значення:

    - `anonymous`
      - : Надсилає запит до іншого походження без відповідних облікових даних. Іншими словами, він надсилає HTTP-заголовок `Origin:` без реп'яшка, сертифіката X.509 і HTTP-автентифікації. Якщо сервер не надає облікові дані для сайту походження (не задаючи заголовок HTTP `Access-Control-Allow-Origin:`), то ресурс буде _ославленим_, і його використання буде обмеженим.
    - `use-credentials`
      - : Надсилає запит до іншого походження з обліковими даними. Іншими словами, він надсилає HTTP-заголовок `Origin:` з реп'яшком, сертифікатом X.509 або HTTP-автентифікацією. Якщо сервер не надає облікові дані для сайту походження (не задаючи заголовок HTTP `Access-Control-Allow-Credentials:`), то ресурс буде _ославленим_, і його використання буде обмеженим.

    Коли цього атрибута немає, то ресурс отримується без CORS-запиту (тобто без надсилання заголовка HTTP `Origin:`), що запобігає його неославленому використанню в елементах {{HTMLElement('canvas')}}. Якщо значення недійсне, то воно обробляється так, ніби було використано перелічене ключове слово **anonymous**. Більше про це – в [Атрибутах налаштування CORS](/uk/docs/Web/HTML/Attributes/crossorigin).

- `disableremoteplayback` {{experimental_inline}}

  - : Булів атрибут, що використовується для відключення можливості віддаленого відтворення на пристроях, що підключені за допомогою дротових (HDMI, DVI тощо) і бездротових технологій (Miracast, Chromecast, DLNA, AirPlay тощо). Більше інформації – у [цій запропонованій специфікації](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute).

    > **Примітка:** У Safari можна використовувати запасний варіант[`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html).

- `loop`
  - : Булів атрибут: коли він заданий, то аудіопрогравач автоматично перейде на початок, коли досягне кінця аудіофайлу.
- `muted`
  - : Булів атрибут, що вказує на те, чи буде аудіо спочатку заглушено. Усталене значення – `false`.
- `preload`

  - : Цей [перелічений](/uk/docs/Glossary/Enumerated) атрибут призначений для надання браузерові підказки про те, що автор вважає найкращим для користувача. Він може мати одне з наступних значень:

    - `none` – вказує на те, що аудіо не повинно бути завантажене наперед.
    - `metadata` – вказує на те, що потрібно завантажити лише метадані аудіо (наприклад, довжину).
    - `auto` – вказує на те, що весь аудіофайл може бути завантажений, навіть якщо не очікується, що користувач буде його використовувати.
    - _порожній рядок_ – синонім значення `auto`.

    Усталене значення – різне в різних браузерах. Специфікація радить, щоб це було значення `metadata`.

    > **Примітка:**
    >
    > – Атрибут `autoplay` має пріоритет над `preload`. Якщо задано `autoplay`, то браузер очевидно повинен почати завантажувати аудіо для відтворення.
    > – Специфікація не зобов'язує браузер дотримуватися значення цього атрибута; це лише підказка.

- `src`
  - : URL аудіо до вбудування. Це значення підлягає [контролю доступу HTTP](/uk/docs/Web/HTTP/CORS). Цей атрибут необов'язковий: замість нього для задання аудіо до вбудування можна використовувати елемент {{HTMLElement("source")}} всередині блоку audio.

## Події

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Назва події</th>
      <th scope="col">Коли спрацьовує</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}}</td>
      <td>
        Буфер введення {{DOMxRef("ScriptProcessorNode")}} готовий до обробки.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
      </td>
      <td>
        Браузер може відтворити медіа, але вважає, що завантажено недостатньо даних для того, щоб відтворити медіа до кінця без зупинки для подальшої буферизації вмісту.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
      </td>
      <td>
        Браузер вважає, що може відтворити медіа до кінця без зупинки для подальшої буферизації вмісту.
      </td>
    </tr>
    <tr>
      <td>{{domxref("OfflineAudioContext/complete_event", "complete")}}</td>
      <td>
        Візуалізація {{DOMxRef("OfflineAudioContext")}} зупинилася.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
      </td>
      <td>Атрибут <code>duration</code> було оновлено.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
      </td>
      <td>
        Медіа стало порожнім; наприклад, ця подія надсилається, коли медіа вже було завантажено (або частково завантажено), і викликано метод {{domxref("HTMLMediaElement.load")}} для його перезавантаження.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ended_event", 'ended')}}
      </td>
      <td>Відтворення зупинилося, тому що був досягнутий кінець медіа.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>Завершив завантаження перший кадр медіа.</td>
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
      <td>Спрацьовує, коли браузер почав завантажувати ресурс.</td>
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
        Відтворення готове розпочатися після призупинення або відкладення у зв'язку з відсутністю даних.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
      </td>
      <td>Змінився темп відтворення.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
      </td>
      <td>Завершилася операція <em>seek</em> (перемотування).</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
      </td>
      <td>Розпочалася операція <em>seek</em> (перемотування).</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
      </td>
      <td>
        Користувацький агент намагається отримати дані медіа, але вони не надходять, що неочікувано.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
      </td>
      <td>Завантаження даних медіа було призупинено.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
      </td>
      <td>
        Час, заданий атрибутом <code>currentTime</code>, було оновлено.
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
      <td>Відтворення зупинилося у зв'язку з тимчасовою відсутністю даних</td>
    </tr>
  </tbody>
</table>

## Примітки щодо застосування

Не всі браузери підтримують одній й ті самі [типи файлів](/uk/docs/Web/Media/Formats/Containers) та [кодеки аудіо](/uk/docs/Web/Media/Formats/Audio_codecs); можна надати декілька джерел у вкладених елементах {{htmlelement("source")}}, і браузер використає перше, яке зрозуміє:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Стягнути аудіо в форматі <a href="myAudio.mp3">MP3</a> або
    <a href="myAudio.ogg">OGG</a>.
  </p>
</audio>
```

У нас є великий і детальний [посібник щодо типів медіафайлів](/uk/docs/Web/Media/Formats) та [кодеків аудіо, які можна використовувати в цих типах](/uk/docs/Web/Media/Formats/Audio_codecs). Також доступний [посібник щодо кодеків, які підтримуються для відео](/uk/docs/Web/Media/Formats/Video_codecs).

Інші примітки щодо застосування:

- Якщо не задати атрибут `controls`, плеєр аудіо не буде містити типові елементи керування браузера. Однак, можна створити власні елементи керування, за допомогою JavaScript та API {{domxref("HTMLMediaElement")}}.
- Щоб дозволити точне керування вмістом-аудіо, об'єкти `HTMLMediaElement` запускають чимало різних [подій](/uk/docs/Web/API/HTMLMediaElement#podii). Це також надає спосіб відстежувати процес завантаження аудіо, щоб можна було виявити помилки або визначити, коли вже достатньо даних для початку відтворення або обробки.
- Також можна використати [API Web Audio](/uk/docs/Web/API/Web_Audio_API) – для безпосереднього створення та обробки потоків аудіо з коду JavaScript, а не потокового відтворення наявних файлів аудіо.
- Елементи `<audio>` не можуть мати субтитрів або підписів, пов'язаних з ними, як це можуть елементи `<video>`. Корисна інформація про це та обхідні шляхи – в статті Яна Девліна [WebVTT та аудіо](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/).
- Щоб перевірити запасний вміст у браузерах, що підтримують цей елемент, можна замінити `<audio>` на відсутній елемент, наприклад, `<notanaudio>`.

Добре загальне джерело інформації щодо використання `<audio>` HTML – це підручник для початківців [Відео та аудіо вміст](/uk/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content).

### Оформлення засобами CSS

Елемент `<audio>` не має власного візуального виводу, якщо не задати атрибут `controls`, – в такому випадку будуть показані типові елементи керування від браузера.

Усталені контрольні елементи усталено мають значення {{cssxref("display")}} `inline`, і нерідко доброю ідеєю є задати значення `block`, щоб поліпшити керування позиціонуванням та оформленням, якщо немає потреби, щоб ці елементи знаходилися всередині текстового блоку або чогось подібного.

Усталені контрольні елементи можна стилізувати за допомогою властивостей, що впливають на блок як на єдине ціле, тож, наприклад, їм можна задати {{cssxref("border")}} і {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} тощо. Проте не можна стилізувати окремі компоненти всередині плеєра аудіо (наприклад, змінити розмір або піктограми кнопок, шрифт тощо), а крім того, ці елементи відрізняються в різних браузерах.

Щоб отримати сталі вигляд і відчуття в різних браузерах, необхідно створити власні елементи керування; їх можна розмітити та оформити будь-яким зручним способом, а потім за допомогою JavaScript та API {{domxref("HTMLMediaElement")}} підключити їхню функціональність.

Посібник [Основи стилізації плеєра відео](/uk/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics) надає деякі корисні способи стилізації – він написаний у контексті `<video>`, але більшість способів так само застосовні до `<audio>`.

### Відстеження додавання та видалення доріжок

За допомогою подій {{domxref("AudioTrackList/addtrack_event", "addtrack")}} і {{domxref("AudioTrackList/removetrack_event", "removetrack")}} можна відстежувати, коли в елементі `<audio>` додаються та видаляються доріжки. Проте ці події не надсилаються безпосередньо елементові `<audio>`. Замість цього вони надсилаються об'єктові списку доріжок всередині {{domxref("HTMLMediaElement")}} елемента `<audio>`, який відповідає типу доріжки, що додається до елемента:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : Об'єкт {{domxref("AudioTrackList")}}, що містить всі доріжки аудіо елемента медіа. Можна додати до цього об'єкта слухач `addtrack`, щоб отримати звістку про додавання до елемента нових доріжок аудіо.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : Додайте до об'єкта {{domxref("VideoTrackList")}} слухач `addtrack`, щоб отримати звістку про додавання до елемента доріжок відео.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : Додайте до об'єкта {{domxref("TextTrackList")}} слухач подій `addtrack`, щоб отримати звістку про додавання до елемента нових текстових доріжок.

> **Примітка:** Навіть попри те, що це елемент `<audio>`, він все одно має списки відео та текстових доріжок, і насправді може використовуватися для відтворення відео, хоч наслідки для користувацького інтерфейсу можуть бути дивними.

Наприклад, щоб відстежити, коли до елемента `<audio>` додаються або видаляються доріжки аудіо, можна використовувати такий код:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Цей код стежить за доріжками аудіо щодо їх додавання та видалення з елемента, і запускає гіпотетичну функцію редактора доріжок, щоб зареєструвати та видалити доріжку зі списку доступних у редакторі доріжок.

Щоб відстежувати події {{domxref("AudioTrackList/addtrack_event", "addtrack")}} і {{domxref("AudioTrackList/removetrack_event", "removetrack")}}, можна також використовувати {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Приклади

### Базове застосування

Наступний приклад демонструє просте застосування елемента `<audio>` для відтворення файлу OGG. Він автоматично починає відтворення завдяки атрибуту `autoplay` – якщо сторінка має дозвіл на це – а також містить запасний вміст.

```html
<!-- Просте відтворення аудіо -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg">Стягнути аудіо у форматі OGG</a>.
</audio>
```

Деталі про те, як працює автовідтворення, як отримати дозвіл на його використання, а також про те, коли і як його варто використовувати, див. в нашому [посібнику з автовідтворення](/uk/docs/Web/Media/Autoplay_guide).

### Елемент \<audio> з елементом \<source>

Цей приклад задає те, яку аудіодоріжку вбудувати, використовуючи атрибут `src` вкладеного елемента `<source>`, а не безпосередньо на елементі `<audio>`. Завжди корисно включати MIME-тип файлу в атрибут `type`, оскільки так браузер може миттєво визначити, чи здатен він відтворити цей файл, і не витрачати на нього час, якщо ні.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav">Стягнути аудіо у форматі WAV</a>.
</audio>
```

### \<audio> з кількома елементами \<source>

Цей приклад містить кілька елементів `<source>`. Браузер намагається завантажити перший елемент `<source>` (Opus), якщо здатен його відтворити; якщо ні, то переходить до другого (Vorbis), а в кінці – до MP3:

```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

## Занепокоєння щодо доступності

Аудіо з усним діалогом повинно супроводжуватися і субтитрами, і стенограмами, які точно описують його вміст. Субтитри, які задаються за допомогою [WebVTT](/uk/docs/Web/API/WebVTT_API), дають людям з втратою слуху змогу розуміти вміст аудіозапису під час його відтворення, а стенограми дають людям, які потребують додаткового часу, змогу ознайомитися з вмістом запису у темпі та форматі, які зручні для них.

Якщо використовуються автоматичні сервіси субтитрування, важливо переглянути згенерований вміст, аби переконатися, що він точно відображає вихідний аудіофайл.

Безпосередньо елемент `<audio>` не підтримує WebVTT. Доведеться знайти бібліотеку або фреймворк, що надає таку можливість, або написати код для відображення субтитрів самостійно. Одним з варіантів є відтворення аудіо за допомогою елемента {{HTMLElement("video")}}, який підтримує WebVTT.

Крім усних діалогів, субтитри та стенограми також повинні описувати музику та звукові ефекти, які передають важливу інформацію. В тому числі – емоції та інтонації. Наприклад, у WebVTT нижче зверніть увагу на використання квадратних дужок для повідомлення глядачеві інтонації та емоційних відчуттів; це може допомогти задати настрій, який зазвичай передається за допомогою музики, невербальних звуків та важливих звукових ефектів, і т.д..

```plain
1
00:00:00 --> 00:00:45
[Енергійна музика техно]

2
00:00:46 --> 00:00:51
Ласкаво просимо до подкасту Time Keeper! У цьому випуску ми обговорюємо, який швейцарський годинник є наручним швейцарським годинником?

16
00:00:52 --> 00:01:02
[Сміх] Вибачте! Я маю на увазі, який наручний годинник є швейцарським годинником.
```

Крім цього, доброю практикою є надання певного вмісту (наприклад, пряме посилання на завантаження) як запасного варіанта для глядачів, які використовують браузер, в якому елемент `<audio>` не підтримується:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Стягнути аудіо у форматах <a href="myAudio.mp3">MP3</a> або
    <a href="myAudio.ogg">OGG</a>.
  </p>
</audio>
```

- [Формат текстових доріжок вебвідео (WebVTT)](/uk/docs/Web/API/WebVTT_API)
- [WebAIM – Субтитри, стенограми та описи аудіо](https://webaim.org/techniques/captions/
- [MDN Розуміння WCAG, пояснення Настанови 1.2](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanova-1-2-nadannia-tekstovykh-alternatyv-chasozalezhnym-nosiiam)
- [Розуміння критерію успіху 1.2.1 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Розуміння критерію успіху 1.2.2 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

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
        >, оповідальний вміст, вбудований вміст. Якщо елемент має атрибут
        <a href="/uk/docs/Web/HTML/Element/audio#controls"><code>controls</code></a> – інтерактивний вміст та відчутний вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        Якщо елемент має атрибут <a href="/uk/docs/Web/HTML/Element/audio#src"><code>src</code></a>: нуль або більше елементів {{HTMLElement("track")}}, після яких – прозорий вміст, що не містить елементів медіа {{HTMLElement("audio")}} і {{HTMLElement("video")}}.<br />Інакше – нуль або більше елементів {{HTMLElement("source")}}, після яких – нуль або більше елементів {{HTMLElement("track")}}, після яких – прозорий вміст, що не містить елементів медіа {{HTMLElement("audio")}} і {{HTMLElement("video")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>Всі елементи, що приймають вбудований вміст.</td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Немає відповідної ролі</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLAudioElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Технології медіа Вебу](/uk/docs/Web/Media)

  - [Формати контейнерів медіа (типи файлів)](/uk/docs/Web/Media/Formats/Containers)
  - [Посібник з кодеків аудіо, що вживаються у Вебі](/uk/docs/Web/Media/Formats/Audio_codecs)

- [API вебаудіо](/uk/docs/Web/API/Web_Audio_API)
- {{domxref("HTMLAudioElement")}}
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Зона навчання – Аудіо та відео вміст](/uk/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Кросбраузерні основи аудіо](/uk/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics)