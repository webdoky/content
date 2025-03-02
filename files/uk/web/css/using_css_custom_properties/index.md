---
title: Використання кастомних властивостей (змінних) CSS
slug: Web/CSS/Using_CSS_custom_properties
page-type: guide
---

{{CSSRef}}

**Кастомні властивості** (іноді звані **змінними CSS** чи **каскадними змінними**) – сутності, визначені авторами коду на CSS, що представляють певні значення для перевикористання в документі. Вони задаються за допомогою директиви {{cssxref("@property")}} або [синтаксису кастомних властивостей](/uk/docs/Web/CSS/--*) (наприклад, **`--primary-color: blue;`**). Вони доступні за допомогою функції CSS {{cssxref("var", "var()")}} (наприклад, **`color: var(--primary-color);`**).

Складні вебсайти мають дуже багато коду на CSS, і це часто призводить до великої кількості повторюваних значень CSS. Наприклад, нерідко можна зустріти один і той же колір, що використовується в сотнях різних місць у списках стилів. Зміна кольору, який було дубльовано в багатьох місцях, потребує пошуку та заміни в усіх правилах і файлах CSS. Кастомні властивості дають змогу визначити значення в одному місці, а потім використовувати його в багатьох інших місцях, щоб з ним було легше працювати. Іншою перевагою є читабельність та семантика. Наприклад, `--main-text-color` легше зрозуміти, ніж шістнадцятковий колір `#00ff00`, особливо якщо він використовується в різних контекстах.

Кастомні властивості, визначені [за допомогою двох дефісів (`--`)](/uk/docs/Web/CSS/--*), підлягають [каскадності](/uk/docs/Web/CSS/Cascade) та успадковують значення від свого предка.
Директива {{cssxref("@property")}} дає змогу краще керувати кастомною властивістю та дозволяє вказати, чи успадковує вона значення від предка, яке її початкове значення, а також обмеження типів, які повинні застосовуватися.

> [!NOTE]
> Змінні не працюють всередині медіазапитів та контейнерних запитів.
> Функцію {{cssxref("var", "var()")}} можна використовувати в будь-якій частині значень будь-яких властивостей елемента.
> Не можна використовувати {{cssxref("var", "var()")}} замість назв властивостей, селекторів і будь-чого іншого, крім значень властивостей, тобто її не можна вживати в медіазапитах і контейнерних запитах.

## Оголошення кастомних властивостей

У CSS оголосити кастомну властивість можна за допомогою префікса в вигляді двох дефісів перед іменем властивості або за допомогою директиви {{cssxref("@property")}}. У наступних розділах описано, як використовувати ці два методи.

### Використання префікса з двох дефісів (`--`)

Кастомна властивість з префіксом двох дефісів починається з `--`, після чого стоїть назва властивості (наприклад, `--my-property`), а потім значення властивості, яке може бути будь-яким [дійсним значенням CSS](/uk/docs/Learn_web_development/Core/Styling_basics/Values_and_units).
Як і будь-які інші властивості, кастомні властивості записуються всередині наборів правил.
Наступний приклад демонструє те, як створити кастомну властивість `--main-bg-color` і використати значення [`<named-color>`](/uk/docs/Web/CSS/named-color) `brown`:

```css
section {
  --main-bg-color: brown;
}
```

Селектор, якому задано набір правил (у прикладі вище – елементи [`<section>`](/uk/docs/Web/HTML/Element/section)) визначає область, у якій можна використовувати кастомну властивість.
У зв'язку з цим поширеною практикою є визначення кастомних властивостей на псевдокласі {{cssxref(":root")}}, щоб їх можна було використовувати глобально:

```css
:root {
  --main-bg-color: brown;
}
```

Це не обов'язково: можуть бути підстави для обмеження сфери дії кастомних властивостей.

> [!NOTE]
> Імена кастомних властивостей є чутливими до регістру: `--my-color` вважатиметься окремою кастомною властивістю поруч із `--My-color`.

### Використання директиви `@property`

Директива {{cssxref("@property")}} дає змогу визначати кастомні властивості з більшою виразністю, маючи змогу пов'язувати її з типом, задавати усталені значення та контролювати успадкування.
Наступний приклад створює кастомну властивість `--logo-color`, яка очікує значення [`<color>`](/uk/docs/Web/CSS/color_value):

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Для того, щоб визначати чи працювати з кастомними властивостями в JavaScript, а не безпосередньо в CSS, є відповідний API.
Прочитати про те, як він працює, можна на сторінці [API властивостей і значень CSS](/uk/docs/Web/API/CSS_Properties_and_Values_API).

### Звертання до кастомних властивостей за допомогою `var()`

