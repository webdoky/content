---
title: transition
slug: Web/CSS/transition
page-type: css-shorthand-property
browser-compat: css.properties.transition
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`transition`** є [властивістю-скороченням](/uk/docs/Web/CSS/Shorthand_properties) для {{cssxref("transition-property")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-timing-function")}}, {{cssxref("transition-delay")}}, та {{cssxref("transition-behavior")}}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Перехід дозволяє визначити зміну між двома станами елемента. Різні стани можуть бути визначені за допомогою [псевдокласів](/uk/docs/Web/CSS/Pseudo-classes), як-от {{cssxref(":hover")}} чи {{cssxref(":active")}}, або динамічно задані за допомогою JavaScript.

## Властивості-складові

Ця властивість є скороченням для наступних властивостей CSS:

- [`transition-behavior`](/uk/docs/Web/CSS/transition-behavior)
- [`transition-delay`](/uk/docs/Web/CSS/transition-delay)
- [`transition-duration`](/uk/docs/Web/CSS/transition-duration)
- [`transition-property`](/uk/docs/Web/CSS/transition-property)
- [`transition-timing-function`](/uk/docs/Web/CSS/transition-timing-function)

## Синтаксис

```css
/* Застосувати до 1 властивості */
/* назва властивості | тривалість */
transition: margin-right 4s;

/* назва властивості | тривалість | затримка */
transition: margin-right 4s 1s;

/* назва властивості | тривалість | функція згладжування */
transition: margin-right 4s ease-in-out;

/* назва властивості | тривалість | функція згладжування | затримка */
transition: margin-right 4s ease-in-out 1s;

/* назва властивості | тривалість | поведінка */
transition: display 4s allow-discrete;

/* Застосувати до 2 властивостей */
transition:
  margin-right 4s,
  color 1s;

/* Застосувати до всіх змінених властивостей */
transition: all 0.5s ease-out allow-discrete;
transition: 200ms linear 50ms;

/* Глобальні значення */
transition: inherit;
transition: initial;
transition: revert;
transition: revert-layer;
transition: unset;
```

Значення властивості `transition` задається в один із таких способів:

- Спеціальне значення `none`, яке вказує, що переходи на цьому елементі не відбуватимуться. Це усталене значення.
- Один або декілька переходів для окремих властивостей, розділені комами.

Кожен самостійний перехід описує перехід, який слід застосувати до однієї або всіх властивостей. Він містить:

- нуль або одне значення, що представляє властивість або властивості, до яких слід застосувати перехід. Його можна задати за допомогою:
  - {{cssxref("&lt;custom-ident&gt;")}}, що представляє одну властивість.
  - Спеціального значення `all`, яке вказує, що перехід буде застосовано до всіх властивостей, які змінюються, коли елемент змінює стан.
  - Жодного значення; в такому разі виводиться значення `all`, і заданий перехід все одно застосовується до всіх змінюваних властивостей.
- нуль або одне значення {{cssxref("&lt;easing-function&gt;")}}, що задає функцію згладжування
- нуль, одне або два значення {{cssxref("&lt;time&gt;")}}. Перше значення, яке можна розпізнати як час, призначається для {{cssxref("transition-duration")}}, а друге – для {{cssxref("transition-delay")}}.
- нуль або одне значення, що оголошує, чи слід починати переходи для властивостей, чия анімаційна поведінка є [дискретною](/uk/docs/Web/CSS/CSS_animated_properties#discrete). Значення, якщо воно присутнє, є або ключовим словом `allow-discrete`, або ключовим словом `normal`.

Якщо задано властивість переходу `all` для одного переходу окремої властивості, але потім задано наступні переходи для окремих властивостей зі значеннями {{cssxref("&lt;custom-ident&gt;")}}, ці наступні переходи перемагають перший. Наприклад:

```css
transition:
  all 200ms,
  opacity 400ms;
```

У цьому випадку всі властивості, які змінюються, коли елемент змінює стан, переходять з тривалістю 200 мс, за винятком {{cssxref("opacity")}}, для якої перехід триватиме 400 мс.

Дивіться, [як обробляються ситуації](/uk/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#koly-spysky-znachen-vlastyvostei-maiut-riznu-dovzhynu), коли списки значень властивостей мають різну довжину. Якщо стисло, то зайві описи переходів, що перевищують кількість властивостей, які фактично анімуються, ігноруються.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Базовий приклад

У цьому прикладі, коли користувач наводить курсор на елемент, є півсекундна (`500ms`) затримка, перш ніж відбувається двосекундний перехід кольору фону.

#### HTML

```html
<a class="target">Наведіть на мене курсор</a>
```

#### CSS

Задаються два значення {{cssxref("time")}}. У властивості-скороченні `transition` першим значенням `<time>` є `transition-duration`. Друге значення часу — це `transition-delay`. Обидва усталено дорівнюють `0s`, якщо не задані.

```css
.target {
  font-size: 2rem;
  background-color: palegoldenrod;
  transition: background-color 2s 500ms;
}

.target:hover {
  background-color: darkorange;
}
```

{{EmbedLiveSample('bazovyi-pryklad', 600, 100)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Модуль [Переходів CSS](/uk/docs/Web/CSS/CSS_transitions)
- [Застосування переходів CSS](/uk/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
