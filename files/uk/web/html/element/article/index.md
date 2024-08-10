---
title: <article> – Елемент вмісту статті
slug: Web/HTML/Element/article
page-type: html-element
browser-compat: html.elements.article
---

{{HTMLSidebar}}

Елемент **`<article>`** [HTML](/uk/docs/Web/HTML) представляє самодостатню сутність у документі, в застосунку, на сторінці або на сайті. Призначений для незалежного розповсюдження або перевикористання (наприклад, на інших вебсайтах). Приклади використання: записи на форумі, статті у журналах, газетах або блогах, картки товарів в інтернет-магазинах, коментарі користувачів, інтерактивні віджети або гаджети та інші незалежні одиниці контенту.

{{EmbedInteractiveExample("pages/tabbed/article.html", "tabbed-standard")}}

Документ може містити декілька елементів статей. Наприклад, у блозі, де читачу, що гортає сторінку, по черзі показується текст різних статей, кожен запис містився б в елементі `<article>`, можливо, з одним або декількома елементами `<section>` всередині.

## Атрибути

Цей елемент приймає лише [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

## Примітки щодо використання

- Кожен елемент `<article>` повинен бути ідентифікований. Зазвичай шляхом додавання елементів заголовка ([`<h1>` - `<h6>`](/uk/docs/Web/HTML/Element/Heading_Elements)) як нащадків елемента `<article>`.
- Коли елемент `<article>` вкладений в інший елемент `<article>`, то внутрішній з них репрезентує статтю, що повʼязана з зовнішнім елементом. Наприклад, коментарі до запису в блозі можуть бути елементами `<article>`, вкладеними в елемент `<article>`, що відповідає за сам запис.
- Інформація про автора елемента `<article>` може бути розміщена в елементі {{HTMLElement("address")}}, але він не буде належати до елемента `<article>`.
- Час та дата публікації елемента `<article>` можуть бути записані в атрибуті [`datetime`](/uk/docs/Web/HTML/Element/time#datetime) елемента {{HTMLElement("time")}}.

## Приклади

```html
<article class="film_review">
  <h2>Парк Юрського періоду</h2>
  <section class="main_review">
    <h3>Відгук</h3>
    <p>Динозаври були чудовими!</p>
  </section>
  <section class="user_reviews">
    <h3>Відгуки користувачів</h3>
    <article class="user_review">
      <h4>Занадто страшно</h4>
      <p>Вони застрашні для мене</p>
      <footer>
        <p>
          Опубліковано
          <time datetime="2015-05-16 19:00">16 травня</time>
          Лізою.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <h4>Люблю динозаврів!</h4>
      <p>Погоджуюсь, динозаври найкращі.</p>
      <footer>
        <p>
          Опубліковано
          <time datetime="2015-05-17 19:00">17 травня</time>
          Тарасом.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Опубліковано
      <time datetime="2015-05-15 19:00">15 травня</time>
      Працівниками.
    </p>
  </footer>
</article>
```

### Результат

{{EmbedLiveSample('pryklady','','570')}}

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
        <a
          href="/uk/docs/Web/HTML/Content_categories#rozdilovyi-vmist"
          >Розділовий вміст</a
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist"
          >відчутний вміст</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >Потоковий вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Усі елементи, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >. Зверніть увагу, що елемент <code>&#x3C;article></code> не повинен бути
           нащадком елемента {{HTMLElement("address")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/article_role"
            >article</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>
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

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші елементи, що пов'язані з розділовістю: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Використання розділів і планів HTML](/uk/docs/Web/HTML/Element/Heading_Elements)
