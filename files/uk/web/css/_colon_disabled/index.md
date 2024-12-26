---
title: ":disabled"
slug: Web/CSS/:disabled
page-type: css-pseudo-class
browser-compat: css.selectors.disabled
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:disabled`** (вимкнений) представляє будь-який вимкнений елемент. Елемент є вимкненим, якщо його не можна активувати (вибрати, клацнути його, надрукувати щось у нього тощо) або передати йому фокус. Такий елемент також має увімкнений стан, у якому він може бути активований та прийняти фокус.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-disabled.html", "tabbed-standard")}}

## Синтаксис

```css
:disabled {
  /* ... */
}
```

## Приклади

Цей приклад демонструє базову форму доставлення. Він використовує подію [JavaScript](/uk/docs/Web/JavaScript) {{domxref("HTMLElement/change_event", "change")}}, щоб дати користувачам змогу вмикати та вимикати поля для рахунків.

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>Адреса для доставлення</legend>
    <input type="text" placeholder="Ім'я" />
    <input type="text" placeholder="Адреса" />
    <input type="text" placeholder="Поштовий індекс" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>Адреса для рахунків</legend>
    <label for="billing-checkbox">Така ж, як адреса для доставлення:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="Ім'я" disabled />
    <input type="text" placeholder="Адреса" disabled />
    <input type="text" placeholder="Поштовий індекс" disabled />
  </fieldset>
</form>
```

### CSS

```css
input[type="text"]:disabled {
  background: #ccc;
}
```

### JavaScript

Перемкнути вимкненість полів введення, коли клацнуто полем для галочки

```js
const checkbox = document.querySelector("#billing-checkbox");
const billingItems = document.querySelectorAll('#billing input[type="text"]');

checkbox.addEventListener("change", () => {
  billingItems.forEach((item) => {
    item.disabled = !item.disabled;
  });
});
```

### Результат

Додайте чи приберіть галочку, щоб змінити оформлення полів оплати.

{{EmbedLiveSample('pryklady', 300, 250)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{Cssxref(":enabled")}}
