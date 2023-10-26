---
title: ":required"
slug: Web/CSS/:required
page-type: css-pseudo-class
browser-compat: css.selectors.required
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:required`** (обов'язковий) представляє всі елементи {{HTMLElement("input")}}, {{HTMLElement("select")}} і {{HTMLElement("textarea")}}, які мають атрибут [`required`](/uk/docs/Web/HTML/Element/input#required).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-required.html", "tabbed-standard")}}

Цей псевдоклас корисний для виділення полів, які повинні містити дійсні дані, перш ніж форма може бути подана.

> **Примітка:** Псевдоклас {{cssxref(":optional")}} вибирає _необов'язкові_ поля форм.

## Синтаксис

```css
:required {
  /* ... */
}
```

## Приклади

### Обов'язкове поле має червону межу

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Уведіть URL:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Уведіть адресу електронної пошти:</label>
    <input type="email" id="email_input" required />
  </div>
</form>
```

#### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

#### Результат

{{EmbedLiveSample('pryklady', 600, 120)}}

## Занепокоєння щодо доступності

До обов'язкових полів {{htmlelement("input")}} повинен бути застосований атрибут [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi). Завдяки цьому можна мати впевненість, що люди, які користуються допоміжними технологіями, як то читачем з екрана, зможуть зрозуміти, які поля потребують дійсного вмісту для успішного подання форми.

Якщо форма також містить [необов'язкові](/uk/docs/Web/CSS/:optional) поля, то обов'язкові поля повинні бути візуально позначені, у спосіб, який не покладається лише на колір для передачі змісту. Зазвичай використовують описовий текст чи піктограму.

- [MDN Розуміння WCAG, пояснення Настанови 3.3](/uk/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Розуміння Критерію успіху 3.3.2 | W3C розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші псевдокласи, що стосуються валідації: {{cssxref(":optional")}}, {{cssxref(":invalid")}}, {{cssxref(":valid")}}
- [Валідація даних форми](/uk/docs/Learn/Forms/Form_validation)
