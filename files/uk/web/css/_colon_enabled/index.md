---
title: ":enabled"
slug: Web/CSS/:enabled
page-type: css-pseudo-class
browser-compat: css.selectors.enabled
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:enabled`** (увімкнений) представляє будь-який увімкнений елемент. Елемент є увімкненим, якщо його можна активувати (вибрати, клацнути його, надрукувати щось у нього тощо) або прийняти фокус. Такий елемент також має вимкнений стан, у якому він не може бути активований та приймати фокус.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-enabled.html", "tabbed-standard")}}

## Синтаксис

```plain
:enabled
```

## Приклади

Наступний приклад робить колір тексту та кнопок {{htmlElement("input")}} зеленим, коли вони увімкнені, та сірим, коли вони вимкнені. Це допомагає користувачам розуміти, які елементи можна використовувати.

### HTML

```html
<form action="url_of_form">
  <label for="FirstField">Перше поле (ввімкнене):</label>
  <input type="text" id="FirstField" value="Lorem" /><br />

  <label for="SecondField">Друге поле (вимкнене):</label>
  <input type="text" id="SecondField" value="Ipsum" disabled="disabled" /><br />

  <input type="button" value="Submit" />
</form>
```

### CSS

```css
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
```

### Результат

{{EmbedLiveSample("pryklady", 550, 95)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{Cssxref(":disabled")}}
