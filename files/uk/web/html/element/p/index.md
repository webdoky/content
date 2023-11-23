---
title: "<p>: Елемент абзацу"
slug: Web/HTML/Element/p
page-type: html-element
browser-compat: html.elements.p
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<p>`** ("paragraph" – абзац) представляє абзац. Абзаци зазвичай представлені у візуальних медіа як блоки тексту, відділені від сусідніх блоків пустими рядками чи відступом першого рядка, однак абзаци HTML можуть бути будь-яким структурним групуванням пов'язаного вмісту, як то зображень чи полів форми.

Абзаци є [елементами блокового рівня](/uk/docs/Glossary/Block-level_content), отже – будуть автоматично закриті, якщо при розборі до тега `</p>` зустрівся інший елемент блокового рівня. Дивіться "Пропуск тега" нижче.

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

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
        >, дотиковий вміст.
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
      <th scope="row">Пропуск тега</th>
      <td>
        Початковий тег – обов'язковий. Кінцевий тег може бути пропущений, якщо після елемента {{HTMLElement("p")}} зразу стоїть елемент
        {{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("details")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("figcaption")}}, {{HTMLElement("figure")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}}, {{HTMLElement("main")}}, {{HTMLElement("menu")}}, {{HTMLElement("nav")}}, {{HTMLElement("ol")}}, {{HTMLElement("pre")}}, {{HTMLElement("search")}}, {{HTMLElement("section")}}, {{HTMLElement("table")}}, {{HTMLElement("ul")}} чи інший {{HTMLElement("p")}}, або якщо в батьківському елементі немає більше вмісту і батьківський елемент не є елементом {{HTMLElement("a")}}, {{HTMLElement("audio")}}, {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}}, {{HTMLElement("noscript")}} або {{HTMLElement("video")}}, або ж автономним своєрідним елементом.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Усі елементи, що приймають
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/structural_roles"
          >paragraph</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Усі</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLParagraphElement")}}</td>
    </tr>
  </tbody>
</table>

## Атрибути

Цей елемент включає лише [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

> **Примітка:** Атрибут `align` на тегах `<p>` є застарілим і не повинен використовуватися.

## Приклади

### HTML

```html
<p>
  Це перший абзац тексту. Це перший абзац тексту. Це перший абзац тексту. Це
  перший абзац тексту. Це перший абзац тексту. Це перший абзац тексту.
</p>
<p>
  Це другий абзац. Це другий абзац. Це другий абзац. Це другий абзац. Це другий
  абзац. Це другий абзац.
</p>
```

### Результат

{{EmbedLiveSample('pryklady')}}

## Оформлення абзаців

Усталено браузери відділяють абзаци одним порожнім рядком. Інші способи відділення, як то відступ першого рядка, можуть бути реалізовані за допомогою {{glossary("CSS")}}:

### HTML

```html
<p>
  Відділення абзаців порожніми рядками – найлегше для перегляду читачами, але
  також їх можна відділяти відступом їхніх перших рядків. Це нерідко
  використовується, щоб займати менше простору, як то для економії паперу при
  друці.
</p>

<p>
  Письмо, котре підлягає редагуванню, як то шкільні документи та ранні чернетки,
  використовують для відділення і порожні рядки, і відступи. В закінчених працях
  поєднання обох підходів вважається надлишковим і ознакою невмілості.
</p>

<p>
  У дуже старих записах абзаци відділяли особливим символом: ¶,
  <i>знаком абзацу</i>. Нині він вважається клаустрофобним і непрочитним.
</p>

<p>
  Наскільки непрочитним? Дивіться самі:
  <button data-toggle-text="О ні! Повернути як було!">
    Використовувати символ абзацу
  </button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
  text-indent: 0;
  display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", (event) => {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.classList.toggle("pilcrow");
  });

  [event.target.innerText, event.target.dataset.toggleText] = [
    event.target.dataset.toggleText,
    event.target.innerText,
  ];
});
```

### Результат

{{EmbedLiveSample('oformlennia-abzatsiv')}}

## Занепокоєння щодо доступності

Розрив вмісту на абзаци допомагає зробити сторінку доступнішою. Читачі з екрана та інші допоміжні технології запропонують своїм користувачам зручні інструменти для переходу до наступного чи попереднього абзацу, даючи їх змогу гортати вміст так, як завдяки пропускам можуть стрибати вмістом візуальні користувачі.

Застосування порожніх елементів `<p>` для додавання простору між абзацами є проблемним для людей, що орієнтуються за допомогою технологій читання з екрана. Читачі з екрана можуть оголосити присутність абзацу, але не вміст всередині нього – бо такого вмісту немає. Це може заплутати й спантеличити особу, що користується читачем з екрана.

Якщо потрібен додатковий простір, слід використовувати властивості {{glossary("CSS")}}, як то {{cssxref("margin")}}, для реалізації ефекту:

```css
p {
  margin-bottom: 2em; /* збільшити пропуск після абзацу */
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
