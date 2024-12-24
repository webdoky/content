---
title: Схоплення прокручення CSS
slug: Web/CSS/CSS_scroll_snap
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-scroll-snap/
  - https://drafts.csswg.org/css-scroll-snap-2/
---

{{CSSRef}}

Модуль **Схоплення прокручення CSS** пропонує властивості, що дають змогу контролювати логіку панорамування та прокручення, визначаючи позиції схоплення. Вміст може бути схоплений у позиції, коли користувач прокручує переповнений вміст у межах {{Glossary("scroll container", "прокрутного контейнера")}}, надаючи поділ на сторінки та позиціювання прокручення.

Цей модуль містить властивості прокрутних відступів прокрутного контейнера, призначені для оптимального перегляду регіону шляхом поділу на сторінки під час виконання прокручення-до-елемента. Серед них також присутні scroll-margin і scroll-alignment, що задаються на дочірніх елементах прокрутного контейнера, призначені для налаштування візуальної області такого елемента, коли до цього елемента відбувається прокручення, а також властивість для примусової зупинки прокручення на окремому дочірньому елементі.

## Схоплення прокручення в дії

Щоб побачити в рамці нижче схоплення прокручення, прокрутіть вгору-вниз і вліво-вправо по сітці з 45 пронумерованих рамок у прокрутній області перегляду. Клацніть "Відтворити" у прикладі нижче, щоб переглянути або редагувати вихідний код на Ігровому майданчику MDN:

```js hidden live-sample___scroll_snap
const positions = ["start", "center", "end"];
const inlineDirection = document.getElementById("inline");
const blockDirection = document.getElementById("block");
const stop = document.getElementById("stop");
const snap = document.getElementById("snap");
const all = document.querySelector("article");
const rules = document.styleSheets[0].cssRules;

inlineDirection.addEventListener("change", () => {
  setSSA();
});
blockDirection.addEventListener("change", () => {
  setSSA();
});
stop.addEventListener("change", () => {
  setSST();
});
window.addEventListener("load", () => {
  setSST();
  setSSA();
});
snap.addEventListener("change", () => {
  all.classList.toggle("snapDisabled");
});

function setSSA() {
  rules[0].style.scrollSnapAlign = `${positions[blockDirection.value]} ${
    positions[inlineDirection.value]
  }`;
}

function setSST() {
  if (stop.checked) {
    rules[0].style.scrollSnapStop = "always";
  } else {
    rules[0].style.scrollSnapStop = "normal";
  }
}
```

```html hidden live-sample___scroll_snap
<article>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div>
    <fieldset>
      <legend>Змінити налаштування</legend>
      <p>
        <label
          ><input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="block" />
          блокова позиція</label
        >
      </p>
      <p>
        <label>
          <input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="inline" />
          рядна позиція
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox" id="stop" />
          Заборонити прокручення поза рамки
        </label>
      </p>
    </fieldset>

    <p>
      <label><input type="checkbox" id="snap" /> вимкнути схоплення</label>
    </p>

    <datalist id="places">
      <option value="0">start</option>
      <option value="1">center</option>
      <option value="2">end</option>
    </datalist>
  </div>
</article>
```

```css hidden live-sample___scroll_snap
li {
  /*
  починається з:
      scroll-snap-align: center center;
      scroll-snap-stop: normal (усталене);

  CSS змінюється за допомогою JavaScript, коли змінюються елементи керування.
  можна задати наступні значення:
      scroll-snap-stop: always | normal;
      scroll-snap-align: start | center | end {2}
        */
}
ul {
  overflow: auto;
  scroll-snap-type: both mandatory;
  overscroll-behavior-x: contain;
}
article.snapDisabled fieldset {
  opacity: 20%;
  pointer-events: none;
}
article.snapDisabled ul {
  scroll-snap-type: initial;
  overscroll-behavior-x: initial;
}

@layer pageSetup {
  article {
    display: flex;
    gap: 2vw;
  }
  div {
    flex: 1;
  }
  ul {
    display: grid;
    gap: 6.25vw;
    padding: 12.5vw;
    box-sizing: border-box;
    border: 1px solid;
    grid-template-columns: repeat(5, 1fr);
    background: conic-gradient(
      at bottom left,
      red 0deg,
      yellow 15deg,
      green 30deg,
      blue 45deg,
      purple 60deg,
      magenta 75deg
    );
    background-attachment: local;
    margin: auto;
    width: 20vw;
    height: 20vw;
  }
  li {
    scroll-snap-align: center;
    height: 12.5vw;
    width: 12.5vw;
    outline: 3px inset;
    list-style-type: none;
    background: white;
    font-family: monospace;
    font-size: 3rem;
    line-height: 12vw;
    text-align: center;
    counter-increment: items 1;
  }
  li::after {
    content: counter(items);
  }
  input {
    vertical-align: bottom;
  }
  p {
    font-family: monospace;
  }
}
```

