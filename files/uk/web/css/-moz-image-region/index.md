---
title: '-moz-image-region'
slug: Web/CSS/-moz-image-region
tags:
  - CSS
  - CSS Property
  - CSS:Mozilla Extensions
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-image-region
---
{{CSSRef}}{{Non-standard_Header}}

Для певних XUL елементів та псевдоелементів, що використовують зображення із властивості {{CSSxRef("list-style-image")}}, ця властивість вказує ділянку зображення, що використовується замість усього зображення. Це дає змогу елементам використовувати різні шматки одного й того ж зображення для покращення швидкодії.

```css
/* Ключове значення */
-moz-image-region: auto;

/* <shape>-значення */
-moz-image-region: rect(0, 8px, 4px, 4px);

/* Глобальні значення */
-moz-image-region: inherit;
-moz-image-region: initial;
-moz-image-region: unset;
```

Синтаксис подібний до синтаксису властивості {{CSSxRef("clip")}}. Усі чотири значення відносні до верхнього лівого кута зображення.

> **Зверніть увагу:** Для системи, що працює на будь-якому тлі, дивіться {{CSSxRef("-moz-image-rect")}}.

## Синтаксис

### Значення

- `auto`
  - : Автоматично визначає ділянку зображення до використання.
- [`<shape>`](/uk/docs/Web/CSS/shape)
  - : Форма, котра визначає частину зображення до використання. Функція `rect()` визначає прямокутник до використання у якості форми. Її параметри описують верхній, правий, нижній та лівий відступи від країв зображення, в такій послідовності.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{CSSSyntax}}

## Приклади

### Обрізання зображення

```css
#example-button {
  /* показати лише зону 4-по-4 пікселі від верхнього лівого кута зображення */
  list-style-image: url("chrome://example/skin/example.png");
  -moz-image-region: rect(0px, 4px, 4px, 0px);
}
#example-button:hover {
  /* використати 4-по-4 зону  праворуч від попередньої, для кнопки, на яку наведено курсор миші */
  -moz-image-region: rect(0px, 8px, 4px, 4px);
}
```

## Специфікації

Не є частиною жодного стандарту.

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- {{CSSxRef("-moz-image-rect")}}
