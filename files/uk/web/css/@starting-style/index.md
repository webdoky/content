---
title: "@starting-style"
slug: Web/CSS/@starting-style
page-type: css-at-rule
browser-compat: css.at-rules.starting-style
---

{{CSSRef}}

[Директива](/uk/docs/Web/CSS/At-rule) [CSS](/uk/docs/Web/CSS) **`@starting-style`** (стартовий стиль) використовується для визначення стартових значень властивостей, заданих для елемента, від яких повинні відбуватися переходи, коли елемент отримує свої перші стилі, тобто коли елемент вперше відображається на раніше завантаженій сторінці.

## Синтаксис

Директива `@starting-style` може використовуватися двома способами:

1. Як самостійний блок, у випадку чого вона вміщає один або кілька наборів правил, що визначають оголошення стартових стилів і вибирають елементи, до яких вони застосовуються:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Вкладеною в наявний набір правил, у випадку чого вона вміщає одне або кілька оголошень, що визначають стартові значення властивостей для елементів, вже вибраних цим набором правил:

   ```css
   selector { /* наявний набір правил */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Опис

Щоб уникнути неочікуваної поведінки, усталено [переходи CSS](/uk/docs/Web/CSS/CSS_transitions) не запускаються при початковому оновленні стилю елемента, або коли його тип {{CSSxRef("display")}} змінюється з `none` на якийсь інший. Щоб ввімкнути переходи початкового стилю, необхідні правила `@starting-style`. Вони надають початкові стилі для елементів, які не мають попереднього стану, визначаючи значення властивостей, від яких повинні відбуватися переходи.

Директива `@starting-style` особливо корисна при створенні переходів входу та виходу для елементів, відображених у {{glossary("top layer", "вищому шарі")}} (наприклад, [спливних віконець](/uk/docs/Web/API/Popover_API) і модальних {{htmlelement("dialog", "діалогів")}}), елементів, що змінюються з `display: none` на інший стан і навпаки, а також елементів, які вперше додаються до або вилучаються з DOM.

> [!NOTE]
> Директива `@starting-style` стосується лише Переходів CSS. При використанні [Анімацій CSS](/uk/docs/Web/CSS/CSS_animations) для реалізації таких ефектів `@starting-style` не потрібна. Дивіться приклад у [Застосуванні Анімацій CSS](/uk/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Є два способи використовувати `@starting-style`: як самостійне правило або всередині іншого набору правил.

Розгляньмо сценарій, за якого потрібно анімувати [спливне віконце](/uk/docs/Web/API/Popover_API), коли воно показується (тобто коли воно додається до вищого шару). "Вихідне правило", що задає стилі для відкритого спливного вікна, може мати якийсь такий вигляд (дивіться [приклад зі спливним віконцем](#animuvannia-splyvnoho-vikontsia) нижче):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Щоб задати стартові значення властивостей спливного віконця, які будуть анімовані за допомогою першого методу, треба додати до свого CSS самостійний блок `@starting-style`:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Директива `@starting-style` і "вихідне правило" мають однакову {{cssxref("specificity", "специфічність")}}. Щоб забезпечити застосування стартових стилів, слід додати директиву `@starting-style` _після_ "вихідного правила". Якщо задати директиву `@starting-style` перед "вихідним правилом", то вихідні стилі відкинуть стартові.

Щоб задати стартовий стиль для спливного віконця за допомогою метода вкладеності, треба вкласти блок `@starting-style` всередину "вихідного правила":

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);

  @starting-style {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

### Коли саме використовуються стартові стилі?

Важливо розуміти, що елемент переходитиме від своїх стилів `@starting-style` тоді, коли він вперше візуалізується в DOM, або коли він переходить зі значення {{cssxref("display", "display: none")}} на яке-небудь видиме значення. Коли він знову переходить зі свого початкового видимого стану, то більше не буде використовувати стилі `@starting-style`, оскільки тепер він видимий в DOM. Замість цього він переходитиме назад до будь-яких стилів, що існують для усталеного стану цього елемента.

Фактично є три стани стилів, які обробляються в таких ситуаціях: стан starting-style, перейдений стан і усталений стан. У таких випадках переходи "до" і "від" можуть бути різними. Доказ цього можна побачити в нашій [Демонстрації того, коли застосовуються стартові стилі](#demonstratsiia-toho-koly-zastosovuiutsia-startovi-styli) нижче.

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Базове використання @starting-style

Перехід {{cssxref("background-color")}} елемента від прозорості до зеленого, коли він вперше візуалізується:

```css
#target {
  transition: background-color 1.5s;
  background-color: green;
}

