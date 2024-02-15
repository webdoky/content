---
title: light-dark()
slug: Web/CSS/color_value/light-dark
page-type: css-function
status:
  - experimental
browser-compat: css.types.color.light-dark
---

{{CSSRef}}{{SeeCompatTable}}

[Функція `<color>`](/uk/docs/Web/CSS/CSS_Functions#funktsii-color) [CSS](/uk/docs/Web/CSS) **`light-dark()`** (світла-темна) дає змогу задавати властивості два кольори, з яких один буде повернений залежно від того, обрав розробник світлу чи темну палітру, або чи попросив користувач використовувати світлу, чи темну колірну тему – без необхідності обгортати кольори теми в запит [можливості медіа](/uk/docs/Web/CSS/CSS_media_queries/Using_media_queries#natsilennia-na-mozhlyvosti-media) [`prefers-color-scheme`](/uk/docs/Web/CSS/@media/prefers-color-scheme).
Користувачі можуть сповіщати про свої побажання щодо колірної палітри за допомогою своїх системних налаштувань (наприклад, світлого чи темного режиму) або налаштувань користувацького агента. Функція `light-dark()` дає змогу надавати два значення кольору там, де приймається будь-яке значення `<color>`. Колірна функція CSS `light-dark()` повертає перше значення, якщо користувацьке налаштування задано як `light` або не задано, і друге значення, якщо користувацьке налаштування задано як `dark`.

Щоб увімкнути підтримку колірної функції `light-dark()`, властивість {{CSSXref("color-scheme")}} повинна мати значення `light dark`, яке зазвичай задається на [псевдокласі](/uk/docs/Web/CSS/Pseudo-classes) {{CSSXref(":root")}}.

```css
:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
```

## Синтаксис

```css
/* Іменовані значення кольорів */
color: light-dark(black, white);

/* Колірні значення RGB */
color: light-dark(rgb(0 0 0), rgb(255 255 255));

/* Своєрідні властивості */
color: light-dark(var(--light), var(--dark));
```

### Значення

Функційний запис: `light-dark(light-color, dark-color)`

- `light-color`

  - : Значення {{CSSXref("&lt;color&gt;")}}, яке буде задано для світлої {{CSSXref("color-scheme")}}.

- `dark-color`
  - : Значення {{CSSXref("&lt;color&gt;")}}, яке буде задано для темної {{CSSXref("color-scheme")}}.

### Формальний синтаксис

{{csssyntax}}

## Приклад

### Задання кольорів на основі колірної палітри

Усталено, в браузерах, що це підтримують, колір, повернений колірною функцією `light-dark()`, залежить від налаштувань користувача, заданих через налаштування операційної системи (наприклад, світлий або темний режим) або налаштування користувацького агента. Також це налаштування можна змінити в {{glossary("developer tools", "інструментах розробника")}} в браузері.

#### HTML

Додано три розділи, щоб забезпечити можливість вибору світлих кольорів, темних кольорів та кольорів, вибраних на основі обраної користувачем колірної палітри.

```html
<h1>Функція CSS <code>light-dark()</code></h1>
<section>
  <h2>Автоматично</h2>
  <p>
    Цей розділ реагуватиме на користувацькі налаштування системи або
    користувацького агента.
  </p>
</section>
<section class="light">
  <h2>Світла</h2>
  <p>Цей розділ буде світлим завдяки <code>color-scheme: light;</code>.</p>
</section>
<section class="dark">
  <h2>Темна</h2>
  <p>Цей розділ буде темним завдяки <code>color-scheme: dark;</code>.</p>
</section>
```

#### CSS

Додано кольори як для світлої, так і для темної тем. Також для документа на `:root` задано `color-scheme`, щоб увімкнути колірну функцію `light-dark()` для всього документа.

```css-nolint
:root {
  /* це повинно бути задано, щоб перемикатися між світлим і темним */
  color-scheme: light dark;

  --light-bg: ghostwhite;
  --light-color: darkslategray;
  --light-code: tomato;

  --dark-bg: darkslategray;
  --dark-color: ghostwhite;
  --dark-code: gold;
}
* {
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  color: light-dark(var(--light-color), var(--dark-color));
}
code {
  color: light-dark(var(--light-code), var(--dark-code));
}
```

На додачу до вмикання функції `light-dark()`, властивість `color-scheme` дозволяє перевизначати колірну палітру користувача для розділів документа. Примусове використання світлої або темної колірної палітри для розділу сторінки можна зробити, задавши властивість `color-scheme` зі значенням `light` або `dark`.

> **Примітка:** Загалом, так не слід робити, а тут це використовується для демонстрації. Якщо користувач висловлює побажання, його налаштування зазвичай не слід відкидати.

```css
.light {
  /* примусово використовувати color-scheme light */
  color-scheme: light;
}
.dark {
  /* примусово використовувати color-scheme dark */
  color-scheme: dark;
}
```

```css hidden
section {
  padding: 0.8rem;
}
```

#### Результат

{{EmbedLiveSample("zadannia-koloriv-na-osnovi-kolirnoii-palitry", "100%", 500)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{CSSXref("color-scheme")}}
- {{CSSXref("&lt;color&gt;")}}
- Модуль [Колір CSS](/uk/docs/Web/CSS/CSS_colors)
