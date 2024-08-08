---
title: Валідація обмежень
slug: Web/HTML/Constraint_validation
page-type: guide
---

{{HTMLSidebar}}

Створення вебформ завжди було складною задачею. Хоч розмітка самої форми – це просто, та перевірка того, чи має кожне поле дійсне і змістовне значення, – уже складніше, а сповіщення користувача про проблему може стати головним болем. [HTML5](/uk/docs/Glossary/HTML5) ввів нові механізми для форм: він додав нові семантичні типи для елемента {{HTMLElement("input")}} та _валідацію обмежень_ для спрощення роботи з перевіркою вмісту форми на клієнтській стороні. Базові, звичні обмеження можна перевірити без необхідності використання JavaScript, задавши нові атрибути; складніші обмеження можна перевірити за допомогою API валідації обмежень.

Базове знайомство з цими концепціями, з прикладами, дивіться в [Підручнику з валідації форм](/uk/docs/Learn/Forms/Form_validation).

> **Примітка:** Валідація обмежень HTML не усуває потреби валідації на _серверній стороні_. Навіть попри те, що слід очікувати куди менше недійсних запитів форми, такі запити все одно можуть бути надіслані багатьма способами:
>
> - Шляхом внесення змін до HTML через інструменти розробника в браузері.
> - Ручним формуванням запиту HTTP, без використання форми.
> - Програмним вписуванням вмісту до форми (певні валідації обмежень _спрацьовують лише_ щодо користувацького введення, але не тоді, коли значення поля форми задається засобами JavaScript).
>
> Таким чином, слід завжди валідувати дані форми на серверній стороні, аналогічним чином щодо валідації на клієнтському боці.

## Внутрішні та базові обмеження

У HTML базові обмеження оголошуються двома способами:

