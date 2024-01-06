---
title: "<fieldset> – Елемент набору полів"
slug: Web/HTML/Element/fieldset
page-type: html-element
browser-compat: html.elements.fieldset
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<fieldset>`** (набір полів) використовується для групування кількох контрольних елементів, а також підписів ({{HTMLElement("label")}}) у вебформі.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

Як показує приклад вище, елемент `<fieldset>` групує частину форми HTML, а вкладений в нього елемент {{HTMLElement("legend")}} служить підписом для `<fieldset>`. Останній має кілька атрибутів, найбільш помітними з яких є `form`, який може містити `id` {{HTMLElement("form", "форми")}} на тій же сторінці, що дає змогу зробити елемент `<fieldset>` частиною цієї `<form>`, навіть якщо він не вкладений у неї, і `disabled`, який дає змогу одночасно вимкнути `<fieldset>` і ввесь його вміст.

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `disabled`
  - : Якщо заданий цей булів атрибут, то всі контрольні елементи форми, що є нащадками `<fieldset>`, вимикаються, тобто вони не можуть бути змінені та не будуть подані разом з {{htmlelement("form")}}. Вони не отримують жодних подій браузера, таких як клацання мишею або події, пов'язані з фокусом. Усталено браузери виводять такі контрольні елементи сірим кольором. Зверніть увагу, що елементи форми всередині елемента {{HTMLElement("legend")}} не будуть вимкнені.
- `form`
  - : Цей атрибут приймає значення атрибута [`id`](/uk/docs/Web/HTML/Global_attributes#id) елемента {{HTMLElement("form", "форми")}}, частиною якої повинен стати `<fieldset>`, навіть якщо він не вкладений у неї. Зверніть увагу, що використання цього атрибута заплутує: якщо ви хочете, щоб елементи {{HTMLElement("input")}}, які знаходяться всередині `<fieldset>`, були пов'язані з тією ж формою, потрібно використовувати атрибут `form` безпосередньо на цих елементах. Перевірити, які елементи пов'язані з формою, можна за допомогою JavaScript, використовуючи {{domxref("HTMLFormElement.elements")}}.
- `name`

  - : Ім'я, пов'язане з групою.

    > **Примітка:** Підпис для `<fieldset>` задається першим вкладеним в нього елементом {{HTMLElement("legend")}}.

## Оформлення засобами CSS

Є декілька особливих міркувань щодо оформлення елемента `<fieldset>`.

Значенням його властивості {{cssxref("display")}} усталено є `block`, і це породжує [блоковий контекст форматування](/uk/docs/Web/Guide/CSS/Block_formatting_context). Якщо елемент `<fieldset>` оформлений значенням властивості `display` рядного рівня, то він буде поводитися як `inline-block`, а інакше – як `block`. Усталено навколо вмісту присутня межа `2px` `groove`, а також невеликий внутрішній відступ. Усталено цей елемент має {{cssxref("min-inline-size", "min-inline-size: min-content")}}.

Якщо присутній елемент {{HTMLElement("legend")}}, то він розміщується над межею `block-start`. Елемент {{HTMLElement("legend")}} звужується до розміру свого вмісту, а також утворює контекст форматування. Значенням властивості `display` перетворюється на блокове. (Наприклад, `display: inline` поводиться як `block`.)

З'являється анонімна рамка, що вміщає вміст `<fieldset>`, яка успадковує деякі властивості від `<fieldset>`. Якщо `<fieldset>` оформлений `display: grid` або `display: inline-grid`, то анонімна рамка буде сітковим контекстом форматування. Якщо `<fieldset>` оформлений `display: flex` або `display: inline-flex`, то анонімна рамка буде гнучким контекстом форматування. В іншому випадку вона утворює блоковий контекст форматування.

Можна вільно оформлювати елементи `<fieldset>` і `<legend>` будь-яким чином, який відповідає дизайну сторінки.

## Приклади

### Простий fieldset

Цей приклад демонструє справді простий приклад `<fieldset>`, з `<legend>` і одним контрольним елементом всередині нього.

```html
<form action="#">
  <fieldset>
    <legend>Ви згодні?</legend>
    <input type="checkbox" id="chbx" name="agree" value="Так!" />
    <label for="chbx">Я погоджуюся</label>
  </fieldset>
</form>
```

#### Результат

{{EmbedLiveSample('prostyi-fieldset', '100%', '80')}}

### Вимкнений fieldset

Цей приклад демонструє вимкнений `<fieldset>` з двома контрольними елементами всередині нього. Зверніть увагу, що обидва контрольні елементи вимкнені, тому що вони перебувають всередині вимкненого `<fieldset>`.

```html
<form action="#">
  <fieldset disabled>
    <legend>Вимкнений fieldset для входу</legend>
    <div>
      <label for="name">Ім'я: </label>
      <input type="text" id="name" value="Сергій" />
    </div>
    <div>
      <label for="pwd">Архетип: </label>
      <input type="password" id="pwd" value="Лісовик" />
    </div>
  </fieldset>
</form>
```

#### Результат

{{EmbedLiveSample('vymknenyi-fieldset', '100%', '110')}}

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
        <a href="/uk/docs/Web/HTML/Element/Heading_Elements#rozdilovyi-korin"
          >розділовий корінь</a
        >,
        <a href="/uk/docs/Web/HTML/Content_categories#perelicheni"
          >перелічений</a
        >,
        <a
          href="/uk/docs/Web/HTML/Content_categories#formovi"
          >формовий</a
        >
        елемент, відчутний вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        Необов'язковий елемент {{HTMLElement("legend")}}, за яким слідує потоковий вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Всі елементи, що приймають <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">потоковий вміст</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>,
        <a href="/uk/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/uk/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLFieldSetElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Елемент {{HTMLElement("legend")}}
- Елемент {{HTMLElement("input")}}
- Елемент {{HTMLElement("label")}}
- Елемент {{HTMLElement("form")}}
