---
title: "<dialog>: Діалоговий елемент"
slug: Web/HTML/Element/dialog
page-type: html-element
browser-compat: html.elements.dialog
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<dialog>`** представляє діалогове віконце або інший інтерактивний компонент, такий як віконце попередження, інспектор або підвікно.

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

> **Застереження:** Атрибут `tabindex` не повинен використовуватися на елементі `<dialog>`.

- `open`
  - : Позначає те, що діалог активний і з ним можна взаємодіяти. Коли атрибут `open` не задано, діалог _не повинен_ бути показаний користувачу.
    Рекомендовано використовувати для візуалізації діалогів методи `.show()` або `.showModal()`, а не атрибут `open`. Якщо `<dialog>` відкрито за допомогою атрибуту `open`, він буде немодальним.

## Міркування щодо доступності

Нативний елемент HTML `<dialog>` повинен використовуватися при створенні модальних діалогів, адже він надає користь та доступність, котрі довелось би відтворити самотужки, якщо використовувати для подібних потреб інші елементи. Для візуалізації діалогів слід використовувати відповідні методи `.showModal()` і `.show()`. Якщо створюється власна реалізація діалогу, слід переконатися, що підтримується вся очікувана типова поведінка, а також дотримуватися рекомендацій щодо правильних підписів.

При реалізації діалогу важливо подумати про найдоцільніше місце для передачі користувацького фокуса. Якщо явно позначити початкову позицію фокуса, за допомогою атрибута [autofocus](/uk/docs/Web/HTML/Global_attributes/autofocus), то це допоможе пересвідчитись, що початковий фокус заданий на елементі, що вважається найкращим місцем початкового фокуса для певного діалогу. Якщо виникають сумніви, оскільки не завжди відомо, де можна задати початковий фокус всередині діалогу, особливо для випадків, коли вміст діалогу динамічно візуалізується при його закликанні, то, якщо потрібно, розробники можуть вирішити, що сам елемент `<dialog>` – найкраще місце для початкового фокуса. При використанні {{domxref("HTMLDialogElement.showModal()")}} для відкриття `<dialog>`, фокус задається на першому вкладеному фокусовному елементі.

Слід пересвідчитись, що користувачам надано механізм для закриття діалогу. Найнадійніший спосіб забезпечити можливість закриття діалогу для всіх користувачів – це додати для цього явну кнопку. Наприклад, кнопку підтвердження, скасування або закриття, якщо це відповідає ситуації. Крім того, для тих, хто використовує пристрій з клавіатурою, очікується, що модальні діалоги можна закрити за допомогою клавіші <kbd>Escape</kbd>. Усталено `<dialog>`, викликаний методом `.showModal()`, дозволяє закриття за допомогою клавіші <kbd>Escape</kbd>. Немодальний діалог усталено не закривається за допомогою клавіші <kbd>Escape</kbd>, і, залежно від того, що він представляє, це може бути небажаним. Якщо відкрито кілька модальних діалогів, клавіша <kbd>Escape</kbd> повинна закривати лише діалог, показаний останнім. При використанні `<dialog>` така поведінка надається браузером.

Браузери видають елемент `<dialog>` подібно до саморобних діалогів, що використовують атрибут ARIA [role="dialog"](/uk/docs/Web/Accessibility/ARIA/Roles/dialog_role). Елементи `<dialog>`, закликані методом `showModal()`, неявно мають [aria-modal="true"](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-modal), а елементи `<dialog>`, закликані методом `show()`, як і візуалізовані з атрибутом `open` або шляхом зміни усталеного `display` елемента `<dialog>`, будуть видані як `[aria-modal="false"]`. При реалізації модальних діалогів усе, крім елемента `<dialog>` та його вмісту, повинно бути візуалізовано як неактивне, за допомогою атрибута [`inert`](/uk/docs/Web/HTML/Global_attributes/inert). При використанні `<dialog>` вкупі з методом `HTMLDialogElement.showModal()` така поведінка надається браузером.

## Примітки щодо застосування

- Елементи {{HTMLElement("form")}} можуть закривати `<dialog>`, якщо мають атрибут `method="dialog"`, або якщо кнопка, що використовується для подання форми, має `formmethod="dialog"`. У такому випадку стан контрольних елементів форми зберігається та не подається, `<dialog>` закривається, а властивість {{domxref("HTMLDialogElement.returnValue", "returnValue")}} отримує значення `value` кнопки, що використовувалася для збереження стану форми.
- Псевдоелемент CSS {{cssxref('::backdrop')}} можна використовувати для оформлення задника, що виводиться за елементом `<dialog>`, коли діалог виводиться за допомогою {{domxref("HTMLDialogElement.showModal()")}}. Наприклад, щоб затінити недоступний вміст за модальним діалогом.

## Приклади

### Простий приклад

Наступний приклад візуалізує немодальний, або безмодальний, діалог. Кнопка «OK» дає змогу закрити діалог при її активації.

```html
<dialog open>
  <p>Вітання кожному та всім!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Результат

