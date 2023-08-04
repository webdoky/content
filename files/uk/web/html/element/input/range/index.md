---
title: <input type="range">
slug: Web/HTML/Element/input/range
page-type: html-element
browser-compat: html.elements.input.type_range
---

{{HTMLSidebar}}

Елементи {{HTMLElement("input")}} типу **`range`** (діапазон) дають користувачам змогу задавати числове значення, котре повинно бути не меншим за одне введене значення і не більшим за інше введене значення. Натомість конкретне значення не вважається важливим. Зазвичай представляється за допомогою повзуна або кодонабирача, а не простого текстового поля, подібного до полів типу {{HTMLElement('input/number', 'number')}}.

Через те, що віджет такого роду є неточним, він повинен використовуватися лише тоді, коли точне значення – неважливе.

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

Якщо браузер користувача не підтримує `range`, то це поле відступить і працюватиме як поле `{{HTMLElement('input/text', 'text')}}`.

### Валідація

Валідація патерном недоступна, проте виконуються наступні автоматичні валідування:

- Якщо [`value`](/uk/docs/Web/HTML/Element/input#value) задано таке значення, яке не може бути перетворено на дійсне число з рухомою комою, то валідація не проходить, адже тоді поле має невідповідне значення.
- Значення не може бути меншим за [`min`](/uk/docs/Web/HTML/Element/input#min). Усталено – 0.
- Значення не може бути більшим за [`max`](/uk/docs/Web/HTML/Element/input#max). Усталено – 100.
- Значення повинно бути кратним [`step`](/uk/docs/Web/HTML/Element/input#step). Усталено – 1.

### Значення

Атрибут [`value`](/uk/docs/Web/HTML/Element/input#value) містить рядок, що містить рядкове представлення вибраного числа. Це значення ніколи не є порожнім рядком (`""`). Усталене значення – це середнє арифметичне заданих мінімуму та максимуму, якщо максимум не є меншим за мінімум, у разі чого усталеним значенням стає атрибут `min`. Алгоритм визначення усталеного значення – такий:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Якщо відбувається спроба задати значення, менше за мінімум, то задається значення мінімуму. Подібно до цього, спроба задати значення, більше за максимум, призводить до задання значення максимуму.

## Додаткові атрибути

На додачу до атрибутів, спільних для всіх елементів {{HTMLElement("input")}}, поля діапазону приймають наступні.

### list

Значення атрибута `list` – це {{domxref("Element.id", "id")}} елемента {{HTMLElement("datalist")}}, розташованого в тому самому документі. Елемент {{HTMLElement("datalist")}} надає список наперед визначених значень, що будуть запропоновані користувачам для цього поля. Усі значення в списку, що не є сумісними з [`type`](/uk/docs/Web/HTML/Element/input#type), не включаються в список варіантів. Запропоновані значення є пропозиціями, а не вимогою: користувачі можуть як обирати з такого наперед визначеного списку, так і вводити інші значення.

Дивіться приклад того, як варіанти для діапазону виводяться в різних браузерах, в розділі [додавання позначок](#dodavannia-poznachok) нижче.

### max

Найбільше значення в діапазоні прийнятних значень. Якщо [`value`](/uk/docs/Web/HTML/Element/input#value), введене в елемент, перевищує `max`, то елемент не проходить [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation). Якщо значення атрибута [`max`](/uk/docs/Web/HTML/Attributes/max) не є числом, то такий елемент не має максимального значення.

Це значення повинно бути більшим або рівним значенню атрибута [`min`](/uk/docs/Web/HTML/Attributes/min). Читайте про атрибут HTML [`max`](/uk/docs/Web/HTML/Attributes/max).

### min

Найменше значення в діапазоні прийнятних значень. Якщо [`value`](/uk/docs/Web/HTML/Element/input#value), введене в елемент, менше за `min`, то елемент не проходить [валідацію обмежень](/uk/docs/Web/HTML/Constraint_validation). Якщо значення атрибута `min` не є дійсним числом, то такий елемент не має мінімального значення.

Це значення повинно бути меншим або рівним значенню атрибута [`max`](/uk/docs/Web/HTML/Attributes/max). Читайте про атрибут HTML [`min`](/uk/docs/Web/HTML/Attributes/min).

> **Примітка:** Якщо значення `min` і `max` рівні, або значення `max` менше за значення `min`, то користувач не зможе взаємодіяти з полем діапазону.

### step

Атрибут `step` – це число, що задає гранулярність, якій повинно відповідати значення. Лише значення, що відповідають заданому інтервалові крокування ([`min`](#min), якщо цей атрибут задано, а інакше – [`value`](/uk/docs/Web/HTML/Element/input#value), або ж відповідному усталеному значенню, якщо цих атрибутів немає), є дійсними.

Атрибут `step` також може бути заданий з рядковим значенням `any`. Таке значення `step` означає, що інтервал крокування не накладається, і що в заданому діапазоні приймаються будь-які значення (з урахуванням інших обмежень, як то [`min`](#min) і [`max`](#max)). Дивіться те, як це працює в браузерах, що це підтримують, в прикладі [Задання step зі значенням `any`](#zadannia-step-zi-znachenniam-any).

> **Примітка:** Коли значення, введене користувачем, не відповідає налаштуванням крокування, то {{Glossary("User agent", "користувацький агент")}} може округлити значення до найближчого дійсного, віддаючи перевагу числам в додатному напрямку, коли є два рівновіддалені варіанти.

Усталене значення крокування для полів `range` – 1, що дозволяє вводити лише цілі числа, _окрім випадків, коли_ основа крокування не є цілим числом: наприклад, якщо задати `min` зі значенням -10 і `value` зі значенням 1.5, то `step` зі значенням 1 дозволятиме лише значення, подібні до 1,5; 2,5; 3,5;… у додатному напрямку та -0,5; -1,5; -2,5;… у від'ємному. Дивіться [атрибут HTML `step`](/uk/docs/Web/HTML/Attributes/step).

## Нестандартні атрибути

### orient

Подібно до нестандартної властивості CSS -moz-orient, що впливає на елементи {{htmlelement('progress')}} і {{htmlelement('meter')}}, атрибут `orient` визначає орієнтацію повзуна діапазону. Серед значень – `horizontal`, тобто горизонтальна візуалізація діапазону, та `vertical`, що позначає візуалізацію по вертикалі.

> **Примітка:** Наступні атрибути полів не застосовуються до полів діапазону: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size` і `src`. Усі вони, бувши заданими, ігноруються.

## Приклади

Коли тип `number` дає користувачам змогу вводити числа, необов'язково накладаючи обмеження, змушуючи вписувати значення між мінімумом та максимумом, він не вимагає вводити конкретне значення. Тип поля `range` дає змогу запитати від користувача значення у випадках, в яких користувачу може навіть бути байдуже, або може не знати, яке саме конкретно значення було вибрано.

Кілька прикладів ситуацій, в яких зазвичай використовуються поля діапазону:

- Звукові контрольні елементи, наприклад, гучності й панорамування, або елементи для фільтрування.
- Контрольні елементи налаштування кольору, наприклад, кольору, прозорості, яскравості тощо.
- Контрольні елементи налаштувань гри, наприклад, складність, відстань видимості, розмір світу, і так далі.
- Довжина пароля для паролів, згенерованих менеджерами паролів.

Як правило, якщо користувач з більшою імовірністю зацікавиться відсотковим співвідношенням на відстані між мінімальним та максимальним значеннями, ніж самим значенням, то поле діапазону – чудовий варіант. Наприклад, у випадку контрольного елемента гучності побутової аудіосистеми користувачі здебільшого думають "поставити гучність на половину від максимуму", а не "поставити гучність на 0,5".

### Задання мінімуму та максимуму

Усталено мінімум дорівнює 0, а максимум – 100. Якщо це не те, що потрібно, то легко можна задати інші межі, змінивши значення атрибутів [`min`](/uk/docs/Web/HTML/Element/input#min) і [`max`](/uk/docs/Web/HTML/Element/input#max). Їх значення можуть бути будь-якими числами з рухомою комою.

Наприклад, щоб запитати в користувача значення між -10 та 10, можна використати:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("zadannia-minimumu-ta-maksymumu", 600, 40)}}

### Задання гранулярності значення

Усталено гранулярність дорівнює 1, а отже – значення завжди є цілим числом. Щоб контролювати гранулярність, можна задати атрибут [`step`](/uk/docs/Web/HTML/Element/input#step). Наприклад, Коли потрібно, щоб значення було посередині між 5 і 10, варто задати `step` зі значенням 0.5:

#### Задання атрибута step

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("zadannia-atrybuta-step", 600, 40)}}

#### Задання step зі значенням "any"

При потребі прийняти будь-яке значення, незалежно від того, скільки в ньому знаків після коми, то можна задати атрибут [`step`](/uk/docs/Web/HTML/Element/input#step) зі значенням `any`:

##### HTML

```html
<input id="pi_input" type="range" min="0" max="3.14" step="any" />
<p>Значення: <output id="value"></output></p>
```

##### JavaScript

```js
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
```

{{EmbedLiveSample("zadannia-step-zi-znachenniam-any", 600, 75)}}

Цей приклад дає користувачам змогу вибрати будь-яке значення від 0 до π, без будь-яких обмежень для дробових частин вибраних значень. JavaScript використовується для виведення того, як значення змінюється, коли користувач взаємодіє з діапазоном.

### Додавання позначок

Аби додати до контрольного елемента діапазону позначки, слід додати до нього атрибут `list`, задавши в ньому `id` елемента {{HTMLElement("datalist")}}, що задає низку позначок на контрольному елементі. Кожна точка представляється елементом {{HTMLElement("option")}}, чиє [`value`](/uk/docs/Web/HTML/Element/option#value) задане зі значенням діапазону, на якому повинна бути поставлена позначка.

#### HTML

```html
<label for="temp">Оберіть комфортну температуру:</label><br />
<input type="range" id="temp" name="temp" list="markers" />

<datalist id="markers">
  <option value="0"></option>
  <option value="25"></option>
  <option value="50"></option>
  <option value="75"></option>
  <option value="100"></option>
</datalist>
```

#### Результат

{{EmbedLiveSample("dodavannia-poznachok", 600, 50)}}

### Використання одного datalist для декількох полів діапазону

Щоб уникнути повторення коду, можна повторно використати один {{HTMLElement("datalist")}} для кількох елементів `<input type="range">`, а також інших типів {{HTMLElement("input")}}.

> **Примітка:** Щоб [показати підписи](#dodavannia-pidpysiv), як у прикладі нижче, потрібен окремий `datalist` для кожного поля діапазону.

#### HTML

```html
<p>
  <label for="temp1">Температура для кімнати 1:</label>
  <input type="range" id="temp1" name="temp1" list="values" />
</p>
<p>
  <label for="temp2">Температура для кімнати 2:</label>
  <input type="range" id="temp2" name="temp2" list="values" />
</p>

<p>
  <label for="temp3">Температура для кімнати 3:</label>
  <input type="range" id="temp3" name="temp3" list="values" />
</p>

<datalist id="values">
  <option value="0" label="0"></option>
  <option value="25" label="25"></option>
  <option value="50" label="50"></option>
  <option value="75" label="75"></option>
  <option value="100" label="100"></option>
</datalist>
```

#### Результат

{{EmbedLiveSample("vykorystannia-odnoho-datalist-dlia-dekilkokh-poliv-diapazonu")}}

### Додавання підписів

Можна підписати позначки, додавши елементам `<option>` атрибути `label`. Проте усталено вміст підписів не виводиться. Можна використати CSS, щоб показати підписи та коректно їх розташувати. Ось один зі способів це зробити.

#### HTML

```html
<label for="tempB">Оберіть комфортну температуру:</label><br />
<input type="range" id="tempB" name="temp" list="values" />

<datalist id="values">
  <option value="0" label="дуже холодно!"></option>
  <option value="25" label="прохолодно"></option>
  <option value="50" label="помірно"></option>
  <option value="75" label="тепліше!"></option>
  <option value="100" label="гаряче!"></option>
</datalist>
```

#### CSS

```css
datalist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  writing-mode: vertical-lr;
  width: 200px;
}

option {
  padding: 0;
}

input[type="range"] {
  width: 200px;
  margin: 0;
}
```

#### Результат

{{EmbedLiveSample("dodavannia-pidpysiv")}}

### Створення вертикальних полів діапазону

Усталено браузери візуалізують поля діапазону як повзуни з ручкою, що ковзає вліво-вправо.

Щоб створити вертикальний діапазон, в якого ручка ковзатиме вгору-вниз, слід задати властивість CSS {{cssxref('appearance')}} зі значенням `slider-vertical` і нестандартний атрибут `orient` для Firefox.

#### Горизонтальне поле діапазону

Погляньте на цей контрольний елемент діапазону:

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1" />
```

{{EmbedLiveSample("horyzontalne-pole-diapazonu", 200, 40)}}

Цей контрольний елемент – горизонтальний (принаймні на більшості, якщо не на всіх головних браузерах; інші можуть показувати його по-різному).

#### Застосування властивості appearance

Властивість {{cssxref('appearance')}} має нестандартне значення `slider-vertical`, котре, зрештою, робить повзуни вертикальними.

Використаймо такий же HTML, як в попередніх прикладах:

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

Ціллю є лише поля з типом діапазону:

```css
input[type="range"] {
  appearance: slider-vertical;
}
```

{{EmbedLiveSample("zastosuvannia-vlastyvosti-appearance", 200, 200)}}

#### Застосування атрибута orient

Виключно в Firefox є нестандартна властивість `orient`.

Використаймо HTML, подібний до попередніх прикладів, додавши цей атрибут зі значенням `vertical`:

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

{{EmbedLiveSample("zastosuvannia-atrybuta-orient", 200, 200)}}

#### writing-mode: bt-lr

Властивість {{cssxref('writing-mode')}}, загалом, не слід використовувати для зміни напрямку письма для потреб інтернаціоналізації чи локалізації, але її можна використовувати для особливих ефектів.

Використаймо такий же HTML, як в попередніх прикладах:

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

Ціллю є лише поля з типом діапазону; до них застосовується зміна напряму письма з усталеного на `bt-lr`, тобто знизу-вгору та зліва-направо:

```css
input[type="range"] {
  writing-mode: bt-lr;
}
```

{{EmbedLiveSample("writing-mode-bt-lr", 200, 40)}}

#### Збирання всього докупи

Оскільки кожний з прикладів вище працює в різних браузерах, їх можна зібрати докупи, щоб це працювало в різних браузерах:

Для Firefox – зберігається атрибут `orient` зі значенням `vertical`:

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

Ціллю є лише `input` з `type` зі значенням `range` та `orient` зі значенням `vertical`, і застосовується зміна `writing-mode` з усталеного на `bt-lr`, тобто знизу-вгору та зліва-направо, для версій Edge до Blink, а також `appearance: slider-vertical`, що підтримується в браузерах Blink і Webkit:

```css
input[type="range"][orient="vertical"] {
  writing-mode: bt-lr;
  appearance: slider-vertical;
}
```

{{EmbedLiveSample("zbyrannia-vsioho-dokupy", 200, 200)}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#znachennia">Значення</a></strong></td>
      <td>
        Рядок, що містить рядкове представлення
        вибраного числового значення; для
        отримання значення у вигляді числа використовуйте метод
        {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} і
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Доступні спільні атрибути</strong></td>
      <td>
        <a href="/uk/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#max"><code>max</code></a>,
        <a href="/uk/docs/Web/HTML/Element/input#min"><code>min</code></a> і
        <a href="/uk/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td>
        <code>list</code>, <code>value</code> і <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>Інтерфейс DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Методи</strong></td>
      <td>
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
        і {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Неявна роль ARIA</strong></td>
      <td>
        <code><a href="/uk/docs/Web/Accessibility/ARIA/Roles/slider_role">slider</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Форми HTML](/uk/docs/Learn/Forms)
- {{HTMLElement("input")}} та інтерфейс {{domxref("HTMLInputElement")}}, на якому він заснований
- [`<input type="number">`](/uk/docs/Web/HTML/Element/input/number)
- {{domxref('validityState.rangeOverflow')}} і {{domxref('validityState.rangeUnderflow')}}
- [Контроль декількох параметрів за допомогою ConstantSourceNode](/uk/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Оформлення елемента діапазону](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
