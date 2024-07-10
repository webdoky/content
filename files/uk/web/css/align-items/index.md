---
title: align-items
slug: Web/CSS/align-items
page-type: css-property
browser-compat: css.properties.align-items
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`align-items`** (шикувати елементи) задає значення {{cssxref("align-self")}} для всіх безпосередніх нащадків як єдиної групи. У Флексбоксі ця властивість контролює шикування елементів на {{glossary("cross axis", "перехресній осі")}}. При сітковому компонуванні вона контролює шикування елементів на блоковій осі, в межах їхньої {{glossary("grid areas", "сіткової області")}}.

{{EmbedInteractiveExample("pages/css/align-items.html")}}

Інтерактивний приклад нижче демонструє частину значень `align-items` при використанні сіткового та гнучкого компонування.

## Синтаксис

```css
/* Базові ключові слова */
align-items: normal;
align-items: stretch;

/* Позиційне шикування */
/* align-items не приймає значення left і right */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;
align-items: anchor-center;

/* Шикування за базовою лінією */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Шикування переповнення (лише для позиційного шикування) */
align-items: safe center;
align-items: unsafe center;

/* Глобальні значення */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
```

### Значення

- `normal`

  - : Дія цього ключового слова залежить від активного способу компонування:

    - При компонуванні з абсолютним позиціонуванням – поводиться як `start` у _заміщених_ блоках з абсолютним позиціонуванням і як `stretch` у _всіх інших_ блоках з абсолютним позиціонуванням.
    - При статичному позиціонуванні при компонуванні з абсолютним позиціонуванням – поводиться як `stretch`.
    - Для гнучких елементів – поводиться як `stretch`.
    - Для сіткових елементів – призводить до логіки, подібної до логіки `stretch`, окрім блоків зі {{glossary("aspect ratio", "співвідношенням сторін")}} чи природними розмірами, для яких це ключове слово поводиться як `start`.
    - Ця властивість не застосовується до елементів блокового рівня, а також до комірок таблиць.

- `center`

  - : Рамки полів гнучких елементів центруються в межах шеренги на перехресній осі. Якщо перехресний розмір елемента перевищує розмір гнучкого контейнера, то такий елемент рівномірно вийде за межі контейнера з обох боків.

- `start`

  - : Елементи нагромаджуються врівень одне до одного у напрямку до початкового краю контейнера шикування за відповідною віссю.

- `end`

  - : Елементи нагромаджуються врівень одне до одного у напрямку до кінця контейнера шикування за відповідною віссю.

- `self-start`

  - : Елементи нагромаджуються врівень до краю з початкового боку елемента контейнера шикування, за відповідною віссю.

- `self-end`

  - : Елементи нагромаджуються врівень до краю з кінцевого боку елемента контейнера шикування, за відповідною віссю.

- `baseline`, `first baseline`, `last baseline`

  - : Усі гнучкі елементи шикуються так, що їхні [базові лінії гнучкого контейнера](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) збігаються. Елемент з найбільшою відстанню між його перехресно-початковим зовнішнім краєм та його базовою лінією стає врівень з перехресно-початковим краєм шеренги.

- `stretch`

  - : Якщо елементи менші за контейнер шикування, то елементи з автоматичним розміром рівномірно розтягуються, щоб заповнити контейнер, з урахуванням обмежень на ширину та висоту елементів.

- `anchor-center` {{experimental_inline}}

  - : У випадку елементів [з якірним позиціюванням](/uk/docs/Web/CSS/CSS_anchor_positioning) це значення вишиковує елементи біля центру заданого якірного елемента за блоковим напрямком. Дивіться [Центрування на якорі за допомогою `anchor-center`](/uk/docs/Web/CSS/CSS_anchor_positioning/Using#tsentruvannia-na-yakori-za-dopomohoiu-anchor-center).

- `safe`

  - : Використовуються вкупі з ключовим словом шикування. Якщо обране ключове слово означає, що елемент виходить за межі контейнера шикування, призводячи до втрати даних, то елемент замість цього шикується так, ніби спосіб шикування – `start`.

- `unsafe`

  - : Використовується вкупі з ключовим словом шикування. Незалежно від відносних розмірів елемента й контейнера шикування, а також того, чи може відбутися вихід за межі зі втратою даних, виконується задане значення шикування.

Іще є два значення, визначені для флексбоксу, оскільки вони засновані на концепціях [осей гнучкої моделі](/uk/docs/Learn/CSS/CSS_layout/Flexbox#hnuchka-model), то працюють також і при сітковому компонуванні:

- `flex-start`

  - : Використовується лише при гнучкому компонуванні, вирівнює гнучкі елементи в гнучкому контейнері біля початкового боку на його головній чи перехресній осі. Коли використовується поза контекстом гнучкого форматування, це значення поводиться як `start`.

- `flex-end`
  - : Використовується лише при гнучкому компонуванні, вирівнює гнучкі елементи в гнучкому контейнері біля кінцевого боку на його головній чи перехресній осі. Коли використовується поза контекстом гнучкого форматування, це значення поводиться як `end`.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

У цьому прикладі є контейнер з шістьома дочірніми елементами. Спадне меню {{htmlelement("select")}} дає змогу перемкнути властивість {{cssxref("display")}} контейнера між значеннями `grid` і `flex`. Друге меню дає змогу змінити значення властивості `align-items` контейнера.

### CSS

Контейнер і його елементи стилізуються в такий спосіб, щоб забезпечити дві лінії чи ряди елементів. Визначено класи `.flex` і `.grid`, які застосовуються до контейнера засобами JavaScript. Вони задають контейнеру значення {{cssxref("display")}}, а також задають кольори фону та меж, забезпечуючи додаткову індикацію того, що компонування змінено. Кожен з шести гнучких елементів має інший колір фону, причому четвертий з них має дві лінії тексту, а шостий – збільшений шрифт.

```css
.flex,
.grid {
  height: 200px;
  width: 500px;
  align-items: initial; /* Можна змінити в живому зразку */
  border: solid 5px transparent;
  gap: 3px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  background-color: #8c8c9f;
  border-color: magenta;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  background-color: #9f8c8c;
  border-color: slateblue;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}
```

```css hidden
select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}

div > div {
  box-sizing: border-box;
  border: 2px solid #fff;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### HTML

Є контейнер {{htmlelement("div")}} з шістьома вкладеними в нього дочірніми `<div>`. HTML для форми та JavaScript, що змінює клас контейнера, приховані заради стислості.

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4<br />лінія 2</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>
```

```html hidden
<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const display = document.getElementById("display");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", (evt) => {
  container.className = evt.target.value;
});
```

### Результат

{{EmbedLiveSample("pryklady", "260", "290")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("align-self")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-items")}}
- Скорочення {{cssxref("place-items")}}
- [Базові концепції флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Вирівнювання елементів у гнучкому контейнері](/uk/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Рамкове вирівнювання при сітковому компонуванні CSS](/uk/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- Модуль [Рамкового вирівнювання CSS](/uk/docs/Web/CSS/CSS_box_alignment)
- Модуль [Компонування гнучких рамок CSS](/uk/docs/Web/CSS/CSS_flexible_box_layout)
- Модуль [Сіткового компонування CSS](/uk/docs/Web/CSS/CSS_grid_layout)
