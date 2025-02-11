---
title: animation
slug: Web/CSS/animation
page-type: css-shorthand-property
browser-compat: css.properties.animation
---

{{CSSRef}}

Властивість-[скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`animation`** (анімація) застосовує анімування зміни стилю. Це скорочення для {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} і {{cssxref("animation-timeline")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

## Властивості-складові

Ця властивість є скороченням для наступних властивостей CSS:

- [`animation-delay`](/uk/docs/Web/CSS/animation-delay)
- [`animation-direction`](/uk/docs/Web/CSS/animation-direction)
- [`animation-duration`](/uk/docs/Web/CSS/animation-duration)
- [`animation-fill-mode`](/uk/docs/Web/CSS/animation-fill-mode)
- [`animation-iteration-count`](/uk/docs/Web/CSS/animation-iteration-count)
- [`animation-name`](/uk/docs/Web/CSS/animation-name)
- [`animation-play-state`](/uk/docs/Web/CSS/animation-play-state)
- [`animation-timeline`](/uk/docs/Web/CSS/animation-timeline)
- [`animation-timing-function`](/uk/docs/Web/CSS/animation-timing-function)

## Синтаксис

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slide-in;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slide-in;

/* дві анімації */
animation:
  3s linear slide-in,
  3s ease-out 5s slide-out;
```

Властивість `animation` задається у вигляді однієї або більше окремих анімацій, розділених комами.

Кожна окрема анімація задається як:

- нуль, одне або більше входжень значень {{cssxref("&lt;time&gt;")}}

- нуль або одне входження наступних значень:

  - [`<single-easing-function>`](#single-easing-function)
  - [`<single-animation-iteration-count>`](#single-animation-iteration-count)
  - [`<single-animation-direction>`](#single-animation-direction)
  - [`<single-animation-fill-mode>`](#single-animation-fill-mode)
  - [`<single-animation-play-state>`](#single-animation-play-state)

- необов'язкова назва анімації, яка може бути `none`, {{cssxref("&lt;custom-ident&gt;")}} або {{cssxref("&lt;string&gt;")}}

> [!NOTE]
> Наразі {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}} і {{cssxref("animation-range-end")}} не включені до цього списку, оскільки нинішні їхні реалізації є простим скиданням. Це означає, що додавання `animation` скидає раніше оголошене значення `animation-timeline` на `auto`, і раніше оголошені значення `animation-range-start` і `animation-range-end` на `normal`, але ці властивості не можна задати за допомогою `animation`. У разі створення [прокрутно-керованої анімації CSS](/uk/docs/Web/CSS/CSS_scroll-driven_animations) необхідно оголосити ці властивості після можливого оголошення скорочення `animation`, щоб вони спрацювали.

### Значення

- `<single-easing-function>`
  - : Визначає тип переходу. Значення повинно належати до {{cssxref("easing-function")}}.
- `<single-animation-iteration-count>`
  - : Число разів відтворення анімації. Значення повинно належати до {{cssxref("animation-iteration-count")}}.
- `<single-animation-direction>`
  - : Напрям, у якому відтворюється анімація. Значення повинно належати до {{cssxref("animation-direction")}}.
- `<single-animation-fill-mode>`
  - : Визначає те, як стилі застосовуються до цілі анімації до та після її виконання. Значення повинно належати до {{cssxref("animation-fill-mode")}}.
- `<single-animation-play-state>`
  - : Визначає те, чи відтворюється анімація, чи ні. Значення повинно належати до {{cssxref("animation-play-state")}}.

## Опис

Порядок часових значень у межах визначення кожної анімації є важливим: перше значення, яке можна розтлумачити як {{cssxref("&lt;time&gt;")}}, береться за {{cssxref("animation-duration")}}, а друге — за {{cssxref("animation-delay")}}.

Порядок інших значень в межах визначення кожної анімації – також важливий: для вирізнення значення {{cssxref("animation-name")}} серед інших значень. Якщо значення усередині скорочення `animation` можна розтлумачити як значення для анімаційної властивості, окрім `animation-name`, то це значення спершу застосовується до такої властивості, а не до `animation-name`. Тому в разі використання скорочення `animation` радять вказувати значення для `animation-name` останнім у списку значень, навіть коли ви задаються кілька анімацій, розділених комами.

Попри те, що назва анімації обов'язкова для застосування анімації, всі значення скорочення `animation` є необов'язковими й усталено отримують початкове значення кожної зі властивостей-складових. Початкове значення `animation-name` — `none`, тобто якщо в скороченні `animation` не оголошено значення `animation-name`, то анімація не застосовується до жодної з властивостей.

Коли у властивості-скороченні `animation` пропущено значення `animation-duration`, значенням цієї властивості усталено стає `0s`. У цьому випадку анімація все одно відбувається (події [`animationStart`](/uk/docs/Web/API/Element/animationstart_event) та [`animationEnd`](/uk/docs/Web/API/Element/animationend_event) спрацьовують), але така анімація не буде помітною.

У разі значення `animation-fill-mode` [forwards](/uk/docs/Web/CSS/animation-fill-mode#forwards) анімовані властивості поводяться так, ніби додані в значення властивості [`will-change`](/uk/docs/Web/CSS/will-change). Якщо під час анімації створюється новий контекст нагромадження, то цільовий елемент зберігає цей контекст після завершення такої анімації.

## Доступність

Анімація блимання та миготіння може бути проблематичною для людей з когнітивними порушеннями, наприклад – розладом дефіциту уваги та гіперактивності (РДУГ). Крім того, певні види руху можуть викликати проблеми для людей з вестибулярними розладами, епілепсією, мігренню та скотопічною чутливістю.

Розгляньте можливість надання механізму для призупинення чи вимкнення анімації, а також використання [Медіазапиту зниженої рухливості](/uk/docs/Web/CSS/@media/prefers-reduced-motion), аби створити особливий досвід для користувачів, які виразили побажання щодо зменшення анімації.

- [Розробка безпечнішої анімації для людей з руховою чутливістю · Стаття на A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Вступ до Медіазапиту зниженої рухливості | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Чуйний дизайн для руху | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Розуміння WCAG, пояснення Настанови 2.2](/uk/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Розуміння Критерію успіху 2.2.2 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

> [!NOTE]
> Анімувати властивості [Рамкової моделі CSS](/uk/docs/Web/CSS/CSS_box_model) краще не варто. Анімування кожної зі властивостей рамкової моделі саме собою вимагає значних обчислювальних ресурсів; розгляньте можливість натомість анімувати властивість [transform](/uk/docs/Web/CSS/transform).

### Схід Сонця

Тут анімується жовте сонце на світло-блакитному небі. Сонце сходить
до центру області перегляду, а потім виходить з поля зору.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden; /* приховує ту частину сонця, що перебуває під горизонтом */
  background-color: lightblue;
  display: flex;
  justify-content: center; /* центрує сонце на тлі */
}

.sun {
  background-color: yellow;
  border-radius: 50%; /* створює кругове тло */
  height: 100vh; /* надає сонцю розмір області перегляду */
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate sun-rise;
}

@keyframes sun-rise {
  from {
    /* виштовхує сонце вниз за межі області перегляду */
    transform: translateY(110vh);
  }
  to {
    /* повертає сонце на своє місце */
    transform: translateY(0);
  }
}
```

{{EmbedLiveSample('skhid-sontsia')}}

### Анімування кількох властивостей

Поверх анімації сонця з попереднього прикладу додається друга анімація, що змінює колір сонця під час сходу та заходу. Сонце спершу темно-червоне, коли перебуває під горизонтом, а потім стає яскраво-помаранчевим, коли досягає верху.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate animating-multiple-properties;
}

/* можна анімувати кілька властивостей в одній анімації */
@keyframes animating-multiple-properties {
  from {
    transform: translateY(110vh);
    background-color: red;
    filter: brightness(75%);
  }
  to {
    transform: translateY(0);
    background-color: orange;
    /* скинуті властивості, наприклад 'filter', повернуться до усталених значень */
  }
}
```

{{EmbedLiveSample('animuvannia-kilkokh-vlastyvostei')}}

### Застосування кількох анімацій

Тут сонце, що сходить і заходить на світло-блакитному тлі. Сонце
поступово проходить крізь весь спектр кольорів веселки. Хронометражі
положення та кольору сонця незалежні одне від одного.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /* кілька анімацій розділені комами, параметри кожної анімації задаються окремо */
  animation:
    4s linear 0s infinite alternate rise,
    24s linear 0s infinite psychedelic;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

{{EmbedLiveSample('zastosuvannia-kilkokh-animatsii')}}

### Каскадування кількох анімацій

Тут жовте сонце на світло-блакитному тлі. Воно скаче між лівим і правим боками області перегляду. Сонце залишається в області перегляду, навіть якщо задано анімацію сходу. Властивість transform анімації rise "перезаписується" властивістю transform анімації стрибка.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /*
    анімації, оголошені далі в каскаді, перезаписують
    властивості анімацій, оголошених раніше
  */
  /* стрибок "перезаписує" transform, заданий rise, тому сонце рухається лише горизонтально */
  animation:
    4s linear 0s infinite alternate rise,
    4s linear 0s infinite alternate bounce;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounce {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(50vw);
  }
}
```

{{EmbedLiveSample('kaskaduvannia-kilkokh-animatsii')}}

Дивіться більше прикладів у [Застосуванні анімацій CSS](/uk/docs/Web/CSS/CSS_animations/Using_CSS_animations#pryklady).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Застосування анімацій CSS](/uk/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- API JavaScript {{domxref("AnimationEvent")}}
