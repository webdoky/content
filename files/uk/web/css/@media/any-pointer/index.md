---
title: any-pointer
slug: Web/CSS/@media/any-pointer
page-type: css-media-feature
browser-compat: css.at-rules.media.any-pointer
---

{{CSSRef}}

[Медійна можливість](/uk/docs/Web/CSS/@media#mozhlyvosti-media) [CSS](/uk/docs/Web/CSS) **`any-pointer`** перевіряє, чи є у користувача _будь-який_ вказівний пристрій (подібний до миші), і якщо так, то наскільки він точний.

> [!NOTE]
> Якщо треба перевірити точність _основного_ вказівного пристрою, використовуйте натомість [`pointer`](/uk/docs/Web/CSS/@media/pointer).

## Синтаксис

Можливість `any-pointer` задається як ключове слово, обране з наведеного нижче списку.

- `none`
  - : Немає доступних вказівних пристроїв.
- `coarse`
  - : Щонайменше один механізм введення включає вказівний пристрій обмеженої точності.
- `fine`
  - : Щонайменше один механізм введення включає точний вказівний пристрій.

> [!NOTE]
> Може давати збіг більш ніж одне значення, якщо доступні пристрої мають різні характеристики, хоча `none` дає збіг лише тоді, коли жоден з них не є вказівним пристроєм.

## Приклади

Цей приклад створює невелике поле для галочки для користувачів зі щонайменше одним точним вказівним пристроєм та велике поле для галочки для користувачів зі щонайменше одним обмежено точним вказівним пристроєм. Велике поле для галочки має пріоритет, оскільки воно оголошене після малого.

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Подивися на мене!</label>
```

### CSS

```css
input[type="checkbox"]:checked {
  background: gray;
}

@media (any-pointer: fine) {
  input[type="checkbox"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (any-pointer: coarse) {
  input[type="checkbox"] {
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
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

- [Медійна можливість `pointer`](/uk/docs/Web/CSS/@media/pointer)
