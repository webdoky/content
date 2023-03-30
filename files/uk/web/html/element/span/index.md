---
title: "<span>: Елемент відрізка вмісту"
slug: Web/HTML/Element/span
page-type: html-element
browser-compat: html.elements.span
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<span>`** (розмах, відрізок, проліт, інтервал) – це узагальнений рядковий контейнер для оповідального вмісту, котрий по суті нічого не представляє. Він може застосовуватися для групування елементів для потреб оформлення (за допомогою атрибутів [`class`](/uk/docs/Web/HTML/Global_attributes#class) і [`id`](/uk/docs/Web/HTML/Global_attributes#id)), або через те, що вони поділяють значення атрибутів, як то [`lang`](/uk/docs/Web/HTML/Global_attributes#lang). Повинен застосовуватися лише тоді, коли жодний семантичний елемент не є доречним. `<span>` вельми подібний до елемента {{HTMLElement("div")}}, крім того, що {{HTMLElement("div")}} є [елементом блокового рівня](/uk/docs/Web/HTML/Block-level_elements), а `<span>` – [рядковий елемент](/uk/docs/Web/HTML/Inline_elements).

{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-shorter")}}

## Атрибути

Цей елемент приймає лише [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

## Приклад

### Приклад 1

#### HTML

```html
<p><span>Якийсь текст</span></p>
```

#### Результат

{{EmbedLiveSample('pryklad-1')}}

### Приклад 2

#### HTML

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">Дивіться моє портфоліо</a>
  </span>
</li>
```

#### CSS

```css
li span {
  background: gold;
}
```

#### Результат

{{EmbedLiveSample('pryklad-2')}}

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
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >Оповідальний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Упускання тега</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Усі елементи, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist"
          >оповідальний вміст</a
        > або
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >.
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
      <td>
        {{domxref("HTMLSpanElement")}}
      </td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Елемент HTML {{HTMLElement("div")}}
