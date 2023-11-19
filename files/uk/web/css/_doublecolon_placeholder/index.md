---
title: "::placeholder"
slug: Web/CSS/::placeholder
page-type: css-pseudo-element
browser-compat: css.selectors.placeholder
---

{{CSSRef}}

[Псевдоелемент](/uk/docs/Web/CSS/Pseudo-elements) [CSS](/uk/docs/Web/CSS) **`::placeholder`** (заповнювач) представляє [текст-заповнювач](/uk/docs/Web/HTML/Element/input#placeholder-zapovniuvach) в елементі {{HTMLElement("input")}} або {{HTMLElement("textarea")}}.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

Лише та підмножина властивостей CSS, яка застосовується до псевдоелемента {{cssxref("::first-line")}}, може бути використана в правилах, які використовують `::placeholder` у селекторі.

> **Примітка:** У більшості браузерів вигляд тексту-заповнювача – усталено прозорий або світло-сірого кольору.

## Синтаксис

```css
::placeholder {
  /* ... */
}
```

## Занепокоєння щодо доступності

### Колірний контраст

#### Співвідношення контрасту

Текст-заповнювач зазвичай має світліший колір, щоб показати, що це лише пропозиція для того, якого роду введення буде дійсним, а не яке-небудь фактичне введення.

Важливо пересвідчитись, що співвідношення контрасту між кольором тексту-заповнювача та тлом поля – достатньо високе, щоб люди зі зниженим зором могли його прочитати, а також переконатись, що є достатньою різниця між кольором тексту-заповнювача та кольором введеного тексту, щоб користувачі не плутали текст-заповнювач із введеними даними.

Співвідношення колірного контрасту визначається шляхом порівняння світності кольорів тексту-заповнювача і тла поля. Щоб відповідати поточним [Настановам щодо доступності вебвмісту (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), необхідне співвідношення 4,5:1 для текстового вмісту і 3:1 для більшого тексту, наприклад, заголовків. Великим текстом вважається текст розміром 18.66px і більше, або грубим шрифтом – 24px і більше.

- [WebAIM: Перевірка колірного контрасту](https://webaim.org/resources/contrastchecker/)
- [MDN Розуміння WCAG, пояснення Настанови 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanova-1-4-robyty-vmist-lehkym-dlia-perehliadu-ta-proslukhovuvannia-v-tomu-chysli-viddiliaty-perednii-plan-vid-zadnoho)
- [Розуміння Критерію успіху 1.4.3 | W3C Розуміння WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Зручність

Текст-заповнювач із достатнім колірним контрастом може бути сприйнятий як введені дані. Текст-заповнювач також зникне, коли користувач введе вміст в елемент {{htmlelement("input")}}. Обидві ці обставини можуть заважати успішному заповненню форми, особливо для людей із когнітивними проблемами.

Інший підхід для надання інформації заповнювача – додавати її поза полем, візуально поруч, а потім використовувати [`aria-describedby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) для програмного зв'язування {{HTMLElement("input")}} із його підказкою.

Завдяки такій реалізації вміст підказки доступний навіть якщо в поле введена інформація, а поле введення при завантаженні сторінки здається вільним від попереднього введення. Більшість технологій читання з екрана будуть використовувати для читання підказки `aria-describedby` після того, як буде оголошений підпис поля введення, і особа, що використовує читач з екрана, може заглушити її, якщо вважатиме додаткову інформацію непотрібною.

```html
<label for="user-email">Ваша адреса електронної пошти</label>
<span id="user-email-hint" class="input-hint">Приклад: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Заповнювачі в полях форми – шкідливі, – Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Режим високого контрасту Windows

Текст-заповнювач з'явиться з таким же оформленням, як введений користувачем текстовий вміст, коли візуалізується в [Режимі високого контрасту Windows](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)). Для декого це ускладнить з'ясування того, який вміст був введений, а який – є текстом-заповнювачем.

### Підписи

Заповнювачі – це не заміна для елемента {{htmlelement("label")}}. Без підпису, який був програмно пов'язаний із полем введення за допомогою комбінації атрибутів [`for`](/uk/docs/Web/HTML/Element/label#for) і [`id`](/uk/docs/Web/HTML/Global_attributes#id), допоміжні технології, як то читачі з екрана, не можуть розібрати елементи {{htmlelement("input")}}.

- [Заповнювачі в полях форми – шкідливі, – Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Приклади

### Зміна вигляду заповнювача

Цей приклад демонструє частину змін, які можна внести до стилів тексту-заповнювача.

#### HTML

```html
<input placeholder="Друкуйте тут" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
```

#### Результат

{{EmbedLiveSample("zmina-vyhliadu-zapovniuvacha", 200, 60)}}

### Непрозорий текст

Частина браузерів (наприклад, Firefox) задає усталене значення {{cssxref("opacity")}} для заповнювачів меншим за 100%. Якщо ви хочете, щоб текст-заповнювач був повністю непрозорим, задайте значення `opacity` рівним `1`.

#### HTML

```html
<input placeholder="Усталена непрозорість" />
<input placeholder="Повна непрозорість" class="force-opaque" />
```

#### CSS

```css
::placeholder {
  color: green;
}

.force-opaque::placeholder {
  opacity: 1;
}
```

#### Результат

{{EmbedLiveSample("neprozoryi-tekst", 200, 60)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Псевдоклас {{cssxref(":placeholder-shown")}} оформлює елемент, який _має_ активний заповнювач.
- Споріднені елементи HTML: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [Форми HTML](/uk/docs/Learn/Forms)
