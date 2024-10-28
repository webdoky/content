---
title: ":read-write"
slug: Web/CSS/:read-write
page-type: css-pseudo-class
browser-compat: css.selectors.read-write
---

{{CSSRef}}

[CSS](/uk/docs/Web/CSS) [псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) **`:read-write`** вказує на елемент (на кшталт `input` чи `textarea`), який може редагуватися користувачем.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-read-write.html", "tabbed-shorter")}}

## Синтаксис

```css
:read-write {
  /* ... */
}
```

## Приклади

### Підтвердження інформації форми в елементах лише для зчитування та елементах для зчитування та запису

Одне з застосувань контрольних елементів `readonly` — дати користувачам змогу перевірити та підтвердити інформацію, яку вони ввели в попередній формі (наприклад, деталі доставлення), але щоб вони при цьому й надалі могли подати цю інформацію вкупі з рештою форми. В прикладі нижче зроблено саме це.

Псевдоклас `:read-only` вживається для усунення всього оформлення, завдяки якому поля мають вигляд інтерактивних, а натомість змушує їх мати вигляд абзаців, доступних лише для зчитування. Псевдоклас `:read-write`, з іншого боку, використовується для надання трохи красивішого оформлення редагованому елементу `<textarea>`.

```css
input:-moz-read-only,
textarea:-moz-read-only,
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:-moz-read-write,
textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Повний вихідний код можна знайти в [readonly-confirmation.html](https://github.com/webdoky/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html); візуалізується – так:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

### Оформлення неформових контрольних елементів read-write

Цей селектор не просто вибирає елементи {{htmlElement("input")}} і{{htmlElement("textarea")}} – він вибирає _всі_ елементи, що можуть редагуватися користувачем, наприклад, елемент {{htmlelement("p")}} з атрибутом [`contenteditable`](/uk/docs/Web/HTML/Global_attributes/contenteditable).

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

{{EmbedLiveSample('oformlennia-neformovykh-kontrolnykh-elementiv-read-write', '100%', 400)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref(":read-only")}}
- Атрибут HTML [`contenteditable`](/uk/docs/Web/HTML/Global_attributes/contenteditable)
