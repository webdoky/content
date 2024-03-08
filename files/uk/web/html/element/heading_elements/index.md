---
title: "<h1>–<h6>: Елементи заголовків розділів HTML"
slug: Web/HTML/Element/Heading_Elements
page-type: html-element
browser-compat: html.elements.h1
---

{{HTMLSidebar}}

Елементи [HTML](/uk/docs/Web/HTML) від **`<h1>`** до **`<h6>`** представляють шість рівнів заголовків розділів. `<h1>` – для розділу найвищого рівня, а `<h6>` – для найнижчого. Усталено всі елементи заголовків утворюють у макеті рамку [блокового рівня](/uk/docs/Glossary/Block-level_content), що починається з нового рядка та займає всю ширину, доступну в контейнерному блоці.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

## Атрибути

Ці елементи приймають лише [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

## Примітки щодо застосування

- Заголовкова інформація може використовуватися користувацькими агентами для автоматичного конструювання змісту документа.
- Не використовуйте заголовкові елементи для зміни розміру тексту. Замість цього використовуйте властивість {{glossary("CSS")}} {{cssxref("font-size")}}.
- Не пропускайте рівні заголовків – завжди почитайте з `<h1>`, далі `<h2>` і так далі.

### Уникайте використання кількох `<h1>` на одній сторінці

Хоч використання кількох елементів `<h1>` на одній сторінці дозволено стандартом HTML (якщо вони не [вкладені](#vkladenist)), це не вважається найкращою практикою. Сторінка, як правило, повинна мати лише один елемент `<h1>`, що описує вміст сторінки (подібно до [елемента `<title>`](/uk/docs/Web/HTML/Element/title) документа).

> **Примітка:** Вкладеність кількох елементів `<h1>` у вкладених [розділових елементах](/uk/docs/Web/HTML/Element#rozdilennia-vmistu) була дозволена в старших версіях стандарту HTML. Проте це ніколи не вважалося найкращою практикою, і тепер – неправильно. Більше про це – в [Немає алгоритму плану документа](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Краще використовувати лише один `<h1>` на сторінку і [вкладати заголовки одне в одного](#vkladenist), не перестрибуючи рівні.

## Приклади

### Всі заголовки

Наступний код показує застосування заголовків усіх рівнів.

```html
<h1>Заголовок рівня 1</h1>
<h2>Заголовок рівня 2</h2>
<h3>Заголовок рівня 3</h3>
<h4>Заголовок рівня 4</h4>
<h5>Заголовок рівня 5</h5>
<h6>Заголовок рівня 6</h6>
```

{{EmbedLiveSample('vsi-zaholovky', '280', '300')}}

### Сторінка-приклад

Наступний код демонструє кілька заголовків з певним вмістом під ними.

```html
<h1>Елементи заголовків</h1>
<h2>Підсумок</h2>
<p>Певний текст отут…</p>

<h2>Приклади</h2>
<h3>Приклад 1</h3>
<p>Певний текст отут…</p>

<h3>Приклад 2</h3>
<p>Певний текст отут…</p>

<h2>Дивіться також</h2>
<p>Певний текст отут…</p>
```

{{EmbedLiveSample('storinka-pryklad', '280', '480')}}

## Занепокоєння щодо доступності

### Орієнтування

Поширений підхід до орієнтування користувачів ПЗ читачів з екрана – швидкий перехід від заголовка до заголовка, щоб з'ясувати вміст сторінки. У зв'язку з цим важливо не пропускати одного чи більше рівнів заголовків. Це створило б плутанину, оскільки особа, що так орієнтується, може загубитися, не розуміючи, де подівся пропущений заголовок.

**Не робіть так:**

```html example-bad
<h1>Заголовок рівня 1</h1>
<h3>Заголовок рівня 3</h3>
<h4>Заголовок рівня 4</h4>
```

**Краще робіть так:**

```html example-good
<h1>Заголовок рівня 1</h1>
<h2>Заголовок рівня 2</h2>
<h3>Заголовок рівня 3</h3>
```

#### Вкладеність

Заголовки можуть бути вкладеними, як підрозділи, щоб відбити організацію вмісту сторінки. Більшість читачів з екрана також можуть утворити впорядкований список всіх заголовків на сторінці, що може допомогти особі швидко з'ясувати ієрархію вмісту:

1. `h1` Жуки

   1. `h2` Етимологія
   2. `h2` Поширення та різноманітність
   3. `h2` Еволюція

      1. `h3` Пізній палеозой
      2. `h3` Юрський період
      3. `h3` Крейдяний період
      4. `h3` Кайнозойська ера

   4. `h2` Зовнішня морфологія

      1. `h3` Голова

         1. `h4` Ротовий апарат

      2. `h3` Торакс

         1. `h4` Передньогруди
         2. `h4` Середньогруди

      3. `h3` Ноги
      4. `h3` Крила
      5. `h3` Черево

Коли заголовки вкладені, то рівні заголовків можуть бути "пропущені" при завершенні підрозділу.

- [Заголовки • Структура сторінки • Підручники з вебдоступності WAI (англ.)](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN розуміння WCAG, пояснення Настанов 1.3](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#nastanovy-1.3-stvoriuite-vmist-shcho-mozhe-buty-predstavlenyi-v-riznyi-sposib)
- [Розуміння критерію успіху 1.3.1 | W3C розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN розуміння WCAG, пояснення Настанов 2.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Operable#nastanovy-2.4-orientovnist-nadavaite-korystuvacham-zmohu-znaity-vmist-i-zrozumity-de-vony-znakhodiatsia)
- [Розуміння критерію успіху 2.4.1 | W3C розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Розуміння критерію успіху 2.4.6 | W3C розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Розуміння критерію успіху 2.4.10 | W3C розуміння WCAG 2.0 (англ.)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Позначення вмісту розділу

Інший поширений підхід до орієнтування користувачів ПЗ читачів з екрана – утворити список [розділення вмісту](/uk/docs/Web/HTML/Element#rozdilennia-vmistu) і використовувати його для з'ясування компонування сторінки.

Розділений вміст можна розмітити за допомогою комбінації атрибутів [`aria-labelledby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) та [`id`](/uk/docs/Web/HTML/Global_attributes#id), які повинні стисло описувати призначення розділу. Такий підхід корисний в тих ситуаціях, коли на одній сторінці більш ніж один розділовий елемент.

#### Приклади розділення вмісту

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Первинна навігація</h2>
    <!-- елементи навігації -->
  </nav>
</header>

<!-- вміст сторінки -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Нижня навігація</h2>
    <!-- елементи навігації -->
  </nav>
</footer>
```

{{EmbedLiveSample('pryklady-rozdilennia-vmistu')}}

В цьому прикладі технологія читача з екрана оголосить, що є два розділи {{HTMLElement("nav")}}, один з яких називається "Первинна навігація", а другий – "Нижня навігація". Якби підписи не були надані, то особа, що використовує ПЗ читача з екрана була б змушена досліджувати вміст кожного елемента `nav`, аби з'ясувати його призначення.

- [Застосування атрибута aria-labelledby](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Підписування областей • Структура сторінки • Підручники з вебдоступності W3C WAI (англ.)](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

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
        >, заголовковий вміст, дотиковий вміст.
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
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Будь-який елемент, що приймає
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist"
          >потоковий вміст</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/heading_role"
          >heading</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> і
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}
