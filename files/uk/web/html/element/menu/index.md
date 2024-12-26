---
title: <menu> – елемент меню
slug: Web/HTML/Element/menu
page-type: html-element
browser-compat: html.elements.menu
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<menu>`** описаний у специфікації HTML як семантична альтернатива для {{HTMLElement("ul")}}, але браузери обробляють його (а також видають у дереві доступності) так само, як {{HTMLElement("ul")}}. Він представляє невпорядкований список елементів (які представлені елементами {{HTMLElement("li")}}).

{{EmbedInteractiveExample("pages/tabbed/menu.html", "tabbed-shorter")}}

## Атрибути

Цей елемент приймає лише [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

## Примітки щодо використання

І `<menu>`, і {{HTMLElement("ul")}} обидва представляють невпорядкований список елементів. Основна відмінність полягає в тому, що {{HTMLElement("ul")}} перш за все вміщає елементи для відображення, тоді як `<menu>` призначений для інтерактивних елементів.

> [!NOTE]
> У ранніх версіях специфікації HTML елемент `<menu>` мав додатковий варіант використання як контекстне меню. Ця функціональність вважається застарілою й у специфікації відсутня.

## Приклади

### Панель інструментів

У цьому прикладі `<menu>` використовується для створення панелі інструментів для застосунку редагування.

#### HTML

```html
<menu>
  <li><button onclick="copy()">Копіювати</button></li>
  <li><button onclick="cut()">Вирізати</button></li>
  <li><button onclick="paste()">Вставити</button></li>
</menu>
```

Зверніть увагу, що функціонально це не відрізняється від:

```html
<ul>
  <li><button onclick="copy()">Копіювати</button></li>
  <li><button onclick="cut()">Вирізати</button></li>
  <li><button onclick="paste()">Вставити</button></li>
</ul>
```

#### CSS

```css
menu,
ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li {
  flex-grow: 1;
}

button {
  width: 100%;
}
```

#### Результат

{{EmbedLiveSample("panel-instrumentiv", "100%", 100)}}

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
        <p>
          <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
            >Потоковий вміст</a
          >. Якщо серед дочірніх елементів є хоча б один
          елемент {{HTMLElement("li")}}:
          <a
            href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist"
            >Відчутний вміст</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <p>
          Нуль або більше входжень елементів {{HTMLElement("li")}},
          {{HTMLElement("script")}} і
          {{HTMLElement("template")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
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
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>,
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/listbox_role"
            >listbox</a
          ></code
        >, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a> і <a href="/uk/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{DOMxRef("HTMLMenuElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші елементи HTML, що стосуються списків: {{HTMLElement("ol")}}, {{HTMLElement("ul")}} і {{HTMLElement("li")}}.