Незалежно від того, в який спосіб визначено кастомну властивість, використовувати її можна, звертаючись до неї в функції {{cssxref("var", "var()")}} замість стандартного значення властивості:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Перші кроки із кастомними властивостями

Почнімо з HTML, до якого застосуємо трохи стилів.
Є `<div>`, що виступає контейнером, який вміщає трохи дочірніх елементів, частина з яких мають вкладені елементи:

```html
<div class="container">
  <div class="one">
    <p>Один</p>
  </div>
  <div class="two">
    <p>Два</p>
    <div class="three">
      <p>Три</p>
    </div>
  </div>
  <input class="four" placeholder="Чотири" />
  <textarea class="five">П'ять</textarea>
</div>
```

Наступний CSS використовується для оформлення кількох різних елементів залежно від їхніх класів (частина правил компонування нижче не показана, щоб зосередитись на кольорах).
Залежно від їхніх класів, елементам задається колір тла `cornflowerblue` або `aquamarine`:

```css hidden
/* Задати шрифти, межі та внутрішні відступи */
body {
  font-family: sans-serif;
  color: white;
}

div,
input,
textarea {
  border: 2px black solid;
  padding: 4px;
  margin: 4px;
}

.container {
  display: grid;
  gap: 10px;
}
```

```css
/* Кожному класу задати колір */
.one {
  background-color: cornflowerblue;
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: cornflowerblue;
}
.four {
  background-color: cornflowerblue;
}

.five {
  background-color: cornflowerblue;
}
```

Це виводить наступний результат:

{{EmbedLiveSample("pershi-kroky-iz-kastomnymy-vlastyvostiamy",600,360)}}

Є можливість використовувати кастомні властивості для заміни повторюваних значень у цих правилах.
Коли визначити `--main-bg-color` в області `.container` та використати її значення у декількох місцях, оновлені стилі отримають такий вигляд:

```css
/* Визначити --main-bg-color тут */
.container {
  --main-bg-color: cornflowerblue;
}

/* Для кожного з класів – задати колір */
.one {
  background-color: var(--main-bg-color);
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: var(--main-bg-color);
}
.four {
  background-color: var(--main-bg-color);
}
.five {
  background-color: var(--main-bg-color);
}
```

## Використання псевдокласу :root

Для деяких оголошень CSS можна оголосити значення вище за каскадом, щоб успадкування CSS розв'язало цю проблему. Для нетривіальних проєктів це не завжди можливо. Оголошуючи кастомну властивість на псевдокласі {{cssxref(":root")}} і використовуючи її в документі, автор CSS коду може зменшити потребу в повторенні:

```css
/* Визначити --main-bg-color тут */
:root {
  --main-bg-color: cornflowerblue;
}

/* Для кожного з класів – задати колір */
.one {
  background-color: var(--main-bg-color);
}

.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: var(--main-bg-color);
}
.four {
  background-color: var(--main-bg-color);
}

.five {
  background-color: var(--main-bg-color);
}
```

Це веде до такого ж результату, як і в попередньому прикладі, але дає змогу використовувати одне канонічне оголошення значення властивості (`--main-bg-color: cornflowerblue;`), що дуже корисно, якщо пізніше знадобиться змінити значення в усьому проєкті.

## Успадкування кастомних властивостей

Кастомна властивість, визначена за допомогою двох дефісів `--`, а не `@property`, завжди успадковує значення від свого предка.
Це продемонстровано у наступному прикладі:

```html live-sample___dash-custom-property-inheritance
<div class="one">
  <p>Один</p>
  <div class="two">
    <p>Два</p>
    <div class="three"><p>Три</p></div>
    <div class="four"><p>Чотири</p></div>
  </div>
</div>
```

```css hidden live-sample___dash-custom-property-inheritance
div {
  color: black;
  font-family: sans-serif;
  width: 75%;
  height: 80%;
  margin: 4px;
  border: 2px black solid;
  display: inline-block;
}

p {
  margin: 0;
}

.one {
  height: 250px;
}

.two {
  height: 80%;
}

.three {
  height: 40%;
}

.four {
  height: 40%;
}
```

```css live-sample___dash-custom-property-inheritance
div {
  background-color: var(--box-color);
}

.two {
  --box-color: cornflowerblue;
}

.three {
  --box-color: aquamarine;
}
```

{{embedlivesample("dash-custom-property-inheritance", "100%", "280px")}}

Результат `var(--box-color)` залежить від успадкування наступним чином:

- `class="one"`: _недійсне значення_, яке є усталеним значенням кастомної властивості, визначеної таким чином
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (успадковане від предка)