@starting-style {
  #target {
    background-color: transparent;
  }
}
```

Перехід {{cssxref("opacity")}} елемента, коли він змінює значення {{cssxref("display")}} з `none` на інше і навпаки:

```css
#target {
  transition-property: opacity, display;
  transition-duration: 0.5s;
  display: block;
  opacity: 1;
  @starting-style {
    opacity: 0;
  }
}

#target.hidden {
  display: none;
  opacity: 0;
}
```

### Демонстрація того, коли застосовуються стартові стилі

У цьому прикладі кнопка натискається для створення елемента {{htmlelement("div")}}, надання йому `class` `showing` і додавання його до DOM.

Клас `showing` отримує `@starting-style` із `background-color: red` і стиль `background-color: blue` для переходу до нього. Усталений набір правил містить `background-color: yellow`, а також тут задано `transition`.

Коли цей `<div>` уперше додається до DOM, спостерігається перехід фону від червоного до синього. Після затримки клас `showing` вилучається з `<div>` за допомогою JavaScript. На цьому етапі відбувається перехід від синього назад до жовтого, а не червоного. Це доводить те, що стартові стилі застосовуються лише тоді, коли елемент уперше додається до DOM. Як тільки він з'являється, елемент переходить назад до заданого йому усталеного стилю.

Після ще однієї затримки `<div>` узагалі вилучається з DOM, скидаючи початковий стан прикладу, щоб його можна було запустити знову.

#### HTML

```html
<button>Вивести <code>&lt;div&gt;</code></button>
```

#### CSS

```css hidden
div {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  margin-top: 10px;
}

div::after {
  content: "class: " attr(class);
  position: relative;
  top: 3px;
  left: 3px;
}
```

```css
div {
  background-color: yellow;
  transition: background-color 3s;
}

div.showing {
  background-color: skyblue;
}

@starting-style {
  div.showing {
    background-color: red;
  }
}
```

#### JavaScript

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.disabled = true;
  const divElem = document.createElement("div");
  divElem.classList.add("showing");
  document.body.append(divElem);

  setTimeout(() => {
    divElem.classList.remove("showing");

    setTimeout(() => {
      divElem.remove();
      btn.disabled = false;
    }, 3000);
  }, 3000);
});
```

#### Результат

Цей код візуалізується так:

{{EmbedLiveSample("demonstratsiia-toho-koly-zastosovuiutsia-startovi-styli", "100%", "150")}}

### Анімування спливного віконця

У цьому прикладі [спливне віконце](/uk/docs/Web/API/Popover_API) анімується за допомогою [Переходів CSS](/uk/docs/Web/CSS/CSS_transitions). Базові анімації входу та виходу задаються за допомогою властивості {{CSSxRef("transition")}}.

#### HTML

HTML тут містить елемент {{htmlelement("div")}}, оголошений як спливне віконце за допомогою атрибута [popover](/uk/docs/Web/HTML/Global_attributes/popover), і елемент {{htmlelement("button")}}, призначений для керування відображенням спливного віконця за допомогою атрибута [popovertarget](/uk/docs/Web/HTML/Element/button#popovertarget).

```html
<button popovertarget="mypopover">Показати спливне віконце</button>
<div popover="auto" id="mypopover">
  Я – Спливне віконце! Я повинно рухатися.
</div>
```

#### CSS

У цьому прикладі анімуються дві властивості, {{cssxref("opacity")}} і {{cssxref("transform")}} (зокрема – перетворення горизонтального масштабування), щоб змусити спливне віконце проступати та зникати, а також збільшуватися та зменшуватися по горизонталі.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* Кінцевий стан анімації виходу */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Еквівалентно щодо
  transition: all 0.7s allow-discrete; */
}

