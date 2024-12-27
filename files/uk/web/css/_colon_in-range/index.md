---
title: ":in-range"
slug: Web/CSS/:in-range
page-type: css-pseudo-class
browser-compat: css.selectors.in-range
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:in-range`** (в діапазоні) представляє елементи {{htmlelement("input")}}, значення яких знаходиться в межах діапазону, заданого атрибутами [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) та [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-in-range.html", "tabbed-shorter")}}

Цей псевдоклас корисний для надання користувачам візуального сповіщення про те, що поточне значення лежить в заданих межах.

> **Примітка:** Цей псевдоклас застосовується лише до елементів, що мають (і можуть приймати) обмеження за діапазоном. За відсутності такого обмеження елемент не може бути ані "в межах діапазону" ("in-range"), ані "поза межами діапазону".

## Синтаксис

```css
:in-range {
  /* ... */
}
```

## Приклади

### HTML

```html
<form action="" id="form1">
  <ul>
    Дійсні значення – від 1 до 10.
    <li>
      <input
        id="value1"
        name="value1"
        type="number"
        placeholder="1 to 10"
        min="1"
        max="10"
        value="12"
        required />
      <label for="value1">Ваше значення – </label>
    </li>
  </ul>
</form>
```

### CSS

```css
li {
  list-style: none;
  margin-bottom: 1em;
}

input {
  border: 1px solid black;
}

input:in-range {
  background-color: rgb(0 255 0 / 25%);
}

input:out-of-range {
  background-color: rgb(255 0 0 / 25%);
  border: 2px solid red;
}

input:in-range + label::after {
  content: "приймається.";
}

input:out-of-range + label::after {
  content: "поза діапазоном!";
}
```

### Результат

{{EmbedLiveSample('pryklady', 600, 140)}}

> **Примітка:** Порожній елемент `<input>` не вважається поза діапазоном, тому його не буде вибрано псевдокласом `:out-of-range`. Псевдоклас [`:blank`](/uk/docs/Web/CSS/:blank) призначений для вибору порожніх полів, але на момент написання цього матеріалу він є експериментальним і не підтримується добре. Також можна використовувати атрибут `required` і псевдоклас [`:invalid`](/uk/docs/Web/CSS/:invalid) для надання більш загальної логіки та стилізації, щоб робити поля обов'язковими (`:invalid` стилізує порожні поля _та_ поля поза діапазоном).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref(":out-of-range")}}
- [Валідація даних форми](/uk/docs/Learn/Forms/Form_validation)