Одним з аспектів кастомних властивостей, який демонструють приклади вище, є те, що вони не працюють точно так само, як змінні в інших мовах програмування.
Значення обчислюється там, де воно потрібне, а не зберігається та використовується в інших місцях списку стилів.
Наприклад, не можна задати значення властивості та розраховувати на отримання того самого значення в правилах нащадків сусіднього елемента.
Властивість задається лише для відповідного селектора та його нащадків.

### Використання `@property` для керування успадкуванням

Директива `@property` дає змогу явно вказати, успадковує властивість значення, чи ні.
Наступний приклад створює кастомну властивість за допомогою директиви `@property`.
Успадкування вимкнено, визначено тип даних [`<color>`](/uk/docs/Web/CSS/color_value) та усталене значення `cornflowerblue`.

Батьківський елемент задає `--box-color` зі значенням `green` і використовує `--box-color` як значення свого кольору тла.
Дочірній елемент також використовує `background-color: var(--box-color)`, і ми очікуємо, що він матиме колір `green`, якщо успадкування ввімкнено (або якщо воно визначено за допомогою синтаксису з двома дефісами).

```html live-sample___at-property-inheritance
<div class="parent">
  <p>Батьківський елемент</p>
  <div class="child">
    <p>Дочірній елемент з вимкненим для --box-color успадкуванням.</p>
  </div>
</div>
```

```css hidden live-sample___at-property-inheritance
div {
  color: white;
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
```

```css live-sample___at-property-inheritance
@property --box-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}

.parent {
  --box-color: green;
  background-color: var(--box-color);
}

.child {
  width: 80%;
  height: 40%;
  background-color: var(--box-color);
}
```

Оскільки в директиві задано `inherits: false;`, а значення для властивості `--box-color` не визначено всередині області `.child`, використовується усталене значення `cornflowerblue`, а не те, що було б успадковано від батьківського елемента – `green`:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Запасні значення кастомних властивостей

Задати запасні значення для кастомних властивостей можна за допомогою функції `var()` та налаштування `initial-value` директиви `@property`.

> [!NOTE]
> Запасні значення не використовуються для виправлення проблем сумісності, коли кастомні властивості CSS не підтримуються, оскільки запасне значення не допоможе в такому випадку.
> Запасні значення покривають ситуації, коли браузер підтримує кастомні властивості CSS та може використовувати інше значення, якщо бажана змінна ще не визначена або має недійсне значення.

### Визначення запасних варіантів у функції `var()`

Використовуючи функцію [`var()`](/uk/docs/Web/CSS/var), можна визначити кілька **запасних значень**, коли задана змінна ще не визначена; це може бути корисно при роботі з [кастомними елементами](/uk/docs/Web/API/Web_components/Using_custom_elements) та [тіньовим DOM](/uk/docs/Web/API/Web_components/Using_shadow_DOM).

Перший аргумент цієї функції – назва кастомної властивості. Другий аргумент – необов'язкове запасне значення, яке використовується як заміна, коли посилання на кастомну властивість недійсне.
Ця функція приймає два параметри, присвоюючи все, що стоїть після першої коми, другому з них. Якщо другий параметр недійсний, запасне значення не спрацює. Наприклад:

```css
.one {
  /* Червоний, якщо --my-var не визначена */
  color: var(--my-var, red);
}

.two {
  /* рожевий, якщо --my-var та --my-background не визначені */
  color: var(--my-var, var(--my-background, pink));
}

.three {
  /* Недійсно: "--my-background, pink" */
  color: var(--my-var, --my-background, pink);
}
```

Додання кастомної властивості як запасного варіанту, як у другому прикладі вище (`var(--my-var, var(--my-background, pink))`), є правильним способом надання більш ніж одного запасного варіанту за допомогою `var()`.
Проте слід пам'ятати про вплив цього методу на швидкодію, оскільки обробка вкладених змінних займає більше часу.

