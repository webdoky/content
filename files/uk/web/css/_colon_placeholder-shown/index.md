---
title: ":placeholder-shown"
slug: Web/CSS/:placeholder-shown
page-type: css-pseudo-class
browser-compat: css.selectors.placeholder-shown
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:placeholder-shown`** (показано заповнювач) представляє будь-який елемент {{HTMLElement("input")}} або {{HTMLElement("textarea")}}, який наразі показує [текст заповнювача](/uk/docs/Web/HTML/Element/input#placeholder-zapovniuvach).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-placeholder-shown.html", "tabbed-shorter")}}

## Синтаксис

```css
:placeholder-shown {
  /* ... */
}
```

## Приклади

### Базовий приклад

Цей приклад застосовує особливі стилі шрифту та меж, коли показано заповнювач.

#### HTML

```html
<input placeholder="Надрукуйте тут щось!" />
```

#### CSS

```css
input {
  border: 1px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: teal;
  color: purple;
  font-style: italic;
}
```

#### Результат

{{EmbedLiveSample("bazovyi-pryklad", 200, 80)}}

### Переповнення текстом

Коли поля форми замалі, текст заповнювача може обрізатися в небажаний спосіб. Можна вжити властивість {{cssxref("text-overflow")}}, щоб змінити спосіб відображення тексту, що перелився через край.

#### HTML

```html
<input id="input1" placeholder="Ім'я, ранг та серійний номер" /> <br /><br />
<input id="input2" placeholder="Ім'я, ранг та серійний номер" />
```

#### CSS

```css
#input2:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### Результат

{{EmbedLiveSample("perepovnennia-tekstom", 200, 80)}}

### Підлаштоване поле введення

Наступний приклад виділяє картку студентського квитка особливим стилем.

#### HTML

```html
<form id="test">
  <p>
    <label for="name">Уведіть ім'я студента:</label>
    <input id="name" placeholder="Ім'я студента" />
  </p>
  <p>
    <label for="branch">Уведіть факультет студента:</label>
    <input id="branch" placeholder="Факультет студента" />
  </p>
  <p>
    <label for="sid">Уведіть номер студентського квитка:</label>
    <input
      type="number"
      pattern="[0-9]{8}"
      title="8-цифровий номер"
      id="sid"
      class="studentid"
      placeholder="8-цифровий номер" />
  </p>
  <input type="submit" />
</form>
```

#### CSS

```css
input {
  background-color: #e8e8e8;
  color: black;
}

input.studentid:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### Результат

{{EmbedLiveSample("pidlashtovane-pole-vvedennia", 200, 180)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Псевдоелемент {{CSSxRef("::placeholder")}} оформлює _сам_ заповнювач.
- Пов'язані елементи HTML: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [Форми HTML](/uk/docs/Learn/Forms)
