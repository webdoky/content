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

{{EmbedGHLiveSample("css-examples/modules/animation.html", '100%', 650)}}

Цей зразок анімації використовує {{cssxref("animation-iteration-count")}} для того, щоб сніжинки падали раз за разом, {{cssxref("animation-direction")}}, щоб хмарка рухалася туди-сюди, {{cssxref("animation-fill-mode")}}, щоб рівень снігу зростав у відповідь на рух хмарки, та {{cssxref("animation-play-state")}}, щоб призупинити анімацію.

Щоб переглянути код цієї анімації, [дивіться вихідний код на GitHub](https://github.com/webdoky/css-examples/blob/main/modules/animation.html).

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
- [Поради та хитрощі Анімацій CSS](/uk/docs/Web/CSS/CSS_animations/Tips)
  - : Поради та хитрощі, що допоможуть отримати максимум від Анімацій CSS.

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
- Елемент HTML {{htmlelement("canvas")}} поряд з [API полотна](/uk/docs/Web/API/Canvas_API) та [API WebGL](/uk/docs/Web/API/WebGL_API) для малювання графіки та анімацій
- Інтерфейс {{domxref("SVGAnimationElement")}} для всіх інтерфейсів елементів, що стосуються анімації, включно з {{domxref("SVGAnimateElement")}}, {{domxref("SVGSetElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}} і {{domxref("SVGAnimateTransformElement")}}
