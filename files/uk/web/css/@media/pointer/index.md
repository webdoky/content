---
title: pointer
slug: Web/CSS/@media/pointer
page-type: css-media-feature
browser-compat: css.at-rules.media.pointer
---

{{CSSRef}}

[Медійна можливість](/uk/docs/Web/CSS/@media#mozhlyvosti-media) [CSS](/uk/docs/Web/CSS) **`pointer`** перевіряє, чи має користувач вказівний пристрій (наприклад, мишу), і якщо так, то наскільки точний цей _основний_ вказівний пристрій.

> [!NOTE]
> Якщо треба перевірити точність _будь-якого_ вказівного пристрою, використовуйте натомість [`any-pointer`](/uk/docs/Web/CSS/@media/any-pointer).

## Синтаксис

Можливість `pointer` задається як ключове слово, обране з наведеного нижче списку.

- `none`
  - : Основний механізм введення не містить вказівного пристрою.
- `coarse`
  - : Основний механізм введення містить вказівний пристрій обмеженої точності, наприклад, палець на сенсорному екрані.
- `fine`
  - : Основний механізм введення містить точний вказівний пристрій, наприклад, мишу.

## Приклади

Цей приклад створює маленьке поле для галочки для користувачів з точними основними вказівними пристроями та велике поле для галочки для користувачів з основними вказівними пристроями обмеженої точності.

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Погляньте на мене!</label>
```

### CSS

```css
input[type="checkbox"] {
  appearance: none;
  border: solid;
  margin: 0;
}

input[type="checkbox"]:checked {
  background: gray;
}

@media (pointer: fine) {
  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    border-width: 1px;
    border-color: blue;
  }
}

@media (pointer: coarse) {
  input[type="checkbox"] {
    width: 30px;
    height: 30px;
    border-width: 2px;
    border-color: red;
  }
}
```

### Результат

{{EmbedLiveSample("pryklady")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Медійна можливість `any-pointer`](/uk/docs/Web/CSS/@media/any-pointer)
