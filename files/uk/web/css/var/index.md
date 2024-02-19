---
title: var()
slug: Web/CSS/var
page-type: css-function
browser-compat: css.properties.custom-property.var
---

{{CSSRef}}

[Функцію](/uk/docs/Web/CSS/CSS_Functions) [CSS](/uk/docs/Web/CSS) **`var()`** (змінна) можна використовувати для вставляння значення [кастомної властивості](/uk/docs/Web/CSS/--*) (що також іноді зветься "змінною CSS") замість будь-якої частини значення іншої властивості.

{{EmbedInteractiveExample("pages/css/var.html")}}

Функція `var()` не може бути вжита в назвах властивостей, селекторах або ще чому завгодно, крім значень властивостей. (Зазвичай спроби зробити щось подібне призводять до недійсного синтаксису, або ж до значення, яке не має ніякого стосунку до змінної.)

## Синтаксис

```css
/* Просте використання */
var(--custom-prop);

/* Із запасним варіантом */
var(--custom-prop,);  /* порожнє значення як запасний варіант */
var(--custom-prop, initial); /* початкове значення властивості як запасний варіант */
var(--custom-prop, #FF0000);
var(--custom-prop, var(--default-value));
var(--custom-prop, var(--default-value, red));
```

Перший аргумент функції – це назва кастомної властивості, що підставляється. Необов'язковий другий аргумент – служить запасним значенням. Якщо кастомна властивість, на яку посилається перший аргумент, недійсна, то ця функція використовує друге значення.

Синтаксис запасного значення, як і синтаксис кастомних властивостей, дозволяє коми. Наприклад `var(--foo, red, blue)` визначає запасне значення `red, blue`; тобто будь-що між першою комою та кінцем функції вважається запасним значенням.

### Значення

- `<custom-property-name>`

  - : Назва кастомної властивості, представлена ідентифікатором, що починається з двох рисок. Кастомні властивості призначені суто для використання розробниками та користувачами; CSS ніколи не надасть їм значення, яке виходить за межі того, що представлено тут.

- `<declaration-value>`

  - : Запасне значення кастомної властивості, яке використовується в разі того, що кастомна властивість недійсна в контексті свого використання. Це значення може містити будь-які символи, крім певних символів з особливими значеннями, штибу символів нового рядка, кінцевих дужок без пари, тобто `)`, `]` або `}`, крапок з комою на найвищому рівні та знаків оклику. Запасне значення само може бути кастомною властивістю, що використовує синтаксис `var()`.

    > **Примітка:** `var(--a,)` – дійсний запис, який задає те, що якщо кастомна властивість `--a` недійсна або відсутня, то `var()` замінюється нічим.

### Формальний синтаксис

{{CSSSyntax}}

## Приклади

### Використання кастомної властивості, заданої на :root

#### CSS

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

#### Результат

{{EmbedLiveSample("vykorystannia-kastomnoi-vlastyvosti-zadanoi-na-root")}}

Тут значення властивості `background-color` задано через кастомну властивість `--main-bg-color`. Таким чином, кольором фону тіла HTML буде рожевий.

### Використання кастомної властивості до її задання

#### CSS

```css
body {
  background-color: var(--main-bg-color);
}

:root {
  --main-bg-color: pink;
}
```

#### Результат

{{EmbedLiveSample("vykorystannia-kastomnoi-vlastyvosti-do-yii-zadannia")}}

У цьому прикладі фоновий колір тіла HTML буде рожевим, незважаючи на те, що кастомна властивість задана пізніше.

### Використання кастомної властивості, заданої в іншому файлі

#### HTML

```html
<!doctype html>
<html lang="uk">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="1.css" />
    <link rel="stylesheet" href="2.css" />
  </head>
  <body></body>
</html>
```

#### CSS

```css
/* 1.css */
body {
  background-color: var(--main-bg-color);
}
```

```css
/* 2.css */
:root {
  --main-bg-color: pink;
}
```

#### Результат

{{EmbedLiveSample("vykorystannia-kastomnoi-vlastyvosti-zadanoi-v-inshomu-faili")}}

Фоновим кольором тіла HTML буде рожевий, незважаючи на те, що в іншому файлі задана кастомна властивість.

### Кастомні властивості з запасними значеннями на випадок того, що властивість не задана

#### HTML

```html
<div class="component">
  <h1 class="header">Заголовок</h1>
  <p class="text">Текст</p>
</div>
```

#### CSS

```css
/* У стилі компонента: */
.component .header {
  /* header-color не задана, тож елемент залишається синім, згідно запасного значення */
  color: var(--header-color, blue);
}

.component .text {
  color: var(--text-color, black);
}

/* У стилі більшого застосунку: */
.component {
  --text-color: #080;
}
```

#### Результат

{{EmbedLiveSample("kastomni-vlastyvosti-z-zapasnymy-znachenniamy-na-vypadok-toho-shcho-vlastyvist-ne-zadana")}}

Оскільки `--header-color` не задана, текст "Заголовок" буде синім, згідно запасного значення.

### Використання кастомної властивості як запасного значення

#### CSS

```css
:root {
  --backup-bg-color: teal;
}

body {
  background-color: var(--main-bg-color, var(--backup-bg-color, white));
}
```

#### Результат

{{EmbedLiveSample("vykorystannia-kastomnoi-vlastyvosti-yak-zapasnoho-znachennia")}}

Оскільки `--main-bg-color` не задана, то `background-color` тіла відступить до `--backup-bg-color`, тобто чиркового кольору.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("env","env(…)")}} – змінні оточення, доступні лише для зчитування, що контролюються користувацьким агентом.
- [Використання кастомних властивостей (змінних) CSS](/uk/docs/Web/CSS/Using_CSS_custom_properties)
- Директива {{cssxref("@property")}}
- Модуль [Кастомних властивостей як каскадних змінних CSS](/uk/docs/Web/CSS/CSS_cascading_variables)
