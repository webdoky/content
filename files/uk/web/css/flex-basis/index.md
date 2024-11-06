---
title: flex-basis
slug: Web/CSS/flex-basis
page-type: css-property
browser-compat: css.properties.flex-basis
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`flex-basis`** (основа гнучкості) задає початкову основну розмірність {{glossary("flex item", "гнучкого елемента")}}. Вона задає розмір рамки вмісту, якщо у {{Cssxref("box-sizing")}} не задано щось інше.

> [!NOTE]
> Радять використовувати скорочення {{cssxref("flex")}}, а не окремі оголошення `flex-grow`, `flex-shrink` і `flex-basis`. Тут вони розділені, адже цей документ про одну зі складових скорочення – властивість `flex-basis`.

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

У цьому прикладі як властивість {{cssxref("flex-grow")}}, так і властивість {{cssxref("flex-shrink")}} мають значення `1` на всіх трьох елементах, що означає те, що гнучкі елементи можуть збільшуватися і зменшуватися відносно початкового значення `flex-basis`.

Це демо змінює значення `flex-basis` на першому гнучкому елементі, завдяки чому він зростає або скорочується для заповнення доступного простору. Інші гнучкі елементи також змінюють розмір, вони щонайменше мають розмір `min-content`. Наприклад, коли `flex-basis` першого елемента отримує значення `200px`, то він починає від `200px`, але потім скорочується для заповнення доступного простору.

Якщо `flex-basis` має значення, відмінне від `auto`, і для того самого гнучкого елемента задано `width` (або, у випадку `flex-direction: column`, `height`), то значення `flex-basis` має пріоритет.

## Синтаксис

```css
/* Задати <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;

/* Ключові слова природного розміру */
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Задати розмір автоматично на основі вмісту гнучкого елемента */
flex-basis: content;

/* Глобальні значення */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: revert-layer;
flex-basis: unset;
```

Властивість `flex-basis` задається або ключовим словом `content`, або значенням `<'width'>`.

### Значення

- `<'width'>`

  - : Будь-яка з наступних одиниць вимірювання:
    - {{cssxref("&lt;length&gt;")}} задає абсолютне значення.
    - {{cssxref("&lt;percentage&gt;")}} задає відсотки ширини або висоти області вмісту контейнерного блоку. Відсоткові значення `flex-basis` вирішуються відносно гнучкого контейнера. Якщо розмір гнучкого контейнера не є скінченним, то вжите значення `flex-basis` – `content`.
    - `auto` використовує значення {{cssxref("width")}} за горизонтального письма та значення {{cssxref("height")}} за вертикального; коли відповідне значення також `auto`, замість нього використовується значення `content`.
    - {{cssxref("max-content")}} задає бажану природну ширину.
    - {{cssxref("min-content")}} задає мінімальну природну ширину.
    - {{cssxref("fit-content")}} задає максимально можливий розмір області вмісту контейнерного блока, обмежену значеннями `min-content` і `max-content`, що обчислюється на основі вмісту поточного елемента.

- `content`

  - : Вказує на автоматичне визначення розміру на основі вмісту гнучкого елемента.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Задання початкових розмірів гнучких елементів

#### HTML

```html
<ul class="container">
  <li class="flex flex1">1: перевірка flex-basis</li>
  <li class="flex flex2">2: перевірка flex-basis</li>
  <li class="flex flex3">3: перевірка flex-basis</li>
  <li class="flex flex4">4: перевірка flex-basis</li>
  <li class="flex flex5">5: перевірка flex-basis</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: перевірка flex-basis</li>
</ul>
```

#### CSS

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 14px;
  text-align: center;
  position: relative;
}

.flex::after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 12px;
}

.flex1 {
  flex-basis: auto;
}

.flex1::after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2::after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3::after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4::after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5::after {
  content: "content";
}
```

#### Результати

{{EmbedLiveSample('zadannia-pochatkovykh-rozmiriv-hnuchkykh-elementiv', '', '360')}}

### Основа гнучкості `0` і `0%`

Цей приклад демонструє різницю між `flex-basis` `0` і `flex-basis` `0%`, коли `flex-direction` має значення `column`, а гнучкі контейнери та гнучкі елементи не мають заданої висоти; коли `0` – це абсолютна величина, то відсоткові значення `flex-basis` вирішуються до значень [`content`](#content)

#### HTML

Додаються два гнучкі контейнери з однаковою структурою. Вони стилізуються подібно, коли не рахувати їхніх значень `flex-basis`. В кожному контейнері по два безпосередні нащадки: заголовок `<div>` і `<section>`. Елемент `<section>` має дочірній `<div>` із вмістом, який не заданий як гнучкий елемент, а має задану висоту.

```html
<div class="container basis-0">
  <div>заголовок</div>
  <section>
    flex-basis: 0;
    <div class="content"></div>
  </section>
</div>
<div class="container basis-0-percent">
  <div>заголовок</div>
  <section>
    flex-basis: 0%;
    <div class="content"></div>
  </section>
</div>
```

#### CSS

Контейнери стилізуються як рядні гнучкі контейнери, що з'являються поруч, аби їх зручніше було порівнювати. Властивості `flex-direction` задається column. Гнучкі елементи першого контейнера мають значення `flex-basis` `0`, а другого – `0%`. Ані гнучкі контейнери, ані їхні гнучкі елементи не мають явно заданої висоти, проте висота елементів `section` не може перевищувати `200px`, а їхні дочірні елементи мають висоту `300px`.

```css
.container {
  width: 40vw;
  padding: 1rem;
  border: 1px dashed blue;

  display: inline-flex;
  flex-direction: column;
}

section {
  border: 1px solid red;

  overflow: auto;
  min-height: 200px;
}

.content {
  background: wheat;
  height: 300px;
}

.container.basis-0 > * {
  flex-basis: 0;
}
.container.basis-0-percent > * {
  flex-basis: 0%;
}
```

#### Результати

{{EmbedLiveSample('osnova-hnuchkosti-0-i-0', '100%', '400')}}

У першому контейнері, де `flex-basis: 0`, елемент `<section>` має початковий головний розмір нуля, але зростає до граничної висоти `200px`. У другому контейнері, де `flex-basis: 0%`, елемент `<section>` має початковий головний розмір `300px`, тому що, оскільки гнучкий контейнер не має заданої висоти, відсоткові значення flex-basis вирішуються до значення [`content`](#content).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Скорочення {{cssxref("flex")}}
- {{cssxref("inline-size")}}
- [Базові концепції флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Контроль співвідношень між гнучкими елементами за головною віссю](/uk/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- Модуль [Компонування гнучкої рамки CSS](/uk/docs/Web/CSS/CSS_flexible_box_layout)
