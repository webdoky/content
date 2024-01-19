---
title: ":indeterminate"
slug: Web/CSS/:indeterminate
page-type: css-pseudo-class
browser-compat: css.selectors.indeterminate
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:indeterminate`** (невизначене) представляє будь-який елемент форми, чий стан – невизначений, наприклад, поля для галочки, які мають стан [`indeterminate`](/uk/docs/Web/HTML/Element/input/checkbox#polia-dlia-halochok-z-nevyznachenym-stanom), заданий за допомогою JavaScript, кнопки-перемикачі, які є членами групи, в якій всі кнопки-перемикачі не вибрані, та елементи {{HTMLElement("progress")}} без атрибута `value`.

```css
/* Вибирає всі елементи <input>, стан яких є невизначеним */
input:indeterminate {
  background: lime;
}
```

Елементи, на які націлюється цей селектор:

- Елементи [`<input type="checkbox">`](/uk/docs/Web/HTML/Element/input/checkbox), чиїй властивості `indeterminate` присвоєно `true` за допомогою [JavaScript](/uk/docs/Web/JavaScript)
- Елементи [`<input type="radio">`](/uk/docs/Web/HTML/Element/input/radio), коли всі радіокнопки з однаковим значенням `name` в формі не вибрані
- Елементи {{HTMLElement("progress")}} у невизначеному стані

## Синтаксис

```plain
:indeterminate
```

## Приклади

### Поле для галочки та радіокнопка

Цей приклад застосовує особливі стилі до підписів, пов'язаних із невизначеними полями форми.

#### HTML

```html
<fieldset>
  <legend>Поле для галочки</legend>
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox"
      >Цей підпис поля для галочки спочатку має світло-зелений колір.</label
    >
  </div>
</fieldset>

<fieldset>
  <legend>Радіокнопки</legend>
  <div>
    <input type="radio" id="radio1" name="radioButton" value="val1" />
    <label for="radio1"
      >Підпис першої радіокнопки спершу має світло-зелений колір.</label
    >
  </div>
  <div>
    <input type="radio" id="radio2" name="radioButton" value="val2" />
    <label for="radio1"
      >Підпис другої радіокнопки також спершу має світло-зелений колір.</label
    >
  </div>
</fieldset>
```

#### CSS

```css
input:indeterminate + label {
  background: lime;
}
```

```css hidden
fieldset {
  padding: 1em 0.75em;
}

fieldset:first-of-type {
  margin-bottom: 1.5rem;
}

fieldset:not(:first-of-type) > div:not(:last-child) {
  margin-bottom: 0.5rem;
}
```

#### JavaScript

```js
const inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}
```

#### Результат

{{EmbedLiveSample('pole-dlia-halochky-ta-radioknopka', 'auto', 230)}}

### Смуга прогресу

#### HTML

```html
<progress></progress>
```

#### CSS

```css
progress {
  margin: 4px;
}

progress:indeterminate {
  width: 80vw;
  height: 20px;
}
```

#### Результат

{{EmbedLiveSample('smuha-prohresu', 'auto', 30)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Вебформи – Робота з користувацькими даними](/uk/docs/Learn/Forms)
- [Оформлення вебформ](/uk/docs/Learn/Forms/Styling_web_forms)
- Атрибут [`indeterminate`](/uk/docs/Web/HTML/Element/input/checkbox#polia-dlia-halochok-z-nevyznachenym-stanom) елемента [`<input type="checkbox">`](/uk/docs/Web/HTML/Element/input/checkbox)
- Елемент {{HTMLElement("input")}} і інтерфейс {{domxref("HTMLInputElement")}}, який його реалізує.
- Селектор CSS {{cssxref(":checked")}} дає змогу оформлювати поля для галочок на основі того, чи є вони вибраними, чи ні