{{EmbedLiveSample("prostyi-pryklad", "100%", 200)}}

У зв'язку з тим, що цей діалог був відкритий за допомогою атрибута `open`, він є немодальним. У цьому прикладі, коли діалог закривається, не надається жодний метод, щоб знову його відкрити. Краще відкривати діалоги за допомогою {{domxref("HTMLDialogElement.show()")}}, ніж перемикати булів атрибут `open`.

### Поглиблений приклад

Цей приклад відкриває модальний діалог, коли активована кнопка "Показати діалог". Цей діалог містить форму з елементом {{HTMLElement("select")}} та двома елементами {{HTMLElement("button")}}, які усталено мають `type="submit"`. Оновлення значення `<select>` оновлює значення кнопки "підтвердити". Це значення – [`returnValue`](/uk/docs/Web/API/HTMLDialogElement/returnValue). Якщо діалог закривається за допомогою клавіші <kbd>Esc</kbd>, значення повернення відсутнє. При закритті діалогу значення повернення відображається під кнопкою "Показати діалог".

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
      <button id="confirmBtn" value="default">Надіслати</button>
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

// Кнопка "Підтвердити" викликає подію "close" на діалозі – у зв'язку з [formmethod="dialog"]
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "Немає значення повернення."
      : `Значення повернення: ${favDialog.returnValue}.`; // Необхідно перевіряти на "default", а не на порожній рядок
});
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Ми не хочемо подавати цю несправжню форму
  favDialog.close(selectEl.value); // Тут необхідно надіслати значення віконця вибору.
});
```

### Результат

{{EmbedLiveSample("pohlyblenyi-pryklad", "100%", 300)}}

Цей модальний діалог може бути закритий трьома способами. Для користувачів клавіатури, модальні діалоги можуть бути закриті за допомогою клавіші <kbd>Esc</kbd>. У цьому прикладі, кнопка "Скасувати" закриває діалог за допомогою методу форми `dialog`, а "Надіслати" закриває діалог за допомогою методу {{domxref("HTMLDialogElement.close()")}}.
Кнопка "Скасувати" має атрибут [`formmethod="dialog"`](/uk/docs/Web/HTML/Element/input/submit#formmethod), який відкидає типове значення {{HTTPMethod("GET")}} атрибута [`method`](/uk/docs/Web/HTML/Element/form#method) елемента {{HTMLElement("form")}}. Коли метод форми – [`dialog`](#prymytky-shchodo-zastosuvannia), стан форми зберігається, а не подається, і діалог закривається.
Коли `action` немає, подання форми з усталеним методом {{HTTPMethod("GET")}} призводить до перезавантаження сторінки. Тут використовується JavaScript, щоб запобігти поданню та закрити діалог за допомогою методів {{domxref("event.preventDefault()")}} і {{domxref("HTMLDialogElement.close()")}} відповідно.

Важливо надавати механізм закриття в кожному елементі `dialog`. Клавіша <kbd>Esc</kbd> усталено не закриває немодальні діалоги, і не можна виходити з того, що користувач взагалі має доступ до фізичної клавіатури (наприклад, це може бути користувач пристрою з сенсорним екраном, без доступу до клавіатури).

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

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Подія {{domxref("HTMLDialogElement/close_event", "close")}}
- Подія {{domxref("HTMLDialogElement/cancel_event", "cancel")}}
- [Посібник з форм HTML](/uk/docs/Learn/Forms).
- Псевдоелемент {{cssxref("::backdrop")}}
- [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)