> [!NOTE]
> Синтаксис запасного варіанту, як і синтаксис [кастомних властивостей](https://www.w3.org/TR/css-variables/#custom-property), дозволяє використання ком. Наприклад, `var(--foo, red, blue)` визначає запасний варіант `red, blue` — усе, що передано між першою комою та кінцем виклику функції, вважається запасним значенням.

### Запасні варіанти при використанні початкового значення `@property`

Крім використання `var()`, як механізм запасних варіантів можна використовувати налаштування `initial-value` директиви `@property`.

Фактично ми це вже бачили в розділі [Успадкування з `@property`](#vykorystannia-property-dlia-keruvannia-uspadkuvanniam).

<!-- cSpell:ignore aqumarine -->

Наступний приклад за допомогою правила `@property` задає початкове значення `--box-color` як `cornflowerblue`.
У наборі правил, що стоїть після директиви, хотілося задати `--box-color` як `aquamarine`, але в назві значення є хибодрук.
Те саме істинно для третього `<div>`, де використано `2rem` для кастомної властивості, яка очікує дійсне [значення `<color>`](/uk/docs/Web/CSS/color_value).
І `2rem`, і `aqumarine` є недійсними значеннями кольору, тож застосовується початкове значення `cornflowerblue`:

```css live-sample___at-property-initial-value
@property --box-color {
  syntax: "<color>";
  initial-value: cornflowerblue;
  inherits: false;
}

.one {
  --box-color: aquamarine;
  background-color: var(--box-color);
}

.two {
  --box-color: aqumarine;
  background-color: var(--box-color);
}

.three {
  --box-color: 2rem;
  background-color: var(--box-color);
}
```

```css hidden live-sample___at-property-initial-value
div {
  color: white;
  font-family: sans-serif;
  width: 100px;
  height: 100px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
.one {
  color: black;
}
```

```html hidden live-sample___at-property-initial-value
<div class="one">
  <p>Один</p>
</div>
<div class="two">
  <p>Два.</p>
</div>
<div class="three">
  <p>Три.</p>
</div>
```

{{embedlivesample("at-property-initial-value", "100%", "150px")}}

## Недійсні кастомні властивості

Кожній властивості CSS можна присвоїти визначений [набір значень](/uk/docs/Learn_web_development/Core/Styling_basics/Values_and_units).
Якщо спробувати присвоїти значення властивості, яке не входить до її набору дійсних значень, воно вважається _недійсним_.

Коли браузер зустрічає недійсне значення для звичайної властивості CSS (наприклад, значення `16px` для властивості {{cssxref("color")}}), він відкидає оголошення, а елементи отримують значення, які вони мали б, якби цього оголошення не існувало.
У наступному прикладі помітно, що відбувається, коли звичайне оголошення CSS є недійсним; `color: 16px;` відкидається, і застосовується попереднє правило `color: blue`:

```html live-sample___invalid-property
<p>Цей абзац початково є чорним.</p>
```

```css live-sample___invalid-property
p {
  color: blue;
}

p {
  /* ой, це не дійсний колір */
  color: 16px;
}
```

{{EmbedLiveSample('invalid-property', 100, 50)}}

Проте коли розбираються значення кастомних властивостей, браузер ще не знає, де вони будуть використовуватися, тож він майже завжди вважає їх _дійсними_.
На жаль, такі дійсні значення можуть бути вжиті, за допомогою функції `var()`, у контексті, де вони можуть не мати сенсу.
Властивості та кастомні змінні можуть призводити до недійсних інструкцій CSS, що призводить до поняття _дійсності під час обчислення_.

Коли браузер зустрічає недійсну заміну `var()`, то використовується [початкове](/uk/docs/Web/CSS/initial_value) або [успадковане](/uk/docs/Web/CSS/Inheritance) значення властивості.
Цей приклад практично такий самий, як попередній, окрім того, що він використовує кастомну властивість.

Браузер на місці замінює `var(--text-color)` значенням `--text-color`, але `16px` не є дійсним значенням властивості {{cssxref("color")}}.
Після такої заміни властивість не має сенсу., тож браузер обробляє цю ситуацію у два етапи:

1. Перевірити, чи властивість кольору можна успадкувати. Так, втім, `<p>` не має жодного предка із властивістю `color`. Тому – перехід до наступного кроку.
2. Встановити значення **усталеного початкового значення**, тож – чорний.

```html live-sample___invalid-custom-property
<p>Цей абзац початково є чорним.</p>
```

```css live-sample___invalid-custom-property
:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property', 100, 50)}}

Для таких випадків директива `@property` може запобігти неочікуваним результатам, дозволяючи визначити початкове значення властивості:

```html live-sample___invalid-custom-property-fallbacks
<p>Цей параграф початково є чорним.</p>
```

```css live-sample___invalid-custom-property-fallbacks
@property --text-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}

:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property-fallbacks', 100, 50)}}

## Значення у JavaScript

Використання значень кастомних властивостей у JavaScript відбувається аналогічно до використання стандартних властивостей.

```js
// отримати змінну із вбудованого стилю
element.style.getPropertyValue("--my-var");

// отримати змінну звідки завгодно
getComputedStyle(element).getPropertyValue("--my-var");

// встановити змінну на вбудованому стилі
element.style.setProperty("--my-var", jsVar + 4);
```

## Дивіться також

- [Синтаксис кастомних властивостей](/uk/docs/Web/CSS/--*)
- Директива {{cssxref("@property")}}
- [`var()`](/uk/docs/Web/CSS/var)
- [API властивостей і значень CSS](/uk/docs/Web/API/CSS_Properties_and_Values_API)
- Модуль [Кастомних властивостей як каскадних змінних CSS](/uk/docs/Web/CSS/CSS_cascading_variables)
