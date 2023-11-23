---
title: <gradient>
slug: Web/CSS/gradient
page-type: css-type
browser-compat: css.types.image.gradient
---

{{CSSRef}}

[Тип даних](/uk/docs/Web/CSS/CSS_Types) [CSS](/uk/docs/Web/CSS) **`<gradient>`** – це особливий різновид {{cssxref("&lt;image&gt;")}}, що складається з поступового переходу між двома або більше кольорами.

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

Градієнт CSS не має [власних розмірів](/uk/docs/Web/CSS/image#opys); отже, він не має природного чи бажаного розміру, як не має і бажаного співвідношення сторін. Його конкретний розмір відповідає розмірам елемента, до якого він застосовується.

## Синтаксис

Тип даних `<gradient>` визначається одним з функційних типів, перелічених нижче.

### Лінійний градієнт

Лінійні градієнти поступово змінюють колір вздовж уявної лінії. Вони породжуються функцією {{cssxref("gradient/linear-gradient", "linear-gradient()")}}.

### Радіальний градієнт

Радіальні градієнти поступово змінюють колір від центральної точки (джерела). Вони породжуються функцією {{cssxref("gradient/radial-gradient", "radial-gradient()")}}.

### Повторювальний градієнт

Повторювальні градієнти дублюють градієнт стільки разів, скільки потрібно, щоб заповнити задану область. Вони породжуються функціями {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} та {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

### Конічний градієнт

Конічні градієнти поступово змінюють колір по колу. Вони породжуються функцією {{cssxref("gradient/conic-gradient", "conic-gradient()")}}.

## Інтерполяція

Як і будь-яка інтерполяція за участі кольорів, градієнти обчислюються в кольоровому просторі з альфа-перемноженням. Це запобігає появі неочікуваних відтінків сірого, коли змінюються як колір, так і непрозорість. (Зверніть увагу, що старі браузери можуть не використовувати цю логіку при застосуванні [ключового слова transparent](/uk/docs/Web/CSS/named-color#transparent).)

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Приклад лінійного градієнта

Простий лінійний градієнт.

```html hidden
<div class="linear-gradient">Лінійний градієнт</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-gradient {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
```

{{EmbedLiveSample('pryklad-liniinoho-hradiienta', 240, 120)}}

### Приклад радіального градієнта

Простий радіальний градієнт.

```html hidden
<div class="radial-gradient">Радіальний градієнт</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red, yellow, rgb(30, 144, 255));
}
```

{{EmbedLiveSample('pryklad-radialnoho-hradiienta', 240, 120)}}

### Приклади повторювальних градієнтів

Приклади простих повторювальних лінійного та радіального градієнтів.

```html hidden
<div class="linear-repeat">Повторювальний лінійний градієнт</div>
<br />
<div class="radial-repeat">Повторювальний радіальний градієнт</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-repeat {
  background: repeating-linear-gradient(
    to top left,
    lightpink,
    lightpink 5px,
    white 5px,
    white 10px
  );
}

.radial-repeat {
  background: repeating-radial-gradient(
    powderblue,
    powderblue 8px,
    white 8px,
    white 16px
  );
}
```

{{EmbedLiveSample('pryklady-povtoriuvalnykh-hradiientiv', 240, 220)}}

### Приклад конічного градієнта

Приклад простого конічного градієнта. Зверніть увагу на те, що він поки що не має широкої браузерної підтримки.

```html hidden
<div class="conic-gradient">Конічний градієнт</div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gradient {
  background: conic-gradient(lightpink, white, powderblue);
}
```

{{EmbedLiveSample('pryklad-konichnoho-hradiienta', 240, 240)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Застосування Градієнтів CSS](/uk/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Функції градієнтів: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [Базові типи даних CSS](/uk/docs/Web/CSS/CSS_Types)
- [Одиниці вимірювання та значення CSS](/uk/docs/Web/CSS/CSS_Values_and_Units)
- [Вступ у CSS – Значення та одиниці вимірювання](/uk/docs/Learn/CSS/Building_blocks/Values_and_units)
