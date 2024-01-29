---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
page-type: html-element
browser-compat: html.elements.input.type_reset
---

{{HTMLSidebar}}

Елементи {{HTMLElement("input")}} типу **`reset`** (скинути) візуалізуються як кнопки, чий усталений обробник події {{domxref("Element/click_event", "click")}} скидає всі поля форми до своїх початкових значень.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> **Примітка:** Зазвичай слід уникати додавання до форм кнопок скидання. Вони рідко корисні й з більшою ймовірністю спантеличать користувачів, що випадково їх клацнуть (нерідко при намаганні клацнути [кнопку подання](/uk/docs/Web/HTML/Element/input/submit)).

## Значення

Атрибут [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) елемента `<input type="reset">` містить рядок, що використовується як підпис кнопки, забезпечуючи тим самим кнопці {{glossary("accessible description", "доступний опис")}}. Кнопки штибу `reset` не мають інших значень.

### Задання атрибута value

```html
<input type="reset" value="Скинути форму" />
```

{{EmbedLiveSample("zadannia-atrybuta-value", 650, 30)}}

### Пропускання атрибута value

Якщо не задати `value`, то вийде кнопка з усталеним підписом (зазвичай "Reset", але може бути й щось інше, залежно від {{Glossary("User agent", "користувацького агента")}}):

```html
<input type="reset" />
```

{{EmbedLiveSample("propuskannia-atrybuta-value", 650, 30)}}

## Застосування кнопок скидання

Кнопки `<input type="reset">` використовуються для скидання форм. При потребі створити особливу кнопку, а потім налаштувати її поведінку за допомогою JavaScript – необхідно використати [`<input type="button">`](/uk/docs/Web/HTML/Element/input/button), а ще краще – елемент {{htmlelement("button")}}.

### Проста кнопка скидання

Почнімо зі створення простої кнопки скидання:

```html
<form>
  <div>
    <label for="example">Введіть трохи тексту</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Скинути форму" />
  </div>
</form>
```

Це візуалізується так:

{{EmbedLiveSample("prosta-knopka-skydannia", 650, 100)}}

Спробуйте ввести в текстове поле якийсь текст, а потім натиснути кнопку скидання.

### Додавання комбінації клавіш для скидання

Щоб додати до кнопки скидання комбінацію клавіш – як і до будь-якого {{HTMLElement("input")}}, для якого це має зміст – використовується глобальний атрибут [`accesskey`](/uk/docs/Web/HTML/Global_attributes#accesskey).

У цьому прикладі <kbd>r</kbd> задано як комбінацію клавіш (знадобиться натиснути <kbd>r</kbd> плюс певні клавіші-модифікатори, відповідні для комбінації браузера та ОС; дивіться змістовний список таких клавіш в розділі [`accesskey`](/uk/docs/Web/HTML/Global_attributes#accesskey)).

```html
<form>
  <div>
    <label for="example">Введіть трохи тексту</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Скинути форму" accesskey="r" />
  </div>
</form>
```

{{EmbedLiveSample("dodavannia-kombinatsii-klavish-dlia-skydannia", 650, 100)}}

Проблема з прикладом вище полягає в тому, що користувач не може дізнатися про комбінацію клавіш! Це особливо важливо, оскільки модифікатори зазвичай є нестандартними, аби уникати їхніх конфліктів. При розробці сайту слід обов'язково подати цю інформацію в формі, що не шкодить дизайну сайту (наприклад, шляхом надання легкодоступного посилання, що веде до інформації про комбінації клавіш на сайті). Додавання підказки до кнопки (за допомогою атрибута [`title`](/uk/docs/Web/HTML/Global_attributes#title)) також може допомогти, попри те, що у зв'язку з потребами доступності, таке рішення не є повним.

### Вимикання та вмикання кнопки скидання

Щоб вимкнути кнопку скидання, слід задати на ній атрибут [`disabled`](/uk/docs/Web/HTML/Element/input#disabled-vymknene), отак:

```html
<input type="reset" value="Вимкнено" disabled />
```

На ходу вмикати та вимикати кнопки можна шляхом присвоєння `disabled` зі значенням `true` або `false`; у JavaScript це має вигляд `btn.disabled = true` або `btn.disabled = false`.

> **Примітка:** Більше ідей щодо вмикання та вимикання кнопок дивіться на сторінці [`<input type="button">`](/uk/docs/Web/HTML/Element/input/button#vymknennia-ta-vmykannia-knopky).

## Валідація

Кнопки не беруть участі в валідації обмежень; вони не мають значення, котре можна було б обмежити.

## Приклади

Прості приклади наведено вище. Насправді про кнопки скидання більше нічого додати.

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#znachennia">Значення</a></strong></td>
      <td>Рядок, що використовується як підпис кнопки</td>
    </tr>
    <tr>
      <td><strong>Події</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>Доступні спільні атрибути</strong></td>
      <td>
        <a href="/uk/docs/Web/HTML/Element/input#type-typ"><code>type</code></a> і
        <a href="/uk/docs/Web/HTML/Element/input#value-znachennia"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Атрибути IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Інтерфейс DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Методи</strong></td>
      <td>Жодних</td>
    </tr>
    <tr>
      <td><strong>Неявна роль ARIA</strong></td>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement("input")}} та інтерфейс {{domxref("HTMLInputElement")}}, що його реалізовує.
- [Форми та кнопки](/uk/docs/Learn/Forms/Basic_native_form_controls#realni-knopky)
- [Форми HTML](/uk/docs/Learn/Forms)
- Елемент {{HTMLElement("button")}}
- [Сумісність властивостей CSS](/uk/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
