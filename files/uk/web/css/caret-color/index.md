---
title: caret-color
slug: Web/CSS/caret-color
page-type: css-property
browser-compat: css.properties.caret-color
---

{{CSSRef}}

Властивість CSS **`caret-color`** (колір каретки) задає колір **каретки вставлення**, видимого маркера в місці, куди буде вставлено наступний набраний символ. Його іноді називають **курсором текстового введення**. Каретка з'являється в елементах штибу {{HTMLElement("input")}} або тих, що мають атрибут [`contenteditable`](/uk/docs/Web/HTML/Global_attributes#contenteditable). Зазвичай вона є тонкою вертикальною лінією, яка блимає, щоб бути більш помітною. Усталено вона чорна, але її колір можна змінити за допомогою цієї властивості.

{{EmbedInteractiveExample("pages/css/caret-color.html")}}

Зверніть увагу на те, що каретка вставлення — це лише один з типів каретки. Наприклад, у багатьох браузерах є «навігаційна каретка», яка діє подібно до каретки вставлення, але може переміщуватися по нередаговному тексту. З іншого боку, зображення курсора миші, яке відображається при наведенні на текст, для якого властивість {{cssxref("cursor")}} має значення `auto`, або при наведенні на елемент, для якого властивість `cursor` має значення `text` або `vertical-text`, попри те, що воно іноді подібне до каретки, нею не є (це курсор).

## Синтаксис

```css
/* Значення – ключові слова */
caret-color: auto;
caret-color: transparent;
caret-color: currentcolor;

/* Значення <color> */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0 200 0);
caret-color: hsl(228deg 4% 24% / 80%);

/* Глобальні значення */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: revert-layer;
caret-color: unset;
```

### Значення

- `auto`

  - : Користувацький агент обирає відповідний колір для каретки. Зазвичай це {{cssxref("&lt;color&gt;","currentcolor","#kliuchove-slovo-currentcolor")}}, але користувацький агент може обрати інший колір, щоб забезпечити хорошу видимість і контрастність щодо навколишнього вмісту, враховуючи значення `currentcolor`, фон, тіні та інші чинники.

    > **Примітка:** Попри те, що користувацькі агенти можуть використовувати значення `currentcolor` (яке зазвичай анімується) для значення `auto`, `auto` не інтерполюється в переходах та анімаціях.

- {{cssxref("&lt;color&gt;")}}
  - : Колір каретки.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Задання власного кольору каретки

#### HTML

```html
<input value="Це поле використовує усталену каретку." size="64" />
<input class="custom" value="Я маю особливий колір каретки!" size="64" />
<p contenteditable class="custom">
  Цей абзац можна редагувати, і його каретка також має особливий колір!
</p>
```

#### CSS

```css
input {
  caret-color: auto;
  display: block;
  margin-bottom: 0.5em;
}

input.custom {
  caret-color: red;
}

p.custom {
  caret-color: green;
}
```

#### Результат

{{EmbedLiveSample('zadannia-vlasnoho-koloru-karetky', 500, 200)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Елемент {{HTMLElement("input")}}
- Атрибут HTML [`contenteditable`](/uk/docs/Web/HTML/Global_attributes#contenteditable), завдяки якому можна зробити редаговним текст будь-якого елемента
- [Застосування кольору до елементів HTML за допомогою CSS](/uk/docs/Web/CSS/CSS_colors/Applying_color)
- Тип даних {{cssxref("&lt;color&gt;")}}
- Інші властивості, пов'язані з кольором: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} і {{cssxref("column-rule-color")}}
