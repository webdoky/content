---
title: ":optional"
slug: Web/CSS/:optional
page-type: css-pseudo-class
browser-compat: css.selectors.optional
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:optional`** (необов'язковий) представляє всі елементи {{HTMLElement("input")}}, {{HTMLElement("select")}} і {{HTMLElement("textarea")}}, що не мають атрибута [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-optional.html", "tabbed-standard")}}

Цей псевдоклас корисний для виділення полів, які необов'язкові для подавання форми.

> [!NOTE]
> Псевдоклас {{cssxref(":required")}} вибирає _обов'язкові_ поля форм.

## Синтаксис

```css
:optional {
  /* ... */
}
```

## Доступність

Коли [форма](/uk/docs/Web/HTML/Element/form) містить необов'язкові {{htmlelement("input", "поля")}}, обов'язкові поля повинні бути виділені за допомогою атрибута [`required`](/uk/docs/Web/HTML/Element/input#required-oboviazkovyi). Завдяки цьому можна мати впевненість, що люди, які користуються допоміжними технологіями, як то читачем з екрана, зможуть зрозуміти, які поля потребують дійсного вмісту для успішного подання форми.

Обов'язкові поля також повинні бути виділені візуально, за допомогою способу, який не покладається для передачі змісту лише на колір. Зазвичай використовують описовий текст чи піктограму.

- [MDN Розуміння WCAG, пояснення Настанови 3.3](/uk/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Розуміння Критерію успіху 3.3.2 | W3C розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Приклади

### Необов'язкове поле має фіолетову межу

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

input:optional {
  border-color: rebeccapurple;
  border-width: 3px;
}
```

#### Результат

{{EmbedLiveSample('pryklady', 600, 120)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші псевдокласи, що стосуються валідації: {{cssxref(":required")}}, {{cssxref(":invalid")}}, {{cssxref(":valid")}}
- [Валідація даних форми](/uk/docs/Learn/Forms/Form_validation)
