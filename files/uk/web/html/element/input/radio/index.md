---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
page-type: html-element
browser-compat: html.elements.input.type_radio
---

{{HTMLSidebar}}

Елементи {{htmlelement("input")}} типу **`radio`** зазвичай використовуються у **радіогрупах** – колекціях радіокнопок, що описують набір пов'язаних варіантів.

Лише одна радіокнопка з даної групи може бути водночас вибраною. Радіокнопки зазвичай зображаються як маленькі кружечки, котрі є зафарбованими чи підсвіченими, коли вибрані.

{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}

Радіокнопками їх звуть, тому що вони схожі за виглядом і працюють подібно до натисних кнопок в старих радіоприймачах, таких, як зображений нижче.

![Показує, який вигляд у старі часи мали радіокнопки.](old-radio.jpg)

> **Примітка:** [Поля з галочками](/uk/docs/Web/HTML/Element/input/checkbox) подібні до радіокнопок, але мають важливу особливість: радіокнопки задумані для вибору з асортименту одного значення, натомість поля з галочками дають змогу по одному вмикати й вимикати значення. Коли присутні декілька контрольних елементів, радіокнопки дозволяють вибрати одну із них, натомість поля з галочками дають змогу вибрати декілька значень.

## Значення

Атрибут `value` є рядком, що містить значення радіокнопки. Це значення ніколи не демонструється користувачу {{Glossary("user agent", "користувацьким агентом")}}. Замість цього воно використовується, щоб визначити, яка радіокнопка з групи була вибрана.

### Окреслення радіогрупи