- Шляхом вибору найбільш семантично відповідного значення атрибута [`type`](/uk/docs/Web/HTML/Element/input#type-typ) для елемента {{HTMLElement("input")}}, наприклад, якщо вибрати тип `email`, то це автоматично створює обмеження, що перевіряє, чи є значення дійсною адресою електронної пошти.
- Шляхом задання значень атрибутам, що стосуються валідації, дозволяючи описувати базові обмеження простим способом, без необхідності використання JavaScript.

### Семантичні типи полів

Внутрішні обмеження атрибута [`type`](/uk/docs/Web/HTML/Element/input#type-typ) такі:

| Тип поля                                                        | Опис обмеження                                                                                                                                                                 | Пов'язані порушення                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [`<input type="URL">`](/uk/docs/Web/HTML/Element/input/url)     | Значення повинно бути абсолютним [URL](/uk/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), як визначено в [Живому стандарті URL](https://url.spec.whatwg.org/).      | Порушення обмеження **[TypeMismatch](/uk/docs/Web/API/ValidityState/typeMismatch)** |
| [`<input type="email">`](/uk/docs/Web/HTML/Element/input/email) | Значення повинно бути синтаксично дійсною адресою електронної пошти, що зазвичай має формат `username@hostname.tld`, але також може бути локальною – виду `username@hostname`. | Порушення обмеження **[TypeMismatch](/uk/docs/Web/API/ValidityState/typeMismatch)** |

В обох цих типах полів, якщо задано атрибут [`multiple`](/uk/docs/Web/HTML/Element/input#multiple-kilka), то можна задати декілька значень, у вигляді розділеного комами списку. Якщо будь-яке зі значень такого списку не задовольняє умовам, описаним тут, то спрацьовує порушення обмеження **Type mismatch**.

Зверніть увагу на те, що більшість типів полів не мають внутрішніх обмежень, оскільки деякі з них позбавлені валідації обмежень або мають алгоритм санації, що перетворює неправильні значення на правильні усталені.

### Атрибути, що стосуються валідації

На додачу до атрибута `type`, описаного вище, для опису базових обмежень використовуються наступні атрибути:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Атрибут</th>
      <th scope="col">Типи полів, що його підтримують</th>
      <th scope="col">Можливі значення</th>
      <th scope="col">Опис обмеження</th>
      <th scope="col">Пов'язане порушення</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/uk/docs/Web/HTML/Attributes/pattern">pattern</a></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>
      </td>
      <td>
        <a href="/uk/docs/Web/JavaScript/Guide/Regular_expressions"
          >Регулярний вираз JavaScript</a
        >
        (скомпільований з <em>вимкненими</em> позначками {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}} і {{jsxref("RegExp.multiline", "multiline")}})
      </td>
      <td>Значення повинно давати збіг з заданим патерном.</td>
      <td>
        Порушення обмеження <a href="/uk/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/uk/docs/Web/HTML/Attributes/min">min</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Дійсне число</td>
      <td rowspan="3">Значення повинно бути більшим або рівним значенню.</td>
      <td rowspan="3">
        Порушення обмеження <strong
          ><code
            ><a href="/uk/docs/Web/API/ValidityState/rangeUnderflow"
              >rangeUnderflow</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Дійсна дата</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Дійсні дата з часом</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/uk/docs/Web/HTML/Attributes/max">max</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Дійсне число</td>
      <td rowspan="3">Значення повинно бути меншим або рівним значенню</td>
      <td rowspan="3">
        Порушення обмеження <strong
          ><code
            ><a href="/uk/docs/Web/API/ValidityState/rangeOverflow"
              >rangeOverflow</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Дійсна дата</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Дійсні дата з часом</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/uk/docs/Web/HTML/Attributes/required">required</a></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>,
        <code>date</code>, <code>datetime-local</code>,
        <code>month</code>, <code>week</code>, <code>time</code>,
        <code>number</code>, <code>checkbox</code>, <code>radio</code>,
        <code>file</code>, а також елементи {{HTMLElement("select")}} і {{HTMLElement("textarea")}}
      </td>
      <td>
        <em>Жодного</em>, адже це булів атрибут: його присутність означає <em>true</em>, а відсутність – <em>false</em>
      </td>
      <td>Повинно бути якесь значення (якщо цей атрибут задано).</td>
      <td>
        Порушення обмеження <strong
          ><code
            ><a href="/uk/docs/Web/API/ValidityState/valueMissing"
              >valueMissing</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/uk/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Ціле число днів</td>
      <td rowspan="5">
        Якщо крок не заданий у вигляді літерала <code>any</code>, то значення повинно дорівнювати <strong>min</strong> + ціле число кроків.
      </td>
      <td rowspan="5">
        Порушення обмеження <strong
          ><code
            ><a href="/uk/docs/Web/API/ValidityState/stepMismatch"
              >stepMismatch</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>Ціле число місяців</td>
    </tr>
    <tr>
      <td><code>week</code></td>
      <td>Ціле число тижнів</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Ціле число секунд</td>
    </tr>
    <tr>
      <td><code>range</code>, <code>number</code></td>
      <td>Ціле число</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/uk/docs/Web/HTML/Attributes/minlength"
            >minlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>, а також на елементі
        {{HTMLElement("textarea")}}
      </td>
      <td>Довжина – ціле число</td>
      <td>
        Число символів (кодових точок) повинно бути не менше значення атрибута, якщо значення поля не є порожнім. Для {{HTMLElement("textarea")}} – всі символи нового рядка нормалізуються до одиничного символу (на противагу парам CRLF).
      </td>
      <td>
        Порушення обмеження <strong
          ><code
            ><a href="/uk/docs/Web/API/ValidityState/tooShort"
              >tooShort</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/uk/docs/Web/HTML/Attributes/maxlength"
            >maxlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>, а також на елементі
        {{HTMLElement("textarea")}}
      </td>
      <td>Довжина – ціле число</td>
      <td>
        Кількість символів (кодових точок) не повинна перевищування значення цього атрибута.
      </td>
      <td>
        Порушення обмеження <strong
          ><code
            ><a href="/uk/docs/Web/API/ValidityState/tooLong"
              >tooLong</a
            ></code
          ></strong
        >
      </td>
    </tr>
  </tbody>
</table>

## Процес валідації обмежень

Валідація обмежень виконується за допомогою API валідації обмежень – або на окремому елементі форми, або на рівні всієї форми, на самому елементі {{HTMLElement("form")}}. Валідація обмежень виконується такими способами:

- Шляхом виклику методу `checkValidity()` або `reportValidity()` на пов'язаному з формою інтерфейсі DOM ([`HTMLInputElement`](/uk/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/uk/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/uk/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/uk/docs/Web/API/HTMLOutputElement) або [`HTMLTextAreaElement`](/uk/docs/Web/API/HTMLTextAreaElement)), що обчислює обмеження лише на відповідному елементі, даючи сценарію змогу отримати цю інформацію. Метод `checkValidity()` повертає булеве значення, що вказує, чи пройшло значення елемента його обмеження. (Це, як правило, робиться користувацьким агентом при визначенні того, який з псевдокласів CSS, {{Cssxref(":valid")}} або {{Cssxref(":invalid")}}, застосовується.) На противагу йому, метод `reportValidity()` повідомляє користувачу про будь-які порушення обмежень.
- Шляхом виклику методу `checkValidity()` або `reportValidity()` на інтерфейсі [`HTMLFormElement`](/uk/docs/Web/API/HTMLFormElement).
- Шляхом подання всієї форми.

Виклик `checkValidity()` називається _статичною_ валідацією обмежень, а виклик `reportValidity()` або подання форми називається _інтерактивною_ валідацією обмежень.

> **Примітка:**
>
> - Якщо на елементі {{HTMLElement("form")}} задано атрибут [`novalidate`](/uk/docs/Web/HTML/Element/form#novalidate), то інтерактивна валідація обмежень не відбувається.
> - Виклик методу `submit()` на інтерфейсі [`HTMLFormElement`](/uk/docs/Web/API/HTMLFormElement) не спричиняє валідації обмежень. Інакше кажучи, цей метод надсилає дані форми на сервер навіть тоді, коли ці дані не задовольняють обмеженням. Замість цього викликайте метод `click()` на кнопці подання.
> - Обмеження `minlength` і `maxlength` перевіряються лише щодо введення з боку користувача. Вони не перевіряються, якщо значення задано програмно, навіть коли явно викликати `checkValidity()` або `reportValidity()`.

## Складні обмеження з допомогою API валідації обмежень

За допомогою JavaScript та API обмежень можна реалізувати складніші обмеження, наприклад, обмеження, що поєднують декілька полів, або такі, що включають складні обчислення.

По суті ідея полягає в тому, щоб за певною подією поля форми (наприклад, **onchange**) спрацьовував JavaScript для обчислення того, чи порушено обмеження, а потім використовувався метод `field.setCustomValidity()`, аби задати результат валідації: порожній рядок означає, що обмеження задовольняється, а будь-який інший рядок означає, що є помилка, і цей рядок є повідомленням про помилку, яке відображається користувачеві.

### Обмеження з поєднанням декількох полів – валідація поштового індексу

Формат поштового індексу в різних країнах відрізняється. Річ не лише в тому, що більшість країн дозволяє необов'язковий префікс з кодом країни (наприклад, `D-` в Німеччині, `F-` в Франції або Швейцарії), але також у тому, що деякі країни мають поштові індекси лише з фіксованою кількістю цифр, а інші, наприклад, Велика Британія, мають складнішу структуру, що дозволяє на деяких конкретних позиціях літери.

> **Примітка:** Це не вичерпна бібліотека валідації поштових індексів, а лише демонстрація ключових концепцій.

Як приклад, додаймо сценарій, що перевіряє валідацію обмежень для цієї простої форми:

```html
<form>
  <label for="ZIP">Поштовий індекс : </label>
  <input type="text" id="ZIP" />
  <label for="Country">Країна : </label>
  <select id="Country">
    <option value="ch">Швейцарія</option>
    <option value="fr">Франція</option>
    <option value="de">Німеччина</option>
    <option value="nl">Нідерланди</option>
  </select>
  <input type="submit" value="Валідувати" />
</form>
```

Це виводить наступну форму:

{{EmbedLiveSample("obmezhennia-z-poiednanniam-dekilkokh-poliv-valiidatsiia-poshtovoho-indeksu")}}

По-перше, напишімо функцію, що перевіряє саме обмеження:

```js
function checkZIP() {
  // Для кожної країни визначмо патерн, котрому повинен відповідати індекс
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Швейцарські індекси повинні мати рівно 4 цифри: наприклад, CH-1950 або 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "Французькі індекси повинні мати рівно 5 цифр: наприклад, F-75012 або 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Німецькі індекси повинні мати рівно 5 цифр: наприклад, D-12345 або 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Нідерландські індекси повинні мати рівно 4 цифри, після яких – 2 літери, що не є SA, SD і SS",
    ],
  };

  // Отримати ідентифікатор країни
  const country = document.getElementById("Country").value;

  // Отримати поле NPA
  const ZIPField = document.getElementById("ZIP");

  // Сформувати перевірник обмеження
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Перевірити!
  if (constraint.test(ZIPField.value)) {
    // Якщо індекс відповідає обмеженню, використовується API обмежень, щоб про це сповістити
    ZIPField.setCustomValidity("");
  } else {
    // Якщо індекс не відповідає обмеженню, використовується API обмежень, щоб
    // надати повідомлення про формат, що вимагається для відповідної країни
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}
```

Потім ця функція зв'язується з подією **onchange** елемента {{HTMLElement("select")}} і подією **oninput** елемента {{HTMLElement("input")}}:

```js
window.onload = () => {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
};
```

### Лімітування розміру файлу перед його відвантаженням

Іще одне поширене обмеження – лімітування розміру файлу до відвантаження. Перевірка цього на клієнтській стороні перед тим, як файл буде переданий на сервер, вимагає поєднання API обмежень, і особливо методу `field.setCustomValidity()`, з іншим API JavaScript, тут – API файлів.

Ось частина мовою HTML:

```html
<label for="FS">Оберіть файл, менший за 75 кБ : </label>
<input type="file" id="FS" />
```

Це виводить:

{{EmbedLiveSample("limituvannia-rozmiru-failu-pered-vidvantazhenniam")}}

JavaScript зчитує вибраний файл, використовує метод `File.size()` для отримання його розміру, порівнює його з (жорстко закодованим) лімітом і використовує API обмежень, щоб повідомити браузер про наявність або відсутність порушення:

```js
function checkFileSize() {
  const FS = document.getElementById("FS");
  const files = FS.files;

  // Якщо є (щонайменше) один вибраний файл
  if (files.length > 0) {
    if (files[0].size > 75 * 1024) {
      // Перевірити умову
      FS.setCustomValidity("Вибраний файл не повинен бути більшим за 75 кБ");
      FS.reportValidity();
      return;
    }
  }
  // Немає порушення власного обмеження
  FS.setCustomValidity("");
}
```

Врешті решт, цей метод чіпляється до відповідної події:

```js
window.onload = () => {
  document.getElementById("FS").onchange = checkFileSize;
};
```

## Візуальне оформлення валідації обмежень

Окрім задання обмежень, веброзробники хочуть контролювати те, які повідомлення виводяться користувачам і як ці повідомлення оформлені.

### Контроль вигляду елементів

Вигляд елементів можна контролювати за допомогою псевдокласів CSS.

#### Псевдокласи CSS :required та :optional

[Псевдокласи](/uk/docs/Web/CSS/Pseudo-classes) {{cssxref(':required')}} та {{cssxref(':optional')}} дозволяють писати селектори, що дають збіг з елементами форми, що мають атрибут [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi) і тими, що його не мають.

#### Псевдоклас CSS :placeholder-shown

Дивіться {{cssxref(':placeholder-shown')}}.

#### Псевдокласи CSS :valid :invalid

[Псевдокласи](/uk/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} та {{cssxref(':invalid')}} використовуються для представлення елементів \<input>, чий вміст проходить і провалює валідацію, відповідно, згідно з налаштуваннями типу поля. Ці класи дають користувачам змогу оформлювати дійсні та недійсні елементи форми, щоб полегшити визначення елементів, які відформатовані правильно або неправильно.

### Контроль тексту порушення обмеження

З контролем тексту порушення обмеження можуть допомогти наступні інструменти:

- Метод `setCustomValidity(message)` на наступних елементах:

  - {{HTMLElement("fieldset")}}. Примітка: Задання власного повідомлення про валідність на елементах fieldset в більшості браузерів не запобігає поданню форми.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Кнопках подання (створених або за допомогою елемента {{HTMLElement("button")}} з типом `submit`, або елемента `input` з типом {{HTMLElement("input/submit", "submit")}}. Інші типи кнопок не беруть участі в валідації обмежень.
  - {{HTMLElement("textarea")}}

- Інтерфейс [`ValidityState`](/uk/docs/Web/API/ValidityState) описує об'єкт, повернений властивістю `validity` типів елементів, перерахованих вище. Він представляє різні шляхи, за якими введене значення може бути недійсним. Разом вони допомагають пояснити, чому значення елемента не проходить валідацію, якщо є недійсним.