/* Додати після правила [popover]:popover-open */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Перехід для задника спливного віконця */
[popover]::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Еквівалентно щодо
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Вкладеність (&) не підтримується для псевдоелементів,
тому задати самостійний блок starting-style. */
@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

Щоб цього досягнути, необхідно задати стартовий стан для цих властивостей на усталеному стані прихованості елемента спливного віконця (вибраного за допомогою `[popover]`), а кінцевий стан – на відкритому стані спливного віконця (вибраного за допомогою псевдокласу {{cssxref(":popover-open")}}).

Потім задається властивість {{cssxref("transition")}}, щоб анімувати між двома станами. Стартовий стан для анімації включається всередині директиви `@starting-style`, щоб увімкнути анімацію входу.

Оскільки анімований елемент виводиться на {{glossary("top layer", "вищий шар")}} тоді, коли показується, і вилучається з вищого шару тоді, коли приховується (за допомогою {{cssxref("display", "display: none")}}), потрібно додаткові кроки, щоб забезпечити роботу анімації в обох напрямках:

- До списку перехідних елементів додається `display`, щоб забезпечити видимість анімованого елемента (задання `display: block` або іншого видимого значення `display`) протягом обох анімацій входу та виходу. Без цього анімація виходу не буде видимою; на практиці спливне віконце просто зникне. Зверніть увагу, що в скороченні також задається значення {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}}, щоб увімкнути анімацію.
- До списку перехідних елементів додається {{cssxref("overlay")}}, щоб забезпечити відкладання вилучення елемента з вищого шару до закінчення анімації. Це несуттєво для простих анімацій, таких як ця, але в складніших випадках, якщо цього не робити, елемент буде вилучено з вищого шару занадто швидко, що призведе до того, що анімація не буде плавною й ефективною. Знову ж таки, в цьому випадку потрібно задати значення [`transition-behavior: allow-discrete`](/uk/docs/Web/CSS/transition-behavior), щоб анімація відбулася.

> [!NOTE]
> Також додано перехід на {{cssxref("::backdrop")}}, що з'являється під спливним віконцем, коли воно відкрите, щоб забезпечити гарну анімацію затемнення. `[popover]:popover-open::backdrop` використовується для вибору задника, коли спливне віконце відкрите.

#### Результат

Цей код візуалізується так:

{{EmbedLiveSample("animuvannia-splyvnoho-vikontsia", "100%", "200")}}

> [!NOTE]
> У зв'язку з тим, що спливні віконця змінюються від `display: none` до `display: block` кожного разу, коли показуються, спливне віконце переходить від своїх стилів `@starting-style` до своїх стилів `[popover]:popover-open` кожного разу, коли відбувається перехід входу. Коли спливне віконце закривається, воно переходить від свого стану `[popover]:popover-open` до усталеного стану `[popover]`.

