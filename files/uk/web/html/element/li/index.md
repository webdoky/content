---
title: "<li>: Елемент списку"
slug: Web/HTML/Element/li
page-type: html-element
browser-compat: html.elements.li
---

{{HTMLSidebar}}

Елемент **`<li>`** [HTML](/uk/docs/Web/HTML) використовується для створення елементів списку. Він повинен міститися в одному з таких батьківських елементів: впорядкований список ({{HTMLElement("ol")}}), невпорядкований список ({{HTMLElement("ul")}}) або меню ({{HTMLElement("menu")}}). У меню та невпорядкованих списках елементи списків зазвичай позначаються маркерами. У впорядкованих списках маркери здебільшого виводяться ліворуч у вигляді лічильника, що зростає – чисел або літер.

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

## Атрибути

Цей елемент приймає лише [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `value`
  - : Цей цілочисельний атрибут вказує поточне порядкове значення елемента списку, визначеного елементом {{HTMLElement("ol")}}. Даний атрибут може мати лише числове значення, навіть якщо список оформлений римськими цифрами або літерами. Елементи списку, що йдуть далі, використовують це значення для нумерування. Атрибут **value** не впливає на невпорядковані списки ({{HTMLElement("ul")}}) і меню ({{HTMLElement("menu")}}).
- `type` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : Цей односимвольний атрибут вказує на тип нумерації:

    - `a`: маленькі літери
    - `A`: великі літери
    - `i`: маленькі римські числа
    - `I`: великі римські числа
    - `1`: числа

    Заданий таким чином тип перевизначає той, який використовується батьківським елементом <ol>, якщо такий є.

    > **Примітка:** Цей атрибут нерекомендований; замість нього використовуйте властивість CSS {{cssxref("list-style-type")}}.

## Приклади

Докладніші приклади дивіться на сторінках елементів {{htmlelement("ol")}} та {{htmlelement("ul")}}.

### Впорядкований список

```html
<ol>
  <li>перший елемент</li>
  <li>другий елемент</li>
  <li>третій елемент</li>
</ol>
```

#### Результат

{{EmbedLiveSample("uporiadkovanyi-spysok")}}

### Упорядкований список із заданим значенням

```html
<ol type="I">
  <li value="3">третій елемент</li>
  <li>четвертий елемент</li>
  <li>пʼятий елемент</li>
</ol>
```

#### Результат

{{EmbedLiveSample("uporiadkovanyi-spysok-iz-zadanym-znachenniam")}}

### Невпорядкований список

```html
<ul>
  <li>перший елемент</li>
  <li>другий елемент</li>
  <li>третій елемент</li>
</ul>
```

#### Результат

{{EmbedLiveSample("nevporiadkovanyi-spysok")}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories"
          >Категорії вмісту</a
        >
      </th>
      <td>Жодних.</td>
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
      <td>
        Кінцевий тег може бути пропущений, якщо наступний елемент – ще один
        елемент {{HTMLElement("li")}}, або якщо в батьківському
        елементі далі немає вмісту.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Елементи {{HTMLElement("ul")}}, {{HTMLElement("ol")}} і
        {{HTMLElement("menu")}}. Хоча це не відповідає вимогам,
        застарілий {{HTMLElement("dir")}} також може бути батьківським елементом.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <code
          ><a href="/uk/docs/Web/Accessibility/ARIA/Roles/listitem_role"
            >listitem</a
          ></code
        >
        коли нащадок
        <code><a href="/uk/docs/Web/HTML/Element/ol">ol</a></code
        >, <code><a href="/uk/docs/Web/HTML/Element/ul">ul</a></code> або
        <code><a href="/uk/docs/Web/HTML/Element/menu">menu</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a>
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

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Інші HTML елементи, що повʼязані зі списками: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}} та застарілий {{HTMLElement("dir")}};
- Властивості CSS, що можуть бути особливо корисними для надання стилів елементу `<li>`:

  - властивість {{cssxref("list-style")}} – для вибору способу показу нумерації,
  - [Лічильники CSS](/uk/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) – для управління складними вкладеними списками,
  - властивість {{cssxref("margin")}} – для керування відступом елемента списку.
