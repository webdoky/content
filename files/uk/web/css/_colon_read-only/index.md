---
title: ":read-only"
slug: Web/CSS/:read-only
page-type: css-pseudo-class
browser-compat: css.selectors.read-only
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:read-only`** (лише для зчитування) представляє елемент (наприклад, `input` або `textarea`), який недоступний для редагування користувачем.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-read-only.html", "tabbed-shorter")}}

## Синтаксис

```css
:read-only {
  /* ... */
}
```

## Приклади

### Підтвердження інформації форми в елементах лише для зчитування та елементах для зчитування та запису

Одне з застосувань контрольних елементів `readonly` — дати користувачам змогу перевірити та підтвердити інформацію, яку вони ввели в попередній формі (наприклад, деталі доставлення), але щоб вони при цьому й надалі могли подати цю інформацію вкупі з рештою форми. В прикладі нижче зроблено саме це.

Псевдоклас `:read-only` вживається для усунення всього оформлення, завдяки якому поля мають вигляд інтерактивних, а натомість змушує їх мати вигляд абзаців, доступних лише для зчитування. Псевдоклас `:read-write`, з іншого боку, використовується для надання трохи красивішого оформлення редагованому елементу `<textarea>`.

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Повний вихідний код можна знайти в [readonly-confirmation.html](https://github.com/webdoky/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html); візуалізується – так:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

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

{{EmbedLiveSample('oformlennia-neformovykh-kontrolnykh-elementiv-lyshe-dlia-zchytuvannia', '100%', 400)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref(":read-write")}}
- Атрибут HTML [`contenteditable`](/uk/docs/Web/HTML/Global_attributes#contenteditable)
