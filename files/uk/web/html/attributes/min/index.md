---
title: "Атрибут HTML – min"
slug: Web/HTML/Attributes/min
page-type: html-attribute
browser-compat:
  - html.elements.input.min
  - html.elements.meter.min
---

{{HTMLSidebar}}

Атрибут **`min`** (мінімум) визначає мінімальне значення, що є прийнятним і дійсним для поля, що містить цей атрибут. Якщо [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) елемента не досягає значення `min`, то елемент провалює [валідацію](/uk/docs/Learn/Forms/Form_validation). Це значення повинно бути меншим або рівним значенню атрибута `max`.

Частина типів полів мають усталений мінімум. Якщо поле не має усталеного мінімуму і для `min` задано значення, що не може бути перетворено на дійсне число (або мінімальне значення не задано), то поле не має мінімального значення.

Цей атрибут прийнятний для типів полів, серед яких {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}}, а також елемент {{htmlelement('meter')}}.

### Синтаксис

<table class="no-markdown">
  <caption>
    Синтаксис значень
    <code>min</code>
    для різних типів полів
  </caption>
  <thead>
    <tr>
      <th>Тип поля</th>
      <th>Синтаксис</th>
      <th>Приклад</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>yyyy-mm-dd</code></td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" min="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>hh:mm</code></td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddThh:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" min="2019-12-25T19:30"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><a href="/uk/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="number" min="0" step="5" max="100"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/uk/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="range" min="60" step="5" max="100"></code>
      </td>
    </tr>
  </tbody>
</table>

> **Примітка:** Коли дані, введені користувачем, не відповідають заданому мінімальному значенню, то значення поля вважається неприйнятним при валідації обмежень і дає збіг з псевдокласами {{cssxref(':invalid')}} і {{cssxref(':out-of-range')}}.

Дивіться докладніше у [Валідації на клієнтському боці](/uk/docs/Web/HTML/Constraint_validation) та {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}}.

У випадку елемента {{htmlelement('meter')}} атрибут `min` визначає нижню числову межу вимірюваного діапазону. Це значення повинно бути меншим за мінімальне значення (атрибут [`max`](/uk/docs/Web/HTML/Attributes/max)), якщо воно задане. В обох випадках у разі відсутності цього атрибута береться усталене значення 1.

<table class="no-markdown">
  <caption>
    Синтаксис значень
    <code>min</code> для інших елементів
  </caption>
  <thead>
    <tr>
      <th>Тип поля</th>
      <th>Синтаксис</th>
      <th>Приклад</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("meter")}}</td>
      <td><a href="/uk/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;meter id="fuel" min="0" max="100" low="33" high="66"
          optimum="80" value="40"> at 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

### Вплив на step

Значення `min` і `step` визначають те, що є прийнятними значеннями, навіть якщо атрибута `step` немає, адже усталено `step` дорівнює `0`.

Додамо велику червону межу навколо неприйнятних полів:

```css
input:invalid {
  border: solid red 3px;
}
```

Тоді визначмо поле з мінімальним значенням 7.2, пропустивши атрибут `step`, тож усталено його значення дорівнює 1.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Оскільки `step` усталено дорівнює 1, серед прийнятних значень `7.2`, `8.2`, `9.2` і так далі. Значення 8 не є прийнятним. Оскільки додано неприйнятне значення, браузери, що це підтримують, виділять це значення як неприйнятне.

{{EmbedLiveSample("vplyv-na-step",200,55)}}

Якщо явно це не задати, `step` усталено дорівнює 1 для `number` і `range`, а також 1 одиниці вимірювання (секунді, тижню, місяцю, дню) для полів введення дат і часу.

## Занепокоєння щодо доступності

Надавайте користувачам інструкції, щоб їм було легше заповнити форму та користуватися окремими її елементами. Позначайте всі обов'язкові та необов'язкові поля, формати даних та іншу доречну інформацію. При використанні атрибута `min` переконайтеся, що такий мінімум зрозумілий користувачам. Достатньо може бути додавання інструкцій в {{htmlelement('label', 'підписах')}}. Якщо інструкції надаються поза підписами, що дає змогу застосовувати до них гнучкіші позиціювання та дизайн, розгляньте варіант використання [`aria-labelledby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) або [`aria-describedby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`step`](/uk/docs/Web/HTML/Attributes/step)
- [`max`](/uk/docs/Web/HTML/Attributes/max)
- інші атрибути лічильників: [`low`](/uk/docs/Web/HTML/Attributes/low), [`high`](/uk/docs/Web/HTML/Attributes/high), [`optimum`](/uk/docs/Web/HTML/Attributes/optimum)
- [Валідація обмежень](/uk/docs/Web/HTML/Constraint_validation)
- [Валідація форм](/uk/docs/Learn/Forms/Form_validation)
- {{domxref('validityState.rangeUnderflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- Типи {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}}, а також {{htmlelement('meter')}}
