---
title: <input type="text">
slug: Web/HTML/Element/input/text
page-type: html-element
browser-compat: html.elements.input.type_text
---

{{HTMLSidebar}}

Елементи {{HTMLElement("input")}} типу **`text`** створюють базові однорядкові текстові поля.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## Значення

Атрибут [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) – це рядок, що містить поточне значення тексту, введеного в текстове поле. Його можна отримати в JavaScript за допомогою властивості {{domxref("HTMLInputElement")}} `value`.

```js
let theText = myTextInput.value;
```

Якщо на поле не накладені обмеження валідації (дивіться більше подробиць в [валідації](#validatsiia)), то значення може бути порожнім рядком (`""`).

## Додаткові атрибути

На додачу до атрибутів, що діють на всіх елементах {{HTMLElement("input")}}, незалежно від їх типу, текстові поля підтримують наступні.

### `list`

Значення атрибута list – це {{domxref("Element.id", "id")}} елемента {{HTMLElement("datalist")}}, розташованого в тому самому документі. Елемент {{HTMLElement("datalist")}} надає список наперед визначених значень, що пропонуються користувачем для поля. Всі значення, що несумісні з [`type`](/uk/docs/Web/HTML/Element/input#type-typ), не включаються в список запропонованих варіантів. Ці варіанти є пропозиціями, а не обов'язковими: користувачі можуть як обирати серед них, так і ввести інше значення.

### `maxlength`

Максимальна довжина рядка (в кодових одиницях UTF-16), котрий користувач може ввести в поле `text`. Це повинно бути ціле числове значення, 0 або більше. Якщо не задано `maxlength`, або якщо задано недійсне значення, то поле `text` не має максимальної довжини. Це значення також повинно бути більшим або рівним значенню `minlength`.

Поле не пройде [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation), якщо довжина введеного в поле тексту перевищує `maxlength` кодових одиниць UTF-16 завдовжки. Валідація обмежень застосовується лише тоді, коли значення змінює користувач.

### `minlength`

Мінімальна довжина рядка (в кодових одиницях UTF-16), котрий користувач може ввести в поле `text`. Це повинно бути невід'ємне ціле числове значення, менше або рівне значенню, заданому `maxlength`. Якщо не задано `minlength`, або якщо задано недійсне значення, то пошукове поле не має мінімальної довжини.

Пошукове поле не пройде [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation), якщо довжина введеного в поле тексту – менша за `minlength` кодових одиниць UTF-16 завдовжки. Валідація обмежень застосовується лише тоді, коли значення змінює користувач.

### `pattern`

Атрибут `pattern`, коли заданий, є регулярним виразом, котрому повинно відповідати [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia), щоб пройти [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation). Це повинен бути дійсний регулярний вираз JavaScript, подібний до тих, що використовуються типом {{jsxref("RegExp")}}, і що задокументовані в нашому [посібнику з регулярних виразів](/uk/docs/Web/JavaScript/Guide/Regular_expressions); при компіляції регулярного виразу задається позначка `'u'`, тож патерн обробляється як послідовність кодових точок Unicode, а не як {{Glossary("ASCII")}}. На кінцях тексту патерну не повинно бути скісних рисок.

Якщо заданий патерн – не заданий або недійсний, то регулярний вираз не застосовується, і цей атрибут цілком ігнорується.

> **Примітка:** Слід використовувати атрибут [`title`](/uk/docs/Web/HTML/Element/input#title-zaholovok), щоб задати текст, котрий більшість браузерів показує як підказку, для пояснення того, яким вимогам повинен відповідати текст, аби відповідати патерну. Також слід додати інший пояснювальний текст поруч.

Дивіться деталі та приклад у розділі [Задання патерну](#zadannia-paternu).

### `placeholder`

Атрибут `placeholder` – це рядок, що надає користувачам стислу підказку щодо того, якого роду інформація очікується в полі. Це повинно бути слово або коротка фраза, що показує очікуваний тип даних, а не пояснювальне повідомлення. Такий текст _не повинен_ містити повернення каретки або розриву рядка.

Якщо вміст контрольного елемента має один напрям письма ({{Glossary("LTR", "зліва направо")}} або {{Glossary("RTL", "справа наліво")}}), а заповнювач треба показати в іншому напрямі, то можна використати в заповнювачі символи двонапрямленого алгоритму форматування Unicode; більше інформації у статті [Як використовувати контрольні символи Unicode у двонапрямленому тексті](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> **Примітка:** Уникайте використання атрибута `placeholder`, якщо це можливо. Він є менш семантично корисним, ніж інші способи пояснення форми, і може призводити до неочікуваних технічних проблем зі вмістом. Більше інформації в [підписах `<input>`](/uk/docs/Web/HTML/Element/input#pidpysy).

### `readonly`

Булів атрибут, котрий, якщо присутній, означає, що користувач не може редагувати поле. Проте `value` цього поля усе ж може бути змінено кодом JavaScript, шляхом безпосереднього присвоєння властивості `value` об'єкта {{domxref("HTMLInputElement")}}.

> **Примітка:** Оскільки таке поле не може мати значення, `required` не діє на поля, на котрих також задано атрибут `readonly`.

### `size`

Атрибут `size` – це числове значення, що вказує на те, якої ширини в символах повинно бути поле введення. Значення цього атрибута повинно бути числом, більшим за нуль, а усталене значення – 20. Оскільки розмір символів буває різний, така ширина може бути, а може й не бути точною, і на її розмірність не варто покладатися; результівне поле може бути вужчим або ширшим за задану кількість символів, залежно від самих цих символів та шрифту (застосованих налаштувань {{cssxref("font")}}).

Це _не_ задає обмеження того, скільки символів користувач може ввести в поле. Це лише приблизно задає те, скільки символів водночас буде видно. Аби задати верхню межу довжини введених даних, слід використовувати атрибут [`maxlength`](#maxlength).

### `spellcheck`

`spellcheck` – це глобальний атрибут, що використовується для позначення того, чи потрібно вмикати для елемента перевірку правопису. Він може використовуватись на будь-якому редагованому вмісті, але тут розглядається специфіка, що стосується застосування `spellcheck` до елементів {{HTMLElement("input")}}. Дозволені значення `spellcheck`:

- `false`
  - : Вимкнути перевірку правопису для цього елемента.
- `true`
  - : Ввімкнути перевірку правопису для цього елемента.
- "" (порожній рядок) або без значення
  - : Виконувати усталену поведінку елемента щодо перевірки правопису. Ця усталена поведінка може залежати від налаштування `spellcheck` батьківського елемента та інших чинників.

Поле введення може мати ввімкнену перевірку правопису, якщо не має атрибута [readonly](#readonly) і не є вимкненим.

Значення, повернене при зчитуванні `spellcheck`, може не відповідати реальному станові перевірки правопису на контрольному елементі, якщо налаштування {{Glossary("User agent", "користувацького агента")}} відкидають власне налаштування елемента.

## Нестандартні атрибути

Пошуковим полям введення доступні наступні нестандартні атрибути. Як правило, слід уникати їх використання, якщо це можливо.

### `autocorrect`

Атрибут `autocorrect`, розширення Safari, це рядок, що позначає вмикання автоматичного виправлення при редагуванні поля користувачем. Дозволені значення:

- `on`
  - : Ввімкнути автоматичне виправлення хибодруків, а також обробку текстових замін, якщо вони налаштовані.
- `off`
  - : Вимкнути автоматичне виправлення та текстові заміни.

### `mozactionhint` {{deprecated_inline}}

Розширення Mozilla, котре надає підказку, наприклад, про те, якого роду дія буде виконана, якщо користувач натисне під час редагування поля клавішу <kbd>Enter</kbd> або <kbd>Return</kbd>.

<strong>Нерекомендовано: Натомість слід використовувати [`enterkeyhint`](/uk/docs/Web/HTML/Global_attributes#enterkeyhint).</strong>

## Застосування текстових полів

Елементи `<input>` типу `text` утворюють базові однорядкові поля. Їх слід використовувати всюди, де необхідно, аби користувачі вводили однорядкові значення, і де немає більш специфічного типу поля для збору таких значень (наприклад, якщо це [дата](/uk/docs/Web/HTML/Element/input/datetime-local), [URL](/uk/docs/Web/HTML/Element/input/url), [електронна пошта](/uk/docs/Web/HTML/Element/input/email) чи [пошуковий запит](/uk/docs/Web/HTML/Element/input/search), то доступні кращі варіанти).

### Базовий приклад

```html
<form>
  <div>
    <label for="uname">Оберіть ім'я користувача: </label>
    <input type="text" id="uname" name="name" />
  </div>
  <div>
    <button>Подати</button>
  </div>
</form>
```

Це візуалізується так:

{{EmbedLiveSample("bazovyi-pryklad", 600, 80)}}

При поданні пара даних ім'я-значення буде `name=Chris` (якщо перед поданням як значення поля було введено "Chris"). Необхідно завжди пам'ятати додавати до елемента {{HTMLElement("input")}} атрибут [`name`](/uk/docs/Web/HTML/Element/input#name-imia): інакше значення текстового поля не буде включено в подані дані.

### Задання заповнювачів

Всередині текстового поля можна дати змістовний заповнювач, котрий служитиме підказкою щодо того, що з полем робити, за допомогою атрибута [`placeholder`](/uk/docs/Web/HTML/Element/input#placeholder-zapovniuvach). Погляньте на наступний приклад:

```html
<form>
  <div>
    <label for="uname">Оберіть ім'я користувача: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Малими літерами, одним словом" />
  </div>
  <div>
    <button>Подати</button>
  </div>
</form>
```

Те, як візуалізується заповнювач, – нижче:

{{EmbedLiveSample("zadannia-zapovniuvachiv", 600, 80)}}

Зазвичай заповнювач візуалізується світлішим кольором за головний колір елемента, і автоматично зникає, коли користувач починає вводити в поле текст (або тоді, коли поле отримує значення програмно – шляхом задання його атрибута `value`).

### Фізичний розмір елемента введення

Фізичний розмір поля введення можна контролювати за допомогою атрибута [`size`](/uk/docs/Web/HTML/Element/input#size-rozmir). Так можна задавати число символів, котре водночас може показувати поле. Це впливає на ширину елемента, даючи змогу задати ширину в символах, а не в пікселях. У цьому прикладі, скажімо, пошукове поле – 30 символів завширшки:

```html
<form>
  <div>
    <label for="uname">Оберіть ім'я користувача: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Малими літерами, одним словом"
      size="30" />
  </div>
  <div>
    <button>Подати</button>
  </div>
</form>
```

{{EmbedLiveSample('fizychnyi-rozmir-elementa-vvedennia', 600, 80)}}

## Валідація

Елементи `<input>` типу `text` не отримують автоматичної валідації (адже базове текстове поле повинно мати змогу приймати будь-які рядки), однак доступні певні варіанти клієнтської валідації, описані нижче.

> **Примітка:** Валідація форм HTML _не_ є замінником серверних сценаріїв, котрі пересвідчуються, що введені дані мають відповідний формат. Кому завгодно занадто легко внести зміни в HTML, котрі дозволять обійти валідацію чи взагалі її усунути. Також можливо, що хтось обійде HTML взагалі й подасть дані напряму на сервер. Якщо серверний код не справляється з валідацією отриманих даних, може трапитись лихо, коли подаються невідповідно форматовані дані (або дані, що є завеликими, мають помилковий тип і так далі).

### Примітка щодо оформлення

Існують корисні псевдокласи, доступні для оформлення елементів форми, щоб допомагати користувачам бачити, чи є їхні значення дійсними, чи недійсними. Це {{cssxref(":valid")}} та {{cssxref(":invalid")}}. У цьому розділі використовується наступний CSS, що розташовує позначку (галку) після полів, що містять дійсні значення, та хрестик (Х) після полів, що містять недійсні.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Ця техніка також вимагає розташування після елемента форми елемента {{htmlelement("span")}}, що працює як тримач піктограм. Це необхідно, тому що частина типів полів у певних браузерах не показує піктограм, розташованих зразу після них, достатньо добре.

### Обов'язковість заповнення поля

Атрибут [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi) можна використати як легкий спосіб зробити введення значення в поле обов'язковим перед дозволом на подання:

```html
<form>
  <div>
    <label for="uname">Оберіть ім'я користувача: </label>
    <input type="text" id="uname" name="name" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>Подати</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Це візуалізується так:

{{EmbedLiveSample('oboviazkovist-zapovnennia-polia', 600, 100)}}

Якщо спробувати подати форму, в яку не введено пошуковий запит, то браузер покаже повідомлення про помилку.

### Довжина значення поля

Мінімальну довжину (в символах) уведеного значення можна задати за допомогою атрибута [`minlength`](/uk/docs/Web/HTML/Element/input#minlength-minimalna-dovzhyna); подібно до цього – є [`maxlength`](/uk/docs/Web/HTML/Element/input#maxlength-maksymalna-dovzhyna) для задання максимальної довжини, так само в символах.

Приклад нижче вимагає, щоб уведене значення було 4-8 символів завдовжки.

```html
<form>
  <div>
    <label for="uname">Оберіть ім'я користувача: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="10"
      placeholder="Ім'я користувача"
      minlength="4"
      maxlength="8" />
    <span class="validity"></span>
  </div>
  <div>
    <button>Подати</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Це візуалізується так:

{{EmbedLiveSample('dovzhyna-znachennia-polia', 600, 100)}}

Якщо спробувати подати форму з менш ніж 4 символами, то буде показано відповідне повідомлення про помилку (котре відрізняється в різних браузерах). Якщо спробувати ввести понад 8 символів, то браузер не дасть цього зробити.

> **Примітка:** Якщо задати `minlength`, але не задати `required`, то поле вважається дійсним, адже користувач не зобов'язаний задавати значення.

### Задання патерну

Для задання регулярного виразу, котрому повинно відповідати введене значення, аби вважатися дійсним, можна використати атрибут [`pattern`](/uk/docs/Web/HTML/Element/input#pattern-patern) (дивіться простий експрес-курс використання регулярних виразів для валідування введення у [Валідуванні за регулярним виразом](/uk/docs/Learn/Forms/Form_validation#validuvannia-za-rehuliarnym-vyrazom)).

Приклад нижче обмежує значення 4-8 символами та вимагає, щоб воно містило лише малі літери.

```html
<form>
  <div>
    <label for="uname">Оберіть ім'я користувача</label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}" />
    <span class="validity"></span>
    <p>
      Імена користувачів повинні складатися з малих літер та бути 4-8 символів
      завдовжки.
    </p>
  </div>
  <div>
    <button>Подати</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Це візуалізується так:

{{EmbedLiveSample('zadannia-paternu', 600, 130)}}

## Приклади

Добрі приклади текстових полів, використаних в контексті, можна побачити в наших статтях [Ваша перша форма HTML](/uk/docs/Learn/Forms/Your_first_form) та [Як впорядкувати форму HTML](/uk/docs/Learn/Forms/How_to_structure_a_web_form).

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#znachennia">Значення</a></strong></td>
      <td>
        Рядок, що представляє текст, вміщений в текстовому полі.
      </td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} та
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Доступні спільні атрибути</strong></td>
      <td>
        <a href="/uk/docs/Web/HTML/Element/input#autocomplete-avtozapovnennia"><code>autocomplete</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#list-spysok"><code>list</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#maxlength-maksymalna-dovzhyna"><code>maxlength</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#minlength-minimalna-dovzhyna"><code>minlength</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#pattern-patern"><code>pattern</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#placeholder-zapovniuvach"><code>placeholder</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#readonly-lyshe-dlia-chytannia"><code>readonly</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#required-oboviazkovyi"><code>required</code></a> і
        <a href="/uk/docs/Web/HTML/Element/input#size-rozmir"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td><a href="/uk/docs/Web/HTML/Element/input#list-spysok"><code>list</code></a>, <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Інтерфейс DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Методи</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
        і
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Неявна роль ARIA</strong></td>
      <td>без атрибута <code>list</code>:
                <code><a href="/uk/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></td>
      <td>з атрибутом <code>list</code>: <code><a href="/uk/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Форми HTML](/uk/docs/Learn/Forms)
- {{HTMLElement("input")}} та {{domxref("HTMLInputElement")}} – база для текстових полів.
- [`<input type="search">`](/uk/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}} – багаторядкове текстове поле
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
