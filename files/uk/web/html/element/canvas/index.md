---
title: <canvas> – Елемент полотна графіки
slug: Web/HTML/Element/canvas
page-type: html-element
browser-compat: html.elements.canvas
---

{{HTMLSidebar}}

**Елемент HTML `<canvas>`** (полотно) слід використовувати для малювання графіки та анімацій, або вкупі з [API сценаріїв полотна](/uk/docs/Web/API/Canvas_API), або з [API WebGL](/uk/docs/Web/API/WebGL_API).

## Атрибути

Цей елемент, крім перелічених нижче, приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `height`
  - : Висота координатного простору в пікселях CSS. Усталено – 150.
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : Дозволяє полотну знати, чи буде фактором прозорість. Якщо полотно знає, що прозорості немає, то можна оптимізувати продуктивність малювання. Це підтримується лише браузерами на основі Mozilla; замість цього атрибута використовуйте стандартизований виклик методу {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}}.
- `width`
  - : Ширина координатного простору в пікселях CSS. Усталено – 300.

## Примітки щодо використання

### Альтернативний вміст

Усередині блоку `<canvas>` слід надати альтернативний вміст. Цей вміст буде візуалізовано як в старіших браузерах, що не підтримують полотна, так і в браузерах з вимкненим JavaScript.

### Кінцевий тег `</canvas>`

На відміну від елемента {{HTMLElement("img")}}, елемент {{HTMLElement("canvas")}} **вимагає** кінцевого тега (`</canvas>`).

### Розмір полотна за допомогою CSS або HTML

Виведений розмір полотна можна змінити за допомогою CSS, але якщо це зробити, то зображення буде масштабовано під час візуалізації, щоб вписатися в стилізований розмір, що може зробити остаточне візуалізоване зображення спотвореним.

Краще задавати розміри полотна, задаючи атрибути `width` і `height` безпосередньо для елементів `<canvas>`, або безпосередньо в HTML, або за допомогою JavaScript.

### Максимальний розмір полотна

Точний максимальний розмір елемента `<canvas>` залежить від браузера та оточення. Попри те, що в більшості випадків максимальні розміри перевищують 10 000 x 10 000 пікселів, наприклад, пристрої iOS обмежують розмір полотна лише 4096 x 4096 пікселів. Дивіться [обмеження розміру полотна в різних браузерах та пристроях](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> **Примітка:** Перевищення максимальних розмірів або площі робить полотно непридатним для використання: команди малювання не працюватимуть.

### Застосування позаекранного полотна

Полотно може бути візуалізовано за допомогою API {{domxref("OffscreenCanvas")}}, в якому документ і полотно – розділені.
Перевага такого підходу – те, що візуалізацією полотна може зайнятися [воркерний потік](/uk/docs/Web/API/Web_Workers_API/Using_web_workers), а головний потік вебзастосунку не блокується операціями з полотном.
Завдяки паралелізації роботи решта елементів інтерфейсу вебзастосунку надалі будуть реагувати, навіть коли на позаекранному полотні виконуються складні графічні операції.
Більше інформації – в документації API {{domxref("OffscreenCanvas")}}.

## Доступність

### Альтернативний вміст

Елемент `<canvas>` сам по собі є лише бітовим зображенням і не надає інформації про будь-які намальовані об'єкти. Вміст полотна не відображається в інструментах доступності, як це відбувається з семантичним HTML. Загалом, слід уникати використання полотен у доступних вебсайтах та застосунках. Наступні посібники можуть допомогти зробити полотно більш доступним.

- [Ситуації для застосування доступності полотен](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Проблеми доступності елемента полотна](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [Доступність полотна HTML у Firefox 13 – від Стіва Фолкнера](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Найкращі практики інтерактивних елементів полотна](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Приклади

### HTML

Цей фрагмент коду додає елемент полотна до HTML-документа. Надається запасний текст, на випадок, якщо браузер не може прочитати або візуалізувати полотно.

```html
<canvas width="120" height="120">
  Альтернативний текст, що описує те, що показує полотно.
</canvas>
```

### JavaScript

Потім, у коді JavaScript, викликається {{domxref("HTMLCanvasElement.getContext()")}}, щоб отримати контекст малювання та почати малювати на полотні:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// Додати на (10, 10) прямокутник з розмірами 100x100 пікселів
ctx.fillRect(10, 10, 100, 100);
```

### Результат

{{EmbedLiveSample('pryklady', 600, 150)}}

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
        >, відчутний вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        Прозорий вміст, але жодних нащадків
        <a
          href="/uk/docs/Web/HTML/Content_categories#interaktyvnyi-vmist"
          >інтерактивного вмісту</a
        >, окрім елементів {{HTMLElement("a")}},
        елементів {{HTMLElement("button")}},
        елементів {{HTMLElement("input")}}, чий атрибут
        <a href="/uk/docs/Web/HTML/Element/input#type-typ"><code>type</code></a> має значення
        <code>checkbox</code>, <code>radio</code> або <code>button</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Всі елементи, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        >.
      </td>
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
      <td>Усі</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLCanvasElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [API полотен](/uk/docs/Web/API/Canvas_API)
- [Підручник з полотен](/uk/docs/Web/API/Canvas_API/Tutorial)
- [OffscreenCanvas](/uk/docs/Web/API/OffscreenCanvas)
- [Шпаргалка з полотен](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html) (2009)
- [Шпаргалка з полотен](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf) (pdf) (2015)
- [Посібник з полотен HTML у Safari](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) від Apple (2013)
- [Двовимірний контекст малювання `CanvasRenderingContext2D` для елемента полотна](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) від Apple.com
- API [WebGL](/uk/docs/Web/API/WebGL_API)
- {{HTMLElement("img")}}
- [SVG](/uk/docs/Web/SVG)
- [Використання аудіо та відео HTML](/uk/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
