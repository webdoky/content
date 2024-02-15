---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
page-type: html-element
browser-compat: html.elements.input.type_checkbox
---

{{HTMLSidebar}}

Елементи {{htmlelement("input")}} типу **`checkbox`** (поле для галочки) усталено зображаються як прямокутники, котрі отримують позначку (галочку), схоже до того, що можна побачити в офіційних бланках документів. Конкретний вигляд залежить від налаштувань операційної системи, на котрій працює браузер. Зазвичай це квадрат, але в такого квадрата бувають скруглені кути. Поле для галочки дає змогу обрати (або не обрати) для подання у формі прості значення.

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Примітка:** [Радіокнопки](/uk/docs/Web/HTML/Element/input/radio) схожі на поля позначок, але мають важливу відмінність: [однойменні радіокнопки](/uk/docs/Web/HTML/Element/input/radio#okreslennia-radiohrupy) групуються так, щоб лише одна радіокнопка була водночас обрана, натомість поля для галочки дають змогу включати й виключати окремі означення. Коли існують декілька однойменних контрольних елементів, радіокнопки дозволяють лише одній з них бути ввімкненою, а поля для галочки дозволяють вибір декількох значень.

## Значення

Рядкове представлення значення поля галочки. Воно не показується на боці клієнта, але на сервері саме це значення буде передано разом із даними, поданими за `name` поля для галочки. Погляньмо на наступний приклад:

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews">Оформити підписку?</label>
  </div>
  <div>
    <button type="submit">Підписатися</button>
  </div>
</form>
```

У цьому прикладі маємо атрибут `name` зі значенням `subscribe`, а також атрибут `value` із `newsletter`. Коли подається форма, то пара ключ-значення із даними буде `subscribe=newsletter`.

Якщо атрибут `value` опущений, то усталеним значенням поля буде `on`, тож подані дані в такому випадку будуть `subscribe=on`.

> **Примітка:** Якщо поле для галочки пусте при подачі форми, то на сервер не подаються ані назва, ані значення. Не існує суто HTML метода для подавання непозначеного стану поля для галочки (виду `value=unchecked`). При потребі подати усталене значення поля, коли воно пусте, можна використати JavaScript для створення всередині форми {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} зі значенням, що позначає пустий стан.

## Додаткові атрибути

На додачу до [загальних атрибутів](/uk/docs/Web/HTML/Element/input#atrybuty), котрі поділяють всі елементи {{HTMLElement("input")}}, поля "`checkbox`" підтримують наступні:

- `checked`

  - : Це [булів](/uk/docs/Glossary/Boolean/HTML) атрибут, що вказує, чи має поле галочку спочатку (при завантаженні сторінки). Воно _не_ вказує, чи є поле порожнім наразі: якщо стан поля зміниться, цей атрибут вмісту не відобразить змін. (Оновиться лише IDL атрибут {{domxref("HTMLInputElement")}}'а `checked`ʼ.)
    > **Примітка:** На відміну від інших полів введення, значення поля для галочки включається у дані подання лише якщо поле позначено (`checked`). Якщо воно таким є, то значення атрибута `value` стає значенням поля у формі, а якщо цього атрибута немає – значенням стає `on`.
    > На відміну від інших браузерів, Firefox усталено [зберігає динамічний стан галочки (англ.)](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) поля між завантаженнями сторінки. Використовуйте для контролю цього функціоналу атрибут [`autocomplete`](/uk/docs/Web/HTML/Element/input#autocomplete).

- `value`

  - : Атрибут `value` поділяють всі {{HTMLElement("input", "елементи введення")}}; проте у полів типу `checkbox` він має особливе призначення: коли форма подається, то лише ті поля для галочки, котрі на той час мають галочку, подаються на сервер, і відповідним їх значенням є значення атрибута `value`. Якщо атрибут `value` не вказаний, то він вважається рівним рядкові `on`. Це показано у розділі [Значення](#znachennia) вище.

## Використання полів для галочки

Найбазовіше використання полів для галочки показано вище. Тепер час поглянути на решту необхідних функціоналу та технік, пов'язаних із галочками.

### Обробка декількох полів для галочки

Приклад, представлений вище, містив лише одне поле; в реальних ситуаціях ймовірніше зустріти декілька полів для галочки. Якщо вони цілком непов'язані, то можна просто обробляти їх окремо, як показано вище. Утім, якщо вони всі пов'язані між собою, то все не так просто.

Наприклад, у наступній демонстрації є декілька полів для галочки, щоб дати користувачеві змогу обрати свої інтереси (дивіться повну версію в розділі [Приклади](#pryklady)).

```html
<fieldset>
  <legend>Оберіть свої інтереси</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">Програмування</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Музика</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('obrobka-dekilkokh-poliv-dlia-halochky', 600, 100)}}

В цьому прикладі, як бачите, кожне поле для галочки отримало однакове значення атрибута `name`. Якщо обидва поля мають галочку при поданні форми, то рядок пар ключ-значення, поданий на сервер, буде схожим на отакий: `interest=coding&interest=music`. Коли цей рядок отримає сервер, треба буде розібрати його не як асоціативний масив, щоб були враховані усі значення за ключем `interest`, а не тільки останнє. Для прикладу – одна з технік, що використовується на Python: [Обробка декількох полів для галочки з однією серверною змінною (англ.)](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Усталена галочка в полях

Щоб додати до поля галочку усталено, йому слід задати атрибут `checked`:

```html
<fieldset>
  <legend>Оберіть свої інтереси</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
    <label for="coding">Програмування</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Музика</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('ustalena-halochka-v-poliakh', 600, 100)}}

### Забезпечення полям для галочки більших зон реагування

У прикладах вище можна помітити, що поле для галочки можна перемкнути, натиснувши на пов'язаний з ним елемент {{htmlelement("label")}}, як і на саме поле. Це справді корисна особливість підписів форм HTML, що полегшує клацання бажаного варіанту, особливо на пристроях з малими екранами, типу смартфонів.

Крім доступності, це іще одна добра причина як слід оформлювати елементи `<label>` у своїх формах.

### Поля для галочок з невизначеним станом

На додачу до присутності й відсутності галочки, є третій стан, в котрому може бути таке поле: **невизначений**. Це стан, в котрому неможливо з'ясувати, є елемент позначеним чи ні. Він встановлюється за допомогою властивості `indeterminate` об'єкта {{domxref("HTMLInputElement")}} об'єкта, через JavaScript (за допомогою атрибута HTML встановити не можна):

```js
inputInstance.indeterminate = true;
```

Поле для галочки, що перебуває в невизначеному стані, у більшості випадків має замість галочки у своїй рамці горизонтальну лінію (щось типу дефіса чи знаку мінуса).

Ця властивість має небагато випадків застосування. Найпоширеніший – коли поле "володіє" низкою підваріантів (що також є полями для галочки). Якщо усі підваріанти – обрані, то поле-власник також має галочку, а якщо всі вони галочки не мають, то поле-власник також є порожнім. Якщо один чи більше підваріантів мають інший стан, ніж решта, то поле-власник перебуває в невизначеному стані.

Це можна побачити в прикладі нижче (дякуємо [CSS Tricks (англ.)](https://css-tricks.com/indeterminate-checkboxes/) за натхнення). У цьому прикладі відстежуються інгредієнти при зборі рецепта. Коли обирають чи скасовують вибір інгредієнта, функція JavaScript перевіряє загальне число обраних інгредієнтів:

- Якщо жодний не обраний, то поле імені рецепта не має галочки.
- Якщо обрані один чи два, то поле імені отримує невизначений стан.
- Якщо обрані всі три, то поле імені отримує галочку.

Тож у цьому випадку стан `indeterminate` використовується для демонстрації того, що збір інгредієнтів почався, але рецепт ще не зібраний.

```js
const overall = document.querySelector("#enchantment");
const ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const ingredient of ingredients) {
  ingredient.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  let checkedCount = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```

{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}

> **Примітка:** Якщо подати форму з полем для галочки у невизначеному стані, то відбудеться те саме, що і коли поле не має галочки: жодні дані не представлятимуть поле у поданій формі.

## Валідація

Поля для галочки підтримують [валідацію](/uk/docs/Web/HTML/Constraint_validation) (доступну всім елементам {{HTMLElement("input")}}). Втім, більшість значень {{domxref("ValidityState")}} завжди буде `false`. Якщо таке поле має атрибут [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi), але не має галочки, то {{domxref("ValidityState.valueMissing")}} буде `true`.

## Приклади

Наступний приклад – розширена версія наведеного вище прикладу "декількох полів для галочки": має більше стандартних варіантів, а на додачу – поле "інше", котре, отримуючи галочку, призводить до появи текстового поля для введення "іншого" варіанту. Це досягнуто за допомогою звичайного блоку коду на JavaScript. Цей приклад також включає неявні підписи, тобто `<input>` розташовані безпосередньо всередині `<label>`. Текстове поле, що не має видимого підпису, має атрибут [`aria-label`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-label), що містить доступну назву поля. Також приклад містить трохи CSS для покращення оформлення.

### HTML

```html
<form>
  <fieldset>
    <legend>Оберіть свої інтереси</legend>
    <div>
      <label>
        <input type="checkbox" id="coding" name="interest" value="coding" />
        Програмування
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="music" name="interest" value="music" />
        Музика
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="art" name="interest" value="art" />
        Мистецтво
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="sports" name="interest" value="sports" />
        Спорт
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="cooking" name="interest" value="cooking" />
        Куховарство
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="other" name="interest" value="other" />
        Інше
      </label>
      <input
        type="text"
        id="otherValue"
        name="other"
        aria-label="Інші інтереси" />
    </div>
    <div>
      <button type="submit">Подати форму</button>
    </div>
  </fieldset>
</form>
```

### CSS

```css
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}
```

### JavaScript

```js
const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
```

{{EmbedLiveSample('pryklady', '100%', 300)}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#znachennia">Значення</a></strong></td>
      <td>
        Рядок, що представляє значення поля для галочки.
      </td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} та {{domxref("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Підтримувані загальні атрибути</strong></td>
      <td><code>checked</code></td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td>
        <code><a href="#checked">checked</a></code>,
        <code><a href="#indeterminate">indeterminate</a></code> і
        <code><a href="#value">value</a></code>
      </td>
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
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}} – селектори CSS, що дають змогу оформлювати поля для галочки на основі їхнього поточного стану
- {{domxref("HTMLInputElement")}} – API DOM HTML, що реалізовує елемент `<input>`
- [Таблиця сумісності властивостей CSS з контрольними елементами форм](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
