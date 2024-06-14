---
title: ":where()"
slug: Web/CSS/:where
page-type: css-pseudo-class
browser-compat: css.selectors.where
---

{{CSSRef}}

Функція-[псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:where()`** (де) приймає як аргумент список селекторів і вибирає всі елементи, які можуть бути вибрані будь-яким з селекторів у цьому списку.

Різниця між `:where()` та {{CSSxRef(":is", ":is()")}} полягає в тому, що `:where()` завжди має [специфічність](/uk/docs/Web/CSS/Specificity) 0, тоді як `:is()` приймає специфічність найбільш специфічного селектора серед своїх аргументів.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-where.html", "tabbed-shorter")}}

### Поблажливий розбір селекторів

Специфікація визначає те, що `:is()` та `:where()` приймають [поблажливий список селекторів](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

У CSS, коли використовується список селекторів, то якщо будь-який з селекторів є недійсним, то весь список вважається недійсним. Проте коли використовується `:is()` або `:where()`, то замість того, щоб недійсним вважався весь список, якщо один з селекторів не виходить розібрати, то цей селектор, що має помилку або не підтримується, ігнорується, а інші використовуються.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

CSS вище все одно правильно розбирається і дає збіг з `:valid` навіть у браузерах, які не підтримують `:unsupported`, тоді як:

```css
:valid,
:unsupported {
  /* … */
}
```

Ігнорується в браузерах, які не підтримують `:unsupported`, навіть якщо вони підтримують `:valid`.

## Приклади

### Порівняння :where() та :is()

Цей приклад показує, як працює `:where()`, а також ілюструє різницю між `:where()` та `:is()`.

Погляньмо на такий HTML:

```html
<article>
  <h2>Посилання, оформлені за допомогою :is()</h2>
  <section class="is-styling">
    <p>
      Ось мій головний вміст. Тут <a href="https://mozilla.org">є посилання</a>.
    </p>
  </section>

  <aside class="is-styling">
    <p>
      Це мій побічний вміст. Тут
      <a href="https://developer.mozilla.org">також є посилання</a>.
    </p>
  </aside>

  <footer class="is-styling">
    <p>
      Це мій нижній колонтитул, у якому також є
      <a href="https://github.com/mdn">посилання</a>.
    </p>
  </footer>
</article>

<article>
  <h2>Посилання, оформлені за допомогою :where()</h2>
  <section class="where-styling">
    <p>
      Ось мій головний вміст. Тут <a href="https://mozilla.org">є посилання</a>.
    </p>
  </section>

  <aside class="where-styling">
    <p>
      Це мій побічний вміст. Тут
      <a href="https://developer.mozilla.org">також є посилання</a>.
    </p>
  </aside>

  <footer class="where-styling">
    <p>
      Це мій нижній колонтитул, у якому також є
      <a href="https://github.com/mdn">посилання</a>.
    </p>
  </footer>
</article>
```

У цьому дещо штучному прикладі є дві статті, кожна з яких містить розділ, побічний вміст і нижній колонтитул. Вони відрізняються класами, які використовуються для позначення дочірніх елементів.

Щоб спростити вибір посилань всередині них, але все ще відрізняти їх, _можна було б_ скористатися `:is()` або `:where()`, наступним чином:

```css
html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}
```

Проте що, якщо ми пізніше захочемо перевизначити колір посилань у нижніх колонтитулах за допомогою простого селектора?

```css
footer a {
  color: blue;
}
```

Це не спрацює для червоних посилань, тому що селектори всередині `:is()` враховуються при розрахунку специфічності загального селектора, а класові селектори мають більшу специфічність, ніж селектори елементів.

Проте селектори всередині `:where()` мають специфічність 0, тому помаранчеве посилання в нижньому колонтитулі буде пересилено нашим простим селектором.

> **Примітка:** Також цей приклад можна знайти на GitHub; див. [is-where](https://webdoky.github.io/css-examples/is-where/).

{{EmbedLiveSample('pryklady', '100%', 600)}}

## Синтаксис

```css-nolint
:where(<complex-selector-list>) {
  /* ... */
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{CSSxRef(":is", ":is()")}}
- [Список селекторів](/uk/docs/Web/CSS/Selector_list)
- [Вебкомпоненти](/uk/docs/Web/API/Web_components)
