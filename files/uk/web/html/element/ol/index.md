---
title: <ol> – елемент упорядкованого списку
slug: Web/HTML/Element/ol
page-type: html-element
browser-compat: html.elements.ol
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<ol>`** ("ordered list" – упорядкований список) представляє упорядкований список елементів, що зазвичай візуалізується як пронумерований список.

{{EmbedInteractiveExample("pages/tabbed/ol.html", "tabbed-shorter")}}

## Атрибути

Цей елемент також приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `reversed`
  - : Цей булів атрибут задає те, що елементи списку мають зворотний порядок. Елементи будуть нумеруватися у зворотному порядку.
- `start`
  - : Ціле число, від якого почнеться нумерація елементів списку. Це завжди арабське число (1, 2, 3 тощо), навіть тоді, коли тип нумерації — літери або римські числа. Наприклад, щоб почати нумерацію елементів з літери «d» або римського числа «iv», слід використати `start="4"`.
- `type`

  - : Задає тип нумерації:

    - `a` для маленьких літер
    - `A` для великих літер
    - `i` для римських чисел у нижньому регістрі
    - `I` для римських чисел у верхньому регістрі
    - `1` для звичайних чисел (усталене)

    Заданий тип використовується для всього списку, якщо на вкладеному елементі {{HTMLElement("li")}} не використовується інший атрибут [`type`](/uk/docs/Web/HTML/Element/li#type).

    > **Примітка:** Якщо тип номера списку має значення (наприклад, у юридичних або технічних документах, де елементи вказуються за їх номером чи літерою), слід використовувати властивість CSS {{CSSxRef("list-style-type")}}.

## Примітки щодо використання

Здебільшого елементи впорядкованого списку виводяться з [маркером](/uk/docs/Web/CSS/::marker) перед ними, наприклад, з номером чи літерою.

Елементи `<ol>` та {{HTMLElement("ul")}} (а також синонім {{HTMLElement("menu")}}) можуть вкладатися один в одного з такою глибиною, як потрібно, чергуючи `<ol>` та `<ul>` (як і `<menu>`) за потребою.

І елемент `<ol>`, і елемент {{HTMLElement("ul")}} представляють список елементів. Відмінність полягає в тому, що для елемента `<ol>` порядок елементів має значення. Наприклад:

- Кроки рецепта
- Покрокові орієнтування
- Список інгредієнтів за зменшенням пропорції на етикетках з інформацією про харчову цінність

Щоб визначити, якого роду список використати, слід спробувати змінити порядок елементів списку; якщо значення змінилося, то слід скористатися елементом `<ol>` — в іншому випадку можна використати {{HTMLElement("ul")}}, або {{HTMLElement("menu")}}, якщо ваш список – меню.

## Приклади

### Простий приклад

```html
<ol>
  <li>Мі</li>
  <li>Ме</li>
  <li>Ма</li>
  <li>Мо</li>
  <li>Му</li>
</ol>
```

#### Результат

{{EmbedLiveSample("prostyi-pryklad", 400, 100)}}

### Використання типу з римськими числами

```html
<ol type="i">
  <li>Вступ</li>
  <li>Список скарг</li>
  <li>Висновок</li>
</ol>
```

#### Результат

{{EmbedLiveSample("vykorystannia-typu-z-rymskymy-chyslamy", 400, 100)}}

### Використання атрибута start

```html
<p>Фінішні місця учасників, які не здобули призових місць:</p>

<ol start="4">
  <li>Панчук (Острог)</li>
  <li>Серко (Дубовицький район)</li>
  <li>Фокін (м. Вараш)</li>
</ol>
```

#### Результат

{{EmbedLiveSample("vykorystannia-atrybuta-start", 400, 100)}}

### Вкладення списків

```html
<ol>
  <li>перший елемент</li>
  <li>
    другий елемент
    <!-- кінцевий тег </li> – не тут! -->
    <ol>
      <li>другий елемент, перший піделемент</li>
      <li>другий елемент, другий піделемент</li>
      <li>другий елемент, третій піделемент</li>
    </ol>
  </li>
  <!-- Ось де кінцевий тег </li> -->
  <li>третій елемент</li>
</ol>
```

#### Результат

{{EmbedLiveSample("vkladennia-spyskiv", 400, 150)}}

### Невпорядкований список усередині впорядкованого

```html
<ol>
  <li>перший елемент</li>
  <li>
    second item
    <!-- кінцевий тег </li> – не тут! -->
    <ul>
      <li>другий елемент, перший піделемент</li>
      <li>другий елемент, другий піделемент</li>
      <li>другий елемент, третій піделемент</li>
    </ul>
  </li>
  <!-- Ось де кінцевий тег </li> -->
  <li>третій елемент</li>
</ol>
```

#### Результат

{{EmbedLiveSample("nevporiadkovanyi-spysok-useredyni-vporiadkovanoho", 400, 150)}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories">Категорії вмісту</a>
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">Потоковий вміст</a>, а також, якщо серед дочірніх елементів елемента <code>&#x3C;ol></code> є хоча б один елемент {{HTMLElement("li")}}, то <a href="/uk/docs/Web/HTML/Content_categories#vidchutnyi-vmist">відчутний вміст</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        Нуль або більше елементів {{HTMLElement("li")}},
        {{HTMLElement("script")}} і
        {{HTMLElement("template")}}.
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
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">потоковий вміст</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code>
          <a href="/uk/docs/Web/Accessibility/ARIA/Roles/list_role">list</a>
        </code>
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
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{DOMxRef("HTMLOListElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші елементи HTML, пов'язані зі списками: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- Властивості CSS, що можуть бути особливо корисними для стилізації елемента `<ol>`:

  - властивість {{CSSxRef("list-style")}}, щоб вибрати спосіб відображення порядкового номера
  - [Лічильники CSS], щоб впорядкувати складні вкладені списки
  - властивість {{CSSxRef("line-height")}}, щоб імітувати нерекомендований атрибут `compact`
  - властивість {{CSSxRef("margin")}}, щоб керувати відступом списку
