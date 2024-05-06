---
title: "<li>: Елемент списку"
slug: Web/HTML/Element/li
page-type: html-element
browser-compat: html.elements.li
---

{{HTMLSidebar}}

Елемент **`<li>`** [HTML](/en-US/docs/Web/HTML) використовується для створення елементів списку. Він повинен міститися у батьківських елементах: впорядкований список ({{HTMLElement("ol")}}), невпорядкований список ({{HTMLElement("ul")}}) або меню ({{HTMLElement("menu")}}). У меню та невпорядкованих списках елементи списків зазвичай показується за допомогою маркерів. У впорядкованих списках вони зазвичай показуються ліворуч за допомогою лічильника, що зростає, такими як число або літера.

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

## Атрибути

Цей елемент приймає лише [глобальні атрибути](/en-US/docs/Web/HTML/Global_attributes).

- `value`
  - : Цей цілочисельний атрибут вказує поточне порядкове значення елемента списку, що визначене елементом {{HTMLElement("ol")}}. Даний атрибут може мати лише числове значення навіть якщо список показуватися римськими цифрами або літерами. Елементи списку, що йдуть після, використовують це значення для нумерування. Атрибут **value** не впливає на невпорядковані списки ({{HTMLElement("ul")}}) або меню ({{HTMLElement("menu")}}).
- `type` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : Цей символьний атрибут вказує на тип нумерації:

    - `a`: маленькі літери
    - `A`: великі літери
    - `i`: маленькі римські числа
    - `I`: великі римські числа
    - `1`: числа

    Цей тип перевизначає тип, який використовується його батьківським елементом <ol>, якщо такий є.

    > **Note:** Цей атрибут застарілий; замість нього використовуйте CSS властивість {{cssxref("list-style-type")}}.

## Приклади

Для більш детальних прикладів, дивіться сторінки елементів {{htmlelement("ol")}} та {{htmlelement("ul")}}.

### Впорядкований список

```html
<ol>
  <li>перший елемент</li>
  <li>другий елемент</li>
  <li>третій елемент</li>
</ol>
```

#### Результат

{{EmbedLiveSample("Uporyadkovanii_spysok")}}

### Упорядкований список із користувацьким значенням

```html
<ol type="I">
  <li value="3">третій елемент</li>
  <li>четвертий елемент</li>
  <li>пʼятий елемент</li>
</ol>
```

#### Результат

{{EmbedLiveSample("Uporyadkovanii_spysok_z_korystuvats'kym_znachennyam")}}

### Невпорядкований список

```html
<ul>
  <li>перший елемент</li>
  <li>другий елемент</li>
  <li>третій елемент</li>
</ul>
```

#### Результат

{{EmbedLiveSample("Nevporyadkovanii_spysok")}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>Жодних.</td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Потоковий вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>
        Кінцевий тег може бути пропущений, якщо наступний елемент це інший
        елемент {{HTMLElement("li")}} або якщо більше немає
        вмісту у його батьківському елементі.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Елементи {{HTMLElement("ul")}}, {{HTMLElement("ol")}} або
        {{HTMLElement("menu")}}. Хоча це не відповідає вимогам,
        застарілий {{HTMLElement("dir")}} також може бути батьківським елементом.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role"
            >listitem</a
          ></code
        >
        коли нащадок
        <code><a href="/en-US/docs/Web/HTML/Element/ol">ol</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/ul">ul</a></code> або
        <code><a href="/en-US/docs/Web/HTML/Element/menu">menu</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLLIElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- Інші HTML елементи, що повʼязані зі списками: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}} та застарілий {{HTMLElement("dir")}};
- Властивості CSS, що можуть бути особливо корисними для надання стилів елементу `<li>`:

  - властивість {{cssxref("list-style")}} – для вибору шляху показу нумерації,
  - [CSS лічильники](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) – для управління складними вкладеними списками,
  - властивість {{cssxref("margin")}} – для керування відступом елемента списку.
