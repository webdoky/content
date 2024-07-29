---
title: justify-content
slug: Web/CSS/justify-content
page-type: css-property
browser-compat: css.properties.justify-content
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`justify-content`** (вирівняти вміст) визначає те, як браузер розподіляє простір між та навколо елементами вмісту за {{Glossary("main axis", "головною віссю")}} flex-контейнера, а також [рядною віссю](/uk/docs/Glossary/Logical_properties#riadnyi-napriam) сіткових і багатоколонкових контейнерів.

Інтерактивний приклад нижче показує деякі значення `justify-content` за допомогою сіткової розкладки.

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

## Синтаксис

```css
/* Позиційне шикування */
justify-content: center;
justify-content: start;
justify-content: end;
justify-content: flex-start;
justify-content: flex-end;
justify-content: left;
justify-content: right;

/* Звичайне шикування */
justify-content: normal;

/* Розподілене шикування */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
justify-content: stretch;

/* Шикування переповнення */
justify-content: safe center;
justify-content: unsafe center;

/* Глобальні значення */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### Значення

- `start`

  - : Елементи складені один за одним з початкового краю контейнера шикування на основній осі.

- `end`

  - : Елементи складені один за одним з кінцевого краю контейнера шикування на основній осі.

- `flex-start`

  - : Елементи складені один за одним на краю контейнера шикування, залежно від боку початку гнучкого контейнера.
    Це застосовується лише до елементів гнучкої розкладки. Для елементів, що не є дочірніми для гнучкого контейнера, це значення є еквівалентним до `start`.

- `flex-end`

  - : Елементи складені один за одним на краю контейнера шикування, залежно від боку кінця гнучкого контейнера.
    Це застосовується лише до елементів гнучкої розкладки. Для елементів, що не є дочірніми для гнучкого контейнера, це значення є еквівалентним до `end`.

- `center`

  - : Елементи складені один за одним біля центру контейнера шикування на основній осі.

- `left`

  - : Елементи складені один за одним з лівого краю контейнера шикування. Коли горизонтальна вісь властивості не паралельна до рядкової осі, наприклад, коли задано [`flex-direction: column;`](/uk/docs/Web/CSS/flex-direction), то це значення еквівалентне до `start`.

- `right`

  - : Елементи складені один за одним з правого краю контейнера шикування на відповідній осі. Якщо вісь властивості не паралельна до рядкової осі (в сітковому контейнері) або рядковій осі (у флексбокс-контейнері), то це значення еквівалентне до `start`.

- `normal`

  - : Поводиться як `stretch`, окрім випадків багатоколонкових контейнерів з [`column-width`](/uk/docs/Web/CSS/column-width) зі значенням, відмінним від `auto`, – тоді колонки займають задану для них ширину `column-width`, а не розтягуються для заповнення контейнера. Оскільки `stretch` поводиться у гнучких контейнерах як `start`, то `normal` тоді також поводиться як `start`.

- `space-between`

  - : Елементи рівномірно розподілені в межах контейнера шикування вздовж головної осі. Проміжки між кожними двома сусідніми елементами – однакові. Перший елемент знаходиться прямо на початковому краю, а останній – прямо на кінцевому краю.

- `space-around`

  - : Елементи рівномірно розподілені в межах контейнера шикування вздовж головної осі. Проміжки між кожними двома сусідніми елементами – однакові. Незайнятий простір перед першим та після останнього елемента дорівнює половині простору між кожними двома сусідніми елементами. Якщо елемент лише один, то він центрується.

- `space-evenly`

  - : Елементи рівномірно розподілені в межах контейнера шикування вздовж головної осі Простір між кожними двома елементами, а також між початковим краєм та першим елементом, як і між кінцевим краєм та останнім елементом, цілковито однаковий.

- `stretch`

  - : Якщо сума довжин елементів за головною віссю менша за довжину контейнера шикування, то будь-які елементи з автоматичною довжиною кожен отримують рівне (без дотримання пропорцій) збільшення довжини, втім, із дотриманням обмежень, накладених {{cssxref("max-height")}} та {{cssxref("max-width")}} (або еквівалентною функціональністю), тож сума довжин якраз заповнює контейнер шикування вздовж головної осі.

    > [!NOTE]
    > Що до [флексбоксів](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox), то значення `stretch` поводиться як `flex-start` або `start`. Це пов'язано з тим, що у флексбоксах розтягування контролюється за допомогою властивості {{CSSXref("flex-grow")}}.

- `safe`

  - : Якщо елемент переповнює контейнер шикування, то елемент шикується так, ніби режим шикування – `start`. Бажане шикування не буде реалізовано.

- `unsafe`
  - : Навіть якщо елемент переповнює контейнер шикування, бажане шикування все-таки реалізовується. На відміну від значення `safe`, котре ігнорує бажане шикування на користь запобігання переповненню.

## Опис

Властивість `justify-content`, визначена в модулі [Рамкового шикування CSS](/uk/docs/Web/CSS/CSS_box_alignment), застосовується до багатоколонкових контейнерів, гнучких контейнерів і сіткових контейнерів. Вона не застосовується і ніяк не діє на блокові контейнери.

Ця властивість поділяє чимало значень – ключових слів зі властивістю {{cssxref("align-content")}}, проте не всі! `justify-content` не бере участі в шикуванні за базовою лінією, а отже – не приймає значень щодо базової лінії.

При [гнучкому компонуванні](/uk/docs/Web/CSS/CSS_flexible_box_layout) ця властивість визначає те, як додатний вільний простір розподіляється між або навколо гнучких елементів за головною віссю. Вона впливає на простір між елементами в лінії, а не на простір між лініями. Шикування виконується, коли довжини та автоматичні зовнішні поля вже застосовані, тобто коли один або більше гнучких елементів на лінії мають множник {{cssxref("flex-grow")}}, більший за `0`, ця властивість не діє, як ніби на цій лінії немає простору для розподілу. Крім цього, оскільки розтягування на головній осі контролюється властивістю {{cssxref("flex")}}, значення `stretch` поводиться як `flex-start`.

При [сітковому компонуванні](/uk/docs/Web/CSS/CSS_grid_layout) ця властивість розподіляє доступний простір між або навколо сіткових колонок, а не сіткових елементів. Якщо сітковий контейнер більший за саму сітку, то властивістю `justify-content` можна скористатися для вирівнювання сітки за рядною віссю, шикуючи сіткові колонки.

Сіткові доріжки з розміром `auto` (і лише вони) можуть розтягуватися властивостями `align-content` і `justify-content`. Таким чином, усталено доріжка з розміром `auto` займе всю решту простору в сітковому контейнері. Оскільки рядний розмір сітки повинен бути меншим за рядний розмір сіткового контейнера, щоб для розподілу лишився якийсь простір, то ця властивість у такому разі ніяк не діє.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Базовий приклад з сіткою

У цьому прикладі є сітка, вужча за її сітковий контейнер, і `justify-content` використовується для рівного розподілу доступного простору навколо та між сітковими колонками.

#### HTML

Контейнер {{htmlelement("section")}}, наш майбутній сітковий контейнер, має 16 вкладених у нього {{htmlelement("div")}}, що стануть сітковими елементами.

```html
<section class="container">
  <div>А</div>
  <div>Б</div>
  <div>В</div>
  <div>Г</div>
  <div>Ґ</div>
  <div>Д</div>
  <div>Е</div>
  <div>Є</div>
  <div>Ж</div>
  <div>З</div>
  <div>И</div>
  <div>І</div>
  <div>Ї</div>
  <div>Й</div>
  <div>К</div>
  <div>Л</div>
</section>
```

#### CSS

```css hidden
.container {
  margin: 5px;
  border: 1px solid;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

Контейнеру задана ширина `500px`, а також задано три колонки, кожна `80px` завширшки, тож є `260px` доступного простору для розподілу між або навколо колонок. Потім задано `justify-content: space-evenly`, тобто буде `65px` простору перед, між і після кожної колонки.

Задано різні ширини (та фонові кольори), аби продемонструвати, як вирівнювання застосовується до колонок.

```css
.container {
  display: grid;
  grid: auto-flow / repeat(3, 80px);
  width: 500px;
  justify-content: space-evenly;
}

div {
  background-color: pink;
  width: 80px;
}

div:nth-of-type(n + 9) {
  width: 35px;
  background-color: lightgreen;
}

div:nth-last-of-type(3) {
  width: 250px;
  background-color: lightblue;
}
```

#### Результат

{{EmbedLiveSample("bazovyi-pryklad-z-sitkoiu", "100%", 220)}}

Зауважте, що `justify-contents` шикує колонки та не впливає на елементи чи шикування в сіткових областях. Сіткові елементи, навіть ті з них, що не вміщаються в свою сіткову комірку, не впливають на вирівнювання колонок.

### Ключовий термін safe

Цей приклад демонструє ключовий термін `safe`. Задаються чотири відцентровані гнучкі елементи, яким не дозволено переходити на нову лінію, і як наслідок – вони не вміщаються в своєму однолінійному гнучкому контейнері. Коли додати до `center` у властивості `justify-content` `safe`, то вміст, що не вміщається, поводиться так, ніби заданий спосіб шикування – `start`

```html hidden
<p><code>justify-content: center;</code></p>
<section class="container safe">
  <div>А</div>
  <div>Б</div>
  <div>В</div>
  <div>Г</div>
</section>
<p><code>justify-content: safe center;</code></p>
<section class="container safe-center">
  <div>А</div>
  <div>Б</div>
  <div>В</div>
  <div>Г</div>
</section>
<p><code>justify-content: safe center;</code> з 3 елементами</p>
<section class="container safe-center">
  <div>А</div>
  <div>Б</div>
  <div>В</div>
</section>
```

```css hidden
.container {
  margin: 5px auto;
  border: 1px dashed;
  box-sizing: border-box;
  background-color: lightblue;
}

div {
  line-height: 1em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
  background-color: pink;
}
```

Контейнеру задано `center`, і кожному контейнеру, крім першого, додано ключове слово `safe`:

```css
.container {
  align-items: baseline;
  display: flex;
  width: 350px;
  height: 2em;
}

.safe {
  justify-content: center;
}

.safe-center {
  justify-content: safe center;
}

div {
  flex: 0 0 100px;
}
```

#### Результат

{{EmbedLiveSample("kliuchove-slovo-safe", "100%", 260)}}

Оскільки елемент не вміщається в контейнері шикування, то з `safe` спосіб шикування поводиться як `start`, а шикування `center` не реалізовано. Ключовий термін `safe` не діє, якщо елементи вміщаються в контейнері.

### Візуалізація розподілу гнучких елементів

Цей приклад містить багатолінійне гнучке компонування. Другий гнучкий елемент має додатний множник гнучкого зростання, з'їдаючи весь доступний вільний простір на першій гнучкій лінії.

#### CSS

```css hidden
#container {
  margin: 5px auto;
  border: 1px dashed black;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

```css
#container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between; /* Може бути змінене у живому зразку */
  width: 510px;
}

div {
  line-height: 2em;
  flex: 0 0 120px;
  background-color: pink;
}

div:nth-of-type(2) {
  flex-grow: 1;
  background-color: yellow;
}

div:nth-of-type(n + 9) {
  flex: 0 0 35px;
  background-color: lightgreen;
}
div:last-of-type {
  flex: 0 0 300px;
  background-color: lightblue;
}
```

```html hidden
<section id="container">
  <div>А</div>
  <div>РІСТ</div>
  <div>В</div>
  <div>Г</div>
  <div>Ґ</div>
  <div>Д</div>
  <div>Е</div>
  <div>Є</div>
  <div>Ж</div>
  <div>З</div>
  <div>И</div>
  <div>І</div>
  <div>Ї</div>
  <div>Й</div>
  <div>К</div>
  <div>Л</div>
</section>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
const justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", (evt) => {
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

#### Результат

{{EmbedLiveSample("vizualizatsiia-rozpodilu-hnuchkykh-elementiv", "100%", 180)}}

Оберіть різні ключові слова в спадному меню, аби побачити візуалізацію різних значень – ключових слів `justify-content`. Оскільки елемент на першій лінії може зростати, на цій лінії немає доступного простору, який могла б розподіляти властивість `justify-content`. У випадку значення `space-between` перший елемент на кожній лінії тримається початкового краю за головною віссю, а останній – кінцевого за головною. Як наслідок, якщо на лінії лише один елемент, то він шикується за головним початковим краєм (як це видно на останній лінії). Все не так для інших значень `space-*`, як то `space-evenly` та `space-around`, які центрують одноелементні гнучкі лінії.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- _[Основні концепції флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- _[Шикування елементів у гнучкому контейнері](/uk/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- _[Блокове шикування при сітковому компонуванні CSS](/uk/docs/Web/CSS/CSS_Grid_Layout/Box_alignment_in_grid_layout)_
- Модуль [Блокового шикування CSS](/uk/docs/Web/CSS/CSS_box_alignment)
