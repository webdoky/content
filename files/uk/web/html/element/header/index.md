---
title: "<header> – Заголовок"
slug: Web/HTML/Element/header
page-type: html-element
browser-compat: html.elements.header
---

{{HTMLSidebar}}

**`<header>`** [HTML](/en-US/docs/Web/HTML) елемент представляє вступний вміст, як правило, групу вступних або навігаційних засобів. Він може містити деякі елементи заголовків, а також логотип, форму пошуку, ім'я автора та інші елементи.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

## Примітки щодо використання

Значення елемента `<header>` ідентичне до глобальної ознаки  [`banner`](/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role) у разі відсутності її у контенті. Тоді елемент `<header>` не є ознакою.

Елемент `<header>` може визначати глобальний заголовок сайту, який описується як `banner` в дереві доступності. Зазвичай він включає логотип, назву компанії, пошук і, можливо, глобальну навігацію або гасло. Зазвичай він знаходиться у верхній частині сторінки.

У протилежному випадку, для цього використовується `section` в дереві доступності, і зазвичай містить заголовок навколишньої секції (елемент `h1` - `h6`) і можливий підзаголовок, але це не обов'язково.

### Історичне використання

Елемент `<header>` спочатку використовувався у самому початку HTML для заголовків. Продемонстровано у [Найперший веб-сайт](http://info.cern.ch/). В якись момент, заголовки стали [`<h1>` через `<h6>`](/en-US/docs/Web/HTML/Element/Heading_Elements), що доволило `<header>` вільно заповнівати різні ролі.

## Атрибути

Це елемент вкличає лише [глобальні атрибути](/en-US/docs/Web/HTML/Global_attributes).

## Приклади

### Заголовок сторінки

```html
<header>
  <h1>Назва головної сторінки</h1>
  <img src="favicon144.png" alt="MDN logo" />
</header>
```

#### Результат

{{EmbedLiveSample('Page Header')}}

### Заголовок статті

```html
<article>
  <header>
    <h2>Планета Земля</h2>
    <p>
      Опубліковано в Середу, <time datetime="2017-10-04">4 жовтня 2017</time> Остап Мирний Миколайович
    </p>
  </header>
  <p>
    Ми живемо на планеті, що зелена й блакитна, з багатьма речами, що ще невідомі.
  </p>
  <p><a href="https://example.com/the-planet-earth/">Продовжити читання…</a></p>
</article>
```

#### Результат

{{EmbedLiveSample('Article Header')}}

## Зауваження до доступності

Елемент `<header>` визначає ознаку [`banner`](/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role), коли її контекст {{HTMLElement('body')}}. HTML заголовок не завжди вважається ознакою баннера коли він є нащадком елементів {{HTMLElement('article')}}, {{HTMLElement('aside')}}, {{HTMLElement('main')}}, {{HTMLElement('nav')}}, чи {{HTMLElement('section')}}.

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
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Потоковий вміст</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#palpable_content"
          >Дозволений вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Потоковий вміст</a
        >, але буз <code>&#x3C;header></code> чи нащадку
        {{HTMLElement("footer")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегу</th>
      <td>Жоден, обидва теги (початковий і закриваючий) обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьки</th>
      <td>
        Будь-який елемент, що приймає
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >вміст потоку</a
        >. Зверніть увагу, що елемент <code>&#x3C;header></code> не повинет бути нащадком {{HTMLElement("address")}},
        {{HTMLElement("footer")}} або іншого елемента
        {{HTMLElement("header")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role">баннер</a
        >, чи
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
          >загальний</a
        >
        якщо нащадок
        <code><a href="/en-US/docs/Web/HTML/Element/article">article</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/aside">aside</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/main">main</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/nav">nav</a></code> або
        <code><a href="/en-US/docs/Web/HTML/Element/section">section</a></code>
        або елемент де
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
      <th scope="row">Дозаолені ролі ARIA</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> або
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM'у</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Спецефікації

{{Specifications}}

## Сумісність з баузерами

{{Compat}}

## Див. також

- Інші секційні елементи: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}.
