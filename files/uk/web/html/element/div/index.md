---
title: "<div>: елемент поділу вмісту"
slug: Web/HTML/Element/div
page-type: html-element
browser-compat: html.elements.div
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<div>`** (розд.) – узагальнений контейнер для потокового вмісту. Він не впливає на свої зміст та верстання, поки не отримує певного оформлення засобами {{glossary("CSS")}} (наприклад, певних стилів для себе та певної моделі верстання типу [флексбоксу](/uk/docs/Web/CSS/CSS_flexible_box_layout), застосованої до свого предка).

{{EmbedInteractiveExample("pages/tabbed/div.html","tabbed-standard")}}

Як "щирий" контейнер, елемент `<div>` сам по собі нічого не означає. Натомість він використовується для групування вмісту, щоб його можна було легко стилізувати за допомогою атрибутів [`class`](/uk/docs/Web/HTML/Global_attributes#class) та [`id`](/uk/docs/Web/HTML/Global_attributes#id), вказуючи частину документа як написану іншою мовою (за допомогою атрибута [`lang`](/uk/docs/Web/HTML/Global_attributes#lang)), і так далі.

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

> **Примітка:** Атрибут `align` вийшов з ужитку; не слід його використовувати. Натомість для шикування та розташування `<div>` елементів на сторінці варто використовувати властивості CSS чи техніки штибу [сітки CSS](/uk/docs/Web/CSS/CSS_Grid_Layout) або [Флексбоксу CSS](/uk/docs/Learn/CSS/CSS_layout/Flexbox).

## Примітки щодо використання

- Елемент `<div>` слід використовувати лише тоді, коли жодний інший семантичний елемент (наприклад, {{HTMLElement("article")}} чи {{HTMLElement("nav")}}) не є доречним.

## Занепокоєння щодо доступності

Елемент `<div>` має [неявну роль `generic` (англ.)](https://www.w3.org/TR/wai-aria-1.2/#generic), а не позбавлений ролі. Це може повпливати на певні оголошення комбінацій ARIA, що очікують на безпосереднього нащадка із певною роллю, аби коректно працювати.

## Приклади

### Простий приклад

```html
<div>
  <p>
    Тут – вміст будь-якого роду. Наприклад, &lt;p&gt;, &lt;table&gt;. Вирішуйте
    самі!
  </p>
</div>
```

#### Результат

{{EmbedLiveSample("prostyi-pryklad", 650, 60)}}

### Стилізований приклад

Цей приклад створює рамки з тінню, за допомогою CSS застосовуючи до `<div>` стиль. Зверніть увагу на використання на `<div>` атрибута [`class`](/uk/docs/Web/HTML/Global_attributes#class) для застосування до елемента стилю `"shadowbox"`.

#### HTML

```html
<div class="shadowbox">
  <p>Тут – вельми цікава примітка, показана в принадній рамці з тінню.</p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### Результат

{{EmbedLiveSample("stylizovanyi-pryklad", 650, 120)}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >Потоковий вміст</a
        >, <a href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist">відчутний вміст</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >Потоковий вміст</a
        >.<br />Або (в HTML за {{glossary("WHATWG")}}): якщо предок – елемент
        {{HTMLElement("dl")}}: один чи більше елементів
        {{HTMLElement("dt")}}, після чого – один чи більше елементів
        {{HTMLElement("dd")}}, необов'язково помежованих елементами
        {{HTMLElement("script")}} і
        {{HTMLElement("template")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Упускання тегів</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені предки</th>
      <td>
        Будь-який елемент, що приймає
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >.<br />Або (у HTML за {{glossary("WHATWG")}}):
        елемент {{HTMLElement("dl")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Немає відповідної ролі</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Усі</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLDivElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Семантичні розділові елементи: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- {{HTMLElement("span")}} – елемент для оформлення оповідального вмісту
