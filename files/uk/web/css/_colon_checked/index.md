---
title: ":checked"
slug: Web/CSS/:checked
page-type: css-pseudo-class
browser-compat: css.selectors.checked
---

{{CSSRef}}

Селектор-[псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:checked`** (позначений) представляє будь-який елемент **radio** ([`<input type="radio">`](/uk/docs/Web/HTML/Element/input/radio)), **checkbox** ([`<input type="checkbox">`](/uk/docs/Web/HTML/Element/input/checkbox)) або **option** ({{HTMLElement("option")}} у {{HTMLElement("select")}}), що має позначку або переключений у стан `on`.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-checked.html", "tabbed-shorter")}}

Користувачі можуть задати цей стан, вибравши елемент, або зняти його, скасувавши вибір елемента.

> **Примітка:** У зв'язку з тим, що браузери нерідко обробляють елементи `<option>` як [заміщені елементи](/uk/docs/Web/CSS/Replaced_element), то ступінь, до якого їх можна стилізувати за допомогою псевдокласу `:checked`, у різних браузерах різний.

## Синтаксис

```css
:checked {
  /* ... */
}
```

## Приклади

### Базовий приклад

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes" value="yes" />
  <label for="yes">Так</label>

  <input type="radio" name="my-input" id="no" value="no" />
  <label for="no">Ні</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in" />
  <label for="opt-in">Вибери мене!</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">Яблука</option>
  <option value="opt2">Виноград</option>
  <option value="opt3">Груші</option>
</select>
```

#### CSS

```css
div,
select {
  margin: 8px;
}

/* Підписи для позначених полів */
input:checked + label {
  color: red;
}

/* Радіоелемент, коли вибраний *.
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Елемент поля для галочки, коли має галочку */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Елементи варіантів, коли обрані */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

#### Результат

{{EmbedLiveSample("bazovyi-pryklad")}}

### Перемикання елементів за допомогою прихованого поля для галочки

Цей приклад використовує псевдоклас `:checked`, щоб дати користувачам змогу перемикати вміст на основі стану поля для галочки, не використовуючи [JavaScript](/uk/docs/Web/JavaScript).

#### HTML

```html
<input type="checkbox" id="expand-toggle" />

<table>
  <thead>
    <tr>
      <th>Колонка №1</th>
      <th>Колонка №2</th>
      <th>Колонка №3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="expandable">
      <td>[іще тексту]</td>
      <td>[іще тексту]</td>
      <td>[іще тексту]</td>
    </tr>
    <tr>
      <td>[текст комірки]</td>
      <td>[текст комірки]</td>
      <td>[текст комірки]</td>
    </tr>
    <tr>
      <td>[текст комірки]</td>
      <td>[текст комірки]</td>
      <td>[текст комірки]</td>
    </tr>
    <tr class="expandable">
      <td>[іще тексту]</td>
      <td>[іще тексту]</td>
      <td>[іще тексту]</td>
    </tr>
    <tr class="expandable">
      <td>[іще тексту]</td>
      <td>[іще тексту]</td>
      <td>[іще тексту]</td>
    </tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">Перемкнути приховані ряди</label>
```

#### CSS

```css
/* Приховати поле для галочки для перемикання */
#expand-toggle {
  display: none;
}

/* Усталено приховати додатковий вміст */
.expandable {
  visibility: collapse;
  background: #ddd;
}

/* Оформити кнопку */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ff7;
  border: 1px solid;
  border-radius: 3px;
}

/* Показати прихований вміст, коли поле для галочки має галочку */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Оформити кнопку, коли поле для галочки має галочку */
#expand-toggle:checked ~ #expand-btn {
  background-color: #ccc;
}
```

#### Результат

{{EmbedLiveSample("peremykannia-elementiv-za-dopomohoiu-prykhovanoho-polia-dlia-halochky", "auto", 220)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Вебформи – робота з користувацькими даними](/uk/docs/Learn/Forms)
- [Оформлення вебформ](/uk/docs/Learn/HTML/Forms/Styling_HTML_forms)
- Пов'язані елементи HTML: [`<input type="checkbox">`](/uk/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/uk/docs/Web/HTML/Element/input/radio), {{HTMLElement("select")}} і {{HTMLElement("option")}}
- [Заміщені елементи](/uk/docs/Web/CSS/Replaced_element)