> [!NOTE]
> Приклад, що демонструє перехід елемента {{htmlelement("dialog")}} і його задника під час показу та приховування на сторінці довідки елемента `<dialog>` – дивіться [Перехід елементів діалогу](/uk/docs/Web/HTML/Element/dialog#perekhody-elementiv-dialohu).

### Переходи елементів при додаванні та вилученні з DOM

Цей приклад включає кнопку, яка, коли натискається, додає нові елементи до контейнера {{htmlelement("section")}}. Кожен елемент і собі містить вкладену кнопку, яка, коли натискається, вилучає елемент. Цей приклад демонструє, як використовувати переходи для анімації елементів при їх додаванні до або вилученні з DOM.

#### HTML

```html
<button>Створити нову колонку</button>
<section></section>
```

#### JavaScript

JavaScript дає змогу додавати та вилучати елементи:

```js
const btn = document.querySelector("button");
const sectionElem = document.querySelector("section");

btn.addEventListener("click", createColumn);

function randomColor() {
  function randomNum() {
    return Math.floor(Math.random() * 255);
  }

  return `rgb(${randomNum()} ${randomNum()} ${randomNum()})`;
}

function createColumn() {
  const divElem = document.createElement("div");
  divElem.style.backgroundColor = randomColor();

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";
  closeBtn.setAttribute("aria-label", "close");
  divElem.append(closeBtn);
  sectionElem.append(divElem);

  closeBtn.addEventListener("click", () => {
    divElem.classList.add("fade-out");

    setTimeout(() => {
      divElem.remove();
    }, 1000);
  });
}
```

Коли клацають кнопку "Створити нову колонку", викликається функція `createColumn()`. Це породжує новий елемент {{htmlelement("div")}} з випадково згенерованим кольором тла й елементом {{htmlelement("button")}} для закриття цього `<div>`. Потім вона додає `<button>` до `<div>`, а `<div>` — до контейнера `<section>`.

Потім за допомогою {{domxref("EventTarget.addEventListener", "addEventListener()")}} до кнопки закриття додається слухач подій. Клацання цієї кнопки робить дві речі:

- Додає `<div>` клас `fade-out`. Додання цього класу викликає задану для нього анімацію виходу.
- Вилучає цей `<div>` після затримки 1000 мс. Функція {{domxref("Window.setTimeout", "setTimeout()")}} затримує вилучення `<div>` з DOM (за допомогою {{domxref("Element.remove()")}}) до закінчення анімації.

#### CSS

Додано {{cssxref("transition", "перехід")}}, що анімує {{cssxref("opacity")}} та {{cssxref("scale")}} кожної колонки при їх додаванні та вилученні:

```css hidden
html * {
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 10px;
}

body > button {
  margin: 10px 10px 0 10px;
}

section {
  display: flex;
  flex: 1;
  gap: 10px;
  margin: 10px;
}
```

```css
div {
  flex: 1;
  border: 1px solid gray;
  position: relative;
  background: linear-gradient(
    to right,
    rgb(255 255 255 / 0%),
    rgb(255 255 255 / 50%)
  );
  opacity: 1;
  scale: 1 1;

  transition:
    opacity 0.7s,
    scale 0.7s,
    display 0.7s allow-discrete,
    all 0.7s allow-discrete;
  /* Рівносильно щодо
  transition: all 0.7s allow-discrete; */
}

/* Додати після правила `div` */
@starting-style {
  div {
    opacity: 0;
    scale: 1 0;
  }
}

.fade-out {
  opacity: 0;
  display: none;
  scale: 1 0;
}

div > button {
  font-size: 1.6rem;
  background: none;
  border: 0;
  text-shadow: 2px 1px 1px white;
  border-radius: 15px;
  position: absolute;
  top: 1px;
  right: 1px;
  cursor: pointer;
}
```

Щоб анімувати {{cssxref("opacity")}} та {{cssxref("scale")}} кожного `<div>` при його додаванні до DOM, а потім навпаки – при вилученні з DOM, необхідно:

- Задати кінцевий стан властивостей, за якими повинен відбутися перехід, у правилі `div { ... }`.
- Задати стартовий стан, від якого повинен відбутися перехід властивостей, всередині блоку `@starting-style`.
- Задати анімацію виходу всередині правила `.fade-out` – це клас, який JavaScript присвоює елементам `<div>` при натисканні на їхні кнопки закриття. Крім задання кінцевих станів `opacity` та `scale`, також для елементів `<div>` задається [`display: none`](/uk/docs/Web/CSS/display): щоб вони ставали недоступними негайно після вилучення з користувацького інтерфейсу.
- Задати список {{cssxref("transition")}} усередині правила `div { ... }`, щоб анімувати `opacity`, `scale` і `display`. Зверніть увагу, що для `display` у скороченні також задається значення {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}}, щоб анімація відбулася.

#### Результат

Остаточний результат має такий вигляд:

{{EmbedLiveSample("perekhody-elementiv-pry-dodavanni-ta-vyluchenni-z-dom", "100%", "400")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Модуль [Переходів CSS](/uk/docs/Web/CSS/CSS_transitions)
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- {{domxref("CSSStartingStyleRule")}}
- [Чотири нові можливості CSS для плавних анімацій входу та виходу](https://developer.chrome.com/blog/entry-exit-animations/) на developer.chrome.com (2023)
