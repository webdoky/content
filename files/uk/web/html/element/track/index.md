---
title: "<track> – елемент вбудованої текстової доріжки"
slug: Web/HTML/Element/track
page-type: html-element
browser-compat: html.elements.track
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<track>`** (доріжка) використовується як дочірній елемент медійних елементів – {{HTMLElement("audio")}} та {{HTMLElement("video")}}. Він дає змогу задати синхронізовані текстові доріжки (або дані, що залежать від часу), наприклад, для автоматичного формування титрів. Такі доріжки мають [формат WebVTT](/uk/docs/Web/API/WebVTT_API) (файли `.vtt`) – текстових доріжок вебвідео (Web Video Text Tracks).

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>Жодних</td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>Жодного; це {{Glossary("void element", "пустий елемент")}}.</td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>
        Оскільки це пустий елемент, то початковий тег повинен бути присутнім, а кінцевий – відсутнім.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        <p>
          Медійний елемент, {{HTMLElement("audio")}} або {{HTMLElement("video")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Немає відповідної ролі</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Жодної дозволеної ролі</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `default`
  - : Цей атрибут вказує на те, що ця доріжка повинна бути ввімкнена, якщо налаштування користувача не вказують на те, що інша доріжка є більш відповідною. Він може бути використаний лише на одному елементі `track` для кожного медійного елемента.
- `kind`

  - : Те, як текстова доріжка має бути використана. Якщо цей атрибут пропущено, то усталений різновид – `subtitles`. Якщо він містить недійсне значення, то буде використано `metadata` (версії Chrome, старші ніж 52, обробляли недійсне значення як `subtitles`). Дозволені наступні ключові слова:

    - `subtitles`

      - Титри вміщають переклад вмісту, який глядач не може зрозуміти. Наприклад, мовлення чи текст не українською мовою в україномовному фільмі.
      - Титри можуть містити додатковий вміст, зазвичай додаткову інформацію про фон. Наприклад, текст на початку фільмів «Зоряні війни», або дату, час і місце дії.

    - `captions`

      - Закриті субтитри надають транскрипцію та, можливо, переклад аудіо.
      - Вони можуть містити важливу невербальну інформацію, таку як характер музики чи звукові ефекти. Можуть вказувати на джерело сигналу (наприклад, музика, текст, персонаж).
      - Підходять для глухих користувачів або тоді, коли звук вимкнено.

    - `descriptions`

      - Текстовий опис відеовмісту.
      - Підходять для незрячих користувачів або тоді, коли відео не можна побачити.

    - `chapters`

      - Заголовки розділів призначені для використання тоді, коли користувач орієнтується в медійному ресурсі.

    - `metadata`

      - Доріжки, що використовуються сценаріями. Не видимі для користувача.

- `label`
  - : Доступний для користувачів заголовок текстової доріжки, який використовується браузером при переліку доступних текстових доріжок.
- `src`
  - : Адреса доріжки (файлу `.vtt`). Повинна бути дійсним URL. Цей атрибут повинен бути вказаний, а його значення URL повинно мати те саме походження, що й поточний документ – якщо батьківський елемент елемента `track` – {{HTMLElement("audio")}} або {{HTMLElement("video")}} – не має атрибута [`crossorigin`](/uk/docs/Web/HTML/Attributes/crossorigin).
- `srclang`
  - : Мова текстових даних доріжки. Вона повинна бути дійсним тегом мови згідно з [BCP 47](https://r12a.github.io/app-subtags/). Якщо атрибут `kind` має значення `subtitles`, то `srclang` повинен бути визначений.

## Примітки щодо застосування

### Типи даних доріжок

Тип даних, які `track` додає до медіа, задається в атрибуті `kind`, який може приймати значення `subtitles`, `captions`, `descriptions`, `chapters` або `metadata`. Елемент вказує на вихідний файл, що містить синхронізований текст, який браузер використовує, коли користувач вимагає додаткових даних.

Медійний елемент не може мати більше одного елемента `track` з однаковими значеннями `kind`, `srclang` і `label`.

### Відстеження змін сигналів

Базовий {{domxref("TextTrack")}}, на котрий вказує властивість {{domxref("HTMLTrackElement.track", "track")}}, отримує подію `cuechange` кожного разу, коли наразі представлений сигнал змінюється. Це відбувається навіть тоді, коли доріжка не пов'язана з медійним елементом.

Якщо доріжка _є_ пов'язаною з медійним елементом, використовуючи елемент {{HTMLElement("track")}} як дочірній елемент {{HTMLElement("audio")}} або {{HTMLElement("video")}}, то подія `cuechange` також надсилається до {{domxref("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

## Приклади

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="uk" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="uk" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="uk" label="Key Stage 3" />
  <!-- Fallback -->
  …
</video>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Формат текстових доріжок WebVTT](/uk/docs/Web/API/WebVTT_API)
- {{domxref("HTMLMediaElement.textTracks")}}
