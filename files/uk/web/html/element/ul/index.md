---
title: "<ul> — елемент невпорядкованого списку"
slug: Web/HTML/Element/ul
page-type: html-element
browser-compat: html.elements.ul
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) `<ul>` позначає невпорядкований перелік елементів, який зазвичай зображується як список з маркерами.

{{EmbedInteractiveExample("pages/tabbed/ul.html", "tabbed-standard")}}

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `compact` {{Deprecated_inline}}

  - : Цей булів атрибут вказує на те, що перелік повинний бути виведений у компактному стилі. Інтерпретація цього атрибута залежить від {{glossary("user agent","користувацького агента")}}, і працює не у всіх браузерах.

    > **Застереження:** Не слід вживати цей атрибут, бо він є нерекомендованим – замість нього слід використовувати засоби [CSS](/uk/docs/Web/CSS). Для досягнення ефекту, подібного до атрибута `compact`, можна використати властивість CSS {{cssxref("line-height")}} зі значенням `80%`.

- `type` {{Deprecated_inline}}

  - : Цей атрибут задає маркери, які будуть використані у переліку. Значення, визначені в HTML3.2, і перехідній версії HTML 4.0/4.01:

    - `circle`
    - `disc`
    - `square`

    Четверте значення було визначено інтерфейсом WebTV, але не всі браузери його підтримують: `triangle`.

    Якщо атрибут `type` не вказано, і до елемента не застосована [властивість CSS](/uk/docs/Web/CSS) {{cssxref("list-style-type")}}, то браузер обере тип маркера залежно від глибини вкладеності переліку.

    > **Застереження:** Не слід використовувати цей атрибут, бо він є нерекомендованим, – замість нього застосовуйте [властивість CSS](/uk/docs/Web/CSS) {{cssxref("list-style-type")}}.

## Примітки щодо застосування

- Елемент `<ul>` призначений для групування колекції елементів без числового впорядкування, тобто коли їхній порядок в переліку не має ніякого значення. Зазвичай невпорядковані переліки виводяться з маркерами, котрі можуть приймати декілька форм, як то крапки, кола чи квадрата. Стиль маркерів не описується в HTML сторінки, але може бути заданий у CSS, за допомогою властивості {{cssxref("list-style-type")}}.
- Елементи `<ul>` і {{HTMLElement("ol")}} можна вкладати одне в одного як завгодно глибоко. На кожному рівні можна використати як впорядкований, так і невпорядкований перелік.
- І елементи `<ul>`, і елементи {{HTMLElement("ol")}} позначають перелік з елементів. Різниця полягає в тому, що в {{HTMLElement("ol")}} порядок елементів має значення. Щоб визначити, який елемент вжити, спробуйте змінити порядок елементів: якщо зміст змінився — слід використати {{HTMLElement("ol")}}, а інакше – можна обмежитись `<ul>`.

## Приклади

### Простий приклад

```html
<ul>
  <li>перший елемент</li>
  <li>другий елемент</li>
  <li>третій елемент</li>
</ul>
```

#### Результат

{{EmbedLiveSample("prostyi-pryklad", 400, 120)}}

### Вкладені переліки

```html
<ul>
  <li>перший елемент</li>
  <li>
    другий елемент
    <!-- Гляньте, тут немає кінцевого тегу </li>! -->
    <ul>
      <li>другий елемент, перший піделемент</li>
      <li>
        другий елемент, другий піделемент
        <!-- Так само з другим вкладеним невпорядкованим списком! -->
        <ul>
          <li>другий елемент, другий піделемент, перший підпіделемент</li>
          <li>другий елемент, другий піделемент, другий підпіделемент</li>
          <li>другий елемент, другий піделемент, третій підпіделемент</li>
        </ul>
      </li>
      <!-- Кінцевий тег </li> для тега <li>,
                  що містить третій невпорядкований список -->
      <li>другий елемент, третій піделемент</li>
    </ul>
    <!-- А тут — кінцевий тег </li> -->
  </li>
  <li>третій елемент</li>
</ul>
```

#### Результат

{{EmbedLiveSample("vkladeni-pereliky", 400, 340)}}

### Впорядкований перелік, що містить невпорядкований перелік

```html
<ul>
  <li>перший елемент</li>
  <li>
    другий елемент
    <!-- Гляньте, тут немає кінцевого тегу </li>! -->
    <ol>
      <li>другий елемент, перший піделемент</li>
      <li>другий елемент, другий піделемент</li>
      <li>другий елемент, третій піделемент</li>
    </ol>
    <!-- А ось де кінцевий тег </li> -->
  </li>
  <li>третій елемент</li>
</ul>
```

#### Результат

{{EmbedLiveSample("vporiadkovanyi-perelik-shcho-mistyt-nevporiadkovanyi-perelik", 400, 190)}}

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
        >, а якщо серед дочірніх елементів <code>&#x3C;ul></code> є хоча б один елемент {{HTMLElement("li")}} &mdash; то й
        <a href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist"
          >відчутний вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        Нуль або більше елементів {{HTMLElement("li")}}, {{HTMLElement("script")}} чи {{HTMLElement("template")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Допустимі батьківські елементи</th>
      <td>
       Всі елементи, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code><a href="/uk/docs/Web/Accessibility/ARIA/Roles/List_role">list</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- Інші HTML-елементи, що мають стосунок до переліків: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- Властивості CSS, які можуть бути корисними для оформлення елемента `<ul>`:

  - властивість {{CSSxRef("list-style")}} – для вибору типу маркера.
  - [Лічильники CSS](/uk/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) – для обробки складних вкладених переліків.
  - властивість {{CSSxRef("line-height")}} – для імітації нерекомендованого атрибута [`compact`](#compact).
  - властивість {{CSSxRef("margin")}} – для керування відступами в списку.
