---
title: "<header> – Шапка шапки"
slug: Web/HTML/Element/header
page-type: html-element
browser-compat: html.elements.header
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<header>`** (шапка, верхній колонтитул) представляє вступний вміст, як правило це група вступних або навігаційних засобів. Він може містити деякі елементи заголовків, а також логотип, форму пошуку, ім'я автора та інші елементи.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

## Примітки щодо використання

Елемент `<header>` значить абсолютно те саме, що й роль-віха [`banner`](/uk/docs/Web/Accessibility/ARIA/Roles/banner_role), коли `<header>` не вкладено всередину розділового вмісту. Якщо вкладено, то елемент `<header>` не є віхою.

Елемент `<header>` може визначати глобальну шапку сайту, яка в дереві доступності описується як `banner`. Зазвичай шапка включає логотип, назву компанії, пошук і, можливо, глобальну навігацію або гасло. Зазвичай вона знаходиться у верхній частині сторінки.

У протилежному випадку, в дереві доступності цей елемент стає `section`, і зазвичай містить заголовок навколишнього розділу (елемент `h1` - `h6`) і необов'язковий підзаголовок, але це **не** вимагається.

### Історичне використання

Елемент `<header>` у самому початку існував у HTML для заголовків. Це можна спостерігати в [найпершому вебсайті](http://info.cern.ch/). В якийсь момент, заголовки стали [`<h1>` – `<h6>`](/en-US/docs/Web/HTML/Element/Heading_Elements), що дозволило `<header>` зайняти іншу роль.

## Атрибути

Це елемент приймає лише [глобальні атрибути](/en-US/docs/Web/HTML/Global_attributes).

## Приклади

### Шапка сторінки

```html
<header>
  <h1>Назва головної сторінки</h1>
  <img src="mdn-logo-sm.png" alt="Логотип MDN" />
</header>
```

#### Результат

{{EmbedLiveSample('shapka-storinky')}}

### Шапка статті

```html
<article>
  <header>
    <h2>Планета Земля</h2>
    <p>
      Опубліковано в Середу, <time datetime="2017-10-04">4 жовтня 2017</time> Остапом Мирним
    </p>
  </header>
  <p>
    Ми живемо на планеті, що зелена й блакитна, де так багато всього ще не бачило людське око.
  </p>
  <p><a href="https://example.com/the-planet-earth/">Продовжити читання…</a></p>
</article>
```

#### Результат

{{EmbedLiveSample('Shapka-statti')}}

## Занепокоєння щодо доступності

Елемент `<header>` визначає віху [`banner`](/uk/docs/Web/Accessibility/ARIA/Roles/banner_role), коли його контекстом є {{HTMLElement('body')}}. Елемент шапки HTML не вважається віхою банера, коли є нащадком елемента {{HTMLElement('article')}}, {{HTMLElement('aside')}}, {{HTMLElement('main')}}, {{HTMLElement('nav')}} чи {{HTMLElement('section')}}.

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >Потоковий вміст</a
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist"
          >відчутний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >Потоковий вміст</a
        >, але без жодних <code>&#x3C;header></code> і
        {{HTMLElement("footer")}} серед нащадків.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьки</th>
      <td>
        Усі елементи, що приймають,
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >. Зверніть увагу, що елемент <code>&#x3C;header></code> не повинен бути нащадком {{HTMLElement("address")}},
        {{HTMLElement("footer")}} або іншого елемента
        {{HTMLElement("header")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role">Banner</a
        >, чи
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
          >generic</a
        >
        якщо елемент є нащадком
        <code><a href="/en-US/docs/Web/HTML/Element/article">article</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/aside">aside</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/main">main</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/nav">nav</a></code> або
        <code><a href="/en-US/docs/Web/HTML/Element/section">section</a></code>
        або має
        <code
          >role=<a href="/en-US/docs/Web/Accessibility/ARIA/Roles/article_role"
            >article</a
          ></code
        >,
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role"
            >complementary</a
          ></code
        >,
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/main_role"
            >main</a
          ></code
        >,
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role"
            >navigation</a
          ></code
        >
        або
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/region_role"
            >region</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> і
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність зі баузерами

{{Compat}}

## Дивіться також

- Інші елементи, що пов'язані з розділовістю: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}.