Радіогрупа окреслюється шляхом задання кожній радіокнопці групи однакового значення атрибута [`name`](/uk/docs/Web/HTML/Element/input#name-imia). Щойно задана радіогрупа, вибір будь-якої радіокнопки з цієї групи автоматично скасовуватиме вибір будь-якої до того вибраної радіокнопки тієї ж групи.

На сторінці можна мати стільки радіогруп, скільки заманеться, але за умови, що кожна з них має власне унікальне значення `name`.

Наприклад, якщо формі потрібно запитати користувача щодо бажаного способу зв'язку, можна створити три радіокнопки, кожна з яких матиме властивість `name` зі значенням `contact`, але значення однієї з них буде `email`, другої – `phone`, а третьої – `mail`. Користувач ніколи не побачить значень `value` чи `name` (якщо ви самотужки не додасте коду, що їх покаже).

У підсумку HTML матиме наступний вигляд:

```html
<form>
  <fieldset>
    <legend>Будь ласка, оберіть бажаний спосіб зв'язку:</legend>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">Електронна пошта</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Телефон</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Пошта</label>
    </div>
    <div>
      <button type="submit">Надіслати</button>
    </div>
  </fieldset>
</form>
```

Тут три радіокнопки, кожна з яких має атрибут `name` зі значенням `contact`, але всі вони – з унікальними значеннями `value`, що однозначно вказують на певну радіокнопку групи. Також вони мають унікальні {{domxref("Element.id", "id")}}, що їх використовує атрибут [`for`](/uk/docs/Web/HTML/Element/label#for) елемента {{HTMLElement("label")}}, аби пов'язати позначки з радіокнопками.

Можна спробувати приклад нижче:

{{EmbedLiveSample('okreslennia-radiohrupy', 600, 130)}}

### Представлення даних у радіогрупі

Коли форму вище подають із вибраною радіокнопкою, дані форми включають запис у вигляді `contact=value`. Наприклад, якщо користувач клацнув радіокнопку "Телефон", а тоді подав форму, то дані форми включатимуть рядок `contact=phone`.

Якщо упустити з HTML атрибут `value`, то подана форма присвоює групі значення `on`. В такому випадку якщо користувач клацнув на варіант "Телефон" і подав форму, то результівні дані форми будуть `contact=on`, що не є корисним. Тож не слід забувати вказувати значення атрибутів `value`!

> **Примітка:** Якщо при поданні форми жодна радіокнопка не є вибраною, то радіогрупа взагалі не включається в подані дані форми, оскільки немає значення, котре можна було б передати.

Доволі непоширеним є рішення дозволяти подачу форми із радіогрупою, жодна радіокнопка котрої не є вибраною, тож зазвичай доцільно одну радіокнопку робити відразу в стані `checked`. Дивіться розділ [Усталений вибір кнопки](#ustalenyi-vybir-radioknopky) нижче.

Додаймо до прикладу трошки коду, щоб можна було дослідити дані, згенеровані формою. До форми HTML доданий блок {{HTMLElement("pre")}} для виводу в нього даних форми:

```html
<form>
  <fieldset>
    <legend>Будь ласка, оберіть бажаний спосіб зв'язку:</legend>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">Електронна пошта</label>
      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Телефон</label>
      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Пошта</label>
    </div>
    <div>
      <button type="submit">Надіслати</button>
    </div>
  </fieldset>
</form>
<pre id="log"></pre>
```

Потім додається трохи [JavaScript](/uk/docs/Web/JavaScript), щоб встановити слухач події {{domxref("HTMLFormElement/submit_event", "submit")}}, котра спрацьовує, коли користувач натискає кнопку "Надіслати":

```js
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);
```

Спробуйте цей приклад – і побачите, що група `contact` ніколи не дає більше одного значення.

{{EmbedLiveSample("predstavlennia-danykh-u-radiohrupi", 600, 130)}}

## Додаткові атрибути

На додачу до загальних атрибутів, притаманних всім елементам {{HTMLElement("input")}}, поля `radio` на додачу підтримують наступні:

- `checked`

  - : Булів атрибут, котрий, коли присутній, вказує, що радіокнопка є вибраною.

    На відміну від інших браузерів, Firefox усталено [зберігає динамічний стан позначеності (англ.)](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) поля `<input>` між завантаженнями сторінки. Використовуйте атрибут [`autocomplete`](/uk/docs/Web/HTML/Element/input#autocomplete), щоб контролювати цю функціональність.

- `value`

  - : Атрибут `value` поділяють всі поля {{HTMLElement("input")}}; втім, для полів типу `radio` він має особливе призначення: коли подається форма, то лише ті радіокнопки, що є позначеними, подаються на сервер, і їх надіслане значення – значення атрибута `value`. Якщо ж атрибут `value` не вказаний, то його значення усталено вважається рівним `on`. Це показано в розділі [Значення](#znachennia) вище.

- [`required`](/uk/docs/Web/HTML/Attributes/required)
  - : Атрибут `required` поділяє більшість типів {{HTMLElement("input")}}. Якщо будь-яка з радіокнопок однієї групи має атрибут `required`, то одна з радіокнопок такої групи мусить бути позначеною, проте це не обов'язково повинна бути саме та, що має атрибут.

## Використання радіополів

Фундаментальні основи радіокнопок розкриті вище. Тепер – погляд на інші поширені пов'язані з радіокнопками особливості та техніки, що можуть знадобитися.

### Усталений вибір радіокнопки

Щоб зробити радіокнопку усталено вибраною, слід включити в неї атрибут `checked`, як показано в цій переглянутій версії попереднього прикладу:

```html
<form>
  <fieldset>
    <legend>Будь ласка, оберіть бажаний спосіб зв'язку:</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">Електронна пошта</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Телефон</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Пошта</label>
    </div>
    <div>
      <button type="submit">Надіслати</button>
    </div>
  </fieldset>
</form>
```

{{EmbedLiveSample('ustalenyi-vybir-radioknopky', 600, 130)}}

В такому випадку перша радіокнопка є усталено вибраною.

> **Примітка:** Якщо додати атрибут `checked` до більш ніж однієї радіокнопки, то наступні зневажатимуть попередні; отже, вибраною буде остання з `checked` радіокнопок. Так відбувається через те, що лише одна радіокнопка в групі може бути водночас вибраною, і користувацький агент автоматично скасовуватиме попередній вибір щоразу, коли нова радіокнопка отримуватиме позначку.

### Забезпечення радіокнопкам більшої зони активації

У прикладах вище можна помітити, що радіокнопка може бути вибрана шляхом клацання пов'язаного з нею елемента {{htmlelement("label")}}, а не тільки самої радіокнопки. Ця справді корисна особливість підписів форм HTML спрощує користувачам вибір бажаних варіантів, особливо на пристроях з малими екранами, наприклад, смартфонах.

Крім доступності, це іще одна добра причина як слід задавати своїм формам елементи `<label>`.

## Валідація

У разі радіокнопки із заданим на ній атрибутом [`required`](/uk/docs/Web/HTML/Attributes/required), або групи однойменних радіокнопок, у якій щонайменше на одній з кнопок є `required`, радіокнопка повинна бути вибрана, щоб такий контрольний елемент вважався валідним. Якщо жодна з радіокнопок не позначена, властивість [`valueMissing`](/uk/docs/Web/API/ValidityState/valueMissing) об'єкта {{domxref("ValidityState")}} поверне під час валідації `true`, і браузер попросить користувача обрати один з варіантів.

## Оформлення радіополів

Наступний приклад показує трохи більш закінчену версію прикладу, що використовується в цій статті, із певним додатковим оформленням та кращою семантикою, заданою шляхом використання спеціалізованих елементів. HTML має наступний вигляд:

```html
<form>
  <fieldset>
    <legend>Будь ласка, оберіть бажаний спосіб зв'язку:</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">Електронна пошта</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Телефон</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Пошта</label>
    </div>
    <div>
      <button type="submit">Надіслати</button>
    </div>
  </fieldset>
</form>
```

Залучений у цьому прикладі CSS – дещо більш істотний:

```css
html {
  font-family: sans-serif;
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  margin-right: 15px;
  line-height: 32px;
}

input {
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

button,
legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}

button:hover,
button:focus {
  color: #999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
```

Найбільш помітною тут є властивість {{cssxref("appearance")}} (з префіксами, необхідними для підтримки певних браузерів). Усталено радіокнопки (і [поля з галочкою](/uk/docs/Web/HTML/Element/input/checkbox)) оформлюються нативними стилями операційної системи для відповідних контрольних елементів. Вказуючи `appearance: none`, можна повністю усунути це нативне оформлення і створити для них власні стилі. Тут використані {{cssxref("border")}}, {{cssxref("border-radius")}} і {{cssxref("transition")}}, щоб створити приємну живу анімацію радіокнопки. Зверніть увагу також на те, як для задання стилю вибраної радіокнопки застосовується псевдоклас {{cssxref(":checked")}}.

> **Примітка:** При охоті використати властивість {{cssxref("appearance")}} її слід дуже обережно тестувати. Хоч вона підтримується в більшості сучасних браузерів, її реалізація широко різниться. У старіших браузерах навіть ключове слово `none` не має узгодженого ефекту між різними браузерами, а певні з них не підтримують його узагалі. В найновіших браузерах відмінностей менше.

{{EmbedLiveSample('oformlennia-radiopoliv', 600, 120)}}

Зверніть увагу на те, що при клацанні радіокнопки, коли дві кнопки міняють стан, присутній приємний плавний ефект появи-зникнення. На додачу до цього, стиль та забарвлення легенди й кнопки подання – видозмінені, щоб мати суттєвий контраст. Це може бути не таким виглядом, який хотілось би мати в реальному вебзастосунку, зате показує доступні можливості.

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#znachennia">Значення</a></strong></td>
      <td>
        Рядок, що представляє значення радіокнопки
      </td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} та {{domxref("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Підтримувані загальні атрибути</strong></td>
      <td>
        <code><a href="#checked">checked</a></code
        >, <code><a href="#value">value</a></code> та
        <code
          ><a href="/uk/docs/Web/HTML/Attributes/required">required</a></code
        >
      </td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td><code>checked</code> і <code>value</code></td>
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
      <td>
        <code><a href="/uk/docs/Web/Accessibility/ARIA/Roles/radio_role">radio</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement("input")}} й інтерфейс {{domxref("HTMLInputElement")}}, що його реалізовує.
- {{domxref("RadioNodeList")}}: інтерфейс, що описує список радіокнопок
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
