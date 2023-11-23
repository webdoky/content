---
title: ":out-of-range"
slug: Web/CSS/:out-of-range
page-type: css-pseudo-class
browser-compat: css.selectors.out-of-range
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:out-of-range`** (поза діапазоном) представляє елементи {{htmlelement("input")}}, чиє поточне значення лежить поза межами діапазону, заданого атрибутами [`min`](/uk/docs/Web/HTML/Element/input#min-minimum) і [`max`](/uk/docs/Web/HTML/Element/input#max-maksymum).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-out-of-range.html", "tabbed-shorter")}}

Цей псевдоклас корисний для надання користувачам візуального сповіщення того, що поточне значення поля лежить поза допустимими межами.

> **Примітка:** Цей псевдоклас застосовується лише до елементів, що мають (і можуть мати) обмеження за діапазоном. За відсутності такого обмеження елемент не може бути ні "в межах діапазону", ні "поза діапазоном".

## Синтаксис

```css
:out-of-range {
  /* ... */
}
```

## Приклади

### HTML

```html
<form action="" id="form1">
  <p>Дійсними є значення від 1 до 10.</p>
  <ul>
    <li>
      <input
        id="value1"
        name="value1"
        type="number"
        placeholder="Від 1 до 10"
        min="1"
        max="10"
        value="12" />
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
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
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

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref(":in-range")}}
- [Валідація даних форми](/uk/docs/Learn/Forms/Form_validation)
