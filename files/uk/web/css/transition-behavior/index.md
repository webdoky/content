---
title: transition-behavior
slug: Web/CSS/transition-behavior
page-type: css-property
status:
  - experimental
browser-compat: css.properties.transition-behavior
---

{{CSSRef}}{{SeeCompatTable}}

Властивість [CSS](/uk/docs/Web/CSS) **`transition-behavior`** (логіка переходу) задає те, чи починаються переходи для властивостей, чия логіка анімації є [дискретною](/uk/docs/Web/CSS/CSS_animated_properties#discrete).

## Синтаксис

```css
/* Значення – ключові слова */
transition-behavior: allow-discrete;
transition-behavior: normal;

/* Глобальні значення */
transition-behavior: inherit;
transition-behavior: initial;
transition-behavior: revert;
transition-behavior: revert-layer;
transition-behavior: unset;
```

### Значення

- `allow-discrete`
  - : Переходи на елементі для дискретно анімованих властивостей – запускаються.
- `normal`
  - : Переходи _не_ запускаються на елементі для дискретно анімованих властивостей.

## Опис

Властивість `transition-behavior` грає роль лише тоді, коли використовується разом з іншими властивостями переходів, зокрема {{cssxref("transition-property")}} та {{cssxref("transition-duration")}}, оскільки перехід не відбувається, якщо жодна властивість не анімується протягом ненульового періоду часу.

```css
.card {
  transition-property: opacity, display;
  transition-duration: 0.25s;
  transition-behavior: allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

Значення `transition-behavior` може бути включено як частина скороченого оголошення {{cssxref("transition")}}. Коли воно включене в скорочення, при застосуванні його до властивостей (явно, або усталено — до всіх), значення `allow-discrete` не впливає на звичайні анімовані властивості. Наступний CSS рівносильний розгорнутим оголошенням вище:

```css
.card {
  transition: all 0.25s;
  transition: all 0.25s allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

У зразку коду вище властивість `transition` додана двічі. Перший раз не включає значення `allow-discrete` – це надає кросбраузерну підтримку, забезпечуючи перехід інших властивостей картки в браузерах, які не підтримують `transition-behavior`.

### Логіка дискретної анімації

Дискретно анімовані властивості, загалом, перемикаються між двома значеннями на 50% анімації між ними.

Проте є виняток, а саме – коли анімується `display: none` або `content-visibility: hidden`. У цьому випадку браузер перемикається між двома значеннями так, щоб анімований вміст був видимим протягом усього часу анімації.

Тож, наприклад:

- Коли `display` анімується від `none` до `block` (або іншого видимого значення `display`), значення перемикається на `block` на `0%` тривалості анімації, щоб вона була помітна протягом всієї своєї тривалості.
- Коли `display` анімується від `block` (або іншого видимого значення `display`) до `none`, значення перемикається на `none` на `100%` тривалості анімації, щоб вона була помітна протягом всієї своєї тривалості.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{CSSSyntax}}

## Приклади

### Перехід спливного віконця

У цьому прикладі [спливне віконце](/uk/docs/Web/API/Popover_API) анімується шляхом [переходу](/uk/docs/Web/CSS/CSS_transitions) від прихованого стану до показаного – й назад.

#### HTML

HTML тут містить елемент {{htmlelement("div")}}, оголошений як спливне віконце за допомогою атрибута [popover](/uk/docs/Web/HTML/Global_attributes/popover), та елемент {{htmlelement("button")}}, призначений для керування відображенням спливного віконця за допомогою атрибута [popovertarget](/uk/docs/Web/HTML/Element/button#popovertarget).

```html
<button popovertarget="mypopover">Показати спливне віконце</button>
<div popover="auto" id="mypopover">
  Я Спливне віконце! Я повинно анімуватися.
</div>
```

#### CSS

```css hidden
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;
}
```

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  /* Кінцевий стан анімації виходу */
  opacity: 0;
  transform: scaleX(0);

  transition-property: opacity, transform, overlay, display;
  transition-duration: 0.7s;
  transition-behavior: allow-discrete;
  /* За допомогою властивості-скорочення transition можна написати:
    transition: 
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;

    або навіть:
    transition: all 0.7s allow-discrete;
  */
}

/* Необхідно додати після правила [popover]:popover-open,
   щоб це діяло, адже специфічність тут така сама */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

Дві властивості, що тут анімуються – це [`opacity`](/uk/docs/Web/CSS/opacity) та [`transform`](/uk/docs/Web/CSS/transform): ми хочемо, щоб спливне віконце з'являлося та зникало, розширюючись та звужуючись по горизонталі. Для цих властивостей задається стартовий стан на усталеному прихованому стані елемента спливного віконця (вибраного за допомогою `[popover]`), та кінцевий стан на відкритому стані спливного віконця (вибраного за допомогою псевдокласу [`:popover-open`](/uk/docs/Web/CSS/:popover-open)). Потім задається властивість [`transition`](/uk/docs/Web/CSS/transition) для анімації між ними.

У зв'язку з тим, що анімований елемент підноситься до [верхнього шару](/uk/docs/Glossary/Top_layer) при показі та вилучається з верхнього шару при приховуванні – що також означає, що його прихований стан має [`display: none`](/uk/docs/Web/CSS/display) – до списку анімованих елементів додаються наступні властивості, щоб анімація працювала в обох напрямках. У обох випадках в скороченому записі задається властивість `transition-behavior: allow-discrete`, щоб увімкнути дискретну анімацію.

- `display`: Обов'язкова, щоб анімований елемент був видимим (задана як `display: block`) протягом як анімації входу, так і анімації виходу. Без цього анімація виходу не була б видимою; насправді, спливне віконце просто зникло б.
- [`overlay`](/uk/docs/Web/CSS/overlay): Обов'язкова, щоб переконатися, що вилучення елемента з верхнього шару відкладається до завершення анімації. Це не суттєво для простих анімацій, як ця, але в складніших випадках, якщо цього не робити, елемент буде вилучено з верхнього шару занадто швидко, що означає, що анімація не буде плавною й ефективною.

Крім цього, стартовий стан анімації задається всередині директиви [`@starting-style`](/uk/docs/Web/CSS/@starting-style). Це необхідно, щоб уникнути непередбачуваної поведінки. Усталено переходи не запускаються при першому оновленні стилів елементів, або коли тип `display` змінюється з `none` на інший тип. Директива `@starting-style` дозволяє перевизначити цю усталену поведінку в конкретний контрольований спосіб. Без цього анімація входу не відбувалася б, і спливне віконце просто з'являлося б.

#### Результат

Цей код візуалізується так:

{{EmbedLiveSample("perekhid-splyvnoho-vikontsia", "100%", "200")}}

> **Примітка:** Оскільки спливні віконця змінюються від `display: none` до `display: block` кожного разу, коли показуються, то спливне віконце переходить від стилів `@starting-style` до стилів `[popover]:popover-open` кожного разу, коли відбувається перехід входу. Коли спливне віконце закривається, то воно переходить від свого стану `[popover]:popover-open` до усталеного стану `[popover]`.
>
> В таких випадках перехід стилів при вході та виході може бути різним. Дивіться доказ цього в нашому прикладі [Демонстрація того, як використовуються стартові стилі](/uk/docs/Web/CSS/@starting-style#demonstratsiia-toho-koly-zastosovuiutsia-startovi-styli).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`overlay`](/uk/docs/Web/CSS/overlay)
- [`@starting-style`](/uk/docs/Web/CSS/@starting-style)
- Модуль [Переходів CSS](/uk/docs/Web/CSS/CSS_transitions)
- [Чотири нові можливості CSS для плавних анімацій входу та виходу](https://developer.chrome.com/blog/entry-exit-animations/) на developer.chrome.com (2023)
