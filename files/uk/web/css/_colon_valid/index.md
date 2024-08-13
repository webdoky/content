---
title: ":valid"
slug: Web/CSS/:valid
page-type: css-pseudo-class
browser-compat: css.selectors.valid
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:valid`** (дійсне, валідне, допустиме) представляє всі елементи {{HTMLElement("input")}} та інші елементи {{HTMLElement("form", "форми")}}, чий вміст успішно проходить [валідацію](/uk/docs/Web/HTML/Constraint_validation). Це дає змогу легко змусити дійсні поля приймати зовнішній вигляд, який допомагає користувачам перевіряти, що введені ними дані мають коректний формат.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-valid.html", "tabbed-shorter")}}

Цей псевдоклас корисний для виділення коректно заповнених полів для користувачів.

## Синтаксис

```css
:valid {
  /* ... */
}
```

## Доступність

Зелений колір заведено використовувати для позначення дійсних полів. Люди, що мають якогось роду колірну сліпоту, не зможуть з'ясувати стан поля, якщо вкупі з кольором не використовується додатковий індикатор, що не покладається на колір для донесення сповіщення. Зазвичай використовується описовий текст чи піктограма.

- [MDN Розуміння WCAG, Пояснення Настанови 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Розуміння критерію успіху 1.4.1 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Приклади

### Позначення дійсних і недійсних полів форми

У цьому прикладі використовуються подібні структури, що вміщають додаткові елементи `<span>` для генерації в них вмісту; тут вони для сповіщення про дійсні чи недійсні дані:

```html
<div>
  <label for="fname">Особове ім'я *: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Щоб надати це сповіщення, використовується наступний CSS:

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

Елементам `<span>` задається `position: relative`, щоб можна було розташувати відносно них згенерований вміст. Потім абсолютно розташовується різний згенерований вміст, залежний від того, чи є дані форми дійсними, чи недійсними: зелена галочка чи червоний хрест, відповідно. Щоб додати трохи терміновості до недійсних даних, іще полям додано грубу червону межу, коли вони недійсні.

> [!NOTE]
> Щоб додати ці підписи, вжито `::before`, оскільки `::after` вже використовується для підписів "required".

Приклад можна спробувати нижче:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Зверніть увагу на те, що обов'язкові текстові поля є недійсними, поки порожні, але дійсними, коли в них щось уведено. Поле електронної пошти, з іншого боку, є дійсним, коли порожнє, оскільки не є обов'язковим, але недійсним, коли містить щось, що не є коректною адресою електронної пошти.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші псевдокласи, пов'язані з валідацією: {{cssxref(":required")}}, {{cssxref(":optional")}}, {{cssxref(":invalid")}}
- [Валідація даних форми](/uk/docs/Learn/Forms/Form_validation)
- Доступ до [стану валідності](/uk/docs/Web/API/ValidityState) з JavaScript
