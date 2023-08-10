---
title: Вжите значення
slug: Web/CSS/used_value
page-type: guide
spec-urls: https://www.w3.org/TR/CSS22/cascade.html#used-value
---

{{CSSRef}}

**Вжите значення** властивості [CSS](/uk/docs/Web/CSS) – це її значення після того, як над [обчисленим значенням](/uk/docs/Web/CSS/computed_value) були виконані всі обчислення.

Після того, як {{glossary("User agent", "користувацький агент")}} завершив усі необхідні обчислення, кожна властивість CSS отримує вжите значення. Вжиті значення розмірностей (наприклад, {{cssxref("width")}}, {{cssxref("line-height")}}) – у пікселях. Вжиті значення властивостей-скорочень (наприклад, {{cssxref("background")}}) узгоджені зі значеннями своїх властивостей-складових (наприклад, {{cssxref("background-color")}} або {{cssxref("background-size")}}) та зі значеннями {{cssxref("position")}} та {{cssxref("float")}}.

> **Примітка:** API DOM {{domxref("Window.getComputedStyle", "getComputedStyle()")}} повертає [вирішене значення](/uk/docs/Web/CSS/resolved_value), котре може бути або [обчисленим значенням](/uk/docs/Web/CSS/computed_value), або вжитим значенням, залежно від властивості.

## Приклад

Цей приклад обчислює та виводить вжите значення `width` трьох елементів (оновлюється при зміні розміру):

### HTML

```html
<div id="no-width">
  <p>Без явно заданої ширини.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Явно задана ширина: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Явно задана ширина: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

### CSS

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Для яскравішого підкреслення результатів */
div {
  border: 1px solid red;
  padding: 8px;
}
```

### JavaScript

```js
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `Вжита ширина: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

### Результат

{{EmbedLiveSample('pryklad', '80%', 372)}}

## Відмінність від обчисленого значення

Стандарт CSS 2.0 визначав лише _обчислене значення_ як останній крок обчислення властивостей. Потім версія CSS 2.1 запровадила окреме визначення вжитого значення. Після цього елемент міг явно успадковувати ширину чи висоту від предка, чиє обчислене значення – у відсотках. Для властивостей CSS, що не залежать від компонування (наприклад, `display`, `font-size` чи `line-height`), обчислені значення та вжиті значення збігаються. Наведені нижче властивості CSS 2.1 залежать від компонування, тому в них обчислені значення та вжиті значення відрізняються: (взято зі [Змін у CSS 2.1: Задані, обчислені та фактичні значення](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- `background-position`
- `bottom`, `left`, `right`, `top`
- `height`, `width`
- `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
- `min-height`, `min-width`
- `padding-bottom`, `padding-left`, `padding-right`, `padding-top`
- `text-indent`

## Специфікації

{{Specifications}}

## Дивіться також

- {{domxref("window.getComputedStyle")}}
- Ключові концепції CSS:
  - [Синтаксис CSS](/uk/docs/Web/CSS/Syntax)
  - [Коментарі](/uk/docs/Web/CSS/Comments)
  - [Специфічність](/uk/docs/Web/CSS/Specificity)
  - [Успадкування](/uk/docs/Web/CSS/inheritance)
  - [Рамкова модель](/uk/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Режими компонування](/uk/docs/Web/CSS/Layout_mode)
  - [Моделі візуального форматування](/uk/docs/Web/CSS/Visual_formatting_model)
  - [Перекриття зовнішніх відступів](/uk/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Значення
    - [Початкові значення](/uk/docs/Web/CSS/initial_value)
    - [Обчислені значення](/uk/docs/Web/CSS/computed_value)
    - **Вжиті значення**
    - [Фактичні значення](/uk/docs/Web/CSS/actual_value)
  - [Синтаксис визначення значень](/uk/docs/Web/CSS/Value_definition_syntax)
  - [Властивості-скорочення](/uk/docs/Web/CSS/Shorthand_properties)
  - [Заміщені елементи](/uk/docs/Web/CSS/Replaced_element)
