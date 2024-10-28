---
title: ":read-only"
slug: Web/CSS/:read-only
page-type: css-pseudo-class
browser-compat: css.selectors.read-only
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:read-only`** (лише для зчитування) вибирає елементи (наприклад, певні типи {{htmlelement("input")}}, а також {{htmlelement("textarea")}}), які не може редагувати користувач. Елементи, на які не діє атрибут HTML [`readonly`](/uk/docs/Web/HTML/Attributes/readonly) (наприклад, [`<input type="radio">`](/uk/docs/Web/HTML/Element/input/radio), [`<input type="checkbox">`](/uk/docs/Web/HTML/Element/input/checkbox) та усі неформові елементи), також вибираються псевдокласом `:read-only`. Фактично `:read-only` дає збіг з усім, з чим не дає збігу {{cssxref(":read-write")}}, що робить його рівносильним `:not(:read-write)`.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-read-only.html", "tabbed-shorter")}}

## Синтаксис

```css
:read-only {
  /* ... */
}
```

## Приклади

### Підтвердження інформації форми за допомогою елементів лише для зчитування та елементів для зчитування та запису

Одне з застосувань контрольних елементів, доступних лише для зчитування, — дати користувачам змогу перевірити та підтвердити інформацію, яку вони ввели в попередній формі (наприклад, деталі доставлення), але щоб вони при цьому й надалі могли подати цю інформацію вкупі з рештою форми. В прикладі нижче зроблено саме це.

Псевдоклас `:read-only` вживається для усунення всього оформлення, завдяки якому поля мають вигляд інтерактивних, а натомість змушує їх мати вигляд абзаців, доступних лише для зчитування. Псевдоклас `:read-write`, з іншого боку, використовується для надання трохи красивішого оформлення редагованому елементу `<textarea>`.

```html hidden
<form>
  <fieldset>
    <legend>Перевірте деталі доставлення</legend>
    <div>
      <label for="name">Ім'я: </label>
      <input id="name" name="name" type="text" value="Mr Soft" readonly />
    </div>
    <div>
      <label for="address">Адреса: </label>
      <textarea id="address" name="address" readonly>
Вул. Незалежності, буд. 45, кв. 15,
Івано-Франківськ
</textarea
      >
    </div>
    <div>
      <label for="postal-code">Поштовий індекс: </label>
      <input
        id="postal-code"
        name="postal-code"
        type="text"
        value="76002"
        readonly />
    </div>
  </fieldset>

  <fieldset>
    <legend>Додаткові інструкції</legend>
    <div>
      <label for="sms-confirm">Надіслати підтвердження по SMS?</label>
      <input id="sms-confirm" name="sms-confirm" type="checkbox" />
    </div>
    <div>
      <label for="instructions">Будь-які додаткові рекомендації?</label>
      <textarea id="instructions" name="instructions"></textarea>
    </div>
  </fieldset>

  <div><button type="submit">Змінити деталі та надіслати</button></div>
</form>
```

```css hidden
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
  margin-bottom: 20px;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

button,
label,
input[type="text"],
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
}

input[type="text"],
textarea {
  width: 50%;
}

textarea {
  height: 110px;
  resize: none;
}

label {
  width: 40%;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  background-color: #eee;
}

button {
  width: 60%;
  margin: 20px auto;
}
```

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: #ddd;
}

textarea:read-write {
  outline: 1px dashed red;
  outline-offset: 2px;
  border-radius: 5px;
}
```

{{EmbedLiveSample("pidtverdzhennia-informatsii-formy-za-dopomohoyu-elementiv-lyshe-dlia-zchytuvannia-ta-elementiv-dlia-zchytuvannia-ta-zapysu", "100%", 620)}}

### Оформлення неформових контрольних елементів лише для зчитування

Цей селектор вибирає не лише елементи {{htmlElement("input")}} і {{htmlElement("textarea")}} – він обирає _всі_ елементи, що не можуть редагуватися користувачами.

```html
<p contenteditable>
  Цей абзац – редагований, він read-write (і для зчитування, і для запису).
</p>

<p>Цей абзац – нередагований, він read-only (лише для зчитування).</p>
```

```css
p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}
```

{{EmbedLiveSample('oformlennia-neformovykh-kontrolnykh-elementiv-lyshe-dlia-zchytuvannia', '100%', 200)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref(":read-write")}}
- Атрибут HTML [`contenteditable`](/uk/docs/Web/HTML/Global_attributes/contenteditable)