{{EmbedLiveSample("scroll_snap", "", "250px")}}

Завдяки схопленню прокручення одна з пронумерованих рамок, до якої відбувається прокручення, встане на місце. Початковий CSS змушує цю рамку стати в центр області перегляду. Скористайтеся повзунами, аби змінити блокову та рядну позиції схоплення.

За допомогою властивостей схоплення можна дозволити або заблокувати прокручення за елемент, у цьому випадку – за пронумеровану рамку. Поставте галочку в полі "Заборонити прокручення за межі рамок", аби змусити всі прокрутні дії обмежуватися прокрученням до сусідньої рамки.

Аби порівняти схоплення прокручення зі звичайним прокрученням, поставте галочку в полі "вимкнути схоплення" і спробуйте прокрутити знову.

## Довідка

### Властивості на контейнерах

- {{cssxref("scroll-snap-type")}}
- {{cssxref("scroll-padding")}}
  - {{cssxref("scroll-padding-top")}}
  - {{cssxref("scroll-padding-right")}}
  - {{cssxref("scroll-padding-bottom")}}
  - {{cssxref("scroll-padding-left")}}
  - {{cssxref("scroll-padding-inline")}}
  - {{cssxref("scroll-padding-inline-start")}}
  - {{cssxref("scroll-padding-inline-end")}}
  - {{cssxref("scroll-padding-block")}}
  - {{cssxref("scroll-padding-block-start")}}
  - {{cssxref("scroll-padding-block-end")}}

### Властивості на дочірніх елементах

- {{cssxref("scroll-snap-align")}}
- {{cssxref("scroll-margin")}}
  - {{cssxref("scroll-margin-top")}}
  - {{cssxref("scroll-margin-right")}}
  - {{cssxref("scroll-margin-bottom")}}
  - {{cssxref("scroll-margin-left")}}
  - {{cssxref("scroll-margin-inline")}}
  - {{cssxref("scroll-margin-inline-start")}}
  - {{cssxref("scroll-margin-inline-end")}}
  - {{cssxref("scroll-margin-block")}}
  - {{cssxref("scroll-margin-block-start")}}
  - {{cssxref("scroll-margin-block-end")}}
- {{cssxref("scroll-snap-stop")}}

### Події

- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} {{experimental_inline}}
- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} {{experimental_inline}}

### Інтерфейси

- {{domxref("SnapEvent")}} {{experimental_inline}}
  - {{domxref("SnapEvent.snapTargetBlock")}} {{experimental_inline}}
  - {{domxref("SnapEvent.snapTargetInline")}} {{experimental_inline}}

## Посібники

- [Базові концепції схоплення прокручення CSS](/uk/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)
  - : Огляд і приклади можливостей схоплення прокручення CSS.
- [Використання подій схоплення прокручення](/uk/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
  - : Посібник з використання подій схоплення прокручення {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} і {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}}, які спрацьовують, коли браузер з'ясовує, що нова ціль схоплення перебуває в стані очікування чи вибрана.

## Споріднені концепції

- Псевдоклас {{cssxref(":target")}}
- Властивість CSS {{cssxref("overflow")}}
- Метод Element {{domxref("Element.scroll", "scroll()")}}
- Метод Element {{domxref("Element.scrollBy", "scrollBy()")}}
- Метод Element {{domxref("Element.scrollIntoView", "scrollIntoView()")}}
- Метод Element {{domxref("Element.scrollTo", "scrollTo()")}}
- Подія Element {{domxref("Element.scroll_event", "scroll")}}
- Подія Element {{domxref("Element.scrollend_event", "scrollend")}}
- Роль ARIA [`scrollbar`](/uk/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- Термін глосарія {{Glossary("Scroll container", "Прокрутний контейнер")}}

## Специфікації

{{Specifications}}

## Дивіться також

- Модуль [Переповнення CSS](/uk/docs/Web/CSS/CSS_overflow)
- Модуль [Стилізації смуг прокручення CSS](/uk/docs/Web/CSS/CSS_scrollbars_styling)
- [Області прокручення лише клавіатурою](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) на adrianroselli.com (2022)
- [Приклади схоплення прокручення](https://codepen.io/collection/KpqBGW) на CodePen (2022)
- [Добрий контроль прокручення за допомогою схоплення прокручення CSS](https://web.dev/articles/css-scroll-snap) на web.dev (2021)
- [Практичне схоплення прокручення CSS](https://css-tricks.com/practical-css-scroll-snapping/) на CSS-Tricks (2020)
- [Схоплення прокручення CSS](https://12daysofweb.dev/2022/css-scroll-snap/) на 12 Days of Web (2019)
