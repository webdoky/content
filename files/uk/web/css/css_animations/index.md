---
title: Анімації CSS
slug: Web/CSS/CSS_animations
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-animations-2/
  - https://drafts.csswg.org/css-animations/
---

{{CSSRef}}

Модуль **Анімацій CSS** дає змогу анімувати значення властивостей CSS, як то background-position і transform, протягом часу, за допомогою ключових кадрів. Кожний ключовий кадр описує те, як анімований елемент повинен візуалізуватися в певний час протягом анімаційної послідовності. У модулі анімацій можна використовувати властивості для контролю тривалості, числа повторень, відкладеного старту та інших аспектів анімації.

### Анімації в дії

Щоб переглянути анімацію в рамці нижче, клацніть поле 'Відтворити анімацію' або наведіть на цю рамку курсор. Коли анімація активна, хмарка згори змінює форму, падають сніжинки, і рівень снігу внизу зростає. Щоб призупинити анімацію, зніміть галочку з поля або відведіть курсор від рамки.

```html hidden live-sample___animation
<!-- Дивіться aria-label: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label -->
<input
  type="checkbox"
  id="animate"
  aria-label="Перемкнути стан відтворення анімації" />
<label for="animate">анімацію</label>
<div class="root">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <div class="cloud"></div>
  <div class="ground"></div>
</div>
```

```css hidden live-sample___animation
i {
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  animation: falling 3s linear 0s infinite backwards;
  /* Сніжинки зроблені за допомогою лінійних градієнтів CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) */
  background-image: linear-gradient(
      180deg,
      transparent 40%,
      white 40% 60%,
      transparent 60%
    ),
    linear-gradient(90deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(45deg, transparent 43%, white 43% 57%, transparent 57%),
    linear-gradient(135deg, transparent 43%, white 43% 57%, transparent 57%);
}
i:nth-of-type(4n) {
  /* Використання деревних структурних псевдокласів для створення випадковості - https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type */
  height: 30px;
  width: 30px;
  transform-origin: right -30px;
}
i:nth-of-type(4n + 1) {
  height: 24px;
  width: 24px;
  transform-origin: left 30px;
}
i:nth-of-type(4n + 2) {
  height: 10px;
  width: 10px;
  transform-origin: -30px 0;
}
i:nth-of-type(4n + 3) {
  height: 40px;
  width: 40px;
  transform-origin: -50px 0;
}
i:nth-of-type(4n) {
  animation-duration: 5.3s;
  animation-iteration-count: 12;
  transform-origin: -10px -20px;
}
i:nth-of-type(4n + 1) {
  animation-duration: 3.1s;
  animation-iteration-count: 20;
  transform-origin: 10px -20px;
}
i:nth-of-type(4n + 2) {
  animation-duration: 1.7s;
  animation-iteration-count: 35;
  transform-origin: right -20px;
}
i:nth-of-type(3n) {
  animation-delay: 2.3s;
}
i:nth-of-type(3n + 1) {
  animation-delay: 1.5s;
}
i:nth-of-type(3n + 2) {
  animation-delay: 3.4s;
}
i:nth-of-type(5n) {
  animation-timing-function: ease-in-out;
}
i:nth-of-type(5n + 1) {
  animation-timing-function: ease-out;
}
i:nth-of-type(5n + 2) {
  animation-timing-function: ease;
}
i:nth-of-type(5n + 3) {
  animation-timing-function: ease-in;
}
i:nth-of-type(5n + 4) {
  animation-timing-function: linear;
}
i:nth-of-type(11n) {
  animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9);
}
i:nth-of-type(7n) {
  opacity: 0.5;
}
i:nth-of-type(7n + 2) {
  opacity: 0.3;
}
i:nth-of-type(7n + 4) {
  opacity: 0.7;
}
i:nth-of-type(7n + 6) {
  opacity: 0.6;
  animation-timing-function: ease-in;
  transform-origin: left 10px;
}
i:nth-of-type(7n + 1) {
  opacity: 0.8;
}
.root {
  height: 580px;
  background-color: skyblue;
  border: 1px solid darkgrey;
  position: relative;
  overflow: hidden;
}
.ground,
.cloud {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
}
.cloud {
  width: 100%;
  height: 150px;
  background: #ffffff;
  border-radius: 0 0 90px 33% / 0 0 45px 50px;
  box-shadow:
    5px 15px 15px white,
    -5px 15px 15px white,
    0 20px 20px rgb(125 125 125 / 0.5);
  animation:
    clouds ease 5s alternate infinite 0.2s,
    wind ease-out 4s alternate infinite;
}
.ground {
  bottom: 0;
  background-image: linear-gradient(to top, #fff 97%, 99%, #bbb 100%);
  background-position: center 580px;
  animation: snowfall linear 300s forwards;
  border: 1px solid grey;
  /* Помістити землю в тривимірний візуалізаційний контекст (тому що сніжинки перебувають у ньому) */
  transform: translate3d(0, 0, 0);
}
@keyframes snowfall {
  from {
    background-position: center 580px;
  }
  to {
    background-position: center 280px;
  }
}
@keyframes clouds {
  from {
    border-radius: 0 0 90px 33% / 0 0 45px 50px;
  }
  to {
    border-radius: 0 0 40px 50% / 0 0 55px 80px;
  }
}
@keyframes wind {
  from {
    height: 150px;
  }
  to {
    height: 100px;
  }
}
@keyframes falling {
  from {
    transform: translate(0, -50px) rotate(0deg) scale(0.9, 0.9);
  }
  to {
    transform: translate(30px, 600px) rotate(360deg) scale(1.1, 1.1);
  }
}
/* Усталено анімації призупинені. */
i,
div[class] {
  animation-play-state: paused;
}
/* Коли на div наводиться курсор, анімація відтворюється. Крім цього,
коли поле має галочку, анімація надходить після відтворення поля з галочкою */
div:hover *,
input:checked ~ div * {
  animation-play-state: running;
}
/* Змінити вміст підпису, що стоїть зразу після поля. На підписі додано aria-label, щоб покращити доступність. */
input + label::before {
  content: "Грати ";
}
input:checked + label::before {
  content: "Призупинити ";
}
```

