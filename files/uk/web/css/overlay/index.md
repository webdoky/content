---
title: overlay
slug: Web/CSS/overlay
page-type: css-property
status:
  - experimental
browser-compat: css.properties.overlay
---

{{CSSRef}}{{SeeCompatTable}}

Властивість [CSS](/uk/docs/Web/CSS) **`overlay`** (накладка) задає те, чи візуалізується елемент, зустрічаючись у [верхньому шарі](/uk/docs/Glossary/Top_layer) (наприклад, показане [спливне віконце](/uk/docs/Web/API/Popover_API) або модальний елемент {{htmlelement("dialog")}}), фактично в верхньому шарі. Ця властивість є важливою лише в межах списку значень {{cssxref("transition-property")}}, і лише якщо `allow-discrete` задано як {{cssxref("transition-behavior")}}.

Важливо зауважити, що `overlay` може бути задано _лише_ браузером: авторські стилі не можуть змінювати значення `overlay` жодного елемента. Проте можна додати `overlay` до [списку перехідних властивостей](/uk/docs/Web/CSS/transition-property), заданих для елемента. Це призводить до того, що його вилучення з верхнього шару відкладається, щоб його можна було анімувати, а він не зникав одразу.

> **Примітка:** При переході `overlay` необхідно задати на переході [`transition-behavior: allow-discrete`](/uk/docs/Web/CSS/transition-behavior), щоб ця властивість анімувалась. Анімації `overlay` відрізняються від звичайних [дискретних анімацій](/uk/docs/Web/CSS/CSS_animated_properties#discrete) тим, що видимий (тобто `auto`) стан завжди відображається протягом усього переходу, незалежно від того, чи є він початковим, чи кінцевим станом.

## Синтаксис

```css
/* Значення – ключові слова */
overlay: auto;
overlay: none;

/* Глобальні значення */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

### Значення

- `auto`
  - : Цей елемент візуалізується у верхньому шарі, якщо підноситься до верхнього шару.
- `none`
  - : Цей елемент не візуалізується у верхньому шарі.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{CSSSyntax}}

## Приклади

### Перехід спливного віконця

У цьому прикладі [спливне віконце](/uk/docs/Web/API/Popover_API) анімується, коли воно [переходить](/uk/docs/Web/CSS/CSS_transitions) з прихованого стану до показаного та назад.

#### HTML

HTML містить елемент {{htmlelement("div")}}, оголошений як спливне віконце за допомогою атрибута [popover](/uk/docs/Web/HTML/Global_attributes/popover), та елемент {{htmlelement("button")}}, призначений для керування відображенням спливаючого віконця за допомогою атрибута [popovertarget](/uk/docs/Web/HTML/Element/button#popovertarget).

```html
<button popovertarget="mypopover">Показати спливне віконце</button>
<div popover="auto" id="mypopover">
  Я Спливне віконце! Я повинно анімуватися.
</div>
```

#### CSS

Властивість `overlay` присутня лише у списку перехідних властивостей. Оскільки `overlay` є властивістю, керованою користувацьким агентом, вона не оголошується у станах до переходу або після переходу.

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
  /* Рівносильно щодо
  transition: all 0.7s allow-discrete; */
}

/* Щоб подіяти, наступний код повинен стояти після правила [popover]:popover-open,
   оскільки специфічність тут однакова */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Перехід для задника спливного віконця */

[popover]::backdrop {
  background-color: rgb(0 0 0 / 0);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Рівносильно щодо
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 0.25);
}

/* Вкладені селектори (&) не можуть представляти псевдоелементи, тому це
   правило starting-style не може бути вкладеним. */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0);
  }
}
```

Двома властивостями, що анімуються, є [`opacity`](/uk/docs/Web/CSS/opacity) та [`transform`](/uk/docs/Web/CSS/transform)): ми хочемо, щоб спливне віконце з'являлося та зникало, розширюючись та скорочуючись по горизонталі. Початковий стан цих властивостей задається на прихованому стані елемента спливного віконця (вибраного за допомогою `[popover]`), а кінцевий стан — на відкритому стані спливного віконця (вибраного за допомогою псевдокласу [`:popover-open`](/uk/docs/Web/CSS/:popover-open)). Потім задається властивість [`transition`](/uk/docs/Web/CSS/transition), щоб анімувати між ними.

У зв'язку з тим, що анімований елемент підноситься до [верхнього шару](/uk/docs/Glossary/Top_layer), коли показується, та вилучається з верхнього шару, коли приховується, `overlay` додається до списку перехідних елементів. Це забезпечує відкладення вилучення елемента з верхнього шару до того, як анімація завершиться. Це не впливає сильно на прості анімації, подібні до цієї, але в складніших випадках, якщо цього не робити, елемент може бути вилучений з накладки занадто швидко, що призводить до того, що анімація не буде плавною й ефективною. Зверніть увагу, що в скороченому записі також задано значення [`transition-behavior: allow-discrete`](/uk/docs/Web/CSS/transition-behavior), щоб увімкнути дискретні переходи.

Щоб анімація працювала в обидва боки, також потрібно виконати наступні кроки:

- Початковий стан анімації задається всередині директиви [`@starting-style`](/uk/docs/Web/CSS/@starting-style). Це необхідно для уникнення непередбачуваної поведінки. Усталено переходи не запускаються на перших оновленнях стилів елементів або коли тип `display` змінюється з `none` на інший тип. Директива `@starting-style` дає змогу відкинути цю усталену логіку в конкретний контрольований спосіб. Без цього анімація входу не відбудеться, а спливне віконце просто з'явиться.
- Такж до списку перехідних елементів додається властивість `display`, щоб анімований елемент був видимим (зі значенням `display: block`) протягом анімацій як входу, так і виходу. Без цього анімація виходу не спостерігається; фактично в такому випадку спливне віконце просто зникає. Знову таки, у цьому випадку необхідно `transition-behavior: allow-discrete`, щоб анімація відбулася.

Можна помітити, що також доданий перехід на [`::backdrop`](/uk/docs/Web/CSS/::backdrop), який з'являється за спливним віконцем, коли воно відкривається, щоб забезпечити гарну анімацію затемнення. Селектор `[popover]:popover-open::backdrop` необхідний для вибору задника, коли спливне віконце відкрите.

#### Результат

Цей код візуалізується так:

{{EmbedLiveSample("perekhid-splyvnoho-vikontsia", "100%", "200")}}

> **Примітка:** Оскільки спливні віконця змінюються з `display: none` на `display: block` кожного разу, коли вони показуються, спливне віконце переходить від своїх стилів `@starting-style` до своїх стилів `[popover]:popover-open` кожного разу, коли відбувається перехід входу. Коли спливне віконце закривається, воно переходить від свого стану `[popover]:popover-open` до усталеного стану `[popover]`.
>
> У таких випадках може бути, що перехід стилю при вході та виході є різним. Дивіться доказ цього у нашій [Демонстрації того, коли застосовуються стартові стилі](/uk/docs/Web/CSS/@starting-style#demonstratsiia-toho-koly-zastosovuiutsia-startovi-styli).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Модуль [Переходів CSS](/uk/docs/Web/CSS/CSS_transitions)
- [`@starting-style`](/uk/docs/Web/CSS/@starting-style)
- [`transition-behavior`](/uk/docs/Web/CSS/transition-behavior)
- [Чотири нові можливості CSS для плавних анімацій входу та виходу](https://developer.chrome.com/blog/entry-exit-animations/) на developer.chrome.com (2023)
