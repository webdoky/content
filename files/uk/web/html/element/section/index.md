---
title: "<section> – узагальнений елемент розділу"
slug: Web/HTML/Element/section
page-type: html-element
browser-compat: html.elements.section
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<section>`** (розділ) представляє узагальнений самостійний розділ документа, для представлення якого немає конкретнішого семантичного елемента. Розділи завжди повинні мати заголовок, і винятки з цього правила – дуже рідкісні.

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## Атрибути

Цей елемент приймає лише [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

## Примітки щодо використання

Як згадувалось вище, `<section>` є узагальненим розділовим елементом, і його слід використовувати лише тоді, коли немає більш конкретного елемента для представлення вмісту. Наприклад, глобальне меню навігації слід загортати в елемент {{htmlelement("nav")}}, але список результатів пошуку або виведення карти та її елементи управління не мають конкретних відповідних елементів і можуть бути поміщені всередину `<section>`.

Також слід розглянути такі випадки:

- Якщо вміст елемента є самостійною, неподільною одиницею вмісту, яку є сенс синдикувати як самостійний твір (наприклад, допис у блозі чи коментар у блозі, або стаття у газеті), краще використовувати елемент {{HTMLElement("article")}}.
- Якщо цей вміст представляє додаткову інформацію, яка корисна поруч з основним вмістом, але не є його безпосередньою частиною (наприклад, пов'язані посилання або біографія автора), використовуйте {{HTMLElement("aside")}}.
- Якщо вміст представляє головну область вмісту документа, використовуйте {{HTMLElement("main")}}.
- Якщо елемент використовується суто як обгортка для стилізації, використовуйте краще {{HTMLElement("div")}}.

Іще одне повторення: кожен `<section>` повинен бути підписаний, зазвичай шляхом додавання заголовка (елемент {{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}}) як дочірнього щодо `<section>` елемента, де це можливо. Нижче дивіться приклади того, де можна зустріти `<section>` без заголовка.

## Приклади

### Приклад простого застосування

#### До

```html
<div>
  <h2>Заголовок</h2>
  <p>Купа крутого вмісту</p>
</div>
```

##### Результат

{{EmbedLiveSample('do')}}

#### Після

```html
<section>
  <h2>Заголовок</h2>
  <p>Купа крутого вмісту</p>
</section>
```

##### Результат

{{EmbedLiveSample('pislia')}}

### Використання розділу без заголовка

Умови, за яких можна зустріти `<section>` без заголовка, зазвичай трапляються в розділах вебзастосунків або інтерфейсів користувача, а не в структурах традиційних документів. У документі не дуже логічно мати окремий розділ вмісту без заголовка, що описує його вміст. Такі заголовки корисні для всіх читачів, але особливо корисні для користувачів допоміжних технологій, таких як читачі з екрана, а також вони добрі для SEO.

Проте розгляньмо другорядний механізм навігації. Якщо глобальна навігація вже загорнута в елемент `<nav>`, то можна загорнути меню переходу назад і далі в `<section>`:

```html
<section>
  <a href="#">Попередня стаття</a>
  <a href="#">Наступна стаття</a>
</section>
```

Або що на рахунок панелі кнопок для керування застосунком? Тоді не обов'язково потрібен заголовок, але це все одно окремий розділ документа:

```html
<section>
  <button class="reply">Відповісти</button>
  <button class="reply-all">Відповісти всім</button>
  <button class="fwd">Переслати</button>
  <button class="del">Видалити</button>
</section>
```

#### Результат

{{EmbedLiveSample('vykorystannia-rozdilu-bez-zaholovka')}}

Залежно від вмісту, додавання заголовка може також бути корисним для SEO, тому це варто розглянути.

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
        >, <a href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist">відчутний вміст</a>.
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
      <td>Немає, обов'язкові як початковий, так і кінцевий теги.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Всі елементи, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >. Зверніть увагу на те, що елемент <code>&#x3C;section></code> повинен не бути нащадком елемента {{HTMLElement("address")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/region_role"
            >region</a
          ></code
        >, якщо елемент має
        <a
          href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/"
          >доступну назву</a
        >, інакше –
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/alert_role"><code>alert</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/banner_role"><code>banner</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/complementary_role"><code>complementary</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/contentinfo_role"><code>contentinfo</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/dialog_role"><code>dialog</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/log_role"><code>log</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/marquee_role"><code>marquee</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/navigation_role"><code>navigation</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/tabpanel_role"><code>tabpanel</code></a>
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

- Інші елементи, пов'язані з розділами: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Використання розділів і планів HTML](/uk/docs/Web/HTML/Element/Heading_Elements)
- [ARIA – роль Region](/uk/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Чому слід віддавати перевагу HTML5 article замість section](https://www.smashingmagazine.com/2020/01/html5-article-section/) від Брюса Лоусона