{{EmbedLiveSample("animation", "", "610px")}}

Цей зразок анімації використовує {{cssxref("animation-iteration-count")}} для того, щоб сніжинки падали раз за разом, {{cssxref("animation-direction")}}, щоб хмарка рухалася туди-сюди, {{cssxref("animation-fill-mode")}}, щоб рівень снігу зростав у відповідь на рух хмарки, та {{cssxref("animation-play-state")}}, щоб призупинити анімацію.

Клацніть "Грати" у прикладі вище, аби побачити чи редагувати код анімації в Ігровому майданчику MDN.

## Довідка

### Властивості

- Скорочення {{cssxref("animation")}}
- {{cssxref("animation-composition")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-timeline")}}

### Директиви

- {{cssxref("@keyframes")}}

### Події

Всі анімації, навіть ті, що мають тривалість 0 секунд, викидають анімаційні події.

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### Інтерфейси

- [API Вебанімацій]()(/uk/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEvent")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}

## Посібники

- [Застосування Анімацій CSS](/uk/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Покроковий підручник зі створення анімацій за допомогою CSS. Ця стаття описує властивості CSS і директиву, що стосуються анімації, а також те, як вони взаємодіють одне з одним.
- [Застосування API вебанімацій](/uk/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
  - : Поширені потреби щодо анімацій, які можна задовольнити кількома рядками JavaScript.

## Споріднені концепції

- Властивість CSS {{cssxref("will-change")}}
- Тип даних [`<easing-function>`](/uk/docs/Web/CSS/easing-function)
- Медіазапит [`prefers-reduced-motion`](/uk/docs/Web/CSS/@media/prefers-reduced-motion)
- Термін глосарія {{glossary("Bezier curve", "Крива Безьє")}}

## Специфікації

{{Specifications}}

## Дивіться також

- [Прокрутні анімації CSS](/uk/docs/Web/CSS/CSS_scroll-driven_animations)
- Властивості модуля [Переходів](/uk/docs/Web/CSS/CSS_transitions) CSS можуть запускати анімації на основі користувацьких дій
- Властивість {{cssxref("interpolate-size")}} і функція {{cssxref("calc-size()")}} для вмикання анімацій до та від [значень природного розміру](/uk/docs/Glossary/Intrinsic_Size).
- Елемент HTML {{htmlelement("canvas")}} поряд з [API полотна](/uk/docs/Web/API/Canvas_API) та [API WebGL](/uk/docs/Web/API/WebGL_API) для малювання графіки та анімацій
- Інтерфейс {{domxref("SVGAnimationElement")}} для всіх інтерфейсів елементів, що стосуються анімації, включно з {{domxref("SVGAnimateElement")}}, {{domxref("SVGSetElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}} і {{domxref("SVGAnimateTransformElement")}}
