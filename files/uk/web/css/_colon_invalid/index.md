---
title: ":invalid"
slug: Web/CSS/:invalid
page-type: css-pseudo-class
browser-compat: css.selectors.invalid
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:invalid`** (недійсний) представляє будь-який елемент {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} або інший елемент {{HTMLElement("form", "форми")}}, чий вміст провалює [валідацію](/uk/docs/Web/HTML/Constraint_validation).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-invalid.html", "tabbed-shorter")}}

Цей псевдоклас корисний для підсвічування помилок користувачів у заповненні полів.

## Синтаксис

```css
:invalid {
  /* ... */
}
```

## Приклади

### Фарбування елементів для показу валідації

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

input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
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

{{EmbedLiveSample('farbuvannia-elementiv-dlia-pokazu-validatsii', 600, 200)}}

### Показ секцій поетапно

У цьому прикладі `:invalid` використовується вкупі з `~`, [комбінатором подальших сестер](/uk/docs/Web/CSS/Subsequent-sibling_combinator), щоб зробити форму поетапною, так що форма спочатку показує перший елемент для заповнення, а коли користувач заповнює кожен елемент, форма показує наступний. Коли вся форма заповнена, користувач може її подати.

#### HTML

```html
<form>
  <fieldset>
    <label for="form-name">Ім'я</label><br />
    <input type="text" name="name" id="form-name" required />
  </fieldset>

  <fieldset>
    <label for="form-email">Адреса електронної пошти</label><br />
    <input type="email" name="email" id="form-email" required />
  </fieldset>

  <fieldset>
    <label for="form-message">Повідомлення</label><br />
    <textarea name="message" id="form-message" required></textarea>
  </fieldset>

  <button type="submit" name="send">Подати</button>
</form>
```

#### CSS

```css
/* Приховати fieldset після недійсного fieldset */
fieldset:invalid ~ fieldset {
  display: none;
}

/* Затемнити та вимкнути кнопку, поки форма недійсна */
form:invalid button {
  opacity: 0.3;
  pointer-events: none;
}

input,
textarea {
  box-sizing: border-box;
  width: 100%;
  font-family: monospace;
  padding: 0.25em 0.5em;
}

button {
  width: 100%;
  border: thin solid darkgrey;
  font-size: 1.25em;
  background-color: darkgrey;
  color: white;
}
```

#### Результат

{{EmbedLiveSample('pokaz-sektsii-poetapno', 600, 300)}}

## Занепокоєння щодо доступності

Загальноприйнято для позначення недійсного введення використовується червоний колір. Люди, що мають певного роду колірну сліпоту, не зможуть з'ясувати стан поля, якщо колір не доповнюється ще якимось індикатором, що не покладається для донесення змісту на колір. Зазвичай використовується текст чи піктограма.

- [MDN Розуміння WCAG, пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння Критерію успіху 1.4.1 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Примітки

### Радіокнопки

Якщо будь-яка з радіокнопок групи має `required`, то псевдоклас `:invalid` застосовується до всіх радіокнопок, якщо жодна з них не вибрана. (Згруповані радіокнопки мають спільне значення своїх атрибутів `name`.)

### Усталені значення Gecko

Усталено Gecko не застосовує стиль до псевдокласу `:invalid`. Проте цей рушій застосовує стиль (червоний "блиск" за допомогою властивості {{Cssxref("box-shadow")}}) до псевдокласу {{cssxref(":user-invalid")}}, який застосовується в підмножині випадків `:invalid`.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші пов'язані з валідацією псевдокласи: {{cssxref(":required")}}, {{cssxref(":optional")}}, {{cssxref(":valid")}}
- Споріднені псевдокласи Mozilla: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Валідація даних форм](/uk/docs/Learn/Forms/Form_validation)
- Доступ до [стану валідності](/uk/docs/Web/API/ValidityState) з JavaScript
